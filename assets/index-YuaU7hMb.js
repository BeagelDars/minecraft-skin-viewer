(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function jm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Sc={exports:{}},Ua={},Mc={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh;function Dv(){if(Qh)return dt;Qh=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),f=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function _(A){return A===null||typeof A!="object"?null:(A=y&&A[y]||A["@@iterator"],typeof A=="function"?A:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function x(A,F,fe){this.props=A,this.context=F,this.refs=w,this.updater=fe||S}x.prototype.isReactComponent={},x.prototype.setState=function(A,F){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,F,"setState")},x.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function v(){}v.prototype=x.prototype;function O(A,F,fe){this.props=A,this.context=F,this.refs=w,this.updater=fe||S}var C=O.prototype=new v;C.constructor=O,E(C,x.prototype),C.isPureReactComponent=!0;var R=Array.isArray,D=Object.prototype.hasOwnProperty,k={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};function J(A,F,fe){var me,ye={},be=null,Ue=null;if(F!=null)for(me in F.ref!==void 0&&(Ue=F.ref),F.key!==void 0&&(be=""+F.key),F)D.call(F,me)&&!L.hasOwnProperty(me)&&(ye[me]=F[me]);var Ce=arguments.length-2;if(Ce===1)ye.children=fe;else if(1<Ce){for(var Ge=Array(Ce),vt=0;vt<Ce;vt++)Ge[vt]=arguments[vt+2];ye.children=Ge}if(A&&A.defaultProps)for(me in Ce=A.defaultProps,Ce)ye[me]===void 0&&(ye[me]=Ce[me]);return{$$typeof:s,type:A,key:be,ref:Ue,props:ye,_owner:k.current}}function b(A,F){return{$$typeof:s,type:A.type,key:F,ref:A.ref,props:A.props,_owner:A._owner}}function U(A){return typeof A=="object"&&A!==null&&A.$$typeof===s}function de(A){var F={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(fe){return F[fe]})}var ce=/\/+/g;function q(A,F){return typeof A=="object"&&A!==null&&A.key!=null?de(""+A.key):F.toString(36)}function re(A,F,fe,me,ye){var be=typeof A;(be==="undefined"||be==="boolean")&&(A=null);var Ue=!1;if(A===null)Ue=!0;else switch(be){case"string":case"number":Ue=!0;break;case"object":switch(A.$$typeof){case s:case e:Ue=!0}}if(Ue)return Ue=A,ye=ye(Ue),A=me===""?"."+q(Ue,0):me,R(ye)?(fe="",A!=null&&(fe=A.replace(ce,"$&/")+"/"),re(ye,F,fe,"",function(vt){return vt})):ye!=null&&(U(ye)&&(ye=b(ye,fe+(!ye.key||Ue&&Ue.key===ye.key?"":(""+ye.key).replace(ce,"$&/")+"/")+A)),F.push(ye)),1;if(Ue=0,me=me===""?".":me+":",R(A))for(var Ce=0;Ce<A.length;Ce++){be=A[Ce];var Ge=me+q(be,Ce);Ue+=re(be,F,fe,Ge,ye)}else if(Ge=_(A),typeof Ge=="function")for(A=Ge.call(A),Ce=0;!(be=A.next()).done;)be=be.value,Ge=me+q(be,Ce++),Ue+=re(be,F,fe,Ge,ye);else if(be==="object")throw F=String(A),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return Ue}function ne(A,F,fe){if(A==null)return A;var me=[],ye=0;return re(A,me,"","",function(be){return F.call(fe,be,ye++)}),me}function he(A){if(A._status===-1){var F=A._result;F=F(),F.then(function(fe){(A._status===0||A._status===-1)&&(A._status=1,A._result=fe)},function(fe){(A._status===0||A._status===-1)&&(A._status=2,A._result=fe)}),A._status===-1&&(A._status=0,A._result=F)}if(A._status===1)return A._result.default;throw A._result}var ae={current:null},G={transition:null},oe={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:G,ReactCurrentOwner:k};function j(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:ne,forEach:function(A,F,fe){ne(A,function(){F.apply(this,arguments)},fe)},count:function(A){var F=0;return ne(A,function(){F++}),F},toArray:function(A){return ne(A,function(F){return F})||[]},only:function(A){if(!U(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},dt.Component=x,dt.Fragment=t,dt.Profiler=o,dt.PureComponent=O,dt.StrictMode=r,dt.Suspense=h,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,dt.act=j,dt.cloneElement=function(A,F,fe){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var me=E({},A.props),ye=A.key,be=A.ref,Ue=A._owner;if(F!=null){if(F.ref!==void 0&&(be=F.ref,Ue=k.current),F.key!==void 0&&(ye=""+F.key),A.type&&A.type.defaultProps)var Ce=A.type.defaultProps;for(Ge in F)D.call(F,Ge)&&!L.hasOwnProperty(Ge)&&(me[Ge]=F[Ge]===void 0&&Ce!==void 0?Ce[Ge]:F[Ge])}var Ge=arguments.length-2;if(Ge===1)me.children=fe;else if(1<Ge){Ce=Array(Ge);for(var vt=0;vt<Ge;vt++)Ce[vt]=arguments[vt+2];me.children=Ce}return{$$typeof:s,type:A.type,key:ye,ref:be,props:me,_owner:Ue}},dt.createContext=function(A){return A={$$typeof:f,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:l,_context:A},A.Consumer=A},dt.createElement=J,dt.createFactory=function(A){var F=J.bind(null,A);return F.type=A,F},dt.createRef=function(){return{current:null}},dt.forwardRef=function(A){return{$$typeof:c,render:A}},dt.isValidElement=U,dt.lazy=function(A){return{$$typeof:g,_payload:{_status:-1,_result:A},_init:he}},dt.memo=function(A,F){return{$$typeof:m,type:A,compare:F===void 0?null:F}},dt.startTransition=function(A){var F=G.transition;G.transition={};try{A()}finally{G.transition=F}},dt.unstable_act=j,dt.useCallback=function(A,F){return ae.current.useCallback(A,F)},dt.useContext=function(A){return ae.current.useContext(A)},dt.useDebugValue=function(){},dt.useDeferredValue=function(A){return ae.current.useDeferredValue(A)},dt.useEffect=function(A,F){return ae.current.useEffect(A,F)},dt.useId=function(){return ae.current.useId()},dt.useImperativeHandle=function(A,F,fe){return ae.current.useImperativeHandle(A,F,fe)},dt.useInsertionEffect=function(A,F){return ae.current.useInsertionEffect(A,F)},dt.useLayoutEffect=function(A,F){return ae.current.useLayoutEffect(A,F)},dt.useMemo=function(A,F){return ae.current.useMemo(A,F)},dt.useReducer=function(A,F,fe){return ae.current.useReducer(A,F,fe)},dt.useRef=function(A){return ae.current.useRef(A)},dt.useState=function(A){return ae.current.useState(A)},dt.useSyncExternalStore=function(A,F,fe){return ae.current.useSyncExternalStore(A,F,fe)},dt.useTransition=function(){return ae.current.useTransition()},dt.version="18.3.1",dt}var Jh;function xd(){return Jh||(Jh=1,Mc.exports=Dv()),Mc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep;function Nv(){if(ep)return Ua;ep=1;var s=xd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function f(c,h,m){var g,y={},_=null,S=null;m!==void 0&&(_=""+m),h.key!==void 0&&(_=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(y[g]=h[g]);if(c&&c.defaultProps)for(g in h=c.defaultProps,h)y[g]===void 0&&(y[g]=h[g]);return{$$typeof:e,type:c,key:_,ref:S,props:y,_owner:o.current}}return Ua.Fragment=t,Ua.jsx=f,Ua.jsxs=f,Ua}var tp;function Uv(){return tp||(tp=1,Sc.exports=Nv()),Sc.exports}var X=Uv(),_t=xd();const Iv=jm(_t);var Ko={},Ec={exports:{}},Dn={},wc={exports:{}},Tc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np;function Ov(){return np||(np=1,(function(s){function e(G,oe){var j=G.length;G.push(oe);e:for(;0<j;){var A=j-1>>>1,F=G[A];if(0<o(F,oe))G[A]=oe,G[j]=F,j=A;else break e}}function t(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var oe=G[0],j=G.pop();if(j!==oe){G[0]=j;e:for(var A=0,F=G.length,fe=F>>>1;A<fe;){var me=2*(A+1)-1,ye=G[me],be=me+1,Ue=G[be];if(0>o(ye,j))be<F&&0>o(Ue,ye)?(G[A]=Ue,G[be]=j,A=be):(G[A]=ye,G[me]=j,A=me);else if(be<F&&0>o(Ue,j))G[A]=Ue,G[be]=j,A=be;else break e}}return oe}function o(G,oe){var j=G.sortIndex-oe.sortIndex;return j!==0?j:G.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var f=Date,c=f.now();s.unstable_now=function(){return f.now()-c}}var h=[],m=[],g=1,y=null,_=3,S=!1,E=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(G){for(var oe=t(m);oe!==null;){if(oe.callback===null)r(m);else if(oe.startTime<=G)r(m),oe.sortIndex=oe.expirationTime,e(h,oe);else break;oe=t(m)}}function R(G){if(w=!1,C(G),!E)if(t(h)!==null)E=!0,he(D);else{var oe=t(m);oe!==null&&ae(R,oe.startTime-G)}}function D(G,oe){E=!1,w&&(w=!1,v(J),J=-1),S=!0;var j=_;try{for(C(oe),y=t(h);y!==null&&(!(y.expirationTime>oe)||G&&!de());){var A=y.callback;if(typeof A=="function"){y.callback=null,_=y.priorityLevel;var F=A(y.expirationTime<=oe);oe=s.unstable_now(),typeof F=="function"?y.callback=F:y===t(h)&&r(h),C(oe)}else r(h);y=t(h)}if(y!==null)var fe=!0;else{var me=t(m);me!==null&&ae(R,me.startTime-oe),fe=!1}return fe}finally{y=null,_=j,S=!1}}var k=!1,L=null,J=-1,b=5,U=-1;function de(){return!(s.unstable_now()-U<b)}function ce(){if(L!==null){var G=s.unstable_now();U=G;var oe=!0;try{oe=L(!0,G)}finally{oe?q():(k=!1,L=null)}}else k=!1}var q;if(typeof O=="function")q=function(){O(ce)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ne=re.port2;re.port1.onmessage=ce,q=function(){ne.postMessage(null)}}else q=function(){x(ce,0)};function he(G){L=G,k||(k=!0,q())}function ae(G,oe){J=x(function(){G(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,he(D))},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(G){switch(_){case 1:case 2:case 3:var oe=3;break;default:oe=_}var j=_;_=oe;try{return G()}finally{_=j}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(G,oe){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var j=_;_=G;try{return oe()}finally{_=j}},s.unstable_scheduleCallback=function(G,oe,j){var A=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?A+j:A):j=A,G){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=j+F,G={id:g++,callback:oe,priorityLevel:G,startTime:j,expirationTime:F,sortIndex:-1},j>A?(G.sortIndex=j,e(m,G),t(h)===null&&G===t(m)&&(w?(v(J),J=-1):w=!0,ae(R,j-A))):(G.sortIndex=F,e(h,G),E||S||(E=!0,he(D))),G},s.unstable_shouldYield=de,s.unstable_wrapCallback=function(G){var oe=_;return function(){var j=_;_=oe;try{return G.apply(this,arguments)}finally{_=j}}}})(Tc)),Tc}var ip;function Fv(){return ip||(ip=1,wc.exports=Ov()),wc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rp;function kv(){if(rp)return Dn;rp=1;var s=xd(),e=Fv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){f(n,i),f(n+"Capture",i)}function f(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function _(n){return h.call(y,n)?!0:h.call(g,n)?!1:m.test(n)?y[n]=!0:(g[n]=!0,!1)}function S(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,u){if(i===null||typeof i>"u"||S(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,a,u,d,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function O(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,O);x[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,O);x[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,O);x[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,i,a,u){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,d,u)&&(a=null),u||d===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),k=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),de=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),he=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),G=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var j=Object.assign,A;function F(n){if(A===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);A=i&&i[1]||""}return`
`+A+n}var fe=!1;function me(n,i){if(!n||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var u=ee}Reflect.construct(n,[],i)}else{try{i.call()}catch(ee){u=ee}n.call(i.prototype)}else{try{throw Error()}catch(ee){u=ee}n()}}catch(ee){if(ee&&u&&typeof ee.stack=="string"){for(var d=ee.stack.split(`
`),p=u.stack.split(`
`),M=d.length-1,I=p.length-1;1<=M&&0<=I&&d[M]!==p[I];)I--;for(;1<=M&&0<=I;M--,I--)if(d[M]!==p[I]){if(M!==1||I!==1)do if(M--,I--,0>I||d[M]!==p[I]){var B=`
`+d[M].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=M&&0<=I);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?F(n):""}function ye(n){switch(n.tag){case 5:return F(n.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return n=me(n.type,!1),n;case 11:return n=me(n.type.render,!1),n;case 1:return n=me(n.type,!0),n;default:return""}}function be(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case L:return"Fragment";case k:return"Portal";case b:return"Profiler";case J:return"StrictMode";case q:return"Suspense";case re:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case de:return(n.displayName||"Context")+".Consumer";case U:return(n._context.displayName||"Context")+".Provider";case ce:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ne:return i=n.displayName||null,i!==null?i:be(n.type)||"Memo";case he:i=n._payload,n=n._init;try{return be(n(i))}catch{}}return null}function Ue(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(i);case 8:return i===J?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ge(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function vt(n){var i=Ge(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(M){u=""+M,p.call(this,M)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function nt(n){n._valueTracker||(n._valueTracker=vt(n))}function Z(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Ge(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function Pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function je(n,i){var a=i.checked;return j({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function et(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=Ce(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function $e(n,i){i=i.checked,i!=null&&C(n,"checked",i,!1)}function xt(n,i){$e(n,i);var a=Ce(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?tt(n,i.type,a):i.hasOwnProperty("defaultValue")&&tt(n,i.type,Ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function rt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function tt(n,i,a){(i!=="number"||Pt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var lt=Array.isArray;function wt(n,i,a,u){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&u&&(n[a].defaultSelected=!0)}else{for(a=""+Ce(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function zt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return j({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function N(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(lt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ce(a)}}function T(n,i){var a=Ce(i.value),u=Ce(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function te(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function we(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _e(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?we(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Me,Ve=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Me=Me||document.createElement("div"),Me.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Me.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ee(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},z=["Webkit","ms","Moz","O"];Object.keys(se).forEach(function(n){z.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),se[i]=se[n]})});function pe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||se.hasOwnProperty(n)&&se[n]?(""+i).trim():i+"px"}function Ne(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=pe(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,d):n[a]=d}}var Re=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Le(n,i){if(i){if(Re[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ke(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ut=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pe=null,ie=null,xe=null;function Ae(n){if(n=xa(n)){if(typeof Pe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=co(i),Pe(n.stateNode,n.type,i))}}function at(n){ie?xe?xe.push(n):xe=[n]:ie=n}function pt(){if(ie){var n=ie,i=xe;if(xe=ie=null,Ae(n),i)for(n=0;n<i.length;n++)Ae(i[n])}}function yt(n,i){return n(i)}function fn(){}var St=!1;function Un(n,i,a){if(St)return n(i,a);St=!0;try{return yt(n,i,a)}finally{St=!1,(ie!==null||xe!==null)&&(fn(),pt())}}function Vt(n,i){var a=n.stateNode;if(a===null)return null;var u=co(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Kr=!1;if(c)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){Kr=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{Kr=!1}function kl(n,i,a,u,d,p,M,I,B){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(a,ee)}catch(ve){this.onError(ve)}}var pi=!1,Mr=null,Mi=!1,Zr=null,zl={onError:function(n){pi=!0,Mr=n}};function Bl(n,i,a,u,d,p,M,I,B){pi=!1,Mr=null,kl.apply(zl,arguments)}function Hl(n,i,a,u,d,p,M,I,B){if(Bl.apply(this,arguments),pi){if(pi){var ee=Mr;pi=!1,Mr=null}else throw Error(t(198));Mi||(Mi=!0,Zr=ee)}}function P(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function K(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function le(n){if(P(n)!==n)throw Error(t(188))}function Q(n){var i=n.alternate;if(!i){if(i=P(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return le(d),n;if(p===u)return le(d),i;p=p.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=p;else{for(var M=!1,I=d.child;I;){if(I===a){M=!0,a=d,u=p;break}if(I===u){M=!0,u=d,a=p;break}I=I.sibling}if(!M){for(I=p.child;I;){if(I===a){M=!0,a=p,u=d;break}if(I===u){M=!0,u=p,a=d;break}I=I.sibling}if(!M)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ue(n){return n=Q(n),n!==null?Fe(n):null}function Fe(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Fe(n);if(i!==null)return i;n=n.sibling}return null}var Xe=e.unstable_scheduleCallback,Ze=e.unstable_cancelCallback,Qe=e.unstable_shouldYield,ct=e.unstable_requestPaint,Oe=e.unstable_now,it=e.unstable_getCurrentPriorityLevel,Tt=e.unstable_ImmediatePriority,Lt=e.unstable_UserBlockingPriority,ln=e.unstable_NormalPriority,ti=e.unstable_LowPriority,It=e.unstable_IdlePriority,st=null,An=null;function Bt(n){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(st,n,void 0,(n.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:ea,qa=Math.log,Er=Math.LN2;function ea(n){return n>>>=0,n===0?32:31-(qa(n)/Er|0)|0}var Xt=64,Vn=4194304;function Ei(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function nn(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,d=n.suspendedLanes,p=n.pingedLanes,M=a&268435455;if(M!==0){var I=M&~d;I!==0?u=Ei(I):(p&=M,p!==0&&(u=Ei(p)))}else M=a&~d,M!==0?u=Ei(M):p!==0&&(u=Ei(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Kt(i),d=1<<a,u|=n[a],i&=~d;return u}function ta(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vl(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var M=31-Kt(p),I=1<<M,B=d[M];B===-1?((I&a)===0||(I&u)!==0)&&(d[M]=ta(I,i)):B<=i&&(n.expiredLanes|=I),p&=~I}}function Qr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Rd(){var n=Xt;return Xt<<=1,(Xt&4194240)===0&&(Xt=64),n}function Gl(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function na(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Kt(i),n[i]=a}function Jg(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Kt(a),p=1<<d;i[d]=0,u[d]=-1,n[d]=-1,a&=~p}}function Wl(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Kt(a),d=1<<u;d&i|n[u]&i&&(n[u]|=i),a&=~d}}var Mt=0;function Cd(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Pd,jl,Ld,Dd,Nd,Xl=!1,$a=[],qi=null,$i=null,Ki=null,ia=new Map,ra=new Map,Zi=[],e0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ud(n,i){switch(n){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":ia.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(i.pointerId)}}function sa(n,i,a,u,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},i!==null&&(i=xa(i),i!==null&&jl(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function t0(n,i,a,u,d){switch(i){case"focusin":return qi=sa(qi,n,i,a,u,d),!0;case"dragenter":return $i=sa($i,n,i,a,u,d),!0;case"mouseover":return Ki=sa(Ki,n,i,a,u,d),!0;case"pointerover":var p=d.pointerId;return ia.set(p,sa(ia.get(p)||null,n,i,a,u,d)),!0;case"gotpointercapture":return p=d.pointerId,ra.set(p,sa(ra.get(p)||null,n,i,a,u,d)),!0}return!1}function Id(n){var i=wr(n.target);if(i!==null){var a=P(i);if(a!==null){if(i=a.tag,i===13){if(i=K(a),i!==null){n.blockedOn=i,Nd(n.priority,function(){Ld(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ka(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=ql(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);ut=u,a.target.dispatchEvent(u),ut=null}else return i=xa(a),i!==null&&jl(i),n.blockedOn=a,!1;i.shift()}return!0}function Od(n,i,a){Ka(n)&&a.delete(i)}function n0(){Xl=!1,qi!==null&&Ka(qi)&&(qi=null),$i!==null&&Ka($i)&&($i=null),Ki!==null&&Ka(Ki)&&(Ki=null),ia.forEach(Od),ra.forEach(Od)}function aa(n,i){n.blockedOn===i&&(n.blockedOn=null,Xl||(Xl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,n0)))}function oa(n){function i(d){return aa(d,n)}if(0<$a.length){aa($a[0],n);for(var a=1;a<$a.length;a++){var u=$a[a];u.blockedOn===n&&(u.blockedOn=null)}}for(qi!==null&&aa(qi,n),$i!==null&&aa($i,n),Ki!==null&&aa(Ki,n),ia.forEach(i),ra.forEach(i),a=0;a<Zi.length;a++)u=Zi[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Zi.length&&(a=Zi[0],a.blockedOn===null);)Id(a),a.blockedOn===null&&Zi.shift()}var Jr=R.ReactCurrentBatchConfig,Za=!0;function i0(n,i,a,u){var d=Mt,p=Jr.transition;Jr.transition=null;try{Mt=1,Yl(n,i,a,u)}finally{Mt=d,Jr.transition=p}}function r0(n,i,a,u){var d=Mt,p=Jr.transition;Jr.transition=null;try{Mt=4,Yl(n,i,a,u)}finally{Mt=d,Jr.transition=p}}function Yl(n,i,a,u){if(Za){var d=ql(n,i,a,u);if(d===null)du(n,i,u,Qa,a),Ud(n,u);else if(t0(d,n,i,a,u))u.stopPropagation();else if(Ud(n,u),i&4&&-1<e0.indexOf(n)){for(;d!==null;){var p=xa(d);if(p!==null&&Pd(p),p=ql(n,i,a,u),p===null&&du(n,i,u,Qa,a),p===d)break;d=p}d!==null&&u.stopPropagation()}else du(n,i,u,null,a)}}var Qa=null;function ql(n,i,a,u){if(Qa=null,n=H(u),n=wr(n),n!==null)if(i=P(n),i===null)n=null;else if(a=i.tag,a===13){if(n=K(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Qa=n,null}function Fd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(it()){case Tt:return 1;case Lt:return 4;case ln:case ti:return 16;case It:return 536870912;default:return 16}default:return 16}}var Qi=null,$l=null,Ja=null;function kd(){if(Ja)return Ja;var n,i=$l,a=i.length,u,d="value"in Qi?Qi.value:Qi.textContent,p=d.length;for(n=0;n<a&&i[n]===d[n];n++);var M=a-n;for(u=1;u<=M&&i[a-u]===d[p-u];u++);return Ja=d.slice(n,1<u?1-u:void 0)}function eo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function to(){return!0}function zd(){return!1}function In(n){function i(a,u,d,p,M){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?to:zd,this.isPropagationStopped=zd,this}return j(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),i}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=In(es),la=j({},es,{view:0,detail:0}),s0=In(la),Zl,Ql,ua,no=j({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ua&&(ua&&n.type==="mousemove"?(Zl=n.screenX-ua.screenX,Ql=n.screenY-ua.screenY):Ql=Zl=0,ua=n),Zl)},movementY:function(n){return"movementY"in n?n.movementY:Ql}}),Bd=In(no),a0=j({},no,{dataTransfer:0}),o0=In(a0),l0=j({},la,{relatedTarget:0}),Jl=In(l0),u0=j({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),c0=In(u0),d0=j({},es,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),f0=In(d0),h0=j({},es,{data:0}),Hd=In(h0),p0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=g0[n])?!!i[n]:!1}function eu(){return v0}var _0=j({},la,{key:function(n){if(n.key){var i=p0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=eo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?m0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(n){return n.type==="keypress"?eo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?eo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),x0=In(_0),y0=j({},no,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vd=In(y0),S0=j({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),M0=In(S0),E0=j({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),w0=In(E0),T0=j({},no,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),A0=In(T0),b0=[9,13,27,32],tu=c&&"CompositionEvent"in window,ca=null;c&&"documentMode"in document&&(ca=document.documentMode);var R0=c&&"TextEvent"in window&&!ca,Gd=c&&(!tu||ca&&8<ca&&11>=ca),Wd=" ",jd=!1;function Xd(n,i){switch(n){case"keyup":return b0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ts=!1;function C0(n,i){switch(n){case"compositionend":return Yd(i);case"keypress":return i.which!==32?null:(jd=!0,Wd);case"textInput":return n=i.data,n===Wd&&jd?null:n;default:return null}}function P0(n,i){if(ts)return n==="compositionend"||!tu&&Xd(n,i)?(n=kd(),Ja=$l=Qi=null,ts=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Gd&&i.locale!=="ko"?null:i.data;default:return null}}var L0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qd(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!L0[n.type]:i==="textarea"}function $d(n,i,a,u){at(u),i=oo(i,"onChange"),0<i.length&&(a=new Kl("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var da=null,fa=null;function D0(n){pf(n,0)}function io(n){var i=as(n);if(Z(i))return n}function N0(n,i){if(n==="change")return i}var Kd=!1;if(c){var nu;if(c){var iu="oninput"in document;if(!iu){var Zd=document.createElement("div");Zd.setAttribute("oninput","return;"),iu=typeof Zd.oninput=="function"}nu=iu}else nu=!1;Kd=nu&&(!document.documentMode||9<document.documentMode)}function Qd(){da&&(da.detachEvent("onpropertychange",Jd),fa=da=null)}function Jd(n){if(n.propertyName==="value"&&io(fa)){var i=[];$d(i,fa,n,H(n)),Un(D0,i)}}function U0(n,i,a){n==="focusin"?(Qd(),da=i,fa=a,da.attachEvent("onpropertychange",Jd)):n==="focusout"&&Qd()}function I0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return io(fa)}function O0(n,i){if(n==="click")return io(i)}function F0(n,i){if(n==="input"||n==="change")return io(i)}function k0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ni=typeof Object.is=="function"?Object.is:k0;function ha(n,i){if(ni(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!h.call(i,d)||!ni(n[d],i[d]))return!1}return!0}function ef(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function tf(n,i){var a=ef(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ef(a)}}function nf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?nf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function rf(){for(var n=window,i=Pt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Pt(n.document)}return i}function ru(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function z0(n){var i=rf(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&nf(a.ownerDocument.documentElement,a)){if(u!==null&&ru(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,p=Math.min(u.start,d);u=u.end===void 0?p:Math.min(u.end,d),!n.extend&&p>u&&(d=u,u=p,p=d),d=tf(a,p);var M=tf(a,u);d&&M&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),p>u?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var B0=c&&"documentMode"in document&&11>=document.documentMode,ns=null,su=null,pa=null,au=!1;function sf(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;au||ns==null||ns!==Pt(u)||(u=ns,"selectionStart"in u&&ru(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),pa&&ha(pa,u)||(pa=u,u=oo(su,"onSelect"),0<u.length&&(i=new Kl("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=ns)))}function ro(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var is={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionend:ro("Transition","TransitionEnd")},ou={},af={};c&&(af=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function so(n){if(ou[n])return ou[n];if(!is[n])return n;var i=is[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in af)return ou[n]=i[a];return n}var of=so("animationend"),lf=so("animationiteration"),uf=so("animationstart"),cf=so("transitionend"),df=new Map,ff="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(n,i){df.set(n,i),l(i,[n])}for(var lu=0;lu<ff.length;lu++){var uu=ff[lu],H0=uu.toLowerCase(),V0=uu[0].toUpperCase()+uu.slice(1);Ji(H0,"on"+V0)}Ji(of,"onAnimationEnd"),Ji(lf,"onAnimationIteration"),Ji(uf,"onAnimationStart"),Ji("dblclick","onDoubleClick"),Ji("focusin","onFocus"),Ji("focusout","onBlur"),Ji(cf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function hf(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,Hl(u,i,void 0,n),n.currentTarget=null}function pf(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],d=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var M=u.length-1;0<=M;M--){var I=u[M],B=I.instance,ee=I.currentTarget;if(I=I.listener,B!==p&&d.isPropagationStopped())break e;hf(d,I,ee),p=B}else for(M=0;M<u.length;M++){if(I=u[M],B=I.instance,ee=I.currentTarget,I=I.listener,B!==p&&d.isPropagationStopped())break e;hf(d,I,ee),p=B}}}if(Mi)throw n=Zr,Mi=!1,Zr=null,n}function Rt(n,i){var a=i[vu];a===void 0&&(a=i[vu]=new Set);var u=n+"__bubble";a.has(u)||(mf(i,n,2,!1),a.add(u))}function cu(n,i,a){var u=0;i&&(u|=4),mf(a,n,u,i)}var ao="_reactListening"+Math.random().toString(36).slice(2);function ga(n){if(!n[ao]){n[ao]=!0,r.forEach(function(a){a!=="selectionchange"&&(G0.has(a)||cu(a,!1,n),cu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ao]||(i[ao]=!0,cu("selectionchange",!1,i))}}function mf(n,i,a,u){switch(Fd(i)){case 1:var d=i0;break;case 4:d=r0;break;default:d=Yl}a=d.bind(null,i,a,n),d=void 0,!Kr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function du(n,i,a,u,d){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var I=u.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(M===4)for(M=u.return;M!==null;){var B=M.tag;if((B===3||B===4)&&(B=M.stateNode.containerInfo,B===d||B.nodeType===8&&B.parentNode===d))return;M=M.return}for(;I!==null;){if(M=wr(I),M===null)return;if(B=M.tag,B===5||B===6){u=p=M;continue e}I=I.parentNode}}u=u.return}Un(function(){var ee=p,ve=H(a),Se=[];e:{var ge=df.get(n);if(ge!==void 0){var Ie=Kl,ze=n;switch(n){case"keypress":if(eo(a)===0)break e;case"keydown":case"keyup":Ie=x0;break;case"focusin":ze="focus",Ie=Jl;break;case"focusout":ze="blur",Ie=Jl;break;case"beforeblur":case"afterblur":Ie=Jl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=o0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=M0;break;case of:case lf:case uf:Ie=c0;break;case cf:Ie=w0;break;case"scroll":Ie=s0;break;case"wheel":Ie=A0;break;case"copy":case"cut":case"paste":Ie=f0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=Vd}var Be=(i&4)!==0,Gt=!Be&&n==="scroll",Y=Be?ge!==null?ge+"Capture":null:ge;Be=[];for(var V=ee,$;V!==null;){$=V;var Te=$.stateNode;if($.tag===5&&Te!==null&&($=Te,Y!==null&&(Te=Vt(V,Y),Te!=null&&Be.push(va(V,Te,$)))),Gt)break;V=V.return}0<Be.length&&(ge=new Ie(ge,ze,null,a,ve),Se.push({event:ge,listeners:Be}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",ge&&a!==ut&&(ze=a.relatedTarget||a.fromElement)&&(wr(ze)||ze[wi]))break e;if((Ie||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(ze=a.relatedTarget||a.toElement,Ie=ee,ze=ze?wr(ze):null,ze!==null&&(Gt=P(ze),ze!==Gt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ie=null,ze=ee),Ie!==ze)){if(Be=Bd,Te="onMouseLeave",Y="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(Be=Vd,Te="onPointerLeave",Y="onPointerEnter",V="pointer"),Gt=Ie==null?ge:as(Ie),$=ze==null?ge:as(ze),ge=new Be(Te,V+"leave",Ie,a,ve),ge.target=Gt,ge.relatedTarget=$,Te=null,wr(ve)===ee&&(Be=new Be(Y,V+"enter",ze,a,ve),Be.target=$,Be.relatedTarget=Gt,Te=Be),Gt=Te,Ie&&ze)t:{for(Be=Ie,Y=ze,V=0,$=Be;$;$=rs($))V++;for($=0,Te=Y;Te;Te=rs(Te))$++;for(;0<V-$;)Be=rs(Be),V--;for(;0<$-V;)Y=rs(Y),$--;for(;V--;){if(Be===Y||Y!==null&&Be===Y.alternate)break t;Be=rs(Be),Y=rs(Y)}Be=null}else Be=null;Ie!==null&&gf(Se,ge,Ie,Be,!1),ze!==null&&Gt!==null&&gf(Se,Gt,ze,Be,!0)}}e:{if(ge=ee?as(ee):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var He=N0;else if(qd(ge))if(Kd)He=F0;else{He=I0;var Ye=U0}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(He=O0);if(He&&(He=He(n,ee))){$d(Se,He,a,ve);break e}Ye&&Ye(n,ge,ee),n==="focusout"&&(Ye=ge._wrapperState)&&Ye.controlled&&ge.type==="number"&&tt(ge,"number",ge.value)}switch(Ye=ee?as(ee):window,n){case"focusin":(qd(Ye)||Ye.contentEditable==="true")&&(ns=Ye,su=ee,pa=null);break;case"focusout":pa=su=ns=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,sf(Se,a,ve);break;case"selectionchange":if(B0)break;case"keydown":case"keyup":sf(Se,a,ve)}var qe;if(tu)e:{switch(n){case"compositionstart":var Je="onCompositionStart";break e;case"compositionend":Je="onCompositionEnd";break e;case"compositionupdate":Je="onCompositionUpdate";break e}Je=void 0}else ts?Xd(n,a)&&(Je="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Je="onCompositionStart");Je&&(Gd&&a.locale!=="ko"&&(ts||Je!=="onCompositionStart"?Je==="onCompositionEnd"&&ts&&(qe=kd()):(Qi=ve,$l="value"in Qi?Qi.value:Qi.textContent,ts=!0)),Ye=oo(ee,Je),0<Ye.length&&(Je=new Hd(Je,n,null,a,ve),Se.push({event:Je,listeners:Ye}),qe?Je.data=qe:(qe=Yd(a),qe!==null&&(Je.data=qe)))),(qe=R0?C0(n,a):P0(n,a))&&(ee=oo(ee,"onBeforeInput"),0<ee.length&&(ve=new Hd("onBeforeInput","beforeinput",null,a,ve),Se.push({event:ve,listeners:ee}),ve.data=qe))}pf(Se,i)})}function va(n,i,a){return{instance:n,listener:i,currentTarget:a}}function oo(n,i){for(var a=i+"Capture",u=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Vt(n,a),p!=null&&u.unshift(va(n,p,d)),p=Vt(n,i),p!=null&&u.push(va(n,p,d))),n=n.return}return u}function rs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function gf(n,i,a,u,d){for(var p=i._reactName,M=[];a!==null&&a!==u;){var I=a,B=I.alternate,ee=I.stateNode;if(B!==null&&B===u)break;I.tag===5&&ee!==null&&(I=ee,d?(B=Vt(a,p),B!=null&&M.unshift(va(a,B,I))):d||(B=Vt(a,p),B!=null&&M.push(va(a,B,I)))),a=a.return}M.length!==0&&n.push({event:i,listeners:M})}var W0=/\r\n?/g,j0=/\u0000|\uFFFD/g;function vf(n){return(typeof n=="string"?n:""+n).replace(W0,`
`).replace(j0,"")}function lo(n,i,a){if(i=vf(i),vf(n)!==i&&a)throw Error(t(425))}function uo(){}var fu=null,hu=null;function pu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var mu=typeof setTimeout=="function"?setTimeout:void 0,X0=typeof clearTimeout=="function"?clearTimeout:void 0,_f=typeof Promise=="function"?Promise:void 0,Y0=typeof queueMicrotask=="function"?queueMicrotask:typeof _f<"u"?function(n){return _f.resolve(null).then(n).catch(q0)}:mu;function q0(n){setTimeout(function(){throw n})}function gu(n,i){var a=i,u=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){n.removeChild(d),oa(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);oa(i)}function er(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function xf(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ss=Math.random().toString(36).slice(2),mi="__reactFiber$"+ss,_a="__reactProps$"+ss,wi="__reactContainer$"+ss,vu="__reactEvents$"+ss,$0="__reactListeners$"+ss,K0="__reactHandles$"+ss;function wr(n){var i=n[mi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[wi]||a[mi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=xf(n);n!==null;){if(a=n[mi])return a;n=xf(n)}return i}n=a,a=n.parentNode}return null}function xa(n){return n=n[mi]||n[wi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function as(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function co(n){return n[_a]||null}var _u=[],os=-1;function tr(n){return{current:n}}function Ct(n){0>os||(n.current=_u[os],_u[os]=null,os--)}function At(n,i){os++,_u[os]=n.current,n.current=i}var nr={},hn=tr(nr),bn=tr(!1),Tr=nr;function ls(n,i){var a=n.type.contextTypes;if(!a)return nr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=i[p];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Rn(n){return n=n.childContextTypes,n!=null}function fo(){Ct(bn),Ct(hn)}function yf(n,i,a){if(hn.current!==nr)throw Error(t(168));At(hn,i),At(bn,a)}function Sf(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,Ue(n)||"Unknown",d));return j({},a,u)}function ho(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||nr,Tr=hn.current,At(hn,n),At(bn,bn.current),!0}function Mf(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Sf(n,i,Tr),u.__reactInternalMemoizedMergedChildContext=n,Ct(bn),Ct(hn),At(hn,n)):Ct(bn),At(bn,a)}var Ti=null,po=!1,xu=!1;function Ef(n){Ti===null?Ti=[n]:Ti.push(n)}function Z0(n){po=!0,Ef(n)}function ir(){if(!xu&&Ti!==null){xu=!0;var n=0,i=Mt;try{var a=Ti;for(Mt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Ti=null,po=!1}catch(d){throw Ti!==null&&(Ti=Ti.slice(n+1)),Xe(Tt,ir),d}finally{Mt=i,xu=!1}}return null}var us=[],cs=0,mo=null,go=0,Gn=[],Wn=0,Ar=null,Ai=1,bi="";function br(n,i){us[cs++]=go,us[cs++]=mo,mo=n,go=i}function wf(n,i,a){Gn[Wn++]=Ai,Gn[Wn++]=bi,Gn[Wn++]=Ar,Ar=n;var u=Ai;n=bi;var d=32-Kt(u)-1;u&=~(1<<d),a+=1;var p=32-Kt(i)+d;if(30<p){var M=d-d%5;p=(u&(1<<M)-1).toString(32),u>>=M,d-=M,Ai=1<<32-Kt(i)+d|a<<d|u,bi=p+n}else Ai=1<<p|a<<d|u,bi=n}function yu(n){n.return!==null&&(br(n,1),wf(n,1,0))}function Su(n){for(;n===mo;)mo=us[--cs],us[cs]=null,go=us[--cs],us[cs]=null;for(;n===Ar;)Ar=Gn[--Wn],Gn[Wn]=null,bi=Gn[--Wn],Gn[Wn]=null,Ai=Gn[--Wn],Gn[Wn]=null}var On=null,Fn=null,Dt=!1,ii=null;function Tf(n,i){var a=qn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Af(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,On=n,Fn=er(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,On=n,Fn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ar!==null?{id:Ai,overflow:bi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=qn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,On=n,Fn=null,!0):!1;default:return!1}}function Mu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Eu(n){if(Dt){var i=Fn;if(i){var a=i;if(!Af(n,i)){if(Mu(n))throw Error(t(418));i=er(a.nextSibling);var u=On;i&&Af(n,i)?Tf(u,a):(n.flags=n.flags&-4097|2,Dt=!1,On=n)}}else{if(Mu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Dt=!1,On=n}}}function bf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;On=n}function vo(n){if(n!==On)return!1;if(!Dt)return bf(n),Dt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!pu(n.type,n.memoizedProps)),i&&(i=Fn)){if(Mu(n))throw Rf(),Error(t(418));for(;i;)Tf(n,i),i=er(i.nextSibling)}if(bf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Fn=er(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Fn=null}}else Fn=On?er(n.stateNode.nextSibling):null;return!0}function Rf(){for(var n=Fn;n;)n=er(n.nextSibling)}function ds(){Fn=On=null,Dt=!1}function wu(n){ii===null?ii=[n]:ii.push(n)}var Q0=R.ReactCurrentBatchConfig;function ya(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var d=u,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var I=d.refs;M===null?delete I[p]:I[p]=M},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function _o(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Cf(n){var i=n._init;return i(n._payload)}function Pf(n){function i(Y,V){if(n){var $=Y.deletions;$===null?(Y.deletions=[V],Y.flags|=16):$.push(V)}}function a(Y,V){if(!n)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function u(Y,V){for(Y=new Map;V!==null;)V.key!==null?Y.set(V.key,V):Y.set(V.index,V),V=V.sibling;return Y}function d(Y,V){return Y=dr(Y,V),Y.index=0,Y.sibling=null,Y}function p(Y,V,$){return Y.index=$,n?($=Y.alternate,$!==null?($=$.index,$<V?(Y.flags|=2,V):$):(Y.flags|=2,V)):(Y.flags|=1048576,V)}function M(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function I(Y,V,$,Te){return V===null||V.tag!==6?(V=mc($,Y.mode,Te),V.return=Y,V):(V=d(V,$),V.return=Y,V)}function B(Y,V,$,Te){var He=$.type;return He===L?ve(Y,V,$.props.children,Te,$.key):V!==null&&(V.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===he&&Cf(He)===V.type)?(Te=d(V,$.props),Te.ref=ya(Y,V,$),Te.return=Y,Te):(Te=Vo($.type,$.key,$.props,null,Y.mode,Te),Te.ref=ya(Y,V,$),Te.return=Y,Te)}function ee(Y,V,$,Te){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=gc($,Y.mode,Te),V.return=Y,V):(V=d(V,$.children||[]),V.return=Y,V)}function ve(Y,V,$,Te,He){return V===null||V.tag!==7?(V=Ir($,Y.mode,Te,He),V.return=Y,V):(V=d(V,$),V.return=Y,V)}function Se(Y,V,$){if(typeof V=="string"&&V!==""||typeof V=="number")return V=mc(""+V,Y.mode,$),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case D:return $=Vo(V.type,V.key,V.props,null,Y.mode,$),$.ref=ya(Y,null,V),$.return=Y,$;case k:return V=gc(V,Y.mode,$),V.return=Y,V;case he:var Te=V._init;return Se(Y,Te(V._payload),$)}if(lt(V)||oe(V))return V=Ir(V,Y.mode,$,null),V.return=Y,V;_o(Y,V)}return null}function ge(Y,V,$,Te){var He=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return He!==null?null:I(Y,V,""+$,Te);if(typeof $=="object"&&$!==null){switch($.$$typeof){case D:return $.key===He?B(Y,V,$,Te):null;case k:return $.key===He?ee(Y,V,$,Te):null;case he:return He=$._init,ge(Y,V,He($._payload),Te)}if(lt($)||oe($))return He!==null?null:ve(Y,V,$,Te,null);_o(Y,$)}return null}function Ie(Y,V,$,Te,He){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Y=Y.get($)||null,I(V,Y,""+Te,He);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case D:return Y=Y.get(Te.key===null?$:Te.key)||null,B(V,Y,Te,He);case k:return Y=Y.get(Te.key===null?$:Te.key)||null,ee(V,Y,Te,He);case he:var Ye=Te._init;return Ie(Y,V,$,Ye(Te._payload),He)}if(lt(Te)||oe(Te))return Y=Y.get($)||null,ve(V,Y,Te,He,null);_o(V,Te)}return null}function ze(Y,V,$,Te){for(var He=null,Ye=null,qe=V,Je=V=0,an=null;qe!==null&&Je<$.length;Je++){qe.index>Je?(an=qe,qe=null):an=qe.sibling;var mt=ge(Y,qe,$[Je],Te);if(mt===null){qe===null&&(qe=an);break}n&&qe&&mt.alternate===null&&i(Y,qe),V=p(mt,V,Je),Ye===null?He=mt:Ye.sibling=mt,Ye=mt,qe=an}if(Je===$.length)return a(Y,qe),Dt&&br(Y,Je),He;if(qe===null){for(;Je<$.length;Je++)qe=Se(Y,$[Je],Te),qe!==null&&(V=p(qe,V,Je),Ye===null?He=qe:Ye.sibling=qe,Ye=qe);return Dt&&br(Y,Je),He}for(qe=u(Y,qe);Je<$.length;Je++)an=Ie(qe,Y,Je,$[Je],Te),an!==null&&(n&&an.alternate!==null&&qe.delete(an.key===null?Je:an.key),V=p(an,V,Je),Ye===null?He=an:Ye.sibling=an,Ye=an);return n&&qe.forEach(function(fr){return i(Y,fr)}),Dt&&br(Y,Je),He}function Be(Y,V,$,Te){var He=oe($);if(typeof He!="function")throw Error(t(150));if($=He.call($),$==null)throw Error(t(151));for(var Ye=He=null,qe=V,Je=V=0,an=null,mt=$.next();qe!==null&&!mt.done;Je++,mt=$.next()){qe.index>Je?(an=qe,qe=null):an=qe.sibling;var fr=ge(Y,qe,mt.value,Te);if(fr===null){qe===null&&(qe=an);break}n&&qe&&fr.alternate===null&&i(Y,qe),V=p(fr,V,Je),Ye===null?He=fr:Ye.sibling=fr,Ye=fr,qe=an}if(mt.done)return a(Y,qe),Dt&&br(Y,Je),He;if(qe===null){for(;!mt.done;Je++,mt=$.next())mt=Se(Y,mt.value,Te),mt!==null&&(V=p(mt,V,Je),Ye===null?He=mt:Ye.sibling=mt,Ye=mt);return Dt&&br(Y,Je),He}for(qe=u(Y,qe);!mt.done;Je++,mt=$.next())mt=Ie(qe,Y,Je,mt.value,Te),mt!==null&&(n&&mt.alternate!==null&&qe.delete(mt.key===null?Je:mt.key),V=p(mt,V,Je),Ye===null?He=mt:Ye.sibling=mt,Ye=mt);return n&&qe.forEach(function(Lv){return i(Y,Lv)}),Dt&&br(Y,Je),He}function Gt(Y,V,$,Te){if(typeof $=="object"&&$!==null&&$.type===L&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case D:e:{for(var He=$.key,Ye=V;Ye!==null;){if(Ye.key===He){if(He=$.type,He===L){if(Ye.tag===7){a(Y,Ye.sibling),V=d(Ye,$.props.children),V.return=Y,Y=V;break e}}else if(Ye.elementType===He||typeof He=="object"&&He!==null&&He.$$typeof===he&&Cf(He)===Ye.type){a(Y,Ye.sibling),V=d(Ye,$.props),V.ref=ya(Y,Ye,$),V.return=Y,Y=V;break e}a(Y,Ye);break}else i(Y,Ye);Ye=Ye.sibling}$.type===L?(V=Ir($.props.children,Y.mode,Te,$.key),V.return=Y,Y=V):(Te=Vo($.type,$.key,$.props,null,Y.mode,Te),Te.ref=ya(Y,V,$),Te.return=Y,Y=Te)}return M(Y);case k:e:{for(Ye=$.key;V!==null;){if(V.key===Ye)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){a(Y,V.sibling),V=d(V,$.children||[]),V.return=Y,Y=V;break e}else{a(Y,V);break}else i(Y,V);V=V.sibling}V=gc($,Y.mode,Te),V.return=Y,Y=V}return M(Y);case he:return Ye=$._init,Gt(Y,V,Ye($._payload),Te)}if(lt($))return ze(Y,V,$,Te);if(oe($))return Be(Y,V,$,Te);_o(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,V!==null&&V.tag===6?(a(Y,V.sibling),V=d(V,$),V.return=Y,Y=V):(a(Y,V),V=mc($,Y.mode,Te),V.return=Y,Y=V),M(Y)):a(Y,V)}return Gt}var fs=Pf(!0),Lf=Pf(!1),xo=tr(null),yo=null,hs=null,Tu=null;function Au(){Tu=hs=yo=null}function bu(n){var i=xo.current;Ct(xo),n._currentValue=i}function Ru(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function ps(n,i){yo=n,Tu=hs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Cn=!0),n.firstContext=null)}function jn(n){var i=n._currentValue;if(Tu!==n)if(n={context:n,memoizedValue:i,next:null},hs===null){if(yo===null)throw Error(t(308));hs=n,yo.dependencies={lanes:0,firstContext:n}}else hs=hs.next=n;return i}var Rr=null;function Cu(n){Rr===null?Rr=[n]:Rr.push(n)}function Df(n,i,a,u){var d=i.interleaved;return d===null?(a.next=a,Cu(i)):(a.next=d.next,d.next=a),i.interleaved=a,Ri(n,u)}function Ri(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var rr=!1;function Pu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nf(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ci(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function sr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(ht&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Ri(n,a)}return d=u.interleaved,d===null?(i.next=i,Cu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Ri(n,a)}function So(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Wl(n,a)}}function Uf(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=M:p=p.next=M,a=a.next}while(a!==null);p===null?d=p=i:p=p.next=i}else d=p=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Mo(n,i,a,u){var d=n.updateQueue;rr=!1;var p=d.firstBaseUpdate,M=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var B=I,ee=B.next;B.next=null,M===null?p=ee:M.next=ee,M=B;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==M&&(I===null?ve.firstBaseUpdate=ee:I.next=ee,ve.lastBaseUpdate=B))}if(p!==null){var Se=d.baseState;M=0,ve=ee=B=null,I=p;do{var ge=I.lane,Ie=I.eventTime;if((u&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ze=n,Be=I;switch(ge=i,Ie=a,Be.tag){case 1:if(ze=Be.payload,typeof ze=="function"){Se=ze.call(Ie,Se,ge);break e}Se=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Be.payload,ge=typeof ze=="function"?ze.call(Ie,Se,ge):ze,ge==null)break e;Se=j({},Se,ge);break e;case 2:rr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ge=d.effects,ge===null?d.effects=[I]:ge.push(I))}else Ie={eventTime:Ie,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(ee=ve=Ie,B=Se):ve=ve.next=Ie,M|=ge;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(ve===null&&(B=Se),d.baseState=B,d.firstBaseUpdate=ee,d.lastBaseUpdate=ve,i=d.shared.interleaved,i!==null){d=i;do M|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Lr|=M,n.lanes=M,n.memoizedState=Se}}function If(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Sa={},gi=tr(Sa),Ma=tr(Sa),Ea=tr(Sa);function Cr(n){if(n===Sa)throw Error(t(174));return n}function Lu(n,i){switch(At(Ea,i),At(Ma,n),At(gi,Sa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:_e(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=_e(i,n)}Ct(gi),At(gi,i)}function ms(){Ct(gi),Ct(Ma),Ct(Ea)}function Of(n){Cr(Ea.current);var i=Cr(gi.current),a=_e(i,n.type);i!==a&&(At(Ma,n),At(gi,a))}function Du(n){Ma.current===n&&(Ct(gi),Ct(Ma))}var Ot=tr(0);function Eo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Nu=[];function Uu(){for(var n=0;n<Nu.length;n++)Nu[n]._workInProgressVersionPrimary=null;Nu.length=0}var wo=R.ReactCurrentDispatcher,Iu=R.ReactCurrentBatchConfig,Pr=0,Ft=null,Zt=null,rn=null,To=!1,wa=!1,Ta=0,J0=0;function pn(){throw Error(t(321))}function Ou(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ni(n[a],i[a]))return!1;return!0}function Fu(n,i,a,u,d,p){if(Pr=p,Ft=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,wo.current=n===null||n.memoizedState===null?iv:rv,n=a(u,d),wa){p=0;do{if(wa=!1,Ta=0,25<=p)throw Error(t(301));p+=1,rn=Zt=null,i.updateQueue=null,wo.current=sv,n=a(u,d)}while(wa)}if(wo.current=Ro,i=Zt!==null&&Zt.next!==null,Pr=0,rn=Zt=Ft=null,To=!1,i)throw Error(t(300));return n}function ku(){var n=Ta!==0;return Ta=0,n}function vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Ft.memoizedState=rn=n:rn=rn.next=n,rn}function Xn(){if(Zt===null){var n=Ft.alternate;n=n!==null?n.memoizedState:null}else n=Zt.next;var i=rn===null?Ft.memoizedState:rn.next;if(i!==null)rn=i,Zt=n;else{if(n===null)throw Error(t(310));Zt=n,n={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},rn===null?Ft.memoizedState=rn=n:rn=rn.next=n}return rn}function Aa(n,i){return typeof i=="function"?i(n):i}function zu(n){var i=Xn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=Zt,d=u.baseQueue,p=a.pending;if(p!==null){if(d!==null){var M=d.next;d.next=p.next,p.next=M}u.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,u=u.baseState;var I=M=null,B=null,ee=p;do{var ve=ee.lane;if((Pr&ve)===ve)B!==null&&(B=B.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),u=ee.hasEagerState?ee.eagerState:n(u,ee.action);else{var Se={lane:ve,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};B===null?(I=B=Se,M=u):B=B.next=Se,Ft.lanes|=ve,Lr|=ve}ee=ee.next}while(ee!==null&&ee!==p);B===null?M=u:B.next=I,ni(u,i.memoizedState)||(Cn=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=B,a.lastRenderedState=u}if(n=a.interleaved,n!==null){d=n;do p=d.lane,Ft.lanes|=p,Lr|=p,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Bu(n){var i=Xn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,p=i.memoizedState;if(d!==null){a.pending=null;var M=d=d.next;do p=n(p,M.action),M=M.next;while(M!==d);ni(p,i.memoizedState)||(Cn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,u]}function Ff(){}function kf(n,i){var a=Ft,u=Xn(),d=i(),p=!ni(u.memoizedState,d);if(p&&(u.memoizedState=d,Cn=!0),u=u.queue,Hu(Hf.bind(null,a,u,n),[n]),u.getSnapshot!==i||p||rn!==null&&rn.memoizedState.tag&1){if(a.flags|=2048,ba(9,Bf.bind(null,a,u,d,i),void 0,null),sn===null)throw Error(t(349));(Pr&30)!==0||zf(a,i,d)}return d}function zf(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ft.updateQueue,i===null?(i={lastEffect:null,stores:null},Ft.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Bf(n,i,a,u){i.value=a,i.getSnapshot=u,Vf(i)&&Gf(n)}function Hf(n,i,a){return a(function(){Vf(i)&&Gf(n)})}function Vf(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ni(n,a)}catch{return!0}}function Gf(n){var i=Ri(n,1);i!==null&&oi(i,n,1,-1)}function Wf(n){var i=vi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:n},i.queue=n,n=n.dispatch=nv.bind(null,Ft,n),[i.memoizedState,n]}function ba(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Ft.updateQueue,i===null?(i={lastEffect:null,stores:null},Ft.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function jf(){return Xn().memoizedState}function Ao(n,i,a,u){var d=vi();Ft.flags|=n,d.memoizedState=ba(1|i,a,void 0,u===void 0?null:u)}function bo(n,i,a,u){var d=Xn();u=u===void 0?null:u;var p=void 0;if(Zt!==null){var M=Zt.memoizedState;if(p=M.destroy,u!==null&&Ou(u,M.deps)){d.memoizedState=ba(i,a,p,u);return}}Ft.flags|=n,d.memoizedState=ba(1|i,a,p,u)}function Xf(n,i){return Ao(8390656,8,n,i)}function Hu(n,i){return bo(2048,8,n,i)}function Yf(n,i){return bo(4,2,n,i)}function qf(n,i){return bo(4,4,n,i)}function $f(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Kf(n,i,a){return a=a!=null?a.concat([n]):null,bo(4,4,$f.bind(null,i,n),a)}function Vu(){}function Zf(n,i){var a=Xn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Ou(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Qf(n,i){var a=Xn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Ou(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Jf(n,i,a){return(Pr&21)===0?(n.baseState&&(n.baseState=!1,Cn=!0),n.memoizedState=a):(ni(a,i)||(a=Rd(),Ft.lanes|=a,Lr|=a,n.baseState=!0),i)}function ev(n,i){var a=Mt;Mt=a!==0&&4>a?a:4,n(!0);var u=Iu.transition;Iu.transition={};try{n(!1),i()}finally{Mt=a,Iu.transition=u}}function eh(){return Xn().memoizedState}function tv(n,i,a){var u=ur(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},th(n))nh(i,a);else if(a=Df(n,i,a,u),a!==null){var d=Mn();oi(a,n,u,d),ih(a,i,u)}}function nv(n,i,a){var u=ur(n),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(th(n))nh(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,I=p(M,a);if(d.hasEagerState=!0,d.eagerState=I,ni(I,M)){var B=i.interleaved;B===null?(d.next=d,Cu(i)):(d.next=B.next,B.next=d),i.interleaved=d;return}}catch{}finally{}a=Df(n,i,d,u),a!==null&&(d=Mn(),oi(a,n,u,d),ih(a,i,u))}}function th(n){var i=n.alternate;return n===Ft||i!==null&&i===Ft}function nh(n,i){wa=To=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function ih(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Wl(n,a)}}var Ro={readContext:jn,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},iv={readContext:jn,useCallback:function(n,i){return vi().memoizedState=[n,i===void 0?null:i],n},useContext:jn,useEffect:Xf,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ao(4194308,4,$f.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ao(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ao(4,2,n,i)},useMemo:function(n,i){var a=vi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=vi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=tv.bind(null,Ft,n),[u.memoizedState,n]},useRef:function(n){var i=vi();return n={current:n},i.memoizedState=n},useState:Wf,useDebugValue:Vu,useDeferredValue:function(n){return vi().memoizedState=n},useTransition:function(){var n=Wf(!1),i=n[0];return n=ev.bind(null,n[1]),vi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Ft,d=vi();if(Dt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),sn===null)throw Error(t(349));(Pr&30)!==0||zf(u,i,a)}d.memoizedState=a;var p={value:a,getSnapshot:i};return d.queue=p,Xf(Hf.bind(null,u,p,n),[n]),u.flags|=2048,ba(9,Bf.bind(null,u,p,a,i),void 0,null),a},useId:function(){var n=vi(),i=sn.identifierPrefix;if(Dt){var a=bi,u=Ai;a=(u&~(1<<32-Kt(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ta++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=J0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},rv={readContext:jn,useCallback:Zf,useContext:jn,useEffect:Hu,useImperativeHandle:Kf,useInsertionEffect:Yf,useLayoutEffect:qf,useMemo:Qf,useReducer:zu,useRef:jf,useState:function(){return zu(Aa)},useDebugValue:Vu,useDeferredValue:function(n){var i=Xn();return Jf(i,Zt.memoizedState,n)},useTransition:function(){var n=zu(Aa)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:Ff,useSyncExternalStore:kf,useId:eh,unstable_isNewReconciler:!1},sv={readContext:jn,useCallback:Zf,useContext:jn,useEffect:Hu,useImperativeHandle:Kf,useInsertionEffect:Yf,useLayoutEffect:qf,useMemo:Qf,useReducer:Bu,useRef:jf,useState:function(){return Bu(Aa)},useDebugValue:Vu,useDeferredValue:function(n){var i=Xn();return Zt===null?i.memoizedState=n:Jf(i,Zt.memoizedState,n)},useTransition:function(){var n=Bu(Aa)[0],i=Xn().memoizedState;return[n,i]},useMutableSource:Ff,useSyncExternalStore:kf,useId:eh,unstable_isNewReconciler:!1};function ri(n,i){if(n&&n.defaultProps){i=j({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Gu(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:j({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Co={isMounted:function(n){return(n=n._reactInternals)?P(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Mn(),d=ur(n),p=Ci(u,d);p.payload=i,a!=null&&(p.callback=a),i=sr(n,p,d),i!==null&&(oi(i,n,d,u),So(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Mn(),d=ur(n),p=Ci(u,d);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=sr(n,p,d),i!==null&&(oi(i,n,d,u),So(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Mn(),u=ur(n),d=Ci(a,u);d.tag=2,i!=null&&(d.callback=i),i=sr(n,d,u),i!==null&&(oi(i,n,u,a),So(i,n,u))}};function rh(n,i,a,u,d,p,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,M):i.prototype&&i.prototype.isPureReactComponent?!ha(a,u)||!ha(d,p):!0}function sh(n,i,a){var u=!1,d=nr,p=i.contextType;return typeof p=="object"&&p!==null?p=jn(p):(d=Rn(i)?Tr:hn.current,u=i.contextTypes,p=(u=u!=null)?ls(n,d):nr),i=new i(a,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Co,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),i}function ah(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&Co.enqueueReplaceState(i,i.state,null)}function Wu(n,i,a,u){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Pu(n);var p=i.contextType;typeof p=="object"&&p!==null?d.context=jn(p):(p=Rn(i)?Tr:hn.current,d.context=ls(n,p)),d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Gu(n,i,p,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Co.enqueueReplaceState(d,d.state,null),Mo(n,a,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function gs(n,i){try{var a="",u=i;do a+=ye(u),u=u.return;while(u);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:d,digest:null}}function ju(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Xu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var av=typeof WeakMap=="function"?WeakMap:Map;function oh(n,i,a){a=Ci(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){Oo||(Oo=!0,oc=u),Xu(n,i)},a}function lh(n,i,a){a=Ci(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){Xu(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Xu(n,i),typeof u!="function"&&(or===null?or=new Set([this]):or.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),a}function uh(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new av;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),n=yv.bind(null,n,i,a),i.then(n,n))}function ch(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function dh(n,i,a,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ci(-1,1),i.tag=2,sr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var ov=R.ReactCurrentOwner,Cn=!1;function Sn(n,i,a,u){i.child=n===null?Lf(i,null,a,u):fs(i,n.child,a,u)}function fh(n,i,a,u,d){a=a.render;var p=i.ref;return ps(i,d),u=Fu(n,i,a,u,p,d),a=ku(),n!==null&&!Cn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pi(n,i,d)):(Dt&&a&&yu(i),i.flags|=1,Sn(n,i,u,d),i.child)}function hh(n,i,a,u,d){if(n===null){var p=a.type;return typeof p=="function"&&!pc(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,ph(n,i,p,u,d)):(n=Vo(a.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&d)===0){var M=p.memoizedProps;if(a=a.compare,a=a!==null?a:ha,a(M,u)&&n.ref===i.ref)return Pi(n,i,d)}return i.flags|=1,n=dr(p,u),n.ref=i.ref,n.return=i,i.child=n}function ph(n,i,a,u,d){if(n!==null){var p=n.memoizedProps;if(ha(p,u)&&n.ref===i.ref)if(Cn=!1,i.pendingProps=u=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Cn=!0);else return i.lanes=n.lanes,Pi(n,i,d)}return Yu(n,i,a,u,d)}function mh(n,i,a){var u=i.pendingProps,d=u.children,p=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},At(_s,kn),kn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,At(_s,kn),kn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:a,At(_s,kn),kn|=u}else p!==null?(u=p.baseLanes|a,i.memoizedState=null):u=a,At(_s,kn),kn|=u;return Sn(n,i,d,a),i.child}function gh(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Yu(n,i,a,u,d){var p=Rn(a)?Tr:hn.current;return p=ls(i,p),ps(i,d),a=Fu(n,i,a,u,p,d),u=ku(),n!==null&&!Cn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Pi(n,i,d)):(Dt&&u&&yu(i),i.flags|=1,Sn(n,i,a,d),i.child)}function vh(n,i,a,u,d){if(Rn(a)){var p=!0;ho(i)}else p=!1;if(ps(i,d),i.stateNode===null)Lo(n,i),sh(i,a,u),Wu(i,a,u,d),u=!0;else if(n===null){var M=i.stateNode,I=i.memoizedProps;M.props=I;var B=M.context,ee=a.contextType;typeof ee=="object"&&ee!==null?ee=jn(ee):(ee=Rn(a)?Tr:hn.current,ee=ls(i,ee));var ve=a.getDerivedStateFromProps,Se=typeof ve=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==u||B!==ee)&&ah(i,M,u,ee),rr=!1;var ge=i.memoizedState;M.state=ge,Mo(i,u,M,d),B=i.memoizedState,I!==u||ge!==B||bn.current||rr?(typeof ve=="function"&&(Gu(i,a,ve,u),B=i.memoizedState),(I=rr||rh(i,a,I,u,ge,B,ee))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=B),M.props=u,M.state=B,M.context=ee,u=I):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,Nf(n,i),I=i.memoizedProps,ee=i.type===i.elementType?I:ri(i.type,I),M.props=ee,Se=i.pendingProps,ge=M.context,B=a.contextType,typeof B=="object"&&B!==null?B=jn(B):(B=Rn(a)?Tr:hn.current,B=ls(i,B));var Ie=a.getDerivedStateFromProps;(ve=typeof Ie=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(I!==Se||ge!==B)&&ah(i,M,u,B),rr=!1,ge=i.memoizedState,M.state=ge,Mo(i,u,M,d);var ze=i.memoizedState;I!==Se||ge!==ze||bn.current||rr?(typeof Ie=="function"&&(Gu(i,a,Ie,u),ze=i.memoizedState),(ee=rr||rh(i,a,ee,u,ge,ze,B)||!1)?(ve||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,ze,B),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,ze,B)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=ze),M.props=u,M.state=ze,M.context=B,u=ee):(typeof M.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),u=!1)}return qu(n,i,a,u,p,d)}function qu(n,i,a,u,d,p){gh(n,i);var M=(i.flags&128)!==0;if(!u&&!M)return d&&Mf(i,a,!1),Pi(n,i,p);u=i.stateNode,ov.current=i;var I=M&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&M?(i.child=fs(i,n.child,null,p),i.child=fs(i,null,I,p)):Sn(n,i,I,p),i.memoizedState=u.state,d&&Mf(i,a,!0),i.child}function _h(n){var i=n.stateNode;i.pendingContext?yf(n,i.pendingContext,i.pendingContext!==i.context):i.context&&yf(n,i.context,!1),Lu(n,i.containerInfo)}function xh(n,i,a,u,d){return ds(),wu(d),i.flags|=256,Sn(n,i,a,u),i.child}var $u={dehydrated:null,treeContext:null,retryLane:0};function Ku(n){return{baseLanes:n,cachePool:null,transitions:null}}function yh(n,i,a){var u=i.pendingProps,d=Ot.current,p=!1,M=(i.flags&128)!==0,I;if((I=M)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),At(Ot,d&1),n===null)return Eu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=u.children,n=u.fallback,p?(u=i.mode,p=i.child,M={mode:"hidden",children:M},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=Go(M,u,0,null),n=Ir(n,u,a,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=Ku(a),i.memoizedState=$u,n):Zu(i,M));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return lv(n,i,M,u,I,d,a);if(p){p=u.fallback,M=i.mode,d=n.child,I=d.sibling;var B={mode:"hidden",children:u.children};return(M&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=B,i.deletions=null):(u=dr(d,B),u.subtreeFlags=d.subtreeFlags&14680064),I!==null?p=dr(I,p):(p=Ir(p,M,a,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,M=n.child.memoizedState,M=M===null?Ku(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=n.childLanes&~a,i.memoizedState=$u,u}return p=n.child,n=p.sibling,u=dr(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function Zu(n,i){return i=Go({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Po(n,i,a,u){return u!==null&&wu(u),fs(i,n.child,null,a),n=Zu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function lv(n,i,a,u,d,p,M){if(a)return i.flags&256?(i.flags&=-257,u=ju(Error(t(422))),Po(n,i,M,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=u.fallback,d=i.mode,u=Go({mode:"visible",children:u.children},d,0,null),p=Ir(p,d,M,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&fs(i,n.child,null,M),i.child.memoizedState=Ku(M),i.memoizedState=$u,p);if((i.mode&1)===0)return Po(n,i,M,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var I=u.dgst;return u=I,p=Error(t(419)),u=ju(p,u,void 0),Po(n,i,M,u)}if(I=(M&n.childLanes)!==0,Cn||I){if(u=sn,u!==null){switch(M&-M){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|M))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Ri(n,d),oi(u,n,d,-1))}return hc(),u=ju(Error(t(421))),Po(n,i,M,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Sv.bind(null,n),d._reactRetry=i,null):(n=p.treeContext,Fn=er(d.nextSibling),On=i,Dt=!0,ii=null,n!==null&&(Gn[Wn++]=Ai,Gn[Wn++]=bi,Gn[Wn++]=Ar,Ai=n.id,bi=n.overflow,Ar=i),i=Zu(i,u.children),i.flags|=4096,i)}function Sh(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Ru(n.return,i,a)}function Qu(n,i,a,u,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=a,p.tailMode=d)}function Mh(n,i,a){var u=i.pendingProps,d=u.revealOrder,p=u.tail;if(Sn(n,i,u.children,a),u=Ot.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Sh(n,a,i);else if(n.tag===19)Sh(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(At(Ot,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Eo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Qu(i,!1,d,a,p);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Eo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Qu(i,!0,a,null,p);break;case"together":Qu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Lo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Pi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Lr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=dr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=dr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function uv(n,i,a){switch(i.tag){case 3:_h(i),ds();break;case 5:Of(i);break;case 1:Rn(i.type)&&ho(i);break;case 4:Lu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;At(xo,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(At(Ot,Ot.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?yh(n,i,a):(At(Ot,Ot.current&1),n=Pi(n,i,a),n!==null?n.sibling:null);At(Ot,Ot.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Mh(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),At(Ot,Ot.current),u)break;return null;case 22:case 23:return i.lanes=0,mh(n,i,a)}return Pi(n,i,a)}var Eh,Ju,wh,Th;Eh=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ju=function(){},wh=function(n,i,a,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Cr(gi.current);var p=null;switch(a){case"input":d=je(n,d),u=je(n,u),p=[];break;case"select":d=j({},d,{value:void 0}),u=j({},u,{value:void 0}),p=[];break;case"textarea":d=zt(n,d),u=zt(n,u),p=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=uo)}Le(a,u);var M;a=null;for(ee in d)if(!u.hasOwnProperty(ee)&&d.hasOwnProperty(ee)&&d[ee]!=null)if(ee==="style"){var I=d[ee];for(M in I)I.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(o.hasOwnProperty(ee)?p||(p=[]):(p=p||[]).push(ee,null));for(ee in u){var B=u[ee];if(I=d!=null?d[ee]:void 0,u.hasOwnProperty(ee)&&B!==I&&(B!=null||I!=null))if(ee==="style")if(I){for(M in I)!I.hasOwnProperty(M)||B&&B.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in B)B.hasOwnProperty(M)&&I[M]!==B[M]&&(a||(a={}),a[M]=B[M])}else a||(p||(p=[]),p.push(ee,a)),a=B;else ee==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(p=p||[]).push(ee,B)):ee==="children"?typeof B!="string"&&typeof B!="number"||(p=p||[]).push(ee,""+B):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(ee)?(B!=null&&ee==="onScroll"&&Rt("scroll",n),p||I===B||(p=[])):(p=p||[]).push(ee,B))}a&&(p=p||[]).push("style",a);var ee=p;(i.updateQueue=ee)&&(i.flags|=4)}},Th=function(n,i,a,u){a!==u&&(i.flags|=4)};function Ra(n,i){if(!Dt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function mn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function cv(n,i,a){var u=i.pendingProps;switch(Su(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return Rn(i.type)&&fo(),mn(i),null;case 3:return u=i.stateNode,ms(),Ct(bn),Ct(hn),Uu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(vo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ii!==null&&(cc(ii),ii=null))),Ju(n,i),mn(i),null;case 5:Du(i);var d=Cr(Ea.current);if(a=i.type,n!==null&&i.stateNode!=null)wh(n,i,a,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return mn(i),null}if(n=Cr(gi.current),vo(i)){u=i.stateNode,a=i.type;var p=i.memoizedProps;switch(u[mi]=i,u[_a]=p,n=(i.mode&1)!==0,a){case"dialog":Rt("cancel",u),Rt("close",u);break;case"iframe":case"object":case"embed":Rt("load",u);break;case"video":case"audio":for(d=0;d<ma.length;d++)Rt(ma[d],u);break;case"source":Rt("error",u);break;case"img":case"image":case"link":Rt("error",u),Rt("load",u);break;case"details":Rt("toggle",u);break;case"input":et(u,p),Rt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Rt("invalid",u);break;case"textarea":N(u,p),Rt("invalid",u)}Le(a,p),d=null;for(var M in p)if(p.hasOwnProperty(M)){var I=p[M];M==="children"?typeof I=="string"?u.textContent!==I&&(p.suppressHydrationWarning!==!0&&lo(u.textContent,I,n),d=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&lo(u.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(M)&&I!=null&&M==="onScroll"&&Rt("scroll",u)}switch(a){case"input":nt(u),rt(u,p,!0);break;case"textarea":nt(u),te(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=uo)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=we(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(a,{is:u.is}):(n=M.createElement(a),a==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,a),n[mi]=i,n[_a]=u,Eh(n,i,!1,!1),i.stateNode=n;e:{switch(M=Ke(a,u),a){case"dialog":Rt("cancel",n),Rt("close",n),d=u;break;case"iframe":case"object":case"embed":Rt("load",n),d=u;break;case"video":case"audio":for(d=0;d<ma.length;d++)Rt(ma[d],n);d=u;break;case"source":Rt("error",n),d=u;break;case"img":case"image":case"link":Rt("error",n),Rt("load",n),d=u;break;case"details":Rt("toggle",n),d=u;break;case"input":et(n,u),d=je(n,u),Rt("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=j({},u,{value:void 0}),Rt("invalid",n);break;case"textarea":N(n,u),d=zt(n,u),Rt("invalid",n);break;default:d=u}Le(a,d),I=d;for(p in I)if(I.hasOwnProperty(p)){var B=I[p];p==="style"?Ne(n,B):p==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ve(n,B)):p==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&Ee(n,B):typeof B=="number"&&Ee(n,""+B):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?B!=null&&p==="onScroll"&&Rt("scroll",n):B!=null&&C(n,p,B,M))}switch(a){case"input":nt(n),rt(n,u,!1);break;case"textarea":nt(n),te(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Ce(u.value));break;case"select":n.multiple=!!u.multiple,p=u.value,p!=null?wt(n,!!u.multiple,p,!1):u.defaultValue!=null&&wt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=uo)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mn(i),null;case 6:if(n&&i.stateNode!=null)Th(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Cr(Ea.current),Cr(gi.current),vo(i)){if(u=i.stateNode,a=i.memoizedProps,u[mi]=i,(p=u.nodeValue!==a)&&(n=On,n!==null))switch(n.tag){case 3:lo(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&lo(u.nodeValue,a,(n.mode&1)!==0)}p&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[mi]=i,i.stateNode=u}return mn(i),null;case 13:if(Ct(Ot),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Dt&&Fn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Rf(),ds(),i.flags|=98560,p=!1;else if(p=vo(i),u!==null&&u.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[mi]=i}else ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mn(i),p=!1}else ii!==null&&(cc(ii),ii=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ot.current&1)!==0?Qt===0&&(Qt=3):hc())),i.updateQueue!==null&&(i.flags|=4),mn(i),null);case 4:return ms(),Ju(n,i),n===null&&ga(i.stateNode.containerInfo),mn(i),null;case 10:return bu(i.type._context),mn(i),null;case 17:return Rn(i.type)&&fo(),mn(i),null;case 19:if(Ct(Ot),p=i.memoizedState,p===null)return mn(i),null;if(u=(i.flags&128)!==0,M=p.rendering,M===null)if(u)Ra(p,!1);else{if(Qt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(M=Eo(n),M!==null){for(i.flags|=128,Ra(p,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)p=a,n=u,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,n=M.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return At(Ot,Ot.current&1|2),i.child}n=n.sibling}p.tail!==null&&Oe()>xs&&(i.flags|=128,u=!0,Ra(p,!1),i.lanes=4194304)}else{if(!u)if(n=Eo(M),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ra(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Dt)return mn(i),null}else 2*Oe()-p.renderingStartTime>xs&&a!==1073741824&&(i.flags|=128,u=!0,Ra(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(a=p.last,a!==null?a.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Oe(),i.sibling=null,a=Ot.current,At(Ot,u?a&1|2:a&1),i):(mn(i),null);case 22:case 23:return fc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(kn&1073741824)!==0&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function dv(n,i){switch(Su(i),i.tag){case 1:return Rn(i.type)&&fo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ms(),Ct(bn),Ct(hn),Uu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Du(i),null;case 13:if(Ct(Ot),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ds()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ct(Ot),null;case 4:return ms(),null;case 10:return bu(i.type._context),null;case 22:case 23:return fc(),null;case 24:return null;default:return null}}var Do=!1,gn=!1,fv=typeof WeakSet=="function"?WeakSet:Set,ke=null;function vs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Ht(n,i,u)}else a.current=null}function ec(n,i,a){try{a()}catch(u){Ht(n,i,u)}}var Ah=!1;function hv(n,i){if(fu=Za,n=rf(),ru(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var M=0,I=-1,B=-1,ee=0,ve=0,Se=n,ge=null;t:for(;;){for(var Ie;Se!==a||d!==0&&Se.nodeType!==3||(I=M+d),Se!==p||u!==0&&Se.nodeType!==3||(B=M+u),Se.nodeType===3&&(M+=Se.nodeValue.length),(Ie=Se.firstChild)!==null;)ge=Se,Se=Ie;for(;;){if(Se===n)break t;if(ge===a&&++ee===d&&(I=M),ge===p&&++ve===u&&(B=M),(Ie=Se.nextSibling)!==null)break;Se=ge,ge=Se.parentNode}Se=Ie}a=I===-1||B===-1?null:{start:I,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(hu={focusedElem:n,selectionRange:a},Za=!1,ke=i;ke!==null;)if(i=ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ke=n;else for(;ke!==null;){i=ke;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Be=ze.memoizedProps,Gt=ze.memoizedState,Y=i.stateNode,V=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Be:ri(i.type,Be),Gt);Y.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Ht(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,ke=n;break}ke=i.return}return ze=Ah,Ah=!1,ze}function Ca(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&ec(i,a,p)}d=d.next}while(d!==u)}}function No(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function tc(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function bh(n){var i=n.alternate;i!==null&&(n.alternate=null,bh(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[mi],delete i[_a],delete i[vu],delete i[$0],delete i[K0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Rh(n){return n.tag===5||n.tag===3||n.tag===4}function Ch(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Rh(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function nc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=uo));else if(u!==4&&(n=n.child,n!==null))for(nc(n,i,a),n=n.sibling;n!==null;)nc(n,i,a),n=n.sibling}function ic(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(ic(n,i,a),n=n.sibling;n!==null;)ic(n,i,a),n=n.sibling}var un=null,si=!1;function ar(n,i,a){for(a=a.child;a!==null;)Ph(n,i,a),a=a.sibling}function Ph(n,i,a){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(st,a)}catch{}switch(a.tag){case 5:gn||vs(a,i);case 6:var u=un,d=si;un=null,ar(n,i,a),un=u,si=d,un!==null&&(si?(n=un,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):un.removeChild(a.stateNode));break;case 18:un!==null&&(si?(n=un,a=a.stateNode,n.nodeType===8?gu(n.parentNode,a):n.nodeType===1&&gu(n,a),oa(n)):gu(un,a.stateNode));break;case 4:u=un,d=si,un=a.stateNode.containerInfo,si=!0,ar(n,i,a),un=u,si=d;break;case 0:case 11:case 14:case 15:if(!gn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var p=d,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&ec(a,i,M),d=d.next}while(d!==u)}ar(n,i,a);break;case 1:if(!gn&&(vs(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(I){Ht(a,i,I)}ar(n,i,a);break;case 21:ar(n,i,a);break;case 22:a.mode&1?(gn=(u=gn)||a.memoizedState!==null,ar(n,i,a),gn=u):ar(n,i,a);break;default:ar(n,i,a)}}function Lh(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new fv),i.forEach(function(u){var d=Mv.bind(null,n,u);a.has(u)||(a.add(u),u.then(d,d))})}}function ai(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var p=n,M=i,I=M;e:for(;I!==null;){switch(I.tag){case 5:un=I.stateNode,si=!1;break e;case 3:un=I.stateNode.containerInfo,si=!0;break e;case 4:un=I.stateNode.containerInfo,si=!0;break e}I=I.return}if(un===null)throw Error(t(160));Ph(p,M,d),un=null,si=!1;var B=d.alternate;B!==null&&(B.return=null),d.return=null}catch(ee){Ht(d,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Dh(i,n),i=i.sibling}function Dh(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ai(i,n),_i(n),u&4){try{Ca(3,n,n.return),No(3,n)}catch(Be){Ht(n,n.return,Be)}try{Ca(5,n,n.return)}catch(Be){Ht(n,n.return,Be)}}break;case 1:ai(i,n),_i(n),u&512&&a!==null&&vs(a,a.return);break;case 5:if(ai(i,n),_i(n),u&512&&a!==null&&vs(a,a.return),n.flags&32){var d=n.stateNode;try{Ee(d,"")}catch(Be){Ht(n,n.return,Be)}}if(u&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,M=a!==null?a.memoizedProps:p,I=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&$e(d,p),Ke(I,M);var ee=Ke(I,p);for(M=0;M<B.length;M+=2){var ve=B[M],Se=B[M+1];ve==="style"?Ne(d,Se):ve==="dangerouslySetInnerHTML"?Ve(d,Se):ve==="children"?Ee(d,Se):C(d,ve,Se,ee)}switch(I){case"input":xt(d,p);break;case"textarea":T(d,p);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Ie=p.value;Ie!=null?wt(d,!!p.multiple,Ie,!1):ge!==!!p.multiple&&(p.defaultValue!=null?wt(d,!!p.multiple,p.defaultValue,!0):wt(d,!!p.multiple,p.multiple?[]:"",!1))}d[_a]=p}catch(Be){Ht(n,n.return,Be)}}break;case 6:if(ai(i,n),_i(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(Be){Ht(n,n.return,Be)}}break;case 3:if(ai(i,n),_i(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{oa(i.containerInfo)}catch(Be){Ht(n,n.return,Be)}break;case 4:ai(i,n),_i(n);break;case 13:ai(i,n),_i(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(ac=Oe())),u&4&&Lh(n);break;case 22:if(ve=a!==null&&a.memoizedState!==null,n.mode&1?(gn=(ee=gn)||ve,ai(i,n),gn=ee):ai(i,n),_i(n),u&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!ve&&(n.mode&1)!==0)for(ke=n,ve=n.child;ve!==null;){for(Se=ke=ve;ke!==null;){switch(ge=ke,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:Ca(4,ge,ge.return);break;case 1:vs(ge,ge.return);var ze=ge.stateNode;if(typeof ze.componentWillUnmount=="function"){u=ge,a=ge.return;try{i=u,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(Be){Ht(u,a,Be)}}break;case 5:vs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Ih(Se);continue}}Ie!==null?(Ie.return=ge,ke=Ie):Ih(Se)}ve=ve.sibling}e:for(ve=null,Se=n;;){if(Se.tag===5){if(ve===null){ve=Se;try{d=Se.stateNode,ee?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=Se.stateNode,B=Se.memoizedProps.style,M=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=pe("display",M))}catch(Be){Ht(n,n.return,Be)}}}else if(Se.tag===6){if(ve===null)try{Se.stateNode.nodeValue=ee?"":Se.memoizedProps}catch(Be){Ht(n,n.return,Be)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;ve===Se&&(ve=null),Se=Se.return}ve===Se&&(ve=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ai(i,n),_i(n),u&4&&Lh(n);break;case 21:break;default:ai(i,n),_i(n)}}function _i(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Rh(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Ee(d,""),u.flags&=-33);var p=Ch(n);ic(n,p,d);break;case 3:case 4:var M=u.stateNode.containerInfo,I=Ch(n);nc(n,I,M);break;default:throw Error(t(161))}}catch(B){Ht(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function pv(n,i,a){ke=n,Nh(n)}function Nh(n,i,a){for(var u=(n.mode&1)!==0;ke!==null;){var d=ke,p=d.child;if(d.tag===22&&u){var M=d.memoizedState!==null||Do;if(!M){var I=d.alternate,B=I!==null&&I.memoizedState!==null||gn;I=Do;var ee=gn;if(Do=M,(gn=B)&&!ee)for(ke=d;ke!==null;)M=ke,B=M.child,M.tag===22&&M.memoizedState!==null?Oh(d):B!==null?(B.return=M,ke=B):Oh(d);for(;p!==null;)ke=p,Nh(p),p=p.sibling;ke=d,Do=I,gn=ee}Uh(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ke=p):Uh(n)}}function Uh(n){for(;ke!==null;){var i=ke;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:gn||No(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!gn)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ri(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&If(i,p,u);break;case 3:var M=i.updateQueue;if(M!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}If(i,M,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var ve=ee.memoizedState;if(ve!==null){var Se=ve.dehydrated;Se!==null&&oa(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}gn||i.flags&512&&tc(i)}catch(ge){Ht(i,i.return,ge)}}if(i===n){ke=null;break}if(a=i.sibling,a!==null){a.return=i.return,ke=a;break}ke=i.return}}function Ih(n){for(;ke!==null;){var i=ke;if(i===n){ke=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ke=a;break}ke=i.return}}function Oh(n){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{No(4,i)}catch(B){Ht(i,a,B)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(B){Ht(i,d,B)}}var p=i.return;try{tc(i)}catch(B){Ht(i,p,B)}break;case 5:var M=i.return;try{tc(i)}catch(B){Ht(i,M,B)}}}catch(B){Ht(i,i.return,B)}if(i===n){ke=null;break}var I=i.sibling;if(I!==null){I.return=i.return,ke=I;break}ke=i.return}}var mv=Math.ceil,Uo=R.ReactCurrentDispatcher,rc=R.ReactCurrentOwner,Yn=R.ReactCurrentBatchConfig,ht=0,sn=null,Yt=null,cn=0,kn=0,_s=tr(0),Qt=0,Pa=null,Lr=0,Io=0,sc=0,La=null,Pn=null,ac=0,xs=1/0,Li=null,Oo=!1,oc=null,or=null,Fo=!1,lr=null,ko=0,Da=0,lc=null,zo=-1,Bo=0;function Mn(){return(ht&6)!==0?Oe():zo!==-1?zo:zo=Oe()}function ur(n){return(n.mode&1)===0?1:(ht&2)!==0&&cn!==0?cn&-cn:Q0.transition!==null?(Bo===0&&(Bo=Rd()),Bo):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:Fd(n.type)),n)}function oi(n,i,a,u){if(50<Da)throw Da=0,lc=null,Error(t(185));na(n,a,u),((ht&2)===0||n!==sn)&&(n===sn&&((ht&2)===0&&(Io|=a),Qt===4&&cr(n,cn)),Ln(n,u),a===1&&ht===0&&(i.mode&1)===0&&(xs=Oe()+500,po&&ir()))}function Ln(n,i){var a=n.callbackNode;Vl(n,i);var u=nn(n,n===sn?cn:0);if(u===0)a!==null&&Ze(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Ze(a),i===1)n.tag===0?Z0(kh.bind(null,n)):Ef(kh.bind(null,n)),Y0(function(){(ht&6)===0&&ir()}),a=null;else{switch(Cd(u)){case 1:a=Tt;break;case 4:a=Lt;break;case 16:a=ln;break;case 536870912:a=It;break;default:a=ln}a=Xh(a,Fh.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Fh(n,i){if(zo=-1,Bo=0,(ht&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ys()&&n.callbackNode!==a)return null;var u=nn(n,n===sn?cn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=Ho(n,u);else{i=u;var d=ht;ht|=2;var p=Bh();(sn!==n||cn!==i)&&(Li=null,xs=Oe()+500,Nr(n,i));do try{_v();break}catch(I){zh(n,I)}while(!0);Au(),Uo.current=p,ht=d,Yt!==null?i=0:(sn=null,cn=0,i=Qt)}if(i!==0){if(i===2&&(d=Qr(n),d!==0&&(u=d,i=uc(n,d))),i===1)throw a=Pa,Nr(n,0),cr(n,u),Ln(n,Oe()),a;if(i===6)cr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!gv(d)&&(i=Ho(n,u),i===2&&(p=Qr(n),p!==0&&(u=p,i=uc(n,p))),i===1))throw a=Pa,Nr(n,0),cr(n,u),Ln(n,Oe()),a;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Ur(n,Pn,Li);break;case 3:if(cr(n,u),(u&130023424)===u&&(i=ac+500-Oe(),10<i)){if(nn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Mn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=mu(Ur.bind(null,n,Pn,Li),i);break}Ur(n,Pn,Li);break;case 4:if(cr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var M=31-Kt(u);p=1<<M,M=i[M],M>d&&(d=M),u&=~p}if(u=d,u=Oe()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*mv(u/1960))-u,10<u){n.timeoutHandle=mu(Ur.bind(null,n,Pn,Li),u);break}Ur(n,Pn,Li);break;case 5:Ur(n,Pn,Li);break;default:throw Error(t(329))}}}return Ln(n,Oe()),n.callbackNode===a?Fh.bind(null,n):null}function uc(n,i){var a=La;return n.current.memoizedState.isDehydrated&&(Nr(n,i).flags|=256),n=Ho(n,i),n!==2&&(i=Pn,Pn=a,i!==null&&cc(i)),n}function cc(n){Pn===null?Pn=n:Pn.push.apply(Pn,n)}function gv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],p=d.getSnapshot;d=d.value;try{if(!ni(p(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function cr(n,i){for(i&=~sc,i&=~Io,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Kt(i),u=1<<a;n[a]=-1,i&=~u}}function kh(n){if((ht&6)!==0)throw Error(t(327));ys();var i=nn(n,0);if((i&1)===0)return Ln(n,Oe()),null;var a=Ho(n,i);if(n.tag!==0&&a===2){var u=Qr(n);u!==0&&(i=u,a=uc(n,u))}if(a===1)throw a=Pa,Nr(n,0),cr(n,i),Ln(n,Oe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Ur(n,Pn,Li),Ln(n,Oe()),null}function dc(n,i){var a=ht;ht|=1;try{return n(i)}finally{ht=a,ht===0&&(xs=Oe()+500,po&&ir())}}function Dr(n){lr!==null&&lr.tag===0&&(ht&6)===0&&ys();var i=ht;ht|=1;var a=Yn.transition,u=Mt;try{if(Yn.transition=null,Mt=1,n)return n()}finally{Mt=u,Yn.transition=a,ht=i,(ht&6)===0&&ir()}}function fc(){kn=_s.current,Ct(_s)}function Nr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,X0(a)),Yt!==null)for(a=Yt.return;a!==null;){var u=a;switch(Su(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&fo();break;case 3:ms(),Ct(bn),Ct(hn),Uu();break;case 5:Du(u);break;case 4:ms();break;case 13:Ct(Ot);break;case 19:Ct(Ot);break;case 10:bu(u.type._context);break;case 22:case 23:fc()}a=a.return}if(sn=n,Yt=n=dr(n.current,null),cn=kn=i,Qt=0,Pa=null,sc=Io=Lr=0,Pn=La=null,Rr!==null){for(i=0;i<Rr.length;i++)if(a=Rr[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,p=a.pending;if(p!==null){var M=p.next;p.next=d,u.next=M}a.pending=u}Rr=null}return n}function zh(n,i){do{var a=Yt;try{if(Au(),wo.current=Ro,To){for(var u=Ft.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}To=!1}if(Pr=0,rn=Zt=Ft=null,wa=!1,Ta=0,rc.current=null,a===null||a.return===null){Qt=1,Pa=i,Yt=null;break}e:{var p=n,M=a.return,I=a,B=i;if(i=cn,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ee=B,ve=I,Se=ve.tag;if((ve.mode&1)===0&&(Se===0||Se===11||Se===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ie=ch(M);if(Ie!==null){Ie.flags&=-257,dh(Ie,M,I,p,i),Ie.mode&1&&uh(p,ee,i),i=Ie,B=ee;var ze=i.updateQueue;if(ze===null){var Be=new Set;Be.add(B),i.updateQueue=Be}else ze.add(B);break e}else{if((i&1)===0){uh(p,ee,i),hc();break e}B=Error(t(426))}}else if(Dt&&I.mode&1){var Gt=ch(M);if(Gt!==null){(Gt.flags&65536)===0&&(Gt.flags|=256),dh(Gt,M,I,p,i),wu(gs(B,I));break e}}p=B=gs(B,I),Qt!==4&&(Qt=2),La===null?La=[p]:La.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Y=oh(p,B,i);Uf(p,Y);break e;case 1:I=B;var V=p.type,$=p.stateNode;if((p.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(or===null||!or.has($)))){p.flags|=65536,i&=-i,p.lanes|=i;var Te=lh(p,I,i);Uf(p,Te);break e}}p=p.return}while(p!==null)}Vh(a)}catch(He){i=He,Yt===a&&a!==null&&(Yt=a=a.return);continue}break}while(!0)}function Bh(){var n=Uo.current;return Uo.current=Ro,n===null?Ro:n}function hc(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),sn===null||(Lr&268435455)===0&&(Io&268435455)===0||cr(sn,cn)}function Ho(n,i){var a=ht;ht|=2;var u=Bh();(sn!==n||cn!==i)&&(Li=null,Nr(n,i));do try{vv();break}catch(d){zh(n,d)}while(!0);if(Au(),ht=a,Uo.current=u,Yt!==null)throw Error(t(261));return sn=null,cn=0,Qt}function vv(){for(;Yt!==null;)Hh(Yt)}function _v(){for(;Yt!==null&&!Qe();)Hh(Yt)}function Hh(n){var i=jh(n.alternate,n,kn);n.memoizedProps=n.pendingProps,i===null?Vh(n):Yt=i,rc.current=null}function Vh(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=cv(a,i,kn),a!==null){Yt=a;return}}else{if(a=dv(a,i),a!==null){a.flags&=32767,Yt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,Yt=null;return}}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=n}while(i!==null);Qt===0&&(Qt=5)}function Ur(n,i,a){var u=Mt,d=Yn.transition;try{Yn.transition=null,Mt=1,xv(n,i,a,u)}finally{Yn.transition=d,Mt=u}return null}function xv(n,i,a,u){do ys();while(lr!==null);if((ht&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(Jg(n,p),n===sn&&(Yt=sn=null,cn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Fo||(Fo=!0,Xh(ln,function(){return ys(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=Yn.transition,Yn.transition=null;var M=Mt;Mt=1;var I=ht;ht|=4,rc.current=null,hv(n,a),Dh(a,n),z0(hu),Za=!!fu,hu=fu=null,n.current=a,pv(a),ct(),ht=I,Mt=M,Yn.transition=p}else n.current=a;if(Fo&&(Fo=!1,lr=n,ko=d),p=n.pendingLanes,p===0&&(or=null),Bt(a.stateNode),Ln(n,Oe()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(Oo)throw Oo=!1,n=oc,oc=null,n;return(ko&1)!==0&&n.tag!==0&&ys(),p=n.pendingLanes,(p&1)!==0?n===lc?Da++:(Da=0,lc=n):Da=0,ir(),null}function ys(){if(lr!==null){var n=Cd(ko),i=Yn.transition,a=Mt;try{if(Yn.transition=null,Mt=16>n?16:n,lr===null)var u=!1;else{if(n=lr,lr=null,ko=0,(ht&6)!==0)throw Error(t(331));var d=ht;for(ht|=4,ke=n.current;ke!==null;){var p=ke,M=p.child;if((ke.flags&16)!==0){var I=p.deletions;if(I!==null){for(var B=0;B<I.length;B++){var ee=I[B];for(ke=ee;ke!==null;){var ve=ke;switch(ve.tag){case 0:case 11:case 15:Ca(8,ve,p)}var Se=ve.child;if(Se!==null)Se.return=ve,ke=Se;else for(;ke!==null;){ve=ke;var ge=ve.sibling,Ie=ve.return;if(bh(ve),ve===ee){ke=null;break}if(ge!==null){ge.return=Ie,ke=ge;break}ke=Ie}}}var ze=p.alternate;if(ze!==null){var Be=ze.child;if(Be!==null){ze.child=null;do{var Gt=Be.sibling;Be.sibling=null,Be=Gt}while(Be!==null)}}ke=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,ke=M;else e:for(;ke!==null;){if(p=ke,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ca(9,p,p.return)}var Y=p.sibling;if(Y!==null){Y.return=p.return,ke=Y;break e}ke=p.return}}var V=n.current;for(ke=V;ke!==null;){M=ke;var $=M.child;if((M.subtreeFlags&2064)!==0&&$!==null)$.return=M,ke=$;else e:for(M=V;ke!==null;){if(I=ke,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:No(9,I)}}catch(He){Ht(I,I.return,He)}if(I===M){ke=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,ke=Te;break e}ke=I.return}}if(ht=d,ir(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(st,n)}catch{}u=!0}return u}finally{Mt=a,Yn.transition=i}}return!1}function Gh(n,i,a){i=gs(a,i),i=oh(n,i,1),n=sr(n,i,1),i=Mn(),n!==null&&(na(n,1,i),Ln(n,i))}function Ht(n,i,a){if(n.tag===3)Gh(n,n,a);else for(;i!==null;){if(i.tag===3){Gh(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(or===null||!or.has(u))){n=gs(a,n),n=lh(i,n,1),i=sr(i,n,1),n=Mn(),i!==null&&(na(i,1,n),Ln(i,n));break}}i=i.return}}function yv(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Mn(),n.pingedLanes|=n.suspendedLanes&a,sn===n&&(cn&a)===a&&(Qt===4||Qt===3&&(cn&130023424)===cn&&500>Oe()-ac?Nr(n,0):sc|=a),Ln(n,i)}function Wh(n,i){i===0&&((n.mode&1)===0?i=1:(i=Vn,Vn<<=1,(Vn&130023424)===0&&(Vn=4194304)));var a=Mn();n=Ri(n,i),n!==null&&(na(n,i,a),Ln(n,a))}function Sv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Wh(n,a)}function Mv(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Wh(n,a)}var jh;jh=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||bn.current)Cn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Cn=!1,uv(n,i,a);Cn=(n.flags&131072)!==0}else Cn=!1,Dt&&(i.flags&1048576)!==0&&wf(i,go,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Lo(n,i),n=i.pendingProps;var d=ls(i,hn.current);ps(i,a),d=Fu(null,i,u,n,d,a);var p=ku();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(u)?(p=!0,ho(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Pu(i),d.updater=Co,i.stateNode=d,d._reactInternals=i,Wu(i,u,n,a),i=qu(null,i,u,!0,p,a)):(i.tag=0,Dt&&p&&yu(i),Sn(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Lo(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=wv(u),n=ri(u,n),d){case 0:i=Yu(null,i,u,n,a);break e;case 1:i=vh(null,i,u,n,a);break e;case 11:i=fh(null,i,u,n,a);break e;case 14:i=hh(null,i,u,ri(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),Yu(n,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),vh(n,i,u,d,a);case 3:e:{if(_h(i),n===null)throw Error(t(387));u=i.pendingProps,p=i.memoizedState,d=p.element,Nf(n,i),Mo(i,u,null,a);var M=i.memoizedState;if(u=M.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=gs(Error(t(423)),i),i=xh(n,i,u,a,d);break e}else if(u!==d){d=gs(Error(t(424)),i),i=xh(n,i,u,a,d);break e}else for(Fn=er(i.stateNode.containerInfo.firstChild),On=i,Dt=!0,ii=null,a=Lf(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ds(),u===d){i=Pi(n,i,a);break e}Sn(n,i,u,a)}i=i.child}return i;case 5:return Of(i),n===null&&Eu(i),u=i.type,d=i.pendingProps,p=n!==null?n.memoizedProps:null,M=d.children,pu(u,d)?M=null:p!==null&&pu(u,p)&&(i.flags|=32),gh(n,i),Sn(n,i,M,a),i.child;case 6:return n===null&&Eu(i),null;case 13:return yh(n,i,a);case 4:return Lu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=fs(i,null,u,a):Sn(n,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),fh(n,i,u,d,a);case 7:return Sn(n,i,i.pendingProps,a),i.child;case 8:return Sn(n,i,i.pendingProps.children,a),i.child;case 12:return Sn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,p=i.memoizedProps,M=d.value,At(xo,u._currentValue),u._currentValue=M,p!==null)if(ni(p.value,M)){if(p.children===d.children&&!bn.current){i=Pi(n,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var I=p.dependencies;if(I!==null){M=p.child;for(var B=I.firstContext;B!==null;){if(B.context===u){if(p.tag===1){B=Ci(-1,a&-a),B.tag=2;var ee=p.updateQueue;if(ee!==null){ee=ee.shared;var ve=ee.pending;ve===null?B.next=B:(B.next=ve.next,ve.next=B),ee.pending=B}}p.lanes|=a,B=p.alternate,B!==null&&(B.lanes|=a),Ru(p.return,a,i),I.lanes|=a;break}B=B.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(t(341));M.lanes|=a,I=M.alternate,I!==null&&(I.lanes|=a),Ru(M,a,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}Sn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,ps(i,a),d=jn(d),u=u(d),i.flags|=1,Sn(n,i,u,a),i.child;case 14:return u=i.type,d=ri(u,i.pendingProps),d=ri(u.type,d),hh(n,i,u,d,a);case 15:return ph(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:ri(u,d),Lo(n,i),i.tag=1,Rn(u)?(n=!0,ho(i)):n=!1,ps(i,a),sh(i,u,d),Wu(i,u,d,a),qu(null,i,u,!0,n,a);case 19:return Mh(n,i,a);case 22:return mh(n,i,a)}throw Error(t(156,i.tag))};function Xh(n,i){return Xe(n,i)}function Ev(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(n,i,a,u){return new Ev(n,i,a,u)}function pc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function wv(n){if(typeof n=="function")return pc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ce)return 11;if(n===ne)return 14}return 2}function dr(n,i){var a=n.alternate;return a===null?(a=qn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Vo(n,i,a,u,d,p){var M=2;if(u=n,typeof n=="function")pc(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case L:return Ir(a.children,d,p,i);case J:M=8,d|=8;break;case b:return n=qn(12,a,i,d|2),n.elementType=b,n.lanes=p,n;case q:return n=qn(13,a,i,d),n.elementType=q,n.lanes=p,n;case re:return n=qn(19,a,i,d),n.elementType=re,n.lanes=p,n;case ae:return Go(a,d,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case U:M=10;break e;case de:M=9;break e;case ce:M=11;break e;case ne:M=14;break e;case he:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=qn(M,a,i,d),i.elementType=n,i.type=u,i.lanes=p,i}function Ir(n,i,a,u){return n=qn(7,n,u,i),n.lanes=a,n}function Go(n,i,a,u){return n=qn(22,n,u,i),n.elementType=ae,n.lanes=a,n.stateNode={isHidden:!1},n}function mc(n,i,a){return n=qn(6,n,null,i),n.lanes=a,n}function gc(n,i,a){return i=qn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Tv(n,i,a,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gl(0),this.expirationTimes=Gl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gl(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function vc(n,i,a,u,d,p,M,I,B){return n=new Tv(n,i,a,I,B),i===1?(i=1,p===!0&&(i|=8)):i=0,p=qn(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pu(p),n}function Av(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Yh(n){if(!n)return nr;n=n._reactInternals;e:{if(P(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Rn(a))return Sf(n,a,i)}return i}function qh(n,i,a,u,d,p,M,I,B){return n=vc(a,u,!0,n,d,p,M,I,B),n.context=Yh(null),a=n.current,u=Mn(),d=ur(a),p=Ci(u,d),p.callback=i??null,sr(a,p,d),n.current.lanes=d,na(n,d,u),Ln(n,u),n}function Wo(n,i,a,u){var d=i.current,p=Mn(),M=ur(d);return a=Yh(a),i.context===null?i.context=a:i.pendingContext=a,i=Ci(p,M),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=sr(d,i,M),n!==null&&(oi(n,d,M,p),So(n,d,M)),M}function jo(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function $h(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function _c(n,i){$h(n,i),(n=n.alternate)&&$h(n,i)}function bv(){return null}var Kh=typeof reportError=="function"?reportError:function(n){console.error(n)};function xc(n){this._internalRoot=n}Xo.prototype.render=xc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Wo(n,i,null,null)},Xo.prototype.unmount=xc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Dr(function(){Wo(null,n,null,null)}),i[wi]=null}};function Xo(n){this._internalRoot=n}Xo.prototype.unstable_scheduleHydration=function(n){if(n){var i=Dd();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Zi.length&&i!==0&&i<Zi[a].priority;a++);Zi.splice(a,0,n),a===0&&Id(n)}};function yc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Yo(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Zh(){}function Rv(n,i,a,u,d){if(d){if(typeof u=="function"){var p=u;u=function(){var ee=jo(M);p.call(ee)}}var M=qh(i,u,n,0,null,!1,!1,"",Zh);return n._reactRootContainer=M,n[wi]=M.current,ga(n.nodeType===8?n.parentNode:n),Dr(),M}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var I=u;u=function(){var ee=jo(B);I.call(ee)}}var B=vc(n,0,!1,null,null,!1,!1,"",Zh);return n._reactRootContainer=B,n[wi]=B.current,ga(n.nodeType===8?n.parentNode:n),Dr(function(){Wo(i,B,a,u)}),B}function qo(n,i,a,u,d){var p=a._reactRootContainer;if(p){var M=p;if(typeof d=="function"){var I=d;d=function(){var B=jo(M);I.call(B)}}Wo(i,M,n,d)}else M=Rv(a,i,n,d,u);return jo(M)}Pd=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ei(i.pendingLanes);a!==0&&(Wl(i,a|1),Ln(i,Oe()),(ht&6)===0&&(xs=Oe()+500,ir()))}break;case 13:Dr(function(){var u=Ri(n,1);if(u!==null){var d=Mn();oi(u,n,1,d)}}),_c(n,1)}},jl=function(n){if(n.tag===13){var i=Ri(n,134217728);if(i!==null){var a=Mn();oi(i,n,134217728,a)}_c(n,134217728)}},Ld=function(n){if(n.tag===13){var i=ur(n),a=Ri(n,i);if(a!==null){var u=Mn();oi(a,n,i,u)}_c(n,i)}},Dd=function(){return Mt},Nd=function(n,i){var a=Mt;try{return Mt=n,i()}finally{Mt=a}},Pe=function(n,i,a){switch(i){case"input":if(xt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var d=co(u);if(!d)throw Error(t(90));Z(u),xt(u,d)}}}break;case"textarea":T(n,a);break;case"select":i=a.value,i!=null&&wt(n,!!a.multiple,i,!1)}},yt=dc,fn=Dr;var Cv={usingClientEntryPoint:!1,Events:[xa,as,co,at,pt,dc]},Na={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Pv={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ue(n),n===null?null:n.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||bv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$o.isDisabled&&$o.supportsFiber)try{st=$o.inject(Pv),An=$o}catch{}}return Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cv,Dn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yc(i))throw Error(t(200));return Av(n,i,null,a)},Dn.createRoot=function(n,i){if(!yc(n))throw Error(t(299));var a=!1,u="",d=Kh;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=vc(n,1,!1,null,null,a,!1,u,d),n[wi]=i.current,ga(n.nodeType===8?n.parentNode:n),new xc(i)},Dn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ue(i),n=n===null?null:n.stateNode,n},Dn.flushSync=function(n){return Dr(n)},Dn.hydrate=function(n,i,a){if(!Yo(i))throw Error(t(200));return qo(null,n,i,!0,a)},Dn.hydrateRoot=function(n,i,a){if(!yc(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,p="",M=Kh;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),i=qh(i,null,n,1,a??null,d,!1,p,M),n[wi]=i.current,ga(n),u)for(n=0;n<u.length;n++)a=u[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Xo(i)},Dn.render=function(n,i,a){if(!Yo(i))throw Error(t(200));return qo(null,n,i,!1,a)},Dn.unmountComponentAtNode=function(n){if(!Yo(n))throw Error(t(40));return n._reactRootContainer?(Dr(function(){qo(null,null,n,!1,function(){n._reactRootContainer=null,n[wi]=null})}),!0):!1},Dn.unstable_batchedUpdates=dc,Dn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!Yo(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return qo(n,i,a,!1,u)},Dn.version="18.3.1-next-f1338f8080-20240426",Dn}var sp;function zv(){if(sp)return Ec.exports;sp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ec.exports=kv(),Ec.exports}var ap;function Bv(){if(ap)return Ko;ap=1;var s=zv();return Ko.createRoot=s.createRoot,Ko.hydrateRoot=s.hydrateRoot,Ko}var Hv=Bv();const Vv=jm(Hv);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Wv(s,e,t=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Gv(s),size:24,node:e,...t.length>0?{aliases:t}:{}}}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=s=>{let e="",t=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){t=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=t?r.toUpperCase():r,t=!1}return e};/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=s=>{const e=jv(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Ac(s){return s!=null}function Yv(s,e={}){var _,S;const t=e.attributeNames??{},r=E=>t[E]??E,o=s.size??s.width??Or.width,l=s.size??s.height??Or.height,f=((_=s.aliases)==null?void 0:_.filter(E=>typeof E=="string"&&E.trim()!=="").map(E=>`lucide-${E}`))??[],c=[...s.name?[`lucide-${s.name}`]:[],...f],h=((S=e.className)==null?void 0:S.split(" ").filter(Boolean))??[],m=e.includeDefaultClasses===!1?od(...h):od("lucide",...c,...h),g=e.absoluteStrokeWidth?Number(e.strokeWidth??Or["stroke-width"])*Number(s.size??s.width??Or.width)/Number(e.size??e.width??Or.width):e.strokeWidth??Or["stroke-width"];return["svg",{...Object.entries(Or).reduce((E,[w,x])=>(E[r(w)]=x,E),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Ac(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Ac(e.width)&&{[r("width")]:e.width},..."height"in e&&Ac(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:g,...m&&{[r("class")]:m},[r("viewBox")]:`0 0 ${o} ${l}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(E=>{const[w,x,v]=E,O=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...x}:x;return v?[w,O,v]:[w,O]})]}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function qv(s,e={}){return Yv(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},Kv=_t.createContext({}),Zv=()=>_t.useContext(Kv),Qv=_t.forwardRef(({color:s,size:e,width:t,height:r,strokeWidth:o,absoluteStrokeWidth:l,nonScalingStroke:f,className:c="",children:h,iconNode:m=[],icon:g={node:m,aliases:[],size:24},...y},_)=>{const{size:S=24,strokeWidth:E=2,absoluteStrokeWidth:w=!1,nonScalingStroke:x=!1,color:v="currentColor",className:O=""}=Zv()??{},C=!!h||$v(y),[R,D,k=[]]=qv(g,{color:s??v,width:t??e??S,height:r??e??S,strokeWidth:o??E,absoluteStrokeWidth:l??w,nonScalingStroke:f??x,className:od(O,c),hasA11yProp:C,attributes:y});return _t.createElement(R,{ref:_,...D},[...k.map(([L,J])=>_t.createElement(L,J)),...Array.isArray(h)?h:[h]])});/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function $t(s,e=[],t=[]){const r=typeof s=="string"?Wv(s,e,t):s,o=_t.forwardRef(({className:l,...f},c)=>_t.createElement(Qv,{ref:c,icon:r,className:l,...f}));return r.name&&(o.displayName=Xv(r.name)),o}/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};Xm.node;const Jv=$t(Xm);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};Ym.node;const e_=$t(Ym);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};qm.node;const t_=$t(qm);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};$m.node;const op=$t($m);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};Km.node;const n_=$t(Km);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};Zm.node;const i_=$t(Zm);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qm={name:"copy",size:24,node:[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]};Qm.node;const lp=$t(Qm);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jm={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};Jm.node;const Al=$t(Jm);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg={name:"external-link",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]};eg.node;const r_=$t(eg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};tg.node;const s_=$t(tg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng={name:"image",size:24,node:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]};ng.node;const a_=$t(ng);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};ig.node;const o_=$t(ig);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};rg.node;const l_=$t(rg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};sg.node;const u_=$t(sg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};ag.node;const c_=$t(ag);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og={name:"rotate-ccw-clock",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],aliases:["history"]};og.node;const up=$t(og);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};lg.node;const d_=$t(lg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};ug.node;const f_=$t(ug);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg={name:"shield",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]};cg.node;const cp=$t(cg);/**
 * @license lucide-react v1.43.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};dg.node;const h_=$t(dg);function dp(s){return s.length!==32?s:`${s.slice(0,8)}-${s.slice(8,12)}-${s.slice(12,16)}-${s.slice(16,20)}-${s.slice(20)}`}function fp(s){return s.replace(/-/g,"").toLowerCase()}function hp(s){try{const e=new Date(s);return isNaN(e.getTime())?String(s):e.toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})}catch{return String(s)}}function p_(s){return new Promise(e=>{const t=new Image,r=`https://optifine.net/capes/${encodeURIComponent(s)}.png`;t.onload=()=>{t.naturalWidth>0&&t.naturalHeight>0?e(r):e(null)},t.onerror=()=>e(null),t.src=r,setTimeout(()=>e(null),2500)})}async function m_(s){var o,l,f,c,h,m,g,y,_,S,E,w,x,v,O,C,R,D;const e=s.trim();if(!e)throw new Error("Please enter a player username or UUID");let t=null,r="";try{const k=await fetch(`https://api.ashcon.app/mojang/v2/user/${encodeURIComponent(e)}`,{headers:{Accept:"application/json"},signal:AbortSignal.timeout(5e3)});if(k.status===404)throw new Error(`Player "${e}" not found`);if(k.ok){const L=await k.json(),J=fp(L.uuid),b=dp(J),U=(o=L.textures)!=null&&o.slim?"slim":"classic",de=Array.isArray(L.username_history)?L.username_history.map((q,re)=>({username:q.username,changedAtDate:q.changed_at?hp(q.changed_at):void 0,isOriginal:re===0})):[{username:L.username,isOriginal:!0}],ce=[];(f=(l=L.textures)==null?void 0:l.cape)!=null&&f.url&&ce.push({id:"mojang",name:"Official Mojang Cape",provider:"Mojang",textureUrl:L.textures.cape.data?`data:image/png;base64,${L.textures.cape.data}`:L.textures.cape.url,previewUrl:L.textures.cape.url}),t={username:L.username,uuid:b,rawId:J,model:U,createdAt:L.created_at?hp(L.created_at):null,textures:{skinUrl:((h=(c=L.textures)==null?void 0:c.skin)==null?void 0:h.url)||`https://crafthead.net/skin/${b}`,skinDataUri:(g=(m=L.textures)==null?void 0:m.skin)!=null&&g.data?`data:image/png;base64,${L.textures.skin.data}`:void 0,capeUrl:((_=(y=L.textures)==null?void 0:y.cape)==null?void 0:_.url)||null,capeDataUri:(E=(S=L.textures)==null?void 0:S.cape)!=null&&E.data?`data:image/png;base64,${L.textures.cape.data}`:null,isCustomSkin:!!((w=L.textures)!=null&&w.custom)},nameHistory:de,capes:ce,cachedAt:Date.now()}}}catch(k){r=k instanceof Error?k.message:"Failed to reach Mojang service"}if(!t)try{const k=await fetch(`https://playerdb.co/api/player/minecraft/${encodeURIComponent(e)}`,{signal:AbortSignal.timeout(5e3)});if(k.status===404)throw new Error(`Player "${e}" not found`);const L=await k.json();if(L.success&&((x=L.data)!=null&&x.player)){const J=L.data.player,b=J.raw_id||fp(J.id),U=J.id||dp(b);let de="classic",ce=J.cape_texture||null;if(Array.isArray(J.properties)){const re=J.properties.find(ne=>ne.name==="textures");if(re&&re.value)try{const ne=JSON.parse(atob(re.value));((C=(O=(v=ne.textures)==null?void 0:v.SKIN)==null?void 0:O.metadata)==null?void 0:C.model)==="slim"&&(de="slim"),(D=(R=ne.textures)==null?void 0:R.CAPE)!=null&&D.url&&(ce=ne.textures.CAPE.url)}catch{}}const q=[];ce&&q.push({id:"mojang",name:"Official Mojang Cape",provider:"Mojang",textureUrl:ce,previewUrl:ce}),t={username:J.username,uuid:U,rawId:b,model:de,createdAt:null,textures:{skinUrl:J.skin_texture||`https://crafthead.net/skin/${U}`,capeUrl:ce,isCustomSkin:!0},nameHistory:[{username:J.username,isOriginal:!0}],capes:q,cachedAt:Date.now()}}else throw new Error(L.message||`Player "${e}" not found`)}catch(k){r||(r=k instanceof Error?k.message:"Error fetching player")}if(!t)throw new Error(r||`Player "${e}" not found. Please check spelling.`);try{const k=await p_(t.username);k&&t.capes.push({id:"optifine",name:"OptiFine Cape",provider:"OptiFine",textureUrl:k,previewUrl:k})}catch{}return t}const g_=["Technoblade","Notch","MumboJumbo","Grian","jeb_","Dream"],v_=({onSearch:s,isLoading:e,recentSearches:t,onClearRecent:r})=>{const[o,l]=_t.useState(""),f=h=>{h.preventDefault(),o.trim()&&s(o.trim())},c=h=>{l(h),s(h)};return X.jsxs("div",{className:"w-full max-w-2xl mx-auto space-y-3",children:[X.jsxs("form",{onSubmit:f,className:"relative flex items-center",children:[X.jsx("div",{className:"absolute left-3.5 text-slate-400 pointer-events-none",children:X.jsx(f_,{className:"w-4 h-4"})}),X.jsx("input",{type:"text",value:o,onChange:h=>l(h.target.value),placeholder:"Player username or UUID",autoFocus:!0,className:"w-full pl-10 pr-24 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm shadow-xs focus:outline-none focus:border-slate-400 focus:ring-2 focus:ring-slate-100 transition-all font-sans"}),X.jsxs("div",{className:"absolute right-2 flex items-center gap-1",children:[o&&X.jsx("button",{type:"button",onClick:()=>l(""),className:"p-1 text-slate-400 hover:text-slate-600 rounded-md",children:X.jsx(h_,{className:"w-4 h-4"})}),X.jsxs("button",{type:"submit",disabled:e||!o.trim(),className:"inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-medium hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",children:[e?"Searching...":"Search",!e&&X.jsx(Jv,{className:"w-3.5 h-3.5"})]})]})]}),X.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 text-xs",children:[X.jsx("span",{className:"text-slate-400 font-medium mr-1",children:"Popular:"}),g_.map(h=>X.jsx("button",{onClick:()=>c(h),className:"px-2.5 py-1 bg-white hover:bg-slate-100 border border-slate-200 rounded-md text-slate-600 font-medium transition-colors cursor-pointer",children:h},h)),t.length>0&&X.jsxs(X.Fragment,{children:[X.jsx("span",{className:"text-slate-300 mx-1",children:"|"}),X.jsx("div",{className:"inline-flex items-center gap-1 text-slate-400",children:X.jsx(i_,{className:"w-3 h-3"})}),t.slice(0,4).map(h=>X.jsx("button",{onClick:()=>c(h),className:"px-2 py-0.5 bg-slate-100 hover:bg-slate-200 rounded text-slate-500 font-medium transition-colors",children:h},h)),X.jsx("button",{onClick:r,title:"Clear recent",className:"text-slate-400 hover:text-slate-600 text-[11px] underline ml-1",children:"Clear"})]})]})]})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yd="156",Ss={ROTATE:0,DOLLY:1,PAN:2},Ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},__=0,pp=1,x_=2,fg=1,y_=2,ki=3,yi=0,Nn=1,ei=2,Vi=0,js=1,mp=2,gp=3,vp=4,S_=5,Gs=100,M_=101,E_=102,_p=103,xp=104,w_=200,T_=201,A_=202,b_=203,hg=204,pg=205,R_=206,C_=207,P_=208,L_=209,D_=210,N_=0,U_=1,I_=2,ld=3,O_=4,F_=5,k_=6,z_=7,mg=0,B_=1,H_=2,xr=0,V_=1,G_=2,W_=3,j_=4,X_=5,gg=300,Ys=301,qs=302,bl=303,ud=304,Ll=306,cd=1e3,di=1001,dd=1002,kt=1003,yp=1004,bc=1005,Qn=1006,Y_=1007,ja=1008,yr=1009,q_=1010,$_=1011,Sd=1012,vg=1013,_r=1014,Bi=1015,$s=1016,_g=1017,xg=1018,Wr=1020,K_=1021,fi=1023,Z_=1024,Q_=1025,jr=1026,Ks=1027,J_=1028,yg=1029,ex=1030,Sg=1031,Mg=1033,Rc=33776,Cc=33777,Pc=33778,Lc=33779,Sp=35840,Mp=35841,Ep=35842,wp=35843,tx=36196,Tp=37492,Ap=37496,bp=37808,Rp=37809,Cp=37810,Pp=37811,Lp=37812,Dp=37813,Np=37814,Up=37815,Ip=37816,Op=37817,Fp=37818,kp=37819,zp=37820,Bp=37821,Dc=36492,Hp=36494,Vp=36495,nx=36283,Gp=36284,Wp=36285,jp=36286,Eg=3e3,Xr=3001,ix=3200,rx=3201,wg=0,sx=1,Yr="",Nt="srgb",Si="srgb-linear",Dl="display-p3",Nc=7680,ax=519,ox=512,lx=513,ux=514,cx=515,dx=516,fx=517,hx=518,px=519,fd=35044,Xp="300 es",hd=1035,Hi=2e3,Rl=2001;class $r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,f=o.length;l<f;l++)o[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],El=Math.PI/180,pd=180/Math.PI;function Sr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function Tn(s,e,t){return Math.max(e,Math.min(t,s))}function mx(s,e){return(s%e+e)%e}function Uc(s,e,t){return(1-t)*s+t*e}function Yp(s){return(s&s-1)===0&&s!==0}function md(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function zi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const gx={DEG2RAD:El};class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,f=this.y-e.y;return this.x=l*r-f*o+e.x,this.y=l*o+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,t,r,o,l,f,c,h,m){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,f,c,h,m)}set(e,t,r,o,l,f,c,h,m){const g=this.elements;return g[0]=e,g[1]=o,g[2]=c,g[3]=t,g[4]=l,g[5]=h,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,f=r[0],c=r[3],h=r[6],m=r[1],g=r[4],y=r[7],_=r[2],S=r[5],E=r[8],w=o[0],x=o[3],v=o[6],O=o[1],C=o[4],R=o[7],D=o[2],k=o[5],L=o[8];return l[0]=f*w+c*O+h*D,l[3]=f*x+c*C+h*k,l[6]=f*v+c*R+h*L,l[1]=m*w+g*O+y*D,l[4]=m*x+g*C+y*k,l[7]=m*v+g*R+y*L,l[2]=_*w+S*O+E*D,l[5]=_*x+S*C+E*k,l[8]=_*v+S*R+E*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],f=e[4],c=e[5],h=e[6],m=e[7],g=e[8];return t*f*g-t*c*m-r*l*g+r*c*h+o*l*m-o*f*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],f=e[4],c=e[5],h=e[6],m=e[7],g=e[8],y=g*f-c*m,_=c*h-g*l,S=m*l-f*h,E=t*y+r*_+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=y*w,e[1]=(o*m-g*r)*w,e[2]=(c*r-o*f)*w,e[3]=_*w,e[4]=(g*t-o*h)*w,e[5]=(o*l-c*t)*w,e[6]=S*w,e[7]=(r*h-m*t)*w,e[8]=(f*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,f,c){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*f+m*c)+f+e,-o*m,o*h,-o*(-m*f+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Ic.makeScale(e,t)),this}rotate(e){return this.premultiply(Ic.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ic=new ft;function Tg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Cl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vx(){const s=Cl("canvas");return s.style.display="block",s}const qp={};function Wa(s){s in qp||(qp[s]=!0,console.warn(s))}function Xs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Oc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const _x=new ft().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),xx=new ft().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function yx(s){return s.convertSRGBToLinear().applyMatrix3(xx)}function Sx(s){return s.applyMatrix3(_x).convertLinearToSRGB()}const Mx={[Si]:s=>s,[Nt]:s=>s.convertSRGBToLinear(),[Dl]:yx},Ex={[Si]:s=>s,[Nt]:s=>s.convertLinearToSRGB(),[Dl]:Sx},Zn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(s){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!s},get workingColorSpace(){return Si},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const r=Mx[e],o=Ex[t];if(r===void 0||o===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return o(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}};let Es;class Ag{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Es===void 0&&(Es=Cl("canvas")),Es.width=e.width,Es.height=e.height;const r=Es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Es}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let f=0;f<l.length;f++)l[f]=Xs(l[f]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Xs(t[r]/255)*255):t[r]=Xs(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wx=0;class bg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=Sr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let f=0,c=o.length;f<c;f++)o[f].isDataTexture?l.push(Fc(o[f].image)):l.push(Fc(o[f]))}else l=Fc(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Fc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ag.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tx=0;class xn extends $r{constructor(e=xn.DEFAULT_IMAGE,t=xn.DEFAULT_MAPPING,r=di,o=di,l=Qn,f=ja,c=fi,h=yr,m=xn.DEFAULT_ANISOTROPY,g=Yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=Sr(),this.name="",this.source=new bg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=f,this.anisotropy=m,this.format=c,this.internalFormat=null,this.type=h,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===Xr?Nt:Yr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cd:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cd:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Nt?Xr:Eg}set encoding(e){Wa("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Xr?Nt:Yr}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=gg;xn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,r=0,o=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,f=e.elements;return this.x=f[0]*t+f[4]*r+f[8]*o+f[12]*l,this.y=f[1]*t+f[5]*r+f[9]*o+f[13]*l,this.z=f[2]*t+f[6]*r+f[10]*o+f[14]*l,this.w=f[3]*t+f[7]*r+f[11]*o+f[15]*l,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,m=h[0],g=h[4],y=h[8],_=h[1],S=h[5],E=h[9],w=h[2],x=h[6],v=h[10];if(Math.abs(g-_)<.01&&Math.abs(y-w)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+_)<.1&&Math.abs(y+w)<.1&&Math.abs(E+x)<.1&&Math.abs(m+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(m+1)/2,R=(S+1)/2,D=(v+1)/2,k=(g+_)/4,L=(y+w)/4,J=(E+x)/4;return C>R&&C>D?C<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(C),o=k/r,l=L/r):R>D?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=k/o,l=J/o):D<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(D),r=L/l,o=J/l),this.set(r,o,l,t),this}let O=Math.sqrt((x-E)*(x-E)+(y-w)*(y-w)+(_-g)*(_-g));return Math.abs(O)<.001&&(O=1),this.x=(x-E)/O,this.y=(y-w)/O,this.z=(_-g)/O,this.w=Math.acos((m+S+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ax extends $r{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const o={width:e,height:t,depth:1};r.encoding!==void 0&&(Wa("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Xr?Nt:Yr),this.texture=new xn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Qn,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends Ax{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Rg extends xn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=kt,this.minFilter=kt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bx extends xn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=kt,this.minFilter=kt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qr{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,f,c){let h=r[o+0],m=r[o+1],g=r[o+2],y=r[o+3];const _=l[f+0],S=l[f+1],E=l[f+2],w=l[f+3];if(c===0){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=y;return}if(c===1){e[t+0]=_,e[t+1]=S,e[t+2]=E,e[t+3]=w;return}if(y!==w||h!==_||m!==S||g!==E){let x=1-c;const v=h*_+m*S+g*E+y*w,O=v>=0?1:-1,C=1-v*v;if(C>Number.EPSILON){const D=Math.sqrt(C),k=Math.atan2(D,v*O);x=Math.sin(x*k)/D,c=Math.sin(c*k)/D}const R=c*O;if(h=h*x+_*R,m=m*x+S*R,g=g*x+E*R,y=y*x+w*R,x===1-c){const D=1/Math.sqrt(h*h+m*m+g*g+y*y);h*=D,m*=D,g*=D,y*=D}}e[t]=h,e[t+1]=m,e[t+2]=g,e[t+3]=y}static multiplyQuaternionsFlat(e,t,r,o,l,f){const c=r[o],h=r[o+1],m=r[o+2],g=r[o+3],y=l[f],_=l[f+1],S=l[f+2],E=l[f+3];return e[t]=c*E+g*y+h*S-m*_,e[t+1]=h*E+g*_+m*y-c*S,e[t+2]=m*E+g*S+c*_-h*y,e[t+3]=g*E-c*y-h*_-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const r=e._x,o=e._y,l=e._z,f=e._order,c=Math.cos,h=Math.sin,m=c(r/2),g=c(o/2),y=c(l/2),_=h(r/2),S=h(o/2),E=h(l/2);switch(f){case"XYZ":this._x=_*g*y+m*S*E,this._y=m*S*y-_*g*E,this._z=m*g*E+_*S*y,this._w=m*g*y-_*S*E;break;case"YXZ":this._x=_*g*y+m*S*E,this._y=m*S*y-_*g*E,this._z=m*g*E-_*S*y,this._w=m*g*y+_*S*E;break;case"ZXY":this._x=_*g*y-m*S*E,this._y=m*S*y+_*g*E,this._z=m*g*E+_*S*y,this._w=m*g*y-_*S*E;break;case"ZYX":this._x=_*g*y-m*S*E,this._y=m*S*y+_*g*E,this._z=m*g*E-_*S*y,this._w=m*g*y+_*S*E;break;case"YZX":this._x=_*g*y+m*S*E,this._y=m*S*y+_*g*E,this._z=m*g*E-_*S*y,this._w=m*g*y-_*S*E;break;case"XZY":this._x=_*g*y-m*S*E,this._y=m*S*y-_*g*E,this._z=m*g*E+_*S*y,this._w=m*g*y+_*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],f=t[1],c=t[5],h=t[9],m=t[2],g=t[6],y=t[10],_=r+c+y;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-m)*S,this._z=(f-o)*S}else if(r>c&&r>y){const S=2*Math.sqrt(1+r-c-y);this._w=(g-h)/S,this._x=.25*S,this._y=(o+f)/S,this._z=(l+m)/S}else if(c>y){const S=2*Math.sqrt(1+c-r-y);this._w=(l-m)/S,this._x=(o+f)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+y-r-c);this._w=(f-o)/S,this._x=(l+m)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,f=e._w,c=t._x,h=t._y,m=t._z,g=t._w;return this._x=r*g+f*c+o*m-l*h,this._y=o*g+f*h+l*c-r*m,this._z=l*g+f*m+r*h-o*c,this._w=f*g-r*c-o*h-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,f=this._w;let c=f*e._w+r*e._x+o*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=f,this._x=r,this._y=o,this._z=l,this;const h=1-c*c;if(h<=Number.EPSILON){const S=1-t;return this._w=S*f+t*this._w,this._x=S*r+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this._onChangeCallback(),this}const m=Math.sqrt(h),g=Math.atan2(m,c),y=Math.sin((1-t)*g)/m,_=Math.sin(t*g)/m;return this._w=f*y+this._w*_,this._x=r*y+this._x*_,this._y=o*y+this._y*_,this._z=l*y+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),o=2*Math.PI*Math.random(),l=2*Math.PI*Math.random();return this.set(t*Math.cos(o),r*Math.sin(l),r*Math.cos(l),t*Math.sin(o))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,r=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($p.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($p.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,f=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*f,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*f,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*f,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,f=e.y,c=e.z,h=e.w,m=h*t+f*o-c*r,g=h*r+c*t-l*o,y=h*o+l*r-f*t,_=-l*t-f*r-c*o;return this.x=m*h+_*-l+g*-c-y*-f,this.y=g*h+_*-f+y*-l-m*-c,this.z=y*h+_*-c+m*-f-g*-l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,f=t.x,c=t.y,h=t.z;return this.x=o*h-l*c,this.y=l*f-r*h,this.z=r*c-o*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return kc.copy(this).projectOnVector(e),this.sub(kc)}reflect(e){return this.sub(kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kc=new W,$p=new qr;class Ya{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ws.copy(e.boundingBox),ws.applyMatrix4(e.matrixWorld),this.union(ws);else{const o=e.geometry;if(o!==void 0)if(t&&o.attributes!==void 0&&o.attributes.position!==void 0){const l=o.attributes.position;for(let f=0,c=l.count;f<c;f++)Ni.fromBufferAttribute(l,f).applyMatrix4(e.matrixWorld),this.expandByPoint(Ni)}else o.boundingBox===null&&o.computeBoundingBox(),ws.copy(o.boundingBox),ws.applyMatrix4(e.matrixWorld),this.union(ws)}const r=e.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ia),Zo.subVectors(this.max,Ia),Ts.subVectors(e.a,Ia),As.subVectors(e.b,Ia),bs.subVectors(e.c,Ia),hr.subVectors(As,Ts),pr.subVectors(bs,As),Fr.subVectors(Ts,bs);let t=[0,-hr.z,hr.y,0,-pr.z,pr.y,0,-Fr.z,Fr.y,hr.z,0,-hr.x,pr.z,0,-pr.x,Fr.z,0,-Fr.x,-hr.y,hr.x,0,-pr.y,pr.x,0,-Fr.y,Fr.x,0];return!zc(t,Ts,As,bs,Zo)||(t=[1,0,0,0,1,0,0,0,1],!zc(t,Ts,As,bs,Zo))?!1:(Qo.crossVectors(hr,pr),t=[Qo.x,Qo.y,Qo.z],zc(t,Ts,As,bs,Zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new W,new W,new W,new W,new W,new W,new W,new W],Ni=new W,ws=new Ya,Ts=new W,As=new W,bs=new W,hr=new W,pr=new W,Fr=new W,Ia=new W,Zo=new W,Qo=new W,kr=new W;function zc(s,e,t,r,o){for(let l=0,f=s.length-3;l<=f;l+=3){kr.fromArray(s,l);const c=o.x*Math.abs(kr.x)+o.y*Math.abs(kr.y)+o.z*Math.abs(kr.z),h=e.dot(kr),m=t.dot(kr),g=r.dot(kr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>c)return!1}return!0}const Rx=new Ya,Oa=new W,Bc=new W;class Md{constructor(e=new W,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Rx.setFromPoints(e).getCenter(r);let o=0;for(let l=0,f=e.length;l<f;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);const t=Oa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Oa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(Bc)),this.expandByPoint(Oa.copy(e.center).sub(Bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new W,Hc=new W,Jo=new W,mr=new W,Vc=new W,el=new W,Gc=new W;class Cg{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Hc.copy(e).add(t).multiplyScalar(.5),Jo.copy(t).sub(e).normalize(),mr.copy(this.origin).sub(Hc);const l=e.distanceTo(t)*.5,f=-this.direction.dot(Jo),c=mr.dot(this.direction),h=-mr.dot(Jo),m=mr.lengthSq(),g=Math.abs(1-f*f);let y,_,S,E;if(g>0)if(y=f*h-c,_=f*c-h,E=l*g,y>=0)if(_>=-E)if(_<=E){const w=1/g;y*=w,_*=w,S=y*(y+f*_+2*c)+_*(f*y+_+2*h)+m}else _=l,y=Math.max(0,-(f*_+c)),S=-y*y+_*(_+2*h)+m;else _=-l,y=Math.max(0,-(f*_+c)),S=-y*y+_*(_+2*h)+m;else _<=-E?(y=Math.max(0,-(-f*l+c)),_=y>0?-l:Math.min(Math.max(-l,-h),l),S=-y*y+_*(_+2*h)+m):_<=E?(y=0,_=Math.min(Math.max(-l,-h),l),S=_*(_+2*h)+m):(y=Math.max(0,-(f*l+c)),_=y>0?l:Math.min(Math.max(-l,-h),l),S=-y*y+_*(_+2*h)+m);else _=f>0?-l:l,y=Math.max(0,-(f*_+c)),S=-y*y+_*(_+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(Hc).addScaledVector(Jo,_),S}intersectSphere(e,t){Ui.subVectors(e.center,this.origin);const r=Ui.dot(this.direction),o=Ui.dot(Ui)-r*r,l=e.radius*e.radius;if(o>l)return null;const f=Math.sqrt(l-o),c=r-f,h=r+f;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,f,c,h;const m=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,_=this.origin;return m>=0?(r=(e.min.x-_.x)*m,o=(e.max.x-_.x)*m):(r=(e.max.x-_.x)*m,o=(e.min.x-_.x)*m),g>=0?(l=(e.min.y-_.y)*g,f=(e.max.y-_.y)*g):(l=(e.max.y-_.y)*g,f=(e.min.y-_.y)*g),r>f||l>o||((l>r||isNaN(r))&&(r=l),(f<o||isNaN(o))&&(o=f),y>=0?(c=(e.min.z-_.z)*y,h=(e.max.z-_.z)*y):(c=(e.max.z-_.z)*y,h=(e.min.z-_.z)*y),r>h||c>o)||((c>r||r!==r)&&(r=c),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,r,o,l){Vc.subVectors(t,e),el.subVectors(r,e),Gc.crossVectors(Vc,el);let f=this.direction.dot(Gc),c;if(f>0){if(o)return null;c=1}else if(f<0)c=-1,f=-f;else return null;mr.subVectors(this.origin,e);const h=c*this.direction.dot(el.crossVectors(mr,el));if(h<0)return null;const m=c*this.direction.dot(Vc.cross(mr));if(m<0||h+m>f)return null;const g=-c*mr.dot(Gc);return g<0?null:this.at(g/f,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,t,r,o,l,f,c,h,m,g,y,_,S,E,w,x){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,f,c,h,m,g,y,_,S,E,w,x)}set(e,t,r,o,l,f,c,h,m,g,y,_,S,E,w,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=f,v[9]=c,v[13]=h,v[2]=m,v[6]=g,v[10]=y,v[14]=_,v[3]=S,v[7]=E,v[11]=w,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Rs.setFromMatrixColumn(e,0).length(),l=1/Rs.setFromMatrixColumn(e,1).length(),f=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*f,t[9]=r[9]*f,t[10]=r[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,f=Math.cos(r),c=Math.sin(r),h=Math.cos(o),m=Math.sin(o),g=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const _=f*g,S=f*y,E=c*g,w=c*y;t[0]=h*g,t[4]=-h*y,t[8]=m,t[1]=S+E*m,t[5]=_-w*m,t[9]=-c*h,t[2]=w-_*m,t[6]=E+S*m,t[10]=f*h}else if(e.order==="YXZ"){const _=h*g,S=h*y,E=m*g,w=m*y;t[0]=_+w*c,t[4]=E*c-S,t[8]=f*m,t[1]=f*y,t[5]=f*g,t[9]=-c,t[2]=S*c-E,t[6]=w+_*c,t[10]=f*h}else if(e.order==="ZXY"){const _=h*g,S=h*y,E=m*g,w=m*y;t[0]=_-w*c,t[4]=-f*y,t[8]=E+S*c,t[1]=S+E*c,t[5]=f*g,t[9]=w-_*c,t[2]=-f*m,t[6]=c,t[10]=f*h}else if(e.order==="ZYX"){const _=f*g,S=f*y,E=c*g,w=c*y;t[0]=h*g,t[4]=E*m-S,t[8]=_*m+w,t[1]=h*y,t[5]=w*m+_,t[9]=S*m-E,t[2]=-m,t[6]=c*h,t[10]=f*h}else if(e.order==="YZX"){const _=f*h,S=f*m,E=c*h,w=c*m;t[0]=h*g,t[4]=w-_*y,t[8]=E*y+S,t[1]=y,t[5]=f*g,t[9]=-c*g,t[2]=-m*g,t[6]=S*y+E,t[10]=_-w*y}else if(e.order==="XZY"){const _=f*h,S=f*m,E=c*h,w=c*m;t[0]=h*g,t[4]=-y,t[8]=m*g,t[1]=_*y+w,t[5]=f*g,t[9]=S*y-E,t[2]=E*y-S,t[6]=c*g,t[10]=w*y+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cx,e,Px)}lookAt(e,t,r){const o=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),gr.crossVectors(r,zn),gr.lengthSq()===0&&(Math.abs(r.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),gr.crossVectors(r,zn)),gr.normalize(),tl.crossVectors(zn,gr),o[0]=gr.x,o[4]=tl.x,o[8]=zn.x,o[1]=gr.y,o[5]=tl.y,o[9]=zn.y,o[2]=gr.z,o[6]=tl.z,o[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,f=r[0],c=r[4],h=r[8],m=r[12],g=r[1],y=r[5],_=r[9],S=r[13],E=r[2],w=r[6],x=r[10],v=r[14],O=r[3],C=r[7],R=r[11],D=r[15],k=o[0],L=o[4],J=o[8],b=o[12],U=o[1],de=o[5],ce=o[9],q=o[13],re=o[2],ne=o[6],he=o[10],ae=o[14],G=o[3],oe=o[7],j=o[11],A=o[15];return l[0]=f*k+c*U+h*re+m*G,l[4]=f*L+c*de+h*ne+m*oe,l[8]=f*J+c*ce+h*he+m*j,l[12]=f*b+c*q+h*ae+m*A,l[1]=g*k+y*U+_*re+S*G,l[5]=g*L+y*de+_*ne+S*oe,l[9]=g*J+y*ce+_*he+S*j,l[13]=g*b+y*q+_*ae+S*A,l[2]=E*k+w*U+x*re+v*G,l[6]=E*L+w*de+x*ne+v*oe,l[10]=E*J+w*ce+x*he+v*j,l[14]=E*b+w*q+x*ae+v*A,l[3]=O*k+C*U+R*re+D*G,l[7]=O*L+C*de+R*ne+D*oe,l[11]=O*J+C*ce+R*he+D*j,l[15]=O*b+C*q+R*ae+D*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],f=e[1],c=e[5],h=e[9],m=e[13],g=e[2],y=e[6],_=e[10],S=e[14],E=e[3],w=e[7],x=e[11],v=e[15];return E*(+l*h*y-o*m*y-l*c*_+r*m*_+o*c*S-r*h*S)+w*(+t*h*S-t*m*_+l*f*_-o*f*S+o*m*g-l*h*g)+x*(+t*m*y-t*c*S-l*f*y+r*f*S+l*c*g-r*m*g)+v*(-o*c*g-t*h*y+t*c*_+o*f*y-r*f*_+r*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],f=e[4],c=e[5],h=e[6],m=e[7],g=e[8],y=e[9],_=e[10],S=e[11],E=e[12],w=e[13],x=e[14],v=e[15],O=y*x*m-w*_*m+w*h*S-c*x*S-y*h*v+c*_*v,C=E*_*m-g*x*m-E*h*S+f*x*S+g*h*v-f*_*v,R=g*w*m-E*y*m+E*c*S-f*w*S-g*c*v+f*y*v,D=E*y*h-g*w*h-E*c*_+f*w*_+g*c*x-f*y*x,k=t*O+r*C+o*R+l*D;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/k;return e[0]=O*L,e[1]=(w*_*l-y*x*l-w*o*S+r*x*S+y*o*v-r*_*v)*L,e[2]=(c*x*l-w*h*l+w*o*m-r*x*m-c*o*v+r*h*v)*L,e[3]=(y*h*l-c*_*l-y*o*m+r*_*m+c*o*S-r*h*S)*L,e[4]=C*L,e[5]=(g*x*l-E*_*l+E*o*S-t*x*S-g*o*v+t*_*v)*L,e[6]=(E*h*l-f*x*l-E*o*m+t*x*m+f*o*v-t*h*v)*L,e[7]=(f*_*l-g*h*l+g*o*m-t*_*m-f*o*S+t*h*S)*L,e[8]=R*L,e[9]=(E*y*l-g*w*l-E*r*S+t*w*S+g*r*v-t*y*v)*L,e[10]=(f*w*l-E*c*l+E*r*m-t*w*m-f*r*v+t*c*v)*L,e[11]=(g*c*l-f*y*l-g*r*m+t*y*m+f*r*S-t*c*S)*L,e[12]=D*L,e[13]=(g*w*o-E*y*o+E*r*_-t*w*_-g*r*x+t*y*x)*L,e[14]=(E*c*o-f*w*o-E*r*h+t*w*h+f*r*x-t*c*x)*L,e[15]=(f*y*o-g*c*o+g*r*h-t*y*h-f*r*_+t*c*_)*L,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,f=e.x,c=e.y,h=e.z,m=l*f,g=l*c;return this.set(m*f+r,m*c-o*h,m*h+o*c,0,m*c+o*h,g*c+r,g*h-o*f,0,m*h-o*c,g*h+o*f,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,f){return this.set(1,r,l,0,e,1,f,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,f=t._y,c=t._z,h=t._w,m=l+l,g=f+f,y=c+c,_=l*m,S=l*g,E=l*y,w=f*g,x=f*y,v=c*y,O=h*m,C=h*g,R=h*y,D=r.x,k=r.y,L=r.z;return o[0]=(1-(w+v))*D,o[1]=(S+R)*D,o[2]=(E-C)*D,o[3]=0,o[4]=(S-R)*k,o[5]=(1-(_+v))*k,o[6]=(x+O)*k,o[7]=0,o[8]=(E+C)*L,o[9]=(x-O)*L,o[10]=(1-(_+w))*L,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=Rs.set(o[0],o[1],o[2]).length();const f=Rs.set(o[4],o[5],o[6]).length(),c=Rs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],li.copy(this);const m=1/l,g=1/f,y=1/c;return li.elements[0]*=m,li.elements[1]*=m,li.elements[2]*=m,li.elements[4]*=g,li.elements[5]*=g,li.elements[6]*=g,li.elements[8]*=y,li.elements[9]*=y,li.elements[10]*=y,t.setFromRotationMatrix(li),r.x=l,r.y=f,r.z=c,this}makePerspective(e,t,r,o,l,f,c=Hi){const h=this.elements,m=2*l/(t-e),g=2*l/(r-o),y=(t+e)/(t-e),_=(r+o)/(r-o);let S,E;if(c===Hi)S=-(f+l)/(f-l),E=-2*f*l/(f-l);else if(c===Rl)S=-f/(f-l),E=-f*l/(f-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=y,h[12]=0,h[1]=0,h[5]=g,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,f,c=Hi){const h=this.elements,m=1/(t-e),g=1/(r-o),y=1/(f-l),_=(t+e)*m,S=(r+o)*g;let E,w;if(c===Hi)E=(f+l)*y,w=-2*y;else if(c===Rl)E=l*y,w=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=w,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Rs=new W,li=new jt,Cx=new W(0,0,0),Px=new W(1,1,1),gr=new W,tl=new W,zn=new W,Kp=new jt,Zp=new qr;class Nl{constructor(e=0,t=0,r=0,o=Nl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],f=o[4],c=o[8],h=o[1],m=o[5],g=o[9],y=o[2],_=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,l)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Tn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-Tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kp,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zp.setFromEuler(this),this.setFromQuaternion(Zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nl.DEFAULT_ORDER="XYZ";class Pg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lx=0;const Qp=new W,Cs=new qr,Ii=new jt,nl=new W,Fa=new W,Dx=new W,Nx=new qr,Jp=new W(1,0,0),em=new W(0,1,0),tm=new W(0,0,1),Ux={type:"added"},Ix={type:"removed"};class yn extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new W,t=new Nl,r=new qr,o=new W(1,1,1);function l(){r.setFromEuler(t,!1)}function f(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new jt},normalMatrix:{value:new ft}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Pg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,t){return Cs.setFromAxisAngle(e,t),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(Jp,e)}rotateY(e){return this.rotateOnAxis(em,e)}rotateZ(e){return this.rotateOnAxis(tm,e)}translateOnAxis(e,t){return Qp.copy(e).applyQuaternion(this.quaternion),this.position.add(Qp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jp,e)}translateY(e){return this.translateOnAxis(em,e)}translateZ(e){return this.translateOnAxis(tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?nl.copy(e):nl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Fa,nl,this.up):Ii.lookAt(nl,Fa,this.up),this.quaternion.setFromRotationMatrix(Ii),o&&(Ii.extractRotation(o.matrixWorld),Cs.setFromRotationMatrix(Ii),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ux)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ix)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(e,t);if(f!==void 0)return f}}getObjectsByProperty(e,t){let r=[];this[e]===t&&r.push(this);for(let o=0,l=this.children.length;o<l;o++){const f=this.children[o].getObjectsByProperty(e,t);f.length>0&&(r=r.concat(f))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,Dx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,Nx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++){const l=t[r];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let l=0,f=o.length;l<f;l++){const c=o[l];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON()));function l(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const y=h[m];l(e.shapes,y)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,m=this.material.length;h<m;h++)c.push(l(e.materials,this.material[h]));o.material=c}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];o.animations.push(l(e.animations,h))}}if(t){const c=f(e.geometries),h=f(e.materials),m=f(e.textures),g=f(e.images),y=f(e.shapes),_=f(e.skeletons),S=f(e.animations),E=f(e.nodes);c.length>0&&(r.geometries=c),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),y.length>0&&(r.shapes=y),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=o,r;function f(c){const h=[];for(const m in c){const g=c[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}yn.DEFAULT_UP=new W(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new W,Oi=new W,Wc=new W,Fi=new W,Ps=new W,Ls=new W,nm=new W,jc=new W,Xc=new W,Yc=new W;let il=!1;class Jn{constructor(e=new W,t=new W,r=new W){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),ui.subVectors(e,t),o.cross(ui);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){ui.subVectors(o,t),Oi.subVectors(r,t),Wc.subVectors(e,t);const f=ui.dot(ui),c=ui.dot(Oi),h=ui.dot(Wc),m=Oi.dot(Oi),g=Oi.dot(Wc),y=f*m-c*c;if(y===0)return l.set(-2,-1,-1);const _=1/y,S=(m*h-c*g)*_,E=(f*g-c*h)*_;return l.set(1-S-E,E,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Fi),Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getUV(e,t,r,o,l,f,c,h){return il===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),il=!0),this.getInterpolation(e,t,r,o,l,f,c,h)}static getInterpolation(e,t,r,o,l,f,c,h){return this.getBarycoord(e,t,r,o,Fi),h.setScalar(0),h.addScaledVector(l,Fi.x),h.addScaledVector(f,Fi.y),h.addScaledVector(c,Fi.z),h}static isFrontFacing(e,t,r,o){return ui.subVectors(r,t),Oi.subVectors(e,t),ui.cross(Oi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ui.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,o,l){return il===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),il=!0),Jn.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}getInterpolation(e,t,r,o,l){return Jn.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let f,c;Ps.subVectors(o,r),Ls.subVectors(l,r),jc.subVectors(e,r);const h=Ps.dot(jc),m=Ls.dot(jc);if(h<=0&&m<=0)return t.copy(r);Xc.subVectors(e,o);const g=Ps.dot(Xc),y=Ls.dot(Xc);if(g>=0&&y<=g)return t.copy(o);const _=h*y-g*m;if(_<=0&&h>=0&&g<=0)return f=h/(h-g),t.copy(r).addScaledVector(Ps,f);Yc.subVectors(e,l);const S=Ps.dot(Yc),E=Ls.dot(Yc);if(E>=0&&S<=E)return t.copy(l);const w=S*m-h*E;if(w<=0&&m>=0&&E<=0)return c=m/(m-E),t.copy(r).addScaledVector(Ls,c);const x=g*E-S*y;if(x<=0&&y-g>=0&&S-E>=0)return nm.subVectors(l,o),c=(y-g)/(y-g+(S-E)),t.copy(o).addScaledVector(nm,c);const v=1/(x+w+_);return f=w*v,c=_*v,t.copy(r).addScaledVector(Ps,f).addScaledVector(Ls,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ox=0;class Qs extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=js,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hg,this.blendDst=pg,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ld,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ax,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nc,this.stencilZFail=Nc,this.stencilZPass=Nc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(r.blending=this.blending),this.side!==yi&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(r.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const f=[];for(const c in l){const h=l[c];delete h.metadata,f.push(h)}return f}if(t){const l=o(e.textures),f=o(e.images);l.length>0&&(r.textures=l),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},rl={h:0,s:0,l:0};function qc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class gt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zn.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Zn.workingColorSpace){return this.r=e,this.g=t,this.b=r,Zn.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Zn.workingColorSpace){if(e=mx(e,1),t=Tn(t,0,1),r=Tn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,f=2*r-l;this.r=qc(f,l,e+1/3),this.g=qc(f,l,e),this.b=qc(f,l,e-1/3)}return Zn.toWorkingColorSpace(this,o),this}setStyle(e,t=Nt){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const f=o[1],c=o[2];switch(f){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],f=l.length;if(f===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(f===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const r=Lg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}copyLinearToSRGB(e){return this.r=Oc(e.r),this.g=Oc(e.g),this.b=Oc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Zn.fromWorkingColorSpace(_n.copy(this),e),Math.round(Tn(_n.r*255,0,255))*65536+Math.round(Tn(_n.g*255,0,255))*256+Math.round(Tn(_n.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zn.workingColorSpace){Zn.fromWorkingColorSpace(_n.copy(this),t);const r=_n.r,o=_n.g,l=_n.b,f=Math.max(r,o,l),c=Math.min(r,o,l);let h,m;const g=(c+f)/2;if(c===f)h=0,m=0;else{const y=f-c;switch(m=g<=.5?y/(f+c):y/(2-f-c),f){case r:h=(o-l)/y+(o<l?6:0);break;case o:h=(l-r)/y+2;break;case l:h=(r-o)/y+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,t=Zn.workingColorSpace){return Zn.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=Nt){Zn.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,r=_n.g,o=_n.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(ci),ci.h+=e,ci.s+=t,ci.l+=r,this.setHSL(ci.h,ci.s,ci.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(rl);const r=Uc(ci.h,rl.h,t),o=Uc(ci.s,rl.s,t),l=Uc(ci.l,rl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new gt;gt.NAMES=Lg;class Dg extends Qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new W,sl=new We;class hi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=fd,this.updateRange={offset:0,count:-1},this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)sl.fromBufferAttribute(this,t),sl.applyMatrix3(e),this.setXY(t,sl.x,sl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=zi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Et(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),r=Et(r,this.array),o=Et(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),r=Et(r,this.array),o=Et(o,this.array),l=Et(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Ng extends hi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Ug extends hi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Gi extends hi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Fx=0;const $n=new jt,$c=new yn,Ds=new W,Bn=new Ya,ka=new Ya,on=new W;class Xi extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tg(e)?Ug:Ng)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ft().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,t,r){return $n.makeTranslation(e,t,r),this.applyMatrix4($n),this}scale(e,t,r){return $n.makeScale(e,t,r),this.applyMatrix4($n),this}lookAt(e){return $c.lookAt(e),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const t=[];for(let r=0,o=e.length;r<o;r++){const l=e[r];t.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Gi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Bn.setFromBufferAttribute(l),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Md);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const r=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let l=0,f=t.length;l<f;l++){const c=t[l];ka.setFromBufferAttribute(c),this.morphTargetsRelative?(on.addVectors(Bn.min,ka.min),Bn.expandByPoint(on),on.addVectors(Bn.max,ka.max),Bn.expandByPoint(on)):(Bn.expandByPoint(ka.min),Bn.expandByPoint(ka.max))}Bn.getCenter(r);let o=0;for(let l=0,f=e.count;l<f;l++)on.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(on));if(t)for(let l=0,f=t.length;l<f;l++){const c=t[l],h=this.morphTargetsRelative;for(let m=0,g=c.count;m<g;m++)on.fromBufferAttribute(c,m),h&&(Ds.fromBufferAttribute(e,m),on.add(Ds)),o=Math.max(o,r.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,o=t.position.array,l=t.normal.array,f=t.uv.array,c=o.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*c),4));const h=this.getAttribute("tangent").array,m=[],g=[];for(let U=0;U<c;U++)m[U]=new W,g[U]=new W;const y=new W,_=new W,S=new W,E=new We,w=new We,x=new We,v=new W,O=new W;function C(U,de,ce){y.fromArray(o,U*3),_.fromArray(o,de*3),S.fromArray(o,ce*3),E.fromArray(f,U*2),w.fromArray(f,de*2),x.fromArray(f,ce*2),_.sub(y),S.sub(y),w.sub(E),x.sub(E);const q=1/(w.x*x.y-x.x*w.y);isFinite(q)&&(v.copy(_).multiplyScalar(x.y).addScaledVector(S,-w.y).multiplyScalar(q),O.copy(S).multiplyScalar(w.x).addScaledVector(_,-x.x).multiplyScalar(q),m[U].add(v),m[de].add(v),m[ce].add(v),g[U].add(O),g[de].add(O),g[ce].add(O))}let R=this.groups;R.length===0&&(R=[{start:0,count:r.length}]);for(let U=0,de=R.length;U<de;++U){const ce=R[U],q=ce.start,re=ce.count;for(let ne=q,he=q+re;ne<he;ne+=3)C(r[ne+0],r[ne+1],r[ne+2])}const D=new W,k=new W,L=new W,J=new W;function b(U){L.fromArray(l,U*3),J.copy(L);const de=m[U];D.copy(de),D.sub(L.multiplyScalar(L.dot(de))).normalize(),k.crossVectors(J,de);const q=k.dot(g[U])<0?-1:1;h[U*4]=D.x,h[U*4+1]=D.y,h[U*4+2]=D.z,h[U*4+3]=q}for(let U=0,de=R.length;U<de;++U){const ce=R[U],q=ce.start,re=ce.count;for(let ne=q,he=q+re;ne<he;ne+=3)b(r[ne+0]),b(r[ne+1]),b(r[ne+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new hi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const o=new W,l=new W,f=new W,c=new W,h=new W,m=new W,g=new W,y=new W;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),w=e.getX(_+1),x=e.getX(_+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,w),f.fromBufferAttribute(t,x),g.subVectors(f,l),y.subVectors(o,l),g.cross(y),c.fromBufferAttribute(r,E),h.fromBufferAttribute(r,w),m.fromBufferAttribute(r,x),c.add(g),h.add(g),m.add(g),r.setXYZ(E,c.x,c.y,c.z),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let _=0,S=t.count;_<S;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),f.fromBufferAttribute(t,_+2),g.subVectors(f,l),y.subVectors(o,l),g.cross(y),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(c,h){const m=c.array,g=c.itemSize,y=c.normalized,_=new m.constructor(h.length*g);let S=0,E=0;for(let w=0,x=h.length;w<x;w++){c.isInterleavedBufferAttribute?S=h[w]*c.data.stride+c.offset:S=h[w]*g;for(let v=0;v<g;v++)_[E++]=m[S++]}return new hi(_,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xi,r=this.index.array,o=this.attributes;for(const c in o){const h=o[c],m=e(h,r);t.setAttribute(c,m)}const l=this.morphAttributes;for(const c in l){const h=[],m=l[c];for(let g=0,y=m.length;g<y;g++){const _=m[g],S=e(_,r);h.push(S)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let c=0,h=f.length;c<h;c++){const m=f[c];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let y=0,_=m.length;y<_;y++){const S=m[y];g.push(S.toJSON(e.data))}g.length>0&&(o[h]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(t))}const l=e.morphAttributes;for(const m in l){const g=[],y=l[m];for(let _=0,S=y.length;_<S;_++)g.push(y[_].clone(t));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,g=f.length;m<g;m++){const y=f[m];this.addGroup(y.start,y.count,y.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const im=new jt,zr=new Cg,al=new Md,rm=new W,Ns=new W,Us=new W,Is=new W,Kc=new W,ol=new W,ll=new We,ul=new We,cl=new We,sm=new W,am=new W,om=new W,dl=new W,fl=new W;class bt extends yn{constructor(e=new Xi,t=new Dg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,f=o.length;l<f;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,f=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(l&&c){ol.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const g=c[h],y=l[h];g!==0&&(Kc.fromBufferAttribute(y,e),f?ol.addScaledVector(Kc,g):ol.addScaledVector(Kc.sub(t),g))}t.add(ol)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),al.copy(r.boundingSphere),al.applyMatrix4(l),zr.copy(e.ray).recast(e.near),!(al.containsPoint(zr.origin)===!1&&(zr.intersectSphere(al,rm)===null||zr.origin.distanceToSquared(rm)>(e.far-e.near)**2))&&(im.copy(l).invert(),zr.copy(e.ray).applyMatrix4(im),!(r.boundingBox!==null&&zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,zr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,f=this.material,c=l.index,h=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,y=l.attributes.normal,_=l.groups,S=l.drawRange;if(c!==null)if(Array.isArray(f))for(let E=0,w=_.length;E<w;E++){const x=_[E],v=f[x.materialIndex],O=Math.max(x.start,S.start),C=Math.min(c.count,Math.min(x.start+x.count,S.start+S.count));for(let R=O,D=C;R<D;R+=3){const k=c.getX(R),L=c.getX(R+1),J=c.getX(R+2);o=hl(this,v,e,r,m,g,y,k,L,J),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),w=Math.min(c.count,S.start+S.count);for(let x=E,v=w;x<v;x+=3){const O=c.getX(x),C=c.getX(x+1),R=c.getX(x+2);o=hl(this,f,e,r,m,g,y,O,C,R),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(f))for(let E=0,w=_.length;E<w;E++){const x=_[E],v=f[x.materialIndex],O=Math.max(x.start,S.start),C=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let R=O,D=C;R<D;R+=3){const k=R,L=R+1,J=R+2;o=hl(this,v,e,r,m,g,y,k,L,J),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let x=E,v=w;x<v;x+=3){const O=x,C=x+1,R=x+2;o=hl(this,f,e,r,m,g,y,O,C,R),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function kx(s,e,t,r,o,l,f,c){let h;if(e.side===Nn?h=r.intersectTriangle(f,l,o,!0,c):h=r.intersectTriangle(o,l,f,e.side===yi,c),h===null)return null;fl.copy(c),fl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(fl);return m<t.near||m>t.far?null:{distance:m,point:fl.clone(),object:s}}function hl(s,e,t,r,o,l,f,c,h,m){s.getVertexPosition(c,Ns),s.getVertexPosition(h,Us),s.getVertexPosition(m,Is);const g=kx(s,e,t,r,Ns,Us,Is,dl);if(g){o&&(ll.fromBufferAttribute(o,c),ul.fromBufferAttribute(o,h),cl.fromBufferAttribute(o,m),g.uv=Jn.getInterpolation(dl,Ns,Us,Is,ll,ul,cl,new We)),l&&(ll.fromBufferAttribute(l,c),ul.fromBufferAttribute(l,h),cl.fromBufferAttribute(l,m),g.uv1=Jn.getInterpolation(dl,Ns,Us,Is,ll,ul,cl,new We),g.uv2=g.uv1),f&&(sm.fromBufferAttribute(f,c),am.fromBufferAttribute(f,h),om.fromBufferAttribute(f,m),g.normal=Jn.getInterpolation(dl,Ns,Us,Is,sm,am,om,new W),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:c,b:h,c:m,normal:new W,materialIndex:0};Jn.getNormal(Ns,Us,Is,y.normal),g.face=y}return g}class Wt extends Xi{constructor(e=1,t=1,r=1,o=1,l=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:f};const c=this;o=Math.floor(o),l=Math.floor(l),f=Math.floor(f);const h=[],m=[],g=[],y=[];let _=0,S=0;E("z","y","x",-1,-1,r,t,e,f,l,0),E("z","y","x",1,-1,r,t,-e,f,l,1),E("x","z","y",1,1,e,r,t,o,f,2),E("x","z","y",1,-1,e,r,-t,o,f,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new Gi(m,3)),this.setAttribute("normal",new Gi(g,3)),this.setAttribute("uv",new Gi(y,2));function E(w,x,v,O,C,R,D,k,L,J,b){const U=R/L,de=D/J,ce=R/2,q=D/2,re=k/2,ne=L+1,he=J+1;let ae=0,G=0;const oe=new W;for(let j=0;j<he;j++){const A=j*de-q;for(let F=0;F<ne;F++){const fe=F*U-ce;oe[w]=fe*O,oe[x]=A*C,oe[v]=re,m.push(oe.x,oe.y,oe.z),oe[w]=0,oe[x]=0,oe[v]=k>0?1:-1,g.push(oe.x,oe.y,oe.z),y.push(F/L),y.push(1-j/J),ae+=1}}for(let j=0;j<J;j++)for(let A=0;A<L;A++){const F=_+A+ne*j,fe=_+A+ne*(j+1),me=_+(A+1)+ne*(j+1),ye=_+(A+1)+ne*j;h.push(F,fe,ye),h.push(fe,me,ye),G+=6}c.addGroup(S,G,b),S+=G,_+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function wn(s){const e={};for(let t=0;t<s.length;t++){const r=Zs(s[t]);for(const o in r)e[o]=r[o]}return e}function zx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ig(s){return s.getRenderTarget()===null?s.outputColorSpace:Si}const Og={clone:Zs,merge:wn};var Bx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bx,this.fragmentShader=Hx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=zx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?t.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[o]={type:"m4",value:f.toArray()}:t.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Fg extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Hn extends Fg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(El*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pd*2*Math.atan(Math.tan(El*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,o,l,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(El*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,m=f.fullHeight;l+=f.offsetX*o/h,t-=f.offsetY*r/m,o*=f.width/h,r*=f.height/m}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Os=-90,Fs=1;class Vx extends yn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null;const o=new Hn(Os,Fs,e,t);o.layers=this.layers,this.add(o);const l=new Hn(Os,Fs,e,t);l.layers=this.layers,this.add(l);const f=new Hn(Os,Fs,e,t);f.layers=this.layers,this.add(f);const c=new Hn(Os,Fs,e,t);c.layers=this.layers,this.add(c);const h=new Hn(Os,Fs,e,t);h.layers=this.layers,this.add(h);const m=new Hn(Os,Fs,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,f,c,h]=t;for(const m of t)this.remove(m);if(e===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Rl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,f,c,h,m]=this.children,g=e.getRenderTarget(),y=e.xr.enabled;e.xr.enabled=!1;const _=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(t,o),e.setRenderTarget(r,1),e.render(t,l),e.setRenderTarget(r,2),e.render(t,f),e.setRenderTarget(r,3),e.render(t,c),e.setRenderTarget(r,4),e.render(t,h),r.texture.generateMipmaps=_,e.setRenderTarget(r,5),e.render(t,m),e.setRenderTarget(g),e.xr.enabled=y,r.texture.needsPMREMUpdate=!0}}class kg extends xn{constructor(e,t,r,o,l,f,c,h,m,g){e=e!==void 0?e:[],t=t!==void 0?t:Ys,super(e,t,r,o,l,f,c,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gx extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];t.encoding!==void 0&&(Wa("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Xr?Nt:Yr),this.texture=new kg(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Wt(5,5,5),l=new ji({name:"CubemapFromEquirect",uniforms:Zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Nn,blending:Vi});l.uniforms.tEquirect.value=t;const f=new bt(o,l),c=t.minFilter;return t.minFilter===ja&&(t.minFilter=Qn),new Vx(1,10,this).update(e,f),t.minFilter=c,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,r,o);e.setRenderTarget(l)}}const Zc=new W,Wx=new W,jx=new ft;class vr{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Zc.subVectors(r,t).cross(Wx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Zc),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||jx.getNormalMatrix(e),o=this.coplanarPoint(Zc).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new Md,pl=new W;class Ed{constructor(e=new vr,t=new vr,r=new vr,o=new vr,l=new vr,f=new vr){this.planes=[e,t,r,o,l,f]}set(e,t,r,o,l,f){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(o),c[4].copy(l),c[5].copy(f),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Hi){const r=this.planes,o=e.elements,l=o[0],f=o[1],c=o[2],h=o[3],m=o[4],g=o[5],y=o[6],_=o[7],S=o[8],E=o[9],w=o[10],x=o[11],v=o[12],O=o[13],C=o[14],R=o[15];if(r[0].setComponents(h-l,_-m,x-S,R-v).normalize(),r[1].setComponents(h+l,_+m,x+S,R+v).normalize(),r[2].setComponents(h+f,_+g,x+E,R+O).normalize(),r[3].setComponents(h-f,_-g,x-E,R-O).normalize(),r[4].setComponents(h-c,_-y,x-w,R-C).normalize(),t===Hi)r[5].setComponents(h+c,_+y,x+w,R+C).normalize();else if(t===Rl)r[5].setComponents(c,y,w,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(pl.x=o.normal.x>0?e.max.x:e.min.x,pl.y=o.normal.y>0?e.max.y:e.min.y,pl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(pl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zg(){let s=null,e=!1,t=null,r=null;function o(l,f){t(l,f),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Xx(s,e){const t=e.isWebGL2,r=new WeakMap;function o(m,g){const y=m.array,_=m.usage,S=s.createBuffer();s.bindBuffer(g,S),s.bufferData(g,y,_),m.onUploadCallback();let E;if(y instanceof Float32Array)E=s.FLOAT;else if(y instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(t)E=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=s.UNSIGNED_SHORT;else if(y instanceof Int16Array)E=s.SHORT;else if(y instanceof Uint32Array)E=s.UNSIGNED_INT;else if(y instanceof Int32Array)E=s.INT;else if(y instanceof Int8Array)E=s.BYTE;else if(y instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(y instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+y);return{buffer:S,type:E,bytesPerElement:y.BYTES_PER_ELEMENT,version:m.version}}function l(m,g,y){const _=g.array,S=g.updateRange;s.bindBuffer(y,m),S.count===-1?s.bufferSubData(y,0,_):(t?s.bufferSubData(y,S.offset*_.BYTES_PER_ELEMENT,_,S.offset,S.count):s.bufferSubData(y,S.offset*_.BYTES_PER_ELEMENT,_.subarray(S.offset,S.offset+S.count)),S.count=-1),g.onUploadCallback()}function f(m){return m.isInterleavedBufferAttribute&&(m=m.data),r.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=r.get(m);g&&(s.deleteBuffer(g.buffer),r.delete(m))}function h(m,g){if(m.isGLBufferAttribute){const _=r.get(m);(!_||_.version<m.version)&&r.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const y=r.get(m);y===void 0?r.set(m,o(m,g)):y.version<m.version&&(l(y.buffer,m,g),y.version=m.version)}return{get:f,remove:c,update:h}}class wd extends Xi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,f=t/2,c=Math.floor(r),h=Math.floor(o),m=c+1,g=h+1,y=e/c,_=t/h,S=[],E=[],w=[],x=[];for(let v=0;v<g;v++){const O=v*_-f;for(let C=0;C<m;C++){const R=C*y-l;E.push(R,-O,0),w.push(0,0,1),x.push(C/c),x.push(1-v/h)}}for(let v=0;v<h;v++)for(let O=0;O<c;O++){const C=O+m*v,R=O+m*(v+1),D=O+1+m*(v+1),k=O+1+m*v;S.push(C,R,k),S.push(R,D,k)}this.setIndex(S),this.setAttribute("position",new Gi(E,3)),this.setAttribute("normal",new Gi(w,3)),this.setAttribute("uv",new Gi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wd(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$x=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Qx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ey=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ty=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ny=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ry=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,py=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,my=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gy=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sy="gl_FragColor = linearToOutputTexel( gl_FragColor );",My=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ey=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ty=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ay=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,by=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Py=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ny=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Uy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Oy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ky=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,By=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Wy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jy=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,qy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$y=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ky=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,aS=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,oS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,lS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,uS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,mS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_S=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ES=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,bS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,CS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,PS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,DS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,US=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,HS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,GS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$S=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KS=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ZS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,QS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,JS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rM=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yM=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,MM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:Yx,alphahash_pars_fragment:qx,alphamap_fragment:$x,alphamap_pars_fragment:Kx,alphatest_fragment:Zx,alphatest_pars_fragment:Qx,aomap_fragment:Jx,aomap_pars_fragment:ey,begin_vertex:ty,beginnormal_vertex:ny,bsdfs:iy,iridescence_fragment:ry,bumpmap_pars_fragment:sy,clipping_planes_fragment:ay,clipping_planes_pars_fragment:oy,clipping_planes_pars_vertex:ly,clipping_planes_vertex:uy,color_fragment:cy,color_pars_fragment:dy,color_pars_vertex:fy,color_vertex:hy,common:py,cube_uv_reflection_fragment:my,defaultnormal_vertex:gy,displacementmap_pars_vertex:vy,displacementmap_vertex:_y,emissivemap_fragment:xy,emissivemap_pars_fragment:yy,colorspace_fragment:Sy,colorspace_pars_fragment:My,envmap_fragment:Ey,envmap_common_pars_fragment:wy,envmap_pars_fragment:Ty,envmap_pars_vertex:Ay,envmap_physical_pars_fragment:ky,envmap_vertex:by,fog_vertex:Ry,fog_pars_vertex:Cy,fog_fragment:Py,fog_pars_fragment:Ly,gradientmap_pars_fragment:Dy,lightmap_fragment:Ny,lightmap_pars_fragment:Uy,lights_lambert_fragment:Iy,lights_lambert_pars_fragment:Oy,lights_pars_begin:Fy,lights_toon_fragment:zy,lights_toon_pars_fragment:By,lights_phong_fragment:Hy,lights_phong_pars_fragment:Vy,lights_physical_fragment:Gy,lights_physical_pars_fragment:Wy,lights_fragment_begin:jy,lights_fragment_maps:Xy,lights_fragment_end:Yy,logdepthbuf_fragment:qy,logdepthbuf_pars_fragment:$y,logdepthbuf_pars_vertex:Ky,logdepthbuf_vertex:Zy,map_fragment:Qy,map_pars_fragment:Jy,map_particle_fragment:eS,map_particle_pars_fragment:tS,metalnessmap_fragment:nS,metalnessmap_pars_fragment:iS,morphcolor_vertex:rS,morphnormal_vertex:sS,morphtarget_pars_vertex:aS,morphtarget_vertex:oS,normal_fragment_begin:lS,normal_fragment_maps:uS,normal_pars_fragment:cS,normal_pars_vertex:dS,normal_vertex:fS,normalmap_pars_fragment:hS,clearcoat_normal_fragment_begin:pS,clearcoat_normal_fragment_maps:mS,clearcoat_pars_fragment:gS,iridescence_pars_fragment:vS,opaque_fragment:_S,packing:xS,premultiplied_alpha_fragment:yS,project_vertex:SS,dithering_fragment:MS,dithering_pars_fragment:ES,roughnessmap_fragment:wS,roughnessmap_pars_fragment:TS,shadowmap_pars_fragment:AS,shadowmap_pars_vertex:bS,shadowmap_vertex:RS,shadowmask_pars_fragment:CS,skinbase_vertex:PS,skinning_pars_vertex:LS,skinning_vertex:DS,skinnormal_vertex:NS,specularmap_fragment:US,specularmap_pars_fragment:IS,tonemapping_fragment:OS,tonemapping_pars_fragment:FS,transmission_fragment:kS,transmission_pars_fragment:zS,uv_pars_fragment:BS,uv_pars_vertex:HS,uv_vertex:VS,worldpos_vertex:GS,background_vert:WS,background_frag:jS,backgroundCube_vert:XS,backgroundCube_frag:YS,cube_vert:qS,cube_frag:$S,depth_vert:KS,depth_frag:ZS,distanceRGBA_vert:QS,distanceRGBA_frag:JS,equirect_vert:eM,equirect_frag:tM,linedashed_vert:nM,linedashed_frag:iM,meshbasic_vert:rM,meshbasic_frag:sM,meshlambert_vert:aM,meshlambert_frag:oM,meshmatcap_vert:lM,meshmatcap_frag:uM,meshnormal_vert:cM,meshnormal_frag:dM,meshphong_vert:fM,meshphong_frag:hM,meshphysical_vert:pM,meshphysical_frag:mM,meshtoon_vert:gM,meshtoon_frag:vM,points_vert:_M,points_frag:xM,shadow_vert:yM,shadow_frag:SM,sprite_vert:MM,sprite_frag:EM},De={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},xi={basic:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new gt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:wn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:wn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new gt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:wn([De.points,De.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:wn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:wn([De.common,De.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:wn([De.sprite,De.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:wn([De.common,De.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:wn([De.lights,De.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};xi.physical={uniforms:wn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const ml={r:0,b:0,g:0};function wM(s,e,t,r,o,l,f){const c=new gt(0);let h=l===!0?0:1,m,g,y=null,_=0,S=null;function E(x,v){let O=!1,C=v.isScene===!0?v.background:null;C&&C.isTexture&&(C=(v.backgroundBlurriness>0?t:e).get(C)),C===null?w(c,h):C&&C.isColor&&(w(C,1),O=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?r.buffers.color.setClear(0,0,0,1,f):R==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||O)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),C&&(C.isCubeTexture||C.mapping===Ll)?(g===void 0&&(g=new bt(new Wt(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Zs(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(D,k,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),g.material.uniforms.envMap.value=C,g.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,g.material.toneMapped=C.colorSpace!==Nt,(y!==C||_!==C.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,y=C,_=C.version,S=s.toneMapping),g.layers.enableAll(),x.unshift(g,g.geometry,g.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new bt(new wd(2,2),new ji({name:"BackgroundMaterial",uniforms:Zs(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,m.material.toneMapped=C.colorSpace!==Nt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(y!==C||_!==C.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,y=C,_=C.version,S=s.toneMapping),m.layers.enableAll(),x.unshift(m,m.geometry,m.material,0,0,null))}function w(x,v){x.getRGB(ml,Ig(s)),r.buffers.color.setClear(ml.r,ml.g,ml.b,v,f)}return{getClearColor:function(){return c},setClearColor:function(x,v=1){c.set(x),h=v,w(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(x){h=x,w(c,h)},render:E}}function TM(s,e,t,r){const o=s.getParameter(s.MAX_VERTEX_ATTRIBS),l=r.isWebGL2?null:e.get("OES_vertex_array_object"),f=r.isWebGL2||l!==null,c={},h=x(null);let m=h,g=!1;function y(re,ne,he,ae,G){let oe=!1;if(f){const j=w(ae,he,ne);m!==j&&(m=j,S(m.object)),oe=v(re,ae,he,G),oe&&O(re,ae,he,G)}else{const j=ne.wireframe===!0;(m.geometry!==ae.id||m.program!==he.id||m.wireframe!==j)&&(m.geometry=ae.id,m.program=he.id,m.wireframe=j,oe=!0)}G!==null&&t.update(G,s.ELEMENT_ARRAY_BUFFER),(oe||g)&&(g=!1,J(re,ne,he,ae),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function _(){return r.isWebGL2?s.createVertexArray():l.createVertexArrayOES()}function S(re){return r.isWebGL2?s.bindVertexArray(re):l.bindVertexArrayOES(re)}function E(re){return r.isWebGL2?s.deleteVertexArray(re):l.deleteVertexArrayOES(re)}function w(re,ne,he){const ae=he.wireframe===!0;let G=c[re.id];G===void 0&&(G={},c[re.id]=G);let oe=G[ne.id];oe===void 0&&(oe={},G[ne.id]=oe);let j=oe[ae];return j===void 0&&(j=x(_()),oe[ae]=j),j}function x(re){const ne=[],he=[],ae=[];for(let G=0;G<o;G++)ne[G]=0,he[G]=0,ae[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:he,attributeDivisors:ae,object:re,attributes:{},index:null}}function v(re,ne,he,ae){const G=m.attributes,oe=ne.attributes;let j=0;const A=he.getAttributes();for(const F in A)if(A[F].location>=0){const me=G[F];let ye=oe[F];if(ye===void 0&&(F==="instanceMatrix"&&re.instanceMatrix&&(ye=re.instanceMatrix),F==="instanceColor"&&re.instanceColor&&(ye=re.instanceColor)),me===void 0||me.attribute!==ye||ye&&me.data!==ye.data)return!0;j++}return m.attributesNum!==j||m.index!==ae}function O(re,ne,he,ae){const G={},oe=ne.attributes;let j=0;const A=he.getAttributes();for(const F in A)if(A[F].location>=0){let me=oe[F];me===void 0&&(F==="instanceMatrix"&&re.instanceMatrix&&(me=re.instanceMatrix),F==="instanceColor"&&re.instanceColor&&(me=re.instanceColor));const ye={};ye.attribute=me,me&&me.data&&(ye.data=me.data),G[F]=ye,j++}m.attributes=G,m.attributesNum=j,m.index=ae}function C(){const re=m.newAttributes;for(let ne=0,he=re.length;ne<he;ne++)re[ne]=0}function R(re){D(re,0)}function D(re,ne){const he=m.newAttributes,ae=m.enabledAttributes,G=m.attributeDivisors;he[re]=1,ae[re]===0&&(s.enableVertexAttribArray(re),ae[re]=1),G[re]!==ne&&((r.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](re,ne),G[re]=ne)}function k(){const re=m.newAttributes,ne=m.enabledAttributes;for(let he=0,ae=ne.length;he<ae;he++)ne[he]!==re[he]&&(s.disableVertexAttribArray(he),ne[he]=0)}function L(re,ne,he,ae,G,oe,j){j===!0?s.vertexAttribIPointer(re,ne,he,G,oe):s.vertexAttribPointer(re,ne,he,ae,G,oe)}function J(re,ne,he,ae){if(r.isWebGL2===!1&&(re.isInstancedMesh||ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;C();const G=ae.attributes,oe=he.getAttributes(),j=ne.defaultAttributeValues;for(const A in oe){const F=oe[A];if(F.location>=0){let fe=G[A];if(fe===void 0&&(A==="instanceMatrix"&&re.instanceMatrix&&(fe=re.instanceMatrix),A==="instanceColor"&&re.instanceColor&&(fe=re.instanceColor)),fe!==void 0){const me=fe.normalized,ye=fe.itemSize,be=t.get(fe);if(be===void 0)continue;const Ue=be.buffer,Ce=be.type,Ge=be.bytesPerElement,vt=r.isWebGL2===!0&&(Ce===s.INT||Ce===s.UNSIGNED_INT||fe.gpuType===vg);if(fe.isInterleavedBufferAttribute){const nt=fe.data,Z=nt.stride,Pt=fe.offset;if(nt.isInstancedInterleavedBuffer){for(let je=0;je<F.locationSize;je++)D(F.location+je,nt.meshPerAttribute);re.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let je=0;je<F.locationSize;je++)R(F.location+je);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let je=0;je<F.locationSize;je++)L(F.location+je,ye/F.locationSize,Ce,me,Z*Ge,(Pt+ye/F.locationSize*je)*Ge,vt)}else{if(fe.isInstancedBufferAttribute){for(let nt=0;nt<F.locationSize;nt++)D(F.location+nt,fe.meshPerAttribute);re.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let nt=0;nt<F.locationSize;nt++)R(F.location+nt);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let nt=0;nt<F.locationSize;nt++)L(F.location+nt,ye/F.locationSize,Ce,me,ye*Ge,ye/F.locationSize*nt*Ge,vt)}}else if(j!==void 0){const me=j[A];if(me!==void 0)switch(me.length){case 2:s.vertexAttrib2fv(F.location,me);break;case 3:s.vertexAttrib3fv(F.location,me);break;case 4:s.vertexAttrib4fv(F.location,me);break;default:s.vertexAttrib1fv(F.location,me)}}}}k()}function b(){ce();for(const re in c){const ne=c[re];for(const he in ne){const ae=ne[he];for(const G in ae)E(ae[G].object),delete ae[G];delete ne[he]}delete c[re]}}function U(re){if(c[re.id]===void 0)return;const ne=c[re.id];for(const he in ne){const ae=ne[he];for(const G in ae)E(ae[G].object),delete ae[G];delete ne[he]}delete c[re.id]}function de(re){for(const ne in c){const he=c[ne];if(he[re.id]===void 0)continue;const ae=he[re.id];for(const G in ae)E(ae[G].object),delete ae[G];delete he[re.id]}}function ce(){q(),g=!0,m!==h&&(m=h,S(m.object))}function q(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:y,reset:ce,resetDefaultState:q,dispose:b,releaseStatesOfGeometry:U,releaseStatesOfProgram:de,initAttributes:C,enableAttribute:R,disableUnusedAttributes:k}}function AM(s,e,t,r){const o=r.isWebGL2;let l;function f(m){l=m}function c(m,g){s.drawArrays(l,m,g),t.update(g,l,1)}function h(m,g,y){if(y===0)return;let _,S;if(o)_=s,S="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[S](l,m,g,y),t.update(g,l,y)}this.setMode=f,this.render=c,this.renderInstances=h}function bM(s,e,t){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const m=f||e.has("WEBGL_draw_buffers"),g=t.logarithmicDepthBuffer===!0,y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_TEXTURE_SIZE),E=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),w=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),O=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,R=f||e.has("OES_texture_float"),D=C&&R,k=f?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:f,drawBuffers:m,getMaxAnisotropy:o,getMaxPrecision:l,precision:c,logarithmicDepthBuffer:g,maxTextures:y,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:E,maxAttributes:w,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:O,vertexTextures:C,floatFragmentTextures:R,floatVertexTextures:D,maxSamples:k}}function RM(s){const e=this;let t=null,r=0,o=!1,l=!1;const f=new vr,c=new ft,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(y,_){const S=y.length!==0||_||r!==0||o;return o=_,r=y.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,_){t=g(y,_,0)},this.setState=function(y,_,S){const E=y.clippingPlanes,w=y.clipIntersection,x=y.clipShadows,v=s.get(y);if(!o||E===null||E.length===0||l&&!x)l?g(null):m();else{const O=l?0:r,C=O*4;let R=v.clippingState||null;h.value=R,R=g(E,_,C,S);for(let D=0;D!==C;++D)R[D]=t[D];v.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=O}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(y,_,S,E){const w=y!==null?y.length:0;let x=null;if(w!==0){if(x=h.value,E!==!0||x===null){const v=S+w*4,O=_.matrixWorldInverse;c.getNormalMatrix(O),(x===null||x.length<v)&&(x=new Float32Array(v));for(let C=0,R=S;C!==w;++C,R+=4)f.copy(y[C]).applyMatrix4(O,c),f.normal.toArray(x,R),x[R+3]=f.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}function CM(s){let e=new WeakMap;function t(f,c){return c===bl?f.mapping=Ys:c===ud&&(f.mapping=qs),f}function r(f){if(f&&f.isTexture&&f.isRenderTargetTexture===!1){const c=f.mapping;if(c===bl||c===ud)if(e.has(f)){const h=e.get(f).texture;return t(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const m=new Gx(h.height/2);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",o),t(m.texture,f.mapping)}else return null}}return f}function o(f){const c=f.target;c.removeEventListener("dispose",o);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class Bg extends Fg{constructor(e=-1,t=1,r=1,o=-1,l=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,f=r+e,c=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,f=l+m*this.view.width,c-=g*this.view.offsetY,h=c-g*this.view.height}this.projectionMatrix.makeOrthographic(l,f,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ws=4,lm=[.125,.215,.35,.446,.526,.582],Gr=20,Qc=new Bg,um=new gt;let Jc=null;const Vr=(1+Math.sqrt(5))/2,ks=1/Vr,cm=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Vr,ks),new W(0,Vr,-ks),new W(ks,0,Vr),new W(-ks,0,Vr),new W(Vr,ks,0),new W(-Vr,ks,0)];class dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){Jc=this._renderer.getRenderTarget(),this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jc),e.scissorTest=!1,gl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jc=this._renderer.getRenderTarget();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:$s,format:fi,colorSpace:Si,depthBuffer:!1},o=fm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PM(l)),this._blurMaterial=LM(l,e,t)}return o}_compileMaterial(e){const t=new bt(this._lodPlanes[0],e);this._renderer.compile(t,Qc)}_sceneToCubeUV(e,t,r,o){const c=new Hn(90,1,t,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,_=g.toneMapping;g.getClearColor(um),g.toneMapping=xr,g.autoClear=!1;const S=new Dg({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),E=new bt(new Wt,S);let w=!1;const x=e.background;x?x.isColor&&(S.color.copy(x),e.background=null,w=!0):(S.color.copy(um),w=!0);for(let v=0;v<6;v++){const O=v%3;O===0?(c.up.set(0,h[v],0),c.lookAt(m[v],0,0)):O===1?(c.up.set(0,0,h[v]),c.lookAt(0,m[v],0)):(c.up.set(0,h[v],0),c.lookAt(0,0,m[v]));const C=this._cubeSize;gl(o,O*C,v>2?C:0,C,C),g.setRenderTarget(o),w&&g.render(E,c),g.render(e,c)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=_,g.autoClear=y,e.background=x}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ys||e.mapping===qs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hm());const l=o?this._cubemapMaterial:this._equirectMaterial,f=new bt(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const h=this._cubeSize;gl(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(f,Qc)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let o=1;o<this._lodPlanes.length;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),f=cm[(o-1)%cm.length];this._blur(e,o-1,o,l,f)}t.autoClear=r}_blur(e,t,r,o,l){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,r,o,"latitudinal",l),this._halfBlur(f,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,f,c){const h=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new bt(this._lodPlanes[o],m),_=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Gr-1),w=l/E,x=isFinite(l)?1+Math.floor(g*w):Gr;x>Gr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Gr}`);const v=[];let O=0;for(let L=0;L<Gr;++L){const J=L/w,b=Math.exp(-J*J/2);v.push(b),L===0?O+=b:L<x&&(O+=2*b)}for(let L=0;L<v.length;L++)v[L]=v[L]/O;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=v,_.latitudinal.value=f==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:C}=this;_.dTheta.value=E,_.mipInt.value=C-r;const R=this._sizeLods[o],D=3*R*(o>C-Ws?o-C+Ws:0),k=4*(this._cubeSize-R);gl(t,D,k,3*R,2*R),h.setRenderTarget(t),h.render(y,Qc)}}function PM(s){const e=[],t=[],r=[];let o=s;const l=s-Ws+1+lm.length;for(let f=0;f<l;f++){const c=Math.pow(2,o);t.push(c);let h=1/c;f>s-Ws?h=lm[f-s+Ws-1]:f===0&&(h=0),r.push(h);const m=1/(c-2),g=-m,y=1+m,_=[g,g,y,g,y,y,g,g,y,y,g,y],S=6,E=6,w=3,x=2,v=1,O=new Float32Array(w*E*S),C=new Float32Array(x*E*S),R=new Float32Array(v*E*S);for(let k=0;k<S;k++){const L=k%3*2/3-1,J=k>2?0:-1,b=[L,J,0,L+2/3,J,0,L+2/3,J+1,0,L,J,0,L+2/3,J+1,0,L,J+1,0];O.set(b,w*E*k),C.set(_,x*E*k);const U=[k,k,k,k,k,k];R.set(U,v*E*k)}const D=new Xi;D.setAttribute("position",new hi(O,w)),D.setAttribute("uv",new hi(C,x)),D.setAttribute("faceIndex",new hi(R,v)),e.push(D),o>Ws&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function fm(s,e,t){const r=new Wi(s,e,t);return r.texture.mapping=Ll,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function gl(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function LM(s,e,t){const r=new Float32Array(Gr),o=new W(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function hm(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function pm(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Td(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function DM(s){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const h=c.mapping,m=h===bl||h===ud,g=h===Ys||h===qs;if(m||g)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let y=e.get(c);return t===null&&(t=new dm(s)),y=m?t.fromEquirectangular(c,y):t.fromCubemap(c,y),e.set(c,y),y.texture}else{if(e.has(c))return e.get(c).texture;{const y=c.image;if(m&&y&&y.height>0||g&&y&&o(y)){t===null&&(t=new dm(s));const _=m?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,_),c.addEventListener("dispose",l),_.texture}else return null}}}return c}function o(c){let h=0;const m=6;for(let g=0;g<m;g++)c[g]!==void 0&&h++;return h===m}function l(c){const h=c.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:f}}function NM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const o=t(r);return o===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function UM(s,e,t,r){const o={},l=new WeakMap;function f(y){const _=y.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);for(const E in _.morphAttributes){const w=_.morphAttributes[E];for(let x=0,v=w.length;x<v;x++)e.remove(w[x])}_.removeEventListener("dispose",f),delete o[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(y,_){return o[_.id]===!0||(_.addEventListener("dispose",f),o[_.id]=!0,t.memory.geometries++),_}function h(y){const _=y.attributes;for(const E in _)e.update(_[E],s.ARRAY_BUFFER);const S=y.morphAttributes;for(const E in S){const w=S[E];for(let x=0,v=w.length;x<v;x++)e.update(w[x],s.ARRAY_BUFFER)}}function m(y){const _=[],S=y.index,E=y.attributes.position;let w=0;if(S!==null){const O=S.array;w=S.version;for(let C=0,R=O.length;C<R;C+=3){const D=O[C+0],k=O[C+1],L=O[C+2];_.push(D,k,k,L,L,D)}}else if(E!==void 0){const O=E.array;w=E.version;for(let C=0,R=O.length/3-1;C<R;C+=3){const D=C+0,k=C+1,L=C+2;_.push(D,k,k,L,L,D)}}else return;const x=new(Tg(_)?Ug:Ng)(_,1);x.version=w;const v=l.get(y);v&&e.remove(v),l.set(y,x)}function g(y){const _=l.get(y);if(_){const S=y.index;S!==null&&_.version<S.version&&m(y)}else m(y);return l.get(y)}return{get:c,update:h,getWireframeAttribute:g}}function IM(s,e,t,r){const o=r.isWebGL2;let l;function f(_){l=_}let c,h;function m(_){c=_.type,h=_.bytesPerElement}function g(_,S){s.drawElements(l,S,c,_*h),t.update(S,l,1)}function y(_,S,E){if(E===0)return;let w,x;if(o)w=s,x="drawElementsInstanced";else if(w=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",w===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}w[x](l,S,c,_*h,E),t.update(S,l,E)}this.setMode=f,this.setIndex=m,this.render=g,this.renderInstances=y}function OM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,f,c){switch(t.calls++,f){case s.TRIANGLES:t.triangles+=c*(l/3);break;case s.LINES:t.lines+=c*(l/2);break;case s.LINE_STRIP:t.lines+=c*(l-1);break;case s.LINE_LOOP:t.lines+=c*l;break;case s.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function FM(s,e){return s[0]-e[0]}function kM(s,e){return Math.abs(e[1])-Math.abs(s[1])}function zM(s,e,t){const r={},o=new Float32Array(8),l=new WeakMap,f=new Ut,c=[];for(let m=0;m<8;m++)c[m]=[m,0];function h(m,g,y){const _=m.morphTargetInfluences;if(e.isWebGL2===!0){const E=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,w=E!==void 0?E.length:0;let x=l.get(g);if(x===void 0||x.count!==w){let ne=function(){q.dispose(),l.delete(g),g.removeEventListener("dispose",ne)};var S=ne;x!==void 0&&x.texture.dispose();const C=g.morphAttributes.position!==void 0,R=g.morphAttributes.normal!==void 0,D=g.morphAttributes.color!==void 0,k=g.morphAttributes.position||[],L=g.morphAttributes.normal||[],J=g.morphAttributes.color||[];let b=0;C===!0&&(b=1),R===!0&&(b=2),D===!0&&(b=3);let U=g.attributes.position.count*b,de=1;U>e.maxTextureSize&&(de=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const ce=new Float32Array(U*de*4*w),q=new Rg(ce,U,de,w);q.type=Bi,q.needsUpdate=!0;const re=b*4;for(let he=0;he<w;he++){const ae=k[he],G=L[he],oe=J[he],j=U*de*4*he;for(let A=0;A<ae.count;A++){const F=A*re;C===!0&&(f.fromBufferAttribute(ae,A),ce[j+F+0]=f.x,ce[j+F+1]=f.y,ce[j+F+2]=f.z,ce[j+F+3]=0),R===!0&&(f.fromBufferAttribute(G,A),ce[j+F+4]=f.x,ce[j+F+5]=f.y,ce[j+F+6]=f.z,ce[j+F+7]=0),D===!0&&(f.fromBufferAttribute(oe,A),ce[j+F+8]=f.x,ce[j+F+9]=f.y,ce[j+F+10]=f.z,ce[j+F+11]=oe.itemSize===4?f.w:1)}}x={count:w,texture:q,size:new We(U,de)},l.set(g,x),g.addEventListener("dispose",ne)}let v=0;for(let C=0;C<_.length;C++)v+=_[C];const O=g.morphTargetsRelative?1:1-v;y.getUniforms().setValue(s,"morphTargetBaseInfluence",O),y.getUniforms().setValue(s,"morphTargetInfluences",_),y.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),y.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const E=_===void 0?0:_.length;let w=r[g.id];if(w===void 0||w.length!==E){w=[];for(let R=0;R<E;R++)w[R]=[R,0];r[g.id]=w}for(let R=0;R<E;R++){const D=w[R];D[0]=R,D[1]=_[R]}w.sort(kM);for(let R=0;R<8;R++)R<E&&w[R][1]?(c[R][0]=w[R][0],c[R][1]=w[R][1]):(c[R][0]=Number.MAX_SAFE_INTEGER,c[R][1]=0);c.sort(FM);const x=g.morphAttributes.position,v=g.morphAttributes.normal;let O=0;for(let R=0;R<8;R++){const D=c[R],k=D[0],L=D[1];k!==Number.MAX_SAFE_INTEGER&&L?(x&&g.getAttribute("morphTarget"+R)!==x[k]&&g.setAttribute("morphTarget"+R,x[k]),v&&g.getAttribute("morphNormal"+R)!==v[k]&&g.setAttribute("morphNormal"+R,v[k]),o[R]=L,O+=L):(x&&g.hasAttribute("morphTarget"+R)===!0&&g.deleteAttribute("morphTarget"+R),v&&g.hasAttribute("morphNormal"+R)===!0&&g.deleteAttribute("morphNormal"+R),o[R]=0)}const C=g.morphTargetsRelative?1:1-O;y.getUniforms().setValue(s,"morphTargetBaseInfluence",C),y.getUniforms().setValue(s,"morphTargetInfluences",o)}}return{update:h}}function BM(s,e,t,r){let o=new WeakMap;function l(h){const m=r.render.frame,g=h.geometry,y=e.get(h,g);if(o.get(y)!==m&&(e.update(y),o.set(y,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),o.get(h)!==m&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,m))),h.isSkinnedMesh){const _=h.skeleton;o.get(_)!==m&&(_.update(),o.set(_,m))}return y}function f(){o=new WeakMap}function c(h){const m=h.target;m.removeEventListener("dispose",c),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:f}}const Hg=new xn,Vg=new Rg,Gg=new bx,Wg=new kg,mm=[],gm=[],vm=new Float32Array(16),_m=new Float32Array(9),xm=new Float32Array(4);function Js(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=mm[o];if(l===void 0&&(l=new Float32Array(o),mm[o]=l),e!==0){r.toArray(l,0);for(let f=1,c=0;f!==e;++f)c+=t,s[f].toArray(l,c)}return l}function en(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function tn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Ul(s,e){let t=gm[e];t===void 0&&(t=new Int32Array(e),gm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function HM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function VM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2fv(this.addr,e),tn(t,e)}}function GM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;s.uniform3fv(this.addr,e),tn(t,e)}}function WM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4fv(this.addr,e),tn(t,e)}}function jM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;xm.set(r),s.uniformMatrix2fv(this.addr,!1,xm),tn(t,r)}}function XM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;_m.set(r),s.uniformMatrix3fv(this.addr,!1,_m),tn(t,r)}}function YM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;vm.set(r),s.uniformMatrix4fv(this.addr,!1,vm),tn(t,r)}}function qM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function $M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2iv(this.addr,e),tn(t,e)}}function KM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3iv(this.addr,e),tn(t,e)}}function ZM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4iv(this.addr,e),tn(t,e)}}function QM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function JM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2uiv(this.addr,e),tn(t,e)}}function eE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3uiv(this.addr,e),tn(t,e)}}function tE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4uiv(this.addr,e),tn(t,e)}}function nE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2D(e||Hg,o)}function iE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Gg,o)}function rE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Wg,o)}function sE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Vg,o)}function aE(s){switch(s){case 5126:return HM;case 35664:return VM;case 35665:return GM;case 35666:return WM;case 35674:return jM;case 35675:return XM;case 35676:return YM;case 5124:case 35670:return qM;case 35667:case 35671:return $M;case 35668:case 35672:return KM;case 35669:case 35673:return ZM;case 5125:return QM;case 36294:return JM;case 36295:return eE;case 36296:return tE;case 35678:case 36198:case 36298:case 36306:case 35682:return nE;case 35679:case 36299:case 36307:return iE;case 35680:case 36300:case 36308:case 36293:return rE;case 36289:case 36303:case 36311:case 36292:return sE}}function oE(s,e){s.uniform1fv(this.addr,e)}function lE(s,e){const t=Js(e,this.size,2);s.uniform2fv(this.addr,t)}function uE(s,e){const t=Js(e,this.size,3);s.uniform3fv(this.addr,t)}function cE(s,e){const t=Js(e,this.size,4);s.uniform4fv(this.addr,t)}function dE(s,e){const t=Js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function fE(s,e){const t=Js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function hE(s,e){const t=Js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function pE(s,e){s.uniform1iv(this.addr,e)}function mE(s,e){s.uniform2iv(this.addr,e)}function gE(s,e){s.uniform3iv(this.addr,e)}function vE(s,e){s.uniform4iv(this.addr,e)}function _E(s,e){s.uniform1uiv(this.addr,e)}function xE(s,e){s.uniform2uiv(this.addr,e)}function yE(s,e){s.uniform3uiv(this.addr,e)}function SE(s,e){s.uniform4uiv(this.addr,e)}function ME(s,e,t){const r=this.cache,o=e.length,l=Ul(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let f=0;f!==o;++f)t.setTexture2D(e[f]||Hg,l[f])}function EE(s,e,t){const r=this.cache,o=e.length,l=Ul(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let f=0;f!==o;++f)t.setTexture3D(e[f]||Gg,l[f])}function wE(s,e,t){const r=this.cache,o=e.length,l=Ul(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let f=0;f!==o;++f)t.setTextureCube(e[f]||Wg,l[f])}function TE(s,e,t){const r=this.cache,o=e.length,l=Ul(t,o);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let f=0;f!==o;++f)t.setTexture2DArray(e[f]||Vg,l[f])}function AE(s){switch(s){case 5126:return oE;case 35664:return lE;case 35665:return uE;case 35666:return cE;case 35674:return dE;case 35675:return fE;case 35676:return hE;case 5124:case 35670:return pE;case 35667:case 35671:return mE;case 35668:case 35672:return gE;case 35669:case 35673:return vE;case 5125:return _E;case 36294:return xE;case 36295:return yE;case 36296:return SE;case 35678:case 36198:case 36298:case 36306:case 35682:return ME;case 35679:case 36299:case 36307:return EE;case 35680:case 36300:case 36308:case 36293:return wE;case 36289:case 36303:case 36311:case 36292:return TE}}class bE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.setValue=aE(t.type)}}class RE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.size=t.size,this.setValue=AE(t.type)}}class CE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,f=o.length;l!==f;++l){const c=o[l];c.setValue(e,t[c.id],r)}}}const ed=/(\w+)(\])?(\[|\.)?/g;function ym(s,e){s.seq.push(e),s.map[e.id]=e}function PE(s,e,t){const r=s.name,o=r.length;for(ed.lastIndex=0;;){const l=ed.exec(r),f=ed.lastIndex;let c=l[1];const h=l[2]==="]",m=l[3];if(h&&(c=c|0),m===void 0||m==="["&&f+2===o){ym(t,m===void 0?new bE(c,s,e):new RE(c,s,e));break}else{let y=t.map[c];y===void 0&&(y=new CE(c),ym(t,y)),t=y}}}class wl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),f=e.getUniformLocation(t,l.name);PE(l,f,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,f=t.length;l!==f;++l){const c=t[l],h=r[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const f=e[o];f.id in t&&r.push(f)}return r}}function Sm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}let LE=0;function DE(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let f=o;f<l;f++){const c=f+1;r.push(`${c===e?">":" "} ${c}: ${t[f]}`)}return r.join(`
`)}function NE(s){switch(s){case Si:return["Linear","( value )"];case Nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),["Linear","( value )"]}}function Mm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const f=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+DE(s.getShaderSource(e),f)}else return o}function UE(s,e){const t=NE(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function IE(s,e){let t;switch(e){case V_:t="Linear";break;case G_:t="Reinhard";break;case W_:t="OptimizedCineon";break;case j_:t="ACESFilmic";break;case X_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function OE(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ga).join(`
`)}function FE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function kE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),f=l.name;let c=1;l.type===s.FLOAT_MAT2&&(c=2),l.type===s.FLOAT_MAT3&&(c=3),l.type===s.FLOAT_MAT4&&(c=4),t[f]={type:l.type,location:s.getAttribLocation(e,f),locationSize:c}}return t}function Ga(s){return s!==""}function Em(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zE=/^[ \t]*#include +<([\w\d./]+)>/gm;function gd(s){return s.replace(zE,HE)}const BE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function HE(s,e){let t=ot[e];if(t===void 0){const r=BE.get(e);if(r!==void 0)t=ot[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return gd(t)}const VE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tm(s){return s.replace(VE,GE)}function GE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Am(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function WE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===fg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===y_?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function jE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ys:case qs:e="ENVMAP_TYPE_CUBE";break;case Ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function XE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function YE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case mg:e="ENVMAP_BLENDING_MULTIPLY";break;case B_:e="ENVMAP_BLENDING_MIX";break;case H_:e="ENVMAP_BLENDING_ADD";break}return e}function qE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function $E(s,e,t,r){const o=s.getContext(),l=t.defines;let f=t.vertexShader,c=t.fragmentShader;const h=WE(t),m=jE(t),g=XE(t),y=YE(t),_=qE(t),S=t.isWebGL2?"":OE(t),E=FE(l),w=o.createProgram();let x,v,O=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ga).join(`
`),x.length>0&&(x+=`
`),v=[S,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ga).join(`
`),v.length>0&&(v+=`
`)):(x=[Am(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ga).join(`
`),v=[S,Am(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+y:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xr?"#define TONE_MAPPING":"",t.toneMapping!==xr?ot.tonemapping_pars_fragment:"",t.toneMapping!==xr?IE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,UE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ga).join(`
`)),f=gd(f),f=Em(f,t),f=wm(f,t),c=gd(c),c=Em(c,t),c=wm(c,t),f=Tm(f),c=Tm(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===Xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const C=O+x+f,R=O+v+c,D=Sm(o,o.VERTEX_SHADER,C),k=Sm(o,o.FRAGMENT_SHADER,R);if(o.attachShader(w,D),o.attachShader(w,k),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w),s.debug.checkShaderErrors){const b=o.getProgramInfoLog(w).trim(),U=o.getShaderInfoLog(D).trim(),de=o.getShaderInfoLog(k).trim();let ce=!0,q=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(ce=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,D,k);else{const re=Mm(o,D,"vertex"),ne=Mm(o,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+re+`
`+ne)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(U===""||de==="")&&(q=!1);q&&(this.diagnostics={runnable:ce,programLog:b,vertexShader:{log:U,prefix:x},fragmentShader:{log:de,prefix:v}})}o.deleteShader(D),o.deleteShader(k);let L;this.getUniforms=function(){return L===void 0&&(L=new wl(o,w)),L};let J;return this.getAttributes=function(){return J===void 0&&(J=kE(o,w)),J},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=LE++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=D,this.fragmentShader=k,this}let KE=0;class ZE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(l)===!1&&(f.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new QE(e),t.set(e,r)),r}}class QE{constructor(e){this.id=KE++,this.code=e,this.usedTimes=0}}function JE(s,e,t,r,o,l,f){const c=new Pg,h=new ZE,m=[],g=o.isWebGL2,y=o.logarithmicDepthBuffer,_=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return b===0?"uv":`uv${b}`}function x(b,U,de,ce,q){const re=ce.fog,ne=q.geometry,he=b.isMeshStandardMaterial?ce.environment:null,ae=(b.isMeshStandardMaterial?t:e).get(b.envMap||he),G=ae&&ae.mapping===Ll?ae.image.height:null,oe=E[b.type];b.precision!==null&&(S=o.getMaxPrecision(b.precision),S!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const j=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,A=j!==void 0?j.length:0;let F=0;ne.morphAttributes.position!==void 0&&(F=1),ne.morphAttributes.normal!==void 0&&(F=2),ne.morphAttributes.color!==void 0&&(F=3);let fe,me,ye,be;if(oe){const St=xi[oe];fe=St.vertexShader,me=St.fragmentShader}else fe=b.vertexShader,me=b.fragmentShader,h.update(b),ye=h.getVertexShaderID(b),be=h.getFragmentShaderID(b);const Ue=s.getRenderTarget(),Ce=q.isInstancedMesh===!0,Ge=!!b.map,vt=!!b.matcap,nt=!!ae,Z=!!b.aoMap,Pt=!!b.lightMap,je=!!b.bumpMap,et=!!b.normalMap,$e=!!b.displacementMap,xt=!!b.emissiveMap,rt=!!b.metalnessMap,tt=!!b.roughnessMap,lt=b.anisotropy>0,wt=b.clearcoat>0,zt=b.iridescence>0,N=b.sheen>0,T=b.transmission>0,te=lt&&!!b.anisotropyMap,we=wt&&!!b.clearcoatMap,_e=wt&&!!b.clearcoatNormalMap,Me=wt&&!!b.clearcoatRoughnessMap,Ve=zt&&!!b.iridescenceMap,Ee=zt&&!!b.iridescenceThicknessMap,se=N&&!!b.sheenColorMap,z=N&&!!b.sheenRoughnessMap,pe=!!b.specularMap,Ne=!!b.specularColorMap,Re=!!b.specularIntensityMap,Le=T&&!!b.transmissionMap,Ke=T&&!!b.thicknessMap,ut=!!b.gradientMap,H=!!b.alphaMap,Pe=b.alphaTest>0,ie=!!b.alphaHash,xe=!!b.extensions,Ae=!!ne.attributes.uv1,at=!!ne.attributes.uv2,pt=!!ne.attributes.uv3;let yt=xr;return b.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(yt=s.toneMapping),{isWebGL2:g,shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:fe,fragmentShader:me,defines:b.defines,customVertexShaderID:ye,customFragmentShaderID:be,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,instancing:Ce,instancingColor:Ce&&q.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:Ue===null?s.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:Si,map:Ge,matcap:vt,envMap:nt,envMapMode:nt&&ae.mapping,envMapCubeUVHeight:G,aoMap:Z,lightMap:Pt,bumpMap:je,normalMap:et,displacementMap:_&&$e,emissiveMap:xt,normalMapObjectSpace:et&&b.normalMapType===sx,normalMapTangentSpace:et&&b.normalMapType===wg,metalnessMap:rt,roughnessMap:tt,anisotropy:lt,anisotropyMap:te,clearcoat:wt,clearcoatMap:we,clearcoatNormalMap:_e,clearcoatRoughnessMap:Me,iridescence:zt,iridescenceMap:Ve,iridescenceThicknessMap:Ee,sheen:N,sheenColorMap:se,sheenRoughnessMap:z,specularMap:pe,specularColorMap:Ne,specularIntensityMap:Re,transmission:T,transmissionMap:Le,thicknessMap:Ke,gradientMap:ut,opaque:b.transparent===!1&&b.blending===js,alphaMap:H,alphaTest:Pe,alphaHash:ie,combine:b.combine,mapUv:Ge&&w(b.map.channel),aoMapUv:Z&&w(b.aoMap.channel),lightMapUv:Pt&&w(b.lightMap.channel),bumpMapUv:je&&w(b.bumpMap.channel),normalMapUv:et&&w(b.normalMap.channel),displacementMapUv:$e&&w(b.displacementMap.channel),emissiveMapUv:xt&&w(b.emissiveMap.channel),metalnessMapUv:rt&&w(b.metalnessMap.channel),roughnessMapUv:tt&&w(b.roughnessMap.channel),anisotropyMapUv:te&&w(b.anisotropyMap.channel),clearcoatMapUv:we&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:_e&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:se&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:z&&w(b.sheenRoughnessMap.channel),specularMapUv:pe&&w(b.specularMap.channel),specularColorMapUv:Ne&&w(b.specularColorMap.channel),specularIntensityMapUv:Re&&w(b.specularIntensityMap.channel),transmissionMapUv:Le&&w(b.transmissionMap.channel),thicknessMapUv:Ke&&w(b.thicknessMap.channel),alphaMapUv:H&&w(b.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(et||lt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:at,vertexUv3s:pt,pointsUvs:q.isPoints===!0&&!!ne.attributes.uv&&(Ge||H),fog:!!re,useFog:b.fog===!0,fogExp2:re&&re.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:q.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:A,morphTextureStride:F,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&de.length>0,shadowMapType:s.shadowMap.type,toneMapping:yt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ge&&b.map.isVideoTexture===!0&&b.map.colorSpace===Nt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ei,flipSided:b.side===Nn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:xe&&b.extensions.derivatives===!0,extensionFragDepth:xe&&b.extensions.fragDepth===!0,extensionDrawBuffers:xe&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:xe&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:g||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||r.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function v(b){const U=[];if(b.shaderID?U.push(b.shaderID):(U.push(b.customVertexShaderID),U.push(b.customFragmentShaderID)),b.defines!==void 0)for(const de in b.defines)U.push(de),U.push(b.defines[de]);return b.isRawShaderMaterial===!1&&(O(U,b),C(U,b),U.push(s.outputColorSpace)),U.push(b.customProgramCacheKey),U.join()}function O(b,U){b.push(U.precision),b.push(U.outputColorSpace),b.push(U.envMapMode),b.push(U.envMapCubeUVHeight),b.push(U.mapUv),b.push(U.alphaMapUv),b.push(U.lightMapUv),b.push(U.aoMapUv),b.push(U.bumpMapUv),b.push(U.normalMapUv),b.push(U.displacementMapUv),b.push(U.emissiveMapUv),b.push(U.metalnessMapUv),b.push(U.roughnessMapUv),b.push(U.anisotropyMapUv),b.push(U.clearcoatMapUv),b.push(U.clearcoatNormalMapUv),b.push(U.clearcoatRoughnessMapUv),b.push(U.iridescenceMapUv),b.push(U.iridescenceThicknessMapUv),b.push(U.sheenColorMapUv),b.push(U.sheenRoughnessMapUv),b.push(U.specularMapUv),b.push(U.specularColorMapUv),b.push(U.specularIntensityMapUv),b.push(U.transmissionMapUv),b.push(U.thicknessMapUv),b.push(U.combine),b.push(U.fogExp2),b.push(U.sizeAttenuation),b.push(U.morphTargetsCount),b.push(U.morphAttributeCount),b.push(U.numDirLights),b.push(U.numPointLights),b.push(U.numSpotLights),b.push(U.numSpotLightMaps),b.push(U.numHemiLights),b.push(U.numRectAreaLights),b.push(U.numDirLightShadows),b.push(U.numPointLightShadows),b.push(U.numSpotLightShadows),b.push(U.numSpotLightShadowsWithMaps),b.push(U.shadowMapType),b.push(U.toneMapping),b.push(U.numClippingPlanes),b.push(U.numClipIntersection),b.push(U.depthPacking)}function C(b,U){c.disableAll(),U.isWebGL2&&c.enable(0),U.supportsVertexTextures&&c.enable(1),U.instancing&&c.enable(2),U.instancingColor&&c.enable(3),U.matcap&&c.enable(4),U.envMap&&c.enable(5),U.normalMapObjectSpace&&c.enable(6),U.normalMapTangentSpace&&c.enable(7),U.clearcoat&&c.enable(8),U.iridescence&&c.enable(9),U.alphaTest&&c.enable(10),U.vertexColors&&c.enable(11),U.vertexAlphas&&c.enable(12),U.vertexUv1s&&c.enable(13),U.vertexUv2s&&c.enable(14),U.vertexUv3s&&c.enable(15),U.vertexTangents&&c.enable(16),U.anisotropy&&c.enable(17),b.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.skinning&&c.enable(4),U.morphTargets&&c.enable(5),U.morphNormals&&c.enable(6),U.morphColors&&c.enable(7),U.premultipliedAlpha&&c.enable(8),U.shadowMapEnabled&&c.enable(9),U.useLegacyLights&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),b.push(c.mask)}function R(b){const U=E[b.type];let de;if(U){const ce=xi[U];de=Og.clone(ce.uniforms)}else de=b.uniforms;return de}function D(b,U){let de;for(let ce=0,q=m.length;ce<q;ce++){const re=m[ce];if(re.cacheKey===U){de=re,++de.usedTimes;break}}return de===void 0&&(de=new $E(s,U,b,l),m.push(de)),de}function k(b){if(--b.usedTimes===0){const U=m.indexOf(b);m[U]=m[m.length-1],m.pop(),b.destroy()}}function L(b){h.remove(b)}function J(){h.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:R,acquireProgram:D,releaseProgram:k,releaseShaderCache:L,programs:m,dispose:J}}function ew(){let s=new WeakMap;function e(l){let f=s.get(l);return f===void 0&&(f={},s.set(l,f)),f}function t(l){s.delete(l)}function r(l,f,c){s.get(l)[f]=c}function o(){s=new WeakMap}return{get:e,remove:t,update:r,dispose:o}}function tw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function bm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Rm(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function f(y,_,S,E,w,x){let v=s[e];return v===void 0?(v={id:y.id,object:y,geometry:_,material:S,groupOrder:E,renderOrder:y.renderOrder,z:w,group:x},s[e]=v):(v.id=y.id,v.object=y,v.geometry=_,v.material=S,v.groupOrder=E,v.renderOrder=y.renderOrder,v.z=w,v.group=x),e++,v}function c(y,_,S,E,w,x){const v=f(y,_,S,E,w,x);S.transmission>0?r.push(v):S.transparent===!0?o.push(v):t.push(v)}function h(y,_,S,E,w,x){const v=f(y,_,S,E,w,x);S.transmission>0?r.unshift(v):S.transparent===!0?o.unshift(v):t.unshift(v)}function m(y,_){t.length>1&&t.sort(y||tw),r.length>1&&r.sort(_||bm),o.length>1&&o.sort(_||bm)}function g(){for(let y=e,_=s.length;y<_;y++){const S=s[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:c,unshift:h,finish:g,sort:m}}function nw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let f;return l===void 0?(f=new Rm,s.set(r,[f])):o>=l.length?(f=new Rm,l.push(f)):f=l[o],f}function t(){s=new WeakMap}return{get:e,dispose:t}}function iw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new gt};break;case"SpotLight":t={position:new W,direction:new W,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new W,halfWidth:new W,halfHeight:new W};break}return s[e.id]=t,t}}}function rw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let sw=0;function aw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ow(s,e){const t=new iw,r=rw(),o={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let g=0;g<9;g++)o.probe.push(new W);const l=new W,f=new jt,c=new jt;function h(g,y){let _=0,S=0,E=0;for(let de=0;de<9;de++)o.probe[de].set(0,0,0);let w=0,x=0,v=0,O=0,C=0,R=0,D=0,k=0,L=0,J=0;g.sort(aw);const b=y===!0?Math.PI:1;for(let de=0,ce=g.length;de<ce;de++){const q=g[de],re=q.color,ne=q.intensity,he=q.distance,ae=q.shadow&&q.shadow.map?q.shadow.map.texture:null;if(q.isAmbientLight)_+=re.r*ne*b,S+=re.g*ne*b,E+=re.b*ne*b;else if(q.isLightProbe)for(let G=0;G<9;G++)o.probe[G].addScaledVector(q.sh.coefficients[G],ne);else if(q.isDirectionalLight){const G=t.get(q);if(G.color.copy(q.color).multiplyScalar(q.intensity*b),q.castShadow){const oe=q.shadow,j=r.get(q);j.shadowBias=oe.bias,j.shadowNormalBias=oe.normalBias,j.shadowRadius=oe.radius,j.shadowMapSize=oe.mapSize,o.directionalShadow[w]=j,o.directionalShadowMap[w]=ae,o.directionalShadowMatrix[w]=q.shadow.matrix,R++}o.directional[w]=G,w++}else if(q.isSpotLight){const G=t.get(q);G.position.setFromMatrixPosition(q.matrixWorld),G.color.copy(re).multiplyScalar(ne*b),G.distance=he,G.coneCos=Math.cos(q.angle),G.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),G.decay=q.decay,o.spot[v]=G;const oe=q.shadow;if(q.map&&(o.spotLightMap[L]=q.map,L++,oe.updateMatrices(q),q.castShadow&&J++),o.spotLightMatrix[v]=oe.matrix,q.castShadow){const j=r.get(q);j.shadowBias=oe.bias,j.shadowNormalBias=oe.normalBias,j.shadowRadius=oe.radius,j.shadowMapSize=oe.mapSize,o.spotShadow[v]=j,o.spotShadowMap[v]=ae,k++}v++}else if(q.isRectAreaLight){const G=t.get(q);G.color.copy(re).multiplyScalar(ne),G.halfWidth.set(q.width*.5,0,0),G.halfHeight.set(0,q.height*.5,0),o.rectArea[O]=G,O++}else if(q.isPointLight){const G=t.get(q);if(G.color.copy(q.color).multiplyScalar(q.intensity*b),G.distance=q.distance,G.decay=q.decay,q.castShadow){const oe=q.shadow,j=r.get(q);j.shadowBias=oe.bias,j.shadowNormalBias=oe.normalBias,j.shadowRadius=oe.radius,j.shadowMapSize=oe.mapSize,j.shadowCameraNear=oe.camera.near,j.shadowCameraFar=oe.camera.far,o.pointShadow[x]=j,o.pointShadowMap[x]=ae,o.pointShadowMatrix[x]=q.shadow.matrix,D++}o.point[x]=G,x++}else if(q.isHemisphereLight){const G=t.get(q);G.skyColor.copy(q.color).multiplyScalar(ne*b),G.groundColor.copy(q.groundColor).multiplyScalar(ne*b),o.hemi[C]=G,C++}}O>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(o.rectAreaLTC1=De.LTC_FLOAT_1,o.rectAreaLTC2=De.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(o.rectAreaLTC1=De.LTC_HALF_1,o.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),o.ambient[0]=_,o.ambient[1]=S,o.ambient[2]=E;const U=o.hash;(U.directionalLength!==w||U.pointLength!==x||U.spotLength!==v||U.rectAreaLength!==O||U.hemiLength!==C||U.numDirectionalShadows!==R||U.numPointShadows!==D||U.numSpotShadows!==k||U.numSpotMaps!==L)&&(o.directional.length=w,o.spot.length=v,o.rectArea.length=O,o.point.length=x,o.hemi.length=C,o.directionalShadow.length=R,o.directionalShadowMap.length=R,o.pointShadow.length=D,o.pointShadowMap.length=D,o.spotShadow.length=k,o.spotShadowMap.length=k,o.directionalShadowMatrix.length=R,o.pointShadowMatrix.length=D,o.spotLightMatrix.length=k+L-J,o.spotLightMap.length=L,o.numSpotLightShadowsWithMaps=J,U.directionalLength=w,U.pointLength=x,U.spotLength=v,U.rectAreaLength=O,U.hemiLength=C,U.numDirectionalShadows=R,U.numPointShadows=D,U.numSpotShadows=k,U.numSpotMaps=L,o.version=sw++)}function m(g,y){let _=0,S=0,E=0,w=0,x=0;const v=y.matrixWorldInverse;for(let O=0,C=g.length;O<C;O++){const R=g[O];if(R.isDirectionalLight){const D=o.directional[_];D.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(v),_++}else if(R.isSpotLight){const D=o.spot[E];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(v),D.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(v),E++}else if(R.isRectAreaLight){const D=o.rectArea[w];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(v),c.identity(),f.copy(R.matrixWorld),f.premultiply(v),c.extractRotation(f),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),D.halfWidth.applyMatrix4(c),D.halfHeight.applyMatrix4(c),w++}else if(R.isPointLight){const D=o.point[S];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(v),S++}else if(R.isHemisphereLight){const D=o.hemi[x];D.direction.setFromMatrixPosition(R.matrixWorld),D.direction.transformDirection(v),x++}}}return{setup:h,setupView:m,state:o}}function Cm(s,e){const t=new ow(s,e),r=[],o=[];function l(){r.length=0,o.length=0}function f(y){r.push(y)}function c(y){o.push(y)}function h(y){t.setup(r,y)}function m(y){t.setupView(r,y)}return{init:l,state:{lightsArray:r,shadowsArray:o,lights:t},setupLights:h,setupLightsView:m,pushLight:f,pushShadow:c}}function lw(s,e){let t=new WeakMap;function r(l,f=0){const c=t.get(l);let h;return c===void 0?(h=new Cm(s,e),t.set(l,[h])):f>=c.length?(h=new Cm(s,e),c.push(h)):h=c[f],h}function o(){t=new WeakMap}return{get:r,dispose:o}}class uw extends Qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ix,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cw extends Qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hw(s,e,t){let r=new Ed;const o=new We,l=new We,f=new Ut,c=new uw({depthPacking:rx}),h=new cw,m={},g=t.maxTextureSize,y={[yi]:Nn,[Nn]:yi,[ei]:ei},_=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:dw,fragmentShader:fw}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new Xi;E.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new bt(E,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fg;let v=this.type;this.render=function(D,k,L){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;const J=s.getRenderTarget(),b=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),de=s.state;de.setBlending(Vi),de.buffers.color.setClear(1,1,1,1),de.buffers.depth.setTest(!0),de.setScissorTest(!1);const ce=v!==ki&&this.type===ki,q=v===ki&&this.type!==ki;for(let re=0,ne=D.length;re<ne;re++){const he=D[re],ae=he.shadow;if(ae===void 0){console.warn("THREE.WebGLShadowMap:",he,"has no shadow.");continue}if(ae.autoUpdate===!1&&ae.needsUpdate===!1)continue;o.copy(ae.mapSize);const G=ae.getFrameExtents();if(o.multiply(G),l.copy(ae.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/G.x),o.x=l.x*G.x,ae.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/G.y),o.y=l.y*G.y,ae.mapSize.y=l.y)),ae.map===null||ce===!0||q===!0){const j=this.type!==ki?{minFilter:kt,magFilter:kt}:{};ae.map!==null&&ae.map.dispose(),ae.map=new Wi(o.x,o.y,j),ae.map.texture.name=he.name+".shadowMap",ae.camera.updateProjectionMatrix()}s.setRenderTarget(ae.map),s.clear();const oe=ae.getViewportCount();for(let j=0;j<oe;j++){const A=ae.getViewport(j);f.set(l.x*A.x,l.y*A.y,l.x*A.z,l.y*A.w),de.viewport(f),ae.updateMatrices(he,j),r=ae.getFrustum(),R(k,L,ae.camera,he,this.type)}ae.isPointLightShadow!==!0&&this.type===ki&&O(ae,L),ae.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(J,b,U)};function O(D,k){const L=e.update(w);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,S.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Wi(o.x,o.y)),_.uniforms.shadow_pass.value=D.map.texture,_.uniforms.resolution.value=D.mapSize,_.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(k,null,L,_,w,null),S.uniforms.shadow_pass.value=D.mapPass.texture,S.uniforms.resolution.value=D.mapSize,S.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(k,null,L,S,w,null)}function C(D,k,L,J){let b=null;const U=L.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(U!==void 0)b=U;else if(b=L.isPointLight===!0?h:c,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const de=b.uuid,ce=k.uuid;let q=m[de];q===void 0&&(q={},m[de]=q);let re=q[ce];re===void 0&&(re=b.clone(),q[ce]=re),b=re}if(b.visible=k.visible,b.wireframe=k.wireframe,J===ki?b.side=k.shadowSide!==null?k.shadowSide:k.side:b.side=k.shadowSide!==null?k.shadowSide:y[k.side],b.alphaMap=k.alphaMap,b.alphaTest=k.alphaTest,b.map=k.map,b.clipShadows=k.clipShadows,b.clippingPlanes=k.clippingPlanes,b.clipIntersection=k.clipIntersection,b.displacementMap=k.displacementMap,b.displacementScale=k.displacementScale,b.displacementBias=k.displacementBias,b.wireframeLinewidth=k.wireframeLinewidth,b.linewidth=k.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const de=s.properties.get(b);de.light=L}return b}function R(D,k,L,J,b){if(D.visible===!1)return;if(D.layers.test(k.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&b===ki)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,D.matrixWorld);const ce=e.update(D),q=D.material;if(Array.isArray(q)){const re=ce.groups;for(let ne=0,he=re.length;ne<he;ne++){const ae=re[ne],G=q[ae.materialIndex];if(G&&G.visible){const oe=C(D,G,J,b);s.renderBufferDirect(L,null,ce,oe,D,ae)}}}else if(q.visible){const re=C(D,q,J,b);s.renderBufferDirect(L,null,ce,re,D,null)}}const de=D.children;for(let ce=0,q=de.length;ce<q;ce++)R(de[ce],k,L,J,b)}}function pw(s,e,t){const r=t.isWebGL2;function o(){let H=!1;const Pe=new Ut;let ie=null;const xe=new Ut(0,0,0,0);return{setMask:function(Ae){ie!==Ae&&!H&&(s.colorMask(Ae,Ae,Ae,Ae),ie=Ae)},setLocked:function(Ae){H=Ae},setClear:function(Ae,at,pt,yt,fn){fn===!0&&(Ae*=yt,at*=yt,pt*=yt),Pe.set(Ae,at,pt,yt),xe.equals(Pe)===!1&&(s.clearColor(Ae,at,pt,yt),xe.copy(Pe))},reset:function(){H=!1,ie=null,xe.set(-1,0,0,0)}}}function l(){let H=!1,Pe=null,ie=null,xe=null;return{setTest:function(Ae){Ae?Ue(s.DEPTH_TEST):Ce(s.DEPTH_TEST)},setMask:function(Ae){Pe!==Ae&&!H&&(s.depthMask(Ae),Pe=Ae)},setFunc:function(Ae){if(ie!==Ae){switch(Ae){case N_:s.depthFunc(s.NEVER);break;case U_:s.depthFunc(s.ALWAYS);break;case I_:s.depthFunc(s.LESS);break;case ld:s.depthFunc(s.LEQUAL);break;case O_:s.depthFunc(s.EQUAL);break;case F_:s.depthFunc(s.GEQUAL);break;case k_:s.depthFunc(s.GREATER);break;case z_:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ie=Ae}},setLocked:function(Ae){H=Ae},setClear:function(Ae){xe!==Ae&&(s.clearDepth(Ae),xe=Ae)},reset:function(){H=!1,Pe=null,ie=null,xe=null}}}function f(){let H=!1,Pe=null,ie=null,xe=null,Ae=null,at=null,pt=null,yt=null,fn=null;return{setTest:function(St){H||(St?Ue(s.STENCIL_TEST):Ce(s.STENCIL_TEST))},setMask:function(St){Pe!==St&&!H&&(s.stencilMask(St),Pe=St)},setFunc:function(St,Un,Vt){(ie!==St||xe!==Un||Ae!==Vt)&&(s.stencilFunc(St,Un,Vt),ie=St,xe=Un,Ae=Vt)},setOp:function(St,Un,Vt){(at!==St||pt!==Un||yt!==Vt)&&(s.stencilOp(St,Un,Vt),at=St,pt=Un,yt=Vt)},setLocked:function(St){H=St},setClear:function(St){fn!==St&&(s.clearStencil(St),fn=St)},reset:function(){H=!1,Pe=null,ie=null,xe=null,Ae=null,at=null,pt=null,yt=null,fn=null}}}const c=new o,h=new l,m=new f,g=new WeakMap,y=new WeakMap;let _={},S={},E=new WeakMap,w=[],x=null,v=!1,O=null,C=null,R=null,D=null,k=null,L=null,J=null,b=!1,U=null,de=null,ce=null,q=null,re=null;const ne=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let he=!1,ae=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(G)[1]),he=ae>=1):G.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),he=ae>=2);let oe=null,j={};const A=s.getParameter(s.SCISSOR_BOX),F=s.getParameter(s.VIEWPORT),fe=new Ut().fromArray(A),me=new Ut().fromArray(F);function ye(H,Pe,ie,xe){const Ae=new Uint8Array(4),at=s.createTexture();s.bindTexture(H,at),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pt=0;pt<ie;pt++)r&&(H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY)?s.texImage3D(Pe,0,s.RGBA,1,1,xe,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(Pe+pt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return at}const be={};be[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),be[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(be[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),be[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),m.setClear(0),Ue(s.DEPTH_TEST),h.setFunc(ld),$e(!1),xt(pp),Ue(s.CULL_FACE),je(Vi);function Ue(H){_[H]!==!0&&(s.enable(H),_[H]=!0)}function Ce(H){_[H]!==!1&&(s.disable(H),_[H]=!1)}function Ge(H,Pe){return S[H]!==Pe?(s.bindFramebuffer(H,Pe),S[H]=Pe,r&&(H===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=Pe),H===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=Pe)),!0):!1}function vt(H,Pe){let ie=w,xe=!1;if(H)if(ie=E.get(Pe),ie===void 0&&(ie=[],E.set(Pe,ie)),H.isWebGLMultipleRenderTargets){const Ae=H.texture;if(ie.length!==Ae.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let at=0,pt=Ae.length;at<pt;at++)ie[at]=s.COLOR_ATTACHMENT0+at;ie.length=Ae.length,xe=!0}}else ie[0]!==s.COLOR_ATTACHMENT0&&(ie[0]=s.COLOR_ATTACHMENT0,xe=!0);else ie[0]!==s.BACK&&(ie[0]=s.BACK,xe=!0);xe&&(t.isWebGL2?s.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function nt(H){return x!==H?(s.useProgram(H),x=H,!0):!1}const Z={[Gs]:s.FUNC_ADD,[M_]:s.FUNC_SUBTRACT,[E_]:s.FUNC_REVERSE_SUBTRACT};if(r)Z[_p]=s.MIN,Z[xp]=s.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&(Z[_p]=H.MIN_EXT,Z[xp]=H.MAX_EXT)}const Pt={[w_]:s.ZERO,[T_]:s.ONE,[A_]:s.SRC_COLOR,[hg]:s.SRC_ALPHA,[D_]:s.SRC_ALPHA_SATURATE,[P_]:s.DST_COLOR,[R_]:s.DST_ALPHA,[b_]:s.ONE_MINUS_SRC_COLOR,[pg]:s.ONE_MINUS_SRC_ALPHA,[L_]:s.ONE_MINUS_DST_COLOR,[C_]:s.ONE_MINUS_DST_ALPHA};function je(H,Pe,ie,xe,Ae,at,pt,yt){if(H===Vi){v===!0&&(Ce(s.BLEND),v=!1);return}if(v===!1&&(Ue(s.BLEND),v=!0),H!==S_){if(H!==O||yt!==b){if((C!==Gs||k!==Gs)&&(s.blendEquation(s.FUNC_ADD),C=Gs,k=Gs),yt)switch(H){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mp:s.blendFunc(s.ONE,s.ONE);break;case gp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case gp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}R=null,D=null,L=null,J=null,O=H,b=yt}return}Ae=Ae||Pe,at=at||ie,pt=pt||xe,(Pe!==C||Ae!==k)&&(s.blendEquationSeparate(Z[Pe],Z[Ae]),C=Pe,k=Ae),(ie!==R||xe!==D||at!==L||pt!==J)&&(s.blendFuncSeparate(Pt[ie],Pt[xe],Pt[at],Pt[pt]),R=ie,D=xe,L=at,J=pt),O=H,b=!1}function et(H,Pe){H.side===ei?Ce(s.CULL_FACE):Ue(s.CULL_FACE);let ie=H.side===Nn;Pe&&(ie=!ie),$e(ie),H.blending===js&&H.transparent===!1?je(Vi):je(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.premultipliedAlpha),h.setFunc(H.depthFunc),h.setTest(H.depthTest),h.setMask(H.depthWrite),c.setMask(H.colorWrite);const xe=H.stencilWrite;m.setTest(xe),xe&&(m.setMask(H.stencilWriteMask),m.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),m.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),tt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Ue(s.SAMPLE_ALPHA_TO_COVERAGE):Ce(s.SAMPLE_ALPHA_TO_COVERAGE)}function $e(H){U!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),U=H)}function xt(H){H!==__?(Ue(s.CULL_FACE),H!==de&&(H===pp?s.cullFace(s.BACK):H===x_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ce(s.CULL_FACE),de=H}function rt(H){H!==ce&&(he&&s.lineWidth(H),ce=H)}function tt(H,Pe,ie){H?(Ue(s.POLYGON_OFFSET_FILL),(q!==Pe||re!==ie)&&(s.polygonOffset(Pe,ie),q=Pe,re=ie)):Ce(s.POLYGON_OFFSET_FILL)}function lt(H){H?Ue(s.SCISSOR_TEST):Ce(s.SCISSOR_TEST)}function wt(H){H===void 0&&(H=s.TEXTURE0+ne-1),oe!==H&&(s.activeTexture(H),oe=H)}function zt(H,Pe,ie){ie===void 0&&(oe===null?ie=s.TEXTURE0+ne-1:ie=oe);let xe=j[ie];xe===void 0&&(xe={type:void 0,texture:void 0},j[ie]=xe),(xe.type!==H||xe.texture!==Pe)&&(oe!==ie&&(s.activeTexture(ie),oe=ie),s.bindTexture(H,Pe||be[H]),xe.type=H,xe.texture=Pe)}function N(){const H=j[oe];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function T(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _e(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ve(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function se(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function z(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ne(H){fe.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),fe.copy(H))}function Re(H){me.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),me.copy(H))}function Le(H,Pe){let ie=y.get(Pe);ie===void 0&&(ie=new WeakMap,y.set(Pe,ie));let xe=ie.get(H);xe===void 0&&(xe=s.getUniformBlockIndex(Pe,H.name),ie.set(H,xe))}function Ke(H,Pe){const xe=y.get(Pe).get(H);g.get(Pe)!==xe&&(s.uniformBlockBinding(Pe,xe,H.__bindingPointIndex),g.set(Pe,xe))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),r===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},oe=null,j={},S={},E=new WeakMap,w=[],x=null,v=!1,O=null,C=null,R=null,D=null,k=null,L=null,J=null,b=!1,U=null,de=null,ce=null,q=null,re=null,fe.set(0,0,s.canvas.width,s.canvas.height),me.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),m.reset()}return{buffers:{color:c,depth:h,stencil:m},enable:Ue,disable:Ce,bindFramebuffer:Ge,drawBuffers:vt,useProgram:nt,setBlending:je,setMaterial:et,setFlipSided:$e,setCullFace:xt,setLineWidth:rt,setPolygonOffset:tt,setScissorTest:lt,activeTexture:wt,bindTexture:zt,unbindTexture:N,compressedTexImage2D:T,compressedTexImage3D:te,texImage2D:z,texImage3D:pe,updateUBOMapping:Le,uniformBlockBinding:Ke,texStorage2D:Ee,texStorage3D:se,texSubImage2D:we,texSubImage3D:_e,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ve,scissor:Ne,viewport:Re,reset:ut}}function mw(s,e,t,r,o,l,f){const c=o.isWebGL2,h=o.maxTextures,m=o.maxCubemapSize,g=o.maxTextureSize,y=o.maxSamples,_=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,S=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let w;const x=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function O(N,T){return v?new OffscreenCanvas(N,T):Cl("canvas")}function C(N,T,te,we){let _e=1;if((N.width>we||N.height>we)&&(_e=we/Math.max(N.width,N.height)),_e<1||T===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const Me=T?md:Math.floor,Ve=Me(_e*N.width),Ee=Me(_e*N.height);w===void 0&&(w=O(Ve,Ee));const se=te?O(Ve,Ee):w;return se.width=Ve,se.height=Ee,se.getContext("2d").drawImage(N,0,0,Ve,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+Ve+"x"+Ee+")."),se}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function R(N){return Yp(N.width)&&Yp(N.height)}function D(N){return c?!1:N.wrapS!==di||N.wrapT!==di||N.minFilter!==kt&&N.minFilter!==Qn}function k(N,T){return N.generateMipmaps&&T&&N.minFilter!==kt&&N.minFilter!==Qn}function L(N){s.generateMipmap(N)}function J(N,T,te,we,_e=!1){if(c===!1)return T;if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Me=T;return T===s.RED&&(te===s.FLOAT&&(Me=s.R32F),te===s.HALF_FLOAT&&(Me=s.R16F),te===s.UNSIGNED_BYTE&&(Me=s.R8)),T===s.RED_INTEGER&&(te===s.UNSIGNED_BYTE&&(Me=s.R8UI),te===s.UNSIGNED_SHORT&&(Me=s.R16UI),te===s.UNSIGNED_INT&&(Me=s.R32UI),te===s.BYTE&&(Me=s.R8I),te===s.SHORT&&(Me=s.R16I),te===s.INT&&(Me=s.R32I)),T===s.RG&&(te===s.FLOAT&&(Me=s.RG32F),te===s.HALF_FLOAT&&(Me=s.RG16F),te===s.UNSIGNED_BYTE&&(Me=s.RG8)),T===s.RGBA&&(te===s.FLOAT&&(Me=s.RGBA32F),te===s.HALF_FLOAT&&(Me=s.RGBA16F),te===s.UNSIGNED_BYTE&&(Me=we===Nt&&_e===!1?s.SRGB8_ALPHA8:s.RGBA8),te===s.UNSIGNED_SHORT_4_4_4_4&&(Me=s.RGBA4),te===s.UNSIGNED_SHORT_5_5_5_1&&(Me=s.RGB5_A1)),(Me===s.R16F||Me===s.R32F||Me===s.RG16F||Me===s.RG32F||Me===s.RGBA16F||Me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Me}function b(N,T,te){return k(N,te)===!0||N.isFramebufferTexture&&N.minFilter!==kt&&N.minFilter!==Qn?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function U(N){return N===kt||N===yp||N===bc?s.NEAREST:s.LINEAR}function de(N){const T=N.target;T.removeEventListener("dispose",de),q(T),T.isVideoTexture&&E.delete(T)}function ce(N){const T=N.target;T.removeEventListener("dispose",ce),ne(T)}function q(N){const T=r.get(N);if(T.__webglInit===void 0)return;const te=N.source,we=x.get(te);if(we){const _e=we[T.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&re(N),Object.keys(we).length===0&&x.delete(te)}r.remove(N)}function re(N){const T=r.get(N);s.deleteTexture(T.__webglTexture);const te=N.source,we=x.get(te);delete we[T.__cacheKey],f.memory.textures--}function ne(N){const T=N.texture,te=r.get(N),we=r.get(T);if(we.__webglTexture!==void 0&&(s.deleteTexture(we.__webglTexture),f.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(te.__webglFramebuffer[_e]))for(let Me=0;Me<te.__webglFramebuffer[_e].length;Me++)s.deleteFramebuffer(te.__webglFramebuffer[_e][Me]);else s.deleteFramebuffer(te.__webglFramebuffer[_e]);te.__webglDepthbuffer&&s.deleteRenderbuffer(te.__webglDepthbuffer[_e])}else{if(Array.isArray(te.__webglFramebuffer))for(let _e=0;_e<te.__webglFramebuffer.length;_e++)s.deleteFramebuffer(te.__webglFramebuffer[_e]);else s.deleteFramebuffer(te.__webglFramebuffer);if(te.__webglDepthbuffer&&s.deleteRenderbuffer(te.__webglDepthbuffer),te.__webglMultisampledFramebuffer&&s.deleteFramebuffer(te.__webglMultisampledFramebuffer),te.__webglColorRenderbuffer)for(let _e=0;_e<te.__webglColorRenderbuffer.length;_e++)te.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(te.__webglColorRenderbuffer[_e]);te.__webglDepthRenderbuffer&&s.deleteRenderbuffer(te.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let _e=0,Me=T.length;_e<Me;_e++){const Ve=r.get(T[_e]);Ve.__webglTexture&&(s.deleteTexture(Ve.__webglTexture),f.memory.textures--),r.remove(T[_e])}r.remove(T),r.remove(N)}let he=0;function ae(){he=0}function G(){const N=he;return N>=h&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+h),he+=1,N}function oe(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function j(N,T){const te=r.get(N);if(N.isVideoTexture&&wt(N),N.isRenderTargetTexture===!1&&N.version>0&&te.__version!==N.version){const we=N.image;if(we===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(we.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(te,N,T);return}}t.bindTexture(s.TEXTURE_2D,te.__webglTexture,s.TEXTURE0+T)}function A(N,T){const te=r.get(N);if(N.version>0&&te.__version!==N.version){Ge(te,N,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,te.__webglTexture,s.TEXTURE0+T)}function F(N,T){const te=r.get(N);if(N.version>0&&te.__version!==N.version){Ge(te,N,T);return}t.bindTexture(s.TEXTURE_3D,te.__webglTexture,s.TEXTURE0+T)}function fe(N,T){const te=r.get(N);if(N.version>0&&te.__version!==N.version){vt(te,N,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture,s.TEXTURE0+T)}const me={[cd]:s.REPEAT,[di]:s.CLAMP_TO_EDGE,[dd]:s.MIRRORED_REPEAT},ye={[kt]:s.NEAREST,[yp]:s.NEAREST_MIPMAP_NEAREST,[bc]:s.NEAREST_MIPMAP_LINEAR,[Qn]:s.LINEAR,[Y_]:s.LINEAR_MIPMAP_NEAREST,[ja]:s.LINEAR_MIPMAP_LINEAR},be={[ox]:s.NEVER,[px]:s.ALWAYS,[lx]:s.LESS,[cx]:s.LEQUAL,[ux]:s.EQUAL,[hx]:s.GEQUAL,[dx]:s.GREATER,[fx]:s.NOTEQUAL};function Ue(N,T,te){if(te?(s.texParameteri(N,s.TEXTURE_WRAP_S,me[T.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,me[T.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,me[T.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,ye[T.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,ye[T.minFilter])):(s.texParameteri(N,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(N,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(T.wrapS!==di||T.wrapT!==di)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(N,s.TEXTURE_MAG_FILTER,U(T.magFilter)),s.texParameteri(N,s.TEXTURE_MIN_FILTER,U(T.minFilter)),T.minFilter!==kt&&T.minFilter!==Qn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,be[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const we=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===kt||T.minFilter!==bc&&T.minFilter!==ja||T.type===Bi&&e.has("OES_texture_float_linear")===!1||c===!1&&T.type===$s&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||r.get(T).__currentAnisotropy)&&(s.texParameterf(N,we.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy)}}function Ce(N,T){let te=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",de));const we=T.source;let _e=x.get(we);_e===void 0&&(_e={},x.set(we,_e));const Me=oe(T);if(Me!==N.__cacheKey){_e[Me]===void 0&&(_e[Me]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,te=!0),_e[Me].usedTimes++;const Ve=_e[N.__cacheKey];Ve!==void 0&&(_e[N.__cacheKey].usedTimes--,Ve.usedTimes===0&&re(T)),N.__cacheKey=Me,N.__webglTexture=_e[Me].texture}return te}function Ge(N,T,te){let we=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(we=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(we=s.TEXTURE_3D);const _e=Ce(N,T),Me=T.source;t.bindTexture(we,N.__webglTexture,s.TEXTURE0+te);const Ve=r.get(Me);if(Me.version!==Ve.__version||_e===!0){t.activeTexture(s.TEXTURE0+te),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Ee=D(T)&&R(T.image)===!1;let se=C(T.image,Ee,!1,g);se=zt(T,se);const z=R(se)||c,pe=l.convert(T.format,T.colorSpace);let Ne=l.convert(T.type),Re=J(T.internalFormat,pe,Ne,T.colorSpace,T.isVideoTexture);Ue(we,T,z);let Le;const Ke=T.mipmaps,ut=c&&T.isVideoTexture!==!0,H=Ve.__version===void 0||_e===!0,Pe=b(T,se,z);if(T.isDepthTexture)Re=s.DEPTH_COMPONENT,c?T.type===Bi?Re=s.DEPTH_COMPONENT32F:T.type===_r?Re=s.DEPTH_COMPONENT24:T.type===Wr?Re=s.DEPTH24_STENCIL8:Re=s.DEPTH_COMPONENT16:T.type===Bi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===jr&&Re===s.DEPTH_COMPONENT&&T.type!==Sd&&T.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=_r,Ne=l.convert(T.type)),T.format===Ks&&Re===s.DEPTH_COMPONENT&&(Re=s.DEPTH_STENCIL,T.type!==Wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Wr,Ne=l.convert(T.type))),H&&(ut?t.texStorage2D(s.TEXTURE_2D,1,Re,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,Re,se.width,se.height,0,pe,Ne,null));else if(T.isDataTexture)if(Ke.length>0&&z){ut&&H&&t.texStorage2D(s.TEXTURE_2D,Pe,Re,Ke[0].width,Ke[0].height);for(let ie=0,xe=Ke.length;ie<xe;ie++)Le=Ke[ie],ut?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Le.width,Le.height,pe,Ne,Le.data):t.texImage2D(s.TEXTURE_2D,ie,Re,Le.width,Le.height,0,pe,Ne,Le.data);T.generateMipmaps=!1}else ut?(H&&t.texStorage2D(s.TEXTURE_2D,Pe,Re,se.width,se.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,se.width,se.height,pe,Ne,se.data)):t.texImage2D(s.TEXTURE_2D,0,Re,se.width,se.height,0,pe,Ne,se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ut&&H&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Re,Ke[0].width,Ke[0].height,se.depth);for(let ie=0,xe=Ke.length;ie<xe;ie++)Le=Ke[ie],T.format!==fi?pe!==null?ut?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,Le.width,Le.height,se.depth,pe,Le.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,Re,Le.width,Le.height,se.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,Le.width,Le.height,se.depth,pe,Ne,Le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,Re,Le.width,Le.height,se.depth,0,pe,Ne,Le.data)}else{ut&&H&&t.texStorage2D(s.TEXTURE_2D,Pe,Re,Ke[0].width,Ke[0].height);for(let ie=0,xe=Ke.length;ie<xe;ie++)Le=Ke[ie],T.format!==fi?pe!==null?ut?t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,Le.width,Le.height,pe,Le.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,Re,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,Le.width,Le.height,pe,Ne,Le.data):t.texImage2D(s.TEXTURE_2D,ie,Re,Le.width,Le.height,0,pe,Ne,Le.data)}else if(T.isDataArrayTexture)ut?(H&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Re,se.width,se.height,se.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,pe,Ne,se.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,se.width,se.height,se.depth,0,pe,Ne,se.data);else if(T.isData3DTexture)ut?(H&&t.texStorage3D(s.TEXTURE_3D,Pe,Re,se.width,se.height,se.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,pe,Ne,se.data)):t.texImage3D(s.TEXTURE_3D,0,Re,se.width,se.height,se.depth,0,pe,Ne,se.data);else if(T.isFramebufferTexture){if(H)if(ut)t.texStorage2D(s.TEXTURE_2D,Pe,Re,se.width,se.height);else{let ie=se.width,xe=se.height;for(let Ae=0;Ae<Pe;Ae++)t.texImage2D(s.TEXTURE_2D,Ae,Re,ie,xe,0,pe,Ne,null),ie>>=1,xe>>=1}}else if(Ke.length>0&&z){ut&&H&&t.texStorage2D(s.TEXTURE_2D,Pe,Re,Ke[0].width,Ke[0].height);for(let ie=0,xe=Ke.length;ie<xe;ie++)Le=Ke[ie],ut?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,pe,Ne,Le):t.texImage2D(s.TEXTURE_2D,ie,Re,pe,Ne,Le);T.generateMipmaps=!1}else ut?(H&&t.texStorage2D(s.TEXTURE_2D,Pe,Re,se.width,se.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,pe,Ne,se)):t.texImage2D(s.TEXTURE_2D,0,Re,pe,Ne,se);k(T,z)&&L(we),Ve.__version=Me.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function vt(N,T,te){if(T.image.length!==6)return;const we=Ce(N,T),_e=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+te);const Me=r.get(_e);if(_e.version!==Me.__version||we===!0){t.activeTexture(s.TEXTURE0+te),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Ve=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,se=[];for(let ie=0;ie<6;ie++)!Ve&&!Ee?se[ie]=C(T.image[ie],!1,!0,m):se[ie]=Ee?T.image[ie].image:T.image[ie],se[ie]=zt(T,se[ie]);const z=se[0],pe=R(z)||c,Ne=l.convert(T.format,T.colorSpace),Re=l.convert(T.type),Le=J(T.internalFormat,Ne,Re,T.colorSpace),Ke=c&&T.isVideoTexture!==!0,ut=Me.__version===void 0||we===!0;let H=b(T,z,pe);Ue(s.TEXTURE_CUBE_MAP,T,pe);let Pe;if(Ve){Ke&&ut&&t.texStorage2D(s.TEXTURE_CUBE_MAP,H,Le,z.width,z.height);for(let ie=0;ie<6;ie++){Pe=se[ie].mipmaps;for(let xe=0;xe<Pe.length;xe++){const Ae=Pe[xe];T.format!==fi?Ne!==null?Ke?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe,0,0,Ae.width,Ae.height,Ne,Ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe,Le,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe,0,0,Ae.width,Ae.height,Ne,Re,Ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe,Le,Ae.width,Ae.height,0,Ne,Re,Ae.data)}}}else{Pe=T.mipmaps,Ke&&ut&&(Pe.length>0&&H++,t.texStorage2D(s.TEXTURE_CUBE_MAP,H,Le,se[0].width,se[0].height));for(let ie=0;ie<6;ie++)if(Ee){Ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,se[ie].width,se[ie].height,Ne,Re,se[ie].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Le,se[ie].width,se[ie].height,0,Ne,Re,se[ie].data);for(let xe=0;xe<Pe.length;xe++){const at=Pe[xe].image[ie].image;Ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe+1,0,0,at.width,at.height,Ne,Re,at.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe+1,Le,at.width,at.height,0,Ne,Re,at.data)}}else{Ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ne,Re,se[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Le,Ne,Re,se[ie]);for(let xe=0;xe<Pe.length;xe++){const Ae=Pe[xe];Ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe+1,0,0,Ne,Re,Ae.image[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe+1,Le,Ne,Re,Ae.image[ie])}}}k(T,pe)&&L(s.TEXTURE_CUBE_MAP),Me.__version=_e.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function nt(N,T,te,we,_e,Me){const Ve=l.convert(te.format,te.colorSpace),Ee=l.convert(te.type),se=J(te.internalFormat,Ve,Ee,te.colorSpace);if(!r.get(T).__hasExternalTextures){const pe=Math.max(1,T.width>>Me),Ne=Math.max(1,T.height>>Me);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,Me,se,pe,Ne,T.depth,0,Ve,Ee,null):t.texImage2D(_e,Me,se,pe,Ne,0,Ve,Ee,null)}t.bindFramebuffer(s.FRAMEBUFFER,N),lt(T)?_.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,we,_e,r.get(te).__webglTexture,0,tt(T)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,we,_e,r.get(te).__webglTexture,Me),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Z(N,T,te){if(s.bindRenderbuffer(s.RENDERBUFFER,N),T.depthBuffer&&!T.stencilBuffer){let we=s.DEPTH_COMPONENT16;if(te||lt(T)){const _e=T.depthTexture;_e&&_e.isDepthTexture&&(_e.type===Bi?we=s.DEPTH_COMPONENT32F:_e.type===_r&&(we=s.DEPTH_COMPONENT24));const Me=tt(T);lt(T)?_.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me,we,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,we,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,we,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,N)}else if(T.depthBuffer&&T.stencilBuffer){const we=tt(T);te&&lt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,s.DEPTH24_STENCIL8,T.width,T.height):lt(T)?_.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,N)}else{const we=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let _e=0;_e<we.length;_e++){const Me=we[_e],Ve=l.convert(Me.format,Me.colorSpace),Ee=l.convert(Me.type),se=J(Me.internalFormat,Ve,Ee,Me.colorSpace),z=tt(T);te&&lt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,z,se,T.width,T.height):lt(T)?_.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z,se,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,se,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),j(T.depthTexture,0);const we=r.get(T.depthTexture).__webglTexture,_e=tt(T);if(T.depthTexture.format===jr)lt(T)?_.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,we,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,we,0);else if(T.depthTexture.format===Ks)lt(T)?_.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,we,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,we,0);else throw new Error("Unknown depthTexture format")}function je(N){const T=r.get(N),te=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Pt(T.__webglFramebuffer,N)}else if(te){T.__webglDepthbuffer=[];for(let we=0;we<6;we++)t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[we]),T.__webglDepthbuffer[we]=s.createRenderbuffer(),Z(T.__webglDepthbuffer[we],N,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),Z(T.__webglDepthbuffer,N,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function et(N,T,te){const we=r.get(N);T!==void 0&&nt(we.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),te!==void 0&&je(N)}function $e(N){const T=N.texture,te=r.get(N),we=r.get(T);N.addEventListener("dispose",ce),N.isWebGLMultipleRenderTargets!==!0&&(we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture()),we.__version=T.version,f.memory.textures++);const _e=N.isWebGLCubeRenderTarget===!0,Me=N.isWebGLMultipleRenderTargets===!0,Ve=R(N)||c;if(_e){te.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(c&&T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer[Ee]=[];for(let se=0;se<T.mipmaps.length;se++)te.__webglFramebuffer[Ee][se]=s.createFramebuffer()}else te.__webglFramebuffer[Ee]=s.createFramebuffer()}else{if(c&&T.mipmaps&&T.mipmaps.length>0){te.__webglFramebuffer=[];for(let Ee=0;Ee<T.mipmaps.length;Ee++)te.__webglFramebuffer[Ee]=s.createFramebuffer()}else te.__webglFramebuffer=s.createFramebuffer();if(Me)if(o.drawBuffers){const Ee=N.texture;for(let se=0,z=Ee.length;se<z;se++){const pe=r.get(Ee[se]);pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture(),f.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&N.samples>0&&lt(N)===!1){const Ee=Me?T:[T];te.__webglMultisampledFramebuffer=s.createFramebuffer(),te.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let se=0;se<Ee.length;se++){const z=Ee[se];te.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,te.__webglColorRenderbuffer[se]);const pe=l.convert(z.format,z.colorSpace),Ne=l.convert(z.type),Re=J(z.internalFormat,pe,Ne,z.colorSpace,N.isXRRenderTarget===!0),Le=tt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,Re,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,te.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(te.__webglDepthRenderbuffer=s.createRenderbuffer(),Z(te.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(_e){t.bindTexture(s.TEXTURE_CUBE_MAP,we.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,T,Ve);for(let Ee=0;Ee<6;Ee++)if(c&&T.mipmaps&&T.mipmaps.length>0)for(let se=0;se<T.mipmaps.length;se++)nt(te.__webglFramebuffer[Ee][se],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,se);else nt(te.__webglFramebuffer[Ee],N,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);k(T,Ve)&&L(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){const Ee=N.texture;for(let se=0,z=Ee.length;se<z;se++){const pe=Ee[se],Ne=r.get(pe);t.bindTexture(s.TEXTURE_2D,Ne.__webglTexture),Ue(s.TEXTURE_2D,pe,Ve),nt(te.__webglFramebuffer,N,pe,s.COLOR_ATTACHMENT0+se,s.TEXTURE_2D,0),k(pe,Ve)&&L(s.TEXTURE_2D)}t.unbindTexture()}else{let Ee=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(c?Ee=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ee,we.__webglTexture),Ue(Ee,T,Ve),c&&T.mipmaps&&T.mipmaps.length>0)for(let se=0;se<T.mipmaps.length;se++)nt(te.__webglFramebuffer[se],N,T,s.COLOR_ATTACHMENT0,Ee,se);else nt(te.__webglFramebuffer,N,T,s.COLOR_ATTACHMENT0,Ee,0);k(T,Ve)&&L(Ee),t.unbindTexture()}N.depthBuffer&&je(N)}function xt(N){const T=R(N)||c,te=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let we=0,_e=te.length;we<_e;we++){const Me=te[we];if(k(Me,T)){const Ve=N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ee=r.get(Me).__webglTexture;t.bindTexture(Ve,Ee),L(Ve),t.unbindTexture()}}}function rt(N){if(c&&N.samples>0&&lt(N)===!1){const T=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],te=N.width,we=N.height;let _e=s.COLOR_BUFFER_BIT;const Me=[],Ve=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=r.get(N),se=N.isWebGLMultipleRenderTargets===!0;if(se)for(let z=0;z<T.length;z++)t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+z,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+z,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let z=0;z<T.length;z++){Me.push(s.COLOR_ATTACHMENT0+z),N.depthBuffer&&Me.push(Ve);const pe=Ee.__ignoreDepthValues!==void 0?Ee.__ignoreDepthValues:!1;if(pe===!1&&(N.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),se&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[z]),pe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ve]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ve])),se){const Ne=r.get(T[z]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ne,0)}s.blitFramebuffer(0,0,te,we,0,0,te,we,_e,s.NEAREST),S&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Me)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let z=0;z<T.length;z++){t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+z,s.RENDERBUFFER,Ee.__webglColorRenderbuffer[z]);const pe=r.get(T[z]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ee.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+z,s.TEXTURE_2D,pe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}}function tt(N){return Math.min(y,N.samples)}function lt(N){const T=r.get(N);return c&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function wt(N){const T=f.render.frame;E.get(N)!==T&&(E.set(N,T),N.update())}function zt(N,T){const te=N.colorSpace,we=N.format,_e=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===hd||te!==Si&&te!==Yr&&(te===Nt||te===Dl?c===!1?e.has("EXT_sRGB")===!0&&we===fi?(N.format=hd,N.minFilter=Qn,N.generateMipmaps=!1):T=Ag.sRGBToLinear(T):(we!==fi||_e!==yr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),T}this.allocateTextureUnit=G,this.resetTextureUnits=ae,this.setTexture2D=j,this.setTexture2DArray=A,this.setTexture3D=F,this.setTextureCube=fe,this.rebindTextures=et,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=lt}const gw=0,Jt=1;function vw(s,e,t){const r=t.isWebGL2;function o(l,f=Yr){let c;const h=f===Nt||f===Dl?Jt:gw;if(l===yr)return s.UNSIGNED_BYTE;if(l===_g)return s.UNSIGNED_SHORT_4_4_4_4;if(l===xg)return s.UNSIGNED_SHORT_5_5_5_1;if(l===q_)return s.BYTE;if(l===$_)return s.SHORT;if(l===Sd)return s.UNSIGNED_SHORT;if(l===vg)return s.INT;if(l===_r)return s.UNSIGNED_INT;if(l===Bi)return s.FLOAT;if(l===$s)return r?s.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(l===K_)return s.ALPHA;if(l===fi)return s.RGBA;if(l===Z_)return s.LUMINANCE;if(l===Q_)return s.LUMINANCE_ALPHA;if(l===jr)return s.DEPTH_COMPONENT;if(l===Ks)return s.DEPTH_STENCIL;if(l===hd)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(l===J_)return s.RED;if(l===yg)return s.RED_INTEGER;if(l===ex)return s.RG;if(l===Sg)return s.RG_INTEGER;if(l===Mg)return s.RGBA_INTEGER;if(l===Rc||l===Cc||l===Pc||l===Lc)if(h===Jt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(l===Rc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(l===Cc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(l===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(l===Lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(l===Rc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(l===Cc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(l===Pc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(l===Lc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(l===Sp||l===Mp||l===Ep||l===wp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(l===Sp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(l===Mp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(l===Ep)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(l===wp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(l===tx)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(l===Tp||l===Ap)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(l===Tp)return h===Jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(l===Ap)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(l===bp||l===Rp||l===Cp||l===Pp||l===Lp||l===Dp||l===Np||l===Up||l===Ip||l===Op||l===Fp||l===kp||l===zp||l===Bp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(l===bp)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(l===Rp)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(l===Cp)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(l===Pp)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(l===Lp)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(l===Dp)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(l===Np)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(l===Up)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(l===Ip)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(l===Op)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(l===Fp)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(l===kp)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(l===zp)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(l===Bp)return h===Jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(l===Dc||l===Hp||l===Vp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(l===Dc)return h===Jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(l===Hp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(l===Vp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(l===nx||l===Gp||l===Wp||l===jp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(l===Dc)return c.COMPRESSED_RED_RGTC1_EXT;if(l===Gp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(l===Wp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(l===jp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return l===Wr?r?s.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):s[l]!==void 0?s[l]:null}return{convert:o}}class _w extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dn extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xw={type:"move"};class td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,f=null;const c=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const w of e.hand.values()){const x=t.getJointPose(w,r),v=this._getHandJoint(m,w);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const g=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],_=g.position.distanceTo(y.position),S=.02,E=.005;m.inputState.pinching&&_>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(xw)))}return c!==null&&(c.visible=o!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new dn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class jg extends xn{constructor(e,t,r,o,l,f,c,h,m,g){if(g=g!==void 0?g:jr,g!==jr&&g!==Ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===jr&&(r=_r),r===void 0&&g===Ks&&(r=Wr),super(null,o,l,f,c,h,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:kt,this.minFilter=h!==void 0?h:kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yw extends $r{constructor(e,t){super();const r=this;let o=null,l=1,f=null,c="local-floor",h=1,m=null,g=null,y=null,_=null,S=null,E=null;const w=t.getContextAttributes();let x=null,v=null;const O=[],C=[],R=new Hn;R.layers.enable(1),R.viewport=new Ut;const D=new Hn;D.layers.enable(2),D.viewport=new Ut;const k=[R,D],L=new _w;L.layers.enable(1),L.layers.enable(2);let J=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(A){let F=O[A];return F===void 0&&(F=new td,O[A]=F),F.getTargetRaySpace()},this.getControllerGrip=function(A){let F=O[A];return F===void 0&&(F=new td,O[A]=F),F.getGripSpace()},this.getHand=function(A){let F=O[A];return F===void 0&&(F=new td,O[A]=F),F.getHandSpace()};function U(A){const F=C.indexOf(A.inputSource);if(F===-1)return;const fe=O[F];fe!==void 0&&(fe.update(A.inputSource,A.frame,m||f),fe.dispatchEvent({type:A.type,data:A.inputSource}))}function de(){o.removeEventListener("select",U),o.removeEventListener("selectstart",U),o.removeEventListener("selectend",U),o.removeEventListener("squeeze",U),o.removeEventListener("squeezestart",U),o.removeEventListener("squeezeend",U),o.removeEventListener("end",de),o.removeEventListener("inputsourceschange",ce);for(let A=0;A<O.length;A++){const F=C[A];F!==null&&(C[A]=null,O[A].disconnect(F))}J=null,b=null,e.setRenderTarget(x),S=null,_=null,y=null,o=null,v=null,j.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(A){l=A,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(A){c=A,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(A){m=A},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return y},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(A){if(o=A,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",U),o.addEventListener("selectstart",U),o.addEventListener("selectend",U),o.addEventListener("squeeze",U),o.addEventListener("squeezestart",U),o.addEventListener("squeezeend",U),o.addEventListener("end",de),o.addEventListener("inputsourceschange",ce),w.xrCompatible!==!0&&await t.makeXRCompatible(),o.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:o.renderState.layers===void 0?w.antialias:!0,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,F),o.updateRenderState({baseLayer:S}),v=new Wi(S.framebufferWidth,S.framebufferHeight,{format:fi,type:yr,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil})}else{let F=null,fe=null,me=null;w.depth&&(me=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,F=w.stencil?Ks:jr,fe=w.stencil?Wr:_r);const ye={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:l};y=new XRWebGLBinding(o,t),_=y.createProjectionLayer(ye),o.updateRenderState({layers:[_]}),v=new Wi(_.textureWidth,_.textureHeight,{format:fi,type:yr,depthTexture:new jg(_.textureWidth,_.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0});const be=e.properties.get(v);be.__ignoreDepthValues=_.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(h),m=null,f=await o.requestReferenceSpace(c),j.setContext(o),j.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function ce(A){for(let F=0;F<A.removed.length;F++){const fe=A.removed[F],me=C.indexOf(fe);me>=0&&(C[me]=null,O[me].disconnect(fe))}for(let F=0;F<A.added.length;F++){const fe=A.added[F];let me=C.indexOf(fe);if(me===-1){for(let be=0;be<O.length;be++)if(be>=C.length){C.push(fe),me=be;break}else if(C[be]===null){C[be]=fe,me=be;break}if(me===-1)break}const ye=O[me];ye&&ye.connect(fe)}}const q=new W,re=new W;function ne(A,F,fe){q.setFromMatrixPosition(F.matrixWorld),re.setFromMatrixPosition(fe.matrixWorld);const me=q.distanceTo(re),ye=F.projectionMatrix.elements,be=fe.projectionMatrix.elements,Ue=ye[14]/(ye[10]-1),Ce=ye[14]/(ye[10]+1),Ge=(ye[9]+1)/ye[5],vt=(ye[9]-1)/ye[5],nt=(ye[8]-1)/ye[0],Z=(be[8]+1)/be[0],Pt=Ue*nt,je=Ue*Z,et=me/(-nt+Z),$e=et*-nt;F.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX($e),A.translateZ(et),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert();const xt=Ue+et,rt=Ce+et,tt=Pt-$e,lt=je+(me-$e),wt=Ge*Ce/rt*xt,zt=vt*Ce/rt*xt;A.projectionMatrix.makePerspective(tt,lt,wt,zt,xt,rt),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}function he(A,F){F===null?A.matrixWorld.copy(A.matrix):A.matrixWorld.multiplyMatrices(F.matrixWorld,A.matrix),A.matrixWorldInverse.copy(A.matrixWorld).invert()}this.updateCamera=function(A){if(o===null)return;L.near=D.near=R.near=A.near,L.far=D.far=R.far=A.far,(J!==L.near||b!==L.far)&&(o.updateRenderState({depthNear:L.near,depthFar:L.far}),J=L.near,b=L.far);const F=A.parent,fe=L.cameras;he(L,F);for(let me=0;me<fe.length;me++)he(fe[me],F);fe.length===2?ne(L,R,D):L.projectionMatrix.copy(R.projectionMatrix),ae(A,L,F)};function ae(A,F,fe){fe===null?A.matrix.copy(F.matrixWorld):(A.matrix.copy(fe.matrixWorld),A.matrix.invert(),A.matrix.multiply(F.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(F.projectionMatrix),A.projectionMatrixInverse.copy(F.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=pd*2*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(_===null&&S===null))return h},this.setFoveation=function(A){h=A,_!==null&&(_.fixedFoveation=A),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=A)};let G=null;function oe(A,F){if(g=F.getViewerPose(m||f),E=F,g!==null){const fe=g.views;S!==null&&(e.setRenderTargetFramebuffer(v,S.framebuffer),e.setRenderTarget(v));let me=!1;fe.length!==L.cameras.length&&(L.cameras.length=0,me=!0);for(let ye=0;ye<fe.length;ye++){const be=fe[ye];let Ue=null;if(S!==null)Ue=S.getViewport(be);else{const Ge=y.getViewSubImage(_,be);Ue=Ge.viewport,ye===0&&(e.setRenderTargetTextures(v,Ge.colorTexture,_.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(v))}let Ce=k[ye];Ce===void 0&&(Ce=new Hn,Ce.layers.enable(ye),Ce.viewport=new Ut,k[ye]=Ce),Ce.matrix.fromArray(be.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(be.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ye===0&&(L.matrix.copy(Ce.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),me===!0&&L.cameras.push(Ce)}}for(let fe=0;fe<O.length;fe++){const me=C[fe],ye=O[fe];me!==null&&ye!==void 0&&ye.update(me,F,m||f)}G&&G(A,F),F.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:F}),E=null}const j=new zg;j.setAnimationLoop(oe),this.setAnimationLoop=function(A){G=A},this.dispose=function(){}}}function Sw(s,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,Ig(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function o(x,v,O,C,R){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(x,v):v.isMeshToonMaterial?(l(x,v),y(x,v)):v.isMeshPhongMaterial?(l(x,v),g(x,v)):v.isMeshStandardMaterial?(l(x,v),_(x,v),v.isMeshPhysicalMaterial&&S(x,v,R)):v.isMeshMatcapMaterial?(l(x,v),E(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),w(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(f(x,v),v.isLineDashedMaterial&&c(x,v)):v.isPointsMaterial?h(x,v,O,C):v.isSpriteMaterial?m(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Nn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Nn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const O=e.get(v).envMap;if(O&&(x.envMap.value=O,x.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap){x.lightMap.value=v.lightMap;const C=s._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=v.lightMapIntensity*C,t(v.lightMap,x.lightMapTransform)}v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function f(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function c(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function h(x,v,O,C){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*O,x.scale.value=C*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function m(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function g(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function y(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function _(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),e.get(v).envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function S(x,v,O){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Nn&&x.clearcoatNormalScale.value.negate())),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=O.texture,x.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,v){v.matcap&&(x.matcap.value=v.matcap)}function w(x,v){const O=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(O.matrixWorld),x.nearDistance.value=O.shadow.camera.near,x.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Mw(s,e,t,r){let o={},l={},f=[];const c=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(O,C){const R=C.program;r.uniformBlockBinding(O,R)}function m(O,C){let R=o[O.id];R===void 0&&(E(O),R=g(O),o[O.id]=R,O.addEventListener("dispose",x));const D=C.program;r.updateUBOMapping(O,D);const k=e.render.frame;l[O.id]!==k&&(_(O),l[O.id]=k)}function g(O){const C=y();O.__bindingPointIndex=C;const R=s.createBuffer(),D=O.__size,k=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,D,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,R),R}function y(){for(let O=0;O<c;O++)if(f.indexOf(O)===-1)return f.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(O){const C=o[O.id],R=O.uniforms,D=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let k=0,L=R.length;k<L;k++){const J=R[k];if(S(J,k,D)===!0){const b=J.__offset,U=Array.isArray(J.value)?J.value:[J.value];let de=0;for(let ce=0;ce<U.length;ce++){const q=U[ce],re=w(q);typeof q=="number"?(J.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,b+de,J.__data)):q.isMatrix3?(J.__data[0]=q.elements[0],J.__data[1]=q.elements[1],J.__data[2]=q.elements[2],J.__data[3]=q.elements[0],J.__data[4]=q.elements[3],J.__data[5]=q.elements[4],J.__data[6]=q.elements[5],J.__data[7]=q.elements[0],J.__data[8]=q.elements[6],J.__data[9]=q.elements[7],J.__data[10]=q.elements[8],J.__data[11]=q.elements[0]):(q.toArray(J.__data,de),de+=re.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,b,J.__data)}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(O,C,R){const D=O.value;if(R[C]===void 0){if(typeof D=="number")R[C]=D;else{const k=Array.isArray(D)?D:[D],L=[];for(let J=0;J<k.length;J++)L.push(k[J].clone());R[C]=L}return!0}else if(typeof D=="number"){if(R[C]!==D)return R[C]=D,!0}else{const k=Array.isArray(R[C])?R[C]:[R[C]],L=Array.isArray(D)?D:[D];for(let J=0;J<k.length;J++){const b=k[J];if(b.equals(L[J])===!1)return b.copy(L[J]),!0}}return!1}function E(O){const C=O.uniforms;let R=0;const D=16;let k=0;for(let L=0,J=C.length;L<J;L++){const b=C[L],U={boundary:0,storage:0},de=Array.isArray(b.value)?b.value:[b.value];for(let ce=0,q=de.length;ce<q;ce++){const re=de[ce],ne=w(re);U.boundary+=ne.boundary,U.storage+=ne.storage}if(b.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=R,L>0){k=R%D;const ce=D-k;k!==0&&ce-U.boundary<0&&(R+=D-k,b.__offset=R)}R+=U.storage}return k=R%D,k>0&&(R+=D-k),O.__size=R,O.__cache={},this}function w(O){const C={boundary:0,storage:0};return typeof O=="number"?(C.boundary=4,C.storage=4):O.isVector2?(C.boundary=8,C.storage=8):O.isVector3||O.isColor?(C.boundary=16,C.storage=12):O.isVector4?(C.boundary=16,C.storage=16):O.isMatrix3?(C.boundary=48,C.storage=48):O.isMatrix4?(C.boundary=64,C.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),C}function x(O){const C=O.target;C.removeEventListener("dispose",x);const R=f.indexOf(C.__bindingPointIndex);f.splice(R,1),s.deleteBuffer(o[C.id]),delete o[C.id],delete l[C.id]}function v(){for(const O in o)s.deleteBuffer(o[O]);f=[],o={},l={}}return{bind:h,update:m,dispose:v}}class Xg{constructor(e={}){const{canvas:t=vx(),context:r=null,depth:o=!0,stencil:l=!0,alpha:f=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let _;r!==null?_=r.getContextAttributes().alpha:_=f;const S=new Uint32Array(4),E=new Int32Array(4);let w=null,x=null;const v=[],O=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Nt,this._useLegacyLights=!1,this.toneMapping=xr,this.toneMappingExposure=1;const C=this;let R=!1,D=0,k=0,L=null,J=-1,b=null;const U=new Ut,de=new Ut;let ce=null;const q=new gt(0);let re=0,ne=t.width,he=t.height,ae=1,G=null,oe=null;const j=new Ut(0,0,ne,he),A=new Ut(0,0,ne,he);let F=!1;const fe=new Ed;let me=!1,ye=!1,be=null;const Ue=new jt,Ce=new We,Ge=new W,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function nt(){return L===null?ae:1}let Z=r;function Pt(P,K){for(let le=0;le<P.length;le++){const Q=P[le],ue=t.getContext(Q,K);if(ue!==null)return ue}return null}try{const P={alpha:!0,depth:o,stencil:l,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yd}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",xe,!1),Z===null){const K=["webgl2","webgl","experimental-webgl"];if(C.isWebGL1Renderer===!0&&K.shift(),Z=Pt(K,P),Z===null)throw Pt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let je,et,$e,xt,rt,tt,lt,wt,zt,N,T,te,we,_e,Me,Ve,Ee,se,z,pe,Ne,Re,Le,Ke;function ut(){je=new NM(Z),et=new bM(Z,je,e),je.init(et),Re=new vw(Z,je,et),$e=new pw(Z,je,et),xt=new OM(Z),rt=new ew,tt=new mw(Z,je,$e,rt,et,Re,xt),lt=new CM(C),wt=new DM(C),zt=new Xx(Z,et),Le=new TM(Z,je,zt,et),N=new UM(Z,zt,xt,Le),T=new BM(Z,N,zt,xt),z=new zM(Z,et,tt),Ve=new RM(rt),te=new JE(C,lt,wt,je,et,Le,Ve),we=new Sw(C,rt),_e=new nw,Me=new lw(je,et),se=new wM(C,lt,wt,$e,T,_,h),Ee=new hw(C,T,et),Ke=new Mw(Z,xt,et,$e),pe=new AM(Z,je,xt,et),Ne=new IM(Z,je,xt,et),xt.programs=te.programs,C.capabilities=et,C.extensions=je,C.properties=rt,C.renderLists=_e,C.shadowMap=Ee,C.state=$e,C.info=xt}ut();const H=new yw(C,Z);this.xr=H,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const P=je.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=je.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(P){P!==void 0&&(ae=P,this.setSize(ne,he,!1))},this.getSize=function(P){return P.set(ne,he)},this.setSize=function(P,K,le=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=P,he=K,t.width=Math.floor(P*ae),t.height=Math.floor(K*ae),le===!0&&(t.style.width=P+"px",t.style.height=K+"px"),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(ne*ae,he*ae).floor()},this.setDrawingBufferSize=function(P,K,le){ne=P,he=K,ae=le,t.width=Math.floor(P*le),t.height=Math.floor(K*le),this.setViewport(0,0,P,K)},this.getCurrentViewport=function(P){return P.copy(U)},this.getViewport=function(P){return P.copy(j)},this.setViewport=function(P,K,le,Q){P.isVector4?j.set(P.x,P.y,P.z,P.w):j.set(P,K,le,Q),$e.viewport(U.copy(j).multiplyScalar(ae).floor())},this.getScissor=function(P){return P.copy(A)},this.setScissor=function(P,K,le,Q){P.isVector4?A.set(P.x,P.y,P.z,P.w):A.set(P,K,le,Q),$e.scissor(de.copy(A).multiplyScalar(ae).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(P){$e.setScissorTest(F=P)},this.setOpaqueSort=function(P){G=P},this.setTransparentSort=function(P){oe=P},this.getClearColor=function(P){return P.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(P=!0,K=!0,le=!0){let Q=0;if(P){let ue=!1;if(L!==null){const Fe=L.texture.format;ue=Fe===Mg||Fe===Sg||Fe===yg}if(ue){const Fe=L.texture.type,Xe=Fe===yr||Fe===_r||Fe===Sd||Fe===Wr||Fe===_g||Fe===xg,Ze=se.getClearColor(),Qe=se.getClearAlpha(),ct=Ze.r,Oe=Ze.g,it=Ze.b;Xe?(S[0]=ct,S[1]=Oe,S[2]=it,S[3]=Qe,Z.clearBufferuiv(Z.COLOR,0,S)):(E[0]=ct,E[1]=Oe,E[2]=it,E[3]=Qe,Z.clearBufferiv(Z.COLOR,0,E))}else Q|=Z.COLOR_BUFFER_BIT}K&&(Q|=Z.DEPTH_BUFFER_BIT),le&&(Q|=Z.STENCIL_BUFFER_BIT),Z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),_e.dispose(),Me.dispose(),rt.dispose(),lt.dispose(),wt.dispose(),T.dispose(),Le.dispose(),Ke.dispose(),te.dispose(),H.dispose(),H.removeEventListener("sessionstart",St),H.removeEventListener("sessionend",Un),be&&(be.dispose(),be=null),Vt.stop()};function Pe(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const P=xt.autoReset,K=Ee.enabled,le=Ee.autoUpdate,Q=Ee.needsUpdate,ue=Ee.type;ut(),xt.autoReset=P,Ee.enabled=K,Ee.autoUpdate=le,Ee.needsUpdate=Q,Ee.type=ue}function xe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ae(P){const K=P.target;K.removeEventListener("dispose",Ae),at(K)}function at(P){pt(P),rt.remove(P)}function pt(P){const K=rt.get(P).programs;K!==void 0&&(K.forEach(function(le){te.releaseProgram(le)}),P.isShaderMaterial&&te.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,le,Q,ue,Fe){K===null&&(K=vt);const Xe=ue.isMesh&&ue.matrixWorld.determinant()<0,Ze=zl(P,K,le,Q,ue);$e.setMaterial(Q,Xe);let Qe=le.index,ct=1;if(Q.wireframe===!0){if(Qe=N.getWireframeAttribute(le),Qe===void 0)return;ct=2}const Oe=le.drawRange,it=le.attributes.position;let Tt=Oe.start*ct,Lt=(Oe.start+Oe.count)*ct;Fe!==null&&(Tt=Math.max(Tt,Fe.start*ct),Lt=Math.min(Lt,(Fe.start+Fe.count)*ct)),Qe!==null?(Tt=Math.max(Tt,0),Lt=Math.min(Lt,Qe.count)):it!=null&&(Tt=Math.max(Tt,0),Lt=Math.min(Lt,it.count));const ln=Lt-Tt;if(ln<0||ln===1/0)return;Le.setup(ue,Q,Ze,le,Qe);let ti,It=pe;if(Qe!==null&&(ti=zt.get(Qe),It=Ne,It.setIndex(ti)),ue.isMesh)Q.wireframe===!0?($e.setLineWidth(Q.wireframeLinewidth*nt()),It.setMode(Z.LINES)):It.setMode(Z.TRIANGLES);else if(ue.isLine){let st=Q.linewidth;st===void 0&&(st=1),$e.setLineWidth(st*nt()),ue.isLineSegments?It.setMode(Z.LINES):ue.isLineLoop?It.setMode(Z.LINE_LOOP):It.setMode(Z.LINE_STRIP)}else ue.isPoints?It.setMode(Z.POINTS):ue.isSprite&&It.setMode(Z.TRIANGLES);if(ue.isInstancedMesh)It.renderInstances(Tt,ln,ue.count);else if(le.isInstancedBufferGeometry){const st=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,An=Math.min(le.instanceCount,st);It.renderInstances(Tt,ln,An)}else It.render(Tt,ln)},this.compile=function(P,K){function le(Q,ue,Fe){Q.transparent===!0&&Q.side===ei&&Q.forceSinglePass===!1?(Q.side=Nn,Q.needsUpdate=!0,Mi(Q,ue,Fe),Q.side=yi,Q.needsUpdate=!0,Mi(Q,ue,Fe),Q.side=ei):Mi(Q,ue,Fe)}x=Me.get(P),x.init(),O.push(x),P.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(x.pushLight(Q),Q.castShadow&&x.pushShadow(Q))}),x.setupLights(C._useLegacyLights),P.traverse(function(Q){const ue=Q.material;if(ue)if(Array.isArray(ue))for(let Fe=0;Fe<ue.length;Fe++){const Xe=ue[Fe];le(Xe,P,Q)}else le(ue,P,Q)}),O.pop(),x=null};let yt=null;function fn(P){yt&&yt(P)}function St(){Vt.stop()}function Un(){Vt.start()}const Vt=new zg;Vt.setAnimationLoop(fn),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(P){yt=P,H.setAnimationLoop(P),P===null?Vt.stop():Vt.start()},H.addEventListener("sessionstart",St),H.addEventListener("sessionend",Un),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(K),K=H.getCamera()),P.isScene===!0&&P.onBeforeRender(C,P,K,L),x=Me.get(P,O.length),x.init(),O.push(x),Ue.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),fe.setFromProjectionMatrix(Ue),ye=this.localClippingEnabled,me=Ve.init(this.clippingPlanes,ye),w=_e.get(P,v.length),w.init(),v.push(w),Kr(P,K,0,C.sortObjects),w.finish(),C.sortObjects===!0&&w.sort(G,oe),this.info.render.frame++,me===!0&&Ve.beginShadows();const le=x.state.shadowsArray;if(Ee.render(le,P,K),me===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(w,P),x.setupLights(C._useLegacyLights),K.isArrayCamera){const Q=K.cameras;for(let ue=0,Fe=Q.length;ue<Fe;ue++){const Xe=Q[ue];Yi(w,P,Xe,Xe.viewport)}}else Yi(w,P,K);L!==null&&(tt.updateMultisampleRenderTarget(L),tt.updateRenderTargetMipmap(L)),P.isScene===!0&&P.onAfterRender(C,P,K),Le.resetDefaultState(),J=-1,b=null,O.pop(),O.length>0?x=O[O.length-1]:x=null,v.pop(),v.length>0?w=v[v.length-1]:w=null};function Kr(P,K,le,Q){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)le=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||fe.intersectsSprite(P)){Q&&Ge.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ue);const Xe=T.update(P),Ze=P.material;Ze.visible&&w.push(P,Xe,Ze,le,Ge.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||fe.intersectsObject(P))){const Xe=T.update(P),Ze=P.material;if(Q&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ge.copy(P.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),Ge.copy(Xe.boundingSphere.center)),Ge.applyMatrix4(P.matrixWorld).applyMatrix4(Ue)),Array.isArray(Ze)){const Qe=Xe.groups;for(let ct=0,Oe=Qe.length;ct<Oe;ct++){const it=Qe[ct],Tt=Ze[it.materialIndex];Tt&&Tt.visible&&w.push(P,Xe,Tt,le,Ge.z,it)}}else Ze.visible&&w.push(P,Xe,Ze,le,Ge.z,null)}}const Fe=P.children;for(let Xe=0,Ze=Fe.length;Xe<Ze;Xe++)Kr(Fe[Xe],K,le,Q)}function Yi(P,K,le,Q){const ue=P.opaque,Fe=P.transmissive,Xe=P.transparent;x.setupLightsView(le),me===!0&&Ve.setGlobalState(C.clippingPlanes,le),Fe.length>0&&kl(ue,Fe,K,le),Q&&$e.viewport(U.copy(Q)),ue.length>0&&pi(ue,K,le),Fe.length>0&&pi(Fe,K,le),Xe.length>0&&pi(Xe,K,le),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function kl(P,K,le,Q){const ue=et.isWebGL2;be===null&&(be=new Wi(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")?$s:yr,minFilter:ja,samples:ue?4:0})),C.getDrawingBufferSize(Ce),ue?be.setSize(Ce.x,Ce.y):be.setSize(md(Ce.x),md(Ce.y));const Fe=C.getRenderTarget();C.setRenderTarget(be),C.getClearColor(q),re=C.getClearAlpha(),re<1&&C.setClearColor(16777215,.5),C.clear();const Xe=C.toneMapping;C.toneMapping=xr,pi(P,le,Q),tt.updateMultisampleRenderTarget(be),tt.updateRenderTargetMipmap(be);let Ze=!1;for(let Qe=0,ct=K.length;Qe<ct;Qe++){const Oe=K[Qe],it=Oe.object,Tt=Oe.geometry,Lt=Oe.material,ln=Oe.group;if(Lt.side===ei&&it.layers.test(Q.layers)){const ti=Lt.side;Lt.side=Nn,Lt.needsUpdate=!0,Mr(it,le,Q,Tt,Lt,ln),Lt.side=ti,Lt.needsUpdate=!0,Ze=!0}}Ze===!0&&(tt.updateMultisampleRenderTarget(be),tt.updateRenderTargetMipmap(be)),C.setRenderTarget(Fe),C.setClearColor(q,re),C.toneMapping=Xe}function pi(P,K,le){const Q=K.isScene===!0?K.overrideMaterial:null;for(let ue=0,Fe=P.length;ue<Fe;ue++){const Xe=P[ue],Ze=Xe.object,Qe=Xe.geometry,ct=Q===null?Xe.material:Q,Oe=Xe.group;Ze.layers.test(le.layers)&&Mr(Ze,K,le,Qe,ct,Oe)}}function Mr(P,K,le,Q,ue,Fe){P.onBeforeRender(C,K,le,Q,ue,Fe),P.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ue.onBeforeRender(C,K,le,Q,P,Fe),ue.transparent===!0&&ue.side===ei&&ue.forceSinglePass===!1?(ue.side=Nn,ue.needsUpdate=!0,C.renderBufferDirect(le,K,Q,ue,P,Fe),ue.side=yi,ue.needsUpdate=!0,C.renderBufferDirect(le,K,Q,ue,P,Fe),ue.side=ei):C.renderBufferDirect(le,K,Q,ue,P,Fe),P.onAfterRender(C,K,le,Q,ue,Fe)}function Mi(P,K,le){K.isScene!==!0&&(K=vt);const Q=rt.get(P),ue=x.state.lights,Fe=x.state.shadowsArray,Xe=ue.state.version,Ze=te.getParameters(P,ue.state,Fe,K,le),Qe=te.getProgramCacheKey(Ze);let ct=Q.programs;Q.environment=P.isMeshStandardMaterial?K.environment:null,Q.fog=K.fog,Q.envMap=(P.isMeshStandardMaterial?wt:lt).get(P.envMap||Q.environment),ct===void 0&&(P.addEventListener("dispose",Ae),ct=new Map,Q.programs=ct);let Oe=ct.get(Qe);if(Oe!==void 0){if(Q.currentProgram===Oe&&Q.lightsStateVersion===Xe)return Zr(P,Ze),Oe}else Ze.uniforms=te.getUniforms(P),P.onBuild(le,Ze,C),P.onBeforeCompile(Ze,C),Oe=te.acquireProgram(Ze,Qe),ct.set(Qe,Oe),Q.uniforms=Ze.uniforms;const it=Q.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(it.clippingPlanes=Ve.uniform),Zr(P,Ze),Q.needsLights=Hl(P),Q.lightsStateVersion=Xe,Q.needsLights&&(it.ambientLightColor.value=ue.state.ambient,it.lightProbe.value=ue.state.probe,it.directionalLights.value=ue.state.directional,it.directionalLightShadows.value=ue.state.directionalShadow,it.spotLights.value=ue.state.spot,it.spotLightShadows.value=ue.state.spotShadow,it.rectAreaLights.value=ue.state.rectArea,it.ltc_1.value=ue.state.rectAreaLTC1,it.ltc_2.value=ue.state.rectAreaLTC2,it.pointLights.value=ue.state.point,it.pointLightShadows.value=ue.state.pointShadow,it.hemisphereLights.value=ue.state.hemi,it.directionalShadowMap.value=ue.state.directionalShadowMap,it.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,it.spotShadowMap.value=ue.state.spotShadowMap,it.spotLightMatrix.value=ue.state.spotLightMatrix,it.spotLightMap.value=ue.state.spotLightMap,it.pointShadowMap.value=ue.state.pointShadowMap,it.pointShadowMatrix.value=ue.state.pointShadowMatrix);const Tt=Oe.getUniforms(),Lt=wl.seqWithValue(Tt.seq,it);return Q.currentProgram=Oe,Q.uniformsList=Lt,Oe}function Zr(P,K){const le=rt.get(P);le.outputColorSpace=K.outputColorSpace,le.instancing=K.instancing,le.instancingColor=K.instancingColor,le.skinning=K.skinning,le.morphTargets=K.morphTargets,le.morphNormals=K.morphNormals,le.morphColors=K.morphColors,le.morphTargetsCount=K.morphTargetsCount,le.numClippingPlanes=K.numClippingPlanes,le.numIntersection=K.numClipIntersection,le.vertexAlphas=K.vertexAlphas,le.vertexTangents=K.vertexTangents,le.toneMapping=K.toneMapping}function zl(P,K,le,Q,ue){K.isScene!==!0&&(K=vt),tt.resetTextureUnits();const Fe=K.fog,Xe=Q.isMeshStandardMaterial?K.environment:null,Ze=L===null?C.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Si,Qe=(Q.isMeshStandardMaterial?wt:lt).get(Q.envMap||Xe),ct=Q.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,Oe=!!le.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),it=!!le.morphAttributes.position,Tt=!!le.morphAttributes.normal,Lt=!!le.morphAttributes.color;let ln=xr;Q.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ln=C.toneMapping);const ti=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,It=ti!==void 0?ti.length:0,st=rt.get(Q),An=x.state.lights;if(me===!0&&(ye===!0||P!==b)){const nn=P===b&&Q.id===J;Ve.setState(Q,P,nn)}let Bt=!1;Q.version===st.__version?(st.needsLights&&st.lightsStateVersion!==An.state.version||st.outputColorSpace!==Ze||ue.isInstancedMesh&&st.instancing===!1||!ue.isInstancedMesh&&st.instancing===!0||ue.isSkinnedMesh&&st.skinning===!1||!ue.isSkinnedMesh&&st.skinning===!0||ue.isInstancedMesh&&st.instancingColor===!0&&ue.instanceColor===null||ue.isInstancedMesh&&st.instancingColor===!1&&ue.instanceColor!==null||st.envMap!==Qe||Q.fog===!0&&st.fog!==Fe||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==Ve.numPlanes||st.numIntersection!==Ve.numIntersection)||st.vertexAlphas!==ct||st.vertexTangents!==Oe||st.morphTargets!==it||st.morphNormals!==Tt||st.morphColors!==Lt||st.toneMapping!==ln||et.isWebGL2===!0&&st.morphTargetsCount!==It)&&(Bt=!0):(Bt=!0,st.__version=Q.version);let Kt=st.currentProgram;Bt===!0&&(Kt=Mi(Q,K,ue));let qa=!1,Er=!1,ea=!1;const Xt=Kt.getUniforms(),Vn=st.uniforms;if($e.useProgram(Kt.program)&&(qa=!0,Er=!0,ea=!0),Q.id!==J&&(J=Q.id,Er=!0),qa||b!==P){Xt.setValue(Z,"projectionMatrix",P.projectionMatrix),Xt.setValue(Z,"viewMatrix",P.matrixWorldInverse);const nn=Xt.map.cameraPosition;nn!==void 0&&nn.setValue(Z,Ge.setFromMatrixPosition(P.matrixWorld)),et.logarithmicDepthBuffer&&Xt.setValue(Z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Xt.setValue(Z,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,Er=!0,ea=!0)}if(ue.isSkinnedMesh){Xt.setOptional(Z,ue,"bindMatrix"),Xt.setOptional(Z,ue,"bindMatrixInverse");const nn=ue.skeleton;nn&&(et.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),Xt.setValue(Z,"boneTexture",nn.boneTexture,tt),Xt.setValue(Z,"boneTextureSize",nn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ei=le.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0&&et.isWebGL2===!0)&&z.update(ue,le,Kt),(Er||st.receiveShadow!==ue.receiveShadow)&&(st.receiveShadow=ue.receiveShadow,Xt.setValue(Z,"receiveShadow",ue.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Vn.envMap.value=Qe,Vn.flipEnvMap.value=Qe.isCubeTexture&&Qe.isRenderTargetTexture===!1?-1:1),Er&&(Xt.setValue(Z,"toneMappingExposure",C.toneMappingExposure),st.needsLights&&Bl(Vn,ea),Fe&&Q.fog===!0&&we.refreshFogUniforms(Vn,Fe),we.refreshMaterialUniforms(Vn,Q,ae,he,be),wl.upload(Z,st.uniformsList,Vn,tt)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(wl.upload(Z,st.uniformsList,Vn,tt),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Xt.setValue(Z,"center",ue.center),Xt.setValue(Z,"modelViewMatrix",ue.modelViewMatrix),Xt.setValue(Z,"normalMatrix",ue.normalMatrix),Xt.setValue(Z,"modelMatrix",ue.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const nn=Q.uniformsGroups;for(let ta=0,Vl=nn.length;ta<Vl;ta++)if(et.isWebGL2){const Qr=nn[ta];Ke.update(Qr,Kt),Ke.bind(Qr,Kt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kt}function Bl(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function Hl(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(P,K,le){rt.get(P.texture).__webglTexture=K,rt.get(P.depthTexture).__webglTexture=le;const Q=rt.get(P);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=le===void 0,Q.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,K){const le=rt.get(P);le.__webglFramebuffer=K,le.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(P,K=0,le=0){L=P,D=K,k=le;let Q=!0,ue=null,Fe=!1,Xe=!1;if(P){const Qe=rt.get(P);Qe.__useDefaultFramebuffer!==void 0?($e.bindFramebuffer(Z.FRAMEBUFFER,null),Q=!1):Qe.__webglFramebuffer===void 0?tt.setupRenderTarget(P):Qe.__hasExternalTextures&&tt.rebindTextures(P,rt.get(P.texture).__webglTexture,rt.get(P.depthTexture).__webglTexture);const ct=P.texture;(ct.isData3DTexture||ct.isDataArrayTexture||ct.isCompressedArrayTexture)&&(Xe=!0);const Oe=rt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Oe[K])?ue=Oe[K][le]:ue=Oe[K],Fe=!0):et.isWebGL2&&P.samples>0&&tt.useMultisampledRTT(P)===!1?ue=rt.get(P).__webglMultisampledFramebuffer:Array.isArray(Oe)?ue=Oe[le]:ue=Oe,U.copy(P.viewport),de.copy(P.scissor),ce=P.scissorTest}else U.copy(j).multiplyScalar(ae).floor(),de.copy(A).multiplyScalar(ae).floor(),ce=F;if($e.bindFramebuffer(Z.FRAMEBUFFER,ue)&&et.drawBuffers&&Q&&$e.drawBuffers(P,ue),$e.viewport(U),$e.scissor(de),$e.setScissorTest(ce),Fe){const Qe=rt.get(P.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+K,Qe.__webglTexture,le)}else if(Xe){const Qe=rt.get(P.texture),ct=K||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Qe.__webglTexture,le||0,ct)}J=-1},this.readRenderTargetPixels=function(P,K,le,Q,ue,Fe,Xe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=rt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ze=Ze[Xe]),Ze){$e.bindFramebuffer(Z.FRAMEBUFFER,Ze);try{const Qe=P.texture,ct=Qe.format,Oe=Qe.type;if(ct!==fi&&Re.convert(ct)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const it=Oe===$s&&(je.has("EXT_color_buffer_half_float")||et.isWebGL2&&je.has("EXT_color_buffer_float"));if(Oe!==yr&&Re.convert(Oe)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===Bi&&(et.isWebGL2||je.has("OES_texture_float")||je.has("WEBGL_color_buffer_float")))&&!it){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-Q&&le>=0&&le<=P.height-ue&&Z.readPixels(K,le,Q,ue,Re.convert(ct),Re.convert(Oe),Fe)}finally{const Qe=L!==null?rt.get(L).__webglFramebuffer:null;$e.bindFramebuffer(Z.FRAMEBUFFER,Qe)}}},this.copyFramebufferToTexture=function(P,K,le=0){const Q=Math.pow(2,-le),ue=Math.floor(K.image.width*Q),Fe=Math.floor(K.image.height*Q);tt.setTexture2D(K,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,le,0,0,P.x,P.y,ue,Fe),$e.unbindTexture()},this.copyTextureToTexture=function(P,K,le,Q=0){const ue=K.image.width,Fe=K.image.height,Xe=Re.convert(le.format),Ze=Re.convert(le.type);tt.setTexture2D(le,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,le.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,le.unpackAlignment),K.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Q,P.x,P.y,ue,Fe,Xe,Ze,K.image.data):K.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Q,P.x,P.y,K.mipmaps[0].width,K.mipmaps[0].height,Xe,K.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,Q,P.x,P.y,Xe,Ze,K.image),Q===0&&le.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),$e.unbindTexture()},this.copyTextureToTexture3D=function(P,K,le,Q,ue=0){if(C.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Fe=P.max.x-P.min.x+1,Xe=P.max.y-P.min.y+1,Ze=P.max.z-P.min.z+1,Qe=Re.convert(Q.format),ct=Re.convert(Q.type);let Oe;if(Q.isData3DTexture)tt.setTexture3D(Q,0),Oe=Z.TEXTURE_3D;else if(Q.isDataArrayTexture)tt.setTexture2DArray(Q,0),Oe=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,Q.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,Q.unpackAlignment);const it=Z.getParameter(Z.UNPACK_ROW_LENGTH),Tt=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),Lt=Z.getParameter(Z.UNPACK_SKIP_PIXELS),ln=Z.getParameter(Z.UNPACK_SKIP_ROWS),ti=Z.getParameter(Z.UNPACK_SKIP_IMAGES),It=le.isCompressedTexture?le.mipmaps[0]:le.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,It.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,It.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,P.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,P.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,P.min.z),le.isDataTexture||le.isData3DTexture?Z.texSubImage3D(Oe,ue,K.x,K.y,K.z,Fe,Xe,Ze,Qe,ct,It.data):le.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(Oe,ue,K.x,K.y,K.z,Fe,Xe,Ze,Qe,It.data)):Z.texSubImage3D(Oe,ue,K.x,K.y,K.z,Fe,Xe,Ze,Qe,ct,It),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,it),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Tt),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Lt),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,ln),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,ti),ue===0&&Q.generateMipmaps&&Z.generateMipmap(Oe),$e.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?tt.setTextureCube(P,0):P.isData3DTexture?tt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?tt.setTexture2DArray(P,0):tt.setTexture2D(P,0),$e.unbindTexture()},this.resetState=function(){D=0,k=0,L=null,$e.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Nt?Xr:Eg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Xr?Nt:Si}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ew extends Xg{}Ew.prototype.isWebGL1Renderer=!0;class ww extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Tw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fd,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Sr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,l=this.stride;o<l;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const En=new W;class Pl{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zi(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),r=Et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),r=Et(r,this.array),o=Et(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Et(t,this.array),r=Et(r,this.array),o=Et(o,this.array),l=Et(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return new hi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[o+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Yg extends Qs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let zs;const za=new W,Bs=new W,Hs=new W,Vs=new We,Ba=new We,qg=new jt,vl=new W,Ha=new W,_l=new W,Pm=new We,nd=new We,Lm=new We;class Aw extends yn{constructor(e){if(super(),this.isSprite=!0,this.type="Sprite",zs===void 0){zs=new Xi;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new Tw(t,5);zs.setIndex([0,1,2,0,2,3]),zs.setAttribute("position",new Pl(r,3,0,!1)),zs.setAttribute("uv",new Pl(r,2,3,!1))}this.geometry=zs,this.material=e!==void 0?e:new Yg,this.center=new We(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bs.setFromMatrixScale(this.matrixWorld),qg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bs.multiplyScalar(-Hs.z);const r=this.material.rotation;let o,l;r!==0&&(l=Math.cos(r),o=Math.sin(r));const f=this.center;xl(vl.set(-.5,-.5,0),Hs,f,Bs,o,l),xl(Ha.set(.5,-.5,0),Hs,f,Bs,o,l),xl(_l.set(.5,.5,0),Hs,f,Bs,o,l),Pm.set(0,0),nd.set(1,0),Lm.set(1,1);let c=e.ray.intersectTriangle(vl,Ha,_l,!1,za);if(c===null&&(xl(Ha.set(-.5,.5,0),Hs,f,Bs,o,l),nd.set(0,1),c=e.ray.intersectTriangle(vl,_l,Ha,!1,za),c===null))return;const h=e.ray.origin.distanceTo(za);h<e.near||h>e.far||t.push({distance:h,point:za.clone(),uv:Jn.getInterpolation(za,vl,Ha,_l,Pm,nd,Lm,new We),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function xl(s,e,t,r,o,l){Vs.subVectors(s,t).addScalar(.5).multiply(r),o!==void 0?(Ba.x=l*Vs.x-o*Vs.y,Ba.y=o*Vs.x+l*Vs.y):Ba.copy(Vs),s.copy(e),s.x+=Ba.x,s.y+=Ba.y,s.applyMatrix4(qg)}class Tl extends xn{constructor(e,t,r,o,l,f,c,h,m){super(e,t,r,o,l,f,c,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xa extends Qs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wg,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $g extends yn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const id=new jt,Dm=new W,Nm=new W;class bw{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ed,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Dm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dm),Nm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nm),t.updateMatrixWorld(),id.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(id),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(id)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Um=new jt,Va=new W,rd=new W;class Rw extends bw{constructor(){super(new Hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new Ut(2,1,1,1),new Ut(0,1,1,1),new Ut(3,1,1,1),new Ut(1,1,1,1),new Ut(3,0,1,1),new Ut(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Va.setFromMatrixPosition(e.matrixWorld),r.position.copy(Va),rd.copy(r.position),rd.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(rd),r.updateMatrixWorld(),o.makeTranslation(-Va.x,-Va.y,-Va.z),Um.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Um)}}class Cw extends $g{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new Rw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Pw extends $g{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Kg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Im(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Im();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Im(){return(typeof performance>"u"?Date:performance).now()}class Om{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Tn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yd);function Ad(s,e,t,r,o,l,f,c){const h=(L,J,b,U)=>[new We(L/f,1-U/c),new We(b/f,1-U/c),new We(b/f,1-J/c),new We(L/f,1-J/c)],m=h(e+l,t,e+r+l,t+l),g=h(e+r+l,t,e+r*2+l,t+l),y=h(e,t+l,e+l,t+l+o),_=h(e+l,t+l,e+r+l,t+l+o),S=h(e+r+l,t+l,e+r+l*2,t+o+l),E=h(e+r+l*2,t+l,e+r*2+l*2,t+o+l),w=s.attributes.uv,x=[S[3],S[2],S[0],S[1]],v=[y[3],y[2],y[0],y[1]],O=[m[3],m[2],m[0],m[1]],C=[g[0],g[1],g[3],g[2]],R=[_[3],_[2],_[0],_[1]],D=[E[3],E[2],E[0],E[1]],k=[];for(const L of[x,v,O,C,R,D])for(const J of L)k.push(J.x,J.y);w.set(new Float32Array(k)),w.needsUpdate=!0}function Kn(s,e,t,r,o,l){Ad(s,e,t,r,o,l,64,64)}function vd(s,e,t,r,o,l){Ad(s,e,t,r,o,l,64,32)}class Hr extends dn{constructor(e,t){super(),Object.defineProperty(this,"innerLayer",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"outerLayer",{enumerable:!0,configurable:!0,writable:!0,value:t}),e.name="inner",t.name="outer"}}class Lw extends dn{constructor(){super(),Object.defineProperty(this,"head",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftLeg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"modelListeners",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slim",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_map",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"layer1Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer1MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2Material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"layer2MaterialBiased",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.layer1Material=new Xa({side:yi}),this.layer2Material=new Xa({side:ei,transparent:!0,alphaTest:1e-5}),this.layer1MaterialBiased=this.layer1Material.clone(),this.layer1MaterialBiased.polygonOffset=!0,this.layer1MaterialBiased.polygonOffsetFactor=1,this.layer1MaterialBiased.polygonOffsetUnits=1,this.layer2MaterialBiased=this.layer2Material.clone(),this.layer2MaterialBiased.polygonOffset=!0,this.layer2MaterialBiased.polygonOffsetFactor=1,this.layer2MaterialBiased.polygonOffsetUnits=1;const e=new Wt(8,8,8);Kn(e,0,0,8,8,8);const t=new bt(e,this.layer1Material),r=new Wt(9,9,9);Kn(r,32,0,8,8,8);const o=new bt(r,this.layer2Material);this.head=new Hr(t,o),this.head.name="head",this.head.add(t,o),t.position.y=4,o.position.y=4,this.add(this.head);const l=new Wt(8,12,4);Kn(l,16,16,8,12,4);const f=new bt(l,this.layer1Material),c=new Wt(8.5,12.5,4.5);Kn(c,16,32,8,12,4);const h=new bt(c,this.layer2Material);this.body=new Hr(f,h),this.body.name="body",this.body.add(f,h),this.body.position.y=-6,this.add(this.body);const m=new Wt,g=new bt(m,this.layer1MaterialBiased);this.modelListeners.push(()=>{g.scale.x=this.slim?3:4,g.scale.y=12,g.scale.z=4,Kn(m,40,16,this.slim?3:4,12,4)});const y=new Wt,_=new bt(y,this.layer2MaterialBiased);this.modelListeners.push(()=>{_.scale.x=this.slim?3.5:4.5,_.scale.y=12.5,_.scale.z=4.5,Kn(y,40,32,this.slim?3:4,12,4)});const S=new dn;S.add(g,_),this.modelListeners.push(()=>{S.position.x=this.slim?-.5:-1}),S.position.y=-4,this.rightArm=new Hr(g,_),this.rightArm.name="rightArm",this.rightArm.add(S),this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.add(this.rightArm);const E=new Wt,w=new bt(E,this.layer1MaterialBiased);this.modelListeners.push(()=>{w.scale.x=this.slim?3:4,w.scale.y=12,w.scale.z=4,Kn(E,32,48,this.slim?3:4,12,4)});const x=new Wt,v=new bt(x,this.layer2MaterialBiased);this.modelListeners.push(()=>{v.scale.x=this.slim?3.5:4.5,v.scale.y=12.5,v.scale.z=4.5,Kn(x,48,48,this.slim?3:4,12,4)});const O=new dn;O.add(w,v),this.modelListeners.push(()=>{O.position.x=this.slim?.5:1}),O.position.y=-4,this.leftArm=new Hr(w,v),this.leftArm.name="leftArm",this.leftArm.add(O),this.leftArm.position.x=5,this.leftArm.position.y=-2,this.add(this.leftArm);const C=new Wt(4,12,4);Kn(C,0,16,4,12,4);const R=new bt(C,this.layer1MaterialBiased),D=new Wt(4.5,12.5,4.5);Kn(D,0,32,4,12,4);const k=new bt(D,this.layer2MaterialBiased),L=new dn;L.add(R,k),L.position.y=-6,this.rightLeg=new Hr(R,k),this.rightLeg.name="rightLeg",this.rightLeg.add(L),this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.add(this.rightLeg);const J=new Wt(4,12,4);Kn(J,16,48,4,12,4);const b=new bt(J,this.layer1MaterialBiased),U=new Wt(4.5,12.5,4.5);Kn(U,0,48,4,12,4);const de=new bt(U,this.layer2MaterialBiased),ce=new dn;ce.add(b,de),ce.position.y=-6,this.leftLeg=new Hr(b,de),this.leftLeg.name="leftLeg",this.leftLeg.add(ce),this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1,this.add(this.leftLeg),this.modelType="default"}get map(){return this._map}set map(e){this._map=e,this.layer1Material.map=e,this.layer1Material.needsUpdate=!0,this.layer1MaterialBiased.map=e,this.layer1MaterialBiased.needsUpdate=!0,this.layer2Material.map=e,this.layer2Material.needsUpdate=!0,this.layer2MaterialBiased.map=e,this.layer2MaterialBiased.needsUpdate=!0}get modelType(){return this.slim?"slim":"default"}set modelType(e){this.slim=e==="slim",this.modelListeners.forEach(t=>t())}getBodyParts(){return this.children.filter(e=>e instanceof Hr)}setInnerLayerVisible(e){this.getBodyParts().forEach(t=>t.innerLayer.visible=e)}setOuterLayerVisible(e){this.getBodyParts().forEach(t=>t.outerLayer.visible=e)}resetJoints(){this.head.rotation.set(0,0,0),this.leftArm.rotation.set(0,0,0),this.rightArm.rotation.set(0,0,0),this.leftLeg.rotation.set(0,0,0),this.rightLeg.rotation.set(0,0,0),this.body.rotation.set(0,0,0),this.head.position.y=0,this.body.position.y=-6,this.body.position.z=0,this.rightArm.position.x=-5,this.rightArm.position.y=-2,this.rightArm.position.z=0,this.leftArm.position.x=5,this.leftArm.position.y=-2,this.leftArm.position.z=0,this.rightLeg.position.x=-1.9,this.rightLeg.position.y=-12,this.rightLeg.position.z=-.1,this.leftLeg.position.x=1.9,this.leftLeg.position.y=-12,this.leftLeg.position.z=-.1}}class Dw extends dn{constructor(){super(),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Xa({side:ei,transparent:!0,alphaTest:1e-5});const e=new Wt(10,16,1);vd(e,0,0,10,16,1),this.cape=new bt(e,this.material),this.cape.position.y=-8,this.cape.position.z=.5,this.add(this.cape)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class Nw extends dn{constructor(){super(),Object.defineProperty(this,"leftWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"rightWing",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Xa({side:ei,transparent:!0,alphaTest:1e-5});const e=new Wt(12,22,4);vd(e,22,0,10,20,2);const t=new bt(e,this.material);t.position.x=-5,t.position.y=-10,t.position.z=-1,this.leftWing=new dn,this.leftWing.add(t),this.add(this.leftWing);const r=new Wt(12,22,4);vd(r,22,0,10,20,2);const o=new bt(r,this.material);o.scale.x=-1,o.position.x=5,o.position.y=-10,o.position.z=-1,this.rightWing=new dn,this.rightWing.add(o),this.add(this.rightWing),this.leftWing.position.x=5,this.leftWing.rotation.x=.2617994,this.resetJoints()}resetJoints(){this.leftWing.rotation.y=.01,this.leftWing.rotation.z=.2617994,this.updateRightWing()}updateRightWing(){this.rightWing.position.x=-this.leftWing.position.x,this.rightWing.position.y=this.leftWing.position.y,this.rightWing.rotation.x=this.leftWing.rotation.x,this.rightWing.rotation.y=-this.leftWing.rotation.y,this.rightWing.rotation.z=-this.leftWing.rotation.z}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}class Uw extends dn{constructor(){super(),Object.defineProperty(this,"rightEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"leftEar",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"material",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.material=new Xa({side:yi});const e=new Wt(8,8,4/3);Ad(e,0,0,6,6,1,14,7),this.rightEar=new bt(e,this.material),this.rightEar.name="rightEar",this.rightEar.position.x=-6,this.add(this.rightEar),this.leftEar=new bt(e,this.material),this.leftEar.name="leftEar",this.leftEar.position.x=6,this.add(this.leftEar)}get map(){return this.material.map}set map(e){this.material.map=e,this.material.needsUpdate=!0}}const Fm=10.8*Math.PI/180;class Iw extends dn{constructor(){super(),Object.defineProperty(this,"skin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cape",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"elytra",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ears",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.skin=new Lw,this.skin.name="skin",this.skin.position.y=8,this.add(this.skin),this.cape=new Dw,this.cape.name="cape",this.cape.position.y=8,this.cape.position.z=-2,this.cape.rotation.x=Fm,this.cape.rotation.y=Math.PI,this.add(this.cape),this.elytra=new Nw,this.elytra.name="elytra",this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.visible=!1,this.add(this.elytra),this.ears=new Uw,this.ears.name="ears",this.ears.position.y=10,this.ears.position.z=2/3,this.ears.visible=!1,this.skin.head.add(this.ears)}get backEquipment(){return this.cape.visible?"cape":this.elytra.visible?"elytra":null}set backEquipment(e){this.cape.visible=e==="cape",this.elytra.visible=e==="elytra"}resetJoints(){this.skin.resetJoints(),this.cape.rotation.x=Fm,this.cape.position.y=8,this.cape.position.z=-2,this.elytra.position.y=8,this.elytra.position.z=-2,this.elytra.rotation.x=0,this.elytra.resetJoints()}}function yl(s){return s instanceof HTMLImageElement||s instanceof HTMLVideoElement||s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&s instanceof OffscreenCanvas}function _d(s,e,t,r,o){const l=s.getImageData(e,t,r,o);for(let f=0;f<r;f++)for(let c=0;c<o;c++){const h=(f+c*r)*4;if(l.data[h+3]!==255)return!0}return!1}function Il(s){return s/64}function km(s,e,t){if(t){if(_d(s,0,0,e,e))return}else if(_d(s,0,0,e,e/2))return;const r=Il(e),o=(l,f,c,h)=>s.clearRect(l*r,f*r,c*r,h*r);o(40,0,8,8),o(48,0,8,8),o(32,8,8,8),o(40,8,8,8),o(48,8,8,8),o(56,8,8,8),t&&(o(4,32,4,4),o(8,32,4,4),o(0,36,4,12),o(4,36,4,12),o(8,36,4,12),o(12,36,4,12),o(20,32,8,4),o(28,32,8,4),o(16,36,4,12),o(20,36,8,12),o(28,36,4,12),o(32,36,8,12),o(44,32,4,4),o(48,32,4,4),o(40,36,4,12),o(44,36,4,12),o(48,36,4,12),o(52,36,12,12),o(4,48,4,4),o(8,48,4,4),o(0,52,4,12),o(4,52,4,12),o(8,52,4,12),o(12,52,4,12),o(52,48,4,4),o(56,48,4,4),o(48,52,4,12),o(52,52,4,12),o(56,52,4,12),o(60,52,4,12))}function Ow(s,e){s.save(),s.scale(-1,1);const t=Il(e),r=(o,l,f,c,h,m)=>s.drawImage(s.canvas,o*t,l*t,f*t,c*t,-h*t,m*t,-f*t,c*t);r(4,16,4,4,20,48),r(8,16,4,4,24,48),r(0,20,4,12,24,52),r(4,20,4,12,20,52),r(8,20,4,12,16,52),r(12,20,4,12,28,52),r(44,16,4,4,36,48),r(48,16,4,4,40,48),r(40,20,4,12,40,52),r(44,20,4,12,36,52),r(48,20,4,12,32,52),r(52,20,4,12,44,52),s.restore()}function Fw(s,e){let t=!1;if(e.width!==e.height)if(e.width===2*e.height)t=!0;else throw new Error(`Bad skin size: ${e.width}x${e.height}`);const r=s.getContext("2d",{willReadFrequently:!0});if(t){const o=e.width;s.width=o,s.height=o,r.clearRect(0,0,o,o),r.drawImage(e,0,0,o,o/2),Ow(r,o),km(r,s.width,!1)}else s.width=e.width,s.height=e.height,r.clearRect(0,0,e.width,e.height),r.drawImage(e,0,0,s.width,s.height),km(r,s.width,!0)}function kw(s){if(s.width===2*s.height)return s.width/64;if(s.width*17===s.height*22)return s.width/22;if(s.width*11===s.height*23)return s.width/46;throw new Error(`Bad cape size: ${s.width}x${s.height}`)}function zw(s,e){const t=kw(e);s.width=64*t,s.height=32*t;const r=s.getContext("2d",{willReadFrequently:!0});r.clearRect(0,0,s.width,s.height),r.drawImage(e,0,0,e.width,e.height)}function Bw(s,e,t,r,o){const l=s.getImageData(e,t,r,o);for(let f=0;f<r;f++)for(let c=0;c<o;c++){const h=(f+c*r)*4;if(!(l.data[h+0]===0&&l.data[h+1]===0&&l.data[h+2]===0&&l.data[h+3]===255))return!1}return!0}function Hw(s,e,t,r,o){const l=s.getImageData(e,t,r,o);for(let f=0;f<r;f++)for(let c=0;c<o;c++){const h=(f+c*r)*4;if(!(l.data[h+0]===255&&l.data[h+1]===255&&l.data[h+2]===255&&l.data[h+3]===255))return!1}return!0}function Vw(s){const e=Il(s.width),t=s.getContext("2d",{willReadFrequently:!0}),r=(c,h,m,g)=>_d(t,c*e,h*e,m*e,g*e),o=(c,h,m,g)=>Bw(t,c*e,h*e,m*e,g*e),l=(c,h,m,g)=>Hw(t,c*e,h*e,m*e,g*e);return r(50,16,2,4)||r(54,20,2,12)||r(42,48,2,4)||r(46,52,2,12)||o(50,16,2,4)&&o(54,20,2,12)&&o(42,48,2,4)&&o(46,52,2,12)||l(50,16,2,4)&&l(54,20,2,12)&&l(42,48,2,4)&&l(46,52,2,12)?"slim":"default"}function Gw(s){if(s.width===s.height*2&&s.height%7===0)return s.height/7;throw new Error(`Bad ears size: ${s.width}x${s.height}`)}function Ww(s,e){const t=Gw(e);s.width=14*t,s.height=7*t;const r=s.getContext("2d",{willReadFrequently:!0});r.clearRect(0,0,s.width,s.height),r.drawImage(e,0,0,e.width,e.height)}function zm(s,e){if(e.width!==e.height&&e.width!==2*e.height)throw new Error(`Bad skin size: ${e.width}x${e.height}`);const t=Il(e.width),r=14*t,o=7*t;s.width=r,s.height=o;const l=s.getContext("2d",{willReadFrequently:!0});l.clearRect(0,0,r,o),l.drawImage(e,24*t,0,r,o,0,0,r,o)}async function Sl(s){const e=document.createElement("img");return new Promise((t,r)=>{e.onload=()=>t(e),e.onerror=r,e.crossOrigin="anonymous",typeof s=="string"?e.src=s:(s.crossOrigin!==void 0&&(e.crossOrigin=s.crossOrigin),s.referrerPolicy!==void 0&&(e.referrerPolicy=s.referrerPolicy),e.src=s.src)})}const Bm={type:"change"},sd={type:"start"},Hm={type:"end"},Ml=new Cg,Vm=new vr,jw=Math.cos(70*gx.DEG2RAD);class Xw extends $r{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ss.ROTATE,MIDDLE:Ss.DOLLY,RIGHT:Ss.PAN},this.touches={ONE:Ms.ROTATE,TWO:Ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(z){z.addEventListener("keydown",T),this._domElementKeyEvents=z},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",T),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(Bm),r.update(),l=o.NONE},this.update=(function(){const z=new W,pe=new qr().setFromUnitVectors(e.up,new W(0,1,0)),Ne=pe.clone().invert(),Re=new W,Le=new qr,Ke=new W,ut=2*Math.PI;return function(Pe=null){const ie=r.object.position;z.copy(ie).sub(r.target),z.applyQuaternion(pe),c.setFromVector3(z),r.autoRotate&&l===o.NONE&&de(b(Pe)),r.enableDamping?(c.theta+=h.theta*r.dampingFactor,c.phi+=h.phi*r.dampingFactor):(c.theta+=h.theta,c.phi+=h.phi);let xe=r.minAzimuthAngle,Ae=r.maxAzimuthAngle;isFinite(xe)&&isFinite(Ae)&&(xe<-Math.PI?xe+=ut:xe>Math.PI&&(xe-=ut),Ae<-Math.PI?Ae+=ut:Ae>Math.PI&&(Ae-=ut),xe<=Ae?c.theta=Math.max(xe,Math.min(Ae,c.theta)):c.theta=c.theta>(xe+Ae)/2?Math.max(xe,c.theta):Math.min(Ae,c.theta)),c.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,c.phi)),c.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(g,r.dampingFactor):r.target.add(g),r.zoomToCursor&&k||r.object.isOrthographicCamera?c.radius=oe(c.radius):c.radius=oe(c.radius*m),z.setFromSpherical(c),z.applyQuaternion(Ne),ie.copy(r.target).add(z),r.object.lookAt(r.target),r.enableDamping===!0?(h.theta*=1-r.dampingFactor,h.phi*=1-r.dampingFactor,g.multiplyScalar(1-r.dampingFactor)):(h.set(0,0,0),g.set(0,0,0));let at=!1;if(r.zoomToCursor&&k){let pt=null;if(r.object.isPerspectiveCamera){const yt=z.length();pt=oe(yt*m);const fn=yt-pt;r.object.position.addScaledVector(R,fn),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const yt=new W(D.x,D.y,0);yt.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),at=!0;const fn=new W(D.x,D.y,0);fn.unproject(r.object),r.object.position.sub(fn).add(yt),r.object.updateMatrixWorld(),pt=z.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;pt!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(pt).add(r.object.position):(Ml.origin.copy(r.object.position),Ml.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(Ml.direction))<jw?e.lookAt(r.target):(Vm.setFromNormalAndCoplanarPoint(r.object.up,r.target),Ml.intersectPlane(Vm,r.target))))}else r.object.isOrthographicCamera&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/m)),r.object.updateProjectionMatrix(),at=!0);return m=1,k=!1,at||Re.distanceToSquared(r.object.position)>f||8*(1-Le.dot(r.object.quaternion))>f||Ke.distanceToSquared(r.target)>0?(r.dispatchEvent(Bm),Re.copy(r.object.position),Le.copy(r.object.quaternion),Ke.copy(r.target),at=!1,!0):!1}})(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",_e),r.domElement.removeEventListener("pointerdown",rt),r.domElement.removeEventListener("pointercancel",lt),r.domElement.removeEventListener("wheel",N),r.domElement.removeEventListener("pointermove",tt),r.domElement.removeEventListener("pointerup",lt),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",T),r._domElementKeyEvents=null)};const r=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=o.NONE;const f=1e-6,c=new Om,h=new Om;let m=1;const g=new W,y=new We,_=new We,S=new We,E=new We,w=new We,x=new We,v=new We,O=new We,C=new We,R=new W,D=new We;let k=!1;const L=[],J={};function b(z){return z!==null?2*Math.PI/60*r.autoRotateSpeed*z:2*Math.PI/60/60*r.autoRotateSpeed}function U(){return Math.pow(.95,r.zoomSpeed)}function de(z){h.theta-=z}function ce(z){h.phi-=z}const q=(function(){const z=new W;return function(Ne,Re){z.setFromMatrixColumn(Re,0),z.multiplyScalar(-Ne),g.add(z)}})(),re=(function(){const z=new W;return function(Ne,Re){r.screenSpacePanning===!0?z.setFromMatrixColumn(Re,1):(z.setFromMatrixColumn(Re,0),z.crossVectors(r.object.up,z)),z.multiplyScalar(Ne),g.add(z)}})(),ne=(function(){const z=new W;return function(Ne,Re){const Le=r.domElement;if(r.object.isPerspectiveCamera){const Ke=r.object.position;z.copy(Ke).sub(r.target);let ut=z.length();ut*=Math.tan(r.object.fov/2*Math.PI/180),q(2*Ne*ut/Le.clientHeight,r.object.matrix),re(2*Re*ut/Le.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(q(Ne*(r.object.right-r.object.left)/r.object.zoom/Le.clientWidth,r.object.matrix),re(Re*(r.object.top-r.object.bottom)/r.object.zoom/Le.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}})();function he(z){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m/=z:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function ae(z){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?m*=z:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function G(z){if(!r.zoomToCursor)return;k=!0;const pe=r.domElement.getBoundingClientRect(),Ne=z.clientX-pe.left,Re=z.clientY-pe.top,Le=pe.width,Ke=pe.height;D.x=Ne/Le*2-1,D.y=-(Re/Ke)*2+1,R.set(D.x,D.y,1).unproject(r.object).sub(r.object.position).normalize()}function oe(z){return Math.max(r.minDistance,Math.min(r.maxDistance,z))}function j(z){y.set(z.clientX,z.clientY)}function A(z){G(z),v.set(z.clientX,z.clientY)}function F(z){E.set(z.clientX,z.clientY)}function fe(z){_.set(z.clientX,z.clientY),S.subVectors(_,y).multiplyScalar(r.rotateSpeed);const pe=r.domElement;de(2*Math.PI*S.x/pe.clientHeight),ce(2*Math.PI*S.y/pe.clientHeight),y.copy(_),r.update()}function me(z){O.set(z.clientX,z.clientY),C.subVectors(O,v),C.y>0?he(U()):C.y<0&&ae(U()),v.copy(O),r.update()}function ye(z){w.set(z.clientX,z.clientY),x.subVectors(w,E).multiplyScalar(r.panSpeed),ne(x.x,x.y),E.copy(w),r.update()}function be(z){G(z),z.deltaY<0?ae(U()):z.deltaY>0&&he(U()),r.update()}function Ue(z){let pe=!1;switch(z.code){case r.keys.UP:z.ctrlKey||z.metaKey||z.shiftKey?ce(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):ne(0,r.keyPanSpeed),pe=!0;break;case r.keys.BOTTOM:z.ctrlKey||z.metaKey||z.shiftKey?ce(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):ne(0,-r.keyPanSpeed),pe=!0;break;case r.keys.LEFT:z.ctrlKey||z.metaKey||z.shiftKey?de(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):ne(r.keyPanSpeed,0),pe=!0;break;case r.keys.RIGHT:z.ctrlKey||z.metaKey||z.shiftKey?de(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):ne(-r.keyPanSpeed,0),pe=!0;break}pe&&(z.preventDefault(),r.update())}function Ce(){if(L.length===1)y.set(L[0].pageX,L[0].pageY);else{const z=.5*(L[0].pageX+L[1].pageX),pe=.5*(L[0].pageY+L[1].pageY);y.set(z,pe)}}function Ge(){if(L.length===1)E.set(L[0].pageX,L[0].pageY);else{const z=.5*(L[0].pageX+L[1].pageX),pe=.5*(L[0].pageY+L[1].pageY);E.set(z,pe)}}function vt(){const z=L[0].pageX-L[1].pageX,pe=L[0].pageY-L[1].pageY,Ne=Math.sqrt(z*z+pe*pe);v.set(0,Ne)}function nt(){r.enableZoom&&vt(),r.enablePan&&Ge()}function Z(){r.enableZoom&&vt(),r.enableRotate&&Ce()}function Pt(z){if(L.length==1)_.set(z.pageX,z.pageY);else{const Ne=se(z),Re=.5*(z.pageX+Ne.x),Le=.5*(z.pageY+Ne.y);_.set(Re,Le)}S.subVectors(_,y).multiplyScalar(r.rotateSpeed);const pe=r.domElement;de(2*Math.PI*S.x/pe.clientHeight),ce(2*Math.PI*S.y/pe.clientHeight),y.copy(_)}function je(z){if(L.length===1)w.set(z.pageX,z.pageY);else{const pe=se(z),Ne=.5*(z.pageX+pe.x),Re=.5*(z.pageY+pe.y);w.set(Ne,Re)}x.subVectors(w,E).multiplyScalar(r.panSpeed),ne(x.x,x.y),E.copy(w)}function et(z){const pe=se(z),Ne=z.pageX-pe.x,Re=z.pageY-pe.y,Le=Math.sqrt(Ne*Ne+Re*Re);O.set(0,Le),C.set(0,Math.pow(O.y/v.y,r.zoomSpeed)),he(C.y),v.copy(O)}function $e(z){r.enableZoom&&et(z),r.enablePan&&je(z)}function xt(z){r.enableZoom&&et(z),r.enableRotate&&Pt(z)}function rt(z){r.enabled!==!1&&(L.length===0&&(r.domElement.setPointerCapture(z.pointerId),r.domElement.addEventListener("pointermove",tt),r.domElement.addEventListener("pointerup",lt)),Me(z),z.pointerType==="touch"?te(z):wt(z))}function tt(z){r.enabled!==!1&&(z.pointerType==="touch"?we(z):zt(z))}function lt(z){Ve(z),L.length===0&&(r.domElement.releasePointerCapture(z.pointerId),r.domElement.removeEventListener("pointermove",tt),r.domElement.removeEventListener("pointerup",lt)),r.dispatchEvent(Hm),l=o.NONE}function wt(z){let pe;switch(z.button){case 0:pe=r.mouseButtons.LEFT;break;case 1:pe=r.mouseButtons.MIDDLE;break;case 2:pe=r.mouseButtons.RIGHT;break;default:pe=-1}switch(pe){case Ss.DOLLY:if(r.enableZoom===!1)return;A(z),l=o.DOLLY;break;case Ss.ROTATE:if(z.ctrlKey||z.metaKey||z.shiftKey){if(r.enablePan===!1)return;F(z),l=o.PAN}else{if(r.enableRotate===!1)return;j(z),l=o.ROTATE}break;case Ss.PAN:if(z.ctrlKey||z.metaKey||z.shiftKey){if(r.enableRotate===!1)return;j(z),l=o.ROTATE}else{if(r.enablePan===!1)return;F(z),l=o.PAN}break;default:l=o.NONE}l!==o.NONE&&r.dispatchEvent(sd)}function zt(z){switch(l){case o.ROTATE:if(r.enableRotate===!1)return;fe(z);break;case o.DOLLY:if(r.enableZoom===!1)return;me(z);break;case o.PAN:if(r.enablePan===!1)return;ye(z);break}}function N(z){r.enabled===!1||r.enableZoom===!1||l!==o.NONE||(z.preventDefault(),r.dispatchEvent(sd),be(z),r.dispatchEvent(Hm))}function T(z){r.enabled===!1||r.enablePan===!1||Ue(z)}function te(z){switch(Ee(z),L.length){case 1:switch(r.touches.ONE){case Ms.ROTATE:if(r.enableRotate===!1)return;Ce(),l=o.TOUCH_ROTATE;break;case Ms.PAN:if(r.enablePan===!1)return;Ge(),l=o.TOUCH_PAN;break;default:l=o.NONE}break;case 2:switch(r.touches.TWO){case Ms.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;nt(),l=o.TOUCH_DOLLY_PAN;break;case Ms.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Z(),l=o.TOUCH_DOLLY_ROTATE;break;default:l=o.NONE}break;default:l=o.NONE}l!==o.NONE&&r.dispatchEvent(sd)}function we(z){switch(Ee(z),l){case o.TOUCH_ROTATE:if(r.enableRotate===!1)return;Pt(z),r.update();break;case o.TOUCH_PAN:if(r.enablePan===!1)return;je(z),r.update();break;case o.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;$e(z),r.update();break;case o.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;xt(z),r.update();break;default:l=o.NONE}}function _e(z){r.enabled!==!1&&z.preventDefault()}function Me(z){L.push(z)}function Ve(z){delete J[z.pointerId];for(let pe=0;pe<L.length;pe++)if(L[pe].pointerId==z.pointerId){L.splice(pe,1);return}}function Ee(z){let pe=J[z.pointerId];pe===void 0&&(pe=new We,J[z.pointerId]=pe),pe.set(z.pageX,z.pageY)}function se(z){const pe=z.pointerId===L[0].pointerId?L[1]:L[0];return J[pe.pointerId]}r.domElement.addEventListener("contextmenu",_e),r.domElement.addEventListener("pointerdown",rt),r.domElement.addEventListener("pointercancel",lt),r.domElement.addEventListener("wheel",N,{passive:!1}),this.update()}}const Yw={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ol{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const qw=new Bg(-1,1,1,-1,0,1),bd=new Xi;bd.setAttribute("position",new Gi([-1,3,0,-1,-1,0,3,-1,0],3));bd.setAttribute("uv",new Gi([0,2,0,0,2,0],2));class $w{constructor(e){this._mesh=new bt(bd,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,qw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Zg extends Ol{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ji?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Og.clone(e.uniforms),this.material=new ji({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new $w(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Gm extends Ol{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const o=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let f,c;this.inverse?(f=0,c=1):(f=1,c=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),l.buffers.stencil.setFunc(o.ALWAYS,f,4294967295),l.buffers.stencil.setClear(c),l.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(o.EQUAL,1,4294967295),l.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),l.buffers.stencil.setLocked(!0)}}class Kw extends Ol{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Zw{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const r=e.getSize(new We);this._width=r.width,this._height=r.height,t=new Wi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$s}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Zg(Yw),this.copyPass.material.blending=Vi,this.clock=new Kg}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let o=0,l=this.passes.length;o<l;o++){const f=this.passes[o];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),f.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),f.needsSwap){if(r){const c=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(c.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(c.EQUAL,1,4294967295)}this.swapBuffers()}Gm!==void 0&&(f instanceof Gm?r=!0:f instanceof Kw&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new We);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(r,o),this.renderTarget2.setSize(r,o);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(r,o)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Qw extends Ol{constructor(e,t,r=null,o=null,l=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=o,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new gt}render(e,t,r){const o=e.autoClear;e.autoClear=!1;let l,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),e.autoClear=o}}const Jw={uniforms:{tDiffuse:{value:null},resolution:{value:new We(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`};class Fl{constructor(){Object.defineProperty(this,"speed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"paused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"progress",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"currentId",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"progress0",{enumerable:!0,configurable:!0,writable:!0,value:new Map}),Object.defineProperty(this,"animationObjects",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}update(e,t){if(this.paused)return;const r=t*this.speed;this.animate(e,r),this.animationObjects.forEach((o,l)=>{const f=this.progress0.get(l);o(e,this.progress-f,l)}),this.progress+=r}addAnimation(e){const t=this.currentId++;return this.progress0.set(t,this.progress),this.animationObjects.set(t,e),t}removeAnimation(e){e!=null&&(this.animationObjects.delete(e),this.progress0.delete(e))}}class Wm extends Fl{animate(e){const t=this.progress*2,r=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+r,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-r;const o=Math.PI*.06;e.cape.rotation.x=Math.sin(t)*.01+o}}class eT extends Fl{constructor(){super(...arguments),Object.defineProperty(this,"headBobbing",{enumerable:!0,configurable:!0,writable:!0,value:!0})}animate(e){const t=this.progress*8;e.skin.leftLeg.rotation.x=Math.sin(t)*.5,e.skin.rightLeg.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.leftArm.rotation.x=Math.sin(t+Math.PI)*.5,e.skin.rightArm.rotation.x=Math.sin(t)*.5;const r=Math.PI*.02;e.skin.leftArm.rotation.z=Math.cos(t)*.03+r,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.03-r,this.headBobbing?(e.skin.head.rotation.y=Math.sin(t/4)*.2,e.skin.head.rotation.x=Math.sin(t/5)*.1):(e.skin.head.rotation.y=0,e.skin.head.rotation.x=0);const o=Math.PI*.06;e.cape.rotation.x=Math.sin(t/1.5)*.06+o}}class tT extends Fl{animate(e){const t=this.progress*15+Math.PI*.5;e.skin.leftLeg.rotation.x=Math.cos(t+Math.PI)*1.3,e.skin.rightLeg.rotation.x=Math.cos(t)*1.3,e.skin.leftArm.rotation.x=Math.cos(t)*1.5,e.skin.rightArm.rotation.x=Math.cos(t+Math.PI)*1.5;const r=Math.PI*.1;e.skin.leftArm.rotation.z=Math.cos(t)*.1+r,e.skin.rightArm.rotation.z=Math.cos(t+Math.PI)*.1-r,e.position.y=Math.cos(t*2),e.position.x=Math.cos(t)*.15,e.rotation.z=Math.cos(t+Math.PI)*.01;const o=Math.PI*.3;e.cape.rotation.x=Math.sin(t*2)*.1+o}}class nT extends Fl{constructor(e="left"){super(),Object.defineProperty(this,"whichArm",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.whichArm=e}animate(e){const t=this.progress*2*Math.PI*.5,r=this.whichArm==="left"?e.skin.leftArm:e.skin.rightArm;r.rotation.x=180,r.rotation.z=Math.sin(t)*.5}}class iT extends Aw{constructor(e="",t={}){const r=new Yg({transparent:!0,alphaTest:1e-5});super(r),Object.defineProperty(this,"painted",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"text",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"font",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"margin",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"backgroundStyle",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"textMaterial",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.textMaterial=r,this.text=e,this.font=t.font===void 0?"48px Minecraft":t.font,this.margin=t.margin===void 0?[5,10,5,10]:t.margin,this.textStyle=t.textStyle===void 0?"white":t.textStyle,this.backgroundStyle=t.backgroundStyle===void 0?"rgba(0,0,0,.25)":t.backgroundStyle,this.height=t.height===void 0?4:t.height,(t.repaintAfterLoaded===void 0?!0:t.repaintAfterLoaded)&&!document.fonts.check(this.font,this.text)?(this.paint(),this.painted=this.loadAndPaint()):(this.paint(),this.painted=Promise.resolve())}async loadAndPaint(){await document.fonts.load(this.font,this.text),this.paint()}paint(){const e=document.createElement("canvas");let t=e.getContext("2d");t.font=this.font;const r=t.measureText(this.text);e.width=this.margin[3]+r.actualBoundingBoxLeft+r.actualBoundingBoxRight+this.margin[1],e.height=this.margin[0]+r.actualBoundingBoxAscent+r.actualBoundingBoxDescent+this.margin[2],t=e.getContext("2d"),t.font=this.font,t.fillStyle=this.backgroundStyle,t.fillRect(0,0,e.width,e.height),t.fillStyle=this.textStyle,t.fillText(this.text,this.margin[3]+r.actualBoundingBoxLeft,this.margin[0]+r.actualBoundingBoxAscent);const o=new Tl(e);o.magFilter=kt,o.minFilter=kt,this.textMaterial.map=o,this.textMaterial.needsUpdate=!0,this.scale.x=e.width/e.height*this.height,this.scale.y=this.height}}class rT{constructor(e={}){Object.defineProperty(this,"canvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"scene",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"camera",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"controls",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerObject",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"playerWrapper",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"globalLight",{enumerable:!0,configurable:!0,writable:!0,value:new Pw(16777215,3)}),Object.defineProperty(this,"cameraLight",{enumerable:!0,configurable:!0,writable:!0,value:new Cw(16777215,.6)}),Object.defineProperty(this,"composer",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"renderPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"fxaaPass",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"capeCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"earsCanvas",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"skinTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"capeTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"earsTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"backgroundTexture",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"_disposed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_renderPaused",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_zoom",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"isUserRotating",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotate",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"autoRotateSpeed",{enumerable:!0,configurable:!0,writable:!0,value:1}),Object.defineProperty(this,"_animation",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"clock",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"animationID",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextLost",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onContextRestored",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pixelRatio",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"devicePixelRatioQuery",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"onDevicePixelRatioChange",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_nameTag",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"nameTagYOffset",{enumerable:!0,configurable:!0,writable:!0,value:20}),this.canvas=e.canvas===void 0?document.createElement("canvas"):e.canvas,this.skinCanvas=document.createElement("canvas"),this.capeCanvas=document.createElement("canvas"),this.earsCanvas=document.createElement("canvas"),this.scene=new ww,this.camera=new Hn,this.camera.add(this.cameraLight),this.scene.add(this.camera),this.scene.add(this.globalLight),Zn.enabled=!1,this.renderer=new Xg({canvas:this.canvas,preserveDrawingBuffer:e.preserveDrawingBuffer===!0}),this.onDevicePixelRatioChange=()=>{this.renderer.setPixelRatio(window.devicePixelRatio),this.updateComposerSize(),this._pixelRatio==="match-device"&&(this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}))},e.pixelRatio===void 0||e.pixelRatio==="match-device"?(this._pixelRatio="match-device",this.devicePixelRatioQuery=matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`),this.devicePixelRatioQuery.addEventListener("change",this.onDevicePixelRatioChange,{once:!0}),this.renderer.setPixelRatio(window.devicePixelRatio)):(this._pixelRatio=e.pixelRatio,this.devicePixelRatioQuery=null,this.renderer.setPixelRatio(e.pixelRatio)),this.renderer.setClearColor(0,0);let t;this.renderer.capabilities.isWebGL2&&(t=new Wi(0,0,{depthTexture:new jg(0,0,Bi)})),this.composer=new Zw(this.renderer,t),this.renderPass=new Qw(this.scene,this.camera),this.fxaaPass=new Zg(Jw),this.composer.addPass(this.renderPass),this.composer.addPass(this.fxaaPass),this.playerObject=new Iw,this.playerObject.name="player",this.playerObject.skin.visible=!1,this.playerObject.cape.visible=!1,this.playerWrapper=new dn,this.playerWrapper.add(this.playerObject),this.scene.add(this.playerWrapper),this.controls=new Xw(this.camera,this.canvas),this.controls.enablePan=!1,this.controls.minDistance=10,this.controls.maxDistance=256,e.enableControls===!1&&(this.controls.enabled=!1),e.skin!==void 0&&this.loadSkin(e.skin,{model:e.model,ears:e.ears==="current-skin"}),e.cape!==void 0&&this.loadCape(e.cape),e.ears!==void 0&&e.ears!=="current-skin"&&this.loadEars(e.ears.source,{textureType:e.ears.textureType}),e.width!==void 0&&(this.width=e.width),e.height!==void 0&&(this.height=e.height),e.background!==void 0&&(this.background=e.background),e.panorama!==void 0&&this.loadPanorama(e.panorama),e.nameTag!==void 0&&(this.nameTag=e.nameTag),this.camera.position.z=1,this._zoom=e.zoom===void 0?.9:e.zoom,this.fov=e.fov===void 0?50:e.fov,this._animation=e.animation===void 0?null:e.animation,this.clock=new Kg,e.renderPaused===!0?(this._renderPaused=!0,this.animationID=null):this.animationID=window.requestAnimationFrame(()=>this.draw()),this.onContextLost=r=>{r.preventDefault(),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null)},this.onContextRestored=()=>{this.renderer.setClearColor(0,0),!this._renderPaused&&!this._disposed&&this.animationID===null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))},this.canvas.addEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.addEventListener("webglcontextrestored",this.onContextRestored,!1),this.canvas.addEventListener("mousedown",()=>{this.isUserRotating=!0},!1),this.canvas.addEventListener("mouseup",()=>{this.isUserRotating=!1},!1),this.canvas.addEventListener("touchmove",r=>{r.touches.length===1?this.isUserRotating=!0:this.isUserRotating=!1},!1),this.canvas.addEventListener("touchend",()=>{this.isUserRotating=!1},!1)}updateComposerSize(){this.composer.setSize(this.width,this.height);const e=this.renderer.getPixelRatio();this.composer.setPixelRatio(e),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.width*e),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.height*e)}recreateSkinTexture(){this.skinTexture!==null&&this.skinTexture.dispose(),this.skinTexture=new Tl(this.skinCanvas),this.skinTexture.magFilter=kt,this.skinTexture.minFilter=kt,this.playerObject.skin.map=this.skinTexture}recreateCapeTexture(){this.capeTexture!==null&&this.capeTexture.dispose(),this.capeTexture=new Tl(this.capeCanvas),this.capeTexture.magFilter=kt,this.capeTexture.minFilter=kt,this.playerObject.cape.map=this.capeTexture,this.playerObject.elytra.map=this.capeTexture}recreateEarsTexture(){this.earsTexture!==null&&this.earsTexture.dispose(),this.earsTexture=new Tl(this.earsCanvas),this.earsTexture.magFilter=kt,this.earsTexture.minFilter=kt,this.playerObject.ears.map=this.earsTexture}loadSkin(e,t={}){if(e===null)this.resetSkin();else if(yl(e))Fw(this.skinCanvas,e),this.recreateSkinTexture(),t.model===void 0||t.model==="auto-detect"?this.playerObject.skin.modelType=Vw(this.skinCanvas):this.playerObject.skin.modelType=t.model,t.makeVisible!==!1&&(this.playerObject.skin.visible=!0),(t.ears===!0||t.ears=="load-only")&&(zm(this.earsCanvas,e),this.recreateEarsTexture(),t.ears===!0&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset)));else return Sl(e).then(r=>this.loadSkin(r,t))}resetSkin(){this.playerObject.skin.visible=!1,this.playerObject.skin.map=null,this.skinTexture!==null&&(this.skinTexture.dispose(),this.skinTexture=null)}loadCape(e,t={}){if(e===null)this.resetCape();else if(yl(e))zw(this.capeCanvas,e),this.recreateCapeTexture(),t.makeVisible!==!1&&(this.playerObject.backEquipment=t.backEquipment===void 0?"cape":t.backEquipment);else return Sl(e).then(r=>this.loadCape(r,t))}resetCape(){this.playerObject.backEquipment=null,this.playerObject.cape.map=null,this.playerObject.elytra.map=null,this.capeTexture!==null&&(this.capeTexture.dispose(),this.capeTexture=null)}loadEars(e,t={}){if(e===null)this.resetEars();else if(yl(e))t.textureType==="skin"?zm(this.earsCanvas,e):Ww(this.earsCanvas,e),this.recreateEarsTexture(),t.makeVisible!==!1&&(this.playerObject.ears.visible=!0,this._nameTag&&(this.nameTagYOffset=25,this._nameTag.position.y=this.nameTagYOffset));else return Sl(e).then(r=>this.loadEars(r,t))}resetEars(){this.playerObject.ears.visible=!1,this._nameTag&&(this.nameTagYOffset=20,this._nameTag.position.y=this.nameTagYOffset),this.playerObject.ears.map=null,this.earsTexture!==null&&(this.earsTexture.dispose(),this.earsTexture=null)}loadPanorama(e){return this.loadBackground(e,bl)}loadBackground(e,t){if(yl(e))this.backgroundTexture!==null&&this.backgroundTexture.dispose(),this.backgroundTexture=new xn,this.backgroundTexture.image=e,t!==void 0&&(this.backgroundTexture.mapping=t),this.backgroundTexture.needsUpdate=!0,this.scene.background=this.backgroundTexture;else return Sl(e).then(r=>this.loadBackground(r,t))}draw(){const e=this.clock.getDelta();this._animation!==null&&(this._animation.update(this.playerObject,e),this._nameTag&&(this._nameTag.position.y=this.playerObject.skin.head.getWorldPosition(new W).y+this.nameTagYOffset-8)),this.autoRotate&&(this.controls.enableRotate&&this.isUserRotating||(this.playerWrapper.rotation.y+=e*this.autoRotateSpeed)),this.controls.update(),this.render(),this.animationID=window.requestAnimationFrame(()=>this.draw())}render(){this.composer.render()}setSize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.updateComposerSize()}dispose(){this._disposed=!0,this.canvas.removeEventListener("webglcontextlost",this.onContextLost,!1),this.canvas.removeEventListener("webglcontextrestored",this.onContextRestored,!1),this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this.animationID!==null&&(window.cancelAnimationFrame(this.animationID),this.animationID=null),this.controls.dispose(),this.renderer.dispose(),this.resetSkin(),this.resetCape(),this.resetEars(),this.background=null,this.fxaaPass.fsQuad.dispose()}get disposed(){return this._disposed}get renderPaused(){return this._renderPaused}set renderPaused(e){this._renderPaused=e,this._renderPaused&&this.animationID!==null?(window.cancelAnimationFrame(this.animationID),this.animationID=null,this.clock.stop(),this.clock.autoStart=!0):!this._renderPaused&&!this._disposed&&!this.renderer.getContext().isContextLost()&&this.animationID==null&&(this.animationID=window.requestAnimationFrame(()=>this.draw()))}get width(){return this.renderer.getSize(new We).width}set width(e){this.setSize(e,this.height)}get height(){return this.renderer.getSize(new We).height}set height(e){this.setSize(this.width,e)}get background(){return this.scene.background}set background(e){e===null||e instanceof gt||e instanceof xn?this.scene.background=e:this.scene.background=new gt(e),this.backgroundTexture!==null&&e!==this.backgroundTexture&&(this.backgroundTexture.dispose(),this.backgroundTexture=null)}adjustCameraDistance(){let e=4.5+16.5/Math.tan(this.fov/180*Math.PI/2)/this.zoom;e<10?e=10:e>256&&(e=256),this.camera.position.multiplyScalar(e/this.camera.position.length()),this.camera.updateProjectionMatrix()}resetCameraPose(){this.camera.position.set(0,0,1),this.camera.rotation.set(0,0,0),this.adjustCameraDistance()}get fov(){return this.camera.fov}set fov(e){this.camera.fov=e,this.adjustCameraDistance()}get zoom(){return this._zoom}set zoom(e){this._zoom=e,this.adjustCameraDistance()}get pixelRatio(){return this._pixelRatio}set pixelRatio(e){e==="match-device"?this._pixelRatio!=="match-device"&&(this._pixelRatio=e,this.onDevicePixelRatioChange()):(this._pixelRatio==="match-device"&&this.devicePixelRatioQuery!==null&&(this.devicePixelRatioQuery.removeEventListener("change",this.onDevicePixelRatioChange),this.devicePixelRatioQuery=null),this._pixelRatio=e,this.renderer.setPixelRatio(e),this.updateComposerSize())}get animation(){return this._animation}set animation(e){this._animation!==e&&(this.playerObject.resetJoints(),this.playerObject.position.set(0,0,0),this.playerObject.rotation.set(0,0,0),this._nameTag&&(this._nameTag.position.y=this.nameTagYOffset),this.clock.stop(),this.clock.autoStart=!0),e!==null&&(e.progress=0),this._animation=e}get nameTag(){return this._nameTag}set nameTag(e){this._nameTag!==null&&this.playerWrapper.remove(this._nameTag),e!==null&&(e instanceof yn||(e=new iT(e)),this.playerWrapper.add(e),this.nameTagYOffset=this.playerObject.ears.visible?25:20,e.position.y=this.nameTagYOffset),this._nameTag=e}}const sT=({skinUrl:s,capeUrl:e,model:t,playerName:r})=>{const o=_t.useRef(null),l=_t.useRef(null),[f,c]=_t.useState("idle"),[h,m]=_t.useState(!0),[g,y]=_t.useState(!0),[_,S]=_t.useState("cape"),[E,w]=_t.useState(!0),[x,v]=_t.useState(!0);_t.useEffect(()=>{if(!o.current)return;const R=new rT({canvas:o.current,width:340,height:420,skin:s,model:t==="slim"?"slim":"default"});R.fov=68,R.zoom=.9,R.autoRotate=!0,R.autoRotateSpeed=.6,R.cameraLight.intensity=.7,R.globalLight.intensity=2.4;const D=new Wm;return D.speed=.8,R.animation=D,l.current=R,()=>{R.dispose(),l.current=null}},[]),_t.useEffect(()=>{const R=l.current;!R||!s||(v(!0),R.loadSkin(s,{model:t==="slim"?"slim":"default"}).then(()=>{v(!1)}).catch(()=>{v(!1)}))},[s,t]),_t.useEffect(()=>{const R=l.current;R&&(e&&E?R.loadCape(e,{backEquipment:_}).catch(()=>{}):R.loadCape(null))},[e,E,_]),_t.useEffect(()=>{l.current&&(l.current.autoRotate=h,l.current.autoRotateSpeed=.6)},[h]),_t.useEffect(()=>{const R=l.current;if(R){if(f==="none")R.animation=null;else if(f==="idle"){const D=new Wm;D.speed=.8,R.animation=D}else if(f==="walk"){const D=new eT;D.speed=.9,R.animation=D}else if(f==="run"){const D=new tT;D.speed=1,R.animation=D}else if(f==="wave"){const D=new nT;D.speed=1.2,R.animation=D}}},[f]),_t.useEffect(()=>{const R=l.current;if(!R||!R.playerObject)return;const D=R.playerObject.skin;D&&(D.head.outerLayer.visible=g,D.body.outerLayer.visible=g,D.rightArm.outerLayer.visible=g,D.leftArm.outerLayer.visible=g,D.rightLeg.outerLayer.visible=g,D.leftLeg.outerLayer.visible=g)},[g]);const O=()=>{const R=l.current;R&&(R.controls.reset(),R.zoom=.9)},C=()=>{const R=l.current;if(!R)return;R.render();const D=R.canvas.toDataURL("image/png"),k=document.createElement("a");k.href=D,k.download=`${r}-render.png`,k.click()};return X.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col items-center",children:[X.jsxs("div",{className:"relative w-full max-w-[340px] h-[420px] bg-gradient-to-b from-slate-50 to-slate-100/70 rounded-lg overflow-hidden border border-slate-100 flex items-center justify-center",children:[X.jsx("canvas",{ref:o,className:"cursor-grab active:cursor-grabbing outline-none"}),x&&X.jsxs("div",{className:"absolute inset-0 bg-white/60 backdrop-blur-xs flex items-center justify-center text-slate-500 text-sm",children:[X.jsx(c_,{className:"w-5 h-5 animate-spin mr-2"}),"Loading model..."]}),X.jsxs("div",{className:"absolute top-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-xs border border-slate-200 rounded-md p-1 shadow-xs",children:[X.jsx("button",{onClick:C,title:"Download PNG snapshot",className:"p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors",children:X.jsx(t_,{className:"w-4 h-4"})}),X.jsx("button",{onClick:O,title:"Reset view",className:"p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors",children:X.jsx(d_,{className:"w-4 h-4"})})]})]}),X.jsxs("div",{className:"w-full mt-4 space-y-3",children:[X.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-600",children:[X.jsx("span",{className:"font-medium text-slate-700",children:"Motion"}),X.jsx("div",{className:"inline-flex bg-slate-100 p-0.5 rounded-lg",children:["idle","walk","run","wave","none"].map(R=>X.jsx("button",{onClick:()=>c(R),className:`px-2.5 py-1 rounded-md text-xs font-medium transition-all capitalize ${f===R?"bg-white text-slate-900 shadow-xs":"text-slate-500 hover:text-slate-900"}`,children:R},R))})]}),X.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-1 border-t border-slate-100",children:[X.jsxs("button",{onClick:()=>m(!h),className:`flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg border text-xs font-medium transition-colors ${h?"border-slate-900 bg-slate-900 text-white":"border-slate-200 bg-white text-slate-600 hover:bg-slate-50"}`,children:[h?X.jsx(l_,{className:"w-3.5 h-3.5"}):X.jsx(u_,{className:"w-3.5 h-3.5"}),"Auto Rotate"]}),X.jsxs("button",{onClick:()=>y(!g),className:`flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg border text-xs font-medium transition-colors ${g?"border-slate-900 bg-slate-900 text-white":"border-slate-200 bg-white text-slate-600 hover:bg-slate-50"}`,children:[X.jsx(o_,{className:"w-3.5 h-3.5"}),"Outer Layers"]})]}),e&&X.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-slate-100 text-xs",children:[X.jsxs("button",{onClick:()=>w(!E),className:`flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-medium transition-colors ${E?"border-slate-300 bg-slate-100 text-slate-800":"border-slate-200 text-slate-400 hover:text-slate-600"}`,children:[X.jsx(s_,{className:"w-3.5 h-3.5"}),E?"Cape Visible":"Cape Hidden"]}),E&&X.jsxs("div",{className:"inline-flex bg-slate-100 p-0.5 rounded-lg",children:[X.jsx("button",{onClick:()=>S("cape"),className:`px-2 py-0.5 rounded text-xs font-medium ${_==="cape"?"bg-white text-slate-900 shadow-xs":"text-slate-500"}`,children:"Cape"}),X.jsx("button",{onClick:()=>S("elytra"),className:`px-2 py-0.5 rounded text-xs font-medium ${_==="elytra"?"bg-white text-slate-900 shadow-xs":"text-slate-500"}`,children:"Elytra"})]})]})]})]})},aT=({profile:s})=>{const[e,t]=_t.useState(null),r=(f,c)=>{navigator.clipboard.writeText(f),t(c),setTimeout(()=>t(null),1800)},o=()=>{const f=document.createElement("a");f.href=s.textures.skinDataUri||s.textures.skinUrl,f.download=`${s.username}-skin.png`,f.target="_blank",f.click()},l=()=>{if(!s.textures.capeUrl&&!s.textures.capeDataUri)return;const f=document.createElement("a");f.href=s.textures.capeDataUri||s.textures.capeUrl||"",f.download=`${s.username}-cape.png`,f.target="_blank",f.click()};return X.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4",children:[X.jsxs("div",{className:"flex items-center justify-between pb-3.5 border-b border-slate-100",children:[X.jsxs("div",{className:"flex items-center gap-3",children:[X.jsx("img",{src:`https://visage.surgeplay.com/face/64/${s.uuid}`,alt:"",onError:f=>{f.target.src=`https://crafthead.net/avatar/${s.uuid}`},className:"w-11 h-11 rounded-lg border border-slate-200 bg-slate-100 image-rendering-pixelated"}),X.jsxs("div",{children:[X.jsx("h2",{className:"text-lg font-bold tracking-tight text-slate-900 font-sans",children:s.username}),X.jsxs("div",{className:"flex items-center gap-2 mt-0.5 text-xs text-slate-500",children:[X.jsx("span",{className:"font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-medium",children:s.model==="slim"?"Slim (Alex)":"Classic (Steve)"}),s.createdAt&&X.jsxs(X.Fragment,{children:[X.jsx("span",{children:"•"}),X.jsxs("span",{children:["Registered ",s.createdAt]})]})]})]})]}),X.jsxs("div",{className:"flex items-center gap-1.5",children:[X.jsxs("button",{onClick:o,title:"Download skin texture",className:"inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-lg text-xs font-medium shadow-xs transition-colors cursor-pointer",children:[X.jsx(Al,{className:"w-3.5 h-3.5 text-slate-500"}),"Skin"]}),s.textures.capeUrl&&X.jsxs("button",{onClick:l,title:"Download cape texture",className:"inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 rounded-lg text-xs font-medium shadow-xs transition-colors cursor-pointer",children:[X.jsx(Al,{className:"w-3.5 h-3.5 text-slate-500"}),"Cape"]})]})]}),X.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-2.5",children:[X.jsxs("div",{className:"bg-slate-50 border border-slate-200/80 rounded-lg p-2.5 flex items-center justify-between",children:[X.jsxs("div",{className:"min-w-0 pr-2",children:[X.jsx("div",{className:"text-[10px] font-semibold text-slate-400 uppercase tracking-wider",children:"UUID"}),X.jsx("div",{className:"text-xs font-mono text-slate-800 truncate select-all",children:s.uuid})]}),X.jsx("button",{onClick:()=>r(s.uuid,"uuid"),className:"p-1.5 text-slate-400 hover:text-slate-800 hover:bg-white rounded transition-colors",title:"Copy UUID",children:e==="uuid"?X.jsx(op,{className:"w-3.5 h-3.5 text-emerald-600"}):X.jsx(lp,{className:"w-3.5 h-3.5"})})]}),X.jsxs("div",{className:"bg-slate-50 border border-slate-200/80 rounded-lg p-2.5 flex items-center justify-between",children:[X.jsxs("div",{className:"min-w-0 pr-2",children:[X.jsx("div",{className:"text-[10px] font-semibold text-slate-400 uppercase tracking-wider",children:"Raw UUID"}),X.jsx("div",{className:"text-xs font-mono text-slate-800 truncate select-all",children:s.rawId})]}),X.jsx("button",{onClick:()=>r(s.rawId,"rawId"),className:"p-1.5 text-slate-400 hover:text-slate-800 hover:bg-white rounded transition-colors",title:"Copy raw UUID",children:e==="rawId"?X.jsx(op,{className:"w-3.5 h-3.5 text-emerald-600"}):X.jsx(lp,{className:"w-3.5 h-3.5"})})]})]}),X.jsxs("div",{className:"pt-1 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100",children:[X.jsxs("div",{className:"flex items-center gap-2.5",children:[X.jsx("span",{className:"font-medium text-slate-600",children:"Texture:"}),X.jsx("img",{src:s.textures.skinDataUri||s.textures.skinUrl,alt:"",className:"w-14 h-7 object-contain bg-slate-100 border border-slate-200 rounded image-rendering-pixelated"})]}),s.textures.skinUrl&&X.jsxs("a",{href:s.textures.skinUrl,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 hover:underline",children:["Mojang Texture Source",X.jsx(r_,{className:"w-3 h-3"})]})]})]})},oT=({history:s})=>!s||s.length<=1?X.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-5 shadow-sm",children:[X.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[X.jsx(up,{className:"w-4 h-4 text-slate-500"}),X.jsx("h3",{className:"text-sm font-semibold text-slate-800",children:"Name History"})]}),X.jsx("p",{className:"text-xs text-slate-500",children:"No previous username changes found for this account."})]}):X.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3",children:[X.jsxs("div",{className:"flex items-center justify-between",children:[X.jsxs("div",{className:"flex items-center gap-2",children:[X.jsx(up,{className:"w-4 h-4 text-slate-500"}),X.jsx("h3",{className:"text-sm font-semibold text-slate-800",children:"Name History"})]}),X.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:[s.length," records"]})]}),X.jsx("div",{className:"divide-y divide-slate-100 max-h-60 overflow-y-auto pr-1",children:s.map((e,t)=>X.jsxs("div",{className:"py-2.5 flex items-center justify-between text-xs",children:[X.jsxs("div",{className:"flex items-center gap-2",children:[X.jsx("span",{className:"font-medium text-slate-800 font-sans",children:e.username}),e.isOriginal&&X.jsx("span",{className:"px-1.5 py-0.5 text-[10px] uppercase font-semibold tracking-wider bg-slate-100 text-slate-600 rounded",children:"Original"})]}),X.jsx("span",{className:"text-slate-400 font-mono text-[11px]",children:e.changedAtDate||(e.isOriginal?"Account Created":"Initial")})]},`${e.username}-${t}`))})]}),lT=({capes:s,selectedCapeUrl:e,onSelectCape:t})=>!s||s.length===0?X.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-5 shadow-sm",children:[X.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[X.jsx(cp,{className:"w-4 h-4 text-slate-500"}),X.jsx("h3",{className:"text-sm font-semibold text-slate-800",children:"Capes"})]}),X.jsx("p",{className:"text-xs text-slate-500",children:"No official or cosmetic capes detected for this player."})]}):X.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4",children:[X.jsxs("div",{className:"flex items-center justify-between",children:[X.jsxs("div",{className:"flex items-center gap-2",children:[X.jsx(cp,{className:"w-4 h-4 text-slate-500"}),X.jsx("h3",{className:"text-sm font-semibold text-slate-800",children:"Capes"})]}),X.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:[s.length," detected"]})]}),X.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:s.map(r=>{const o=e===r.textureUrl;return X.jsxs("div",{className:`p-3 rounded-lg border transition-all flex items-center justify-between ${o?"border-slate-800 bg-slate-50/70 shadow-xs":"border-slate-200 bg-white hover:border-slate-300"}`,children:[X.jsxs("div",{className:"flex items-center gap-3",children:[X.jsx("div",{className:"w-10 h-14 bg-slate-100 border border-slate-200 rounded flex items-center justify-center overflow-hidden",children:X.jsx("img",{src:r.previewUrl||r.textureUrl,alt:"",className:"max-w-full max-h-full object-contain image-rendering-pixelated"})}),X.jsxs("div",{children:[X.jsx("div",{className:"text-xs font-semibold text-slate-900",children:r.name}),X.jsx("div",{className:"text-[11px] text-slate-500",children:r.provider})]})]}),X.jsxs("div",{className:"flex items-center gap-1.5",children:[X.jsx("button",{onClick:()=>t(r.textureUrl),title:"View on 3D model",className:`px-2 py-1 rounded text-xs font-medium transition-colors ${o?"bg-slate-900 text-white":"bg-slate-100 hover:bg-slate-200 text-slate-700"}`,children:o?"Equipped":"Equip"}),X.jsx("a",{href:r.textureUrl,download:`${r.id}-cape.png`,target:"_blank",rel:"noopener noreferrer",title:"Download cape image",className:"p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded transition-colors",children:X.jsx(Al,{className:"w-3.5 h-3.5"})})]})]},r.id)})})]}),uT=({uuid:s,username:e})=>{const t=[{key:"full",label:"3D Full Body",url:`https://visage.surgeplay.com/full/512/${s}`},{key:"bust",label:"3D Bust",url:`https://visage.surgeplay.com/bust/512/${s}`},{key:"front",label:"Front View",url:`https://visage.surgeplay.com/front/512/${s}`},{key:"back",label:"Back View",url:`https://visage.surgeplay.com/back/512/${s}`},{key:"face",label:"Head Avatar",url:`https://visage.surgeplay.com/face/256/${s}`}],[r,o]=_t.useState("full"),l=t.find(f=>f.key===r)||t[0];return X.jsxs("div",{className:"bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4",children:[X.jsxs("div",{className:"flex items-center justify-between",children:[X.jsxs("div",{className:"flex items-center gap-2",children:[X.jsx(a_,{className:"w-4 h-4 text-slate-500"}),X.jsx("h3",{className:"text-sm font-semibold text-slate-800",children:"2D Renders"})]}),X.jsx("div",{className:"inline-flex bg-slate-100 p-0.5 rounded-lg text-xs",children:t.map(f=>X.jsx("button",{onClick:()=>o(f.key),className:`px-2.5 py-1 rounded-md font-medium transition-all ${r===f.key?"bg-white text-slate-900 shadow-xs":"text-slate-500 hover:text-slate-900"}`,children:f.label},f.key))})]}),X.jsxs("div",{className:"relative w-full h-64 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center p-4",children:[X.jsx("img",{src:l.url,alt:l.label,className:"max-h-full max-w-full object-contain filter drop-shadow-md"}),X.jsx("div",{className:"absolute bottom-3 right-3 flex items-center gap-2",children:X.jsxs("a",{href:l.url,download:`${e}-${l.key}.png`,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 shadow-xs transition-colors",children:[X.jsx(Al,{className:"w-3.5 h-3.5 text-slate-500"}),"Download PNG"]})})]})]})},ad="mc_recent_searches",cT=()=>{const[s,e]=_t.useState(null),[t,r]=_t.useState(!1),[o,l]=_t.useState(null),[f,c]=_t.useState(null),[h,m]=_t.useState(()=>{try{const S=localStorage.getItem(ad);return S?JSON.parse(S):[]}catch{return[]}}),g=S=>{m(E=>{const w=E.filter(v=>v.toLowerCase()!==S.toLowerCase()),x=[S,...w].slice(0,8);try{localStorage.setItem(ad,JSON.stringify(x))}catch{}return x})},y=()=>{m([]),localStorage.removeItem(ad)},_=async S=>{r(!0),l(null);try{const E=await m_(S);e(E),g(E.username),E.capes.length>0?c(E.capes[0].textureUrl):c(null)}catch(E){l(E instanceof Error?E.message:"Failed to retrieve player information"),e(null)}finally{r(!1)}};return _t.useEffect(()=>{_("Technoblade")},[]),X.jsxs("div",{className:"min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col",children:[X.jsx("header",{className:"bg-white border-b border-slate-200 sticky top-0 z-30",children:X.jsxs("div",{className:"max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between",children:[X.jsxs("div",{className:"flex items-center gap-2.5",children:[X.jsx("div",{className:"w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shadow-xs",children:X.jsx(e_,{className:"w-4 h-4"})}),X.jsx("h1",{className:"text-sm font-semibold tracking-tight text-slate-900",children:"Minecraft Skin & Player Viewer"})]}),X.jsx("span",{className:"text-xs text-slate-400 font-mono hidden sm:inline",children:"Fast, free & verified"})]})}),X.jsxs("main",{className:"flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6",children:[X.jsx(v_,{onSearch:_,isLoading:t,recentSearches:h,onClearRecent:y}),o&&X.jsxs("div",{className:"max-w-2xl mx-auto bg-rose-50 border border-rose-200 text-rose-800 rounded-xl p-3.5 flex items-start gap-2.5 text-xs",children:[X.jsx(n_,{className:"w-4 h-4 text-rose-600 shrink-0 mt-0.5"}),X.jsxs("div",{children:[X.jsx("p",{className:"font-semibold",children:o}),X.jsx("p",{className:"text-rose-600 mt-0.5",children:"Check that the player's username or UUID is spelled correctly."})]})]}),t&&!s&&X.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2 animate-pulse",children:[X.jsx("div",{className:"lg:col-span-5 bg-white border border-slate-200 rounded-xl h-[480px]"}),X.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[X.jsx("div",{className:"bg-white border border-slate-200 rounded-xl h-36"}),X.jsx("div",{className:"bg-white border border-slate-200 rounded-xl h-44"}),X.jsx("div",{className:"bg-white border border-slate-200 rounded-xl h-36"})]})]}),s&&X.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 pt-1 items-start",children:[X.jsx("div",{className:"lg:col-span-5 lg:sticky lg:top-20",children:X.jsx(sT,{skinUrl:s.textures.skinDataUri||s.textures.skinUrl,capeUrl:f,model:s.model,playerName:s.username})}),X.jsxs("div",{className:"lg:col-span-7 space-y-4",children:[X.jsx(aT,{profile:s}),X.jsx(lT,{capes:s.capes,selectedCapeUrl:f,onSelectCape:S=>c(S)}),X.jsx(oT,{history:s.nameHistory}),X.jsx(uT,{uuid:s.rawId,username:s.username})]})]})]}),X.jsx("footer",{className:"mt-auto border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-400",children:"Data retrieved via Mojang, Ashcon, PlayerDB, and OptiFine APIs."})]})},Qg=document.getElementById("root");if(!Qg)throw new Error("Failed to find root element");Vv.createRoot(Qg).render(X.jsx(Iv.StrictMode,{children:X.jsx(cT,{})}));
