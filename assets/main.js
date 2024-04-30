new Vue({
  el: '#app',
  data: {
    width: 280,
    height: 280,
    actionShow: false,
    deviceList: [], //设备列表
    deviceId: window.localStorage.getItem(`deviceId`) || '', //设备id
    isCameraOpen: false,//相机是否打开
    inProgress: false, //是否正在录制
    mediaRecorder: null, //录制器
    mediaStreamTrack: null, //音频或视频流
    blob: null, //录制的视频
    ModelLoading: false,//模型加载中
    detector: null, //识别模型
    rafId: null,
    flipHorizontal: false,//镜像
    faceNullFrequency: 0,
    isFarArr: [], //记录远近
    isOpenMouthArr: [], //张嘴
    isWinkArr: [], //眨眼
    isShakingHisHeadArr: [], //摇头
    actionList: [
      {
        name: "远一些",
        value: 0,
      },
      {
        name: "近一些",
        value: 1,
      },
      {
        name: "张嘴",
        value: 2,
      },
      {
        name: "眨眼",
        value: 3,
      },
      {
        name: "向左转头",
        value: 4,
      },
      {
        name: "向右转头",
        value: 5,
      },
    ],//动作列表
    currentAction: [],//当前动作
    currentRate: 0,
    nextactionTime: 0,
  },
  mounted() {
    const size = (document.documentElement.clientWidth || window.innerWidth) * 0.6;
    this.width = size > 280 ? 280 : size;
    this.height = size > 280 ? 280 : size;

    // 一堆兼容代码
    this.compatible();
    this.openUserMedia();

  },

  methods: {
    isObjEmpty(obj) {
      return (
        obj === undefined ||
        obj === "undefined" ||
        obj == null ||
        obj === "" ||
        obj.length === 0 ||
        (typeof obj === "object" && Object.keys(obj).length === 0)
      );
    },
    async neuAufnehmen() {
      await this.getUserMedia();
      await this.createDetector();
      await this.startMediaRecorder();
    },
    //打开摄像头
    async openUserMedia() {
      const isOpen = await this.getUserMedia();
      if (isOpen.code == "ok") {
        await this.createDetector();
        vant.Toast(`摄像头已打开`);
      } else {
        vant.Dialog.alert({
          title: '失败',
          message: `打开摄像头失败：${isOpen.errMsg}`,
          theme: 'round-button',
        }).then(() => {
          location.replace(`${location.pathname}?s=${new Date().getTime()}`)
        });
        return;
      };
    },
    getUserMedia() {
      return new Promise(async resolve => {
        this.inProgress = false;
        this.isCameraOpen = false;
        this.blob = null;
        const toast = vant.Toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true,
          message: '打开摄像头',
        });
        let mediaOpts = {
          audio: false,
          video: true,
          video: {
            width: this.width,
            height: this.height,
            frameRate: {
              ideal: 100,
              max: 150
            } //最佳帧率
          }
        };
        if (this.isObjEmpty(this.deviceId)) {
          mediaOpts.video.facingMode = "user"; //前置摄像头
          // mediaOpts.video.facingMode = "environment"; //后置摄像头
        } else {
          mediaOpts.video.deviceId = this.deviceId;
        }
        try {
          const stream = await navigator.mediaDevices.getUserMedia(mediaOpts);
          this.mediaStreamTrack = stream;
          //获取设备
          this.deviceList = await this.getDevice() || [];
          let video = this.$refs['video'];
          video.pause();
          video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
          if ("srcObject" in video) {
            video.srcObject = stream
          } else {
            video.src = window.URL && window.URL.createObjectURL(stream) || stream
          };
          video.play();
          video.onplay = () => {
            toast.clear();
            this.isCameraOpen = true;
            resolve({ code: `ok` });
          };
        } catch (error) {
          toast.clear();
          console.error(error);
          resolve({ errMsg: error })
        }
      })
    },
    startMediaRecorder() {
      return new Promise(async resolve => {
        if (typeof MediaRecorder === "function") {
          this.isFarArr = []; //记录远近
          this.isOpenMouthArr = []; //张嘴
          this.isWinkArr = []; //眨眼
          this.isShakingHisHeadArr = []; //摇头
          this.inProgress = false;
          const toast = vant.Toast.loading({
            duration: 0, // 持续展示 toast
            forbidClick: true,
            message: '准备录制',
          });

          this.mediaRecorder = new MediaRecorder(this.mediaStreamTrack, {
            audioBitsPerSecond: 0, //音频码率
            videoBitsPerSecond: 1000000 * 20, //视频码率 (数值越大视频越清晰)
            // mimeType: 'video/webm;codecs=h264' //视频编码格式
          });
          this.mediaRecorder.start();
          // this.mediaRecorder.resume();
          this.mediaRecorder.ondataavailable = e => {
            this.blob = new Blob([e.data], {
              'type': e.currentTarget.mimeType
            });
          }
          this.mediaRecorder.onerror = e => {
            this.inProgress = false;
            console.error(e)
            toast.clear();
            resolve({ errMsg: e });
          }
          this.mediaRecorder.onstart = e => {
            this.inProgress = true;
            console.log('开始', e);
            toast.clear();
            vant.Toast(`开始录制`);
            resolve({ code: `ok` });
          }
          this.mediaRecorder.onresume = e => {
            this.inProgress = true;
            console.log('恢复', e);
            toast.clear();
            resolve({ code: `ok` });
          }
          this.mediaRecorder.onstop = e => {
            this.inProgress = false;
            const saveFile = vant.Toast.loading({
              duration: 0, // 持续展示 toast
              forbidClick: true,
              message: '保存视频中',
            });
            console.log('结束', e);
            const url = window.URL && window.URL.createObjectURL(this.blob);
            vant.Dialog.confirm({
              title: '录制完成',
              message: `
                                <video src="${url}#t=0.01" style="display: block;width: 100%;" webkit-playsinline="true" playsinline="true" controls autoplay></video>
                                <div class="van-cell van-cell--center">
                                    <div class="van-cell__title" style="text-align: left;">
                                        <span>文件大小</span>
                                    </div>
                                    <div class="van-cell__value">
                                        <span>${(this.blob.size / 1024).toFixed(2)}kb</span>
                                    </div>
                                </div>
                            `,
              theme: 'round-button',
              className: 'videoDialog',
              confirmButtonText: '上传'
            })
              .then(() => {
                vant.Toast(`上传成功！`);
              })
            saveFile.clear();
          }

        } else {
          vant.Dialog.alert({
            title: '失败',
            message: `录制失败：浏览器不支持new MediaRecorder方法`,
            theme: 'round-button',
          }).then(() => {
            // location.replace(`${location.pathname}?s=${new Date().getTime()}`)
          });
        }
      })
    },
    async StopMediaRecorder() {
      this.inProgress = false;
      this.isCameraOpen = false;
      const toast = vant.Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: '已完成！保存视频中',
      });
      await this.delay(5); //所有动作结束以后 延迟五秒关闭录制。
      this.mediaStreamTrack.getVideoTracks().forEach(track => {
        track.stop();
      })
      this.mediaRecorder && this.mediaRecorder.stop();
      toast.clear();
    },
    //镜像切换
    triggerToggleFlipHorizontal() {
      this.flipHorizontal = !this.flipHorizontal;
      var video = this.$refs['video'];
      if (this.flipHorizontal) {
        video.style.transform = 'scale(-1, 1)';
      } else {
        video.style.transform = 'scale(1, 1)';
      };
      this.createDetector();
    },
    //随机生成动作
    generateAction() {
      this.$refs.actionSwipe.swipeTo(0);
      this.currentRate = 0;
      this.currentAction = this.actionList.map(e => {
        e.complete = false;
        e.time = 0;
        return e
      }).sort(_ => Math.random() > 0.5 ? -1 : 1);
      console.log(this.currentAction);
    },
    //显示当前动作
    showCurrentAction() {
      let name = '';
      const array = this.currentAction;
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.complete === false) {
          name = element.name;
          break;
        }
      }
      return name;
    },
    //触发动作
    triggerAction(actionValue) {
      if (this.isCameraOpen && this.inProgress) {
        let index = this.currentAction.findIndex(e => !e.complete);
        let findObj = this.currentAction.find(e => !e.complete) || {};

        let deffTime = new Date().getTime() - this.nextactionTime;
        //两个动作间隔3s
        if (findObj.value === actionValue && deffTime >= 3000) {
          this.nextactionTime = new Date().getTime();
          findObj.complete = true;
          this.$set(this.currentAction, index, findObj);
          const num = (this.currentAction.filter(e => e.complete)).length;
          this.currentRate = this.GetPercent(num, this.currentAction.length);
          this.$refs.actionSwipe.next();
        };
        let isComplete = this.currentAction.every(e => e.complete === true);
        if (isComplete) {
          this.StopMediaRecorder();
        }
      }
    },
    //创建识别模型
    async createDetector() {
      return new Promise(async resolve => {
        this.generateAction(); //生成模型
        const toast = vant.Toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true,
          message: '加载模型中（首次加载需要1-2分钟）',
        });
        this.ModelLoading = true;
        try {
          if (!this.isObjEmpty(this.detector)) {
            this.detector.dispose();
          };
          if (!this.isObjEmpty(this.rafId)) {
            window.cancelAnimationFrame(this.rafId);
            this.rafId = null;
          };
          const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
          const detectorConfig = {
            maxFaces: 1, //检测到的最大面部数量
            refineLandmarks: true, //可以完善眼睛和嘴唇周围的地标坐标，并在虹膜周围输出其他地标
            runtime: 'mediapipe',
            solutionPath: 'https://unpkg.com/@mediapipe/face_mesh', //WASM二进制文件和模型文件所在的路径
          };
          this.detector = await faceLandmarksDetection.createDetector(model, detectorConfig);

          toast.clear();
          this.rafId = window.requestAnimationFrame(this.renderPrediction);
          resolve({ code: `ok` });
        } catch (error) {
          toast.clear();
          this.ModelLoading = false;
          // vant.Dialog.alert({
          //     title: '失败',
          //     message: `创建识别模型失败-${error}`,
          //     theme: 'round-button',
          // }).then(() => {
          //     location.replace(`${location.pathname}?s=${new Date().getTime()}`)
          // });
          this.detector = null;
          console.log(error);
          resolve({ errMsg: error });
        }
      })
    },

    //预测
    async renderPrediction() {
      var video = this.$refs['video'];
      var canvas = this.$refs['canvas'];
      var context = canvas.getContext('2d');
      if (this.detector && this.isCameraOpen) {
        try {
          context.clearRect(0, 0, canvas.width, canvas.height);
          const Faces = await this.detector.estimateFaces(video, {
            flipHorizontal: this.flipHorizontal, //镜像
          });

          this.ModelLoading = false;
          if (Faces.length > 0) {
            this.faceNullFrequency = 0;
            this.drawResults(Faces, context);
          } else {
            this.faceNullFrequency++;
            //连续5帧没有检测到人脸提示
            if (this.faceNullFrequency >= 5) {
              vant.Toast(`没有检测到人脸`);
            }
          }
        } catch (error) {
          this.createDetector();
          this.ModelLoading = false;
          vant.Toast(`预测-${error}`);
          console.log(error);
          context.clearRect(0, 0, canvas.width, canvas.height);
        }
        this.rafId = window.requestAnimationFrame(this.renderPrediction);
      } else {
        context.clearRect(0, 0, canvas.width, canvas.height);
        this.rafId = window.requestAnimationFrame(this.renderPrediction);
      }
    },
    //绘制
    drawResults(faces, ctx) {
      faces.forEach(faceItem => {
        ctx.fillStyle = '#1af117';
        (faceItem.keypoints || []).forEach((element, index) => {
          /* arc */
          ctx.beginPath();
          ctx.arc(element.x, element.y, 1, 0, 2 * Math.PI);
          ctx.fill();
          /* arc */
        });
        const faceProportion = this.GetPercent(faceItem.box.width * faceItem.box.height, this.width * this.height);
        this.$refs['faceProportion'].innerHTML = `10-50之间,当前距离:<b>${Math.round(faceProportion)}</b>`;

        if (faceProportion <= 10) {
          vant.Toast(`距离太远`);
          return;
        };
        if (faceProportion >= 50) {
          vant.Toast(`距离太近`);
          return;
        };
        if (this.isCameraOpen && this.inProgress) {
          //靠近&远离
          this.isFarAndNear(faceItem);

          //张嘴
          this.isOpenMouth(faceItem, ctx);

          //眨眼
          this.isWink(faceItem, ctx);

          //摇头
          this.isShakingHisHead(faceItem, ctx);
        }
      });
    },

    //靠近&远离
    isFarAndNear(face) {
      const proportion = this.GetPercent(face.box.width * face.box.height, this.width * this.height);
      this.isFarArr.push(proportion);
      //计算4帧的动态变化
      if (this.isFarArr.length > 4) {
        this.isFarArr.shift();
        if (this.Increment(this.isFarArr) || this.Decrease(this.isFarArr)) {
          const first = this.isFarArr[0];
          const last = this.isFarArr[this.isFarArr.length - 1];
          const diff = this.GetPercent(first - last, first + last);
          if (diff <= -5) {
            // this.log(`【动作】靠近`, `info`);
            this.triggerAction(1);
          };
          if (diff >= 5) {
            // this.log(`【动作】远离`, `primary`);
            this.triggerAction(0);
          };
        }
      };
    },
    //张嘴
    isOpenMouth(face, ctx) {

      const featureIndex1 = [0, 17];
      const featureLocation1 = [];

      const featureIndex2 = [10, 152];
      const featureLocation2 = [];

      (face.keypoints || []).forEach((element, index) => {
        if (featureIndex1.includes(index)) {
          featureLocation1.push([element.x, element.y])
        }
        if (featureIndex2.includes(index)) {
          featureLocation2.push([element.x, element.y])
        }
      });

      // 10,152占0,17的比例
      const proportion = this.GetPercent(this.getDistance(
        featureLocation1[0][0],
        featureLocation1[0][1],
        featureLocation1[1][0],
        featureLocation1[1][1],
      ), this.getDistance(
        featureLocation2[0][0],
        featureLocation2[0][1],
        featureLocation2[1][0],
        featureLocation2[1][1],
      ));
      this.isOpenMouthArr.push(proportion);

      //计算2帧的动态变化
      if (this.isOpenMouthArr.length > 2) {
        this.isOpenMouthArr.shift();
        if (this.Increment(this.isOpenMouthArr)) {
          const first = this.isOpenMouthArr[0];
          const last = this.isOpenMouthArr[this.isOpenMouthArr.length - 1];
          const diff = this.GetPercent(first - last, first + last);
          if (diff <= -5) {
            // this.log(`【动作】张嘴`, `info`);
            this.triggerAction(2);
          };
        }
      }

    },
    //眨眼
    isWink(face, ctx) {

      const leftEye = [159, 144];
      const leftEyeLocation = [];
      const rightEye = [385, 374];
      const rightEyeLocation = [];


      (face.keypoints || []).forEach((element, index) => {
        if (leftEye.includes(index)) {
          leftEyeLocation.push([element.x, element.y]);
        }
        if (rightEye.includes(index)) {
          rightEyeLocation.push([element.x, element.y]);
        }
      });

      let leftProportion = this.getDistance(
        leftEyeLocation[0][0],
        leftEyeLocation[0][1],
        leftEyeLocation[1][0],
        leftEyeLocation[1][1],
      );
      let rightProportion = this.getDistance(
        rightEyeLocation[0][0],
        rightEyeLocation[0][1],
        rightEyeLocation[1][0],
        rightEyeLocation[1][1],
      );



      if (leftProportion <= 5 || rightProportion <= 5) {
        this.isWinkArr.push([leftProportion, rightProportion]);
        //连续4帧一次
        if (this.isWinkArr.length >= 4) {
          // this.log(`【动作】眨眼`, `info`);
          this.triggerAction(3);
          this.isWinkArr = [];
        }
      } else {
        this.isWinkArr = [];
      }
    },
    //isShakingHisHead
    isShakingHisHead(face, ctx) {
      const leftFace = [195, 93];
      const leftFaceLocation = [];
      const rightFace = [195, 323];
      const rightFaceLocation = [];

      (face.keypoints || []).forEach((element, index) => {
        if (leftFace.includes(index)) {
          leftFaceLocation.push([element.x, element.y]);
        }
        if (rightFace.includes(index)) {
          if (rightFaceLocation.length === 0) {
            ctx.moveTo(element.x, element.y)
          } else {
            ctx.lineTo(element.x, element.y)
          }
          rightFaceLocation.push([element.x, element.y]);

        }
      });
      let leftProportion = this.getDistance(
        leftFaceLocation[0][0],
        leftFaceLocation[0][1],
        leftFaceLocation[1][0],
        leftFaceLocation[1][1],
      );
      let rightProportion = this.getDistance(
        rightFaceLocation[0][0],
        rightFaceLocation[0][1],
        rightFaceLocation[1][0],
        rightFaceLocation[1][1],
      );

      const diff = this.GetPercent(leftProportion - rightProportion, leftProportion + rightProportion);
      this.isShakingHisHeadArr.push(diff); //左 -40 右 40

      //计算4帧的动态变化
      if (this.isShakingHisHeadArr.length > 4) {
        this.isShakingHisHeadArr.shift();
        const isL = this.isShakingHisHeadArr.every(e => e >= -60);
        const isR = this.isShakingHisHeadArr.every(e => e <= 60);
        if (isL) {
          // this.log(`【动作】向左转`, `info`);
          this.triggerAction(4);
        }
        if (isR) {
          // this.log(`【动作】向右转`, `info`);
          this.triggerAction(5);
        }
      };
      // console.log(diff);
    },
    actionSelect(value) {
      const { deviceId } = value;
      this.actionShow = false;
      if (!this.isObjEmpty(deviceId) && this.deviceId != deviceId) {
        this.deviceId = deviceId;
        window.localStorage.setItem(`deviceId`, deviceId);
        this.openUserMedia();
      }

    },
    //获取设备信息
    getDevice() {
      return new Promise(async resolve => {
        const toast = vant.Toast.loading({
          duration: 0, // 持续展示 toast
          forbidClick: true,
          message: '获取设备中',
        });
        try {
          const devicesList = await navigator.mediaDevices.enumerateDevices();
          const arr = [];
          (devicesList || []).forEach(e => {
            e.name = e.label || e.deviceId;
            if (e.kind === "videoinput" && e.deviceId && !e.name.includes('麦克风')) {
              e.color = e.deviceId == this.deviceId ? '#1989fa' : '#323233';
              arr.push(e)
            }
          });
          toast.clear();
          console.log(arr);
          resolve(arr);
        } catch (error) {
          toast.clear();
          console.log(error);
          resolve([]);
        };
      })
    },
    // 一堆兼容代码
    compatible() {
      window.URL = (window.URL || window.webkitURL || window.mozURL || window.msURL);
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
      }
      if (navigator.mediaDevices.getUserMedia === undefined) {
        navigator.mediaDevices.getUserMedia = (constraints) => {
          var getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
          if (!getUserMedia) {
            return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
          }
          return new Promise((resolve, reject) => {
            getUserMedia.call(navigator, constraints, resolve, reject);
          });
        }
      }
    },
    //递增
    Increment(array) {
      let is = true;
      for (let i = 0; i < array.length - 1; i++) {
        var n1 = array[i];
        var n2 = array[i + 1];
        if (n1 > n2) {
          is = false;
          break;
        }
      }
      return array.length > 1 ? is : false
    },
    //递减
    Decrease(array = []) {
      let is = true;
      for (let i = 0; i < array.length - 1; i++) {
        var n1 = array[i];
        var n2 = array[i + 1];
        if (n1 < n2) {
          is = false;
          break;
        }
      }
      return array.length > 1 ? is : false
    },

    //距离
    getDistance(x1, y1, x2, y2) {
      return Math.sqrt((x2 -= x1) * x2 + (y2 -= y1) * y2);
    },
    /**
     * @ 占比计算
     * @ num 当前数
     * @ total 总数
     */
    GetPercent(num, total) {
      num = parseFloat(num);
      total = parseFloat(total);
      if (isNaN(num) || isNaN(total)) {
        return "-";
      }
      return total <= 0 ? 0 : (Math.round(num / total * 10000) / 100.00);
    },
    /**
     * 毫秒数的可读格式
     */
    formatDuration(time) {
      let h = parseInt(time / 60 / 60 % 24)
      h = h < 10 ? '0' + h : h
      let m = parseInt(time / 60 % 60)
      m = m < 10 ? '0' + m : m
      let s = parseInt(time % 60)
      s = s < 10 ? '0' + s : s
      // 作为返回值返回
      return h === "00" ? [m, s].join(':') : [h, m, s].join(':')
    },
    //延迟
    delay(m = 1) {
      return new Promise(res => {
        setTimeout(() => {
          res(true);
        }, m * 1000);
      })
    },
  },
});