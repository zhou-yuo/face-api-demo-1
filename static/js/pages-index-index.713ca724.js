(self["webpackChunktensorflow_face"]=self["webpackChunktensorflow_face"]||[]).push([[329],{979:function(e,t,r){var n=r(5633);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals);var i=r(9333).A;i("aa4b7428",n,!0,{sourceMap:!1,shadowMode:!1})},4246:function(e,t,r){"use strict";var n;r.r(t),r.d(t,{default:function(){return g}});var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[r("van-notice-bar",{attrs:{color:"#1989fa",background:"#ecf9ff",scrollable:!1}},[r("van-swipe",{ref:"actionSwipe",staticClass:"notice-swipe",attrs:{vertical:!0,"show-indicators":!1,touchable:!1}},[e._l(e.currentAction,(function(t,n){return r("van-swipe-item",{key:n},[e._v(e._s(t.name))])})),e.isObjEmpty(e.currentAction)?e._e():r("van-swipe-item",[e._v("已完成")])],2)],1),r("div",{staticClass:"Camera-wrapper",style:{width:e.width+7+"px",height:e.height+7+"px"}},[r("div",{staticClass:"canvas-wrapper",style:{width:e.width+"px",height:e.height+"px"}},[r("v-uni-video",{ref:"video",attrs:{width:e.width,height:e.height,"webkit-playsinline":"true",playsinline:"true",preload:!0,autoplay:!0,loop:!0,muted:!0}}),r("v-uni-canvas",{ref:"canvas",attrs:{width:e.width,height:e.height}})],1),r("van-circle",{style:{width:e.width+7+"px",height:e.height+7+"px"},attrs:{rate:0,speed:100,"stroke-width":"20","layer-color":"#ebedf0"},model:{value:e.currentRate,callback:function(t){e.currentRate=t},expression:"currentRate"}})],1),r("div",{staticClass:"btn-operate"},[e.isCameraOpen&&!e.inProgress?r("van-button",{attrs:{type:"info","native-type":"button"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.startMediaRecorder.apply(void 0,arguments)}}},[e._v("开始录制")]):e._e(),e.isCameraOpen&&e.inProgress?r("van-button",{attrs:{type:"danger","native-type":"button",disabled:!0}},[e._v("录制中")]):e._e(),e.isCameraOpen||e.inProgress?e._e():r("van-button",{attrs:{type:"default","native-type":"button"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.neuAufnehmen.apply(void 0,arguments)}}},[e._v("重新录制")])],1),r("div",{staticClass:"prompt-text"},[r("h5",[e._v("视频录制说明")]),r("ol",[r("li",[e._v("请使用前置摄像头。")]),r("li",[e._v("脸部距离屏幕应该控制"),r("span",{ref:"faceProportion"}),e._v("。")]),r("li",[e._v("保证光线充足、脸部完全入镜、脸部无遮挡物。")]),r("li",[e._v("开始录制后请按照提示做出相应动作。")]),r("li",[e._v("如录制不满意可点击“重新录制”。")]),r("li",[e._v("底部按钮：左边切换摄像头、右边切换镜像")])])]),r("div",{staticStyle:{height:"calc(5vh + 70px)"}}),r("div",{staticClass:"Camera-toggle",attrs:{title:"切换摄像头"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.actionShow=!0}}},[r("svg",{staticClass:"icon",attrs:{t:"1658028836694",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5841",width:"200",height:"200"}},[r("path",{attrs:{d:"M868.355 291.969l-95.558-15.726-29.174-72.070c-16.743-41.3-56.578-67.992-101.478-67.992l-260.384 0c-44.855 0-84.709 26.682-101.565 68.042l-29.128 72.019-95.517 15.726c-53.023 8.687-91.504 53.659-91.504 106.941v385.782c0 59.772 49.065 108.406 109.372 108.406h677.035c60.322 0 109.403-48.623 109.403-108.396v-385.792c0-53.282-38.481-98.254-91.499-106.941zM897.356 784.703c0 25.308-21.036 45.897-46.904 45.897h-677.035c-25.848 0-46.874-20.599-46.874-45.908l0-385.782c0-22.512 16.449-41.553 39.132-45.267l112.856-18.584c10.752-1.77 19.805-9.012 23.894-19.113l35.68-88.214c7.192-17.649 24.327-29.052 43.654-29.052h260.384c19.327 0 36.427 11.373 43.558 28.961l35.755 88.315c4.079 10.091 13.132 17.334 23.884 19.103l112.882 18.584c0.010 0 0.020 0 0.020 0.010 22.664 3.702 39.112 22.745 39.112 45.257l0 385.793z","p-id":"5842",fill:"#ffffff"}}),r("path",{attrs:{d:"M436.876 473.188c-17.257 0-31.249 13.987-31.249 31.249v30.486c0 17.262 13.992 31.249 31.249 31.249s31.249-13.987 31.249-31.249v-30.486c0-17.261-13.992-31.249-31.249-31.249z","p-id":"5843",fill:"#ffffff"}}),r("path",{attrs:{d:"M587.024 473.188c-17.262 0-31.249 13.987-31.249 31.249v30.486c0 17.262 13.987 31.249 31.249 31.249s31.249-13.987 31.249-31.249v-30.486c0-17.261-13.987-31.249-31.249-31.249z","p-id":"5844",fill:"#ffffff"}}),r("path",{attrs:{d:"M768.412 403.814c-12.207-12.207-31.981-12.207-44.188 0l-19.261 19.262c-39.232-69.398-114.001-114.87-195.852-114.87-98.691 0-187.276 66.007-215.417 160.518-4.923 16.54 4.496 33.945 21.036 38.868 16.57 4.923 33.945-4.496 38.868-21.026 20.309-68.215 84.257-115.862 155.513-115.862s135.209 47.647 155.523 115.862c0.162 0.541 0.418 1.025 0.605 1.551 0.261 0.734 0.529 1.455 0.847 2.171 0.521 1.178 1.126 2.287 1.775 3.371 0.309 0.516 0.577 1.044 0.919 1.544 1.101 1.619 2.316 3.135 3.678 4.499 0.011 0.011 0.017 0.025 0.030 0.036 0.071 0.071 0.156 0.115 0.226 0.185 1.284 1.258 2.68 2.377 4.151 3.39 0.533 0.368 1.083 0.68 1.632 1.012 1.070 0.645 2.165 1.226 3.304 1.74 0.627 0.281 1.249 0.557 1.891 0.796 1.224 0.457 2.478 0.811 3.757 1.114 0.525 0.123 1.035 0.289 1.564 0.384 1.824 0.333 3.676 0.544 5.561 0.544 1.77 0 3.56-0.208 5.352-0.523 0.558-0.096 1.102-0.238 1.655-0.365 0.643-0.148 1.283-0.234 1.925-0.425 0.45-0.134 0.837-0.371 1.277-0.525 1.057-0.365 2.081-0.793 3.102-1.274 0.917-0.432 1.804-0.889 2.662-1.401 0.837-0.5 1.64-1.048 2.438-1.634 0.927-0.679 1.807-1.391 2.645-2.161 0.338-0.31 0.723-0.531 1.050-0.858l51.736-51.736c12.205-12.197 12.205-31.993-0.002-44.188z","p-id":"5845",fill:"#ffffff"}}),r("path",{attrs:{d:"M709.159 558.289c-16.519-4.923-33.935 4.496-38.858 21.036-20.303 68.215-84.257 115.852-155.513 115.852-71.262 0-135.215-47.647-155.518-115.852-0.135-0.455-0.376-0.845-0.53-1.29-0.363-1.053-0.79-2.076-1.27-3.093-0.432-0.919-0.89-1.805-1.403-2.665-0.498-0.834-1.044-1.633-1.626-2.428-0.685-0.936-1.404-1.824-2.182-2.669-0.306-0.334-0.525-0.715-0.848-1.039-0.328-0.33-0.717-0.553-1.057-0.864-0.847-0.775-1.724-1.489-2.647-2.163-0.781-0.573-1.566-1.112-2.384-1.604-0.879-0.526-1.78-0.989-2.706-1.425-0.919-0.434-1.835-0.84-2.783-1.179-0.939-0.337-1.891-0.602-2.862-0.848-0.976-0.247-1.943-0.468-2.934-0.619-0.992-0.152-1.985-0.231-2.994-0.288-1.029-0.056-2.046-0.080-3.076-0.036-0.953 0.041-1.898 0.142-2.856 0.273-1.129 0.153-2.237 0.363-3.346 0.639-0.454 0.114-0.909 0.125-1.362 0.26-0.444 0.132-0.825 0.366-1.258 0.517-1.073 0.37-2.116 0.804-3.152 1.296-0.898 0.425-1.768 0.873-2.609 1.374-0.852 0.508-1.669 1.064-2.479 1.661-0.918 0.674-1.79 1.379-2.622 2.143-0.34 0.311-0.729 0.535-1.057 0.864l-51.736 51.736c-12.207 12.197-12.207 31.992 0 44.188 6.098 6.103 14.099 9.156 22.094 9.156s15.996-3.051 22.094-9.156l19.26-19.26c39.234 69.4 114.004 114.869 195.853 114.869 98.701 0 187.281-66.007 215.408-160.528 4.92-16.54-4.499-33.935-21.039-38.858z","p-id":"5846",fill:"#ffffff"}})])]),r("van-action-sheet",{attrs:{actions:e.deviceList,description:"请选择设备","cancel-text":"取消","close-on-click-action":!0},on:{select:function(t){arguments[0]=t=e.$handleEvent(t),e.actionSelect.apply(void 0,arguments)}},model:{value:e.actionShow,callback:function(t){e.actionShow=t},expression:"actionShow"}}),r("div",{staticClass:"FlipHorizontal-toggle",class:{FlipHorizontalIng:e.flipHorizontal},attrs:{title:"左右镜像"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.triggerToggleFlipHorizontal.apply(void 0,arguments)}}},[r("svg",{staticClass:"icon",attrs:{t:"1663289810507",viewBox:"0 0 1117 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3494",width:"128",height:"128"}},[r("path",{attrs:{d:"M442.898361 116.049051l2.23404 0.74468L74.840328 1.368349A61.901515 61.901515 0 0 0 0 61.966675v883.283427a61.9946 61.9946 0 0 0 74.840328 60.598326l379.507486-118.124847a77.074368 77.074368 0 0 0 41.981329-68.510549V189.58619a77.539793 77.539793 0 0 0-53.430782-73.537139zM403.244157 792.218386L93.084986 874.412428V132.618179l310.159171 82.380212v577.12691zM1054.466716 0.065159a77.260538 77.260538 0 0 0-12.845728 1.30319L675.796995 115.490542l1.30319-0.18617a77.446708 77.446708 0 0 0-56.968012 74.467988v629.161417c0 29.88028 17.034552 55.850991 41.981329 68.696719l379.228231 118.217932a61.9946 61.9946 0 0 0 75.026498-60.691411V61.966675a61.529175 61.529175 0 0 0-61.901515-61.808431z",fill:"#ffffff",opacity:".801","p-id":"3495"}})])])],1)},a=[],o=r(2775),s=(r(2675),r(9463),r(6412),r(2259),r(8125),r(6280),r(6918),r(4114),r(4490),r(4782),r(4731),r(479),r(4185),r(875),r(287),r(6099),r(7764),r(3500),r(2953),r(5376));function c(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
c=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(e){d=function(e,t,r){return e[t]=r}}function h(e,t,r,n){var a=t&&t.prototype instanceof y?t:y,o=Object.create(a.prototype),s=new S(n||[]);return i(o,"_invoke",{value:O(e,r,s)}),o}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=h;var p="suspendedStart",v="suspendedYield",g="executing",m="completed",w={};function y(){}function b(){}function x(){}var k={};d(k,o,(function(){return this}));var A=Object.getPrototypeOf,M=A&&A(A(C([])));M&&M!==r&&n.call(M,o)&&(k=M);var L=x.prototype=y.prototype=Object.create(k);function P(e){["next","throw","return"].forEach((function(t){d(e,t,(function(e){return this._invoke(t,e)}))}))}function _(e,t){function r(i,a,o,c){var l=f(e[i],e,a);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==(0,s.A)(d)&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,o,c)}),(function(e){r("throw",e,o,c)})):t.resolve(d).then((function(e){u.value=e,o(u)}),(function(e){return r("throw",e,o,c)}))}c(l.arg)}var a;i(this,"_invoke",{value:function(e,n){function i(){return new t((function(t,i){r(e,n,t,i)}))}return a=a?a.then(i,i):i()}})}function O(t,r,n){var i=p;return function(a,o){if(i===g)throw Error("Generator is already running");if(i===m){if("throw"===a)throw o;return{value:e,done:!0}}for(n.method=a,n.arg=o;;){var s=n.delegate;if(s){var c=E(s,n);if(c){if(c===w)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(i===p)throw i=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i=g;var l=f(t,r,n);if("normal"===l.type){if(i=n.done?m:v,l.arg===w)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(i=m,n.method="throw",n.arg=l.arg)}}}function E(t,r){var n=r.method,i=t.iterator[n];if(i===e)return r.delegate=null,"throw"===n&&t.iterator["return"]&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),w;var a=f(i,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,w;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,w):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,w)}function R(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function F(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(R,this),this.reset(!0)}function C(t){if(t||""===t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError((0,s.A)(t)+" is not iterable")}return b.prototype=x,i(L,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:b,configurable:!0}),b.displayName=d(x,u,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,x):(e.__proto__=x,d(e,u,"GeneratorFunction")),e.prototype=Object.create(L),e},t.awrap=function(e){return{__await:e}},P(_.prototype),d(_.prototype,l,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,i,a){void 0===a&&(a=Promise);var o=new _(h(e,r,n,i),a);return t.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},P(L),d(L,u,"Generator"),d(L,o,(function(){return this})),d(L,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=C,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,w):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),w},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),F(r),w}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;F(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),w}},t}function l(e,t,r,n,i,a,o){try{var s=e[a](o),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(n,i)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function o(e){l(a,n,i,o,s,"next",e)}function s(e){l(a,n,i,o,s,"throw",e)}o(void 0)}))}}r(8706),r(3771),r(2008),r(113),r(8980),r(4423),r(2062),r(6910),r(9432),r(8459),r(8940),r(7495),r(1699),r(5440),r(3296),r(7208),r(8408),r(4603),r(7566),r(8721);var d,h={name:"App",data:function(){return{width:280,height:280,actionShow:!1,deviceList:[],deviceId:window.localStorage.getItem("deviceId")||"",isCameraOpen:!1,inProgress:!1,mediaRecorder:null,mediaStreamTrack:null,blob:null,ModelLoading:!1,detector:null,rafId:null,flipHorizontal:!1,faceNullFrequency:0,isFarArr:[],isOpenMouthArr:[],isWinkArr:[],isShakingHisHeadArr:[],actionList:[{name:"远一些",value:0},{name:"近一些",value:1},{name:"张嘴",value:2},{name:"眨眼",value:3},{name:"向左转头",value:4},{name:"向右转头",value:5}],currentAction:[],currentRate:0,nextactionTime:0}},mounted:function(){var e=.6*(document.documentElement.clientWidth||window.innerWidth);this.width=e>280?280:e,this.height=e>280?280:e,this.compatible(),this.openUserMedia()},methods:{isObjEmpty:function(e){return void 0===e||"undefined"===e||null==e||""===e||0===e.length||"object"===(0,s.A)(e)&&0===Object.keys(e).length},neuAufnehmen:function(){var e=this;return u(c().mark((function t(){return c().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getUserMedia();case 2:return t.next=4,e.createDetector();case 4:return t.next=6,e.startMediaRecorder();case 6:case"end":return t.stop()}}),t)})))()},openUserMedia:function(){var e=this;return u(c().mark((function t(){var r;return c().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getUserMedia();case 2:if(r=t.sent,console.log("🚀 ~ openUserMedia ~ isOpen:",r),"ok"!=r.code){t.next=10;break}return t.next=7,e.createDetector();case 7:e.$toast("摄像头已打开"),t.next=12;break;case 10:return e.$dialog.alert({title:"失败",message:"打开摄像头失败：".concat(r.errMsg),theme:"round-button"}).then((function(){location.replace("".concat(location.pathname,"?s=").concat((new Date).getTime()))})),t.abrupt("return");case 12:case"end":return t.stop()}}),t)})))()},getUserMedia:function(){var e=this;return new Promise(function(){var t=u(c().mark((function t(r){var n,i,a,s;return c().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.inProgress=!1,e.isCameraOpen=!1,e.blob=null,n=e.$toast.loading({duration:0,forbidClick:!0,message:"打开摄像头"}),i=(0,o.A)({audio:!1,video:!0},"video",{width:e.width,height:e.height,frameRate:{ideal:100,max:150}}),e.isObjEmpty(e.deviceId)?i.video.facingMode="user":i.video.deviceId=e.deviceId,t.prev=6,t.next=9,navigator.mediaDevices.getUserMedia(i);case 9:return a=t.sent,console.log("🚀 ~ getUserMedia ~ stream:",a),e.mediaStreamTrack=a,t.next=14,e.getDevice();case 14:if(t.t0=t.sent,t.t0){t.next=17;break}t.t0=[];case 17:e.deviceList=t.t0,console.log("🚀 ~ getUserMedia ~ this.deviceList:",e.deviceList),s=e.$refs["video"],s.pause(),s.setAttribute("playsinline",!0),"srcObject"in s?s.srcObject=a:s.src=window.URL&&window.URL.createObjectURL(a)||a,s.play(),console.log("🚀 ~ getUserMedia ~ video",s),s.onplay=function(){n.clear(),e.isCameraOpen=!0,r({code:"ok"})},t.next=33;break;case 28:t.prev=28,t.t1=t["catch"](6),n.clear(),console.error(t.t1),r({errMsg:t.t1});case 33:case"end":return t.stop()}}),t,null,[[6,28]])})));return function(e){return t.apply(this,arguments)}}())},startMediaRecorder:function(){var e=this;return new Promise(function(){var t=u(c().mark((function t(r){var n;return c().wrap((function(t){while(1)switch(t.prev=t.next){case 0:"function"===typeof MediaRecorder?(e.isFarArr=[],e.isOpenMouthArr=[],e.isWinkArr=[],e.isShakingHisHeadArr=[],e.inProgress=!1,n=e.$toast.loading({duration:0,forbidClick:!0,message:"准备录制"}),e.mediaRecorder=new MediaRecorder(e.mediaStreamTrack,{audioBitsPerSecond:0,videoBitsPerSecond:2e7}),e.mediaRecorder.start(),e.mediaRecorder.ondataavailable=function(t){e.blob=new Blob([t.data],{type:t.currentTarget.mimeType})},e.mediaRecorder.onerror=function(t){e.inProgress=!1,console.error(t),n.clear(),r({errMsg:t})},e.mediaRecorder.onstart=function(t){e.inProgress=!0,console.log("开始",t),n.clear(),e.$toast("开始录制"),r({code:"ok"})},e.mediaRecorder.onresume=function(t){e.inProgress=!0,console.log("恢复",t),n.clear(),r({code:"ok"})},e.mediaRecorder.onstop=function(t){e.inProgress=!1;var r=e.$toast.loading({duration:0,forbidClick:!0,message:"保存视频中"});console.log("结束",t);var n=window.URL&&window.URL.createObjectURL(e.blob);e.$dialog.confirm({title:"录制完成",message:'\n                                <video src="'.concat(n,'#t=0.01" style="display: block;width: 100%;" webkit-playsinline="true" playsinline="true" controls autoplay></video>\n                                <div class="van-cell van-cell--center">\n                                    <div class="van-cell__title" style="text-align: left;">\n                                        <span>文件大小</span>\n                                    </div>\n                                    <div class="van-cell__value">\n                                        <span>').concat((e.blob.size/1024).toFixed(2),"kb</span>\n                                    </div>\n                                </div>\n                            "),theme:"round-button",className:"videoDialog",confirmButtonText:"上传"}).then((function(){e.$toast("上传成功！")})),r.clear()}):e.$dialog.alert({title:"失败",message:"录制失败：浏览器不支持new MediaRecorder方法",theme:"round-button"}).then((function(){}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},StopMediaRecorder:function(){var e=this;return u(c().mark((function t(){var r;return c().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.inProgress=!1,e.isCameraOpen=!1,r=e.$toast.loading({duration:0,forbidClick:!0,message:"已完成！保存视频中"}),t.next=5,e.delay(5);case 5:e.mediaStreamTrack.getVideoTracks().forEach((function(e){e.stop()})),e.mediaRecorder&&e.mediaRecorder.stop(),r.clear();case 8:case"end":return t.stop()}}),t)})))()},triggerToggleFlipHorizontal:function(){this.flipHorizontal=!this.flipHorizontal;var e=this.$refs["video"];this.flipHorizontal?e.style.transform="scale(-1, 1)":e.style.transform="scale(1, 1)",this.createDetector()},generateAction:function(){this.$refs.actionSwipe.swipeTo(0),this.currentRate=0,this.currentAction=this.actionList.map((function(e){return e.complete=!1,e.time=0,e})).sort((function(e){return Math.random()>.5?-1:1})),console.log(this.currentAction)},showCurrentAction:function(){for(var e="",t=this.currentAction,r=0;r<t.length;r++){var n=t[r];if(!1===n.complete){e=n.name;break}}return e},triggerAction:function(e){if(this.isCameraOpen&&this.inProgress){var t=this.currentAction.findIndex((function(e){return!e.complete})),r=this.currentAction.find((function(e){return!e.complete}))||{},n=(new Date).getTime()-this.nextactionTime;if(r.value===e&&n>=3e3){this.nextactionTime=(new Date).getTime(),r.complete=!0,this.$set(this.currentAction,t,r);var i=this.currentAction.filter((function(e){return e.complete})).length;this.currentRate=this.GetPercent(i,this.currentAction.length),this.$refs.actionSwipe.next()}var a=this.currentAction.every((function(e){return!0===e.complete}));a&&this.StopMediaRecorder()}},createDetector:function(){var e=this;return u(c().mark((function t(){return c().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=u(c().mark((function t(r){var n,i,a;return c().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.generateAction(),n=e.$toast.loading({duration:0,forbidClick:!0,message:"加载模型中（首次加载需要1-2分钟）"}),e.ModelLoading=!0,t.prev=3,e.isObjEmpty(e.detector)||e.detector.dispose(),e.isObjEmpty(e.rafId)||(window.cancelAnimationFrame(e.rafId),e.rafId=null),i=faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh,a={maxFaces:1,refineLandmarks:!0,runtime:"mediapipe",solutionPath:"https://unpkg.com/@mediapipe/face_mesh"},t.next=10,faceLandmarksDetection.createDetector(i,a);case 10:e.detector=t.sent,n.clear(),e.rafId=window.requestAnimationFrame(e.renderPrediction),r({code:"ok"}),t.next=23;break;case 16:t.prev=16,t.t0=t["catch"](3),n.clear(),e.ModelLoading=!1,e.detector=null,console.log(t.t0),r({errMsg:t.t0});case 23:case"end":return t.stop()}}),t,null,[[3,16]])})));return function(e){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})))()},renderPrediction:function(){var e=this;return u(c().mark((function t(){var r,n,i,a;return c().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.$refs["video"],n=e.$refs["canvas"],i=n.getContext("2d"),!e.detector||!e.isCameraOpen){t.next=23;break}return t.prev=4,i.clearRect(0,0,n.width,n.height),t.next=8,e.detector.estimateFaces(r,{flipHorizontal:e.flipHorizontal});case 8:a=t.sent,e.ModelLoading=!1,a.length>0?(e.faceNullFrequency=0,e.drawResults(a,i)):(e.faceNullFrequency++,e.faceNullFrequency>=5&&e.$toast("没有检测到人脸")),t.next=20;break;case 13:t.prev=13,t.t0=t["catch"](4),e.createDetector(),e.ModelLoading=!1,e.$toast("预测-".concat(t.t0)),console.log(t.t0),i.clearRect(0,0,n.width,n.height);case 20:e.rafId=window.requestAnimationFrame(e.renderPrediction),t.next=25;break;case 23:i.clearRect(0,0,n.width,n.height),e.rafId=window.requestAnimationFrame(e.renderPrediction);case 25:case"end":return t.stop()}}),t,null,[[4,13]])})))()},drawResults:function(e,t){var r=this;e.forEach((function(e){t.fillStyle="#1af117",(e.keypoints||[]).forEach((function(e,r){t.beginPath(),t.arc(e.x,e.y,1,0,2*Math.PI),t.fill()}));var n=r.GetPercent(e.box.width*e.box.height,r.width*r.height);r.$refs["faceProportion"].innerHTML="10-50之间,当前距离:<b>".concat(Math.round(n),"</b>"),n<=10?r.$toast("距离太远"):n>=50?r.$toast("距离太近"):r.isCameraOpen&&r.inProgress&&(r.isFarAndNear(e),r.isOpenMouth(e,t),r.isWink(e,t),r.isShakingHisHead(e,t))}))},isFarAndNear:function(e){var t=this.GetPercent(e.box.width*e.box.height,this.width*this.height);if(this.isFarArr.push(t),this.isFarArr.length>4&&(this.isFarArr.shift(),this.Increment(this.isFarArr)||this.Decrease(this.isFarArr))){var r=this.isFarArr[0],n=this.isFarArr[this.isFarArr.length-1],i=this.GetPercent(r-n,r+n);i<=-5&&this.triggerAction(1),i>=5&&this.triggerAction(0)}},isOpenMouth:function(e,t){var r=[0,17],n=[],i=[10,152],a=[];(e.keypoints||[]).forEach((function(e,t){r.includes(t)&&n.push([e.x,e.y]),i.includes(t)&&a.push([e.x,e.y])}));var o=this.GetPercent(this.getDistance(n[0][0],n[0][1],n[1][0],n[1][1]),this.getDistance(a[0][0],a[0][1],a[1][0],a[1][1]));if(this.isOpenMouthArr.push(o),this.isOpenMouthArr.length>2&&(this.isOpenMouthArr.shift(),this.Increment(this.isOpenMouthArr))){var s=this.isOpenMouthArr[0],c=this.isOpenMouthArr[this.isOpenMouthArr.length-1],l=this.GetPercent(s-c,s+c);l<=-5&&this.triggerAction(2)}},isWink:function(e,t){var r=[159,144],n=[],i=[385,374],a=[];(e.keypoints||[]).forEach((function(e,t){r.includes(t)&&n.push([e.x,e.y]),i.includes(t)&&a.push([e.x,e.y])}));var o=this.getDistance(n[0][0],n[0][1],n[1][0],n[1][1]),s=this.getDistance(a[0][0],a[0][1],a[1][0],a[1][1]);o<=5||s<=5?(this.isWinkArr.push([o,s]),this.isWinkArr.length>=4&&(this.triggerAction(3),this.isWinkArr=[])):this.isWinkArr=[]},isShakingHisHead:function(e,t){var r=[195,93],n=[],i=[195,323],a=[];(e.keypoints||[]).forEach((function(e,o){r.includes(o)&&n.push([e.x,e.y]),i.includes(o)&&(0===a.length?t.moveTo(e.x,e.y):t.lineTo(e.x,e.y),a.push([e.x,e.y]))}));var o=this.getDistance(n[0][0],n[0][1],n[1][0],n[1][1]),s=this.getDistance(a[0][0],a[0][1],a[1][0],a[1][1]),c=this.GetPercent(o-s,o+s);if(this.isShakingHisHeadArr.push(c),this.isShakingHisHeadArr.length>4){this.isShakingHisHeadArr.shift();var l=this.isShakingHisHeadArr.every((function(e){return e>=-60})),u=this.isShakingHisHeadArr.every((function(e){return e<=60}));l&&this.triggerAction(4),u&&this.triggerAction(5)}},actionSelect:function(e){var t=e.deviceId;this.actionShow=!1,this.isObjEmpty(t)||this.deviceId==t||(this.deviceId=t,window.localStorage.setItem("deviceId",t),this.openUserMedia())},getDevice:function(){var e=this;return new Promise(function(){var t=u(c().mark((function t(r){var n,i,a;return c().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$toast.loading({duration:0,forbidClick:!0,message:"获取设备中"}),t.prev=1,t.next=4,navigator.mediaDevices.enumerateDevices();case 4:i=t.sent,a=[],(i||[]).forEach((function(t){t.name=t.label||t.deviceId,"videoinput"===t.kind&&t.deviceId&&!t.name.includes("麦克风")&&(t.color=t.deviceId==e.deviceId?"#1989fa":"#323233",a.push(t))})),n.clear(),console.log(a),r(a),t.next=17;break;case 12:t.prev=12,t.t0=t["catch"](1),n.clear(),console.log(t.t0),r([]);case 17:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}())},compatible:function(){window.URL=window.URL||window.webkitURL||window.mozURL||window.msURL,void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return t?new Promise((function(r,n){t.call(navigator,e,r,n)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))})},Increment:function(e){for(var t=!0,r=0;r<e.length-1;r++){var n=e[r],i=e[r+1];if(n>i){t=!1;break}}return e.length>1&&t},Decrease:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=!0,r=0;r<e.length-1;r++){var n=e[r],i=e[r+1];if(n<i){t=!1;break}}return e.length>1&&t},getDistance:function(e,t,r,n){return Math.sqrt((r-=e)*r+(n-=t)*n)},GetPercent:function(e,t){return e=parseFloat(e),t=parseFloat(t),isNaN(e)||isNaN(t)?"-":t<=0?0:Math.round(e/t*1e4)/100},formatDuration:function(e){var t=parseInt(e/60/60%24);t=t<10?"0"+t:t;var r=parseInt(e/60%60);r=r<10?"0"+r:r;var n=parseInt(e%60);return n=n<10?"0"+n:n,"00"===t?[r,n].join(":"):[t,r,n].join(":")},delay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){setTimeout((function(){t(!0)}),1e3*e)}))}}},f=h,p=(r(979),r(8535)),v=(0,p.A)(f,i,a,!1,null,"df1842e0",null,!1,n,d),g=v.exports},5633:function(e,t,r){"use strict";r.r(t);var n=r(5522),i=r.n(n),a=r(7643),o=r.n(a),s=o()(i());s.push([e.id,"*[data-v-df1842e0]{padding:0;margin:0}\r\n\r\n/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/[data-v-df1842e0]::-webkit-scrollbar{width:7px;height:7px;background-color:#f5f5f5}\r\n\r\n/*定义滚动条轨道 内阴影+圆角*/[data-v-df1842e0]::-webkit-scrollbar-track{box-shadow:inset 0 0 6px rgba(0,0,0,.3);-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);border-radius:10px;background-color:#f5f5f5}\r\n\r\n/*定义滑块 内阴影+圆角*/[data-v-df1842e0]::-webkit-scrollbar-thumb{border-radius:10px;box-shadow:inset 0 0 6px rgba(0,0,0,.1);-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.1);background-color:#c8c8c8}[v-cloak][data-v-df1842e0]{opacity:0!important}#app[data-v-df1842e0]{margin:0 auto;max-width:800px}.Camera-wrapper[data-v-df1842e0]{margin:1em auto;position:relative;overflow:hidden}.van-circle[data-v-df1842e0]{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.canvas-wrapper[data-v-df1842e0]{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0 auto;border-radius:50%;overflow:hidden}.canvas-wrapper > uni-video[data-v-df1842e0]{background:#000;border-radius:50%;overflow:hidden}.canvas-wrapper > uni-canvas[data-v-df1842e0]{position:absolute;top:0;left:0;z-index:1;border-radius:50%;overflow:hidden}.videoDialog .van-dialog__message[data-v-df1842e0]{line-height:1;white-space:unset}.FlipHorizontal-toggle[data-v-df1842e0]{right:10vw}.Camera-toggle[data-v-df1842e0]{left:10vw}.FlipHorizontal-toggle[data-v-df1842e0],\r\n.Camera-toggle[data-v-df1842e0]{position:fixed;bottom:5vh;width:15vw;height:15vw;max-width:50px;max-height:50px;background-color:#000;display:flex;align-items:center;justify-content:center;border-radius:20vw;-webkit-tap-highlight-color:transparent;z-index:10;opacity:.8}.FlipHorizontal-toggle > svg[data-v-df1842e0],\r\n.Camera-toggle > svg[data-v-df1842e0]{width:7vw;max-width:30px;transition:.5s;-webkit-transform:scaleX(1);transform:scaleX(1)}.FlipHorizontalIng > svg[data-v-df1842e0]{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.btn-operate[data-v-df1842e0]{text-align:center;padding:15px}.btn-operate > uni-button[data-v-df1842e0]{min-width:160px;border-radius:5px}.prompt-text[data-v-df1842e0]{padding:15px;color:#000;margin-top:1em}.prompt-text > h5[data-v-df1842e0]{opacity:.9;padding-bottom:1em}.prompt-text > ol[data-v-df1842e0]{opacity:.7;list-style:revert;font-size:13px;line-height:1.7;padding-left:1em}.van-notice-bar[data-v-df1842e0]{width:60%;margin:1em auto 0 auto;border-radius:100px;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-align:center}.van-notice-bar .van-notice-bar__content[data-v-df1842e0],\r\n.van-notice-bar .van-swipe-item[data-v-df1842e0]{width:100%}.notice-swipe[data-v-df1842e0]{height:40px;line-height:40px}",""]),t["default"]=s},3771:function(e,t,r){"use strict";var n=r(6518),i=r(4373),a=r(6469);n({target:"Array",proto:!0},{fill:i}),a("fill")}}]);