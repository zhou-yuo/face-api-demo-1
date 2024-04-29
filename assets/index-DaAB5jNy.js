var np=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var x_=np((w_,tp)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();/**
* @vue/shared v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ts(n,t){const e=new Set(n.split(","));return r=>e.has(r)}const He={},Tr=[],zt=()=>{},rp=()=>!1,Vi=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ns=n=>n.startsWith("onUpdate:"),st=Object.assign,Fs=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},op=Object.prototype.hasOwnProperty,Pe=(n,t)=>op.call(n,t),ye=Array.isArray,Nr=n=>So(n)==="[object Map]",zi=n=>So(n)==="[object Set]",tc=n=>So(n)==="[object Date]",Ie=n=>typeof n=="function",ut=n=>typeof n=="string",En=n=>typeof n=="symbol",Ge=n=>n!==null&&typeof n=="object",Bl=n=>(Ge(n)||Ie(n))&&Ie(n.then)&&Ie(n.catch),Ll=Object.prototype.toString,So=n=>Ll.call(n),ip=n=>So(n).slice(8,-1),Wl=n=>So(n)==="[object Object]",Ps=n=>ut(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ro=Ts(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hi=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},ap=/-(\w)/g,zr=Hi(n=>n.replace(ap,(t,e)=>e?e.toUpperCase():"")),sp=/\B([A-Z])/g,Xr=Hi(n=>n.replace(sp,"-$1").toLowerCase()),Ul=Hi(n=>n.charAt(0).toUpperCase()+n.slice(1)),da=Hi(n=>n?`on${Ul(n)}`:""),qn=(n,t)=>!Object.is(n,t),ai=(n,t)=>{for(let e=0;e<n.length;e++)n[e](t)},Vl=(n,t,e)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:e})},zl=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let nc;const Hl=()=>nc||(nc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ms(n){if(ye(n)){const t={};for(let e=0;e<n.length;e++){const r=n[e],o=ut(r)?fp(r):Ms(r);if(o)for(const i in o)t[i]=o[i]}return t}else if(ut(n)||Ge(n))return n}const up=/;(?![^(]*\))/g,cp=/:([^]+)/,lp=/\/\*[^]*?\*\//g;function fp(n){const t={};return n.replace(lp,"").split(up).forEach(e=>{if(e){const r=e.split(cp);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Os(n){let t="";if(ut(n))t=n;else if(ye(n))for(let e=0;e<n.length;e++){const r=Os(n[e]);r&&(t+=r+" ")}else if(Ge(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const hp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dp=Ts(hp);function Gl(n){return!!n||n===""}function pp(n,t){if(n.length!==t.length)return!1;let e=!0;for(let r=0;e&&r<n.length;r++)e=Gi(n[r],t[r]);return e}function Gi(n,t){if(n===t)return!0;let e=tc(n),r=tc(t);if(e||r)return e&&r?n.getTime()===t.getTime():!1;if(e=En(n),r=En(t),e||r)return n===t;if(e=ye(n),r=ye(t),e||r)return e&&r?pp(n,t):!1;if(e=Ge(n),r=Ge(t),e||r){if(!e||!r)return!1;const o=Object.keys(n).length,i=Object.keys(t).length;if(o!==i)return!1;for(const a in n){const s=n.hasOwnProperty(a),u=t.hasOwnProperty(a);if(s&&!u||!s&&u||!Gi(n[a],t[a]))return!1}}return String(n)===String(t)}function vp(n,t){return n.findIndex(e=>Gi(e,t))}const rc=n=>ut(n)?n:n==null?"":ye(n)||Ge(n)&&(n.toString===Ll||!Ie(n.toString))?JSON.stringify(n,jl,2):String(n),jl=(n,t)=>t&&t.__v_isRef?jl(n,t.value):Nr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[r,o],i)=>(e[pa(r,i)+" =>"]=o,e),{})}:zi(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>pa(e))}:En(t)?pa(t):Ge(t)&&!ye(t)&&!Wl(t)?String(t):t,pa=(n,t="")=>{var e;return En(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jt;class mp{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=jt,!t&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=jt;try{return jt=this,t()}finally{jt=e}}}on(){jt=this}off(){jt=this.parent}stop(t){if(this._active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function gp(n,t=jt){t&&t.active&&t.effects.push(n)}function yp(){return jt}let lr;class Bs{constructor(t,e,r,o){this.fn=t,this.trigger=e,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,gp(this,o)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,$n();for(let t=0;t<this._depsLength;t++){const e=this.deps[t];if(e.computed&&(xp(e.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Yn()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Vn,e=lr;try{return Vn=!0,lr=this,this._runnings++,oc(this),this.fn()}finally{ic(this),this._runnings--,lr=e,Vn=t}}stop(){var t;this.active&&(oc(this),ic(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function xp(n){return n.value}function oc(n){n._trackId++,n._depsLength=0}function ic(n){if(n.deps.length>n._depsLength){for(let t=n._depsLength;t<n.deps.length;t++)ql(n.deps[t],n);n.deps.length=n._depsLength}}function ql(n,t){const e=n.get(t);e!==void 0&&t._trackId!==e&&(n.delete(t),n.size===0&&n.cleanup())}let Vn=!0,Ya=0;const Kl=[];function $n(){Kl.push(Vn),Vn=!1}function Yn(){const n=Kl.pop();Vn=n===void 0?!0:n}function Ls(){Ya++}function Ws(){for(Ya--;!Ya&&Ja.length;)Ja.shift()()}function Xl(n,t,e){if(t.get(n)!==n._trackId){t.set(n,n._trackId);const r=n.deps[n._depsLength];r!==t?(r&&ql(r,n),n.deps[n._depsLength++]=t):n._depsLength++}}const Ja=[];function $l(n,t,e){Ls();for(const r of n.keys()){let o;r._dirtyLevel<t&&(o??(o=n.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(o??(o=n.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Ja.push(r.scheduler)))}Ws()}const Yl=(n,t)=>{const e=new Map;return e.cleanup=n,e.computed=t,e},Qa=new WeakMap,fr=Symbol(""),Za=Symbol("");function St(n,t,e){if(Vn&&lr){let r=Qa.get(n);r||Qa.set(n,r=new Map);let o=r.get(e);o||r.set(e,o=Yl(()=>r.delete(e))),Xl(lr,o)}}function Cn(n,t,e,r,o,i){const a=Qa.get(n);if(!a)return;let s=[];if(t==="clear")s=[...a.values()];else if(e==="length"&&ye(n)){const u=Number(r);a.forEach((c,l)=>{(l==="length"||!En(l)&&l>=u)&&s.push(c)})}else switch(e!==void 0&&s.push(a.get(e)),t){case"add":ye(n)?Ps(e)&&s.push(a.get("length")):(s.push(a.get(fr)),Nr(n)&&s.push(a.get(Za)));break;case"delete":ye(n)||(s.push(a.get(fr)),Nr(n)&&s.push(a.get(Za)));break;case"set":Nr(n)&&s.push(a.get(fr));break}Ls();for(const u of s)u&&$l(u,4);Ws()}const bp=Ts("__proto__,__v_isRef,__isVue"),Jl=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(En)),ac=wp();function wp(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...e){const r=Be(this);for(let i=0,a=this.length;i<a;i++)St(r,"get",i+"");const o=r[t](...e);return o===-1||o===!1?r[t](...e.map(Be)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...e){$n(),Ls();const r=Be(this)[t].apply(this,e);return Ws(),Yn(),r}}),n}function _p(n){En(n)||(n=String(n));const t=Be(this);return St(t,"has",n),t.hasOwnProperty(n)}class Ql{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,r){const o=this._isReadonly,i=this._isShallow;if(e==="__v_isReactive")return!o;if(e==="__v_isReadonly")return o;if(e==="__v_isShallow")return i;if(e==="__v_raw")return r===(o?i?Mp:nf:i?tf:ef).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const a=ye(t);if(!o){if(a&&Pe(ac,e))return Reflect.get(ac,e,r);if(e==="hasOwnProperty")return _p}const s=Reflect.get(t,e,r);return(En(e)?Jl.has(e):bp(e))||(o||St(t,"get",e),i)?s:kt(s)?a&&Ps(e)?s:s.value:Ge(s)?o?rf(s):ho(s):s}}class Zl extends Ql{constructor(t=!1){super(!1,t)}set(t,e,r,o){let i=t[e];if(!this._isShallow){const u=po(i);if(!di(r)&&!po(r)&&(i=Be(i),r=Be(r)),!ye(t)&&kt(i)&&!kt(r))return u?!1:(i.value=r,!0)}const a=ye(t)&&Ps(e)?Number(e)<t.length:Pe(t,e),s=Reflect.set(t,e,r,o);return t===Be(o)&&(a?qn(r,i)&&Cn(t,"set",e,r):Cn(t,"add",e,r)),s}deleteProperty(t,e){const r=Pe(t,e);t[e];const o=Reflect.deleteProperty(t,e);return o&&r&&Cn(t,"delete",e,void 0),o}has(t,e){const r=Reflect.has(t,e);return(!En(e)||!Jl.has(e))&&St(t,"has",e),r}ownKeys(t){return St(t,"iterate",ye(t)?"length":fr),Reflect.ownKeys(t)}}class Cp extends Ql{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Ep=new Zl,Ip=new Cp,Rp=new Zl(!0),Us=n=>n,ji=n=>Reflect.getPrototypeOf(n);function Uo(n,t,e=!1,r=!1){n=n.__v_raw;const o=Be(n),i=Be(t);e||(qn(t,i)&&St(o,"get",t),St(o,"get",i));const{has:a}=ji(o),s=r?Us:e?Hs:vo;if(a.call(o,t))return s(n.get(t));if(a.call(o,i))return s(n.get(i));n!==o&&n.get(t)}function Vo(n,t=!1){const e=this.__v_raw,r=Be(e),o=Be(n);return t||(qn(n,o)&&St(r,"has",n),St(r,"has",o)),n===o?e.has(n):e.has(n)||e.has(o)}function zo(n,t=!1){return n=n.__v_raw,!t&&St(Be(n),"iterate",fr),Reflect.get(n,"size",n)}function sc(n){n=Be(n);const t=Be(this);return ji(t).has.call(t,n)||(t.add(n),Cn(t,"add",n,n)),this}function uc(n,t){t=Be(t);const e=Be(this),{has:r,get:o}=ji(e);let i=r.call(e,n);i||(n=Be(n),i=r.call(e,n));const a=o.call(e,n);return e.set(n,t),i?qn(t,a)&&Cn(e,"set",n,t):Cn(e,"add",n,t),this}function cc(n){const t=Be(this),{has:e,get:r}=ji(t);let o=e.call(t,n);o||(n=Be(n),o=e.call(t,n)),r&&r.call(t,n);const i=t.delete(n);return o&&Cn(t,"delete",n,void 0),i}function lc(){const n=Be(this),t=n.size!==0,e=n.clear();return t&&Cn(n,"clear",void 0,void 0),e}function Ho(n,t){return function(r,o){const i=this,a=i.__v_raw,s=Be(a),u=t?Us:n?Hs:vo;return!n&&St(s,"iterate",fr),a.forEach((c,l)=>r.call(o,u(c),u(l),i))}}function Go(n,t,e){return function(...r){const o=this.__v_raw,i=Be(o),a=Nr(i),s=n==="entries"||n===Symbol.iterator&&a,u=n==="keys"&&a,c=o[n](...r),l=e?Us:t?Hs:vo;return!t&&St(i,"iterate",u?Za:fr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:s?[l(f[0]),l(f[1])]:l(f),done:h}},[Symbol.iterator](){return this}}}}function Fn(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Sp(){const n={get(i){return Uo(this,i)},get size(){return zo(this)},has:Vo,add:sc,set:uc,delete:cc,clear:lc,forEach:Ho(!1,!1)},t={get(i){return Uo(this,i,!1,!0)},get size(){return zo(this)},has:Vo,add:sc,set:uc,delete:cc,clear:lc,forEach:Ho(!1,!0)},e={get(i){return Uo(this,i,!0)},get size(){return zo(this,!0)},has(i){return Vo.call(this,i,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:Ho(!0,!1)},r={get(i){return Uo(this,i,!0,!0)},get size(){return zo(this,!0)},has(i){return Vo.call(this,i,!0)},add:Fn("add"),set:Fn("set"),delete:Fn("delete"),clear:Fn("clear"),forEach:Ho(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Go(i,!1,!1),e[i]=Go(i,!0,!1),t[i]=Go(i,!1,!0),r[i]=Go(i,!0,!0)}),[n,e,t,r]}const[kp,Ap,Dp,Tp]=Sp();function Vs(n,t){const e=t?n?Tp:Dp:n?Ap:kp;return(r,o,i)=>o==="__v_isReactive"?!n:o==="__v_isReadonly"?n:o==="__v_raw"?r:Reflect.get(Pe(e,o)&&o in r?e:r,o,i)}const Np={get:Vs(!1,!1)},Fp={get:Vs(!1,!0)},Pp={get:Vs(!0,!1)},ef=new WeakMap,tf=new WeakMap,nf=new WeakMap,Mp=new WeakMap;function Op(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bp(n){return n.__v_skip||!Object.isExtensible(n)?0:Op(ip(n))}function ho(n){return po(n)?n:zs(n,!1,Ep,Np,ef)}function Lp(n){return zs(n,!1,Rp,Fp,tf)}function rf(n){return zs(n,!0,Ip,Pp,nf)}function zs(n,t,e,r,o){if(!Ge(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const i=o.get(n);if(i)return i;const a=Bp(n);if(a===0)return n;const s=new Proxy(n,a===2?r:e);return o.set(n,s),s}function oo(n){return po(n)?oo(n.__v_raw):!!(n&&n.__v_isReactive)}function po(n){return!!(n&&n.__v_isReadonly)}function di(n){return!!(n&&n.__v_isShallow)}function of(n){return n?!!n.__v_raw:!1}function Be(n){const t=n&&n.__v_raw;return t?Be(t):n}function Wp(n){return Object.isExtensible(n)&&Vl(n,"__v_skip",!0),n}const vo=n=>Ge(n)?ho(n):n,Hs=n=>Ge(n)?rf(n):n;class af{constructor(t,e,r,o){this.getter=t,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Bs(()=>t(this._value),()=>si(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=r}get value(){const t=Be(this);return(!t._cacheable||t.effect.dirty)&&qn(t._value,t._value=t.effect.run())&&si(t,4),sf(t),t.effect._dirtyLevel>=2&&si(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function Up(n,t,e=!1){let r,o;const i=Ie(n);return i?(r=n,o=zt):(r=n.get,o=n.set),new af(r,o,i||!o,e)}function sf(n){var t;Vn&&lr&&(n=Be(n),Xl(lr,(t=n.dep)!=null?t:n.dep=Yl(()=>n.dep=void 0,n instanceof af?n:void 0)))}function si(n,t=4,e){n=Be(n);const r=n.dep;r&&$l(r,t)}function kt(n){return!!(n&&n.__v_isRef===!0)}function va(n){return Vp(n,!1)}function Vp(n,t){return kt(n)?n:new zp(n,t)}class zp{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Be(t),this._value=e?t:vo(t)}get value(){return sf(this),this._value}set value(t){const e=this.__v_isShallow||di(t)||po(t);t=e?t:Be(t),qn(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:vo(t),si(this,4))}}function Hp(n){return kt(n)?n.value:n}const Gp={get:(n,t,e)=>Hp(Reflect.get(n,t,e)),set:(n,t,e,r)=>{const o=n[t];return kt(o)&&!kt(e)?(o.value=e,!0):Reflect.set(n,t,e,r)}};function uf(n){return oo(n)?n:new Proxy(n,Gp)}/**
* @vue/runtime-core v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zn(n,t,e,r){try{return r?n(...r):n()}catch(o){qi(o,t,e)}}function $t(n,t,e,r){if(Ie(n)){const o=zn(n,t,e,r);return o&&Bl(o)&&o.catch(i=>{qi(i,t,e)}),o}if(ye(n)){const o=[];for(let i=0;i<n.length;i++)o.push($t(n[i],t,e,r));return o}}function qi(n,t,e,r=!0){const o=t?t.vnode:null;if(t){let i=t.parent;const a=t.proxy,s=`https://vuejs.org/error-reference/#runtime-${e}`;for(;i;){const c=i.ec;if(c){for(let l=0;l<c.length;l++)if(c[l](n,a,s)===!1)return}i=i.parent}const u=t.appContext.config.errorHandler;if(u){$n(),zn(u,null,10,[n,a,s]),Yn();return}}jp(n,e,o,r)}function jp(n,t,e,r=!0){console.error(n)}let mo=!1,es=!1;const vt=[];let an=0;const Fr=[];let On=null,ir=0;const cf=Promise.resolve();let Gs=null;function lf(n){const t=Gs||cf;return n?t.then(this?n.bind(this):n):t}function qp(n){let t=an+1,e=vt.length;for(;t<e;){const r=t+e>>>1,o=vt[r],i=go(o);i<n||i===n&&o.pre?t=r+1:e=r}return t}function js(n){(!vt.length||!vt.includes(n,mo&&n.allowRecurse?an+1:an))&&(n.id==null?vt.push(n):vt.splice(qp(n.id),0,n),ff())}function ff(){!mo&&!es&&(es=!0,Gs=cf.then(df))}function Kp(n){const t=vt.indexOf(n);t>an&&vt.splice(t,1)}function Xp(n){ye(n)?Fr.push(...n):(!On||!On.includes(n,n.allowRecurse?ir+1:ir))&&Fr.push(n),ff()}function fc(n,t,e=mo?an+1:0){for(;e<vt.length;e++){const r=vt[e];if(r&&r.pre){if(n&&r.id!==n.uid)continue;vt.splice(e,1),e--,r()}}}function hf(n){if(Fr.length){const t=[...new Set(Fr)].sort((e,r)=>go(e)-go(r));if(Fr.length=0,On){On.push(...t);return}for(On=t,ir=0;ir<On.length;ir++)On[ir]();On=null,ir=0}}const go=n=>n.id==null?1/0:n.id,$p=(n,t)=>{const e=go(n)-go(t);if(e===0){if(n.pre&&!t.pre)return-1;if(t.pre&&!n.pre)return 1}return e};function df(n){es=!1,mo=!0,vt.sort($p);try{for(an=0;an<vt.length;an++){const t=vt[an];t&&t.active!==!1&&zn(t,null,14)}}finally{an=0,vt.length=0,hf(),mo=!1,Gs=null,(vt.length||Fr.length)&&df()}}function Yp(n,t,...e){if(n.isUnmounted)return;const r=n.vnode.props||He;let o=e;const i=t.startsWith("update:"),a=i&&t.slice(7);if(a&&a in r){const l=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=r[l]||He;h&&(o=e.map(d=>ut(d)?d.trim():d)),f&&(o=e.map(zl))}let s,u=r[s=da(t)]||r[s=da(zr(t))];!u&&i&&(u=r[s=da(Xr(t))]),u&&$t(u,n,6,o);const c=r[s+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[s])return;n.emitted[s]=!0,$t(c,n,6,o)}}function pf(n,t,e=!1){const r=t.emitsCache,o=r.get(n);if(o!==void 0)return o;const i=n.emits;let a={},s=!1;if(!Ie(n)){const u=c=>{const l=pf(c,t,!0);l&&(s=!0,st(a,l))};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}return!i&&!s?(Ge(n)&&r.set(n,null),null):(ye(i)?i.forEach(u=>a[u]=null):st(a,i),Ge(n)&&r.set(n,a),a)}function Ki(n,t){return!n||!Vi(t)?!1:(t=t.slice(2).replace(/Once$/,""),Pe(n,t[0].toLowerCase()+t.slice(1))||Pe(n,Xr(t))||Pe(n,t))}let Mt=null,vf=null;function pi(n){const t=Mt;return Mt=n,vf=n&&n.type.__scopeId||null,t}function Jp(n,t=Mt,e){if(!t||n._n)return n;const r=(...o)=>{r._d&&wc(-1);const i=pi(t);let a;try{a=n(...o)}finally{pi(i),r._d&&wc(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function ma(n){const{type:t,vnode:e,proxy:r,withProxy:o,propsOptions:[i],slots:a,attrs:s,emit:u,render:c,renderCache:l,props:f,data:h,setupState:d,ctx:p,inheritAttrs:v}=n,m=pi(n);let g,x;try{if(e.shapeFlag&4){const y=o||r,w=y;g=rn(c.call(w,y,l,f,d,h,p)),x=s}else{const y=t;g=rn(y.length>1?y(f,{attrs:s,slots:a,emit:u}):y(f,null)),x=t.props?s:Qp(s)}}catch(y){uo.length=0,qi(y,n,1),g=hr(yo)}let b=g;if(x&&v!==!1){const y=Object.keys(x),{shapeFlag:w}=b;y.length&&w&7&&(i&&y.some(Ns)&&(x=Zp(x,i)),b=Hr(b,x))}return e.dirs&&(b=Hr(b),b.dirs=b.dirs?b.dirs.concat(e.dirs):e.dirs),e.transition&&(b.transition=e.transition),g=b,pi(m),g}const Qp=n=>{let t;for(const e in n)(e==="class"||e==="style"||Vi(e))&&((t||(t={}))[e]=n[e]);return t},Zp=(n,t)=>{const e={};for(const r in n)(!Ns(r)||!(r.slice(9)in t))&&(e[r]=n[r]);return e};function ev(n,t,e){const{props:r,children:o,component:i}=n,{props:a,children:s,patchFlag:u}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&u>=0){if(u&1024)return!0;if(u&16)return r?hc(r,a,c):!!a;if(u&8){const l=t.dynamicProps;for(let f=0;f<l.length;f++){const h=l[f];if(a[h]!==r[h]&&!Ki(c,h))return!0}}}else return(o||s)&&(!s||!s.$stable)?!0:r===a?!1:r?a?hc(r,a,c):!0:!!a;return!1}function hc(n,t,e){const r=Object.keys(t);if(r.length!==Object.keys(n).length)return!0;for(let o=0;o<r.length;o++){const i=r[o];if(t[i]!==n[i]&&!Ki(e,i))return!0}return!1}function tv({vnode:n,parent:t},e){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=t.vnode).el=e,t=t.parent;else break}}const nv=Symbol.for("v-ndc"),rv=n=>n.__isSuspense;function ov(n,t){t&&t.pendingBranch?ye(n)?t.effects.push(...n):t.effects.push(n):Xp(n)}const iv=Symbol.for("v-scx"),av=()=>ci(iv);function sv(n,t){return qs(n,null,t)}const jo={};function io(n,t,e){return qs(n,t,e)}function qs(n,t,{immediate:e,deep:r,flush:o,once:i,onTrack:a,onTrigger:s}=He){if(t&&i){const _=t;t=(...k)=>{_(...k),w()}}const u=wt,c=_=>r===!0?_:sr(_,r===!1?1:void 0);let l,f=!1,h=!1;if(kt(n)?(l=()=>n.value,f=di(n)):oo(n)?(l=()=>c(n),f=!0):ye(n)?(h=!0,f=n.some(_=>oo(_)||di(_)),l=()=>n.map(_=>{if(kt(_))return _.value;if(oo(_))return c(_);if(Ie(_))return zn(_,u,2)})):Ie(n)?t?l=()=>zn(n,u,2):l=()=>(d&&d(),$t(n,u,3,[p])):l=zt,t&&r){const _=l;l=()=>sr(_())}let d,p=_=>{d=b.onStop=()=>{zn(_,u,4),d=b.onStop=void 0}},v;if(Yi)if(p=zt,t?e&&$t(t,u,3,[l(),h?[]:void 0,p]):l(),o==="sync"){const _=av();v=_.__watcherHandles||(_.__watcherHandles=[])}else return zt;let m=h?new Array(n.length).fill(jo):jo;const g=()=>{if(!(!b.active||!b.dirty))if(t){const _=b.run();(r||f||(h?_.some((k,S)=>qn(k,m[S])):qn(_,m)))&&(d&&d(),$t(t,u,3,[_,m===jo?void 0:h&&m[0]===jo?[]:m,p]),m=_)}else b.run()};g.allowRecurse=!!t;let x;o==="sync"?x=g:o==="post"?x=()=>_t(g,u&&u.suspense):(g.pre=!0,u&&(g.id=u.uid),x=()=>js(g));const b=new Bs(l,zt,x),y=yp(),w=()=>{b.stop(),y&&Fs(y.effects,b)};return t?e?g():m=b.run():o==="post"?_t(b.run.bind(b),u&&u.suspense):b.run(),v&&v.push(w),w}function uv(n,t,e){const r=this.proxy,o=ut(n)?n.includes(".")?mf(r,n):()=>r[n]:n.bind(r,r);let i;Ie(t)?i=t:(i=t.handler,e=t);const a=ko(this),s=qs(o,i.bind(r),e);return a(),s}function mf(n,t){const e=t.split(".");return()=>{let r=n;for(let o=0;o<e.length&&r;o++)r=r[e[o]];return r}}function sr(n,t,e=0,r){if(!Ge(n)||n.__v_skip)return n;if(t&&t>0){if(e>=t)return n;e++}if(r=r||new Set,r.has(n))return n;if(r.add(n),kt(n))sr(n.value,t,e,r);else if(ye(n))for(let o=0;o<n.length;o++)sr(n[o],t,e,r);else if(zi(n)||Nr(n))n.forEach(o=>{sr(o,t,e,r)});else if(Wl(n))for(const o in n)sr(n[o],t,e,r);return n}function cv(n,t){if(Mt===null)return n;const e=Ji(Mt)||Mt.proxy,r=n.dirs||(n.dirs=[]);for(let o=0;o<t.length;o++){let[i,a,s,u=He]=t[o];i&&(Ie(i)&&(i={mounted:i,updated:i}),i.deep&&sr(a),r.push({dir:i,instance:e,value:a,oldValue:void 0,arg:s,modifiers:u}))}return n}function er(n,t,e,r){const o=n.dirs,i=t&&t.dirs;for(let a=0;a<o.length;a++){const s=o[a];i&&(s.oldValue=i[a].value);let u=s.dir[r];u&&($n(),$t(u,e,8,[n.el,s,n,t]),Yn())}}/*! #__NO_SIDE_EFFECTS__ */function lv(n,t){return Ie(n)?st({name:n.name},t,{setup:n}):n}const ui=n=>!!n.type.__asyncLoader,gf=n=>n.type.__isKeepAlive;function fv(n,t){yf(n,"a",t)}function hv(n,t){yf(n,"da",t)}function yf(n,t,e=wt){const r=n.__wdc||(n.__wdc=()=>{let o=e;for(;o;){if(o.isDeactivated)return;o=o.parent}return n()});if(Xi(t,r,e),e){let o=e.parent;for(;o&&o.parent;)gf(o.parent.vnode)&&dv(r,t,e,o),o=o.parent}}function dv(n,t,e,r){const o=Xi(t,n,r,!0);Ks(()=>{Fs(r[t],o)},e)}function Xi(n,t,e=wt,r=!1){if(e){const o=e[n]||(e[n]=[]),i=t.__weh||(t.__weh=(...a)=>{if(e.isUnmounted)return;$n();const s=ko(e),u=$t(t,e,n,a);return s(),Yn(),u});return r?o.unshift(i):o.push(i),i}}const In=n=>(t,e=wt)=>(!Yi||n==="sp")&&Xi(n,(...r)=>t(...r),e),pv=In("bm"),ts=In("m"),vv=In("bu"),mv=In("u"),gv=In("bum"),Ks=In("um"),yv=In("sp"),xv=In("rtg"),bv=In("rtc");function wv(n,t=wt){Xi("ec",n,t)}const ns=n=>n?Ff(n)?Ji(n)||n.proxy:ns(n.parent):null,ao=st(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ns(n.parent),$root:n=>ns(n.root),$emit:n=>n.emit,$options:n=>Xs(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,js(n.update)}),$nextTick:n=>n.n||(n.n=lf.bind(n.proxy)),$watch:n=>uv.bind(n)}),ga=(n,t)=>n!==He&&!n.__isScriptSetup&&Pe(n,t),_v={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:r,data:o,props:i,accessCache:a,type:s,appContext:u}=n;let c;if(t[0]!=="$"){const d=a[t];if(d!==void 0)switch(d){case 1:return r[t];case 2:return o[t];case 4:return e[t];case 3:return i[t]}else{if(ga(r,t))return a[t]=1,r[t];if(o!==He&&Pe(o,t))return a[t]=2,o[t];if((c=n.propsOptions[0])&&Pe(c,t))return a[t]=3,i[t];if(e!==He&&Pe(e,t))return a[t]=4,e[t];rs&&(a[t]=0)}}const l=ao[t];let f,h;if(l)return t==="$attrs"&&St(n.attrs,"get",""),l(n);if((f=s.__cssModules)&&(f=f[t]))return f;if(e!==He&&Pe(e,t))return a[t]=4,e[t];if(h=u.config.globalProperties,Pe(h,t))return h[t]},set({_:n},t,e){const{data:r,setupState:o,ctx:i}=n;return ga(o,t)?(o[t]=e,!0):r!==He&&Pe(r,t)?(r[t]=e,!0):Pe(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(i[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:r,appContext:o,propsOptions:i}},a){let s;return!!e[a]||n!==He&&Pe(n,a)||ga(t,a)||(s=i[0])&&Pe(s,a)||Pe(r,a)||Pe(ao,a)||Pe(o.config.globalProperties,a)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Pe(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function dc(n){return ye(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let rs=!0;function Cv(n){const t=Xs(n),e=n.proxy,r=n.ctx;rs=!1,t.beforeCreate&&pc(t.beforeCreate,n,"bc");const{data:o,computed:i,methods:a,watch:s,provide:u,inject:c,created:l,beforeMount:f,mounted:h,beforeUpdate:d,updated:p,activated:v,deactivated:m,beforeDestroy:g,beforeUnmount:x,destroyed:b,unmounted:y,render:w,renderTracked:_,renderTriggered:k,errorCaptured:S,serverPrefetch:R,expose:I,inheritAttrs:P,components:N,directives:V,filters:U}=t;if(c&&Ev(c,r,null),a)for(const W in a){const B=a[W];Ie(B)&&(r[W]=B.bind(e))}if(o){const W=o.call(e,e);Ge(W)&&(n.data=ho(W))}if(rs=!0,i)for(const W in i){const B=i[W],q=Ie(B)?B.bind(e,e):Ie(B.get)?B.get.bind(e,e):zt,$=!Ie(B)&&Ie(B.set)?B.set.bind(e):zt,te=rm({get:q,set:$});Object.defineProperty(r,W,{enumerable:!0,configurable:!0,get:()=>te.value,set:oe=>te.value=oe})}if(s)for(const W in s)xf(s[W],r,e,W);if(u){const W=Ie(u)?u.call(e):u;Reflect.ownKeys(W).forEach(B=>{Dv(B,W[B])})}l&&pc(l,n,"c");function j(W,B){ye(B)?B.forEach(q=>W(q.bind(e))):B&&W(B.bind(e))}if(j(pv,f),j(ts,h),j(vv,d),j(mv,p),j(fv,v),j(hv,m),j(wv,S),j(bv,_),j(xv,k),j(gv,x),j(Ks,y),j(yv,R),ye(I))if(I.length){const W=n.exposed||(n.exposed={});I.forEach(B=>{Object.defineProperty(W,B,{get:()=>e[B],set:q=>e[B]=q})})}else n.exposed||(n.exposed={});w&&n.render===zt&&(n.render=w),P!=null&&(n.inheritAttrs=P),N&&(n.components=N),V&&(n.directives=V)}function Ev(n,t,e=zt){ye(n)&&(n=os(n));for(const r in n){const o=n[r];let i;Ge(o)?"default"in o?i=ci(o.from||r,o.default,!0):i=ci(o.from||r):i=ci(o),kt(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[r]=i}}function pc(n,t,e){$t(ye(n)?n.map(r=>r.bind(t.proxy)):n.bind(t.proxy),t,e)}function xf(n,t,e,r){const o=r.includes(".")?mf(e,r):()=>e[r];if(ut(n)){const i=t[n];Ie(i)&&io(o,i)}else if(Ie(n))io(o,n.bind(e));else if(Ge(n))if(ye(n))n.forEach(i=>xf(i,t,e,r));else{const i=Ie(n.handler)?n.handler.bind(e):t[n.handler];Ie(i)&&io(o,i,n)}}function Xs(n){const t=n.type,{mixins:e,extends:r}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,s=i.get(t);let u;return s?u=s:!o.length&&!e&&!r?u=t:(u={},o.length&&o.forEach(c=>vi(u,c,a,!0)),vi(u,t,a)),Ge(t)&&i.set(t,u),u}function vi(n,t,e,r=!1){const{mixins:o,extends:i}=t;i&&vi(n,i,e,!0),o&&o.forEach(a=>vi(n,a,e,!0));for(const a in t)if(!(r&&a==="expose")){const s=Iv[a]||e&&e[a];n[a]=s?s(n[a],t[a]):t[a]}return n}const Iv={data:vc,props:mc,emits:mc,methods:no,computed:no,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:no,directives:no,watch:Sv,provide:vc,inject:Rv};function vc(n,t){return t?n?function(){return st(Ie(n)?n.call(this,this):n,Ie(t)?t.call(this,this):t)}:t:n}function Rv(n,t){return no(os(n),os(t))}function os(n){if(ye(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function bt(n,t){return n?[...new Set([].concat(n,t))]:t}function no(n,t){return n?st(Object.create(null),n,t):t}function mc(n,t){return n?ye(n)&&ye(t)?[...new Set([...n,...t])]:st(Object.create(null),dc(n),dc(t??{})):t}function Sv(n,t){if(!n)return t;if(!t)return n;const e=st(Object.create(null),n);for(const r in t)e[r]=bt(n[r],t[r]);return e}function bf(){return{app:null,config:{isNativeTag:rp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kv=0;function Av(n,t){return function(r,o=null){Ie(r)||(r=st({},r)),o!=null&&!Ge(o)&&(o=null);const i=bf(),a=new WeakSet;let s=!1;const u=i.app={_uid:kv++,_component:r,_props:o,_container:null,_context:i,_instance:null,version:om,get config(){return i.config},set config(c){},use(c,...l){return a.has(c)||(c&&Ie(c.install)?(a.add(c),c.install(u,...l)):Ie(c)&&(a.add(c),c(u,...l))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,l){return l?(i.components[c]=l,u):i.components[c]},directive(c,l){return l?(i.directives[c]=l,u):i.directives[c]},mount(c,l,f){if(!s){const h=hr(r,o);return h.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),l&&t?t(h,c):n(h,c,f),s=!0,u._container=c,c.__vue_app__=u,Ji(h.component)||h.component.proxy}},unmount(){s&&(n(null,u._container),delete u._container.__vue_app__)},provide(c,l){return i.provides[c]=l,u},runWithContext(c){const l=so;so=u;try{return c()}finally{so=l}}};return u}}let so=null;function Dv(n,t){if(wt){let e=wt.provides;const r=wt.parent&&wt.parent.provides;r===e&&(e=wt.provides=Object.create(r)),e[n]=t}}function ci(n,t,e=!1){const r=wt||Mt;if(r||so){const o=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:so._context.provides;if(o&&n in o)return o[n];if(arguments.length>1)return e&&Ie(t)?t.call(r&&r.proxy):t}}const wf={},_f=()=>Object.create(wf),Cf=n=>Object.getPrototypeOf(n)===wf;function Tv(n,t,e,r=!1){const o={},i=_f();n.propsDefaults=Object.create(null),Ef(n,t,o,i);for(const a in n.propsOptions[0])a in o||(o[a]=void 0);e?n.props=r?o:Lp(o):n.type.props?n.props=o:n.props=i,n.attrs=i}function Nv(n,t,e,r){const{props:o,attrs:i,vnode:{patchFlag:a}}=n,s=Be(o),[u]=n.propsOptions;let c=!1;if((r||a>0)&&!(a&16)){if(a&8){const l=n.vnode.dynamicProps;for(let f=0;f<l.length;f++){let h=l[f];if(Ki(n.emitsOptions,h))continue;const d=t[h];if(u)if(Pe(i,h))d!==i[h]&&(i[h]=d,c=!0);else{const p=zr(h);o[p]=is(u,s,p,d,n,!1)}else d!==i[h]&&(i[h]=d,c=!0)}}}else{Ef(n,t,o,i)&&(c=!0);let l;for(const f in s)(!t||!Pe(t,f)&&((l=Xr(f))===f||!Pe(t,l)))&&(u?e&&(e[f]!==void 0||e[l]!==void 0)&&(o[f]=is(u,s,f,void 0,n,!0)):delete o[f]);if(i!==s)for(const f in i)(!t||!Pe(t,f))&&(delete i[f],c=!0)}c&&Cn(n.attrs,"set","")}function Ef(n,t,e,r){const[o,i]=n.propsOptions;let a=!1,s;if(t)for(let u in t){if(ro(u))continue;const c=t[u];let l;o&&Pe(o,l=zr(u))?!i||!i.includes(l)?e[l]=c:(s||(s={}))[l]=c:Ki(n.emitsOptions,u)||(!(u in r)||c!==r[u])&&(r[u]=c,a=!0)}if(i){const u=Be(e),c=s||He;for(let l=0;l<i.length;l++){const f=i[l];e[f]=is(o,u,f,c[f],n,!Pe(c,f))}}return a}function is(n,t,e,r,o,i){const a=n[e];if(a!=null){const s=Pe(a,"default");if(s&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&Ie(u)){const{propsDefaults:c}=o;if(e in c)r=c[e];else{const l=ko(o);r=c[e]=u.call(null,t),l()}}else r=u}a[0]&&(i&&!s?r=!1:a[1]&&(r===""||r===Xr(e))&&(r=!0))}return r}function If(n,t,e=!1){const r=t.propsCache,o=r.get(n);if(o)return o;const i=n.props,a={},s=[];let u=!1;if(!Ie(n)){const l=f=>{u=!0;const[h,d]=If(f,t,!0);st(a,h),d&&s.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}if(!i&&!u)return Ge(n)&&r.set(n,Tr),Tr;if(ye(i))for(let l=0;l<i.length;l++){const f=zr(i[l]);gc(f)&&(a[f]=He)}else if(i)for(const l in i){const f=zr(l);if(gc(f)){const h=i[l],d=a[f]=ye(h)||Ie(h)?{type:h}:st({},h);if(d){const p=bc(Boolean,d.type),v=bc(String,d.type);d[0]=p>-1,d[1]=v<0||p<v,(p>-1||Pe(d,"default"))&&s.push(f)}}}const c=[a,s];return Ge(n)&&r.set(n,c),c}function gc(n){return n[0]!=="$"&&!ro(n)}function yc(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function xc(n,t){return yc(n)===yc(t)}function bc(n,t){return ye(t)?t.findIndex(e=>xc(e,n)):Ie(t)&&xc(t,n)?0:-1}const Rf=n=>n[0]==="_"||n==="$stable",$s=n=>ye(n)?n.map(rn):[rn(n)],Fv=(n,t,e)=>{if(t._n)return t;const r=Jp((...o)=>$s(t(...o)),e);return r._c=!1,r},Sf=(n,t,e)=>{const r=n._ctx;for(const o in n){if(Rf(o))continue;const i=n[o];if(Ie(i))t[o]=Fv(o,i,r);else if(i!=null){const a=$s(i);t[o]=()=>a}}},kf=(n,t)=>{const e=$s(t);n.slots.default=()=>e},Pv=(n,t)=>{const e=n.slots=_f();if(n.vnode.shapeFlag&32){const r=t._;r?(st(e,t),Vl(e,"_",r)):Sf(t,e)}else t&&kf(n,t)},Mv=(n,t,e)=>{const{vnode:r,slots:o}=n;let i=!0,a=He;if(r.shapeFlag&32){const s=t._;s?e&&s===1?i=!1:(st(o,t),!e&&s===1&&delete o._):(i=!t.$stable,Sf(t,o)),a=t}else t&&(kf(n,t),a={default:1});if(i)for(const s in o)!Rf(s)&&a[s]==null&&delete o[s]};function as(n,t,e,r,o=!1){if(ye(n)){n.forEach((h,d)=>as(h,t&&(ye(t)?t[d]:t),e,r,o));return}if(ui(r)&&!o)return;const i=r.shapeFlag&4?Ji(r.component)||r.component.proxy:r.el,a=o?null:i,{i:s,r:u}=n,c=t&&t.r,l=s.refs===He?s.refs={}:s.refs,f=s.setupState;if(c!=null&&c!==u&&(ut(c)?(l[c]=null,Pe(f,c)&&(f[c]=null)):kt(c)&&(c.value=null)),Ie(u))zn(u,s,12,[a,l]);else{const h=ut(u),d=kt(u);if(h||d){const p=()=>{if(n.f){const v=h?Pe(f,u)?f[u]:l[u]:u.value;o?ye(v)&&Fs(v,i):ye(v)?v.includes(i)||v.push(i):h?(l[u]=[i],Pe(f,u)&&(f[u]=l[u])):(u.value=[i],n.k&&(l[n.k]=u.value))}else h?(l[u]=a,Pe(f,u)&&(f[u]=a)):d&&(u.value=a,n.k&&(l[n.k]=a))};a?(p.id=-1,_t(p,e)):p()}}}const _t=ov;function Ov(n){return Bv(n)}function Bv(n,t){const e=Hl();e.__VUE__=!0;const{insert:r,remove:o,patchProp:i,createElement:a,createText:s,createComment:u,setText:c,setElementText:l,parentNode:f,nextSibling:h,setScopeId:d=zt,insertStaticContent:p}=n,v=(A,T,O,G=null,K=null,J=null,ee=void 0,Q=null,Z=!!T.dynamicChildren)=>{if(A===T)return;A&&!Jr(A,T)&&(G=Re(A),oe(A,K,J,!0),A=null),T.patchFlag===-2&&(Z=!1,T.dynamicChildren=null);const{type:Y,ref:ne,shapeFlag:de}=T;switch(Y){case $i:m(A,T,O,G);break;case yo:g(A,T,O,G);break;case xa:A==null&&x(T,O,G,ee);break;case wn:N(A,T,O,G,K,J,ee,Q,Z);break;default:de&1?w(A,T,O,G,K,J,ee,Q,Z):de&6?V(A,T,O,G,K,J,ee,Q,Z):(de&64||de&128)&&Y.process(A,T,O,G,K,J,ee,Q,Z,Ue)}ne!=null&&K&&as(ne,A&&A.ref,J,T||A,!T)},m=(A,T,O,G)=>{if(A==null)r(T.el=s(T.children),O,G);else{const K=T.el=A.el;T.children!==A.children&&c(K,T.children)}},g=(A,T,O,G)=>{A==null?r(T.el=u(T.children||""),O,G):T.el=A.el},x=(A,T,O,G)=>{[A.el,A.anchor]=p(A.children,T,O,G,A.el,A.anchor)},b=({el:A,anchor:T},O,G)=>{let K;for(;A&&A!==T;)K=h(A),r(A,O,G),A=K;r(T,O,G)},y=({el:A,anchor:T})=>{let O;for(;A&&A!==T;)O=h(A),o(A),A=O;o(T)},w=(A,T,O,G,K,J,ee,Q,Z)=>{T.type==="svg"?ee="svg":T.type==="math"&&(ee="mathml"),A==null?_(T,O,G,K,J,ee,Q,Z):R(A,T,K,J,ee,Q,Z)},_=(A,T,O,G,K,J,ee,Q)=>{let Z,Y;const{props:ne,shapeFlag:de,transition:ae,dirs:ve}=A;if(Z=A.el=a(A.type,J,ne&&ne.is,ne),de&8?l(Z,A.children):de&16&&S(A.children,Z,null,G,K,ya(A,J),ee,Q),ve&&er(A,null,G,"created"),k(Z,A,A.scopeId,ee,G),ne){for(const ke in ne)ke!=="value"&&!ro(ke)&&i(Z,ke,null,ne[ke],J,A.children,G,K,me);"value"in ne&&i(Z,"value",null,ne.value,J),(Y=ne.onVnodeBeforeMount)&&en(Y,G,A)}ve&&er(A,null,G,"beforeMount");const we=Lv(K,ae);we&&ae.beforeEnter(Z),r(Z,T,O),((Y=ne&&ne.onVnodeMounted)||we||ve)&&_t(()=>{Y&&en(Y,G,A),we&&ae.enter(Z),ve&&er(A,null,G,"mounted")},K)},k=(A,T,O,G,K)=>{if(O&&d(A,O),G)for(let J=0;J<G.length;J++)d(A,G[J]);if(K){let J=K.subTree;if(T===J){const ee=K.vnode;k(A,ee,ee.scopeId,ee.slotScopeIds,K.parent)}}},S=(A,T,O,G,K,J,ee,Q,Z=0)=>{for(let Y=Z;Y<A.length;Y++){const ne=A[Y]=Q?Bn(A[Y]):rn(A[Y]);v(null,ne,T,O,G,K,J,ee,Q)}},R=(A,T,O,G,K,J,ee)=>{const Q=T.el=A.el;let{patchFlag:Z,dynamicChildren:Y,dirs:ne}=T;Z|=A.patchFlag&16;const de=A.props||He,ae=T.props||He;let ve;if(O&&tr(O,!1),(ve=ae.onVnodeBeforeUpdate)&&en(ve,O,T,A),ne&&er(T,A,O,"beforeUpdate"),O&&tr(O,!0),Y?I(A.dynamicChildren,Y,Q,O,G,ya(T,K),J):ee||B(A,T,Q,null,O,G,ya(T,K),J,!1),Z>0){if(Z&16)P(Q,T,de,ae,O,G,K);else if(Z&2&&de.class!==ae.class&&i(Q,"class",null,ae.class,K),Z&4&&i(Q,"style",de.style,ae.style,K),Z&8){const we=T.dynamicProps;for(let ke=0;ke<we.length;ke++){const We=we[ke],Ye=de[We],Tt=ae[We];(Tt!==Ye||We==="value")&&i(Q,We,Ye,Tt,K,A.children,O,G,me)}}Z&1&&A.children!==T.children&&l(Q,T.children)}else!ee&&Y==null&&P(Q,T,de,ae,O,G,K);((ve=ae.onVnodeUpdated)||ne)&&_t(()=>{ve&&en(ve,O,T,A),ne&&er(T,A,O,"updated")},G)},I=(A,T,O,G,K,J,ee)=>{for(let Q=0;Q<T.length;Q++){const Z=A[Q],Y=T[Q],ne=Z.el&&(Z.type===wn||!Jr(Z,Y)||Z.shapeFlag&70)?f(Z.el):O;v(Z,Y,ne,null,G,K,J,ee,!0)}},P=(A,T,O,G,K,J,ee)=>{if(O!==G){if(O!==He)for(const Q in O)!ro(Q)&&!(Q in G)&&i(A,Q,O[Q],null,ee,T.children,K,J,me);for(const Q in G){if(ro(Q))continue;const Z=G[Q],Y=O[Q];Z!==Y&&Q!=="value"&&i(A,Q,Y,Z,ee,T.children,K,J,me)}"value"in G&&i(A,"value",O.value,G.value,ee)}},N=(A,T,O,G,K,J,ee,Q,Z)=>{const Y=T.el=A?A.el:s(""),ne=T.anchor=A?A.anchor:s("");let{patchFlag:de,dynamicChildren:ae,slotScopeIds:ve}=T;ve&&(Q=Q?Q.concat(ve):ve),A==null?(r(Y,O,G),r(ne,O,G),S(T.children||[],O,ne,K,J,ee,Q,Z)):de>0&&de&64&&ae&&A.dynamicChildren?(I(A.dynamicChildren,ae,O,K,J,ee,Q),(T.key!=null||K&&T===K.subTree)&&Af(A,T,!0)):B(A,T,O,ne,K,J,ee,Q,Z)},V=(A,T,O,G,K,J,ee,Q,Z)=>{T.slotScopeIds=Q,A==null?T.shapeFlag&512?K.ctx.activate(T,O,G,ee,Z):U(T,O,G,K,J,ee,Z):z(A,T,Z)},U=(A,T,O,G,K,J,ee)=>{const Q=A.component=Jv(A,G,K);if(gf(A)&&(Q.ctx.renderer=Ue),Qv(Q),Q.asyncDep){if(K&&K.registerDep(Q,j),!A.el){const Z=Q.subTree=hr(yo);g(null,Z,T,O)}}else j(Q,A,T,O,K,J,ee)},z=(A,T,O)=>{const G=T.component=A.component;if(ev(A,T,O))if(G.asyncDep&&!G.asyncResolved){W(G,T,O);return}else G.next=T,Kp(G.update),G.effect.dirty=!0,G.update();else T.el=A.el,G.vnode=T},j=(A,T,O,G,K,J,ee)=>{const Q=()=>{if(A.isMounted){let{next:ne,bu:de,u:ae,parent:ve,vnode:we}=A;{const Nn=Df(A);if(Nn){ne&&(ne.el=we.el,W(A,ne,ee)),Nn.asyncDep.then(()=>{A.isUnmounted||Q()});return}}let ke=ne,We;tr(A,!1),ne?(ne.el=we.el,W(A,ne,ee)):ne=we,de&&ai(de),(We=ne.props&&ne.props.onVnodeBeforeUpdate)&&en(We,ve,ne,we),tr(A,!0);const Ye=ma(A),Tt=A.subTree;A.subTree=Ye,v(Tt,Ye,f(Tt.el),Re(Tt),A,K,J),ne.el=Ye.el,ke===null&&tv(A,Ye.el),ae&&_t(ae,K),(We=ne.props&&ne.props.onVnodeUpdated)&&_t(()=>en(We,ve,ne,we),K)}else{let ne;const{el:de,props:ae}=T,{bm:ve,m:we,parent:ke}=A,We=ui(T);if(tr(A,!1),ve&&ai(ve),!We&&(ne=ae&&ae.onVnodeBeforeMount)&&en(ne,ke,T),tr(A,!0),de&&Me){const Ye=()=>{A.subTree=ma(A),Me(de,A.subTree,A,K,null)};We?T.type.__asyncLoader().then(()=>!A.isUnmounted&&Ye()):Ye()}else{const Ye=A.subTree=ma(A);v(null,Ye,O,G,A,K,J),T.el=Ye.el}if(we&&_t(we,K),!We&&(ne=ae&&ae.onVnodeMounted)){const Ye=T;_t(()=>en(ne,ke,Ye),K)}(T.shapeFlag&256||ke&&ui(ke.vnode)&&ke.vnode.shapeFlag&256)&&A.a&&_t(A.a,K),A.isMounted=!0,T=O=G=null}},Z=A.effect=new Bs(Q,zt,()=>js(Y),A.scope),Y=A.update=()=>{Z.dirty&&Z.run()};Y.id=A.uid,tr(A,!0),Y()},W=(A,T,O)=>{T.component=A;const G=A.vnode.props;A.vnode=T,A.next=null,Nv(A,T.props,G,O),Mv(A,T.children,O),$n(),fc(A),Yn()},B=(A,T,O,G,K,J,ee,Q,Z=!1)=>{const Y=A&&A.children,ne=A?A.shapeFlag:0,de=T.children,{patchFlag:ae,shapeFlag:ve}=T;if(ae>0){if(ae&128){$(Y,de,O,G,K,J,ee,Q,Z);return}else if(ae&256){q(Y,de,O,G,K,J,ee,Q,Z);return}}ve&8?(ne&16&&me(Y,K,J),de!==Y&&l(O,de)):ne&16?ve&16?$(Y,de,O,G,K,J,ee,Q,Z):me(Y,K,J,!0):(ne&8&&l(O,""),ve&16&&S(de,O,G,K,J,ee,Q,Z))},q=(A,T,O,G,K,J,ee,Q,Z)=>{A=A||Tr,T=T||Tr;const Y=A.length,ne=T.length,de=Math.min(Y,ne);let ae;for(ae=0;ae<de;ae++){const ve=T[ae]=Z?Bn(T[ae]):rn(T[ae]);v(A[ae],ve,O,null,K,J,ee,Q,Z)}Y>ne?me(A,K,J,!0,!1,de):S(T,O,G,K,J,ee,Q,Z,de)},$=(A,T,O,G,K,J,ee,Q,Z)=>{let Y=0;const ne=T.length;let de=A.length-1,ae=ne-1;for(;Y<=de&&Y<=ae;){const ve=A[Y],we=T[Y]=Z?Bn(T[Y]):rn(T[Y]);if(Jr(ve,we))v(ve,we,O,null,K,J,ee,Q,Z);else break;Y++}for(;Y<=de&&Y<=ae;){const ve=A[de],we=T[ae]=Z?Bn(T[ae]):rn(T[ae]);if(Jr(ve,we))v(ve,we,O,null,K,J,ee,Q,Z);else break;de--,ae--}if(Y>de){if(Y<=ae){const ve=ae+1,we=ve<ne?T[ve].el:G;for(;Y<=ae;)v(null,T[Y]=Z?Bn(T[Y]):rn(T[Y]),O,we,K,J,ee,Q,Z),Y++}}else if(Y>ae)for(;Y<=de;)oe(A[Y],K,J,!0),Y++;else{const ve=Y,we=Y,ke=new Map;for(Y=we;Y<=ae;Y++){const Nt=T[Y]=Z?Bn(T[Y]):rn(T[Y]);Nt.key!=null&&ke.set(Nt.key,Y)}let We,Ye=0;const Tt=ae-we+1;let Nn=!1,wr=0;const yn=new Array(Tt);for(Y=0;Y<Tt;Y++)yn[Y]=0;for(Y=ve;Y<=de;Y++){const Nt=A[Y];if(Ye>=Tt){oe(Nt,K,J,!0);continue}let Zt;if(Nt.key!=null)Zt=ke.get(Nt.key);else for(We=we;We<=ae;We++)if(yn[We-we]===0&&Jr(Nt,T[We])){Zt=We;break}Zt===void 0?oe(Nt,K,J,!0):(yn[Zt-we]=Y+1,Zt>=wr?wr=Zt:Nn=!0,v(Nt,T[Zt],O,null,K,J,ee,Q,Z),Ye++)}const _r=Nn?Wv(yn):Tr;for(We=_r.length-1,Y=Tt-1;Y>=0;Y--){const Nt=we+Y,Zt=T[Nt],ec=Nt+1<ne?T[Nt+1].el:G;yn[Y]===0?v(null,Zt,O,ec,K,J,ee,Q,Z):Nn&&(We<0||Y!==_r[We]?te(Zt,O,ec,2):We--)}}},te=(A,T,O,G,K=null)=>{const{el:J,type:ee,transition:Q,children:Z,shapeFlag:Y}=A;if(Y&6){te(A.component.subTree,T,O,G);return}if(Y&128){A.suspense.move(T,O,G);return}if(Y&64){ee.move(A,T,O,Ue);return}if(ee===wn){r(J,T,O);for(let de=0;de<Z.length;de++)te(Z[de],T,O,G);r(A.anchor,T,O);return}if(ee===xa){b(A,T,O);return}if(G!==2&&Y&1&&Q)if(G===0)Q.beforeEnter(J),r(J,T,O),_t(()=>Q.enter(J),K);else{const{leave:de,delayLeave:ae,afterLeave:ve}=Q,we=()=>r(J,T,O),ke=()=>{de(J,()=>{we(),ve&&ve()})};ae?ae(J,we,ke):ke()}else r(J,T,O)},oe=(A,T,O,G=!1,K=!1)=>{const{type:J,props:ee,ref:Q,children:Z,dynamicChildren:Y,shapeFlag:ne,patchFlag:de,dirs:ae}=A;if(Q!=null&&as(Q,null,O,A,!0),ne&256){T.ctx.deactivate(A);return}const ve=ne&1&&ae,we=!ui(A);let ke;if(we&&(ke=ee&&ee.onVnodeBeforeUnmount)&&en(ke,T,A),ne&6)Ce(A.component,O,G);else{if(ne&128){A.suspense.unmount(O,G);return}ve&&er(A,null,T,"beforeUnmount"),ne&64?A.type.remove(A,T,O,K,Ue,G):Y&&(J!==wn||de>0&&de&64)?me(Y,T,O,!1,!0):(J===wn&&de&384||!K&&ne&16)&&me(Z,T,O),G&&pe(A)}(we&&(ke=ee&&ee.onVnodeUnmounted)||ve)&&_t(()=>{ke&&en(ke,T,A),ve&&er(A,null,T,"unmounted")},O)},pe=A=>{const{type:T,el:O,anchor:G,transition:K}=A;if(T===wn){_e(O,G);return}if(T===xa){y(A);return}const J=()=>{o(O),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(A.shapeFlag&1&&K&&!K.persisted){const{leave:ee,delayLeave:Q}=K,Z=()=>ee(O,J);Q?Q(A.el,J,Z):Z()}else J()},_e=(A,T)=>{let O;for(;A!==T;)O=h(A),o(A),A=O;o(T)},Ce=(A,T,O)=>{const{bum:G,scope:K,update:J,subTree:ee,um:Q}=A;G&&ai(G),K.stop(),J&&(J.active=!1,oe(ee,A,T,O)),Q&&_t(Q,T),_t(()=>{A.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},me=(A,T,O,G=!1,K=!1,J=0)=>{for(let ee=J;ee<A.length;ee++)oe(A[ee],T,O,G,K)},Re=A=>A.shapeFlag&6?Re(A.component.subTree):A.shapeFlag&128?A.suspense.next():h(A.anchor||A.el);let Se=!1;const Te=(A,T,O)=>{A==null?T._vnode&&oe(T._vnode,null,null,!0):v(T._vnode||null,A,T,null,null,null,O),Se||(Se=!0,fc(),hf(),Se=!1),T._vnode=A},Ue={p:v,um:oe,m:te,r:pe,mt:U,mc:S,pc:B,pbc:I,n:Re,o:n};let Ae,Me;return{render:Te,hydrate:Ae,createApp:Av(Te,Ae)}}function ya({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function tr({effect:n,update:t},e){n.allowRecurse=t.allowRecurse=e}function Lv(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Af(n,t,e=!1){const r=n.children,o=t.children;if(ye(r)&&ye(o))for(let i=0;i<r.length;i++){const a=r[i];let s=o[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=o[i]=Bn(o[i]),s.el=a.el),e||Af(a,s)),s.type===$i&&(s.el=a.el)}}function Wv(n){const t=n.slice(),e=[0];let r,o,i,a,s;const u=n.length;for(r=0;r<u;r++){const c=n[r];if(c!==0){if(o=e[e.length-1],n[o]<c){t[r]=o,e.push(r);continue}for(i=0,a=e.length-1;i<a;)s=i+a>>1,n[e[s]]<c?i=s+1:a=s;c<n[e[i]]&&(i>0&&(t[r]=e[i-1]),e[i]=r)}}for(i=e.length,a=e[i-1];i-- >0;)e[i]=a,a=t[a];return e}function Df(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Df(t)}const Uv=n=>n.__isTeleport,wn=Symbol.for("v-fgt"),$i=Symbol.for("v-txt"),yo=Symbol.for("v-cmt"),xa=Symbol.for("v-stc"),uo=[];let Kt=null;function Vv(n=!1){uo.push(Kt=n?null:[])}function zv(){uo.pop(),Kt=uo[uo.length-1]||null}let xo=1;function wc(n){xo+=n}function Hv(n){return n.dynamicChildren=xo>0?Kt||Tr:null,zv(),xo>0&&Kt&&Kt.push(n),n}function Gv(n,t,e,r,o,i){return Hv(ot(n,t,e,r,o,i,!0))}function jv(n){return n?n.__v_isVNode===!0:!1}function Jr(n,t){return n.type===t.type&&n.key===t.key}const Tf=({key:n})=>n??null,li=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?ut(n)||kt(n)||Ie(n)?{i:Mt,r:n,k:t,f:!!e}:n:null);function ot(n,t=null,e=null,r=0,o=null,i=n===wn?0:1,a=!1,s=!1){const u={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Tf(t),ref:t&&li(t),scopeId:vf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Mt};return s?(Ys(u,e),i&128&&n.normalize(u)):e&&(u.shapeFlag|=ut(e)?8:16),xo>0&&!a&&Kt&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&Kt.push(u),u}const hr=qv;function qv(n,t=null,e=null,r=0,o=null,i=!1){if((!n||n===nv)&&(n=yo),jv(n)){const s=Hr(n,t,!0);return e&&Ys(s,e),xo>0&&!i&&Kt&&(s.shapeFlag&6?Kt[Kt.indexOf(n)]=s:Kt.push(s)),s.patchFlag|=-2,s}if(nm(n)&&(n=n.__vccOpts),t){t=Kv(t);let{class:s,style:u}=t;s&&!ut(s)&&(t.class=Os(s)),Ge(u)&&(of(u)&&!ye(u)&&(u=st({},u)),t.style=Ms(u))}const a=ut(n)?1:rv(n)?128:Uv(n)?64:Ge(n)?4:Ie(n)?2:0;return ot(n,t,e,r,o,a,i,!0)}function Kv(n){return n?of(n)||Cf(n)?st({},n):n:null}function Hr(n,t,e=!1){const{props:r,ref:o,patchFlag:i,children:a}=n,s=t?Xv(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:s,key:s&&Tf(s),ref:t&&t.ref?e&&o?ye(o)?o.concat(li(t)):[o,li(t)]:li(t):o,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==wn?i===-1?16:i|16:i,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Hr(n.ssContent),ssFallback:n.ssFallback&&Hr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Nf(n=" ",t=0){return hr($i,null,n,t)}function rn(n){return n==null||typeof n=="boolean"?hr(yo):ye(n)?hr(wn,null,n.slice()):typeof n=="object"?Bn(n):hr($i,null,String(n))}function Bn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Hr(n)}function Ys(n,t){let e=0;const{shapeFlag:r}=n;if(t==null)t=null;else if(ye(t))e=16;else if(typeof t=="object")if(r&65){const o=t.default;o&&(o._c&&(o._d=!1),Ys(n,o()),o._c&&(o._d=!0));return}else{e=32;const o=t._;!o&&!Cf(t)?t._ctx=Mt:o===3&&Mt&&(Mt.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Ie(t)?(t={default:t,_ctx:Mt},e=32):(t=String(t),r&64?(e=16,t=[Nf(t)]):e=8);n.children=t,n.shapeFlag|=e}function Xv(...n){const t={};for(let e=0;e<n.length;e++){const r=n[e];for(const o in r)if(o==="class")t.class!==r.class&&(t.class=Os([t.class,r.class]));else if(o==="style")t.style=Ms([t.style,r.style]);else if(Vi(o)){const i=t[o],a=r[o];a&&i!==a&&!(ye(i)&&i.includes(a))&&(t[o]=i?[].concat(i,a):a)}else o!==""&&(t[o]=r[o])}return t}function en(n,t,e,r=null){$t(n,t,7,[e,r])}const $v=bf();let Yv=0;function Jv(n,t,e){const r=n.type,o=(t?t.appContext:n.appContext)||$v,i={uid:Yv++,vnode:n,type:r,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new mp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:If(r,o),emitsOptions:pf(r,o),emit:null,emitted:null,propsDefaults:He,inheritAttrs:r.inheritAttrs,ctx:He,data:He,props:He,attrs:He,slots:He,refs:He,setupState:He,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Yp.bind(null,i),n.ce&&n.ce(i),i}let wt=null,mi,ss;{const n=Hl(),t=(e,r)=>{let o;return(o=n[e])||(o=n[e]=[]),o.push(r),i=>{o.length>1?o.forEach(a=>a(i)):o[0](i)}};mi=t("__VUE_INSTANCE_SETTERS__",e=>wt=e),ss=t("__VUE_SSR_SETTERS__",e=>Yi=e)}const ko=n=>{const t=wt;return mi(n),n.scope.on(),()=>{n.scope.off(),mi(t)}},_c=()=>{wt&&wt.scope.off(),mi(null)};function Ff(n){return n.vnode.shapeFlag&4}let Yi=!1;function Qv(n,t=!1){t&&ss(t);const{props:e,children:r}=n.vnode,o=Ff(n);Tv(n,e,o,t),Pv(n,r);const i=o?Zv(n,t):void 0;return t&&ss(!1),i}function Zv(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,_v);const{setup:r}=e;if(r){const o=n.setupContext=r.length>1?tm(n):null,i=ko(n);$n();const a=zn(r,n,0,[n.props,o]);if(Yn(),i(),Bl(a)){if(a.then(_c,_c),t)return a.then(s=>{Cc(n,s,t)}).catch(s=>{qi(s,n,0)});n.asyncDep=a}else Cc(n,a,t)}else Pf(n,t)}function Cc(n,t,e){Ie(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Ge(t)&&(n.setupState=uf(t)),Pf(n,e)}let Ec;function Pf(n,t,e){const r=n.type;if(!n.render){if(!t&&Ec&&!r.render){const o=r.template||Xs(n).template;if(o){const{isCustomElement:i,compilerOptions:a}=n.appContext.config,{delimiters:s,compilerOptions:u}=r,c=st(st({isCustomElement:i,delimiters:s},a),u);r.render=Ec(o,c)}}n.render=r.render||zt}{const o=ko(n);$n();try{Cv(n)}finally{Yn(),o()}}}const em={get(n,t){return St(n,"get",""),n[t]}};function tm(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,em),slots:n.slots,emit:n.emit,expose:t}}function Ji(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(uf(Wp(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in ao)return ao[e](n)},has(t,e){return e in t||e in ao}}))}function nm(n){return Ie(n)&&"__vccOpts"in n}const rm=(n,t)=>Up(n,t,Yi),om="3.4.25";/**
* @vue/runtime-dom v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const im="http://www.w3.org/2000/svg",am="http://www.w3.org/1998/Math/MathML",Ln=typeof document<"u"?document:null,Ic=Ln&&Ln.createElement("template"),sm={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,r)=>{const o=t==="svg"?Ln.createElementNS(im,n):t==="mathml"?Ln.createElementNS(am,n):Ln.createElement(n,e?{is:e}:void 0);return n==="select"&&r&&r.multiple!=null&&o.setAttribute("multiple",r.multiple),o},createText:n=>Ln.createTextNode(n),createComment:n=>Ln.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ln.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,r,o,i){const a=e?e.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),e),!(o===i||!(o=o.nextSibling)););else{Ic.innerHTML=r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n;const s=Ic.content;if(r==="svg"||r==="mathml"){const u=s.firstChild;for(;u.firstChild;)s.appendChild(u.firstChild);s.removeChild(u)}t.insertBefore(s,e)}return[a?a.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},um=Symbol("_vtc");function cm(n,t,e){const r=n[um];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Rc=Symbol("_vod"),lm=Symbol("_vsh"),fm=Symbol(""),hm=/(^|;)\s*display\s*:/;function dm(n,t,e){const r=n.style,o=ut(e);let i=!1;if(e&&!o){if(t)if(ut(t))for(const a of t.split(";")){const s=a.slice(0,a.indexOf(":")).trim();e[s]==null&&fi(r,s,"")}else for(const a in t)e[a]==null&&fi(r,a,"");for(const a in e)a==="display"&&(i=!0),fi(r,a,e[a])}else if(o){if(t!==e){const a=r[fm];a&&(e+=";"+a),r.cssText=e,i=hm.test(e)}}else t&&n.removeAttribute("style");Rc in n&&(n[Rc]=i?r.display:"",n[lm]&&(r.display="none"))}const Sc=/\s*!important$/;function fi(n,t,e){if(ye(e))e.forEach(r=>fi(n,t,r));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const r=pm(n,t);Sc.test(e)?n.setProperty(Xr(r),e.replace(Sc,""),"important"):n[r]=e}}const kc=["Webkit","Moz","ms"],ba={};function pm(n,t){const e=ba[t];if(e)return e;let r=zr(t);if(r!=="filter"&&r in n)return ba[t]=r;r=Ul(r);for(let o=0;o<kc.length;o++){const i=kc[o]+r;if(i in n)return ba[t]=i}return t}const Ac="http://www.w3.org/1999/xlink";function vm(n,t,e,r,o){if(r&&t.startsWith("xlink:"))e==null?n.removeAttributeNS(Ac,t.slice(6,t.length)):n.setAttributeNS(Ac,t,e);else{const i=dp(t);e==null||i&&!Gl(e)?n.removeAttribute(t):n.setAttribute(t,i?"":e)}}function mm(n,t,e,r,o,i,a){if(t==="innerHTML"||t==="textContent"){r&&a(r,o,i),n[t]=e??"";return}const s=n.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const c=s==="OPTION"?n.getAttribute("value")||"":n.value,l=e??"";(c!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let u=!1;if(e===""||e==null){const c=typeof n[t];c==="boolean"?e=Gl(e):e==null&&c==="string"?(e="",u=!0):c==="number"&&(e=0,u=!0)}try{n[t]=e}catch{}u&&n.removeAttribute(t)}function Mf(n,t,e,r){n.addEventListener(t,e,r)}function gm(n,t,e,r){n.removeEventListener(t,e,r)}const Dc=Symbol("_vei");function ym(n,t,e,r,o=null){const i=n[Dc]||(n[Dc]={}),a=i[t];if(r&&a)a.value=r;else{const[s,u]=xm(t);if(r){const c=i[t]=_m(r,o);Mf(n,s,c,u)}else a&&(gm(n,s,a,u),i[t]=void 0)}}const Tc=/(?:Once|Passive|Capture)$/;function xm(n){let t;if(Tc.test(n)){t={};let r;for(;r=n.match(Tc);)n=n.slice(0,n.length-r[0].length),t[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Xr(n.slice(2)),t]}let wa=0;const bm=Promise.resolve(),wm=()=>wa||(bm.then(()=>wa=0),wa=Date.now());function _m(n,t){const e=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=e.attached)return;$t(Cm(r,e.value),t,5,[r])};return e.value=n,e.attached=wm(),e}function Cm(n,t){if(ye(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(r=>o=>!o._stopped&&r&&r(o))}else return t}const Nc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Em=(n,t,e,r,o,i,a,s,u)=>{const c=o==="svg";t==="class"?cm(n,r,c):t==="style"?dm(n,e,r):Vi(t)?Ns(t)||ym(n,t,e,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Im(n,t,r,c))?mm(n,t,r,i,a,s,u):(t==="true-value"?n._trueValue=r:t==="false-value"&&(n._falseValue=r),vm(n,t,r,c))};function Im(n,t,e,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in n&&Nc(t)&&Ie(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=n.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Nc(t)&&ut(e)?!1:t in n}const Fc=n=>{const t=n.props["onUpdate:modelValue"]||!1;return ye(t)?e=>ai(t,e):t},_a=Symbol("_assign"),Rm={deep:!0,created(n,{value:t,modifiers:{number:e}},r){const o=zi(t);Mf(n,"change",()=>{const i=Array.prototype.filter.call(n.options,a=>a.selected).map(a=>e?zl(gi(a)):gi(a));n[_a](n.multiple?o?new Set(i):i:i[0]),n._assigning=!0,lf(()=>{n._assigning=!1})}),n[_a]=Fc(r)},mounted(n,{value:t,modifiers:{number:e}}){Pc(n,t)},beforeUpdate(n,t,e){n[_a]=Fc(e)},updated(n,{value:t,modifiers:{number:e}}){n._assigning||Pc(n,t)}};function Pc(n,t,e){const r=n.multiple,o=ye(t);if(!(r&&!o&&!zi(t))){for(let i=0,a=n.options.length;i<a;i++){const s=n.options[i],u=gi(s);if(r)if(o){const c=typeof u;c==="string"||c==="number"?s.selected=t.some(l=>String(l)===String(u)):s.selected=vp(t,u)>-1}else s.selected=t.has(u);else if(Gi(gi(s),t)){n.selectedIndex!==i&&(n.selectedIndex=i);return}}!r&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function gi(n){return"_value"in n?n._value:n.value}const Sm=st({patchProp:Em},sm);let Mc;function km(){return Mc||(Mc=Ov(Sm))}const Am=(...n)=>{const t=km().createApp(...n),{mount:e}=t;return t.mount=r=>{const o=Tm(r);if(!o)return;const i=t._component;!Ie(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.innerHTML="";const a=e(o,!1,Dm(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},t};function Dm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Tm(n){return ut(n)?document.querySelector(n):n}function Of(n){return new Promise(t=>setTimeout(t,n))}function Nm(n,t){return new Promise(e=>{const r=setInterval(()=>{if(n===0)return clearInterval(r),e(!0),!1;t&&t(n),n--},1e3)})}function Fm(n,t){const e=n.slice(),r=[];let o=e.length;const i=[];if(t>o)return null;for(;t--;){const a=Math.floor(Math.random()*o);r[t]=e[a in i?i[a]:a],i[a]=--o in i?i[o]:o}return r}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Bf=function(n,t){return(Bf=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)r.hasOwnProperty(o)&&(e[o]=r[o])})(n,t)};function Jt(n,t){function e(){this.constructor=n}Bf(n,t),n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function se(n,t,e,r){return new(e||(e=Promise))(function(o,i){function a(c){try{u(r.next(c))}catch(l){i(l)}}function s(c){try{u(r.throw(c))}catch(l){i(l)}}function u(c){c.done?o(c.value):new e(function(l){l(c.value)}).then(a,s)}u((r=r.apply(n,[])).next())})}function ue(n,t){var e,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(u){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,r=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){a=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(l[0]===6&&a.label<o[1]){a.label=o[1],o=l;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(l);break}o[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(n,a)}catch(f){l=[6,f],r=0}finally{e=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var Pm=function(){function n(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return n.prototype.setPlatform=function(t,e){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=t,this.platform=e},n.prototype.registerFlag=function(t,e,r){if(this.flagRegistry[t]={evaluationFn:e,setHook:r},this.urlFlags[t]!=null){var o=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+o+"."),this.set(t,o)}},n.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},n.prototype.getNumber=function(t){return this.get(t)},n.prototype.getBool=function(t){return this.get(t)},n.prototype.getFlags=function(){return this.flags},Object.defineProperty(n.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),n.prototype.set=function(t,e){if(this.flagRegistry[t]==null)throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)},n.prototype.evaluateFlag=function(t){if(this.flagRegistry[t]==null)throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},n.prototype.setFlags=function(t){this.flags=Object.assign({},t)},n.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},n.prototype.populateURLFlags=function(){var t=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var e,r,o=(e=this.global.location.search,r={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(i){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return Mm(r,a[0],a[1]),a.join("=")}),r);"tfjsflags"in o&&o.tfjsflags.split(",").forEach(function(i){var a=i.split(":"),s=a[0],u=a[1];t.urlFlags[s]=function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")}(s,u)})}},n}();function Mm(n,t,e){n[decodeURIComponent(t)]=decodeURIComponent(e||"")}function H(){return Lf}var Lf=null,yi=new Map,us=new Map;function Wf(n,t){var e=Vf(n,t);return yi.get(e)}function Om(n){return us.get(n)}function Oc(n){for(var t=yi.entries(),e=[];;){var r=t.next(),o=r.done,i=r.value;if(o)break;var a=i[0],s=i[1];a.split("_")[0]===n&&e.push(s)}return e}function Uf(n){var t=n.kernelName,e=n.backendName,r=Vf(t,e);if(yi.has(r))throw new Error("The kernel '"+t+"' for backend '"+e+"' is already registered");yi.set(r,n)}function Bm(n){var t=n.kernelName;us.has(t)&&console.warn("Overriding the gradient for '"+t+"'"),us.set(t,n)}function Vf(n,t){return t+"_"+n}function cs(n,t,e){return Math.max(n,Math.min(t,e))}function zf(n){return n%2==0?n:n+1}function Lm(n){for(var t=0,e=0;e<n.length;e++)t+=n[e];return t}function E(n,t){if(!n)throw new Error(typeof t=="string"?t:t())}function Le(n,t,e){e===void 0&&(e=""),E(at(n,t),function(){return e+" Shapes "+n+" and "+t+" must match"})}function $r(n){E(n!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function Gr(n,t,e){if(t===void 0&&(t=[]),e===void 0&&(e=!1),t==null&&(t=[]),Array.isArray(n)||ln(n)&&!e)for(var r=0;r<n.length;++r)Gr(n[r],t,e);else t.push(n);return t}function ce(n){if(n.length===0)return 1;for(var t=n[0],e=1;e<n.length;e++)t*=n[e];return t}function at(n,t){if(n===t)return!0;if(n==null||t==null||n.length!==t.length)return!1;for(var e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0}function $e(n){return n%1==0}function Wm(n){if(Math.tanh!=null)return Math.tanh(n);if(n===1/0)return 1;if(n===-1/0)return-1;var t=Math.exp(2*n);return(t-1)/(t+1)}function ls(n){var t=Math.ceil(Math.sqrt(n));return[t,Math.ceil(n/t)]}function Pr(n,t){return t<=n.length?n:n+" ".repeat(t-n.length)}function Bc(n,t,e){return t===void 0&&(t=function(r){return 0}),new Promise(function(r,o){var i=0,a=function(){if(n())r();else{i++;var s=t(i);e!=null&&i>=e?o():setTimeout(a,s)}};a()})}function Um(n,t){for(var e=1,r=-1,o=0;o<n.length;++o)if(n[o]>=0)e*=n[o];else if(n[o]===-1){if(r!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+r+" and dim "+o);r=o}else if(n[o]<0)throw Error("Shapes can not be < 0. Found "+n[o]+" at dim "+o);if(r===-1){if(t>0&&t!==e)throw Error("Size("+t+") must match the product of shape "+n);return n}if(e===0)throw Error("Cannot infer the missing size in ["+n+"] when there are 0 elements");if(t%e!=0)throw Error("The implicit shape can't be a fractional number. Got "+t+" / "+e);var i=n.slice();return i[r]=t/e,i}function rt(n,t){var e=t.length;return E((n=n==null?t.map(function(r,o){return o}):[].concat(n)).every(function(r){return r>=-e&&r<e}),function(){return"All values in axis param must be in range [-"+e+", "+e+") but got axis "+n}),E(n.every(function(r){return $e(r)}),function(){return"All values in axis param must be integers but got axis "+n}),n.map(function(r){return r<0?e+r:r})}function ar(n,t){for(var e=[],r=[],o=t!=null&&Array.isArray(t)&&t.length===0,i=t==null||o?null:rt(t,n).sort(),a=0,s=0;s<n.length;++s){if(i!=null){if(i[a]===s&&n[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+n[s]+"' is not 1");(i[a]==null||i[a]>s)&&n[s]===1&&(e.push(n[s]),r.push(s)),i[a]<=s&&a++}n[s]!==1&&(e.push(n[s]),r.push(s))}return{newShape:e,keptDims:r}}function bo(n,t){var e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else{if(n!=="bool")throw new Error("Unknown data type "+n);e=new Uint8Array(t)}return e}function xi(n,t){var e=null;if(n==null||n==="float32")e=new Float32Array(t);else if(n==="int32")e=new Int32Array(t);else if(n==="bool")e=new Uint8Array(t);else{if(n!=="string")throw new Error("Unknown data type "+n);e=new Array(t)}return e}function Vm(n,t){for(var e=0;e<n.length;e++){var r=n[e];if(isNaN(r)||!isFinite(r))throw Error("A tensor of type "+t+" being uploaded contains "+r+".")}}function zm(n){return n==="bool"||n==="complex64"||n==="float32"||n==="int32"||n==="string"}function Hm(n,t){return t!=="complex64"&&(t!=="float32"||n==="complex64")&&(t!=="int32"||n==="float32"||n==="complex64")&&(t!=="bool"||n!=="bool")}function ln(n){return n instanceof Float32Array||n instanceof Int32Array||n instanceof Uint8Array}function Hf(n){if(n==="float32"||n==="int32")return 4;if(n==="complex64")return 8;if(n==="bool")return 1;throw new Error("Unknown dtype "+n)}function Gm(n){if(n==null)return 0;var t=0;return n.forEach(function(e){return t+=e.length}),t}function Js(n){return typeof n=="string"||n instanceof String}function jm(n){return typeof n=="boolean"}function qm(n){return typeof n=="number"}function Ao(n){return Array.isArray(n)?Ao(n[0]):n instanceof Float32Array?"float32":n instanceof Int32Array||n instanceof Uint8Array?"int32":qm(n)?"float32":Js(n)?"string":jm(n)?"bool":"float32"}function fs(n){return!!(n&&n.constructor&&n.call&&n.apply)}function hs(n,t){for(var e=t;e<n;++e)if(n%e==0)return e;return n}function fn(n){var t=n.length;if(t<2)return[];var e=new Array(t-1);e[t-2]=n[t-1];for(var r=t-3;r>=0;--r)e[r]=e[r+1]*n[r+1];return e}function Gf(n,t,e){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(n)&&(n=Gr(n)),e&&Vm(n,t),function(i,a){return i instanceof Float32Array&&a==="float32"||i instanceof Int32Array&&a==="int32"||i instanceof Uint8Array&&a==="bool"}(n,t))return n;if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool"){for(var r=new Uint8Array(n.length),o=0;o<r.length;++o)Math.round(n[o])!==0&&(r[o]=1);return r}throw new Error("Unknown data type "+t)}function Lc(n,t){if(n.length===0)return t[0];var e=n.reduce(function(r,o){return r*o});if(e===0)return[];if(e!==t.length)throw new Error("["+n+"] does not match the input size.");return function r(o,i,a){var s=new Array;if(i.length===1)for(var u=i[0],c=0;c<u;c++)s[c]=a[o+c];else{u=i[0];var l=i.slice(1),f=l.reduce(function(h,d){return h*d});for(c=0;c<u;c++)s[c]=r(o+c*f,l,a)}return s}(0,n,t)}function jf(n,t){for(var e=Do(n,t),r=0;r<e.length;r++)e[r]=1;return e}function Do(n,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(n);if(t==="int32")return new Int32Array(n);if(t==="bool")return new Uint8Array(n);throw new Error("Unknown data type "+t)}function on(){return H().platform.now()}function qf(n){n.forEach(function(t){E(Number.isInteger(t)&&t>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+n+"]."})})}function Km(n,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",H().platform.encode(n,t)}function bi(n,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",H().platform.decode(n,t)}function Wc(n,t,e){if(t===0)return 0;if(t===1)return n[0];for(var r=n[n.length-1],o=0;o<n.length-1;++o)r+=e[o]*n[o];return r}function Xm(n,t,e){if(t===0)return[];if(t===1)return[n];for(var r=new Array(t),o=0;o<r.length-1;++o)r[o]=Math.floor(n/e[o]),n-=r[o]*e[o];return r[r.length-1]=n,r}var $m=function(){function n(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new Ym)}return n.prototype.profileKernel=function(t,e,r){var o,i=this,a=this.backendTimer.time(function(){o=r()});return o.forEach(function(s){s.data().then(function(u){(function(c,l,f){if(l!=="float32")return!1;for(var h=0;h<c.length;h++){var d=c[h];if(isNaN(d)||!isFinite(d))return console.warn("Found "+d+" in the result of '"+f+"'"),!0}})(u,s.dtype,t),a.then(function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),i.logger.logKernelProfile(t,s,u,c.kernelMs,e,l)})})}),o},n}(),Ym=function(){function n(){}return n.prototype.logKernelProfile=function(t,e,r,o,i,a){var s=typeof o=="number"?Pr(o+"ms",9):o.error,u=Pr(t,25),c=e.rank,l=e.size,f=Pr(e.shape.toString(),14),h="";for(var d in i){var p=i[d].shape||e.shape,v=p.length;h+=d+": "+v+"D "+(v>0?p:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+f+"	%c"+l+"	%c"+h+"	%c"+a,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},n}(),Uc=20,Qr=3,Ca=7;function Jm(n,t,e,r){var o=fn(t),i=function(c,l,f,h){var d=ce(l),p=h[h.length-1],v=new Array(p).fill(0),m=l.length,g=f==="complex64"?eo(c):c;if(m>1)for(var x=0;x<d/p;x++)for(var b=x*p,y=0;y<p;y++)v[y]=Math.max(v[y],Zr(g[b+y],0,f).length);return v}(n,t,e,o),a=t.length,s=function c(l,f,h,d,p,v){v===void 0&&(v=!0);var m=h==="complex64"?2:1,g=f[0],x=f.length;if(x===0)return h==="complex64"?[Zr(eo(l)[0],0,h)]:h==="bool"?[Kf(l[0])]:[l[0].toString()];if(x===1){if(g>Uc){var b=Qr*m,y=Array.from(l.slice(0,b)),w=Array.from(l.slice((g-Qr)*m,g*m));return h==="complex64"&&(y=eo(y),w=eo(w)),["["+y.map(function(z,j){return Zr(z,p[j],h)}).join(", ")+", ..., "+w.map(function(z,j){return Zr(z,p[g-Qr+j],h)}).join(", ")+"]"]}return["["+(h==="complex64"?eo(l):Array.from(l)).map(function(z,j){return Zr(z,p[j],h)}).join(", ")+"]"]}var _=f.slice(1),k=d.slice(1),S=d[0]*m,R=[];if(g>Uc){for(var I=0;I<Qr;I++){var P=(N=I*S)+S;R.push.apply(R,c(l.slice(N,P),_,h,k,p,!1))}for(R.push("..."),I=g-Qr;I<g;I++)P=(N=I*S)+S,R.push.apply(R,c(l.slice(N,P),_,h,k,p,I===g-1))}else for(I=0;I<g;I++){var N;P=(N=I*S)+S,R.push.apply(R,c(l.slice(N,P),_,h,k,p,I===g-1))}var V=x===2?",":"";for(R[0]="["+R[0]+V,I=1;I<R.length-1;I++)R[I]=" "+R[I]+V;var U=`,
`;for(I=2;I<x;I++)U+=`
`;return R[R.length-1]=" "+R[R.length-1]+"]"+(v?"":U),R}(n,t,e,o,i),u=["Tensor"];return r&&(u.push("  dtype: "+e),u.push("  rank: "+a),u.push("  shape: ["+t+"]"),u.push("  values:")),u.push(s.map(function(c){return"    "+c}).join(`
`)),u.join(`
`)}function Zr(n,t,e){return Pr(Array.isArray(n)?parseFloat(n[0].toFixed(Ca))+" + "+parseFloat(n[1].toFixed(Ca))+"j":Js(n)?"'"+n+"'":e==="bool"?Kf(n):parseFloat(n.toFixed(Ca)).toString(),t)}function Kf(n){return n===0?"false":"true"}function eo(n){for(var t=[],e=0;e<n.length;e+=2)t.push([n[e],n[e+1]]);return t}var wo=function(){function n(t,e,r){var o=this;if(this.dtype=e,this.shape=t.slice(),this.size=ce(t),r!=null){var i=r.length;E(i===this.size,function(){return"Length of values '"+i+"' does not match the size inferred by the shape '"+o.size+"'."})}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=r||xi(e,this.size),this.strides=fn(t)}return n.prototype.set=function(t){for(var e=this,r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];r.length===0&&(r=[0]),E(r.length===this.rank,function(){return"The number of provided coordinates ("+r.length+") must match the rank ("+e.rank+")"});var i=this.locToIndex(r);this.values[i]=t},n.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.length===0&&(t=[0]);for(var r=0,o=0,i=t;o<i.length;o++){var a=i[o];if(a<0||a>=this.shape[r]){var s="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(s)}r++}for(var u=t[t.length-1],c=0;c<t.length-1;++c)u+=this.strides[c]*t[c];return this.values[u]},n.prototype.locToIndex=function(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];for(var e=t[t.length-1],r=0;r<t.length-1;++r)e+=this.strides[r]*t[r];return e},n.prototype.indexToLoc=function(t){if(this.rank===0)return[];if(this.rank===1)return[t];for(var e=new Array(this.shape.length),r=0;r<e.length-1;++r)e[r]=Math.floor(t/this.strides[r]),t-=e[r]*this.strides[r];return e[e.length-1]=t,e},Object.defineProperty(n.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),n.prototype.toTensor=function(){return sn().makeTensor(this.values,this.shape,this.dtype)},n}(),sn=null,L=null,Xf=null,je=function(){function n(t,e,r,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=ce(t),this.strides=fn(t),this.dataId=r,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return n.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},n.prototype.asScalar=function(){return this.throwIfDisposed(),E(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},n.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},n.prototype.as2D=function(t,e){return this.throwIfDisposed(),this.reshape([t,e])},n.prototype.as3D=function(t,e,r){return this.throwIfDisposed(),this.reshape([t,e,r])},n.prototype.as4D=function(t,e,r,o){return this.throwIfDisposed(),this.reshape([t,e,r,o])},n.prototype.as5D=function(t,e,r,o,i){return this.throwIfDisposed(),this.reshape([t,e,r,o,i])},n.prototype.asType=function(t){return this.throwIfDisposed(),L.cast(this,t)},Object.defineProperty(n.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),n.prototype.buffer=function(){return se(this,void 0,void 0,function(){var t;return ue(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,L.buffer(this.shape,this.dtype,t)]}})})},n.prototype.bufferSync=function(){return L.buffer(this.shape,this.dtype,this.dataSync())},n.prototype.array=function(){return se(this,void 0,void 0,function(){var t;return ue(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,Lc(this.shape,t)]}})})},n.prototype.arraySync=function(){return Lc(this.shape,this.dataSync())},n.prototype.data=function(){return se(this,void 0,void 0,function(){var t,e;return ue(this,function(r){switch(r.label){case 0:return this.throwIfDisposed(),t=sn().read(this.dataId),this.dtype!=="string"?[3,2]:[4,t];case 1:e=r.sent();try{return[2,e.map(function(o){return bi(o)})]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}r.label=2;case 2:return[2,t]}})})},n.prototype.dataSync=function(){this.throwIfDisposed();var t=sn().readSync(this.dataId);if(this.dtype==="string")try{return t.map(function(e){return bi(e)})}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},n.prototype.bytes=function(){return se(this,void 0,void 0,function(){var t;return ue(this,function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,sn().read(this.dataId)];case 1:return t=e.sent(),this.dtype==="string"?[2,t]:[2,new Uint8Array(t.buffer)]}})})},n.prototype.dispose=function(){this.isDisposed||(sn().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(n.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),n.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},n.prototype.toFloat=function(){return this.asType("float32")},n.prototype.toInt=function(){return this.asType("int32")},n.prototype.toBool=function(){return this.asType("bool")},n.prototype.print=function(t){return t===void 0&&(t=!1),L.print(this,t)},n.prototype.reshape=function(t){return this.throwIfDisposed(),L.reshape(this,t)},n.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},n.prototype.expandDims=function(t){return t===void 0&&(t=0),L.expandDims(this,t)},n.prototype.cumsum=function(t,e,r){return t===void 0&&(t=0),e===void 0&&(e=!1),r===void 0&&(r=!1),L.cumsum(this,t,e,r)},n.prototype.squeeze=function(t){return this.throwIfDisposed(),L.squeeze(this,t)},n.prototype.clone=function(){return this.throwIfDisposed(),L.clone(this)},n.prototype.oneHot=function(t,e,r){return this.throwIfDisposed(),L.oneHot(this,t,e,r)},n.prototype.toString=function(t){return t===void 0&&(t=!1),Jm(this.dataSync(),this.shape,this.dtype,t)},n.prototype.tile=function(t){return this.throwIfDisposed(),L.tile(this,t)},n.prototype.gather=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),L.gather(this,t,e)},n.prototype.matMul=function(t,e,r){return e===void 0&&(e=!1),r===void 0&&(r=!1),this.throwIfDisposed(),L.matMul(this,t,e,r)},n.prototype.dot=function(t){return this.throwIfDisposed(),L.dot(this,t)},n.prototype.norm=function(t,e,r){return t===void 0&&(t="euclidean"),e===void 0&&(e=null),r===void 0&&(r=!1),this.throwIfDisposed(),L.norm(this,t,e,r)},n.prototype.slice=function(t,e){return this.throwIfDisposed(),L.slice(this,t,e)},n.prototype.reverse=function(t){return this.throwIfDisposed(),L.reverse(this,t)},n.prototype.concat=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),t instanceof n&&(t=[t]),L.concat([this].concat(t),e)},n.prototype.split=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),L.split(this,t,e)},n.prototype.stack=function(t,e){return e===void 0&&(e=0),L.stack([this,t],e)},n.prototype.unstack=function(t){return t===void 0&&(t=0),L.unstack(this,t)},n.prototype.pad=function(t,e){return e===void 0&&(e=0),L.pad(this,t,e)},n.prototype.batchNormalization=function(t,e,r,o,i){return r===void 0&&(r=.001),Xf("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,e,i,o,r)},n.prototype.batchNorm=function(t,e,r,o,i){return i===void 0&&(i=.001),this.throwIfDisposed(),L.batchNorm(this,t,e,r,o,i)},n.prototype.all=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),L.all(this,t,e)},n.prototype.any=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),L.any(this,t,e)},n.prototype.logSumExp=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),L.logSumExp(this,t,e)},n.prototype.sum=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),L.sum(this,t,e)},n.prototype.prod=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),L.prod(this,t,e)},n.prototype.mean=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),L.mean(this,t,e)},n.prototype.min=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),L.min(this,t,e)},n.prototype.max=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),L.max(this,t,e)},n.prototype.argMin=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),L.argMin(this,t)},n.prototype.argMax=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),L.argMax(this,t)},n.prototype.cast=function(t){return this.throwIfDisposed(),L.cast(this,t)},n.prototype.add=function(t){return this.throwIfDisposed(),L.add(this,t)},n.prototype.addStrict=function(t){return this.throwIfDisposed(),L.addStrict(this,t)},n.prototype.atan2=function(t){return this.throwIfDisposed(),L.atan2(this,t)},n.prototype.sub=function(t){return this.throwIfDisposed(),L.sub(this,t)},n.prototype.subStrict=function(t){return this.throwIfDisposed(),L.subStrict(this,t)},n.prototype.pow=function(t){return this.throwIfDisposed(),L.pow(this,t)},n.prototype.powStrict=function(t){return this.throwIfDisposed(),L.powStrict(this,t)},n.prototype.mul=function(t){return this.throwIfDisposed(),L.mul(this,t)},n.prototype.mulStrict=function(t){return this.throwIfDisposed(),L.mulStrict(this,t)},n.prototype.div=function(t){return this.throwIfDisposed(),L.div(this,t)},n.prototype.divNoNan=function(t){return this.throwIfDisposed(),L.divNoNan(this,t)},n.prototype.floorDiv=function(t){return this.throwIfDisposed(),L.floorDiv(this,t)},n.prototype.divStrict=function(t){return this.throwIfDisposed(),L.divStrict(this,t)},n.prototype.minimum=function(t){return this.throwIfDisposed(),L.minimum(this,t)},n.prototype.minimumStrict=function(t){return this.throwIfDisposed(),L.minimumStrict(this,t)},n.prototype.maximum=function(t){return this.throwIfDisposed(),L.maximum(this,t)},n.prototype.maximumStrict=function(t){return this.throwIfDisposed(),L.maximumStrict(this,t)},n.prototype.mod=function(t){return this.throwIfDisposed(),L.mod(this,t)},n.prototype.modStrict=function(t){return this.throwIfDisposed(),L.modStrict(this,t)},n.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),L.squaredDifferenceStrict(this,t)},n.prototype.transpose=function(t){return this.throwIfDisposed(),L.transpose(this,t)},n.prototype.notEqual=function(t){return this.throwIfDisposed(),L.notEqual(this,t)},n.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),L.notEqualStrict(this,t)},n.prototype.less=function(t){return this.throwIfDisposed(),L.less(this,t)},n.prototype.lessStrict=function(t){return this.throwIfDisposed(),L.lessStrict(this,t)},n.prototype.equal=function(t){return this.throwIfDisposed(),L.equal(this,t)},n.prototype.equalStrict=function(t){return this.throwIfDisposed(),L.equalStrict(this,t)},n.prototype.lessEqual=function(t){return this.throwIfDisposed(),L.lessEqual(this,t)},n.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),L.lessEqualStrict(this,t)},n.prototype.greater=function(t){return this.throwIfDisposed(),L.greater(this,t)},n.prototype.greaterStrict=function(t){return this.throwIfDisposed(),L.greaterStrict(this,t)},n.prototype.greaterEqual=function(t){return this.throwIfDisposed(),L.greaterEqual(this,t)},n.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),L.greaterEqualStrict(this,t)},n.prototype.logicalAnd=function(t){return this.throwIfDisposed(),L.logicalAnd(this,t)},n.prototype.logicalOr=function(t){return this.throwIfDisposed(),L.logicalOr(this,t)},n.prototype.logicalNot=function(){return this.throwIfDisposed(),L.logicalNot(this)},n.prototype.logicalXor=function(t){return this.throwIfDisposed(),L.logicalXor(this,t)},n.prototype.where=function(t,e){return this.throwIfDisposed(),L.where(t,this,e)},n.prototype.neg=function(){return this.throwIfDisposed(),L.neg(this)},n.prototype.ceil=function(){return this.throwIfDisposed(),L.ceil(this)},n.prototype.floor=function(){return this.throwIfDisposed(),L.floor(this)},n.prototype.sign=function(){return this.throwIfDisposed(),L.sign(this)},n.prototype.isNaN=function(){return this.throwIfDisposed(),L.isNaN(this)},n.prototype.isInf=function(){return this.throwIfDisposed(),L.isInf(this)},n.prototype.isFinite=function(){return this.throwIfDisposed(),L.isFinite(this)},n.prototype.exp=function(){return this.throwIfDisposed(),L.exp(this)},n.prototype.expm1=function(){return this.throwIfDisposed(),L.expm1(this)},n.prototype.log=function(){return this.throwIfDisposed(),L.log(this)},n.prototype.log1p=function(){return this.throwIfDisposed(),L.log1p(this)},n.prototype.sqrt=function(){return this.throwIfDisposed(),L.sqrt(this)},n.prototype.rsqrt=function(){return this.throwIfDisposed(),L.rsqrt(this)},n.prototype.square=function(){return this.throwIfDisposed(),L.square(this)},n.prototype.reciprocal=function(){return this.throwIfDisposed(),L.reciprocal(this)},n.prototype.abs=function(){return this.throwIfDisposed(),L.abs(this)},n.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),L.clipByValue(this,t,e)},n.prototype.relu=function(){return this.throwIfDisposed(),L.relu(this)},n.prototype.relu6=function(){return this.throwIfDisposed(),L.relu6(this)},n.prototype.elu=function(){return this.throwIfDisposed(),L.elu(this)},n.prototype.selu=function(){return this.throwIfDisposed(),L.selu(this)},n.prototype.leakyRelu=function(t){return t===void 0&&(t=.2),this.throwIfDisposed(),L.leakyRelu(this,t)},n.prototype.prelu=function(t){return this.throwIfDisposed(),L.prelu(this,t)},n.prototype.sigmoid=function(){return this.throwIfDisposed(),L.sigmoid(this)},n.prototype.logSigmoid=function(){return this.throwIfDisposed(),L.logSigmoid(this)},n.prototype.softplus=function(){return this.throwIfDisposed(),L.softplus(this)},n.prototype.zerosLike=function(){return this.throwIfDisposed(),L.zerosLike(this)},n.prototype.onesLike=function(){return this.throwIfDisposed(),L.onesLike(this)},n.prototype.sin=function(){return this.throwIfDisposed(),L.sin(this)},n.prototype.cos=function(){return this.throwIfDisposed(),L.cos(this)},n.prototype.tan=function(){return this.throwIfDisposed(),L.tan(this)},n.prototype.asin=function(){return this.throwIfDisposed(),L.asin(this)},n.prototype.acos=function(){return this.throwIfDisposed(),L.acos(this)},n.prototype.atan=function(){return this.throwIfDisposed(),L.atan(this)},n.prototype.sinh=function(){return this.throwIfDisposed(),L.sinh(this)},n.prototype.cosh=function(){return this.throwIfDisposed(),L.cosh(this)},n.prototype.tanh=function(){return this.throwIfDisposed(),L.tanh(this)},n.prototype.asinh=function(){return this.throwIfDisposed(),L.asinh(this)},n.prototype.acosh=function(){return this.throwIfDisposed(),L.acosh(this)},n.prototype.atanh=function(){return this.throwIfDisposed(),L.atanh(this)},n.prototype.erf=function(){return this.throwIfDisposed(),L.erf(this)},n.prototype.round=function(){return this.throwIfDisposed(),L.round(this)},n.prototype.step=function(t){return t===void 0&&(t=0),this.throwIfDisposed(),L.step(this,t)},n.prototype.softmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),L.softmax(this,t)},n.prototype.logSoftmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),L.logSoftmax(this,t)},n.prototype.resizeBilinear=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),L.image.resizeBilinear(this,t,e)},n.prototype.resizeNearestNeighbor=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),L.image.resizeNearestNeighbor(this,t,e)},n.prototype.conv1d=function(t,e,r,o,i,a){return o===void 0&&(o="NWC"),i===void 0&&(i=1),this.throwIfDisposed(),L.conv1d(this,t,e,r,o,i,a)},n.prototype.conv2d=function(t,e,r,o,i,a){return o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]),this.throwIfDisposed(),L.conv2d(this,t,e,r,o,i,a)},n.prototype.conv2dTranspose=function(t,e,r,o,i){return this.throwIfDisposed(),L.conv2dTranspose(this,t,e,r,o,i)},n.prototype.depthwiseConv2D=function(t,e,r,o,i,a){return o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]),this.throwIfDisposed(),L.depthwiseConv2d(this,t,e,r,o,i,a)},n.prototype.separableConv2d=function(t,e,r,o,i,a){return i===void 0&&(i=[1,1]),a===void 0&&(a="NHWC"),this.throwIfDisposed(),L.separableConv2d(this,t,e,r,o,i,a)},n.prototype.avgPool=function(t,e,r,o){return this.throwIfDisposed(),L.avgPool(this,t,e,r,o)},n.prototype.maxPool=function(t,e,r,o){return this.throwIfDisposed(),L.maxPool(this,t,e,r,o)},n.prototype.localResponseNormalization=function(t,e,r,o){return t===void 0&&(t=5),e===void 0&&(e=1),r===void 0&&(r=1),o===void 0&&(o=.5),L.localResponseNormalization(this,t,e,r,o)},n.prototype.pool=function(t,e,r,o,i){return this.throwIfDisposed(),L.pool(this,t,e,r,o,i)},n.prototype.variable=function(t,e,r){return t===void 0&&(t=!0),this.throwIfDisposed(),sn().makeVariable(this,t,e,r)},n.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),L.unsortedSegmentSum(this,t,e)},n.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),L.batchToSpaceND(this,t,e)},n.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),L.spaceToBatchND(this,t,e)},n.prototype.topk=function(t,e){return t===void 0&&(t=1),e===void 0&&(e=!0),this.throwIfDisposed(),L.topk(this,t,e)},n.prototype.stridedSlice=function(t,e,r,o,i,a,s,u){return o===void 0&&(o=0),i===void 0&&(i=0),a===void 0&&(a=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),L.stridedSlice(this,t,e,r,o,i,a,s,u)},n.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),L.depthToSpace(this,t,e)},n.prototype.fft=function(){return this.throwIfDisposed(),L.spectral.fft(this)},n.prototype.ifft=function(){return this.throwIfDisposed(),L.spectral.ifft(this)},n.prototype.rfft=function(){return this.throwIfDisposed(),L.spectral.rfft(this)},n.prototype.irfft=function(){return this.throwIfDisposed(),L.spectral.irfft(this)},n}();Object.defineProperty(je,Symbol.hasInstance,{value:function(n){return!!n&&n.dataId!=null&&n.shape!=null&&n.dtype!=null}});var Vc,ds,ps,vs,ms,jr=function(n){function t(e,r,o,i){var a=n.call(this,e.shape,e.dtype,e.dataId,i)||this;return a.trainable=r,a.name=o,a}return Jt(t,n),t.prototype.assign=function(e){if(e.dtype!==this.dtype)throw new Error("dtype of the new value ("+e.dtype+") and previous value ("+this.dtype+") must match");if(!at(e.shape,this.shape))throw new Error("shape of the new value ("+e.shape+") and previous value ("+this.shape+") must match");sn().disposeTensor(this),this.dataId=e.dataId,sn().incRef(this,null)},t.prototype.dispose=function(){sn().disposeVariable(this),this.isDisposedInternal=!0},t}(je);Object.defineProperty(jr,Symbol.hasInstance,{value:function(n){return n instanceof je&&n.assign!=null&&n.assign instanceof Function}}),function(n){n.R0="R0",n.R1="R1",n.R2="R2",n.R3="R3",n.R4="R4",n.R5="R5",n.R6="R6"}(Vc||(Vc={})),function(n){n.float32="float32",n.int32="int32",n.bool="int32",n.complex64="complex64"}(ds||(ds={})),function(n){n.float32="float32",n.int32="int32",n.bool="bool",n.complex64="complex64"}(ps||(ps={})),function(n){n.float32="float32",n.int32="float32",n.bool="float32",n.complex64="complex64"}(vs||(vs={})),function(n){n.float32="complex64",n.int32="complex64",n.bool="complex64",n.complex64="complex64"}(ms||(ms={}));var Qm={float32:vs,int32:ds,bool:ps,complex64:ms};function ft(n,t){if(n==="string"||t==="string"){if(n==="string"&&t==="string")return"string";throw new Error("Can not upcast "+n+" with "+t)}return Qm[n][t]}function Ea(n){return ft(n,"int32")}function Ke(n,t){if(n.dtype===t.dtype)return[n,t];var e=ft(n.dtype,t.dtype);return[n.cast(e),t.cast(e)]}function Zm(n,t){E(n.dtype===t.dtype,function(){return"The dtypes of the first("+n.dtype+") and second("+t.dtype+") input must match"})}function $f(n){var t=[];return function e(r,o,i){if(r!=null){if(r instanceof je)return void o.push(r);if(a=r,!(!Array.isArray(a)&&typeof a!="object")){var a,s=r;for(var u in s){var c=s[u];i.has(c)||(i.add(c),e(c,o,i))}}}}(n,t,new Set),t}var Ia,zc=function(){function n(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return n.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose()},n}(),eg=function(){function n(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new zc}return n.prototype.ready=function(){return se(this,void 0,void 0,function(){var t,e,r;return ue(this,function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];t=this.getSortedBackends(),e=0,o.label=1;case 1:return e<t.length?(r=t[e],[4,this.initializeBackend(r).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(r)]:[3,4];case 3:return o.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(n.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var t=this.initializeBackendsAndReturnBest(),e=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(e)}return this.backendInstance},enumerable:!0,configurable:!0}),n.prototype.backendNames=function(){return Object.keys(this.registryFactory)},n.prototype.findBackend=function(t){return!(t in this.registry)&&(!(t in this.registryFactory)||this.initializeBackend(t).asyncInit)?null:this.registry[t]},n.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},n.prototype.registerBackend=function(t,e,r){return r===void 0&&(r=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:r},!0)},n.prototype.setBackend=function(t){return se(this,void 0,void 0,function(){var e,r,o;return ue(this,function(i){switch(i.label){case 0:if(this.registryFactory[t]==null)throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,this.registry[t]!=null?[3,4]:(this.backendInstance=null,e=this.initializeBackend(t),r=e.success,e.asyncInit?[4,r]:[3,2]);case 1:return o=i.sent(),[3,3];case 2:o=r,i.label=3;case 3:if(!o)return[2,!1];i.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new $m(this.backendInstance),[2,!0]}})})},n.prototype.setupRegisteredKernels=function(){var t=this;Oc(this.backendName).forEach(function(e){e.setupFunc!=null&&e.setupFunc(t.backendInstance)})},n.prototype.disposeRegisteredKernels=function(t){var e=this;Oc(t).forEach(function(r){r.disposeFunc!=null&&r.disposeFunc(e.registry[t])})},n.prototype.initializeBackend=function(t){var e=this,r=this.registryFactory[t];if(r==null)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var o=r.factory();if(Promise.resolve(o)===o){var i=++this.pendingBackendInitId,a=o.then(function(s){return!(i<e.pendingBackendInitId)&&(e.registry[t]=s,e.pendingBackendInit=null,!0)}).catch(function(s){return!(i<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=a,{success:a,asyncInit:!0}}return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},n.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},n.prototype.getSortedBackends=function(){var t=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(e,r){return t.registryFactory[r].priority-t.registryFactory[e].priority})},n.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),e=0;e<t.length;e++){var r=t[e],o=this.initializeBackend(r),i=o.success,a=o.asyncInit;if(a||i)return{name:r,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")},n.prototype.moveData=function(t,e){var r=this.state.tensorInfo.get(e),o=r.backend,i=this.readSync(e);o.disposeData(e),r.backend=t,t.move(e,i,r.shape,r.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},n.prototype.tidy=function(t,e){var r,o=this,i=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");i=t}return this.scopedRun(function(){return o.startScope(i)},function(){return o.endScope(r)},function(){return(r=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r})},n.prototype.scopedRun=function(t,e,r){t();try{var o=r();return e(),o}catch(i){throw e(),i}},n.prototype.nextTensorId=function(){return n.nextTensorId++},n.prototype.nextVariableId=function(){return n.nextVariableId++},n.prototype.clone=function(t){var e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),r={x:t};return this.addTapeNode(this.state.activeScope.name,r,[e],function(o){return{x:function(){return o.toFloat()}}},[]),e},n.prototype.runKernel=function(t,e,r,o,i){return this.runKernelFunc(null,e,null,t,r,o,i)},n.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},n.prototype.checkKernelForMemLeak=function(t,e,r){var o=this.backend.numDataIds(),i=0;r.forEach(function(u){i+=u.dtype==="complex64"?3:1});var a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-e-i-a;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+t+"'")},n.prototype.runKernelFunc=function(t,e,r,o,i,a,s){var u,c=this;a===void 0&&(a=[]),s===void 0&&(s=[]);var l=[],f=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var h,d=function(x){f&&(l=x.map(function(b){return c.keep(c.clone(b))}))},p=this.state.numBytes,v=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var m,g=Wf(o,this.backendName);return h=g!=null?function(){var x=c.backend.numDataIds();m=g.kernelFunc({inputs:e,attrs:i,backend:c.backend});var b=Array.isArray(m)?m:[m];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,x,b);var y=b.map(function(_){var k=_.dataId,S=_.shape,R=_.dtype;return c.makeTensorFromDataId(k,S,R)}),w=y.filter(function(_,k){return s[k]});return d((a||[]).slice().concat(w)),y}:function(){var x=c.backend.numDataIds();m=c.tidy(function(){return t(c.backend,d)});var b=Array.isArray(m)?m:[m];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,x,b),b},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(o,e,function(){return h()}):h()}),f&&this.addTapeNode(o,e,u,r,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-p,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-v,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map(function(x){return e[x].shape}),outputShapes:u.map(function(x){return x.shape})}),Array.isArray(m)?u:u[0]},n.prototype.makeTensor=function(t,e,r,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");r=r||"float32",o=o||this.backend;var i=t;r==="string"&&Js(t[0])&&(i=t.map(function(l){return Km(l)}));var a=o.write(i,e,r),s=new je(e,r,a,this.nextTensorId());if(this.incRef(s,o),r==="string"){var u=this.state.tensorInfo.get(a),c=Gm(i);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},n.prototype.makeTensorFromDataId=function(t,e,r,o){var i=new je(e,r=r||"float32",t,this.nextTensorId());return this.incRef(i,o),i},n.prototype.makeVariable=function(t,e,r,o){e===void 0&&(e=!0),r=r||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.asType(o));var i=new jr(t,e,r,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw new Error("Variable with name "+i.name+" was already registered");return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i},n.prototype.incRef=function(t,e){var r=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++,r===0){this.state.numDataBuffers++;var o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*Hf(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof jr||this.track(t)},n.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,t.dtype==="string"&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?(t.dtype!=="complex64"&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}},n.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var e=this.state.registeredVariables[t];this.disposeVariable(e)}},n.prototype.disposeVariable=function(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]},n.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},n.prototype.profile=function(t){return se(this,void 0,void 0,function(){var e,r;return ue(this,function(o){return this.state.profiling=!0,e=this.state.numBytes,r=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(i){return i.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-r,[2,this.state.activeProfile]})})},n.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},n.prototype.addTapeNode=function(t,e,r,o,i){var a=this,s={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:r,saved:i},u=Om(t);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(c){return c=c.map(function(l,f){if(l==null){var h=r[f],d=Do(h.size,h.dtype);return a.makeTensor(d,h.shape,h.dtype)}return l}),o(c.length>1?c:c[0],i)}),this.state.activeTape.push(s)},n.prototype.keep=function(t){return t.kept=!0,t},n.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},n.prototype.endTape=function(){this.state.gradientDepth--},n.prototype.startScope=function(t){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e},n.prototype.endScope=function(t){for(var e=this,r=$f(t),o=new Set(r.map(function(u){return u.id})),i=0;i<this.state.activeScope.track.length;i++){var a=this.state.activeScope.track[i];a.kept||o.has(a.id)||a.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],r.forEach(function(u){u.kept||u.scopeId!==s.id||e.track(u)})},n.prototype.gradients=function(t,e,r,o){var i=this;if(o===void 0&&(o=!1),E(e.length>0,function(){return"gradients() received an empty list of xs."}),r!=null&&r.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+r.dtype+"'");var a=this.scopedRun(function(){return i.startTape()},function(){return i.endTape()},function(){return i.tidy("forward",t)});E(a instanceof je,function(){return"The result y returned by f() must be a tensor."});var s=function(u,c,l){for(var f={},h={},d=0;d<c.length;d++)f[c[d].id]=!0;for(d=0;d<u.length;d++){var p=(_=u[d]).inputs;for(var v in p){for(var m=p[v],g=!1,x=0;x<c.length;x++)if(f[m.id]){_.outputs.forEach(function(I){return f[I.id]=!0}),g=!0,h[_.id]=!0;break}if(g)break}}var b={};b[l.id]=!0;var y={};for(d=u.length-1;d>=0;d--)for(p=(_=u[d]).inputs,x=0;x<_.outputs.length;x++)if(b[_.outputs[x].id]){for(var v in p)b[p[v].id]=!0,y[_.id]=!0;break}var w=[];for(d=0;d<u.length;d++){var _;if(h[(_=u[d]).id]&&y[_.id]){var k={};for(var v in _.inputs){var S=_.inputs[v];f[S.id]&&(k[v]=S)}var R=Object.assign({},_);R.inputs=k,R.outputs=_.outputs,w.push(R)}}return w}(this.state.activeTape,e,a);if(!o&&s.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,c,l={};l[a.id]=r??(u=a.shape,c=jf(ce(u),"float32"),F.makeTensor(c,u,"float32")),function(h,d,p){for(var v=function(g){var x=d[g],b=[];if(x.outputs.forEach(function(k){var S=h[k.id];S!=null?b.push(S):b.push(null)}),x.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+x.kernelName+".");var y=x.gradient(b),w=function(k){if(!(k in y))throw new Error("Cannot backprop through input "+k+". Available gradients found: "+Object.keys(y)+".");var S=p(function(){return y[k]()});if(S.dtype!=="float32")throw new Error("Error in gradient for op "+x.kernelName+". The gradient of input "+k+" must have 'float32' dtype, but has '"+S.dtype+"'");var R=x.inputs[k];if(!at(S.shape,R.shape))throw new Error("Error in gradient for op "+x.kernelName+". The gradient of input '"+k+"' has shape '"+S.shape+"', which does not match the shape of the input '"+R.shape+"'");if(h[R.id]==null)h[R.id]=S;else{var I=h[R.id];h[R.id]=I.add(S),I.dispose()}};for(var _ in x.inputs)w(_)},m=d.length-1;m>=0;m--)v(m)}(l,s,function(h){return i.tidy(h)});var f=e.map(function(h){return l[h.id]});return i.state.gradientDepth===0&&(i.state.activeTape.forEach(function(h){for(var d=0,p=h.saved;d<p.length;d++)p[d].dispose()}),i.state.activeTape=null),{value:a,grads:f}})},n.prototype.customGrad=function(t){var e=this;return E(fs(t),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var r,o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];E(o.every(function(s){return s instanceof je}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var a={};return o.forEach(function(s,u){a[u]=s}),e.runKernelFunc(function(s,u){return E((r=t.apply(void 0,o.concat([u]))).value instanceof je,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),E(fs(r.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),r.value},a,function(s,u){var c=r.gradFunc(s,u),l=Array.isArray(c)?c:[c];E(l.length===o.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),E(l.every(function(h){return h instanceof je}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var f={};return l.forEach(function(h,d){f[d]=function(){return h}}),f})}},n.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},n.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},n.prototype.time=function(t){return se(this,void 0,void 0,function(){var e,r;return ue(this,function(o){switch(o.label){case 0:return e=on(),[4,this.backend.time(t)];case 1:return(r=o.sent()).wallMs=on()-e,[2,r]}})})},n.prototype.track=function(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(n.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),n.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new zc,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},n.nextTensorId=0,n.nextVariableId=0,n}(),F=function(){var n=function(){if(Ia==null){var e=void 0;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else{if(typeof self>"u")throw new Error("Could not find a global object");e=self}Ia=e}return Ia}();if(n._tfengine==null){var t=new Pm(n);n._tfengine=new eg(t)}return function(e){Lf=e}(n._tfengine.ENV),sn=function(){return n._tfengine},n._tfengine}();function Yf(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var xn=H();xn.registerFlag("DEBUG",function(){return!1},function(n){n&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),xn.registerFlag("IS_BROWSER",function(){return Yf()}),xn.registerFlag("IS_NODE",function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0}),xn.registerFlag("IS_CHROME",function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),xn.registerFlag("PROD",function(){return!1}),xn.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return xn.getBool("DEBUG")}),xn.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),xn.registerFlag("IS_TEST",function(){return!1});var _o,Ot,Pt,rr={},Ra={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function tg(n,t){rr[n]=t}function pn(n){n in rr||(rr[n]=function(e){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var r=function(o){if(typeof OffscreenCanvas<"u"&&o===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(e);return r.addEventListener("webglcontextlost",function(o){o.preventDefault(),delete rr[e]},!1),e===1?r.getContext("webgl",Ra)||r.getContext("experimental-webgl",Ra):r.getContext("webgl2",Ra)}(n));var t=rr[n];return t.isContextLost()?(delete rr[n],pn(n)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),rr[n])}function Qi(n,t){return[t,n]}function co(n){var t=ce(n);return ls(Math.ceil(t/4))}function To(n,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(n/2))]}function Qs(n,t){var e,r,o,i,a,s,u,c,l,f=n;return H().getNumber("WEBGL_VERSION")===2?(e=f.R32F,r=f.R16F,o=f.RGBA16F,i=f.RGBA32F,a=f.RED,s=4,u=1,c=f.HALF_FLOAT,l=f.FLOAT):(e=n.RGBA,r=n.RGBA,o=n.RGBA,i=f.RGBA,a=n.RGBA,s=4,u=4,c=t!=null?t.HALF_FLOAT_OES:null,l=n.FLOAT),{internalFormatFloat:e,internalFormatHalfFloat:r,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:n.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function le(n,t,e){var r=e();return t&&function(o){var i=o.getError();if(i!==o.NO_ERROR)throw new Error("WebGL Error: "+ig(o,i))}(n),r}(function(n){n[n.DENSE=0]="DENSE",n[n.SHARED_BATCH=1]="SHARED_BATCH"})(_o||(_o={})),function(n){n[n.RENDER=0]="RENDER",n[n.UPLOAD=1]="UPLOAD",n[n.PIXELS=2]="PIXELS",n[n.DOWNLOAD=3]="DOWNLOAD"}(Ot||(Ot={})),function(n){n[n.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",n[n.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",n[n.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",n[n.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",n[n.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(Pt||(Pt={}));var ng=596e-10,rg=65504;function og(n){return!!(H().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||n===0||ng<Math.abs(n)&&Math.abs(n)<rg)}function ig(n,t){switch(t){case n.NO_ERROR:return"NO_ERROR";case n.INVALID_ENUM:return"INVALID_ENUM";case n.INVALID_VALUE:return"INVALID_VALUE";case n.INVALID_OPERATION:return"INVALID_OPERATION";case n.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case n.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case n.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+t}}function qo(n,t,e){return Rn(n,t,function(){return n.getExtension(e)},'Extension "'+e+'" not supported on this browser.')}function ag(n,t,e){var r=Rn(n,t,function(){return n.createShader(n.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(le(n,t,function(){return n.shaderSource(r,e)}),le(n,t,function(){return n.compileShader(r)}),n.getShaderParameter(r,n.COMPILE_STATUS)===!1)throw console.log(n.getShaderInfoLog(r)),new Error("Failed to compile vertex shader.");return r}function sg(n,t,e){var r=Rn(n,t,function(){return n.createShader(n.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(le(n,t,function(){return n.shaderSource(r,e)}),le(n,t,function(){return n.compileShader(r)}),n.getShaderParameter(r,n.COMPILE_STATUS)===!1)throw function(o,i){var a=ug.exec(i);if(a==null)return console.log("Couldn't parse line number in error: "+i),void console.log(o);for(var s=+a[1],u=o.split(`
`),c=u.length.toString().length+2,l=u.map(function(m,g){return Pr((g+1).toString(),c)+m}),f=0,h=0;h<l.length;h++)f=Math.max(l[h].length,f);var d=l.slice(0,s-1),p=l.slice(s-1,s),v=l.slice(s);console.log(d.join(`
`)),console.log(i.split(`
`)[0]),console.log("%c "+Pr(p[0],f),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(v.join(`
`))}(e,n.getShaderInfoLog(r)),new Error("Failed to compile fragment shader.");return r}var Sa,ka,ug=/ERROR: [0-9]+:([0-9]+):/g;function cg(n,t){return Rn(n,t,function(){return n.createProgram()},"Unable to create WebGLProgram.")}function lg(n,t,e){if(le(n,t,function(){return n.linkProgram(e)}),n.getProgramParameter(e,n.LINK_STATUS)===!1)throw console.log(n.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function Aa(n,t,e){if(le(n,t,function(){return n.validateProgram(e)}),n.getProgramParameter(e,n.VALIDATE_STATUS)===!1)throw console.log(n.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function fg(n,t,e){var r=Rn(n,t,function(){return n.createBuffer()},"Unable to create WebGLBuffer");return le(n,t,function(){return n.bindBuffer(n.ARRAY_BUFFER,r)}),le(n,t,function(){return n.bufferData(n.ARRAY_BUFFER,e,n.STATIC_DRAW)}),r}function hg(n,t,e){var r=Rn(n,t,function(){return n.createBuffer()},"Unable to create WebGLBuffer");return le(n,t,function(){return n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r)}),le(n,t,function(){return n.bufferData(n.ELEMENT_ARRAY_BUFFER,e,n.STATIC_DRAW)}),r}function dg(n,t){return Rn(n,t,function(){return n.createTexture()},"Unable to create WebGLTexture.")}function pg(n,t){var e=H().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(n<=0||t<=0){var r="["+n+"x"+t+"]";throw new Error("Requested texture size "+r+" is invalid.")}if(n>e||t>e)throw r="["+n+"x"+t+"]",new Error("Requested texture size "+r+" greater than WebGL maximum on this browser / GPU "+("["+e+"x"+e+"]")+".")}function vg(n,t){return Rn(n,t,function(){return n.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function Hc(n,t,e,r,o,i,a,s){var u=n.getAttribLocation(e,r);return u!==-1&&(le(n,t,function(){return n.bindBuffer(n.ARRAY_BUFFER,o)}),le(n,t,function(){return n.vertexAttribPointer(u,i,n.FLOAT,!1,a,s)}),le(n,t,function(){return n.enableVertexAttribArray(u)}),!0)}function mg(n,t,e,r){wg(n,r),le(n,t,function(){return n.activeTexture(n.TEXTURE0+r)}),le(n,t,function(){return n.bindTexture(n.TEXTURE_2D,e)})}function gg(n,t,e,r){return Rn(n,t,function(){return n.getUniformLocation(e,r)},'uniform "'+r+'" not present in program.')}function yg(n,t,e){return n.getUniformLocation(t,e)}function xg(n,t,e,r,o,i){le(n,t,function(){return mg(n,t,r,i)}),le(n,t,function(){return n.uniform1i(o,i)})}function Da(n,t,e,r){le(n,t,function(){return n.bindFramebuffer(n.FRAMEBUFFER,r)}),le(n,t,function(){return n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0)})}function Gc(n,t,e){le(n,t,function(){return n.bindFramebuffer(n.FRAMEBUFFER,e)}),le(n,t,function(){return n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,null,0)})}function Ko(n){var t=n.checkFramebufferStatus(n.FRAMEBUFFER);if(t!==n.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+bg(n,t))}function bg(n,t){switch(t){case n.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case n.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case n.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+t}}function Rn(n,t,e,r){var o=le(n,t,function(){return e()});if(o==null)throw new Error(r);return o}function wg(n,t){var e=n.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+n.TEXTURE0;if(r<n.TEXTURE0||r>e)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+e+"]")+".")}function wi(n,t){return t===void 0&&(t=2),ce(n.slice(0,n.length-t))}function _i(n){if(n.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[n.length>1?n[n.length-2]:1,n[n.length-1]]}function Ta(n){var t=[1,1,1];return n.length===0||n.length===1&&n[0]===1||(t=[wi(n)].concat(_i(n))),t}function _g(n,t){var e;t===void 0&&(t=!1);var r=H().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(r*=2,(n=n.map(function(c,l){return l>=n.length-2?zf(n[l]):n[l]})).length===1&&(n=[2,n[0]])),n.length!==2){var o=ar(n);n=o.newShape}var i=ce(n);if(n.length<=1&&i<=r)return[1,i];if(n.length===2&&n[0]<=r&&n[1]<=r)return n;if(n.length===3&&n[0]*n[1]<=r&&n[2]<=r)return[n[0]*n[1],n[2]];if(n.length===3&&n[0]<=r&&n[1]*n[2]<=r)return[n[0],n[1]*n[2]];if(n.length===4&&n[0]*n[1]*n[2]<=r&&n[3]<=r)return[n[0]*n[1]*n[2],n[3]];if(n.length===4&&n[0]<=r&&n[1]*n[2]*n[3]<=r)return[n[0],n[1]*n[2]*n[3]];if(t){var a=wi(n),s=2,u=2;return n.length&&(s=(e=_i(n))[0],u=e[1]),ls(i=a*(s/2)*(u/2)).map(function(c){return 2*c})}return ls(i)}function Xo(n){return n%2==0}function $o(n,t){if(at(n=n.slice(-2),t=t.slice(-2))||!n.length||!t.length||n[0]===0||n[1]===0||t[0]===0||t[1]===0)return!0;if(n.length!==t.length){var e=n.slice(-1)[0],r=t.slice(-1)[0];if(e===r||Xo(e)&&Xo(r)&&(n[0]===1||t[0]===1))return!0}return n[1]===t[1]&&Xo(n[0])&&Xo(t[0])}function Cg(n){if(Sa==null){var t=pn(n);Sa=t.getParameter(t.MAX_TEXTURE_SIZE)}return Sa}function Eg(n){if(ka==null){var t=pn(n);ka=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,ka)}function Ig(n){if(n===0)return 0;var t=pn(n);return Ht(t,"EXT_disjoint_timer_query_webgl2")&&n===2?2:Ht(t,"EXT_disjoint_timer_query")?1:0}function Ht(n,t){return n.getExtension(t)!=null}function jc(n){try{if(pn(n)!=null)return!0}catch{return!1}return!1}function Rg(n){if(n===0)return!1;var t=pn(n);if(n===1){if(!Ht(t,"OES_texture_float"))return!1}else if(!Ht(t,"EXT_color_buffer_float"))return!1;return gs(t)}function Sg(n){if(n===0)return!1;var t=pn(n);if(n!==1){if(Ht(t,"EXT_color_buffer_float"))return gs(t);if(Ht(t,"EXT_color_buffer_half_float")){var e=t.getExtension("EXT_color_buffer_half_float");return function(r,o){var i=Qs(r,o),a=r.createTexture();r.bindTexture(r.TEXTURE_2D,a),r.texImage2D(r.TEXTURE_2D,0,i.internalFormatHalfFloat,1,1,0,i.textureFormatFloat,i.textureTypeHalfFloat,null);var s=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,s),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,a,0);var u=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(a),r.deleteFramebuffer(s),u}(t,e)}return!1}return!!Ht(t,"OES_texture_float")&&!!Ht(t,"WEBGL_color_buffer_float")&&gs(t)}function gs(n){var t=Qs(n),e=n.createTexture();n.bindTexture(n.TEXTURE_2D,e),n.texImage2D(n.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);var r=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,r),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0);var o=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(e),n.deleteFramebuffer(r),o}function kg(n){return n===2&&pn(n).fenceSync!=null}var ge=H();function Jf(n){H().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(n+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function ie(n,t){return F.tidy(n,t)}function Rt(n){$f(n).forEach(function(t){return t.dispose()})}function Ag(n){return F.keep(n)}function Ci(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];H().getBool("IS_TEST")||console.warn.apply(console,n)}function Jn(n,t){var e=n;if(ln(n))return t==="string"?[]:[n.length];if(!Array.isArray(n))return[];for(var r=[];Array.isArray(e)||ln(e)&&t!=="string";)r.push(e.length),e=e[0];return Array.isArray(n)&&H().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function o(i,a,s){if(s=s||[],!Array.isArray(i)&&!ln(i))return void E(a.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+a[0]+" elements"});E(a.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+i.length+" elements"}),E(i.length===a[0],function(){return"Element arr["+s.join("][")+"] should have "+a[0]+" elements, but has "+i.length+" elements"});for(var u=a.slice(1),c=0;c<i.length;++c)o(i[c],u,s.concat(c))}(n,r,[]),r}function qc(n,t,e,r){if(n!=null&&(n!=="numeric"&&n!==t||n==="numeric"&&t==="string"))throw new Error("Argument '"+e+"' passed to '"+r+"' must be "+n+" tensor, but got "+t+" tensor")}function C(n,t,e,r){if(r===void 0&&(r="numeric"),n instanceof je)return qc(r,n.dtype,t,e),n;var o=Ao(n);if(o!=="string"&&["bool","int32","float32"].indexOf(r)>=0&&(o=r),qc(r,o,t,e),n==null||!ln(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string"){var i=n==null?"null":n.constructor.name;throw new Error("Argument '"+t+"' passed to '"+e+"' must be a Tensor or TensorLike, but got '"+i+"'")}var a=Jn(n,o);ln(n)||Array.isArray(n)||(n=[n]);var s=o!=="string"?Gf(n,o,H().getBool("DEBUG")):Gr(n,[],!0);return F.makeTensor(s,a,o)}function Ei(n,t,e,r){if(r===void 0&&(r="numeric"),!Array.isArray(n))throw new Error("Argument "+t+" passed to "+e+" must be a `Tensor[]` or `TensorLike[]`");return n.map(function(o,i){return C(o,t+"["+i+"]",e)},r)}function Qf(n,t){for(var e=0;e<n.length;++e)if(n[n.length-e-1]!==t-1-e)return!1;return!0}function Dg(n,t,e){for(var r=n.length+t.length,o=[],i=0,a=0,s=0;s<r;s++)e.indexOf(s)===-1?o.push(n[i++]):o.push(t[a++]);return o}function dt(n,t){for(var e=[],r=n.length,o=0;o<r;o++)t.indexOf(o)===-1&&e.push(n[o]);return[e,t.map(function(i){return n[i]})]}function At(n,t){return Dg(n,t.map(function(e){return 1}),t)}function Ft(n,t,e){E(Qf(t,e),function(){return n+" supports only inner-most axes for now. Got axes "+t+" and rank-"+e+" input."})}function vn(n,t){if(Qf(n,t))return null;for(var e=[],r=0;r<t;++r)n.indexOf(r)===-1&&e.push(r);return n.forEach(function(o){return e.push(o)}),e}function Zs(n){return n.map(function(t,e){return[e,t]}).sort(function(t,e){return t[1]-e[1]}).map(function(t){return t[0]})}function mn(n,t){for(var e=[],r=t-n;r<t;++r)e.push(r);return e}function Tg(n,t){var e=n[0].length;n.forEach(function(o,i){E(o.length===e,function(){return"Error in concat"+e+"D: rank of tensors["+i+"] must be the same as the rank of the rest ("+e+")"})}),E(t>=0&&t<e,function(){return"Error in concat"+e+"D: axis must be between 0 and "+(e-1)+"."});var r=n[0];n.forEach(function(o,i){for(var a=0;a<e;a++)E(a===t||o[a]===r[a],function(){return"Error in concat"+e+"D: Shape of tensors["+i+"] ("+o+") does not match the shape of the rest ("+r+") along the non-concatenated axis "+i+"."})})}function qr(n,t){for(var e=n[0].slice(),r=1;r<n.length;r++)e[t]+=n[r][t];return e}function D(n){var t=Object.keys(n);if(t.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+t.length+" keys.");var e=t[0],r=n[e];e.endsWith("_")&&(e=e.substring(0,e.length-1));var o=function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];F.startScope(e);try{var s=r.apply(void 0,i);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),F.endScope(s),s}catch(u){throw F.endScope(null),u}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}ge.registerFlag("HAS_WEBGL",function(){return ge.getNumber("WEBGL_VERSION")>0}),ge.registerFlag("WEBGL_VERSION",function(){return jc(2)?2:jc(1)?1:0}),ge.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return ge.get("WEBGL_VERSION")===2}),ge.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),ge.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),ge.registerFlag("WEBGL_PACK",function(){return ge.getBool("HAS_WEBGL")}),ge.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return ge.getBool("WEBGL_PACK")}),ge.registerFlag("WEBGL_PACK_CLIP",function(){return ge.getBool("WEBGL_PACK")}),ge.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),ge.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return ge.getBool("WEBGL_PACK")}),ge.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return ge.getBool("WEBGL_PACK")}),ge.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return ge.getBool("WEBGL_PACK")}),ge.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return ge.getBool("WEBGL_PACK")}),ge.registerFlag("WEBGL_PACK_REDUCE",function(){return ge.getBool("WEBGL_PACK")}),ge.registerFlag("WEBGL_LAZILY_UNPACK",function(){return ge.getBool("WEBGL_PACK")}),ge.registerFlag("WEBGL_CONV_IM2COL",function(){return ge.getBool("WEBGL_PACK")}),ge.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return Cg(ge.getNumber("WEBGL_VERSION"))}),ge.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return Eg(ge.getNumber("WEBGL_VERSION"))}),ge.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var n=ge.getNumber("WEBGL_VERSION");return n===0?0:Ig(n)}),ge.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return ge.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(n=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(n)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(n.substr(0,4))));var n}),ge.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return Rg(ge.getNumber("WEBGL_VERSION"))}),ge.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!ge.getBool("WEBGL_FORCE_F16_TEXTURES")&&ge.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),ge.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return Sg(ge.getNumber("WEBGL_VERSION"))}),ge.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return kg(ge.getNumber("WEBGL_VERSION"))}),ge.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return ge.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),Xf=Jf;var lt=D({complex_:function(n,t){var e=C(n,"real","complex"),r=C(t,"imag","complex");return Le(e.shape,r.shape,"real and imag shapes, "+e.shape+" and "+r.shape+", must match in call to tf.complex()."),F.runKernelFunc(function(o){return o.complex(e,r)},{$real:e,$imag:r})}}),Vt=D({real_:function(n){var t=C(n,"input","real");return F.runKernelFunc(function(e){return e.real(t)},{$input:t})}}),un=D({imag_:function(n){var t=C(n,"input","imag");return F.runKernelFunc(function(e){return e.imag(t)},{$input:t})}});function ht(n,t,e){return Qn(n,t,Jn(n,e),e)}function Qn(n,t,e,r){if(r==null&&(r=Ao(n)),r==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!ln(n)&&!Array.isArray(n)&&typeof n!="number"&&typeof n!="boolean"&&typeof n!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){qf(t);var o=ce(t),i=ce(e);E(o===i,function(){return"Based on the provided shape, ["+t+"], the tensor should have "+o+" values but has "+i});for(var a=0;a<e.length;++a){var s=e[a],u=a!==e.length-1||s!==ce(t.slice(a));E(e[a]===t[a]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+e+") does not match the provided shape ("+t+"). "})}}return ln(n)||Array.isArray(n)||(n=[n]),t=t||e,n=r!=="string"?Gf(n,r,H().getBool("DEBUG")):Gr(n,[],!0),F.makeTensor(n,t,r)}function re(n,t){if((ln(n)&&t!=="string"||Array.isArray(n))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&ln(n)&&!(n instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Qn(n,[],[],t)}function Je(n,t){$r(n);var e=Jn(n,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Qn(n,null,e,t)}function Hn(n,t,e){if($r(n),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var r=Jn(n,e);if(r.length!==2&&r.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Qn(n,t,r,e)}function eu(n,t,e){if($r(n),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var r=Jn(n,e);if(r.length!==3&&r.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Qn(n,t,r,e)}function Ct(n,t,e){if($r(n),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var r=Jn(n,e);if(r.length!==4&&r.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Qn(n,t,r,e)}function Ng(n,t,e){if($r(n),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var r=Jn(n,e);if(r.length!==5&&r.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Qn(n,t,r,e)}function Fg(n,t,e){if($r(n),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var r=Jn(n,e);if(r.length!==6&&r.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(r.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return Qn(n,t=t||r,r,e)}function Pg(n,t,e,r){return t===void 0&&(t=!0),F.makeVariable(n,t,e,r)}function Yr(n,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=Yr(n,"float32"),r=ze(n,"float32");return lt(e,r)}var o=jf(ce(n),t);return F.makeTensor(o,n,t)}function ze(n,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=ze(n,"float32"),r=ze(n,"float32");return lt(e,r)}var o=Do(ce(n),t);return F.makeTensor(o,n,t)}function hn(n,t,e){return F.runKernelFunc(function(r){return r.fill(n,t,e)},{})}function Mg(n,t,e){if(e<=0)throw new Error("The number of values should be positive.");return F.runKernelFunc(function(r){return r.linspace(n,t,e)},{})}function Ii(n,t,e,r){if(e===void 0&&(e=1),r===void 0&&(r="float32"),e===0)throw new Error("Cannot have a step of zero");if(n===t||n<t&&e<0||t<n&&e>1)return ze([0],r);var o=Do(Math.abs(Math.ceil((t-n)/e)),r);t<n&&e===1&&(e=-1),o[0]=n;for(var i=1;i<o.length;i++)o[i]=o[i-1]+e;return Je(o,r)}var Zf=D({onesLike_:function(n){var t=C(n,"x","onesLike");if(t.dtype==="complex64"){var e=Zf(Vt(t)),r=Fe(un(t));return lt(e,r)}return F.runKernelFunc(function(o){return o.onesLike(t)},{$x:t},function(o,i){return{$x:function(){return Fe(o)}}})}}),Fe=D({zerosLike_:function(n){var t=C(n,"x","zerosLike");return F.runKernelFunc(function(e){return e.zerosLike(t)},{$x:t},function(e,r){return{$x:function(){return Fe(e)}}})}}),Ze=D({concat_:function(n,t){t===void 0&&(t=0),E(n.length>=1,function(){return"Pass at least one tensor to concat"});var e=Ei(n,"tensors","concat");e[0].dtype==="complex64"&&e.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),t=rt(t,e[0].shape)[0];var r=qr(e.map(function(s){return s.shape}),t);if(ce(r)===0)return ht([],r);if((e=e.filter(function(s){return s.size>0})).length===1)return e[0];var o=e.map(function(s){return s.shape});Tg(o,t);var i=e,a={axis:t};return F.runKernelFunc(function(s){return s.concat(e,t)},i,function(s){var u=o.map(function(c){return c[t]});return tu(s,u,t).map(function(c){return function(){return c}})},"Concat",a)}}),Og=D({concat1d_:function(n){return Ze(n,0)}}),Bg=D({concat2d_:function(n,t){return Ze(n,t)}}),Lg=D({concat3d_:function(n,t){return Ze(n,t)}}),Wg=D({concat4d_:function(n,t){return Ze(n,t)}}),tu=D({split_:function(n,t,e){e===void 0&&(e=0);var r,o=C(n,"x","split");return e=rt(e,o.shape)[0],typeof t=="number"?(E(o.shape[e]%t==0,function(){return"Number of splits must evenly divide the axis."}),r=new Array(t).fill(o.shape[e]/t)):(E(o.shape[e]===t.reduce(function(i,a){return i+a}),function(){return"The sum of sizes must match the size of the axis dimension."}),r=t),F.runKernelFunc(function(i){return i.split(o,r,e)},{$x:o},function(i){return{$x:function(){return Ze(i,e)}}})}});function mr(n,t){return n(t={exports:{}},t.exports),t.exports}var Ug=mr(function(n){(function(t,e,r){function o(s){var u,c=this,l=(u=4022871197,function(f){f=f.toString();for(var h=0;h<f.length;h++){var d=.02519603282416938*(u+=f.charCodeAt(h));d-=u=d>>>0,u=(d*=u)>>>0,u+=4294967296*(d-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var f=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=f-(c.c=0|f)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function i(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function a(s,u){var c=new o(s),l=u&&u.state,f=c.next;return f.int32=function(){return 4294967296*c.next()|0},f.double=function(){return f()+11102230246251565e-32*(2097152*f()|0)},f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.alea=a})(0,n)}),Vg=mr(function(n){(function(t,e,r){function o(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var f=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^f^f>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function i(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function a(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.xor128=a})(0,n)}),zg=mr(function(n){(function(t,e,r){function o(s){var u=this,c="";u.next=function(){var f=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^f^f<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function i(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function a(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.xorwow=a})(0,n)}),Hg=mr(function(n){(function(t,e,r){function o(s){var u=this;u.next=function(){var c,l,f=u.x,h=u.i;return c=f[h],l=(c^=c>>>7)^c<<24,l^=(c=f[h+1&7])^c>>>10,l^=(c=f[h+3&7])^c>>>3,l^=(c=f[h+4&7])^c<<7,c=f[h+7&7],l^=(c^=c<<13)^c<<9,f[h]=l,u.i=h+1&7,l},function(c,l){var f,h=[];if(l===(0|l))h[0]=l;else for(l=""+l,f=0;f<l.length;++f)h[7&f]=h[7&f]<<15^l.charCodeAt(f)+h[f+1&7]<<13;for(;h.length<8;)h.push(0);for(f=0;f<8&&h[f]===0;++f);for(f==8?h[7]=-1:h[f],c.x=h,c.i=0,f=256;f>0;--f)c.next()}(u,s)}function i(s,u){return u.x=s.x.slice(),u.i=s.i,u}function a(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.x&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.xorshift7=a})(0,n)}),Gg=mr(function(n){(function(t,e,r){function o(s){var u=this;u.next=function(){var c,l,f=u.w,h=u.X,d=u.i;return u.w=f=f+1640531527|0,l=h[d+34&127],c=h[d=d+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=h[d]=l^c,u.i=d,l+(f^f>>>16)|0},function(c,l){var f,h,d,p,v,m=[],g=128;for(l===(0|l)?(h=l,l=null):(l+="\0",h=0,g=Math.max(g,l.length)),d=0,p=-32;p<g;++p)l&&(h^=l.charCodeAt((p+32)%l.length)),p===0&&(v=h),h^=h<<10,h^=h>>>15,h^=h<<4,h^=h>>>13,p>=0&&(v=v+1640531527|0,d=(f=m[127&p]^=h+v)==0?d+1:0);for(d>=128&&(m[127&(l&&l.length||0)]=-1),d=127,p=512;p>0;--p)h=m[d+34&127],f=m[d=d+1&127],h^=h<<13,f^=f<<17,h^=h>>>15,f^=f>>>12,m[d]=h^f;c.w=v,c.X=m,c.i=d}(u,s)}function i(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function a(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(l.X&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.xor4096=a})(0,n)}),jg=mr(function(n){(function(t,e,r){function o(s){var u=this,c="";u.next=function(){var f=u.b,h=u.c,d=u.d,p=u.a;return f=f<<25^f>>>7^h,h=h-d|0,d=d<<24^d>>>8^p,p=p-f|0,u.b=f=f<<20^f>>>12^h,u.c=h=h-d|0,u.d=d<<16^h>>>16^p,u.a=p-f|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function i(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function a(s,u){var c=new o(s),l=u&&u.state,f=function(){return(c.next()>>>0)/4294967296};return f.double=function(){do var h=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(h===0);return h},f.int32=c.next,f.quick=f,l&&(typeof l=="object"&&i(l,c),f.state=function(){return i(c,{})}),f}e&&e.exports?e.exports=a:this.tychei=a})(0,n)}),or=mr(function(n){(function(t,e){var r,o=this,i=256,a=6,s="random",u=e.pow(i,a),c=e.pow(2,52),l=2*c,f=i-1;function h(g,x,b){var y=[],w=v(function S(R,I){var P,N=[],V=typeof R;if(I&&V=="object")for(P in R)try{N.push(S(R[P],I-1))}catch{}return N.length?N:V=="string"?R:R+"\0"}((x=x==1?{entropy:!0}:x||{}).entropy?[g,m(t)]:g??function(){try{var S;return r&&(S=r.randomBytes)?S=S(i):(S=new Uint8Array(i),(o.crypto||o.msCrypto).getRandomValues(S)),m(S)}catch{var R=o.navigator,I=R&&R.plugins;return[+new Date,o,I,o.screen,m(t)]}}(),3),y),_=new d(y),k=function(){for(var S=_.g(a),R=u,I=0;S<c;)S=(S+I)*i,R*=i,I=_.g(1);for(;S>=l;)S/=2,R/=2,I>>>=1;return(S+I)/R};return k.int32=function(){return 0|_.g(4)},k.quick=function(){return _.g(4)/4294967296},k.double=k,v(m(_.S),t),(x.pass||b||function(S,R,I,P){return P&&(P.S&&p(P,_),S.state=function(){return p(_,{})}),I?(e[s]=S,R):S})(k,w,"global"in x?x.global:this==e,x.state)}function d(g){var x,b=g.length,y=this,w=0,_=y.i=y.j=0,k=y.S=[];for(b||(g=[b++]);w<i;)k[w]=w++;for(w=0;w<i;w++)k[w]=k[_=f&_+g[w%b]+(x=k[w])],k[_]=x;(y.g=function(S){for(var R,I=0,P=y.i,N=y.j,V=y.S;S--;)R=V[P=f&P+1],I=I*i+V[f&(V[P]=V[N=f&N+R])+(V[N]=R)];return y.i=P,y.j=N,I})(i)}function p(g,x){return x.i=g.i,x.j=g.j,x.S=g.S.slice(),x}function v(g,x){for(var b,y=g+"",w=0;w<y.length;)x[f&w]=f&(b^=19*x[f&w])+y.charCodeAt(w++);return m(x)}function m(g){return String.fromCharCode.apply(0,g)}if(e["seed"+s]=h,v(e.random(),t),n.exports){n.exports=h;try{r=require("crypto")}catch{}}})([],Math)});or.alea=Ug,or.xor128=Vg,or.xorwow=zg,or.xorshift7=Hg,or.xor4096=Gg,or.tychei=jg;var Zi=or.alea,nu=function(){function n(t,e,r,o,i){this.mean=t,this.stdDev=e,this.dtype=r,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var a=i||Math.random();this.random=Zi(a.toString())}return n.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var e,r,o=!1;!o;){var i=void 0,a=void 0,s=void 0;do s=(i=2*this.random()-1)*i+(a=2*this.random()-1)*a;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*i*u,r=this.mean+this.stdDev*a*u,this.truncated&&!this.isValidTruncated(e)||(o=!0)}return this.truncated&&!this.isValidTruncated(r)||(this.nextVal=this.convertValue(r)),this.convertValue(e)},n.prototype.convertValue=function(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)},n.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},n}(),qg=function(){function n(t,e,r,o){this.alpha=t,this.beta=1/e,this.dtype=r;var i=o||Math.random();this.randu=Zi(i.toString()),this.randn=new nu(0,1,r,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}return n.prototype.nextValue=function(){for(var t,e,r,o,i,a;;){do o=this.randn.nextValue(),a=1+this.c*o;while(a<=0);if(a*=a*a,e=1-.331*(t=o*o)*t,r=.5*t+this.d*(1-a+Math.log(a)),(i=this.randu())<e||Math.log(i)<r)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)},n.prototype.convertValue=function(t){return this.dtype==="float32"?t:Math.round(t)},n}(),Kg=function(){function n(t,e,r,o){var i=this;if(t===void 0&&(t=0),e===void 0&&(e=1),this.canReturnFloat=function(){return i.dtype==null||i.dtype==="float32"},this.min=t,this.range=e-t,this.dtype=r,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+e+" <= 1 and dtype is not float");this.random=Zi(o)}return n.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},n.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},n}();function be(n,t,e){return t===void 0&&(t="float32"),t=t||"float32",qf(n),new wo(n,t,e)}function Xg(n,t){t===void 0&&(t=!1),console.log(n.toString(t))}var eh=D({batchToSpaceND_:function(n,t,e){var r=C(n,"x","batchToSpaceND"),o=t.reduce(function(i,a){return i*a});return E(r.rank>=1+t.length,function(){return"input rank is "+r.rank+" but should be > than blockShape.length "+t.length}),E(e.length===t.length,function(){return"crops.length is "+e.length+" but should be equal to blockShape.length  "+t.length}),E(r.shape[0]%o==0,function(){return"input tensor batch is "+r.shape[0]+" but is not divisible by the product of the elements of blockShape "+t.join(" * ")+" === "+o}),F.runKernelFunc(function(i){return i.batchToSpaceND(r,t,e)},{$x:r},function(i){return{$x:function(){return i.spaceToBatchND(t,e)}}})}}),$g=D({broadcastTo_:function(n,t){var e=C(n,"broadcastTo","x"),r=e.shape;if(t.some(function(u){return!(u>0)||u%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+t+"].");if(t.length<e.rank)throw new Error("broadcastTo(): shape.length="+t.length+" < input.rank="+e.rank+".");if(t.length>e.rank){for(var o=e.shape.slice();o.length<t.length;)o.unshift(1);e=e.reshape(o)}for(var i=Array.from(t),a=t.length-1;a>=0;a--)if(e.shape[a]===t[a])i[a]=1;else if(e.shape[a]!==1)throw new Error("broadcastTo(): ["+r+"] cannot be broadcast to ["+t+"].");var s=i.map(function(u,c){return u>1?c:-1}).filter(function(u){return u>=0});return s.length===0?e.clone():F.runKernelFunc(function(u){return u.tile(e,i)},{input:e},function(u){return{input:function(){return u.sum(s,!0)}}})}}),Yg=D({cast_:function(n,t){var e=C(n,"x","cast");if(!zm(t))throw new Error("Failed to cast to unknown dtype "+t);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");var r={dtype:t};return F.runKernelFunc(function(o){return o.cast(e,t)},{x:e},function(o){return{x:function(){return o.clone()}}},"Cast",r)}}),Jg=D({clone_:function(n){var t=C(n,"x","clone",null);return F.runKernelFunc(function(){return F.makeTensorFromDataId(t.dataId,t.shape,t.dtype)},{$x:t},function(e){return{$x:function(){return e.toFloat()}}})}}),Qg=D({cumsum_:function(n,t,e,r){t===void 0&&(t=0),e===void 0&&(e=!1),r===void 0&&(r=!1);var o=C(n,"x","cumsum"),i=vn([t|=0],o.rank),a=o;i!=null&&(a=o.transpose(i));var s=mn(1,o.rank)[0],u=F.runKernelFunc(function(c){return c.cumsum(a,s,e,r)},{permutedX:a},function(c){return{permutedX:function(){return c.cumsum(t,e,!r)}}});return i!=null&&(u=u.transpose(i)),u}}),Zg=D({depthToSpace_:function(n,t,e){e===void 0&&(e="NHWC");var r=C(n,"x","depthToSpace"),o=e==="NHWC"?r.shape[1]:r.shape[2],i=e==="NHWC"?r.shape[2]:r.shape[3],a=e==="NHWC"?r.shape[3]:r.shape[1];return E(o*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+t+`  for depthToSpace with input shape
      `+r.shape}),E(i*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+i+" and "+t+` for depthToSpace with input shape
          `+r.shape}),E(a%(t*t)==0,function(){return"Dimension size must be evenly divisible by "+t*t+" but is "+a+" for depthToSpace with input shape "+r.shape}),F.runKernelFunc(function(s){return s.depthToSpace(r,t,e)},{$x:r})}}),Ut=D({expandDims_:function(n,t){t===void 0&&(t=0);var e=C(n,"x","expandDims",null);E(t<=e.rank,function(){return"Axis must be <= rank of the tensor"});var r=e.shape.slice();return t<0&&(E(-(e.rank+1)<=t,function(){return"Axis must be in the interval ["+-(e.rank+1)+", "+e.rank+"]"}),t=e.rank+t+1),r.splice(t,0,1),Xt(e,r)}}),th=D({eye_:function(n,t,e,r){r===void 0&&(r="float32"),t==null&&(t=n);for(var o=be([n,t],r),i=n<=t?n:t,a=0;a<i;++a)o.set(1,a,a);var s=o.toTensor().as2D(n,t);if(e==null)return s;if(e.length===1)return Mr(Ut(s,0),[e[0],1,1]);if(e.length===2)return Mr(Ut(Ut(s,0),0),[e[0],e[1],1,1]);if(e.length===3)return Mr(Ut(Ut(Ut(s,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+e.length+"D.")}}),e0=D({multinomial_:function(n,t,e,r){r===void 0&&(r=!1);var o=C(n,"logits","multinomial"),i=o.size,a=o.rank;if(i<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+i+".");if(a>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+a);e=e||Math.random();var s=a===1?o.as2D(1,-1):o,u=F.runKernelFunc(function(c){return c.multinomial(s,r,t,e)},{logits2D:s});return a===1?u.as1D():u}}),ys=D({oneHot_:function(n,t,e,r){if(e===void 0&&(e=1),r===void 0&&(r=0),t<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+t);var o=C(n,"indices","oneHot","int32"),i=o.shape.concat([t]);return o=o.flatten(),F.runKernelFunc(function(a){return a.oneHot(o,t,e,r)},{$indices:o},function(a){return{$indices:function(){return ze(o.shape,"float32")}}}).reshape(i)}}),gr=D({pad_:function(n,t,e){e===void 0&&(e=0);var r=C(n,"x","pad");if(r.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:t,constantValue:e};return F.runKernelFunc(function(i){return i.pad(r,t,e)},{x:r},function(i){var a=t.map(function(s){return s[0]});return{x:function(){return i.slice(a,r.shape)}}},"PadV2",o)}}),t0=D({pad1d_:function(n,t,e){return e===void 0&&(e=0),E(t.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),gr(n,[t],e)}}),n0=D({pad2d_:function(n,t,e){return e===void 0&&(e=0),E(t.length===2&&t[0].length===2&&t[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),gr(n,t,e)}}),r0=D({pad3d_:function(n,t,e){return e===void 0&&(e=0),E(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),gr(n,t,e)}}),o0=D({pad4d_:function(n,t,e){return e===void 0&&(e=0),E(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),gr(n,t,e)}}),i0=D({rand_:function(n,t,e){var r=ce(n),o=null;if(e==null||e==="float32")o=new Float32Array(r);else if(e==="int32")o=new Int32Array(r);else{if(e!=="bool")throw new Error("Unknown data type "+e);o=new Uint8Array(r)}for(var i=0;i<r;i++)o[i]=t();return F.makeTensor(o,n,e)}}),a0=D({randomNormal_:function(n,t,e,r,o){if(t===void 0&&(t=0),e===void 0&&(e=1),r!=null&&r==="bool")throw new Error("Unsupported data type "+r);for(var i=new nu(t,e,r,!1,o),a=be(n,r),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),s0=D({randomGamma_:function(n,t,e,r,o){if(e===void 0&&(e=1),r===void 0&&(r="float32"),e==null&&(e=1),r==null&&(r="float32"),r!=="float32"&&r!=="int32")throw new Error("Unsupported data type "+r);for(var i=new qg(t,e,r,o),a=be(n,r),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),nh=D({randomUniform_:function(n,t,e,r,o){t===void 0&&(t=0),e===void 0&&(e=1),r===void 0&&(r="float32");for(var i=be(n,r),a=new Kg(t,e,null,o),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),Xt=D({reshape_:function(n,t){var e=C(n,"x","reshape",null);t=Um(t,e.size),E(e.size===ce(t),function(){return"new shape and old shape must have the same number of elements."});var r={shape:t};return F.runKernelFunc(function(o){return o.reshape(e,t)},{x:e},function(o){return{x:function(){return o.reshape(e.shape)}}},"Reshape",r)}}),rh=D({spaceToBatchND_:function(n,t,e){var r=C(n,"x","spaceToBatchND");return E(r.rank>=1+t.length,function(){return"input rank "+r.rank+" should be > than [blockShape] "+t.length}),E(e.length===t.length,function(){return"paddings.shape[0] "+e.length+" must be equal to [blockShape] "+t.length}),E(r.shape.reduce(function(o,i,a){return a>0&&a<=t.length?o&&(i+e[a-1][0]+e[a-1][1])%t[a-1]==0:o},!0),function(){return"input spatial dimensions "+r.shape.slice(1)+" with paddings "+e.toString()+" must be divisible by blockShapes "+t.toString()}),F.runKernelFunc(function(o){return o.spaceToBatchND(r,t,e)},{$x:r},function(o){return{$x:function(){return o.batchToSpaceND(t,e)}}})}}),oh=D({squeeze_:function(n,t){var e=C(n,"x","squeeze");return Xt(e,ar(e.shape,t).newShape)}}),Wt=D({stack_:function(n,t){t===void 0&&(t=0);var e=Ei(n,"tensors","stack");if(E(e.length>=1,function(){return"Pass at least one tensor to tf.stack"}),e.length===1)return e[0].expandDims(t);var r=e[0].rank,o=e[0].shape,i=e[0].dtype;E(t<=r,function(){return"Axis must be <= rank of the tensor"}),e.forEach(function(s){Le(o,s.shape,"All tensors passed to stack must have matching shapes")}),e.forEach(function(s){E(i===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var a=e.map(function(s){return s.expandDims(t)});return Ze(a,t)}}),Mr=D({tile_:function(n,t){var e=C(n,"x","tile",null);E(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of reps "+t+"."});var r=[e],o={reps:t};return F.runKernelFunc(function(i,a){var s=i.tile(e,t);return a([e]),s},{x:e},function(i,a){var s=a[0];return{x:function(){var u=Fe(s);if(s.rank===1)for(var c=0;c<t[0];++c)u=u.add(i.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<t[0];++c)for(var l=0;l<t[1];++l)u=u.add(i.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(var f=0;f<t[2];++f)u=u.add(i.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(f=0;f<t[2];++f)for(var h=0;h<t[3];++h)u=u.add(i.slice([c*s.shape[0],l*s.shape[1],f*s.shape[2],h*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}},"Tile",o,r)}}),u0=D({truncatedNormal_:function(n,t,e,r,o){if(t===void 0&&(t=0),e===void 0&&(e=1),r!=null&&r==="bool")throw new Error("Unsupported data type "+r);for(var i=new nu(t,e,r,!0,o),a=be(n,r),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),et=D({unstack_:function(n,t){t===void 0&&(t=0),t=t||0;var e=C(n,"x","unstack");E(t>=-e.shape.length&&t<e.shape.length,function(){return"Axis = "+t+" is not in [-"+e.shape.length+", "+e.shape.length+")"}),t<0&&(t+=e.shape.length);var r={axis:t};return F.runKernelFunc(function(o){return o.unstack(e,t)},{x:e},function(o){return{x:function(){return Wt(o,t)}}},"Unpack",r)}}),c0=function(n,t){return se(this,void 0,void 0,function(){var e,r,o,i,a,s,u,c,l,f;return ue(this,function(h){switch(h.label){case 0:return e=C(n,"x","setdiff1d"),r=C(t,"y","setdiff1d"),E(e.dtype===r.dtype,function(){return"x and y should have the same dtype, but got x ("+e.dtype+") and y ("+r.dtype+")."}),E(e.rank===1,function(){return"x should be 1D tensor, but got x ("+e.shape+")."}),E(r.rank===1,function(){return"y should be 1D tensor, but got y ("+r.shape+")."}),[4,e.data()];case 1:return o=h.sent(),[4,r.data()];case 2:for(i=h.sent(),a=new Set(i),s=0,l=0;l<o.length;l++)a.has(o[l])||s++;for(u=new wo([s],e.dtype),c=new wo([s],"int32"),l=0,f=0;l<o.length;l++)a.has(o[l])||(u.values[f]=o[l],c.values[f]=l,f++);return[2,[u.toTensor(),c.toTensor()]]}})})};function Ri(n,t,e,r){r===void 0&&(r=!0);var o=[];if(r)(o=o.concat(t.slice(0))).push(n[0]/e),o=o.concat(n.slice(1));else{o=o.concat(n[0]);for(var i=t.length,a=0;a<i;++a)o=o.concat([n[a+1]/t[a],t[a]]);o=o.concat(n.slice(i+1))}return o}function Si(n,t,e){e===void 0&&(e=!0);var r=[];if(e){r.push(t);for(var o=t+1;o<n;++o)o<=2*t?(r.push(o),r.push(o-(t+1))):r.push(o)}else{var i=[],a=[];for(o=1;o<n;++o)o>=2*t+1||o%2==1?a.push(o):i.push(o);r.push.apply(r,i),r.push(0),r.push.apply(r,a)}return r}function ki(n,t,e,r){r===void 0&&(r=!0);var o=[];r?o.push(n[0]/e):o.push(n[0]*e);for(var i=1;i<n.length;++i)i<=t.length?r?o.push(t[i-1]*n[i]):o.push(n[i]/t[i-1]):o.push(n[i]);return o}function ih(n,t){for(var e=[0],r=0;r<t;++r)e.push(n[r][0]);return e}function ah(n,t,e){for(var r=n.slice(0,1),o=0;o<e;++o)r.push(n[o+1]-t[o][0]-t[o][1]);return r}function sh(n,t){if(n.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+n.rank+".");if(t.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(t.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.shape[t.rank-1]>n.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+t.shape[t.rank-1]+" vs. "+n.rank);if(n.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+n.shape+".");for(var e=t.shape,r=e[e.length-1],o=1,i=0;i<e.length-1;++i)o*=e[i];var a=n.shape,s=e.slice();s.pop();var u=1;for(i=r;i<n.rank;++i)u*=a[i],s.push(a[i]);var c=fn(n.shape).map(function(l){return l/u}).concat([1]).slice(0,r);return[s,o,u,c]}var uh=30;function Na(n){return n<=uh?n:hs(n,Math.floor(Math.sqrt(n)))}function l0(n,t,e){var r=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,i="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+e.shape+", indices.shape: "+t.shape+", shape: "+n+", sliceDim: "+r+", and batchDim: "+o+".";if(e.rank<o)throw new Error(i+" update.rank < "+o+". ");if(n.length<r+(e.rank-o))throw new Error(i+" Output shape length < "+(r+(e.rank-o)));if(e.rank!==o+n.length-r)throw new Error(i+" update.rank != "+(o+n.length-r));for(var a=0;a<o;++a)if(e.shape[a]!==t.shape[a])throw new Error(i+" updates.shape["+a+"] ("+e.shape[a]+") != indices.shape["+a+"] ("+t.shape[a]+").");for(a=0;a<e.rank-o;++a)if(e.shape[a+o]!==n[a+r])throw new Error(i+" updates.shape["+(a+o)+"] ("+e.shape[a+o]+") != shape["+(a+o)+"] ("+n[a+o]+")")}function f0(n,t,e){if(t.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(n.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+n.rank+".");if(t.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+t.dtype);if(e.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+e);if(e.length===0){if(t.size===0)throw new Error("Indices specified for empty output. indices shape: "+t.shape);if(n.size===0)throw new Error("Updates specified for empty output. updates shape: "+n.shape)}l0(e,t,n)}function Ai(n,t,e){for(var r=t.shape.length,o=r>1?t.shape[r-1]:1,i=e.length,a=1,s=o;s<i;++s)a*=e[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:ce(t.shape)/u,sliceSize:a,strides:fn(e.slice(0,o)).concat([1]),outputSize:ce(e)}}function h0(n,t,e){E(n.rank===t.length,function(){return"Error in slice"+n.rank+"D: Length of begin "+t+" must match the rank of the array ("+n.rank+")."}),E(n.rank===e.length,function(){return"Error in slice"+n.rank+"D: Length of size "+e+" must match the rank of the array ("+n.rank+")."});for(var r=function(i){E(t[i]+e[i]<=n.shape[i],function(){return"Error in slice"+n.rank+"D: begin["+i+"] + size["+i+"] ("+(t[i]+e[i])+") would overflow input.shape["+i+"] ("+n.shape[i]+")"})},o=0;o<n.rank;++o)r(o)}function Kc(n){for(var t=[],e=0;n>0;)1&n&&t.push(e),n/=2,e++;return t}function ru(n,t,e){for(var r=[],o=0;o<n.length;o++)r[o]=Math.ceil((t[o]-n[o])/e[o]);return r}function d0(n,t,e,r,o){var i=t[o],a=e[o]||1;(n&1<<o||i==null)&&(i=a>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=r[o];return i<0&&(i+=s),i=cs(0,i,s-1)}function p0(n,t,e,r,o){var i=t[o],a=e[o]||1;(n&1<<o||i==null)&&(i=a>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=r[o];return i<0&&(i+=s),i=a>0?cs(0,i,s):cs(-1,i,s-1)}function ch(n,t,e){for(var r=e.length,o=0;o<e.length;o++)if(e[o]>1){r=o;break}for(o=r+1;o<e.length;o++)if(t[o]>0||e[o]!==n[o])return!1;return!0}function lh(n,t){for(var e=n.length>0?n[n.length-1]:1,r=0;r<n.length-1;r++)e+=n[r]*t[r];return e}function v0(n,t){E(fs(n),function(){return"The f passed in variableGrads(f) must be a function"}),E(t==null||Array.isArray(t)&&t.every(function(l){return l instanceof jr}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var e=t!=null;if(!e)for(var r in t=[],F.registeredVariables)t.push(F.registeredVariables[r]);var o=e?t.filter(function(l){return!l.trainable}):null,i=t.length;E((t=t.filter(function(l){return l.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+i+" variables is trainable."});var a=F.gradients(n,t,null,!0),s=a.value,u=a.grads;E(u.some(function(l){return l!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),E(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var c={};return t.forEach(function(l,f){u[f]!=null&&(c[l.name]=u[f])}),o!=null&&o.forEach(function(l){return c[l.name]=null}),{value:s,grads:c}}function ea(n){return F.customGrad(n)}var Sn=D({softmax_:function(n,t){t===void 0&&(t=-1);var e=C(n,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and dim was "+t);return F.runKernelFunc(function(r,o){var i=r.softmax(e,t);return o([i]),i},{logits:e},function(r,o){var i=o[0],a=r.mul(i);return{logits:function(){return a.sub(a.sum([t],!0).mul(i))}}},"Softmax",{dim:t},[],[!0])}}),m0=D({logSoftmax_:function(n,t){t===void 0&&(t=-1);var e=C(n,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and axis was "+t);return ea(function(r,o){var i=r.max(t,!0),a=r.sub(i),s=a.toFloat().sub(a.exp().sum(t,!0).log());return o([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(t,!0).mul(l))}}})(e)}}),fh=function(){function n(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}return n.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},n.prototype.set=function(t,e){this.dataIdsCount++,this.data.set(t,e)},n.prototype.has=function(t){return this.data.has(t)},n.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},n.prototype.numDataIds=function(){return this.dataIdsCount},n}(),hh=function(){function n(){}return n.prototype.time=function(t){return M("time")},n.prototype.read=function(t){return M("read")},n.prototype.readSync=function(t){return M("readSync")},n.prototype.numDataIds=function(){return M("numDataIds")},n.prototype.disposeData=function(t){return M("disposeData")},n.prototype.write=function(t,e,r){return M("write")},n.prototype.move=function(t,e,r,o){return M("move")},n.prototype.memory=function(){return M("memory")},n.prototype.floatPrecision=function(){return M("floatPrecision")},n.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},n.prototype.batchMatMul=function(t,e,r,o){return M("batchMatMul")},n.prototype.fusedBatchMatMul=function(t){return t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights,M("fusedBatchMatMul")},n.prototype.slice=function(t,e,r){return M("slice")},n.prototype.stridedSlice=function(t,e,r,o){return M("stridedSlice")},n.prototype.unstack=function(t,e){return M("unstack")},n.prototype.reverse=function(t,e){return M("reverse")},n.prototype.concat=function(t,e){return M("concat")},n.prototype.neg=function(t){return M("neg")},n.prototype.add=function(t,e){return M("add")},n.prototype.addN=function(t){return M("addN")},n.prototype.subtract=function(t,e){return M("subtract")},n.prototype.multiply=function(t,e){return M("multiply")},n.prototype.realDivide=function(t,e){return M("realDivide")},n.prototype.floorDiv=function(t,e){return M("floorDiv")},n.prototype.sum=function(t,e){return M("sum")},n.prototype.prod=function(t,e){return M("prod")},n.prototype.unsortedSegmentSum=function(t,e,r){return M("unsortedSegmentSum")},n.prototype.argMin=function(t,e){return M("argMin")},n.prototype.argMax=function(t,e){return M("argMax")},n.prototype.equal=function(t,e){return M("equal")},n.prototype.notEqual=function(t,e){return M("notEqual")},n.prototype.less=function(t,e){return M("less")},n.prototype.lessEqual=function(t,e){return M("lessEqual")},n.prototype.greater=function(t,e){return M("greater")},n.prototype.greaterEqual=function(t,e){return M("greaterEqual")},n.prototype.logicalNot=function(t){return M("logicalNot")},n.prototype.logicalAnd=function(t,e){return M("logicalAnd")},n.prototype.logicalOr=function(t,e){return M("logicalOr")},n.prototype.where=function(t){return M("where")},n.prototype.select=function(t,e,r){return M("select")},n.prototype.topk=function(t,e,r){return M("topk")},n.prototype.min=function(t,e){return M("min")},n.prototype.minimum=function(t,e){return M("minimum")},n.prototype.mod=function(t,e){return M("mod")},n.prototype.max=function(t,e){return M("max")},n.prototype.maximum=function(t,e){return M("maximum")},n.prototype.all=function(t,e){return M("all")},n.prototype.any=function(t,e){return M("any")},n.prototype.squaredDifference=function(t,e){return M("squaredDifference")},n.prototype.ceil=function(t){return M("ceil")},n.prototype.floor=function(t){return M("floor")},n.prototype.round=function(t){return M("round")},n.prototype.sign=function(t){return M("sign")},n.prototype.isNaN=function(t){return M("isNaN")},n.prototype.isInf=function(t){return M("isInf")},n.prototype.isFinite=function(t){return M("isFinite")},n.prototype.pow=function(t,e){return M("pow")},n.prototype.exp=function(t){return M("exp")},n.prototype.expm1=function(t){return M("expm1")},n.prototype.softmax=function(t,e){return M("softmax")},n.prototype.log=function(t){return M("log")},n.prototype.log1p=function(t){return M("log1p")},n.prototype.sqrt=function(t){return M("sqrt")},n.prototype.rsqrt=function(t){return M("rsqrt")},n.prototype.square=function(t){return M("square")},n.prototype.reciprocal=function(t){return M("reciprocal")},n.prototype.relu=function(t){return M("relu")},n.prototype.relu6=function(t){return M("relu6")},n.prototype.prelu=function(t,e){return M("prelu")},n.prototype.elu=function(t){return M("elu")},n.prototype.eluDer=function(t,e){return M("eluDer")},n.prototype.selu=function(t){return M("selu")},n.prototype.int=function(t){return M("int")},n.prototype.clip=function(t,e,r){return M("clip")},n.prototype.abs=function(t){return M("abs")},n.prototype.complexAbs=function(t){return M("complexAbs")},n.prototype.sigmoid=function(t){return M("sigmoid")},n.prototype.softplus=function(t){return M("softplus")},n.prototype.sin=function(t){return M("sin")},n.prototype.cos=function(t){return M("cos")},n.prototype.tan=function(t){return M("tan")},n.prototype.asin=function(t){return M("asin")},n.prototype.acos=function(t){return M("acos")},n.prototype.atan=function(t){return M("atan")},n.prototype.atan2=function(t,e){return M("atan2")},n.prototype.sinh=function(t){return M("sinh")},n.prototype.cosh=function(t){return M("cosh")},n.prototype.tanh=function(t){return M("tanh")},n.prototype.asinh=function(t){return M("asinh")},n.prototype.acosh=function(t){return M("acosh")},n.prototype.atanh=function(t){return M("atanh")},n.prototype.erf=function(t){return M("erf")},n.prototype.step=function(t,e){return M("step")},n.prototype.fusedConv2d=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,M("fusedConv2d")},n.prototype.conv2d=function(t,e,r){return M("conv2d")},n.prototype.conv2dDerInput=function(t,e,r){return M("conv2dDerInput")},n.prototype.conv2dDerFilter=function(t,e,r){return M("conv2dDerFilter")},n.prototype.fusedDepthwiseConv2D=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,M("fusedDepthwiseConv2D")},n.prototype.depthwiseConv2D=function(t,e,r){return M("depthwiseConv2D")},n.prototype.depthwiseConv2DDerInput=function(t,e,r){return M("depthwiseConv2DDerInput")},n.prototype.depthwiseConv2DDerFilter=function(t,e,r){return M("depthwiseConv2DDerFilter")},n.prototype.conv3d=function(t,e,r){return M("conv3d")},n.prototype.conv3dDerInput=function(t,e,r){return M("conv3dDerInput")},n.prototype.conv3dDerFilter=function(t,e,r){return M("conv3dDerFilter")},n.prototype.maxPool=function(t,e){return M("maxPool")},n.prototype.maxPoolBackprop=function(t,e,r,o){return M("maxPoolBackprop")},n.prototype.avgPool=function(t,e){return M("avgPool")},n.prototype.avgPoolBackprop=function(t,e,r){return M("avgPoolBackprop")},n.prototype.avgPool3d=function(t,e){return M("avgPool3d")},n.prototype.avgPool3dBackprop=function(t,e,r){return M("avgPool3dBackprop")},n.prototype.maxPool3d=function(t,e){return M("maxPool3d")},n.prototype.maxPool3dBackprop=function(t,e,r,o){return M("maxPool3dBackprop")},n.prototype.reshape=function(t,e){return M("reshape")},n.prototype.cast=function(t,e){return M("cast")},n.prototype.tile=function(t,e){return M("tile")},n.prototype.pad=function(t,e,r){return M("pad")},n.prototype.transpose=function(t,e){return M("transpose")},n.prototype.gather=function(t,e,r){return M("gather")},n.prototype.gatherND=function(t,e){return M("gatherND")},n.prototype.scatterND=function(t,e,r){return M("scatterND")},n.prototype.batchToSpaceND=function(t,e,r){return M("batchToSpaceND")},n.prototype.spaceToBatchND=function(t,e,r){return M("spaceToBatchND")},n.prototype.resizeBilinear=function(t,e,r,o){return M("resizeBilinear")},n.prototype.resizeBilinearBackprop=function(t,e,r){return M("resizeBilinearBackprop")},n.prototype.resizeNearestNeighbor=function(t,e,r,o){return M("resizeNearestNeighbor")},n.prototype.resizeNearestNeighborBackprop=function(t,e,r){return M("resizeNearestNeighborBackprop")},n.prototype.batchNormalization=function(t,e,r,o,i,a){return M("batchNormalization")},n.prototype.localResponseNormalization4D=function(t,e,r,o,i){return M("localResponseNormalization4D")},n.prototype.LRNGrad=function(t,e,r,o,i,a,s){return M("LRNGrad")},n.prototype.multinomial=function(t,e,r,o){return M("multinomial")},n.prototype.oneHot=function(t,e,r,o){return M("oneHot")},n.prototype.cumsum=function(t,e,r,o){return M("cumsum")},n.prototype.nonMaxSuppression=function(t,e,r,o,i){return M("nonMaxSuppression")},n.prototype.fft=function(t){return M("fft")},n.prototype.ifft=function(t){return M("ifft")},n.prototype.complex=function(t,e){return M("complex")},n.prototype.real=function(t){return M("real")},n.prototype.imag=function(t){return M("imag")},n.prototype.cropAndResize=function(t,e,r,o,i,a){return M("cropAndResize")},n.prototype.depthToSpace=function(t,e,r){return M("depthToSpace")},n.prototype.split=function(t,e,r){return M("split")},n.prototype.sparseToDense=function(t,e,r,o){return M("sparseToDense")},n.prototype.diag=function(t){return M("diag")},n.prototype.fill=function(t,e,r){return M("fill")},n.prototype.onesLike=function(t){return M("onesLike")},n.prototype.zerosLike=function(t){return M("zerosLike")},n.prototype.linspace=function(t,e,r){return M("linspace")},n.prototype.dispose=function(){return M("dispose")},n}();function M(n){throw new Error("'"+n+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function Wn(n,t){for(var e=n.length,r=[],o=0;o<e;o++){var i=e-1-o,a=n[i]||1;(t[t.length-1-o]||1)>1&&a===1&&r.unshift(i)}return r}function tt(n,t){for(var e=[],r=0;r<t.length;r++){var o=n[n.length-r-1],i=t.length-r-1,a=t[i];(o==null||o===1&&a>1)&&e.unshift(i)}return e}function Ne(n,t){for(var e=[],r=Math.max(n.length,t.length),o=0;o<r;o++){var i=n[n.length-o-1];i==null&&(i=1);var a=t[t.length-o-1];if(a==null&&(a=1),i===1)e.unshift(a);else if(a===1)e.unshift(i);else{if(i!==a)throw Error("Operands could not be broadcast together with shapes "+n+" and "+t+".");e.unshift(i)}}return e}function Co(n,t,e,r,o,i,a){a===void 0&&(a="channelsLast");var s,u=Ni(t),c=u[0],l=u[1];if(a==="channelsLast")s=[c,l,n[3],n[3]];else{if(a!=="channelsFirst")throw new Error("Unknown dataFormat "+a);s=[c,l,n[1],n[1]]}return yr(n,s,e,r,o,i,!1,a)}function Di(n,t,e,r,o,i,a){a===void 0&&(a="NDHWC");var s,u,c=xs(t),l=c[0],f=c[1],h=c[2];if(a==="NDHWC")u="channelsLast",s=[l,f,h,n[4],n[4]];else{if(a!=="NCDHW")throw new Error("Unknown dataFormat "+a);u="channelsFirst",s=[l,f,h,n[1],n[1]]}return Ti(n,s,e,r,o,!1,u,i)}function yr(n,t,e,r,o,i,a,s){a===void 0&&(a=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3];if(s==="channelsLast")c=n[0],l=n[1],f=n[2],h=n[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=n[0],h=n[1],l=n[2],f=n[3]}var d,p=t[0],v=t[1],m=t[3],g=Ni(e),x=g[0],b=g[1],y=Ni(r),w=y[0],_=y[1],k=Or(p,w),S=Or(v,_),R=function(U,z,j,W,B,q,$,te){var oe,pe,_e;if(typeof U=="number"){oe={top:U,bottom:U,left:U,right:U,type:U===0?"VALID":"NUMBER"};var Ce=function(Ae,Me,A,T,O){T==null&&(T=dh(Ae,Me,A));var G=Ae[0],K=Ae[1],J=lo((G-Me+2*T)/A+1,O);E($e(J),function(){return"The output # of rows ("+J+") must be an integer. Change the stride and/or zero pad parameters"});var ee=lo((K-Me+2*T)/A+1,O);return E($e(ee),function(){return"The output # of columns ("+ee+") must be an integer. Change the stride and/or zero pad parameters"}),[J,ee]}([z,j],q,W,U,te);pe=Ce[0],_e=Ce[1]}else if(U==="same"){pe=Math.ceil(z/W),_e=Math.ceil(j/B);var me=Math.max(0,(pe-1)*W+q-z),Re=Math.max(0,(_e-1)*B+$-j),Se=Math.floor(me/2),Te=me-Se,Ue=Math.floor(Re/2);oe={top:Se,bottom:Te,left:Ue,right:Re-Ue,type:"SAME"}}else{if(U!=="valid")throw Error("Unknown padding parameter: "+U);oe={top:0,bottom:0,left:0,right:0,type:"VALID"},pe=Math.ceil((z-q+1)/W),_e=Math.ceil((j-$+1)/B)}return{padInfo:oe,outHeight:pe,outWidth:_e}}(o,l,f,x,b,k,S,i),I=R.padInfo,P=R.outHeight,N=R.outWidth,V=a?m*h:m;return s==="channelsFirst"?d=[c,V,P,N]:s==="channelsLast"&&(d=[c,P,N,V]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:f,inChannels:h,outHeight:P,outWidth:N,outChannels:V,padInfo:I,strideHeight:x,strideWidth:b,filterHeight:p,filterWidth:v,effectiveFilterHeight:k,effectiveFilterWidth:S,dilationHeight:w,dilationWidth:_,inShape:n,outShape:d,filterShape:t}}function Ti(n,t,e,r,o,i,a,s){i===void 0&&(i=!1),a===void 0&&(a="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],f=u[2],h=u[3],d=u[4];if(a==="channelsLast")c=n[0],l=n[1],f=n[2],h=n[3],d=n[4];else{if(a!=="channelsFirst")throw new Error("Unknown dataFormat "+a);c=n[0],d=n[1],l=n[2],f=n[3],h=n[4]}var p,v=t[0],m=t[1],g=t[2],x=t[4],b=xs(e),y=b[0],w=b[1],_=b[2],k=xs(r),S=k[0],R=k[1],I=k[2],P=Or(v,S),N=Or(m,R),V=Or(g,I),U=function($,te,oe,pe,_e,Ce,me,Re,Se,Te,Ue){var Ae,Me,A,T;if(typeof $=="number"){Ae={top:$,bottom:$,left:$,right:$,front:$,back:$,type:$===0?"VALID":"NUMBER"};var O=function(de,ae,ve,we,ke,We){ke==null&&(ke=dh(de,ae,we));var Ye=de[0],Tt=de[1],Nn=de[2],wr=lo((Ye-ae+2*ke)/we+1,We);E($e(wr),function(){return"The output # of depths ("+wr+") must be an integer. Change the stride and/or zero pad parameters"});var yn=lo((Tt-ae+2*ke)/we+1,We);E($e(yn),function(){return"The output # of rows ("+yn+") must be an integer. Change the stride and/or zero pad parameters"});var _r=lo((Nn-ae+2*ke)/we+1,We);return E($e(_r),function(){return"The output # of columns ("+_r+") must be an integer. Change the stride and/or zero pad parameters"}),[wr,yn,_r,ve]}([te,oe,pe,1],Re,1,_e,$,Ue);Me=O[0],A=O[1],T=O[2]}else if($==="same"){Me=Math.ceil(te/_e),A=Math.ceil(oe/Ce),T=Math.ceil(pe/me);var G=(Me-1)*_e+Re-te,K=(A-1)*Ce+Se-oe,J=(T-1)*me+Te-pe,ee=Math.floor(G/2),Q=G-ee,Z=Math.floor(K/2),Y=K-Z,ne=Math.floor(J/2);Ae={top:Z,bottom:Y,left:ne,right:J-ne,front:ee,back:Q,type:"SAME"}}else{if($!=="valid")throw Error("Unknown padding parameter: "+$);Ae={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},Me=Math.ceil((te-Re+1)/_e),A=Math.ceil((oe-Se+1)/Ce),T=Math.ceil((pe-Te+1)/me)}return{padInfo:Ae,outDepth:Me,outHeight:A,outWidth:T}}(o,l,f,h,y,w,_,P,N,V,s),z=U.padInfo,j=U.outDepth,W=U.outHeight,B=U.outWidth,q=i?x*d:x;return a==="channelsFirst"?p=[c,q,j,W,B]:a==="channelsLast"&&(p=[c,j,W,B,q]),{batchSize:c,dataFormat:a,inDepth:l,inHeight:f,inWidth:h,inChannels:d,outDepth:j,outHeight:W,outWidth:B,outChannels:q,padInfo:z,strideDepth:y,strideHeight:w,strideWidth:_,filterDepth:v,filterHeight:m,filterWidth:g,effectiveFilterDepth:P,effectiveFilterHeight:N,effectiveFilterWidth:V,dilationDepth:S,dilationHeight:R,dilationWidth:I,inShape:n,outShape:p,filterShape:t}}function dh(n,t,e,r){r===void 0&&(r=1);var o=Or(t,r);return Math.floor((n[0]*(e-1)-e+o)/2)}function Ni(n){return typeof n=="number"?[n,n,n]:n.length===2?[n[0],n[1],1]:n}function xs(n){return typeof n=="number"?[n,n,n]:n}function Or(n,t){return t<=1?n:n+(n-1)*(t-1)}function lo(n,t){if(!t)return n;switch(t){case"round":return Math.round(n);case"ceil":return Math.ceil(n);case"floor":return Math.floor(n);default:throw new Error("Unknown roundingMode "+t)}}function Kr(n){var t=Ni(n),e=t[0],r=t[1],o=t[2];return e===1&&r===1&&o===1}function Dt(n,t){return Kr(n)||Kr(t)}function ou(n){if(n==="NHWC")return"channelsLast";if(n==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+n)}function ph(n,t,e){if(t==="complex64"){if(n.dtype==="complex64")return n.clone();var r=ze(n.shape),o=n.toFloat(),i=e.complex(o,r);return r.dispose(),o.dispose(),i}if(!Hm(n.dtype,t))return F.makeTensorFromDataId(n.dataId,n.shape,t);if(n.dtype==="complex64"){var a=e.real(n);return i=a.cast(t),a.dispose(),i}if(t==="int32")return e.int(n);if(t==="bool"){var s=re(0,n.dtype);return i=e.notEqual(n,s),s.dispose(),i}throw new Error("Error in Cast: failed to cast "+n.dtype+" to "+t)}function bs(n,t){return F.makeTensorFromDataId(n.dataId,t,n.dtype)}function vh(n,t,e){var r=(t-n)/(e-1),o=Do(e,"float32");o[0]=n;for(var i=1;i<o.length;i++)o[i]=o[i-1]+r;return Je(o,"float32")}function ws(n,t){if(n.length!==t.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+n.length+", imag: "+t.length+".");for(var e=new Float32Array(2*n.length),r=0;r<e.length;r+=2)e[r]=n[r/2],e[r+1]=t[r/2];return e}function Xc(n,t){return{real:n[2*t],imag:n[2*t+1]}}function g0(n,t,e,r){n[2*r]=t,n[2*r+1]=e}function y0(n,t,e){var r=(e?2:-2)*Math.PI*(n/t);return{real:Math.cos(r),imag:Math.sin(r)}}function x0(n,t,e){var r=function(i,a,s){return function(u,c,l){for(var f=0,h=u.length,d=0,p=!1;f<h;){var v=l(c,u[d=f+(h-f>>>1)]);v>0?f=d+1:(h=d,p=!v)}return p?f:-f-1}(i,a,s||b0)}(n,t,e),o=r<0?-(r+1):r;n.splice(o,0,t)}function b0(n,t){return n>t?1:n<t?-1:0}function iu(n,t,e,r,o){return mh(n,t,e,r,o,0).selectedIndices}function au(n,t,e,r,o,i){var a=mh(n,t,e,r,o,i);return a.numValidOutputs.dispose(),{selectedIndices:a.selectedIndices,selectedScores:a.selectedScores}}function mh(n,t,e,r,o,i,a,s){s===void 0&&(s=!1);for(var u=Array.from(t).map(function(y,w){return{score:y,boxIndex:w,suppressBeginIndex:0}}).filter(function(y){return y.score>o}).sort($c),c=i>0?-.5/i:0,l=[],f=[];l.length<e&&u.length>0;){var h=u.pop(),d=h.score,p=h.boxIndex,v=h.suppressBeginIndex;if(d<o)break;for(var m=!1,g=l.length-1;g>=v;--g){var x=w0(n,p,l[g]);if(x>=r){m=!0;break}if(h.score=h.score*_0(r,c,x),h.score<=o)break}h.suppressBeginIndex=l.length,m||(h.score===d?(l.push(p),f.push(h.score)):h.score>o&&x0(u,h,$c))}var b=l.length;return s&&(l.fill(0,b),f.fill(0,b)),{selectedIndices:Je(l,"int32"),selectedScores:Je(f,"float32"),numValidOutputs:re(b,"int32")}}function w0(n,t,e){var r=n.subarray(4*t,4*t+4),o=n.subarray(4*e,4*e+4),i=Math.min(r[0],r[2]),a=Math.min(r[1],r[3]),s=Math.max(r[0],r[2]),u=Math.max(r[1],r[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),f=Math.max(o[0],o[2]),h=Math.max(o[1],o[3]),d=(s-i)*(u-a),p=(f-c)*(h-l);if(d<=0||p<=0)return 0;var v=Math.max(i,c),m=Math.max(a,l),g=Math.min(s,f),x=Math.min(u,h),b=Math.max(g-v,0)*Math.max(x-m,0);return b/(d+p-b)}function _0(n,t,e){var r=Math.exp(t*e*e);return e<=n?r:0}function $c(n,t){return n.score-t.score||n.score===t.score&&t.boxIndex-n.boxIndex}function gh(n,t,e){var r=new Array(n.rank).fill(0),o=n.shape.slice();return t.map(function(i){o[e]=i;var a=n.slice(r,o);return r[e]+=i,a})}function yh(n,t){for(var e=new Array(n.rank),r=0;r<e.length;r++)e[r]=n.shape[r]*t[r];var o=be(e,n.dtype);for(r=0;r<o.values.length;++r){for(var i=o.indexToLoc(r),a=new Array(n.rank),s=0;s<a.length;s++)a[s]=i[s]%n.shape[s];var u=n.locToIndex(a);o.values[r]=n.values[u]}return o.toTensor()}function xh(n,t,e,r,o){for(var i=t[t.length-1],a=[n.length/i,i],s=a[0],u=a[1],c=bo(e,s*r),l=bo("int32",s*r),f=0;f<s;f++){for(var h=f*u,d=n.subarray(h,h+u),p=[],v=0;v<d.length;v++)p.push({value:d[v],index:v});p.sort(function(y,w){return w.value-y.value});var m=f*r,g=c.subarray(m,m+r),x=l.subarray(m,m+r);for(v=0;v<r;v++)g[v]=p[v].value,x[v]=p[v].index}var b=t.slice();return b[b.length-1]=r,[ht(c,b,e),ht(l,b,"int32")]}function su(n,t){for(var e=[],r=0;r<t.length;r++)t[r]&&e.push(r);var o=be(n,"int32"),i=be([e.length,n.length],"int32");for(r=0;r<e.length;r++){var a=o.indexToLoc(e[r]),s=r*n.length;i.values.set(a,s)}return i.toTensor()}var C0=function(n,t){this.outputShape=[],this.outputShape=n,this.variableNames=t.map(function(o,i){return"T"+i});var e=[];this.variableNames.forEach(function(o){e.push("float v"+o+" = get"+o+"AtOutCoords();")});var r=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        float result = `+r+`;
        setOutput(result);
      }
    `},E0=function(n,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.variableNames=t.map(function(o,i){return"T"+i});var e=[];this.variableNames.forEach(function(o){e.push("vec4 v"+o+" = get"+o+"AtOutCoords();")});var r=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        vec4 result = `+r+`;
        setOutput(result);
      }
    `},I0=function(n,t,e){this.variableNames=["A"];var r=n.windowSize,o=n.batchSize,i=n.inSize,a=Math.ceil(i/r);e||this.variableNames.push("bestIndicesA"),this.outputShape=[o,a];var s=t==="max"?">":"<",u=e?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+r+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+r+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function bh(n,t){return["x","y","z","w","u","v"].slice(0,t).map(function(e){return n+"."+e})}function Et(n,t){return t===1?[n]:bh(n,t)}function mt(){var n,t,e,r,o,i,a,s,u,c;return H().getNumber("WEBGL_VERSION")===2?(n="#version 300 es",t="in",e="out",r="in",o="texture",i="outputColor",a="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(n="",t="attribute",e="varying",r="varying",o="texture2D",i="gl_FragColor",a="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:n,attribute:t,varyingVs:e,varyingFs:r,texture2D:o,output:i,defineOutput:a,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function ur(n,t,e){e===void 0&&(e="index");var r=fn(t);return r.map(function(o,i){return"int "+n[i]+" = "+e+" / "+o+"; "+(i===r.length-1?"int "+n[i+1]+" = "+e+" - "+n[i]+" * "+o:"index -= "+n[i]+" * "+o)+";"}).join("")}function uu(n){var t=fn(n).map(function(e){return e.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+t[0]+" + coords.y * "+t[1]+` + coords.z;
  }
`}var wh=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function R0(n,t,e,r){var o=[];n.forEach(function(d){var p=ce(d.shapeInfo.logicalShape);d.shapeInfo.isUniform?o.push("uniform float "+d.name+(p>1?"["+p+"]":"")+";"):(o.push("uniform sampler2D "+d.name+";"),o.push("uniform int offset"+d.name+";"))});var i,a,s=o.join(`
`),u=n.map(function(d){return function(p,v,m){m===void 0&&(m=!1);var g="";g+=m?_h(p):Sr(p);var x=p.shapeInfo.logicalShape,b=v.logicalShape;return x.length<=b.length&&(g+=m?function(y,w){var _,k=y.name,S=k.charAt(0).toUpperCase()+k.slice(1),R="get"+S+"AtOutCoords",I=y.shapeInfo.logicalShape.length,P=w.logicalShape.length,N=Wn(y.shapeInfo.logicalShape,w.logicalShape),V=Ve(P),U=P-I,z=["x","y","z","w","u","v"];_=I===0?"":P<2&&N.length>=1?"coords = 0;":N.map(function(oe){return"coords."+z[oe+U]+" = 0;"}).join(`
`);var j="";j=P<2&&I>0?"coords":y.shapeInfo.logicalShape.map(function(oe,pe){return"coords."+z[pe+U]}).join(", ");var W="return outputValue;",B=ce(y.shapeInfo.logicalShape)===1,q=ce(w.logicalShape)===1;if(I!==1||B||q){if(B&&!q)W=P===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(N.length){var $=I-2,te=I-1;N.indexOf($)>-1&&N.indexOf(te)>-1?W="return vec4(outputValue.x);":N.indexOf($)>-1?W="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":N.indexOf(te)>-1&&(W="return vec4(outputValue.xx, outputValue.zz);")}}else W=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+R+`() {
      `+V+` coords = getOutputCoords();
      `+_+`
      vec4 outputValue = get`+S+"("+j+`);
      `+W+`
    }
  `}(p,v):function(y,w){var _=y.name,k=_.charAt(0).toUpperCase()+_.slice(1),S="get"+k+"AtOutCoords",R=w.texShape,I=y.shapeInfo.texShape,P=y.shapeInfo.logicalShape.length,N=w.logicalShape.length;if(!y.shapeInfo.isUniform&&P===N&&y.shapeInfo.flatOffset==null&&at(I,R))return`
      float `+S+`() {
        return sampleTexture(`+_+`, resultUV);
      }
    `;var V,U=Ve(N),z=Wn(y.shapeInfo.logicalShape,w.logicalShape),j=N-P,W=["x","y","z","w","u","v"];V=P===0?"":N<2&&z.length>=1?"coords = 0;":z.map(function(q){return"coords."+W[q+j]+" = 0;"}).join(`
`);var B="";return B=N<2&&P>0?"coords":y.shapeInfo.logicalShape.map(function(q,$){return"coords."+W[$+j]}).join(", "),`
    float `+S+`() {
      `+U+` coords = getOutputCoords();
      `+V+`
      return get`+k+"("+B+`);
    }
  `}(p,v)),g}(d,t,r)}).join(`
`),c=t.texShape,l=mt(),f=function(d){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+d.texture2D+`(textureSampler, uv).r;
    }
  `}(l),h=function(d){return d.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+d.varyingFs+` vec2 resultUV;
    `+d.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+d.defineSpecialNaN+`
    `+d.defineSpecialInf+`
    `+d.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+S0+`
    `+k0+`
    `+A0+`
  `}(l);return t.isPacked?(i=function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(y,w){var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];return _[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+_[1]+`.0);
      }
    `:_[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+_[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));
      return 2 * (resTexRC.x * `+_[1]+` + resTexRC.y);
    }
  `}(0,p);case 2:return function(y,w){var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];if(at(y,w))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+_[0]+", "+_[1]+`));
      }
    `;var k=Math.ceil(y[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));

      int index = resTexRC.x * `+_[1]+` + resTexRC.y;
      int r = 2 * (index / `+k+`);
      int c = imod(index, `+k+`) * 2;

      return ivec2(r, c);
    }
  `}(d,p);case 3:return v=d,m=p,g=[Math.ceil(m[0]/2),Math.ceil(m[1]/2)],x=Math.ceil(v[2]/2),b=x*Math.ceil(v[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;

      int b = index / `+b+`;
      index -= b * `+b+`;

      int r = 2 * (index / `+x+`);
      int c = imod(index, `+x+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(y,w){for(var _=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)],k=Math.ceil(y[y.length-1]/2),S=k*Math.ceil(y[y.length-2]/2),R=S,I="",P="b, r, c",N=2;N<y.length-1;N++)R*=y[y.length-N-1],I=`
      int b`+N+" = index / "+R+`;
      index -= b`+N+" * "+R+`;
    `+I,P="b"+N+", "+P;return`
    ivec`+y.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+_[0]+", "+_[1]+`));
      int index = resTexRC.x * `+_[1]+` + resTexRC.y;

      `+I+`

      int b = index / `+S+`;
      index -= b * `+S+`;

      int r = 2 * (index / `+k+`);
      int c = imod(index, `+k+`) * 2;

      return ivec`+y.length+"("+P+`);
    }
  `}(d,p)}var v,m,g,x,b}(t.logicalShape,c),a=function(d){return`
    void setOutput(vec4 val) {
      `+d.output+` = val;
    }
  `}(l)):(i=function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(g,x){return x[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+x[1]+`.0);
      }
    `:x[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+x[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+x[0]+", "+x[1]+`));
      return resTexRC.x * `+x[1]+` + resTexRC.y;
    }
  `}(0,p);case 2:return function(g,x){return at(g,x)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+x[0]+", "+x[1]+`));
      }
    `:g[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+x[0]+", "+x[1]+`));
        int index = resTexRC.x * `+x[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:g[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+x[0]+", "+x[1]+`));
        int index = resTexRC.x * `+x[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;
      int r = index / `+g[1]+`;
      int c = index - r * `+g[1]+`;
      return ivec2(r, c);
    }
  `}(d,p);case 3:return v=p,m=ur(["r","c","d"],d),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+v[0]+", "+v[1]+`));
      int index = resTexRC.x * `+v[1]+` + resTexRC.y;
      `+m+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(g,x){var b=ur(["r","c","d","d2"],g);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;
      `+b+`
      return ivec4(r, c, d, d2);
    }
  `}(d,p);case 5:return function(g,x){var b=ur(["r","c","d","d2","d3"],g);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+x[0]+`,
                             `+x[1]+`));

      int index = resTexRC.x * `+x[1]+` + resTexRC.y;

      `+b+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(d,p);case 6:return function(g,x){var b=ur(["r","c","d","d2","d3","d4"],g);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+x[0]+", "+x[1]+`));
      int index = resTexRC.x * `+x[1]+` + resTexRC.y;

      `+b+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(d,p);default:throw new Error(d.length+"-D output sampling is not yet supported")}var v,m}(t.logicalShape,c),a=function(d){return`
    void setOutput(float val) {
      `+d.output+` = vec4(val, 0, 0, 0);
    }
  `}(l)),r&&(h+=D0),[h,f,a,s,i,u,e].join(`
`)}function Sr(n){var t=n.shapeInfo.logicalShape;switch(t.length){case 0:return function(e){var r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return"float "+o+"() {return "+r+";}";var i=e.shapeInfo.texShape,a=i[0],s=i[1];if(a===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+r+`, halfCR);
      }
    `;var u=e.shapeInfo.texShape,c=u[0],l=u[1],f=nr(r);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+f+`);
      return sampleTexture(`+r+`, uv);
    }
  `}(n);case 1:return function(e){var r=e.name,o="get"+r.charAt(0).toUpperCase()+r.slice(1);if(e.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+Cr(e)+`
      }
    `;var i=e.shapeInfo.texShape,a=i[0],s=i[1];if(s===1&&a===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+r+`, halfCR);
      }
    `;var u=nr(r);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+a+`.0);
        return sampleTexture(`+r+`, uv);
      }
    `:a===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+r+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+a+", "+s+", index + "+u+`);
      return sampleTexture(`+r+`, uv);
    }
  `}(n);case 2:return function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=e.shapeInfo.texShape;if(a!=null&&at(r,a)){var s=a[0],u=a[1];return`
    float `+i+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var c=ar(r),l=c.newShape,f=c.keptDims,h=l;if(h.length<r.length){var d=kr(e,h);return`
      `+Sr(d)+`
      float `+i+`(int row, int col) {
        return `+i+"("+Ar(["row","col"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+r[1]+`, 1)));
        `+Cr(e)+`
      }
    `;var p=a[0],v=a[1],m=nr(o);return v===1?`
    float `+i+`(int row, int col) {
      float index = dot(vec3(row, col, `+m+"), vec3("+r[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:p===1?`
    float `+i+`(int row, int col) {
      float index = dot(vec3(row, col, `+m+"), vec3("+r[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+v+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+i+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+r[1]+" + col + "+m+`;
    vec2 uv = uvFromFlat(`+p+", "+v+`, index);
    return sampleTexture(`+o+`, uv);
  }
`}(n);case 3:return function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=r[1]*r[2],s=r[2],u=ar(r),c=u.newShape,l=u.keptDims,f=c;if(f.length<r.length){var h=kr(e,f);return`
        `+Sr(h)+`
        float `+i+`(int row, int col, int depth) {
          return `+i+"("+Ar(["row","col","depth"],l)+`);
        }
      `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+a+", "+s+`, 1)));
        `+Cr(e)+`
      }
    `;var d=e.shapeInfo.texShape,p=d[0],v=d[1],m=e.shapeInfo.flatOffset;if(v===a&&m==null)return`
        float `+i+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+v+".0, "+p+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(v===s&&m==null)return`
    float `+i+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+r[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+v+".0, "+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var g=nr(o);return`
      float `+i+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+a+" + col * "+s+" + depth + "+g+`;
        vec2 uv = uvFromFlat(`+p+", "+v+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `}(n);case 4:return function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=r[3],s=r[2]*a,u=r[1]*s,c=ar(r),l=c.newShape,f=c.keptDims;if(l.length<r.length){var h=kr(e,l);return`
      `+Sr(h)+`
      float `+i+`(int row, int col, int depth, int depth2) {
        return `+i+"("+Ar(["row","col","depth","depth2"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+a+`, 1)));
        `+Cr(e)+`
      }
    `;var d=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,v=p[0],m=p[1];if(m===u&&d==null)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+a+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(m===a&&d==null)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+r[1]*r[2]+", "+r[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var g=nr(o);return`
    float `+i+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+a+` + depth2;
      vec2 uv = uvFromFlat(`+v+", "+m+", index + "+g+`);
      return sampleTexture(`+o+`, uv);
    }
  `}(n);case 5:return function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=r[4],s=r[3]*a,u=r[2]*s,c=r[1]*u,l=ar(r),f=l.newShape,h=l.keptDims;if(f.length<r.length){var d=kr(e,f);return`
      `+Sr(d)+`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        return `+i+"("+Ar(["row","col","depth","depth2","depth3"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+a+`)) +
          depth3;
        `+Cr(e)+`
      }
    `;var p=e.shapeInfo.flatOffset,v=e.shapeInfo.texShape,m=v[0],g=v[1];if(g===c&&p==null)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+a+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(g===a&&p==null)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+r[1]*r[2]*r[3]+`,
               `+r[2]*r[3]+", "+r[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var x=nr(o);return`
    float `+i+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+a+" + depth3 + "+x+`;
      vec2 uv = uvFromFlat(`+m+", "+g+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(n);case 6:return function(e){var r=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=ar(r),s=a.newShape,u=a.keptDims;if(s.length<r.length){var c=kr(e,s);return`
      `+Sr(c)+`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+i+"("+Ar(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=r[5],f=r[4]*l,h=r[3]*f,d=r[2]*h,p=r[1]*d;if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+p+", "+d+", "+h+", "+f+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+Cr(e)+`
      }
    `;var v=e.shapeInfo.flatOffset,m=e.shapeInfo.texShape,g=m[0],x=m[1];if(x===p&&v==null)return`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+d+", "+h+", "+f+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+x+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(x===l&&v==null)return`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+r[1]*r[2]*r[3]*r[4]+`,
               `+r[2]*r[3]*r[4]+`,
               `+r[3]*r[4]+`,
               `+r[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+x+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var b=nr(o);return`
    float `+i+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+p+" + col * "+d+" + depth * "+h+` +
          depth2 * `+f+" + depth3 * "+l+" + depth4 + "+b+`;
      vec2 uv = uvFromFlat(`+g+", "+x+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(n);default:throw new Error(t.length+"-D input sampling is not yet supported")}}function _h(n){var t,e,r;switch(n.shapeInfo.logicalShape.length){case 0:return t=n.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),r=mt(),`
    vec4 `+e+`() {
      return `+r.texture2D+"("+t+`, halfCR);
    }
  `;case 1:return function(o){var i=o.name,a="get"+i.charAt(0).toUpperCase()+i.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=mt();return`
    vec4 `+a+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+i+`, uv);
    }
  `}(n);case 2:return function(o){var i=o.shapeInfo.logicalShape,a=o.name,s="get"+a.charAt(0).toUpperCase()+a.slice(1),u=o.shapeInfo.texShape,c=u[0],l=u[1],f=mt();if(u!=null&&at(i,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+f.texture2D+"("+a+`, uv);
      }
    `;var h=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],d=Math.ceil(i[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+d+", "+h[0]+", "+h[1]+`, row, col);
      return `+f.texture2D+"("+a+`, uv);
    }
  `}(n);case 3:return function(o){var i=o.shapeInfo.logicalShape,a=o.name,s="get"+a.charAt(0).toUpperCase()+a.slice(1),u=o.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(i[0]===1){var l=i.slice(1),f=kr(o,l);return`
        `+_h(f)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+Ar(["b","row","col"],[1,2])+`);
        }
      `}var h=c[0],d=c[1],p=Math.ceil(i[2]/2),v=p*Math.ceil(i[1]/2),m=mt();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+h+", "+d+", "+v+", "+p+`, b, row, col);
      return `+m.texture2D+"("+a+`, uv);
    }
  `}(n);default:return function(o){for(var i=o.shapeInfo.logicalShape,a=i.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=o.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],f=l[0],h=l[1],d=Math.ceil(i[a-1]/2),p=d*Math.ceil(i[a-2]/2),v="int b, int row, int col",m="b * "+p+" + (row / 2) * "+d+" + (col / 2)",g=2;g<a-1;g++)v="int b"+g+", "+v,p*=i[a-g-1],m="b"+g+" * "+p+" + "+m;var x=mt();return`
    vec4 `+u+"("+v+`) {
      int index = `+m+`;
      int texR = index / `+h+`;
      int texC = index - texR * `+h+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+h+", "+f+`);
      return `+x.texture2D+"("+s+`, uv);
    }
  `}(n)}}var S0=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,k0=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,A0=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,D0=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function nr(n){return"offset"+n}function Cr(n){var t=n.name,e=ce(n.shapeInfo.logicalShape);return e<2?"return "+t+";":`
    for (int i = 0; i < `+e+`; i++) {
      if (i == index) {
        return `+t+`[i];
      }
    }
  `}function Ve(n){if(n<=1)return"int";if(n===2)return"ivec2";if(n===3)return"ivec3";if(n===4)return"ivec4";if(n===5)return"ivec5";if(n===6)return"ivec6";throw Error("GPU for rank "+n+" is not yet supported")}function kr(n,t){var e=JSON.parse(JSON.stringify(n));return e.shapeInfo.logicalShape=t,e}function Ar(n,t){return t.map(function(e){return n[e]}).join(", ")}var T0=function(n,t,e,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,E(n.length>2,function(){return"Packed arg"+(e.charAt(0).toUpperCase()+e.slice(1))+" supports only inputs with rank above 2."});var o=n[n.length-1],i=Math.ceil(o/t);this.outputShape=n.slice(0,-1),i>1&&this.outputShape.push(i),r||this.variableNames.push("bestIndicesA");var a,s,u=this.outputShape,c=u.length,l=Ve(c),f=Et("coords",c);if(i===1){var h=Ve(s=c+1);a=`
        `+h+" sourceLocR = "+h+"("+f.join()+`, 0);
        ++`+f[c-1]+`;
        `+h+" sourceLocG = "+h+"("+f.join()+`, 0);
        ++`+f[c-2]+`;
        `+h+" sourceLocA = "+h+"("+f.join()+`, 0);
        --`+f[c-1]+`;
        `+h+" sourceLocB = "+h+"("+f.join()+`, 0);
        --`+f[c-2]+";"}else s=c,a=`
        `+l+` sourceLocR = coords;
        ++`+f[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+f[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+f[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+f[c-2]+";";var d=["x","y","z","w","u","v"].slice(0,s),p="."+d[s-1],v=d.map(function(S){return"int "+S}),m=Et("sourceLocR",s-1).concat("inIdx.r"),g=Et("sourceLocG",s-1).concat("inIdx.g"),x=Et("sourceLocB",s-1).concat("inIdx.b"),b=Et("sourceLocA",s-1).concat("inIdx.a"),y=e==="max"?"greaterThan":"lessThan",w=r?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+m.join()+`),
                             getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+x.join()+`),
                             getBestIndicesAChannel(`+b.join()+")));",_=`vec4(
            getAChannel(`+m.join()+`),
            hasNextCol ? getAChannel(`+g.join()+`) : 0.,
            hasNextRow ? getAChannel(`+x.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+b.join()+") : 0.)",k=r?"":`
      float getBestIndicesAChannel(`+v.join()+`) {
        return getChannel(getBestIndicesA(`+d.join()+`),
                                          vec2(`+d.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+v.join()+`) {
        return getChannel(getA(`+d.join()+`),
                               vec2(`+d.slice(-2).join()+`));
      }
      `+k+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+f[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+f[c-2]+" < "+(u[c-2]-1)+`;
        `+a+`
        ivec4 srcIdx = ivec4(sourceLocR`+p+", sourceLocG"+p+`,
          sourceLocB`+p+", sourceLocA"+p+") * "+t+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+_+`;

        for (int i = 0; i < `+t+`; i++) {
          inIdx = srcIdx;
          `+w+`
          vec4 candidate = `+_+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+y+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},N0=function(n){this.variableNames=["dy"],this.outputShape=n.inShape;var t=n.filterHeight,e=n.filterWidth,r=n.strideHeight,o=n.strideWidth,i=n.dilationHeight,a=n.dilationWidth,s=n.effectiveFilterHeight,u=n.effectiveFilterWidth,c=s-1-n.padInfo.top,l=u-1-n.padInfo.left,f=1/(t*e);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+f+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+i+`) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+a+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},F0=function(n){this.variableNames=["dy"],this.outputShape=n.inShape;var t=n.filterDepth,e=n.filterHeight,r=n.filterWidth,o=n.strideDepth,i=n.strideHeight,a=n.strideWidth,s=n.dilationDepth,u=n.dilationHeight,c=n.dilationWidth,l=n.effectiveFilterDepth,f=n.effectiveFilterHeight,h=n.effectiveFilterWidth,d=l-1-n.padInfo.front,p=f-1-n.padInfo.top,v=h-1-n.padInfo.left,m=1/(t*e*r);this.userCode=`
      const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);
      const float avgMultiplier = float(`+m+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+n.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+f+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+i+`.0;

            if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+h+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+a+`.0;

              if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},P0=function(n,t,e,r,o,i){this.outputShape=[],this.variableNames=["x","mean","variance"],Ne(n,t),Ne(n,e);var a="0.0";r!=null&&(Ne(n,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");var s="1.0";o!=null&&(Ne(n,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=n,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+a+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+i+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},M0=function(n,t,e,r,o,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],Ne(n,t),Ne(n,e);var a="vec4(0.0)";r!=null&&(Ne(n,r),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(Ne(n,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=n,this.userCode=`
      void main() {
        vec4 offset = `+a+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+i+`));

        setOutput((x - mean) * inv + offset);
      }
    `},O0="return areal * breal - aimag * bimag;",B0="return areal * bimag + aimag * breal;",Yc=function(n,t,e){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=Ne(t,e),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+n+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},Fa="return a + b;",Pa="return a - b;",Jc="return a * b;",Ch="return (a < 0.) ? b * a : a;",Xe=function(n,t,e){this.variableNames=["A","B"],this.outputShape=Ne(t,e),this.userCode=`
      float binaryOperation(float a, float b) {
        `+n+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},Eh=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,bn=function(n,t,e,r){r===void 0&&(r=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=Ne(t,e);var o=this.outputShape.length,i="";if(r)if(o===0||ce(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          `+Ve(o)+` coords = getOutputCoords();
        `,o===1)i+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var a=Et("coords",o);i+=`
            bool nextRowOutOfBounds =
              (`+a[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+a[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+n+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+i+`

        setOutput(result);
      }
    `},L0=function(){function n(t){this.variableNames=["A"],this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return n.prototype.getCustomSetupFunc=function(t,e){var r=this;return function(o,i){r.minLoc==null&&(r.minLoc=o.getUniformLocationNoThrow(i,"minVal"),r.maxLoc=o.getUniformLocationNoThrow(i,"maxVal")),o.gl.uniform1f(r.minLoc,t),o.gl.uniform1f(r.maxLoc,e)}},n}(),W0=function(){function n(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return n.prototype.getCustomSetupFunc=function(t,e){var r=this;return function(o,i){r.minLoc==null&&(r.minLoc=o.getUniformLocationNoThrow(i,"minVal"),r.maxLoc=o.getUniformLocationNoThrow(i,"maxVal")),o.gl.uniform1f(r.minLoc,t),o.gl.uniform1f(r.maxLoc,e)}},n}(),U0=function(n){this.variableNames=["real","imag"],this.outputShape=n,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},V0=function(n){this.outputShape=[],this.outputShape=qr(n,1),this.variableNames=n.map(function(s,u){return"T"+u});var t=new Array(n.length-1);t[0]=n[0][1];for(var e=1;e<t.length;e++)t[e]=t[e-1]+n[e][1];var r=["if (yC < "+t[0]+") setOutput(getT0(yR, yC));"];for(e=1;e<t.length;e++){var o=t[e-1];r.push("else if (yC < "+t[e]+") setOutput(getT"+e+"(yR, yC-"+o+"));")}var i=t.length,a=t[t.length-1];r.push("else setOutput(getT"+i+"(yR, yC-"+a+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+r.join(`
        `)+`
      }
    `},z0=function(n,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=qr(n,t);var e=this.outputShape,r=e.length,o=Ve(r),i=Et("coords",r),a=["x","y","z","w","u","v"].slice(0,r);this.variableNames=n.map(function(m,g){return"T"+g});var s=new Array(n.length-1);s[0]=n[0][t];for(var u=1;u<s.length;u++)s[u]=s[u-1]+n[u][t];var c=a[t],l=a.slice(-2),f=a.join(),h="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+f+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var d=s[u-1];h+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+Yo(a,c,d)+`),
            vec2(`+Yo(l,c,d)+`));
        }`}var p=s.length,v=s[s.length-1];h+=`
        return getChannel(
          getT`+p+"("+Yo(a,c,v)+`),
          vec2(`+Yo(l,c,v)+"));",this.userCode=`
      float getValue(`+a.map(function(m){return"int "+m})+`) {
        `+h+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+i+`), 0., 0., 0.);

        `+i[r-1]+" = "+i[r-1]+` + 1;
        if (`+i[r-1]+" < "+e[r-1]+`) {
          result.g = getValue(`+i+`);
        }

        `+i[r-2]+" = "+i[r-2]+` + 1;
        if (`+i[r-2]+" < "+e[r-2]+`) {
          result.a = getValue(`+i+`);
        }

        `+i[r-1]+" = "+i[r-1]+` - 1;
        if (`+i[r-2]+" < "+e[r-2]+` &&
            `+i[r-1]+" < "+e[r-1]+`) {
          result.b = getValue(`+i+`);
        }
        setOutput(result);
      }
    `};function Yo(n,t,e){var r=n.indexOf(t);return n.map(function(o,i){return i===r?o+" - "+e:o}).join()}var H0=function(n){this.variableNames=["x","dy"],this.outputShape=n.filterShape;var t=n.strideHeight,e=n.strideWidth,r=n.padInfo.top,o=n.padInfo.left,i=n.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+n.batchSize+`; b++) {
          for (int yR = 0; yR < `+n.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+r+`;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+n.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              if (`+i+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},G0=function(n){this.variableNames=["dy","W"],this.outputShape=n.inShape;var t=n.filterHeight,e=n.filterWidth,r=n.strideHeight,o=n.strideWidth,i=n.dataFormat==="channelsLast",a=t-1-n.padInfo.top,s=e-1-n.padInfo.left,u=i?1:2,c=i?2:3,l=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            for (int d2 = 0; d2 < `+n.outChannels+`; d2++) {

              if (`+i+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},j0=function(n){this.variableNames=["x","dy"],this.outputShape=n.filterShape;var t=n.strideDepth,e=n.strideHeight,r=n.strideWidth,o=n.padInfo.front,i=n.padInfo.top,a=n.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+n.batchSize+`; b++) {
          for (int yF = 0; yF < `+n.outDepth+`; yF++) {
            int xF = wF + yF * `+t+" - "+o+`;

            if (xF < 0 || xF >= `+n.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+n.outHeight+`; yR++) {
              int xR = wR + yR * `+e+" - "+i+`;

              if (xR < 0 || xR >= `+n.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+n.outWidth+`; yC++) {
                int xC = wC + yC * `+r+" - "+a+`;

                if (xC < 0 || xC >= `+n.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},q0=function(n){this.variableNames=["dy","W"],this.outputShape=n.inShape;var t=n.filterDepth,e=n.filterHeight,r=n.filterWidth,o=n.strideDepth,i=n.strideHeight,a=n.strideWidth,s=t-1-n.padInfo.front,u=e-1-n.padInfo.top,c=r-1-n.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+t+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+n.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+t+` - 1 - wF;

          for (int wR = 0; wR < `+e+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+i+`.0;

            if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+e+` - 1 - wR;

            for (int wC = 0; wC < `+r+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+a+`.0;

              if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+r+` - 1 - wC;

              for (int d2 = 0; d2 < `+n.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},K0=function(n){this.variableNames=["x","dy"],this.outputShape=n.filterShape;var t=n.strideHeight,e=n.strideWidth,r=n.padInfo.top,o=n.padInfo.left,i=n.outChannels/n.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+i+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+n.batchSize+`; b++) {
          for (int yR = 0; yR < `+n.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+r+`;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+n.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},X0=function(n){this.variableNames=["dy","W"],this.outputShape=n.inShape;var t=n.filterHeight,e=n.filterWidth,r=n.strideHeight,o=n.strideWidth,i=t-1-n.padInfo.top,a=e-1-n.padInfo.left,s=n.outChannels/n.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+r+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Qc=function(n,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.outputShape=n.outShape;var o=n.padInfo.top,i=n.padInfo.left,a=n.strideHeight,s=n.strideWidth,u=n.dilationHeight,c=n.dilationWidth,l=n.filterHeight,f=n.filterWidth,h=4*Math.floor(n.inChannels/4),d=n.inChannels%4,p=n.dataFormat==="channelsLast",v=p?1:2,m=p?2:3,g=p?3:1,x="",b="";e&&(x=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,b="result = activation(result);");var y=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+x+`

      const ivec2 strides = ivec2(`+a+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+g+`];

        ivec2 xRCCorner =
            ivec2(coords[`+v+"], coords["+m+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+n.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+f+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+n.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+h+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+p+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(d===1)+`) {

              if (`+p+`) {
                dotProd +=
                    getX(batch, xR, xC, `+h+`) *
                    getW(wR, wC, `+h+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+h+`, xR, xC) *
                    getW(wR, wC, `+h+`, d2);
              }

            } else if (`+(d===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2)
              );

              if (`+p+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(d===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+h+`, d2),
                getW(wR, wC, `+h+` + 1, d2),
                getW(wR, wC, `+h+` + 2, d2)
              );

              if (`+p+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+h+`),
                  getX(batch, xR, xC, `+h+` + 1),
                  getX(batch, xR, xC, `+h+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+h+`, xR, xC),
                  getX(batch, `+h+` + 1, xR, xC),
                  getX(batch, `+h+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+y+`
        `+b+`
        setOutput(result);
      }
    `},$0=function(n){this.variableNames=["x","W"],this.outputShape=n.outShape;var t=n.padInfo.front,e=n.padInfo.top,r=n.padInfo.left,o=n.strideDepth,i=n.strideHeight,a=n.strideWidth,s=n.dilationDepth,u=n.dilationHeight,c=n.dilationWidth,l=n.filterDepth,f=n.filterHeight,h=n.filterWidth,d=4*Math.floor(n.inChannels/4),p=n.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+i+", "+a+`);
      const ivec3 pads = ivec3(`+t+", "+e+", "+r+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+n.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+h+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+d+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(p===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+d+`) *
                  getW(wF, wR, wC, `+d+`, d2);
              } else if (`+(p===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(p===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1),
                  getX(batch, xF, xR, xC, `+d+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2),
                  getW(wF, wR, wC, `+d+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Zc=function(n,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.outputShape=n.outShape;var o=n.inHeight,i=n.inWidth,a=n.padInfo.top,s=n.padInfo.left,u=n.strideHeight,c=n.strideWidth,l=n.dilationHeight,f=n.dilationWidth,h=n.filterHeight,d=n.filterWidth,p=n.outChannels/n.inChannels,v="",m="";e&&(v=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,m="result = activation(result);");var g=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+v+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+p+`;
        int q = d2 - d1 * `+p+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+h+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+d+`; wC++) {
            int xC = xCCorner + wC * `+f+`;

            if (xC < 0 || xC >= `+i+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+g+`
        `+m+`
        setOutput(result);
      }
    `},el=function(n,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=null),r===void 0&&(r=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n.outShape;for(var o=n.inHeight,i=n.inWidth,a=n.padInfo.top,s=n.padInfo.left,u=n.strideHeight,c=n.strideWidth,l=n.dilationHeight,f=n.dilationWidth,h=n.filterHeight,d=n.filterWidth,p=d,v="int xR; int xC; int xCOffset;",m=0;m<h;m++)for(var g=0;g<d;g++)v+=`
          vec4 xTexelR`+m+"C"+2*g+` = vec4(0.);
          vec4 wR`+m+"C"+g+` = vec4(0.);
          vec4 xR`+m+"C"+g+" = vec4(0.);";for(m=0;m<h;m++)for(var x=0;x<p;x++){if(v+=`
          xR = xRCorner + `+m*l+`;
          xC = xCCorner + `+(g=2*x)*f+`;
        `,c===1){if(g<d&&(v+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+i+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+i+`) {
                    xTexelR`+m+"C"+g+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+i+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+i+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+m+"C"+g+" = vec4(previous.zw, xTexelR"+m+"C"+g+`.xy);
                } else {
                  xR`+m+"C"+g+" = vec4(0, 0, xTexelR"+m+"C"+g+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+i+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xR`+m+"C"+g+" = xTexelR"+m+"C"+g+`;
              `,g+1<d)){var b=s%2==0?zf(f):f;f%2==0&&s%2==1||f%2!=0&&s%2!=1?(v+=`
                  xCOffset = xC + `+s%2+" + "+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+i+`) {
                    xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,f>1&&(v+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+i+`) {
                      xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+m+"C"+g+` = vec4(0.);
                    }
                  `),v+=`
                  xR`+m+"C"+(g+1)+` = vec4(
                    xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.xy);
                `):v+=`
                  xCOffset = xC + `+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+i+`) {
                    xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+m+"C"+(g+1)+" = xTexelR"+m+"C"+(g+2)+`;
                `}}else g<d&&(v+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(v+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+i+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+i+`) {
                  xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+m+"C"+(g+2)+` = vec4(0.);
                }

                xR`+m+"C"+g+` = vec4(
                  xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.zw);
              `,g+1<d&&(v+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+i+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+m+"C"+(g+1)+" = vec4(xTexelR"+m+"C"+(g+2)+`.xy, final.xy);
                `)):(v+=`
                if(xC >= 0 && xC < `+i+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+i+`) {
                  xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+m+"C"+(g+2)+` = vec4(0.);
                }

                xR`+m+"C"+g+` = vec4(
                  xTexelR`+m+"C"+g+".xy, xTexelR"+m+"C"+(g+2)+`.xy);
              `,g+1<d&&(v+=`
                  xR`+m+"C"+(g+1)+` = vec4(
                    xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.zw);
                `)),v+="}");g<d&&(v+=`
            vec4 wTexelR`+m+"C"+g+" = getW("+m+", "+g+`, d1, q);
            wR`+m+"C"+g+" = vec4(wTexelR"+m+"C"+g+".xz, wTexelR"+m+"C"+g+`.xz);
          `,g+1<d&&(v+=`
              vec4 wTexelR`+m+"C"+(g+1)+" = getW("+m+", "+(g+1)+`, d1, q);
              wR`+m+"C"+(g+1)+` =
                vec4(wTexelR`+m+"C"+(g+1)+".xz, wTexelR"+m+"C"+(g+1)+".xz);"))}for(m=0;m<h;m++)for(g=0;g<d;g++)v+="dotProd += xR"+m+"C"+g+" * wR"+m+"C"+g+";";var y="",w="";e&&(y=r?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`vec4 activation(vec4 x) {
          `+e+`
        }`,w="result = activation(result);");var _=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),r&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+v+`

        vec4 result = dotProd;
        `+_+`
        `+w+`
        setOutput(result);
      }
    `},Y0=function(n,t,e,r,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var i=n[0],a=n[1],s=n[2],u=n[3],c=t[0],l=e[0],f=e[1];this.outputShape=[c,l,f,u];var h=r==="bilinear"?1:0,d=[a-1+".0",s-1+".0"],p=d[0],v=d[1],m=l>1?[""+(a-1)/(l-1),"(y2-y1) * height_ratio","y1*"+p+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+p],g=m[0],x=m[1],b=m[2],y=f>1?[""+(s-1)/(f-1),"(x2-x1) * width_ratio","x1*"+v+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+v],w=y[0],_=y[1],k=y[2];this.userCode=`
      const float height_ratio = float(`+g+`);
      const float width_ratio = float(`+w+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+i+`) {
          return;
        }

        float height_scale = `+x+`;
        float width_scale = `+_+`;

        float in_y = `+b+`;
        if( in_y < 0.0 || in_y > `+p+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+k+`;
        if( in_x < 0.0 || in_x > `+v+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+h+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},J0=function(n,t,e){this.variableNames=["x"],this.outputShape=n;var r=n.length,o=n[n.length-1],i=e?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(e?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+Ve(r)+` coords = getOutputCoords();
        int end = `+tl(r,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+i+` end) {
            continue;
          }
          if (idx == end && `+t+`) {
            continue;
          }
          `+tl(r,"coords")+` = idx;
          val += getX(`+function(a,s){if(a===1)return""+s;if(a===2)return s+".x, "+s+".y";if(a===3)return s+".x, "+s+".y, "+s+".z";if(a===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+a+" is not yet supported")}(r,"coords")+`);
        }
        setOutput(val);
      }
    `};function tl(n,t){if(n===1)return""+t;if(n===2)return t+".y";if(n===3)return t+".z";if(n===4)return t+".w";throw Error("Cumulative sum for rank "+n+" is not yet supported")}var Q0=function(n){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=_o.DENSE;var t=co(n),e=mt();this.outputShape=n,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+ur(["r","c","d"],n)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+e.output+` = result;
      }
    `},Z0=function(n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=_o.DENSE;var t=co(n),e=mt();this.outputShape=n,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+ur(["r","c","d"],n)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+e.output+` = result;
      }
    `},ey=function(){function n(t,e,r){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=r,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+e+`;
      int offset_h = imod(h, `+e+`);
      int in_w = w / `+e+`;
      int offset_w = imod(w, `+e+`);
      int offset_d = (offset_h * `+e+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return n.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},n.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},n.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},n.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},n.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},n}(),ty=function(n){this.variableNames=["X"],this.outputShape=[n,n],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},ny=function(n){this.variableNames=["A"],this.outTexUsage=Ot.DOWNLOAD;var t=mt();this.outputShape=n,this.userCode=`
      `+wh+`

      void main() {
        float x = getAAtOutCoords();
        `+t.output+` = encode_float(x);
      }
    `},ry=function(n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=Ot.DOWNLOAD;var t=mt();this.outputShape=n,this.userCode=`
      `+wh+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+t.output+` = encode_float(x);
      }
    `},oy=function(n,t,e){e===void 0&&(e=!1),this.variableNames=["A"];var r=mt(),o=t[0],i=t[1];this.outputShape=n;var a="result";e&&(a="floor(result * 255. + 0.5)"),this.userCode=`
      `+uu(n)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+i+`;
        int c = imod(flatIndex, `+i+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+i+".0, "+o+`.0);
        vec4 values = `+r.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+r.output+" = vec4("+a+`, 0., 0., 0.);
      }
    `},iy=function(n,t,e){e===void 0&&(e=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var r=mt(),o=t[0],i=t[1];this.outputShape=n;var a="",s="result";e&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;a+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+n[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+n[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+i+`;
              c = imod(flatIndex, `+i+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+i+".0, "+o+`.0);
              values = `+r.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+uu(n)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+a+`

        `+r.output+" = "+s+`;
      }
    `},ay="return real * expR - imag * expI;",sy="return real * expI + imag * expR;",nl=function(n,t,e){this.variableNames=["real","imag"];var r=t[1];this.outputShape=t;var o=e?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,i=e?r+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+n+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+r+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+r+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+i+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},uy=function(){function n(t,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;return function(r,o){e.valueLoc==null&&(e.valueLoc=r.getUniformLocationNoThrow(o,"value")),r.gl.uniform1f(e.valueLoc,t)}},n}(),cy=function(n,t,e){this.variableNames=["A","indices"];var r=n.slice();r[e]=t,this.outputShape=r,this.rank=r.length;var o=Ve(this.rank),i=function(a,s){var u=a.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],f=0;f<a.length;f++)f===s?l.push("int(getIndices("+c[f]+"))"):l.push(""+c[f]);return l.join()}(n,e);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+i+`));
      }
    `},ly=function(n,t,e){this.sliceDim=n,this.strides=t,this.variableNames=["x","indices"],this.outputShape=e;var r=Ve(t.length),o=Ve(e.length),i=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+r+" strides = "+r+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+i+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function fy(n,t){var e=mt();return ag(n,t,e.version+`
    precision highp float;
    `+e.attribute+` vec3 clipSpacePos;
    `+e.attribute+` vec2 uv;
    `+e.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function hy(n,t){return fg(n,t,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function dy(n,t){return hg(n,t,new Uint16Array([0,1,2,2,1,3]))}function No(n,t,e,r,o,i,a){pg(e,r);var s=dg(n,t),u=n.TEXTURE_2D;return le(n,t,function(){return n.bindTexture(u,s)}),le(n,t,function(){return n.texParameteri(u,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE)}),le(n,t,function(){return n.texParameteri(u,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}),le(n,t,function(){return n.texParameteri(u,n.TEXTURE_MIN_FILTER,n.NEAREST)}),le(n,t,function(){return n.texParameteri(u,n.TEXTURE_MAG_FILTER,n.NEAREST)}),le(n,t,function(){return n.texImage2D(u,0,o,e,r,0,i,a,null)}),le(n,t,function(){return n.bindTexture(n.TEXTURE_2D,null)}),s}function py(n,t,e,r,o){var i=Qi(e,r);return No(n,t,i[0],i[1],o.internalFormatFloat,o.textureFormatFloat,n.FLOAT)}function vy(n,t,e,r,o){var i=Qi(e,r);return No(n,t,i[0],i[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function my(n,t,e,r,o){var i=Qi(e,r);return No(n,t,i[0],i[1],n.RGBA,n.RGBA,n.UNSIGNED_BYTE)}function gy(n,t,e,r,o){var i=To(e,r);return No(n,t,i[0],i[1],o.internalFormatPackedFloat,n.RGBA,n.FLOAT)}function yy(n,t,e,r,o){var i=To(e,r);return No(n,t,i[0],i[1],o.internalFormatPackedHalfFloat,n.RGBA,o.textureTypeHalfFloat)}function xy(n,t,e,r){return le(n,t,function(){return n.bindBuffer(n.ARRAY_BUFFER,r)}),Hc(n,t,e,"clipSpacePos",r,3,20,0)&&Hc(n,t,e,"uv",r,2,20,12)}function by(n,t,e,r,o,i,a){var s,u,c;le(n,t,function(){return n.bindTexture(n.TEXTURE_2D,e)}),i instanceof Uint8Array?(s=new Uint8Array(r*o*4),u=n.UNSIGNED_BYTE,c=n.RGBA):(s=new Float32Array(r*o*4),u=n.FLOAT,c=a.internalFormatPackedFloat),s.set(i),le(n,t,function(){return n.texImage2D(n.TEXTURE_2D,0,c,r,o,0,n.RGBA,u,s)}),le(n,t,function(){return n.bindTexture(n.TEXTURE_2D,null)})}function wy(n,t,e,r){le(n,t,function(){return n.bindTexture(n.TEXTURE_2D,e)}),r.data instanceof Uint8Array?le(n,t,function(){return n.texImage2D(n.TEXTURE_2D,0,n.RGBA,r.width,r.height,0,n.RGBA,n.UNSIGNED_BYTE,r.data)}):le(n,t,function(){return n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,r)}),le(n,t,function(){return n.bindTexture(n.TEXTURE_2D,null)})}function _y(n,t,e,r,o){var i=n.createBuffer();le(n,t,function(){return n.bindBuffer(n.PIXEL_PACK_BUFFER,i)});var a=16*e*r;return le(n,t,function(){return n.bufferData(n.PIXEL_PACK_BUFFER,a,n.STREAM_READ)}),le(n,t,function(){return n.readPixels(0,0,r,e,n.RGBA,n.FLOAT,0)}),le(n,t,function(){return n.bindBuffer(n.PIXEL_PACK_BUFFER,null)}),i}function Cy(n,t,e){var r=n,o=new Float32Array(e);return r.bindBuffer(r.PIXEL_PACK_BUFFER,t),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,o),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),o}function Ey(n,t,e,r,o){var i=Qi(e,r),a=i[0],s=i[1],u=new Uint8Array(e*r*4);return le(n,t,function(){return n.readPixels(0,0,a,s,o.downloadTextureFormat,n.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function Iy(n,t,e,r,o,i,a,s){var u=n,c=new Float32Array(function(l,f){var h=To(l,f);return h[0]*h[1]*4}(i,a));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function Ry(n,t,e,r){var o=new Float32Array(e*r*4);return le(n,t,function(){return n.readPixels(0,0,r,e,n.RGBA,n.FLOAT,o)}),o}var Sy=function(){function n(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=H().getNumber("WEBGL_VERSION");t!=null?(this.gl=t,tg(e,t)):this.gl=pn(e);var r="WEBGL_color_buffer_float";if(H().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=qo(this.gl,this.debug,"OES_texture_float"),Ht(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=qo(this.gl,this.debug,"OES_texture_half_float");else if(H().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(r),Ht(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=qo(this.gl,this.debug,"EXT_color_buffer_half_float");else if(H().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(r="EXT_color_buffer_float",Ht(this.gl,r))this.colorBufferFloatExtension=this.gl.getExtension(r);else{if(!Ht(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=hy(this.gl,this.debug),this.indexBuffer=dy(this.gl,this.debug),this.framebuffer=vg(this.gl,this.debug),this.textureConfig=Qs(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(n.prototype,"debug",{get:function(){return H().getBool("DEBUG")},enumerable:!0,configurable:!0}),n.prototype.dispose=function(){var t=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;le(e,this.debug,function(){return e.finish()}),le(e,this.debug,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),le(e,this.debug,function(){return e.deleteFramebuffer(t.framebuffer)}),le(e,this.debug,function(){return e.bindBuffer(e.ARRAY_BUFFER,null)}),le(e,this.debug,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)}),le(e,this.debug,function(){return e.deleteBuffer(t.indexBuffer)}),this.disposed=!0}},n.prototype.createFloat32MatrixTexture=function(t,e){return this.throwIfDisposed(),py(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.createFloat16MatrixTexture=function(t,e){return this.throwIfDisposed(),vy(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.createUnsignedBytesMatrixTexture=function(t,e){return this.throwIfDisposed(),my(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.uploadPixelDataToTexture=function(t,e){this.throwIfDisposed(),wy(this.gl,this.debug,t,e)},n.prototype.uploadDenseMatrixToTexture=function(t,e,r,o){this.throwIfDisposed(),by(this.gl,this.debug,t,e,r,o,this.textureConfig)},n.prototype.createFloat16PackedMatrixTexture=function(t,e){return this.throwIfDisposed(),yy(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.createPackedMatrixTexture=function(t,e){return this.throwIfDisposed(),gy(this.gl,this.debug,t,e,this.textureConfig)},n.prototype.deleteMatrixTexture=function(t){var e=this;this.throwIfDisposed(),this.outputTexture===t&&(Gc(this.gl,this.debug,this.framebuffer),this.outputTexture=null),le(this.gl,this.debug,function(){return e.gl.deleteTexture(t)})},n.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,e,r){var o=this;return this.downloadMatrixDriver(t,function(){return Ey(o.gl,o.debug,e,r,o.textureConfig)})},n.prototype.downloadPackedMatrixFromBuffer=function(t,e,r,o,i,a){return Iy(this.gl,t,0,0,0,i,a,this.textureConfig)},n.prototype.downloadFloat32MatrixFromBuffer=function(t,e){return Cy(this.gl,t,e)},n.prototype.createBufferFromTexture=function(t,e,r){this.bindTextureToFrameBuffer(t);var o=_y(this.gl,this.debug,e,r,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},n.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},n.prototype.createFence=function(t){var e,r,o=this;if(H().getBool("WEBGL_FENCE_API_ENABLED")){var i=t,a=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),r=function(){var s=i.clientWaitSync(a,0,0);return s===i.ALREADY_SIGNALED||s===i.CONDITION_SATISFIED},e=a}else H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),r=function(){return o.isQueryAvailable(e,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):r=function(){return!0};return{query:e,isFencePassed:r}},n.prototype.downloadMatrixFromPackedTexture=function(t,e,r){var o=this;return this.downloadMatrixDriver(t,function(){return Ry(o.gl,o.debug,e,r)})},n.prototype.createProgram=function(t){this.throwIfDisposed();var e=this.gl,r=sg(e,this.debug,t),o=fy(e,this.debug),i=cg(e,this.debug);return le(e,this.debug,function(){return e.attachShader(i,o)}),le(e,this.debug,function(){return e.attachShader(i,r)}),lg(e,this.debug,i),this.debug&&Aa(e,this.debug,i),this.vertexAttrsAreBound||(this.setProgram(i),this.vertexAttrsAreBound=xy(e,this.debug,this.program,this.vertexBuffer)),i},n.prototype.deleteProgram=function(t){var e=this;this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&le(this.gl,this.debug,function(){return e.gl.deleteProgram(t)})},n.prototype.setProgram=function(t){var e=this;this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&Aa(this.gl,this.debug,this.program),le(this.gl,this.debug,function(){return e.gl.useProgram(t)})},n.prototype.getUniformLocation=function(t,e,r){return r===void 0&&(r=!0),this.throwIfDisposed(),r?gg(this.gl,this.debug,t,e):yg(this.gl,t,e)},n.prototype.getAttributeLocation=function(t,e){var r=this;return this.throwIfDisposed(),le(this.gl,this.debug,function(){return r.gl.getAttribLocation(t,e)})},n.prototype.getUniformLocationNoThrow=function(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)},n.prototype.setInputMatrixTexture=function(t,e,r){this.throwIfDisposed(),this.throwIfNoProgram(),xg(this.gl,this.debug,this.program,t,e,r)},n.prototype.setOutputMatrixTexture=function(t,e,r){this.setOutputMatrixTextureDriver(t,r,e)},n.prototype.setOutputPackedMatrixTexture=function(t,e,r){this.throwIfDisposed();var o=To(e,r),i=o[0],a=o[1];this.setOutputMatrixTextureDriver(t,i,a)},n.prototype.setOutputMatrixWriteRegion=function(t,e,r,o){this.setOutputMatrixWriteRegionDriver(r,t,o,e)},n.prototype.setOutputPackedMatrixWriteRegion=function(t,e,r,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},n.prototype.debugValidate=function(){this.program!=null&&Aa(this.gl,this.debug,this.program),Ko(this.gl)},n.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),le(t,this.debug,function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)})},n.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),le(this.gl,this.debug,function(){return t.gl.finish()})},n.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=qo(this.gl,this.debug,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},n.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},n.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},n.prototype.beginQuery=function(){if(H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var t=this.gl,e=this.getQueryTimerExtensionWebGL2(),r=t.createQuery();return t.beginQuery(e.TIME_ELAPSED_EXT,r),r}var o=this.getQueryTimerExtensionWebGL1(),i=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,i),i},n.prototype.endQuery=function(){if(H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}else{var e=this.gl,r=this.getQueryTimerExtensionWebGL2();e.endQuery(r.TIME_ELAPSED_EXT)}},n.prototype.waitForQueryAndGetTime=function(t){return se(this,void 0,void 0,function(){var e=this;return ue(this,function(r){switch(r.label){case 0:return[4,Bc(function(){return e.disposed||e.isQueryAvailable(t,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return r.sent(),[2,this.getQueryTime(t,H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},n.prototype.getQueryTime=function(t,e){if(e===0)return null;if(e===2){var r=this.gl;return r.getQueryParameter(t,r.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6},n.prototype.isQueryAvailable=function(t,e){if(e===0)return!0;if(e===2){var r=this.gl,o=this.getQueryTimerExtensionWebGL2(),i=r.getQueryParameter(t,r.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),i&&!this.disjoint}return i=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),i&&!this.disjoint},n.prototype.pollFence=function(t){var e=this;return new Promise(function(r){e.addItemToPoll(function(){return t.isFencePassed()},function(){return r()})})},n.prototype.pollItems=function(){for(var t=function(r){for(var o=0;o<r.length&&r[o]();++o);return o-1}(this.itemsToPoll.map(function(r){return r.isDoneFn})),e=0;e<=t;++e)(0,this.itemsToPoll[e].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(t+1)},n.prototype.addItemToPoll=function(t,e){var r=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1||Bc(function(){return r.pollItems(),r.itemsToPoll.length===0})},n.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),Da(this.gl,this.debug,t,this.framebuffer),this.debug&&Ko(this.gl)},n.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(Da(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&Ko(this.gl)):Gc(this.gl,this.debug,this.framebuffer)},n.prototype.downloadMatrixDriver=function(t,e){this.bindTextureToFrameBuffer(t);var r=e();return this.unbindTextureToFrameBuffer(),r},n.prototype.setOutputMatrixTextureDriver=function(t,e,r){this.throwIfDisposed();var o=this.gl;Da(o,this.debug,t,this.framebuffer),this.debug&&Ko(o),this.outputTexture=t,le(o,this.debug,function(){return o.viewport(0,0,e,r)}),le(o,this.debug,function(){return o.scissor(0,0,e,r)})},n.prototype.setOutputMatrixWriteRegionDriver=function(t,e,r,o){var i=this;this.throwIfDisposed(),le(this.gl,this.debug,function(){return i.gl.scissor(t,e,r,o)})},n.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},n.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},n}();function rl(n,t){if(n.length!==t.length)throw Error("Binary was compiled with "+n.length+" inputs, but was executed with "+t.length+" inputs");n.forEach(function(e,r){var o=e.logicalShape,i=t[r],a=i.shape;if(!at(o,a))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+a+" must match");if(!e.isUniform||!i.isUniform){var s=e.texShape,u=i.isUniform?null:i.texData.texShape;if(!at(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var ky=function(n,t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n;for(var r=e.filterWidth,o=e.inChannels,i=e.strideWidth,a=e.strideHeight,s=e.padInfo,u=e.outWidth,c=e.dilationWidth,l=e.dilationHeight,f=e.dataFormat,h=s.left,d=s.top,p=o*r,v=mt(),m=f==="channelsLast",g=m?0:1,x=m?1:2,b="",y=0;y<=1;y++)for(var w=0;w<=1;w++)b+=`
          blockIndex = rc.y + `+w+`;
          pos = rc.x + `+y+`;

          if(blockIndex < `+n[1]+" && pos < "+n[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+a+" - "+d+`;
            d0 = offsetY + `+l+" * (pos / "+p+`);

            if(d0 < `+t[g]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+i+". - "+h+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+p+".) / "+o+`.));

              if(d1 < `+t[x]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+m+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*y+w)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+b+`

        `+v.output+` = result;
      }
    `},Ay=function(n,t,e,r,o){this.variableNames=["x"],this.outputShape=[];var i,a=t,s=n[3]-1;this.outputShape=n;var u="float("+e+") + float("+r+") * sum";i=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+a+"; j <= "+a+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+i+`;
        setOutput(val);
      }
    `},Dy=function(n,t,e,r,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=n,this.depth=n[3],this.depthRadius=t,this.bias=e,this.alpha=r,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+t+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+t+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+r+") * norm + float("+e+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+r+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},Ty=function(n,t,e,r,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var i,a=t,s=n[3]-1;this.outputShape=n;var u="float("+e+") + float("+r+") * sum";i=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+a+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+a+"; j <= "+a+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+i+`;
        setOutput(result);
      }
    `},Ny=function(n){this.variableNames=["dy","maxPos"],this.outputShape=n.inShape;var t=n.strideHeight,e=n.strideWidth,r=n.dilationHeight,o=n.effectiveFilterHeight,i=n.effectiveFilterWidth,a=o-1-n.padInfo.top,s=i-1-n.padInfo.left,u=o*i-1;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+r+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+i+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+e+`.0;

            if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+i+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},Fy=function(n){this.variableNames=["dy","maxPos"],this.outputShape=n.inShape;var t=n.strideDepth,e=n.strideHeight,r=n.strideWidth,o=n.dilationDepth,i=n.dilationHeight,a=n.dilationWidth,s=n.effectiveFilterDepth,u=n.effectiveFilterHeight,c=n.effectiveFilterWidth,l=s-1-n.padInfo.front,f=u-1-n.padInfo.top,h=c-1-n.padInfo.left,d=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+f+", "+h+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+t+`.0;

          if (dyD < 0.0 || dyD >= `+n.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            float dyR = float(dyRCorner + wR) / `+e+`.0;

            if (dyR < 0.0 || dyR >= `+n.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+a+`) {
              float dyC = float(dyCCorner + wC) / `+r+`.0;

              if (dyC < 0.0 || dyC >= `+n.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+d+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Ma=function(n,t,e,r,o,i,a){e===void 0&&(e=!1),r===void 0&&(r=!1),o===void 0&&(o=!1),i===void 0&&(i=null),a===void 0&&(a=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;var s=e?n[1]:n[2],u=Math.ceil(s/2),c=e?"i * 2, rc.y":"rc.y, i * 2",l=r?"rc.z, i * 2":"i * 2, rc.z",f=e?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],h=r?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],d="",p="";i&&(d=a?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+i+`
        }`:`vec4 activation(vec4 x) {
          `+i+`
        }`,p="result = activation(result);");var v=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+d+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+f[0]+" * "+h[0]+`);
          result += (`+f[1]+" * "+h[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+v+`

        `+p+`

        setOutput(result);
      }
    `},Py=function(){function n(t,e,r){this.variableNames=["probs"],this.outputShape=[t,r],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(e-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(e-1)+`));
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;return function(r,o){e.seedLoc==null&&(e.seedLoc=r.getUniformLocation(o,"seed")),r.gl.uniform1f(e.seedLoc,t)}},n}(),My=function(n,t,e,r){this.variableNames=["indices"],this.outputShape=[n,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+r+"), float("+e+`),
                      float(index == coords.y)));
      }
    `},Oy=function(n){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=n;var t=n.length;if(t===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var e=Et("rc",t),r=Ve(t),o=function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",f=s-2;f<s;f++)l+=c[f]+" >= "+u[f],f<s-1&&(l+="||");return l}(t,n,e),i=function(s,u,c,l){if(s===1)return"";var f=l.slice(-2);return`
    int r = `+f[0]+`;
    int c = `+f[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `}(t,n[n.length-1],n[n.length-2],e),a=function(s,u){var c=s.length,l=function(f,h){for(var d=[],p=0;p<=1;p++)for(var v=0;v<=1;v++){for(var m=(p===0?"r":"rp1")+", "+(v===0?"c":"cp1"),g=2;g<f;g++)m=h[h.length-1-g]+","+m;d.push(m)}return d}(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"}(n,e);this.userCode=`
        void main() {
          `+r+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+i+`

            setOutput(vec4(`+a+`));
          }
        }
      `}},By=function(n,t,e){this.variableNames=["x"],this.outputShape=t.map(function(u,c){return u[0]+n[c]+u[1]});var r=n.length,o=Ve(r),i=t.map(function(u){return u[0]}).join(","),a=t.map(function(u,c){return u[0]+n[c]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,r);this.userCode=r!==1?`
      `+o+" start = "+o+"("+i+`);
      `+o+" end = "+o+"("+a+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+e+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+i+`;
        int end = `+a+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+e+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},Ly=function(n,t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map(function(m,g){return m[0]+n[g]+m[1]});for(var r=n.length,o=Ve(r),i=t.map(function(m){return m[0]}).join(","),a=t.map(function(m,g){return m[0]+n[g]}).join(","),s=Et("rc",r),u=Et("source",r),c=s[r-1]+" < "+this.outputShape[r-1],l=r===1?"source":"vec2("+u.slice(-2).join()+")",f=[o+" rc = outputLoc;",s[r-1]+` += 1;
       if(`+c+`) {
      `,r===1?"":`}
       rc = outputLoc;
       `+s[r-2]+` += 1;
       if(`+s[r-2]+" < "+this.outputShape[r-2]+") {",r===1?"":"  "+s[r-1]+` += 1;
         if(`+c+") {"],h=r===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",d="",p=0,v=r===1?2:4;p<v;p++)d+=`
        `+f[p]+`
        if (`+h+`) {
          result[`+p+"] = float("+e+`);
        } else {
          `+o+` source = rc - start;
          result[`+p+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;d+=r===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+i+`);
      const `+o+" end = "+o+"("+a+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+d+`
        setOutput(result);
      }
    `},Oa=function(n,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var r=n.filterWidth,o=n.strideHeight,i=n.strideWidth,a=n.dilationHeight,s=n.dilationWidth,u=n.effectiveFilterHeight,c=n.effectiveFilterWidth,l=n.padInfo.top,f=n.padInfo.left;this.outputShape=n.outShape;var h=t==="avg",d="0.0";if(h||(d="-1.0 / 1e-20"),e)this.userCode=`
        const ivec2 strides = ivec2(`+o+", "+i+`);
        const ivec2 pads = ivec2(`+l+", "+f+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+n.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var p=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(p="avgValue / count");var v=4*Math.floor(r/4),m=r%4,g=`
      if (`+h+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+i+`);
      const ivec2 pads = ivec2(`+l+", "+f+`);
      const float initializationValue = `+d+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+n.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+d+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+a+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+n.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+v+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+g+`
          }

          int xC = xCCorner + `+v+`;
          if (`+(m===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(m===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(m===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+g+`
          }
        }
        setOutput(`+p+`);
      }
    `}},Ba=function(n,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var r=n.filterWidth,o=n.strideDepth,i=n.strideHeight,a=n.strideWidth,s=n.dilationDepth,u=n.dilationHeight,c=n.dilationWidth,l=n.effectiveFilterDepth,f=n.effectiveFilterHeight,h=n.effectiveFilterWidth,d=n.padInfo.front,p=n.padInfo.top,v=n.padInfo.left;this.outputShape=n.outShape;var m=t==="avg",g="0.0";if(m||(g="-1.0 / 1e-20"),e)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+i+", "+a+`);
        const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+n.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+f+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+n.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+h+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+n.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+f+" * "+h+` +
                      wR * `+h+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var x=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(x="avgValue / count");var b=4*Math.floor(r/4),y=r%4,w=`
      if (`+m+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+i+", "+a+`);
      const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);
      const float initializationValue = `+g+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+n.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+g+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+n.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+f+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+n.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+b+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+w+`
            }

            int xC = xCCorner + `+b+`;
            if (`+(y===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(y===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+w+`
            }
          }
          setOutput(`+x+`);
        }
      }
    `}},Wy=function(n,t){this.variableNames=["x"];var e=n.windowSize,r=n.batchSize,o=n.inSize,i=Math.ceil(o/e);this.outputShape=[r,i];var a="0.0",s="";t==="prod"?a="1.0":t==="min"?(a="1.0 / 1e-20",s="min"):t==="max"&&(a="-1.0 / 1e-20",s="max");var u=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");var c=4*Math.floor(e/4),l=e%4,f=`
      if (`+(t==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(t==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,h="vec4";t==="all"?(a="1.0",f=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,h="bvec4"):t==="any"&&(a="0.0",f=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,h="bvec4");var d="";o%e>0&&(d=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+a+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+d+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+e+`;

        vec4 minMaxValue = vec4(`+a+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+f+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===2)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+f+`
        } else if (`+(l===3)+`) {
          `+h+" values = "+h+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+f+`
        }
        setOutput(`+u+`);
      }
    `},Uy=function(n,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n;for(var e="",r=0;r<4;r++){var o="thisRC = rc;";r%2==1&&(o+="thisRC.z += 1;"),r>1&&(o+="thisRC.y += 1;"),e+=`
        `+o+`
        `+(r>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+r+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(r>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+ur(["r","c","d"],t)+`
      return ivec3(r, c, d);
    }
  
      `+uu(n)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+n[1]+`;
        int cols = `+n[2]+`;

        `+e+`

        setOutput(result);
      }
    `},Vy=function(n,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var r=t.shape,o=r[1],i=r[2],a=n.shape,s=a[1],u=a[2],c=[e&&s>1?o-1:o,e&&u>1?i-1:i],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],d=1/f,p=1/h,v=2*Math.ceil(d)+2,m=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+m+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(i-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},zy=function(n,t,e,r){this.variableNames=["A"],this.outputShape=[];var o=n[0],i=n[1],a=n[2],s=n[3];this.outputShape=[o,t,e,s];var u=[r&&t>1?i-1:i,r&&e>1?a-1:a],c=[r&&t>1?t-1:t,r&&e>1?e-1:e];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+i+".0, "+a+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},Hy=function(n,t,e,r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=n[0],i=n[1],a=n[2],s=n[3];this.outputShape=[o,t,e,s];var u=[r&&t>1?i-1:i,r&&e>1?a-1:a],c=[r&&t>1?t-1:t,r&&e>1?e-1:e];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+i+".0, "+a+`.0,
                                     `+a+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(e-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},Gy=function(n,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var r=t.shape,o=r[1],i=r[2],a=n.shape,s=a[1],u=a[2],c=[e&&s>1?o-1:o,e&&u>1?i-1:i],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],f=c[0]/l[0],h=c[1]/l[1],d=1/f,p=1/h,v=2*Math.ceil(d)+2,m=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+f+`);
        const float widthScale = float(`+h+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+m+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+e+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+i+`) - 1),
                `+e+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},jy=function(n,t,e,r){this.variableNames=["A"],this.outputShape=[];var o=n[0],i=n[1],a=n[2],s=n[3];this.outputShape=[o,t,e,s];var u=[r&&t>1?i-1:i,r&&e>1?a-1:a],c=[r&&t>1?t-1:t,r&&e>1?e-1:e],l=r?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+i+".0, "+a+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},qy=function(n,t){this.variableNames=["x"];var e=n.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");if(this.outputShape=n,e!==1){var r=n.map(function(i,a){return function(s){return t.indexOf(s)!==-1&&n[s]!==1?n[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(a)}).join(","),o=Ve(e);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+r+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+n[0]+` - coord - 1));
        }
      `},Ky=function(n,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var e=n.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");this.outputShape=n;var r=Et("rc",e),o=r[e-1]+" + 1 < "+this.outputShape[e-1],i=r[e-2]+" + 1 < "+this.outputShape[e-2],a=Ve(e);function s(u){var c=n.map(function(l,f){return function(h,d){return t.indexOf(h)!==-1&&n[h]!==1?n[h]+" - "+d[h]+" - 1":""+d[h]}(f,u)});return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=e===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+n[0]+` - rc - 1),
            `+n[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+n[0]+` - (rc  + 1) - 1),
                `+n[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+a+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(r.slice())+`;
          if(`+o+`){
            result.g = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",s(u)}(r.slice())+`;
          }
          if(`+i+`) {
            result.b = `+function(u){return u[e-2]="("+u[e-2]+" + 1)",s(u)}(r.slice())+`;
            if(`+o+`) {
              result.a = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",u[e-2]="("+u[e-2]+" + 1)",s(u)}(r.slice())+`;
            }
          }
          setOutput(result);
        }
    `},ol=function(n,t,e,r,o,i,a){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;var s=Ve(o.length),u=Ve(i.length),c="";e===1?c="i":e===2&&(c="i, j");var l="getIndices("+c+")",f="";r===1?f="i":r===2&&(f="i, coords[1]");var h="getUpdates("+f+")",d=t>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+n+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+t+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+d+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+h+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},Xy=function(n,t){this.variableNames=["x","segmentIds"];var e=n.windowSize,r=n.batchSize,o=n.inSize,i=n.numSegments,a=i*Math.ceil(o/e);this.outputShape=[r,a];var s=4*Math.floor(e/4),u=e%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";o%e>0&&(l=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var f="";o%e>0&&(f=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+f+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+i+")) * float("+e+`));
        int currentSeg = int(mod(float(outIdx), float(`+i+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},$y=function(n,t,e){var r,o;if(this.variableNames=["c","a","b"],this.outputShape=t,e>4)throw Error("Where for rank "+e+" is not yet supported");if(e===1)o="resRC",r="resRC";else{for(var i=["resRC.x","resRC.y","resRC.z","resRC.w"],a=[],s=[],u=0;u<t.length;u++)s.push(""+i[u]),u<n&&a.push(""+i[u]);r=a.join(),o=s.join()}var c=Ve(e);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+r+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},Yy=function(){function n(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var e,r=Ve(this.rank),o="uniform int start["+this.rank+"];",i=function(a){if(a===1)return"sourceLoc";if(a<=6)return La.slice(0,a).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+a+" is not yet supported")}(this.rank);e=`
        `+r+` sourceLoc;
        `+r+` coords = getOutputCoords();
        `+t.map(function(a,s){return"sourceLoc."+La[s]+" = start["+s+"] + coords."+La[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+e+`
        setOutput(getSource(`+i+`));
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(r,o){e.startLoc==null&&(e.startLoc=r.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||r.gl.uniform1iv(e.startLoc,t)}},n}(),La=["x","y","z","w","u","v"],Jy=function(){function n(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var e=Ve(this.rank),r=Et("coords",this.rank),o=Et("sourceLoc",this.rank),i=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",a="getChannel(getSource("+o.join()+"), "+i+")",s=`
      result.x = `+a+`;
      if (++`+r[this.rank-1]+" < "+t[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+a+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+r[this.rank-1]+`;
      if (++`+r[this.rank-2]+" < "+t[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+a+`;
        if (++`+r[this.rank-1]+" < "+t[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+a+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+e+"("+t.map(function(l,f){return"start["+f+"]"}).join()+");":t.map(function(l,f){return o[f]+" = "+r[f]+" + start["+f+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+e+` coords = getOutputCoords();
        `+e+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return n.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(r,o){e.startLoc==null&&(e.startLoc=r.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||r.gl.uniform1iv(e.startLoc,t)}},n}(),Qy=function(n,t,e){this.variableNames=["x"],this.outputShape=e;var r=e.length,o=Ve(e.length),i=Ve(e.length),a="";if(r===1)a="coords * strides + begin";else{var s=0;a=e.map(function(u,c){return s++,e.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"}).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+n+`);
      `+o+" strides = "+o+"("+t+`);

      void main() {
        `+i+` coords = getOutputCoords();
        setOutput(getX(`+a+`));
      }
    `},Zy=function(){function n(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return n.prototype.acquireTexture=function(t,e,r){var o,i=il(e,r),a=al(t,i,r);if(a in this.freeTextures||(this.freeTextures[a]=[]),a in this.usedTextures||(this.usedTextures[a]=[]),this.freeTextures[a].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[a].shift();return this.usedTextures[a].push(s),s}return this.numUsedTextures++,this.log(),i===Pt.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):i===Pt.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):i===Pt.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):i===Pt.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):i===Pt.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[a].push(o),o},n.prototype.releaseTexture=function(t,e,r,o){if(this.freeTextures!=null){var i=al(e,il(r,o),o);i in this.freeTextures||(this.freeTextures[i]=[]),this.freeTextures[i].push(t),this.numFreeTextures++,this.numUsedTextures--;var a=this.usedTextures[i],s=a.indexOf(t);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");a.splice(s,1),this.log()}},n.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")")}},n.prototype.getNumUsedTextures=function(){return this.numUsedTextures},n.prototype.getNumFreeTextures=function(){return this.numFreeTextures},n.prototype.dispose=function(){var t=this;if(this.freeTextures!=null){for(var e in this.freeTextures)this.freeTextures[e].forEach(function(r){t.gpgpu.deleteMatrixTexture(r)});for(var e in this.usedTextures)this.usedTextures[e].forEach(function(o){t.gpgpu.deleteMatrixTexture(o)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},n}();function il(n,t){if(n===Ot.UPLOAD)return Pt.PACKED_2X2_FLOAT32;if(n===Ot.RENDER||n==null)return function(e){return H().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?Pt.PACKED_2X2_FLOAT32:Pt.UNPACKED_FLOAT32:e?Pt.PACKED_2X2_FLOAT16:Pt.UNPACKED_FLOAT16}(t);if(n===Ot.DOWNLOAD||n===Ot.PIXELS)return Pt.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+n)}function al(n,t,e){return n[0]+"_"+n[1]+"_"+t+"_"+e}var ex=function(n,t){this.variableNames=["A"];for(var e=new Array(n.length),r=0;r<e.length;r++)e[r]=n[r]*t[r];this.outputShape=e,this.rank=e.length;var o=Ve(this.rank),i=function(a){var s=a.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+a[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<a.length;l++)c.push("imod("+u[l]+", "+a[l]+")");return c.join()}(n);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+i+`));
      }
    `},tx=function(n,t){this.variableNames=["A"];for(var e=new Array(n.length),r=0;r<e.length;r++)e[r]=n[t[r]];this.outputShape=e,this.rank=e.length;var o=Ve(this.rank),i=function(a){var s=a.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<a.length;l++)c[a[l]]=u[l];return c.join()}(t);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+i+`));
    }
    `},nx=function(n,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var e=new Array(n.length),r=0;r<e.length;r++)e[r]=n[t[r]];if(this.outputShape=e,this.rank=e.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=Ve(this.rank),i=bh("rc",this.rank),a=new Array(this.rank);for(r=0;r<t.length;r++)a[t[r]]=i[r];var s="vec2("+a.slice(-2).join()+")",u="++"+i[this.rank-1]+" < "+e[this.rank-1],c="getChannel(getA("+a.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+i[this.rank-1]+`;
      if(++`+i[this.rank-2]+" < "+e[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},cu=1.7580993408473768,lu=1.0507009873554805,Ee=function(n,t){this.variableNames=["A"],this.outputShape=n,this.userCode=`
      float unaryOperation(float x) {
        `+t+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},Qt="if (isnan(x)) return x;",rx="return x;",sl="return abs(x);",Ih=Qt+`
  return (x < 0.0) ? 0.0 : x;
`,Rh=Qt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,Sh="return (x >= 0.0) ? x : (exp(x) - 1.0);",ox=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+cu+`;
  float scale = `+lu+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,ul="return -x;",cl="return ceil(x);",ll="return floor(x);",fl="return exp(x);",hl="return exp(x) - 1.0;",ix=Qt+`
  return sin(x);
`,ax=Qt+`
  return cos(x);
`,sx=Qt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,ux=Qt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,cx=Qt+`
  return atan(x);
`,lx=Qt+"return log(x + sqrt(x * x + 1.0));",fx=Qt+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,hx=Qt+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,Jo="return x;",dx="return x;",kh=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Ah=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Dh=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,to=function(n,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+t+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},px=function(n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=n;var t=n.length,e=Et("rc",t),r=Ve(t),o=function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c}(t,e),i=e.slice(-2),a=t<=1?"rc":"vec2("+i.join(",")+")";this.userCode=`
      void main() {
        `+r+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+a+`));
      }
    `},Qo={};function Zo(n,t){if(t===void 0&&(t=!1),n==="linear")return t?dx:rx;if(n==="relu")return t?kh:Ih;if(n==="elu")return t?Dh:Sh;if(n==="relu6")return t?Ah:Rh;if(n==="prelu")return t?Eh:Ch;throw new Error("Activation "+n+" has not been implemented for the WebGL backend.")}var vx=600,mx=function(n){function t(e){var r,o=n.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!H().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(e==null){var i=pn(H().getNumber("WEBGL_VERSION"));o.binaryCache=((r=H().getNumber("WEBGL_VERSION"))in Qo||(Qo[r]={}),Qo[r]),o.gpgpu=new Sy(i),o.canvas=i.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=e,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=e.gl.canvas;return o.textureManager=new Zy(o.gpgpu),o.numMBBeforeWarning=H().global.screen==null?1024:H().global.screen.height*H().global.screen.width*window.devicePixelRatio*vx/1024/1024,o.texData=new fh(o,F),o}return Jt(t,n),t.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},t.prototype.write=function(e,r,o){if(H().getBool("DEBUG")&&this.checkNumericalProblems(e),o==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var i={};return this.texData.set(i,{shape:r,dtype:o,values:e,usage:Ot.UPLOAD}),i},t.prototype.move=function(e,r,o,i){if(H().getBool("DEBUG")&&this.checkNumericalProblems(r),i==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:o,dtype:i,values:r,usage:Ot.UPLOAD})},t.prototype.readSync=function(e){var r=this.texData.get(e),o=r.values,i=r.dtype,a=r.complexTensors,s=r.slice,u=r.shape,c=r.isPacked;if(s!=null){var l=void 0;l=c?new to(u,Jo):new Ee(u,Jo);var f=this.runWebGLProgram(l,[{dataId:e,shape:u,dtype:i}],i),h=this.readSync(f.dataId);return this.disposeData(f.dataId),h}if(o!=null)return this.convertAndCacheOnCPU(e);if(i==="string")return o;var d,p,v=this.activeTimers!=null;return v&&(d=on()),i==="complex64"?p=ws(a.real.dataSync(),a.imag.dataSync()):p=this.getValuesFromTexture(e),v&&(this.downloadWaitMs+=on()-d),this.convertAndCacheOnCPU(e,p)},t.prototype.read=function(e){return se(this,void 0,void 0,function(){var r,o,i,a,s,u,c,l,f,h,d,p,v,m,g,x,b,y,w,_,k,S;return ue(this,function(R){switch(R.label){case 0:if(this.pendingRead.has(e))return r=this.pendingRead.get(e),[2,new Promise(function(I){return r.push(I)})];if(o=this.texData.get(e),i=o.values,a=o.shape,s=o.slice,u=o.dtype,c=o.complexTensors,l=o.isPacked,s!=null)return f=void 0,f=l?new to(a,Jo):new Ee(a,Jo),h=this.runWebGLProgram(f,[{dataId:e,shape:a,dtype:u}],u),d=this.read(h.dataId),this.disposeData(h.dataId),[2,d];if(i!=null)return[2,this.convertAndCacheOnCPU(e)];if(!H().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&H().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return p=null,u!=="complex64"&&H().get("WEBGL_BUFFER_SUPPORTED")&&(v=this.decode(e),m=this.texData.get(v.dataId),p=(S=this.gpgpu).createBufferFromTexture.apply(S,[m.texture].concat(co(a)))),this.pendingRead.set(e,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:R.sent(),R.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return x=R.sent(),b=x[0],y=x[1],g=ws(b,y),[3,5];case 4:p==null?g=this.getValuesFromTexture(e):(w=ce(a),g=this.gpgpu.downloadFloat32MatrixFromBuffer(p,w)),R.label=5;case 5:return v!=null&&this.disposeData(v.dataId),_=this.convertAndCacheOnCPU(e,g),k=this.pendingRead.get(e),this.pendingRead.delete(e),k.forEach(function(I){return I(_)}),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e),this.pendingDeletes--),[2,_]}})})},t.prototype.checkNumericalProblems=function(e){if(e!=null)for(var r=0;r<e.length;r++){var o=e[r];if(!og(o))throw H().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},t.prototype.getValuesFromTexture=function(e){var r,o=this.texData.get(e),i=o.shape,a=o.dtype,s=o.isPacked,u=ce(i);if(H().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(e),l=this.texData.get(c.dataId),f=(r=this.gpgpu).downloadMatrixFromPackedTexture.apply(r,[l.texture].concat(co(i))).subarray(0,u);return this.disposeData(c.dataId),f}var h=H().getBool("WEBGL_PACK")&&s===!0,d=h?Ta(i):i,p=h?new ry(d):new ny(d),v=this.runWebGLProgram(p,[{shape:d,dtype:a,dataId:e}],"float32"),m=this.texData.get(v.dataId),g=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(m.texture,m.texShape[0],m.texShape[1]).subarray(0,u);return this.disposeData(v.dataId),g},t.prototype.time=function(e){return se(this,void 0,void 0,function(){var r,o,i,a,s,u,c;return ue(this,function(l){switch(l.label){case 0:return r=this.activeTimers,o=[],i=!1,this.programTimersStack==null?(this.programTimersStack=o,i=!0):this.activeTimers.push(o),this.activeTimers=o,e(),a=Gr(this.activeTimers.map(function(f){return f.query})).filter(function(f){return f!=null}),s=Gr(this.activeTimers.map(function(f){return f.name})).filter(function(f){return f!=null}),this.activeTimers=r,i&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(a)]:[3,2];case 1:return c=l.sent(),u.kernelMs=Lm(c),u.getExtraProfileInfo=function(){return c.map(function(f,h){return{name:s[h],ms:f}}).map(function(f){return f.name+": "+f.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},t.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},t.prototype.startTimer=function(){return H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:on(),endMs:null}},t.prototype.endTimer=function(e){return H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=on(),e)},t.prototype.getQueryTime=function(e){return se(this,void 0,void 0,function(){var r;return ue(this,function(o){return H().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(r=e).endMs-r.startMs]})})},t.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e)){if(this.pendingRead.has(e))return this.pendingDisposal.add(e),void this.pendingDeletes++;if(this.texData.has(e)){this.releaseGPUData(e);var r=this.texData.get(e).complexTensors;r!=null&&(r.real.dispose(),r.imag.dispose()),this.texData.delete(e)}}},t.prototype.releaseGPUData=function(e){var r=this.texData.get(e),o=r.texture,i=r.dtype,a=r.texShape,s=r.usage,u=r.isPacked,c=r.slice,l=c&&c.origDataId||e,f=this.dataRefCount.get(l);f>1?this.dataRefCount.set(l,f-1):(this.dataRefCount.delete(l),o!=null&&(this.numBytesInGPU-=this.computeBytes(a,i),this.textureManager.releaseTexture(o,a,s,u)));var h=this.texData.get(e);h.texture=null,h.texShape=null,h.isPacked=!1,h.slice=null},t.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},t.prototype.getDataInfo=function(e){return this.texData.get(e)},t.prototype.getCPUBackend=function(){return H().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=F.findBackend("cpu")),this.cpuBackend):null},t.prototype.shouldExecuteOnCPU=function(e,r){var o=this;return r===void 0&&(r=128),this.getCPUBackend()!=null&&e.every(function(i){return o.texData.get(i.dataId).texture==null&&i.size<r})},t.prototype.getGPGPUContext=function(){return this.gpgpu},t.prototype.complex=function(e,r){var o=this.makeOutput(e.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:F.keep(e.clone()),imag:F.keep(r.clone())},o},t.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,r,o){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.slice(e,r,o);if(ce(o)===0)return ht([],o,e.dtype);var i=this.texData.get(e.dataId).isPacked,a=ch(e.shape,r,o);if(i||!a){var s=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Jy(o):new Yy(o),u=s.getCustomSetupFunc(r);return this.compileAndRun(s,[e],null,u)}return this.uploadToGPU(e.dataId),this.shallowSlice(e,r,o)},t.prototype.shallowSlice=function(e,r,o){var i=this.texData.get(e.dataId),a=this.makeOutput(o,e.dtype),s=this.texData.get(a.dataId);Object.assign(s,i),s.shape=o,s.dtype=e.dtype;var u=lh(r,e.strides);i.slice&&(u+=i.slice.flatOffset),s.slice={flatOffset:u,origDataId:i.slice&&i.slice.origDataId||e.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),a},t.prototype.stridedSlice=function(e,r,o,i){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.stridedSlice(e,r,o,i);var a=ru(r,o,i);if(a.some(function(u){return u===0}))return ht([],a);var s=new Qy(r,i,a);return this.compileAndRun(s,[e])},t.prototype.reverse=function(e,r){var o=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Ky(e.shape,r):new qy(e.shape,r);return this.compileAndRun(o,[e])},t.prototype.concat=function(e,r){if(e[0].dtype==="complex64"){var o=e.map(function(d){return Vt(d)}),i=e.map(function(d){return un(d)});return lt(this.concat(o,r),this.concat(i,r))}if(this.shouldExecuteOnCPU(e))return this.cpuBackend.concat(e,r);if(e.length===1)return e[0];if(e.length>H().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var a=Math.floor(e.length/2),s=this.concat(e.slice(0,a),r),u=this.concat(e.slice(a),r);return this.concat([s,u],r)}if(H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].rank>1){var c=new z0(e.map(function(d){return d.shape}),r);return this.compileAndRun(c,e)}var l=qr(e.map(function(d){return d.shape}),r),f=e.map(function(d){return d.as2D(-1,ce(d.shape.slice(r)))}),h=new V0(f.map(function(d){return d.shape}));return this.compileAndRun(h,f).reshape(l)},t.prototype.neg=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.neg(e);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,ul,e.dtype);var r=new Ee(e.shape,ul);return this.compileAndRun(r,[e])},t.prototype.batchMatMul=function(e,r,o,i){var a=o?e.shape[2]:e.shape[1],s=i?r.shape[1]:r.shape[2],u=o?e.shape[1]:e.shape[2],c=e.shape[0];if((a===1||s===1)&&u>1e3){o&&(e=e.transpose([0,2,1])),i&&(r=r.transpose([0,2,1]));var l=s===1?e:e.as3D(c,u,1),f=s===1?2:1,h=s===1?r.as3D(c,1,u):r;return this.multiply(l,h).sum(f,!0)}var d=ft(e.dtype,r.dtype),p=new Ma(e.shape,[c,a,s],o,i);return this.compileAndRun(p,[e,r],d)},t.prototype.fusedBatchMatMul=function(e){var r=e.a,o=e.b,i=e.transposeA,a=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=i?r.shape[2]:r.shape[1],f=a?o.shape[1]:o.shape[2],h=r.shape[0],d=ft(r.dtype,o.dtype),p=s!=null,v=c!=null,m=u?Zo(u,!0):null,g=new Ma(r.shape,[h,l,f],i,a,p,m,v),x=[r,o];return s&&x.push(s),c&&x.push(c),this.compileAndRun(g,x,d)},t.prototype.multiply=function(e,r){if(e.dtype==="complex64"){var o=this.texData.get(e.dataId),i=this.texData.get(r.dataId),a=new Yc(O0,e.shape,r.shape),s=new Yc(B0,e.shape,r.shape),u=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag),this.makeComplexComponentTensorInfo(r,i.complexTensors.real),this.makeComplexComponentTensorInfo(r,i.complexTensors.imag)],c=this.compileAndRun(a,u),l=this.compileAndRun(s,u),f=this.complex(c,l);return c.dispose(),l.dispose(),f}if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.multiply(e,r);if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,Jc,e.dtype);var h=new Xe(Jc,e.shape,r.shape);return this.compileAndRun(h,[e,r],e.dtype)},t.prototype.batchNormalization=function(e,r,o,i,a,s){var u=[e,r,o],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(a!=null&&(l=a.shape,u.push(a)),H().getBool("WEBGL_PACK_NORMALIZATION")){var f=new M0(e.shape,r.shape,o.shape,c,l,i);return this.compileAndRun(f,u)}var h=new P0(e.shape,r.shape,o.shape,c,l,i);return this.compileAndRun(h,u)},t.prototype.localResponseNormalization4D=function(e,r,o,i,a){var s=H().getBool("WEBGL_PACK_NORMALIZATION")?new Ty(e.shape,r,o,i,a):new Ay(e.shape,r,o,i,a);return this.compileAndRun(s,[e])},t.prototype.LRNGrad=function(e,r,o,i,a,s,u){var c=new Dy(r.shape,i,a,s,u);return this.compileAndRun(c,[r,o,e])},t.prototype.tile=function(e,r){if(e.dtype==="string"){var o=this.readSync(e.dataId).map(function(a){return bi(a)});return yh(be(e.shape,e.dtype,o),r)}var i=new ex(e.shape,r);return this.compileAndRun(i,[e])},t.prototype.pad=function(e,r,o){var i=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Ly(e.shape,r,o):new By(e.shape,r,o);return this.compileAndRun(i,[e])},t.prototype.transpose=function(e,r){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.transpose(e,r);var o=H().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new nx(e.shape,r):new tx(e.shape,r);return this.compileAndRun(o,[e])},t.prototype.gather=function(e,r,o){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.gather(e,r,o);var i=new cy(e.shape,r.size,o);return this.compileAndRun(i,[e,r])},t.prototype.batchToSpaceND=function(e,r,o){E(e.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var i=r.reduce(function(f,h){return f*h}),a=Ri(e.shape,r,i),s=Si(a.length,r.length),u=ki(e.shape,r,i),c=ih(o,r.length),l=ah(u,o,r.length);return e.reshape(a).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,r,o){E(e.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var i=r.reduce(function(h,d){return h*d}),a=[[0,0]];a.push.apply(a,o);for(var s=1+r.length;s<e.shape.length;++s)a.push([0,0]);var u=e.pad(a),c=Ri(u.shape,r,i,!1),l=Si(c.length,r.length,!1),f=ki(u.shape,r,i,!1);return u.reshape(c).transpose(l).reshape(f)},t.prototype.reduce=function(e,r,o){var i=e.shape[0],a=e.shape[1],s=Na(a),u=new Wy({windowSize:s,inSize:a,batchSize:i},r),c=this.compileAndRun(u,[e],o);return c.shape[1]===1?c:this.reduce(c,r,o)},t.prototype.argReduce=function(e,r,o){o===void 0&&(o=null);var i=e.shape[0],a=e.shape[1];o!=null&&(i=o.shape[0],a=o.shape[1]);var s=Na(a),u=new I0({windowSize:s,inSize:a,batchSize:i},r,o==null),c=[e];o!=null&&c.push(o);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(e,r,l)},t.prototype.argReducePacked=function(e,r,o){o===void 0&&(o=null);var i=o!=null?o.shape:e.shape,a=Na(i[i.length-1]),s=new T0(i,a,r,o==null),u=o==null?[e]:[e,o],c=this.compileAndRun(s,u,"int32");return c.rank===e.rank?this.argReducePacked(e,r,c):c},t.prototype.sum=function(e,r){Ft("sum",r,e.rank);var o=dt(e.shape,r),i=o[0],a=ce(o[1]),s=e.as2D(-1,a),u=Ea(e.dtype);return this.reduce(s,"sum",u).reshape(i)},t.prototype.prod=function(e,r){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.prod(e,r);var o=dt(e.shape,r),i=o[0],a=ce(o[1]),s=e.as2D(-1,a),u=Ea(e.dtype);return this.reduce(s,"prod",u).reshape(i)},t.prototype.unsortedSegmentSum=function(e,r,o){var i=0,a=vn([i],e.rank),s=e;a!=null&&(s=e.transpose(a),i=mn(1,e.rank)[0]);var u=function(d,p,v){for(var m=[],g=d.length,x=0;x<g;x++)x!==p?m.push(d[x]):m.push(v);return m}(s.shape,i,o),c=ce([s.shape[i]]),l=s.as2D(-1,c),f=Ea(e.dtype),h=this.segOpCompute(l,"unsortedSegmentSum",r,f,o).reshape(u);return a!=null&&(h=h.transpose(Zs(a))),h},t.prototype.segOpCompute=function(e,r,o,i,a){var s=e.shape[0],u=e.shape[1],c=function(h,d){var p,v=!1;for(h<=uh?(p=h,v=!0):p=hs(h,Math.floor(Math.sqrt(h)));!v;)p>d||p===h?v=!0:p=hs(h,p+1);return p}(u,a),l=new Xy({windowSize:c,inSize:u,batchSize:s,numSegments:a}),f=this.compileAndRun(l,[e,o],i);return f.shape[1]===a?f:(o=Ii(0,a).tile([u/c]),this.segOpCompute(f,r,o,i,a))},t.prototype.argMinMaxReduce=function(e,r,o){var i=[r];if(Ft("arg"+o.charAt(0).toUpperCase()+o.slice(1),i,e.rank),!H().getBool("WEBGL_PACK_REDUCE")||e.rank<=2){var a=dt(e.shape,i),s=a[0],u=ce(a[1]),c=e.as2D(-1,u);return this.argReduce(c,o).reshape(s)}return this.argReducePacked(e,o)},t.prototype.argMin=function(e,r){return this.argMinMaxReduce(e,r,"min")},t.prototype.argMax=function(e,r){return this.argMinMaxReduce(e,r,"max")},t.prototype.cumsum=function(e,r,o,i){if(r!==e.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(e.rank-1)+" but got axis="+r);var a=new J0(e.shape,o,i);return this.compileAndRun(a,[e])},t.prototype.equal=function(e,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(equal(a, b));
`,"bool");var o=new Xe("return float(a == b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.notEqual=function(e,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(notEqual(a, b));
`,"bool");var o=new Xe("return float(a != b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.less=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.less(e,r);if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(lessThan(a, b));
`,"bool");var o=new Xe("return float(a < b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.lessEqual=function(e,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new Xe("return float(a <= b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.greater=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.greater(e,r);if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new Xe("return float(a > b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.greaterEqual=function(e,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new Xe("return float(a >= b);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.logicalNot=function(e){var r=new Ee(e.shape,"return float(!(x >= 1.0));");return this.compileAndRun(r,[e])},t.prototype.logicalAnd=function(e,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new Xe("return float(a >= 1.0 && b >= 1.0);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.logicalOr=function(e,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new Xe("return float(a >= 1.0 || b >= 1.0);",e.shape,r.shape);return this.compileAndRun(o,[e,r],"bool")},t.prototype.select=function(e,r,o){var i=new $y(e.rank,r.shape,r.rank);return this.compileAndRun(i,[e,r,o],ft(r.dtype,o.dtype))},t.prototype.where=function(e){Ci("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var r=e.dataSync();return su(e.shape,r)},t.prototype.topk=function(e,r,o){return xh(e.dataSync(),e.shape,e.dtype,r)},t.prototype.min=function(e,r){Ft("min",r,e.rank);var o=dt(e.shape,r),i=o[0],a=ce(o[1]),s=e.as2D(-1,a);return this.reduce(s,"min",s.dtype).reshape(i)},t.prototype.minimum=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.minimum(e,r);var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new bn(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Xe(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.mod=function(e,r){var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new bn(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Xe(`if (b == 0.0) return NAN;
  return mod(a, b);`,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.max=function(e,r){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.max(e,r);Ft("max",r,e.rank);var o=dt(e.shape,r),i=o[0],a=ce(o[1]),s=e.as2D(-1,a);return this.reduce(s,"max",s.dtype).reshape(i)},t.prototype.maximum=function(e,r){if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.maximum(e,r);var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new bn(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Xe(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.all=function(e,r){Ft("all",r,e.rank);var o=dt(e.shape,r),i=o[0],a=ce(o[1]),s=e.as2D(-1,a);return this.reduce(s,"all",s.dtype).reshape(i)},t.prototype.any=function(e,r){Ft("any",r,e.rank);var o=dt(e.shape,r),i=o[0],a=ce(o[1]),s=e.as2D(-1,a);return this.reduce(s,"any",s.dtype).reshape(i)},t.prototype.realDivide=function(e,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var o=new Xe(`
if (a == b) {
  return 1.0;
};
return a / b;`,e.shape,r.shape);return this.compileAndRun(o,[e,r],"float32")},t.prototype.floorDiv=function(e,r){if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new Xe(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,e.shape,r.shape);return this.compileAndRun(o,[e,r],"int32")},t.prototype.add=function(e,r){if(e.dtype==="complex64"&&r.dtype==="complex64")return this.complexSeparableBinaryOp(e,r,Fa);if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.add(e,r);var o=ft(e.dtype,r.dtype);if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,Fa,o);var i=new Xe(Fa,e.shape,r.shape);return this.compileAndRun(i,[e,r],o)},t.prototype.packedUnaryOp=function(e,r,o){var i=new to(e.shape,r);return this.compileAndRun(i,[e],o)},t.prototype.packedBinaryOp=function(e,r,o,i,a){a===void 0&&(a=!1);var s=new bn(o,e.shape,r.shape,a);return this.compileAndRun(s,[e,r],i)},t.prototype.complexSeparableBinaryOp=function(e,r,o){var i=this,a=this.texData.get(e.dataId),s=this.texData.get(r.dataId),u=[[a.complexTensors.real,s.complexTensors.real],[a.complexTensors.imag,s.complexTensors.imag]].map(function(h){var d=h[0],p=h[1],v=i.makeComplexComponentTensorInfo(e,d),m=i.makeComplexComponentTensorInfo(r,p),g=new Xe(o,e.shape,r.shape);return i.compileAndRun(g,[v,m],ft(d.dtype,p.dtype))}),c=u[0],l=u[1],f=this.complex(c,l);return c.dispose(),l.dispose(),f},t.prototype.makeComplexComponentTensorInfo=function(e,r){return{dataId:r.dataId,dtype:r.dtype,shape:e.shape}},t.prototype.addN=function(e){if(e.length===1)return e[0];if(e.length>H().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var r=Math.floor(e.length/2),o=this.addN(e.slice(0,r)),i=this.addN(e.slice(r));return this.addN([o,i])}var a=e.map(function(c){return c.dtype}).reduce(function(c,l){return ft(c,l)}),s=e.map(function(c){return c.shape}),u=H().getBool("WEBGL_PACK")?new E0(e[0].shape,s):new C0(e[0].shape,s);return this.compileAndRun(u,e,a)},t.prototype.subtract=function(e,r){if(e.dtype==="complex64"&&r.dtype==="complex64")return this.complexSeparableBinaryOp(e,r,Pa);if(this.shouldExecuteOnCPU([e,r]))return this.cpuBackend.subtract(e,r);var o=ft(e.dtype,r.dtype);if(H().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,r,Pa,e.dtype);var i=new Xe(Pa,e.shape,r.shape);return this.compileAndRun(i,[e,r],o)},t.prototype.pow=function(e,r){var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new bn(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Xe(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,e.shape,r.shape),i=ft(e.dtype,r.dtype);return this.compileAndRun(o,[e,r],i)},t.prototype.ceil=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.ceil(e);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,cl,e.dtype);var r=new Ee(e.shape,cl);return this.compileAndRun(r,[e])},t.prototype.floor=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.floor(e);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,ll,e.dtype);var r=new Ee(e.shape,ll);return this.compileAndRun(r,[e])},t.prototype.sign=function(e){var r=new Ee(e.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(r,[e])},t.prototype.isNaN=function(e){var r=new Ee(e.shape,"return float(isnan(x));");return this.compileAndRun(r,[e],"bool")},t.prototype.isInf=function(e){var r=new Ee(e.shape,"return float(isinf(x));");return this.compileAndRun(r,[e],"bool")},t.prototype.isFinite=function(e){var r=new Ee(e.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(r,[e],"bool")},t.prototype.round=function(e){var r=new Ee(e.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(r,[e])},t.prototype.exp=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.exp(e);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,fl,e.dtype);var r=new Ee(e.shape,fl);return this.compileAndRun(r,[e])},t.prototype.expm1=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.expm1(e);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,hl,e.dtype);var r=new Ee(e.shape,hl);return this.compileAndRun(r,[e])},t.prototype.softmax=function(e,r){var o=rt([r],e.shape),i=this.max(e,o),a=At(i.shape,o),s=this.subtract(e,i.reshape(a)),u=this.exp(s),c=this.sum(u,o).reshape(a);return this.realDivide(u,c)},t.prototype.log=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.log(e);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,e.dtype);var r=new Ee(e.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(r,[e])},t.prototype.log1p=function(e){var r=new Ee(e.shape,"return log(1.0 + x);");return this.compileAndRun(r,[e])},t.prototype.sqrt=function(e){var r=new Ee(e.shape,"return sqrt(x);");return this.compileAndRun(r,[e])},t.prototype.rsqrt=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.rsqrt(e);var r=new Ee(e.shape,"return inversesqrt(x);");return this.compileAndRun(r,[e])},t.prototype.reciprocal=function(e){var r=new Ee(e.shape,"return 1.0 / x;");return this.compileAndRun(r,[e])},t.prototype.relu=function(e){var r;return r=H().getBool("WEBGL_PACK")?new to(e.shape,kh):new Ee(e.shape,Ih),this.compileAndRun(r,[e])},t.prototype.relu6=function(e){var r;return r=H().getBool("WEBGL_PACK")?new to(e.shape,Ah):new Ee(e.shape,Rh),this.compileAndRun(r,[e])},t.prototype.prelu=function(e,r){var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new bn(Eh,e.shape,r.shape):new Xe(Ch,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.elu=function(e){if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Dh,e.dtype);var r=new Ee(e.shape,Sh);return this.compileAndRun(r,[e])},t.prototype.eluDer=function(e,r){var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new bn(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,e.shape,r.shape):new Xe("return (b >= 1.0) ? a : a * (b + 1.0);",e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.selu=function(e){var r=new Ee(e.shape,ox);return this.compileAndRun(r,[e])},t.prototype.int=function(e){var r=new Ee(e.shape,"return float(int(x));");return this.compileAndRun(r,[e],"int32")},t.prototype.clip=function(e,r,o){var i,a=(i=H().getBool("WEBGL_PACK_CLIP")?new W0(e.shape):new L0(e.shape)).getCustomSetupFunc(r,o);return this.compileAndRun(i,[e],null,a)},t.prototype.abs=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.abs(e);if(H().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,sl,e.dtype);var r=new Ee(e.shape,sl);return this.compileAndRun(r,[e])},t.prototype.complexAbs=function(e){var r=this.texData.get(e.dataId),o=new U0(e.shape),i=[this.makeComplexComponentTensorInfo(e,r.complexTensors.real),this.makeComplexComponentTensorInfo(e,r.complexTensors.imag)];return this.compileAndRun(o,i)},t.prototype.sigmoid=function(e){var r=new Ee(e.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(r,[e])},t.prototype.softplus=function(e){var r=new Ee(e.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(r,[e])},t.prototype.sin=function(e){var r=new Ee(e.shape,ix);return this.compileAndRun(r,[e])},t.prototype.cos=function(e){var r=new Ee(e.shape,ax);return this.compileAndRun(r,[e])},t.prototype.tan=function(e){var r=new Ee(e.shape,"return tan(x);");return this.compileAndRun(r,[e])},t.prototype.asin=function(e){var r=new Ee(e.shape,sx);return this.compileAndRun(r,[e])},t.prototype.acos=function(e){var r=new Ee(e.shape,ux);return this.compileAndRun(r,[e])},t.prototype.atan=function(e){var r=new Ee(e.shape,cx);return this.compileAndRun(r,[e])},t.prototype.atan2=function(e,r){var o=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new bn(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,r.shape):new Xe(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,e.shape,r.shape);return this.compileAndRun(o,[e,r])},t.prototype.sinh=function(e){var r=new Ee(e.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(r,[e])},t.prototype.cosh=function(e){var r=new Ee(e.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(r,[e])},t.prototype.tanh=function(e){var r=new Ee(e.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(r,[e])},t.prototype.asinh=function(e){var r=new Ee(e.shape,lx);return this.compileAndRun(r,[e])},t.prototype.acosh=function(e){var r=new Ee(e.shape,fx);return this.compileAndRun(r,[e])},t.prototype.atanh=function(e){var r=new Ee(e.shape,hx);return this.compileAndRun(r,[e])},t.prototype.erf=function(e){var r=new Ee(e.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(r,[e])},t.prototype.step=function(e,r){var o=new Ee(e.shape,function(i){return i===void 0&&(i=0),Qt+`
    return x > 0.0 ? 1.0 : float(`+i+`);
  `}(r));return this.compileAndRun(o,[e])},t.prototype.conv2dByMatMul=function(e,r,o,i,a,s){var u=e.shape,c=this.texData.get(e.dataId),l=o.inChannels,f=u[0]*u[1]*u[2],h=o.outChannels,d=o.dataFormat==="channelsLast",p=(f===1||h===1)&&l>1e3,v=u[2]%2!=0&&!!c.isPacked;if(p||!H().getBool("WEBGL_LAZILY_UNPACK")||!H().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!v){var m=d?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],g=this.reshape(e,[1,m,o.inChannels]),x=this.reshape(r,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:g,b:x,transposeA:!1,transposeB:!1,bias:i,activation:a,preluActivationWeights:s}),o.outShape)}var b=d?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),y={dataId:e.dataId,shape:[1,b,o.inChannels],dtype:e.dtype},w=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,E($o(c.shape,y.shape),function(){return"packed reshape "+c.shape+" to "+y.shape+" isn't free"});var _=this.reshape(r,[1,o.inChannels,o.outChannels]),k=this.fusedBatchMatMul({a:y,b:_,transposeA:!1,transposeB:!1,bias:i,activation:a,preluActivationWeights:s}),S=this.texData.get(k.dataId);return E(S.isPacked,function(){return"batchMatMul result is expected to be packed"}),c.shape=w,S.shape=o.outShape,F.makeTensorFromDataId(k.dataId,o.outShape,k.dtype)},t.prototype.conv2dWithIm2Row=function(e,r,o,i,a,s){var u=o.filterWidth,c=o.filterHeight,l=o.inChannels,f=o.outWidth,h=o.outHeight,d=o.dataFormat==="channelsLast",p=u*c*l,v=h*f,m=[p,v],g=e.squeeze([0]),x=r.reshape([1,p,-1]),b=new ky(m,g.shape,o),y=this.compileAndRun(b,[g]).reshape([1,m[0],m[1]]),w=i!=null,_=s!=null,k=a?Zo(a,!0):null,S=new Ma(y.shape,[1,v,o.outChannels],!0,!1,w,k,_),R=[y,x];i&&R.push(i),_&&R.push(s);var I=this.compileAndRun(S,R);return d?I.reshape([1,h,f,o.outChannels]):I.reshape([1,o.outChannels,h,f])},t.prototype.fusedConv2d=function(e){var r=e.input,o=e.filter,i=e.convInfo,a=e.bias,s=e.activation,u=e.preluActivationWeights;if(i.filterHeight===1&&i.filterWidth===1&&i.dilationHeight===1&&i.dilationWidth===1&&i.strideHeight===1&&i.strideWidth===1&&(i.padInfo.type==="SAME"||i.padInfo.type==="VALID"))return this.conv2dByMatMul(r,o,i,a,s,u);if(H().getBool("WEBGL_CONV_IM2COL")&&r.shape[0]===1)return this.conv2dWithIm2Row(r,o,i,a,s,u);var c=a!=null,l=u!=null,f=s?Zo(s,!1):null,h=new Qc(i,c,f,l),d=[r,o];return a&&d.push(a),u&&d.push(u),this.compileAndRun(h,d)},t.prototype.conv2d=function(e,r,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(e,r,o);if(H().getBool("WEBGL_CONV_IM2COL")&&e.shape[0]===1)return this.conv2dWithIm2Row(e,r,o);var i=new Qc(o);return this.compileAndRun(i,[e,r])},t.prototype.conv2dDerInput=function(e,r,o){var i=new G0(o);return this.compileAndRun(i,[e,r])},t.prototype.conv2dDerFilter=function(e,r,o){var i=new H0(o);return this.compileAndRun(i,[e,r])},t.prototype.fusedDepthwiseConv2D=function(e){var r,o=e.input,i=e.filter,a=e.convInfo,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=H().getBool("WEBGL_PACK_DEPTHWISECONV")&&a.strideWidth<=2&&a.outChannels/a.inChannels==1,f=u?Zo(u,l):null,h=[o,i],d=s!=null,p=c!=null;return d&&h.push(s),p&&h.push(c),l?(r=new el(a,d,f,p),this.compileAndRun(r,h)):(r=new Zc(a,d,f,p),this.compileAndRun(r,h))},t.prototype.depthwiseConv2D=function(e,r,o){var i;return H().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(i=new el(o),this.compileAndRun(i,[e,r])):(i=new Zc(o),this.compileAndRun(i,[e,r]))},t.prototype.depthwiseConv2DDerInput=function(e,r,o){var i=new X0(o);return this.compileAndRun(i,[e,r])},t.prototype.depthwiseConv2DDerFilter=function(e,r,o){var i=new K0(o);return this.compileAndRun(i,[e,r])},t.prototype.conv3d=function(e,r,o){var i=new $0(o);return this.compileAndRun(i,[e,r])},t.prototype.conv3dDerInput=function(e,r,o){var i=new q0(o);return this.compileAndRun(i,[e,r])},t.prototype.conv3dDerFilter=function(e,r,o){var i=new j0(o);return this.compileAndRun(i,[e,r])},t.prototype.maxPool=function(e,r){var o=new Oa(r,"max",!1);return this.compileAndRun(o,[e])},t.prototype.avgPool=function(e,r){var o=new Oa(r,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPoolBackprop=function(e,r,o,i){var a=new Oa(i,"max",!0),s=this.compileAndRun(a,[r]),u=new Ny(i),c=this.compileAndRun(u,[e,s],r.dtype);return s.dispose(),c},t.prototype.avgPoolBackprop=function(e,r,o){var i=new N0(o);return this.compileAndRun(i,[e],r.dtype)},t.prototype.cast=function(e,r){return ph(e,r,this)},t.prototype.unstack=function(e,r){for(var o=e.shape[r],i=new Array(e.rank-1),a=0,s=0;s<e.rank;s++)s!==r&&(i[a++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[r]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[r]=s,l[s]=this.slice(e,u,c).reshape(i);return l},t.prototype.avgPool3d=function(e,r){var o=new Ba(r,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.avgPool3dBackprop=function(e,r,o){var i=new F0(o);return this.compileAndRun(i,[e],r.dtype)},t.prototype.maxPool3d=function(e,r){var o=new Ba(r,"max",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPool3dBackprop=function(e,r,o,i){var a=new Ba(i,"max",!0),s=this.compileAndRun(a,[r]),u=new Fy(i),c=this.compileAndRun(u,[e,s],r.dtype);return s.dispose(),c},t.prototype.reshape=function(e,r){var o=this.texData.get(e.dataId);if(o.isPacked&&!$o(e.shape,r)&&(o.texture===null||!$o(o.shape,r))){var i=this.packedReshape(e,r);return F.makeTensorFromDataId(i.dataId,i.shape,i.dtype)}return bs(e,r)},t.prototype.resizeBilinear=function(e,r,o,i){var a=H().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Hy(e.shape,r,o,i):new zy(e.shape,r,o,i);return this.compileAndRun(a,[e],"float32")},t.prototype.resizeBilinearBackprop=function(e,r,o){var i=new Vy(e,r,o);return this.compileAndRun(i,[e])},t.prototype.resizeNearestNeighbor=function(e,r,o,i){var a=new jy(e.shape,r,o,i);return this.compileAndRun(a,[e])},t.prototype.resizeNearestNeighborBackprop=function(e,r,o){var i=new Gy(e,r,o);return this.compileAndRun(i,[e])},t.prototype.multinomial=function(e,r,o,i){var a=r?e:Sn(e),s=a.shape[0],u=a.shape[1],c=new Py(s,u,o),l=c.getCustomSetupFunc(i);return this.compileAndRun(c,[a],"int32",l)},t.prototype.oneHot=function(e,r,o,i){var a=new My(e.size,r,o,i);return this.compileAndRun(a,[e])},t.prototype.diag=function(e){var r=new ty(e.size);return this.compileAndRun(r,[e])},t.prototype.nonMaxSuppression=function(e,r,o,i,a){return Ci("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),iu(e.dataSync(),r.dataSync(),o,i,a)},t.prototype.cropAndResize=function(e,r,o,i,a,s){var u=new Y0(e.shape,r.shape,i,a,s);return this.compileAndRun(u,[e,r,o],"float32")},t.prototype.depthToSpace=function(e,r,o){E(r>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+r});var i=e.shape[0],a=o==="NHWC"?e.shape[1]:e.shape[2],s=o==="NHWC"?e.shape[2]:e.shape[3],u=o==="NHWC"?e.shape[3]:e.shape[1],c=a*r,l=s*r,f=u/(r*r),h=new ey(o==="NHWC"?[i,c,l,f]:[i,f,c,l],r,o);return this.compileAndRun(h,[e])},t.prototype.split=function(e,r,o){return gh(e,r,o)},t.prototype.scatterND=function(e,r,o){var i=Ai(0,e,o),a=i.sliceRank,s=i.numUpdates,u=i.sliceSize,c=i.strides,l=i.outputSize,f=[l/u,u],h=e.reshape([s,a]),d=r.reshape([s,u]);if(l===0)return bs(ht([]),o);var p=re(0),v=new ol(s,a,h.rank,d.rank,c,f);return this.compileAndRun(v,[d,h,p]).reshape(o)},t.prototype.sparseToDense=function(e,r,o,i){var a=Ai(0,e,o),s=a.sliceRank,u=a.numUpdates,c=a.strides,l=a.outputSize,f=new ol(u,s,e.rank,r.rank,c,[l,1]);return this.compileAndRun(f,[r,e,i]).reshape(o)},t.prototype.fft=function(e){return this.fftImpl(e,!1)},t.prototype.ifft=function(e){return this.fftImpl(e,!0)},t.prototype.fftImpl=function(e,r){var o=this.texData.get(e.dataId),i=new nl(ay,e.shape,r),a=new nl(sy,e.shape,r),s=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag)],u=this.compileAndRun(i,s),c=this.compileAndRun(a,s),l=this.complex(u,c).as2D(e.shape[0],e.shape[1]);return u.dispose(),c.dispose(),l},t.prototype.gatherND=function(e,r){var o=r.shape,i=o[o.length-1],a=sh(e,r),s=a[0],u=a[1],c=a[2],l=a[3],f=r.reshape([u,i]),h=e.reshape([e.size/c,c]),d=new ly(i,l,[u,c]);return this.compileAndRun(d,[h,f]).reshape(s)},t.prototype.fill=function(e,r,o){if((o=o||Ao(r))==="string"){var i=xi(o,ce(e));return i.fill(r),F.makeTensor(i,e,o,this)}var a=new uy(e,r),s=a.getCustomSetupFunc(r);return this.compileAndRun(a,[],o,s)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){return this.fill(e.shape,e.dtype==="string"?"":0,e.dtype)},t.prototype.linspace=function(e,r,o){return vh(e,r,o)},t.prototype.makeTensorInfo=function(e,r){var o=this.write(null,e,r);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:r}},t.prototype.makeOutput=function(e,r){var o=this.makeTensorInfo(e,r).dataId;return F.makeTensorFromDataId(o,e,r,this)},t.prototype.unpackTensor=function(e){var r=new px(e.shape);return this.runWebGLProgram(r,[e],e.dtype)},t.prototype.packTensor=function(e){var r=new Oy(e.shape);return this.runWebGLProgram(r,[e],e.dtype,null,!0)},t.prototype.packedReshape=function(e,r){var o=[wi(e.shape)].concat(_i(e.shape)),i={dtype:e.dtype,shape:o,dataId:e.dataId},a=[wi(r)].concat(_i(r)),s=new Uy(a,o),u=this.runWebGLProgram(s,[i],e.dtype,null,!0);return{dataId:u.dataId,shape:r,dtype:u.dtype}},t.prototype.decode=function(e){var r,o=this.texData.get(e),i=o.isPacked,a=o.shape,s=o.dtype,u=Ta(a);return r=i?new Z0(u):new Q0(u),{dtype:s,shape:a,dataId:this.runWebGLProgram(r,[{shape:u,dtype:s,dataId:e}],s,null,!0).dataId}},t.prototype.runWebGLProgram=function(e,r,o,i,a){var s=this;a===void 0&&(a=!1);var u=this.makeTensorInfo(e.outputShape,o),c=this.texData.get(u.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===_o.DENSE){var l=co(e.outputShape);c.texShape=l.map(function(b){return 2*b})}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),ce(u.shape)===0)return c.values=bo(u.dtype,0),u;var f=[],h=r.map(function(b){if(b.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var y=s.texData.get(b.dataId);if(y.texture==null){if(!e.packedInputs&&ce(b.shape)<=H().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:b.shape,texData:null,isUniform:!0,uniformValues:y.values};e.packedInputs&&(y.isPacked=!0,y.shape=b.shape)}else if(!!y.isPacked!=!!e.packedInputs)b=y.isPacked?s.unpackTensor(b):s.packTensor(b),f.push(b),y=s.texData.get(b.dataId);else if(y.isPacked&&!$o(y.shape,b.shape)){var w=b,_=b.shape;b.shape=y.shape,b=s.packedReshape(b,_),f.push(b),y=s.texData.get(b.dataId),w.shape=_}return s.uploadToGPU(b.dataId),{shape:b.shape,texData:y,isUniform:!1}});this.uploadToGPU(u.dataId);var d,p={shape:u.shape,texData:c,isUniform:!1},v=function(b,y,w){var _="";y.concat(w).forEach(function(R){var I=R.texData!=null&&R.texData.slice!=null&&R.texData.slice.flatOffset>0,P=R.isUniform?"uniform":R.texData.texShape;_+=R.shape+"_"+P+"_"+I});var k=b.userCode,S=b.constructor.name;return S+="_"+_+"_"+k}(e,h,p),m=this.getAndSaveBinary(v,function(){return function(b,y,w,_){var k=y.userCode,S=w.map(function(B,q){var $={logicalShape:B.shape,texShape:B.isUniform?null:B.texData.texShape,isUniform:B.isUniform,isPacked:!B.isUniform&&B.texData.isPacked,flatOffset:null};return B.texData!=null&&B.texData.slice!=null&&B.texData.slice.flatOffset>0&&($.flatOffset=B.texData.slice.flatOffset),{name:y.variableNames[q],shapeInfo:$}}),R=S.map(function(B){return B.shapeInfo}),I={logicalShape:_.shape,texShape:_.texData.texShape,isUniform:!1,isPacked:_.texData.isPacked,flatOffset:null},P=R0(S,I,k,y.packedInputs),N=b.createProgram(P),V=null,U=b.getUniformLocation(N,"NAN",!1);H().getNumber("WEBGL_VERSION")===1&&(V=b.getUniformLocation(N,"INFINITY",!1));for(var z={},j=0;j<y.variableNames.length;j++){var W=y.variableNames[j];z[W]=b.getUniformLocation(N,W,!1),z["offset"+W]=b.getUniformLocation(N,"offset"+W,!1)}return{program:y,source:P,webGLProgram:N,uniformLocations:z,inShapeInfos:R,outShapeInfo:I,infLoc:V,nanLoc:U}}(s.gpgpu,e,h,p)}),g=this.activeTimers!=null;if(g&&(d=this.startTimer()),function(b,y,w,_,k){rl(y.inShapeInfos,w),rl([y.outShapeInfo],[_]);var S=_.texData.texture,R=_.texData.texShape;_.texData.isPacked?b.setOutputPackedMatrixTexture(S,R[0],R[1]):b.setOutputMatrixTexture(S,R[0],R[1]),b.setProgram(y.webGLProgram),H().getNumber("WEBGL_VERSION")===1&&y.infLoc!==null&&b.gl.uniform1f(y.infLoc,1/0),y.nanLoc!==null&&b.gl.uniform1f(y.nanLoc,NaN),w.forEach(function(I,P){var N=y.program.variableNames[P],V=y.uniformLocations[N],U=y.uniformLocations["offset"+N];if(V!=null)if(I.isUniform)if(ce(I.shape)<2)b.gl.uniform1f(V,I.uniformValues[0]);else{var z=I.uniformValues;z instanceof Float32Array||(z=new Float32Array(z)),b.gl.uniform1fv(V,z)}else I.texData.slice!=null&&U!=null&&b.gl.uniform1i(U,I.texData.slice.flatOffset),b.setInputMatrixTexture(I.texData.texture,V,P)}),k!=null&&k(b,y.webGLProgram),b.executeProgram()}(this.gpgpu,m,h,p,i),f.forEach(function(b){return s.disposeData(b.dataId)}),g&&(d=this.endTimer(d),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(d)})),!H().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&a===!1){var x=this.unpackTensor(u);return this.disposeData(u.dataId),x}return u},t.prototype.compileAndRun=function(e,r,o,i,a){a===void 0&&(a=!1),o=o||r[0].dtype;var s=this.runWebGLProgram(e,r,o,i,a);return F.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},t.prototype.getAndSaveBinary=function(e,r){return e in this.binaryCache||(this.binaryCache[e]=r()),this.binaryCache[e]},t.prototype.getTextureManager=function(){return this.textureManager},t.prototype.dispose=function(){var e=this;this.disposed||(H().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(r){e.gpgpu.deleteProgram(e.binaryCache[r].webGLProgram),delete e.binaryCache[r]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},t.prototype.floatPrecision=function(){var e=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=ie(function(){if(!H().get("WEBGL_RENDER_FLOAT32_ENABLED")){var r=H().getBool("DEBUG");H().set("DEBUG",!1);var o=e.abs(re(1e-8)).dataSync()[0];if(H().set("DEBUG",r),o>0)return 32}return 16})),this.floatPrecisionValue},t.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},t.prototype.uploadToGPU=function(e){var r,o=this.texData.get(e),i=o.shape,a=o.dtype,s=o.values,u=o.texture,c=o.usage,l=o.isPacked;if(u==null){var f,h=this.activeTimers!=null;h&&(f=on());var d=o.texShape;if(d==null&&(d=_g(i,l),o.texShape=d),s!=null){var p=Ta(i),v=void 0,m=d[1],g=d[0],x=s instanceof Uint8Array;l?(m=(r=To(d[0],d[1]))[0],g=r[1],v=new iy(p,[g,m],x)):v=new oy(p,[g,m],x);var b=this.makeTensorInfo([g,m],a);this.texData.get(b.dataId).usage=x?Ot.PIXELS:Ot.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),m,g,s);var y=this.runWebGLProgram(v,[b],a,null,!0),w=this.texData.get(y.dataId);o.texture=w.texture,o.texShape=w.texShape,o.isPacked=w.isPacked,o.usage=w.usage,this.disposeData(b.dataId),this.texData.delete(y.dataId),o.values=null,h&&(this.uploadWaitMs+=on()-f)}else{var _=this.acquireTexture(d,c,a,l);o.texture=_}}},t.prototype.convertAndCacheOnCPU=function(e,r){var o=this.texData.get(e),i=o.dtype;return this.releaseGPUData(e),r!=null&&(o.values=function(a,s){if(s==="float32"||s==="complex64")return a;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(a.length):new Uint8Array(a.length),c=0;c<u.length;++c)u[c]=Math.round(a[c]);return u}throw new Error("Unknown dtype "+s)}(r,i)),o.values},t.prototype.acquireTexture=function(e,r,o,i){if(this.numBytesInGPU+=this.computeBytes(e,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var a=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+a+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(e,r,i)},t.prototype.computeBytes=function(e,r){return e[0]*e[1]*Hf(r)},t}(hh);Yf()&&F.registerBackend("webgl",function(){return new mx},2);var gx=D({square_:function(n){var t=C(n,"x","square"),e=[t];return F.runKernelFunc(function(r,o){return o([t]),r.square(t)},{x:t},null,"Square",{},e,[])}}),Eo="SquaredDifference",Th=D({squaredDifference_:function(n,t){var e,r=C(n,"a","squaredDifference"),o=C(t,"b","squaredDifference");e=Ke(r,o),r=e[0],o=e[1],Ne(r.shape,o.shape);var i={a:r,b:o},a=[r,o];return F.runKernelFunc(function(s,u){var c=s.squaredDifference(r,o);return u([r,o]),c},i,function(s,u){var c=u[0],l=u[1],f=re(2);return{a:function(){return s.mul(c.sub(l).mul(f))},b:function(){return s.mul(l.sub(c).mul(f))}}},Eo,{},a,[])}}),yx=D({abs_:function(n){var t=C(n,"x","abs");return t.dtype==="complex64"?F.runKernelFunc(function(e){return e.complexAbs(t)},{$x:t}):F.runKernelFunc(function(e,r){var o=e.abs(t);return r([t]),o},{x:t},function(e,r){var o=r[0];return{x:function(){return e.mul(o.toFloat().step(-1))}}},"Abs")}}),xx=D({acos_:function(n){var t=C(n,"x","acos");return F.runKernelFunc(function(e,r){var o=e.acos(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.divStrict(re(1).sub(o.toFloat().square()).sqrt()).neg()}}})}}),bx=D({acosh_:function(n){var t=C(n,"x","acosh");return F.runKernelFunc(function(e,r){var o=e.acosh(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.divStrict(o.toFloat().square().sub(1).sqrt())}}})}}),wx=D({asin_:function(n){var t=C(n,"x","asin");return F.runKernelFunc(function(e,r){var o=e.asin(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.divStrict(re(1).sub(o.toFloat().square()).sqrt())}}})}}),_x=D({asinh_:function(n){var t=C(n,"x","asinh");return F.runKernelFunc(function(e,r){var o=e.asinh(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.divStrict(re(1).add(o.toFloat().square()).sqrt())}}})}}),Cx=D({atan_:function(n){var t=C(n,"x","atan");return F.runKernelFunc(function(e,r){var o=e.atan(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(o.toFloat().square().add(1))}}})}}),Ex=D({atanh_:function(n){var t=C(n,"x","atanh");return F.runKernelFunc(function(e,r){var o=e.atanh(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(re(1).sub(o.toFloat().square()))}}})}}),Ix=D({ceil_:function(n){var t=C(n,"x","ceil");return F.runKernelFunc(function(e){return e.ceil(t)},{$x:t},function(e){return{$x:function(){return Fe(e)}}})}}),fu=D({clipByValue_:function(n,t,e){var r=C(n,"x","clipByValue");E(t<=e,function(){return"Error in clip: min ("+t+") must be less than or equal to max ("+e+")."});var o=[r],i={min:t,max:e};return F.runKernelFunc(function(a,s){var u=a.clip(r,t,e);return s([r]),u},{x:r},function(a,s){var u=s[0];return{x:function(){return a.where(u.greaterEqual(t).logicalAnd(u.lessEqual(e)),Fe(a))}}},"ClipByValue",i,o)}}),Rx=D({cos_:function(n){var t=C(n,"x","cos"),e=[t];return F.runKernelFunc(function(r,o){var i=r.cos(t);return o([t]),i},{x:t},function(r,o){var i=o[0];return{x:function(){return i.toFloat().sin().neg().mul(r)}}},"Cos",{},e)}}),Sx=D({cosh_:function(n){var t=C(n,"x","cosh");return F.runKernelFunc(function(e,r){var o=e.cosh(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return o.toFloat().sinh().mulStrict(e)}}})}}),kx=D({erf_:function(n){var t=C(n,"x","erf");return E(t.dtype==="int32"||t.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),t.dtype==="int32"&&(t=t.toFloat()),F.runKernelFunc(function(e,r){var o=e.erf(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),_s=D({exp_:function(n){var t=C(n,"x","exp");return F.runKernelFunc(function(e,r){var o=e.exp(t);return r([o]),o},{x:t},function(e,r){return{x:function(){return e.mulStrict(r[0])}}},"Exp",{},[],[!0])}}),Ax=D({expm1_:function(n){var t=C(n,"x","expm1");return F.runKernelFunc(function(e,r){var o=e.expm1(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.mul(o.exp())}}})}}),Dx=D({floor_:function(n){var t=C(n,"x","floor");return F.runKernelFunc(function(e){return e.floor(t)},{$x:t},function(e){return{$x:function(){return Fe(e)}}})}}),Tx=D({log_:function(n){var t=C(n,"x","log"),e=[t];return F.runKernelFunc(function(r,o){var i=r.log(t);return o([t]),i},{x:t},function(r,o){var i=o[0];return{x:function(){return r.div(i.toFloat())}}},"Log",{},e)}}),Nx=D({log1p_:function(n){var t=C(n,"x","log1p");return F.runKernelFunc(function(e,r){var o=e.log1p(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(o.add(1))}}})}}),Fx=D({logSigmoid_:function(n){var t=C(n,"x","logSigmoid");return F.runKernelFunc(function(e,r){var o=e.softplus(t.neg()).neg();return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.mul(o.neg().sigmoid())}}})}}),Fi=D({neg_:function(n){var t=C(n,"x","neg"),e=[t];return F.runKernelFunc(function(r){return r.neg(t)},{x:t},function(r){return{x:function(){return r.neg()}}},"Neg",{},e)}}),Px=D({reciprocal_:function(n){var t=C(n,"x","reciprocal");return F.runKernelFunc(function(e,r){var o=e.reciprocal(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(o.square().neg())}}})}}),Mx=D({round_:function(n){var t=C(n,"x","round");return F.runKernelFunc(function(e){return e.round(t)},{$x:t},function(e){return{$x:function(){return Fe(e)}}})}}),Nh=D({rsqrt_:function(n){var t=C(n,"x","rsqrt"),e=[t];return F.runKernelFunc(function(r,o){var i=r.rsqrt(t);return o([t]),i},{x:t},function(r,o){var i=o[0];return{x:function(){return r.div(i.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},e)}}),Fh=D({sigmoid_:function(n){var t=C(n,"x","sigmoid");return F.runKernelFunc(function(e,r){var o=e.sigmoid(t);return r([o]),o},{x:t},function(e,r){var o=r[0];return{x:function(){return e.mul(o.mul(re(1).sub(o)))}}},"Sigmoid")}}),Ox=D({sign_:function(n){var t=C(n,"x","sign");return F.runKernelFunc(function(e){return e.sign(t)},{$x:t},function(e){return{$x:function(){return Fe(e)}}})}}),Bx=D({isNaN_:function(n){var t=C(n,"x","isNaN");return F.runKernelFunc(function(e){return e.isNaN(t)},{$x:t},function(e){return{$x:function(){return Fe(e)}}})}}),Lx=D({isInf_:function(n){var t=C(n,"x","isInf");return F.runKernelFunc(function(e){return e.isInf(t)},{$x:t},function(e){return{$x:function(){return Fe(e)}}})}}),Wx=D({isFinite_:function(n){var t=C(n,"x","isFinite");return F.runKernelFunc(function(e){return e.isFinite(t)},{$x:t},function(e){return{$x:function(){return Fe(e)}}})}}),Ux=D({sin_:function(n){var t=C(n,"x","sin"),e=[t];return F.runKernelFunc(function(r,o){var i=r.sin(t);return o([t]),i},{x:t},function(r,o){var i=o[0];return{x:function(){return i.toFloat().cos().mul(r)}}},"Sin",{},e)}}),Vx=D({sinh_:function(n){var t=C(n,"x","sinh");return F.runKernelFunc(function(e,r){var o=e.sinh(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return o.toFloat().cosh().mulStrict(e)}}})}}),zx=D({softplus_:function(n){var t=C(n,"x","softplus");return F.runKernelFunc(function(e,r){var o=e.softplus(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.mul(o.sigmoid())}}})}}),Hx=D({sqrt_:function(n){var t=C(n,"x","sqrt");return F.runKernelFunc(function(e,r){var o=e.sqrt(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(o.toFloat().sqrt().mul(2))}}})}}),Gx=D({step_:function(n,t){t===void 0&&(t=0);var e=C(n,"x","step");return F.runKernelFunc(function(r){return r.step(e,t)},{$x:e},function(r){return{$x:function(){return Fe(r)}}})}}),jx=D({tan_:function(n){var t=C(n,"x","tan");return F.runKernelFunc(function(e,r){var o=e.tan(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return e.div(o.cos().square())}}})}}),qx=D({tanh_:function(n){var t=C(n,"x","tanh");return F.runKernelFunc(function(e,r){var o=e.tanh(t);return r([o]),o},{x:t},function(e,r){var o=r[0];return{x:function(){return re(1).sub(o.square()).mulStrict(e)}}},"Tanh",{},null,[!0])}});function Ph(n,t,e,r,o,i){var a,s,u=C(n,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),E(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),E(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),a!=null&&E(a.rank===2||a.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+a.rank+"."}),s!=null&&E(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),Fo(u,c,l,s,a,i)}function Mh(n,t,e,r,o,i){var a,s,u=C(n,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),E(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),E(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),a!=null&&E(a.rank===3||a.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+a.rank+"."}),s!=null&&E(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),Fo(u,c,l,s,a,i)}function Oh(n,t,e,r,o,i){var a,s,u=C(n,"x","batchNorm"),c=C(t,"mean","batchNorm"),l=C(e,"variance","batchNorm");return o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),E(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),E(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),E(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),a!=null&&E(a.rank===4||a.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+a.rank+"."}),s!=null&&E(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),Fo(u,c,l,s,a,i)}function Fo(n,t,e,r,o,i){i==null&&(i=.001);var a,s,u,c=C(n,"x","batchNorm"),l=C(t,"mean","batchNorm"),f=C(e,"variance","batchNorm");o!=null&&(a=C(o,"scale","batchNorm")),r!=null&&(s=C(r,"offset","batchNorm")),E(l.rank===f.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),E(s==null||l.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),E(a==null||l.rank===a.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."}),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var h=[c,l,f,a];return F.runKernelFunc(function(d,p){var v=d.batchNormalization(u,ei(l),ei(f),i,ei(a),ei(s));return p([c,l,f,a]),v},{x:c,mean:l,variance:f,scale:a,offset:s},function(d,p){var v=p,m=v[0],g=v[1],x=v[2],b=v[3],y=b??re(1),w=tt(g.shape,u.shape),_=[];if(g.rank===1){for(var k=0;k<u.shape.length-1;++k)_.push(u.shape[k]);_.push(1)}var S=m.sub(g),R=d.mul(y),I=Nh(x.add(re(i))),P=I.mul(I).mul(I).mul(re(-.5));return{x:function(){return g.rank===1?d.mul(Mr(I.as4D(1,1,1,g.shape[0]),_)).mul(y).reshape(m.shape):d.mul(I).mul(y).reshape(m.shape)},mean:function(){var N=I.mul(re(-1)).mul(R);return g.rank===1&&(N=N.sum(w)),N.reshape(g.shape)},variance:function(){var N=P.mul(S).mul(R);return g.rank===1&&(N=N.sum(w)),N.reshape(g.shape)},scale:function(){var N=S.mul(I),V=d.mul(N);return g.rank===1&&(V=V.sum(w)),V.reshape(g.shape)},offset:function(){var N=d;return g.rank===1&&(N=N.sum(w)),N.reshape(g.shape)}}},"BatchNormalization",{varianceEpsilon:i},h).reshape(c.shape)}function ei(n){return n==null?null:n.rank===0?n.as1D():n.rank===1?n:n.rank===2?n.as4D(1,1,n.shape[0],n.shape[1]):n.rank===3?n.as4D(1,n.shape[0],n.shape[1],n.shape[2]):n}function ta(){Jf("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var Kx=D({batchNormalization2d_:function(n,t,e,r,o,i){return r===void 0&&(r=.001),ta(),Ph(n,t,e,i,o,r)}}),Xx=D({batchNormalization3d_:function(n,t,e,r,o,i){return r===void 0&&(r=.001),ta(),Mh(n,t,e,i,o,r)}}),$x=D({batchNormalization4d_:function(n,t,e,r,o,i){return r===void 0&&(r=.001),ta(),Oh(n,t,e,i,o,r)}}),Yx=D({batchNormalization_:function(n,t,e,r,o,i){return r===void 0&&(r=.001),ta(),Fo(n,t,e,i,o,r)}}),Bh=D({batchNorm_:Fo}),Jx=D({batchNorm2d_:Ph}),Qx=D({batchNorm3d_:Mh}),Zx=D({batchNorm4d_:Oh}),na=D({logicalAnd_:function(n,t){var e=C(n,"a","logicalAnd","bool"),r=C(t,"b","logicalAnd","bool");return Ne(e.shape,r.shape),F.runKernelFunc(function(o){return o.logicalAnd(e,r)},{a:e,b:r},null,"LogicalAnd")}}),eb=D({logicalNot_:function(n){var t=C(n,"x","logicalNot","bool");return F.runKernelFunc(function(e){return e.logicalNot(t)},{$x:t})}}),Lh=D({logicalOr_:function(n,t){var e=C(n,"a","logicalOr","bool"),r=C(t,"b","logicalOr","bool");return Ne(e.shape,r.shape),F.runKernelFunc(function(o){return o.logicalOr(e,r)},{$a:e,$b:r})}}),tb=D({logicalXor_:function(n,t){var e=C(n,"a","logicalXor","bool"),r=C(t,"b","logicalXor","bool");return Ne(e.shape,r.shape),Lh(n,t).logicalAnd(na(n,t).logicalNot())}}),pr=D({where_:function(n,t,e){var r=C(t,"a","where"),o=C(e,"b","where"),i=C(n,"condition","where","bool");return Le(r.shape,o.shape,"Error in where: "),i.rank===1?E(i.shape[0]===r.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):Le(i.shape,o.shape,"Error in where: "),F.runKernelFunc(function(a,s){var u=a.select(i,r,o);return s([i]),u},{$condition:i,$a:r,$b:o},function(a,s){var u=s[0];return{$condition:function(){return Fe(u).toFloat()},$a:function(){return a.mul(u.cast(a.dtype))},$b:function(){return a.mul(u.logicalNot().cast(a.dtype))}}})}}),Wh=function(n){return se(this,void 0,void 0,function(){var t,e,r;return ue(this,function(o){switch(o.label){case 0:return[4,(t=C(n,"condition","whereAsync","bool")).data()];case 1:return e=o.sent(),r=su(t.shape,e),n!==t&&t.dispose(),[2,r]}})})},De=D({add_:function(n,t){var e,r=C(n,"a","add"),o=C(t,"b","add");e=Ke(r,o),r=e[0],o=e[1];var i=Ne(r.shape,o.shape);return F.runKernelFunc(function(a){return a.add(r,o)},{a:r,b:o},function(a){return{a:function(){var s=a,u=tt(r.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(r.shape)},b:function(){var s=a,u=tt(o.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}},"Add")}}),nb=D({addN_:function(n){E(Array.isArray(n),function(){return"The argument passed to tf.addN() must be a list of tensors"}),E(n.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+n.length});var t=n.map(function(o,i){return C(o,"tensors"+i,"addN")}),e=t[0];t.forEach(function(o){if(o.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(function(o){if(!at(o.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var r=t;return F.runKernelFunc(function(o){return o.addN(t)},r,function(o){var i={};return t.forEach(function(a,s){i[s]=function(){return o.clone()}}),i},"AddN")}}),rb=D({addStrict_:function(n,t){var e=C(n,"a","addStrict"),r=C(t,"b","addStrict");return Le(e.shape,r.shape,"Error in addStrict: "),e.add(r)}}),ob=D({atan2_:function(n,t){var e,r=C(n,"a","atan2"),o=C(t,"b","atan2");e=Ke(r,o),r=e[0],o=e[1];var i=Ne(r.shape,o.shape);return F.runKernelFunc(function(a,s){var u=a.atan2(r,o);return s([r,o]),u},{$a:r,$b:o},function(a,s){var u=s[0],c=s[1];return{$a:function(){var l=De(u.square(),c.square()),f=a.mul(c.div(l)),h=tt(u.shape,i);return h.length>0&&(f=f.sum(h)),f.reshape(u.shape)},$b:function(){var l=De(u.square(),c.square()),f=Fi(a.mul(u.div(l))),h=tt(c.shape,i);return h.length>0&&(f=f.sum(h)),f.reshape(c.shape)}}})}}),qt=D({div_:function(n,t){var e,r=C(n,"a","div"),o=C(t,"b","div");if(e=Ke(r,o),r=e[0],o=e[1],r.dtype==="int32"&&o.dtype==="int32")return Uh(r,o);var i=Ne(r.shape,o.shape);return F.runKernelFunc(function(a,s){var u=a.realDivide(r,o);return s([r,o]),u},{a:r,b:o},function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.div(c.toFloat()),f=tt(u.shape,i);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),f=tt(c.shape,i);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}},"Div")}}),ib=D({divNoNan_:function(n,t){var e,r=C(n,"a","div"),o=C(t,"b","div");r=(e=Ke(r,o))[0],o=e[1];var i=qt(r,o),a=Fe(i),s=o.equal(a);return pr(s,a,i)}}),ab=D({divStrict_:function(n,t){var e=C(n,"a","div"),r=C(t,"b","div");return Le(e.shape,r.shape,"Error in divideStrict: "),e.div(r)}}),Uh=D({floorDiv_:function(n,t){var e,r=C(n,"a","floorDiv"),o=C(t,"b","floorDiv");e=Ke(r,o),r=e[0],o=e[1];var i=Ne(r.shape,o.shape);return F.runKernelFunc(function(a,s){var u=a.floorDiv(r,o);return s([r,o]),u},{a:r,b:o},function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.div(c.toFloat()),f=tt(u.shape,i);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),f=tt(c.shape,i);f.length>0&&(l=l.sum(f).reshape(c.shape));var h=c.square();return l.div(h.toFloat()).neg()}}},"FloorDiv")}}),hu=D({maximum_:function(n,t){var e,r=C(n,"a","maximum"),o=C(t,"b","maximum");return e=Ke(r,o),r=e[0],o=e[1],r.dtype==="bool"&&(r=r.toInt(),o=o.toInt()),Ne(r.shape,o.shape),F.runKernelFunc(function(i,a){var s=i.maximum(r,o);return a([r,o]),s},{a:r,b:o},function(i,a){var s=a[0],u=a[1];return{a:function(){return i.mul(s.greaterEqual(u).toFloat())},b:function(){return i.mul(s.less(u).toFloat())}}},"Maximum")}}),sb=D({maximumStrict_:function(n,t){var e=C(n,"a","maximumStrict"),r=C(t,"b","maximumStrict");return Le(e.shape,r.shape,"Error in maximumStrict: "),e.maximum(r)}}),Vh=D({minimum_:function(n,t){var e,r=C(n,"a","minimum"),o=C(t,"b","minimum");return e=Ke(r,o),r=e[0],o=e[1],r.dtype==="bool"&&(r=r.toInt(),o=o.toInt()),Ne(r.shape,o.shape),F.runKernelFunc(function(i,a){var s=i.minimum(r,o);return a([r,o]),s},{a:r,b:o},function(i,a){var s=a[0],u=a[1];return{a:function(){return i.mul(s.lessEqual(u).toFloat())},b:function(){return i.mul(s.greater(u).toFloat())}}},"Minimum")}}),ub=D({minimumStrict_:function(n,t){var e=C(n,"a","minimumStrict"),r=C(t,"b","minimumStrict");return Le(e.shape,r.shape,"Error in minimumStrict: "),e.minimum(r)}}),cb=D({mod_:function(n,t){var e,r=C(n,"a","mod"),o=C(t,"b","mod");e=Ke(r,o),r=e[0],o=e[1];var i=Ne(r.shape,o.shape);return F.runKernelFunc(function(a,s){var u=a.mod(r,o);return s([r,o]),u},{$a:r,$b:o},function(a,s){var u=s[0],c=s[1];return{$a:function(){var l=tt(u.shape,i);return l.length>0?a.sum(l).reshape(u.shape):a},$b:function(){var l=a.mul(u.div(c).floor().neg()),f=tt(c.shape,i);return f.length>0?l.sum(f).reshape(c.shape):l}}})}}),lb=D({modStrict_:function(n,t){var e=C(n,"a","modStrict"),r=C(t,"b","modStrict");return Le(e.shape,r.shape,"Error in modStrict: "),e.mod(r)}}),yt=D({mul_:function(n,t){var e,r=C(n,"a","mul"),o=C(t,"b","mul");e=Ke(r,o),r=e[0],o=e[1];var i=Ne(r.shape,o.shape);return F.runKernelFunc(function(a,s){var u=a.multiply(r,o);return s([r,o]),u},{a:r,b:o},function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.mul(c.toFloat()),f=tt(u.shape,i);return f.length>0?l.sum(f).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),f=tt(c.shape,i);return f.length>0?l.sum(f).reshape(c.shape):l}}},"Mul")}}),fb=D({mulStrict_:function(n,t){var e=C(n,"a","mul"),r=C(t,"b","mul");return Le(e.shape,r.shape,"Error in multiplyStrict: "),e.mul(r)}}),Pi=D({pow_:function(n,t){var e,r=C(n,"base","pow"),o=C(t,"exp","pow");e=Ke(r,o),r=e[0],o=e[1];var i=Ne(r.shape,o.shape),a=[r,o];return F.runKernelFunc(function(s,u){var c=s.pow(r,o);return u([r,o,c]),c},{a:r,b:o},function(s,u){var c=u[0],l=u[1],f=u[2];return{a:function(){var h=l.toFloat(),d=s.mul(h.mul(c.pow(h.sub(re(1))))),p=tt(c.shape,i);return p.length>0&&(d=d.sum(p)),d.reshape(c.shape)},b:function(){var h=c.greater(0),d=c.log().where(h,Fe(c)),p=s.mul(f.mul(d)),v=tt(l.shape,i);return v.length>0&&(p=p.sum(v)),p.reshape(l.shape)}}},"Pow",{},a,[!0])}}),hb=D({powStrict_:function(n,t){return Le(n.shape,t.shape,"Error in powStrict: "),n.pow(t)}}),db=D({squaredDifferenceStrict_:function(n,t){var e=C(n,"a","squaredDifferenceStrict"),r=C(t,"b","squaredDifferenceStrict");return Le(e.shape,r.shape,"Error in squaredDifferenceStrict: "),e.squaredDifference(r)}}),nt=D({sub_:function(n,t){var e,r=C(n,"a","sub"),o=C(t,"b","sub");e=Ke(r,o),r=e[0],o=e[1];var i=Ne(r.shape,o.shape);return F.runKernelFunc(function(a){return a.subtract(r,o)},{a:r,b:o},function(a){return{a:function(){var s=a,u=tt(r.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(r.shape)},b:function(){var s=a,u=tt(o.shape,i);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}},"Sub")}}),pb=D({subStrict_:function(n,t){var e=C(n,"a","subStrict"),r=C(t,"b","subStrict");return Le(e.shape,r.shape,"Error in subStrict: "),e.sub(r)}}),zh=D({equal_:function(n,t){var e,r=C(n,"a","equal"),o=C(t,"b","equal");return e=Ke(r,o),r=e[0],o=e[1],Ne(r.shape,o.shape),F.runKernelFunc(function(i){return i.equal(r,o)},{$a:r,$b:o})}}),vb=D({equalStrict_:function(n,t){var e=C(n,"a","equalStrict"),r=C(t,"b","equalStrict");return Le(e.shape,r.shape,"Error in equalStrict: "),e.equal(r)}}),mb=D({greater_:function(n,t){var e,r=C(n,"a","greater"),o=C(t,"b","greater");return e=Ke(r,o),r=e[0],o=e[1],Ne(r.shape,o.shape),F.runKernelFunc(function(i){return i.greater(r,o)},{a:r,b:o},null,"Greater")}}),Hh=D({greaterEqual_:function(n,t){var e,r=C(n,"a","greaterEqual"),o=C(t,"b","greaterEqual");return e=Ke(r,o),r=e[0],o=e[1],Ne(r.shape,o.shape),F.runKernelFunc(function(i,a){var s=i.greaterEqual(r,o);return a([r,o]),s},{a:r,b:o},function(i,a){var s=a[0],u=a[1];return{a:function(){return Fe(s)},b:function(){return Fe(u)}}},"GreaterEqual")}}),gb=D({greaterEqualStrict_:function(n,t){var e=C(n,"a","greaterEqualStrict"),r=C(t,"b","greaterEqualStrict");return Le(e.shape,r.shape,"Error in greaterEqualStrict: "),e.greaterEqual(r)}}),yb=D({greaterStrict_:function(n,t){var e=C(n,"a","greaterStrict"),r=C(t,"b","greaterStrict");return Le(e.shape,r.shape,"Error in greaterStrict: "),e.greater(r)}}),xb=D({less_:function(n,t){var e,r=C(n,"a","less"),o=C(t,"b","less");return e=Ke(r,o),r=e[0],o=e[1],Ne(r.shape,o.shape),F.runKernelFunc(function(i){return i.less(r,o)},{a:r,b:o},null,"Less")}}),bb=D({lessEqual_:function(n,t){var e,r=C(n,"a","lessEqual"),o=C(t,"b","lessEqual");return e=Ke(r,o),r=e[0],o=e[1],Ne(r.shape,o.shape),F.runKernelFunc(function(i,a){var s=i.lessEqual(r,o);return a([r,o]),s},{a:r,b:o},null,"LessEqual")}}),wb=D({lessEqualStrict_:function(n,t){var e=C(n,"a","lessEqualStrict"),r=C(t,"b","lessEqualStrict");return Le(e.shape,r.shape,"Error in lessEqualStrict: "),e.lessEqual(r)}}),_b=D({lessStrict_:function(n,t){var e=C(n,"a","lessStrict"),r=C(t,"b","lessStrict");return Le(e.shape,r.shape,"Error in lessStrict: "),e.less(r)}}),Cb=D({notEqual_:function(n,t){var e,r=C(n,"a","notEqual"),o=C(t,"b","notEqual");return e=Ke(r,o),r=e[0],o=e[1],Ne(r.shape,o.shape),F.runKernelFunc(function(i){return i.notEqual(r,o)},{a:r,b:o},null,"NotEqual")}}),Eb=D({notEqualStrict_:function(n,t){var e=C(n,"a","notEqualStrict"),r=C(t,"b","notEqualStrict");return Le(e.shape,r.shape,"Error in notEqualStrict: "),e.notEqual(r)}});function dl(n,t){for(var e=[],r=n;r<t;++r)e.push(r);return e}function pl(n){for(var t=[],e=0;e<n.length;++e)for(var r=0;r<n[e].length;++r)t.push(n[e][r]);return t}var du=D({gather_:function(n,t,e){e===void 0&&(e=0);var r=C(n,"x","gather"),o=C(t,"indices","gather","int32");e=rt(e,r.shape)[0];var i=function(a,s,u){for(var c=a.shape[u],l=[],f=1,h=1,d=0;d<u;d++)l.push(a.shape[d]),f*=a.shape[d];for(d=0;d<s.rank;d++)l.push(s.shape[d]);for(d=u+1;d<a.rank;d++)l.push(a.shape[d]),h*=a.shape[d];return{batchSize:f,sliceSize:h,dimSize:c,outputShape:l}}(r,o,e);return F.runKernelFunc(function(a,s){var u=a.gather(r,o.flatten(),e);return s([o]),u},{x:r,indices:o},function(a,s){var u=s[0];return{x:function(){var c=r.shape,l=u.size,f=c.slice(0,e),h=f.length,d=c.slice(e,c.length).slice(1),p=d.length,v=dl(0,h),m=dl(h+1,h+1+p),g=pl([f,[l],d]),x=a.reshape(g),b=u.reshape([l]),y=pl([[h],v,m]),w=x.transpose(y),_=Gh(w,b,r.shape[e]),k=Zs(y);return _=_.transpose(k)},indices:function(){return u}}},"Gather",{axis:e}).reshape(i.outputShape)}}),Gh=D({unsortedSegmentSum_:function(n,t,e){var r=C(n,"x","unsortedSegmentSum"),o=C(t,"segmentIds","unsortedSegmentSum","int32");return E($e(e),function(){return"numSegments must be of dtype int"}),F.runKernelFunc(function(i,a){var s=i.unsortedSegmentSum(r,o,e);return a([o]),s},{$x:r},function(i,a){var s=a[0];return{$x:function(){return function(u,c){for(var l=hu(c,Fe(c)),f=du(u,l),h=Hh(c,re(0,"int32")),d=f.rank-h.rank,p=0;p<d;++p)h=Ut(h,p+1);h=na(h,Yr(f.shape,"bool"));var v=Fe(f);return pr(h,f,v)}(i,s)}}})}}),Ib=function(n,t,e){return se(this,void 0,void 0,function(){var r,o,i,a,s,u,c,l,f,h,d,p,v;return ue(this,function(m){switch(m.label){case 0:for(r=C(n,"tensor","boolMask"),o=C(t,"mask","boolMask","bool"),i=e??0,a=o.rank,s=r.shape,E(a>0,function(){return"mask cannot be scalar"}),Le(s.slice(i,i+a),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=i;c<i+a;c++)u*=s[c];return l=s.slice(0,i).concat([u],s.slice(i+a)),f=r.reshape(l),h=o.reshape([-1]),[4,Wh(h)];case 1:return d=m.sent(),p=d.squeeze([1]),v=du(f,p,i),n!==r&&r.dispose(),t!==o&&o.dispose(),p.dispose(),f.dispose(),h.dispose(),d.dispose(),[2,v]}})})};function jh(n,t,e,r,o,i,a){i===void 0&&(i="NHWC"),E(n.length===t.rank,function(){return"Length of inShape ("+n.length+") and rank of dy ("+t.rank+") must match"});var s=n,u=t,c=!1;t.rank===3&&(c=!0,u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),s=[1,n[0],n[1],n[2]]),E(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),E(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),E(e.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+e.rank});var l=i==="NHWC"?s[3]:s[1],f=i==="NHWC"?u.shape[3]:u.shape[1];E(l===e.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+e.shape[2]+"."}),E(f===e.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+f+") must match output depth for filter "+e.shape[3]+"."}),a!=null&&E($e(o),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var h=ou(i),d=yr(s,e.shape,r,1,o,a,!1,h),p=F.runKernelFunc(function(v,m){var g=v.conv2dDerInput(u,e,d);return m([e,u]),g},{dy4D:u,filter:e},function(v,m){var g=m[0],x=m[1];return{dy4D:function(){return Gt(v,g,r,o,i,1,a)},filter:function(){return pu(v,x,g.shape,r,o,i,a)}}});return c?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}function Wa(n){var t=function(i){return typeof i=="number"?[i,i,i]:i.length===2?[i[0],i[1],1]:i}(n),e=t[0],r=t[1],o=t[2];return e===1&&r===1&&o===1}function qh(n,t,e,r,o){E(n.length===t.rank,function(){return"Length of inShape ("+n.length+") and rank of dy ("+t.rank+") must match"});var i=n,a=t,s=!1;t.rank===4&&(s=!0,a=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]),i=[1,n[0],n[1],n[2],n[3]]);var u=i[4],c=a.shape[4];E(i.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+i.length+"."}),E(a.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+a.rank}),E(e.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+e.rank}),E(u===e.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+e.shape[3]+"."}),E(c===e.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+e.shape[4]+"."});var l=Ti(i,e.shape,r,1,o),f=F.runKernelFunc(function(h){return h.conv3dDerInput(a,e,l)},{dy5D:a});return s?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}var Rb=D({conv1d_:function(n,t,e,r,o,i,a){o===void 0&&(o="NWC"),i===void 0&&(i=1);var s=C(n,"x","conv1d"),u=C(t,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),E(c.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),E(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),a!=null&&E($e(r),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+r+"."}),E(c.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),E(Dt(e,i),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+e+" and dilation '"+i+"'"}),E(o==="NWC",function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var f=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),h=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),d=Gt(h,f,[1,e],r,"NHWC",[1,i],a);return l?d.as2D(d.shape[2],d.shape[3]):d.as3D(d.shape[0],d.shape[2],d.shape[3])}}),Gt=D({conv2d_:function(n,t,e,r,o,i,a){o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]);var s=C(n,"x","conv2d"),u=C(t,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),a!=null&&E($e(r),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+r+"."});var f=o==="NHWC"?c.shape[3]:c.shape[1];E(f===u.shape[2],function(){return"Error in conv2d: depth of input ("+f+") must match input depth for filter "+u.shape[2]+"."}),E(Dt(e,i),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"});var h=ou(o),d=yr(c.shape,u.shape,e,i,r,a,!1,h),p=[u,c],v=F.runKernelFunc(function(m,g){var x=m.conv2d(c,u,d);return g([u,c]),x},{x:c,filter:u},function(m,g){var x=g,b=x[0],y=x[1];return E(Kr(i),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+i+"'"}),{x:function(){return Kh(y.shape,m,b,e,r,o)},filter:function(){return pu(y,m,b.shape,e,r,o)}}},"Conv2D",d,p);return l?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),Sb=D({conv3d_:function(n,t,e,r,o,i){o===void 0&&(o="NDHWC"),i===void 0&&(i=[1,1,1]);var a=C(n,"x","conv3d"),s=C(t,"filter","conv3d"),u=a,c=!1;a.rank===4&&(c=!0,u=a.as5D(1,a.shape[0],a.shape[1],a.shape[2],a.shape[3])),E(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),E(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),E(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),E(function(h,d){return Wa(h)||Wa(d)}(e,i),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),E(o==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var l=Ti(u.shape,s.shape,e,i,r),f=F.runKernelFunc(function(h,d){var p=h.conv3d(u,s,l);return d([u,s]),p},{x:u,$filter:s},function(h,d){E(Wa(i),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+i+"'"});var p=d[0],v=d[1];return{x:function(){return qh(p.shape,h,v,e,r)},$filter:function(){return function(m,g,x,b,y){var w=m;m.rank===4&&(w=m.as5D(1,m.shape[0],m.shape[1],m.shape[2],m.shape[3]));var _=g;_.rank===4&&(_=g.as5D(1,g.shape[0],g.shape[1],g.shape[2],g.shape[3])),E(w.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+w.shape+"."}),E(_.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+_.shape+"."}),E(x.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+x+"."}),E(w.shape[4]===x[3],function(){return"Error in conv3dDerFilter: depth of input "+w.shape[4]+") must match input depth in filter ("+x[3]+"."}),E(_.shape[4]===x[4],function(){return"Error in conv3dDerFilter: depth of dy ("+_.shape[4]+") must match output depth for filter ("+x[4]+")."});var k=Ti(w.shape,x,b,1,y);return F.runKernelFunc(function(S){return S.conv3dDerFilter(w,_,k)},{x5D:w,dy5D:_})}(p,h,v.shape,e,r)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),pu=D({conv2dDerFilter_:function(n,t,e,r,o,i,a){i===void 0&&(i="NHWC");var s=n;n.rank===3&&(s=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var u=t;u.rank===3&&(u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),E(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),E(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),E(e.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+e+"."});var c=i==="NHWC"?s.shape[3]:s.shape[1],l=i==="NHWC"?u.shape[3]:u.shape[1];E(c===e[2],function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+e[2]+"."}),E(l===e[3],function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+e[3]+")."}),a!=null&&E($e(o),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var f=ou(i),h=yr(s.shape,e,r,1,o,a,!1,f);return F.runKernelFunc(function(d){return d.conv2dDerFilter(s,u,h)},{x4D:s,dy4D:u})}}),Kh=D({conv2dDerInput_:jh}),ra=D({depthwiseConv2d_:function(n,t,e,r,o,i,a){i===void 0&&(i=[1,1]);var s=C(n,"x","depthwiseConv2d"),u=C(t,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),i==null&&(i=[1,1]),E(Dt(e,i),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),a!=null&&E($e(r),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+r+"."});var f=yr(c.shape,u.shape,e,i,r,a,!0),h=[c,u],d=F.runKernelFunc(function(p,v){var m=p.depthwiseConv2D(c,u,f);return v([c,u]),m},{x:c,filter:u},function(p,v){E(Kr(i),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+i+"'"});var m=v[0],g=v[1];return{x:function(){return Xh(m.shape,p,g,f)},filter:function(){return $h(m,p,g.shape,f)}}},"DepthwiseConv2dNative",f,h);return l?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}}),Xh=D({depthwiseConv2dDerInput_:function(n,t,e,r){var o=t,i=!1;t.rank===3&&(i=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var a=F.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(o,e,r)},{dy4D:o});return i?a.as3D(a.shape[1],a.shape[2],a.shape[3]):a}}),$h=D({depthwiseConv2dDerFilter_:function(n,t,e,r){var o=n;n.rank===3&&(o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var i=t;return i.rank===3&&(i=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),F.runKernelFunc(function(a){return a.depthwiseConv2DDerFilter(o,i,r)},{x4D:o,dy4D:i})}}),vu=D({separableConv2d_:function(n,t,e,r,o,i,a){i===void 0&&(i=[1,1]),a===void 0&&(a="NHWC");var s=C(n,"x","separableConv2d"),u=C(t,"depthwiseFilter","separableConv2d"),c=C(e,"pointwiseFilter","separableConv2d"),l=s,f=!1;if(s.rank===3&&(f=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),a==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");E(l.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),E(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),E(c.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var h=u.shape[2],d=u.shape[3];E(c.shape[2]===h*d,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+h*d+", but got "+c.shape[2]+"."});var p=ra(l,u,r,o,a,i),v=Gt(p,c,1,"valid",a);return f?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),kb=D({conv2dTranspose_:function(n,t,e,r,o,i){return jh(e,C(n,"x","conv2dTranspose"),C(t,"filter","conv2dTranspose"),r,o,"NHWC",i)}}),Ab=D({conv3dTranspose_:function(n,t,e,r,o){return qh(e,C(n,"x","conv3dTranspose"),C(t,"filter","conv3dTranspose"),r,o)}}),oa=D({matMul_:function(n,t,e,r){var o;e===void 0&&(e=!1),r===void 0&&(r=!1);var i=C(n,"a","matMul"),a=C(t,"b","matMul");o=Ke(i,a),i=o[0],a=o[1];var s=e?i.shape[i.rank-2]:i.shape[i.rank-1],u=r?a.shape[a.rank-1]:a.shape[a.rank-2],c=e?i.shape[i.rank-1]:i.shape[i.rank-2],l=r?a.shape[a.rank-2]:a.shape[a.rank-1],f=i.shape.slice(0,-2),h=a.shape.slice(0,-2),d=ce(f),p=ce(h);E(i.rank>=2&&a.rank>=2&&i.rank===a.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+i.rank+" and "+a.rank+"."}),E(at(f,h),function(){return"Error in matMul: outer dimensions ("+f+") and ("+h+") of Tensors with shapes "+i.shape+" and "+a.shape+" must match."}),E(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+i.shape+" and "+a.shape+" and transposeA="+e+" and transposeB="+r+" must match."});var v=i.shape.slice(0,-2).concat([c,l]),m=e?i.as3D(d,s,c):i.as3D(d,c,s),g=r?a.as3D(p,l,u):a.as3D(p,u,l),x={transposeA:e,transposeB:r};return F.runKernelFunc(function(b,y){var w=b.batchMatMul(m,g,e,r);return y([m,g]),w},{a:m,b:g},function(b,y){var w=y,_=w[0],k=w[1];return e||r?!e&&r?{a:function(){return b.matMul(k,!1,!1)},b:function(){return b.matMul(_,!0,!1)}}:e&&!r?{a:function(){return k.matMul(b,!1,!0)},b:function(){return _.matMul(b,!1,!1)}}:{a:function(){return k.matMul(b,!0,!0)},b:function(){return b.matMul(_,!0,!0)}}:{a:function(){return b.matMul(k,!1,!0)},b:function(){return _.matMul(b,!0,!1)}}},"BatchMatMul",x).reshape(v)}}),Db=D({dot_:function(n,t){var e=C(n,"t1","dot"),r=C(t,"t2","dot");E(!(e.rank!==1&&e.rank!==2||r.rank!==1&&r.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+e.rank+" and "+r.rank+"."});var o=e.rank===1?e.size:e.shape[1],i=r.rank===1?r.size:r.shape[0];return E(o===i,function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+i+"."}),e.rank===1&&r.rank===1?e.as2D(1,-1).matMul(r.as2D(-1,1)).asScalar():e.rank===1&&r.rank===2?e.as2D(1,-1).matMul(r.as2D(r.shape[0],r.shape[1])).as1D():e.rank===2&&r.rank===1?e.matMul(r.as2D(-1,1)).as1D():e.matMul(r.as2D(r.shape[0],r.shape[1]))}}),Tb=D({outerProduct_:function(n,t){var e=C(n,"v1","outerProduct"),r=C(t,"v2","outerProduct");return E(e.rank===1&&r.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+e.rank+" and "+r.rank+"."}),e.as2D(-1,1).matMul(r.as2D(1,-1))}}),Po=D({reverse_:function(n,t){var e=C(n,"x","reverse");if(e.rank===0)return e.clone();var r=rt(t,e.shape);return F.runKernelFunc(function(o){return o.reverse(e,r)},{$x:e},function(o){return{$x:function(){return o.reverse(r)}}}).reshapeAs(e)}}),Nb=D({reverse1d_:function(n){var t=C(n,"x","reverse");return E(t.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+t.rank+"."}),Po(t,0)}}),Fb=D({reverse2d_:function(n,t){var e=C(n,"x","reverse");return E(e.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+e.rank+"."}),Po(e,t)}}),Pb=D({reverse3d_:function(n,t){var e=C(n,"x","reverse");return E(e.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+e.rank+"."}),Po(e,t)}}),Mb=D({reverse4d_:function(n,t){var e=C(n,"x","reverse");return E(e.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+e.rank+"."}),Po(e,t)}});function Yh(n,t,e,r,o,i){var a=C(n,"x","maxPool"),s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),E(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),E(Dt(e,r),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+r+"'"}),i!=null&&E($e(o),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var c=Co(s.shape,t,e,r,o,i);if(c.filterWidth===1&&c.filterHeight===1&&at(c.inShape,c.outShape))return a.clone();var l=[s],f=F.runKernelFunc(function(h,d){var p=h.maxPool(s,c);return d([s,p]),p},{x:s},function(h,d){var p=d[0],v=d[1];return{x:function(){return function(m,g,x,b,y,w,_,k){var S=C(m,"dy","maxPoolBackprop"),R=C(g,"input","maxPoolBackprop"),I=C(x,"output","maxPoolBackprop");E(R.rank===S.rank,function(){return"Rank of input ("+R.rank+") does not match rank of dy ("+S.rank+")"}),E(Dt(y,w),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),E(S.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+S.rank+"."}),E(R.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+R.rank+"."});var P=Co(R.shape,b,y,w,_,k);return F.runKernelFunc(function(N){return N.maxPoolBackprop(S,R,I,P)},{$dy:S,$input:R})}(h,p,v,t,e,r,o)}}},"MaxPool",c,l);return u?f.as3D(f.shape[1],f.shape[2],f.shape[3]):f}function Jh(n,t,e,r,o,i){var a=C(n,"x","avgPool","float32");E(Dt(e,r),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+r+"'"});var s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),E(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),i!=null&&E($e(o),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var c=Co(s.shape,t,e,r,o,i);if(c.filterWidth===1&&c.filterHeight===1&&at(c.inShape,c.outShape))return a.clone();var l=F.runKernelFunc(function(f){return f.avgPool(s,c)},{x:s},function(f){return{x:function(){return function(h,d,p,v,m,g){var x=C(h,"dy","avgPoolBackprop"),b=C(d,"input","avgPoolBackprop");E(b.rank===x.rank,function(){return"Rank of input ("+b.rank+") does not match rank of dy ("+x.rank+")"}),E(Dt(v,m),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+m+"'"});var y=b,w=x,_=!1;b.rank===3&&(_=!0,y=b.as4D(1,b.shape[0],b.shape[1],b.shape[2]),w=x.as4D(1,x.shape[0],x.shape[1],x.shape[2])),E(w.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+w.rank+"."}),E(y.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+y.rank+"."});var k=Co(y.shape,p,v,m,g),S=F.runKernelFunc(function(R){return R.avgPoolBackprop(w,y,k)},{dy4D:w,input4D:y});return _?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}(f,s,t,e,r,o)}}},"AvgPool",c);return l=l.cast(a.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var it=D({maxPool_:function(n,t,e,r,o){return Yh(n,t,e,1,r,o)}}),Mo=D({avgPool_:function(n,t,e,r,o){return Jh(n,t,e,1,r,o)}}),Ob=D({pool_:function(n,t,e,r,o,i){o==null&&(o=[1,1]),i==null&&(i=1),r===0&&(r="valid");var a=C(n,"x","maxPool"),s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),E(Dt(i,o),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+i+" and dilations '"+o+"'"});var c,l=Co(s.shape,t,i,o,r),f=[l.dilationHeight,l.dilationWidth];c=r==="same"?function(y,w){var _=y.map(function(R,I){return R+(R-1)*(w[I]-1)}).map(function(R){return R-1}),k=_.map(function(R){return Math.floor(R/2)}),S=_.map(function(R,I){return R-k[I]});return _.map(function(R,I){return[k[I],S[I]]})}([l.filterHeight,l.filterWidth],f):[[0,0],[0,0]];var h=f[0]===1&&f[1]===1,d=function(y,w,_){var k=_.map(function(U){return U[0]}),S=_.map(function(U){return U[1]}),R=y.concat(k,S),I=w.map(function(U,z){return(U-R[z]%U)%U}),P=S.map(function(U,z){return U+I[z]}),N=w.map(function(U,z){return[k[z],P[z]]}),V=w.map(function(U,z){return[0,I[z]]});return[N,V]}([l.inHeight,l.inWidth],f,c),p=d[0],v=d[1],m=h?r:"valid",g=h?s:rh(s,f,p),x=(e==="avg"?function(){return Jh(g,t,i,1,m)}:function(){return Yh(g,t,i,1,m)})(),b=h?x:eh(x,f,v);return u?b.as3D(b.shape[1],b.shape[2],b.shape[3]):b}}),Bb=D({maxPool3d_:function(n,t,e,r,o,i,a){i===void 0&&(i="NDHWC");var s=C(n,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),a==null&&(a=[1,1,1]),E(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(i==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+i}),E(Dt(e,a),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),o!=null&&E($e(r),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."});var l=Di(u.shape,t,e,a,r,o,i),f=F.runKernelFunc(function(h,d){var p=h.maxPool3d(u,l);return d([u,p]),p},{x:u},function(h,d){var p=d[0],v=d[1];return{x:function(){return function(m,g,x,b,y,w,_,k){var S=C(m,"dy","maxPool3dBackprop"),R=C(g,"input","maxPool3dBackprop"),I=C(x,"output","maxPool3dBackprop"),P=S,N=R,V=I,U=!1;R.rank===4&&(U=!0,P=S.as5D(1,S.shape[0],S.shape[1],S.shape[2],S.shape[3]),N=R.as5D(1,R.shape[0],R.shape[1],R.shape[2],R.shape[3]),V=I.as5D(1,I.shape[0],I.shape[1],I.shape[2],I.shape[3])),E(P.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+P.rank+"."}),E(N.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+N.rank+"."}),E(V.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+V.rank+"."}),w==null&&(w=[1,1,1]),E(Dt(y,w),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+y+" and dilations '"+w+"'"}),k!=null&&E($e(_),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+k+" but got pad "+_+"."});var z=Di(N.shape,b,y,w,_,k),j=F.runKernelFunc(function(W){return W.maxPool3dBackprop(P,N,V,z)},{dy5D:P,input5D:N});return U?j.as4D(j.shape[1],j.shape[2],j.shape[3],j.shape[4]):j}(h,p,v,t,e,a,r,o)}}});return c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),Lb=D({avgPool3d_:function(n,t,e,r,o,i,a){i===void 0&&(i="NDHWC");var s=C(n,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),a==null&&(a=[1,1,1]),E(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(i==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+i}),E(Dt(e,a),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),o!=null&&E($e(r),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+r+"."});var l=Di(u.shape,t,e,a,r,o,i),f=F.runKernelFunc(function(h){return h.avgPool3d(u,l)},{x:u},function(h){return{x:function(){return function(d,p,v,m,g,x,b){var y=C(d,"dy","avgPool3dBackprop"),w=C(p,"input","avgPool3dBackprop"),_=y,k=w,S=!1;w.rank===4&&(S=!0,_=y.as5D(1,y.shape[0],y.shape[1],y.shape[2],y.shape[3]),k=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3])),E(_.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+_.rank+"."}),E(k.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+k.rank+"."}),g==null&&(g=[1,1,1]),E(Dt(m,g),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+m+" and dilations '"+g+"'"}),b!=null&&E($e(x),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+b+" but got pad "+x+"."});var R=Di(k.shape,v,m,g,x,b),I=F.runKernelFunc(function(P){return P.avgPool3dBackprop(_,k,R)},{dy5D:_,input5D:k});return S?I.as4D(I.shape[1],I.shape[2],I.shape[3],I.shape[4]):I}(h,u,t,e,a,r,o)}}});return f=f.cast(u.dtype),c?f.as4D(f.shape[1],f.shape[2],f.shape[3],f.shape[4]):f}}),dn=D({slice_:function(n,t,e){var r,o,i=C(n,"x","slice");if(i.rank===0)throw new Error("Slicing scalar is not possible");(r=typeof t=="number"?[t].concat(new Array(i.rank-1).fill(0)):t.length<i.rank?t.concat(new Array(i.rank-t.length).fill(0)):t.slice()).forEach(function(u){E(u!==-1,function(){return"slice() does not support negative begin indexing."})}),o=(o=e==null?new Array(i.rank).fill(-1):typeof e=="number"?[e].concat(new Array(i.rank-1).fill(-1)):e.length<i.rank?e.concat(new Array(i.rank-e.length).fill(-1)):e).map(function(u,c){return u>=0?u:(E(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."}),i.shape[c]-r[c])}),h0(i,r,o);var a=i.shape,s={begin:r,size:o};return F.runKernelFunc(function(u){return u.slice(i,r,o)},{x:i},function(u){for(var c=[],l=0;l<u.rank;l++)c.push([r[l],a[l]-r[l]-o[l]]);return{x:function(){return u.pad(c)}}},"Slice",s)}}),Wb=D({slice1d_:function(n,t,e){var r=C(n,"x","slice1d");return E(r.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+r.rank+" tensor"}),dn(r,[t],[e])}}),Ub=D({slice2d_:function(n,t,e){var r=C(n,"x","slice2d");return E(r.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+r.rank+" tensor"}),dn(r,t,e)}}),Qh=D({slice3d_:function(n,t,e){var r=C(n,"x","slice3d");return E(r.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+r.rank+" tensor"}),dn(r,t,e)}}),Vb=D({slice4d_:function(n,t,e){var r=C(n,"x","slice4d");return E(r.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+r.rank+" tensor"}),dn(r,t,e)}});function Zh(n,t,e,r,o){return t.rank<e.rank&&(t=t.reshape(At(t.shape,r))),n.rank<e.rank&&(n=n.reshape(At(n.shape,r))),{x:function(){var i=n.mul(e.equal(t).cast(n.dtype));return o==null?i:i.transpose(o)}}}var zb=D({all_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","all","bool"),o=rt(t,r.shape),i=o,a=vn(i,r.rank);a!=null&&(r=r.transpose(a),i=mn(i.length,r.rank));var s=F.runKernelFunc(function(c){return c.all(r,i)},{$x:r});if(e){var u=At(s.shape,o);return s.reshape(u)}return s}}),Hb=D({any_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","any","bool"),o=rt(t,r.shape),i=o,a=vn(i,r.rank);a!=null&&(r=r.transpose(a),i=mn(i.length,r.rank));var s=F.runKernelFunc(function(c){return c.any(r,i)},{$x:r});if(e){var u=At(s.shape,o);return s.reshape(u)}return s}}),Gb=D({argMax_:function(n,t){t===void 0&&(t=0);var e=C(n,"x","argMax");t==null&&(t=0);var r=rt(t,e.shape),o=vn(r,e.rank);o!=null&&(e=e.transpose(o),r=mn(r.length,e.rank));var i={axis:r[0]},a=[e];return F.runKernelFunc(function(s,u){var c=s.argMax(e,r[0]);return u([e]),c},{x:e},function(s,u){var c=u[0];return{x:function(){return Fe(c)}}},"ArgMax",i,a)}}),jb=D({argMin_:function(n,t){t===void 0&&(t=0);var e=C(n,"x","argMin");t==null&&(t=0);var r=rt(t,e.shape),o=vn(r,e.rank);return o!=null&&(e=e.transpose(o),r=mn(r.length,e.rank)),F.runKernelFunc(function(i,a){var s=i.argMin(e,r[0]);return a([e]),s},{$x:e},function(i,a){var s=a[0];return{$x:function(){return Fe(s)}}})}}),qb=D({logSumExp_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","logSumExp"),o=rt(t,r.shape),i=r.max(o,!0),a=r.sub(i).exp().sum(o).log(),s=i.reshape(a.shape).add(a);if(e){var u=At(s.shape,o);return s.reshape(u)}return s}}),ia=D({max_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","max"),o=r,i=rt(t,r.shape),a=i,s=vn(a,r.rank);s!=null&&(r=r.transpose(s),a=mn(a.length,r.rank));var u=[r],c=F.runKernelFunc(function(f,h){var d=f.max(r,a);return h([o,d]),d},{x:r},function(f,h){return Zh(f,h[1],h[0],i,s)},"Max",{axes:a},u,[!0]);if(e){var l=At(c.shape,i);c=c.reshape(l)}return c}}),Kb=D({mean_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","mean"),o=rt(t,r.shape),i=ce(dt(r.shape,o)[1]);return ea(function(a){var s=re(i);return{value:(s.dtype===a.dtype?a:a.cast(s.dtype)).div(s).sum(t,e),gradFunc:function(u){var c=a.shape.slice();return o.forEach(function(l){c[l]=1}),u.reshape(c).mul(Yr(a.shape,"float32")).div(i)}}})(r)}}),Xb=D({min_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","min"),o=r,i=rt(t,r.shape),a=i,s=vn(a,r.rank);s!=null&&(r=r.transpose(s),a=mn(a.length,r.rank));var u=[r],c=F.runKernelFunc(function(f,h){var d=f.min(r,a);return h([o,d]),d},{x:r},function(f,h){return Zh(f,h[1],h[0],i,s)},"Min",{axes:a},u,[!0]);if(e){var l=At(c.shape,i);c=c.reshape(l)}return c}}),$b=D({moments_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=rt(t,(n=C(n,"x","moments")).shape),o=n.mean(r,e),i=o.shape;e||(i=At(o.shape,r));var a=n.toFloat().sub(o.reshape(i)).square();return{mean:o,variance:a.mean(r,e)}}}),ed=D({sum_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","sum");r.dtype==="bool"&&(r=r.toInt());var o=rt(t,r.shape);return ea(function(i){var a=vn(o,i.rank),s=o,u=i;a!=null&&(u=i.transpose(a),s=mn(s.length,i.rank));var c=function(d){var p=i.shape.slice();return o.forEach(function(v){p[v]=1}),d.reshape(p).mul(Yr(i.shape,"float32"))},l={axes:s},f=F.runKernelFunc(function(d){return d.sum(u,s)},{x:u},function(d){return{x:function(){return c(d)}}},"Sum",l);if(e){var h=At(f.shape,o);f=f.reshape(h)}return{value:f,gradFunc:c}})(r)}}),Yb=D({prod_:function(n,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var r=C(n,"x","prod");r.dtype==="bool"&&(r=r.toInt());var o=rt(t,r.shape),i=vn(o,r.rank),a=o,s=r;i!=null&&(s=r.transpose(i),a=mn(a.length,r.rank));var u=F.runKernelFunc(function(l){return l.prod(s,a)},{permutedX:s});if(e){var c=At(u.shape,o);u=u.reshape(c)}return u}}),td=D({elu_:function(n){var t=C(n,"x","elu");return F.runKernelFunc(function(e,r){var o=e.elu(t);return r([o]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){return F.runKernelFunc(function(i){return i.eluDer(e,o)},{dy:e,y:o})}}})}}),Jb=D({leakyRelu_:function(n,t){t===void 0&&(t=.2);var e=C(n,"x","leakyRelu");return hu(re(t).mul(e),e)}}),nd=D({prelu_:function(n,t){var e=C(n,"x","prelu"),r=C(t,"alpha","prelu");return F.runKernelFunc(function(o,i){var a=o.prelu(e,r);return i([e,r]),a},{x:e,alpha:r},function(o,i){var a=i[0],s=i[1],u=a.greater(0);return{x:function(){return pr(u,o,o.mul(s))},alpha:function(){var c=pr(u,Fe(o),o.mul(a)),l=tt(s.shape,o.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}},"Prelu")}}),qe=D({relu_:function(n){var t=C(n,"x","relu");return t.dtype==="bool"?t.toInt():F.runKernelFunc(function(e,r){var o=e.relu(t);return r([t]),o},{x:t},function(e,r){var o=r[0];return{x:function(){return e.mulStrict(o.step().toFloat())}}},"Relu")}}),rd=D({relu6_:function(n){var t=C(n,"x","relu6");return t.dtype==="bool"?t.toInt():F.runKernelFunc(function(e,r){var o=e.relu6(t);return r([t]),o},{x:t},function(e,r){var o=r[0],i=o.lessEqual(6).mul(o.step());return{x:function(){return e.mulStrict(i.toFloat())}}},"Relu6")}}),Qb=D({selu_:function(n){var t=C(n,"x","selu");return F.runKernelFunc(function(e,r){var o=e.selu(t);return r([t]),o},{$x:t},function(e,r){var o=r[0];return{$x:function(){var i=o.greater(re(0)),a=re(cu),s=re(lu),u=e.mul(s),c=e.mul(a).mul(o.toFloat().exp());return pr(i,u,c)}}})}}),Kn=D({transpose_:function(n,t){var e=C(n,"x","transpose");if(t==null&&(t=e.shape.map(function(o,i){return i}).reverse()),E(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of perm "+t+"."}),t.forEach(function(o){E(o>=0&&o<e.rank,function(){return"All entries in 'perm' must be between 0 and "+(e.rank-1)+" but got "+t})}),e.rank<=1)return e.clone();var r={perm:t};return F.runKernelFunc(function(o){return o.transpose(e,t)},{x:e},function(o){var i=Zs(t);return{x:function(){return o.transpose(i)}}},"Transpose",r)}}),Zb=D({localResponseNormalization_:function(n,t,e,r,o){t===void 0&&(t=5),e===void 0&&(e=1),r===void 0&&(r=1),o===void 0&&(o=.5);var i=C(n,"x","localResponseNormalization");E(i.rank===4||i.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+i.rank+"."}),E($e(t),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+t+"."});var a=i,s=!1;i.rank===3&&(s=!0,a=i.as4D(1,i.shape[0],i.shape[1],i.shape[2]));var u=F.runKernelFunc(function(c,l){var f=c.localResponseNormalization4D(a,t,e,r,o);return l([a,f]),f},{x4D:a},function(c,l){var f=l[0],h=l[1];return{x4D:function(){return F.runKernelFunc(function(d){return d.LRNGrad(c,f,h,t,e,r,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),od=D({norm_:function(n,t,e,r){t===void 0&&(t="euclidean"),e===void 0&&(e=null),r===void 0&&(r=!1);var o=function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(re(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)}(n=C(n,"x","norm"),t,e),i=o.shape;if(r){var a=rt(e,n.shape);i=At(o.shape,a)}return o.reshape(i)}}),e1=D({basicLSTMCell_:function(n,t,e,r,o,i){var a=C(n,"forgetBias","basicLSTMCell"),s=C(t,"lstmKernel","basicLSTMCell"),u=C(e,"lstmBias","basicLSTMCell"),c=C(r,"data","basicLSTMCell"),l=C(o,"c","basicLSTMCell"),f=C(i,"h","basicLSTMCell"),h=c.concat(f,1).matMul(s).add(u),d=h.shape[0],p=h.shape[1]/4,v=[d,p],m=h.slice([0,0],v),g=h.slice([0,p],v),x=h.slice([0,2*p],v),b=h.slice([0,3*p],v),y=m.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(a.add(x).sigmoid())),w=y.tanh().mulStrict(b.sigmoid());return[y,w]}}),t1=D({multiRNNCell_:function(n,t,e,r){for(var o=C(t,"data","multiRNNCell"),i=Ei(e,"c","multiRNNCell"),a=Ei(r,"h","multiRNNCell"),s=o,u=[],c=0;c<n.length;c++){var l=n[c](s,i[c],a[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var f=[],h=[];for(c=0;c<u.length;c+=2)f.push(u[c]),h.push(u[c+1]);return[f,h]}}),n1=D({movingAverage_:function(n,t,e,r,o){o===void 0&&(o=!0);var i=C(n,"v","movingAverage"),a=C(t,"x","movingAverage"),s=C(e,"decay","movingAverage");Zm(i,a),E(at(i.shape,a.shape),function(){return"Shape mismatch in v and x"});var u=re(1),c=u.sub(s),l=a.sub(i).mul(c);if(o){E(r!=null,function(){return"When using zeroDebias: true, step is required."});var f=C(r,"step","movingAverage");l=l.div(u.sub(Pi(s,f)))}return i.add(l)}}),r1=D({stridedSlice_:function(n,t,e,r,o,i,a,s,u){if(o===void 0&&(o=0),i===void 0&&(i=0),a===void 0&&(a=0),s===void 0&&(s=0),u===void 0&&(u=0),r==null&&(r=new Array(t.length)),a!==0)throw new Error("ellipsis mask is not yet supported");var c=C(n,"x","stridedSlice"),l=Kc(s),f=c.shape.slice();l.forEach(function(m){t[m]=0,e[m]=1,f.splice(m,0,1)}),c=c.reshape(f);for(var h=0;h<c.rank;h++)t[h]=d0(o,t,r,c.shape,h),e[h]=p0(i,e,r,c.shape,h),r[h]=r[h]||1;var d=Kc(u);d.forEach(function(m){e[m]=t[m]+1,r[m]=1});var p=ru(t,e,r),v=p.filter(function(m,g){return d.indexOf(g)===-1});return r.every(function(m){return m===1})?dn(c,t,p).reshape(v):F.runKernelFunc(function(m){return m.stridedSlice(c,t,e,r)},{$x:c}).reshape(v)}}),o1=D({topk_:function(n,t,e){t===void 0&&(t=1),e===void 0&&(e=!0);var r=C(n,"x","topk");if(r.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=r.shape[r.shape.length-1];if(t>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+t);var i=F.runKernelFunc(function(a){return a.topk(r,t,e)},{$x:r});return{values:i[0],indices:i[1]}}}),i1=D({scatterND_:function(n,t,e){var r=C(n,"indices","scatterND","int32"),o=C(t,"updates","scatterND");return f0(o,r,e),F.runKernelFunc(function(i){return i.scatterND(r,o,e)},{indices:r,updates:o},null,"ScatterNd",{shape:e})}}),mu=D({fft_:function(n){E(n.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+n.dtype+"."});var t=n.shape[n.shape.length-1],e=n.size/t,r=n.as2D(e,t);return F.runKernelFunc(function(o){return o.fft(r)},{input:n}).reshape(n.shape)}}),Mi=D({ifft_:function(n){E(n.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+n.dtype+"."});var t=n.shape[n.shape.length-1],e=n.size/t,r=n.as2D(e,t);return F.runKernelFunc(function(o){return o.ifft(r)},{input:n}).reshape(n.shape)}}),gu=D({rfft_:function(n,t){E(n.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+n.dtype});var e,r=n.shape[n.shape.length-1],o=n.size/r;if(t!=null&&t<r){var i=n.shape.map(function(g){return 0}),a=n.shape.map(function(g){return g});a[n.shape.length-1]=t,e=n.slice(i,a),r=t}else if(t!=null&&t>r){var s=n.shape.map(function(g){return g});s[n.shape.length-1]=t-r,e=n.concat(ze(s),n.shape.length-1),r=t}else e=n;var u=e.zerosLike(),c=lt(e,u).as2D(o,r),l=mu(c),f=Math.floor(r/2)+1,h=Vt(l),d=un(l),p=h.split([f,r-f],h.shape.length-1),v=d.split([f,r-f],d.shape.length-1),m=e.shape.slice();return m[e.shape.length-1]=f,lt(p[0],v[0]).reshape(m)}}),id=D({irfft_:function(n){var t=n.shape[n.shape.length-1],e=n.size/t;if(t<=2){var r=n.as2D(e,t),o=Mi(r);return Vt(o)}var i=[e,2*(t-1)],a=Vt(n).as2D(e,t),s=un(n).as2D(e,t),u=a.slice([0,1],[e,t-2]).reverse(1),c=s.slice([0,1],[e,t-2]).reverse(1).mul(re(-1)),l=a.concat(u,1),f=s.concat(c,1);return r=lt(l,f).as2D(i[0],i[1]),o=Mi(r),Vt(o)}}),a1=Object.freeze({fft:mu,ifft:Mi,rfft:gu,irfft:id}),s1=D({sparseToDense_:function(n,t,e,r){r===void 0&&(r=0);var o=C(n,"sparseIndices","sparseToDense","int32"),i=C(t,"sparseValues","sparseToDense"),a=C(r,"defaultValue","sparseToDense",i.dtype);return function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var f=s.rank>0?s.shape[0]:1,h=s.rank>1?s.shape[1]:1;if(c.length!==h)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+h+".");var d=u.size;if(u.rank!==0&&(u.rank!==1||d!==f))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+f+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,i,e,a),F.runKernelFunc(function(s){return s.sparseToDense(o,i,e,a)},{$sparseIndices:o,$sparseValues:i,$defaultValue:a})}}),u1=D({gatherND_:function(n,t){var e=C(t,"indices","gatherND","int32"),r=C(n,"x","gatherND");return F.runKernelFunc(function(o){return o.gatherND(r,e)},{x:r,indices:e},null,"GatherNd")}}),c1=D({diag_:function(n){var t=C(n,"x","diag").flatten(),e=n.shape.concat(n.shape);return F.runKernelFunc(function(r){return r.diag(t)},{$x:t}).reshape(e)}}),l1=D({dropout_:function(n,t,e,r){var o=C(n,"x","dropout");if(E(o.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),E(t>=0&&t<1,function(){return"rate must be a float in the range [0, 1), but got "+t+"."}),t===0)return n instanceof je?o.clone():o;var i=function(u,c){if(c==null)return u.shape.slice();if(at(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],f=0;f<u.shape.length;f++)c[f]==null&&u.shape[f]!=null?l.push(u.shape[f]):l.push(c[f]);return l}return c}(o,e),a=1-t,s=nh(i,0,1,"float32",r).add(a).floor().div(a);return o.mul(s)}});function ad(n,t,e){for(var r=1-n%2,o=new Float32Array(n),i=0;i<n;++i){var a=2*Math.PI*i/(n+r-1);o[i]=t-e*Math.cos(a)}return Je(o,"float32")}var yu=D({hannWindow_:function(n){return ad(n,.5,.5)}}),sd=D({hammingWindow_:function(n){return ad(n,.54,.46)}}),xu=D({frame_:function(n,t,e,r,o){r===void 0&&(r=!1),o===void 0&&(o=0);for(var i=0,a=[];i+t<=n.size;)a.push(dn(n,i,t)),i+=e;if(r)for(;i<n.size;){var s=i+t-n.size,u=Ze([dn(n,i,t-s),hn([s],o)]);a.push(u),i+=e}return a.length===0?Hn([],[0,t]):Ze(a).as2D(a.length,t)}}),ud=D({stft_:function(n,t,e,r,o){var i;o===void 0&&(o=yu),r==null&&(i=t,r=Math.floor(Math.pow(2,Math.ceil(Math.log(i)/Math.log(2)))));for(var a=xu(n,t,e),s=yt(a,o(t)),u=[],c=0;c<a.shape[0];c++)u.push(gu(s.slice([c,0],[1,t]),r));return Ze(u)}}),f1=Object.freeze({hannWindow:yu,hammingWindow:sd,frame:xu,stft:ud}),gt,h1=function(n,t,e){return e===void 0&&(e=1),se(this,void 0,void 0,function(){var r,o,i,a,s,u,c,l,f,h,d,p,v,m;return ue(this,function(g){switch(g.label){case 0:return r=C(n,"predictions","inTopK"),o=C(t,"targets","inTopK"),E(r.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+r.rank}),E(r.rank-1===o.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+r.rank+" and targets rank "+o.rank}),Le(r.shape.slice(0,r.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),i=r.shape[r.shape.length-1],E(e>0&&e<=i,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+i+"), but got "+e}),[4,r.data()];case 1:return a=g.sent(),[4,o.data()];case 2:for(s=g.sent(),u=[a.length/i,i],l=u[1],f=bo("bool",c=u[0]),h=0;h<c;h++){for(d=h*l,p=a.subarray(d,d+l),v=[],m=0;m<p.length;m++)v.push({value:p[m],index:m});for(v.sort(function(x,b){return b.value-x.value}),f[h]=0,m=0;m<e;m++)if(v[m].index===s[h]){f[h]=1;break}}return n!==r&&r.dispose(),t!==o&&o.dispose(),[2,ht(f,o.shape,"bool")]}})})};(function(n){n[n.NONE=0]="NONE",n[n.MEAN=1]="MEAN",n[n.SUM=2]="SUM",n[n.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(gt||(gt={}));var d1=D({absoluteDifference_:function(n,t,e,r){r===void 0&&(r=gt.SUM_BY_NONZERO_WEIGHTS);var o=C(n,"labels","absoluteDifference"),i=C(t,"predictions","absoluteDifference"),a=null;e!=null&&(a=C(e,"weights","absoluteDifference")),Le(o.shape,i.shape,"Error in absoluteDifference: ");var s=o.sub(i).abs();return kn(s,a,r)}}),kn=D({computeWeightedLoss_:function(n,t,e){e===void 0&&(e=gt.SUM_BY_NONZERO_WEIGHTS);var r=C(n,"losses","computeWeightedLoss"),o=null;t!=null&&(o=C(t,"weights","computeWeightedLoss"));var i=o==null?r:r.mul(o);if(e===gt.NONE)return i;if(e===gt.SUM)return i.sum();if(e===gt.MEAN){if(o==null)return i.mean();var a=r.size/o.size,s=i.sum().div(o.sum());return a>1?s.div(re(a)):s}if(e===gt.SUM_BY_NONZERO_WEIGHTS){if(o==null)return i.sum().div(re(r.size));var u=o.mul(Yr(r.shape)).notEqual(re(0)).sum().toFloat();return i.sum().div(u)}throw Error("Unknown reduction: "+e)}}),p1=D({cosineDistance_:function(n,t,e,r,o){o===void 0&&(o=gt.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"labels","cosineDistance"),a=C(t,"predictions","cosineDistance"),s=null;r!=null&&(s=C(r,"weights","cosineDistance")),Le(i.shape,a.shape,"Error in cosineDistance: ");var u=re(1).sub(i.mul(a).sum(e,!0));return kn(u,s,o)}}),v1=D({hingeLoss_:function(n,t,e,r){r===void 0&&(r=gt.SUM_BY_NONZERO_WEIGHTS);var o=C(n,"labels","hingeLoss"),i=C(t,"predictions","hingeLoss"),a=null;e!=null&&(a=C(e,"weights","hingeLoss")),Le(o.shape,i.shape,"Error in hingeLoss: ");var s=re(1);o=re(2).mul(o).sub(s);var u=s.sub(o.mul(i)).relu();return kn(u,a,r)}}),m1=D({huberLoss_:function(n,t,e,r,o){r===void 0&&(r=1),o===void 0&&(o=gt.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"labels","huberLoss"),a=C(t,"predictions","huberLoss"),s=null;e!=null&&(s=C(e,"weights","huberLoss")),Le(i.shape,a.shape,"Error in huberLoss: ");var u=re(r),c=a.sub(i).abs(),l=Vh(c,u),f=c.sub(l),h=re(.5).mul(l.square()).add(u.mul(f));return kn(h,s,o)}}),g1=D({logLoss_:function(n,t,e,r,o){r===void 0&&(r=1e-7),o===void 0&&(o=gt.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"labels","logLoss"),a=C(t,"predictions","logLoss"),s=null;e!=null&&(s=C(e,"weights","logLoss")),Le(i.shape,a.shape,"Error in logLoss: ");var u=re(1),c=re(r),l=i.mul(a.add(c).log()).neg().sub(u.sub(i).mul(u.sub(a).add(c).log()));return kn(l,s,o)}}),y1=D({meanSquaredError_:function(n,t,e,r){r===void 0&&(r=gt.SUM_BY_NONZERO_WEIGHTS);var o=C(n,"labels","meanSquaredError"),i=C(t,"predictions","meanSquaredError"),a=null;e!=null&&(a=C(e,"weights","meanSquaredError")),Le(o.shape,i.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(i);return kn(s,a,r)}}),x1=D({sigmoidCrossEntropy_:function(n,t,e,r,o){r===void 0&&(r=0),o===void 0&&(o=gt.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"multiClassLabels","sigmoidCrossEntropy"),a=C(t,"logits","sigmoidCrossEntropy"),s=null;if(e!=null&&(s=C(e,"weights","sigmoidCrossEntropy")),Le(i.shape,a.shape,"Error in sigmoidCrossEntropy: "),r>0){var u=re(r),c=re(1),l=re(.5);i=i.mul(c.sub(u)).add(l.mul(u))}var f=function(h,d){var p=C(h,"labels","sigmoidCrossEntropyWithLogits"),v=C(d,"logits","sigmoidCrossEntropyWithLogits");Le(p.shape,v.shape,"Error in sigmoidCrossEntropyWithLogits: ");var m=v.relu(),g=v.mul(p),x=v.abs().neg().exp().log1p();return m.sub(g).add(x)}(i,a);return kn(f,s,o)}}),b1=D({softmaxCrossEntropy_:function(n,t,e,r,o){r===void 0&&(r=0),o===void 0&&(o=gt.SUM_BY_NONZERO_WEIGHTS);var i=C(n,"onehotLabels","softmaxCrossEntropy"),a=C(t,"logits","softmaxCrossEntropy"),s=null;if(e!=null&&(s=C(e,"weights","softmaxCrossEntropy")),Le(i.shape,a.shape,"Error in softmaxCrossEntropy: "),r>0){var u=re(r),c=re(1),l=re(i.shape[1]);i=i.mul(c.sub(u)).add(u.div(l))}var f=function(h,d,p){if(p===void 0&&(p=-1),p===-1&&(p=d.rank-1),p!==d.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+d.rank+" and dim was "+p);return ea(function(v,m,g){var x=m.logSumExp([p],!0),b=m.toFloat().sub(x);return g([v,b]),{value:b.mul(v).neg().sum([p]),gradFunc:function(y,w){var _=w[0],k=w[1],S=At(y.shape,[p]);return[y.reshape(S).mul(_.toFloat().sub(k.exp())),y.reshape(S).mul(k.exp().sub(_.toFloat()))]}}})(h,d)}(i,a);return kn(f,s,o)}}),w1=Object.freeze({get Reduction(){return gt},absoluteDifference:d1,computeWeightedLoss:kn,cosineDistance:p1,hingeLoss:v1,huberLoss:m1,logLoss:g1,meanSquaredError:y1,sigmoidCrossEntropy:x1,softmaxCrossEntropy:b1});function vl(n,t){return t===void 0&&(t=!1),F.tidy(function(){if(n.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+n.shape.length+"D Tensor.");for(var e=n.shape[0],r=n.shape[1],o=th(e),i=n.clone(),a=Hn([[1]],[1,1]),s=a.clone(),u=e>=r?r:e,c=function(f){var h,d=i,p=s,v=o;h=F.tidy(function(){var m=i.slice([f,f],[e-f,1]),g=m.norm(),x=i.slice([f,f],[1,1]),b=Hn([[-1]]).where(x.greater(0),Hn([[1]])),y=x.sub(b.mul(g)),w=m.div(y);s=w.shape[0]===1?a.clone():a.concat(w.slice([1,0],[w.shape[0]-1,w.shape[1]]),0);var _=b.matMul(y).div(g).neg(),k=i.slice([f,0],[e-f,r]),S=_.mul(s);if(f===0)i=k.sub(S.matMul(s.transpose().matMul(k)));else{var R=k.sub(S.matMul(s.transpose().matMul(k)));i=i.slice([0,0],[f,r]).concat(R,0)}var I=o.slice([0,f],[e,o.shape[1]-f]);if(f===0)o=I.sub(I.matMul(s).matMul(S.transpose()));else{var P=I.sub(I.matMul(s).matMul(S.transpose()));o=o.slice([0,0],[e,f]).concat(P,1)}return[s,i,o]}),s=h[0],i=h[1],o=h[2],Rt([d,p,v])},l=0;l<u;++l)c(l);return!t&&e>r&&(o=o.slice([0,0],[e,r]),i=i.slice([0,0],[r,r])),[o,i]})}var _1=D({bandPart_:function(n,t,e){if(t%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+t+".");if(e%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+e+".");var r=C(n,"a","bandPart");if(r.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+r.rank+".");var o=r.shape,i=r.shape.slice(-2),a=i[0],s=i[1];if(!(t<=a))throw new Error("bandPart(): numLower ("+t+") must not be greater than the number of rows ("+a+").");if(!(e<=s))throw new Error("bandPart(): numUpper ("+e+") must not be greater than the number of columns ("+s+").");t<0&&(t=a),e<0&&(e=s);var u=Ii(0,a,1,"int32").reshape([-1,1]),c=Ii(0,s,1,"int32"),l=nt(u,c),f=na(l.lessEqual(re(+t,"int32")),l.greaterEqual(re(-e,"int32"))),h=ze([a,s],r.dtype);return Wt(et(r.reshape([-1,a,s])).map(function(d){return pr(f,d,h)})).reshape(o)}}),C1=D({gramSchmidt_:function(n){var t;if(Array.isArray(n)){t=!1,E(n!=null&&n.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var e=n[0].shape[0],r=function(u){E(n[u].shape[0]===e,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+n[u].shape[0]+" vs. "+e+")"})},o=1;o<n.length;++o)r(o)}else t=!0,n=tu(n,n.shape[0],0).map(function(u){return oh(u,[0])});E(n.length<=n[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+n.length+") exceeds number of dimensions ("+n[0].shape[0]+")."});var i=[],a=n,s=function(u){i.push(F.tidy(function(){var c=a[u];if(u>0)for(var l=0;l<u;++l){var f=ed(i[l].mulStrict(c)).mul(i[l]);c=c.sub(f)}return c.div(od(c,"euclidean"))}))};for(o=0;o<n.length;++o)s(o);return t?Wt(i,0):i}}),E1=D({qr_:function(n,t){if(t===void 0&&(t=!1),n.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+n.rank);if(n.rank===2)return vl(n,t);var e=n.shape.slice(0,n.shape.length-2).reduce(function(a,s){return a*s}),r=et(n.reshape([e,n.shape[n.shape.length-2],n.shape[n.shape.length-1]]),0),o=[],i=[];return r.forEach(function(a){var s=vl(a,t),u=s[0],c=s[1];o.push(u),i.push(c)}),[Wt(o,0).reshape(n.shape),Wt(i,0).reshape(n.shape)]}}),I1=Object.freeze({bandPart:_1,gramSchmidt:C1,qr:E1});function aa(n,t,e,r,o,i){r==null&&(r=.5),o==null&&(o=Number.NEGATIVE_INFINITY),i==null&&(i=0);var a=n.shape[0];return e=Math.min(e,a),E(0<=r&&r<=1,function(){return"iouThreshold must be in [0, 1], but was '"+r+"'"}),E(n.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+n.rank+"'"}),E(n.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+n.shape[1]}),E(t.rank===1,function(){return"scores must be a 1D tensor"}),E(t.shape[0]===a,function(){return"scores has incompatible shape with boxes. Expected "+a+", but was "+t.shape[0]}),E(0<=i&&i<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+i+"'"}),{maxOutputSize:e,iouThreshold:r,scoreThreshold:o,softNmsSigma:i}}var R1=D({resizeBilinear_:function(n,t,e){e===void 0&&(e=!1);var r=C(n,"images","resizeBilinear");E(r.rank===3||r.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+r.rank+"."}),E(t.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+t+"."});var o=r,i=!1;r.rank===3&&(i=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=t[0],s=t[1],u=F.runKernelFunc(function(c,l){return l([o]),c.resizeBilinear(o,a,s,e)},{x:o},function(c,l){return{x:function(){return F.runKernelFunc(function(f){return f.resizeBilinearBackprop(c,l[0],e)},{})}}},"ResizeBilinear",{alignCorners:e,newHeight:a,newWidth:s});return i?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),S1=D({resizeNearestNeighbor_:function(n,t,e){e===void 0&&(e=!1);var r=C(n,"images","resizeNearestNeighbor");E(r.rank===3||r.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+r.rank+"."}),E(t.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."}),E(r.dtype==="float32"||r.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var o=r,i=!1;r.rank===3&&(i=!0,o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var a=t[0],s=t[1],u=F.runKernelFunc(function(c,l){return l([o]),c.resizeNearestNeighbor(o,a,s,e)},{batchImages:o},function(c,l){return{batchImages:function(){return F.runKernelFunc(function(f){return f.resizeNearestNeighborBackprop(c,l[0],e)},{})}}});return i?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),k1=D({nonMaxSuppression_:function(n,t,e,r,o){r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var i=C(n,"boxes","nonMaxSuppression"),a=C(t,"scores","nonMaxSuppression"),s=aa(i,a,e,r,o);e=s.maxOutputSize,r=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:e,iouThreshold:r,scoreThreshold:o};return F.runKernelFunc(function(c){return c.nonMaxSuppression(i,a,e,r,o)},{boxes:i,scores:a},null,"NonMaxSuppressionV3",u)}}),A1=function(n,t,e,r,o){return r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),se(this,void 0,void 0,function(){var i,a,s,u,c,l,f;return ue(this,function(h){switch(h.label){case 0:return i=C(n,"boxes","nonMaxSuppressionAsync"),a=C(t,"scores","nonMaxSuppressionAsync"),s=aa(i,a,e,r,o),e=s.maxOutputSize,r=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([i.data(),a.data()])];case 1:return u=h.sent(),c=u[0],l=u[1],f=iu(c,l,e,r,o),i!==n&&i.dispose(),a!==t&&a.dispose(),[2,f]}})})},D1=D({nonMaxSuppressionWithScore_:function(n,t,e,r,o,i){r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),i===void 0&&(i=0);var a=C(n,"boxes","nonMaxSuppression"),s=C(t,"scores","nonMaxSuppression"),u=aa(a,s,e,r,o,i),c={maxOutputSize:e=u.maxOutputSize,iouThreshold:r=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:i=u.softNmsSigma},l=F.runKernel("NonMaxSuppressionV5",{boxes:a,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),T1=function(n,t,e,r,o,i){return r===void 0&&(r=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),i===void 0&&(i=0),se(this,void 0,void 0,function(){var a,s,u,c,l,f,h;return ue(this,function(d){switch(d.label){case 0:return a=C(n,"boxes","nonMaxSuppressionAsync"),s=C(t,"scores","nonMaxSuppressionAsync"),u=aa(a,s,e,r,o,i),e=u.maxOutputSize,r=u.iouThreshold,o=u.scoreThreshold,i=u.softNmsSigma,[4,Promise.all([a.data(),s.data()])];case 1:return c=d.sent(),l=c[0],f=c[1],h=au(l,f,e,r,o,i),a!==n&&a.dispose(),s!==t&&s.dispose(),[2,h]}})})},N1=D({cropAndResize_:function(n,t,e,r,o,i){var a=C(n,"image","cropAndResize"),s=C(t,"boxes","cropAndResize","float32"),u=C(e,"boxInd","cropAndResize","int32");o=o||"bilinear",i=i||0;var c=s.shape[0];return E(a.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+a.rank+"."}),E(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."}),E(u.rank===1&&u.shape[0]===c,function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."}),E(r.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+r.length+"."}),E(r[0]>=1&&r[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+r}),E(o==="bilinear"||o==="nearest",function(){return"method must be bilinear or nearest, but was "+o}),F.runKernelFunc(function(l,f){return l.cropAndResize(a,s,u,r,o,i)},{images:a,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:i,cropSize:r})}}),bu=Object.freeze({resizeBilinear:R1,resizeNearestNeighbor:S1,nonMaxSuppression:k1,nonMaxSuppressionAsync:A1,nonMaxSuppressionWithScore:D1,nonMaxSuppressionWithScoreAsync:T1,cropAndResize:N1}),wu=function(n,t){return!(n>0)||t==="linear"},_u=function(n,t,e){if(e==null||e==="linear")return n;if(e==="relu")return n.mul(t.step());throw new Error("Gradient for activation "+e+" has not been implemented yet.")},Cu=function(n,t){var e=t,r=tt(n.shape,t.shape);return r.length>0&&(e=e.sum(r)),e.reshape(n.shape)},Eu=function(n,t,e){if(t==="linear")return n;if(t==="relu")return qe(n);if(t==="elu")return td(n);if(t==="relu6")return rd(n);if(t==="prelu")return nd(n,e);throw new Error("Unknown fused activation "+t+".")},F1=D({fusedMatMul_:function(n){var t,e=n.a,r=n.b,o=n.transposeA,i=o!==void 0&&o,a=n.transposeB,s=a!==void 0&&a,u=n.bias,c=n.activation,l=c===void 0?"linear":c,f=n.preluActivationWeights;if(wu(F.state.gradientDepth,l)===!1){var h=oa(e,r,i,s);return u!=null&&(h=De(h,u)),Eu(h,l,f)}var d=C(e,"a","fused matMul"),p=C(r,"b","fused matMul");t=Ke(d,p),d=t[0],p=t[1];var v=i?d.shape[d.rank-2]:d.shape[d.rank-1],m=s?p.shape[p.rank-1]:p.shape[p.rank-2],g=i?d.shape[d.rank-1]:d.shape[d.rank-2],x=s?p.shape[p.rank-2]:p.shape[p.rank-1],b=d.shape.slice(0,-2),y=p.shape.slice(0,-2),w=ce(b),_=ce(y);E(d.rank>=2&&p.rank>=2&&d.rank===p.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+d.rank+" and "+p.rank+"."}),E(at(b,y),function(){return"Error in fused matMul: outer dimensions ("+b+") and ("+y+") of Tensors with shapes "+d.shape+" and "+p.shape+" must match."}),E(v===m,function(){return"Error in fused matMul: inner shapes ("+v+") and ("+m+") of Tensors with shapes "+d.shape+" and "+p.shape+" and transposeA="+i+" and transposeB="+s+" must match."});var k,S,R=d.shape.slice(0,-2).concat([g,x]),I=i?d.as3D(w,v,g):d.as3D(w,g,v),P=s?p.as3D(_,x,m):p.as3D(_,m,x);u!=null&&Ne(R,(k=Ke(k=C(u,"bias","fused matMul"),d)[0]).shape),f!=null&&(S=C(f,"prelu weights","fused matMul"));var N={a:I,b:P};u!=null&&(N.bias=k),f!=null&&(N.preluActivationWeights=S);var V=[I,P];return F.runKernelFunc(function(U,z){var j=U.fusedBatchMatMul({a:I,b:P,transposeA:i,transposeB:s,bias:k,activation:l,preluActivationWeights:S});return z([I,P,j]),j},N,function(U,z){var j=z[0],W=z[1],B=z[2],q=_u(U,B,l),$={};return u!=null&&($={bias:function(){return Cu(k,q)}}),Object.assign(i||s?!i&&s?{a:function(){return q.matMul(W,!1,!1)},b:function(){return q.matMul(j,!0,!1)}}:i&&!s?{a:function(){return W.matMul(q,!1,!0)},b:function(){return j.matMul(q,!1,!1)}}:{a:function(){return W.matMul(q,!0,!0)},b:function(){return q.matMul(j,!0,!0)}}:{a:function(){return q.matMul(W,!1,!0)},b:function(){return j.matMul(q,!0,!1)}},$)},"_FusedMatMul",{transposeA:i,transposeB:s,activation:l},V,[!0]).reshape(R)}}),P1=D({fusedConv2d_:function(n){var t=n.x,e=n.filter,r=n.strides,o=n.pad,i=n.dataFormat,a=i===void 0?"NHWC":i,s=n.dilations,u=s===void 0?[1,1]:s,c=n.dimRoundingMode,l=n.bias,f=n.activation,h=f===void 0?"linear":f,d=n.preluActivationWeights;if(h=h||"linear",wu(F.state.gradientDepth,h)===!1){var p=Gt(t,e,r,o,a,u,c);return l!=null&&(p=De(p,l)),Eu(p,h,d)}var v=C(t,"x","conv2d"),m=C(e,"filter","conv2d"),g=v,x=!1;v.rank===3&&(x=!0,g=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),E(g.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+g.rank+"."}),E(m.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+m.rank+"."}),c!=null&&E($e(o),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."}),E(g.shape[3]===m.shape[2],function(){return"Error in conv2d: depth of input ("+g.shape[3]+") must match input depth for filter "+m.shape[2]+"."}),E(Dt(r,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+u+"'"}),E(a==="NHWC",function(){return"Error in conv2d: got dataFormat of "+a+" but only NHWC is currently supported."});var b,y,w=yr(g.shape,m.shape,r,u,o,c);l!=null&&(b=Ke(b=C(l,"bias","fused conv2d"),v)[0],Ne(w.outShape,b.shape)),d!=null&&(y=C(d,"prelu weights","fused conv2d"));var _={x:g,filter:m};l!=null&&(_.bias=b),d!=null&&(_.preluActivationWeights=y);var k=[m,g],S=F.runKernelFunc(function(R,I){var P=R.fusedConv2d({input:g,filter:m,convInfo:w,bias:b,activation:h,preluActivationWeights:y});return I([m,g,P]),P},_,function(R,I){var P=I,N=P[0],V=P[1],U=P[2],z=_u(R,U,h);E(Kr(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var j={};return l!=null&&(j={bias:function(){return Cu(b,z)}}),Object.assign({x:function(){return Kh(V.shape,z,N,r,o)},filter:function(){return pu(V,z,N.shape,r,o)}},j)},"FusedConv2D",{convInfo:w,activation:h},k,[!0]);return x?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}}),M1=D({fusedDepthwiseConv2d_:function(n){var t=n.x,e=n.filter,r=n.strides,o=n.pad,i=n.dataFormat,a=i===void 0?"NHWC":i,s=n.dilations,u=s===void 0?[1,1]:s,c=n.dimRoundingMode,l=n.bias,f=n.activation,h=f===void 0?"linear":f,d=n.preluActivationWeights;if(wu(F.state.gradientDepth,h)===!1){var p=ra(t,e,r,o,a,u,c);return l!=null&&(p=De(p,l)),Eu(p,h,d)}var v=C(t,"x","depthwiseConv2d"),m=C(e,"filter","depthwiseConv2d"),g=v,x=!1;v.rank===3&&(x=!0,g=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),E(g.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+g.rank+"."}),E(m.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+m.rank+"."}),E(g.shape[3]===m.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+g.shape[3]+") must match the inChannels dimension in filter "+m.shape[2]+"."}),u==null&&(u=[1,1]),E(Dt(r,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+r+" and dilations '"+u+"'"}),c!=null&&E($e(o),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."});var b,y,w=yr(g.shape,m.shape,r,u,o,c,!0);l!=null&&(b=Ke(b=C(l,"bias","fused conv2d"),v)[0],Ne(w.outShape,b.shape)),d!=null&&(y=C(d,"prelu weights","fused depthwiseConv2d"));var _={x:g,filter:m};l!=null&&(_.bias=b),d!=null&&(_.preluActivationWeights=y);var k=[m,g],S=F.runKernelFunc(function(R,I){var P=R.fusedDepthwiseConv2D({input:g,filter:m,convInfo:w,bias:b,activation:h,preluActivationWeights:y});return I([m,g,P]),P},_,function(R,I){E(Kr(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var P=I[0],N=I[1],V=I[2],U=_u(R,V,h),z={};return l!=null&&(z={bias:function(){return Cu(b,U)}}),Object.assign({x:function(){return Xh(N.shape,U,P,w)},filter:function(){return $h(N,U,P.shape,w)}},z)},"FusedDepthwiseConv2D",{convInfo:w,activation:h},k,[!0]);return x?S.as3D(S.shape[1],S.shape[2],S.shape[3]):S}}),O1=Object.freeze({matMul:F1,conv2d:P1,depthwiseConv2d:M1}),B1=Object.freeze({image:bu,linalg:I1,losses:w1,spectral:a1,fused:O1,signal:f1,square:gx,squaredDifference:Th,conv1d:Rb,conv2d:Gt,conv3d:Sb,depthwiseConv2d:ra,separableConv2d:vu,conv2dTranspose:kb,conv3dTranspose:Ab,op:D,batchNormalization2d:Kx,batchNormalization3d:Xx,batchNormalization4d:$x,batchNormalization:Yx,batchNorm:Bh,batchNorm2d:Jx,batchNorm3d:Qx,batchNorm4d:Zx,booleanMaskAsync:Ib,complex:lt,real:Vt,imag:un,concat:Ze,concat1d:Og,concat2d:Bg,concat3d:Lg,concat4d:Wg,split:tu,matMul:oa,dot:Db,outerProduct:Tb,reverse:Po,reverse1d:Nb,reverse2d:Fb,reverse3d:Pb,reverse4d:Mb,maxPool:it,avgPool:Mo,pool:Ob,maxPool3d:Bb,avgPool3d:Lb,slice:dn,slice1d:Wb,slice2d:Ub,slice3d:Qh,slice4d:Vb,abs:yx,acos:xx,acosh:bx,asin:wx,asinh:_x,atan:Cx,atanh:Ex,ceil:Ix,clipByValue:fu,cos:Rx,cosh:Sx,erf:kx,exp:_s,expm1:Ax,floor:Dx,log:Tx,log1p:Nx,logSigmoid:Fx,neg:Fi,reciprocal:Px,round:Mx,rsqrt:Nh,sigmoid:Fh,sign:Ox,isNaN:Bx,isInf:Lx,isFinite:Wx,sin:Ux,sinh:Vx,softplus:zx,sqrt:Hx,step:Gx,tan:jx,tanh:qx,all:zb,any:Hb,argMax:Gb,argMin:jb,logSumExp:qb,max:ia,mean:Kb,min:Xb,moments:$b,sum:ed,prod:Yb,equal:zh,equalStrict:vb,greater:mb,greaterEqual:Hh,greaterEqualStrict:gb,greaterStrict:yb,less:xb,lessEqual:bb,lessEqualStrict:wb,lessStrict:_b,notEqual:Cb,notEqualStrict:Eb,add:De,addN:nb,addStrict:rb,atan2:ob,div:qt,divNoNan:ib,divStrict:ab,floorDiv:Uh,maximum:hu,maximumStrict:sb,minimum:Vh,minimumStrict:ub,mod:cb,modStrict:lb,mul:yt,mulStrict:fb,pow:Pi,powStrict:hb,squaredDifferenceStrict:db,sub:nt,subStrict:pb,elu:td,leakyRelu:Jb,prelu:nd,relu:qe,relu6:rd,selu:Qb,logicalAnd:na,logicalNot:eb,logicalOr:Lh,logicalXor:tb,where:pr,whereAsync:Wh,buffer:be,print:Xg,batchToSpaceND:eh,broadcastTo:$g,cast:Yg,clone:Jg,cumsum:Qg,depthToSpace:Zg,expandDims:Ut,eye:th,multinomial:e0,oneHot:ys,pad:gr,pad1d:t0,pad2d:n0,pad3d:r0,pad4d:o0,rand:i0,randomNormal:a0,randomGamma:s0,randomUniform:nh,reshape:Xt,spaceToBatchND:rh,squeeze:oh,stack:Wt,tile:Mr,truncatedNormal:u0,unstack:et,setdiff1dAsync:c0,fill:hn,linspace:Mg,ones:Yr,range:Ii,scalar:re,tensor:ht,tensor1d:Je,tensor2d:Hn,tensor3d:eu,tensor4d:Ct,tensor5d:Ng,tensor6d:Fg,variable:Pg,zeros:ze,onesLike:Zf,zerosLike:Fe,transpose:Kn,softmax:Sn,logSoftmax:m0,localResponseNormalization:Zb,norm:od,gather:du,unsortedSegmentSum:Gh,basicLSTMCell:e1,multiRNNCell:t1,movingAverage:n1,stridedSlice:r1,topk:o1,scatterND:i1,fft:mu,ifft:Mi,rfft:gu,irfft:id,sparseToDense:s1,gatherND:u1,diag:c1,dropout:l1,hannWindow:yu,hammingWindow:sd,frame:xu,stft:ud,inTopKAsync:h1});function X(n,t){Array.isArray(n)||(n=[n]),n.forEach(function(e){e!=null&&E(e.dtype!=="complex64",function(){return t+" does not support complex64 tensors."})})}function Ua(n,t,e,r){if(e==="linear")return n.linear(t);if(e==="relu")return n.relu(t);if(e==="elu")return n.elu(t);if(e==="relu6")return n.relu6(t);if(e==="prelu")return n.prelu(t,r);throw new Error("Activation "+e+" has not been implemented for the CPU backend.")}var L1=function(n){function t(){var e=n.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new fh(e,F),e}return Jt(t,n),t.prototype.write=function(e,r,o){this.firstUse&&(this.firstUse=!1,H().get("IS_NODE")&&Ci(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var i={};return this.data.set(i,{values:e,dtype:o}),i},t.prototype.move=function(e,r,o,i){this.data.set(e,{values:r,dtype:i})},t.prototype.numDataIds=function(){return this.data.numDataIds()},t.prototype.read=function(e){return se(this,void 0,void 0,function(){return ue(this,function(r){return[2,this.readSync(e)]})})},t.prototype.readSync=function(e){var r=this.data.get(e),o=r.dtype,i=r.complexTensors;return o==="complex64"?ws(this.readSync(i.real.dataId),this.readSync(i.imag.dataId)):this.data.get(e).values},t.prototype.bufferSync=function(e){var r=this.readSync(e.dataId),o=r;if(e.dtype==="string")try{o=r.map(function(i){return bi(i)})}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return be(e.shape,e.dtype,o)},t.prototype.makeOutput=function(e,r,o){var i=this.write(e,r,o);return F.makeTensorFromDataId(i,r,o,this)},t.prototype.disposeData=function(e){if(this.data.has(e)){var r=this.data.get(e).complexTensors;r!=null&&(r.real.dispose(),r.imag.dispose()),this.data.delete(e)}},t.prototype.time=function(e){return se(this,void 0,void 0,function(){var r;return ue(this,function(o){return r=on(),e(),[2,{kernelMs:on()-r}]})})},t.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},t.prototype.complex=function(e,r){var o=this.makeOutput(null,e.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:F.keep(e.clone()),imag:F.keep(r.clone())},o},t.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,r,o){if(X(e,"slice"),ch(e.shape,r,o)){var i=lh(r,e.strides),a=ce(o);return ht(this.readSync(e.dataId).subarray(i,i+a),o,e.dtype)}for(var s=be(o,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c).map(function(f,h){return f+r[h]});s.values[c]=u.get.apply(u,l)}return s.toTensor()},t.prototype.stridedSlice=function(e,r,o,i){X(e,"stridedSlice");var a=ru(r,o,i);if(a.some(function(d){return d===0}))return ht([],a);for(var s=be(a,e.dtype),u=this.bufferSync(e),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),f=new Array(l.length),h=0;h<f.length;h++)f[h]=l[h]*i[h]+r[h];s.set.apply(s,[u.get.apply(u,f)].concat(l))}return s.toTensor()},t.prototype.diag=function(e){for(var r=this.readSync(e.dataId),o=be([e.size,e.size],e.dtype),i=o.values,a=0;a<r.length;a++)i[a*e.size+a]=r[a];return o.toTensor()},t.prototype.unstack=function(e,r){for(var o=e.shape[r],i=new Array(e.rank-1),a=0,s=0;s<e.rank;s++)s!==r&&(i[a++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[r]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[r]=s,l[s]=this.slice(e,u,c).reshape(i);return l},t.prototype.reverse=function(e,r){X(e,"reverse");for(var o=be(e.shape,e.dtype),i=this.bufferSync(e),a=function(u){var c=o.indexToLoc(u),l=c.slice();r.forEach(function(f){return l[f]=e.shape[f]-1-l[f]}),o.set.apply(o,[i.get.apply(i,l)].concat(c))},s=0;s<o.size;s++)a(s);return o.toTensor()},t.prototype.concat=function(e,r){var o=this;if(e[0].dtype==="complex64"){var i=e.map(function(d){return Vt(d)}),a=e.map(function(d){return un(d)});return lt(this.concat(i,r),this.concat(a,r))}var s=e.map(function(d){var p=ce(d.shape.slice(r));return d.as2D(-1,p)}),u=qr(s.map(function(d){return d.shape}),1),c=be(u,e[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach(function(d){c.set(o.readSync(d.dataId),l),l+=d.size})}else{var f=0;s.forEach(function(d){for(var p=o.readSync(d.dataId),v=0,m=0;m<d.shape[0];++m)for(var g=m*u[1]+f,x=0;x<d.shape[1];++x)c[g+x]=p[v++];f+=d.shape[1]})}var h=qr(e.map(function(d){return d.shape}),r);return ht(c,h,e[0].dtype)},t.prototype.neg=function(e){return X(e,"neg"),this.multiply(re(-1),e)},t.prototype.add=function(e,r){return e.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),r.cast("complex64"),function(o,i,a,s){return{real:o+a,imag:i+s}}):this.broadcastedBinaryOp(e,r,ft(e.dtype,r.dtype),function(o,i){return o+i})},t.prototype.addN=function(e){var r=this;X(e,"addN");for(var o=e.map(function(l){return r.readSync(l.dataId)}),i=be(e[0].shape,e[0].dtype),a=i.values,s=0;s<e.length;s++)for(var u=o[s],c=0;c<a.length;c++)a[c]+=u[c];return i.toTensor()},t.prototype.softmax=function(e,r){var o=rt([r],e.shape),i=this.max(e,o),a=At(i.shape,o),s=this.subtract(e,i.reshape(a)),u=this.exp(s),c=this.sum(u,o).reshape(a);return this.realDivide(u,c)},t.prototype.subtract=function(e,r){return e.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),r.cast("complex64"),function(o,i,a,s){return{real:o-a,imag:i-s}}):this.broadcastedBinaryOp(e,r,ft(e.dtype,r.dtype),function(o,i){return o-i})},t.prototype.pow=function(e,r){return X([e,r],"pow"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){return Math.pow(o,i)})},t.prototype.batchMatMul=function(e,r,o,i){X([e,r],"matMul");for(var a=o?e.shape[1]:e.shape[2],s=o?e.shape[2]:e.shape[1],u=i?r.shape[1]:r.shape[2],c=e.shape[0],l=this.readSync(e.dataId),f=this.readSync(r.dataId),h=o?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],d=h[0],p=h[1],v=h[2],m=i?[1,r.strides[1],r.strides[0]]:[r.strides[1],1,r.strides[0]],g=m[0],x=m[1],b=m[2],y=s*u,w=be([c,s,u],e.dtype),_=w.values,k=this.blockSize,S=0;S<c;S++)for(var R=0;R<s;R+=k)for(var I=0;I<u;I+=k)for(var P=0;P<a;P+=k)for(var N=Math.min(R+k,s),V=Math.min(I+k,u),U=Math.min(P+k,a),z=R;z<N;z++)for(var j=I;j<V;j++){for(var W=0,B=P;B<U;B++)W+=l[S*d+z*p+B*v]*f[B*g+j*x+S*b];_[S*y+(z*u+j)]+=W}return w.toTensor()},t.prototype.fusedBatchMatMul=function(e){var r=e.a,o=e.b,i=e.transposeA,a=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=this.batchMatMul(r,o,i,a);return s&&(l=this.add(l,s)),u&&(l=Ua(this,l,u,c)),l},t.prototype.multiply=function(e,r){return e.dtype==="complex64"||r.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),r.cast("complex64"),function(o,i,a,s){return{real:o*a-i*s,imag:o*s+i*a}}):this.broadcastedBinaryOp(e,r,ft(e.dtype,r.dtype),function(o,i){return o*i})},t.prototype.realDivide=function(e,r){return X([e,r],"realDivide"),this.broadcastedBinaryOp(e,r,"float32",function(o,i){return o/i})},t.prototype.floorDiv=function(e,r){return X([e,r],"floorDiv"),this.broadcastedBinaryOp(e,r,"int32",function(o,i){return Math.floor(o/i)})},t.prototype.sum=function(e,r){X(e,"sum"),Ft("sum",r,e.rank);for(var o=dt(e.shape,r),i=o[0],a=o[1],s=ze(i,ft(e.dtype,"int32")),u=ce(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=0,p=0;p<u;++p)d+=l[h+p];c[f]=d}return s},t.prototype.prod=function(e,r){X(e,"sum");for(var o=dt(e.shape,r),i=o[0],a=o[1],s=ze(i,ft(e.dtype,"int32")),u=ce(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=1,p=0;p<u;++p)d*=l[h+p];c[f]=d}return s},t.prototype.unsortedSegmentSum=function(e,r,o){X(e,"unsortedSegmentSum");for(var i=[],a=e.rank-r.rank,s=0;s<a;++s)r=r.expandDims(s+1);for(s=0;s<o;++s){var u=re(s,"int32"),c=zh(u,r).asType("float32").mul(e).sum(0);i.push(c)}return Wt(i)},t.prototype.argMin=function(e,r){X(e,"argMin");var o=[r];Ft("argMin",o,e.rank);for(var i=dt(e.shape,o),a=i[0],s=i[1],u=ze(a,"int32"),c=ce(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),h=0;h<l.length;++h){for(var d=h*c,p=f[d],v=0,m=0;m<c;++m){var g=f[d+m];g<p&&(p=g,v=m)}l[h]=v}return u},t.prototype.argMax=function(e,r){X(e,"argMax");var o=[r];Ft("argMax",o,e.rank);for(var i=dt(e.shape,o),a=i[0],s=i[1],u=ze(a,"int32"),c=ce(s),l=this.readSync(u.dataId),f=this.readSync(e.dataId),h=0;h<l.length;++h){for(var d=h*c,p=f[d],v=0,m=0;m<c;++m){var g=f[d+m];g>p&&(p=g,v=m)}l[h]=v}return u},t.prototype.cumsum=function(e,r,o,i){if(X(e,"cumsum"),r!==e.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(e.rank-1)+" but got axis="+r);for(var a=ft(e.dtype,"int32"),s=ze(e.shape,a),u=this.readSync(s.dataId),c=this.readSync(e.dataId),l=e.shape[e.rank-1],f=i?function(m,g){return m+l-g-1}:function(m,g){return m+g},h=0;h<c.length;h+=l)for(var d=0;d<l;d++){var p=f(h,d);if(d===0)u[p]=o?0:c[p];else{var v=f(h,d-1);u[p]=o?c[v]+u[v]:c[p]+u[v]}}return s},t.prototype.equal=function(e,r){return X([e,r],"equal"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o===i?1:0})},t.prototype.notEqual=function(e,r){return X([e,r],"notEqual"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o!==i?1:0})},t.prototype.less=function(e,r){return X([e,r],"less"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o<i?1:0})},t.prototype.lessEqual=function(e,r){return X([e,r],"lessEqual"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o<=i?1:0})},t.prototype.greater=function(e,r){return X([e,r],"greater"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o>i?1:0})},t.prototype.greaterEqual=function(e,r){return X([e,r],"greaterEqual"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o>=i?1:0})},t.prototype.logicalNot=function(e){X(e,"logicalNot");for(var r=this.readSync(e.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)o[i]=r[i]?0:1;return this.makeOutput(o,e.shape,"bool")},t.prototype.logicalAnd=function(e,r){return X([e,r],"logicalAnd"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o&&i})},t.prototype.logicalOr=function(e,r){return X([e,r],"logicalOr"),this.broadcastedBinaryOp(e,r,"bool",function(o,i){return o||i})},t.prototype.select=function(e,r,o){X([e,r,o],"select");for(var i=this.readSync(e.dataId),a=this.readSync(r.dataId),s=this.readSync(o.dataId),u=ze(r.shape,ft(r.dtype,o.dtype)),c=this.readSync(u.dataId),l=0,f=e.rank===0||e.rank>1||r.rank===1?1:ce(r.shape.slice(1)),h=0;h<i.length;h++)for(var d=0;d<f;d++)i[h]===1?c[l++]=a[h]:c[l++]=s[h];return u},t.prototype.where=function(e){X([e],"where");var r=this.readSync(e.dataId);return su(e.shape,r)},t.prototype.topk=function(e,r,o){return X(e,"topk"),xh(this.readSync(e.dataId),e.shape,e.dtype,r)},t.prototype.min=function(e,r){X(e,"min"),Ft("min",r,e.rank);for(var o=dt(e.shape,r),i=o[0],a=o[1],s=ze(i,e.dtype),u=ce(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];v<d&&(d=v)}c[f]=d}return s},t.prototype.minimum=function(e,r){return X([e,r],"minimum"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){return Math.min(o,i)})},t.prototype.mod=function(e,r){return X([e,r],"mod"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){var a=o%i;return o<0&&i<0||o>=0&&i>=0?a:(a+i)%i})},t.prototype.max=function(e,r){X(e,"max"),Ft("max",r,e.rank);for(var o=dt(e.shape,r),i=o[0],a=o[1],s=ze(i,e.dtype),u=ce(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];v>d&&(d=v)}c[f]=d}return s},t.prototype.maximum=function(e,r){return X([e,r],"maximum"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){return Math.max(o,i)})},t.prototype.all=function(e,r){X(e,"all"),Ft("all",r,e.rank);for(var o=dt(e.shape,r),i=o[0],a=o[1],s=ze(i,e.dtype),u=ce(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];d=d&&v}c[f]=d}return s},t.prototype.any=function(e,r){X(e,"any"),Ft("any",r,e.rank);for(var o=dt(e.shape,r),i=o[0],a=o[1],s=ze(i,e.dtype),u=ce(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),f=0;f<c.length;++f){for(var h=f*u,d=l[h],p=0;p<u;++p){var v=l[h+p];d=d||v}c[f]=d}return s},t.prototype.squaredDifference=function(e,r){return X([e,r],"squaredDifference"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){var a=o-i;return a*a})},t.prototype.ceil=function(e){X(e,"ceil");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.ceil(r[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.floor=function(e){X(e,"floor");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.floor(r[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.sign=function(e){X(e,"x");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)r[i]<0?o[i]=-1:r[i]>0?o[i]=1:o[i]=0;return this.makeOutput(o,e.shape,"float32")},t.prototype.isNaN=function(e){X(e,"x");for(var r=this.readSync(e.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)Number.isNaN(r[i])&&(o[i]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isInf=function(e){X(e,"x");for(var r=this.readSync(e.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)Math.abs(r[i])===1/0&&(o[i]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isFinite=function(e){X(e,"x");for(var r=this.readSync(e.dataId),o=new Uint8Array(r.length),i=0;i<r.length;++i)Number.isFinite(r[i])&&(o[i]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.round=function(e){X(e,"round");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=Math.floor(r[i]);r[i]-a<.5?o[i]=Math.floor(r[i]):r[i]-a>.5?o[i]=Math.ceil(r[i]):o[i]=a%2==0?a:a+1}return this.makeOutput(o,e.shape,"float32")},t.prototype.exp=function(e){X(e,"exp");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.exp(r[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.expm1=function(e){X(e,"expm1");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=Math.expm1(r[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.log=function(e){X(e,"log");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=Math.log(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.log1p=function(e){X(e,"log1p");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=Math.log1p(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.sqrt=function(e){X(e,"sqrt");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=Math.sqrt(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.rsqrt=function(e){X(e,"rsqrt");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i){var a=r[i];o[i]=1/Math.sqrt(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.reciprocal=function(e){X(e,"reciprocal");for(var r=this.readSync(e.dataId),o=new Float32Array(r.length),i=0;i<r.length;++i)o[i]=1/r[i];return this.makeOutput(o,e.shape,"float32")},t.prototype.linear=function(e){return e},t.prototype.relu=function(e){X(e,"relu");for(var r=ze(e.shape,e.dtype),o=this.readSync(r.dataId),i=this.readSync(e.dataId),a=0;a<i.length;++a)o[a]=Math.max(0,i[a]);return r},t.prototype.relu6=function(e){X(e,"relu");for(var r=ze(e.shape,e.dtype),o=this.readSync(r.dataId),i=this.readSync(e.dataId),a=0;a<i.length;++a)o[a]=Math.min(Math.max(0,i[a]),6);return r},t.prototype.prelu=function(e,r){return X([e,r],"prelu"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){return o<0?i*o:o})},t.prototype.elu=function(e){X(e,"elu");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i){var a=o[i];r[i]=a>=0?a:Math.exp(a)-1}return this.makeOutput(r,e.shape,"float32")},t.prototype.eluDer=function(e,r){X([e,r],"eluDer");for(var o=new Float32Array(r.size),i=this.readSync(r.dataId),a=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];o[s]=u>=1?a[s]:a[s]*(u+1)}return this.makeOutput(o,r.shape,"float32")},t.prototype.selu=function(e){X(e,"selu");for(var r=cu,o=lu,i=new Float32Array(e.size),a=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];i[s]=u>=0?o*u:r*(Math.exp(u)-1)}return this.makeOutput(i,e.shape,"float32")},t.prototype.clip=function(e,r,o){X(e,"clip");for(var i=new Float32Array(e.size),a=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];i[s]=u>o?o:u<r?r:u}return this.makeOutput(i,e.shape,"float32")},t.prototype.abs=function(e){for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.abs(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.complexAbs=function(e){for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<e.size;++i){var a=o[2*i],s=o[2*i+1];r[i]=Math.hypot(a,s)}return this.makeOutput(r,e.shape,"float32")},t.prototype.int=function(e){X(e,"int");for(var r=new Int32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=o[i];return this.makeOutput(r,e.shape,"int32")},t.prototype.sigmoid=function(e){X(e,"sigmoid");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=1/(1+Math.exp(-o[i]));return this.makeOutput(r,e.shape,"float32")},t.prototype.softplus=function(e){X(e,"softplus");for(var r=Math.log(11920928955078125e-23)+2,o=new Float32Array(e.size),i=this.readSync(e.dataId),a=0;a<i.length;++a){var s=i[a]>-r,u=i[a]<r,c=Math.exp(i[a]),l=void 0;l=u?c:s?i[a]:Math.log(1+c),o[a]=l}return this.makeOutput(o,e.shape,"float32")},t.prototype.sin=function(e){X(e,"sin");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.sin(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.cos=function(e){X(e,"cos");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.cos(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.tan=function(e){X(e,"tan");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.tan(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.asin=function(e){X(e,"asin");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.asin(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.acos=function(e){X(e,"acos");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.acos(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.atan=function(e){X(e,"atan");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.atan(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.atan2=function(e,r){return X([e,r],"atan2"),this.broadcastedBinaryOp(e,r,e.dtype,function(o,i){return Math.atan2(o,i)})},t.prototype.sinh=function(e){X(e,"sinh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.sinh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.cosh=function(e){X(e,"cosh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.cosh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.tanh=function(e){X(e,"tanh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Wm(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.asinh=function(e){X(e,"asinh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.asinh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.acosh=function(e){X(e,"acosh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.acosh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.atanh=function(e){X(e,"atanh");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)r[i]=Math.atanh(o[i]);return this.makeOutput(r,e.shape,"float32")},t.prototype.erf=function(e){X(e,"erf");for(var r=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i){var a=Math.sign(o[i]),s=Math.abs(o[i]),u=1/(1+.3275911*s);r[i]=a*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(r,e.shape,"float32")},t.prototype.step=function(e,r){r===void 0&&(r=0),X(e,"step");for(var o=new Float32Array(e.size),i=this.readSync(e.dataId),a=0;a<i.length;++a){var s=i[a];isNaN(s)?o[a]=NaN:o[a]=s>0?1:r}return this.makeOutput(o,e.shape,"float32")},t.prototype.fusedConv2d=function(e){var r=e.input,o=e.filter,i=e.convInfo,a=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.conv2d(r,o,i);return a&&(c=this.add(c,a)),s&&(c=Ua(this,c,s,u)),c},t.prototype.conv2d=function(e,r,o){X([e,r],"conv2d");for(var i=o.filterHeight,a=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.dataFormat==="channelsLast",h=be(o.outShape,e.dtype),d=e.strides[0],p=f?e.strides[1]:e.strides[2],v=f?e.strides[2]:1,m=f?1:e.strides[1],g=h.strides[0],x=f?h.strides[1]:h.strides[2],b=f?h.strides[2]:1,y=f?1:h.strides[1],w=this.readSync(e.dataId),_=this.readSync(r.dataId),k=h.values,S=0;S<o.batchSize;++S)for(var R=S*d,I=S*g,P=0;P<o.outHeight;++P)for(var N=I+P*x,V=P*o.strideHeight-l,U=0;U<i;U++){var z=V+U*s;if(!(z<0||z>=o.inHeight))for(var j=U*r.strides[0],W=R+z*p,B=0;B<o.outWidth;++B)for(var q=N+B*b,$=B*o.strideWidth-c,te=0;te<a;te++){var oe=$+te*u;if(!(oe<0||oe>=o.inWidth))for(var pe=W+oe*v,_e=j+te*r.strides[1],Ce=0;Ce<o.inChannels;++Ce){for(var me=w[pe+Ce*m],Re=0;Re<o.outChannels;++Re)k[q+Re*y]+=me*_[_e+Re];_e+=o.outChannels}}}return h.toTensor()},t.prototype.conv3d=function(e,r,o){for(var i=o.filterDepth,a=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,c=o.dilationHeight,l=o.dilationWidth,f=o.padInfo.front,h=o.padInfo.left,d=o.padInfo.top,p=be(o.outShape,e.dtype),v=this.readSync(e.dataId),m=this.readSync(r.dataId),g=p.values,x=0;x<o.batchSize;++x)for(var b=x*e.strides[0],y=x*p.strides[0],w=0;w<o.outDepth;++w)for(var _=y+w*p.strides[1],k=w*o.strideDepth-f,S=0;S<i;S++){var R=k+S*u;if(!(R<0||R>=o.inDepth))for(var I=S*r.strides[0],P=b+R*e.strides[1],N=0;N<o.outHeight;++N)for(var V=_+N*p.strides[2],U=N*o.strideHeight-d,z=0;z<a;z++){var j=U+z*c;if(!(j<0||j>=o.inHeight))for(var W=I+z*r.strides[1],B=P+j*e.strides[2],q=0;q<o.outWidth;++q)for(var $=V+q*o.outChannels,te=q*o.strideWidth-h,oe=0;oe<s;oe++){var pe=te+oe*l;if(!(pe<0||pe>=o.inWidth))for(var _e=W+oe*r.strides[2],Ce=B+pe*o.inChannels,me=_e,Re=0;Re<o.inChannels;++Re){for(var Se=v[Ce+Re],Te=0;Te<o.outChannels;++Te)g[$+Te]+=Se*m[me+Te];me+=o.outChannels}}}}return p.toTensor()},t.prototype.conv2dDerInput=function(e,r,o){X([e,r],"conv2dDerInput");for(var i=be(o.inShape,"float32"),a=i.values,s=this.readSync(e.dataId),u=this.readSync(r.dataId),c=r.strides,l=c[0],f=c[1],h=c[2],d=o.batchSize,p=o.filterHeight,v=o.filterWidth,m=o.inChannels,g=o.inHeight,x=o.inWidth,b=o.outChannels,y=o.outHeight,w=o.outWidth,_=o.strideHeight,k=o.strideWidth,S=o.dataFormat,R=p-1-o.padInfo.top,I=v-1-o.padInfo.left,P=S==="channelsLast",N=i.strides[0],V=P?i.strides[1]:i.strides[2],U=P?i.strides[2]:1,z=P?1:i.strides[1],j=e.strides[0],W=P?e.strides[1]:e.strides[2],B=P?e.strides[2]:1,q=P?1:e.strides[1],$=0;$<d;++$)for(var te=0;te<m;++te)for(var oe=0;oe<g;++oe)for(var pe=oe-R,_e=Math.max(0,Math.ceil(pe/_)),Ce=Math.min(y,(p+pe)/_),me=0;me<x;++me){for(var Re=me-I,Se=Math.max(0,Math.ceil(Re/k)),Te=Math.min(w,(v+Re)/k),Ue=0,Ae=_e;Ae<Ce;++Ae)for(var Me=Ae*_-pe,A=Se;A<Te;++A)for(var T=j*$+W*Ae+B*A,O=l*(p-1-Me)+f*(v-1-(A*k-Re))+h*te,G=0;G<b;++G)Ue+=s[T+q*G]*u[O+G];a[N*$+V*oe+U*me+z*te]=Ue}return i.toTensor()},t.prototype.conv3dDerInput=function(e,r,o){for(var i=be(o.inShape,"float32"),a=i.values,s=i.strides,u=s[0],c=s[1],l=s[2],f=s[3],h=this.readSync(e.dataId),d=e.strides,p=d[0],v=d[1],m=d[2],g=d[3],x=this.readSync(r.dataId),b=r.strides,y=b[0],w=b[1],_=b[2],k=b[3],S=o.batchSize,R=o.filterDepth,I=o.filterHeight,P=o.filterWidth,N=o.inChannels,V=o.inDepth,U=o.inHeight,z=o.inWidth,j=o.outChannels,W=o.outDepth,B=o.outHeight,q=o.outWidth,$=o.strideDepth,te=o.strideHeight,oe=o.strideWidth,pe=R-1-o.padInfo.front,_e=I-1-o.padInfo.top,Ce=P-1-o.padInfo.left,me=0;me<S;++me)for(var Re=0;Re<N;++Re)for(var Se=0;Se<V;++Se)for(var Te=Se-pe,Ue=Math.max(0,Math.ceil(Te/$)),Ae=Math.min(W,(R+Te)/$),Me=0;Me<U;++Me)for(var A=Me-_e,T=Math.max(0,Math.ceil(A/te)),O=Math.min(B,(I+A)/te),G=0;G<z;++G){for(var K=G-Ce,J=Math.max(0,Math.ceil(K/oe)),ee=Math.min(q,(P+K)/oe),Q=0,Z=Ue;Z<Ae;++Z)for(var Y=Z*$-Te,ne=T;ne<O;++ne)for(var de=ne*te-A,ae=J;ae<ee;++ae)for(var ve=p*me+v*Z+m*ne+g*ae,we=y*(R-1-Y)+w*(I-1-de)+_*(P-1-(ae*oe-K))+k*Re,ke=0;ke<j;++ke)Q+=h[ve+ke]*x[we+ke];a[u*me+c*Se+l*Me+f*G+Re]=Q}return i.toTensor()},t.prototype.conv2dDerFilter=function(e,r,o){X([e,r],"conv2dDerFilter");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dataFormat==="channelsLast",l=be(o.filterShape,"float32"),f=o.padInfo.left,h=o.padInfo.top,d=this.bufferSync(e),p=this.bufferSync(r),v=0;v<s;++v)for(var m=Math.max(0,Math.ceil((h-v)/i)),g=Math.min(o.outHeight,(o.inHeight+h-v)/i),x=0;x<u;++x)for(var b=Math.max(0,Math.ceil((f-x)/a)),y=Math.min(o.outWidth,(o.inWidth+f-x)/a),w=0;w<o.inChannels;++w)for(var _=0;_<o.outChannels;++_){for(var k=0,S=0;S<o.batchSize;++S)for(var R=m;R<g;++R)for(var I=v+R*i-h,P=b;P<y;++P){var N=x+P*a-f;k+=c?d.get(S,I,N,w)*p.get(S,R,P,_):d.get(S,w,I,N)*p.get(S,_,R,P)}l.set(k,v,x,w,_)}return l.toTensor()},t.prototype.conv3dDerFilter=function(e,r,o){for(var i=o.strideDepth,a=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=be(o.filterShape,"float32"),h=f.values,d=f.strides,p=d[0],v=d[1],m=d[2],g=d[3],x=this.readSync(r.dataId),b=r.strides,y=b[0],w=b[1],_=b[2],k=b[3],S=this.readSync(e.dataId),R=e.strides,I=R[0],P=R[1],N=R[2],V=R[3],U=o.padInfo.front,z=o.padInfo.left,j=o.padInfo.top,W=0;W<u;++W)for(var B=Math.max(0,Math.ceil((U-W)/i)),q=Math.min(o.outDepth,(o.inDepth+U-W)/i),$=W*p,te=0;te<c;++te)for(var oe=Math.max(0,Math.ceil((j-te)/a)),pe=Math.min(o.outHeight,(o.inHeight+j-te)/a),_e=te*v+$,Ce=0;Ce<l;++Ce)for(var me=Math.max(0,Math.ceil((z-Ce)/s)),Re=Math.min(o.outWidth,(o.inWidth+z-Ce)/s),Se=Ce*m+_e,Te=0;Te<o.inChannels;++Te)for(var Ue=Te*g+Se,Ae=0;Ae<o.outChannels;++Ae){for(var Me=0,A=0;A<o.batchSize;++A)for(var T=A*I,O=A*y,G=B;G<q;++G)for(var K=(W+G*i-U)*P+T,J=G*w+O,ee=oe;ee<pe;++ee)for(var Q=(te+ee*a-j)*N+K,Z=ee*_+J,Y=me;Y<Re;++Y){var ne=Y*k+Z;Me+=S[(Ce+Y*s-z)*V+Q+Te]*x[ne+Ae]}h[Ue+Ae]=Me}return f.toTensor()},t.prototype.fusedDepthwiseConv2D=function(e){var r=e.input,o=e.filter,i=e.convInfo,a=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.depthwiseConv2D(r,o,i);return a&&(c=this.add(c,a)),s&&(c=Ua(this,c,s,u)),c},t.prototype.depthwiseConv2D=function(e,r,o){X([e,r],"depthwiseConv2D");for(var i=o.filterHeight,a=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,f=o.outChannels/o.inChannels,h=be(o.outShape,e.dtype),d=this.readSync(e.dataId),p=this.readSync(r.dataId),v=h.values,m=0;m<o.batchSize;++m)for(var g=m*e.strides[0],x=m*h.strides[0],b=0;b<o.outHeight;++b)for(var y=x+b*h.strides[1],w=b*o.strideHeight-c,_=0;_<i;++_){var k=w+_*s;if(!(k<0||k>=o.inHeight))for(var S=_*r.strides[0],R=g+k*e.strides[1],I=0;I<o.outWidth;++I)for(var P=y+I*h.strides[2],N=I*o.strideWidth-l,V=0;V<a;++V){var U=N+V*u;if(!(U<0||U>=o.inWidth))for(var z=S+V*r.strides[1],j=R+U*o.inChannels,W=P,B=z,q=0;q<o.inChannels;++q){for(var $=d[j+q],te=0;te<f;++te)v[W+te]+=$*p[B+te];W+=f,B+=f}}}return h.toTensor()},t.prototype.depthwiseConv2DDerInput=function(e,r,o){X([e,r],"depthwiseConv2DDerInput");for(var i=be(o.inShape,"float32"),a=i.values,s=i.strides,u=s[0],c=s[1],l=s[2],f=this.readSync(e.dataId),h=e.strides,d=h[0],p=h[1],v=h[2],m=this.readSync(r.dataId),g=r.strides,x=g[0],b=g[1],y=g[2],w=o.batchSize,_=o.filterHeight,k=o.filterWidth,S=o.inChannels,R=o.inHeight,I=o.inWidth,P=o.outChannels,N=o.outHeight,V=o.outWidth,U=o.strideHeight,z=o.strideWidth,j=_-1-o.padInfo.top,W=k-1-o.padInfo.left,B=P/S,q=0;q<w;++q)for(var $=0;$<S;++$)for(var te=0;te<R;++te)for(var oe=te-j,pe=Math.max(0,Math.ceil(oe/U)),_e=Math.min(N,(_+oe)/U),Ce=0;Ce<I;++Ce){for(var me=Ce-W,Re=Math.max(0,Math.ceil(me/z)),Se=Math.min(V,(k+me)/z),Te=0,Ue=pe;Ue<_e;++Ue)for(var Ae=Ue*U-oe,Me=Re;Me<Se;++Me)for(var A=d*q+p*Ue+v*Me,T=x*(_-1-Ae)+b*(k-1-(Me*z-me))+y*$,O=0;O<B;++O)Te+=f[A+($*B+O)]*m[T+O];a[u*q+c*te+l*Ce+$]=Te}return i.toTensor()},t.prototype.depthwiseConv2DDerFilter=function(e,r,o){X([e,r],"depthwiseConv2DDerFilter");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=be(o.filterShape,"float32"),l=o.padInfo.left,f=o.padInfo.top,h=o.outChannels/o.inChannels,d=this.bufferSync(e),p=this.bufferSync(r),v=0;v<s;++v)for(var m=Math.max(0,Math.ceil((f-v)/i)),g=Math.min(o.outHeight,(o.inHeight+f-v)/i),x=0;x<u;++x)for(var b=Math.max(0,Math.ceil((l-x)/a)),y=Math.min(o.outWidth,(o.inWidth+l-x)/a),w=0;w<o.outChannels;++w){for(var _=Math.trunc(w/h),k=w%h,S=0,R=0;R<o.batchSize;++R)for(var I=m;I<g;++I)for(var P=v+I*i-f,N=b;N<y;++N){var V=x+N*a-l;S+=d.get(R,P,V,_)*p.get(R,I,N,w)}c.set(S,v,x,_,k)}return c.toTensor()},t.prototype.tile=function(e,r){return X(e,"tile"),yh(this.bufferSync(e),r)},t.prototype.pad=function(e,r,o){X(e,"pad");var i=r.map(function(h,d){return h[0]+e.shape[d]+h[1]}),a=r.map(function(h){return h[0]}),s=this.bufferSync(e),u=be(i,e.dtype);o!==0&&u.values.fill(o);for(var c=0;c<e.size;c++){var l=s.indexToLoc(c),f=l.map(function(h,d){return h+a[d]});u.set.apply(u,[s.get.apply(s,l)].concat(f))}return u.toTensor()},t.prototype.transpose=function(e,r){X(e,"transpose");for(var o=new Array(e.rank),i=0;i<o.length;i++)o[i]=e.shape[r[i]];var a=this.readSync(e.dataId),s=be(o,e.dtype),u=this.bufferSync(e);for(i=0;i<e.size;++i){for(var c=u.indexToLoc(i),l=new Array(c.length),f=0;f<l.length;f++)l[f]=c[r[f]];var h=s.locToIndex(l);s.values[h]=a[i]}return s.toTensor()},t.prototype.gather=function(e,r,o){X([e,r],"gather");var i=e.shape.slice(),a=this.readSync(r.dataId);i[o]=a.length;for(var s=be(i,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c),f=l.slice();f[o]=a[l[o]];var h=u.locToIndex(f);s.values[c]=u.values[h]}return s.toTensor()},t.prototype.batchToSpaceND=function(e,r,o){X([e],"batchToSpaceND");var i=r.reduce(function(f,h){return f*h}),a=Ri(e.shape,r,i),s=Si(a.length,r.length),u=ki(e.shape,r,i),c=ih(o,r.length),l=ah(u,o,r.length);return e.reshape(a).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,r,o){X([e],"spaceToBatchND");var i=r.reduce(function(h,d){return h*d}),a=[[0,0]];a.push.apply(a,o);for(var s=1+r.length;s<e.shape.length;++s)a.push([0,0]);var u=e.pad(a),c=Ri(u.shape,r,i,!1),l=Si(c.length,r.length,!1),f=ki(u.shape,r,i,!1);return u.reshape(c).transpose(l).reshape(f)},t.prototype.pool=function(e,r,o){X(e,"pool");for(var i=r.strideHeight,a=r.strideWidth,s=r.dilationHeight,u=r.dilationWidth,c=r.effectiveFilterHeight,l=r.effectiveFilterWidth,f=r.padInfo.top,h=r.padInfo.left,d=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,p=this.readSync(e.dataId),v=be(r.outShape,e.dtype),m=v.values,g=r.outShape[1]*r.outShape[2]*r.outShape[3],x=r.outShape[2]*r.outShape[3],b=r.outShape[3],y=0;y<r.batchSize;++y)for(var w=y*g,_=y*e.strides[0],k=0;k<r.inChannels;++k)for(var S=0;S<r.outHeight;++S)for(var R=S*i-f,I=Math.max(0,R),P=Math.min(r.inHeight,c+R),N=w+S*x,V=0;V<r.outWidth;++V){for(var U=V*a-h,z=Math.max(0,U),j=Math.min(r.inWidth,l+U),W=d,B=0,q=0,$=I;$<P;$+=s){for(var te=_+$*e.strides[1],oe=z;oe<j;oe+=u){var pe=p[te+oe*e.strides[2]+k];o==="max"&&pe>W?W=pe:o==="avg"&&(B+=pe,q++)}if(isNaN(W))break}m[N+V*b+k]=o==="avg"?B/q:W}return v.toTensor()},t.prototype.maxPool=function(e,r){return this.pool(e,r,"max")},t.prototype.maxPoolPositions=function(e,r){for(var o=be(r.outShape,"int32"),i=r.strideHeight,a=r.strideWidth,s=r.dilationHeight,u=r.dilationWidth,c=r.effectiveFilterHeight,l=r.effectiveFilterWidth,f=r.padInfo.top,h=r.padInfo.left,d=this.bufferSync(e),p=0;p<r.batchSize;++p)for(var v=0;v<r.inChannels;++v)for(var m=0;m<r.outHeight;++m){for(var g=m*i-f,x=g;x<0;)x+=s;for(var b=Math.min(r.inHeight,c+g),y=0;y<r.outWidth;++y){for(var w=y*a-h,_=w;_<0;)_+=u;for(var k=Math.min(r.inWidth,l+w),S=Number.NEGATIVE_INFINITY,R=-1,I=x;I<b;I+=s)for(var P=I-g,N=_;N<k;N+=u){var V=N-w,U=d.get(p,I,N,v);U>S&&(S=U,R=P*l+V)}o.set(R,p,m,y,v)}}return o.toTensor()},t.prototype.maxPoolBackprop=function(e,r,o,i){X([r,o],"maxPoolBackprop");for(var a=this.maxPoolPositions(r,i),s=i.strideHeight,u=i.strideWidth,c=i.dilationHeight,l=i.dilationWidth,f=i.effectiveFilterHeight,h=i.effectiveFilterWidth,d=h-1-i.padInfo.left,p=f-1-i.padInfo.top,v=be(r.shape,"float32"),m=this.bufferSync(a),g=this.bufferSync(e),x=0;x<i.batchSize;++x)for(var b=0;b<i.inChannels;++b)for(var y=0;y<i.inHeight;++y)for(var w=0;w<i.inWidth;++w){for(var _=y-p,k=w-d,S=0,R=0;R<f;R+=c){var I=(_+R)/s;if(!(I<0||I>=i.outHeight||Math.floor(I)!==I))for(var P=0;P<h;P+=l){var N=(k+P)/u;if(!(N<0||N>=i.outWidth||Math.floor(N)!==N)){var V=f*h-1-m.get(x,I,N,b)===R*h+P?1:0;V!==0&&(S+=g.get(x,I,N,b)*V)}}}v.set(S,x,y,w,b)}return v.toTensor()},t.prototype.avgPoolBackprop=function(e,r,o){X([e,r],"avgPoolBackprop");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dilationHeight,l=o.dilationWidth,f=o.effectiveFilterHeight,h=o.effectiveFilterWidth,d=h-1-o.padInfo.left,p=f-1-o.padInfo.top,v=be(r.shape,"float32"),m=1/(s*u),g=this.bufferSync(e),x=0;x<o.batchSize;++x)for(var b=0;b<o.inChannels;++b)for(var y=0;y<o.inHeight;++y)for(var w=0;w<o.inWidth;++w){for(var _=y-p,k=w-d,S=0,R=0;R<f;R+=c){var I=(_+R)/i;if(!(I<0||I>=o.outHeight||Math.floor(I)!==I))for(var P=0;P<h;P+=l){var N=(k+P)/a;N<0||N>=o.outWidth||Math.floor(N)!==N||(S+=g.get(x,I,N,b))}}v.set(S*m,x,y,w,b)}return v.toTensor()},t.prototype.pool3d=function(e,r,o){X(e,"pool3d");for(var i=r.strideDepth,a=r.strideHeight,s=r.strideWidth,u=r.dilationDepth,c=r.dilationHeight,l=r.dilationWidth,f=r.effectiveFilterDepth,h=r.effectiveFilterHeight,d=r.effectiveFilterWidth,p=r.padInfo.front,v=r.padInfo.top,m=r.padInfo.left,g=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,x=this.readSync(e.dataId),b=be(r.outShape,e.dtype),y=b.values,w=r.outShape[1]*r.outShape[2]*r.outShape[3]*r.outShape[4],_=r.outShape[2]*r.outShape[3]*r.outShape[4],k=r.outShape[3]*r.outShape[4],S=r.outShape[4],R=0;R<r.batchSize;++R)for(var I=R*w,P=R*e.strides[0],N=0;N<r.inChannels;++N)for(var V=0;V<r.outDepth;++V){for(var U=V*i-p,z=U;z<0;)z+=u;for(var j=Math.min(r.inDepth,f+U),W=I+V*_,B=0;B<r.outHeight;++B){for(var q=B*a-v,$=q;$<0;)$+=c;for(var te=Math.min(r.inHeight,h+q),oe=W+B*k,pe=0;pe<r.outWidth;++pe){for(var _e=pe*s-m,Ce=_e;Ce<0;)Ce+=l;for(var me=Math.min(r.inWidth,d+_e),Re=oe+pe*S,Se=g,Te=0,Ue=0,Ae=z;Ae<j;Ae+=u){for(var Me=P+Ae*e.strides[1],A=$;A<te;A+=c){for(var T=Me+A*e.strides[2],O=Ce;O<me;O+=l){var G=x[T+O*e.strides[3]+N];if(o==="max"&&G>Se?Se=G:o==="avg"&&(Te+=G,Ue++),isNaN(Se))break}if(isNaN(Se))break}if(isNaN(Se))break}y[Re+N]=o==="avg"?Te/Ue:Se}}}return b.toTensor()},t.prototype.avgPool3d=function(e,r){return X(e,"avgPool3d"),this.pool3d(e,r,"avg").toFloat()},t.prototype.avgPool3dBackprop=function(e,r,o){X([e,r],"avgPool3dBackprop");for(var i=o.strideDepth,a=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,f=o.dilationDepth,h=o.dilationHeight,d=o.dilationWidth,p=o.effectiveFilterDepth,v=o.effectiveFilterHeight,m=o.effectiveFilterWidth,g=p-1-o.padInfo.front,x=m-1-o.padInfo.left,b=v-1-o.padInfo.top,y=be(r.shape,"float32"),w=1/(u*c*l),_=this.bufferSync(e),k=0;k<o.batchSize;++k)for(var S=0;S<o.inChannels;++S)for(var R=0;R<o.inDepth;++R)for(var I=0;I<o.inHeight;++I)for(var P=0;P<o.inWidth;++P){for(var N=R-g,V=I-b,U=P-x,z=0,j=0;j<p;j+=f){var W=(N+j)/i;if(!(W<0||W>=o.outDepth||Math.floor(W)!==W))for(var B=0;B<v;B+=h){var q=(V+B)/a;if(!(q<0||q>=o.outHeight||Math.floor(q)!==q))for(var $=0;$<m;$+=d){var te=(U+$)/s;te<0||te>=o.outWidth||Math.floor(te)!==te||(z+=_.get(k,W,q,te,S))}}}y.set(z*w,k,R,I,P,S)}return y.toTensor()},t.prototype.maxPool3d=function(e,r){return X(e,"maxPool3d"),this.pool3d(e,r,"max").toFloat()},t.prototype.maxPool3dPositions=function(e,r){for(var o=be(r.outShape,"int32"),i=r.strideDepth,a=r.strideHeight,s=r.strideWidth,u=r.dilationDepth,c=r.dilationHeight,l=r.dilationWidth,f=r.effectiveFilterDepth,h=r.effectiveFilterHeight,d=r.effectiveFilterWidth,p=r.padInfo.front,v=r.padInfo.top,m=r.padInfo.left,g=this.bufferSync(e),x=0;x<r.batchSize;++x)for(var b=0;b<r.inChannels;++b)for(var y=0;y<r.outDepth;++y){for(var w=y*i-p,_=w;_<0;)_+=u;for(var k=Math.min(r.inDepth,f+w),S=0;S<r.outHeight;++S){for(var R=S*a-v,I=R;I<0;)I+=c;for(var P=Math.min(r.inHeight,h+R),N=0;N<r.outWidth;++N){for(var V=N*s-m,U=V;U<0;)U+=l;for(var z=Math.min(r.inWidth,d+V),j=Number.NEGATIVE_INFINITY,W=-1,B=_;B<k;B+=u)for(var q=B-w,$=I;$<P;$+=c)for(var te=$-R,oe=U;oe<z;oe+=l){var pe=oe-V,_e=g.get(x,B,$,oe,b);_e>=j&&(j=_e,W=q*h*d+te*h+pe)}o.set(W,x,y,S,N,b)}}}return o.toTensor()},t.prototype.maxPool3dBackprop=function(e,r,o,i){X([r,o],"maxPool3dBackprop");for(var a=this.maxPool3dPositions(r,i),s=i.strideDepth,u=i.strideHeight,c=i.strideWidth,l=i.dilationDepth,f=i.dilationHeight,h=i.dilationWidth,d=i.effectiveFilterDepth,p=i.effectiveFilterHeight,v=i.effectiveFilterWidth,m=d-1-i.padInfo.front,g=v-1-i.padInfo.left,x=p-1-i.padInfo.top,b=be(r.shape,"float32"),y=this.bufferSync(a),w=this.bufferSync(e),_=0;_<i.batchSize;++_)for(var k=0;k<i.inChannels;++k)for(var S=0;S<i.inDepth;++S)for(var R=0;R<i.inHeight;++R)for(var I=0;I<i.inWidth;++I){for(var P=S-m,N=R-x,V=I-g,U=0,z=0;z<d;z+=l){var j=(P+z)/s;if(!(j<0||j>=i.outDepth||Math.floor(j)!==j))for(var W=0;W<p;W+=f){var B=(N+W)/u;if(!(B<0||B>=i.outHeight||Math.floor(B)!==B))for(var q=0;q<v;q+=h){var $=(V+q)/c;if(!($<0||$>=i.outWidth||Math.floor($)!==$)){var te=d*p*v-1-y.get(_,j,B,$,k)===z*p*v+W*v+q?1:0;te!==0&&(U+=w.get(_,j,B,$,k)*te)}}}}b.set(U,_,S,R,I,k)}return b.toTensor()},t.prototype.cast=function(e,r){return ph(e,r,this)},t.prototype.reshape=function(e,r){return bs(e,r)},t.prototype.avgPool=function(e,r){return X(e,"avgPool"),this.pool(e,r,"avg").toFloat()},t.prototype.resizeBilinear=function(e,r,o,i){X(e,"resizeBilinear");for(var a=e.shape,s=a[0],u=a[1],c=a[2],l=a[3],f=this.readSync(e.dataId),h=new Float32Array(ce([s,r,o,l])),d=[i&&r>1?u-1:u,i&&o>1?c-1:c],p=[i&&r>1?r-1:r,i&&o>1?o-1:o],v=0,m=d[0]/p[0],g=d[1]/p[1],x=0;x<s;x++)for(var b=0;b<r;b++)for(var y=m*b,w=Math.floor(y),_=y-w,k=Math.min(u-1,Math.ceil(y)),S=x*e.strides[0]+w*e.strides[1],R=x*e.strides[0]+k*e.strides[1],I=0;I<o;I++)for(var P=g*I,N=Math.floor(P),V=P-N,U=Math.min(c-1,Math.ceil(P)),z=S+N*e.strides[2],j=R+N*e.strides[2],W=S+U*e.strides[2],B=R+U*e.strides[2],q=0;q<l;q++){var $=f[z+q],te=f[j+q],oe=$+(f[W+q]-$)*V,pe=oe+(te+(f[B+q]-te)*V-oe)*_;h[v++]=pe}return ht(h,[s,r,o,l])},t.prototype.resizeBilinearBackprop=function(e,r,o){X([e,r],"resizeBilinearBackprop");for(var i=r.shape,a=i[0],s=i[1],u=i[2],c=i[3],l=e.shape,f=l[1],h=l[2],d=new Float32Array(a*s*u*c),p=[o&&f>1?s-1:s,o&&h>1?u-1:u],v=[o&&f>1?f-1:f,o&&h>1?h-1:h],m=p[0]/v[0],g=p[1]/v[1],x=this.readSync(e.dataId),b=0,y=0;y<a;y++)for(var w=y*r.strides[0],_=0;_<f;_++)for(var k=_*m,S=Math.floor(k),R=Math.min(Math.ceil(k),s-1),I=w+S*r.strides[1],P=w+R*r.strides[1],N=k-S,V=1-N,U=0;U<h;U++)for(var z=U*g,j=Math.floor(z),W=Math.min(Math.ceil(z),u-1),B=z-j,q=1-B,$=I+j*r.strides[2],te=I+W*r.strides[2],oe=P+j*r.strides[2],pe=P+W*r.strides[2],_e=V*q,Ce=V*B,me=N*q,Re=N*B,Se=0;Se<c;Se++){var Te=x[b++];d[$+Se]+=Te*_e,d[te+Se]+=Te*Ce,d[oe+Se]+=Te*me,d[pe+Se]+=Te*Re}return Ct(d,[a,u,s,c],r.dtype)},t.prototype.resizeNearestNeighbor=function(e,r,o,i){X(e,"resizeNearestNeighbor");for(var a=e.shape,s=a[0],u=a[1],c=a[2],l=a[3],f=this.readSync(e.dataId),h=new Float32Array(s*r*o*l),d=[i&&r>1?u-1:u,i&&o>1?c-1:c],p=[i&&r>1?r-1:r,i&&o>1?o-1:o],v=d[0]/p[0],m=d[1]/p[1],g=0,x=0;x<s;x++)for(var b=x*e.strides[0],y=0;y<r;y++)for(var w=v*y,_=b+Math.min(u-1,i?Math.round(w):Math.floor(w))*e.strides[1],k=0;k<o;k++)for(var S=m*k,R=_+Math.min(c-1,i?Math.round(S):Math.floor(S))*e.strides[2],I=0;I<l;I++){var P=f[R+I];h[g++]=P}return ht(h,[s,r,o,l],e.dtype)},t.prototype.resizeNearestNeighborBackprop=function(e,r,o){X([e,r],"resizeNearestNeighborBackprop");for(var i=r.shape,a=i[0],s=i[1],u=i[2],c=i[3],l=e.shape,f=l[1],h=l[2],d=new Float32Array(a*s*u*c),p=this.readSync(e.dataId),v=[o&&f>1?s-1:s,o&&h>1?u-1:u],m=[o&&f>1?f-1:f,o&&h>1?h-1:h],g=v[0]/m[0],x=v[1]/m[1],b=1/g,y=1/x,w=2*Math.ceil(b)+2,_=2*Math.ceil(y)+2,k=0;k<a;k++)for(var S=k*r.strides[0],R=0;R<s;R++)for(var I=S+R*r.strides[1],P=Math.floor(R*b),N=Math.floor(P-w/2),V=0;V<u;V++)for(var U=I+V*r.strides[2],z=Math.floor(V*y),j=Math.floor(z-_/2),W=0;W<c;W++){for(var B=0,q=0;q<w;q++){var $=q+N;if(!($<0||$>=f)){var te=S+$*e.strides[1],oe=$*g;if(R===Math.min(s-1,o?Math.round(oe):Math.floor(oe)))for(var pe=0;pe<_;pe++){var _e=pe+j;if(!(_e<0||_e>=h)){var Ce=te+_e*e.strides[2],me=_e*x;V===Math.min(u-1,o?Math.round(me):Math.floor(me))&&(B+=p[Ce+W])}}}}d[U+W]=B}return Ct(d,r.shape,r.dtype)},t.prototype.batchNormalization=function(e,r,o,i,a,s){X([e,r,o,a,s],"batchNorm");for(var u=this.readSync(e.dataId),c=this.readSync(r.dataId),l=this.readSync(o.dataId),f=a?this.readSync(a.dataId):new Float32Array([1]),h=s?this.readSync(s.dataId):new Float32Array([0]),d=new Float32Array(u.length),p=h.length,v=f.length,m=l.length,g=c.length,x=0,b=0,y=0,w=0,_=0;_<u.length;++_)d[_]=h[x++]+(u[_]-c[b++])*f[y++]/Math.sqrt(l[w++]+i),x>=p&&(x=0),b>=g&&(b=0),y>=v&&(y=0),w>=m&&(w=0);return Ct(d,e.shape)},t.prototype.localResponseNormalization4D=function(e,r,o,i,a){X(e,"localResponseNormalization4D");var s=e.shape[3],u=s-1,c=this.readSync(e.dataId),l=e.size,f=new Float32Array(l);function h(m){for(var g=m%s,x=m-g+Math.max(0,g-r),b=m-g+Math.min(g+r,u),y=0;x<=b;x++){var w=c[x];y+=w*w}return y}for(var d=0;d<l;d++){var p=h(d),v=c[d]*Math.pow(o+i*p,-a);f[d]=v}return Ct(f,e.shape)},t.prototype.LRNGrad=function(e,r,o,i,a,s,u){X(e,"LRNGrad");for(var c=e.shape[3],l=this.readSync(e.dataId),f=this.readSync(r.dataId),h=this.readSync(o.dataId),d=new Float32Array(e.size),p=e.size,v=0;v<p;v++){for(var m=v%c,g=v-m+Math.max(0,m-i),x=v-m+Math.min(c,m+i+1),b=0,y=g;y<x;y++)b+=Math.pow(f[y],2);for(b=s*b+a,y=g;y<x;y++){var w=-2*s*u*f[y]*h[v]/b;v===y&&(w+=Math.pow(b,-u)),w*=l[v],d[y]+=w}}return Ct(d,e.shape)},t.prototype.multinomial=function(e,r,o,i){X(e,"multinomial");for(var a=r?e:Sn(e),s=a.shape[0],u=a.shape[1],c=ze([s,o],"int32"),l=this.readSync(c.dataId),f=this.readSync(a.dataId),h=0;h<s;++h){var d=h*u,p=new Float32Array(u-1);p[0]=f[d];for(var v=1;v<p.length;++v)p[v]=p[v-1]+f[d+v];for(var m=Zi(i.toString()),g=h*o,x=0;x<o;++x){var b=m();l[g+x]=p.length;for(var y=0;y<p.length;y++)if(b<p[y]){l[g+x]=y;break}}}return c},t.prototype.oneHot=function(e,r,o,i){X(e,"oneHot");var a=new Float32Array(e.size*r);a.fill(i);for(var s=this.readSync(e.dataId),u=0;u<e.size;++u)s[u]>=0&&s[u]<r&&(a[u*r+s[u]]=o);return Hn(a,[e.size,r],"int32")},t.prototype.nonMaxSuppression=function(e,r,o,i,a){return X(e,"nonMaxSuppression"),iu(this.readSync(e.dataId),this.readSync(r.dataId),o,i,a)},t.prototype.fft=function(e){return this.fftBatch(e,!1)},t.prototype.ifft=function(e){return this.fftBatch(e,!0)},t.prototype.fftBatch=function(e,r){for(var o=e.shape[0],i=e.shape[1],a=be(e.shape,"float32"),s=be(e.shape,"float32"),u=Vt(e).as2D(o,i),c=un(e).as2D(o,i),l=0;l<o;l++)for(var f=u.slice([l,0],[1,i]),h=c.slice([l,0],[1,i]),d=lt(f,h),p=this.readSync(this.fftImpl(d,r).dataId),v=0;v<i;v++){var m=Xc(p,v);a.values[l*i+v]=m.real,s.values[l*i+v]=m.imag}return lt(a.toTensor(),s.toTensor()).as2D(o,i)},t.prototype.fftImpl=function(e,r){var o=e.as1D(),i=o.size;if(this.isExponentOf2(i)){var a=this.fftRadix2(o,i,r).as2D(e.shape[0],e.shape[1]);return r&&(a=lt(Vt(a).div(re(i)),un(a).div(re(i)))),a}var s=this.readSync(e.dataId),u=function(c){for(var l=new Float32Array(c.length/2),f=new Float32Array(c.length/2),h=0;h<c.length;h+=2)l[h/2]=c[h],f[h/2]=c[h+1];return{real:l,imag:f}}(this.fourierTransformByMatmul(s,i,r));return lt(u.real,u.imag).as2D(e.shape[0],e.shape[1])},t.prototype.isExponentOf2=function(e){return(e&e-1)==0},t.prototype.fftRadix2=function(e,r,o){if(r===1)return e;var i=this.readSync(e.dataId),a=r/2,s=function(g){for(var x=Math.ceil(g.length/4),b=new Float32Array(x),y=new Float32Array(x),w=0;w<g.length;w+=4)b[Math.floor(w/4)]=g[w],y[Math.floor(w/4)]=g[w+1];return{real:b,imag:y}}(i),u=lt(s.real,s.imag).as1D(),c=function(g){for(var x=Math.floor(g.length/4),b=new Float32Array(x),y=new Float32Array(x),w=2;w<g.length;w+=4)b[Math.floor(w/4)]=g[w],y[Math.floor(w/4)]=g[w+1];return{real:b,imag:y}}(i),l=lt(c.real,c.imag).as1D();u=this.fftRadix2(u,a,o),l=this.fftRadix2(l,a,o);var f=function(g,x){for(var b=new Float32Array(g/2),y=new Float32Array(g/2),w=0;w<Math.ceil(g/2);w++){var _=(x?2:-2)*Math.PI*(w/g);b[w]=Math.cos(_),y[w]=Math.sin(_)}return{real:b,imag:y}}(r,o),h=lt(f.real,f.imag).mul(l),d=u.add(h),p=u.sub(h),v=Vt(d).concat(Vt(p)),m=un(d).concat(un(p));return lt(v,m).as1D()},t.prototype.fourierTransformByMatmul=function(e,r,o){for(var i=new Float32Array(2*r),a=0;a<r;a++){for(var s=0,u=0,c=0;c<r;c++){var l=y0(a*c,r,o),f=Xc(e,c);s+=f.real*l.real-f.imag*l.imag,u+=f.real*l.imag+f.imag*l.real}o&&(s/=r,u/=r),g0(i,s,u,a)}return i},t.prototype.depthToSpace=function(e,r,o){E(o==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o}),E(r>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+r});for(var i=e.shape[0],a=e.shape[1],s=e.shape[2],u=e.shape[3],c=a*r,l=s*r,f=u/(r*r),h=this.readSync(e.dataId),d=new Float32Array(i*c*l*f),p=0,v=0;v<i;++v)for(var m=0;m<c;++m)for(var g=Math.floor(m/r),x=m%r,b=0;b<l;++b)for(var y=Math.floor(b/r),w=(x*r+b%r)*f,_=0;_<f;++_){var k=_+w+u*(y+s*(g+a*v));d[p++]=h[k]}return Ct(d,[i,c,l,f])},t.prototype.broadcastedBinaryOp=function(e,r,o,i){var a=Ne(e.shape,r.shape),s=be(a,o),u=this.readSync(e.dataId),c=this.readSync(r.dataId),l=Wn(e.shape,a),f=Wn(r.shape,a),h=s.values;if(l.length+f.length===0)for(var d=0;d<h.length;++d)h[d]=i(u[d%u.length],c[d%c.length]);else{var p=this.bufferSync(e),v=this.bufferSync(r),m=function(g){var x=s.indexToLoc(g),b=x.slice(-e.rank);l.forEach(function(k){return b[k]=0});var y=p.locToIndex(b),w=x.slice(-r.rank);f.forEach(function(k){return w[k]=0});var _=v.locToIndex(w);h[g]=i(u[y],c[_])};for(d=0;d<h.length;++d)m(d)}return s.toTensor()},t.prototype.broadcastedBinaryComplexOp=function(e,r,o){var i=Ne(e.shape,r.shape),a=be(i,"float32"),s=be(i,"float32"),u=this.readSync(e.dataId),c=this.readSync(r.dataId),l=Wn(e.shape,i),f=Wn(r.shape,i),h=a.values,d=s.values;if(l.length+f.length===0)for(var p=0;p<h.length;p++){var v=p%u.length,m=p%c.length,g=o(u[2*v],u[2*v+1],c[2*m],c[2*m+1]);h[p]=g.real,d[p]=g.imag}else{var x=this.bufferSync(this.data.get(e.dataId).complexTensors.real),b=this.bufferSync(this.data.get(r.dataId).complexTensors.real),y=function(w){var _=a.indexToLoc(w),k=_.slice(-e.rank);l.forEach(function(N){return k[N]=0});var S=x.locToIndex(k),R=_.slice(-r.rank);f.forEach(function(N){return R[N]=0});var I=b.locToIndex(R),P=o(u[2*S],u[2*S+1],c[2*I],c[2*I+1]);h[w]=P.real,d[w]=P.imag};for(p=0;p<h.length;p++)y(p)}return this.complex(a.toTensor(),s.toTensor())},t.prototype.split=function(e,r,o){return gh(e,r,o)},t.prototype.dispose=function(){},t.prototype.floatPrecision=function(){return 32},t.prototype.epsilon=function(){return 1e-7},t.prototype.cropAndResize=function(e,r,o,i,a,s){for(var u=e.shape,c=u[0],l=u[1],f=u[2],h=u[3],d=r.shape[0],p=i[0],v=i[1],m=be([d,p,v,h],"float32"),g=this.readSync(r.dataId),x=this.readSync(o.dataId),b=this.readSync(e.dataId),y=e.strides,w=m.strides,_=0;_<d;_++){var k=4*_,S=g[k],R=g[k+1],I=g[k+2],P=g[k+3],N=x[_];if(!(N>=c))for(var V=p>1?(I-S)*(l-1)/(p-1):0,U=v>1?(P-R)*(f-1)/(v-1):0,z=0;z<p;z++){var j=p>1?S*(l-1)+z*V:.5*(S+I)*(l-1);if(j<0||j>l-1)for(var W=0;W<v;W++)for(var B=0;B<h;B++){var q=B+W*w[2]+z*w[1]+_*w[0];m.values[q]=s}else if(a==="bilinear"){var $=Math.floor(j),te=Math.ceil(j),oe=j-$;for(W=0;W<v;W++)if((Ae=v>1?R*(f-1)+W*U:.5*(R+P)*(f-1))<0||Ae>f-1)for(B=0;B<h;B++)q=B+W*w[2]+z*w[1]+_*w[0],m.values[q]=s;else{var pe=Math.floor(Ae),_e=Math.ceil(Ae),Ce=Ae-pe;for(B=0;B<h;B++){var me=b[q=B+pe*y[2]+$*y[1]+N*y[0]],Re=b[q=B+_e*y[2]+$*y[1]+N*y[0]],Se=b[q=B+pe*y[2]+te*y[1]+N*y[0]],Te=me+(Re-me)*Ce,Ue=Se+(b[q=B+_e*y[2]+te*y[1]+N*y[0]]-Se)*Ce;q=B+W*w[2]+z*w[1]+_*w[0],m.values[q]=Te+(Ue-Te)*oe}}}else for(W=0;W<v;++W){var Ae;if((Ae=v>1?R*(f-1)+W*U:.5*(R+P)*(f-1))<0||Ae>f-1)for(B=0;B<h;B++)q=B+W*w[2]+z*w[1]+_*w[0],m.values[q]=s;else{var Me=Math.round(Ae),A=Math.round(j);for(B=0;B<h;B++){var T=B+Me*y[2]+A*y[1]+N*y[0],O=B+W*w[2]+z*w[1]+_*w[0];m.values[O]=b[T]}}}}}return m.toTensor()},t.prototype.sparseToDense=function(e,r,o,i){var a=Ai(0,e,o),s=a.sliceRank,u=a.numUpdates,c=a.sliceSize,l=a.strides,f=a.outputSize;return this.scatter(e,r,o,f,c,u,s,l,i,!1)},t.prototype.gatherND=function(e,r){var o=r.shape,i=o[o.length-1],a=sh(e,r),s=a[0],u=a[1],c=a[2],l=a[3];if(u===0)return ht([],s,e.dtype);for(var f=new wo([u,c],e.dtype),h=this.readSync(r.dataId),d=this.readSync(e.dataId),p=0;p<u;p++){for(var v=[],m=0,g=0;g<i;g++){var x=h[p*i+g];m+=x*l[g],v.push(x)}if(m<0||m>=e.size/c)throw new Error("Invalid indices: "+v+" does not index into "+e.shape);for(var b=0;b<c;b++)f.values[p*c+b]=d[m*c+b]}return f.toTensor().reshape(s)},t.prototype.scatterND=function(e,r,o){var i=Ai(0,e,o),a=i.sliceRank,s=i.numUpdates,u=i.sliceSize,c=i.strides,l=i.outputSize,f=re(0);return this.scatter(e,r,o,l,u,s,a,c,f,!0)},t.prototype.fill=function(e,r,o){var i=xi(o=o||Ao(r),ce(e));return i.fill(r),F.makeTensor(i,e,o,this)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){var r=xi(e.dtype,ce(e.shape));return this.makeOutput(r,e.shape,e.dtype)},t.prototype.linspace=function(e,r,o){return vh(e,r,o)},t.prototype.scatter=function(e,r,o,i,a,s,u,c,l,f){var h=[i/a,a],d=this.readSync(e.dataId),p=this.readSync(r.dataId);if(i===0)return ht([],o,r.dtype);var v=new wo(h,r.dtype);v.values.fill(this.readSync(l.dataId)[0]);for(var m=0;m<s;m++){for(var g=[],x=0,b=0;b<u;b++){var y=d[m*u+b];g.push(y),x+=y*c[b]}if(x<0||x>=i/a)throw new Error("Invalid indices: "+g+" does not index into "+o);for(var w=0;w<a;w++)f?v.values[x*a+w]+=p[m*a+w]:v.values[x*a+w]=r.rank===0?p[0]:p[m*a+w]}return v.toTensor().reshape(o)},t}(hh);F.registerBackend("cpu",function(){return new L1},1);for(var Va=0,ml=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=n.attrs,o=t,i=o.boxes,a=o.scores,s=r,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=e;X(i,"NonMaxSuppressionWithScore");var d=au(h.data.get(i.dataId).values,h.data.get(a.dataId).values,u,c,l,f);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t.x,o=e;X(r,"square");for(var i=o.data.get(r.dataId).values,a=new Float32Array(i.length),s=0;s<i.length;++s){var u=i[s];a[s]=u*u}return{dataId:o.write(a,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}},{kernelName:Eo,backendName:"cpu",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t,o=r.a,i=r.b,a=e;X([o,i],Eo);var s=a.data.get(o.dataId).values,u=a.data.get(i.dataId).values,c=function(h,d,p,v,m,g){var x=Ne(h,d),b=x.length,y=fn(x),w=bo(m,ce(x)),_=h.length,k=d.length,S=fn(h),R=fn(d),I=Wn(h,x),P=Wn(d,x);if(I.length+P.length===0)for(var N=0;N<w.length;++N)w[N]=g(p[N%p.length],v[N%v.length]);else{var V=function(U){var z=Xm(U,b,y),j=z.slice(-_);I.forEach(function($){return j[$]=0});var W=Wc(j,_,S),B=z.slice(-k);P.forEach(function($){return B[$]=0});var q=Wc(B,k,R);w[U]=g(p[W],v[q])};for(N=0;N<w.length;++N)V(N)}return[w,x]}(o.shape,i.shape,s,u,o.dtype,function(h,d){var p=h-d;return p*p}),l=c[0],f=c[1];return{dataId:a.write(l,f,o.dtype),shape:f,dtype:o.dtype}}}];Va<ml.length;Va++)Uf(ml[Va]);var Er,W1=function(n){this.variableNames=["A"];var t=mt(),e=n[0],r=n[1];this.outputShape=n,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+r+".0, "+e+`.0);

        vec4 values = `+t.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},U1=function(n){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=mt(),e=n[0],r=n[1];this.outputShape=n,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+r+".0, "+e+`.0);
            vec4 values = `+t.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+t.output+` = result;
      }
    `};for(var za=0,gl=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=n.attrs,o=t.pixels,i=r.numChannels,a=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=a?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=u[0],l=u[1],f=[l,c],h=[l,c,i];(s||a)&&(Er==null&&(Er=document.createElement("canvas").getContext("2d")),Er.canvas.width=c,Er.canvas.height=l,Er.drawImage(o,0,0,c,l),o=Er.canvas);var d=e.makeTensorInfo(f,"int32");e.texData.get(d.dataId).usage=Ot.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(d.dataId),o);var p=H().getBool("WEBGL_PACK")?new U1(h):new W1(h),v=e.runWebGLProgram(p,[d],"int32");return e.disposeData(d.dataId),v}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=n.attrs;Ci("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=t,i=o.boxes,a=o.scores,s=r,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,f=s.softNmsSigma,h=e,d=au(h.readSync(i.dataId),h.readSync(a.dataId),u,c,l,f);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t.x,o=e,i=new Ee(r.shape,"return x * x;");return o.runWebGLProgram(i,[r],r.dtype)}},{kernelName:Eo,backendName:"webgl",kernelFunc:function(n){var t=n.inputs,e=n.backend,r=t,o=r.a,i=r.b,a=e,s=H().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new bn("return (a - b) * (a - b);",o.shape,i.shape):new Xe("return (a - b) * (a - b);",o.shape,i.shape);return a.compileAndRun(s,[o,i])}}];za<gl.length;za++)Uf(gl[za]);for(var Ha=0,yl=[{kernelName:"Square",gradFunc:function(n,t){var e=t[0];return{x:function(){return n.mul(e.toFloat().mul(2))}}}},{kernelName:Eo,gradFunc:function(n,t){var e=t[0],r=t[1],o=re(2);return{a:function(){return yt(n,yt(o,nt(e,r)))},b:function(){return yt(n,yt(o,nt(r,e)))}}}}];Ha<yl.length;Ha++)Bm(yl[Ha]);var V1=function(){function n(){}return n.prototype.fetch=function(t,e){return fetch(t,e)},n.prototype.now=function(){return performance.now()},n.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+e);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},n.prototype.decode=function(t,e){return new TextDecoder(e).decode(t)},n}();H().get("IS_BROWSER")&&H().setPlatform("browser",new V1);var Ga,z1=function(){return require("node-fetch")},H1=function(){function n(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return n.prototype.fetch=function(t,e){return H().global.fetch!=null?H().global.fetch(t,e):(Ga==null&&(Ga=z1()),Ga(t,e))},n.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},n.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)},n.prototype.decode=function(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)},n}();H().get("IS_NODE")&&H().setPlatform("node",new H1);var Cs={float32:4,int32:4,uint16:2,uint8:1,bool:1},Oi=4;function cd(n,t){for(var e={},r=0,o=function(s){var u=s.name,c=s.dtype,l=s.shape,f=ce(l),h=void 0;if("quantization"in s){var d=s.quantization;if(d.dtype!=="uint8"&&d.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+d.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var p=Cs[d.dtype],v=n.slice(r,r+f*p),m=d.dtype==="uint8"?new Uint8Array(v):new Uint16Array(v);if(c==="float32")h=Float32Array.from(m,function(_){return _*d.scale+d.min});else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=Int32Array.from(m,function(_){return Math.round(_*d.scale+d.min)})}r+=f*p}else if(c==="string"){var g=ce(s.shape);h=[];for(var x=0;x<g;x++){var b=new Uint32Array(n.slice(r,r+Oi))[0];r+=Oi;var y=new Uint8Array(n.slice(r,r+b));h.push(y),r+=b}}else{var w=Cs[c];if(v=n.slice(r,r+f*w),c==="float32")h=new Float32Array(v);else if(c==="int32")h=new Int32Array(v);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);h=new Uint8Array(v)}r+=f*w}e[u]=ht(h,l,c)},i=0,a=t;i<a.length;i++)o(a[i]);return e}function G1(n){if(n===null)throw new Error("Invalid input value: "+JSON.stringify(n));var t=0,e=[];n.forEach(function(i){if(t+=i.byteLength,e.push(i.byteLength===i.buffer.byteLength?i:new i.constructor(i)),!(i instanceof Float32Array||i instanceof Int32Array||i instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+i.constructor.name)});var r=new Uint8Array(t),o=0;return e.forEach(function(i){r.set(new Uint8Array(i.buffer),o),o+=i.byteLength}),r.buffer}var Es=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function xl(n){return Es?Buffer.byteLength(n):new Blob([n]).size}function Iu(n){var t=0;n.forEach(function(o){t+=o.byteLength});var e=new Uint8Array(t),r=0;return n.forEach(function(o){e.set(new Uint8Array(o),r),r+=o.byteLength}),e.buffer}function bl(n){for(n=n.trim();n.endsWith("/");)n=n.slice(0,n.length-1);var t=n.split("/");return t[t.length-1]}function Oo(n){if(n.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:n.modelTopology==null?0:xl(JSON.stringify(n.modelTopology)),weightSpecsBytes:n.weightSpecs==null?0:xl(JSON.stringify(n.weightSpecs)),weightDataBytes:n.weightData==null?0:n.weightData.byteLength}}var Bt=function(){function n(){this.saveRouters=[],this.loadRouters=[]}return n.getInstance=function(){return n.instance==null&&(n.instance=new n),n.instance},n.registerSaveRouter=function(t){n.getInstance().saveRouters.push(t)},n.registerLoadRouter=function(t){n.getInstance().loadRouters.push(t)},n.getSaveHandlers=function(t){return n.getHandlers(t,"save")},n.getLoadHandlers=function(t,e){return n.getHandlers(t,"load",e)},n.getHandlers=function(t,e,r){var o=[];return(e==="load"?n.getInstance().loadRouters:n.getInstance().saveRouters).forEach(function(i){var a=i(t,r);a!==null&&o.push(a)}),o},n}(),Br="://",Gn=function(){function n(){this.managers={}}return n.getInstance=function(){return n.instance==null&&(n.instance=new n),n.instance},n.registerManager=function(t,e){E(t!=null,function(){return"scheme must not be undefined or null."}),t.endsWith(Br)&&(t=t.slice(0,t.indexOf(Br))),E(t.length>0,function(){return"scheme must not be an empty string."});var r=n.getInstance();E(r.managers[t]==null,function(){return"A model store manager is already registered for scheme '"+t+"'."}),r.managers[t]=e},n.getManager=function(t){var e=this.getInstance().managers[t];if(e==null)throw new Error("Cannot find model manager for scheme '"+t+"'");return e},n.getSchemes=function(){return Object.keys(this.getInstance().managers)},n}();function hi(n){if(n.indexOf(Br)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+Gn.getSchemes().join(","));return{scheme:n.split(Br)[0],path:n.split(Br)[1]}}function wl(n,t,e){return e===void 0&&(e=!1),se(this,void 0,void 0,function(){var r,o,i,a,s,u,c,l,f;return ue(this,function(h){switch(h.label){case 0:return E(n!==t,function(){return"Old path and new path are the same: '"+n+"'"}),E((r=Bt.getLoadHandlers(n)).length>0,function(){return"Copying failed because no load handler is found for source URL "+n+"."}),E(r.length<2,function(){return"Copying failed because more than one ("+r.length+") load handlers for source URL "+n+"."}),o=r[0],E((i=Bt.getSaveHandlers(t)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+t+"."}),E(i.length<2,function(){return"Copying failed because more than one ("+r.length+") save handlers for destination URL "+t+"."}),a=i[0],s=hi(n).scheme,u=hi(n).path,c=s===hi(n).scheme,[4,o.load()];case 1:return l=h.sent(),e&&c?[4,Gn.getManager(s).removeModel(u)]:[3,3];case 2:h.sent(),h.label=3;case 3:return[4,a.save(l)];case 4:return f=h.sent(),!e||c?[3,6]:[4,Gn.getManager(s).removeModel(u)];case 5:h.sent(),h.label=6;case 6:return[2,f.modelArtifactsInfo]}})})}var cr="models_store",Un="model_info_store";function ld(){if(!H().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var n=window||self,t=n.indexedDB||n.mozIndexedDB||n.webkitIndexedDB||n.msIndexedDB||n.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Is(n){var t=n.result;t.createObjectStore(cr,{keyPath:"modelPath"}),t.createObjectStore(Un,{keyPath:"modelPath"})}var Lr=function(){function n(t){if(this.indexedDB=ld(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}return n.prototype.save=function(t){return se(this,void 0,void 0,function(){return ue(this,function(e){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,t)]})})},n.prototype.load=function(){return se(this,void 0,void 0,function(){return ue(this,function(t){return[2,this.databaseAction(this.modelPath)]})})},n.prototype.databaseAction=function(t,e){var r=this;return new Promise(function(o,i){var a=r.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return Is(a)},a.onsuccess=function(){var s=a.result;if(e==null){var u=s.transaction(cr,"readonly"),c=u.objectStore(cr).get(r.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),i(new Error("Cannot find model with path '"+r.modelPath+"' in IndexedDB."));o(c.result.modelArtifacts)},c.onerror=function(v){return s.close(),i(c.error)},u.oncomplete=function(){return s.close()}}else{var l,f=Oo(e),h=s.transaction(Un,"readwrite"),d=h.objectStore(Un),p=d.put({modelPath:r.modelPath,modelArtifactsInfo:f});p.onsuccess=function(){var v=(l=s.transaction(cr,"readwrite")).objectStore(cr).put({modelPath:r.modelPath,modelArtifacts:e,modelArtifactsInfo:f});v.onsuccess=function(){return o({modelArtifactsInfo:f})},v.onerror=function(m){var g=(d=h.objectStore(Un)).delete(r.modelPath);g.onsuccess=function(){return s.close(),i(v.error)},g.onerror=function(x){return s.close(),i(v.error)}}},p.onerror=function(v){return s.close(),i(p.error)},h.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},a.onerror=function(s){return i(a.error)}})},n.URL_SCHEME="indexeddb://",n}(),_l=function(n){return H().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Lr.URL_SCHEME)?(t=n.slice(Lr.URL_SCHEME.length),new Lr(t)):null;var t};Bt.registerSaveRouter(_l),Bt.registerLoadRouter(_l);var j1=function(){function n(){this.indexedDB=ld()}return n.prototype.listModels=function(){return se(this,void 0,void 0,function(){var t=this;return ue(this,function(e){return[2,new Promise(function(r,o){var i=t.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return Is(i)},i.onsuccess=function(){var a=i.result,s=a.transaction(Un,"readonly"),u=s.objectStore(Un).getAll();u.onsuccess=function(){for(var c={},l=0,f=u.result;l<f.length;l++){var h=f[l];c[h.modelPath]=h.modelArtifactsInfo}r(c)},u.onerror=function(c){return a.close(),o(u.error)},s.oncomplete=function(){return a.close()}},i.onerror=function(a){return o(i.error)}})]})})},n.prototype.removeModel=function(t){return se(this,void 0,void 0,function(){var e=this;return ue(this,function(r){var o;return t=(o=t).startsWith(Lr.URL_SCHEME)?o.slice(Lr.URL_SCHEME.length):o,[2,new Promise(function(i,a){var s=e.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return Is(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(Un,"readwrite"),f=l.objectStore(Un),h=f.get(t);h.onsuccess=function(){if(h.result==null)return c.close(),a(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var d=f.delete(t),p=function(){var v=(u=c.transaction(cr,"readwrite")).objectStore(cr).delete(t);v.onsuccess=function(){return i(h.result.modelArtifactsInfo)},v.onerror=function(m){return a(h.error)}};d.onsuccess=p,d.onerror=function(v){return p(),c.close(),a(h.error)}},h.onerror=function(d){return c.close(),a(h.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return a(s.error)}})]})})},n}();if(H().getBool("IS_BROWSER"))try{Gn.registerManager(Lr.URL_SCHEME,new j1)}catch{}var _n="/",Dr="tensorflowjs_models",fd="info",q1="model_topology",K1="weight_specs",X1="weight_data",$1="model_metadata";function hd(n){return{info:[Dr,n,fd].join(_n),topology:[Dr,n,q1].join(_n),weightSpecs:[Dr,n,K1].join(_n),weightData:[Dr,n,X1].join(_n),modelMetadata:[Dr,n,$1].join(_n)}}function Y1(n){var t=n.split(_n);if(t.length<3)throw new Error("Invalid key format: "+n);return t.slice(1,t.length-1).join(_n)}var Wr=function(){function n(t){if(!H().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=hd(this.modelPath)}return n.prototype.save=function(t){return se(this,void 0,void 0,function(){var e,r,o;return ue(this,function(i){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(t.modelTopology),r=JSON.stringify(t.weightSpecs),o=Oo(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,r),this.LS.setItem(this.keys.weightData,function(a){if(Es)return Buffer.from(a).toString("base64");for(var s=new Uint8Array(a),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)}(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]})})},n.prototype.load=function(){return se(this,void 0,void 0,function(){var t,e,r,o,i,a,s;return ue(this,function(u){if((t=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},(r=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=r,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=o,(i=this.LS.getItem(this.keys.modelMetadata))!=null&&(a=JSON.parse(i),e.format=a.format,e.generatedBy=a.generatedBy,e.convertedBy=a.convertedBy,e.userDefinedMetadata=a.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=function(c){if(Es){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var f=atob(c),h=new Uint8Array(f.length),d=0;d<f.length;++d)h.set([f.charCodeAt(d)],d);return h.buffer}(s),[2,e]})})},n.URL_SCHEME="localstorage://",n}(),Cl=function(n){return H().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(Wr.URL_SCHEME)?(t=n.slice(Wr.URL_SCHEME.length),new Wr(t)):null;var t};Bt.registerSaveRouter(Cl),Bt.registerLoadRouter(Cl);var J1=function(){function n(){E(H().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),E(typeof window>"u"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return n.prototype.listModels=function(){return se(this,void 0,void 0,function(){var t,e,r,o,i,a;return ue(this,function(s){for(t={},e=Dr+_n,r=_n+fd,o=0;o<this.LS.length;++o)(i=this.LS.key(o)).startsWith(e)&&i.endsWith(r)&&(a=Y1(i),t[a]=JSON.parse(this.LS.getItem(i)));return[2,t]})})},n.prototype.removeModel=function(t){return se(this,void 0,void 0,function(){var e,r;return ue(this,function(o){var i;if(t=(i=t).startsWith(Wr.URL_SCHEME)?i.slice(Wr.URL_SCHEME.length):i,e=hd(t),this.LS.getItem(e.info)==null)throw new Error("Cannot find model at path '"+t+"'");return r=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,r]})})},n}();if(H().getBool("IS_BROWSER"))try{Gn.registerManager(Wr.URL_SCHEME,new J1)}catch{}var Q1="model",Z1=".json",ew=".weights.bin";function El(n){return new Promise(function(t){return setTimeout(t)}).then(n)}var ja=function(){function n(t){if(!H().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(n.URL_SCHEME)&&(t=t.slice(n.URL_SCHEME.length)),t!=null&&t.length!==0||(t=Q1),this.modelTopologyFileName=t+Z1,this.weightDataFileName=t+ew}return n.prototype.save=function(t){return se(this,void 0,void 0,function(){var e,r,o,i,a,s;return ue(this,function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return r=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:r},i=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(a=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,a.href=i,[4,El(function(){return a.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),t.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,El(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:Oo(t)}]}})})},n.URL_SCHEME="downloads://",n}(),tw=function(){function n(t){if(t==null||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}return n.prototype.load=function(){return se(this,void 0,void 0,function(){var t,e,r=this;return ue(this,function(o){return t=this.files[0],e=this.files.slice(1),[2,new Promise(function(i,a){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){e.length===0&&i({modelTopology:l});var f=c.weightsManifest;if(f!=null){var h;try{h=r.checkManifestAndWeightFiles(f,e)}catch(m){return void a(m)}var d=[],p=[],v=[];f.forEach(function(m){m.paths.forEach(function(g){p.push(g),v.push(null)}),d.push.apply(d,m.weights)}),f.forEach(function(m){m.paths.forEach(function(g){var x=new FileReader;x.onload=function(b){var y=b.target.result,w=p.indexOf(g);v[w]=y,v.indexOf(null)===-1&&i({modelTopology:l,weightSpecs:d,weightData:Iu(v),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},x.onerror=function(b){return a("Failed to weights data from file of path '"+g+"'.")},x.readAsArrayBuffer(h[g])})})}else a(new Error("weightManifest field is missing from file "+t.name))}else a(new Error("modelTopology field is missing from file "+t.name))},s.onerror=function(u){return a("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(t)})]})})},n.prototype.checkManifestAndWeightFiles=function(t,e){for(var r=[],o=e.map(function(u){return bl(u.name)}),i={},a=0,s=t;a<s.length;a++)s[a].paths.forEach(function(u){var c=bl(u);if(r.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(r.push(c),o.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");i[u]=e[o.indexOf(c)]});if(r.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+r.length+") and the number of weight files provided ("+e.length+").");return i},n}();function Il(n,t,e,r){(function(i){E(i!=null&&Array.isArray(i)&&i.length>0,function(){return"promises must be a none empty array"})})(n),function(i,a){E(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+i}),E(a>=0&&a<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+a}),E(a>=i,function(){return"startFraction must be no more than endFraction, but got startFraction "+i+" and endFraction "+a})}(e=e??0,r=r??1);var o=0;return Promise.all(n.map(function(i){return i.then(function(a){var s=e+ ++o/n.length*(r-e);return t(s),a}),i}))}function dd(n,t){return se(this,void 0,void 0,function(){var e,r,o,i,a,s,u,c,l;return ue(this,function(f){switch(f.label){case 0:return t==null&&(t={}),e=t.fetchFunc==null?H().platform.fetch:t.fetchFunc,r=n.map(function(h){return e(h,t.requestInit,{isBinary:!0})}),o=0,i=.5,t.onProgress!=null?[3,2]:[4,Promise.all(r)];case 1:return a=f.sent(),[3,4];case 2:return[4,Il(r,t.onProgress,o,i)];case 3:a=f.sent(),f.label=4;case 4:return s=a.map(function(h){return h.arrayBuffer()}),u=.5,c=1,t.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=f.sent(),[3,8];case 6:return[4,Il(s,t.onProgress,u,c)];case 7:l=f.sent(),f.label=8;case 8:return[2,l]}})})}function Rl(n){var t=this;return function(e,r,o){return r===void 0&&(r=""),se(t,void 0,void 0,function(){var i,a,s,u,c,l,f,h,d,p;return ue(this,function(v){switch(v.label){case 0:if(i=e.map(function(){return!1}),a={},s=o!=null?o.map(function(){return!1}):[],u=[],e.forEach(function(m,g){var x=0;m.weights.forEach(function(b){var y="quantization"in b?b.quantization.dtype:b.dtype,w=Cs[y]*ce(b.shape),_=function(){i[g]=!0,a[g]==null&&(a[g]=[]),a[g].push({manifestEntry:b,groupOffset:x,sizeBytes:w})};o!=null?o.forEach(function(k,S){k===b.name&&(_(),s[S]=!0)}):_(),u.push(b.name),x+=w})}),!s.every(function(m){return m}))throw c=o.filter(function(m,g){return!s[g]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=i.reduce(function(m,g,x){return g&&m.push(x),m},[]),f=[],l.forEach(function(m){e[m].paths.forEach(function(g){var x=r+(r.endsWith("/")?"":"/")+g;f.push(x)})}),[4,n(f)];case 1:return h=v.sent(),d={},p=0,l.forEach(function(m){for(var g=e[m].paths.length,x=0,b=0;b<g;b++)x+=h[p+b].byteLength;for(var y=new ArrayBuffer(x),w=new Uint8Array(y),_=0,k=0;k<g;k++){var S=new Uint8Array(h[p+k]);w.set(S,_),_+=S.byteLength}a[m].forEach(function(R){var I=cd(y.slice(R.groupOffset,R.groupOffset+R.sizeBytes),[R.manifestEntry]);for(var P in I)d[P]=I[P]}),p+=g}),[2,d]}})})}}Bt.registerSaveRouter(function(n){return H().getBool("IS_BROWSER")&&!Array.isArray(n)&&n.startsWith(ja.URL_SCHEME)?function(t){return t===void 0&&(t="model"),new ja(t)}(n.slice(ja.URL_SCHEME.length)):null});var pd=function(){function n(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,e.fetchFunc!=null?(E(typeof e.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=e.fetchFunc):this.fetch=H().platform.fetch,E(t!=null&&t.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(t)&&E(t.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+t.length+")."}),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}return n.prototype.save=function(t){return se(this,void 0,void 0,function(){var e,r,o,i;return ue(this,function(a){switch(a.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,r=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:r},e.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((i=a.sent()).ok)return[2,{modelArtifactsInfo:Oo(t),responses:[i]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+i.status+".")}})})},n.prototype.load=function(){return se(this,void 0,void 0,function(){var t,e,r,o,i,a,s,u,c,l,f,h;return ue(this,function(d){switch(d.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=d.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");d.label=2;case 2:return d.trys.push([2,4,,5]),[4,t.json()];case 3:return e=d.sent(),[3,5];case 4:throw d.sent(),r="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?r+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":r+=" Please make sure the server is serving valid JSON for this request.",new Error(r);case 5:if(o=e.modelTopology,i=e.weightsManifest,a=e.generatedBy,s=e.convertedBy,u=e.format,c=e.userDefinedMetadata,o==null&&i==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return i==null?[3,7]:[4,this.loadWeights(i)];case 6:h=d.sent(),l=h[0],f=h[1],d.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:f,userDefinedMetadata:c,generatedBy:a,convertedBy:s,format:u}]}})})},n.prototype.loadWeights=function(t){return se(this,void 0,void 0,function(){var e,r,o,i,a,s,u,c,l,f,h;return ue(this,function(d){switch(d.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,r=function(p){var v=p.lastIndexOf("/"),m=p.lastIndexOf("?"),g=p.substring(0,v),x=m>v?p.substring(m):"";return[g+"/",x]}(e),o=r[0],i=r[1],a=this.weightPathPrefix||o,s=[],u=0,c=t;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return f=[],t.forEach(function(p){p.paths.forEach(function(v){f.push(a+v+i)})}),[4,dd(f,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return h=d.sent(),[2,[s,Iu(h)]]}})})},n.URL_SCHEME_REGEX=/^https?:\/\//,n}();function Rs(n){return n.match(pd.URL_SCHEME_REGEX)!=null}var Sl=function(n,t){return typeof fetch>"u"?null:(Array.isArray(n)?n.every(function(e){return Rs(e)}):Rs(n))?Ss(n,{onProgress:t}):null};function Ss(n,t){return new pd(n,t)}Bt.registerSaveRouter(Sl),Bt.registerLoadRouter(Sl);var qa=function(){function n(t){this.modelArtifacts=t}return n.prototype.load=function(){return se(this,void 0,void 0,function(){return ue(this,function(t){return[2,this.modelArtifacts]})})},n}(),nw=function(){function n(t){this.saveHandler=t}return n.prototype.save=function(t){return se(this,void 0,void 0,function(){return ue(this,function(e){return[2,this.saveHandler(t)]})})},n}(),vd=Object.freeze({browserFiles:function(n){return new tw(n)},browserHTTPRequest:function(n,t){return Ss(n,t)},concatenateArrayBuffers:Iu,decodeWeights:cd,encodeWeights:function(n,t){return se(this,void 0,void 0,function(){var e,r,o,i,a,s=this;return ue(this,function(u){switch(u.label){case 0:for(e=[],r=[],o=Array.isArray(n)?n.map(function(c){return c.name}):Object.keys(n),i=function(c){var l=o[c],f=Array.isArray(n)?n[c].tensor:n[l];if(f.dtype!=="float32"&&f.dtype!=="int32"&&f.dtype!=="bool"&&f.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+f.dtype);var h={name:l,shape:f.shape,dtype:f.dtype};if(f.dtype==="string"){var d=new Promise(function(p){return se(s,void 0,void 0,function(){var v,m,g,x,b,y,w;return ue(this,function(_){switch(_.label){case 0:return[4,f.bytes()];case 1:for(v=_.sent(),m=v.reduce(function(k,S){return k+S.length},0)+Oi*v.length,g=new Uint8Array(m),x=0,b=0;b<v.length;b++)y=v[b],w=new Uint8Array(new Uint32Array([y.length]).buffer),g.set(w,x),x+=Oi,g.set(y,x),x+=y.length;return p(g),[2]}})})});r.push(d)}else r.push(f.data());t!=null&&(h.group=t),e.push(h)},a=0;a<o.length;++a)i(a);return[4,Promise.all(r)];case 1:return[2,{data:G1(u.sent()),specs:e}]}})})},fromMemory:function(n,t,e,r){return arguments.length===1?n.modelTopology!=null||n.weightSpecs!=null?new qa(n):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new qa({modelTopology:n})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new qa({modelTopology:n,weightSpecs:t,weightData:e,trainingConfig:r}))},getLoadHandlers:function(n,t){return Bt.getLoadHandlers(n,t)},getModelArtifactsInfoForJSON:Oo,getSaveHandlers:function(n){return Bt.getSaveHandlers(n)},http:Ss,isHTTPScheme:Rs,loadWeights:function(n,t,e,r){return t===void 0&&(t=""),se(this,void 0,void 0,function(){return ue(this,function(o){return[2,Rl(function(i){return dd(i,{requestInit:r})})(n,t,e)]})})},registerLoadRouter:function(n){return Bt.registerLoadRouter(n)},registerSaveRouter:function(n){return Bt.registerSaveRouter(n)},weightsLoaderFactory:Rl,withSaveHandler:function(n){return new nw(n)},copyModel:function(n,t){return se(this,void 0,void 0,function(){return ue(this,function(e){return[2,wl(n,t,!1)]})})},listModels:function(){return se(this,void 0,void 0,function(){var n,t,e,r,o,i,a;return ue(this,function(s){switch(s.label){case 0:n=Gn.getSchemes(),t={},e=0,r=n,s.label=1;case 1:return e<r.length?(o=r[e],[4,Gn.getManager(o).listModels()]):[3,4];case 2:for(a in i=s.sent())t[o+Br+a]=i[a];s.label=3;case 3:return e++,[3,1];case 4:return[2,t]}})})},moveModel:function(n,t){return se(this,void 0,void 0,function(){return ue(this,function(e){return[2,wl(n,t,!0)]})})},removeModel:function(n){return se(this,void 0,void 0,function(){var t;return ue(this,function(e){return t=hi(n),[2,Gn.getManager(t.scheme).removeModel(t.path)]})})}}),Ir;D({confusionMatrix_:function(n,t,e){var r=C(n,"labels","confusionMatrix"),o=C(t,"predictions","confusionMatrix");E(e==null||e>0&&Number.isInteger(e),function(){return"If provided, numClasses must be a positive integer, but got "+e}),E(r.rank===1,function(){return"Expected the rank of labels to be 1, but got "+r.rank}),E(o.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+o.rank}),E(r.shape[0]===o.shape[0],function(){return"Mismatch in the number of examples: "+r.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),E(e>0&&Number.isInteger(e),function(){return"numClasses is required to be a positive integer, but got "+e});var i=ys(r.asType("int32"),e),a=ys(o.asType("int32"),e);return i.transpose().matMul(a).asType("int32")}});var rw=D({fromPixels_:function(n,t){if(t===void 0&&(t=3),t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(n==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var e=!1,r=!1,o=!1,i=!1,a=!1;if(n.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&n instanceof ImageData)r=!0;else if(typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement)i=!0;else{if(n.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+n.constructor.name);a=!0}if(o&&o&&n.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(Wf("FromPixels",F.backendName)!=null)return F.runKernel("FromPixels",{pixels:n},{numChannels:t});var s,u,c=o?[n.videoWidth,n.videoHeight]:[n.width,n.height],l=c[0],f=c[1];if(a?s=n.getContext("2d").getImageData(0,0,l,f).data:r||e?s=n.data:(i||o)&&(Ir==null&&(Ir=document.createElement("canvas").getContext("2d")),Ir.canvas.width=l,Ir.canvas.height=f,Ir.drawImage(n,0,0,l,f),s=Ir.getImageData(0,0,l,f).data),t===4)u=new Int32Array(s);else{var h=l*f;u=new Int32Array(h*t);for(var d=0;d<h;d++)for(var p=0;p<t;++p)u[d*t+p]=s[4*d+p]}return eu(u,[f,l,t],"int32")}}),Ru=Object.freeze({toPixels:function(n,t){return se(this,void 0,void 0,function(){var e,r,o,i,a,s,u,c,l,f,h,d,p,v,m,g,x,b,y,w,_,k,S;return ue(this,function(R){switch(R.label){case 0:if(e=C(n,"img","toPixels"),n instanceof je||(e=e.toInt()),e.rank!==2&&e.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+e.rank+".");if(r=e.shape.slice(0,2),o=r[0],i=r[1],(a=e.rank===2?1:e.shape[2])>4||a===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+a);return[4,e.data()];case 1:return s=R.sent(),u=e.min(),c=e.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=R.sent(),f=l[0],h=l[1],d=f[0],p=h[0],u.dispose(),c.dispose(),e.dtype==="float32"){if(d<0||p>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+d+" - "+p+"].")}else{if(e.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+e.dtype+". Please use float32 or int32 tensors.");if(d<0||p>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+d+" - "+p+"].")}for(v=e.dtype==="float32"?255:1,m=new Uint8ClampedArray(i*o*4),g=0;g<o*i;++g)x=void 0,b=void 0,y=void 0,w=void 0,a===1?(x=s[g]*v,b=s[g]*v,y=s[g]*v,w=255):a===3?(x=s[3*g]*v,b=s[3*g+1]*v,y=s[3*g+2]*v,w=255):a===4&&(x=s[4*g]*v,b=s[4*g+1]*v,y=s[4*g+2]*v,w=s[4*g+3]*v),m[(_=4*g)+0]=Math.round(x),m[_+1]=Math.round(b),m[_+2]=Math.round(y),m[_+3]=Math.round(w);return t!=null&&(t.width=i,t.height=o,k=t.getContext("2d"),S=new ImageData(m,i,o),k.putImageData(S,0,0)),e!==n&&e.dispose(),[2,m]}})})},fromPixels:rw}),ow=function(){function n(){}return n.prototype.getClassName=function(){return this.constructor.className},n.fromConfig=function(t,e){return new t(e)},n}(),iw=function(){function n(){this.classNameMap={}}return n.getMap=function(){return n.instance==null&&(n.instance=new n),n.instance},n.register=function(t){n.getMap().classNameMap[t.className]=[t,t.fromConfig]},n}();function xr(n){E(n.className!=null,function(){return"Class being registered does not have the static className property defined."}),E(typeof n.className=="string",function(){return"className is required to be a string, but got type "+typeof n.className}),E(n.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),iw.register(n)}var br=function(n){function t(){return n!==null&&n.apply(this,arguments)||this}return Jt(t,n),t.prototype.minimize=function(e,r,o){r===void 0&&(r=!1);var i=this.computeGradients(e,o),a=i.value,s=i.grads;if(o!=null){var u=o.map(function(c){return{name:c.name,tensor:s[c.name]}});this.applyGradients(u)}else this.applyGradients(s);return Rt(s),r?a:(a.dispose(),null)},Object.defineProperty(t.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),t.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},t.prototype.computeGradients=function(e,r){return v0(e,r)},t.prototype.dispose=function(){this.iterations_!=null&&Rt(this.iterations_)},t.prototype.saveIterations=function(){return se(this,void 0,void 0,function(){return ue(this,function(e){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:re(this.iterations_,"int32")}]})})},t.prototype.getWeights=function(){return se(this,void 0,void 0,function(){return ue(this,function(e){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},t.prototype.setWeights=function(e){return se(this,void 0,void 0,function(){return ue(this,function(r){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},t.prototype.extractIterations=function(e){return se(this,void 0,void 0,function(){var r;return ue(this,function(o){switch(o.label){case 0:return r=this,[4,e[0].tensor.data()];case 1:return r.iterations_=o.sent()[0],[2,e.slice(1)]}})})},t}(ow);Object.defineProperty(br,Symbol.hasInstance,{value:function(n){return n.minimize!=null&&n.computeGradients!=null&&n.applyGradients!=null}});var aw=function(n){function t(e,r,o){o===void 0&&(o=null);var i=n.call(this)||this;return i.learningRate=e,i.rho=r,i.epsilon=o,i.accumulatedGrads=[],i.accumulatedUpdates=[],o==null&&(i.epsilon=F.backend.epsilon()),i}return Jt(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=F.registeredVariables[o];r.accumulatedGrads[i]==null&&(r.accumulatedGrads[i]={originalName:o+"/accum_grad",variable:ie(function(){return Fe(a).variable(!1)})}),r.accumulatedUpdates[i]==null&&(r.accumulatedUpdates[i]={originalName:o+"/accum_var",variable:ie(function(){return Fe(a).variable(!1)})});var s=Array.isArray(e)?e[i].tensor:e[o];if(s!=null){var u=r.accumulatedGrads[i].variable,c=r.accumulatedUpdates[i].variable;ie(function(){var l=u.mul(r.rho).add(s.square().mul(1-r.rho)),f=c.add(r.epsilon).sqrt().div(u.add(r.epsilon).sqrt()).mul(s),h=c.mul(r.rho).add(f.square().mul(1-r.rho));u.assign(l),c.assign(h);var d=f.mul(-r.learningRate).add(a);a.assign(d)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedUpdates!=null&&(Rt(this.accumulatedGrads.map(function(e){return e.variable})),Rt(this.accumulatedUpdates.map(function(e){return e.variable})))},t.prototype.getWeights=function(){return se(this,void 0,void 0,function(){var e;return ue(this,function(r){switch(r.label){case 0:return e=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return se(this,void 0,void 0,function(){var r;return ue(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),r=e.length/2,this.accumulatedGrads=e.slice(0,r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedUpdates=e.slice(r,2*r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(e,r){return new e(r.learningRate,r.rho,r.epsilon)},t.className="Adadelta",t}(br);xr(aw);var sw=function(n){function t(e,r){r===void 0&&(r=.1);var o=n.call(this)||this;return o.learningRate=e,o.initialAccumulatorValue=r,o.accumulatedGrads=[],o}return Jt(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=F.registeredVariables[o];r.accumulatedGrads[i]==null&&(r.accumulatedGrads[i]={originalName:o+"/accumulator",variable:ie(function(){return hn(a.shape,r.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(e)?e[i].tensor:e[o];if(s!=null){var u=r.accumulatedGrads[i].variable;ie(function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(F.backend.epsilon()).sqrt()).mul(-r.learningRate).add(a);a.assign(l)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedGrads!=null&&Rt(this.accumulatedGrads.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return se(this,void 0,void 0,function(){return ue(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map(function(r){return{name:r.originalName,tensor:r.variable}}))]}})})},t.prototype.setWeights=function(e){return se(this,void 0,void 0,function(){return ue(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:return e=r.sent(),this.accumulatedGrads=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(e,r){return new e(r.learningRate,r.initialAccumulatorValue)},t.className="Adagrad",t}(br);xr(sw);var uw=function(n){function t(e,r,o,i){i===void 0&&(i=null);var a=n.call(this)||this;return a.learningRate=e,a.beta1=r,a.beta2=o,a.epsilon=i,a.accumulatedFirstMoment=[],a.accumulatedSecondMoment=[],ie(function(){a.accBeta1=re(r).variable(),a.accBeta2=re(o).variable()}),i==null&&(a.epsilon=F.backend.epsilon()),a}return Jt(t,n),t.prototype.applyGradients=function(e){var r=this,o=Array.isArray(e)?e.map(function(i){return i.name}):Object.keys(e);ie(function(){var i=nt(1,r.accBeta1),a=nt(1,r.accBeta2);o.forEach(function(s,u){var c=F.registeredVariables[s];r.accumulatedFirstMoment[u]==null&&(r.accumulatedFirstMoment[u]={originalName:s+"/m",variable:ie(function(){return Fe(c).variable(!1)})}),r.accumulatedSecondMoment[u]==null&&(r.accumulatedSecondMoment[u]={originalName:s+"/v",variable:ie(function(){return Fe(c).variable(!1)})});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=r.accumulatedFirstMoment[u].variable,h=r.accumulatedSecondMoment[u].variable,d=f.mul(r.beta1).add(l.mul(1-r.beta1)),p=h.mul(r.beta2).add(l.square().mul(1-r.beta2)),v=d.div(i),m=p.div(a);f.assign(d),h.assign(p);var g=v.div(m.sqrt().add(r.epsilon)).mul(-r.learningRate).add(c);c.assign(g)}}),r.accBeta1.assign(r.accBeta1.mul(r.beta1)),r.accBeta2.assign(r.accBeta2.mul(r.beta2))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Rt(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedSecondMoment!=null&&Rt(this.accumulatedSecondMoment.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return se(this,void 0,void 0,function(){var e;return ue(this,function(r){switch(r.label){case 0:return e=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return se(this,void 0,void 0,function(){var r,o=this;return ue(this,function(i){switch(i.label){case 0:return[4,this.extractIterations(e)];case 1:return e=i.sent(),ie(function(){o.accBeta1.assign(Pi(o.beta1,o.iterations_+1)),o.accBeta2.assign(Pi(o.beta2,o.iterations_+1))}),r=e.length/2,this.accumulatedFirstMoment=e.slice(0,r).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedSecondMoment=e.slice(r,2*r).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(e,r){return new e(r.learningRate,r.beta1,r.beta2,r.epsilon)},t.className="Adam",t}(br);xr(uw);var cw=function(n){function t(e,r,o,i,a){i===void 0&&(i=null),a===void 0&&(a=0);var s=n.call(this)||this;return s.learningRate=e,s.beta1=r,s.beta2=o,s.epsilon=i,s.decay=a,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],ie(function(){s.iteration=re(0).variable(),s.accBeta1=re(r).variable()}),i==null&&(s.epsilon=F.backend.epsilon()),s}return Jt(t,n),t.prototype.applyGradients=function(e){var r=this,o=Array.isArray(e)?e.map(function(i){return i.name}):Object.keys(e);ie(function(){var i=nt(1,r.accBeta1),a=qt(-r.learningRate,r.iteration.mul(r.decay).add(1));o.forEach(function(s,u){var c=F.registeredVariables[s];r.accumulatedFirstMoment[u]==null&&(r.accumulatedFirstMoment[u]={originalName:s+"/m",variable:Fe(c).variable(!1)}),r.accumulatedWeightedInfNorm[u]==null&&(r.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:Fe(c).variable(!1)});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var f=r.accumulatedFirstMoment[u].variable,h=r.accumulatedWeightedInfNorm[u].variable,d=f.mul(r.beta1).add(l.mul(1-r.beta1)),p=h.mul(r.beta2),v=l.abs(),m=p.maximum(v);f.assign(d),h.assign(m);var g=a.div(i).mul(d.div(m.add(r.epsilon))).add(c);c.assign(g)}}),r.iteration.assign(r.iteration.add(1)),r.accBeta1.assign(r.accBeta1.mul(r.beta1))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Rt(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedWeightedInfNorm!=null&&Rt(this.accumulatedWeightedInfNorm.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return se(this,void 0,void 0,function(){return ue(this,function(e){throw new Error("getWeights() is not implemented for Adamax yet.")})})},t.prototype.setWeights=function(e){return se(this,void 0,void 0,function(){return ue(this,function(r){throw new Error("setWeights() is not implemented for Adamax yet.")})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(e,r){return new e(r.learningRate,r.beta1,r.beta2,r.epsilon,r.decay)},t.className="Adamax",t}(br);xr(cw);var md=function(n){function t(e){var r=n.call(this)||this;return r.learningRate=e,r.setLearningRate(e),r}return Jt(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=Array.isArray(e)?e[i].tensor:e[o];if(a!=null){var s=F.registeredVariables[o];ie(function(){var u=r.c.mul(a).add(s);s.assign(u)})}}),this.incrementIterations()},t.prototype.setLearningRate=function(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=Ag(re(-e))},t.prototype.dispose=function(){this.c.dispose()},t.prototype.getWeights=function(){return se(this,void 0,void 0,function(){return ue(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}})})},t.prototype.setWeights=function(e){return se(this,void 0,void 0,function(){return ue(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:if((e=r.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate}},t.fromConfig=function(e,r){return new e(r.learningRate)},t.className="SGD",t}(br);xr(md);var lw=function(n){function t(e,r,o){o===void 0&&(o=!1);var i=n.call(this,e)||this;return i.learningRate=e,i.momentum=r,i.useNesterov=o,i.accumulations=[],i.m=re(i.momentum),i}return Jt(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=F.registeredVariables[o];r.accumulations[i]==null&&(r.accumulations[i]={originalName:o+"/momentum",variable:ie(function(){return Fe(a).variable(!1)})});var s=r.accumulations[i].variable,u=Array.isArray(e)?e[i].tensor:e[o];u!=null&&ie(function(){var c,l=r.m.mul(s).add(u);c=r.useNesterov?r.c.mul(u.add(l.mul(r.m))).add(a):r.c.mul(l).add(a),s.assign(l),a.assign(c)})}),this.incrementIterations()},t.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&Rt(this.accumulations.map(function(e){return e.variable}))},t.prototype.setMomentum=function(e){this.momentum=e},t.prototype.getWeights=function(){return se(this,void 0,void 0,function(){return ue(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map(function(r){return{name:r.originalName,tensor:r.variable}}))]}})})},t.prototype.setWeights=function(e){return se(this,void 0,void 0,function(){return ue(this,function(r){switch(r.label){case 0:return[4,this.extractIterations(e)];case 1:return e=r.sent(),this.accumulations=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(e,r){return new e(r.learningRate,r.momentum,r.useNesterov)},t.className="Momentum",t}(md);xr(lw);var fw=function(n){function t(e,r,o,i,a){r===void 0&&(r=.9),o===void 0&&(o=0),i===void 0&&(i=null),a===void 0&&(a=!1);var s=n.call(this)||this;if(s.learningRate=e,s.decay=r,s.momentum=o,s.epsilon=i,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=a,i==null&&(s.epsilon=F.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return Jt(t,n),t.prototype.applyGradients=function(e){var r=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=F.registeredVariables[o];r.accumulatedMeanSquares[i]==null&&(r.accumulatedMeanSquares[i]={originalName:o+"/rms",variable:ie(function(){return Fe(a).variable(!1)})}),r.accumulatedMoments[i]==null&&(r.accumulatedMoments[i]={originalName:o+"/momentum",variable:ie(function(){return Fe(a).variable(!1)})}),r.accumulatedMeanGrads[i]==null&&r.centered&&(r.accumulatedMeanGrads[i]={originalName:o+"/mg",variable:ie(function(){return Fe(a).variable(!1)})});var s=Array.isArray(e)?e[i].tensor:e[o];if(s!=null){var u=r.accumulatedMeanSquares[i].variable,c=r.accumulatedMoments[i].variable;ie(function(){var l=u.mul(r.decay).add(s.square().mul(1-r.decay));if(r.centered){var f=r.accumulatedMeanGrads[i].variable,h=f.mul(r.decay).add(s.mul(1-r.decay)),d=c.mul(r.momentum).add(s.mul(r.learningRate).div(l.sub(h.square().add(r.epsilon)).sqrt()));u.assign(l),f.assign(h),c.assign(d);var p=a.sub(d);a.assign(p)}else{var v=u.mul(r.decay).add(s.square().mul(1-r.decay));d=c.mul(r.momentum).add(s.mul(r.learningRate).div(v.add(r.epsilon).sqrt())),u.assign(v),c.assign(d),p=a.sub(d),a.assign(p)}})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&Rt(this.accumulatedMeanSquares.map(function(e){return e.variable})),this.accumulatedMeanGrads!=null&&this.centered&&Rt(this.accumulatedMeanGrads.map(function(e){return e.variable})),this.accumulatedMoments!=null&&Rt(this.accumulatedMoments.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return se(this,void 0,void 0,function(){var e;return ue(this,function(r){switch(r.label){case 0:return e=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&e.push.apply(e,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[r.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return se(this,void 0,void 0,function(){var r;return ue(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),r=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedMoments=e.slice(r,2*r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=e.slice(2*r,3*r).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}})),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(e,r){return new e(r.learningRate,r.decay,r.momentum,r.epsilon,r.centered)},t.className="RMSProp",t}(br);xr(fw);je.prototype.squaredDifference=function(n){return Th(this,n)},L=B1;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ks=function(n,t){return ks=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var o in r)r.hasOwnProperty(o)&&(e[o]=r[o])},ks(n,t)};function xe(n,t){ks(n,t);function e(){this.constructor=n}n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var pt=function(){return pt=Object.assign||function(t){for(var e,r=1,o=arguments.length;r<o;r++){e=arguments[r];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},pt.apply(this,arguments)};function fe(n,t,e,r){function o(i){return i instanceof e?i:new e(function(a){a(i)})}return new(e||(e=Promise))(function(i,a){function s(l){try{c(r.next(l))}catch(f){a(f)}}function u(l){try{c(r.throw(l))}catch(f){a(f)}}function c(l){l.done?i(l.value):o(l.value).then(s,u)}c((r=r.apply(n,[])).next())})}function he(n,t){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(c){return function(l){return u([c,l])}}function u(c){if(r)throw new TypeError("Generator is already executing.");for(;e;)try{if(r=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,o=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(i=e.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){e.label=c[1];break}if(c[0]===6&&e.label<i[1]){e.label=i[1],i=c;break}if(i&&e.label<i[2]){e.label=i[2],e.ops.push(c);break}i[2]&&e.ops.pop(),e.trys.pop();continue}c=t.call(n,e)}catch(l){c=[6,l],o=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function fo(){for(var n=0,t=0,e=arguments.length;t<e;t++)n+=arguments[t].length;for(var r=Array(n),o=0,t=0;t<e;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r}var Ur=function(){function n(t,e){if(!dr(t)||!dr(e))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:t,height:e}));this._width=t,this._height=e}return Object.defineProperty(n.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),n.prototype.reverse=function(){return new n(1/this.width,1/this.height)},n}();function sa(n,t){return n instanceof je&&n.shape.length===t}function hw(n){return sa(n,2)}function ua(n){return sa(n,3)}function jn(n){return sa(n,4)}function dw(n){return n%1!==0}function kl(n){return n%2===0}function pw(n,t){t===void 0&&(t=2);var e=Math.pow(10,t);return Math.floor(n*e)/e}function Al(n){return n&&n.width&&n.height}function vw(n,t){var e=n.width,r=n.height,o=t/Math.max(r,e);return new Ur(Math.round(e*o),Math.round(r*o))}function Su(n){return n.reduce(function(t,e){return t.add(e)},new Oe(0,0)).div(new Oe(n.length,n.length))}function Io(n,t,e){return Array(n).fill(0).map(function(r,o){return t+o*e})}function dr(n){return!!n&&n!==1/0&&n!==-1/0&&!isNaN(n)||n===0}function Dl(n){return dr(n)&&0<=n&&n<=1}var Oe=function(){function n(t,e){this._x=t,this._y=e}return Object.defineProperty(n.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),n.prototype.add=function(t){return new n(this.x+t.x,this.y+t.y)},n.prototype.sub=function(t){return new n(this.x-t.x,this.y-t.y)},n.prototype.mul=function(t){return new n(this.x*t.x,this.y*t.y)},n.prototype.div=function(t){return new n(this.x/t.x,this.y/t.y)},n.prototype.abs=function(){return new n(Math.abs(this.x),Math.abs(this.y))},n.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},n.prototype.floor=function(){return new n(Math.floor(this.x),Math.floor(this.y))},n}(),Xn=function(){function n(t,e){e===void 0&&(e=!0);var r=t||{},o=[r.left,r.top,r.right,r.bottom].every(dr),i=[r.x,r.y,r.width,r.height].every(dr);if(!i&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(r));var a=i?[r.x,r.y,r.width,r.height]:[r.left,r.top,r.right-r.left,r.bottom-r.top],s=a[0],u=a[1],c=a[2],l=a[3];n.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",e),this._x=s,this._y=u,this._width=c,this._height=l}return n.isRect=function(t){return!!t&&[t.x,t.y,t.width,t.height].every(dr)},n.assertIsValidBox=function(t,e,r){if(r===void 0&&(r=!1),!n.isRect(t))throw new Error(e+" - invalid box: "+JSON.stringify(t)+", expected object with properties x, y, width, height");if(!r&&(t.width<0||t.height<0))throw new Error(e+" - width ("+t.width+") and height ("+t.height+") must be positive numbers")},Object.defineProperty(n.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"topLeft",{get:function(){return new Oe(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"topRight",{get:function(){return new Oe(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"bottomLeft",{get:function(){return new Oe(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"bottomRight",{get:function(){return new Oe(this.right,this.bottom)},enumerable:!0,configurable:!0}),n.prototype.round=function(){var t=[this.x,this.y,this.width,this.height].map(function(a){return Math.round(a)}),e=t[0],r=t[1],o=t[2],i=t[3];return new n({x:e,y:r,width:o,height:i})},n.prototype.floor=function(){var t=[this.x,this.y,this.width,this.height].map(function(a){return Math.floor(a)}),e=t[0],r=t[1],o=t[2],i=t[3];return new n({x:e,y:r,width:o,height:i})},n.prototype.toSquare=function(){var t=this,e=t.x,r=t.y,o=t.width,i=t.height,a=Math.abs(o-i);return o<i&&(e-=a/2,o+=a),i<o&&(r-=a/2,i+=a),new n({x:e,y:r,width:o,height:i})},n.prototype.rescale=function(t){var e=Al(t)?t.width:t,r=Al(t)?t.height:t;return new n({x:this.x*e,y:this.y*r,width:this.width*e,height:this.height*r})},n.prototype.pad=function(t,e){var r=[this.x-t/2,this.y-e/2,this.width+t,this.height+e],o=r[0],i=r[1],a=r[2],s=r[3];return new n({x:o,y:i,width:a,height:s})},n.prototype.clipAtImageBorders=function(t,e){var r=this,o=r.x,i=r.y,a=r.right,s=r.bottom,u=Math.max(o,0),c=Math.max(i,0),l=a-u,f=s-c,h=Math.min(l,t-u),d=Math.min(f,e-c);return new n({x:u,y:c,width:h,height:d}).floor()},n.prototype.shift=function(t,e){var r=this,o=r.width,i=r.height,a=this.x+t,s=this.y+e;return new n({x:a,y:s,width:o,height:i})},n.prototype.padAtBorders=function(t,e){var r=this.width+1,o=this.height+1,i=1,a=1,s=r,u=o,c=this.left,l=this.top,f=this.right,h=this.bottom;return f>e&&(s=-f+e+r,f=e),h>t&&(u=-h+t+o,h=t),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:a,edy:u,dx:i,edx:s,y:l,ey:h,x:c,ex:f,w:r,h:o}},n.prototype.calibrate=function(t){return new n({left:this.left+t.left*this.width,top:this.top+t.top*this.height,right:this.right+t.right*this.width,bottom:this.bottom+t.bottom*this.height}).toSquare().round()},n}(),ca=function(n){xe(t,n);function t(e,r,o,i,a){return a===void 0&&(a=!1),n.call(this,{left:e,top:r,right:o,bottom:i},a)||this}return t}(Xn),gd=function(){function n(t,e,r,o,i){this._imageDims=new Ur(i.width,i.height),this._score=t,this._classScore=e,this._className=r,this._box=new Xn(o).rescale(this._imageDims)}return Object.defineProperty(n.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"relativeBox",{get:function(){return new Xn(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),n.prototype.forSize=function(t,e){return new n(this.score,this.classScore,this.className,this.relativeBox,{width:t,height:e})},n}(),gn=function(n){xe(t,n);function t(e,r,o){return n.call(this,e,e,"",r,o)||this}return t.prototype.forSize=function(e,r){var o=n.prototype.forSize.call(this,e,r),i=o.score,a=o.relativeBox,s=o.imageDims;return new t(i,a,s)},t}(gd);function mw(n,t,e){e===void 0&&(e=!0);var r=Math.max(0,Math.min(n.right,t.right)-Math.max(n.left,t.left)),o=Math.max(0,Math.min(n.bottom,t.bottom)-Math.max(n.top,t.top)),i=r*o;return e?i/(n.area+t.area-i):i/Math.min(n.area,t.area)}function gw(n){var t=n.map(function(s){return s.x}),e=n.map(function(s){return s.y}),r=t.reduce(function(s,u){return u<s?u:s},1/0),o=e.reduce(function(s,u){return u<s?u:s},1/0),i=t.reduce(function(s,u){return s<u?u:s},0),a=e.reduce(function(s,u){return s<u?u:s},0);return new ca(r,o,i,a)}function Ro(n,t,e,r){r===void 0&&(r=!0);for(var o=t.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),i=[],a=function(){var s=o.pop();i.push(s);for(var u=o,c=[],l=0;l<u.length;l++){var f=u[l],h=n[s],d=n[f];c.push(mw(h,d,r))}o=o.filter(function(p,v){return c[v]<=e})};o.length>0;)a();return i}function Bo(n,t){return ie(function(){var e=t[0],r=t[1],o=t[2],i=hn(fo(n.shape.slice(0,3),[1]),e),a=hn(fo(n.shape.slice(0,3),[1]),r),s=hn(fo(n.shape.slice(0,3),[1]),o),u=Ze([i,a,s],3);return nt(n,u)})}function yw(n,t){return t===void 0&&(t=!1),ie(function(){var e=n.shape.slice(1),r=e[0],o=e[1];if(r===o)return n;var i=Math.abs(r-o),a=Math.round(i*(t?.5:1)),s=r>o?2:1,u=function(d){var p=n.shape.slice();return p[s]=d,hn(p,0)},c=u(a),l=i-c.shape[s],f=t&&l?u(l):null,h=[f,n,c].filter(function(d){return!!d}).map(function(d){return d.toFloat()});return Ze(h,s)})}function Ka(n){return 1/(1+Math.exp(-n))}var ku=function(n){xe(t,n);function t(e,r,o,i,a){return a===void 0&&(a=!1),n.call(this,{x:e,y:r,width:o,height:i},a)||this}return t}(Xn),xw=.5,bw=.43,ww=.45,Bi=function(){function n(t,e,r){r===void 0&&(r=new Oe(0,0));var o=e.width,i=e.height;this._imgDims=new Ur(o,i),this._shift=r,this._positions=t.map(function(a){return a.mul(new Oe(o,i)).add(r)})}return Object.defineProperty(n.prototype,"shift",{get:function(){return new Oe(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"relativePositions",{get:function(){var t=this;return this._positions.map(function(e){return e.sub(t._shift).div(new Oe(t.imageWidth,t.imageHeight))})},enumerable:!0,configurable:!0}),n.prototype.forSize=function(t,e){return new this.constructor(this.relativePositions,{width:t,height:e})},n.prototype.shiftBy=function(t,e){return new this.constructor(this.relativePositions,this._imgDims,new Oe(t,e))},n.prototype.shiftByPoint=function(t){return this.shiftBy(t.x,t.y)},n.prototype.align=function(t,e){if(e===void 0&&(e={}),t){var r=t instanceof gn?t.box.floor():new Xn(t);return this.shiftBy(r.x,r.y).align(null,e)}var o=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},e),i=o.useDlibAlignment,a=o.minBoxPadding;return i?this.alignDlib():this.alignMinBbox(a)},n.prototype.alignDlib=function(){var t=this.getRefPointsForAlignment(),e=t[0],r=t[1],o=t[2],i=function(f){return o.sub(f).magnitude()},a=(i(e)+i(r))/2,s=Math.floor(a/ww),u=Su(t),c=Math.floor(Math.max(0,u.x-xw*s)),l=Math.floor(Math.max(0,u.y-bw*s));return new ku(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},n.prototype.alignMinBbox=function(t){var e=gw(this.positions);return e.pad(e.width*t,e.height*t)},n.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},n}(),_w=function(n){xe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.getRefPointsForAlignment=function(){var e=this.positions;return[e[0],e[1],Su([e[3],e[4]])]},t}(Bi),Cw=function(n){xe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.getJawOutline=function(){return this.positions.slice(0,17)},t.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},t.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},t.prototype.getNose=function(){return this.positions.slice(27,36)},t.prototype.getLeftEye=function(){return this.positions.slice(36,42)},t.prototype.getRightEye=function(){return this.positions.slice(42,48)},t.prototype.getMouth=function(){return this.positions.slice(48,68)},t.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(Su)},t}(Bi),Tl=function(){function n(t,e){this._label=t,this._distance=e}return Object.defineProperty(n.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),n.prototype.toString=function(t){return t===void 0&&(t=!0),""+this.label+(t?" ("+pw(this.distance)+")":"")},n}(),Nl=function(n){xe(t,n);function t(e,r){var o=n.call(this,e)||this;return o._label=r,o}return t.assertIsValidLabeledBox=function(e,r){if(Xn.assertIsValidBox(e,r),!dr(e.label))throw new Error(r+" - expected property label ("+e.label+") to be a number")},Object.defineProperty(t.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),t}(Xn),ti=function(){function n(t,e){if(typeof t!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(e)||e.some(function(r){return!(r instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=t,this._descriptors=e}return Object.defineProperty(n.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),n.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(t){return Array.from(t)})}},n.fromJSON=function(t){var e=t.descriptors.map(function(r){return new Float32Array(r)});return new n(t.label,e)},n}();(function(n){xe(t,n);function t(e,r,o,i){var a=n.call(this,e,r)||this;return a._score=o,a._classScore=i,a}return t.assertIsValidPredictedBox=function(e,r){if(Nl.assertIsValidLabeledBox(e,r),!Dl(e.score)||!Dl(e.classScore))throw new Error(r+" - expected properties score ("+e.score+") and ("+e.classScore+") to be a number between [0, 1]")},Object.defineProperty(t.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),t})(Nl);function Ew(n){return n.detection instanceof gn}function Au(n,t){var e={detection:t};return Object.assign({},n,e)}function yd(){var n=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},t=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:n,readFile:t}}function xd(n){var t="";if(!n)try{n=require("fs")}catch(r){t=r.toString()}var e=n?function(r){return new Promise(function(o,i){n.readFile(r,function(a,s){return a?i(a):o(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+t)};return{readFile:e}}function bd(){var n=global.Canvas||global.HTMLCanvasElement,t=global.Image||global.HTMLImageElement,e=function(){if(n)return new n;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},r=function(){if(t)return new t;throw new Error("createImageElement - missing Image implementation for nodejs environment")},o=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},i=xd();return pt({Canvas:n||function(){function a(){}return a}(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){function a(){}return a}(),Image:t||function(){function a(){}return a}(),ImageData:global.ImageData||function(){function a(){}return a}(),Video:global.HTMLVideoElement||function(){function a(){}return a}(),createCanvasElement:e,createImageElement:r,fetch:o},i)}function wd(){return typeof window=="object"&&typeof document<"u"&&typeof HTMLImageElement<"u"&&typeof HTMLCanvasElement<"u"&&typeof HTMLVideoElement<"u"&&typeof ImageData<"u"&&typeof CanvasRenderingContext2D<"u"}function _d(){return typeof global=="object"&&typeof require=="function"&&typeof tp<"u"&&typeof process<"u"&&!!process.version}var Qe;function Iw(){if(!Qe)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return Qe}function As(n){Qe=n}function Du(){wd()&&As(yd()),_d()&&As(bd())}function Rw(n){if(Qe||Du(),!Qe)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var t=n.Canvas,e=t===void 0?Qe.Canvas:t,r=n.Image,o=r===void 0?Qe.Image:r;Qe.Canvas=e,Qe.Image=o,Qe.createCanvasElement=n.createCanvasElement||function(){return new e},Qe.createImageElement=n.createImageElement||function(){return new o},Qe.ImageData=n.ImageData||Qe.ImageData,Qe.Video=n.Video||Qe.Video,Qe.fetch=n.fetch||Qe.fetch,Qe.readFile=n.readFile||Qe.readFile}var xt={getEnv:Iw,setEnv:As,initialize:Du,createBrowserEnv:yd,createFileSystem:xd,createNodejsEnv:bd,monkeyPatch:Rw,isBrowser:wd,isNodejs:_d};Du();function Cd(n){return!xt.isNodejs()&&typeof n=="string"?document.getElementById(n):n}function vr(n){var t=xt.getEnv(),e=t.Canvas,r=t.CanvasRenderingContext2D;if(n instanceof r)return n;var o=Cd(n);if(!(o instanceof e))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var i=o.getContext("2d");if(!i)throw new Error("resolveContext2d - canvas 2d context is null");return i}var Fl;(function(n){n.TOP_LEFT="TOP_LEFT",n.TOP_RIGHT="TOP_RIGHT",n.BOTTOM_LEFT="BOTTOM_LEFT",n.BOTTOM_RIGHT="BOTTOM_RIGHT"})(Fl||(Fl={}));function Ed(n){var t=xt.getEnv(),e=t.Image,r=t.Video;return n instanceof e&&n.complete||n instanceof r&&n.readyState>=3}function Sw(n){return new Promise(function(t,e){if(n instanceof xt.getEnv().Canvas||Ed(n))return t();function r(i){i.currentTarget&&(i.currentTarget.removeEventListener("load",r),i.currentTarget.removeEventListener("error",o),t(i))}function o(i){i.currentTarget&&(i.currentTarget.removeEventListener("load",r),i.currentTarget.removeEventListener("error",o),e(i))}n.addEventListener("load",r),n.addEventListener("error",o)})}function Id(n){var t=xt.getEnv(),e=t.Image,r=t.Video;return n instanceof e?new Ur(n.naturalWidth,n.naturalHeight):n instanceof r?new Ur(n.videoWidth,n.videoHeight):new Ur(n.width,n.height)}function la(n){var t=n.width,e=n.height,r=xt.getEnv().createCanvasElement,o=r();return o.width=t,o.height=e,o}function Tu(n,t){var e=xt.getEnv().ImageData;if(!(n instanceof e)&&!Ed(n))throw new Error("createCanvasFromMedia - media has not finished loading yet");var r=Id(n),o=r.width,i=r.height,a=la({width:o,height:i});return n instanceof e?vr(a).putImageData(n,0,0):vr(a).drawImage(n,0,0,o,i),a}function kw(n,t){return fe(this,void 0,void 0,function(){var e,r,o,i,a,s;return he(this,function(u){switch(u.label){case 0:return e=xt.getEnv().createCanvasElement(),r=n.shape.slice(jn(n)?1:0),o=r[0],i=r[1],a=r[2],s=ie(function(){return n.as3D(o,i,a).toInt()}),[4,Ru.toPixels(s,e)];case 1:return u.sent(),s.dispose(),[2,e]}})})}function Pl(n){var t=xt.getEnv(),e=t.Image,r=t.Canvas,o=t.Video;return n instanceof e||n instanceof r||n instanceof o}function Aw(n,t,e){e===void 0&&(e=!1);var r=xt.getEnv(),o=r.Image,i=r.Canvas;if(!(n instanceof o||n instanceof i))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var a=Id(n),s=t/Math.max(a.height,a.width),u=s*a.width,c=s*a.height,l=la({width:t,height:t}),f=n instanceof i?n:Tu(n),h=Math.abs(u-c)/2,d=e&&u<c?h:0,p=e&&c<u?h:0;return vr(l).drawImage(f,d,p,u,c),l}var Li=function(){function n(t,e){var r=this;if(e===void 0&&(e=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(t))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+t);this._treatAsBatchInput=e,this._batchSize=t.length,t.forEach(function(o,i){if(ua(o)){r._imageTensors[i]=o,r._inputDimensions[i]=o.shape;return}if(jn(o)){var a=o.shape[0];if(a!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+a+" passed, but not supported in input array");r._imageTensors[i]=o,r._inputDimensions[i]=o.shape.slice(1);return}var s=o instanceof xt.getEnv().Canvas?o:Tu(o);r._canvases[i]=s,r._inputDimensions[i]=[s.height,s.width,3]})}return Object.defineProperty(n.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"reshapedInputDimensions",{get:function(){var t=this;return Io(this.batchSize,0,1).map(function(e,r){return t.getReshapedInputDimensions(r)})},enumerable:!0,configurable:!0}),n.prototype.getInput=function(t){return this.canvases[t]||this.imageTensors[t]},n.prototype.getInputDimensions=function(t){return this._inputDimensions[t]},n.prototype.getInputHeight=function(t){return this._inputDimensions[t][0]},n.prototype.getInputWidth=function(t){return this._inputDimensions[t][1]},n.prototype.getReshapedInputDimensions=function(t){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var e=this.getInputWidth(t),r=this.getInputHeight(t);return vw({width:e,height:r},this.inputSize)},n.prototype.toBatchTensor=function(t,e){var r=this;return e===void 0&&(e=!0),this._inputSize=t,ie(function(){var o=Io(r.batchSize,0,1).map(function(a){var s=r.getInput(a);if(s instanceof je){var u=jn(s)?s:s.expandDims();return u=yw(u,e),(u.shape[1]!==t||u.shape[2]!==t)&&(u=bu.resizeBilinear(u,[t,t])),u.as3D(t,t,3)}if(s instanceof xt.getEnv().Canvas)return Ru.fromPixels(Aw(s,t,e));throw new Error("toBatchTensor - at batchIdx "+a+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),i=Wt(o.map(function(a){return a.toFloat()})).as4D(r.batchSize,t,t,3);return i})},n}();function ct(n){return fe(this,void 0,void 0,function(){var t,e,r;return he(this,function(o){switch(o.label){case 0:if(n instanceof Li)return[2,n];if(t=Array.isArray(n)?n:[n],!t.length)throw new Error("toNetInput - empty array passed as input");return e=function(i){return Array.isArray(n)?" at input index "+i+":":""},r=t.map(Cd),r.forEach(function(i,a){if(!Pl(i)&&!ua(i)&&!jn(i))throw typeof t[a]=="string"?new Error("toNetInput -"+e(a)+" string passed, but could not resolve HTMLElement for element id "+t[a]):new Error("toNetInput -"+e(a)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(jn(i)){var s=i.shape[0];if(s!==1)throw new Error("toNetInput -"+e(a)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(r.map(function(i){return Pl(i)&&Sw(i)}))];case 1:return o.sent(),[2,new Li(r,Array.isArray(n))]}})})}function Nu(n,t){return fe(this,void 0,void 0,function(){var e,r,o,i,a,s,u;return he(this,function(c){switch(c.label){case 0:return e=xt.getEnv().Canvas,r=n,n instanceof e?[3,5]:[4,ct(n)];case 1:if(o=c.sent(),o.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return i=o.getInput(0),i instanceof e?(a=i,[3,4]):[3,2];case 2:return[4,kw(i)];case 3:a=c.sent(),c.label=4;case 4:r=a,c.label=5;case 5:return s=vr(r),u=t.map(function(l){return l instanceof gn?l.forSize(r.width,r.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(r.width,r.height)}),[2,u.map(function(l){var f=l.x,h=l.y,d=l.width,p=l.height,v=la({width:d,height:p});return vr(v).putImageData(s.getImageData(f,h,d,p),0,0),v})]}})})}function Fu(n,t){return fe(this,void 0,void 0,function(){return he(this,function(e){if(!ua(n)&&!jn(n))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(jn(n)&&n.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,ie(function(){var r=n.shape.slice(jn(n)?1:0),o=r[0],i=r[1],a=r[2],s=t.map(function(c){return c instanceof gn?c.forSize(i,o).box:c}).map(function(c){return c.clipAtImageBorders(i,o)}),u=s.map(function(c){var l=c.x,f=c.y,h=c.width,d=c.height;return Qh(n.as3D(o,i,a),[f,l,0],[d,h,a])});return u})]})})}function Dw(n,t){return fe(this,void 0,void 0,function(){var e,r;return he(this,function(o){switch(o.label){case 0:return e=xt.getEnv().fetch,[4,e(n,t)];case 1:if(r=o.sent(),!(r.status<400))throw new Error("failed to fetch: ("+r.status+") "+r.statusText+", from url: "+r.url);return[2,r]}})})}function Tw(n){return fe(this,void 0,void 0,function(){return he(this,function(t){switch(t.label){case 0:return[4,Dw(n)];case 1:return[2,t.sent().json()]}})})}function Rd(n,t){var e=t+"-weights_manifest.json";if(!n)return{modelBaseUri:"",manifestUri:e};if(n==="/")return{modelBaseUri:"/",manifestUri:"/"+e};var r=n.startsWith("http://")?"http://":n.startsWith("https://")?"https://":"";n=n.replace(r,"");var o=n.split("/").filter(function(s){return s}),i=n.endsWith(".json")?o[o.length-1]:e,a=r+(n.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return a=n.startsWith("/")?"/"+a:a,{modelBaseUri:a,manifestUri:a==="/"?"/"+i:a+"/"+i}}function Nw(n,t){return fe(this,void 0,void 0,function(){var e,r,o,i;return he(this,function(a){switch(a.label){case 0:return e=Rd(n,t),r=e.manifestUri,o=e.modelBaseUri,[4,Tw(r)];case 1:return i=a.sent(),[2,vd.loadWeights(i,o)]}})})}var An=function(){function n(t){this._name=t,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(n.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),n.prototype.getParamFromPath=function(t){var e=this.traversePropertyPath(t),r=e.obj,o=e.objProp;return r[o]},n.prototype.reassignParamFromPath=function(t,e){var r=this.traversePropertyPath(t),o=r.obj,i=r.objProp;o[i].dispose(),o[i]=e},n.prototype.getParamList=function(){var t=this;return this._paramMappings.map(function(e){var r=e.paramPath;return{path:r,tensor:t.getParamFromPath(r)}})},n.prototype.getTrainableParams=function(){return this.getParamList().filter(function(t){return t.tensor instanceof jr})},n.prototype.getFrozenParams=function(){return this.getParamList().filter(function(t){return!(t.tensor instanceof jr)})},n.prototype.variable=function(){var t=this;this.getFrozenParams().forEach(function(e){var r=e.path,o=e.tensor;t.reassignParamFromPath(r,o.variable())})},n.prototype.freeze=function(){var t=this;this.getTrainableParams().forEach(function(e){var r=e.path,o=e.tensor,i=ht(o.dataSync());o.dispose(),t.reassignParamFromPath(r,i)})},n.prototype.dispose=function(t){t===void 0&&(t=!0),this.getParamList().forEach(function(e){if(t&&e.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+e.path);e.tensor.dispose()}),this._params=void 0},n.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(t){var e=t.tensor;return Array.from(e.dataSync())}).reduce(function(t,e){return t.concat(e)}))},n.prototype.load=function(t){return fe(this,void 0,void 0,function(){return he(this,function(e){switch(e.label){case 0:return t instanceof Float32Array?(this.extractWeights(t),[2]):[4,this.loadFromUri(t)];case 1:return e.sent(),[2]}})})},n.prototype.loadFromUri=function(t){return fe(this,void 0,void 0,function(){var e;return he(this,function(r){switch(r.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,Nw(t,this.getDefaultModelName())];case 1:return e=r.sent(),this.loadFromWeightMap(e),[2]}})})},n.prototype.loadFromDisk=function(t){return fe(this,void 0,void 0,function(){var e,r,o,i,a,s,u,c,l,f;return he(this,function(h){switch(h.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return e=xt.getEnv().readFile,r=Rd(t,this.getDefaultModelName()),o=r.manifestUri,i=r.modelBaseUri,a=function(d){return Promise.all(d.map(function(p){return e(p).then(function(v){return v.buffer})}))},s=vd.weightsLoaderFactory(a),l=(c=JSON).parse,[4,e(o)];case 1:return u=l.apply(c,[h.sent().toString()]),[4,s(u,i)];case 2:return f=h.sent(),this.loadFromWeightMap(f),[2]}})})},n.prototype.loadFromWeightMap=function(t){var e=this.extractParamsFromWeigthMap(t),r=e.paramMappings,o=e.params;this._paramMappings=r,this._params=o},n.prototype.extractWeights=function(t){var e=this.extractParams(t),r=e.paramMappings,o=e.params;this._paramMappings=r,this._params=o},n.prototype.traversePropertyPath=function(t){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var e=t.split("/").reduce(function(i,a){if(!i.nextObj.hasOwnProperty(a))throw new Error("traversePropertyPath - object does not have property "+a+", for path "+t);return{obj:i.nextObj,objProp:a,nextObj:i.nextObj[a]}},{nextObj:this.params}),r=e.obj,o=e.objProp;if(!r||!o||!(r[o]instanceof je))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+t);return{obj:r,objProp:o}},n}();function Lt(n,t,e){return ie(function(){var r=vu(n,t.depthwise_filter,t.pointwise_filter,e,"same");return r=De(r,t.bias),r})}function Xa(n,t,e){return e===void 0&&(e=!1),ie(function(){var r=qe(e?De(Gt(n,t.conv0.filters,[2,2],"same"),t.conv0.bias):Lt(n,t.conv0,[2,2])),o=Lt(r,t.conv1,[1,1]),i=qe(De(r,o)),a=Lt(i,t.conv2,[1,1]);return qe(De(r,De(o,a)))})}function ni(n,t,e,r){return e===void 0&&(e=!1),r===void 0&&(r=!0),ie(function(){var o=qe(e?De(Gt(n,t.conv0.filters,r?[2,2]:[1,1],"same"),t.conv0.bias):Lt(n,t.conv0,r?[2,2]:[1,1])),i=Lt(o,t.conv1,[1,1]),a=qe(De(o,i)),s=Lt(a,t.conv2,[1,1]),u=qe(De(o,De(i,s))),c=Lt(u,t.conv3,[1,1]);return qe(De(o,De(i,De(s,c))))})}function Yt(n,t,e,r){return e===void 0&&(e="same"),r===void 0&&(r=!1),ie(function(){var o=De(Gt(n,t.filters,[1,1],e),t.bias);return r?qe(o):o})}function Dn(n,t){Object.keys(n).forEach(function(e){t.some(function(r){return r.originalPath===e})||n[e].dispose()})}function fa(n,t){return function(e,r,o,i){var a=Ct(n(e*r*o*o),[o,o,e,r]),s=Je(n(r));return t.push({paramPath:i+"/filters"},{paramPath:i+"/bias"}),{filters:a,bias:s}}}function Pu(n,t){return function(e,r,o){var i=Hn(n(e*r),[e,r]),a=Je(n(r));return t.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:i,bias:a}}}var Sd=function(){function n(t,e,r){this.depthwise_filter=t,this.pointwise_filter=e,this.bias=r}return n}();function Mu(n,t){return function(e,r,o){var i=Ct(n(9*e),[3,3,e,1]),a=Ct(n(e*r),[1,1,e,r]),s=Je(n(r));return t.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new Sd(i,a,s)}}function Ou(n){return function(t){var e=n(t+"/depthwise_filter",4),r=n(t+"/pointwise_filter",4),o=n(t+"/bias",1);return new Sd(e,r,o)}}function Zn(n,t){return function(e,r,o){var i=n[e];if(!sa(i,r))throw new Error("expected weightMap["+e+"] to be a Tensor"+r+"D, instead have "+i);return t.push({originalPath:e,paramPath:o||e}),i}}function Tn(n){var t=n;function e(o){var i=t.slice(0,o);return t=t.slice(o),i}function r(){return t}return{extractWeights:e,getRemainingWeights:r}}function kd(n,t){var e=fa(n,t),r=Mu(n,t);function o(a,s,u,c){c===void 0&&(c=!1);var l=c?e(a,s,3,u+"/conv0"):r(a,s,u+"/conv0"),f=r(s,s,u+"/conv1"),h=r(s,s,u+"/conv2");return{conv0:l,conv1:f,conv2:h}}function i(a,s,u,c){c===void 0&&(c=!1);var l=o(a,s,u,c),f=l.conv0,h=l.conv1,d=l.conv2,p=r(s,s,u+"/conv3");return{conv0:f,conv1:h,conv2:d,conv3:p}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:i}}function Fw(n){var t=[],e=Tn(n),r=e.extractWeights,o=e.getRemainingWeights,i=kd(r,t).extractDenseBlock4Params,a=i(3,32,"dense0",!0),s=i(32,64,"dense1"),u=i(64,128,"dense2"),c=i(128,256,"dense3");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:a,dense1:s,dense2:u,dense3:c}}}function Ad(n){return function(t){var e=n(t+"/filters",4),r=n(t+"/bias",1);return{filters:e,bias:r}}}function Dd(n,t){var e=Zn(n,t),r=Ad(e),o=Ou(e);function i(s,u){u===void 0&&(u=!1);var c=u?r(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2");return{conv0:c,conv1:l,conv2:f}}function a(s,u){u===void 0&&(u=!1);var c=u?r(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),f=o(s+"/conv2"),h=o(s+"/conv3");return{conv0:c,conv1:l,conv2:f,conv3:h}}return{extractDenseBlock3Params:i,extractDenseBlock4Params:a}}function Pw(n){var t=[],e=Dd(n,t).extractDenseBlock4Params,r={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2"),dense3:e("dense3")};return Dn(n,t),{params:r,paramMappings:t}}var Td=function(n){xe(t,n);function t(){return n.call(this,"FaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var r=this.params;if(!r)throw new Error("FaceFeatureExtractor - load model before inference");return ie(function(){var o=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],a=Bo(o,i).div(re(255)),s=ni(a,r.dense0,!0);return s=ni(s,r.dense1),s=ni(s,r.dense2),s=ni(s,r.dense3),s=Mo(s,[7,7],[2,2],"valid"),s})},t.prototype.forward=function(e){return fe(this,void 0,void 0,function(){var r;return he(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ct(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Pw(e)},t.prototype.extractParams=function(e){return Fw(e)},t}(An);function cn(n,t){return ie(function(){return De(oa(n,t.weights),t.bias)})}function Mw(n,t,e){var r=[],o=Tn(n),i=o.extractWeights,a=o.getRemainingWeights,s=Pu(i,r),u=s(t,e,"fc");if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:r,params:{fc:u}}}function Ow(n){var t=[],e=Zn(n,t);function r(i){var a=e(i+"/weights",2),s=e(i+"/bias",1);return{weights:a,bias:s}}var o={fc:r("fc")};return Dn(n,t),{params:o,paramMappings:t}}function Nd(n){var t={},e={};return Object.keys(n).forEach(function(r){var o=r.startsWith("fc")?e:t;o[r]=n[r]}),{featureExtractorMap:t,classifierMap:e}}var Fd=function(n){xe(t,n);function t(e,r){var o=n.call(this,e)||this;return o._faceFeatureExtractor=r,o}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var r=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return ie(function(){var i=e instanceof Li?r.faceFeatureExtractor.forwardInput(e):e;return cn(i.as2D(i.shape[0],-1),o.fc)})},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),n.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var r=this.extractClassifierParams(e),o=r.params,i=r.paramMappings;this._params=o,this._paramMappings=i},t.prototype.extractClassifierParams=function(e){return Mw(e,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},t.prototype.extractParamsFromWeigthMap=function(e){var r=Nd(e),o=r.featureExtractorMap,i=r.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),Ow(i)},t.prototype.extractParams=function(e){var r=this.getClassifierChannelsIn(),o=this.getClassifierChannelsOut(),i=o*r+o,a=e.slice(0,e.length-i),s=e.slice(e.length-i);return this.faceFeatureExtractor.extractWeights(a),this.extractClassifierParams(s)},t}(An),Ml=["neutral","happy","sad","angry","fearful","disgusted","surprised"],Bw=function(){function n(t){var e=this;if(t.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+t.length);Ml.forEach(function(r,o){e[r]=t[o]})}return n.prototype.asSortedArray=function(){var t=this;return Ml.map(function(e){return{expression:e,probability:t[e]}}).sort(function(e,r){return r.probability-e.probability})},n}(),Lw=function(n){xe(t,n);function t(e){return e===void 0&&(e=new Td),n.call(this,"FaceExpressionNet",e)||this}return t.prototype.forwardInput=function(e){var r=this;return ie(function(){return Sn(r.runNet(e))})},t.prototype.forward=function(e){return fe(this,void 0,void 0,function(){var r;return he(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ct(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.predictExpressions=function(e){return fe(this,void 0,void 0,function(){var r,o,i,a,s=this;return he(this,function(u){switch(u.label){case 0:return[4,ct(e)];case 1:return r=u.sent(),[4,this.forwardInput(r)];case 2:return o=u.sent(),[4,Promise.all(et(o).map(function(c){return fe(s,void 0,void 0,function(){var l;return he(this,function(f){switch(f.label){case 0:return[4,c.data()];case 1:return l=f.sent(),c.dispose(),[2,l]}})})}))];case 3:return i=u.sent(),o.dispose(),a=i.map(function(c){return new Bw(c)}),[2,r.isBatchInput?a:a[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_expression_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t.prototype.getClassifierChannelsOut=function(){return 7},t}(Fd);function Pd(n,t){var e={expressions:t};return Object.assign({},n,e)}function Ww(n){return Ew(n)&&n.landmarks instanceof Bi&&n.unshiftedLandmarks instanceof Bi&&n.alignedRect instanceof gn}function Bu(n,t){var e=n.detection.box,r=t.shiftBy(e.x,e.y),o=r.align(),i=n.detection.imageDims,a=new gn(n.detection.score,o.rescale(i.reverse()),i),s={landmarks:r,unshiftedLandmarks:t,alignedRect:a};return Object.assign({},n,s)}function Uw(n,t){var e=fa(n,t),r=Mu(n,t);function o(a,s,u){var c=r(a,s,u+"/separable_conv0"),l=r(s,s,u+"/separable_conv1"),f=e(a,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:f}}function i(a,s){var u=r(a,a,s+"/separable_conv0"),c=r(a,a,s+"/separable_conv1"),l=r(a,a,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:e,extractSeparableConvParams:r,extractReductionBlockParams:o,extractMainBlockParams:i}}function Vw(n,t){var e=[],r=Tn(n),o=r.extractWeights,i=r.getRemainingWeights,a=Uw(o,e),s=a.extractConvParams,u=a.extractSeparableConvParams,c=a.extractReductionBlockParams,l=a.extractMainBlockParams,f=s(3,32,3,"entry_flow/conv_in"),h=c(32,64,"entry_flow/reduction_block_0"),d=c(64,128,"entry_flow/reduction_block_1"),p={conv_in:f,reduction_block_0:h,reduction_block_1:d},v={};Io(t,0,1).forEach(function(b){v["main_block_"+b]=l(128,"middle_flow/main_block_"+b)});var m=c(128,256,"exit_flow/reduction_block"),g=u(256,512,"exit_flow/separable_conv"),x={reduction_block:m,separable_conv:g};if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:e,params:{entry_flow:p,middle_flow:v,exit_flow:x}}}function zw(n,t){var e=Zn(n,t),r=Ad(e),o=Ou(e);function i(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=r(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function a(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=o(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:r,extractSeparableConvParams:o,extractReductionBlockParams:i,extractMainBlockParams:a}}function Hw(n,t){var e=[],r=zw(n,e),o=r.extractConvParams,i=r.extractSeparableConvParams,a=r.extractReductionBlockParams,s=r.extractMainBlockParams,u=o("entry_flow/conv_in"),c=a("entry_flow/reduction_block_0"),l=a("entry_flow/reduction_block_1"),f={conv_in:u,reduction_block_0:c,reduction_block_1:l},h={};Io(t,0,1).forEach(function(m){h["main_block_"+m]=s("middle_flow/main_block_"+m)});var d=a("exit_flow/reduction_block"),p=i("exit_flow/separable_conv"),v={reduction_block:d,separable_conv:p};return Dn(n,e),{params:{entry_flow:f,middle_flow:h,exit_flow:v},paramMappings:e}}function Md(n,t,e){return De(Gt(n,t.filters,e,"same"),t.bias)}function $a(n,t,e){e===void 0&&(e=!0);var r=e?qe(n):n;return r=Lt(r,t.separable_conv0,[1,1]),r=Lt(qe(r),t.separable_conv1,[1,1]),r=it(r,[3,3],[2,2],"same"),r=De(r,Md(n,t.expansion_conv,[2,2])),r}function Gw(n,t){var e=Lt(qe(n),t.separable_conv0,[1,1]);return e=Lt(qe(e),t.separable_conv1,[1,1]),e=Lt(qe(e),t.separable_conv2,[1,1]),e=De(e,n),e}var jw=function(n){xe(t,n);function t(e){var r=n.call(this,"TinyXception")||this;return r._numMainBlocks=e,r}return t.prototype.forwardInput=function(e){var r=this,o=this.params;if(!o)throw new Error("TinyXception - load model before inference");return ie(function(){var i=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],s=Bo(i,a).div(re(256)),u=qe(Md(s,o.entry_flow.conv_in,[2,2]));return u=$a(u,o.entry_flow.reduction_block_0,!1),u=$a(u,o.entry_flow.reduction_block_1),Io(r._numMainBlocks,0,1).forEach(function(c){u=Gw(u,o.middle_flow["main_block_"+c])}),u=$a(u,o.exit_flow.reduction_block),u=qe(Lt(u,o.exit_flow.separable_conv,[1,1])),u})},t.prototype.forward=function(e){return fe(this,void 0,void 0,function(){var r;return he(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ct(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"tiny_xception_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Hw(e,this._numMainBlocks)},t.prototype.extractParams=function(e){return Vw(e,this._numMainBlocks)},t}(An);function qw(n){var t=[],e=Tn(n),r=e.extractWeights,o=e.getRemainingWeights,i=Pu(r,t),a=i(512,1,"fc/age"),s=i(512,2,"fc/gender");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{fc:{age:a,gender:s}}}}function Kw(n){var t=[],e=Zn(n,t);function r(i){var a=e(i+"/weights",2),s=e(i+"/bias",1);return{weights:a,bias:s}}var o={fc:{age:r("fc/age"),gender:r("fc/gender")}};return Dn(n,t),{params:o,paramMappings:t}}var Wi;(function(n){n.FEMALE="female",n.MALE="male"})(Wi||(Wi={}));var Xw=function(n){xe(t,n);function t(e){e===void 0&&(e=new jw(2));var r=n.call(this,"AgeGenderNet")||this;return r._faceFeatureExtractor=e,r}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var r=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return ie(function(){var i=e instanceof Li?r.faceFeatureExtractor.forwardInput(e):e,a=Mo(i,[7,7],[2,2],"valid").as2D(i.shape[0],-1),s=cn(a,o.fc.age).as1D(),u=cn(a,o.fc.gender);return{age:s,gender:u}})},t.prototype.forwardInput=function(e){var r=this;return ie(function(){var o=r.runNet(e),i=o.age,a=o.gender;return{age:i,gender:Sn(a)}})},t.prototype.forward=function(e){return fe(this,void 0,void 0,function(){var r;return he(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ct(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.predictAgeAndGender=function(e){return fe(this,void 0,void 0,function(){var r,o,i,a,s,u,c=this;return he(this,function(l){switch(l.label){case 0:return[4,ct(e)];case 1:return r=l.sent(),[4,this.forwardInput(r)];case 2:return o=l.sent(),i=et(o.age),a=et(o.gender),s=i.map(function(f,h){return{ageTensor:f,genderTensor:a[h]}}),[4,Promise.all(s.map(function(f){var h=f.ageTensor,d=f.genderTensor;return fe(c,void 0,void 0,function(){var p,v,m,g,x;return he(this,function(b){switch(b.label){case 0:return[4,h.data()];case 1:return p=b.sent()[0],[4,d.data()];case 2:return v=b.sent()[0],m=v>.5,g=m?Wi.MALE:Wi.FEMALE,x=m?v:1-v,h.dispose(),d.dispose(),[2,{age:p,gender:g,genderProbability:x}]}})})}))];case 3:return u=l.sent(),o.age.dispose(),o.gender.dispose(),[2,r.isBatchInput?u:u[0]]}})})},t.prototype.getDefaultModelName=function(){return"age_gender_model"},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),n.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var r=this.extractClassifierParams(e),o=r.params,i=r.paramMappings;this._params=o,this._paramMappings=i},t.prototype.extractClassifierParams=function(e){return qw(e)},t.prototype.extractParamsFromWeigthMap=function(e){var r=Nd(e),o=r.featureExtractorMap,i=r.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),Kw(i)},t.prototype.extractParams=function(e){var r=1539,o=e.slice(0,e.length-r),i=e.slice(e.length-r);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(i)},t}(An),Od=function(n){xe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.postProcess=function(e,r,o){var i=o.map(function(s){var u=s.width,c=s.height,l=r/Math.max(c,u);return{width:u*l,height:c*l}}),a=i.length;return ie(function(){var s=function(h,d){return Wt([hn([68],h),hn([68],d)],1).as2D(1,136).as1D()},u=function(h,d){var p=i[h],v=p.width,m=p.height;return d(v,m)?Math.abs(v-m)/2:0},c=function(h){return u(h,function(d,p){return d<p})},l=function(h){return u(h,function(d,p){return p<d})},f=e.mul(hn([a,136],r)).sub(Wt(Array.from(Array(a),function(h,d){return s(c(d),l(d))}))).div(Wt(Array.from(Array(a),function(h,d){return s(i[d].width,i[d].height)})));return f})},t.prototype.forwardInput=function(e){var r=this;return ie(function(){var o=r.runNet(e);return r.postProcess(o,e.inputSize,e.inputDimensions.map(function(i){var a=i[0],s=i[1];return{height:a,width:s}}))})},t.prototype.forward=function(e){return fe(this,void 0,void 0,function(){var r;return he(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ct(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.detectLandmarks=function(e){return fe(this,void 0,void 0,function(){var r,o,i,a=this;return he(this,function(s){switch(s.label){case 0:return[4,ct(e)];case 1:return r=s.sent(),o=ie(function(){return et(a.forwardInput(r))}),[4,Promise.all(o.map(function(u,c){return fe(a,void 0,void 0,function(){var l,f,h,d,p;return he(this,function(v){switch(v.label){case 0:return h=(f=Array).from,[4,u.data()];case 1:return l=h.apply(f,[v.sent()]),d=l.filter(function(m,g){return kl(g)}),p=l.filter(function(m,g){return!kl(g)}),[2,new Cw(Array(68).fill(0).map(function(m,g){return new Oe(d[g],p[g])}),{height:r.getInputHeight(c),width:r.getInputWidth(c)})]}})})}))];case 2:return i=s.sent(),o.forEach(function(u){return u.dispose()}),[2,r.isBatchInput?i:i[0]]}})})},t.prototype.getClassifierChannelsOut=function(){return 136},t}(Fd),Bd=function(n){xe(t,n);function t(e){return e===void 0&&(e=new Td),n.call(this,"FaceLandmark68Net",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t}(Od);function $w(n){var t=[],e=Dd(n,t).extractDenseBlock3Params,r={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2")};return Dn(n,t),{params:r,paramMappings:t}}function Yw(n){var t=[],e=Tn(n),r=e.extractWeights,o=e.getRemainingWeights,i=kd(r,t).extractDenseBlock3Params,a=i(3,32,"dense0",!0),s=i(32,64,"dense1"),u=i(64,128,"dense2");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:a,dense1:s,dense2:u}}}var Jw=function(n){xe(t,n);function t(){return n.call(this,"TinyFaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var r=this.params;if(!r)throw new Error("TinyFaceFeatureExtractor - load model before inference");return ie(function(){var o=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],a=Bo(o,i).div(re(255)),s=Xa(a,r.dense0,!0);return s=Xa(s,r.dense1),s=Xa(s,r.dense2),s=Mo(s,[14,14],[2,2],"valid"),s})},t.prototype.forward=function(e){return fe(this,void 0,void 0,function(){var r;return he(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ct(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},t.prototype.extractParamsFromWeigthMap=function(e){return $w(e)},t.prototype.extractParams=function(e){return Yw(e)},t}(An),Qw=function(n){xe(t,n);function t(e){return e===void 0&&(e=new Jw),n.call(this,"FaceLandmark68TinyNet",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},t.prototype.getClassifierChannelsIn=function(){return 128},t}(Od);(function(n){xe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t})(Bd);function Zw(n,t){return De(yt(n,t.weights),t.biases)}function Lu(n,t,e,r,o){o===void 0&&(o="same");var i=t.conv,a=i.filters,s=i.bias,u=Gt(n,a,e,o);return u=De(u,s),u=Zw(u,t.scale),r?qe(u):u}function e2(n,t){return Lu(n,t,[1,1],!0)}function Ld(n,t){return Lu(n,t,[1,1],!1)}function Wd(n,t){return Lu(n,t,[2,2],!0,"valid")}function t2(n,t){function e(s,u,c){var l=n(s),f=l.length/(u*c*c);if(dw(f))throw new Error("depth has to be an integer: "+f+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return ie(function(){return Kn(Ct(l,[u,f,c,c]),[2,3,1,0])})}function r(s,u,c,l){var f=e(s,u,c),h=Je(n(u));return t.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:f,bias:h}}function o(s,u){var c=Je(n(s)),l=Je(n(s));return t.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function i(s,u,c,l){var f=r(s,u,c,l+"/conv"),h=o(u,l+"/scale");return{conv:f,scale:h}}function a(s,u,c,l,f){f===void 0&&(f=!1);var h=i((f?.5:1)*s,u,c,l+"/conv1"),d=i(s,u,c,l+"/conv2");return{conv1:h,conv2:d}}return{extractConvLayerParams:i,extractResidualLayerParams:a}}function n2(n){var t=Tn(n),e=t.extractWeights,r=t.getRemainingWeights,o=[],i=t2(e,o),a=i.extractConvLayerParams,s=i.extractResidualLayerParams,u=a(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),f=s(9216,32,3,"conv32_3"),h=s(36864,64,3,"conv64_down",!0),d=s(36864,64,3,"conv64_1"),p=s(36864,64,3,"conv64_2"),v=s(36864,64,3,"conv64_3"),m=s(147456,128,3,"conv128_down",!0),g=s(147456,128,3,"conv128_1"),x=s(147456,128,3,"conv128_2"),b=s(589824,256,3,"conv256_down",!0),y=s(589824,256,3,"conv256_1"),w=s(589824,256,3,"conv256_2"),_=s(589824,256,3,"conv256_down_out"),k=ie(function(){return Kn(Hn(e(256*128),[128,256]),[1,0])});if(o.push({paramPath:"fc"}),r().length!==0)throw new Error("weights remaing after extract: "+r().length);var S={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:f,conv64_down:h,conv64_1:d,conv64_2:p,conv64_3:v,conv128_down:m,conv128_1:g,conv128_2:x,conv256_down:b,conv256_1:y,conv256_2:w,conv256_down_out:_,fc:k};return{params:S,paramMappings:o}}function r2(n,t){var e=Zn(n,t);function r(a){var s=e(a+"/scale/weights",1),u=e(a+"/scale/biases",1);return{weights:s,biases:u}}function o(a){var s=e(a+"/conv/filters",4),u=e(a+"/conv/bias",1),c=r(a);return{conv:{filters:s,bias:u},scale:c}}function i(a){return{conv1:o(a+"/conv1"),conv2:o(a+"/conv2")}}return{extractConvLayerParams:o,extractResidualLayerParams:i}}function o2(n){var t=[],e=r2(n,t),r=e.extractConvLayerParams,o=e.extractResidualLayerParams,i=r("conv32_down"),a=o("conv32_1"),s=o("conv32_2"),u=o("conv32_3"),c=o("conv64_down"),l=o("conv64_1"),f=o("conv64_2"),h=o("conv64_3"),d=o("conv128_down"),p=o("conv128_1"),v=o("conv128_2"),m=o("conv256_down"),g=o("conv256_1"),x=o("conv256_2"),b=o("conv256_down_out"),y=n.fc;if(t.push({originalPath:"fc",paramPath:"fc"}),!hw(y))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+y);var w={conv32_down:i,conv32_1:a,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:f,conv64_3:h,conv128_down:d,conv128_1:p,conv128_2:v,conv256_down:m,conv256_1:g,conv256_2:x,conv256_down_out:b,fc:y};return Dn(n,t),{params:w,paramMappings:t}}function tn(n,t){var e=e2(n,t.conv1);return e=Ld(e,t.conv2),e=De(e,n),e=qe(e),e}function ri(n,t){var e=Wd(n,t.conv1);e=Ld(e,t.conv2);var r=Mo(n,2,2,"valid"),o=ze(r.shape),i=r.shape[3]!==e.shape[3],a=r.shape[1]!==e.shape[1]||r.shape[2]!==e.shape[2];if(a){var s=fo(e.shape);s[1]=1;var u=ze(s);e=Ze([e,u],1);var c=fo(e.shape);c[2]=1;var l=ze(c);e=Ze([e,l],2)}return r=i?Ze([r,o],3):r,e=De(r,e),e=qe(e),e}var i2=function(n){xe(t,n);function t(){return n.call(this,"FaceRecognitionNet")||this}return t.prototype.forwardInput=function(e){var r=this.params;if(!r)throw new Error("FaceRecognitionNet - load model before inference");return ie(function(){var o=e.toBatchTensor(150,!0).toFloat(),i=[122.782,117.001,104.298],a=Bo(o,i).div(re(256)),s=Wd(a,r.conv32_down);s=it(s,3,2,"valid"),s=tn(s,r.conv32_1),s=tn(s,r.conv32_2),s=tn(s,r.conv32_3),s=ri(s,r.conv64_down),s=tn(s,r.conv64_1),s=tn(s,r.conv64_2),s=tn(s,r.conv64_3),s=ri(s,r.conv128_down),s=tn(s,r.conv128_1),s=tn(s,r.conv128_2),s=ri(s,r.conv256_down),s=tn(s,r.conv256_1),s=tn(s,r.conv256_2),s=ri(s,r.conv256_down_out);var u=s.mean([1,2]),c=oa(u,r.fc);return c})},t.prototype.forward=function(e){return fe(this,void 0,void 0,function(){var r;return he(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ct(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.computeFaceDescriptor=function(e){return fe(this,void 0,void 0,function(){var r,o,i,a=this;return he(this,function(s){switch(s.label){case 0:return[4,ct(e)];case 1:return r=s.sent(),o=ie(function(){return et(a.forwardInput(r))}),[4,Promise.all(o.map(function(u){return u.data()}))];case 2:return i=s.sent(),o.forEach(function(u){return u.dispose()}),[2,r.isBatchInput?i:i[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_recognition_model"},t.prototype.extractParamsFromWeigthMap=function(e){return o2(e)},t.prototype.extractParams=function(e){return n2(e)},t}(An);function Ud(n,t){var e={descriptor:t};return Object.assign({},n,e)}function Vd(n,t){var e={age:t};return Object.assign({},n,e)}function zd(n,t,e){var r={gender:t,genderProbability:e};return Object.assign({},n,r)}var Hd=function(){function n(t){var e=t===void 0?{}:t,r=e.minFaceSize,o=e.scaleFactor,i=e.maxNumScales,a=e.scoreThresholds,s=e.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=r||20,this._scaleFactor=o||.709,this._maxNumScales=i||10,this._scoreThresholds=a||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(n.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),n}();function a2(n,t){function e(u,c){var l=Ct(n(9*u),[3,3,u,1]),f=Je(n(u)),h=Je(n(u)),d=Je(n(u)),p=Je(n(u));return t.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:f,batch_norm_offset:h,batch_norm_mean:d,batch_norm_variance:p}}function r(u,c,l,f,h){var d=Ct(n(u*c*l*l),[l,l,u,c]),p=Je(n(c));return t.push({paramPath:f+"/filters"},{paramPath:f+"/"+(h?"batch_norm_offset":"bias")}),{filters:d,bias:p}}function o(u,c,l,f){var h=r(u,c,l,f,!0),d=h.filters,p=h.bias;return{filters:d,batch_norm_offset:p}}function i(u,c,l){var f=e(u,l+"/depthwise_conv"),h=o(u,c,1,l+"/pointwise_conv");return{depthwise_conv:f,pointwise_conv:h}}function a(){var u=o(3,32,3,"mobilenetv1/conv_0"),c=i(32,64,"mobilenetv1/conv_1"),l=i(64,128,"mobilenetv1/conv_2"),f=i(128,128,"mobilenetv1/conv_3"),h=i(128,256,"mobilenetv1/conv_4"),d=i(256,256,"mobilenetv1/conv_5"),p=i(256,512,"mobilenetv1/conv_6"),v=i(512,512,"mobilenetv1/conv_7"),m=i(512,512,"mobilenetv1/conv_8"),g=i(512,512,"mobilenetv1/conv_9"),x=i(512,512,"mobilenetv1/conv_10"),b=i(512,512,"mobilenetv1/conv_11"),y=i(512,1024,"mobilenetv1/conv_12"),w=i(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:d,conv_6:p,conv_7:v,conv_8:m,conv_9:g,conv_10:x,conv_11:b,conv_12:y,conv_13:w}}function s(){var u=o(1024,256,1,"prediction_layer/conv_0"),c=o(256,512,3,"prediction_layer/conv_1"),l=o(512,128,1,"prediction_layer/conv_2"),f=o(128,256,3,"prediction_layer/conv_3"),h=o(256,128,1,"prediction_layer/conv_4"),d=o(128,256,3,"prediction_layer/conv_5"),p=o(256,64,1,"prediction_layer/conv_6"),v=o(64,128,3,"prediction_layer/conv_7"),m=r(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),g=r(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),x=r(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),b=r(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),y=r(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),w=r(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),_=r(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),k=r(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),S=r(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),R=r(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),I=r(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),P=r(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),N={box_encoding_predictor:m,class_predictor:g},V={box_encoding_predictor:x,class_predictor:b},U={box_encoding_predictor:y,class_predictor:w},z={box_encoding_predictor:_,class_predictor:k},j={box_encoding_predictor:S,class_predictor:R},W={box_encoding_predictor:I,class_predictor:P};return{conv_0:u,conv_1:c,conv_2:l,conv_3:f,conv_4:h,conv_5:d,conv_6:p,conv_7:v,box_predictor_0:N,box_predictor_1:V,box_predictor_2:U,box_predictor_3:z,box_predictor_4:j,box_predictor_5:W}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:s}}function s2(n){var t=[],e=Tn(n),r=e.extractWeights,o=e.getRemainingWeights,i=a2(r,t),a=i.extractMobilenetV1Params,s=i.extractPredictionLayerParams,u=a(),c=s(),l=eu(r(5118*4),[1,5118,4]),f={extra_dim:l};if(t.push({paramPath:"output_layer/extra_dim"}),o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:f},paramMappings:t}}function u2(n,t){var e=Zn(n,t);function r(c,l,f){var h=e(c+"/Conv2d_"+l+"_pointwise/weights",4,f+"/filters"),d=e(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,f+"/batch_norm_offset");return{filters:h,batch_norm_offset:d}}function o(c){var l="mobilenetv1/conv_"+c,f="MobilenetV1/Conv2d_"+c+"_depthwise",h=l+"/depthwise_conv",d=l+"/pointwise_conv",p=e(f+"/depthwise_weights",4,h+"/filters"),v=e(f+"/BatchNorm/gamma",1,h+"/batch_norm_scale"),m=e(f+"/BatchNorm/beta",1,h+"/batch_norm_offset"),g=e(f+"/BatchNorm/moving_mean",1,h+"/batch_norm_mean"),x=e(f+"/BatchNorm/moving_variance",1,h+"/batch_norm_variance");return{depthwise_conv:{filters:p,batch_norm_scale:v,batch_norm_offset:m,batch_norm_mean:g,batch_norm_variance:x},pointwise_conv:r("MobilenetV1",c,d)}}function i(){return{conv_0:r("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}}function a(c,l){var f=e(c+"/weights",4,l+"/filters"),h=e(c+"/biases",1,l+"/bias");return{filters:f,bias:h}}function s(c){var l=a("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),f=a("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:f}}function u(){return{conv_0:r("Prediction",0,"prediction_layer/conv_0"),conv_1:r("Prediction",1,"prediction_layer/conv_1"),conv_2:r("Prediction",2,"prediction_layer/conv_2"),conv_3:r("Prediction",3,"prediction_layer/conv_3"),conv_4:r("Prediction",4,"prediction_layer/conv_4"),conv_5:r("Prediction",5,"prediction_layer/conv_5"),conv_6:r("Prediction",6,"prediction_layer/conv_6"),conv_7:r("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:u}}function c2(n){var t=[],e=u2(n,t),r=e.extractMobilenetV1Params,o=e.extractPredictionLayerParams,i=n["Output/extra_dim"];if(t.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!ua(i))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+i);var a={mobilenetv1:r(),prediction_layer:o(),output_layer:{extra_dim:i}};return Dn(n,t),{params:a,paramMappings:t}}function nn(n,t,e){return ie(function(){var r=Gt(n,t.filters,e,"same");return r=De(r,t.batch_norm_offset),fu(r,0,6)})}var l2=.0010000000474974513;function f2(n,t,e){return ie(function(){var r=ra(n,t.filters,e,"same");return r=Bh(r,t.batch_norm_mean,t.batch_norm_variance,t.batch_norm_offset,t.batch_norm_scale,l2),fu(r,0,6)})}function h2(n){return[2,4,6,12].some(function(t){return t===n})?[2,2]:[1,1]}function d2(n,t){return ie(function(){var e=null,r=nn(n,t.conv_0,[2,2]),o=[t.conv_1,t.conv_2,t.conv_3,t.conv_4,t.conv_5,t.conv_6,t.conv_7,t.conv_8,t.conv_9,t.conv_10,t.conv_11,t.conv_12,t.conv_13];if(o.forEach(function(i,a){var s=a+1,u=h2(s);r=f2(r,i.depthwise_conv,u),r=nn(r,i.pointwise_conv,[1,1]),s===11&&(e=r)}),e===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:r,conv11:e}})}function p2(n,t,e,r,o){var i=n.shape[0],a=Math.min(e,i),s=t.map(function(l,f){return{score:l,boxIndex:f}}).filter(function(l){return l.score>o}).sort(function(l,f){return f.score-l.score}),u=function(l){return l<=r?1:0},c=[];return s.forEach(function(l){if(!(c.length>=a)){for(var f=l.score,h=c.length-1;h>=0;--h){var d=v2(n,l.boxIndex,c[h]);if(d!==0&&(l.score*=u(d),l.score<=o))break}f===l.score&&c.push(l.boxIndex)}}),c}function v2(n,t,e){var r=n.arraySync(),o=Math.min(r[t][0],r[t][2]),i=Math.min(r[t][1],r[t][3]),a=Math.max(r[t][0],r[t][2]),s=Math.max(r[t][1],r[t][3]),u=Math.min(r[e][0],r[e][2]),c=Math.min(r[e][1],r[e][3]),l=Math.max(r[e][0],r[e][2]),f=Math.max(r[e][1],r[e][3]),h=(a-o)*(s-i),d=(l-u)*(f-c);if(h<=0||d<=0)return 0;var p=Math.max(o,u),v=Math.max(i,c),m=Math.min(a,l),g=Math.min(s,f),x=Math.max(m-p,0)*Math.max(g-v,0);return x/(h+d-x)}function m2(n){var t=et(Kn(n,[1,0])),e=[nt(t[2],t[0]),nt(t[3],t[1])],r=[De(t[0],qt(e[0],re(2))),De(t[1],qt(e[1],re(2)))];return{sizes:e,centers:r}}function g2(n,t){var e=m2(n),r=e.sizes,o=e.centers,i=et(Kn(t,[1,0])),a=qt(yt(_s(qt(i[2],re(5))),r[0]),re(2)),s=De(yt(qt(i[0],re(10)),r[0]),o[0]),u=qt(yt(_s(qt(i[3],re(5))),r[1]),re(2)),c=De(yt(qt(i[1],re(10)),r[1]),o[1]);return Kn(Wt([nt(s,a),nt(c,u),De(s,a),De(c,u)]),[1,0])}function y2(n,t,e){return ie(function(){var r=n.shape[0],o=g2(Xt(Mr(e.extra_dim,[r,1,1]),[-1,4]),Xt(n,[-1,4]));o=Xt(o,[r,o.shape[0]/r,4]);var i=Fh(dn(t,[0,0,1],[-1,-1,-1])),a=dn(i,[0,0,0],[-1,-1,1]);a=Xt(a,[r,a.shape[1]]);var s=et(o),u=et(a);return{boxes:s,scores:u}})}function Rr(n,t){return ie(function(){var e=n.shape[0],r=Xt(Yt(n,t.box_encoding_predictor),[e,-1,1,4]),o=Xt(Yt(n,t.class_predictor),[e,-1,3]);return{boxPredictionEncoding:r,classPrediction:o}})}function x2(n,t,e){return ie(function(){var r=nn(n,e.conv_0,[1,1]),o=nn(r,e.conv_1,[2,2]),i=nn(o,e.conv_2,[1,1]),a=nn(i,e.conv_3,[2,2]),s=nn(a,e.conv_4,[1,1]),u=nn(s,e.conv_5,[2,2]),c=nn(u,e.conv_6,[1,1]),l=nn(c,e.conv_7,[2,2]),f=Rr(t,e.box_predictor_0),h=Rr(n,e.box_predictor_1),d=Rr(o,e.box_predictor_2),p=Rr(a,e.box_predictor_3),v=Rr(u,e.box_predictor_4),m=Rr(l,e.box_predictor_5),g=Ze([f.boxPredictionEncoding,h.boxPredictionEncoding,d.boxPredictionEncoding,p.boxPredictionEncoding,v.boxPredictionEncoding,m.boxPredictionEncoding],1),x=Ze([f.classPrediction,h.classPrediction,d.classPrediction,p.classPrediction,v.classPrediction,m.classPrediction],1);return{boxPredictions:g,classPredictions:x}})}var Lo=function(){function n(t){var e=t===void 0?{}:t,r=e.minConfidence,o=e.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=r||.5,this._maxResults=o||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(n.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),n}(),Gd=function(n){xe(t,n);function t(){return n.call(this,"SsdMobilenetv1")||this}return t.prototype.forwardInput=function(e){var r=this.params;if(!r)throw new Error("SsdMobilenetv1 - load model before inference");return ie(function(){var o=e.toBatchTensor(512,!1).toFloat(),i=nt(yt(o,re(.007843137718737125)),re(1)),a=d2(i,r.mobilenetv1),s=x2(a.out,a.conv11,r.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return y2(u,c,r.output_layer)})},t.prototype.forward=function(e){return fe(this,void 0,void 0,function(){var r;return he(this,function(o){switch(o.label){case 0:return r=this.forwardInput,[4,ct(e)];case 1:return[2,r.apply(this,[o.sent()])]}})})},t.prototype.locateFaces=function(e,r){return r===void 0&&(r={}),fe(this,void 0,void 0,function(){var o,i,a,s,u,c,l,f,h,d,p,v,m,g,x,b,y,w,_,k,S;return he(this,function(R){switch(R.label){case 0:return o=new Lo(r),i=o.maxResults,a=o.minConfidence,[4,ct(e)];case 1:for(s=R.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,f=c[0],h=l[0],d=1;d<c.length;d++)c[d].dispose(),l[d].dispose();return m=(v=Array).from,[4,h.data()];case 2:return p=m.apply(v,[R.sent()]),g=.5,x=p2(f,p,i,g,a),b=s.getReshapedInputDimensions(0),y=s.inputSize,w=y/b.width,_=y/b.height,k=f.arraySync(),S=x.map(function(I){var P=[Math.max(0,k[I][0]),Math.min(1,k[I][2])].map(function(W){return W*_}),N=P[0],V=P[1],U=[Math.max(0,k[I][1]),Math.min(1,k[I][3])].map(function(W){return W*w}),z=U[0],j=U[1];return new gn(p[I],new ku(z,N,j-z,V-N),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),f.dispose(),h.dispose(),[2,S]}})})},t.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},t.prototype.extractParamsFromWeigthMap=function(e){return c2(e)},t.prototype.extractParams=function(e){return s2(e)},t}(An);(function(n){xe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t})(Gd);var b2=.4,w2=[new Oe(.738768,.874946),new Oe(2.42204,2.65704),new Oe(4.30971,7.04493),new Oe(10.246,4.59428),new Oe(12.6868,11.8741)],_2=[new Oe(1.603231,2.094468),new Oe(6.041143,7.080126),new Oe(2.882459,3.518061),new Oe(4.266906,5.178857),new Oe(9.041765,10.66308)],C2=[117.001,114.697,97.404],E2="tiny_yolov2_model",I2="tiny_yolov2_separable_conv_model",oi=function(n){return typeof n=="number"};function R2(n){if(!n)throw new Error("invalid config: "+n);if(typeof n.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+n.withSeparableConvs);if(!oi(n.iouThreshold)||n.iouThreshold<0||n.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+n.iouThreshold);if(!Array.isArray(n.classes)||!n.classes.length||!n.classes.every(function(t){return typeof t=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(n.classes));if(!Array.isArray(n.anchors)||!n.anchors.length||!n.anchors.map(function(t){return t||{}}).every(function(t){return oi(t.x)&&oi(t.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(n.anchors));if(n.meanRgb&&(!Array.isArray(n.meanRgb)||n.meanRgb.length!==3||!n.meanRgb.every(oi)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(n.meanRgb))}function Wu(n){return ie(function(){var t=yt(n,re(.10000000149011612));return De(qe(nt(n,t)),t)})}function Pn(n,t){return ie(function(){var e=gr(n,[[0,0],[1,1],[1,1],[0,0]]);return e=Gt(e,t.conv.filters,[1,1],"valid"),e=nt(e,t.bn.sub),e=yt(e,t.bn.truediv),e=De(e,t.conv.bias),Wu(e)})}function Mn(n,t){return ie(function(){var e=gr(n,[[0,0],[1,1],[1,1],[0,0]]);return e=vu(e,t.depthwise_filter,t.pointwise_filter,[1,1],"valid"),e=De(e,t.bias),Wu(e)})}function S2(n,t){var e=fa(n,t);function r(a,s){var u=Je(n(a)),c=Je(n(a));return t.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function o(a,s,u){var c=e(a,s,3,u+"/conv"),l=r(s,u+"/bn");return{conv:c,bn:l}}var i=Mu(n,t);return{extractConvParams:e,extractConvWithBatchNormParams:o,extractSeparableConvParams:i}}function k2(n,t,e,r){var o=Tn(n),i=o.extractWeights,a=o.getRemainingWeights,s=[],u=S2(i,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,f=u.extractSeparableConvParams,h;if(t.withSeparableConvs){var d=r[0],p=r[1],v=r[2],m=r[3],g=r[4],x=r[5],b=r[6],y=r[7],w=r[8],_=t.isFirstLayerConv2d?c(d,p,3,"conv0"):f(d,p,"conv0"),k=f(p,v,"conv1"),S=f(v,m,"conv2"),R=f(m,g,"conv3"),I=f(g,x,"conv4"),P=f(x,b,"conv5"),N=y?f(b,y,"conv6"):void 0,V=w?f(y,w,"conv7"):void 0,U=c(w||y||b,5*e,1,"conv8");h={conv0:_,conv1:k,conv2:S,conv3:R,conv4:I,conv5:P,conv6:N,conv7:V,conv8:U}}else{var d=r[0],p=r[1],v=r[2],m=r[3],g=r[4],x=r[5],b=r[6],y=r[7],w=r[8],_=l(d,p,"conv0"),k=l(p,v,"conv1"),S=l(v,m,"conv2"),R=l(m,g,"conv3"),I=l(g,x,"conv4"),P=l(x,b,"conv5"),N=l(b,y,"conv6"),V=l(y,w,"conv7"),U=c(w,5*e,1,"conv8");h={conv0:_,conv1:k,conv2:S,conv3:R,conv4:I,conv5:P,conv6:N,conv7:V,conv8:U}}if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{params:h,paramMappings:s}}function A2(n,t){var e=Zn(n,t);function r(s){var u=e(s+"/sub",1),c=e(s+"/truediv",1);return{sub:u,truediv:c}}function o(s){var u=e(s+"/filters",4),c=e(s+"/bias",1);return{filters:u,bias:c}}function i(s){var u=o(s+"/conv"),c=r(s+"/bn");return{conv:u,bn:c}}var a=Ou(e);return{extractConvParams:o,extractConvWithBatchNormParams:i,extractSeparableConvParams:a}}function D2(n,t){var e=[],r=A2(n,e),o=r.extractConvParams,i=r.extractConvWithBatchNormParams,a=r.extractSeparableConvParams,s;if(t.withSeparableConvs){var u=t.filterSizes&&t.filterSizes.length||9;s={conv0:t.isFirstLayerConv2d?o("conv0"):a("conv0"),conv1:a("conv1"),conv2:a("conv2"),conv3:a("conv3"),conv4:a("conv4"),conv5:a("conv5"),conv6:u>7?a("conv6"):void 0,conv7:u>8?a("conv7"):void 0,conv8:o("conv8")}}else s={conv0:i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:i("conv6"),conv7:i("conv7"),conv8:o("conv8")};return Dn(n,e),{params:s,paramMappings:e}}var Ol;(function(n){n[n.XS=224]="XS",n[n.SM=320]="SM",n[n.MD=416]="MD",n[n.LG=608]="LG"})(Ol||(Ol={}));var Uu=function(){function n(t){var e=t===void 0?{}:t,r=e.inputSize,o=e.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=r||416,this._scoreThreshold=o||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(n.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),n}(),jd=function(n){xe(t,n);function t(e){var r=n.call(this,"TinyYolov2")||this;return R2(e),r._config=e,r}return Object.defineProperty(t.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),t.prototype.runTinyYolov2=function(e,r){var o=Pn(e,r.conv0);return o=it(o,[2,2],[2,2],"same"),o=Pn(o,r.conv1),o=it(o,[2,2],[2,2],"same"),o=Pn(o,r.conv2),o=it(o,[2,2],[2,2],"same"),o=Pn(o,r.conv3),o=it(o,[2,2],[2,2],"same"),o=Pn(o,r.conv4),o=it(o,[2,2],[2,2],"same"),o=Pn(o,r.conv5),o=it(o,[2,2],[1,1],"same"),o=Pn(o,r.conv6),o=Pn(o,r.conv7),Yt(o,r.conv8,"valid",!1)},t.prototype.runMobilenet=function(e,r){var o=this.config.isFirstLayerConv2d?Wu(Yt(e,r.conv0,"valid",!1)):Mn(e,r.conv0);return o=it(o,[2,2],[2,2],"same"),o=Mn(o,r.conv1),o=it(o,[2,2],[2,2],"same"),o=Mn(o,r.conv2),o=it(o,[2,2],[2,2],"same"),o=Mn(o,r.conv3),o=it(o,[2,2],[2,2],"same"),o=Mn(o,r.conv4),o=it(o,[2,2],[2,2],"same"),o=Mn(o,r.conv5),o=it(o,[2,2],[1,1],"same"),o=r.conv6?Mn(o,r.conv6):o,o=r.conv7?Mn(o,r.conv7):o,Yt(o,r.conv8,"valid",!1)},t.prototype.forwardInput=function(e,r){var o=this,i=this.params;if(!i)throw new Error("TinyYolov2 - load model before inference");return ie(function(){var a=e.toBatchTensor(r,!1).toFloat();return a=o.config.meanRgb?Bo(a,o.config.meanRgb):a,a=a.div(re(256)),o.config.withSeparableConvs?o.runMobilenet(a,i):o.runTinyYolov2(a,i)})},t.prototype.forward=function(e,r){return fe(this,void 0,void 0,function(){var o;return he(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,ct(e)];case 1:return[4,o.apply(this,[i.sent(),r])];case 2:return[2,i.sent()]}})})},t.prototype.detect=function(e,r){return r===void 0&&(r={}),fe(this,void 0,void 0,function(){var o,i,a,s,u,c,l,f,h,d,p,v,m,g,x=this;return he(this,function(b){switch(b.label){case 0:return o=new Uu(r),i=o.inputSize,a=o.scoreThreshold,[4,ct(e)];case 1:return s=b.sent(),[4,this.forwardInput(s,i)];case 2:return u=b.sent(),c=ie(function(){return et(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),a)];case 3:return f=b.sent(),u.dispose(),c.dispose(),h=f.map(function(y){return y.box}),d=f.map(function(y){return y.score}),p=f.map(function(y){return y.classScore}),v=f.map(function(y){return x.config.classes[y.label]}),m=Ro(h.map(function(y){return y.rescale(i)}),d,this.config.iouThreshold,!0),g=m.map(function(y){return new gd(d[y],p[y],v[y],h[y],l)}),[2,g]}})})},t.prototype.getDefaultModelName=function(){return""},t.prototype.extractParamsFromWeigthMap=function(e){return D2(e,this.config)},t.prototype.extractParams=function(e){var r=this.config.filterSizes||t.DEFAULT_FILTER_SIZES,o=r?r.length:void 0;if(o!==7&&o!==8&&o!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+o+" filterSizes in config");return k2(e,this.config,this.boxEncodingSize,r)},t.prototype.extractBoxes=function(e,r,o){return fe(this,void 0,void 0,function(){var i,a,s,u,c,l,f,h,d,p,v,m,g,x,b,y,w,_,k,S,R,I,P,N,V,U,z,j,W,B=this;return he(this,function(q){switch(q.label){case 0:return i=r.width,a=r.height,s=Math.max(i,a),u=s/i,c=s/a,l=e.shape[1],f=this.config.anchors.length,h=ie(function(){var $=e.reshape([l,l,f,B.boxEncodingSize]),te=$.slice([0,0,0,0],[l,l,f,4]),oe=$.slice([0,0,0,4],[l,l,f,1]),pe=B.withClassScores?Sn($.slice([0,0,0,5],[l,l,f,B.config.classes.length]),3):re(0);return[te,oe,pe]}),d=h[0],p=h[1],v=h[2],m=[],[4,p.array()];case 1:return g=q.sent(),[4,d.array()];case 2:x=q.sent(),b=0,q.label=3;case 3:if(!(b<l))return[3,12];y=0,q.label=4;case 4:if(!(y<l))return[3,11];w=0,q.label=5;case 5:return w<f?(_=Ka(g[b][y][w][0]),!o||_>o?(k=(y+Ka(x[b][y][w][0]))/l*u,S=(b+Ka(x[b][y][w][1]))/l*c,R=Math.exp(x[b][y][w][2])*this.config.anchors[w].x/l*u,I=Math.exp(x[b][y][w][3])*this.config.anchors[w].y/l*c,P=k-R/2,N=S-I/2,V={row:b,col:y,anchor:w},this.withClassScores?[4,this.extractPredictedClass(v,V)]:[3,7]):[3,9]):[3,10];case 6:return W=q.sent(),[3,8];case 7:W={classScore:1,label:0},q.label=8;case 8:U=W,z=U.classScore,j=U.label,m.push(pt({box:new ca(P,N,P+R,N+I),score:_,classScore:_*z,label:j},V)),q.label=9;case 9:return w++,[3,5];case 10:return y++,[3,4];case 11:return b++,[3,3];case 12:return d.dispose(),p.dispose(),v.dispose(),[2,m]}})})},t.prototype.extractPredictedClass=function(e,r){return fe(this,void 0,void 0,function(){var o,i,a,s;return he(this,function(u){switch(u.label){case 0:return o=r.row,i=r.col,a=r.anchor,[4,e.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[o][i][a][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},t.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],t}(An),T2=function(n){xe(t,n);function t(e){e===void 0&&(e=!0);var r=this,o=Object.assign({},{withSeparableConvs:e,iouThreshold:b2,classes:["face"]},e?{anchors:_2,meanRgb:C2}:{anchors:w2,withClassScores:!0});return r=n.call(this,o)||this,r}return Object.defineProperty(t.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,r){return fe(this,void 0,void 0,function(){var o;return he(this,function(i){switch(i.label){case 0:return[4,this.detect(e,r)];case 1:return o=i.sent(),[2,o.map(function(a){return new gn(a.score,a.relativeBox,{width:a.imageWidth,height:a.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return this.withSeparableConvs?I2:E2},t.prototype.extractParamsFromWeigthMap=function(e){return n.prototype.extractParamsFromWeigthMap.call(this,e)},t}(jd),N2=function(n){xe(t,n);function t(){var e=n!==null&&n.apply(this,arguments)||this;return e._name="TinyFaceDetectorOptions",e}return t}(Uu),Wo=function(){function n(){}return n.prototype.then=function(t){return fe(this,void 0,void 0,function(){var e;return he(this,function(r){switch(r.label){case 0:return e=t,[4,this.run()];case 1:return[2,e.apply(void 0,[r.sent()])]}})})},n.prototype.run=function(){return fe(this,void 0,void 0,function(){return he(this,function(t){throw new Error("ComposableTask - run is not implemented")})})},n}();function ha(n,t,e,r,o){return o===void 0&&(o=function(i){var a=i.alignedRect;return a}),fe(this,void 0,void 0,function(){var i,a,s,u,c;return he(this,function(l){switch(l.label){case 0:return i=n.map(function(f){return Ww(f)?o(f):f.detection}),s=r,s?[3,5]:t instanceof je?[4,Fu(t,i)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,Nu(t,i)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return a=s,[4,e(a)];case 6:return c=l.sent(),a.forEach(function(f){return f instanceof je&&f.dispose()}),[2,c]}})})}function Vu(n,t,e,r,o){return fe(this,void 0,void 0,function(){var i=this;return he(this,function(a){return[2,ha([n],t,function(s){return fe(i,void 0,void 0,function(){return he(this,function(u){return[2,e(s[0])]})})},r,o)]})})}function F2(n){return ie(function(){return Wt(et(n,3).reverse(),3)})}var ii=2,Ui=12;function P2(n,t){var e=fa(n,t),r=Pu(n,t);function o(c,l){var f=Je(n(c));return t.push({paramPath:l}),f}function i(c,l,f){f===void 0&&(f=!1);var h=e(c[0],c[1],3,l+"/conv1"),d=o(c[1],l+"/prelu1_alpha"),p=e(c[1],c[2],3,l+"/conv2"),v=o(c[2],l+"/prelu2_alpha"),m=e(c[2],c[3],f?2:3,l+"/conv3"),g=o(c[3],l+"/prelu3_alpha");return{conv1:h,prelu1_alpha:d,conv2:p,prelu2_alpha:v,conv3:m,prelu3_alpha:g}}function a(){var c=i([3,10,16,32],"pnet"),l=e(32,2,1,"pnet/conv4_1"),f=e(32,4,1,"pnet/conv4_2");return pt(pt({},c),{conv4_1:l,conv4_2:f})}function s(){var c=i([3,28,48,64],"rnet",!0),l=r(576,128,"rnet/fc1"),f=o(128,"rnet/prelu4_alpha"),h=r(128,2,"rnet/fc2_1"),d=r(128,4,"rnet/fc2_2");return pt(pt({},c),{fc1:l,prelu4_alpha:f,fc2_1:h,fc2_2:d})}function u(){var c=i([3,32,64,64],"onet"),l=e(64,128,2,"onet/conv4"),f=o(128,"onet/prelu4_alpha"),h=r(1152,256,"onet/fc1"),d=o(256,"onet/prelu5_alpha"),p=r(256,2,"onet/fc2_1"),v=r(256,4,"onet/fc2_2"),m=r(256,10,"onet/fc2_3");return pt(pt({},c),{conv4:l,prelu4_alpha:f,fc1:h,prelu5_alpha:d,fc2_1:p,fc2_2:v,fc2_3:m})}return{extractPNetParams:a,extractRNetParams:s,extractONetParams:u}}function M2(n){var t=Tn(n),e=t.extractWeights,r=t.getRemainingWeights,o=[],i=P2(e,o),a=i.extractPNetParams,s=i.extractRNetParams,u=i.extractONetParams,c=a(),l=s(),f=u();if(r().length!==0)throw new Error("weights remaing after extract: "+r().length);return{params:{pnet:c,rnet:l,onet:f},paramMappings:o}}function O2(n,t){var e=Zn(n,t);function r(l){var f=e(l+"/weights",4,l+"/filters"),h=e(l+"/bias",1);return{filters:f,bias:h}}function o(l){var f=e(l+"/weights",2),h=e(l+"/bias",1);return{weights:f,bias:h}}function i(l){return e(l,1)}function a(l){var f=r(l+"/conv1"),h=i(l+"/prelu1_alpha"),d=r(l+"/conv2"),p=i(l+"/prelu2_alpha"),v=r(l+"/conv3"),m=i(l+"/prelu3_alpha");return{conv1:f,prelu1_alpha:h,conv2:d,prelu2_alpha:p,conv3:v,prelu3_alpha:m}}function s(){var l=a("pnet"),f=r("pnet/conv4_1"),h=r("pnet/conv4_2");return pt(pt({},l),{conv4_1:f,conv4_2:h})}function u(){var l=a("rnet"),f=o("rnet/fc1"),h=i("rnet/prelu4_alpha"),d=o("rnet/fc2_1"),p=o("rnet/fc2_2");return pt(pt({},l),{fc1:f,prelu4_alpha:h,fc2_1:d,fc2_2:p})}function c(){var l=a("onet"),f=r("onet/conv4"),h=i("onet/prelu4_alpha"),d=o("onet/fc1"),p=i("onet/prelu5_alpha"),v=o("onet/fc2_1"),m=o("onet/fc2_2"),g=o("onet/fc2_3");return pt(pt({},l),{conv4:f,prelu4_alpha:h,fc1:d,prelu5_alpha:p,fc2_1:v,fc2_2:m,fc2_3:g})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function B2(n){var t=[],e=O2(n,t),r=e.extractPNetParams,o=e.extractRNetParams,i=e.extractONetParams,a=r(),s=o(),u=i();return Dn(n,t),{params:{pnet:a,rnet:s,onet:u},paramMappings:t}}function Ds(n,t){var e=t[0],r=t[1];return{height:Math.floor(e*n),width:Math.floor(r*n)}}function L2(n,t,e){for(var r=e[0],o=e[1],i=Ui/n,a=[],s=Math.min(r,o)*i,u=0;s>=12;)a.push(i*Math.pow(t,u)),s=s*t,u+=1;return a}var zu=function(n){xe(t,n);function t(e,r,o,i){return n.call(this,{left:e,top:r,right:o,bottom:i},!0)||this}return t}(Xn);function qd(n){return ie(function(){return yt(nt(n,re(127.5)),re(.0078125))})}function Vr(n,t){return ie(function(){return De(qe(n),yt(t,Fi(qe(Fi(n)))))})}function Hu(n,t,e){return e===void 0&&(e=!1),ie(function(){var r=Yt(n,t.conv1,"valid");return r=Vr(r,t.prelu1_alpha),r=it(r,e?[2,2]:[3,3],[2,2],"same"),r=Yt(r,t.conv2,"valid"),r=Vr(r,t.prelu2_alpha),r=e?r:it(r,[3,3],[2,2],"valid"),r=Yt(r,t.conv3,"valid"),r=Vr(r,t.prelu3_alpha),r})}function W2(n,t){return ie(function(){var e=Hu(n,t,!0),r=Yt(e,t.conv4_1,"valid"),o=Ut(ia(r,3),3),i=Sn(nt(r,o),3),a=Yt(e,t.conv4_2,"valid");return{prob:i,regions:a}})}function U2(n,t){return ie(function(){var e=Ds(t,n.shape.slice(1)),r=e.height,o=e.width,i=bu.resizeBilinear(n,[r,o]),a=qd(i);return Kn(a,[0,2,1,3])})}function V2(n,t,e,r){for(var o=[],i=n.arraySync(),a=0;a<n.shape[0];a++)for(var s=0;s<n.shape[1];s++)i[a][s]>=r&&o.push(new Oe(s,a));var u=o.map(function(c){var l=new ca(Math.round((c.y*ii+1)/e),Math.round((c.x*ii+1)/e),Math.round((c.y*ii+Ui)/e),Math.round((c.x*ii+Ui)/e)),f=i[c.y][c.x],h=t.arraySync(),d=new zu(h[c.y][c.x][0],h[c.y][c.x][1],h[c.y][c.x][2],h[c.y][c.x][3]);return{cell:l,score:f,region:d}});return u}function z2(n,t,e,r,o){o.stage1=[];var i=t.map(function(h){return ie(function(){var d={scale:h},p=U2(n,h),v=Date.now(),m=W2(p,r),g=m.prob,x=m.regions;d.pnet=Date.now()-v;var b=et(et(g,3)[1])[0],y=et(x)[0];return{scoresTensor:b,regionsTensor:y,scale:h,statsForScale:d}})}),a=i.map(function(h){var d=h.scoresTensor,p=h.regionsTensor,v=h.scale,m=h.statsForScale,g=V2(d,p,v,e);if(d.dispose(),p.dispose(),!g.length)return o.stage1.push(m),[];var x=Date.now(),b=Ro(g.map(function(y){return y.cell}),g.map(function(y){return y.score}),.5);return m.nms=Date.now()-x,m.numBoxes=b.length,o.stage1.push(m),b.map(function(y){return g[y]})}),s=a.reduce(function(h,d){return h.concat(d)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),f=Ro(s.map(function(h){return h.cell}),s.map(function(h){return h.score}),.7);o.stage1_nms=Date.now()-l,c=f.map(function(h){return s[h].score}),u=f.map(function(h){return s[h]}).map(function(h){var d=h.cell,p=h.region;return new ca(d.left+p.left*d.width,d.top+p.top*d.height,d.right+p.right*d.width,d.bottom+p.bottom*d.height).toSquare().round()})}return{boxes:u,scores:c}}function Kd(n,t,e){var r=e.width,o=e.height;return fe(this,void 0,void 0,function(){var i,a,s,u=this;return he(this,function(c){switch(c.label){case 0:return i=vr(n),[4,Promise.all(t.map(function(l){return fe(u,void 0,void 0,function(){var f,h,d,p,v,m,g,x;return he(this,function(b){return f=l.padAtBorders(n.height,n.width),h=f.y,d=f.ey,p=f.x,v=f.ex,m=p-1,g=h-1,x=i.getImageData(m,g,v-m,d-g),[2,xt.isNodejs()?Tu(x):createImageBitmap(x)]})})}))];case 1:return a=c.sent(),s=[],a.forEach(function(l){var f=la({width:r,height:o}),h=vr(f);h.drawImage(l,0,0,r,o);for(var d=h.getImageData(0,0,r,o).data,p=[],v=0;v<d.length;v+=4)p.push(d[v+2]),p.push(d[v+1]),p.push(d[v]);s.push(p)}),[2,s.map(function(l){var f=ie(function(){var h=Kn(Ct(l,[1,r,o,3]),[0,2,1,3]).toFloat();return qd(h)});return f})]}})})}function H2(n,t){return ie(function(){var e=Hu(n,t),r=Xt(e,[e.shape[0],t.fc1.weights.shape[0]]),o=cn(r,t.fc1),i=Vr(o,t.prelu4_alpha),a=cn(i,t.fc2_1),s=Ut(ia(a,1),1),u=Sn(nt(a,s),1),c=cn(i,t.fc2_2),l=et(u,1)[1];return{scores:l,regions:c}})}function G2(n,t,e,r,o){return fe(this,void 0,void 0,function(){var i,a,s,u,c,l,f,h,d,p,v,m,g,x;return he(this,function(b){switch(b.label){case 0:return i=Date.now(),[4,Kd(n,t,{width:24,height:24})];case 1:return a=b.sent(),o.stage2_extractImagePatches=Date.now()-i,i=Date.now(),s=a.map(function(y){var w=H2(y,r);return y.dispose(),w}),o.stage2_rnet=Date.now()-i,u=s.length>1?Ze(s.map(function(y){return y.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[b.sent()]),u.dispose(),h=c.map(function(y,w){return{score:y,idx:w}}).filter(function(y){return y.score>e}).map(function(y){var w=y.idx;return w}),d=h.map(function(y){return t[y]}),p=h.map(function(y){return c[y]}),v=[],m=[],d.length>0&&(i=Date.now(),g=Ro(d,p,.7),o.stage2_nms=Date.now()-i,x=g.map(function(y){var w=s[h[y]].regions.arraySync();return new zu(w[0][0],w[0][1],w[0][2],w[0][3])}),m=g.map(function(y){return p[y]}),v=g.map(function(y,w){return d[y].calibrate(x[w])})),s.forEach(function(y){y.regions.dispose(),y.scores.dispose()}),[2,{boxes:v,scores:m}]}})})}function j2(n,t){return ie(function(){var e=Hu(n,t);e=it(e,[2,2],[2,2],"same"),e=Yt(e,t.conv4,"valid"),e=Vr(e,t.prelu4_alpha);var r=Xt(e,[e.shape[0],t.fc1.weights.shape[0]]),o=cn(r,t.fc1),i=Vr(o,t.prelu5_alpha),a=cn(i,t.fc2_1),s=Ut(ia(a,1),1),u=Sn(nt(a,s),1),c=cn(i,t.fc2_2),l=cn(i,t.fc2_3),f=et(u,1)[1];return{scores:f,regions:c,points:l}})}function q2(n,t,e,r,o){return fe(this,void 0,void 0,function(){var i,a,s,u,c,l,f,h,d,p,v,m,g,x,b;return he(this,function(y){switch(y.label){case 0:return i=Date.now(),[4,Kd(n,t,{width:48,height:48})];case 1:return a=y.sent(),o.stage3_extractImagePatches=Date.now()-i,i=Date.now(),s=a.map(function(w){var _=j2(w,r);return w.dispose(),_}),o.stage3_onet=Date.now()-i,u=s.length>1?Ze(s.map(function(w){return w.scores})):s[0].scores,f=(l=Array).from,[4,u.data()];case 2:return c=f.apply(l,[y.sent()]),u.dispose(),h=c.map(function(w,_){return{score:w,idx:_}}).filter(function(w){return w.score>e}).map(function(w){var _=w.idx;return _}),d=h.map(function(w){var _=s[w].regions.arraySync();return new zu(_[0][0],_[0][1],_[0][2],_[0][3])}),p=h.map(function(w,_){return t[w].calibrate(d[_])}),v=h.map(function(w){return c[w]}),m=[],g=[],x=[],p.length>0&&(i=Date.now(),b=Ro(p,v,.7,!1),o.stage3_nms=Date.now()-i,m=b.map(function(w){return p[w]}),g=b.map(function(w){return v[w]}),x=b.map(function(w,_){return Array(5).fill(0).map(function(k,S){var R=s[w].points.arraySync();return new Oe(R[0][S]*(m[_].width+1)+m[_].left,R[0][S+5]*(m[_].height+1)+m[_].top)})})),s.forEach(function(w){w.regions.dispose(),w.scores.dispose(),w.points.dispose()}),[2,{boxes:m,scores:g,points:x}]}})})}var K2=function(n){xe(t,n);function t(){return n.call(this,"Mtcnn")||this}return t.prototype.load=function(e){return fe(this,void 0,void 0,function(){return he(this,function(r){return console.warn("mtcnn is deprecated and will be removed soon"),[2,n.prototype.load.call(this,e)]})})},t.prototype.loadFromDisk=function(e){return fe(this,void 0,void 0,function(){return he(this,function(r){return console.warn("mtcnn is deprecated and will be removed soon"),[2,n.prototype.loadFromDisk.call(this,e)]})})},t.prototype.forwardInput=function(e,r){return r===void 0&&(r={}),fe(this,void 0,void 0,function(){var o,i,a,s,u,c,l,f,h,d,p,v,m,g,x,b,y,w,_,k,S;return he(this,function(R){switch(R.label){case 0:if(o=this.params,!o)throw new Error("Mtcnn - load model before inference");if(i=e.canvases[0],!i)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return a={},s=Date.now(),u=ie(function(){return F2(Ut(Ru.fromPixels(i)).toFloat())}),c=function(I){return u.dispose(),a.total=Date.now()-s,I},l=u.shape.slice(1),f=l[0],h=l[1],d=new Hd(r),p=d.minFaceSize,v=d.scaleFactor,m=d.maxNumScales,g=d.scoreThresholds,x=d.scaleSteps,b=(x||L2(p,v,[f,h])).filter(function(I){var P=Ds(I,[f,h]);return Math.min(P.width,P.height)>Ui}).slice(0,m),a.scales=b,a.pyramid=b.map(function(I){return Ds(I,[f,h])}),y=Date.now(),[4,z2(u,b,g[0],o.pnet,a)];case 1:return w=R.sent(),a.total_stage1=Date.now()-y,w.boxes.length?(a.stage2_numInputBoxes=w.boxes.length,y=Date.now(),[4,G2(i,w.boxes,g[1],o.rnet,a)]):[2,c({results:[],stats:a})];case 2:return _=R.sent(),a.total_stage2=Date.now()-y,_.boxes.length?(a.stage3_numInputBoxes=_.boxes.length,y=Date.now(),[4,q2(i,_.boxes,g[2],o.onet,a)]):[2,c({results:[],stats:a})];case 3:return k=R.sent(),a.total_stage3=Date.now()-y,S=k.boxes.map(function(I,P){return Bu(Au({},new gn(k.scores[P],new ku(I.left/h,I.top/f,I.width/h,I.height/f),{height:f,width:h})),new _w(k.points[P].map(function(N){return N.sub(new Oe(I.left,I.top)).div(new Oe(I.width,I.height))}),{width:I.width,height:I.height}))}),[2,c({results:S,stats:a})]}})})},t.prototype.forward=function(e,r){return r===void 0&&(r={}),fe(this,void 0,void 0,function(){var o;return he(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,ct(e)];case 1:return[4,o.apply(this,[i.sent(),r])];case 2:return[2,i.sent().results]}})})},t.prototype.forwardWithStats=function(e,r){return r===void 0&&(r={}),fe(this,void 0,void 0,function(){var o;return he(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,ct(e)];case 1:return[2,o.apply(this,[i.sent(),r])]}})})},t.prototype.getDefaultModelName=function(){return"mtcnn_model"},t.prototype.extractParamsFromWeigthMap=function(e){return B2(e)},t.prototype.extractParams=function(e){return M2(e)},t}(An),X2=.4,$2=[new Oe(1.603231,2.094468),new Oe(6.041143,7.080126),new Oe(2.882459,3.518061),new Oe(4.266906,5.178857),new Oe(9.041765,10.66308)],Y2=[117.001,114.697,97.404],J2=function(n){xe(t,n);function t(){var e=this,r={withSeparableConvs:!0,iouThreshold:X2,classes:["face"],anchors:$2,meanRgb:Y2,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return e=n.call(this,r)||this,e}return Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,r){return fe(this,void 0,void 0,function(){var o;return he(this,function(i){switch(i.label){case 0:return[4,this.detect(e,r)];case 1:return o=i.sent(),[2,o.map(function(a){return new gn(a.score,a.relativeBox,{width:a.imageWidth,height:a.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},t.prototype.extractParamsFromWeigthMap=function(e){return n.prototype.extractParamsFromWeigthMap.call(this,e)},t}(jd),It={ssdMobilenetv1:new Gd,tinyFaceDetector:new J2,tinyYolov2:new T2,mtcnn:new K2,faceLandmark68Net:new Bd,faceLandmark68TinyNet:new Qw,faceRecognitionNet:new i2,faceExpressionNet:new Lw,ageGenderNet:new Xw},Xd=function(n){xe(t,n);function t(e,r,o){var i=n.call(this)||this;return i.parentTask=e,i.input=r,i.extractedFaces=o,i}return t}(Wo),Gu=function(n){xe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return fe(this,void 0,void 0,function(){var e,r,o=this;return he(this,function(i){switch(i.label){case 0:return[4,this.parentTask];case 1:return e=i.sent(),[4,ha(e,this.input,function(a){return fe(o,void 0,void 0,function(){return he(this,function(s){switch(s.label){case 0:return[4,Promise.all(a.map(function(u){return It.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return r=i.sent(),[2,e.map(function(a,s){return Pd(a,r[s])})]}})})},t.prototype.withAgeAndGender=function(){return new Xu(this,this.input)},t}(Xd),ju=function(n){xe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return fe(this,void 0,void 0,function(){var e,r;return he(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,Vu(e,this.input,function(i){return It.faceExpressionNet.predictExpressions(i)},this.extractedFaces)]:[2];case 2:return r=o.sent(),[2,Pd(e,r)]}})})},t.prototype.withAgeAndGender=function(){return new $u(this,this.input)},t}(Xd),qu=function(n){xe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new Yu(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Qu(this,this.input)},t}(Gu),Ku=function(n){xe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new Ju(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Zu(this,this.input)},t}(ju),$d=function(n){xe(t,n);function t(e,r,o){var i=n.call(this)||this;return i.parentTask=e,i.input=r,i.extractedFaces=o,i}return t}(Wo),Xu=function(n){xe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return fe(this,void 0,void 0,function(){var e,r,o=this;return he(this,function(i){switch(i.label){case 0:return[4,this.parentTask];case 1:return e=i.sent(),[4,ha(e,this.input,function(a){return fe(o,void 0,void 0,function(){return he(this,function(s){switch(s.label){case 0:return[4,Promise.all(a.map(function(u){return It.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return r=i.sent(),[2,e.map(function(a,s){var u=r[s],c=u.age,l=u.gender,f=u.genderProbability;return Vd(zd(a,l,f),c)})]}})})},t.prototype.withFaceExpressions=function(){return new Gu(this,this.input)},t}($d),$u=function(n){xe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return fe(this,void 0,void 0,function(){var e,r,o,i,a;return he(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?[4,Vu(e,this.input,function(u){return It.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return r=s.sent(),o=r.age,i=r.gender,a=r.genderProbability,[2,Vd(zd(e,i,a),o)]}})})},t.prototype.withFaceExpressions=function(){return new ju(this,this.input)},t}($d),Yu=function(n){xe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new qu(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Qu(this,this.input)},t}(Xu),Ju=function(n){xe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new Ku(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Zu(this,this.input)},t}($u),Yd=function(n){xe(t,n);function t(e,r){var o=n.call(this)||this;return o.parentTask=e,o.input=r,o}return t}(Wo),Qu=function(n){xe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return fe(this,void 0,void 0,function(){var e,r;return he(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),[4,ha(e,this.input,function(i){return Promise.all(i.map(function(a){return It.faceRecognitionNet.computeFaceDescriptor(a)}))},null,function(i){return i.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return r=o.sent(),[2,r.map(function(i,a){return Ud(e[a],i)})]}})})},t.prototype.withFaceExpressions=function(){return new qu(this,this.input)},t.prototype.withAgeAndGender=function(){return new Yu(this,this.input)},t}(Yd),Zu=function(n){xe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return fe(this,void 0,void 0,function(){var e,r;return he(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,Vu(e,this.input,function(i){return It.faceRecognitionNet.computeFaceDescriptor(i)},null,function(i){return i.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return r=o.sent(),[2,Ud(e,r)]}})})},t.prototype.withFaceExpressions=function(){return new Ku(this,this.input)},t.prototype.withAgeAndGender=function(){return new Ju(this,this.input)},t}(Yd),Jd=function(n){xe(t,n);function t(e,r,o){var i=n.call(this)||this;return i.parentTask=e,i.input=r,i.useTinyLandmarkNet=o,i}return Object.defineProperty(t.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?It.faceLandmark68TinyNet:It.faceLandmark68Net},enumerable:!0,configurable:!0}),t}(Wo),Q2=function(n){xe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return fe(this,void 0,void 0,function(){var e,r,o,i,a,s=this;return he(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return e=u.sent(),r=e.map(function(c){return c.detection}),this.input instanceof je?[4,Fu(this.input,r)]:[3,3];case 2:return i=u.sent(),[3,5];case 3:return[4,Nu(this.input,r)];case 4:i=u.sent(),u.label=5;case 5:return o=i,[4,Promise.all(o.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return a=u.sent(),o.forEach(function(c){return c instanceof je&&c.dispose()}),[2,e.map(function(c,l){return Bu(c,a[l])})]}})})},t.prototype.withFaceExpressions=function(){return new qu(this,this.input)},t.prototype.withAgeAndGender=function(){return new Yu(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Qu(this,this.input)},t}(Jd),Z2=function(n){xe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return fe(this,void 0,void 0,function(){var e,r,o,i,a;return he(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?(r=e.detection,this.input instanceof je?[4,Fu(this.input,[r])]:[3,3]):[2];case 2:return i=s.sent(),[3,5];case 3:return[4,Nu(this.input,[r])];case 4:i=s.sent(),s.label=5;case 5:return o=i,[4,this.landmarkNet.detectLandmarks(o[0])];case 6:return a=s.sent(),o.forEach(function(u){return u instanceof je&&u.dispose()}),[2,Bu(e,a)]}})})},t.prototype.withFaceExpressions=function(){return new Ku(this,this.input)},t.prototype.withAgeAndGender=function(){return new Ju(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Zu(this,this.input)},t}(Jd),Qd=function(n){xe(t,n);function t(e,r){r===void 0&&(r=new Lo);var o=n.call(this)||this;return o.input=e,o.options=r,o}return t}(Wo),e_=function(n){xe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return fe(this,void 0,void 0,function(){var e,r,o,i;return he(this,function(a){switch(a.label){case 0:return e=this,r=e.input,o=e.options,o instanceof Hd?[4,It.mtcnn.forward(r,o)]:[3,2];case 1:return[2,a.sent().map(function(s){return s.detection})];case 2:if(i=o instanceof N2?function(s){return It.tinyFaceDetector.locateFaces(s,o)}:o instanceof Lo?function(s){return It.ssdMobilenetv1.locateFaces(s,o)}:o instanceof Uu?function(s){return It.tinyYolov2.locateFaces(s,o)}:null,!i)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,i(r)]}})})},t.prototype.runAndExtendWithFaceDetections=function(){var e=this;return new Promise(function(r){return fe(e,void 0,void 0,function(){var o;return he(this,function(i){switch(i.label){case 0:return[4,this.run()];case 1:return o=i.sent(),[2,r(o.map(function(a){return Au({},a)}))]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new Q2(this.runAndExtendWithFaceDetections(),this.input,e)},t.prototype.withFaceExpressions=function(){return new Gu(this.runAndExtendWithFaceDetections(),this.input)},t.prototype.withAgeAndGender=function(){return new Xu(this.runAndExtendWithFaceDetections(),this.input)},t}(Qd),t_=function(n){xe(t,n);function t(){return n!==null&&n.apply(this,arguments)||this}return t.prototype.run=function(){return fe(this,void 0,void 0,function(){var e,r;return he(this,function(o){switch(o.label){case 0:return[4,new e_(this.input,this.options)];case 1:return e=o.sent(),r=e[0],e.forEach(function(i){i.score>r.score&&(r=i)}),[2,r]}})})},t.prototype.runAndExtendWithFaceDetection=function(){var e=this;return new Promise(function(r){return fe(e,void 0,void 0,function(){var o;return he(this,function(i){switch(i.label){case 0:return[4,this.run()];case 1:return o=i.sent(),[2,r(o?Au({},o):void 0)]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new Z2(this.runAndExtendWithFaceDetection(),this.input,e)},t.prototype.withFaceExpressions=function(){return new ju(this.runAndExtendWithFaceDetection(),this.input)},t.prototype.withAgeAndGender=function(){return new $u(this.runAndExtendWithFaceDetection(),this.input)},t}(Qd);function n_(n,t){return t===void 0&&(t=new Lo),new t_(n,t)}function r_(n,t){if(n.length!==t.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var e=Array.from(n),r=Array.from(t);return Math.sqrt(e.map(function(o,i){return o-r[i]}).reduce(function(o,i){return o+Math.pow(i,2)},0))}(function(){function n(t,e){e===void 0&&(e=.6),this._distanceThreshold=e;var r=Array.isArray(t)?t:[t];if(!r.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var o=1,i=function(){return"person "+o++};this._labeledDescriptors=r.map(function(a){if(a instanceof ti)return a;if(a instanceof Float32Array)return new ti(i(),[a]);if(a.descriptor&&a.descriptor instanceof Float32Array)return new ti(i(),[a.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(n.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),n.prototype.computeMeanDistance=function(t,e){return e.map(function(r){return r_(r,t)}).reduce(function(r,o){return r+o},0)/(e.length||1)},n.prototype.matchDescriptor=function(t){var e=this;return this.labeledDescriptors.map(function(r){var o=r.descriptors,i=r.label;return new Tl(i,e.computeMeanDistance(t,o))}).reduce(function(r,o){return r.distance<o.distance?r:o})},n.prototype.findBestMatch=function(t){var e=this.matchDescriptor(t);return e.distance<this.distanceThreshold?e:new Tl("unknown",e.distance)},n.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(t){return t.toJSON()})}},n.fromJSON=function(t){var e=t.labeledDescriptors.map(function(r){return ti.fromJSON(r)});return new n(e,t.distanceThreshold)},n})();const o_=new Map([["nod",["getNose",4,"y","x"]],["shake",["getNose",4,"x","y"]],["mouth",["getMouth",10,"y",3]],["eye",["getLeftEye",1,"y",4]]]),i_=new Map([["nod",["height",.3,2]],["shake",["width",.8,5]],["mouth",["height",.12,1]],["eye",["height",.01,0]]]),Zd="./static/weights";It.ssdMobilenetv1.loadFromUri(Zd);It.faceLandmark68Net.loadFromUri(Zd);async function ep(n,t=.5,e=0){await Of(e);const r=await n_(n,new Lo).withFaceLandmarks();if(!(!(r!=null&&r.detection.score)||(r==null?void 0:r.detection.score)<t))return r}function*a_(n,t=8,e=0){for(let r=t;r>0;r--)yield ep(n,.5,e)}async function s_(n,t,e=6){const[r,o,i,a]=o_.get(t),[s,u,c]=i_.get(t);let l=0;if(!r||!s)return!1;const f=[],h=[],d=a_(n,e,c);for(const m of d){const g=await m;if(!g)continue;if(l===0){const b={width:n.videoWidth,height:n.videoHeight},y=g==null?void 0:g.detection.box[s];l=y*u/(b[s]/y),console.log(y,y*u,b[s],b[s]/y)}const x=g==null?void 0:g.landmarks[r]();Array.isArray(x)&&(f.push(x[o][i]),typeof a=="number"?h.push(x[a][i]):typeof a=="string"&&h.push(x[o][a]),console.log(x[o][i]))}const p=f.reduce((m,g)=>m+g,0)/f.length,v=f.filter(m=>Math.abs(m-p)>l);return console.log(l,p,Math.max(...h)-Math.min(...h),v,f.map(m=>[m,Math.abs(m-p)])),v.length>=(e/2|0)&&(!h.length||Math.max(...h)-Math.min(...h)<l)}const u_=["nod","shake","mouth"],c_={nod:"请点头",shake:"请摇头",mouth:"请张嘴",eye:"请眨眼"},l_={class:"home"},f_={class:"video-box"},h_=ot("label",null,"摄像头视频媒体：",-1),d_=["disabled"],p_=ot("label",null,"前置or后置切换：",-1),v_=ot("option",{value:"user"},"前置",-1),m_=ot("option",{value:"environment"},"后置",-1),g_=[v_,m_],y_=lv({__name:"App",setup(n){const t=ho({constraints:{audio:!1,video:{width:{min:320,ideal:720,max:1280},height:{min:200,ideal:480,max:720},frameRate:{min:7,ideal:15,max:30},facingMode:"user"}},stream:null,videoEl:null});async function e(){if(t.stream===null)try{t.stream={};const l=await navigator.mediaDevices.getUserMedia(t.constraints);t.stream=l,t.videoEl.srcObject=l,t.videoEl.play()}catch(l){t.stream=null,console.error(l),alert("视频媒体流获取错误: "+l)}}function r(){t.stream!==null&&(t.videoEl.pause(),t.videoEl.srcObject=null,t.stream.getTracks().forEach(l=>l.stop()),t.stream=null)}io(()=>t.constraints.video.facingMode,()=>{t.stream!==null?(r(),e()):r()}),ts(()=>{t.videoEl=document.getElementById("page_draw-video")}),Ks(()=>{r()});const o=va(null),i=va(""),a=va(!1),s=ho(new Map);ts(()=>{}),sv(()=>{}),io(s,()=>{let l=0,f;if([...s.entries()].some(([d,p])=>(p?l++:f=d,!p)),f)return i.value=c_[f],c(t.videoEl,f),!1;i.value="请保持静止",setTimeout(async()=>{a.value=!1},2e3)});async function u(){a.value=!0;const l=t.videoEl;if((l.paused||l.currentTime===0)&&l.play(),await Of(100),!await ep(l,void 0,.6))return alert("未检测到人脸，请确保脸部清晰完整，光线充足"),i.value="",a.value=!1,i.value="",!1;await Nm(3,d=>{i.value=d.toString()}),Fm(u_,2).forEach(d=>s.set(d,!1))}async function c(l,f){if(!l||!f)return!1;await s_(l,f)?s.set(f,!0):c(l,f)}return(l,f)=>(Vv(),Gv("div",l_,[ot("div",f_,[ot("video",{class:"video-ctrl",id:"page_draw-video",autoplay:"",muted:"","webkit-playsinline":"true",playsinline:"true","x5-video-player-type":"h5-page","x5-video-orientation":"landscape|portrait",ref_key:"videoEl",ref:o,"overflow-hidden":""},null,512)]),ot("div",null,[ot("div",null,[h_,ot("button",{onClick:f[0]||(f[0]=h=>e()),disabled:t.stream!==null}," 启动 ",8,d_),Nf("   "),ot("button",{onClick:f[1]||(f[1]=h=>r())},"结束")]),ot("div",null,[p_,cv(ot("select",{"onUpdate:modelValue":f[2]||(f[2]=h=>t.constraints.video.facingMode=h)},g_,512),[[Rm,t.constraints.video.facingMode]])])]),ot("div",null,[ot("div",null,"authLoading: "+rc(a.value),1),ot("div",null,"reminder: "+rc(i.value),1),ot("button",{onClick:u},"handleStart")])]))}});Am(y_).mount("#app")});export default x_();
