/*! For license information please see main.df4c8005.js.LICENSE.txt */
(()=>{var e={4:(e,t,n)=>{"use strict";var r=n(853),o=n(43),i=n(950);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function s(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(s(e)!==e)throw Error(a(188))}function d(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=d(e)))return t;e=e.sibling}return null}var f=Object.assign,p=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),C=Symbol.for("react.lazy");Symbol.for("react.scope");var T=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var P=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var O=Symbol.iterator;function R(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=O&&e[O]||e["@@iterator"])?e:null}var _=Symbol.for("react.client.reference");function z(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===_?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case g:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case k:return"Suspense";case j:return"SuspenseList";case T:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case m:return"Portal";case w:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case S:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case E:return null!==(t=e.displayName||null)?t:z(e.type)||"Memo";case C:t=e._payload,e=e._init;try{return z(e(t))}catch(n){}}return null}var A=Array.isArray,N=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},D=[],M=-1;function I(e){return{current:e}}function $(e){0>M||(e.current=D[M],D[M]=null,M--)}function U(e,t){M++,D[M]=e.current,e.current=t}var B=I(null),H=I(null),W=I(null),q=I(null);function V(e,t){switch(U(W,t),U(H,e),U(B,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?od(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=id(t=od(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(B),U(B,e)}function Y(){$(B),$(H),$(W)}function K(e){null!==e.memoizedState&&U(q,e);var t=B.current,n=id(t,e.type);t!==n&&(U(H,e),U(B,n))}function Q(e){H.current===e&&($(B),$(H)),q.current===e&&($(q),Kd._currentValue=F)}var G=Object.prototype.hasOwnProperty,J=r.unstable_scheduleCallback,X=r.unstable_cancelCallback,Z=r.unstable_shouldYield,ee=r.unstable_requestPaint,te=r.unstable_now,ne=r.unstable_getCurrentPriorityLevel,re=r.unstable_ImmediatePriority,oe=r.unstable_UserBlockingPriority,ie=r.unstable_NormalPriority,ae=r.unstable_LowPriority,le=r.unstable_IdlePriority,se=r.log,ce=r.unstable_setDisableYieldValue,ue=null,de=null;function fe(e){if("function"===typeof se&&ce(e),de&&"function"===typeof de.setStrictMode)try{de.setStrictMode(ue,e)}catch(t){}}var pe=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(he(e)/me|0)|0},he=Math.log,me=Math.LN2;var ge=256,be=4194304;function ye(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ve(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var o=0,i=e.suspendedLanes,a=e.pingedLanes;e=e.warmLanes;var l=134217727&r;return 0!==l?0!==(r=l&~i)?o=ye(r):0!==(a&=l)?o=ye(a):n||0!==(n=l&~e)&&(o=ye(n)):0!==(l=r&~i)?o=ye(l):0!==a?o=ye(a):n||0!==(n=r&~e)&&(o=ye(n)),0===o?0:0!==t&&t!==o&&0===(t&i)&&((i=o&-o)>=(n=t&-t)||32===i&&0!==(4194048&n))?t:o}function xe(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function we(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Se(){var e=ge;return 0===(4194048&(ge<<=1))&&(ge=256),e}function ke(){var e=be;return 0===(62914560&(be<<=1))&&(be=4194304),e}function je(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ee(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ce(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-pe(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194090&n}function Te(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}function Pe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Oe(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Re(){var e=L.p;return 0!==e?e:void 0===(e=window.event)?32:uf(e.type)}var _e=Math.random().toString(36).slice(2),ze="__reactFiber$"+_e,Ae="__reactProps$"+_e,Ne="__reactContainer$"+_e,Le="__reactEvents$"+_e,Fe="__reactListeners$"+_e,De="__reactHandles$"+_e,Me="__reactResources$"+_e,Ie="__reactMarker$"+_e;function $e(e){delete e[ze],delete e[Ae],delete e[Le],delete e[Fe],delete e[De]}function Ue(e){var t=e[ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ne]||n[ze]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=vd(e);null!==e;){if(n=e[ze])return n;e=vd(e)}return t}n=(e=n).parentNode}return null}function Be(e){if(e=e[ze]||e[Ne]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function He(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(a(33))}function We(e){var t=e[Me];return t||(t=e[Me]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function qe(e){e[Ie]=!0}var Ve=new Set,Ye={};function Ke(e,t){Qe(e,t),Qe(e+"Capture",t)}function Qe(e,t){for(Ye[e]=t,e=0;e<t.length;e++)Ve.add(t[e])}var Ge,Je,Xe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ze={},et={};function tt(e,t,n){if(o=t,G.call(et,o)||!G.call(Ze,o)&&(Xe.test(o)?et[o]=!0:(Ze[o]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var o}function nt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function rt(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function ot(e){if(void 0===Ge)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ge=t&&t[1]||"",Je=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+Ge+e+Je}var it=!1;function at(e,t){if(!e||it)return"";it=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(o){var r=o}Reflect.construct(e,[],n)}else{try{n.call()}catch(i){r=i}e.call(n.prototype)}}else{try{throw Error()}catch(a){r=a}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(l){if(l&&r&&"string"===typeof l.stack)return[l.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=r.DetermineComponentFrameRoot(),a=i[0],l=i[1];if(a&&l){var s=a.split("\n"),c=l.split("\n");for(o=r=0;r<s.length&&!s[r].includes("DetermineComponentFrameRoot");)r++;for(;o<c.length&&!c[o].includes("DetermineComponentFrameRoot");)o++;if(r===s.length||o===c.length)for(r=s.length-1,o=c.length-1;1<=r&&0<=o&&s[r]!==c[o];)o--;for(;1<=r&&0<=o;r--,o--)if(s[r]!==c[o]){if(1!==r||1!==o)do{if(r--,0>--o||s[r]!==c[o]){var u="\n"+s[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=o);break}}}finally{it=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ot(n):""}function lt(e){switch(e.tag){case 26:case 27:case 5:return ot(e.type);case 16:return ot("Lazy");case 13:return ot("Suspense");case 19:return ot("SuspenseList");case 0:case 15:return at(e.type,!1);case 11:return at(e.type.render,!1);case 1:return at(e.type,!0);case 31:return ot("Activity");default:return""}}function st(e){try{var t="";do{t+=lt(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ut(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ut(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ut(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function pt(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var ht=/[\n"\\]/g;function mt(e){return e.replace(ht,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function gt(e,t,n,r,o,i,a,l){e.name="",null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a?e.type=a:e.removeAttribute("type"),null!=t?"number"===a?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):"submit"!==a&&"reset"!==a||e.removeAttribute("value"),null!=t?yt(e,a,ct(t)):null!=n?yt(e,a,ct(n)):null!=r&&e.removeAttribute("value"),null==o&&null!=i&&(e.defaultChecked=!!i),null!=o&&(e.checked=o&&"function"!==typeof o&&"symbol"!==typeof o),null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.name=""+ct(l):e.removeAttribute("name")}function bt(e,t,n,r,o,i,a,l){if(null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.type=i),null!=t||null!=n){if(!("submit"!==i&&"reset"!==i||void 0!==t&&null!==t))return;n=null!=n?""+ct(n):"",t=null!=t?""+ct(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:o)&&"symbol"!==typeof r&&!!r,e.checked=l?e.checked:!!r,e.defaultChecked=!!r,null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a&&(e.name=a)}function yt(e,t,n){"number"===t&&pt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function vt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ct(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function xt(e,t,n){null==t||((t=""+ct(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ct(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(a(92));if(A(r)){if(1<r.length)throw Error(a(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ct(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function St(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jt(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||kt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Et(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(a(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var o in t)r=t[o],t.hasOwnProperty(o)&&n[o]!==r&&jt(e,o,r)}else for(var i in t)t.hasOwnProperty(i)&&jt(e,i,t[i])}function Ct(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ot(e){return Pt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Rt=null;function _t(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var zt=null,At=null;function Nt(e){var t=Be(e);if(t&&(e=t.stateNode)){var n=e[Ae]||null;e:switch(e=t.stateNode,t.type){case"input":if(gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=r[Ae]||null;if(!o)throw Error(a(90));gt(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&ft(r)}break e;case"textarea":xt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&vt(e,!!n.multiple,t,!1)}}}var Lt=!1;function Ft(e,t,n){if(Lt)return e(t,n);Lt=!0;try{return e(t)}finally{if(Lt=!1,(null!==zt||null!==At)&&(Uc(),zt&&(t=zt,e=At,At=zt=null,Nt(t),e)))for(t=0;t<e.length;t++)Nt(e[t])}}function Dt(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Ae]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var Mt=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),It=!1;if(Mt)try{var $t={};Object.defineProperty($t,"passive",{get:function(){It=!0}}),window.addEventListener("test",$t,$t),window.removeEventListener("test",$t,$t)}catch(Nf){It=!1}var Ut=null,Bt=null,Ht=null;function Wt(){if(Ht)return Ht;var e,t,n=Bt,r=n.length,o="value"in Ut?Ut.value:Ut.textContent,i=o.length;for(e=0;e<r&&n[e]===o[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===o[i-t];t++);return Ht=o.slice(e,1<t?1-t:void 0)}function qt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Vt(){return!0}function Yt(){return!1}function Kt(e){function t(t,n,r,o,i){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?Vt:Yt,this.isPropagationStopped=Yt,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Vt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Vt)},persist:function(){},isPersistent:Vt}),t}var Qt,Gt,Jt,Xt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zt=Kt(Xt),en=f({},Xt,{view:0,detail:0}),tn=Kt(en),nn=f({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jt&&(Jt&&"mousemove"===e.type?(Qt=e.screenX-Jt.screenX,Gt=e.screenY-Jt.screenY):Gt=Qt=0,Jt=e),Qt)},movementY:function(e){return"movementY"in e?e.movementY:Gt}}),rn=Kt(nn),on=Kt(f({},nn,{dataTransfer:0})),an=Kt(f({},en,{relatedTarget:0})),ln=Kt(f({},Xt,{animationName:0,elapsedTime:0,pseudoElement:0})),sn=Kt(f({},Xt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),cn=Kt(f({},Xt,{data:0})),un={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=fn[e])&&!!t[e]}function hn(){return pn}var mn=Kt(f({},en,{key:function(e){if(e.key){var t=un[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=qt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?dn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hn,charCode:function(e){return"keypress"===e.type?qt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?qt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),gn=Kt(f({},nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),bn=Kt(f({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hn})),yn=Kt(f({},Xt,{propertyName:0,elapsedTime:0,pseudoElement:0})),vn=Kt(f({},nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),xn=Kt(f({},Xt,{newState:0,oldState:0})),wn=[9,13,27,32],Sn=Mt&&"CompositionEvent"in window,kn=null;Mt&&"documentMode"in document&&(kn=document.documentMode);var jn=Mt&&"TextEvent"in window&&!kn,En=Mt&&(!Sn||kn&&8<kn&&11>=kn),Cn=String.fromCharCode(32),Tn=!1;function Pn(e,t){switch(e){case"keyup":return-1!==wn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function On(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Rn=!1;var _n={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!_n[e.type]:"textarea"===t}function An(e,t,n,r){zt?At?At.push(r):At=[r]:zt=r,0<(t=Wu(t,"onChange")).length&&(n=new Zt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Nn=null,Ln=null;function Fn(e){Fu(e,0)}function Dn(e){if(ft(He(e)))return e}function Mn(e,t){if("change"===e)return t}var In=!1;if(Mt){var $n;if(Mt){var Un="oninput"in document;if(!Un){var Bn=document.createElement("div");Bn.setAttribute("oninput","return;"),Un="function"===typeof Bn.oninput}$n=Un}else $n=!1;In=$n&&(!document.documentMode||9<document.documentMode)}function Hn(){Nn&&(Nn.detachEvent("onpropertychange",Wn),Ln=Nn=null)}function Wn(e){if("value"===e.propertyName&&Dn(Ln)){var t=[];An(t,Ln,e,_t(e)),Ft(Fn,t)}}function qn(e,t,n){"focusin"===e?(Hn(),Ln=n,(Nn=t).attachEvent("onpropertychange",Wn)):"focusout"===e&&Hn()}function Vn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Dn(Ln)}function Yn(e,t){if("click"===e)return Dn(t)}function Kn(e,t){if("input"===e||"change"===e)return Dn(t)}var Qn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Gn(e,t){if(Qn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!G.call(t,o)||!Qn(e[o],t[o]))return!1}return!0}function Jn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xn(e,t){var n,r=Jn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Jn(r)}}function Zn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Zn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function er(e){for(var t=pt((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=pt((e=t.contentWindow).document)}return t}function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var nr=Mt&&"documentMode"in document&&11>=document.documentMode,rr=null,or=null,ir=null,ar=!1;function lr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;ar||null==rr||rr!==pt(r)||("selectionStart"in(r=rr)&&tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ir&&Gn(ir,r)||(ir=r,0<(r=Wu(or,"onSelect")).length&&(t=new Zt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},ur={},dr={};function fr(e){if(ur[e])return ur[e];if(!cr[e])return e;var t,n=cr[e];for(t in n)if(n.hasOwnProperty(t)&&t in dr)return ur[e]=n[t];return e}Mt&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);var pr=fr("animationend"),hr=fr("animationiteration"),mr=fr("animationstart"),gr=fr("transitionrun"),br=fr("transitionstart"),yr=fr("transitioncancel"),vr=fr("transitionend"),xr=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(e,t){xr.set(e,t),Ke(t,[e])}wr.push("scrollEnd");var kr=new WeakMap;function jr(e,t){if("object"===typeof e&&null!==e){var n=kr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:st(t)},kr.set(e,t),t)}return{value:e,source:t,stack:st(t)}}var Er=[],Cr=0,Tr=0;function Pr(){for(var e=Cr,t=Tr=Cr=0;t<e;){var n=Er[t];Er[t++]=null;var r=Er[t];Er[t++]=null;var o=Er[t];Er[t++]=null;var i=Er[t];if(Er[t++]=null,null!==r&&null!==o){var a=r.pending;null===a?o.next=o:(o.next=a.next,a.next=o),r.pending=o}0!==i&&zr(n,o,i)}}function Or(e,t,n,r){Er[Cr++]=e,Er[Cr++]=t,Er[Cr++]=n,Er[Cr++]=r,Tr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Rr(e,t,n,r){return Or(e,t,n,r),Ar(e)}function _r(e,t){return Or(e,null,null,t),Ar(e)}function zr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var o=!1,i=e.return;null!==i;)i.childLanes|=n,null!==(r=i.alternate)&&(r.childLanes|=n),22===i.tag&&(null===(e=i.stateNode)||1&e._visibility||(o=!0)),e=i,i=i.return;return 3===e.tag?(i=e.stateNode,o&&null!==t&&(o=31-pe(n),null===(r=(e=i.hiddenUpdates)[o])?e[o]=[t]:r.push(t),t.lane=536870912|n),i):null}function Ar(e){if(50<zc)throw zc=0,Ac=null,Error(a(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Nr={};function Lr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fr(e,t,n,r){return new Lr(e,t,n,r)}function Dr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Mr(e,t){var n=e.alternate;return null===n?((n=Fr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ir(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function $r(e,t,n,r,o,i){var l=0;if(r=e,"function"===typeof e)Dr(e)&&(l=1);else if("string"===typeof e)l=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,B.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case T:return(e=Fr(31,n,t,o)).elementType=T,e.lanes=i,e;case g:return Ur(n.children,o,i,t);case b:l=8,o|=24;break;case y:return(e=Fr(12,n,t,2|o)).elementType=y,e.lanes=i,e;case k:return(e=Fr(13,n,t,o)).elementType=k,e.lanes=i,e;case j:return(e=Fr(19,n,t,o)).elementType=j,e.lanes=i,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case v:case w:l=10;break e;case x:l=9;break e;case S:l=11;break e;case E:l=14;break e;case C:l=16,r=null;break e}l=29,n=Error(a(130,null===e?"null":typeof e,"")),r=null}return(t=Fr(l,n,t,o)).elementType=e,t.type=r,t.lanes=i,t}function Ur(e,t,n,r){return(e=Fr(7,e,r,t)).lanes=n,e}function Br(e,t,n){return(e=Fr(6,e,null,t)).lanes=n,e}function Hr(e,t,n){return(t=Fr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wr=[],qr=0,Vr=null,Yr=0,Kr=[],Qr=0,Gr=null,Jr=1,Xr="";function Zr(e,t){Wr[qr++]=Yr,Wr[qr++]=Vr,Vr=e,Yr=t}function eo(e,t,n){Kr[Qr++]=Jr,Kr[Qr++]=Xr,Kr[Qr++]=Gr,Gr=e;var r=Jr;e=Xr;var o=32-pe(r)-1;r&=~(1<<o),n+=1;var i=32-pe(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Jr=1<<32-pe(t)+o|n<<o|r,Xr=i+e}else Jr=1<<i|n<<o|r,Xr=e}function to(e){null!==e.return&&(Zr(e,1),eo(e,1,0))}function no(e){for(;e===Vr;)Vr=Wr[--qr],Wr[qr]=null,Yr=Wr[--qr],Wr[qr]=null;for(;e===Gr;)Gr=Kr[--Qr],Kr[Qr]=null,Xr=Kr[--Qr],Kr[Qr]=null,Jr=Kr[--Qr],Kr[Qr]=null}var ro=null,oo=null,io=!1,ao=null,lo=!1,so=Error(a(519));function co(e){throw go(jr(Error(a(418,"")),e)),so}function uo(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ze]=e,t[Ae]=r,n){case"dialog":Du("cancel",t),Du("close",t);break;case"iframe":case"object":case"embed":Du("load",t);break;case"video":case"audio":for(n=0;n<Nu.length;n++)Du(Nu[n],t);break;case"source":Du("error",t);break;case"img":case"image":case"link":Du("error",t),Du("load",t);break;case"details":Du("toggle",t);break;case"input":Du("invalid",t),bt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),dt(t);break;case"select":Du("invalid",t);break;case"textarea":Du("invalid",t),wt(t,r.value,r.defaultValue,r.children),dt(t)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Gu(t.textContent,n)?(null!=r.popover&&(Du("beforetoggle",t),Du("toggle",t)),null!=r.onScroll&&Du("scroll",t),null!=r.onScrollEnd&&Du("scrollend",t),null!=r.onClick&&(t.onclick=Ju),t=!0):t=!1,t||co(e)}function fo(e){for(ro=e.return;ro;)switch(ro.tag){case 5:case 13:return void(lo=!1);case 27:case 3:return void(lo=!0);default:ro=ro.return}}function po(e){if(e!==ro)return!1;if(!io)return fo(e),io=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||ad(e.type,e.memoizedProps)),t=!t),t&&oo&&co(e),fo(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){oo=bd(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}oo=null}}else 27===n?(n=oo,pd(e.type)?(e=yd,yd=null,oo=e):oo=n):oo=ro?bd(e.stateNode.nextSibling):null;return!0}function ho(){oo=ro=null,io=!1}function mo(){var e=ao;return null!==e&&(null===vc?vc=e:vc.push.apply(vc,e),ao=null),e}function go(e){null===ao?ao=[e]:ao.push(e)}var bo=I(null),yo=null,vo=null;function xo(e,t,n){U(bo,t._currentValue),t._currentValue=n}function wo(e){e._currentValue=bo.current,$(bo)}function So(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ko(e,t,n,r){var o=e.child;for(null!==o&&(o.return=e);null!==o;){var i=o.dependencies;if(null!==i){var l=o.child;i=i.firstContext;e:for(;null!==i;){var s=i;i=o;for(var c=0;c<t.length;c++)if(s.context===t[c]){i.lanes|=n,null!==(s=i.alternate)&&(s.lanes|=n),So(i.return,n,e),r||(l=null);break e}i=s.next}}else if(18===o.tag){if(null===(l=o.return))throw Error(a(341));l.lanes|=n,null!==(i=l.alternate)&&(i.lanes|=n),So(l,n,e),l=null}else l=o.child;if(null!==l)l.return=o;else for(l=o;null!==l;){if(l===e){l=null;break}if(null!==(o=l.sibling)){o.return=l.return,l=o;break}l=l.return}o=l}}function jo(e,t,n,r){e=null;for(var o=t,i=!1;null!==o;){if(!i)if(0!==(524288&o.flags))i=!0;else if(0!==(262144&o.flags))break;if(10===o.tag){var l=o.alternate;if(null===l)throw Error(a(387));if(null!==(l=l.memoizedProps)){var s=o.type;Qn(o.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(o===q.current){if(null===(l=o.alternate))throw Error(a(387));l.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(null!==e?e.push(Kd):e=[Kd])}o=o.return}null!==e&&ko(t,e,n,r),t.flags|=262144}function Eo(e){for(e=e.firstContext;null!==e;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Co(e){yo=e,vo=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function To(e){return Oo(yo,e)}function Po(e,t){return null===yo&&Co(e),Oo(e,t)}function Oo(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===vo){if(null===e)throw Error(a(308));vo=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else vo=vo.next=t;return n}var Ro="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},_o=r.unstable_scheduleCallback,zo=r.unstable_NormalPriority,Ao={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function No(){return{controller:new Ro,data:new Map,refCount:0}}function Lo(e){e.refCount--,0===e.refCount&&_o(zo,function(){e.controller.abort()})}var Fo=null,Do=0,Mo=0,Io=null;function $o(){if(0===--Do&&null!==Fo){null!==Io&&(Io.status="fulfilled");var e=Fo;Fo=null,Mo=0,Io=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Uo=N.S;N.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===Fo){var n=Fo=[];Do=0,Mo=Ou(),Io={status:"pending",value:void 0,then:function(e){n.push(e)}}}Do++,t.then($o,$o)}(0,t),null!==Uo&&Uo(e,t)};var Bo=I(null);function Ho(){var e=Bo.current;return null!==e?e:rc.pooledCache}function Wo(e,t){U(Bo,null===t?Bo.current:t.pool)}function qo(){var e=Ho();return null===e?null:{parent:Ao._currentValue,pool:e}}var Vo=Error(a(460)),Yo=Error(a(474)),Ko=Error(a(542)),Qo={then:function(){}};function Go(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Jo(){}function Xo(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Jo,Jo),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw ti(e=t.reason),e;default:if("string"===typeof t.status)t.then(Jo,Jo);else{if(null!==(e=rc)&&100<e.shellSuspendCounter)throw Error(a(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw ti(e=t.reason),e}throw Zo=t,Vo}}var Zo=null;function ei(){if(null===Zo)throw Error(a(459));var e=Zo;return Zo=null,e}function ti(e){if(e===Vo||e===Ko)throw Error(a(483))}var ni=!1;function ri(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ii(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ai(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&nc)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,t=Ar(e),zr(e,null,n),t}return Or(e,r,t,n),Ar(e)}function li(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Te(e,n)}}function si(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===i?o=i=a:i=i.next=a,n=n.next}while(null!==n);null===i?o=i=t:i=i.next=t}else o=i=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ci=!1;function ui(){if(ci){if(null!==Io)throw Io}}function di(e,t,n,r){ci=!1;var o=e.updateQueue;ni=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,l=o.shared.pending;if(null!==l){o.shared.pending=null;var s=l,c=s.next;s.next=null,null===a?i=c:a.next=c,a=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==i){var d=o.baseState;for(a=0,u=c=s=null,l=i;;){var p=-536870913&l.lane,h=p!==l.lane;if(h?(ic&p)===p:(r&p)===p){0!==p&&p===Mo&&(ci=!0),null!==u&&(u=u.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var m=e,g=l;p=t;var b=n;switch(g.tag){case 1:if("function"===typeof(m=g.payload)){d=m.call(b,d,p);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(p="function"===typeof(m=g.payload)?m.call(b,d,p):m)||void 0===p)break e;d=f({},d,p);break e;case 2:ni=!0}}null!==(p=l.callback)&&(e.flags|=64,h&&(e.flags|=8192),null===(h=o.callbacks)?o.callbacks=[p]:h.push(p))}else h={lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=h,s=d):u=u.next=h,a|=p;if(null===(l=l.next)){if(null===(l=o.shared.pending))break;l=(h=l).next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}null===u&&(s=d),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=u,null===i&&(o.shared.lanes=0),pc|=a,e.lanes=a,e.memoizedState=d}}function fi(e,t){if("function"!==typeof e)throw Error(a(191,e));e.call(t)}function pi(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)fi(n[e],t)}var hi=I(null),mi=I(0);function gi(e,t){U(mi,e=dc),U(hi,t),dc=e|t.baseLanes}function bi(){U(mi,dc),U(hi,hi.current)}function yi(){dc=mi.current,$(hi),$(mi)}var vi=0,xi=null,wi=null,Si=null,ki=!1,ji=!1,Ei=!1,Ci=0,Ti=0,Pi=null,Oi=0;function Ri(){throw Error(a(321))}function _i(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qn(e[n],t[n]))return!1;return!0}function zi(e,t,n,r,o,i){return vi=i,xi=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=null===e||null===e.memoizedState?Va:Ya,Ei=!1,i=n(r,o),Ei=!1,ji&&(i=Ni(t,n,r,o)),Ai(e),i}function Ai(e){N.H=qa;var t=null!==wi&&null!==wi.next;if(vi=0,Si=wi=xi=null,ki=!1,Ti=0,Pi=null,t)throw Error(a(300));null===e||Tl||null!==(e=e.dependencies)&&Eo(e)&&(Tl=!0)}function Ni(e,t,n,r){xi=e;var o=0;do{if(ji&&(Pi=null),Ti=0,ji=!1,25<=o)throw Error(a(301));if(o+=1,Si=wi=null,null!=e.updateQueue){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,null!=i.memoCache&&(i.memoCache.index=0)}N.H=Ka,i=t(n,r)}while(ji);return i}function Li(){var e=N.H,t=e.useState()[0];return t="function"===typeof t.then?Ui(t):t,e=e.useState()[0],(null!==wi?wi.memoizedState:null)!==e&&(xi.flags|=1024),t}function Fi(){var e=0!==Ci;return Ci=0,e}function Di(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mi(e){if(ki){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}ki=!1}vi=0,Si=wi=xi=null,ji=!1,Ti=Ci=0,Pi=null}function Ii(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Si?xi.memoizedState=Si=e:Si=Si.next=e,Si}function $i(){if(null===wi){var e=xi.alternate;e=null!==e?e.memoizedState:null}else e=wi.next;var t=null===Si?xi.memoizedState:Si.next;if(null!==t)Si=t,wi=e;else{if(null===e){if(null===xi.alternate)throw Error(a(467));throw Error(a(310))}e={memoizedState:(wi=e).memoizedState,baseState:wi.baseState,baseQueue:wi.baseQueue,queue:wi.queue,next:null},null===Si?xi.memoizedState=Si=e:Si=Si.next=e}return Si}function Ui(e){var t=Ti;return Ti+=1,null===Pi&&(Pi=[]),e=Xo(Pi,e,t),t=xi,null===(null===Si?t.memoizedState:Si.next)&&(t=t.alternate,N.H=null===t||null===t.memoizedState?Va:Ya),e}function Bi(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return Ui(e);if(e.$$typeof===w)return To(e)}throw Error(a(438,String(e)))}function Hi(e){var t=null,n=xi.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=xi.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=P;return t.index++,n}function Wi(e,t){return"function"===typeof t?t(e):t}function qi(e){return Vi($i(),wi,e)}function Vi(e,t,n){var r=e.queue;if(null===r)throw Error(a(311));r.lastRenderedReducer=n;var o=e.baseQueue,i=r.pending;if(null!==i){if(null!==o){var l=o.next;o.next=i.next,i.next=l}t.baseQueue=o=i,r.pending=null}if(i=e.baseState,null===o)e.memoizedState=i;else{var s=l=null,c=null,u=t=o.next,d=!1;do{var f=-536870913&u.lane;if(f!==u.lane?(ic&f)===f:(vi&f)===f){var p=u.revertLane;if(0===p)null!==c&&(c=c.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Mo&&(d=!0);else{if((vi&p)===p){u=u.next,p===Mo&&(d=!0);continue}f={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=f,l=i):c=c.next=f,xi.lanes|=p,pc|=p}f=u.action,Ei&&n(i,f),i=u.hasEagerState?u.eagerState:n(i,f)}else p={lane:f,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=p,l=i):c=c.next=p,xi.lanes|=f,pc|=f;u=u.next}while(null!==u&&u!==t);if(null===c?l=i:c.next=s,!Qn(i,e.memoizedState)&&(Tl=!0,d&&null!==(n=Io)))throw n;e.memoizedState=i,e.baseState=l,e.baseQueue=c,r.lastRenderedState=i}return null===o&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Yi(e){var t=$i(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(null!==o){n.pending=null;var l=o=o.next;do{i=e(i,l.action),l=l.next}while(l!==o);Qn(i,t.memoizedState)||(Tl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Ki(e,t,n){var r=xi,o=$i(),i=io;if(i){if(void 0===n)throw Error(a(407));n=n()}else n=t();var l=!Qn((wi||o).memoizedState,n);if(l&&(o.memoizedState=n,Tl=!0),o=o.queue,ba(2048,8,Ji.bind(null,r,o,e),[e]),o.getSnapshot!==t||l||null!==Si&&1&Si.memoizedState.tag){if(r.flags|=2048,ha(9,{destroy:void 0,resource:void 0},Gi.bind(null,r,o,n,t),null),null===rc)throw Error(a(349));i||0!==(124&vi)||Qi(r,t,n)}return n}function Qi(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=xi.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Gi(e,t,n,r){t.value=n,t.getSnapshot=r,Xi(t)&&Zi(e)}function Ji(e,t,n){return n(function(){Xi(t)&&Zi(e)})}function Xi(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qn(e,n)}catch(r){return!0}}function Zi(e){var t=_r(e,2);null!==t&&Fc(t,e,2)}function ea(e){var t=Ii();if("function"===typeof e){var n=e;if(e=n(),Ei){fe(!0);try{n()}finally{fe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},t}function ta(e,t,n,r){return e.baseState=n,Vi(e,wi,"function"===typeof r?r:Wi)}function na(e,t,n,r,o){if(Ba(e))throw Error(a(485));if(null!==(e=t.action)){var i={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){i.listeners.push(e)}};null!==N.T?n(!0):i.isTransition=!1,r(i),null===(n=t.pending)?(i.next=t.pending=i,ra(t,i)):(i.next=n.next,t.pending=n.next=i)}}function ra(e,t){var n=t.action,r=t.payload,o=e.state;if(t.isTransition){var i=N.T,a={};N.T=a;try{var l=n(o,r),s=N.S;null!==s&&s(a,l),oa(e,t,l)}catch(c){aa(e,t,c)}finally{N.T=i}}else try{oa(e,t,i=n(o,r))}catch(u){aa(e,t,u)}}function oa(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){ia(e,t,n)},function(n){return aa(e,t,n)}):ia(e,t,n)}function ia(e,t,n){t.status="fulfilled",t.value=n,la(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,ra(e,n)))}function aa(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,la(t),t=t.next}while(t!==r)}e.action=null}function la(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function sa(e,t){return t}function ca(e,t){if(io){var n=rc.formState;if(null!==n){e:{var r=xi;if(io){if(oo){t:{for(var o=oo,i=lo;8!==o.nodeType;){if(!i){o=null;break t}if(null===(o=bd(o.nextSibling))){o=null;break t}}o="F!"===(i=o.data)||"F"===i?o:null}if(o){oo=bd(o.nextSibling),r="F!"===o.data;break e}}co(r)}r=!1}r&&(t=n[0])}}return(n=Ii()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},n.queue=r,n=Ia.bind(null,xi,r),r.dispatch=n,r=ea(!1),i=Ua.bind(null,xi,!1,r.queue),o={state:t,dispatch:null,action:e,pending:null},(r=Ii()).queue=o,n=na.bind(null,xi,o,i,n),o.dispatch=n,r.memoizedState=e,[t,n,!1]}function ua(e){return da($i(),wi,e)}function da(e,t,n){if(t=Vi(e,t,sa)[0],e=qi(Wi)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=Ui(t)}catch(a){if(a===Vo)throw Ko;throw a}else r=t;var o=(t=$i()).queue,i=o.dispatch;return n!==t.memoizedState&&(xi.flags|=2048,ha(9,{destroy:void 0,resource:void 0},fa.bind(null,o,n),null)),[r,i,e]}function fa(e,t){e.action=t}function pa(e){var t=$i(),n=wi;if(null!==n)return da(t,n,e);$i(),t=t.memoizedState;var r=(n=$i()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ha(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=xi.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ma(){return $i().memoizedState}function ga(e,t,n,r){var o=Ii();r=void 0===r?null:r,xi.flags|=e,o.memoizedState=ha(1|t,{destroy:void 0,resource:void 0},n,r)}function ba(e,t,n,r){var o=$i();r=void 0===r?null:r;var i=o.memoizedState.inst;null!==wi&&null!==r&&_i(r,wi.memoizedState.deps)?o.memoizedState=ha(t,i,n,r):(xi.flags|=e,o.memoizedState=ha(1|t,i,n,r))}function ya(e,t){ga(8390656,8,e,t)}function va(e,t){ba(2048,8,e,t)}function xa(e,t){return ba(4,2,e,t)}function wa(e,t){return ba(4,4,e,t)}function Sa(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function ka(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,ba(4,4,Sa.bind(null,t,e),n)}function ja(){}function Ea(e,t){var n=$i();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&_i(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ca(e,t){var n=$i();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&_i(t,r[1]))return r[0];if(r=e(),Ei){fe(!0);try{e()}finally{fe(!1)}}return n.memoizedState=[r,t],r}function Ta(e,t,n){return void 0===n||0!==(1073741824&vi)?e.memoizedState=t:(e.memoizedState=n,e=Lc(),xi.lanes|=e,pc|=e,n)}function Pa(e,t,n,r){return Qn(n,t)?n:null!==hi.current?(e=Ta(e,n,r),Qn(e,t)||(Tl=!0),e):0===(42&vi)?(Tl=!0,e.memoizedState=n):(e=Lc(),xi.lanes|=e,pc|=e,t)}function Oa(e,t,n,r,o){var i=L.p;L.p=0!==i&&8>i?i:8;var a=N.T,l={};N.T=l,Ua(e,!1,t,n);try{var s=o(),c=N.S;if(null!==c&&c(l,s),null!==s&&"object"===typeof s&&"function"===typeof s.then)$a(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}(s,r),Nc());else $a(e,t,r,Nc())}catch(u){$a(e,t,{then:function(){},status:"rejected",reason:u},Nc())}finally{L.p=i,N.T=a}}function Ra(){}function _a(e,t,n,r){if(5!==e.tag)throw Error(a(476));var o=za(e).queue;Oa(e,o,t,F,null===n?Ra:function(){return Aa(e),n(r)})}function za(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:F},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function Aa(e){$a(e,za(e).next.queue,{},Nc())}function Na(){return To(Kd)}function La(){return $i().memoizedState}function Fa(){return $i().memoizedState}function Da(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Nc(),r=ai(t,e=ii(n),n);return null!==r&&(Fc(r,t,n),li(r,t,n)),t={cache:No()},void(e.payload=t)}t=t.return}}function Ma(e,t,n){var r=Nc();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Ba(e)?Ha(t,n):null!==(n=Rr(e,t,n,r))&&(Fc(n,e,r),Wa(n,t,r))}function Ia(e,t,n){$a(e,t,n,Nc())}function $a(e,t,n,r){var o={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ba(e))Ha(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,l=i(a,n);if(o.hasEagerState=!0,o.eagerState=l,Qn(l,a))return Or(e,t,o,0),null===rc&&Pr(),!1}catch(s){}if(null!==(n=Rr(e,t,o,r)))return Fc(n,e,r),Wa(n,t,r),!0}return!1}function Ua(e,t,n,r){if(r={lane:2,revertLane:Ou(),action:r,hasEagerState:!1,eagerState:null,next:null},Ba(e)){if(t)throw Error(a(479))}else null!==(t=Rr(e,n,r,2))&&Fc(t,e,2)}function Ba(e){var t=e.alternate;return e===xi||null!==t&&t===xi}function Ha(e,t){ji=ki=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wa(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Te(e,n)}}var qa={readContext:To,use:Bi,useCallback:Ri,useContext:Ri,useEffect:Ri,useImperativeHandle:Ri,useLayoutEffect:Ri,useInsertionEffect:Ri,useMemo:Ri,useReducer:Ri,useRef:Ri,useState:Ri,useDebugValue:Ri,useDeferredValue:Ri,useTransition:Ri,useSyncExternalStore:Ri,useId:Ri,useHostTransitionStatus:Ri,useFormState:Ri,useActionState:Ri,useOptimistic:Ri,useMemoCache:Ri,useCacheRefresh:Ri},Va={readContext:To,use:Bi,useCallback:function(e,t){return Ii().memoizedState=[e,void 0===t?null:t],e},useContext:To,useEffect:ya,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,ga(4194308,4,Sa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ga(4194308,4,e,t)},useInsertionEffect:function(e,t){ga(4,2,e,t)},useMemo:function(e,t){var n=Ii();t=void 0===t?null:t;var r=e();if(Ei){fe(!0);try{e()}finally{fe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ii();if(void 0!==n){var o=n(t);if(Ei){fe(!0);try{n(t)}finally{fe(!1)}}}else o=t;return r.memoizedState=r.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},r.queue=e,e=e.dispatch=Ma.bind(null,xi,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Ii().memoizedState=e},useState:function(e){var t=(e=ea(e)).queue,n=Ia.bind(null,xi,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:ja,useDeferredValue:function(e,t){return Ta(Ii(),e,t)},useTransition:function(){var e=ea(!1);return e=Oa.bind(null,xi,e.queue,!0,!1),Ii().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=xi,o=Ii();if(io){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===rc)throw Error(a(349));0!==(124&ic)||Qi(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ya(Ji.bind(null,r,i,e),[e]),r.flags|=2048,ha(9,{destroy:void 0,resource:void 0},Gi.bind(null,r,i,n,t),null),n},useId:function(){var e=Ii(),t=rc.identifierPrefix;if(io){var n=Xr;t="\xab"+t+"R"+(n=(Jr&~(1<<32-pe(Jr)-1)).toString(32)+n),0<(n=Ci++)&&(t+="H"+n.toString(32)),t+="\xbb"}else t="\xab"+t+"r"+(n=Oi++).toString(32)+"\xbb";return e.memoizedState=t},useHostTransitionStatus:Na,useFormState:ca,useActionState:ca,useOptimistic:function(e){var t=Ii();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ua.bind(null,xi,!0,n),n.dispatch=t,[e,t]},useMemoCache:Hi,useCacheRefresh:function(){return Ii().memoizedState=Da.bind(null,xi)}},Ya={readContext:To,use:Bi,useCallback:Ea,useContext:To,useEffect:va,useImperativeHandle:ka,useInsertionEffect:xa,useLayoutEffect:wa,useMemo:Ca,useReducer:qi,useRef:ma,useState:function(){return qi(Wi)},useDebugValue:ja,useDeferredValue:function(e,t){return Pa($i(),wi.memoizedState,e,t)},useTransition:function(){var e=qi(Wi)[0],t=$i().memoizedState;return["boolean"===typeof e?e:Ui(e),t]},useSyncExternalStore:Ki,useId:La,useHostTransitionStatus:Na,useFormState:ua,useActionState:ua,useOptimistic:function(e,t){return ta($i(),0,e,t)},useMemoCache:Hi,useCacheRefresh:Fa},Ka={readContext:To,use:Bi,useCallback:Ea,useContext:To,useEffect:va,useImperativeHandle:ka,useInsertionEffect:xa,useLayoutEffect:wa,useMemo:Ca,useReducer:Yi,useRef:ma,useState:function(){return Yi(Wi)},useDebugValue:ja,useDeferredValue:function(e,t){var n=$i();return null===wi?Ta(n,e,t):Pa(n,wi.memoizedState,e,t)},useTransition:function(){var e=Yi(Wi)[0],t=$i().memoizedState;return["boolean"===typeof e?e:Ui(e),t]},useSyncExternalStore:Ki,useId:La,useHostTransitionStatus:Na,useFormState:pa,useActionState:pa,useOptimistic:function(e,t){var n=$i();return null!==wi?ta(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Hi,useCacheRefresh:Fa},Qa=null,Ga=0;function Ja(e){var t=Ga;return Ga+=1,null===Qa&&(Qa=[]),Xo(Qa,e,t)}function Xa(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Za(e,t){if(t.$$typeof===p)throw Error(a(525));throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function el(e){return(0,e._init)(e._payload)}function tl(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function o(e,t){return(e=Mr(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Br(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function c(e,t,n,r){var i=n.type;return i===g?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===C&&el(i)===t.type)?(Xa(t=o(t,n.props),n),t.return=e,t):(Xa(t=$r(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Hr(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Ur(n,e.mode,r,i)).return=e,t):((t=o(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Br(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case h:return Xa(n=$r(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case m:return(t=Hr(t,e.mode,n)).return=e,t;case C:return f(e,t=(0,t._init)(t._payload),n)}if(A(t)||R(t))return(t=Ur(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return f(e,Ja(t),n);if(t.$$typeof===w)return f(e,Po(e,t),n);Za(e,t)}return null}function p(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==o?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case h:return n.key===o?c(e,t,n,r):null;case m:return n.key===o?u(e,t,n,r):null;case C:return p(e,t,n=(o=n._init)(n._payload),r)}if(A(n)||R(n))return null!==o?null:d(e,t,n,r,null);if("function"===typeof n.then)return p(e,t,Ja(n),r);if(n.$$typeof===w)return p(e,t,Po(e,n),r);Za(e,n)}return null}function b(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return s(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case h:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case m:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case C:return b(e,t,n,r=(0,r._init)(r._payload),o)}if(A(r)||R(r))return d(t,e=e.get(n)||null,r,o,null);if("function"===typeof r.then)return b(e,t,n,Ja(r),o);if(r.$$typeof===w)return b(e,t,n,Po(t,r),o);Za(t,r)}return null}function y(s,c,u,d){if("object"===typeof u&&null!==u&&u.type===g&&null===u.key&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case h:e:{for(var v=u.key;null!==c;){if(c.key===v){if((v=u.type)===g){if(7===c.tag){n(s,c.sibling),(d=o(c,u.props.children)).return=s,s=d;break e}}else if(c.elementType===v||"object"===typeof v&&null!==v&&v.$$typeof===C&&el(v)===c.type){n(s,c.sibling),Xa(d=o(c,u.props),u),d.return=s,s=d;break e}n(s,c);break}t(s,c),c=c.sibling}u.type===g?((d=Ur(u.props.children,s.mode,d,u.key)).return=s,s=d):(Xa(d=$r(u.type,u.key,u.props,null,s.mode,d),u),d.return=s,s=d)}return l(s);case m:e:{for(v=u.key;null!==c;){if(c.key===v){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(s,c.sibling),(d=o(c,u.children||[])).return=s,s=d;break e}n(s,c);break}t(s,c),c=c.sibling}(d=Hr(u,s.mode,d)).return=s,s=d}return l(s);case C:return y(s,c,u=(v=u._init)(u._payload),d)}if(A(u))return function(o,a,l,s){for(var c=null,u=null,d=a,h=a=0,m=null;null!==d&&h<l.length;h++){d.index>h?(m=d,d=null):m=d.sibling;var g=p(o,d,l[h],s);if(null===g){null===d&&(d=m);break}e&&d&&null===g.alternate&&t(o,d),a=i(g,a,h),null===u?c=g:u.sibling=g,u=g,d=m}if(h===l.length)return n(o,d),io&&Zr(o,h),c;if(null===d){for(;h<l.length;h++)null!==(d=f(o,l[h],s))&&(a=i(d,a,h),null===u?c=d:u.sibling=d,u=d);return io&&Zr(o,h),c}for(d=r(d);h<l.length;h++)null!==(m=b(d,o,h,l[h],s))&&(e&&null!==m.alternate&&d.delete(null===m.key?h:m.key),a=i(m,a,h),null===u?c=m:u.sibling=m,u=m);return e&&d.forEach(function(e){return t(o,e)}),io&&Zr(o,h),c}(s,c,u,d);if(R(u)){if("function"!==typeof(v=R(u)))throw Error(a(150));return function(o,l,s,c){if(null==s)throw Error(a(151));for(var u=null,d=null,h=l,m=l=0,g=null,y=s.next();null!==h&&!y.done;m++,y=s.next()){h.index>m?(g=h,h=null):g=h.sibling;var v=p(o,h,y.value,c);if(null===v){null===h&&(h=g);break}e&&h&&null===v.alternate&&t(o,h),l=i(v,l,m),null===d?u=v:d.sibling=v,d=v,h=g}if(y.done)return n(o,h),io&&Zr(o,m),u;if(null===h){for(;!y.done;m++,y=s.next())null!==(y=f(o,y.value,c))&&(l=i(y,l,m),null===d?u=y:d.sibling=y,d=y);return io&&Zr(o,m),u}for(h=r(h);!y.done;m++,y=s.next())null!==(y=b(h,o,m,y.value,c))&&(e&&null!==y.alternate&&h.delete(null===y.key?m:y.key),l=i(y,l,m),null===d?u=y:d.sibling=y,d=y);return e&&h.forEach(function(e){return t(o,e)}),io&&Zr(o,m),u}(s,c,u=v.call(u),d)}if("function"===typeof u.then)return y(s,c,Ja(u),d);if(u.$$typeof===w)return y(s,c,Po(s,u),d);Za(s,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(s,c.sibling),(d=o(c,u)).return=s,s=d):(n(s,c),(d=Br(u,s.mode,d)).return=s,s=d),l(s)):n(s,c)}return function(e,t,n,r){try{Ga=0;var o=y(e,t,n,r);return Qa=null,o}catch(a){if(a===Vo||a===Ko)throw a;var i=Fr(29,a,null,e.mode);return i.lanes=r,i.return=e,i}}}var nl=tl(!0),rl=tl(!1),ol=I(null),il=null;function al(e){var t=e.alternate;U(ul,1&ul.current),U(ol,e),null===il&&(null===t||null!==hi.current||null!==t.memoizedState)&&(il=e)}function ll(e){if(22===e.tag){if(U(ul,ul.current),U(ol,e),null===il){var t=e.alternate;null!==t&&null!==t.memoizedState&&(il=e)}}else sl()}function sl(){U(ul,ul.current),U(ol,ol.current)}function cl(e){$(ol),il===e&&(il=null),$(ul)}var ul=I(0);function dl(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||gd(n)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function fl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:f({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var pl={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Nc(),o=ii(r);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=ai(e,o,r))&&(Fc(t,e,r),li(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Nc(),o=ii(r);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=ai(e,o,r))&&(Fc(t,e,r),li(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Nc(),r=ii(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=ai(e,r,n))&&(Fc(t,e,n),li(t,e,n))}};function hl(e,t,n,r,o,i,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!t.prototype||!t.prototype.isPureReactComponent||(!Gn(n,r)||!Gn(o,i))}function ml(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pl.enqueueReplaceState(t,t.state,null)}function gl(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var o in n===t&&(n=f({},n)),e)void 0===n[o]&&(n[o]=e[o]);return n}var bl="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function yl(e){bl(e)}function vl(e){console.error(e)}function xl(e){bl(e)}function wl(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Sl(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function kl(e,t,n){return(n=ii(n)).tag=3,n.payload={element:null},n.callback=function(){wl(e,t)},n}function jl(e){return(e=ii(e)).tag=3,e}function El(e,t,n,r){var o=n.type.getDerivedStateFromError;if("function"===typeof o){var i=r.value;e.payload=function(){return o(i)},e.callback=function(){Sl(t,n,r)}}var a=n.stateNode;null!==a&&"function"===typeof a.componentDidCatch&&(e.callback=function(){Sl(t,n,r),"function"!==typeof o&&(null===jc?jc=new Set([this]):jc.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Cl=Error(a(461)),Tl=!1;function Pl(e,t,n,r){t.child=null===e?rl(t,null,n,r):nl(t,e.child,n,r)}function Ol(e,t,n,r,o){n=n.render;var i=t.ref;if("ref"in r){var a={};for(var l in r)"ref"!==l&&(a[l]=r[l])}else a=r;return Co(t),r=zi(e,t,n,a,i,o),l=Fi(),null===e||Tl?(io&&l&&to(t),t.flags|=1,Pl(e,t,r,o),t.child):(Di(e,t,o),Ql(e,t,o))}function Rl(e,t,n,r,o){if(null===e){var i=n.type;return"function"!==typeof i||Dr(i)||void 0!==i.defaultProps||null!==n.compare?((e=$r(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,_l(e,t,i,r,o))}if(i=e.child,!Gl(e,o)){var a=i.memoizedProps;if((n=null!==(n=n.compare)?n:Gn)(a,r)&&e.ref===t.ref)return Ql(e,t,o)}return t.flags|=1,(e=Mr(i,r)).ref=t.ref,e.return=t,t.child=e}function _l(e,t,n,r,o){if(null!==e){var i=e.memoizedProps;if(Gn(i,r)&&e.ref===t.ref){if(Tl=!1,t.pendingProps=r=i,!Gl(e,o))return t.lanes=e.lanes,Ql(e,t,o);0!==(131072&e.flags)&&(Tl=!0)}}return Ll(e,t,n,r,o)}function zl(e,t,n){var r=t.pendingProps,o=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0!==(128&t.flags)){if(r=null!==i?i.baseLanes|n:n,null!==e){for(o=t.child=e.child,i=0;null!==o;)i=i|o.lanes|o.childLanes,o=o.sibling;t.childLanes=i&~r}else t.childLanes=0,t.child=null;return Al(e,t,r,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,Al(e,t,null!==i?i.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Wo(0,null!==i?i.cachePool:null),null!==i?gi(t,i):bi(),ll(t)}else null!==i?(Wo(0,i.cachePool),gi(t,i),sl(),t.memoizedState=null):(null!==e&&Wo(0,null),bi(),sl());return Pl(e,t,o,n),t.child}function Al(e,t,n,r){var o=Ho();return o=null===o?null:{parent:Ao._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},null!==e&&Wo(0,null),bi(),ll(t),null!==e&&jo(e,t,r,!0),null}function Nl(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(a(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Ll(e,t,n,r,o){return Co(t),n=zi(e,t,n,r,void 0,o),r=Fi(),null===e||Tl?(io&&r&&to(t),t.flags|=1,Pl(e,t,n,o),t.child):(Di(e,t,o),Ql(e,t,o))}function Fl(e,t,n,r,o,i){return Co(t),t.updateQueue=null,n=Ni(t,r,n,o),Ai(e),r=Fi(),null===e||Tl?(io&&r&&to(t),t.flags|=1,Pl(e,t,n,i),t.child):(Di(e,t,i),Ql(e,t,i))}function Dl(e,t,n,r,o){if(Co(t),null===t.stateNode){var i=Nr,a=n.contextType;"object"===typeof a&&null!==a&&(i=To(a)),i=new n(r,i),t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,i.updater=pl,t.stateNode=i,i._reactInternals=t,(i=t.stateNode).props=r,i.state=t.memoizedState,i.refs={},ri(t),a=n.contextType,i.context="object"===typeof a&&null!==a?To(a):Nr,i.state=t.memoizedState,"function"===typeof(a=n.getDerivedStateFromProps)&&(fl(t,n,a,r),i.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(a=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),a!==i.state&&pl.enqueueReplaceState(i,i.state,null),di(t,r,i,o),ui(),i.state=t.memoizedState),"function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){i=t.stateNode;var l=t.memoizedProps,s=gl(n,l);i.props=s;var c=i.context,u=n.contextType;a=Nr,"object"===typeof u&&null!==u&&(a=To(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof i.getSnapshotBeforeUpdate,l=t.pendingProps!==l,u||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l||c!==a)&&ml(t,i,r,a),ni=!1;var f=t.memoizedState;i.state=f,di(t,r,i,o),ui(),c=t.memoizedState,l||f!==c||ni?("function"===typeof d&&(fl(t,n,d,r),c=t.memoizedState),(s=ni||hl(t,n,s,r,f,c,a))?(u||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),i.props=r,i.state=c,i.context=a,r=s):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,oi(e,t),u=gl(n,a=t.memoizedProps),i.props=u,d=t.pendingProps,f=i.context,c=n.contextType,s=Nr,"object"===typeof c&&null!==c&&(s=To(c)),(c="function"===typeof(l=n.getDerivedStateFromProps)||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(a!==d||f!==s)&&ml(t,i,r,s),ni=!1,f=t.memoizedState,i.state=f,di(t,r,i,o),ui();var p=t.memoizedState;a!==d||f!==p||ni||null!==e&&null!==e.dependencies&&Eo(e.dependencies)?("function"===typeof l&&(fl(t,n,l,r),p=t.memoizedState),(u=ni||hl(t,n,u,r,f,p,s)||null!==e&&null!==e.dependencies&&Eo(e.dependencies))?(c||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,p,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,p,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),i.props=r,i.state=p,i.context=s,r=u):("function"!==typeof i.componentDidUpdate||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return i=r,Nl(e,t),r=0!==(128&t.flags),i||r?(i=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:i.render(),t.flags|=1,null!==e&&r?(t.child=nl(t,e.child,null,o),t.child=nl(t,null,n,o)):Pl(e,t,n,o),t.memoizedState=i.state,e=t.child):e=Ql(e,t,o),e}function Ml(e,t,n,r){return ho(),t.flags|=256,Pl(e,t,n,r),t.child}var Il={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $l(e){return{baseLanes:e,cachePool:qo()}}function Ul(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=gc),e}function Bl(e,t,n){var r,o=t.pendingProps,i=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&ul.current)),r&&(i=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(io){if(i?al(t):sl(),io){var s,c=oo;if(s=c){e:{for(s=c,c=lo;8!==s.nodeType;){if(!c){c=null;break e}if(null===(s=bd(s.nextSibling))){c=null;break e}}c=s}null!==c?(t.memoizedState={dehydrated:c,treeContext:null!==Gr?{id:Jr,overflow:Xr}:null,retryLane:536870912,hydrationErrors:null},(s=Fr(18,null,null,0)).stateNode=c,s.return=t,t.child=s,ro=t,oo=null,s=!0):s=!1}s||co(t)}if(null!==(c=t.memoizedState)&&null!==(c=c.dehydrated))return gd(c)?t.lanes=32:t.lanes=536870912,null;cl(t)}return c=o.children,o=o.fallback,i?(sl(),c=Wl({mode:"hidden",children:c},i=t.mode),o=Ur(o,i,n,null),c.return=t,o.return=t,c.sibling=o,t.child=c,(i=t.child).memoizedState=$l(n),i.childLanes=Ul(e,r,n),t.memoizedState=Il,o):(al(t),Hl(t,c))}if(null!==(s=e.memoizedState)&&null!==(c=s.dehydrated)){if(l)256&t.flags?(al(t),t.flags&=-257,t=ql(e,t,n)):null!==t.memoizedState?(sl(),t.child=e.child,t.flags|=128,t=null):(sl(),i=o.fallback,c=t.mode,o=Wl({mode:"visible",children:o.children},c),(i=Ur(i,c,n,null)).flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,nl(t,e.child,null,n),(o=t.child).memoizedState=$l(n),o.childLanes=Ul(e,r,n),t.memoizedState=Il,t=i);else if(al(t),gd(c)){if(r=c.nextSibling&&c.nextSibling.dataset)var u=r.dgst;r=u,(o=Error(a(419))).stack="",o.digest=r,go({value:o,source:null,stack:null}),t=ql(e,t,n)}else if(Tl||jo(e,t,n,!1),r=0!==(n&e.childLanes),Tl||r){if(null!==(r=rc)&&(0!==(o=0!==((o=0!==(42&(o=n&-n))?1:Pe(o))&(r.suspendedLanes|n))?0:o)&&o!==s.retryLane))throw s.retryLane=o,_r(e,o),Fc(r,e,o),Cl;"$?"===c.data||Yc(),t=ql(e,t,n)}else"$?"===c.data?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,oo=bd(c.nextSibling),ro=t,io=!0,ao=null,lo=!1,null!==e&&(Kr[Qr++]=Jr,Kr[Qr++]=Xr,Kr[Qr++]=Gr,Jr=e.id,Xr=e.overflow,Gr=t),(t=Hl(t,o.children)).flags|=4096);return t}return i?(sl(),i=o.fallback,c=t.mode,u=(s=e.child).sibling,(o=Mr(s,{mode:"hidden",children:o.children})).subtreeFlags=65011712&s.subtreeFlags,null!==u?i=Mr(u,i):(i=Ur(i,c,n,null)).flags|=2,i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,null===(c=e.child.memoizedState)?c=$l(n):(null!==(s=c.cachePool)?(u=Ao._currentValue,s=s.parent!==u?{parent:u,pool:u}:s):s=qo(),c={baseLanes:c.baseLanes|n,cachePool:s}),i.memoizedState=c,i.childLanes=Ul(e,r,n),t.memoizedState=Il,o):(al(t),e=(n=e.child).sibling,(n=Mr(n,{mode:"visible",children:o.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Hl(e,t){return(t=Wl({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Wl(e,t){return(e=Fr(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ql(e,t,n){return nl(t,e.child,null,n),(e=Hl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Vl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),So(e.return,t,n)}function Yl(e,t,n,r,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Kl(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Pl(e,t,r.children,n),0!==(2&(r=ul.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Vl(e,n,t);else if(19===e.tag)Vl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(U(ul,r),o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===dl(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Yl(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===dl(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Yl(t,!0,n,null,i);break;case"together":Yl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ql(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),pc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(jo(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Mr(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Mr(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Gl(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Eo(e))}function Jl(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Tl=!0;else{if(!Gl(e,n)&&0===(128&t.flags))return Tl=!1,function(e,t,n){switch(t.tag){case 3:V(t,t.stateNode.containerInfo),xo(0,Ao,e.memoizedState.cache),ho();break;case 27:case 5:K(t);break;case 4:V(t,t.stateNode.containerInfo);break;case 10:xo(0,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(al(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Bl(e,t,n):(al(t),null!==(e=Ql(e,t,n))?e.sibling:null);al(t);break;case 19:var o=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(jo(e,t,n,!1),r=0!==(n&t.childLanes)),o){if(r)return Kl(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),U(ul,ul.current),r)break;return null;case 22:case 23:return t.lanes=0,zl(e,t,n);case 24:xo(0,Ao,e.memoizedState.cache)}return Ql(e,t,n)}(e,t,n);Tl=0!==(131072&e.flags)}else Tl=!1,io&&0!==(1048576&t.flags)&&eo(t,Yr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,o=r._init;if(r=o(r._payload),t.type=r,"function"!==typeof r){if(void 0!==r&&null!==r){if((o=r.$$typeof)===S){t.tag=11,t=Ol(null,t,r,e,n);break e}if(o===E){t.tag=14,t=Rl(null,t,r,e,n);break e}}throw t=z(r)||r,Error(a(306,t,""))}Dr(r)?(e=gl(r,e),t.tag=1,t=Dl(null,t,r,e,n)):(t.tag=0,t=Ll(null,t,r,e,n))}return t;case 0:return Ll(e,t,t.type,t.pendingProps,n);case 1:return Dl(e,t,r=t.type,o=gl(r,t.pendingProps),n);case 3:e:{if(V(t,t.stateNode.containerInfo),null===e)throw Error(a(387));r=t.pendingProps;var i=t.memoizedState;o=i.element,oi(e,t),di(t,r,null,n);var l=t.memoizedState;if(r=l.cache,xo(0,Ao,r),r!==i.cache&&ko(t,[Ao],n,!0),ui(),r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Ml(e,t,r,n);break e}if(r!==o){go(o=jr(Error(a(424)),t)),t=Ml(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(oo=bd(e.firstChild),ro=t,io=!0,ao=null,lo=!0,n=rl(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ho(),r===o){t=Ql(e,t,n);break e}Pl(e,t,r,n)}t=t.child}return t;case 26:return Nl(e,t),null===e?(n=Pd(t.type,null,t.pendingProps,null))?t.memoizedState=n:io||(n=t.type,e=t.pendingProps,(r=rd(W.current).createElement(n))[ze]=t,r[Ae]=e,ed(r,n,e),qe(r),t.stateNode=r):t.memoizedState=Pd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return K(t),null===e&&io&&(r=t.stateNode=xd(t.type,t.pendingProps,W.current),ro=t,lo=!0,o=oo,pd(t.type)?(yd=o,oo=bd(r.firstChild)):oo=o),Pl(e,t,t.pendingProps.children,n),Nl(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&io&&((o=r=oo)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Ie])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(i=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(i!==o.rel||e.getAttribute("href")!==(null==o.href||""===o.href?null:o.href)||e.getAttribute("crossorigin")!==(null==o.crossOrigin?null:o.crossOrigin)||e.getAttribute("title")!==(null==o.title?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((i=e.getAttribute("src"))!==(null==o.src?null:o.src)||e.getAttribute("type")!==(null==o.type?null:o.type)||e.getAttribute("crossorigin")!==(null==o.crossOrigin?null:o.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var i=null==o.name?null:""+o.name;if("hidden"===o.type&&e.getAttribute("name")===i)return e}if(null===(e=bd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,lo))?(t.stateNode=r,ro=t,oo=bd(r.firstChild),lo=!1,o=!0):o=!1),o||co(t)),K(t),o=t.type,i=t.pendingProps,l=null!==e?e.memoizedProps:null,r=i.children,ad(o,i)?r=null:null!==l&&ad(o,l)&&(t.flags|=32),null!==t.memoizedState&&(o=zi(e,t,Li,null,null,n),Kd._currentValue=o),Nl(e,t),Pl(e,t,r,n),t.child;case 6:return null===e&&io&&((e=n=oo)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=bd(e.nextSibling)))return null}return e}(n,t.pendingProps,lo))?(t.stateNode=n,ro=t,oo=null,e=!0):e=!1),e||co(t)),null;case 13:return Bl(e,t,n);case 4:return V(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=nl(t,null,r,n):Pl(e,t,r,n),t.child;case 11:return Ol(e,t,t.type,t.pendingProps,n);case 7:return Pl(e,t,t.pendingProps,n),t.child;case 8:case 12:return Pl(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,xo(0,t.type,r.value),Pl(e,t,r.children,n),t.child;case 9:return o=t.type._context,r=t.pendingProps.children,Co(t),r=r(o=To(o)),t.flags|=1,Pl(e,t,r,n),t.child;case 14:return Rl(e,t,t.type,t.pendingProps,n);case 15:return _l(e,t,t.type,t.pendingProps,n);case 19:return Kl(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},null===e?((n=Wl(r,n)).ref=t.ref,t.child=n,n.return=t,t=n):((n=Mr(e.child,r)).ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return zl(e,t,n);case 24:return Co(t),r=To(Ao),null===e?(null===(o=Ho())&&(o=rc,i=No(),o.pooledCache=i,i.refCount++,null!==i&&(o.pooledCacheLanes|=n),o=i),t.memoizedState={parent:r,cache:o},ri(t),xo(0,Ao,o)):(0!==(e.lanes&n)&&(oi(e,t),di(t,null,null,n),ui()),o=e.memoizedState,i=t.memoizedState,o.parent!==r?(o={parent:r,cache:r},t.memoizedState=o,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=o),xo(0,Ao,r)):(r=i.cache,xo(0,Ao,r),r!==o.cache&&ko(t,[Ao],n,!0))),Pl(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(a(156,t.tag))}function Xl(e){e.flags|=4}function Zl(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!Ud(t)){if(null!==(t=ol.current)&&((4194048&ic)===ic?null!==il:(62914560&ic)!==ic&&0===(536870912&ic)||t!==il))throw Zo=Qo,Yo;e.flags|=8192}}function es(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?ke():536870912,e.lanes|=t,bc|=t)}function ts(e,t){if(!io)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ns(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=65011712&o.subtreeFlags,r|=65011712&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rs(e,t,n){var r=t.pendingProps;switch(no(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return ns(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),wo(Ao),Y(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(po(t)?Xl(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,mo())),ns(t),null;case 26:return n=t.memoizedState,null===e?(Xl(t),null!==n?(ns(t),Zl(t,n)):(ns(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Xl(t),ns(t),Zl(t,n)):(ns(t),t.flags&=-16777217):(e.memoizedProps!==r&&Xl(t),ns(t),t.flags&=-16777217),null;case 27:Q(t),n=W.current;var o=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Xl(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return ns(t),null}e=B.current,po(t)?uo(t):(e=xd(o,r,n),t.stateNode=e,Xl(t))}return ns(t),null;case 5:if(Q(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Xl(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return ns(t),null}if(e=B.current,po(t))uo(t);else{switch(o=rd(W.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof r.is?o.createElement("select",{is:r.is}):o.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"===typeof r.is?o.createElement(n,{is:r.is}):o.createElement(n)}}e[ze]=t,e[Ae]=r;e:for(o=t.child;null!==o;){if(5===o.tag||6===o.tag)e.appendChild(o.stateNode);else if(4!==o.tag&&27!==o.tag&&null!==o.child){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;null===o.sibling;){if(null===o.return||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=e;e:switch(ed(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Xl(t)}}return ns(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Xl(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(e=W.current,po(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(o=ro))switch(o.tag){case 27:case 5:r=o.memoizedProps}e[ze]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Gu(e.nodeValue,n)))||co(t)}else(e=rd(e).createTextNode(r))[ze]=t,t.stateNode=e}return ns(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(o=po(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(a(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(a(317));o[ze]=t}else ho(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ns(t),o=!1}else o=mo(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return 256&t.flags?(cl(t),t):(cl(t),null)}if(cl(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){o=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(o=r.alternate.memoizedState.cachePool.pool);var i=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(i=r.memoizedState.cachePool.pool),i!==o&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),es(t,t.updateQueue),ns(t),null;case 4:return Y(),null===e&&$u(t.stateNode.containerInfo),ns(t),null;case 10:return wo(t.type),ns(t),null;case 19:if($(ul),null===(o=t.memoizedState))return ns(t),null;if(r=0!==(128&t.flags),null===(i=o.rendering))if(r)ts(o,!1);else{if(0!==fc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(i=dl(e))){for(t.flags|=128,ts(o,!1),e=i.updateQueue,t.updateQueue=e,es(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Ir(n,e),n=n.sibling;return U(ul,1&ul.current|2),t.child}e=e.sibling}null!==o.tail&&te()>Sc&&(t.flags|=128,r=!0,ts(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=dl(i))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,es(t,e),ts(o,!0),null===o.tail&&"hidden"===o.tailMode&&!i.alternate&&!io)return ns(t),null}else 2*te()-o.renderingStartTime>Sc&&536870912!==n&&(t.flags|=128,r=!0,ts(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(null!==(e=o.last)?e.sibling=i:t.child=i,o.last=i)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=te(),t.sibling=null,e=ul.current,U(ul,r?1&e|2:1&e),t):(ns(t),null);case 22:case 23:return cl(t),yi(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(ns(t),6&t.subtreeFlags&&(t.flags|=8192)):ns(t),null!==(n=t.updateQueue)&&es(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&$(Bo),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),wo(Ao),ns(t),null;case 25:case 30:return null}throw Error(a(156,t.tag))}function os(e,t){switch(no(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return wo(Ao),Y(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return Q(t),null;case 13:if(cl(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));ho()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return $(ul),null;case 4:return Y(),null;case 10:return wo(t.type),null;case 22:case 23:return cl(t),yi(),null!==e&&$(Bo),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return wo(Ao),null;default:return null}}function is(e,t){switch(no(t),t.tag){case 3:wo(Ao),Y();break;case 26:case 27:case 5:Q(t);break;case 4:Y();break;case 13:cl(t);break;case 19:$(ul);break;case 10:wo(t.type);break;case 22:case 23:cl(t),yi(),null!==e&&$(Bo);break;case 24:wo(Ao)}}function as(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var o=r.next;n=o;do{if((n.tag&e)===e){r=void 0;var i=n.create,a=n.inst;r=i(),a.destroy=r}n=n.next}while(n!==o)}}catch(l){uu(t,t.return,l)}}function ls(e,t,n){try{var r=t.updateQueue,o=null!==r?r.lastEffect:null;if(null!==o){var i=o.next;r=i;do{if((r.tag&e)===e){var a=r.inst,l=a.destroy;if(void 0!==l){a.destroy=void 0,o=t;var s=n,c=l;try{c()}catch(u){uu(o,s,u)}}}r=r.next}while(r!==i)}}catch(u){uu(t,t.return,u)}}function ss(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{pi(t,n)}catch(r){uu(e,e.return,r)}}}function cs(e,t,n){n.props=gl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){uu(e,t,r)}}function us(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(o){uu(e,t,o)}}function ds(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(o){uu(e,t,o)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(i){uu(e,t,i)}else n.current=null}function fs(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(o){uu(e,e.return,o)}}function ps(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,i=null,l=null,s=null,c=null,u=null,d=null;for(h in n){var f=n[h];if(n.hasOwnProperty(h)&&null!=f)switch(h){case"checked":case"value":break;case"defaultValue":c=f;default:r.hasOwnProperty(h)||Xu(e,t,h,null,r,f)}}for(var p in r){var h=r[p];if(f=n[p],r.hasOwnProperty(p)&&(null!=h||null!=f))switch(p){case"type":i=h;break;case"name":o=h;break;case"checked":u=h;break;case"defaultChecked":d=h;break;case"value":l=h;break;case"defaultValue":s=h;break;case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(a(137,t));break;default:h!==f&&Xu(e,t,p,h,r,f)}}return void gt(e,l,s,c,u,d,i,o);case"select":for(i in h=l=s=p=null,n)if(c=n[i],n.hasOwnProperty(i)&&null!=c)switch(i){case"value":break;case"multiple":h=c;default:r.hasOwnProperty(i)||Xu(e,t,i,null,r,c)}for(o in r)if(i=r[o],c=n[o],r.hasOwnProperty(o)&&(null!=i||null!=c))switch(o){case"value":p=i;break;case"defaultValue":s=i;break;case"multiple":l=i;default:i!==c&&Xu(e,t,o,i,r,c)}return t=s,n=l,r=h,void(null!=p?vt(e,!!n,p,!1):!!r!==!!n&&(null!=t?vt(e,!!n,t,!0):vt(e,!!n,n?[]:"",!1)));case"textarea":for(s in h=p=null,n)if(o=n[s],n.hasOwnProperty(s)&&null!=o&&!r.hasOwnProperty(s))switch(s){case"value":case"children":break;default:Xu(e,t,s,null,r,o)}for(l in r)if(o=r[l],i=n[l],r.hasOwnProperty(l)&&(null!=o||null!=i))switch(l){case"value":p=o;break;case"defaultValue":h=o;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=o)throw Error(a(91));break;default:o!==i&&Xu(e,t,l,o,r,i)}return void xt(e,p,h);case"option":for(var m in n)if(p=n[m],n.hasOwnProperty(m)&&null!=p&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else Xu(e,t,m,null,r,p);for(c in r)if(p=r[c],h=n[c],r.hasOwnProperty(c)&&p!==h&&(null!=p||null!=h))if("selected"===c)e.selected=p&&"function"!==typeof p&&"symbol"!==typeof p;else Xu(e,t,c,p,r,h);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)p=n[g],n.hasOwnProperty(g)&&null!=p&&!r.hasOwnProperty(g)&&Xu(e,t,g,null,r,p);for(u in r)if(p=r[u],h=n[u],r.hasOwnProperty(u)&&p!==h&&(null!=p||null!=h))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(a(137,t));break;default:Xu(e,t,u,p,r,h)}return;default:if(Ct(t)){for(var b in n)p=n[b],n.hasOwnProperty(b)&&void 0!==p&&!r.hasOwnProperty(b)&&Zu(e,t,b,void 0,r,p);for(d in r)p=r[d],h=n[d],!r.hasOwnProperty(d)||p===h||void 0===p&&void 0===h||Zu(e,t,d,p,r,h);return}}for(var y in n)p=n[y],n.hasOwnProperty(y)&&null!=p&&!r.hasOwnProperty(y)&&Xu(e,t,y,null,r,p);for(f in r)p=r[f],h=n[f],!r.hasOwnProperty(f)||p===h||null==p&&null==h||Xu(e,t,f,p,r,h)}(r,e.type,n,t),r[Ae]=t}catch(o){uu(e,e.return,o)}}function hs(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&pd(e.type)||4===e.tag}function ms(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||hs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&pd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function gs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Ju));else if(4!==r&&(27===r&&pd(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(gs(e,t,n),e=e.sibling;null!==e;)gs(e,t,n),e=e.sibling}function bs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&pd(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(bs(e,t,n),e=e.sibling;null!==e;)bs(e,t,n),e=e.sibling}function ys(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);ed(t,r,n),t[ze]=e,t[Ae]=n}catch(i){uu(e,e.return,i)}}var vs=!1,xs=!1,ws=!1,Ss="function"===typeof WeakSet?WeakSet:Set,ks=null;function js(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Ds(e,n),4&r&&as(5,n);break;case 1:if(Ds(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(a){uu(n,n.return,a)}else{var o=gl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){uu(n,n.return,l)}}64&r&&ss(n),512&r&&us(n,n.return);break;case 3:if(Ds(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{pi(e,t)}catch(a){uu(n,n.return,a)}}break;case 27:null===t&&4&r&&ys(n);case 26:case 5:Ds(e,n),null===t&&4&r&&fs(n),512&r&&us(n,n.return);break;case 12:Ds(e,n);break;case 13:Ds(e,n),4&r&&Rs(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$?"!==e.data||"complete"===n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=hu.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||vs)){t=null!==t&&null!==t.memoizedState||xs,o=vs;var i=xs;vs=r,(xs=t)&&!i?Is(e,n,0!==(8772&n.subtreeFlags)):Ds(e,n),vs=o,xs=i}break;case 30:break;default:Ds(e,n)}}function Es(e){var t=e.alternate;null!==t&&(e.alternate=null,Es(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&$e(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Cs=null,Ts=!1;function Ps(e,t,n){for(n=n.child;null!==n;)Os(e,t,n),n=n.sibling}function Os(e,t,n){if(de&&"function"===typeof de.onCommitFiberUnmount)try{de.onCommitFiberUnmount(ue,n)}catch(i){}switch(n.tag){case 26:xs||ds(n,t),Ps(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:xs||ds(n,t);var r=Cs,o=Ts;pd(n.type)&&(Cs=n.stateNode,Ts=!1),Ps(e,t,n),wd(n.stateNode),Cs=r,Ts=o;break;case 5:xs||ds(n,t);case 6:if(r=Cs,o=Ts,Cs=null,Ps(e,t,n),Ts=o,null!==(Cs=r))if(Ts)try{(9===Cs.nodeType?Cs.body:"HTML"===Cs.nodeName?Cs.ownerDocument.body:Cs).removeChild(n.stateNode)}catch(a){uu(n,t,a)}else try{Cs.removeChild(n.stateNode)}catch(a){uu(n,t,a)}break;case 18:null!==Cs&&(Ts?(hd(9===(e=Cs).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Pf(e)):hd(Cs,n.stateNode));break;case 4:r=Cs,o=Ts,Cs=n.stateNode.containerInfo,Ts=!0,Ps(e,t,n),Cs=r,Ts=o;break;case 0:case 11:case 14:case 15:xs||ls(2,n,t),xs||ls(4,n,t),Ps(e,t,n);break;case 1:xs||(ds(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&cs(n,t,r)),Ps(e,t,n);break;case 21:Ps(e,t,n);break;case 22:xs=(r=xs)||null!==n.memoizedState,Ps(e,t,n),xs=r;break;default:Ps(e,t,n)}}function Rs(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Pf(e)}catch(n){uu(t,t.return,n)}}function _s(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Ss),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Ss),t;default:throw Error(a(435,e.tag))}}(e);t.forEach(function(t){var r=mu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}function zs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r],i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 27:if(pd(s.type)){Cs=s.stateNode,Ts=!1;break e}break;case 5:Cs=s.stateNode,Ts=!1;break e;case 3:case 4:Cs=s.stateNode.containerInfo,Ts=!0;break e}s=s.return}if(null===Cs)throw Error(a(160));Os(i,l,o),Cs=null,Ts=!1,null!==(i=o.alternate)&&(i.return=null),o.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)Ns(t,e),t=t.sibling}var As=null;function Ns(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:zs(t,e),Ls(e),4&r&&(ls(3,e,e.return),as(3,e),ls(5,e,e.return));break;case 1:zs(t,e),Ls(e),512&r&&(xs||null===n||ds(n,n.return)),64&r&&vs&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var o=As;if(zs(t,e),Ls(e),512&r&&(xs||null===n||ds(n,n.return)),4&r){var i=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(r){case"title":(!(i=o.getElementsByTagName("title")[0])||i[Ie]||i[ze]||"http://www.w3.org/2000/svg"===i.namespaceURI||i.hasAttribute("itemprop"))&&(i=o.createElement(r),o.head.insertBefore(i,o.querySelector("head > title"))),ed(i,r,n),i[ze]=e,qe(i),r=i;break e;case"link":var l=Id("link","href",o).get(r+(n.href||""));if(l)for(var s=0;s<l.length;s++)if((i=l[s]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&i.getAttribute("rel")===(null==n.rel?null:n.rel)&&i.getAttribute("title")===(null==n.title?null:n.title)&&i.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){l.splice(s,1);break t}ed(i=o.createElement(r),r,n),o.head.appendChild(i);break;case"meta":if(l=Id("meta","content",o).get(r+(n.content||"")))for(s=0;s<l.length;s++)if((i=l[s]).getAttribute("content")===(null==n.content?null:""+n.content)&&i.getAttribute("name")===(null==n.name?null:n.name)&&i.getAttribute("property")===(null==n.property?null:n.property)&&i.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&i.getAttribute("charset")===(null==n.charSet?null:n.charSet)){l.splice(s,1);break t}ed(i=o.createElement(r),r,n),o.head.appendChild(i);break;default:throw Error(a(468,r))}i[ze]=e,qe(i),r=i}e.stateNode=r}else $d(o,e.type,e.stateNode);else e.stateNode=Nd(o,r,e.memoizedProps);else i!==r?(null===i?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):i.count--,null===r?$d(o,e.type,e.stateNode):Nd(o,r,e.memoizedProps)):null===r&&null!==e.stateNode&&ps(e,e.memoizedProps,n.memoizedProps)}break;case 27:zs(t,e),Ls(e),512&r&&(xs||null===n||ds(n,n.return)),null!==n&&4&r&&ps(e,e.memoizedProps,n.memoizedProps);break;case 5:if(zs(t,e),Ls(e),512&r&&(xs||null===n||ds(n,n.return)),32&e.flags){o=e.stateNode;try{St(o,"")}catch(h){uu(e,e.return,h)}}4&r&&null!=e.stateNode&&ps(e,o=e.memoizedProps,null!==n?n.memoizedProps:o),1024&r&&(ws=!0);break;case 6:if(zs(t,e),Ls(e),4&r){if(null===e.stateNode)throw Error(a(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(h){uu(e,e.return,h)}}break;case 3:if(Md=null,o=As,As=jd(t.containerInfo),zs(t,e),As=o,Ls(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Pf(t.containerInfo)}catch(h){uu(e,e.return,h)}ws&&(ws=!1,Fs(e));break;case 4:r=As,As=jd(e.stateNode.containerInfo),zs(t,e),Ls(e),As=r;break;case 12:default:zs(t,e),Ls(e);break;case 13:zs(t,e),Ls(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(wc=te()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,_s(e,r)));break;case 22:o=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,u=vs,d=xs;if(vs=u||o,xs=d||c,zs(t,e),xs=d,vs=u,Ls(e),8192&r)e:for(t=e.stateNode,t._visibility=o?-2&t._visibility:1|t._visibility,o&&(null===n||c||vs||xs||Ms(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(i=c.stateNode,o)"function"===typeof(l=i.style).setProperty?l.setProperty("display","none","important"):l.display="none";else{s=c.stateNode;var f=c.memoizedProps.style,p=void 0!==f&&null!==f&&f.hasOwnProperty("display")?f.display:null;s.style.display=null==p||"boolean"===typeof p?"":(""+p).trim()}}catch(h){uu(c,c.return,h)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=o?"":c.memoizedProps}catch(h){uu(c,c.return,h)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,_s(e,n))));break;case 19:zs(t,e),Ls(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,_s(e,r)));case 30:case 21:}}function Ls(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(hs(r)){n=r;break}r=r.return}if(null==n)throw Error(a(160));switch(n.tag){case 27:var o=n.stateNode;bs(e,ms(e),o);break;case 5:var i=n.stateNode;32&n.flags&&(St(i,""),n.flags&=-33),bs(e,ms(e),i);break;case 3:case 4:var l=n.stateNode.containerInfo;gs(e,ms(e),l);break;default:throw Error(a(161))}}catch(s){uu(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Fs(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Fs(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Ds(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)js(e,t.alternate,t),t=t.sibling}function Ms(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ls(4,t,t.return),Ms(t);break;case 1:ds(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&cs(t,t.return,n),Ms(t);break;case 27:wd(t.stateNode);case 26:case 5:ds(t,t.return),Ms(t);break;case 22:null===t.memoizedState&&Ms(t);break;default:Ms(t)}e=e.sibling}}function Is(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,o=e,i=t,a=i.flags;switch(i.tag){case 0:case 11:case 15:Is(o,i,n),as(4,i);break;case 1:if(Is(o,i,n),"function"===typeof(o=(r=i).stateNode).componentDidMount)try{o.componentDidMount()}catch(c){uu(r,r.return,c)}if(null!==(o=(r=i).updateQueue)){var l=r.stateNode;try{var s=o.shared.hiddenCallbacks;if(null!==s)for(o.shared.hiddenCallbacks=null,o=0;o<s.length;o++)fi(s[o],l)}catch(c){uu(r,r.return,c)}}n&&64&a&&ss(i),us(i,i.return);break;case 27:ys(i);case 26:case 5:Is(o,i,n),n&&null===r&&4&a&&fs(i),us(i,i.return);break;case 12:Is(o,i,n);break;case 13:Is(o,i,n),n&&4&a&&Rs(o,i);break;case 22:null===i.memoizedState&&Is(o,i,n),us(i,i.return);break;case 30:break;default:Is(o,i,n)}t=t.sibling}}function $s(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&Lo(n))}function Us(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Lo(e))}function Bs(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Hs(e,t,n,r),t=t.sibling}function Hs(e,t,n,r){var o=t.flags;switch(t.tag){case 0:case 11:case 15:Bs(e,t,n,r),2048&o&&as(9,t);break;case 1:case 13:default:Bs(e,t,n,r);break;case 3:Bs(e,t,n,r),2048&o&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&Lo(e)));break;case 12:if(2048&o){Bs(e,t,n,r),e=t.stateNode;try{var i=t.memoizedProps,a=i.id,l=i.onPostCommit;"function"===typeof l&&l(a,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){uu(t,t.return,s)}}else Bs(e,t,n,r);break;case 23:break;case 22:i=t.stateNode,a=t.alternate,null!==t.memoizedState?2&i._visibility?Bs(e,t,n,r):qs(e,t):2&i._visibility?Bs(e,t,n,r):(i._visibility|=2,Ws(e,t,n,r,0!==(10256&t.subtreeFlags))),2048&o&&$s(a,t);break;case 24:Bs(e,t,n,r),2048&o&&Us(t.alternate,t)}}function Ws(e,t,n,r,o){for(o=o&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var i=e,a=t,l=n,s=r,c=a.flags;switch(a.tag){case 0:case 11:case 15:Ws(i,a,l,s,o),as(8,a);break;case 23:break;case 22:var u=a.stateNode;null!==a.memoizedState?2&u._visibility?Ws(i,a,l,s,o):qs(i,a):(u._visibility|=2,Ws(i,a,l,s,o)),o&&2048&c&&$s(a.alternate,a);break;case 24:Ws(i,a,l,s,o),o&&2048&c&&Us(a.alternate,a);break;default:Ws(i,a,l,s,o)}t=t.sibling}}function qs(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,o=r.flags;switch(r.tag){case 22:qs(n,r),2048&o&&$s(r.alternate,r);break;case 24:qs(n,r),2048&o&&Us(r.alternate,r);break;default:qs(n,r)}t=t.sibling}}var Vs=8192;function Ys(e){if(e.subtreeFlags&Vs)for(e=e.child;null!==e;)Ks(e),e=e.sibling}function Ks(e){switch(e.tag){case 26:Ys(e),e.flags&Vs&&null!==e.memoizedState&&function(e,t,n){if(null===Bd)throw Error(a(475));var r=Bd;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var o=Od(n.href),i=e.querySelector(Rd(o));if(i)return null!==(e=i._p)&&"object"===typeof e&&"function"===typeof e.then&&(r.count++,r=Wd.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=i,void qe(i);i=e.ownerDocument||e,n=_d(n),(o=Sd.get(o))&&Fd(n,o),qe(i=i.createElement("link"));var l=i;l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),ed(i,"link",n),t.instance=i}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(r.count++,t=Wd.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(As,e.memoizedState,e.memoizedProps);break;case 5:default:Ys(e);break;case 3:case 4:var t=As;As=jd(e.stateNode.containerInfo),Ys(e),As=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=Vs,Vs=16777216,Ys(e),Vs=t):Ys(e))}}function Qs(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Gs(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];ks=r,Zs(r,e)}Qs(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Js(e),e=e.sibling}function Js(e){switch(e.tag){case 0:case 11:case 15:Gs(e),2048&e.flags&&ls(9,e,e.return);break;case 3:case 12:default:Gs(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,Xs(e)):Gs(e)}}function Xs(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];ks=r,Zs(r,e)}Qs(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:ls(8,t,t.return),Xs(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,Xs(t));break;default:Xs(t)}e=e.sibling}}function Zs(e,t){for(;null!==ks;){var n=ks;switch(n.tag){case 0:case 11:case 15:ls(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:Lo(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,ks=r;else e:for(n=e;null!==ks;){var o=(r=ks).sibling,i=r.return;if(Es(r),r===n){ks=null;break e}if(null!==o){o.return=i,ks=o;break e}ks=i}}}var ec={getCacheForType:function(e){var t=To(Ao),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},tc="function"===typeof WeakMap?WeakMap:Map,nc=0,rc=null,oc=null,ic=0,ac=0,lc=null,sc=!1,cc=!1,uc=!1,dc=0,fc=0,pc=0,hc=0,mc=0,gc=0,bc=0,yc=null,vc=null,xc=!1,wc=0,Sc=1/0,kc=null,jc=null,Ec=0,Cc=null,Tc=null,Pc=0,Oc=0,Rc=null,_c=null,zc=0,Ac=null;function Nc(){if(0!==(2&nc)&&0!==ic)return ic&-ic;if(null!==N.T){return 0!==Mo?Mo:Ou()}return Re()}function Lc(){0===gc&&(gc=0===(536870912&ic)||io?Se():536870912);var e=ol.current;return null!==e&&(e.flags|=32),gc}function Fc(e,t,n){(e!==rc||2!==ac&&9!==ac)&&null===e.cancelPendingCommit||(Hc(e,0),$c(e,ic,gc,!1)),Ee(e,n),0!==(2&nc)&&e===rc||(e===rc&&(0===(2&nc)&&(hc|=n),4===fc&&$c(e,ic,gc,!1)),Su(e))}function Dc(e,t,n){if(0!==(6&nc))throw Error(a(327));for(var r=!n&&0===(124&t)&&0===(t&e.expiredLanes)||xe(e,t),o=r?function(e,t){var n=nc;nc|=2;var r=qc(),o=Vc();rc!==e||ic!==t?(kc=null,Sc=te()+500,Hc(e,t)):cc=xe(e,t);e:for(;;)try{if(0!==ac&&null!==oc){t=oc;var i=lc;t:switch(ac){case 1:ac=0,lc=null,Zc(e,t,i,1);break;case 2:case 9:if(Go(i)){ac=0,lc=null,Xc(t);break}t=function(){2!==ac&&9!==ac||rc!==e||(ac=7),Su(e)},i.then(t,t);break e;case 3:ac=7;break e;case 4:ac=5;break e;case 7:Go(i)?(ac=0,lc=null,Xc(t)):(ac=0,lc=null,Zc(e,t,i,7));break;case 5:var l=null;switch(oc.tag){case 26:l=oc.memoizedState;case 5:case 27:var s=oc;if(!l||Ud(l)){ac=0,lc=null;var c=s.sibling;if(null!==c)oc=c;else{var u=s.return;null!==u?(oc=u,eu(u)):oc=null}break t}}ac=0,lc=null,Zc(e,t,i,5);break;case 6:ac=0,lc=null,Zc(e,t,i,6);break;case 8:Bc(),fc=6;break e;default:throw Error(a(462))}}Gc();break}catch(d){Wc(e,d)}return vo=yo=null,N.H=r,N.A=o,nc=n,null!==oc?0:(rc=null,ic=0,Pr(),fc)}(e,t):Kc(e,t,!0),i=r;;){if(0===o){cc&&!r&&$c(e,t,0,!1);break}if(n=e.current.alternate,!i||Ic(n)){if(2===o){if(i=t,e.errorRecoveryDisabledLanes&i)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;o=yc;var c=s.current.memoizedState.isDehydrated;if(c&&(Hc(s,l).flags|=256),2!==(l=Kc(s,l,!1))){if(uc&&!c){s.errorRecoveryDisabledLanes|=i,hc|=i,o=4;break e}i=vc,vc=o,null!==i&&(null===vc?vc=i:vc.push.apply(vc,i))}o=l}if(i=!1,2!==o)continue}}if(1===o){Hc(e,0),$c(e,t,0,!0);break}e:{switch(r=e,i=o){case 0:case 1:throw Error(a(345));case 4:if((4194048&t)!==t)break;case 6:$c(r,t,gc,!sc);break e;case 2:vc=null;break;case 3:case 5:break;default:throw Error(a(329))}if((62914560&t)===t&&10<(o=wc+300-te())){if($c(r,t,gc,!sc),0!==ve(r,0,!0))break e;r.timeoutHandle=sd(Mc.bind(null,r,n,vc,kc,xc,t,gc,hc,bc,sc,i,2,-0,0),o)}else Mc(r,n,vc,kc,xc,t,gc,hc,bc,sc,i,0,-0,0)}break}o=Kc(e,t,!1),i=!1}Su(e)}function Mc(e,t,n,r,o,i,l,s,c,u,d,f,p,h){if(e.timeoutHandle=-1,(8192&(f=t.subtreeFlags)||16785408===(16785408&f))&&(Bd={stylesheets:null,count:0,unsuspend:Hd},Ks(t),null!==(f=function(){if(null===Bd)throw Error(a(475));var e=Bd;return e.stylesheets&&0===e.count&&Vd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Vd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=f(nu.bind(null,e,t,i,n,r,o,l,s,c,d,1,p,h)),void $c(e,i,l,!u);nu(e,t,i,n,r,o,l,s,c)}function Ic(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Qn(i(),o))return!1}catch(a){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $c(e,t,n,r){t&=~mc,t&=~hc,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var o=t;0<o;){var i=31-pe(o),a=1<<i;r[i]=-1,o&=~a}0!==n&&Ce(e,n,t)}function Uc(){return 0!==(6&nc)||(ku(0,!1),!1)}function Bc(){if(null!==oc){if(0===ac)var e=oc.return;else vo=yo=null,Mi(e=oc),Qa=null,Ga=0,e=oc;for(;null!==e;)is(e.alternate,e),e=e.return;oc=null}}function Hc(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,cd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Bc(),rc=e,oc=n=Mr(e.current,null),ic=t,ac=0,lc=null,sc=!1,cc=xe(e,t),uc=!1,bc=gc=mc=hc=pc=fc=0,vc=yc=null,xc=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var o=31-pe(r),i=1<<o;t|=e[o],r&=~i}return dc=t,Pr(),n}function Wc(e,t){xi=null,N.H=qa,t===Vo||t===Ko?(t=ei(),ac=3):t===Yo?(t=ei(),ac=4):ac=t===Cl?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,lc=t,null===oc&&(fc=1,wl(e,jr(t,e.current)))}function qc(){var e=N.H;return N.H=qa,null===e?qa:e}function Vc(){var e=N.A;return N.A=ec,e}function Yc(){fc=4,sc||(4194048&ic)!==ic&&null!==ol.current||(cc=!0),0===(134217727&pc)&&0===(134217727&hc)||null===rc||$c(rc,ic,gc,!1)}function Kc(e,t,n){var r=nc;nc|=2;var o=qc(),i=Vc();rc===e&&ic===t||(kc=null,Hc(e,t)),t=!1;var a=fc;e:for(;;)try{if(0!==ac&&null!==oc){var l=oc,s=lc;switch(ac){case 8:Bc(),a=6;break e;case 3:case 2:case 9:case 6:null===ol.current&&(t=!0);var c=ac;if(ac=0,lc=null,Zc(e,l,s,c),n&&cc){a=0;break e}break;default:c=ac,ac=0,lc=null,Zc(e,l,s,c)}}Qc(),a=fc;break}catch(u){Wc(e,u)}return t&&e.shellSuspendCounter++,vo=yo=null,nc=r,N.H=o,N.A=i,null===oc&&(rc=null,ic=0,Pr()),a}function Qc(){for(;null!==oc;)Jc(oc)}function Gc(){for(;null!==oc&&!Z();)Jc(oc)}function Jc(e){var t=Jl(e.alternate,e,dc);e.memoizedProps=e.pendingProps,null===t?eu(e):oc=t}function Xc(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Fl(n,t,t.pendingProps,t.type,void 0,ic);break;case 11:t=Fl(n,t,t.pendingProps,t.type.render,t.ref,ic);break;case 5:Mi(t);default:is(n,t),t=Jl(n,t=oc=Ir(t,dc),dc)}e.memoizedProps=e.pendingProps,null===t?eu(e):oc=t}function Zc(e,t,n,r){vo=yo=null,Mi(t),Qa=null,Ga=0;var o=t.return;try{if(function(e,t,n,r,o){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&jo(t,n,o,!0),null!==(n=ol.current)){switch(n.tag){case 13:return null===il?Yc():null===n.alternate&&0===fc&&(fc=3),n.flags&=-257,n.flags|=65536,n.lanes=o,r===Qo?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),du(e,r,o)),!1;case 22:return n.flags|=65536,r===Qo?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),du(e,r,o)),!1}throw Error(a(435,n.tag))}return du(e,r,o),Yc(),!1}if(io)return null!==(t=ol.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=o,r!==so&&go(jr(e=Error(a(422),{cause:r}),n))):(r!==so&&go(jr(t=Error(a(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,o&=-o,e.lanes|=o,r=jr(r,n),si(e,o=kl(e.stateNode,r,o)),4!==fc&&(fc=2)),!1;var i=Error(a(520),{cause:r});if(i=jr(i,n),null===yc?yc=[i]:yc.push(i),4!==fc&&(fc=2),null===t)return!0;r=jr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,si(n,e=kl(n.stateNode,r,e)),!1;case 1:if(t=n.type,i=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==i&&"function"===typeof i.componentDidCatch&&(null===jc||!jc.has(i))))return n.flags|=65536,o&=-o,n.lanes|=o,El(o=jl(o),e,n,r),si(n,o),!1}n=n.return}while(null!==n);return!1}(e,o,t,n,ic))return fc=1,wl(e,jr(n,e.current)),void(oc=null)}catch(i){if(null!==o)throw oc=o,i;return fc=1,wl(e,jr(n,e.current)),void(oc=null)}32768&t.flags?(io||1===r?e=!0:cc||0!==(536870912&ic)?e=!1:(sc=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=ol.current)&&13===r.tag&&(r.flags|=16384))),tu(t,e)):eu(t)}function eu(e){var t=e;do{if(0!==(32768&t.flags))return void tu(t,sc);e=t.return;var n=rs(t.alternate,t,dc);if(null!==n)return void(oc=n);if(null!==(t=t.sibling))return void(oc=t);oc=t=e}while(null!==t);0===fc&&(fc=5)}function tu(e,t){do{var n=os(e.alternate,e);if(null!==n)return n.flags&=32767,void(oc=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(oc=e);oc=e=n}while(null!==e);fc=6,oc=null}function nu(e,t,n,r,o,i,l,s,c){e.cancelPendingCommit=null;do{lu()}while(0!==Ec);if(0!==(6&nc))throw Error(a(327));if(null!==t){if(t===e.current)throw Error(a(177));if(i=t.lanes|t.childLanes,function(e,t,n,r,o,i){var a=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,c=e.hiddenUpdates;for(n=a&~n;0<n;){var u=31-pe(n),d=1<<u;l[u]=0,s[u]=-1;var f=c[u];if(null!==f)for(c[u]=null,u=0;u<f.length;u++){var p=f[u];null!==p&&(p.lane&=-536870913)}n&=~d}0!==r&&Ce(e,r,0),0!==i&&0===o&&0!==e.tag&&(e.suspendedLanes|=i&~(a&~t))}(e,n,i|=Tr,l,s,c),e===rc&&(oc=rc=null,ic=0),Tc=t,Cc=e,Pc=n,Oc=i,Rc=o,_c=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,J(ie,function(){return su(),null})):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=N.T,N.T=null,o=L.p,L.p=2,l=nc,nc|=4;try{!function(e,t){if(e=e.containerInfo,td=nf,tr(e=er(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(g){n=null;break e}var l=0,s=-1,c=-1,u=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==o&&3!==f.nodeType||(s=l+o),f!==i||0!==r&&3!==f.nodeType||(c=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++u===o&&(s=l),p===i&&++d===r&&(c=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:e,selectionRange:n},nf=!1,ks=t;null!==ks;)if(e=(t=ks).child,0!==(1024&t.subtreeFlags)&&null!==e)e.return=t,ks=e;else for(;null!==ks;){switch(i=(t=ks).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==i){e=void 0,n=t,o=i.memoizedProps,i=i.memoizedState,r=n.stateNode;try{var m=gl(n.type,o,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(m,i),r.__reactInternalSnapshotBeforeUpdate=e}catch(b){uu(n,n.return,b)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))md(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":md(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(a(163))}if(null!==(e=t.sibling)){e.return=t.return,ks=e;break}ks=t.return}}(e,t)}finally{nc=l,L.p=o,N.T=r}}Ec=1,ru(),ou(),iu()}}function ru(){if(1===Ec){Ec=0;var e=Cc,t=Tc,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=N.T,N.T=null;var r=L.p;L.p=2;var o=nc;nc|=4;try{Ns(t,e);var i=nd,a=er(e.containerInfo),l=i.focusedElem,s=i.selectionRange;if(a!==l&&l&&l.ownerDocument&&Zn(l.ownerDocument.documentElement,l)){if(null!==s&&tr(l)){var c=s.start,u=s.end;if(void 0===u&&(u=c),"selectionStart"in l)l.selectionStart=c,l.selectionEnd=Math.min(u,l.value.length);else{var d=l.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),h=l.textContent.length,m=Math.min(s.start,h),g=void 0===s.end?m:Math.min(s.end,h);!p.extend&&m>g&&(a=g,g=m,m=a);var b=Xn(l,m),y=Xn(l,g);if(b&&y&&(1!==p.rangeCount||p.anchorNode!==b.node||p.anchorOffset!==b.offset||p.focusNode!==y.node||p.focusOffset!==y.offset)){var v=d.createRange();v.setStart(b.node,b.offset),p.removeAllRanges(),m>g?(p.addRange(v),p.extend(y.node,y.offset)):(v.setEnd(y.node,y.offset),p.addRange(v))}}}}for(d=[],p=l;p=p.parentNode;)1===p.nodeType&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for("function"===typeof l.focus&&l.focus(),l=0;l<d.length;l++){var x=d[l];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}nf=!!td,nd=td=null}finally{nc=o,L.p=r,N.T=n}}e.current=t,Ec=2}}function ou(){if(2===Ec){Ec=0;var e=Cc,t=Tc,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=N.T,N.T=null;var r=L.p;L.p=2;var o=nc;nc|=4;try{js(e,t.alternate,t)}finally{nc=o,L.p=r,N.T=n}}Ec=3}}function iu(){if(4===Ec||3===Ec){Ec=0,ee();var e=Cc,t=Tc,n=Pc,r=_c;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Ec=5:(Ec=0,Tc=Cc=null,au(e,e.pendingLanes));var o=e.pendingLanes;if(0===o&&(jc=null),Oe(n),t=t.stateNode,de&&"function"===typeof de.onCommitFiberRoot)try{de.onCommitFiberRoot(ue,t,void 0,128===(128&t.current.flags))}catch(s){}if(null!==r){t=N.T,o=L.p,L.p=2,N.T=null;try{for(var i=e.onRecoverableError,a=0;a<r.length;a++){var l=r[a];i(l.value,{componentStack:l.stack})}}finally{N.T=t,L.p=o}}0!==(3&Pc)&&lu(),Su(e),o=e.pendingLanes,0!==(4194090&n)&&0!==(42&o)?e===Ac?zc++:(zc=0,Ac=e):zc=0,ku(0,!1)}}function au(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,Lo(t)))}function lu(e){return ru(),ou(),iu(),su()}function su(){if(5!==Ec)return!1;var e=Cc,t=Oc;Oc=0;var n=Oe(Pc),r=N.T,o=L.p;try{L.p=32>n?32:n,N.T=null,n=Rc,Rc=null;var i=Cc,l=Pc;if(Ec=0,Tc=Cc=null,Pc=0,0!==(6&nc))throw Error(a(331));var s=nc;if(nc|=4,Js(i.current),Hs(i,i.current,l,n),nc=s,ku(0,!1),de&&"function"===typeof de.onPostCommitFiberRoot)try{de.onPostCommitFiberRoot(ue,i)}catch(c){}return!0}finally{L.p=o,N.T=r,au(e,t)}}function cu(e,t,n){t=jr(n,t),null!==(e=ai(e,t=kl(e.stateNode,t,2),2))&&(Ee(e,2),Su(e))}function uu(e,t,n){if(3===e.tag)cu(e,e,n);else for(;null!==t;){if(3===t.tag){cu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===jc||!jc.has(r))){e=jr(n,e),null!==(r=ai(t,n=jl(2),2))&&(El(n,r,t,e),Ee(r,2),Su(r));break}}t=t.return}}function du(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new tc;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(uc=!0,o.add(n),e=fu.bind(null,e,t,n),t.then(e,e))}function fu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,rc===e&&(ic&n)===n&&(4===fc||3===fc&&(62914560&ic)===ic&&300>te()-wc?0===(2&nc)&&Hc(e,0):mc|=n,bc===ic&&(bc=0)),Su(e)}function pu(e,t){0===t&&(t=ke()),null!==(e=_r(e,t))&&(Ee(e,t),Su(e))}function hu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),pu(e,n)}function mu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}null!==r&&r.delete(t),pu(e,n)}var gu=null,bu=null,yu=!1,vu=!1,xu=!1,wu=0;function Su(e){e!==bu&&null===e.next&&(null===bu?gu=bu=e:bu=bu.next=e),vu=!0,yu||(yu=!0,dd(function(){0!==(6&nc)?J(re,ju):Eu()}))}function ku(e,t){if(!xu&&vu){xu=!0;do{for(var n=!1,r=gu;null!==r;){if(!t)if(0!==e){var o=r.pendingLanes;if(0===o)var i=0;else{var a=r.suspendedLanes,l=r.pingedLanes;i=(1<<31-pe(42|e)+1)-1,i=201326741&(i&=o&~(a&~l))?201326741&i|1:i?2|i:0}0!==i&&(n=!0,Pu(r,i))}else i=ic,0===(3&(i=ve(r,r===rc?i:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||xe(r,i)||(n=!0,Pu(r,i));r=r.next}}while(n);xu=!1}}function ju(){Eu()}function Eu(){vu=yu=!1;var e=0;0!==wu&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==ld&&(ld=e,!0);return ld=null,!1}()&&(e=wu),wu=0);for(var t=te(),n=null,r=gu;null!==r;){var o=r.next,i=Cu(r,t);0===i?(r.next=null,null===n?gu=o:n.next=o,null===o&&(bu=n)):(n=r,(0!==e||0!==(3&i))&&(vu=!0)),r=o}ku(e,!1)}function Cu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=-62914561&e.pendingLanes;0<i;){var a=31-pe(i),l=1<<a,s=o[a];-1===s?0!==(l&n)&&0===(l&r)||(o[a]=we(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}if(n=ic,n=ve(e,e===(t=rc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===ac||9===ac)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&X(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||xe(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&X(r),Oe(n)){case 2:case 8:n=oe;break;case 32:default:n=ie;break;case 268435456:n=le}return r=Tu.bind(null,e),n=J(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&X(r),e.callbackPriority=2,e.callbackNode=null,2}function Tu(e,t){if(0!==Ec&&5!==Ec)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(lu()&&e.callbackNode!==n)return null;var r=ic;return 0===(r=ve(e,e===rc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Dc(e,r,t),Cu(e,te()),null!=e.callbackNode&&e.callbackNode===n?Tu.bind(null,e):null)}function Pu(e,t){if(lu())return null;Dc(e,t,!0)}function Ou(){return 0===wu&&(wu=Se()),wu}function Ru(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:Ot(""+e)}function _u(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var zu=0;zu<wr.length;zu++){var Au=wr[zu];Sr(Au.toLowerCase(),"on"+(Au[0].toUpperCase()+Au.slice(1)))}Sr(pr,"onAnimationEnd"),Sr(hr,"onAnimationIteration"),Sr(mr,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(gr,"onTransitionRun"),Sr(br,"onTransitionStart"),Sr(yr,"onTransitionCancel"),Sr(vr,"onTransitionEnd"),Qe("onMouseEnter",["mouseout","mouseover"]),Qe("onMouseLeave",["mouseout","mouseover"]),Qe("onPointerEnter",["pointerout","pointerover"]),Qe("onPointerLeave",["pointerout","pointerover"]),Ke("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ke("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ke("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ke("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lu=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nu));function Fu(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&o.isPropagationStopped())break e;i=l,o.currentTarget=c;try{i(o)}catch(u){bl(u)}o.currentTarget=null,i=s}else for(a=0;a<r.length;a++){if(s=(l=r[a]).instance,c=l.currentTarget,l=l.listener,s!==i&&o.isPropagationStopped())break e;i=l,o.currentTarget=c;try{i(o)}catch(u){bl(u)}o.currentTarget=null,i=s}}}}function Du(e,t){var n=t[Le];void 0===n&&(n=t[Le]=new Set);var r=e+"__bubble";n.has(r)||(Uu(t,e,2,!1),n.add(r))}function Mu(e,t,n){var r=0;t&&(r|=4),Uu(n,e,r,t)}var Iu="_reactListening"+Math.random().toString(36).slice(2);function $u(e){if(!e[Iu]){e[Iu]=!0,Ve.forEach(function(t){"selectionchange"!==t&&(Lu.has(t)||Mu(t,!1,e),Mu(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Iu]||(t[Iu]=!0,Mu("selectionchange",!1,t))}}function Uu(e,t,n,r){switch(uf(t)){case 2:var o=rf;break;case 8:o=of;break;default:o=af}n=o.bind(null,t,n,e),o=void 0,!It||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Bu(e,t,n,r,o){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var l=r.stateNode.containerInfo;if(l===o)break;if(4===a)for(a=r.return;null!==a;){var c=a.tag;if((3===c||4===c)&&a.stateNode.containerInfo===o)return;a=a.return}for(;null!==l;){if(null===(a=Ue(l)))return;if(5===(c=a.tag)||6===c||26===c||27===c){r=i=a;continue e}l=l.parentNode}}r=r.return}Ft(function(){var r=i,o=_t(n),a=[];e:{var l=xr.get(e);if(void 0!==l){var c=Zt,u=e;switch(e){case"keypress":if(0===qt(n))break e;case"keydown":case"keyup":c=mn;break;case"focusin":u="focus",c=an;break;case"focusout":u="blur",c=an;break;case"beforeblur":case"afterblur":c=an;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=on;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=bn;break;case pr:case hr:case mr:c=ln;break;case vr:c=yn;break;case"scroll":case"scrollend":c=tn;break;case"wheel":c=vn;break;case"copy":case"cut":case"paste":c=sn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=gn;break;case"toggle":case"beforetoggle":c=xn}var d=0!==(4&t),f=!d&&("scroll"===e||"scrollend"===e),p=d?null!==l?l+"Capture":null:l;d=[];for(var h,m=r;null!==m;){var g=m;if(h=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===h||null===p||null!=(g=Dt(m,p))&&d.push(Hu(m,g,h)),f)break;m=m.return}0<d.length&&(l=new c(l,u,null,n,o),a.push({event:l,listeners:d}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===Rt||!(u=n.relatedTarget||n.fromElement)||!Ue(u)&&!u[Ne])&&(c||l)&&(l=o.window===o?o:(l=o.ownerDocument)?l.defaultView||l.parentWindow:window,c?(c=r,null!==(u=(u=n.relatedTarget||n.toElement)?Ue(u):null)&&(f=s(u),d=u.tag,u!==f||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=r),c!==u)){if(d=rn,g="onMouseLeave",p="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=gn,g="onPointerLeave",p="onPointerEnter",m="pointer"),f=null==c?l:He(c),h=null==u?l:He(u),(l=new d(g,m+"leave",c,n,o)).target=f,l.relatedTarget=h,g=null,Ue(o)===r&&((d=new d(p,m+"enter",u,n,o)).target=h,d.relatedTarget=f,g=d),f=g,c&&u)e:{for(p=u,m=0,h=d=c;h;h=qu(h))m++;for(h=0,g=p;g;g=qu(g))h++;for(;0<m-h;)d=qu(d),m--;for(;0<h-m;)p=qu(p),h--;for(;m--;){if(d===p||null!==p&&d===p.alternate)break e;d=qu(d),p=qu(p)}d=null}else d=null;null!==c&&Vu(a,l,c,d,!1),null!==u&&null!==f&&Vu(a,f,u,d,!0)}if("select"===(c=(l=r?He(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===c&&"file"===l.type)var b=Mn;else if(zn(l))if(In)b=Kn;else{b=Vn;var y=qn}else!(c=l.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?r&&Ct(r.elementType)&&(b=Mn):b=Yn;switch(b&&(b=b(e,r))?An(a,b,n,o):(y&&y(e,l,r),"focusout"===e&&r&&"number"===l.type&&null!=r.memoizedProps.value&&yt(l,"number",l.value)),y=r?He(r):window,e){case"focusin":(zn(y)||"true"===y.contentEditable)&&(rr=y,or=r,ir=null);break;case"focusout":ir=or=rr=null;break;case"mousedown":ar=!0;break;case"contextmenu":case"mouseup":case"dragend":ar=!1,lr(a,n,o);break;case"selectionchange":if(nr)break;case"keydown":case"keyup":lr(a,n,o)}var v;if(Sn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Rn?Pn(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(En&&"ko"!==n.locale&&(Rn||"onCompositionStart"!==x?"onCompositionEnd"===x&&Rn&&(v=Wt()):(Bt="value"in(Ut=o)?Ut.value:Ut.textContent,Rn=!0)),0<(y=Wu(r,x)).length&&(x=new cn(x,e,null,n,o),a.push({event:x,listeners:y}),v?x.data=v:null!==(v=On(n))&&(x.data=v))),(v=jn?function(e,t){switch(e){case"compositionend":return On(t);case"keypress":return 32!==t.which?null:(Tn=!0,Cn);case"textInput":return(e=t.data)===Cn&&Tn?null:e;default:return null}}(e,n):function(e,t){if(Rn)return"compositionend"===e||!Sn&&Pn(e,t)?(e=Wt(),Ht=Bt=Ut=null,Rn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return En&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(x=Wu(r,"onBeforeInput")).length&&(y=new cn("onBeforeInput","beforeinput",null,n,o),a.push({event:y,listeners:x}),y.data=v)),function(e,t,n,r,o){if("submit"===t&&n&&n.stateNode===o){var i=Ru((o[Ae]||null).action),a=r.submitter;a&&null!==(t=(t=a[Ae]||null)?Ru(t.formAction):a.getAttribute("formAction"))&&(i=t,a=null);var l=new Zt("action","action",null,r,o);e.push({event:l,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==wu){var e=a?_u(o,a):new FormData(o);_a(n,{pending:!0,data:e,method:o.method,action:i},null,e)}}else"function"===typeof i&&(l.preventDefault(),e=a?_u(o,a):new FormData(o),_a(n,{pending:!0,data:e,method:o.method,action:i},i,e))},currentTarget:o}]})}}(a,e,r,n,o)}Fu(a,t)})}function Hu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wu(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,i=o.stateNode;if(5!==(o=o.tag)&&26!==o&&27!==o||null===i||(null!=(o=Dt(e,n))&&r.unshift(Hu(e,o,i)),null!=(o=Dt(e,t))&&r.push(Hu(e,o,i))),3===e.tag)return r;e=e.return}return[]}function qu(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Vu(e,t,n,r,o){for(var i=t._reactName,a=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(l=l.tag,null!==s&&s===r)break;5!==l&&26!==l&&27!==l||null===c||(s=c,o?null!=(c=Dt(n,i))&&a.unshift(Hu(n,c,s)):o||null!=(c=Dt(n,i))&&a.push(Hu(n,c,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Yu=/\r\n?/g,Ku=/\u0000|\uFFFD/g;function Qu(e){return("string"===typeof e?e:""+e).replace(Yu,"\n").replace(Ku,"")}function Gu(e,t){return t=Qu(t),Qu(e)===t}function Ju(){}function Xu(e,t,n,r,o,i){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||St(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&St(e,""+r);break;case"className":nt(e,"class",r);break;case"tabIndex":nt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(e,n,r);break;case"style":Et(e,r,i);break;case"data":if("object"!==t){nt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Ot(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof i&&("formAction"===n?("input"!==t&&Xu(e,t,"name",o.name,o,null),Xu(e,t,"formEncType",o.formEncType,o,null),Xu(e,t,"formMethod",o.formMethod,o,null),Xu(e,t,"formTarget",o.formTarget,o,null)):(Xu(e,t,"encType",o.encType,o,null),Xu(e,t,"method",o.method,o,null),Xu(e,t,"target",o.target,o,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Ot(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Ju);break;case"onScroll":null!=r&&Du("scroll",e);break;case"onScrollEnd":null!=r&&Du("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=o.children)throw Error(a(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=Ot(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Du("beforetoggle",e),Du("toggle",e),tt(e,"popover",r);break;case"xlinkActuate":rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":rt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":rt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":rt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":rt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":tt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&tt(e,n=Tt.get(n)||n,r)}}function Zu(e,t,n,r,o,i){switch(n){case"style":Et(e,r,i);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=o.children)throw Error(a(60));e.innerHTML=n}}break;case"children":"string"===typeof r?St(e,r):("number"===typeof r||"bigint"===typeof r)&&St(e,""+r);break;case"onScroll":null!=r&&Du("scroll",e);break;case"onScrollEnd":null!=r&&Du("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Ju);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ye.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),"function"===typeof(i=null!=(i=e[Ae]||null)?i[n]:null)&&e.removeEventListener(t,i,o),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):tt(e,n,r):("function"!==typeof i&&null!==i&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,o)))}}function ed(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Du("error",e),Du("load",e);var r,o=!1,i=!1;for(r in n)if(n.hasOwnProperty(r)){var l=n[r];if(null!=l)switch(r){case"src":o=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:Xu(e,t,r,l,n,null)}}return i&&Xu(e,t,"srcSet",n.srcSet,n,null),void(o&&Xu(e,t,"src",n.src,n,null));case"input":Du("invalid",e);var s=r=l=i=null,c=null,u=null;for(o in n)if(n.hasOwnProperty(o)){var d=n[o];if(null!=d)switch(o){case"name":i=d;break;case"type":l=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(a(137,t));break;default:Xu(e,t,o,d,n,null)}}return bt(e,r,s,c,u,l,i,!1),void dt(e);case"select":for(i in Du("invalid",e),o=l=r=null,n)if(n.hasOwnProperty(i)&&null!=(s=n[i]))switch(i){case"value":r=s;break;case"defaultValue":l=s;break;case"multiple":o=s;default:Xu(e,t,i,s,n,null)}return t=r,n=l,e.multiple=!!o,void(null!=t?vt(e,!!o,t,!1):null!=n&&vt(e,!!o,n,!0));case"textarea":for(l in Du("invalid",e),r=i=o=null,n)if(n.hasOwnProperty(l)&&null!=(s=n[l]))switch(l){case"value":o=s;break;case"defaultValue":i=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(a(91));break;default:Xu(e,t,l,s,n,null)}return wt(e,o,i,r),void dt(e);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(o=n[c]))if("selected"===c)e.selected=o&&"function"!==typeof o&&"symbol"!==typeof o;else Xu(e,t,c,o,n,null);return;case"dialog":Du("beforetoggle",e),Du("toggle",e),Du("cancel",e),Du("close",e);break;case"iframe":case"object":Du("load",e);break;case"video":case"audio":for(o=0;o<Nu.length;o++)Du(Nu[o],e);break;case"image":Du("error",e),Du("load",e);break;case"details":Du("toggle",e);break;case"embed":case"source":case"link":Du("error",e),Du("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(o=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:Xu(e,t,u,o,n,null)}return;default:if(Ct(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(o=n[d])&&Zu(e,t,d,o,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(o=n[s])&&Xu(e,t,s,o,n,null))}var td=null,nd=null;function rd(e){return 9===e.nodeType?e:e.ownerDocument}function od(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function id(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function ad(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ld=null;var sd="function"===typeof setTimeout?setTimeout:void 0,cd="function"===typeof clearTimeout?clearTimeout:void 0,ud="function"===typeof Promise?Promise:void 0,dd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ud?function(e){return ud.resolve(null).then(e).catch(fd)}:sd;function fd(e){setTimeout(function(){throw e})}function pd(e){return"head"===e}function hd(e,t){var n=t,r=0,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0<r&&8>r){n=r;var a=e.ownerDocument;if(1&n&&wd(a.documentElement),2&n&&wd(a.body),4&n)for(wd(n=a.head),a=n.firstChild;a;){var l=a.nextSibling,s=a.nodeName;a[Ie]||"SCRIPT"===s||"STYLE"===s||"LINK"===s&&"stylesheet"===a.rel.toLowerCase()||n.removeChild(a),a=l}}if(0===o)return e.removeChild(i),void Pf(t);o--}else"$"===n||"$?"===n||"$!"===n?o++:r=n.charCodeAt(0)-48;else r=0;n=i}while(n);Pf(t)}function md(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":md(n),$e(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function gd(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function bd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}var yd=null;function vd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function xd(e,t,n){switch(t=rd(n),e){case"html":if(!(e=t.documentElement))throw Error(a(452));return e;case"head":if(!(e=t.head))throw Error(a(453));return e;case"body":if(!(e=t.body))throw Error(a(454));return e;default:throw Error(a(451))}}function wd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$e(e)}var Sd=new Map,kd=new Set;function jd(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Ed=L.d;L.d={f:function(){var e=Ed.f(),t=Uc();return e||t},r:function(e){var t=Be(e);null!==t&&5===t.tag&&"form"===t.type?Aa(t):Ed.r(e)},D:function(e){Ed.D(e),Td("dns-prefetch",e,null)},C:function(e,t){Ed.C(e,t),Td("preconnect",e,t)},L:function(e,t,n){Ed.L(e,t,n);var r=Cd;if(r&&e&&t){var o='link[rel="preload"][as="'+mt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(o+='[imagesrcset="'+mt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(o+='[imagesizes="'+mt(n.imageSizes)+'"]')):o+='[href="'+mt(e)+'"]';var i=o;switch(t){case"style":i=Od(e);break;case"script":i=zd(e)}Sd.has(i)||(e=f({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Sd.set(i,e),null!==r.querySelector(o)||"style"===t&&r.querySelector(Rd(i))||"script"===t&&r.querySelector(Ad(i))||(ed(t=r.createElement("link"),"link",e),qe(t),r.head.appendChild(t)))}},m:function(e,t){Ed.m(e,t);var n=Cd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",o='link[rel="modulepreload"][as="'+mt(r)+'"][href="'+mt(e)+'"]',i=o;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=zd(e)}if(!Sd.has(i)&&(e=f({rel:"modulepreload",href:e},t),Sd.set(i,e),null===n.querySelector(o))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ad(i)))return}ed(r=n.createElement("link"),"link",e),qe(r),n.head.appendChild(r)}}},X:function(e,t){Ed.X(e,t);var n=Cd;if(n&&e){var r=We(n).hoistableScripts,o=zd(e),i=r.get(o);i||((i=n.querySelector(Ad(o)))||(e=f({src:e,async:!0},t),(t=Sd.get(o))&&Dd(e,t),qe(i=n.createElement("script")),ed(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(o,i))}},S:function(e,t,n){Ed.S(e,t,n);var r=Cd;if(r&&e){var o=We(r).hoistableStyles,i=Od(e);t=t||"default";var a=o.get(i);if(!a){var l={loading:0,preload:null};if(a=r.querySelector(Rd(i)))l.loading=5;else{e=f({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Sd.get(i))&&Fd(e,n);var s=a=r.createElement("link");qe(s),ed(s,"link",e),s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),s.addEventListener("load",function(){l.loading|=1}),s.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Ld(a,t,r)}a={type:"stylesheet",instance:a,count:1,state:l},o.set(i,a)}}},M:function(e,t){Ed.M(e,t);var n=Cd;if(n&&e){var r=We(n).hoistableScripts,o=zd(e),i=r.get(o);i||((i=n.querySelector(Ad(o)))||(e=f({src:e,async:!0,type:"module"},t),(t=Sd.get(o))&&Dd(e,t),qe(i=n.createElement("script")),ed(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(o,i))}}};var Cd="undefined"===typeof document?null:document;function Td(e,t,n){var r=Cd;if(r&&"string"===typeof t&&t){var o=mt(t);o='link[rel="'+e+'"][href="'+o+'"]',"string"===typeof n&&(o+='[crossorigin="'+n+'"]'),kd.has(o)||(kd.add(o),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(o)&&(ed(t=r.createElement("link"),"link",e),qe(t),r.head.appendChild(t)))}}function Pd(e,t,n,r){var o,i,l,s,c=(c=W.current)?jd(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=Od(n.href),(r=(n=We(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Od(n.href);var u=We(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(Rd(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Sd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Sd.set(e,n),u||(o=c,i=e,l=n,s=d.state,o.querySelector('link[rel="preload"][as="style"]['+i+"]")?s.loading=1:(i=o.createElement("link"),s.preload=i,i.addEventListener("load",function(){return s.loading|=1}),i.addEventListener("error",function(){return s.loading|=2}),ed(i,"link",l),qe(i),o.head.appendChild(i))))),t&&null===r)throw Error(a(528,""));return d}if(t&&null!==r)throw Error(a(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=zd(n),(r=(n=We(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Od(e){return'href="'+mt(e)+'"'}function Rd(e){return'link[rel="stylesheet"]['+e+"]"}function _d(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function zd(e){return'[src="'+mt(e)+'"]'}function Ad(e){return"script[async]"+e}function Nd(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+mt(n.href)+'"]');if(r)return t.instance=r,qe(r),r;var o=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return qe(r=(e.ownerDocument||e).createElement("style")),ed(r,"style",o),Ld(r,n.precedence,e),t.instance=r;case"stylesheet":o=Od(n.href);var i=e.querySelector(Rd(o));if(i)return t.state.loading|=4,t.instance=i,qe(i),i;r=_d(n),(o=Sd.get(o))&&Fd(r,o),qe(i=(e.ownerDocument||e).createElement("link"));var l=i;return l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),ed(i,"link",r),t.state.loading|=4,Ld(i,n.precedence,e),t.instance=i;case"script":return i=zd(n.src),(o=e.querySelector(Ad(i)))?(t.instance=o,qe(o),o):(r=n,(o=Sd.get(i))&&Dd(r=f({},n),o),qe(o=(e=e.ownerDocument||e).createElement("script")),ed(o,"link",r),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(a(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Ld(r,n.precedence,e));return t.instance}function Ld(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=r.length?r[r.length-1]:null,i=o,a=0;a<r.length;a++){var l=r[a];if(l.dataset.precedence===t)i=l;else if(i!==o)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Fd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Dd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Md=null;function Id(e,t,n){if(null===Md){var r=new Map,o=Md=new Map;o.set(n,r)}else(r=(o=Md).get(n))||(r=new Map,o.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var i=n[o];if(!(i[Ie]||i[ze]||"link"===e&&"stylesheet"===i.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==i.namespaceURI){var a=i.getAttribute(t)||"";a=e+a;var l=r.get(a);l?l.push(i):r.set(a,[i])}}return r}function $d(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function Ud(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Bd=null;function Hd(){}function Wd(){if(this.count--,0===this.count)if(this.stylesheets)Vd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var qd=null;function Vd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,qd=new Map,t.forEach(Yd,e),qd=null,Wd.call(e))}function Yd(e,t){if(!(4&t.state.loading)){var n=qd.get(e);if(n)var r=n.get(null);else{n=new Map,qd.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<o.length;i++){var a=o[i];"LINK"!==a.nodeName&&"not all"===a.getAttribute("media")||(n.set(a.dataset.precedence,a),r=a)}r&&n.set(null,r)}a=(o=t.instance).getAttribute("data-precedence"),(i=n.get(a)||r)===r&&n.set(null,o),n.set(a,o),this.count++,r=Wd.bind(this),o.addEventListener("load",r),o.addEventListener("error",r),i?i.parentNode.insertBefore(o,i.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(o,e.firstChild),t.state.loading|=4}}var Kd={$$typeof:w,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function Qd(e,t,n,r,o,i,a,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=je(0),this.hiddenUpdates=je(null),this.identifierPrefix=r,this.onUncaughtError=o,this.onCaughtError=i,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Gd(e,t,n,r,o,i,a,l,s,c,u,d){return e=new Qd(e,t,n,a,l,s,c,d),t=1,!0===i&&(t|=24),i=Fr(3,null,null,t),e.current=i,i.stateNode=e,(t=No()).refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:r,isDehydrated:n,cache:t},ri(i),e}function Jd(e){return e?e=Nr:Nr}function Xd(e,t,n,r,o,i){o=Jd(o),null===r.context?r.context=o:r.pendingContext=o,(r=ii(t)).payload={element:n},null!==(i=void 0===i?null:i)&&(r.callback=i),null!==(n=ai(e,r,t))&&(Fc(n,0,t),li(n,e,t))}function Zd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function ef(e,t){Zd(e,t),(e=e.alternate)&&Zd(e,t)}function tf(e){if(13===e.tag){var t=_r(e,67108864);null!==t&&Fc(t,0,67108864),ef(e,67108864)}}var nf=!0;function rf(e,t,n,r){var o=N.T;N.T=null;var i=L.p;try{L.p=2,af(e,t,n,r)}finally{L.p=i,N.T=o}}function of(e,t,n,r){var o=N.T;N.T=null;var i=L.p;try{L.p=8,af(e,t,n,r)}finally{L.p=i,N.T=o}}function af(e,t,n,r){if(nf){var o=lf(r);if(null===o)Bu(e,t,r,sf,n),vf(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return ff=xf(ff,e,t,n,r,o),!0;case"dragenter":return pf=xf(pf,e,t,n,r,o),!0;case"mouseover":return hf=xf(hf,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return mf.set(i,xf(mf.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,gf.set(i,xf(gf.get(i)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(vf(e,r),4&t&&-1<yf.indexOf(e)){for(;null!==o;){var i=Be(o);if(null!==i)switch(i.tag){case 3:if((i=i.stateNode).current.memoizedState.isDehydrated){var a=ye(i.pendingLanes);if(0!==a){var l=i;for(l.pendingLanes|=2,l.entangledLanes|=2;a;){var s=1<<31-pe(a);l.entanglements[1]|=s,a&=~s}Su(i),0===(6&nc)&&(Sc=te()+500,ku(0,!1))}}break;case 13:null!==(l=_r(i,2))&&Fc(l,0,2),Uc(),ef(i,2)}if(null===(i=lf(r))&&Bu(e,t,r,sf,n),i===o)break;o=i}null!==o&&r.stopPropagation()}else Bu(e,t,r,null,n)}}function lf(e){return cf(e=_t(e))}var sf=null;function cf(e){if(sf=null,null!==(e=Ue(e))){var t=s(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return sf=e,null}function uf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case re:return 2;case oe:return 8;case ie:case ae:return 32;case le:return 268435456;default:return 32}default:return 32}}var df=!1,ff=null,pf=null,hf=null,mf=new Map,gf=new Map,bf=[],yf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vf(e,t){switch(e){case"focusin":case"focusout":ff=null;break;case"dragenter":case"dragleave":pf=null;break;case"mouseover":case"mouseout":hf=null;break;case"pointerover":case"pointerout":mf.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gf.delete(t.pointerId)}}function xf(e,t,n,r,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},null!==t&&(null!==(t=Be(t))&&tf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function wf(e){var t=Ue(e.target);if(null!==t){var n=s(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void function(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}(e.priority,function(){if(13===n.tag){var e=Nc();e=Pe(e);var t=_r(n,e);null!==t&&Fc(t,0,e),ef(n,e)}})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Sf(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=lf(e.nativeEvent);if(null!==n)return null!==(t=Be(n))&&tf(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Rt=r,n.target.dispatchEvent(r),Rt=null,t.shift()}return!0}function kf(e,t,n){Sf(e)&&n.delete(t)}function jf(){df=!1,null!==ff&&Sf(ff)&&(ff=null),null!==pf&&Sf(pf)&&(pf=null),null!==hf&&Sf(hf)&&(hf=null),mf.forEach(kf),gf.forEach(kf)}function Ef(e,t){e.blockedOn===t&&(e.blockedOn=null,df||(df=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,jf)))}var Cf=null;function Tf(e){Cf!==e&&(Cf=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Cf===e&&(Cf=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],o=e[t+2];if("function"!==typeof r){if(null===cf(r||n))continue;break}var i=Be(n);null!==i&&(e.splice(t,3),t-=3,_a(i,{pending:!0,data:o,method:n.method,action:r},r,o))}}))}function Pf(e){function t(t){return Ef(t,e)}null!==ff&&Ef(ff,e),null!==pf&&Ef(pf,e),null!==hf&&Ef(hf,e),mf.forEach(t),gf.forEach(t);for(var n=0;n<bf.length;n++){var r=bf[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<bf.length&&null===(n=bf[0]).blockedOn;)wf(n),null===n.blockedOn&&bf.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var o=n[r],i=n[r+1],a=o[Ae]||null;if("function"===typeof i)a||Tf(n);else if(a){var l=null;if(i&&i.hasAttribute("formAction")){if(o=i,a=i[Ae]||null)l=a.formAction;else if(null!==cf(o))continue}else l=a.action;"function"===typeof l?n[r+1]=l:(n.splice(r,3),r-=3),Tf(n)}}}function Of(e){this._internalRoot=e}function Rf(e){this._internalRoot=e}Rf.prototype.render=Of.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Xd(t.current,Nc(),e,t,null,null)},Rf.prototype.unmount=Of.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Xd(e.current,2,null,e,null,null),Uc(),t[Ne]=null}},Rf.prototype.unstable_scheduleHydration=function(e){if(e){var t=Re();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bf.length&&0!==t&&t<bf[n].priority;n++);bf.splice(n,0,e),0===n&&wf(e)}};var _f=o.version;if("19.1.1"!==_f)throw Error(a(527,_f,"19.1.1"));L.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=s(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(r=o.return)){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return u(o),e;if(i===r)return u(o),t;i=i.sibling}throw Error(a(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,c=o.child;c;){if(c===n){l=!0,n=o,r=i;break}if(c===r){l=!0,r=o,n=i;break}c=c.sibling}if(!l){for(c=i.child;c;){if(c===n){l=!0,n=i,r=o;break}if(c===r){l=!0,r=i,n=o;break}c=c.sibling}if(!l)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?d(e):null)?null:e.stateNode};var zf={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.1.1"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Af=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Af.isDisabled&&Af.supportsFiber)try{ue=Af.inject(zf),de=Af}catch(Lf){}}t.createRoot=function(e,t){if(!l(e))throw Error(a(299));var n=!1,r="",o=yl,i=vl,s=xl;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(o=t.onUncaughtError),void 0!==t.onCaughtError&&(i=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Gd(e,1,!1,null,0,n,r,o,i,s,0,null),e[Ne]=t.current,$u(e),new Of(t)},t.hydrateRoot=function(e,t,n){if(!l(e))throw Error(a(299));var r=!1,o="",i=yl,s=vl,c=xl,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onUncaughtError&&(i=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(u=n.formState)),(t=Gd(e,1,!0,t,0,r,o,i,s,c,0,u)).context=Jd(null),n=t.current,(o=ii(r=Pe(r=Nc()))).callback=null,ai(n,o,r),n=r,t.current.lanes=n,Ee(t,n),Su(t),e[Ne]=t.current,$u(e),new Rf(t)},t.version="19.1.1"},43:(e,t,n)=>{"use strict";e.exports=n(288)},288:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=b.prototype;var x=v.prototype=new y;x.constructor=v,m(x,b.prototype),x.isPureReactComponent=!0;var w=Array.isArray,S={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function j(e,t,r,o,i,a){return r=a.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:a}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function P(){}function O(e,t,o,i,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s,c,u=!1;if(null===e)u=!0;else switch(l){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0;break;case f:return O((u=e._init)(e._payload),t,o,i,a)}}if(u)return a=a(e),u=""===i?"."+T(e,0):i,w(a)?(o="",null!=u&&(o=u.replace(C,"$&/")+"/"),O(a,t,o,"",function(e){return e})):null!=a&&(E(a)&&(s=a,c=o+(null==a.key||e&&e.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+u,a=j(s.type,c,void 0,0,0,s.props)),t.push(a)),1;u=0;var d,h=""===i?".":i+":";if(w(e))for(var m=0;m<e.length;m++)u+=O(i=e[m],t,o,l=h+T(i,m),a);else if("function"===typeof(m=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=p&&d[p]||d["@@iterator"])?d:null))for(e=m.call(e),m=0;!(i=e.next()).done;)u+=O(i=i.value,t,o,l=h+T(i,m++),a);else if("object"===l){if("function"===typeof e.then)return O(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(P,P):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,o,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function R(e,t,n){if(null==e)return e;var r=[],o=0;return O(e,r,"","",function(e){return t.call(n,e,o++)}),r}function _(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var z="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function A(){}t.Children={map:R,forEach:function(e,t,n){R(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return R(e,function(){t++}),t},toArray:function(e){return R(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=a,t.PureComponent=v,t.StrictMode=i,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=m({},e.props),o=e.key;if(null!=t)for(i in void 0!==t.ref&&void 0,void 0!==t.key&&(o=""+t.key),t)!k.call(t,i)||"key"===i||"__self"===i||"__source"===i||"ref"===i&&void 0===t.ref||(r[i]=t[i]);var i=arguments.length-2;if(1===i)r.children=n;else if(1<i){for(var a=Array(i),l=0;l<i;l++)a[l]=arguments[l+2];r.children=a}return j(e.type,o,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,n){var r,o={},i=null;if(null!=t)for(r in void 0!==t.key&&(i=""+t.key),t)k.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var l=Array(a),s=0;s<a;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return j(e,i,void 0,0,0,o)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:_}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),o=S.S;null!==o&&o(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(A,z)}catch(i){z(i)}finally{S.T=t}},t.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},t.use=function(e){return S.H.use(e)},t.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},t.useCallback=function(e,t){return S.H.useCallback(e,t)},t.useContext=function(e){return S.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},t.useEffect=function(e,t,n){var r=S.H;if("function"===typeof n)throw Error("useEffect CRUD overload is not enabled in this build of React.");return r.useEffect(e,t)},t.useId=function(){return S.H.useId()},t.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return S.H.useMemo(e,t)},t.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},t.useRef=function(e){return S.H.useRef(e)},t.useState=function(e){return S.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return S.H.useTransition()},t.version="19.1.1"},324:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var c=i[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(o=n?n.call(r,u,d,c):void 0)||void 0===o&&u!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},579:(e,t,n)=>{"use strict";e.exports=n(799)},672:(e,t,n)=>{"use strict";var r=n(43);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(o(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");var s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(o(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=s.T,n=a.p;try{if(s.T=null,a.p=2,e)return e()}finally{s.T=t,a.p=n,a.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,a.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&a.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin),o="string"===typeof t.integrity?t.integrity:void 0,i="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?a.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:o,fetchPriority:i}):"script"===n&&a.d.X(e,{crossOrigin:r,integrity:o,fetchPriority:i,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);a.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},t.requestFormReset=function(e){a.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},t.useFormStatus=function(){return s.H.useHostTransitionStatus()},t.version="19.1.1"},799:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(e,t,r){var o=null;if(void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),"key"in t)for(var i in r={},t)"key"!==i&&(r[i]=t[i]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:o,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=o,t.jsxs=o},853:(e,t,n)=>{"use strict";e.exports=n(896)},896:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<i(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>i(s,n))c<o&&0>i(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<o&&0>i(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,b=!1,y="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(u);null!==t;){if(null===t.callback)o(u);else{if(!(t.startTime<=e))break;o(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function S(e){if(g=!1,w(e),!m)if(null!==r(c))m=!0,j||(j=!0,k());else{var t=r(u);null!==t&&z(S,t.startTime-e)}}var k,j=!1,E=-1,C=5,T=-1;function P(){return!!b||!(t.unstable_now()-T<C)}function O(){if(b=!1,j){var e=t.unstable_now();T=e;var n=!0;try{e:{m=!1,g&&(g=!1,v(E),E=-1),h=!0;var i=p;try{t:{for(w(e),f=r(c);null!==f&&!(f.expirationTime>e&&P());){var a=f.callback;if("function"===typeof a){f.callback=null,p=f.priorityLevel;var l=a(f.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof l){f.callback=l,w(e),n=!0;break t}f===r(c)&&o(c),w(e)}else o(c);f=r(c)}if(null!==f)n=!0;else{var s=r(u);null!==s&&z(S,s.startTime-e),n=!1}}break e}finally{f=null,p=i,h=!1}n=void 0}}finally{n?k():j=!1}}}if("function"===typeof x)k=function(){x(O)};else if("undefined"!==typeof MessageChannel){var R=new MessageChannel,_=R.port2;R.port1.onmessage=O,k=function(){_.postMessage(null)}}else k=function(){y(O,0)};function z(e,n){E=y(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_requestPaint=function(){b=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,o,i){var a=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?a+i:a:i=a,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>a?(e.sortIndex=i,n(u,e),null===r(c)&&e===r(u)&&(g?(v(E),E=-1):g=!0,z(S,i-a))):(e.sortIndex=l,n(c,e),m||h||(m=!0,j||(j=!0,k()))),e},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce((t,r)=>(n.f[r](e,t),t),[])),n.u=e=>"static/js/"+e+".670e15c7.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="frontend:";n.l=(r,o,i,a)=>{if(e[r])e[r].push(o);else{var l,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=r),e[r]=[o];var f=(t,n)=>{l.onerror=l.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach(e=>e(n)),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((n,r)=>o=e[t]=[n,r]);r.push(o[2]=i);var a=n.p+n.u(t),l=new Error;n.l(a,r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,o[1](l)}},"chunk-"+t,t)}};var t=(t,r)=>{var o,i,a=r[0],l=r[1],s=r[2],c=0;if(a.some(t=>0!==e[t])){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(s)s(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunkfrontend=self.webpackChunkfrontend||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e={};n.r(e),n.d(e,{hasBrowserEnv:()=>bs,hasStandardBrowserEnv:()=>vs,hasStandardBrowserWebWorkerEnv:()=>xs,navigator:()=>ys,origin:()=>ws});var t=n(43),r=n(391),o="popstate";function i(){return f(function(e,t){let{pathname:n,search:r,hash:o}=e.location;return c("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:u(t)},null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function a(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function l(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function s(e,t){return{usr:e.state,key:e.key,idx:t}}function c(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?d(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function u(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function d(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function f(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:i=document.defaultView,v5Compat:a=!1}=r,l=i.history,u="POP",d=null,f=h();function h(){return(l.state||{idx:null}).idx}function m(){u="POP";let e=h(),t=null==e?null:e-f;f=e,d&&d({action:u,location:b.location,delta:t})}function g(e){return p(e)}null==f&&(f=0,l.replaceState({...l.state,idx:f},""));let b={get action(){return u},get location(){return e(i,l)},listen(e){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(o,m),d=e,()=>{i.removeEventListener(o,m),d=null}},createHref:e=>t(i,e),createURL:g,encodeLocation(e){let t=g(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){u="PUSH";let r=c(b.location,e,t);n&&n(r,e),f=h()+1;let o=s(r,f),p=b.createHref(r);try{l.pushState(o,"",p)}catch(m){if(m instanceof DOMException&&"DataCloneError"===m.name)throw m;i.location.assign(p)}a&&d&&d({action:u,location:b.location,delta:1})},replace:function(e,t){u="REPLACE";let r=c(b.location,e,t);n&&n(r,e),f=h();let o=s(r,f),i=b.createHref(r);l.replaceState(o,"",i),a&&d&&d({action:u,location:b.location,delta:0})},go:e=>l.go(e)};return b}function p(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="http://localhost";"undefined"!==typeof window&&(n="null"!==window.location.origin?window.location.origin:window.location.href),a(n,"No window.location.(origin|href) available to create URL");let r="string"===typeof e?e:u(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}new WeakMap;function h(e,t){return m(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function m(e,t,n,r){let o=R(("string"===typeof t?d(t):t).pathname||"/",n);if(null==o)return null;let i=g(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(i);let a=null;for(let l=0;null==a&&l<i.length;++l){let e=O(o);a=C(i[l],e,r)}return a}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=(e,o,i)=>{let l={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};l.relativePath.startsWith("/")&&(a(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length));let s=L([r,l.relativePath]),c=n.concat(l);e.children&&e.children.length>0&&(a(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${s}".`),g(e.children,t,c,s)),(null!=e.path||e.index)&&t.push({path:s,score:E(s,e.index),routesMeta:c})};return e.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of b(e.path))o(e,t,n);else o(e,t)}),t}function b(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return o?[i,""]:[i];let a=b(r.join("/")),l=[];return l.push(...a.map(e=>""===e?i:[i,e].join("/"))),o&&l.push(...a),l.map(t=>e.startsWith("/")&&""===t?"/":t)}var y=/^:[\w-]+$/,v=3,x=2,w=1,S=10,k=-2,j=e=>"*"===e;function E(e,t){let n=e.split("/"),r=n.length;return n.some(j)&&(r+=k),t&&(r+=x),n.filter(e=>!j(e)).reduce((e,t)=>e+(y.test(t)?v:""===t?w:S),r)}function C(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,o={},i="/",a=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,c="/"===i?t:t.slice(i.length)||"/",u=T({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),d=e.route;if(!u&&s&&n&&!r[r.length-1].route.index&&(u=T({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(o,u.params),a.push({params:o,pathname:L([i,u.pathname]),pathnameBase:F(L([i,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(i=L([i,u.pathnameBase]))}return a}function T(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=P(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=l[n]||"";a=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=o&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:i,pathnameBase:a,pattern:e}}function P(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];l("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function O(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return l(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function R(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function _(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function z(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function A(e){let t=z(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function N(e,t,n){let r,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=d(e):(r={...e},a(!r.pathname||!r.pathname.includes("?"),_("?","pathname","search",r)),a(!r.pathname||!r.pathname.includes("#"),_("#","pathname","hash",r)),a(!r.search||!r.search.includes("#"),_("#","search","hash",r)));let i,l=""===e||""===r.pathname,s=l?"/":r.pathname;if(null==s)i=n;else{let e=t.length-1;if(!o&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}i=e>=0?t[e]:"/"}let c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:o=""}="string"===typeof e?d(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:D(r),hash:M(o)}}(r,i),u=s&&"/"!==s&&s.endsWith("/"),f=(l||"."===s)&&n.endsWith("/");return c.pathname.endsWith("/")||!u&&!f||(c.pathname+="/"),c}var L=e=>e.join("/").replace(/\/\/+/g,"/"),F=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),D=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",M=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function I(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var $=["POST","PUT","PATCH","DELETE"],U=(new Set($),["GET",...$]);new Set(U),Symbol("ResetLoaderData");var B=t.createContext(null);B.displayName="DataRouter";var H=t.createContext(null);H.displayName="DataRouterState";var W=t.createContext(!1);var q=t.createContext({isTransitioning:!1});q.displayName="ViewTransition";var V=t.createContext(new Map);V.displayName="Fetchers";var Y=t.createContext(null);Y.displayName="Await";var K=t.createContext(null);K.displayName="Navigation";var Q=t.createContext(null);Q.displayName="Location";var G=t.createContext({outlet:null,matches:[],isDataRoute:!1});G.displayName="Route";var J=t.createContext(null);J.displayName="RouteError";function X(){return null!=t.useContext(Q)}function Z(){return a(X(),"useLocation() may be used only in the context of a <Router> component."),t.useContext(Q).location}var ee="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function te(e){t.useContext(K).static||t.useLayoutEffect(e)}function ne(){let{isDataRoute:e}=t.useContext(G);return e?function(){let{router:e}=fe("useNavigate"),n=he("useNavigate"),r=t.useRef(!1);te(()=>{r.current=!0});let o=t.useCallback(async function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};l(r.current,ee),r.current&&("number"===typeof t?e.navigate(t):await e.navigate(t,{fromRouteId:n,...o}))},[e,n]);return o}():function(){a(X(),"useNavigate() may be used only in the context of a <Router> component.");let e=t.useContext(B),{basename:n,navigator:r}=t.useContext(K),{matches:o}=t.useContext(G),{pathname:i}=Z(),s=JSON.stringify(A(o)),c=t.useRef(!1);te(()=>{c.current=!0});let u=t.useCallback(function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(l(c.current,ee),!c.current)return;if("number"===typeof t)return void r.go(t);let a=N(t,JSON.parse(s),i,"path"===o.relative);null==e&&"/"!==n&&(a.pathname="/"===a.pathname?n:L([n,a.pathname])),(o.replace?r.replace:r.push)(a,o.state,o)},[n,r,s,i,e]);return u}()}t.createContext(null);function re(){let{matches:e}=t.useContext(G),n=e[e.length-1];return n?n.params:{}}function oe(e){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=t.useContext(G),{pathname:o}=Z(),i=JSON.stringify(A(r));return t.useMemo(()=>N(e,JSON.parse(i),o,"path"===n),[e,i,o,n])}function ie(e,n,r,o){a(X(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=t.useContext(K),{matches:s}=t.useContext(G),c=s[s.length-1],u=c?c.params:{},f=c?c.pathname:"/",p=c?c.pathnameBase:"/",m=c&&c.route;{let e=m&&m.path||"";be(f,!m||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let g,b=Z();if(n){let e="string"===typeof n?d(n):n;a("/"===p||e.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${e.pathname}" was given in the \`location\` prop.`),g=e}else g=b;let y=g.pathname||"/",v=y;if("/"!==p){let e=p.replace(/^\//,"").split("/");v="/"+y.replace(/^\//,"").split("/").slice(e.length).join("/")}let x=h(e,{pathname:v});l(m||null!=x,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),l(null==x||void 0!==x[x.length-1].route.element||void 0!==x[x.length-1].route.Component||void 0!==x[x.length-1].route.lazy,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=ue(x&&x.map(e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:L([p,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?p:L([p,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),s,r,o);return n&&w?t.createElement(Q.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...g},navigationType:"POP"}},w):w}function ae(){let e=me(),n=I(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:o},a={padding:"2px 4px",backgroundColor:o},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=t.createElement(t.Fragment,null,t.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),t.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",t.createElement("code",{style:a},"ErrorBoundary")," or"," ",t.createElement("code",{style:a},"errorElement")," prop on your route.")),t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:i},r):null,l)}var le=t.createElement(ae,null),se=class extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(G.Provider,{value:this.props.routeContext},t.createElement(J.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ce(e){let{routeContext:n,match:r,children:o}=e,i=t.useContext(B);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(G.Provider,{value:n},o)}function ue(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==e){if(!r)return null;if(r.errors)e=r.matches;else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null;e=r.matches}}let o=e,i=r?.errors;if(null!=i){let e=o.findIndex(e=>e.route.id&&void 0!==i?.[e.route.id]);a(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),o=o.slice(0,Math.min(o.length,e+1))}let l=!1,s=-1;if(r)for(let t=0;t<o.length;t++){let e=o[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(s=t),e.route.id){let{loaderData:t,errors:n}=r,i=e.route.loader&&!t.hasOwnProperty(e.route.id)&&(!n||void 0===n[e.route.id]);if(e.route.lazy||i){l=!0,o=s>=0?o.slice(0,s+1):[o[0]];break}}}return o.reduceRight((e,a,c)=>{let u,d=!1,f=null,p=null;r&&(u=i&&a.route.id?i[a.route.id]:void 0,f=a.route.errorElement||le,l&&(s<0&&0===c?(be("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=a.route.hydrateFallbackElement||null)));let h=n.concat(o.slice(0,c+1)),m=()=>{let n;return n=u?f:d?p:a.route.Component?t.createElement(a.route.Component,null):a.route.element?a.route.element:e,t.createElement(ce,{match:a,routeContext:{outlet:e,matches:h,isDataRoute:null!=r},children:n})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===c)?t.createElement(se,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}function de(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fe(e){let n=t.useContext(B);return a(n,de(e)),n}function pe(e){let n=t.useContext(H);return a(n,de(e)),n}function he(e){let n=function(e){let n=t.useContext(G);return a(n,de(e)),n}(e),r=n.matches[n.matches.length-1];return a(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function me(){let e=t.useContext(J),n=pe("useRouteError"),r=he("useRouteError");return void 0!==e?e:n.errors?.[r]}var ge={};function be(e,t,n){t||ge[e]||(ge[e]=!0,l(!1,n))}var ye={};function ve(e,t){e||ye[t]||(ye[t]=!0,console.warn(t))}t.memo(function(e){let{routes:t,future:n,state:r}=e;return ie(t,void 0,r,n)});function xe(e){a(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function we(e){let{basename:n="/",children:r=null,location:o,navigationType:i="POP",navigator:s,static:c=!1}=e;a(!X(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),f=t.useMemo(()=>({basename:u,navigator:s,static:c,future:{}}),[u,s,c]);"string"===typeof o&&(o=d(o));let{pathname:p="/",search:h="",hash:m="",state:g=null,key:b="default"}=o,y=t.useMemo(()=>{let e=R(p,u);return null==e?null:{location:{pathname:e,search:h,hash:m,state:g,key:b},navigationType:i}},[u,p,h,m,g,b,i]);return l(null!=y,`<Router basename="${u}"> is not able to match the URL "${p}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==y?null:t.createElement(K.Provider,{value:f},t.createElement(Q.Provider,{children:r,value:y}))}function Se(e){let{children:t,location:n}=e;return ie(ke(t),n)}t.Component;function ke(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return t.Children.forEach(e,(e,o)=>{if(!t.isValidElement(e))return;let i=[...n,o];if(e.type===t.Fragment)return void r.push.apply(r,ke(e.props.children,i));a(e.type===xe,`[${"string"===typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),a(!e.props.index||!e.props.children,"An index route cannot have child routes.");let l={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(l.children=ke(e.props.children,i)),r.push(l)}),r}var je="get",Ee="application/x-www-form-urlencoded";function Ce(e){return null!=e&&"string"===typeof e.tagName}function Te(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new URLSearchParams("string"===typeof e||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(e=>[n,e]):[[n,r]])},[]))}var Pe=null;var Oe=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Re(e){return null==e||Oe.has(e)?e:(l(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ee}"`),null)}function _e(e,t){let n,r,o,i,a;if(Ce(l=e)&&"form"===l.tagName.toLowerCase()){let a=e.getAttribute("action");r=a?R(a,t):null,n=e.getAttribute("method")||je,o=Re(e.getAttribute("enctype"))||Ee,i=new FormData(e)}else if(function(e){return Ce(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Ce(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let a=e.form;if(null==a)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||a.getAttribute("action");if(r=l?R(l,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||je,o=Re(e.getAttribute("formenctype"))||Re(a.getAttribute("enctype"))||Ee,i=new FormData(a,e),!function(){if(null===Pe)try{new FormData(document.createElement("form"),0),Pe=!1}catch(e){Pe=!0}return Pe}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";i.append(`${e}x`,"0"),i.append(`${e}y`,"0")}else t&&i.append(t,r)}}else{if(Ce(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=je,r=null,o=Ee,a=e}var l;return i&&"text/plain"===o&&(a=i,i=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:i,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");"undefined"!==typeof window?window:"undefined"!==typeof globalThis&&globalThis;function ze(e){return{__html:e}}function Ae(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}Symbol("SingleFetchRedirect");function Ne(e,t,n){let r="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===r.pathname?r.pathname=`_root.${n}`:t&&"/"===R(r.pathname,t)?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function Le(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Fe(e){return null!=e&&"string"===typeof e.page}function De(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Me(e,t,n,r,o,i){let a=(e,t)=>!n[t]||e.route.id!==n[t].route.id,l=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===i?t.filter((e,t)=>a(e,t)||l(e,t)):"data"===i?t.filter((t,i)=>{let s=r.routes[t.route.id];if(!s||!s.hasLoader)return!1;if(a(t,i)||l(t,i))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0}):[]}function Ie(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let o=[r.module];return r.clientActionModule&&(o=o.concat(r.clientActionModule)),r.clientLoaderModule&&(o=o.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(o=o.concat(r.hydrateFallbackModule)),r.imports&&(o=o.concat(r.imports)),o}).flat(1),[...new Set(r)];var r}function $e(e,t){let n=new Set,r=new Set(t);return e.reduce((e,o)=>{if(t&&!Fe(o)&&"script"===o.as&&o.href&&r.has(o.href))return e;let i=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(o));return n.has(i)||(n.add(i),e.push({key:i,link:o})),e},[])}function Ue(e,t){return"lazy"===e.mode&&!0===t}function Be(){let e=t.useContext(B);return Ae(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function He(){let e=t.useContext(H);return Ae(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var We=t.createContext(void 0);function qe(){let e=t.useContext(We);return Ae(e,"You must render this element inside a <HydratedRouter> element"),e}function Ve(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Ye(e,t,n){if(n&&!Je)return[e[0]];if(t){let n=e.findIndex(e=>void 0!==t[e.route.id]);return e.slice(0,n+1)}return e}We.displayName="FrameworkContext";function Ke(e){let{page:n,...r}=e,{router:o}=Be(),i=t.useMemo(()=>h(o.routes,n,o.basename),[o.routes,n,o.basename]);return i?t.createElement(Ge,{page:n,matches:i,...r}):null}function Qe(e){let{manifest:n,routeModules:r}=qe(),[o,i]=t.useState([]);return t.useEffect(()=>{let t=!1;return async function(e,t,n){let r=await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await Le(r,n);return e.links?e.links():[]}return[]}));return $e(r.flat(1).filter(De).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(e,n,r).then(e=>{t||i(e)}),()=>{t=!0}},[e,n,r]),o}function Ge(e){let{page:n,matches:r,...o}=e,i=Z(),{manifest:a,routeModules:l}=qe(),{basename:s}=Be(),{loaderData:c,matches:u}=He(),d=t.useMemo(()=>Me(n,r,u,a,i,"data"),[n,r,u,a,i]),f=t.useMemo(()=>Me(n,r,u,a,i,"assets"),[n,r,u,a,i]),p=t.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let e=new Set,t=!1;if(r.forEach(n=>{let r=a.routes[n.route.id];r&&r.hasLoader&&(!d.some(e=>e.route.id===n.route.id)&&n.route.id in c&&l[n.route.id]?.shouldRevalidate||r.hasClientLoader?t=!0:e.add(n.route.id))}),0===e.size)return[];let o=Ne(n,s,"data");return t&&e.size>0&&o.searchParams.set("_routes",r.filter(t=>e.has(t.route.id)).map(e=>e.route.id).join(",")),[o.pathname+o.search]},[s,c,i,a,d,r,n,l]),h=t.useMemo(()=>Ie(f,a),[f,a]),m=Qe(f);return t.createElement(t.Fragment,null,p.map(e=>t.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...o})),h.map(e=>t.createElement("link",{key:e,rel:"modulepreload",href:e,...o})),m.map(e=>{let{key:n,link:r}=e;return t.createElement("link",{key:n,...r})}))}var Je=!1;function Xe(e){let{manifest:n,serverHandoffString:r,isSpaMode:o,renderMeta:i,routeDiscovery:a,ssr:l}=qe(),{router:s,static:c,staticContext:u}=Be(),{matches:d}=He(),f=t.useContext(W),p=Ue(a,l);i&&(i.didRenderScripts=!0);let m=Ye(d,null,o);t.useEffect(()=>{0},[]);let g=t.useMemo(()=>{if(f)return null;let o=u?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",i=c?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${p?"":`import ${JSON.stringify(n.url)}`};\n${m.map((e,t)=>{let r=`route${t}`,o=n.routes[e.route.id];Ae(o,`Route ${e.route.id} not found in manifest`);let{clientActionModule:i,clientLoaderModule:a,clientMiddlewareModule:l,hydrateFallbackModule:s,module:c}=o,u=[...i?[{module:i,varName:`${r}_clientAction`}]:[],...a?[{module:a,varName:`${r}_clientLoader`}]:[],...l?[{module:l,varName:`${r}_clientMiddleware`}]:[],...s?[{module:s,varName:`${r}_HydrateFallback`}]:[],{module:c,varName:`${r}_main`}];return 1===u.length?`import * as ${r} from ${JSON.stringify(c)};`:[u.map(e=>`import * as ${e.varName} from "${e.module}";`).join("\n"),`const ${r} = {${u.map(e=>`...${e.varName}`).join(",")}};`].join("\n")}).join("\n")}\n  ${p?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,o=new Set(t.state.matches.map(e=>e.route.id)),i=t.state.location.pathname.split("/").filter(Boolean),a=["/"];for(i.pop();i.length>0;)a.push(`/${i.join("/")}`),i.pop();a.forEach(e=>{let n=h(t.routes,e,t.basename);n&&n.forEach(e=>o.add(e.route.id))});let l=[...o].reduce((e,t)=>Object.assign(e,{[t]:r.routes[t]}),{});return{...r,routes:l,sri:!!n||void 0}}(n,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${m.map((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return t.createElement(t.Fragment,null,t.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:ze(o),type:void 0}),t.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:ze(i),type:"module",async:!0}))},[]),b=Je||f?[]:(n.entry.imports.concat(Ie(m,n,{includeHydrateFallback:!0})),[...new Set(y)]);var y;let v="object"===typeof n.sri?n.sri:{};return ve(!f,"The <Scripts /> element is a no-op when using RSC and can be safely removed."),Je||f?null:t.createElement(t.Fragment,null,"object"===typeof n.sri?t.createElement("script",{"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:v})}}):null,p?null:t.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:e.crossOrigin,integrity:v[n.url],suppressHydrationWarning:!0}),t.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:e.crossOrigin,integrity:v[n.entry.module],suppressHydrationWarning:!0}),b.map(n=>t.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:e.crossOrigin,integrity:v[n],suppressHydrationWarning:!0})),g)}function Ze(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)})}}t.Component;function et(e){let{error:n,isOutsideRemixApp:r}=e;console.error(n);let o,i=t.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      '}});if(I(n))return t.createElement(tt,{title:"Unhandled Thrown Response!"},t.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),i);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return t.createElement(tt,{title:"Application Error!",isOutsideRemixApp:r},t.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),t.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},o.stack),i)}function tt(e){let{title:n,renderScripts:r,isOutsideRemixApp:o,children:i}=e,{routeModules:a}=qe();return a.root?.Layout&&!o?i:t.createElement("html",{lang:"en"},t.createElement("head",null,t.createElement("meta",{charSet:"utf-8"}),t.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),t.createElement("title",null,n)),t.createElement("body",null,t.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},i,r?t.createElement(Xe,null):null)))}var nt="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{nt&&(window.__reactRouterVersion="7.7.1")}catch(Gf){}function rt(e){let{basename:n,children:r,window:o}=e,a=t.useRef();null==a.current&&(a.current=i({window:o,v5Compat:!0}));let l=a.current,[s,c]=t.useState({action:l.action,location:l.location}),u=t.useCallback(e=>{t.startTransition(()=>c(e))},[c]);return t.useLayoutEffect(()=>l.listen(u),[l,u]),t.createElement(we,{basename:n,children:r,location:s.location,navigationType:s.action,navigator:l})}var ot=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,it=t.forwardRef(function(e,n){let r,{onClick:o,discover:i="render",prefetch:s="none",relative:c,reloadDocument:d,replace:f,state:p,target:h,to:m,preventScrollReset:g,viewTransition:b,...y}=e,{basename:v}=t.useContext(K),x="string"===typeof m&&ot.test(m),w=!1;if("string"===typeof m&&x&&(r=m,nt))try{let e=new URL(window.location.href),t=m.startsWith("//")?new URL(e.protocol+m):new URL(m),n=R(t.pathname,v);t.origin===e.origin&&null!=n?m=n+t.search+t.hash:w=!0}catch(Gf){l(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let S=function(e){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(X(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:o}=t.useContext(K),{hash:i,pathname:l,search:s}=oe(e,{relative:n}),c=l;return"/"!==r&&(c="/"===l?r:L([r,l])),o.createHref({pathname:c,search:s,hash:i})}(m,{relative:c}),[k,j,E]=function(e,n){let r=t.useContext(We),[o,i]=t.useState(!1),[a,l]=t.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:f}=n,p=t.useRef(null);t.useEffect(()=>{if("render"===e&&l(!0),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{l(e.isIntersecting)})},{threshold:.5});return p.current&&e.observe(p.current),()=>{e.disconnect()}}},[e]),t.useEffect(()=>{if(o){let e=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(e)}}},[o]);let h=()=>{i(!0)},m=()=>{i(!1),l(!1)};return r?"intent"!==e?[a,p,{}]:[a,p,{onFocus:Ve(s,h),onBlur:Ve(c,m),onMouseEnter:Ve(u,h),onMouseLeave:Ve(d,m),onTouchStart:Ve(f,h)}]:[!1,p,{}]}(s,y),C=function(e){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,viewTransition:l}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=ne(),c=Z(),d=oe(e,{relative:a});return t.useCallback(t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,n)){t.preventDefault();let n=void 0!==r?r:u(c)===u(d);s(e,{replace:n,state:o,preventScrollReset:i,relative:a,viewTransition:l})}},[c,s,d,r,o,n,e,i,a,l])}(m,{replace:f,state:p,target:h,preventScrollReset:g,relative:c,viewTransition:b});let T=t.createElement("a",{...y,...E,href:r||S,onClick:w||d?o:function(e){o&&o(e),e.defaultPrevented||C(e)},ref:Ze(n,j),target:h,"data-discover":x||"render"!==i?void 0:"true"});return k&&!x?t.createElement(t.Fragment,null,T,t.createElement(Ke,{page:S})):T});it.displayName="Link",t.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:l=!1,style:s,to:c,viewTransition:u,children:d,...f}=e,p=oe(c,{relative:f.relative}),h=Z(),m=t.useContext(H),{navigator:g,basename:b}=t.useContext(K),y=null!=m&&function(e){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.useContext(q);a(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=st("useViewTransitionState"),i=oe(e,{relative:n});if(!r.isTransitioning)return!1;let l=R(r.currentLocation.pathname,o)||r.currentLocation.pathname,s=R(r.nextLocation.pathname,o)||r.nextLocation.pathname;return null!=T(i.pathname,s)||null!=T(i.pathname,l)}(p)&&!0===u,v=g.encodeLocation?g.encodeLocation(p).pathname:p.pathname,x=h.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;o||(x=x.toLowerCase(),w=w?w.toLowerCase():null,v=v.toLowerCase()),w&&b&&(w=R(w,b)||w);const S="/"!==v&&v.endsWith("/")?v.length-1:v.length;let k,j=x===v||!l&&x.startsWith(v)&&"/"===x.charAt(S),E=null!=w&&(w===v||!l&&w.startsWith(v)&&"/"===w.charAt(v.length)),C={isActive:j,isPending:E,isTransitioning:y},P=j?r:void 0;k="function"===typeof i?i(C):[i,j?"active":null,E?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let O="function"===typeof s?s(C):s;return t.createElement(it,{...f,"aria-current":P,className:k,ref:n,style:O,to:c,viewTransition:u},"function"===typeof d?d(C):d)}).displayName="NavLink";var at=t.forwardRef((e,n)=>{let{discover:r="render",fetcherKey:o,navigate:i,reloadDocument:l,replace:s,state:c,method:d=je,action:f,onSubmit:p,relative:h,preventScrollReset:m,viewTransition:g,...b}=e,y=ft(),v=function(e){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=t.useContext(K),o=t.useContext(G);a(o,"useFormAction must be used inside a RouteContext");let[i]=o.matches.slice(-1),l={...oe(e||".",{relative:n})},s=Z();if(null==e){l.search=s.search;let e=new URLSearchParams(l.search),t=e.getAll("index"),n=t.some(e=>""===e);if(n){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();l.search=n?`?${n}`:""}}e&&"."!==e||!i.route.index||(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(l.pathname="/"===l.pathname?r:L([r,l.pathname]));return u(l)}(f,{relative:h}),x="get"===d.toLowerCase()?"get":"post",w="string"===typeof f&&ot.test(f);return t.createElement("form",{ref:n,method:x,action:v,onSubmit:l?p:e=>{if(p&&p(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||d;y(t||e.currentTarget,{fetcherKey:o,method:n,navigate:i,replace:s,state:c,relative:h,preventScrollReset:m,viewTransition:g})},...b,"data-discover":w||"render"!==r?void 0:"true"})});function lt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function st(e){let n=t.useContext(B);return a(n,lt(e)),n}function ct(e){l("undefined"!==typeof URLSearchParams,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let n=t.useRef(Te(e)),r=t.useRef(!1),o=Z(),i=t.useMemo(()=>function(e,t){let n=Te(e);return t&&t.forEach((e,r)=>{n.has(r)||t.getAll(r).forEach(e=>{n.append(r,e)})}),n}(o.search,r.current?null:n.current),[o.search]),a=ne(),s=t.useCallback((e,t)=>{const n=Te("function"===typeof e?e(new URLSearchParams(i)):e);r.current=!0,a("?"+n,t)},[a,i]);return[i,s]}at.displayName="Form";var ut=0,dt=()=>`__${String(++ut)}__`;function ft(){let{router:e}=st("useSubmit"),{basename:n}=t.useContext(K),r=he("useRouteId");return t.useCallback(async function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:i,method:a,encType:l,formData:s,body:c}=_e(t,n);if(!1===o.navigate){let t=o.fetcherKey||dt();await e.fetch(t,r,o.action||i,{preventScrollReset:o.preventScrollReset,formData:s,body:c,formMethod:o.method||a,formEncType:o.encType||l,flushSync:o.flushSync})}else await e.navigate(o.action||i,{preventScrollReset:o.preventScrollReset,formData:s,body:c,formMethod:o.method||a,formEncType:o.encType||l,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,n,r])}var pt=function(){return pt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},pt.apply(this,arguments)};Object.create;function ht(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var mt=n(324),gt=n.n(mt),bt="-ms-",yt="-moz-",vt="-webkit-",xt="comm",wt="rule",St="decl",kt="@keyframes",jt=Math.abs,Et=String.fromCharCode,Ct=Object.assign;function Tt(e){return e.trim()}function Pt(e,t){return(e=t.exec(e))?e[0]:e}function Ot(e,t,n){return e.replace(t,n)}function Rt(e,t,n){return e.indexOf(t,n)}function _t(e,t){return 0|e.charCodeAt(t)}function zt(e,t,n){return e.slice(t,n)}function At(e){return e.length}function Nt(e){return e.length}function Lt(e,t){return t.push(e),e}function Ft(e,t){return e.filter(function(e){return!Pt(e,t)})}var Dt=1,Mt=1,It=0,$t=0,Ut=0,Bt="";function Ht(e,t,n,r,o,i,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Dt,column:Mt,length:a,return:"",siblings:l}}function Wt(e,t){return Ct(Ht("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function qt(e){for(;e.root;)e=Wt(e.root,{children:[e]});Lt(e,e.siblings)}function Vt(){return Ut=$t>0?_t(Bt,--$t):0,Mt--,10===Ut&&(Mt=1,Dt--),Ut}function Yt(){return Ut=$t<It?_t(Bt,$t++):0,Mt++,10===Ut&&(Mt=1,Dt++),Ut}function Kt(){return _t(Bt,$t)}function Qt(){return $t}function Gt(e,t){return zt(Bt,e,t)}function Jt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Xt(e){return Dt=Mt=1,It=At(Bt=e),$t=0,[]}function Zt(e){return Bt="",e}function en(e){return Tt(Gt($t-1,rn(91===e?e+2:40===e?e+1:e)))}function tn(e){for(;(Ut=Kt())&&Ut<33;)Yt();return Jt(e)>2||Jt(Ut)>3?"":" "}function nn(e,t){for(;--t&&Yt()&&!(Ut<48||Ut>102||Ut>57&&Ut<65||Ut>70&&Ut<97););return Gt(e,Qt()+(t<6&&32==Kt()&&32==Yt()))}function rn(e){for(;Yt();)switch(Ut){case e:return $t;case 34:case 39:34!==e&&39!==e&&rn(Ut);break;case 40:41===e&&rn(e);break;case 92:Yt()}return $t}function on(e,t){for(;Yt()&&e+Ut!==57&&(e+Ut!==84||47!==Kt()););return"/*"+Gt(t,$t-1)+"*"+Et(47===e?e:Yt())}function an(e){for(;!Jt(Kt());)Yt();return Gt(e,$t)}function ln(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function sn(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case St:return e.return=e.return||e.value;case xt:return"";case kt:return e.return=e.value+"{"+ln(e.children,r)+"}";case wt:if(!At(e.value=e.props.join(",")))return""}return At(n=ln(e.children,r))?e.return=e.value+"{"+n+"}":""}function cn(e,t,n){switch(function(e,t){return 45^_t(e,0)?(((t<<2^_t(e,0))<<2^_t(e,1))<<2^_t(e,2))<<2^_t(e,3):0}(e,t)){case 5103:return vt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return vt+e+e;case 4789:return yt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return vt+e+yt+e+bt+e+e;case 5936:switch(_t(e,t+11)){case 114:return vt+e+bt+Ot(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return vt+e+bt+Ot(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return vt+e+bt+Ot(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return vt+e+bt+e+e;case 6165:return vt+e+bt+"flex-"+e+e;case 5187:return vt+e+Ot(e,/(\w+).+(:[^]+)/,vt+"box-$1$2"+bt+"flex-$1$2")+e;case 5443:return vt+e+bt+"flex-item-"+Ot(e,/flex-|-self/g,"")+(Pt(e,/flex-|baseline/)?"":bt+"grid-row-"+Ot(e,/flex-|-self/g,""))+e;case 4675:return vt+e+bt+"flex-line-pack"+Ot(e,/align-content|flex-|-self/g,"")+e;case 5548:return vt+e+bt+Ot(e,"shrink","negative")+e;case 5292:return vt+e+bt+Ot(e,"basis","preferred-size")+e;case 6060:return vt+"box-"+Ot(e,"-grow","")+vt+e+bt+Ot(e,"grow","positive")+e;case 4554:return vt+Ot(e,/([^-])(transform)/g,"$1"+vt+"$2")+e;case 6187:return Ot(Ot(Ot(e,/(zoom-|grab)/,vt+"$1"),/(image-set)/,vt+"$1"),e,"")+e;case 5495:case 3959:return Ot(e,/(image-set\([^]*)/,vt+"$1$`$1");case 4968:return Ot(Ot(e,/(.+:)(flex-)?(.*)/,vt+"box-pack:$3"+bt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+vt+e+e;case 4200:if(!Pt(e,/flex-|baseline/))return bt+"grid-column-align"+zt(e,t)+e;break;case 2592:case 3360:return bt+Ot(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Pt(e.props,/grid-\w+-end/)})?~Rt(e+(n=n[t].value),"span",0)?e:bt+Ot(e,"-start","")+e+bt+"grid-row-span:"+(~Rt(n,"span",0)?Pt(n,/\d+/):+Pt(n,/\d+/)-+Pt(e,/\d+/))+";":bt+Ot(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return Pt(e.props,/grid-\w+-start/)})?e:bt+Ot(Ot(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Ot(e,/(.+)-inline(.+)/,vt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(At(e)-1-t>6)switch(_t(e,t+1)){case 109:if(45!==_t(e,t+4))break;case 102:return Ot(e,/(.+:)(.+)-([^]+)/,"$1"+vt+"$2-$3$1"+yt+(108==_t(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Rt(e,"stretch",0)?cn(Ot(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Ot(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,o,i,a,l){return bt+n+":"+r+l+(o?bt+n+"-span:"+(i?a:+a-+r)+l:"")+e});case 4949:if(121===_t(e,t+6))return Ot(e,":",":"+vt)+e;break;case 6444:switch(_t(e,45===_t(e,14)?18:11)){case 120:return Ot(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+vt+(45===_t(e,14)?"inline-":"")+"box$3$1"+vt+"$2$3$1"+bt+"$2box$3")+e;case 100:return Ot(e,":",":"+bt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ot(e,"scroll-","scroll-snap-")+e}return e}function un(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case St:return void(e.return=cn(e.value,e.length,n));case kt:return ln([Wt(e,{value:Ot(e.value,"@","@"+vt)})],r);case wt:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(Pt(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":qt(Wt(e,{props:[Ot(t,/:(read-\w+)/,":-moz-$1")]})),qt(Wt(e,{props:[t]})),Ct(e,{props:Ft(n,r)});break;case"::placeholder":qt(Wt(e,{props:[Ot(t,/:(plac\w+)/,":"+vt+"input-$1")]})),qt(Wt(e,{props:[Ot(t,/:(plac\w+)/,":-moz-$1")]})),qt(Wt(e,{props:[Ot(t,/:(plac\w+)/,bt+"input-$1")]})),qt(Wt(e,{props:[t]})),Ct(e,{props:Ft(n,r)})}return""})}}function dn(e){return Zt(fn("",null,null,null,[""],e=Xt(e),0,[0],e))}function fn(e,t,n,r,o,i,a,l,s){for(var c=0,u=0,d=a,f=0,p=0,h=0,m=1,g=1,b=1,y=0,v="",x=o,w=i,S=r,k=v;g;)switch(h=y,y=Yt()){case 40:if(108!=h&&58==_t(k,d-1)){-1!=Rt(k+=Ot(en(y),"&","&\f"),"&\f",jt(c?l[c-1]:0))&&(b=-1);break}case 34:case 39:case 91:k+=en(y);break;case 9:case 10:case 13:case 32:k+=tn(h);break;case 92:k+=nn(Qt()-1,7);continue;case 47:switch(Kt()){case 42:case 47:Lt(hn(on(Yt(),Qt()),t,n,s),s);break;default:k+="/"}break;case 123*m:l[c++]=At(k)*b;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==b&&(k=Ot(k,/\f/g,"")),p>0&&At(k)-d&&Lt(p>32?mn(k+";",r,n,d-1,s):mn(Ot(k," ","")+";",r,n,d-2,s),s);break;case 59:k+=";";default:if(Lt(S=pn(k,t,n,c,u,o,l,v,x=[],w=[],d,i),i),123===y)if(0===u)fn(k,t,S,S,x,i,d,l,w);else switch(99===f&&110===_t(k,3)?100:f){case 100:case 108:case 109:case 115:fn(e,S,S,r&&Lt(pn(e,S,S,0,0,o,l,v,o,x=[],d,w),w),o,w,d,l,r?x:w);break;default:fn(k,S,S,S,[""],w,0,l,w)}}c=u=p=0,m=b=1,v=k="",d=a;break;case 58:d=1+At(k),p=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==Vt())continue;switch(k+=Et(y),y*m){case 38:b=u>0?1:(k+="\f",-1);break;case 44:l[c++]=(At(k)-1)*b,b=1;break;case 64:45===Kt()&&(k+=en(Yt())),f=Kt(),u=d=At(v=k+=an(Qt())),y++;break;case 45:45===h&&2==At(k)&&(m=0)}}return i}function pn(e,t,n,r,o,i,a,l,s,c,u,d){for(var f=o-1,p=0===o?i:[""],h=Nt(p),m=0,g=0,b=0;m<r;++m)for(var y=0,v=zt(e,f+1,f=jt(g=a[m])),x=e;y<h;++y)(x=Tt(g>0?p[y]+" "+v:Ot(v,/&\f/g,p[y])))&&(s[b++]=x);return Ht(e,t,n,0===o?wt:l,s,c,u,d)}function hn(e,t,n,r){return Ht(e,t,n,xt,Et(Ut),zt(e,2,-2),0,r)}function mn(e,t,n,r,o){return Ht(e,t,n,St,zt(e,0,r),zt(e,r+1,-1),r,o)}var gn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},bn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",yn="active",vn="data-styled-version",xn="6.1.19",wn="/*!sc*/\n",Sn="undefined"!=typeof window&&"undefined"!=typeof document,kn=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),jn={},En=(new Set,Object.freeze([])),Cn=Object.freeze({});function Tn(e,t,n){return void 0===n&&(n=Cn),e.theme!==n.theme&&e.theme||t||n.theme}var Pn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),On=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Rn=/(^-|-$)/g;function _n(e){return e.replace(On,"-").replace(Rn,"")}var zn=/(a)(d)/gi,An=function(e){return String.fromCharCode(e+(e>25?39:97))};function Nn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=An(t%52)+n;return(An(t%52)+n).replace(zn,"$1-$2")}var Ln,Fn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Dn=function(e){return Fn(5381,e)};function Mn(e){return Nn(Dn(e)>>>0)}function In(e){return e.displayName||e.name||"Component"}function $n(e){return"string"==typeof e&&!0}var Un="function"==typeof Symbol&&Symbol.for,Bn=Un?Symbol.for("react.memo"):60115,Hn=Un?Symbol.for("react.forward_ref"):60112,Wn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Vn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Yn=((Ln={})[Hn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ln[Bn]=Vn,Ln);function Kn(e){return("type"in(t=e)&&t.type.$$typeof)===Bn?Vn:"$$typeof"in e?Yn[e.$$typeof]:Wn;var t}var Qn=Object.defineProperty,Gn=Object.getOwnPropertyNames,Jn=Object.getOwnPropertySymbols,Xn=Object.getOwnPropertyDescriptor,Zn=Object.getPrototypeOf,er=Object.prototype;function tr(e,t,n){if("string"!=typeof t){if(er){var r=Zn(t);r&&r!==er&&tr(e,r,n)}var o=Gn(t);Jn&&(o=o.concat(Jn(t)));for(var i=Kn(e),a=Kn(t),l=0;l<o.length;++l){var s=o[l];if(!(s in qn||n&&n[s]||a&&s in a||i&&s in i)){var c=Xn(t,s);try{Qn(e,s,c)}catch(e){}}}}return e}function nr(e){return"function"==typeof e}function rr(e){return"object"==typeof e&&"styledComponentId"in e}function or(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ir(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function ar(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function lr(e,t,n){if(void 0===n&&(n=!1),!n&&!ar(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=lr(e[r],t[r]);else if(ar(t))for(var r in t)e[r]=lr(e[r],t[r]);return e}function sr(e,t){Object.defineProperty(e,"toString",{value:t})}function cr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ur=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw cr(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(wn);return t},e}(),dr=new Map,fr=new Map,pr=1,hr=function(e){if(dr.has(e))return dr.get(e);for(;fr.has(pr);)pr++;var t=pr++;return dr.set(e,t),fr.set(t,e),t},mr=function(e,t){pr=t+1,dr.set(e,t),fr.set(t,e)},gr="style[".concat(bn,"][").concat(vn,'="').concat(xn,'"]'),br=new RegExp("^".concat(bn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yr=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},vr=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(wn),o=[],i=0,a=r.length;i<a;i++){var l=r[i].trim();if(l){var s=l.match(br);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(mr(u,c),yr(e,u,s[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(l)}}},xr=function(e){for(var t=document.querySelectorAll(gr),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(bn)!==yn&&(vr(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function wr(){return n.nc}var Sr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(bn,"]")));return t[t.length-1]}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(bn,yn),r.setAttribute(vn,xn);var a=wr();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},kr=function(){function e(e){this.element=Sr(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw cr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),jr=function(){function e(e){this.element=Sr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Er=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Cr=Sn,Tr={isServer:!Sn,useCSSOMInjection:!kn},Pr=function(){function e(e,t,n){void 0===e&&(e=Cn),void 0===t&&(t={});var r=this;this.options=pt(pt({},Tr),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Sn&&Cr&&(Cr=!1,xr(this)),sr(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return fr.get(e)}(n);if(void 0===o)return"continue";var i=e.names.get(o),a=t.getGroup(n);if(void 0===i||!i.size||0===a.length)return"continue";var l="".concat(bn,".g").concat(n,'[id="').concat(o,'"]'),s="";void 0!==i&&i.forEach(function(e){e.length>0&&(s+="".concat(e,","))}),r+="".concat(a).concat(l,'{content:"').concat(s,'"}').concat(wn)},i=0;i<n;i++)o(i);return r}(r)})}return e.registerId=function(e){return hr(e)},e.prototype.rehydrate=function(){!this.server&&Sn&&xr(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(pt(pt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Er(n):t?new kr(n):new jr(n)}(this.options),new ur(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(hr(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(hr(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(hr(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Or=/&/g,Rr=/^\s*\/\/.*$/gm;function _r(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=_r(e.children,t)),e})}function zr(e){var t,n,r,o=void 0===e?Cn:e,i=o.options,a=void 0===i?Cn:i,l=o.plugins,s=void 0===l?En:l,c=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},u=s.slice();u.push(function(e){e.type===wt&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Or,n).replace(r,c))}),a.prefix&&u.push(un),u.push(sn);var d=function(e,o,i,l){void 0===o&&(o=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(Rr,""),c=dn(i||o?"".concat(i," ").concat(o," { ").concat(s," }"):s);a.namespace&&(c=_r(c,a.namespace));var d,f=[];return ln(c,function(e){var t=Nt(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}(u.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce(function(e,t){return t.name||cr(15),Fn(e,t.name)},5381).toString():"",d}var Ar=new Pr,Nr=zr(),Lr=t.createContext({shouldForwardProp:void 0,styleSheet:Ar,stylis:Nr}),Fr=(Lr.Consumer,t.createContext(void 0));function Dr(){return(0,t.useContext)(Lr)}function Mr(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],o=n[1],i=Dr().styleSheet,a=(0,t.useMemo)(function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,i]),l=(0,t.useMemo)(function(){return zr({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)(function(){gt()(r,e.stylisPlugins)||o(e.stylisPlugins)},[e.stylisPlugins]);var s=(0,t.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:l}},[e.shouldForwardProp,a,l]);return t.createElement(Lr.Provider,{value:s},t.createElement(Fr.Provider,{value:l},e.children))}var Ir=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Nr);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,sr(this,function(){throw cr(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=Nr),this.name+e.hash},e}(),$r=function(e){return e>="A"&&e<="Z"};function Ur(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;$r(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Br=function(e){return null==e||!1===e||""===e},Hr=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Br(i)&&(Array.isArray(i)&&i.isCss||nr(i)?r.push("".concat(Ur(o),":"),i,";"):ar(i)?r.push.apply(r,ht(ht(["".concat(o," {")],Hr(i),!1),["}"],!1)):r.push("".concat(Ur(o),": ").concat((t=o,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in gn||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Wr(e,t,n,r){return Br(e)?[]:rr(e)?[".".concat(e.styledComponentId)]:nr(e)?!nr(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Wr(e(t),t,n,r):e instanceof Ir?n?(e.inject(n,r),[e.getName(r)]):[e]:ar(e)?Hr(e):Array.isArray(e)?Array.prototype.concat.apply(En,e.map(function(e){return Wr(e,t,n,r)})):[e.toString()];var o}function qr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(nr(n)&&!rr(n))return!1}return!0}var Vr=Dn(xn),Yr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&qr(e),this.componentId=t,this.baseHash=Fn(Vr,t),this.baseStyle=n,Pr.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=or(r,this.staticRulesId);else{var o=ir(Wr(this.rules,e,t,n)),i=Nn(Fn(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}r=or(r,i),this.staticRulesId=i}else{for(var l=Fn(this.baseHash,n.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=ir(Wr(u,e,t,n));l=Fn(l,d+c),s+=d}}if(s){var f=Nn(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=or(r,f)}}return r},e}(),Kr=t.createContext(void 0);Kr.Consumer;var Qr={};new Set;function Gr(e,n,r){var o=rr(e),i=e,a=!$n(e),l=n.attrs,s=void 0===l?En:l,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":_n(e);Qr[n]=(Qr[n]||0)+1;var r="".concat(n,"-").concat(Mn(xn+n+Qr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,f=void 0===d?function(e){return $n(e)?"styled.".concat(e):"Styled(".concat(In(e),")")}(e):d,p=n.displayName&&n.componentId?"".concat(_n(n.displayName),"-").concat(n.componentId):n.componentId||u,h=o&&i.attrs?i.attrs.concat(s).filter(Boolean):s,m=n.shouldForwardProp;if(o&&i.shouldForwardProp){var g=i.shouldForwardProp;if(n.shouldForwardProp){var b=n.shouldForwardProp;m=function(e,t){return g(e,t)&&b(e,t)}}else m=g}var y=new Yr(r,p,o?i.componentStyle:void 0);function v(e,n){return function(e,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,c=e.target,u=t.useContext(Kr),d=Dr(),f=e.shouldForwardProp||d.shouldForwardProp,p=Tn(n,u,a)||Cn,h=function(e,t,n){for(var r,o=pt(pt({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var a=nr(r=e[i])?r(o):r;for(var l in a)o[l]="className"===l?or(o[l],a[l]):"style"===l?pt(pt({},o[l]),a[l]):a[l]}return t.className&&(o.className=or(o.className,t.className)),o}(o,n,p),m=h.as||c,g={};for(var b in h)void 0===h[b]||"$"===b[0]||"as"===b||"theme"===b&&h.theme===p||("forwardedAs"===b?g.as=h.forwardedAs:f&&!f(b,m)||(g[b]=h[b]));var y=function(e,t){var n=Dr();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,h),v=or(l,s);return y&&(v+=" "+y),h.className&&(v+=" "+h.className),g[$n(m)&&!Pn.has(m)?"class":"className"]=v,r&&(g.ref=r),(0,t.createElement)(m,g)}(x,e,n)}v.displayName=f;var x=t.forwardRef(v);return x.attrs=h,x.componentStyle=y,x.displayName=f,x.shouldForwardProp=m,x.foldedComponentIds=o?or(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=p,x.target=o?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)lr(e,o[r],!0);return e}({},i.defaultProps,e):e}}),sr(x,function(){return".".concat(x.styledComponentId)}),a&&tr(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Jr(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Xr=function(e){return Object.assign(e,{isCss:!0})};function Zr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(nr(e)||ar(e))return Xr(Wr(Jr(En,ht([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Wr(r):Xr(Wr(Jr(r,t)))}function eo(e,t,n){if(void 0===n&&(n=Cn),!t)throw cr(1,t);var r=function(r){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,n,Zr.apply(void 0,ht([r],o,!1)))};return r.attrs=function(r){return eo(e,t,pt(pt({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return eo(e,t,pt(pt({},n),r))},r}var to=function(e){return eo(Gr,e)},no=to;Pn.forEach(function(e){no[e]=to(e)});var ro=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=qr(e),Pr.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var o=r(ir(Wr(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Pr.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function oo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ir(Zr.apply(void 0,ht([e],t,!1))),o=Mn(r);return new Ir(o,r)}(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=wr(),r=ir([n&&'nonce="'.concat(n,'"'),"".concat(bn,'="true"'),"".concat(vn,'="').concat(xn,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw cr(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw cr(2);var r=e.instance.toString();if(!r)return[];var o=((n={})[bn]="",n[vn]=xn,n.dangerouslySetInnerHTML={__html:r},n),i=wr();return i&&(o.nonce=i),[t.createElement("style",pt({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Pr({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw cr(2);return t.createElement(Mr,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw cr(3)}})(),"__sc-".concat(bn,"__");var io=n(579);const ao=no.header`
  background: rgba(10, 15, 28, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 212, 255, 0.2);
`,lo=no.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,so=no(it)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #00d4ff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: #00a8cc;
  }

  .icon {
    font-size: 2rem;
  }
`,co=no.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${e=>e.$isOpen?"flex":"none"};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(10, 15, 28, 0.98);
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    border-bottom: 1px solid rgba(0, 212, 255, 0.2);
  }
`,uo=no(it)`
  color: ${e=>e.$isActive?"#00d4ff":"#e0e6ed"};
  text-decoration: none;
  font-weight: ${e=>e.$isActive?"600":"400"};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #00d4ff;
    background: rgba(0, 212, 255, 0.1);
  }

  ${e=>e.$isActive&&"\n    &::after {\n      content: '';\n      position: absolute;\n      bottom: -8px;\n      left: 50%;\n      transform: translateX(-50%);\n      width: 6px;\n      height: 6px;\n      background: #00d4ff;\n      border-radius: 50%;\n    }\n  "}
`,fo=no.button`
  display: none;
  background: none;
  border: none;
  color: #00d4ff;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`,po=no(it)`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0f1c;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    background: linear-gradient(135deg, #00a8cc, #007799);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
  }
`;const ho=function(){const[e,n]=(0,t.useState)(!1),r=Z(),o=e=>r.pathname===e;return(0,io.jsx)(ao,{children:(0,io.jsxs)(lo,{children:[(0,io.jsxs)(so,{to:"/",children:[(0,io.jsx)("span",{className:"icon",children:"\u26a1"}),"The Energy Museum"]}),(0,io.jsxs)(co,{$isOpen:e,children:[(0,io.jsx)(uo,{to:"/about",$isActive:o("/about"),children:"About"}),(0,io.jsx)(uo,{to:"/services",$isActive:o("/services"),children:"Services"}),(0,io.jsx)(uo,{to:"/experiences",$isActive:o("/experiences"),children:"Experiences"}),(0,io.jsx)(uo,{to:"/contact",$isActive:o("/contact"),children:"Contact"}),(0,io.jsx)(po,{to:"/donate",children:"Donate"})]}),(0,io.jsx)(fo,{onClick:()=>{n(!e)},children:"\u2630"})]})})};var mo={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},go=t.createContext&&t.createContext(mo),bo=["attr","size","title"];function yo(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function vo(){return vo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vo.apply(this,arguments)}function xo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function wo(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?xo(Object(n),!0).forEach(function(t){So(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xo(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function So(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ko(e){return e&&e.map((e,n)=>t.createElement(e.tag,wo({key:n},e.attr),ko(e.child)))}function jo(e){return n=>t.createElement(Eo,vo({attr:wo({},e.attr)},n),ko(e.child))}function Eo(e){var n=n=>{var r,{attr:o,size:i,title:a}=e,l=yo(e,bo),s=i||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",vo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,l,{className:r,style:wo(wo({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&t.createElement("title",null,a),e.children)};return void 0!==go?t.createElement(go.Consumer,null,e=>n(e)):n(mo)}function Co(e){return jo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"},child:[]},{tag:"polyline",attr:{points:"12 19 5 12 12 5"},child:[]}]})(e)}function To(e){return jo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(e)}function Po(e){return jo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"},child:[]},{tag:"path",attr:{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"},child:[]}]})(e)}function Oo(e){return jo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"},child:[]},{tag:"line",attr:{x1:"4",y1:"22",x2:"4",y2:"15"},child:[]}]})(e)}function Ro(e){return jo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"},child:[]},{tag:"path",attr:{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"},child:[]},{tag:"line",attr:{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"},child:[]}]})(e)}function _o(e){return jo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(e)}function zo(e){return jo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(e)}function Ao(e){return jo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"},child:[]}]})(e)}function No(e){return jo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"},child:[]}]})(e)}function Lo(e){return jo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(e)}function Fo(e){return jo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(e)}function Do(e){return jo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"},child:[]},{tag:"line",attr:{x1:"7",y1:"7",x2:"7.01",y2:"7"},child:[]}]})(e)}function Mo(e){return jo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"},child:[]}]})(e)}function Io(e){return jo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"},child:[]}]})(e)}function $o(e){return jo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"12",cy:"7",r:"4"},child:[]}]})(e)}function Uo(e){return jo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(e)}function Bo(e){return jo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(e)}function Ho(e){return jo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"},child:[]},{tag:"polygon",attr:{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"},child:[]}]})(e)}function Wo(e){return jo({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"},child:[]}]})(e)}const qo=no.footer`
  background: rgba(10, 15, 28, 0.95);
  border-top: 1px solid rgba(0, 212, 255, 0.2);
  padding: 3rem 0 1rem;
  margin-top: 4rem;
`,Vo=no.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,Yo=no.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`,Ko=no.div`
  h3 {
    color: #00d4ff;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  p, a {
    color: #b0b7c3;
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }

  a {
    display: block;
    transition: color 0.3s ease;
    
    &:hover {
      color: #00d4ff;
    }
  }
`,Qo=no.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    width: 40px;
    height: 40px;
    background: rgba(0, 212, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #00d4ff;
    font-size: 1.2rem;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(0, 212, 255, 0.2);
      color: #00a8cc;
      transform: translateY(-2px);
    }
  }
`,Go=no.div`
  border-top: 1px solid rgba(0, 212, 255, 0.1);
  padding-top: 1rem;
  text-align: center;
  color: #8892a6;
  font-size: 0.9rem;

  p {
    margin: 0;
  }

  a {
    color: #00d4ff;
  }
`,Jo=no.form`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;

  input {
    flex: 1;
    padding: 0.75rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(0, 212, 255, 0.3);
    border-radius: 6px;
    color: #ffffff;
    
    &::placeholder {
      color: #8892a6;
    }
    
    &:focus {
      outline: none;
      border-color: #00d4ff;
      background: rgba(255, 255, 255, 0.1);
    }
  }

  button {
    padding: 0.75rem 1rem;
    background: linear-gradient(135deg, #00d4ff, #0099cc);
    color: #0a0f1c;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: linear-gradient(135deg, #00a8cc, #007799);
      transform: translateY(-1px);
    }
  }
`;const Xo=function(){const[e,n]=(0,t.useState)(""),[r,o]=(0,t.useState)(!1),[i,a]=(0,t.useState)("");return(0,io.jsx)(qo,{children:(0,io.jsxs)(Vo,{children:[(0,io.jsxs)(Yo,{children:[(0,io.jsxs)(Ko,{children:[(0,io.jsx)("h3",{children:"About The Energy Museum"}),(0,io.jsx)("p",{children:"Discover the fascinating world of energy through immersive digital exhibitions, interactive experiences, and expert-led consultations. Join us in exploring the science that powers our world."}),(0,io.jsxs)(Qo,{children:[(0,io.jsx)("a",{href:"https://x.com/energymuseum",title:"X (formerly Twitter)",target:"_blank",rel:"noopener noreferrer",children:(0,io.jsx)(Wo,{})}),(0,io.jsx)("a",{href:"https://linkedin.com/company/energymuseum",title:"LinkedIn",target:"_blank",rel:"noopener noreferrer",children:(0,io.jsx)(_o,{})}),(0,io.jsx)("a",{href:"https://youtube.com/energymuseum",title:"YouTube",target:"_blank",rel:"noopener noreferrer",children:(0,io.jsx)(Ho,{})}),(0,io.jsx)("a",{href:"https://instagram.com/energymuseum",title:"Instagram",target:"_blank",rel:"noopener noreferrer",children:(0,io.jsx)(Ro,{})})]})]}),(0,io.jsxs)(Ko,{children:[(0,io.jsx)("h3",{children:"Explore"}),(0,io.jsx)(it,{to:"/",onClick:()=>window.scrollTo(0,0),children:"Home"}),(0,io.jsx)(it,{to:"/about",onClick:()=>window.scrollTo(0,0),children:"About Us"}),(0,io.jsx)(it,{to:"/about",onClick:()=>{setTimeout(()=>{const e=document.getElementById("our-team");e&&e.scrollIntoView({behavior:"smooth"})},100)},children:"Our Team"}),(0,io.jsx)(it,{to:"/services",onClick:()=>window.scrollTo(0,0),children:"Our Services"}),(0,io.jsx)(it,{to:"/experiences",onClick:()=>window.scrollTo(0,0),children:"Our Experiences"})]}),(0,io.jsxs)(Ko,{children:[(0,io.jsx)("h3",{children:"Support & Services"}),(0,io.jsx)(it,{to:"/contact",onClick:()=>window.scrollTo(0,0),children:"Contact Us"}),(0,io.jsx)(it,{to:"/services",onClick:()=>{setTimeout(()=>{const e=document.getElementById("pricing");e&&e.scrollIntoView({behavior:"smooth"})},100)},children:"Pricing"}),(0,io.jsx)(it,{to:"/services",onClick:()=>{setTimeout(()=>{const e=document.getElementById("how-it-works");e&&e.scrollIntoView({behavior:"smooth"})},100)},children:"How It Works"}),(0,io.jsx)(it,{to:"/forum",onClick:()=>window.scrollTo(0,0),children:"Community Forum"}),(0,io.jsx)(it,{to:"/donate",onClick:()=>window.scrollTo(0,0),children:"Donate"})]}),(0,io.jsxs)(Ko,{children:[(0,io.jsx)("h3",{children:"Stay Connected"}),(0,io.jsx)("p",{children:"Subscribe to our newsletter for the latest exhibitions and energy insights."}),(0,io.jsxs)(Jo,{onSubmit:async t=>{if(t.preventDefault(),e.trim()){o(!0),a("");try{const t=await fetch("https://theenergymuseum.com/api/newsletter.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.trim()})}),r=await t.json();r.success?(a(r.message),n("")):a(r.message||"Something went wrong. Please try again.")}catch(r){a("Unable to subscribe. Please check your connection and try again."),console.error("Newsletter subscription error:",r)}finally{o(!1)}}else a("Please enter a valid email address")},children:[(0,io.jsx)("input",{type:"email",placeholder:"Enter your email",value:e,onChange:e=>n(e.target.value),required:!0,disabled:r}),(0,io.jsx)("button",{type:"submit",disabled:r,children:r?"Subscribing...":"Subscribe"})]}),i&&(0,io.jsx)("p",{style:{color:i.includes("Thank you")?"#00d4ff":"#ff6b6b",fontSize:"0.9rem",marginTop:"0.5rem"},children:i})]})]}),(0,io.jsx)(Go,{children:(0,io.jsxs)("p",{children:["\xa9 2025 The Energy Museum, Inc. All rights reserved. |",(0,io.jsx)("a",{href:"/privacy",children:" Privacy Policy"})," |",(0,io.jsx)("a",{href:"/terms",children:" Terms of Service"})]})})]})})},Zo=oo`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,ei=oo`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,ti=no.div`
  display: grid;
  grid-template-columns: ${e=>e.$reverse?"1fr 1.2fr":"1.2fr 1fr"};
  gap: 4rem;
  align-items: center;
  margin: 6rem 0;
  opacity: 0;
  
  ${e=>e.$shouldAnimate&&Zr`
    animation: ${"left"===e.$direction?Zo:ei} 0.8s ease-out forwards;
  `}

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`,ni=no.div`
  order: ${e=>e.$reverse?2:1};
  
  @media (max-width: 968px) {
    order: 2;
  }
`,ri=no.div`
  order: ${e=>e.$reverse?1:2};
  position: relative;
  
  @media (max-width: 968px) {
    order: 1;
  }
`,oi=no.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  color: #00d4ff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  letter-spacing: 0.5px;
`,ii=no.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #00d4ff, #ffffff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`,ai=no.p`
  font-size: 1.4rem;
  color: #00d4ff;
  font-weight: 600;
  margin-bottom: 1.5rem;
  line-height: 1.4;
  font-style: italic;
`,li=no.p`
  font-size: 1.1rem;
  color: #b0b7c3;
  line-height: 1.8;
  margin-bottom: 2rem;
`,si=no.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2.5rem;
`,ci=no.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #e0e6ed;
  font-size: 0.95rem;
  
  .icon {
    color: #00d4ff;
    font-size: 1.1rem;
  }
`,ui=no(it)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0f1c;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #00a8cc, #007799);
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 212, 255, 0.4);
    
    &::before {
      left: 100%;
    }
  }
`,di=no.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: ${e=>e.$gradient};
  aspect-ratio: 16/10;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(0, 212, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(0, 212, 255, 0.5);
    transform: scale(1.02);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
`,fi=no.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  
  .icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    display: block;
  }
  
  .label {
    font-size: 1.2rem;
    font-weight: 600;
    opacity: 0.9;
  }
`,pi=no.div`
  position: absolute;
  bottom: -1rem;
  right: -1rem;
  background: rgba(0, 212, 255, 0.9);
  color: #0a0f1c;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0.2);
`;const hi=function(e){let{exhibition:t,reverse:n=!1,shouldAnimate:r=!1,direction:o="left"}=e;return(0,io.jsxs)(ti,{$reverse:n,$shouldAnimate:r,$direction:o,children:[(0,io.jsxs)(ni,{$reverse:n,children:[(0,io.jsxs)(oi,{children:[(0,io.jsx)("span",{className:"icon",children:"\ud83d\udcd6"}),"Digital Story Experience"]}),(0,io.jsx)(ii,{children:t.title}),(0,io.jsxs)(ai,{children:['"',t.hook,'"']}),(0,io.jsx)(li,{children:t.description}),(0,io.jsxs)(si,{children:[(0,io.jsxs)(ci,{children:[(0,io.jsx)("span",{className:"icon",children:"\ud83c\udfad"}),t.storyType]}),(0,io.jsxs)(ci,{children:[(0,io.jsx)("span",{className:"icon",children:"\u23f1\ufe0f"}),t.duration]}),(0,io.jsxs)(ci,{children:[(0,io.jsx)("span",{className:"icon",children:"\ud83c\udfaf"}),t.audience]})]}),(0,io.jsxs)(ui,{to:`/experiences/${t.id}`,onClick:()=>window.scrollTo(0,0),children:["Begin Your Journey",(0,io.jsx)("span",{children:"\u2192"})]})]}),(0,io.jsx)(ri,{$reverse:n,children:(0,io.jsxs)(di,{$gradient:t.gradient,children:[(0,io.jsxs)(fi,{children:[(0,io.jsx)("span",{className:"icon",children:t.icon}),(0,io.jsx)("div",{className:"label",children:"Interactive Experience"})]}),(0,io.jsx)(pi,{children:"Click to Explore"})]})})]})},mi=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{threshold:n=.1,direction:r="up",delay:o=0,rootMargin:i="0px 0px -100px 0px"}=e,[a,l]=(0,t.useState)(!1),[s,c]=(0,t.useState)(!1),u=(0,t.useRef)(null);return(0,t.useEffect)(()=>{const e=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&(l(!0),setTimeout(()=>{c(!0)},o))},{threshold:n,rootMargin:i}),t=u.current;return t&&e.observe(t),()=>{t&&e.unobserve(t)}},[n,o,i]),{ref:u,isVisible:a,shouldAnimate:s,direction:r}},gi=oo`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`,bi=oo`
  0%, 100% { box-shadow: 0 0 20px rgba(0, 212, 255, 0.3); }
  50% { box-shadow: 0 0 40px rgba(0, 212, 255, 0.6); }
`,yi=no.div`
  min-height: calc(100vh - 200px);
`,vi=no.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  background: radial-gradient(ellipse at center, rgba(0, 212, 255, 0.1) 0%, rgba(10, 15, 28, 0.9) 70%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,212,255,0.1)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
  }
`,xi=no.div`
  max-width: 800px;
  position: relative;
  z-index: 2;
`,wi=no.h1`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  background: linear-gradient(135deg, #00d4ff, #0099cc, #ffffff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
  line-height: 1.1;
`,Si=no.h2`
  font-size: clamp(1.2rem, 4vw, 2rem);
  color: #e0e6ed;
  font-weight: 300;
  margin-bottom: 2rem;
  opacity: 0.9;
`,ki=no.p`
  font-size: 1.2rem;
  color: #b0b7c3;
  margin-bottom: 3rem;
  line-height: 1.8;
`,ji=no.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`,Ei=no(it)`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0f1c;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  animation: ${bi} 3s ease-in-out infinite;

  &:hover {
    background: linear-gradient(135deg, #00a8cc, #007799);
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 212, 255, 0.4);
  }
`,Ci=no(it)`
  border: 2px solid #00d4ff;
  color: #00d4ff;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: rgba(0, 212, 255, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 212, 255, 0.2);
  }
`,Ti=no.section`
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,Pi=no.h2`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #00d4ff, #ffffff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,Oi=no.p`
  text-align: center;
  font-size: 1.3rem;
  color: #b0b7c3;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,Ri=no.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
`,_i=no.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.3s ease;
  animation: ${gi} 6s ease-in-out infinite;
  animation-delay: ${e=>e.delay||"0s"};

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(0, 212, 255, 0.4);
    box-shadow: 0 20px 40px rgba(0, 212, 255, 0.1);
  }
`,zi=no.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`,Ai=no.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #00d4ff;
`,Ni=no.p`
  color: #b0b7c3;
  line-height: 1.7;
`,Li=no.section`
  background: rgba(0, 212, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.1);
  border-radius: 20px;
  padding: 3rem 2rem;
  margin: 4rem 2rem;
  text-align: center;
`,Fi=no.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
`,Di=no.div`
  h3 {
    font-size: 3rem;
    color: #00d4ff;
    margin-bottom: 0.5rem;
  }

  p {
    color: #b0b7c3;
    font-size: 1.1rem;
  }
`,Mi=no.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`,Ii=[{id:"renewable-revolution",title:"Renewable Revolution",hook:"What if the wind could tell you its story of powering civilization?",description:"Journey through an immersive narrative that traces humanity's relationship with renewable energy. From ancient windmills grinding grain to massive offshore turbines powering cities, experience the epic transformation of how we harness nature's power.",storyType:"Historical Journey",duration:"15-20 min",audience:"All Ages",icon:"\ud83c\udf1e",gradient:"linear-gradient(135deg, #FFD700, #FFA500)",visitors:1250,rating:4.8,comments:89},{id:"climate-solutions",title:"Climate Solutions",hook:"Step into 2050 and discover how we solved the climate crisis.",description:"Experience a future-forward narrative that showcases breakthrough technologies and global collaboration. Interact with carbon capture systems, explore fusion reactors, and witness the transformation of our energy landscape through the eyes of future scientists.",storyType:"Future Simulation",duration:"25-30 min",audience:"Teen & Adult",icon:"\ud83c\udf0d",gradient:"linear-gradient(135deg, #4169E1, #1E90FF)",visitors:2100,rating:4.9,comments:287},{id:"physics-of-power",title:"The Physics of Power",hook:"See the invisible forces that power our universe come alive.",description:"Embark on a mind-bending exploration where abstract physics becomes tangible reality. Manipulate energy fields, witness quantum phenomena, and understand the fundamental laws that govern everything from lightning bolts to nuclear fusion.",storyType:"Interactive Discovery",duration:"20-25 min",audience:"Students & Adults",icon:"\u26a1",gradient:"linear-gradient(135deg, #00d4ff, #0099cc)",visitors:987,rating:4.7,comments:156}];const $i=function(){const e=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[o,i]=(0,t.useState)(new Set),[a,l]=(0,t.useState)(new Set),s=(0,t.useRef)([]);return s.current.length!==e&&(s.current=Array(e).fill().map((e,n)=>s.current[n]||t.createRef())),(0,t.useEffect)(()=>{const e=s.current.map((e,t)=>{const o=new IntersectionObserver(e=>{let[o]=e;o.isIntersecting&&(i(e=>new Set([...e,t])),setTimeout(()=>{l(e=>new Set([...e,t]))},(r.delay||0)+t*n))},{threshold:r.threshold||.1,rootMargin:r.rootMargin||"0px 0px -100px 0px"});return e.current&&o.observe(e.current),o});return()=>{e.forEach((e,t)=>{var n;null!==(n=s.current[t])&&void 0!==n&&n.current&&e.unobserve(s.current[t].current)})}},[e,n,r.delay,r.threshold,r.rootMargin]),s.current.map((e,t)=>({ref:e,isVisible:o.has(t),shouldAnimate:a.has(t),direction:t%2===0?"left":"right"}))}(Ii.length,600);return(0,io.jsxs)(yi,{children:[(0,io.jsx)(vi,{children:(0,io.jsxs)(xi,{children:[(0,io.jsx)(wi,{children:"The Energy Museum"}),(0,io.jsx)(Si,{children:"Discover the Power of Energy Through Digital Storytelling"}),(0,io.jsx)(ki,{children:"Step into a world where science meets art, where complex energy concepts come alive through immersive digital experiences. Explore cutting-edge exhibitions that make learning about energy engaging, interactive, and inspiring."}),(0,io.jsxs)(ji,{children:[(0,io.jsx)(Ei,{to:"/about",children:"\ud83d\udc65 About Us"}),(0,io.jsx)(Ci,{to:"/contact",children:"\ud83e\udd1d Contact Us"})]})]})}),(0,io.jsx)(Mi,{children:Ii.map((t,n)=>(0,io.jsx)("div",{ref:e[n].ref,children:(0,io.jsx)(hi,{exhibition:t,reverse:n%2!==0,shouldAnimate:e[n].shouldAnimate,direction:e[n].direction})},t.id))}),(0,io.jsxs)(Ti,{children:[(0,io.jsx)(Pi,{children:"Professional STEM Education Services"}),(0,io.jsx)(Oi,{children:"Transforming energy education through expert-designed field experiences, professional development, and community programs tailored to your needs"}),(0,io.jsxs)(Ri,{children:[(0,io.jsxs)(_i,{delay:"0s",children:[(0,io.jsx)(zi,{children:"\ud83d\udd2c"}),(0,io.jsx)(Ai,{children:"Field Experiences"}),(0,io.jsx)(Ni,{children:"Immerse students in hands-on engineering and design challenges with authentic energy research experiences. Our hyperlocal place-based learning programs transform field studies into engaging NGSS-aligned educational adventures."})]}),(0,io.jsxs)(_i,{delay:"0.5s",children:[(0,io.jsx)(zi,{children:"\ud83d\udc69\u200d\ud83c\udfeb"}),(0,io.jsx)(Ai,{children:"Professional Development"}),(0,io.jsx)(Ni,{children:"Empower educators with cutting-edge OpenSciEd integration training and NGSS-aligned curriculum development. Our expert-led workshops range from intensive 1-hour sessions to comprehensive 4-day professional learning programs."})]}),(0,io.jsxs)(_i,{delay:"1s",children:[(0,io.jsx)(zi,{children:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66"}),(0,io.jsx)(Ai,{children:"Community Programs"}),(0,io.jsx)(Ni,{children:"Ignite community-wide energy literacy through engaging Family & Friends STEM Nights, grant writing and implementation support, and corporate sustainability training programs designed to build lasting partnerships."})]})]}),(0,io.jsxs)(Li,{children:[(0,io.jsx)("h2",{style:{marginBottom:"2rem",color:"#00d4ff"},children:"Museum Impact"}),(0,io.jsxs)(Fi,{children:[(0,io.jsxs)(Di,{children:[(0,io.jsx)("h3",{children:"50K+"}),(0,io.jsx)("p",{children:"Visitors Engaged"})]}),(0,io.jsxs)(Di,{children:[(0,io.jsx)("h3",{children:"12"}),(0,io.jsx)("p",{children:"Digital Exhibitions"})]}),(0,io.jsxs)(Di,{children:[(0,io.jsx)("h3",{children:"200+"}),(0,io.jsx)("p",{children:"Expert Consultations"})]}),(0,io.jsxs)(Di,{children:[(0,io.jsx)("h3",{children:"95%"}),(0,io.jsx)("p",{children:"Visitor Satisfaction"})]})]})]})]})]})},Ui=no.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0f1c 0%, #1a2332 50%, #0a0f1c 100%);
  color: #ffffff;
`,Bi=no.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.02);
  }
`,Hi=no.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #00d4ff;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #00d4ff, #0099cc);
    border-radius: 2px;
  }
`,Wi=no.section`
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(10, 15, 28, 0.9)),
              url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><radialGradient id="grad"><stop offset="0%" stop-color="%2300d4ff" stop-opacity="0.1"/><stop offset="100%" stop-color="%23000" stop-opacity="0"/></radialGradient></defs><circle cx="500" cy="500" r="400" fill="url(%23grad)"/></svg>');
  background-size: cover;
  background-position: center;
  padding: 6rem 2rem 4rem;
  text-align: center;
`,qi=no.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #00d4ff, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Vi=no.p`
  font-size: 1.3rem;
  color: #b0b7c3;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`,Yi=no.div`
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 16px;
  padding: 5.5rem 3rem 3rem;
  margin: 3rem auto;
  max-width: 800px;
  text-align: center;
  position: relative;
  
  &::before {
    content: '🎯';
    font-size: 2.5rem;
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    background: transparent;
    padding: 0;
    z-index: 1;
  }
`,Ki=no.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #e0e6ed;
  font-weight: 500;
  margin: 0;
`,Qi=no.div`
  text-align: center;
`,Gi=no.div`
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  padding: 3rem;
  margin: 3rem auto;
  max-width: 900px;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`,Ji=no.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: #0a0f1c;
  font-weight: bold;
  margin: 0 auto;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    background: linear-gradient(135deg, #00d4ff, #0099cc);
    z-index: -1;
    opacity: 0.3;
  }
`,Xi=no.div`
  text-align: left;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`,Zi=no.h3`
  font-size: 2rem;
  color: #00d4ff;
  margin-bottom: 0.5rem;
`,ea=no.h4`
  font-size: 1.2rem;
  color: #b0b7c3;
  margin-bottom: 1.5rem;
  font-weight: 500;
`,ta=no.p`
  color: #e0e6ed;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,na=no.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`,ra=no.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px);
    border-color: rgba(0, 212, 255, 0.4);
    background: rgba(255, 255, 255, 0.05);
  }
`,oa=no.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #0a0f1c;
  font-weight: bold;
  margin: 0 auto 1rem;
`,ia=no.h4`
  color: #00d4ff;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`,aa=no.p`
  color: #b0b7c3;
  font-size: 0.95rem;
  margin-bottom: 1rem;
`,la=no.button`
  background: none;
  border: none;
  color: #00d4ff;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  font-size: 0.95rem;
  
  &:hover {
    text-decoration: underline;
  }
`,sa=no.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  opacity: ${e=>e.isOpen?1:0};
  visibility: ${e=>e.isOpen?"visible":"hidden"};
  transition: all 0.3s ease;
`,ca=no.div`
  background: linear-gradient(135deg, #0a0f1c, #1a2332);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 16px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  transform: ${e=>e.isOpen?"scale(1)":"scale(0.9)"};
  transition: all 0.3s ease;
`,ua=no.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #b0b7c3;
  font-size: 2rem;
  cursor: pointer;
  
  &:hover {
    color: #00d4ff;
  }
`,da=no.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #0a0f1c;
  font-weight: bold;
  margin: 0 auto 2rem;
`,fa=no.h3`
  color: #00d4ff;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  text-align: center;
`,pa=no.h4`
  color: #b0b7c3;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 500;
`,ha=no.div`
  color: #e0e6ed;
  line-height: 1.6;
  margin-bottom: 2rem;
  
  p {
    margin-bottom: 1rem;
  }
`,ma=no.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`,ga=no.a`
  color: #00d4ff;
  font-size: 1.5rem;
  text-decoration: none;
  padding: 0.75rem;
  border-radius: 50%;
  background: rgba(0, 212, 255, 0.1);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  
  &:hover {
    background: rgba(0, 212, 255, 0.2);
    color: #00a8cc;
    transform: scale(1.1) translateY(-2px);
  }
`,ba=no.div`
  width: 100%;
  max-width: 500px;
  height: 300px;
  margin: 3rem auto;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 255, 255, 0.05));
  border: 4px solid #00d4ff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00d4ff;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  padding: 2rem;
  line-height: 1.5;
`,ya=no.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,va=no.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 212, 255, 0.5);
    background: rgba(255, 255, 255, 0.08);
  }
`,xa=no.div`
  font-size: 3rem;
  font-weight: 800;
  color: #00d4ff;
  margin-bottom: 0.5rem;
`,wa=no.div`
  color: #b0b7c3;
  font-size: 1.1rem;
  font-weight: 500;
`,Sa=no.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,ka=no.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    border-color: rgba(0, 212, 255, 0.4);
  }
`,ja=no.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`,Ea=no.h4`
  color: #00d4ff;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`,Ca=no.p`
  color: #b0b7c3;
  line-height: 1.6;
`,Ta=no.div`
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
  margin: 3rem auto;
  max-width: 800px;
  
  p {
    margin-top: 1.5rem;
  }
`,Pa=no.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`,Oa=no.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  
  h5 {
    color: #00d4ff;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #b0b7c3;
    font-size: 0.9rem;
  }
`,Ra=no(it)`
  display: inline-block;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0f1c;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  margin-top: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 212, 255, 0.3);
    background: linear-gradient(135deg, #00a8cc, #007799);
  }
`,_a=no.div`
  opacity: ${e=>e.shouldAnimate?1:0};
  transform: translateY(${e=>e.shouldAnimate?"0":"30px"});
  transition: all 0.8s ease;
`;const za=function(){const[e,n]=t.useState(null),[r,o]=t.useState(!1),i=mi({threshold:.1}),a=mi({threshold:.3}),l=mi({threshold:.3}),s=mi({threshold:.3}),c=mi({threshold:.3}),u=mi({threshold:.3}),d=mi({threshold:.3});t.useEffect(()=>{window.scrollTo(0,0)},[]);const f=[{id:0,name:"Dr. Edward Cohen",title:"Founder & Chief Executive Officer",initials:"EC",email:"e.cohen@energymuseum.org",linkedin:"https://linkedin.com/in/edwardcohen",bio:["Dr. Edward Cohen, EdD, founded The Energy Museum with a revolutionary vision to democratize energy education and make complex sustainability concepts accessible to learners of all ages. With over two decades of experience in educational leadership and STEM curriculum development, Dr. Cohen has dedicated his career to transforming how we teach and learn about energy.","As Founder and Chief Executive Officer, Dr. Cohen leads our strategic vision and ensures that every program, exhibition, and initiative aligns with our mission of expanding access to quality energy literacy. His innovative approach to digital storytelling has revolutionized how educational content is delivered, making complex scientific concepts engaging and memorable for diverse learning populations.","Dr. Cohen holds an EdD in Educational Leadership from Columbia University and has been recognized nationally for his contributions to STEM education. He frequently speaks at educational conferences worldwide and has authored numerous publications on energy literacy and innovative pedagogy. His philosophy of 'lifelong learning from 2 to 102' drives our commitment to serving learners across all age groups.","Under his leadership, The Energy Museum has grown from a small curriculum development initiative to a comprehensive platform that serves over 100,000 students and educators annually. Dr. Cohen's vision continues to inspire our team to push the boundaries of what's possible in energy education and community engagement."]},{id:1,name:"Dr. Sarah Martinez",title:"Board Member & Education Director",initials:"SM",email:"s.martinez@energymuseum.org",linkedin:"https://linkedin.com/in/sarahmartinez",bio:["Dr. Sarah Martinez brings over 15 years of experience in STEM education and curriculum development. She holds a PhD in Educational Technology from Stanford University and has been instrumental in developing innovative energy literacy programs.","As Board Member and Education Director, Dr. Martinez oversees our curriculum development initiatives and ensures all programs meet the highest educational standards. Her research focuses on making complex scientific concepts accessible to diverse learning populations.","Dr. Martinez has authored numerous publications on energy education and has spoken at international conferences on sustainable education practices."]},{id:2,name:"Michael Chen",title:"Board Member & Technology Advisor",initials:"MC",email:"m.chen@energymuseum.org",twitter:"https://x.com/michaelchen_tech",linkedin:"https://linkedin.com/in/michaelchen",bio:["Michael Chen is a technology innovator and entrepreneur with a passion for educational technology. He founded two successful EdTech companies and has been recognized as a leader in digital learning platforms.","As Board Member and Technology Advisor, Michael guides our digital strategy and helps integrate cutting-edge technology into our educational programs. His expertise in user experience design ensures our digital museum platform is engaging and accessible.","Michael holds a Master's degree in Computer Science from MIT and frequently consults for educational organizations on technology integration and digital transformation."]}],p=e=>{n(e),o(!0)},h=()=>{o(!1),n(null)};return(0,io.jsxs)(Ui,{children:[(0,io.jsx)(Wi,{children:(0,io.jsxs)(_a,{ref:i.ref,shouldAnimate:i.shouldAnimate,children:[(0,io.jsx)(qi,{children:"About Us"}),(0,io.jsx)(Vi,{children:"Empowering the next generation through innovative energy education, hands-on STEM learning, and sustainable future thinking."})]})}),(0,io.jsx)(Bi,{children:(0,io.jsxs)(_a,{ref:a.ref,shouldAnimate:a.shouldAnimate,children:[(0,io.jsx)(Hi,{children:"Our Mission"}),(0,io.jsx)(Yi,{children:(0,io.jsx)(Ki,{children:"Our nonprofit's focus is on education, sustainability, and innovative pedagogy. We bridge the gap between complex energy concepts and accessible learning experiences, creating pathways for students, educators, and communities to understand and engage with the energy systems that power our world."})})]})}),(0,io.jsx)(Bi,{children:(0,io.jsx)(_a,{ref:l.ref,shouldAnimate:l.shouldAnimate,children:(0,io.jsxs)(Qi,{id:"our-team",children:[(0,io.jsx)(Hi,{children:"Our Team"}),(0,io.jsx)("p",{style:{textAlign:"center",color:"#b0b7c3",fontSize:"1.1rem",marginBottom:"3rem"},children:"Our executive leadership team guides our mission to ensure educators and students have the tools, resources, and inspiration to explore energy innovation and sustainability."}),(0,io.jsxs)(Gi,{children:[(0,io.jsx)(Ji,{children:"EC"}),(0,io.jsxs)(Xi,{children:[(0,io.jsx)(Zi,{children:"Dr. Edward Cohen"}),(0,io.jsx)(ea,{children:"Founder & Chief Executive Officer"}),(0,io.jsx)(ta,{children:"Dr. Edward Cohen, EdD, founded The Energy Museum to democratize energy education and make complex sustainability concepts accessible to learners of all ages. With decades of experience in education and STEM curriculum development, Dr. Cohen works to expand access to quality energy literacy programs that nurture innovation in every classroom and community."}),(0,io.jsx)(la,{onClick:()=>p(f[0]),children:"Learn more \u2192"})]})]}),(0,io.jsx)(na,{children:f.filter(e=>0!==e.id).map(e=>(0,io.jsxs)(ra,{onClick:()=>p(e),children:[(0,io.jsx)(oa,{children:e.initials}),(0,io.jsx)(ia,{children:e.name}),(0,io.jsx)(aa,{children:e.title}),(0,io.jsx)(la,{children:"Learn more \u2192"})]},e.id))})]})})}),(0,io.jsx)(Bi,{children:(0,io.jsxs)(_a,{ref:s.ref,shouldAnimate:s.shouldAnimate,children:[(0,io.jsx)(Hi,{children:"Our History"}),(0,io.jsxs)("div",{style:{maxWidth:"800px",margin:"0 auto",textAlign:"center"},children:[(0,io.jsx)("p",{style:{color:"#e0e6ed",fontSize:"1.1rem",lineHeight:"1.8",marginBottom:"2rem"},children:"Founded with a vision to transform how we teach and learn about energy, The Energy Museum began as a response to the growing need for comprehensive energy literacy in our schools and communities. What started as innovative curriculum development has evolved into a comprehensive platform for energy education."}),(0,io.jsxs)(ba,{children:["Historical Timeline Image",(0,io.jsx)("br",{}),"[Placeholder for Energy Museum evolution timeline]"]}),(0,io.jsx)("p",{style:{color:"#b0b7c3",fontSize:"1rem",lineHeight:"1.7"},children:"From our early days developing hands-on STEM activities to our current digital storytelling platform, we've remained committed to making energy education engaging, accessible, and impactful. Our focus on \"lifelong learning from '2 to 102'\" reflects our belief that energy literacy is essential for all ages in building a sustainable future."})]})]})}),(0,io.jsx)(Bi,{children:(0,io.jsxs)(_a,{ref:c.ref,shouldAnimate:c.shouldAnimate,children:[(0,io.jsx)(Hi,{children:"Our Impact"}),(0,io.jsxs)(ya,{children:[(0,io.jsxs)(va,{children:[(0,io.jsx)(xa,{children:"K-12"}),(0,io.jsx)(wa,{children:"Youth Programs"})]}),(0,io.jsxs)(va,{children:[(0,io.jsx)(xa,{children:"6"}),(0,io.jsx)(wa,{children:"Core Service Areas"})]}),(0,io.jsxs)(va,{children:[(0,io.jsx)(xa,{children:"\u221e"}),(0,io.jsx)(wa,{children:"Learning Opportunities"})]}),(0,io.jsxs)(va,{children:[(0,io.jsx)(xa,{children:"2-102"}),(0,io.jsx)(wa,{children:"Age Range Served"})]})]}),(0,io.jsx)("div",{style:{maxWidth:"800px",margin:"2rem auto",textAlign:"center"},children:(0,io.jsx)("p",{style:{color:"#e0e6ed",fontSize:"1.1rem",lineHeight:"1.7"},children:"Through our comprehensive programs\u2014from Family & Community STEM Nights to Corporate Education initiatives\u2014we're building a more energy-literate society. Our mobile museum experiences bring learning directly to schools and communities, while our maker camps and teacher coaching ensure sustainable impact through educator empowerment."})})]})}),(0,io.jsx)(Bi,{children:(0,io.jsxs)(_a,{ref:u.ref,shouldAnimate:u.shouldAnimate,children:[(0,io.jsx)(Hi,{children:"Our Values"}),(0,io.jsxs)(Sa,{children:[(0,io.jsxs)(ka,{children:[(0,io.jsx)(ja,{children:"\ud83c\udfaf"}),(0,io.jsx)(Ea,{children:"Educational Excellence"}),(0,io.jsx)(Ca,{children:"We believe in hands-on, standards-aligned learning that makes complex energy concepts accessible and engaging for all learners."})]}),(0,io.jsxs)(ka,{children:[(0,io.jsx)(ja,{children:"\ud83c\udf31"}),(0,io.jsx)(Ea,{children:"Sustainability Focus"}),(0,io.jsx)(Ca,{children:"Environmental stewardship guides our mission to educate about renewable energy, conservation, and climate solutions."})]}),(0,io.jsxs)(ka,{children:[(0,io.jsx)(ja,{children:"\ud83e\udd1d"}),(0,io.jsx)(Ea,{children:"Community Partnership"}),(0,io.jsx)(Ca,{children:"We work collaboratively with schools, families, and organizations to create lasting impact in energy education."})]}),(0,io.jsxs)(ka,{children:[(0,io.jsx)(ja,{children:"\ud83d\udca1"}),(0,io.jsx)(Ea,{children:"Innovation"}),(0,io.jsx)(Ca,{children:"We embrace innovative pedagogy and emerging technologies to create cutting-edge learning experiences."})]}),(0,io.jsxs)(ka,{children:[(0,io.jsx)(ja,{children:"\ud83c\udf0d"}),(0,io.jsx)(Ea,{children:"Accessibility"}),(0,io.jsx)(Ca,{children:"Energy literacy should be available to everyone\u2014from preschoolers to seniors, regardless of background or location."})]}),(0,io.jsxs)(ka,{children:[(0,io.jsx)(ja,{children:"\ud83d\ude80"}),(0,io.jsx)(Ea,{children:"Future-Ready"}),(0,io.jsx)(Ca,{children:"We prepare learners for the energy challenges and opportunities of tomorrow through forward-thinking curriculum."})]})]})]})}),(0,io.jsx)(Bi,{children:(0,io.jsx)(_a,{ref:d.ref,shouldAnimate:d.shouldAnimate,children:(0,io.jsxs)(Ta,{children:[(0,io.jsx)(Hi,{style:{marginBottom:"1rem"},children:"Discover Our Programs"}),(0,io.jsx)("p",{style:{color:"#b0b7c3",fontSize:"1.1rem",marginBottom:"2rem"},children:"From interactive family nights to corporate sustainability training, we offer comprehensive energy education solutions."}),(0,io.jsxs)(Pa,{children:[(0,io.jsxs)(Oa,{children:[(0,io.jsx)("h5",{children:"Family STEM Nights"}),(0,io.jsx)("p",{children:"Intergenerational learning experiences"})]}),(0,io.jsxs)(Oa,{children:[(0,io.jsx)("h5",{children:"Mobile Museum"}),(0,io.jsx)("p",{children:"Traveling exhibits and pop-up labs"})]}),(0,io.jsxs)(Oa,{children:[(0,io.jsx)("h5",{children:"Maker Camps"}),(0,io.jsx)("p",{children:"Seasonal hands-on engineering challenges"})]}),(0,io.jsxs)(Oa,{children:[(0,io.jsx)("h5",{children:"Teacher Coaching"}),(0,io.jsx)("p",{children:"Professional development and curriculum support"})]}),(0,io.jsxs)(Oa,{children:[(0,io.jsx)("h5",{children:"Corporate Training"}),(0,io.jsx)("p",{children:"Sustainability and energy system workshops"})]}),(0,io.jsxs)(Oa,{children:[(0,io.jsx)("h5",{children:"Assessment Services"}),(0,io.jsx)("p",{children:"Program evaluation and development support"})]})]}),(0,io.jsx)(Ra,{to:"/services",children:"Explore Our Services"})]})})}),(0,io.jsx)(sa,{isOpen:r,onClick:h,children:(0,io.jsxs)(ca,{isOpen:r,onClick:e=>e.stopPropagation(),children:[(0,io.jsx)(ua,{onClick:h,children:"\xd7"}),e&&(0,io.jsxs)(io.Fragment,{children:[(0,io.jsx)(da,{children:e.initials}),(0,io.jsx)(fa,{children:e.name}),(0,io.jsx)(pa,{children:e.title}),(0,io.jsx)(ha,{children:e.bio.map((e,t)=>(0,io.jsx)("p",{children:e},t))}),(0,io.jsxs)(ma,{children:[(0,io.jsx)(ga,{href:`mailto:${e.email}`,title:"Email",children:(0,io.jsx)(zo,{})}),e.linkedin&&(0,io.jsx)(ga,{href:e.linkedin,target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:(0,io.jsx)(_o,{})}),e.twitter&&(0,io.jsx)(ga,{href:e.twitter,target:"_blank",rel:"noopener noreferrer",title:"X (formerly Twitter)",children:(0,io.jsx)(Wo,{})})]})]})]})})]})},Aa=no.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #ccd6f6;
`,Na=no.section`
  text-align: center;
  padding: 4rem 0 6rem;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 255, 255, 0.05));
  border-radius: 20px;
  margin-bottom: 4rem;
  border: 1px solid rgba(0, 212, 255, 0.2);
`,La=no.h1`
  font-size: 4rem;
  color: #00d4ff;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`,Fa=no.p`
  font-size: 1.3rem;
  color: #b0b7c3;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
`,Da=no.section`
  padding: 4rem 0;
  border-bottom: 1px solid rgba(0, 212, 255, 0.1);
  &:last-child {
    border-bottom: none;
  }
`,Ma=no.div`
  opacity: ${e=>e.shouldAnimate?1:0};
  transform: translateY(${e=>e.shouldAnimate?"0":"30px"});
  transition: all 0.8s ease;
`,Ia=no.h2`
  color: #00d4ff;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  text-shadow: 0 0 15px rgba(0, 212, 255, 0.4);
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: #64ffda;
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`,$a=no.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Ua=no.div`
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 255, 255, 0.05));
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 16px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(0, 212, 255, 0.5);
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
  }
`,Ba=no.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,Ha=no.h3`
  color: #64ffda;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;
`,Wa=no.p`
  color: #b0b7c3;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  text-align: center;
`,qa=no.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`,Va=no.li`
  color: #ccd6f6;
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  
  &::before {
    content: '✨';
    position: absolute;
    left: 0;
    color: #64ffda;
  }
`,Ya=no.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 3rem 0;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ka=no.div`
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.1), rgba(0, 212, 255, 0.1));
  border: 2px solid rgba(100, 255, 218, 0.3);
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
    border-color: rgba(100, 255, 218, 0.5);
  }
`,Qa=no.h3`
  color: #64ffda;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,Ga=no.div`
  color: #00d4ff;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`,Ja=no.div`
  color: #b0b7c3;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,Xa=no.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  gap: 2rem;
  
  /* Ensure cards maintain consistent width */
  & > ${Ka} {
    flex: 0 0 auto;
    width: calc((100% - 4rem) / 3); /* Same width as grid cards */
  }
  
  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    
    & > ${Ka} {
      width: auto;
    }
  }
  
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    
    & > ${Ka} {
      width: auto;
    }
  }
`,Za=no.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,el=no.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  position: relative;
`,tl=no.div`
  background: linear-gradient(135deg, #00d4ff, #64ffda);
  color: #0a0f1c;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 auto 1rem;
`,nl=no.h3`
  color: #00d4ff;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`,rl=no.p`
  color: #b0b7c3;
  line-height: 1.6;
`,ol=no.div`
  background: linear-gradient(135deg, rgba(100, 255, 218, 0.1), rgba(0, 212, 255, 0.1));
  border: 1px solid rgba(100, 255, 218, 0.3);
  border-radius: 20px;
  padding: 4rem;
  text-align: center;
  margin: 4rem 0;
`,il=no.h2`
  color: #64ffda;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
`,al=no.p`
  color: #b0b7c3;
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,ll=no(it)`
  background: linear-gradient(135deg, #64ffda, #00d4ff);
  color: #0a0f1c;
  padding: 1.2rem 3rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(100, 255, 218, 0.3);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(100, 255, 218, 0.4);
    color: #0a0f1c;
    text-decoration: none;
  }
`,sl=no.div`
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 165, 0, 0.05));
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
  
  h4 {
    color: #ffd700;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: #ccd6f6;
    line-height: 1.6;
  }
`;const cl=function(){const e=mi({threshold:.1}),n=mi({threshold:.3}),r=mi({threshold:.3}),o=mi({threshold:.3}),i=mi({threshold:.3}),a=mi({threshold:.3}),l=mi({threshold:.3});return t.useEffect(()=>{window.scrollTo(0,0)},[]),(0,io.jsxs)(Aa,{children:[(0,io.jsx)(Ma,{ref:e.ref,shouldAnimate:e.shouldAnimate,children:(0,io.jsxs)(Na,{children:[(0,io.jsx)(La,{children:"Our Services"}),(0,io.jsx)(Fa,{children:"Transforming STEM education through expertly crafted field experiences, professional development, and community programs. We bring world-class energy literacy directly to your students, educators, and community."})]})}),(0,io.jsx)(Da,{children:(0,io.jsxs)(Ma,{ref:n.ref,shouldAnimate:n.shouldAnimate,children:[(0,io.jsx)(Ia,{children:"Field Experiences"}),(0,io.jsx)("div",{style:{textAlign:"center",marginBottom:"3rem"},children:(0,io.jsx)("p",{style:{color:"#e0e6ed",fontSize:"1.2rem",lineHeight:"1.8",maxWidth:"800px",margin:"0 auto"},children:"Immerse your students in hands-on energy exploration with our expertly designed field experiences. Each program is meticulously tailored to your curriculum goals and delivered by seasoned STEM educators."})}),(0,io.jsxs)($a,{children:[(0,io.jsxs)(Ua,{children:[(0,io.jsx)(Ba,{children:"\ud83d\udd2c"}),(0,io.jsx)(Ha,{children:"Engineering & Design Challenges"}),(0,io.jsx)(Wa,{children:"Transform learning through authentic engineering and design experiences where students conduct real energy research alongside experienced professionals."}),(0,io.jsxs)(qa,{children:[(0,io.jsx)(Va,{children:"Renewable energy testing stations"}),(0,io.jsx)(Va,{children:"Energy efficiency analysis labs"}),(0,io.jsx)(Va,{children:"Sustainable technology prototyping"}),(0,io.jsx)(Va,{children:"Data collection and analysis training"})]})]}),(0,io.jsxs)(Ua,{children:[(0,io.jsx)(Ba,{children:"\ud83c\udfed"}),(0,io.jsx)(Ha,{children:"Industrial Site Visits"}),(0,io.jsx)(Wa,{children:"Take learning beyond the classroom with guided tours of cutting-edge energy facilities, from solar farms to research laboratories."}),(0,io.jsxs)(qa,{children:[(0,io.jsx)(Va,{children:"Power generation facilities"}),(0,io.jsx)(Va,{children:"Green technology companies"}),(0,io.jsx)(Va,{children:"University research centers"}),(0,io.jsx)(Va,{children:"Environmental monitoring stations"})]})]}),(0,io.jsxs)(Ua,{children:[(0,io.jsx)(Ba,{children:"\ud83c\udf31"}),(0,io.jsx)(Ha,{children:"Environmental Field Studies"}),(0,io.jsx)(Wa,{children:"Connect students with nature through environmental monitoring, sustainability assessments, and ecosystem energy flow studies."}),(0,io.jsxs)(qa,{children:[(0,io.jsx)(Va,{children:"Ecosystem energy mapping"}),(0,io.jsx)(Va,{children:"Environmental impact assessments"}),(0,io.jsx)(Va,{children:"Biodiversity and energy relationships"}),(0,io.jsx)(Va,{children:"Climate change monitoring"})]})]})]}),(0,io.jsxs)(sl,{children:[(0,io.jsx)("h4",{children:"\ud83c\udfaf Completely Customizable Experiences"}),(0,io.jsx)("p",{children:"Every field experience is expertly crafted to align with your specific learning objectives, grade levels, and curriculum standards. Our team travels to your location or coordinates seamless transportation to premier facilities nationwide."})]})]})}),(0,io.jsx)(Da,{children:(0,io.jsxs)(Ma,{ref:r.ref,shouldAnimate:r.shouldAnimate,children:[(0,io.jsx)(Ia,{children:"Professional Development"}),(0,io.jsx)("div",{style:{textAlign:"center",marginBottom:"3rem"},children:(0,io.jsx)("p",{style:{color:"#e0e6ed",fontSize:"1.2rem",lineHeight:"1.8",maxWidth:"800px",margin:"0 auto"},children:"Empower your educators with cutting-edge training that transforms how they teach energy science. Our comprehensive programs build confidence, competence, and passion for innovative STEM instruction."})}),(0,io.jsxs)($a,{children:[(0,io.jsxs)(Ua,{children:[(0,io.jsx)(Ba,{children:"\ud83d\udc69\u200d\ud83c\udfeb"}),(0,io.jsx)(Ha,{children:"OpenSciEd Integration"}),(0,io.jsx)(Wa,{children:"Master the art of OpenSciEd implementation with intensive training programs designed to revolutionize your science curriculum delivery."}),(0,io.jsxs)(qa,{children:[(0,io.jsx)(Va,{children:"1-hour to 4-day workshops"}),(0,io.jsx)(Va,{children:"Unit-specific training modules"}),(0,io.jsx)(Va,{children:"Virtual coaching support"}),(0,io.jsx)(Va,{children:"Assessment alignment strategies"})]})]}),(0,io.jsxs)(Ua,{children:[(0,io.jsx)(Ba,{children:"\ud83d\udee0\ufe0f"}),(0,io.jsx)(Ha,{children:"Curriculum Customization"}),(0,io.jsx)(Wa,{children:"Transform your existing curriculum with our expert guidance in adapting and enhancing content for maximum student engagement and learning outcomes."}),(0,io.jsxs)(qa,{children:[(0,io.jsx)(Va,{children:"NGSS-aligned lesson development"}),(0,io.jsx)(Va,{children:"Assessment design and rubrics"}),(0,io.jsx)(Va,{children:"Hands-on activity integration"}),(0,io.jsx)(Va,{children:"Technology integration strategies"})]})]}),(0,io.jsxs)(Ua,{children:[(0,io.jsx)(Ba,{children:"\ud83c\udf93"}),(0,io.jsx)(Ha,{children:"Advanced STEM Techniques"}),(0,io.jsx)(Wa,{children:"Elevate your teaching with advanced pedagogical strategies, cutting-edge technology integration, and research-based instructional methods."}),(0,io.jsxs)(qa,{children:[(0,io.jsx)(Va,{children:"Inquiry-based learning mastery"}),(0,io.jsx)(Va,{children:"Advanced pedagogical techniques"}),(0,io.jsx)(Va,{children:"Project-based learning design"}),(0,io.jsx)(Va,{children:"Student-centered assessment"})]})]})]}),(0,io.jsxs)(sl,{children:[(0,io.jsx)("h4",{children:"\ud83d\udcc8 Measurable Impact Guaranteed"}),(0,io.jsx)("p",{children:"Our professional development programs are backed by rigorous evaluation methods that demonstrate tangible improvements in teacher confidence, student engagement, and learning outcomes. We tailor every session to your specific needs and travel to your location for maximum convenience and impact."})]})]})}),(0,io.jsx)(Da,{children:(0,io.jsxs)(Ma,{ref:o.ref,shouldAnimate:o.shouldAnimate,children:[(0,io.jsx)(Ia,{children:"Community Programs"}),(0,io.jsx)("div",{style:{textAlign:"center",marginBottom:"3rem"},children:(0,io.jsx)("p",{style:{color:"#e0e6ed",fontSize:"1.2rem",lineHeight:"1.8",maxWidth:"800px",margin:"0 auto"},children:"Ignite community-wide passion for energy literacy through engaging programs that bring families, organizations, and citizens together in meaningful STEM learning."})}),(0,io.jsxs)($a,{children:[(0,io.jsxs)(Ua,{children:[(0,io.jsx)(Ba,{children:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66"}),(0,io.jsx)(Ha,{children:"Family & Friends STEM Nights"}),(0,io.jsx)(Wa,{children:"Create unforgettable intergenerational learning experiences that strengthen family bonds while exploring the fascinating world of energy science."}),(0,io.jsxs)(qa,{children:[(0,io.jsx)(Va,{children:"Interactive energy experiments"}),(0,io.jsx)(Va,{children:"Multi-generational activities"}),(0,io.jsx)(Va,{children:"Take-home energy kits"}),(0,io.jsx)(Va,{children:"Community science challenges"})]})]}),(0,io.jsxs)(Ua,{children:[(0,io.jsx)(Ba,{children:"\ud83d\ude90"}),(0,io.jsx)(Ha,{children:"Mobile Museum Experiences"}),(0,io.jsx)(Wa,{children:"Bring world-class museum experiences directly to your community with our traveling exhibitions and interactive energy laboratories."}),(0,io.jsxs)(qa,{children:[(0,io.jsx)(Va,{children:"Pop-up energy exhibitions"}),(0,io.jsx)(Va,{children:"Portable laboratory setups"}),(0,io.jsx)(Va,{children:"Community science fairs"}),(0,io.jsx)(Va,{children:"Public demonstration events"})]})]}),(0,io.jsxs)(Ua,{children:[(0,io.jsx)(Ba,{children:"\ud83c\udfe2"}),(0,io.jsx)(Ha,{children:"Corporate & Government"}),(0,io.jsx)(Wa,{children:"Elevate organizational sustainability through comprehensive energy literacy programs designed for adult learners and professional teams."}),(0,io.jsxs)(qa,{children:[(0,io.jsx)(Va,{children:"Sustainability workshops"}),(0,io.jsx)(Va,{children:"Grant writing & implementation"}),(0,io.jsx)(Va,{children:"Climate literacy programs"}),(0,io.jsx)(Va,{children:"Team-building STEM challenges"})]})]})]}),(0,io.jsxs)(sl,{children:[(0,io.jsx)("h4",{children:"\ud83c\udf1f Community-Centered Approach"}),(0,io.jsx)("p",{children:"Every community program is carefully crafted to reflect local energy challenges, cultural values, and learning preferences. We work closely with community leaders to ensure maximum relevance and impact, bringing our mobile resources directly to you."})]})]})}),(0,io.jsx)(Da,{children:(0,io.jsxs)(Ma,{ref:i.ref,shouldAnimate:i.shouldAnimate,children:[(0,io.jsx)(Ia,{id:"pricing",children:"Pricing"}),(0,io.jsx)("div",{style:{textAlign:"center",marginBottom:"3rem"},children:(0,io.jsx)("p",{style:{color:"#e0e6ed",fontSize:"1.2rem",lineHeight:"1.8",maxWidth:"800px",margin:"0 auto"},children:"Transparent, value-driven pricing that makes world-class energy education accessible to organizations of all sizes. Every package includes travel and can be completely customized to your needs."})}),(0,io.jsxs)(Ya,{children:[(0,io.jsxs)(Ka,{children:[(0,io.jsx)(Qa,{children:"Grant Execution"}),(0,io.jsx)(Ga,{children:"$300"}),(0,io.jsxs)(Ja,{children:[(0,io.jsx)("strong",{children:"Hourly Writing & Implementation"}),(0,io.jsx)("br",{}),"\u2022 Grant research & identification",(0,io.jsx)("br",{}),"\u2022 Professional grant writing",(0,io.jsx)("br",{}),"\u2022 Application management",(0,io.jsx)("br",{}),"\u2022 Implementation support",(0,io.jsx)("br",{}),"\u2022 Reporting assistance"]})]}),(0,io.jsxs)(Ka,{children:[(0,io.jsx)(Qa,{children:"Unit-Specific Virtual PD"}),(0,io.jsx)(Ga,{children:"$450-2,250"}),(0,io.jsxs)(Ja,{children:[(0,io.jsxs)("strong",{children:["90-minute Sessions",(0,io.jsx)("br",{}),"(1-5 Units)"]}),(0,io.jsx)("br",{}),"\u2022 Virtual coaching support",(0,io.jsx)("br",{}),"\u2022 Unit-specific training",(0,io.jsx)("br",{}),"\u2022 Key points walkthrough",(0,io.jsx)("br",{}),"\u2022 Implementation guidance",(0,io.jsx)("br",{}),"\u2022 Assessment strategies"]})]}),(0,io.jsxs)(Ka,{children:[(0,io.jsx)(Qa,{children:"Mini Museum Visit"}),(0,io.jsx)(Ga,{children:"$750"}),(0,io.jsxs)(Ja,{children:[(0,io.jsx)("strong",{children:"3-hour Hands-on Exhibits"}),(0,io.jsx)("br",{}),"\u2022 Up to 100 students",(0,io.jsx)("br",{}),"\u2022 Interactive energy stations",(0,io.jsx)("br",{}),"\u2022 Expert facilitation",(0,io.jsx)("br",{}),"\u2022 Educational materials",(0,io.jsx)("br",{}),"\u2022 Pre/post-visit support"]})]}),(0,io.jsxs)(Ka,{children:[(0,io.jsx)(Qa,{children:"STEM Night"}),(0,io.jsx)(Ga,{children:"$950"}),(0,io.jsxs)(Ja,{children:[(0,io.jsx)("strong",{children:"2-hour Event with Stations"}),(0,io.jsx)("br",{}),"\u2022 Multiple learning stations",(0,io.jsx)("br",{}),"\u2022 Professional facilitators",(0,io.jsx)("br",{}),"\u2022 Take-home materials",(0,io.jsx)("br",{}),"\u2022 Family engagement activities",(0,io.jsx)("br",{}),"\u2022 Community building focus"]})]}),(0,io.jsxs)(Ka,{children:[(0,io.jsx)(Qa,{children:"PD Workshop"}),(0,io.jsx)(Ga,{children:"$1,200-2,400"}),(0,io.jsxs)(Ja,{children:[(0,io.jsx)("strong",{children:"Half- to Full-day Interactive Training"}),(0,io.jsx)("br",{}),"\u2022 Up to 30 instructors",(0,io.jsx)("br",{}),"\u2022 Standards-aligned content",(0,io.jsx)("br",{}),"\u2022 PBL and hands-on activities",(0,io.jsx)("br",{}),"\u2022 Implementation strategies",(0,io.jsx)("br",{}),"\u2022 Follow-up resources"]})]}),(0,io.jsxs)(Ka,{children:[(0,io.jsx)(Qa,{children:"Maker Camp (1 Week)"}),(0,io.jsx)(Ga,{children:"$3,500"}),(0,io.jsxs)(Ja,{children:[(0,io.jsx)("strong",{children:"Design-based Learning"}),(0,io.jsx)("br",{}),"\u2022 15-25 youth participants",(0,io.jsx)("br",{}),"\u2022 Engineering challenges",(0,io.jsx)("br",{}),"\u2022 Energy project creation",(0,io.jsx)("br",{}),"\u2022 Innovation methodology",(0,io.jsx)("br",{}),"\u2022 Portfolio development"]})]}),(0,io.jsxs)(Xa,{children:[(0,io.jsxs)(Ka,{children:[(0,io.jsxs)(Qa,{children:["OpenSciEd Launch",(0,io.jsx)("br",{}),"PL Training"]}),(0,io.jsx)(Ga,{children:"$5-10,000"}),(0,io.jsxs)(Ja,{children:[(0,io.jsxs)("strong",{children:["Full-day Intensive Workshop",(0,io.jsx)("br",{}),"(2-4 Days)"]}),(0,io.jsx)("br",{}),"\u2022 1 certified, in-person trainer",(0,io.jsx)("br",{}),"\u2022 Complete curriculum implementation",(0,io.jsx)("br",{}),"\u2022 All materials included",(0,io.jsx)("br",{}),"\u2022 Assessment alignment",(0,io.jsx)("br",{}),"\u2022 Year-long support package"]})]}),(0,io.jsxs)(Ka,{children:[(0,io.jsx)(Qa,{children:"Custom Solutions"}),(0,io.jsx)(Ga,{children:"Custom Pricing"}),(0,io.jsxs)(Ja,{children:[(0,io.jsx)("strong",{children:"Tailored to Your Needs"}),(0,io.jsx)("br",{}),"\u2022 Corporate training programs",(0,io.jsx)("br",{}),"\u2022 Multi-site implementations",(0,io.jsx)("br",{}),"\u2022 Extended partnerships",(0,io.jsx)("br",{}),"\u2022 Specialized workshops",(0,io.jsx)("br",{}),"\u2022 Long-term consulting"]})]})]})]}),(0,io.jsxs)(sl,{children:[(0,io.jsx)("h4",{children:"\ud83d\udc8e Premium Value Promise"}),(0,io.jsx)("p",{children:"Every investment includes expert facilitation, premium materials, comprehensive support, and nationwide travel. We believe transformative education should be accessible, which is why we offer flexible payment options and sliding scale pricing for qualifying nonprofit organizations."})]})]})}),(0,io.jsx)(Da,{children:(0,io.jsxs)(Ma,{ref:a.ref,shouldAnimate:a.shouldAnimate,children:[(0,io.jsx)(Ia,{id:"how-it-works",children:"How It Works"}),(0,io.jsx)("div",{style:{textAlign:"center",marginBottom:"3rem"},children:(0,io.jsx)("p",{style:{color:"#e0e6ed",fontSize:"1.2rem",lineHeight:"1.8",maxWidth:"800px",margin:"0 auto"},children:"Our streamlined process ensures your experience exceeds expectations from initial consultation through long-term follow-up support."})}),(0,io.jsxs)(Za,{children:[(0,io.jsxs)(el,{children:[(0,io.jsx)(tl,{children:"1"}),(0,io.jsx)(nl,{children:"Discovery Consultation"}),(0,io.jsx)(rl,{children:"We begin with a comprehensive consultation to understand your specific needs, goals, and context. This ensures every program is perfectly tailored to your situation."})]}),(0,io.jsxs)(el,{children:[(0,io.jsx)(tl,{children:"2"}),(0,io.jsx)(nl,{children:"Custom Program Design"}),(0,io.jsx)(rl,{children:"Our expert team crafts a bespoke program that aligns with your objectives, timeline, and budget. Every detail is customized to maximize impact and engagement."})]}),(0,io.jsxs)(el,{children:[(0,io.jsx)(tl,{children:"3"}),(0,io.jsx)(nl,{children:"Seamless Delivery"}),(0,io.jsx)(rl,{children:"We handle all logistics and travel to your location with premium materials and expert facilitators, ensuring a flawless, high-impact learning experience."})]}),(0,io.jsxs)(el,{children:[(0,io.jsx)(tl,{children:"4"}),(0,io.jsx)(nl,{children:"Ongoing Support"}),(0,io.jsx)(rl,{children:"Your relationship with us extends beyond the program with follow-up coaching, resource sharing, and continued consultation to ensure lasting impact."})]})]}),(0,io.jsxs)(sl,{children:[(0,io.jsx)("h4",{children:"\u26a1 Rapid Response Capability"}),(0,io.jsx)("p",{children:"Need urgent support? We can mobilize our team within 48 hours for emergency professional development, crisis curriculum support, or time-sensitive field experiences. Our nationwide network ensures we're always ready to serve your community."})]})]})}),(0,io.jsx)(Ma,{ref:l.ref,shouldAnimate:l.shouldAnimate,children:(0,io.jsxs)(ol,{children:[(0,io.jsx)(il,{children:"Ready to Elevate Your STEM Education?"}),(0,io.jsx)(al,{children:"Join hundreds of educators, administrators, and community leaders who have revolutionized their approach to energy literacy through our expert services. Let's craft an experience that ignites passion and drives real learning outcomes."}),(0,io.jsx)(ll,{to:"/contact",children:"Start Your Transformation Today"}),(0,io.jsx)("div",{style:{marginTop:"2rem",color:"#64ffda",fontSize:"1rem"},children:(0,io.jsx)("p",{children:"\u2728 Free consultation \u2022 \ud83c\udf0d Nationwide travel \u2022 \ud83c\udfaf Completely customizable"})})]})})]})};function ul(e,t){return function(){return e.apply(t,arguments)}}const{toString:dl}=Object.prototype,{getPrototypeOf:fl}=Object,{iterator:pl,toStringTag:hl}=Symbol,ml=(gl=Object.create(null),e=>{const t=dl.call(e);return gl[t]||(gl[t]=t.slice(8,-1).toLowerCase())});var gl;const bl=e=>(e=e.toLowerCase(),t=>ml(t)===e),yl=e=>t=>typeof t===e,{isArray:vl}=Array,xl=yl("undefined");function wl(e){return null!==e&&!xl(e)&&null!==e.constructor&&!xl(e.constructor)&&jl(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Sl=bl("ArrayBuffer");const kl=yl("string"),jl=yl("function"),El=yl("number"),Cl=e=>null!==e&&"object"===typeof e,Tl=e=>{if("object"!==ml(e))return!1;const t=fl(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(hl in e)&&!(pl in e)},Pl=bl("Date"),Ol=bl("File"),Rl=bl("Blob"),_l=bl("FileList"),zl=bl("URLSearchParams"),[Al,Nl,Ll,Fl]=["ReadableStream","Request","Response","Headers"].map(bl);function Dl(e,t){let n,r,{allOwnKeys:o=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),vl(e))for(n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else{if(wl(e))return;const r=o?Object.getOwnPropertyNames(e):Object.keys(e),i=r.length;let a;for(n=0;n<i;n++)a=r[n],t.call(null,e[a],a,e)}}function Ml(e,t){if(wl(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const Il="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global,$l=e=>!xl(e)&&e!==Il;const Ul=(Bl="undefined"!==typeof Uint8Array&&fl(Uint8Array),e=>Bl&&e instanceof Bl);var Bl;const Hl=bl("HTMLFormElement"),Wl=(e=>{let{hasOwnProperty:t}=e;return(e,n)=>t.call(e,n)})(Object.prototype),ql=bl("RegExp"),Vl=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Dl(n,(n,o)=>{let i;!1!==(i=t(n,o,e))&&(r[o]=i||n)}),Object.defineProperties(e,r)};const Yl=bl("AsyncFunction"),Kl=(Ql="function"===typeof setImmediate,Gl=jl(Il.postMessage),Ql?setImmediate:Gl?((e,t)=>(Il.addEventListener("message",n=>{let{source:r,data:o}=n;r===Il&&o===e&&t.length&&t.shift()()},!1),n=>{t.push(n),Il.postMessage(e,"*")}))(`axios@${Math.random()}`,[]):e=>setTimeout(e));var Ql,Gl;const Jl="undefined"!==typeof queueMicrotask?queueMicrotask.bind(Il):"undefined"!==typeof process&&process.nextTick||Kl,Xl={isArray:vl,isArrayBuffer:Sl,isBuffer:wl,isFormData:e=>{let t;return e&&("function"===typeof FormData&&e instanceof FormData||jl(e.append)&&("formdata"===(t=ml(e))||"object"===t&&jl(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Sl(e.buffer),t},isString:kl,isNumber:El,isBoolean:e=>!0===e||!1===e,isObject:Cl,isPlainObject:Tl,isEmptyObject:e=>{if(!Cl(e)||wl(e))return!1;try{return 0===Object.keys(e).length&&Object.getPrototypeOf(e)===Object.prototype}catch(Gf){return!1}},isReadableStream:Al,isRequest:Nl,isResponse:Ll,isHeaders:Fl,isUndefined:xl,isDate:Pl,isFile:Ol,isBlob:Rl,isRegExp:ql,isFunction:jl,isStream:e=>Cl(e)&&jl(e.pipe),isURLSearchParams:zl,isTypedArray:Ul,isFileList:_l,forEach:Dl,merge:function e(){const{caseless:t}=$l(this)&&this||{},n={},r=(r,o)=>{const i=t&&Ml(n,o)||o;Tl(n[i])&&Tl(r)?n[i]=e(n[i],r):Tl(r)?n[i]=e({},r):vl(r)?n[i]=r.slice():n[i]=r};for(let o=0,i=arguments.length;o<i;o++)arguments[o]&&Dl(arguments[o],r);return n},extend:function(e,t,n){let{allOwnKeys:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return Dl(t,(t,r)=>{n&&jl(t)?e[r]=ul(t,n):e[r]=t},{allOwnKeys:r}),e},trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,i,a;const l={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],r&&!r(a,e,t)||l[a]||(t[a]=e[a],l[a]=!0);e=!1!==n&&fl(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:ml,kindOfTest:bl,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(vl(e))return e;let t=e.length;if(!El(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[pl]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:Hl,hasOwnProperty:Wl,hasOwnProp:Wl,reduceDescriptors:Vl,freezeMethods:e=>{Vl(e,(t,n)=>{if(jl(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];jl(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))})},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach(e=>{n[e]=!0})};return vl(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),noop:()=>{},toFiniteNumber:(e,t)=>null!=e&&Number.isFinite(e=+e)?e:t,findKey:Ml,global:Il,isContextDefined:$l,isSpecCompliantForm:function(e){return!!(e&&jl(e.append)&&"FormData"===e[hl]&&e[pl])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(Cl(e)){if(t.indexOf(e)>=0)return;if(wl(e))return e;if(!("toJSON"in e)){t[r]=e;const o=vl(e)?[]:{};return Dl(e,(e,t)=>{const i=n(e,r+1);!xl(i)&&(o[t]=i)}),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:Yl,isThenable:e=>e&&(Cl(e)||jl(e))&&jl(e.then)&&jl(e.catch),setImmediate:Kl,asap:Jl,isIterable:e=>null!=e&&jl(e[pl])};function Zl(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}Xl.inherits(Zl,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Xl.toJSONObject(this.config),code:this.code,status:this.status}}});const es=Zl.prototype,ts={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ts[e]={value:e}}),Object.defineProperties(Zl,ts),Object.defineProperty(es,"isAxiosError",{value:!0}),Zl.from=(e,t,n,r,o,i)=>{const a=Object.create(es);return Xl.toFlatObject(e,a,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e),Zl.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const ns=Zl;function rs(e){return Xl.isPlainObject(e)||Xl.isArray(e)}function os(e){return Xl.endsWith(e,"[]")?e.slice(0,-2):e}function is(e,t,n){return e?e.concat(t).map(function(e,t){return e=os(e),!n&&t?"["+e+"]":e}).join(n?".":""):t}const as=Xl.toFlatObject(Xl,{},null,function(e){return/^is[A-Z]/.test(e)});const ls=function(e,t,n){if(!Xl.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=Xl.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!Xl.isUndefined(t[e])})).metaTokens,o=n.visitor||c,i=n.dots,a=n.indexes,l=(n.Blob||"undefined"!==typeof Blob&&Blob)&&Xl.isSpecCompliantForm(t);if(!Xl.isFunction(o))throw new TypeError("visitor must be a function");function s(e){if(null===e)return"";if(Xl.isDate(e))return e.toISOString();if(Xl.isBoolean(e))return e.toString();if(!l&&Xl.isBlob(e))throw new ns("Blob is not supported. Use a Buffer instead.");return Xl.isArrayBuffer(e)||Xl.isTypedArray(e)?l&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function c(e,n,o){let l=e;if(e&&!o&&"object"===typeof e)if(Xl.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(Xl.isArray(e)&&function(e){return Xl.isArray(e)&&!e.some(rs)}(e)||(Xl.isFileList(e)||Xl.endsWith(n,"[]"))&&(l=Xl.toArray(e)))return n=os(n),l.forEach(function(e,r){!Xl.isUndefined(e)&&null!==e&&t.append(!0===a?is([n],r,i):null===a?n:n+"[]",s(e))}),!1;return!!rs(e)||(t.append(is(o,n,i),s(e)),!1)}const u=[],d=Object.assign(as,{defaultVisitor:c,convertValue:s,isVisitable:rs});if(!Xl.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!Xl.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),Xl.forEach(n,function(n,i){!0===(!(Xl.isUndefined(n)||null===n)&&o.call(t,n,Xl.isString(i)?i.trim():i,r,d))&&e(n,r?r.concat(i):[i])}),u.pop()}}(e),t};function ss(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function cs(e,t){this._pairs=[],e&&ls(e,this,t)}const us=cs.prototype;us.append=function(e,t){this._pairs.push([e,t])},us.toString=function(e){const t=e?function(t){return e.call(this,t,ss)}:ss;return this._pairs.map(function(e){return t(e[0])+"="+t(e[1])},"").join("&")};const ds=cs;function fs(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ps(e,t,n){if(!t)return e;const r=n&&n.encode||fs;Xl.isFunction(n)&&(n={serialize:n});const o=n&&n.serialize;let i;if(i=o?o(t,n):Xl.isURLSearchParams(t)?t.toString():new ds(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}const hs=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Xl.forEach(this.handlers,function(t){null!==t&&e(t)})}},ms={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},gs={isBrowser:!0,classes:{URLSearchParams:"undefined"!==typeof URLSearchParams?URLSearchParams:ds,FormData:"undefined"!==typeof FormData?FormData:null,Blob:"undefined"!==typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},bs="undefined"!==typeof window&&"undefined"!==typeof document,ys="object"===typeof navigator&&navigator||void 0,vs=bs&&(!ys||["ReactNative","NativeScript","NS"].indexOf(ys.product)<0),xs="undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts,ws=bs&&window.location.href||"http://localhost",Ss={...e,...gs};const ks=function(e){function t(e,n,r,o){let i=e[o++];if("__proto__"===i)return!0;const a=Number.isFinite(+i),l=o>=e.length;if(i=!i&&Xl.isArray(r)?r.length:i,l)return Xl.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!a;r[i]&&Xl.isObject(r[i])||(r[i]=[]);return t(e,n,r[i],o)&&Xl.isArray(r[i])&&(r[i]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}(r[i])),!a}if(Xl.isFormData(e)&&Xl.isFunction(e.entries)){const n={};return Xl.forEachEntry(e,(e,r)=>{t(function(e){return Xl.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0])}(e),r,n,0)}),n}return null};const js={transitional:ms,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=Xl.isObject(e);o&&Xl.isHTMLForm(e)&&(e=new FormData(e));if(Xl.isFormData(e))return r?JSON.stringify(ks(e)):e;if(Xl.isArrayBuffer(e)||Xl.isBuffer(e)||Xl.isStream(e)||Xl.isFile(e)||Xl.isBlob(e)||Xl.isReadableStream(e))return e;if(Xl.isArrayBufferView(e))return e.buffer;if(Xl.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return ls(e,new Ss.classes.URLSearchParams,{visitor:function(e,t,n,r){return Ss.isNode&&Xl.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...t})}(e,this.formSerializer).toString();if((i=Xl.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return ls(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(Xl.isString(e))try{return(t||JSON.parse)(e),Xl.trim(e)}catch(Gf){if("SyntaxError"!==Gf.name)throw Gf}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||js.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(Xl.isResponse(e)||Xl.isReadableStream(e))return e;if(e&&Xl.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(Gf){if(n){if("SyntaxError"===Gf.name)throw ns.from(Gf,ns.ERR_BAD_RESPONSE,this,null,this.response);throw Gf}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ss.classes.FormData,Blob:Ss.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Xl.forEach(["delete","get","head","post","put","patch"],e=>{js.headers[e]={}});const Es=js,Cs=Xl.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ts=Symbol("internals");function Ps(e){return e&&String(e).trim().toLowerCase()}function Os(e){return!1===e||null==e?e:Xl.isArray(e)?e.map(Os):String(e)}function Rs(e,t,n,r,o){return Xl.isFunction(r)?r.call(this,t,n):(o&&(t=n),Xl.isString(t)?Xl.isString(r)?-1!==t.indexOf(r):Xl.isRegExp(r)?r.test(t):void 0:void 0)}class _s{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=Ps(t);if(!o)throw new Error("header name must be a non-empty string");const i=Xl.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=Os(e))}const i=(e,t)=>Xl.forEach(e,(e,n)=>o(e,n,t));if(Xl.isPlainObject(e)||e instanceof this.constructor)i(e,t);else if(Xl.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()))i((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach(function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&Cs[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t})(e),t);else if(Xl.isObject(e)&&Xl.isIterable(e)){let n,r,o={};for(const t of e){if(!Xl.isArray(t))throw TypeError("Object iterator must return a key-value pair");o[r=t[0]]=(n=o[r])?Xl.isArray(n)?[...n,t[1]]:[n,t[1]]:t[1]}i(o,t)}else null!=e&&o(t,e,n);return this}get(e,t){if(e=Ps(e)){const n=Xl.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(Xl.isFunction(t))return t.call(this,e,n);if(Xl.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Ps(e)){const n=Xl.findKey(this,e);return!(!n||void 0===this[n]||t&&!Rs(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=Ps(e)){const o=Xl.findKey(n,e);!o||t&&!Rs(0,n[o],o,t)||(delete n[o],r=!0)}}return Xl.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!Rs(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return Xl.forEach(this,(r,o)=>{const i=Xl.findKey(n,o);if(i)return t[i]=Os(r),void delete t[o];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}(o):String(o).trim();a!==o&&delete t[o],t[a]=Os(r),n[a]=!0}),this}concat(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.constructor.concat(this,...t)}toJSON(e){const t=Object.create(null);return Xl.forEach(this,(n,r)=>{null!=n&&!1!==n&&(t[r]=e&&Xl.isArray(n)?n.join(", "):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(e=>{let[t,n]=e;return t+": "+n}).join("\n")}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e){const t=new this(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return r.forEach(e=>t.set(e)),t}static accessor(e){const t=(this[Ts]=this[Ts]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=Ps(e);t[r]||(!function(e,t){const n=Xl.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})})}(n,e),t[r]=!0)}return Xl.isArray(e)?e.forEach(r):r(e),this}}_s.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),Xl.reduceDescriptors(_s.prototype,(e,t)=>{let{value:n}=e,r=t[0].toUpperCase()+t.slice(1);return{get:()=>n,set(e){this[r]=e}}}),Xl.freezeMethods(_s);const zs=_s;function As(e,t){const n=this||Es,r=t||n,o=zs.from(r.headers);let i=r.data;return Xl.forEach(e,function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Ns(e){return!(!e||!e.__CANCEL__)}function Ls(e,t,n){ns.call(this,null==e?"canceled":e,ns.ERR_CANCELED,t,n),this.name="CanceledError"}Xl.inherits(Ls,ns,{__CANCEL__:!0});const Fs=Ls;function Ds(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new ns("Request failed with status code "+n.status,[ns.ERR_BAD_REQUEST,ns.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}const Ms=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,a=0;return t=void 0!==t?t:1e3,function(l){const s=Date.now(),c=r[a];o||(o=s),n[i]=l,r[i]=s;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),s-o<t)return;const f=c&&s-c;return f?Math.round(1e3*d/f):void 0}};const Is=function(e,t){let n,r,o=0,i=1e3/t;const a=function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();o=i,n=null,r&&(clearTimeout(r),r=null),e(...t)};return[function(){const e=Date.now(),t=e-o;for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];t>=i?a(s,e):(n=s,r||(r=setTimeout(()=>{r=null,a(n)},i-t)))},()=>n&&a(n)]},$s=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3,r=0;const o=Ms(50,250);return Is(n=>{const i=n.loaded,a=n.lengthComputable?n.total:void 0,l=i-r,s=o(l);r=i;e({loaded:i,total:a,progress:a?i/a:void 0,bytes:l,rate:s||void 0,estimated:s&&a&&i<=a?(a-i)/s:void 0,event:n,lengthComputable:null!=a,[t?"download":"upload"]:!0})},n)},Us=(e,t)=>{const n=null!=e;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Bs=e=>function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Xl.asap(()=>e(...n))},Hs=Ss.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Ss.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Ss.origin),Ss.navigator&&/(msie|trident)/i.test(Ss.navigator.userAgent)):()=>!0,Ws=Ss.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const a=[e+"="+encodeURIComponent(t)];Xl.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),Xl.isString(r)&&a.push("path="+r),Xl.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function qs(e,t,n){let r=!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);return e&&(r||0==n)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}const Vs=e=>e instanceof zs?{...e}:e;function Ys(e,t){t=t||{};const n={};function r(e,t,n,r){return Xl.isPlainObject(e)&&Xl.isPlainObject(t)?Xl.merge.call({caseless:r},e,t):Xl.isPlainObject(t)?Xl.merge({},t):Xl.isArray(t)?t.slice():t}function o(e,t,n,o){return Xl.isUndefined(t)?Xl.isUndefined(e)?void 0:r(void 0,e,0,o):r(e,t,0,o)}function i(e,t){if(!Xl.isUndefined(t))return r(void 0,t)}function a(e,t){return Xl.isUndefined(t)?Xl.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function l(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const s={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(e,t,n)=>o(Vs(e),Vs(t),0,!0)};return Xl.forEach(Object.keys({...e,...t}),function(r){const i=s[r]||o,a=i(e[r],t[r],r);Xl.isUndefined(a)&&i!==l||(n[r]=a)}),n}const Ks=e=>{const t=Ys({},e);let n,{data:r,withXSRFToken:o,xsrfHeaderName:i,xsrfCookieName:a,headers:l,auth:s}=t;if(t.headers=l=zs.from(l),t.url=ps(qs(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),s&&l.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):""))),Xl.isFormData(r))if(Ss.hasStandardBrowserEnv||Ss.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if(!1!==(n=l.getContentType())){const[e,...t]=n?n.split(";").map(e=>e.trim()).filter(Boolean):[];l.setContentType([e||"multipart/form-data",...t].join("; "))}if(Ss.hasStandardBrowserEnv&&(o&&Xl.isFunction(o)&&(o=o(t)),o||!1!==o&&Hs(t.url))){const e=i&&a&&Ws.read(a);e&&l.set(i,e)}return t},Qs="undefined"!==typeof XMLHttpRequest&&function(e){return new Promise(function(t,n){const r=Ks(e);let o=r.data;const i=zs.from(r.headers).normalize();let a,l,s,c,u,{responseType:d,onUploadProgress:f,onDownloadProgress:p}=r;function h(){c&&c(),u&&u(),r.cancelToken&&r.cancelToken.unsubscribe(a),r.signal&&r.signal.removeEventListener("abort",a)}let m=new XMLHttpRequest;function g(){if(!m)return;const r=zs.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders());Ds(function(e){t(e),h()},function(e){n(e),h()},{data:d&&"text"!==d&&"json"!==d?m.response:m.responseText,status:m.status,statusText:m.statusText,headers:r,config:e,request:m}),m=null}m.open(r.method.toUpperCase(),r.url,!0),m.timeout=r.timeout,"onloadend"in m?m.onloadend=g:m.onreadystatechange=function(){m&&4===m.readyState&&(0!==m.status||m.responseURL&&0===m.responseURL.indexOf("file:"))&&setTimeout(g)},m.onabort=function(){m&&(n(new ns("Request aborted",ns.ECONNABORTED,e,m)),m=null)},m.onerror=function(){n(new ns("Network Error",ns.ERR_NETWORK,e,m)),m=null},m.ontimeout=function(){let t=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const o=r.transitional||ms;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new ns(t,o.clarifyTimeoutError?ns.ETIMEDOUT:ns.ECONNABORTED,e,m)),m=null},void 0===o&&i.setContentType(null),"setRequestHeader"in m&&Xl.forEach(i.toJSON(),function(e,t){m.setRequestHeader(t,e)}),Xl.isUndefined(r.withCredentials)||(m.withCredentials=!!r.withCredentials),d&&"json"!==d&&(m.responseType=r.responseType),p&&([s,u]=$s(p,!0),m.addEventListener("progress",s)),f&&m.upload&&([l,c]=$s(f),m.upload.addEventListener("progress",l),m.upload.addEventListener("loadend",c)),(r.cancelToken||r.signal)&&(a=t=>{m&&(n(!t||t.type?new Fs(null,e,m):t),m.abort(),m=null)},r.cancelToken&&r.cancelToken.subscribe(a),r.signal&&(r.signal.aborted?a():r.signal.addEventListener("abort",a)));const b=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(r.url);b&&-1===Ss.protocols.indexOf(b)?n(new ns("Unsupported protocol "+b+":",ns.ERR_BAD_REQUEST,e)):m.send(o||null)})},Gs=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let n,r=new AbortController;const o=function(e){if(!n){n=!0,a();const t=e instanceof Error?e:this.reason;r.abort(t instanceof ns?t:new Fs(t instanceof Error?t.message:t))}};let i=t&&setTimeout(()=>{i=null,o(new ns(`timeout ${t} of ms exceeded`,ns.ETIMEDOUT))},t);const a=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(o):e.removeEventListener("abort",o)}),e=null)};e.forEach(e=>e.addEventListener("abort",o));const{signal:l}=r;return l.unsubscribe=()=>Xl.asap(a),l}},Js=function*(e,t){let n=e.byteLength;if(!t||n<t)return void(yield e);let r,o=0;for(;o<n;)r=o+t,yield e.slice(o,r),o=r},Xs=async function*(e){if(e[Symbol.asyncIterator])return void(yield*e);const t=e.getReader();try{for(;;){const{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Zs=(e,t,n,r)=>{const o=async function*(e,t){for await(const n of Xs(e))yield*Js(n,t)}(e,t);let i,a=0,l=e=>{i||(i=!0,r&&r(e))};return new ReadableStream({async pull(e){try{const{done:t,value:r}=await o.next();if(t)return l(),void e.close();let i=r.byteLength;if(n){let e=a+=i;n(e)}e.enqueue(new Uint8Array(r))}catch(t){throw l(t),t}},cancel:e=>(l(e),o.return())},{highWaterMark:2})},ec="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,tc=ec&&"function"===typeof ReadableStream,nc=ec&&("function"===typeof TextEncoder?(rc=new TextEncoder,e=>rc.encode(e)):async e=>new Uint8Array(await new Response(e).arrayBuffer()));var rc;const oc=function(e){try{for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return!!e(...n)}catch(Gf){return!1}},ic=tc&&oc(()=>{let e=!1;const t=new Request(Ss.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),ac=tc&&oc(()=>Xl.isReadableStream(new Response("").body)),lc={stream:ac&&(e=>e.body)};var sc;ec&&(sc=new Response,["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!lc[e]&&(lc[e]=Xl.isFunction(sc[e])?t=>t[e]():(t,n)=>{throw new ns(`Response type '${e}' is not supported`,ns.ERR_NOT_SUPPORT,n)})}));const cc=async(e,t)=>{const n=Xl.toFiniteNumber(e.getContentLength());return null==n?(async e=>{if(null==e)return 0;if(Xl.isBlob(e))return e.size;if(Xl.isSpecCompliantForm(e)){const t=new Request(Ss.origin,{method:"POST",body:e});return(await t.arrayBuffer()).byteLength}return Xl.isArrayBufferView(e)||Xl.isArrayBuffer(e)?e.byteLength:(Xl.isURLSearchParams(e)&&(e+=""),Xl.isString(e)?(await nc(e)).byteLength:void 0)})(t):n},uc=ec&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:a,onDownloadProgress:l,onUploadProgress:s,responseType:c,headers:u,withCredentials:d="same-origin",fetchOptions:f}=Ks(e);c=c?(c+"").toLowerCase():"text";let p,h=Gs([o,i&&i.toAbortSignal()],a);const m=h&&h.unsubscribe&&(()=>{h.unsubscribe()});let g;try{if(s&&ic&&"get"!==n&&"head"!==n&&0!==(g=await cc(u,r))){let e,n=new Request(t,{method:"POST",body:r,duplex:"half"});if(Xl.isFormData(r)&&(e=n.headers.get("content-type"))&&u.setContentType(e),n.body){const[e,t]=Us(g,$s(Bs(s)));r=Zs(n.body,65536,e,t)}}Xl.isString(d)||(d=d?"include":"omit");const o="credentials"in Request.prototype;p=new Request(t,{...f,signal:h,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:o?d:void 0});let i=await fetch(p,f);const a=ac&&("stream"===c||"response"===c);if(ac&&(l||a&&m)){const e={};["status","statusText","headers"].forEach(t=>{e[t]=i[t]});const t=Xl.toFiniteNumber(i.headers.get("content-length")),[n,r]=l&&Us(t,$s(Bs(l),!0))||[];i=new Response(Zs(i.body,65536,n,()=>{r&&r(),m&&m()}),e)}c=c||"text";let b=await lc[Xl.findKey(lc,c)||"text"](i,e);return!a&&m&&m(),await new Promise((t,n)=>{Ds(t,n,{data:b,headers:zs.from(i.headers),status:i.status,statusText:i.statusText,config:e,request:p})})}catch(b){if(m&&m(),b&&"TypeError"===b.name&&/Load failed|fetch/i.test(b.message))throw Object.assign(new ns("Network Error",ns.ERR_NETWORK,e,p),{cause:b.cause||b});throw ns.from(b,b&&b.code,e,p)}}),dc={http:null,xhr:Qs,fetch:uc};Xl.forEach(dc,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(Gf){}Object.defineProperty(e,"adapterName",{value:t})}});const fc=e=>`- ${e}`,pc=e=>Xl.isFunction(e)||null===e||!1===e,hc=e=>{e=Xl.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){let t;if(n=e[i],r=n,!pc(n)&&(r=dc[(t=String(n)).toLowerCase()],void 0===r))throw new ns(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+i]=r}if(!r){const e=Object.entries(o).map(e=>{let[t,n]=e;return`adapter ${t} `+(!1===n?"is not supported by the environment":"is not available in the build")});let n=t?e.length>1?"since :\n"+e.map(fc).join("\n"):" "+fc(e[0]):"as no adapter specified";throw new ns("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r};function mc(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Fs(null,e)}function gc(e){mc(e),e.headers=zs.from(e.headers),e.data=As.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return hc(e.adapter||Es.adapter)(e).then(function(t){return mc(e),t.data=As.call(e,e.transformResponse,t),t.headers=zs.from(t.headers),t},function(t){return Ns(t)||(mc(e),t&&t.response&&(t.response.data=As.call(e,e.transformResponse,t.response),t.response.headers=zs.from(t.response.headers))),Promise.reject(t)})}const bc="1.11.0",yc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{yc[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const vc={};yc.transitional=function(e,t,n){function r(e,t){return"[Axios v"+bc+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new ns(r(o," has been removed"+(t?" in "+t:"")),ns.ERR_DEPRECATED);return t&&!vc[o]&&(vc[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}},yc.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};const xc={assertOptions:function(e,t,n){if("object"!==typeof e)throw new ns("options must be an object",ns.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const t=e[i],n=void 0===t||a(t,i,e);if(!0!==n)throw new ns("option "+i+" must be "+n,ns.ERR_BAD_OPTION_VALUE);continue}if(!0!==n)throw new ns("Unknown option "+i,ns.ERR_BAD_OPTION)}},validators:yc},wc=xc.validators;class Sc{constructor(e){this.defaults=e||{},this.interceptors={request:new hs,response:new hs}}async request(e,t){try{return await this._request(e,t)}catch(n){if(n instanceof Error){let e={};Error.captureStackTrace?Error.captureStackTrace(e):e=new Error;const t=e.stack?e.stack.replace(/^.+\n/,""):"";try{n.stack?t&&!String(n.stack).endsWith(t.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+t):n.stack=t}catch(Gf){}}throw n}}_request(e,t){"string"===typeof e?(t=t||{}).url=e:t=e||{},t=Ys(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&xc.assertOptions(n,{silentJSONParsing:wc.transitional(wc.boolean),forcedJSONParsing:wc.transitional(wc.boolean),clarifyTimeoutError:wc.transitional(wc.boolean)},!1),null!=r&&(Xl.isFunction(r)?t.paramsSerializer={serialize:r}:xc.assertOptions(r,{encode:wc.function,serialize:wc.function},!0)),void 0!==t.allowAbsoluteUrls||(void 0!==this.defaults.allowAbsoluteUrls?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),xc.assertOptions(t,{baseUrl:wc.spelling("baseURL"),withXsrfToken:wc.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&Xl.merge(o.common,o[t.method]);o&&Xl.forEach(["delete","get","head","post","put","patch","common"],e=>{delete o[e]}),t.headers=zs.concat(i,o);const a=[];let l=!0;this.interceptors.request.forEach(function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(l=l&&e.synchronous,a.unshift(e.fulfilled,e.rejected))});const s=[];let c;this.interceptors.response.forEach(function(e){s.push(e.fulfilled,e.rejected)});let u,d=0;if(!l){const e=[gc.bind(this),void 0];for(e.unshift(...a),e.push(...s),u=e.length,c=Promise.resolve(t);d<u;)c=c.then(e[d++],e[d++]);return c}u=a.length;let f=t;for(d=0;d<u;){const e=a[d++],t=a[d++];try{f=e(f)}catch(p){t.call(this,p);break}}try{c=gc.call(this,f)}catch(p){return Promise.reject(p)}for(d=0,u=s.length;d<u;)c=c.then(s[d++],s[d++]);return c}getUri(e){return ps(qs((e=Ys(this.defaults,e)).baseURL,e.url,e.allowAbsoluteUrls),e.params,e.paramsSerializer)}}Xl.forEach(["delete","get","head","options"],function(e){Sc.prototype[e]=function(t,n){return this.request(Ys(n||{},{method:e,url:t,data:(n||{}).data}))}}),Xl.forEach(["post","put","patch"],function(e){function t(t){return function(n,r,o){return this.request(Ys(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Sc.prototype[e]=t(),Sc.prototype[e+"Form"]=t(!0)});const kc=Sc;class jc{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(e){t=e});const n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t;const r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,o){n.reason||(n.reason=new Fs(e,r,o),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new jc(function(t){e=t}),cancel:e}}}const Ec=jc;const Cc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Cc).forEach(e=>{let[t,n]=e;Cc[n]=t});const Tc=Cc;const Pc=function e(t){const n=new kc(t),r=ul(kc.prototype.request,n);return Xl.extend(r,kc.prototype,n,{allOwnKeys:!0}),Xl.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Ys(t,n))},r}(Es);Pc.Axios=kc,Pc.CanceledError=Fs,Pc.CancelToken=Ec,Pc.isCancel=Ns,Pc.VERSION=bc,Pc.toFormData=ls,Pc.AxiosError=ns,Pc.Cancel=Pc.CanceledError,Pc.all=function(e){return Promise.all(e)},Pc.spread=function(e){return function(t){return e.apply(null,t)}},Pc.isAxiosError=function(e){return Xl.isObject(e)&&!0===e.isAxiosError},Pc.mergeConfig=Ys,Pc.AxiosHeaders=zs,Pc.formToJSON=e=>ks(Xl.isHTMLForm(e)?new FormData(e):e),Pc.getAdapter=hc,Pc.HttpStatusCode=Tc,Pc.default=Pc;const Oc=Pc,Rc=Oc.create({baseURL:"https://theenergymuseum.com/backend",timeout:1e4,headers:{"Content-Type":"application/json",Accept:"application/json"}}),_c=Oc.create({baseURL:"https://theenergymuseum.com/api",timeout:1e4,headers:{"Content-Type":"application/json",Accept:"application/json"}});Rc.interceptors.request.use(e=>{var t;return console.log(`API Request: ${null===(t=e.method)||void 0===t?void 0:t.toUpperCase()} ${e.url}`),e},e=>(console.error("API Request Error:",e),Promise.reject(e))),Rc.interceptors.response.use(e=>{var t;return console.log(`API Response: ${e.status} ${null===(t=e.config)||void 0===t?void 0:t.url}`),e},e=>{var t;return console.error("API Response Error:",null===(t=e.response)||void 0===t?void 0:t.status,e.message),Promise.reject(e)});const zc=async(e,t)=>{try{return(await _c.post(`/comments.php/${e}`,t)).data}catch(n){throw console.error("Error submitting comment:",n),n}},Ac=async e=>{try{return(await _c.get(`/comments.php/${e}`)).data}catch(t){throw console.error("Error fetching comments:",t),t}},Nc=async e=>{try{return(await _c.post("/grav-integration.php/submit-topic",e)).data}catch(t){throw console.error("Error creating forum topic:",t),t}},Lc=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all";try{0;const t="all"===e?"/exhibits.php?action=get_exhibits":`/exhibits.php?action=get_exhibits&category=${e}`,n=await _c.get(t);return n.data&&Array.isArray(n.data)?{success:!0,exhibits:n.data}:n.data&&void 0!==n.data.success?n.data:{success:!0,exhibits:n.data||[]}}catch(t){throw console.error("Error fetching exhibits:",t),t}},Fc=async()=>{try{0;const e=await _c.get("/exhibits.php?action=get_categories");return e.data&&Array.isArray(e.data)?{success:!0,categories:e.data}:e.data&&void 0!==e.data.success?e.data:{success:!0,categories:e.data||[]}}catch(e){throw console.error("Error fetching exhibit categories:",e),e}},Dc=no.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  // Mobile optimization
  @media (max-width: 768px) {
    padding: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem;
  }
`,Mc=no.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem 0;
`,Ic=no.h1`
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  
  // Mobile responsiveness
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
`,$c=no.p`
  font-size: 1.3rem;
  color: #b0b7c3;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
`,Uc=no.div`
  margin-bottom: 3rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  
  // Mobile optimization for filters
  @media (max-width: 768px) {
    gap: 0.75rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
    justify-content: center;
  }
`,Bc=no.button`
  background: ${e=>e.$active?"linear-gradient(135deg, #00d4ff, #0099cc)":"rgba(255, 255, 255, 0.05)"};
  color: ${e=>e.$active?"#0a0f1c":"#e0e6ed"};
  border: ${e=>e.$active?"none":"1px solid rgba(0, 212, 255, 0.3)"};
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  white-space: nowrap;
  
  // Accessibility improvements
  &:focus {
    outline: 2px solid #00d4ff;
    outline-offset: 2px;
  }
  
  // Mobile optimization
  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }

  &:hover {
    background: ${e=>e.$active?"linear-gradient(135deg, #00a8cc, #007799)":"rgba(0, 212, 255, 0.1)"};
    transform: translateY(-2px);
  }
  
  // Reduce motion for accessibility
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`,Hc=no.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  
  // Mobile optimization for grid
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
  }
`,Wc=no.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(0, 212, 255, 0.4);
    box-shadow: 0 20px 40px rgba(0, 212, 255, 0.1);
  }
`,qc=no.div`
  height: 200px;
  background: ${e=>e.$gradient||"linear-gradient(135deg, #00d4ff, #0099cc)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);
  }

  span {
    position: relative;
    z-index: 1;
  }
`,Vc=no.div`
  padding: 2rem;
`,Yc=no.h3`
  font-size: 1.5rem;
  color: #00d4ff;
  margin-bottom: 1rem;
`,Kc=no.p`
  color: #b0b7c3;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,Qc=no.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`,Gc=no.span`
  background: rgba(0, 212, 255, 0.1);
  color: #00d4ff;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`,Jc=no.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Xc=no(it)`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0f1c;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #00a8cc, #007799);
    transform: translateY(-2px);
  }
`,Zc=no.div`
  color: #8892a6;
  font-size: 0.9rem;
  
  span {
    margin-right: 1rem;
  }
`,eu=no.div`
  text-align: center;
  padding: 1.5rem;
  background: rgba(0, 212, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  margin: 2rem 0;
  
  @media (max-width: 480px) {
    padding: 1rem;
    margin: 1rem 0;
  }
`,tu=no.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`,nu=no.h3`
  color: #00d4ff;
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
`,ru=no.p`
  color: #b0b7c3;
  margin: 0 0 0.5rem 0;
  font-size: 0.95rem;
`,ou=no.p`
  color: #8a9ba8;
  margin: 0;
  font-size: 0.85rem;
  font-style: italic;
`,iu=no.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #b0b7c3;
  
  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`,au=no.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`,lu=no.h3`
  margin: 0 0 0.5rem 0;
  color: #e0e6ed;
`,su=no.p`
  margin: 0;
  font-size: 0.9rem;
`,cu=[{id:"renewable-revolution",title:"Renewable Revolution",description:"Journey through an immersive historical narrative exploring humanity's relationship with renewable energy, from ancient windmills to futuristic solar arrays.",tags:["Historical Journey","Interactive Timeline","Real-World Application","Wind Energy","Solar Technology"],learningApproach:["narrative-driven","virtual","place-based"],icon:"\ud83c\udf1e",gradient:"linear-gradient(135deg, #FFD700, #FFA500)",visitors:1250,comments:89,difficulty:"Beginner",storyType:"Historical Narrative",duration:"15-20 min"},{id:"physics-of-power",title:"The Physics of Power",description:"Embark on a mind-bending interactive journey where abstract physics becomes tangible reality. Manipulate energy fields and witness quantum phenomena in action.",tags:["Scientific Problem","Virtual Reality","Innovation Challenge","Quantum Physics","Energy Laws"],learningApproach:["problem-based","virtual"],icon:"\u26a1",gradient:"linear-gradient(135deg, #00d4ff, #0099cc)",visitors:987,comments:156,difficulty:"Advanced",storyType:"Interactive Discovery",duration:"20-25 min"},{id:"energy-society",title:"Energy and Society",description:"Follow the dramatic narrative of how energy transformed human civilization, from steam engines to smart cities, through the eyes of historical figures.",tags:["Historical Drama","Community Investigation","Real-World Application","Social Impact","Urban Planning"],learningApproach:["narrative-driven","place-based"],icon:"\ud83c\udfd8\ufe0f",gradient:"linear-gradient(135deg, #32CD32, #228B22)",visitors:1450,comments:203,difficulty:"Intermediate",storyType:"Historical Drama",duration:"18-22 min"},{id:"climate-solutions",title:"Climate Solutions",description:"Experience a future-forward simulation where you collaborate with scientists in 2050 to witness breakthrough technologies that solved the climate crisis.",tags:["Challenge-Based","Online Simulation","Research Investigation","NSF Funded","Climate Action"],learningApproach:["problem-based","virtual","grant-supported"],icon:"\ud83c\udf0d",gradient:"linear-gradient(135deg, #4169E1, #1E90FF)",visitors:2100,comments:287,difficulty:"Intermediate",storyType:"Future Simulation",duration:"25-30 min"},{id:"battery-science",title:"The Science of Energy Storage",description:"Dive deep into the molecular world of batteries through a detective story, solving the mystery of how energy gets trapped and released.",tags:["Scientific Mystery","Research Investigation","Virtual Reality","STEM Grant","Battery Technology"],learningApproach:["narrative-driven","problem-based","virtual","grant-supported"],icon:"\ud83d\udd0b",gradient:"linear-gradient(135deg, #FF6347, #FF4500)",visitors:876,comments:124,difficulty:"Advanced",storyType:"Scientific Mystery",duration:"22-28 min"},{id:"smart-homes",title:"Smart Homes & Energy Efficiency",description:"Experience a day in the life of an AI-powered smart home, learning how intelligent systems optimize energy use through interactive household scenarios.",tags:["Real-World Application","Interactive Timeline","Engineering Design","Title I","Smart Technology"],learningApproach:["place-based","virtual","problem-based","grant-supported"],icon:"\ud83c\udfe0",gradient:"linear-gradient(135deg, #9370DB, #8A2BE2)",visitors:1320,comments:167,difficulty:"Beginner",storyType:"Interactive Simulation",duration:"12-15 min"}],uu=[{id:"all",label:"All Learning Experiences"},{id:"place-based",label:"Place-Based"},{id:"virtual",label:"Virtual"},{id:"problem-based",label:"Problem-Based"},{id:"narrative-driven",label:"Narrative-Driven"},{id:"grant-supported",label:"Grant Supported"}];const du=function(){const[e,n]=(0,t.useState)("all"),[r,o]=(0,t.useState)([]),[i,a]=(0,t.useState)([]),[l,s]=(0,t.useState)(!0),[c,u]=(0,t.useState)(null);return(0,t.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,t.useEffect)(()=>{(async()=>{try{const e=await Fc();e.success?a(e.categories):a(uu)}catch(c){console.error("Error loading categories:",c),a(uu)}})()},[]),(0,t.useEffect)(()=>{(async()=>{s(!0),u(null);try{const t=await Lc(e);if(t&&t.success&&t.exhibits)o(t.exhibits),console.log(`\u2705 Loaded ${t.exhibits.length} exhibits for category: ${e}`);else{if(!t||!1!==t.success)throw new Error("Invalid response format from API");{u(t.error||"Using fallback data");const n="all"===e?cu:cu.filter(t=>t.learningApproach&&t.learningApproach.includes(e));o(n),console.log(`\ud83d\udd27 Using fallback data: ${n.length} exhibits for category: ${e}`)}}}catch(c){console.error("\u274c Error loading exhibitions:",c),u(c.message);const n="all"===e?cu:cu.filter(t=>t.learningApproach&&t.learningApproach.includes(e));o(n),console.log(`\ud83d\udd04 Fallback to local data: ${n.length} exhibits`)}finally{s(!1)}})()},[e]),(0,io.jsxs)(Dc,{role:"main","aria-label":"Learning Experiences",children:[(0,io.jsxs)(Mc,{children:[(0,io.jsx)(Ic,{children:"Experiences"}),(0,io.jsx)($c,{children:"Explore our immersive collection of energy-focused exhibits designed for diverse learning approaches, from place-based field experiences to virtual simulations."})]}),(0,io.jsx)(Uc,{role:"group","aria-label":"Filter exhibitions by learning approach",children:i.map(t=>(0,io.jsx)(Bc,{$active:e===t.id,onClick:()=>n(t.id),"aria-pressed":e===t.id,"aria-label":`Filter by ${t.label}${e===t.id?" (currently selected)":""}`,children:t.label},t.id))}),c&&(0,io.jsxs)(eu,{children:[(0,io.jsx)(tu,{children:"\u26a0\ufe0f"}),(0,io.jsx)(nu,{children:"Notice"}),(0,io.jsx)(ru,{children:c}),(0,io.jsx)(ou,{children:"Using locally stored data. All functionality remains available."})]}),l?(0,io.jsxs)(iu,{children:[(0,io.jsx)(au,{children:"\u26a1"}),(0,io.jsx)(lu,{children:"Loading Exhibits..."}),(0,io.jsx)(su,{children:"Fetching the latest learning experiences"})]}):(0,io.jsx)(Hc,{children:r.map(e=>(0,io.jsxs)(Wc,{children:[(0,io.jsx)(qc,{$gradient:e.gradient,children:(0,io.jsx)("span",{children:e.icon})}),(0,io.jsxs)(Vc,{children:[(0,io.jsx)(Yc,{children:e.title}),(0,io.jsx)(Kc,{children:e.description}),(0,io.jsx)(Qc,{children:e.tags.map(e=>(0,io.jsx)(Gc,{children:e},e))}),(0,io.jsxs)(Jc,{children:[(0,io.jsx)(Xc,{to:`/experiences/${e.id}`,children:"Explore Exhibit"}),(0,io.jsxs)(Zc,{children:[(0,io.jsxs)("span",{children:["\ud83d\udc65 ",e.visitors]}),(0,io.jsxs)("span",{children:["\ud83d\udcac ",e.comments]})]})]})]})]},e.id))})]})},fu=no.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  margin: 3rem 0;
`,pu=no.h3`
  color: #00d4ff;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
`,hu=no.form`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(0, 212, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
`,mu=no.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,gu=no.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,bu=no.label`
  color: #e0e6ed;
  font-weight: 500;
  font-size: 0.95rem;
`,yu=no.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 8px;
  padding: 0.75rem;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &::placeholder {
    color: #8892a6;
  }

  &:focus {
    outline: none;
    border-color: #00d4ff;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
  }
`,vu=no.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 8px;
  padding: 0.75rem;
  color: #ffffff;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &::placeholder {
    color: #8892a6;
  }

  &:focus {
    outline: none;
    border-color: #00d4ff;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
  }
`,xu=no.button`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0f1c;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #00a8cc, #007799);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,wu=no.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Su=no.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(0, 212, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(0, 212, 255, 0.2);
    background: rgba(255, 255, 255, 0.03);
  }
`,ku=no.div`
  display: flex;
  justify-content: between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`,ju=no.div`
  color: #00d4ff;
  font-weight: 600;
  font-size: 1.1rem;
`,Eu=no.div`
  color: #8892a6;
  font-size: 0.9rem;
`,Cu=no.div`
  color: #e0e6ed;
  line-height: 1.6;
  word-wrap: break-word;
`,Tu=no.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #8892a6;
  font-style: italic;
`,Pu=no.div`
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.3);
  color: #ff6b6b;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`,Ou=no.div`
  background: rgba(81, 207, 102, 0.1);
  border: 1px solid rgba(81, 207, 102, 0.3);
  color: #51cf66;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`,Ru=no.div`
  text-align: center;
  padding: 3rem 2rem;
  color: #8892a6;
  
  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    opacity: 0.5;
  }
  
  h4 {
    color: #b0b7c3;
    margin-bottom: 0.5rem;
  }
`;const _u=function(e){let{exhibitionId:n,exhibitionTitle:r}=e;const[o,i]=(0,t.useState)([]),[a,l]=(0,t.useState)(!0),[s,c]=(0,t.useState)({name:"",email:"",comment:""}),[u,d]=(0,t.useState)(!1),{submit:f,loading:p,error:h}=((e,n,r)=>{const[o,i]=(0,t.useState)(!1),[a,l]=(0,t.useState)(null);return{submit:async t=>{try{i(!0),l(null);const r=await e(t);return n&&n(r),r}catch(o){const e=(e=>{var t;return e.response?{message:(null===(t=e.response.data)||void 0===t?void 0:t.message)||"Server error occurred",status:e.response.status,type:"server_error"}:e.request?{message:"Unable to connect to server. Please check your internet connection.",type:"network_error"}:{message:e.message||"An unexpected error occurred",type:"unknown_error"}})(o);throw l(e),r&&r(e),e}finally{i(!1)}},loading:o,error:a}})(e=>zc(n,e),e=>{i(t=>[e.comment,...t]),c({name:"",email:"",comment:""}),d(!0),setTimeout(()=>d(!1),5e3)});(0,t.useEffect)(()=>{(async()=>{try{l(!0);const e=await Ac(n);i(e.comments||[])}catch(e){console.error("Error loading comments:",e)}finally{l(!1)}})()},[n]);const m=e=>{c({...s,[e.target.name]:e.target.value})};return(0,io.jsxs)(fu,{children:[(0,io.jsxs)(pu,{children:[(0,io.jsx)("span",{children:"\ud83d\udcac"}),"Visitor Stories & Reflections"]}),(0,io.jsxs)("p",{style:{color:"#b0b7c3",marginBottom:"2rem",lineHeight:1.6},children:['Share your thoughts about "',r,'" and connect with other visitors. What stories or insights did this exhibition inspire?']}),(0,io.jsxs)(hu,{onSubmit:async e=>{e.preventDefault(),s.name.trim()&&s.comment.trim()&&await f(s)},children:[(0,io.jsx)("h4",{style:{color:"#00d4ff",marginBottom:"1.5rem"},children:"Share Your Story"}),h&&(0,io.jsxs)(Pu,{children:["Error submitting comment: ",h.message]}),u&&(0,io.jsx)(Ou,{children:"Thank you for sharing! Your story has been added to the conversation."}),(0,io.jsxs)(mu,{children:[(0,io.jsxs)(gu,{children:[(0,io.jsx)(bu,{htmlFor:"name",children:"Your Name *"}),(0,io.jsx)(yu,{type:"text",id:"name",name:"name",value:s.name,onChange:m,placeholder:"Enter your name",required:!0})]}),(0,io.jsxs)(gu,{children:[(0,io.jsx)(bu,{htmlFor:"email",children:"Email (optional)"}),(0,io.jsx)(yu,{type:"email",id:"email",name:"email",value:s.email,onChange:m,placeholder:"your.email@example.com"})]})]}),(0,io.jsxs)(gu,{children:[(0,io.jsx)(bu,{htmlFor:"comment",children:"Your Story or Reflection *"}),(0,io.jsx)(vu,{id:"comment",name:"comment",value:s.comment,onChange:m,placeholder:"What did you discover in this exhibition? How did it make you think about energy differently? Share your insights...",required:!0})]}),(0,io.jsxs)(xu,{type:"submit",disabled:p||!s.name.trim()||!s.comment.trim(),children:[p?"Sharing...":"Share Your Story",(0,io.jsx)("span",{children:"\ud83d\udcdd"})]})]}),(0,io.jsxs)("div",{children:[(0,io.jsxs)("h4",{style:{color:"#00d4ff",marginBottom:"1.5rem"},children:["Visitor Stories (",o.length,")"]}),a?(0,io.jsx)(Tu,{children:"Loading visitor stories..."}):0===o.length?(0,io.jsxs)(Ru,{children:[(0,io.jsx)("div",{className:"icon",children:"\ud83d\udcad"}),(0,io.jsx)("h4",{children:"Be the First to Share"}),(0,io.jsx)("p",{children:"No stories have been shared yet for this exhibition. Be the first to share your insights and inspire others!"})]}):(0,io.jsx)(wu,{children:o.map(e=>{return(0,io.jsxs)(Su,{children:[(0,io.jsxs)(ku,{children:[(0,io.jsx)(ju,{children:e.name}),(0,io.jsx)(Eu,{children:(t=e.timestamp,new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}))})]}),(0,io.jsx)(Cu,{children:e.comment})]},e.id);var t})})]})]})},zu=no.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Au=no(it)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #00d4ff;
  text-decoration: none;
  margin-bottom: 2rem;
  font-weight: 500;
  
  &:hover {
    color: #00a8cc;
  }
`,Nu=no.div`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  border-radius: 20px;
  padding: 4rem 2rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #0a0f1c;
`,Lu=no.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
`,Fu=no.p`
  font-size: 1.3rem;
  opacity: 0.8;
  margin-bottom: 2rem;
`,Du=no.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
  margin: 2rem 0;
`;const Mu=function(){const{id:e}=re(),t={"renewable-revolution":"Renewable Revolution","physics-of-power":"The Physics of Power","energy-society":"Energy and Society","climate-solutions":"Climate Solutions","battery-science":"The Science of Energy Storage","smart-homes":"Smart Homes & Energy Efficiency"}[e]||"Exhibition";return(0,io.jsxs)(zu,{children:[(0,io.jsx)(Au,{to:"/experiences",children:"\u2190 Back to Experiences"}),(0,io.jsxs)(Nu,{children:[(0,io.jsx)(Lu,{children:t}),(0,io.jsx)(Fu,{children:"Immersive Digital Exhibition Experience"})]}),(0,io.jsxs)(Du,{children:[(0,io.jsx)("h2",{style:{color:"#00d4ff",marginBottom:"1rem"},children:"\ud83d\udea7 Coming Soon"}),(0,io.jsx)("p",{style:{color:"#b0b7c3",fontSize:"1.1rem",lineHeight:"1.7"},children:"This immersive exhibition experience is currently under development. We're creating interactive 3D visualizations, real-time simulations, and engaging multimedia content that will bring energy science to life."}),(0,io.jsx)("br",{}),(0,io.jsxs)("p",{style:{color:"#8892a6"},children:["Want to be notified when this exhibition launches?",(0,io.jsx)(it,{to:"/contact",style:{color:"#00d4ff",marginLeft:"0.5rem"},children:"Request updates from our team"})]})]}),(0,io.jsx)(_u,{exhibitionId:e,exhibitionTitle:t})]})},Iu=no.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,$u=no.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem 0;
`,Uu=no.h1`
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
`,Bu=no.p`
  font-size: 1.3rem;
  color: #b0b7c3;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.7;
`,Hu=no.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`,Wu=no.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(0, 212, 255, 0.4);
  }
`,qu=no.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`,Vu=no.h3`
  color: #00d4ff;
  margin-bottom: 1rem;
  font-size: 1.3rem;
`,Yu=no.p`
  color: #b0b7c3;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`,Ku=no.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  padding: 3rem;
  margin: 2rem 0;
`,Qu=no.h2`
  color: #00d4ff;
  margin-bottom: 2rem;
  text-align: center;
`,Gu=no.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Ju=no.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Xu=no.label`
  color: #e0e6ed;
  font-weight: 500;
`,Zu=no.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 8px;
  padding: 1rem;
  color: #ffffff;
  font-size: 1rem;

  &::placeholder {
    color: #8892a6;
  }

  &:focus {
    outline: none;
    border-color: #00d4ff;
    background: rgba(255, 255, 255, 0.1);
  }
`,ed=no.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 8px;
  padding: 1rem;
  color: #ffffff;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;

  &::placeholder {
    color: #8892a6;
  }

  &:focus {
    outline: none;
    border-color: #00d4ff;
    background: rgba(255, 255, 255, 0.1);
  }
`,td=no.select`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 8px;
  padding: 1rem;
  color: #ffffff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #00d4ff;
    background: rgba(255, 255, 255, 0.1);
  }

  option {
    background: #1a2332;
    color: #ffffff;
  }
`,nd=no.button`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0f1c;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #00a8cc, #007799);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,rd=no.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`,od=no.div`
  text-align: center;
  padding: 1.5rem;

  h3 {
    color: #00d4ff;
    margin-bottom: 1rem;
  }

  p {
    color: #b0b7c3;
    margin-bottom: 0.5rem;
  }

  a {
    color: #00d4ff;
  }
`,id=no.div`
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.3);
  color: #ff6b6b;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`,ad=no.div`
  background: rgba(81, 207, 102, 0.1);
  border: 1px solid rgba(81, 207, 102, 0.3);
  color: #51cf66;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  
  h4 {
    color: #51cf66;
    margin-bottom: 0.5rem;
  }
`;const ld=function(){const[e,n]=(0,t.useState)({name:"",email:"",organization:"",supportType:"",message:""}),[r,o]=(0,t.useState)(!1);t.useEffect(()=>{window.scrollTo(0,0)},[]);const[i,a]=(0,t.useState)(!1),[l,s]=(0,t.useState)(null),c=t=>{n({...e,[t.target.name]:t.target.value})};return(0,io.jsxs)(Iu,{children:[(0,io.jsxs)($u,{children:[(0,io.jsx)(Uu,{children:"Contact Us"}),(0,io.jsx)(Bu,{children:"Get expert guidance and personalized consultation from our network of energy professionals. Whether you're a student, educator, business owner, or researcher, we're here to help."})]}),(0,io.jsxs)(Hu,{children:[(0,io.jsxs)(Wu,{children:[(0,io.jsx)(qu,{children:"\ud83d\udcda"}),(0,io.jsx)(Vu,{children:"Educational Support"}),(0,io.jsx)(Yu,{children:"Curriculum development, research guidance, student mentoring, and teacher training programs."})]}),(0,io.jsxs)(Wu,{children:[(0,io.jsx)(qu,{children:"\ud83c\udfe2"}),(0,io.jsx)(Vu,{children:"Business Consultation"}),(0,io.jsx)(Yu,{children:"Energy audits, renewable integration, sustainability strategy, and technology assessment."})]}),(0,io.jsxs)(Wu,{children:[(0,io.jsx)(qu,{children:"\ud83c\udfdb\ufe0f"}),(0,io.jsx)(Vu,{children:"Policy & Planning"}),(0,io.jsx)(Yu,{children:"Energy policy analysis, community planning, stakeholder engagement, and environmental impact."})]})]}),(0,io.jsxs)(Ku,{children:[(0,io.jsx)(Qu,{children:"Request Professional Consultation"}),l&&(0,io.jsxs)(id,{children:["Error submitting request: ",l.message]}),r&&(0,io.jsxs)(ad,{children:[(0,io.jsx)("h4",{children:"\ud83c\udf89 Request Submitted Successfully!"}),(0,io.jsx)("p",{children:"Thank you for your consultation request! We've received your information and will match you with the most suitable expert. You can expect to hear from us within 24 hours to schedule your free initial consultation."})]}),(0,io.jsxs)(Gu,{onSubmit:async t=>{t.preventDefault(),await(async e=>{a(!0),s(null);try{const t=await fetch("https://theenergymuseum.com/api/consultation.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),r=await t.json();if(r.success)return n({name:"",email:"",organization:"",supportType:"",message:""}),o(!0),setTimeout(()=>o(!1),8e3),r;throw new Error(r.message||"Failed to submit consultation request")}catch(t){throw s(t),t}finally{a(!1)}})(e)},children:[(0,io.jsxs)(Ju,{children:[(0,io.jsx)(Xu,{htmlFor:"name",children:"Full Name *"}),(0,io.jsx)(Zu,{type:"text",id:"name",name:"name",value:e.name,onChange:c,placeholder:"Enter your full name",required:!0})]}),(0,io.jsxs)(Ju,{children:[(0,io.jsx)(Xu,{htmlFor:"email",children:"Email Address *"}),(0,io.jsx)(Zu,{type:"email",id:"email",name:"email",value:e.email,onChange:c,placeholder:"Enter your email address",required:!0})]}),(0,io.jsxs)(Ju,{children:[(0,io.jsx)(Xu,{htmlFor:"organization",children:"Organization"}),(0,io.jsx)(Zu,{type:"text",id:"organization",name:"organization",value:e.organization,onChange:c,placeholder:"Your organization or institution (optional)"})]}),(0,io.jsxs)(Ju,{children:[(0,io.jsx)(Xu,{htmlFor:"supportType",children:"Type of Support *"}),(0,io.jsxs)(td,{id:"supportType",name:"supportType",value:e.supportType,onChange:c,required:!0,children:[(0,io.jsx)("option",{value:"",children:"Select support type"}),(0,io.jsx)("option",{value:"educational",children:"Educational Support"}),(0,io.jsx)("option",{value:"business",children:"Business Consultation"}),(0,io.jsx)("option",{value:"policy",children:"Policy & Planning"}),(0,io.jsx)("option",{value:"research",children:"Research Collaboration"}),(0,io.jsx)("option",{value:"other",children:"Other"})]})]}),(0,io.jsxs)(Ju,{children:[(0,io.jsx)(Xu,{htmlFor:"message",children:"Message *"}),(0,io.jsx)(ed,{id:"message",name:"message",value:e.message,onChange:c,placeholder:"Please describe your specific needs, challenges, or questions. Include any relevant details about your project, timeline, and goals.",required:!0})]}),(0,io.jsx)(nd,{type:"submit",disabled:i,children:i?"Submitting...":"Request Consultation"})]})]}),(0,io.jsxs)(rd,{children:[(0,io.jsxs)(od,{children:[(0,io.jsxs)("h3",{children:[(0,io.jsx)(zo,{style:{marginRight:"0.5rem",verticalAlign:"middle"}}),"Email Support"]}),(0,io.jsx)("p",{children:"General Inquiries:"}),(0,io.jsx)("a",{href:"mailto:info@energymuseum.org",children:"info@energymuseum.org"}),(0,io.jsx)("p",{children:"Consultation Requests:"}),(0,io.jsx)("a",{href:"mailto:support@energymuseum.org",children:"support@energymuseum.org"})]}),(0,io.jsxs)(od,{children:[(0,io.jsxs)("h3",{children:[(0,io.jsx)(To,{style:{marginRight:"0.5rem",verticalAlign:"middle"}}),"Response Time"]}),(0,io.jsx)("p",{children:"Initial Response: Within 24 hours"}),(0,io.jsx)("p",{children:"Consultation Scheduling: 2-3 business days"}),(0,io.jsx)("p",{children:"Office Hours: Mon-Fri, 9 AM - 5 PM EST"})]}),(0,io.jsxs)(od,{children:[(0,io.jsxs)("h3",{children:[(0,io.jsx)(Ao,{style:{marginRight:"0.5rem",verticalAlign:"middle"}}),"Community Support"]}),(0,io.jsx)("p",{children:"Join our discussion forums for community-driven support and networking opportunities."}),(0,io.jsx)(it,{to:"/forum",children:"Visit Community Forums"})]})]})]})},sd=no.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #ccd6f6;
`,cd=no.section`
  text-align: center;
  padding: 4rem 0 6rem;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 255, 255, 0.05));
  border-radius: 20px;
  margin-bottom: 4rem;
  border: 1px solid rgba(0, 212, 255, 0.2);
`,ud=no.h1`
  font-size: 4rem;
  color: #00d4ff;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`,dd=no.p`
  font-size: 1.3rem;
  color: #b0b7c3;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
`,fd=no.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
  margin: 2rem 0;
`;const pd=function(){return t.useEffect(()=>{window.scrollTo(0,0)},[]),(0,io.jsxs)(sd,{children:[(0,io.jsxs)(cd,{children:[(0,io.jsx)(ud,{children:"Support Our Mission"}),(0,io.jsx)(dd,{children:"Help us transform energy education and create a more sustainable future through innovative STEM learning experiences for all ages."})]}),(0,io.jsxs)(fd,{children:[(0,io.jsx)("h2",{style:{color:"#00d4ff",marginBottom:"1rem"},children:"\ud83d\udea7 Donation Platform Coming Soon"}),(0,io.jsx)("p",{style:{color:"#b0b7c3",fontSize:"1.1rem",lineHeight:"1.7"},children:"We're currently setting up secure donation processing to make it easy for you to support our mission of advancing energy literacy education. This page will soon feature multiple ways to contribute to our programs and initiatives."}),(0,io.jsx)("br",{}),(0,io.jsxs)("p",{style:{color:"#8892a6"},children:["In the meantime, if you'd like to make a donation or learn about sponsorship opportunities, please ",(0,io.jsx)("a",{href:"/contact",style:{color:"#00d4ff",marginLeft:"0.5rem"},children:"contact our team directly"})]})]})]})},hd=no.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
`,md=no.div`
  background: linear-gradient(135deg, #1a2332 0%, #0a0f1c 100%);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 20px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 212, 255, 0.2);
`,gd=no.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid rgba(0, 212, 255, 0.2);
`,bd=no.h2`
  color: #00d4ff;
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin: 0;
`,yd=no.button`
  background: none;
  border: none;
  color: #8892a6;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    color: #00d4ff;
    background: rgba(0, 212, 255, 0.1);
  }

  svg {
    font-size: 1.5rem;
  }
`,vd=no.div`
  padding: 2rem;
`,xd=no.div`
  margin-bottom: 1.5rem;
`,wd=no.label`
  display: block;
  color: #00d4ff;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Sd=no.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 8px;
  color: #ccd6f6;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00d4ff;
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
  }

  &::placeholder {
    color: #8892a6;
  }
`,kd=no.select`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 8px;
  color: #ccd6f6;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00d4ff;
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
  }

  option {
    background: #1a2332;
    color: #ccd6f6;
  }
`,jd=no.textarea`
  width: 100%;
  min-height: 120px;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 8px;
  color: #ccd6f6;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  transition: all 0.3s ease;
  line-height: 1.6;

  &:focus {
    outline: none;
    border-color: #00d4ff;
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
  }

  &::placeholder {
    color: #8892a6;
  }
`,Ed=no.p`
  color: #8892a6;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  line-height: 1.4;
`,Cd=no.div`
  padding: 1rem 2rem 2rem;
  display: flex;
  gap: 1rem;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,Td=no.button`
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,Pd=no(Td)`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0f1c;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #00a8cc, #007799);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 212, 255, 0.3);
  }
`,Od=no(Td)`
  background: transparent;
  border: 2px solid #8892a6;
  color: #8892a6;

  &:hover:not(:disabled) {
    border-color: #00d4ff;
    color: #00d4ff;
    background: rgba(0, 212, 255, 0.1);
  }
`,Rd=[{value:"",label:"Select discussion type..."},{value:"trainings",label:"\ud83c\udf93 Trainings",description:"OpenSciEd workshops, professional development, training programs"},{value:"funding",label:"\ud83d\udcb0 Funding/Grants",description:"Grant opportunities, funding sources, implementation support"},{value:"services",label:"\ud83e\udd1d Services/Consultation",description:"Field experiences, customized programs, consultation services"},{value:"programs",label:"\ud83d\udcc5 Programs/Events",description:"Family STEM nights, community programs, educational events"},{value:"support",label:"\ud83d\udee0\ufe0f Support",description:"Technical support, troubleshooting, general assistance"},{value:"general",label:"\ud83d\udcac General Questions",description:"Open discussions, community conversations about energy education"}];const _d=function(e){let{isOpen:n,onClose:r,onSubmit:o}=e;const[i,a]=(0,t.useState)({title:"",category:"",author:"",authorRole:"",email:"",content:""}),[l,s]=(0,t.useState)(!1),[c,u]=(0,t.useState)({}),d=(e,t)=>{a(n=>({...n,[e]:t})),c[e]&&u(t=>({...t,[e]:null}))},f=async e=>{e.preventDefault();const t=(()=>{const e={};return i.title.trim()?i.title.length<10&&(e.title="Title should be at least 10 characters"):e.title="Question title is required",i.category||(e.category="Please select a discussion type"),i.author.trim()||(e.author="Your name is required"),i.content.trim()?i.content.length<20&&(e.content="Please provide more details (at least 20 characters)"):e.content="Question content is required",i.email&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.email)&&(e.email="Please enter a valid email address"),e})();if(Object.keys(t).length>0)u(t);else{s(!0);try{await o(i),a({title:"",category:"",author:"",authorRole:"",email:"",content:""}),u({}),r()}catch(n){console.error("Error submitting question:",n),u({submit:"Failed to submit question. Please try again."})}finally{s(!1)}}},p=()=>{a({title:"",category:"",author:"",authorRole:"",email:"",content:""}),u({}),r()};if(!n)return null;const h=Rd.find(e=>e.value===i.category);return(0,io.jsx)(hd,{onClick:e=>e.target===e.currentTarget&&p(),children:(0,io.jsxs)(md,{children:[(0,io.jsxs)(gd,{children:[(0,io.jsxs)(bd,{children:[(0,io.jsx)(Po,{}),"Ask a Question"]}),(0,io.jsx)(yd,{onClick:p,children:(0,io.jsx)(Bo,{})})]}),(0,io.jsx)(vd,{children:(0,io.jsxs)("form",{onSubmit:f,children:[(0,io.jsxs)(xd,{children:[(0,io.jsxs)(wd,{htmlFor:"title",children:[(0,io.jsx)(No,{}),"Question Title *"]}),(0,io.jsx)(Sd,{id:"title",type:"text",value:i.title,onChange:e=>d("title",e.target.value),placeholder:"e.g., NGSS Alignment Best Practices",style:{borderColor:c.title?"#ff6b6b":void 0}}),c.title&&(0,io.jsx)(Ed,{style:{color:"#ff6b6b"},children:c.title}),(0,io.jsx)(Ed,{children:"Be specific and clear. This will be the main heading of your discussion."})]}),(0,io.jsxs)(xd,{children:[(0,io.jsxs)(wd,{htmlFor:"category",children:[(0,io.jsx)(Do,{}),"Discussion Type *"]}),(0,io.jsx)(kd,{id:"category",value:i.category,onChange:e=>d("category",e.target.value),style:{borderColor:c.category?"#ff6b6b":void 0},children:Rd.map(e=>(0,io.jsx)("option",{value:e.value,children:e.label},e.value))}),c.category&&(0,io.jsx)(Ed,{style:{color:"#ff6b6b"},children:c.category}),h&&h.description&&(0,io.jsx)(Ed,{children:h.description})]}),(0,io.jsxs)(xd,{children:[(0,io.jsxs)(wd,{htmlFor:"author",children:[(0,io.jsx)($o,{}),"Your Name *"]}),(0,io.jsx)(Sd,{id:"author",type:"text",value:i.author,onChange:e=>d("author",e.target.value),placeholder:"e.g., Sarah M.",style:{borderColor:c.author?"#ff6b6b":void 0}}),c.author&&(0,io.jsx)(Ed,{style:{color:"#ff6b6b"},children:c.author}),(0,io.jsx)(Ed,{children:"This will be displayed publicly with your question."})]}),(0,io.jsxs)(xd,{children:[(0,io.jsxs)(wd,{htmlFor:"authorRole",children:[(0,io.jsx)($o,{}),"Your Role (optional)"]}),(0,io.jsx)(Sd,{id:"authorRole",type:"text",value:i.authorRole,onChange:e=>d("authorRole",e.target.value),placeholder:"e.g., Middle School Teacher",style:{borderColor:c.authorRole?"#ff6b6b":void 0}}),c.authorRole&&(0,io.jsx)(Ed,{style:{color:"#ff6b6b"},children:c.authorRole}),(0,io.jsx)(Ed,{children:"This will appear next to your name."})]}),(0,io.jsxs)(xd,{children:[(0,io.jsxs)(wd,{htmlFor:"email",children:[(0,io.jsx)(zo,{}),"Email (optional)"]}),(0,io.jsx)(Sd,{id:"email",type:"email",value:i.email,onChange:e=>d("email",e.target.value),placeholder:"your.email@example.com",style:{borderColor:c.email?"#ff6b6b":void 0}}),c.email&&(0,io.jsx)(Ed,{style:{color:"#ff6b6b"},children:c.email}),(0,io.jsx)(Ed,{children:"Optional. We may use this to follow up or notify you of responses."})]}),(0,io.jsxs)(xd,{children:[(0,io.jsxs)(wd,{htmlFor:"content",children:[(0,io.jsx)(No,{}),"Question Details *"]}),(0,io.jsx)(jd,{id:"content",value:i.content,onChange:e=>d("content",e.target.value),placeholder:"Describe your situation, what you've tried, and what specific help you need. Include any relevant context about your school, grade level, or implementation challenges...",style:{borderColor:c.content?"#ff6b6b":void 0}}),c.content&&(0,io.jsx)(Ed,{style:{color:"#ff6b6b"},children:c.content}),(0,io.jsx)(Ed,{children:"Provide details to help the community give you the best possible answers. The more context, the better!"})]}),c.submit&&(0,io.jsx)(Ed,{style:{color:"#ff6b6b",textAlign:"center",marginBottom:"1rem"},children:c.submit})]})}),(0,io.jsxs)(Cd,{children:[(0,io.jsx)(Od,{type:"button",onClick:p,disabled:l,children:"Cancel"}),(0,io.jsx)(Pd,{onClick:f,disabled:l,children:l?"Submitting...":"Submit Question"})]})]})})},zd=no.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #ccd6f6;
`,Ad=no.section`
  text-align: center;
  padding: 3rem 0 4rem;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(255, 255, 255, 0.05));
  border-radius: 20px;
  margin-bottom: 3rem;
  border: 1px solid rgba(0, 212, 255, 0.2);
`,Nd=no.h1`
  font-size: 3.5rem;
  color: #00d4ff;
  margin-bottom: 1rem;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Ld=no.p`
  font-size: 1.2rem;
  color: #b0b7c3;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.7;
`,Fd=no.div`
  position: relative;
  max-width: 500px;
  margin: 0 auto;
`,Dd=no.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 12px;
  color: #ccd6f6;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00d4ff;
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
  }

  &::placeholder {
    color: #8892a6;
  }
`,Md=no(Lo)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #00d4ff;
  font-size: 1.2rem;
`,Id=no.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`,$d=no.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
  }
`,Ud=no.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`,Bd=no.button`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0f1c;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #00a8cc, #007799);
    transform: translateY(-1px);
    box-shadow: 0 6px 15px rgba(0, 212, 255, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,Hd=no.select`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 8px;
  color: #ccd6f6;
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  min-width: 150px;

  &:focus {
    outline: none;
    border-color: #00d4ff;
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
  }

  option {
    background: #1a2332;
    color: #ccd6f6;
  }
`,Wd=no.div`
  margin-bottom: 3rem;
`,qd=no.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: rgba(0, 212, 255, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.1);
  }
`,Vd=no.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`,Yd=no.h3`
  color: #00d4ff;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex: 1;
`,Kd=no.span`
  background: rgba(0, 212, 255, 0.1);
  color: #00d4ff;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(0, 212, 255, 0.3);
`,Qd=no.div`
  background: linear-gradient(135deg, #64ffda, #00d4ff);
  color: #0a0f1c;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`,Gd=no.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 0.9rem;
  color: #8892a6;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
  }
`,Jd=no.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`,Xd=no.p`
  color: #b0b7c3;
  line-height: 1.6;
  margin: 1rem 0;
  font-size: 0.95rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,Zd=no.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 212, 255, 0.1);

  @media (max-width: 768px) {
    gap: 1rem;
  }
`,ef=no.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.9rem;
  color: #8892a6;
`,tf=no.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #00d4ff;
  font-weight: 600;
`,nf=no(Fo)`
  color: #64ffda;
  font-size: 0.8rem;
`,rf=no.section`
  background: rgba(0, 212, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  margin-bottom: 3rem;
`,of=no.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
`,af=no.div`
  h3 {
    font-size: 2.5rem;
    color: #00d4ff;
    margin-bottom: 0.5rem;
  }

  p {
    color: #b0b7c3;
    font-size: 1rem;
  }
`,lf=no.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,sf=no(it)`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0f1c;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  font-family: inherit;

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #00a8cc, #007799);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 212, 255, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,cf=no(sf)`
  background: transparent;
  border: 2px solid #00d4ff;
  color: #00d4ff;

  &:hover {
    background: rgba(0, 212, 255, 0.1);
    color: #00d4ff;
  }
`,uf=[{id:1,title:"NGSS Alignment Best Practices",category:"Trainings",categoryIcon:"\ud83c\udf93",author:"Sarah M.",authorRole:"Middle School Teacher",preview:"I'm implementing OpenSciEd in my middle school science classes and looking for best practices for ensuring strong NGSS alignment. Our district is particularly focused on the three-dimensional learning aspects...",isPinned:!0,votes:15,replies:8,views:142,lastActivity:"2 hours ago",created:"2 days ago"},{id:2,title:"Title I Grant Application Tips",category:"Funding/Grants",categoryIcon:"\ud83d\udcb0",author:"Dr. Edward Cohen",authorRole:"Energy Museum Team",preview:"Here are some proven strategies for successful Title I grant applications based on our experience helping schools secure funding for energy education programs...",isPinned:!0,votes:22,replies:12,views:89,lastActivity:"4 hours ago",created:"3 days ago"},{id:3,title:"Hyperlocal Learning Experience Design",category:"Services/Consultation",categoryIcon:"\ud83e\udd1d",author:"Dr. Edward Cohen",authorRole:"Energy Museum Team",preview:"Designing hyperlocal place-based learning experiences requires understanding your community's unique energy landscape. Here's how we approach customization...",isPinned:!0,votes:18,replies:15,views:156,lastActivity:"1 hour ago",created:"1 day ago"},{id:4,title:"Family & Friends STEM Night Planning",category:"Programs/Events",categoryIcon:"\ud83d\udcc5",author:"Maria S.",authorRole:"Elementary Principal",preview:"Planning our first Family & Friends STEM Night focused on energy concepts. Looking for station ideas that work well for mixed age groups and keep parents engaged...",isPinned:!1,votes:14,replies:9,views:78,lastActivity:"3 hours ago",created:"5 hours ago"},{id:5,title:"Platform Access Issues",category:"Support",categoryIcon:"\ud83d\udee0\ufe0f",author:"Tech Support Team",authorRole:"Energy Museum Team",preview:"If you're experiencing login issues or trouble accessing resources, please try these troubleshooting steps first. Most issues can be resolved quickly...",isPinned:!0,votes:8,replies:6,views:95,lastActivity:"30 minutes ago",created:"6 hours ago"},{id:6,title:"Energy Literacy in Elementary Schools",category:"General Questions",categoryIcon:"\ud83d\udcac",author:"Tom W.",authorRole:"Elementary Teacher",preview:"What are the most effective ways to introduce energy concepts to K-5 students? I'm particularly interested in hands-on activities that don't require expensive equipment...",isPinned:!1,votes:28,replies:21,views:203,lastActivity:"1 hour ago",created:"1 day ago"},{id:7,title:"OpenSciEd Implementation Timeline",category:"Trainings",categoryIcon:"\ud83c\udf93",author:"Mike R.",authorRole:"Science Coordinator",preview:"Our district is rolling out OpenSciEd across all middle schools. Looking for realistic timelines and what to expect during the first year of implementation...",isPinned:!1,votes:12,replies:7,views:67,lastActivity:"5 hours ago",created:"2 days ago"},{id:8,title:"NSF Grant Deadline Reminders",category:"Funding/Grants",categoryIcon:"\ud83d\udcb0",author:"Jennifer L.",authorRole:"Grant Writer",preview:"Important upcoming NSF deadlines for education grants. The Discovery Research PreK-12 program deadline is approaching, and here are some key points to remember...",isPinned:!1,votes:7,replies:4,views:45,lastActivity:"1 day ago",created:"2 days ago"},{id:9,title:"Field Trip Safety Protocols",category:"Services/Consultation",categoryIcon:"\ud83e\udd1d",author:"Linda T.",authorRole:"Safety Coordinator",preview:"With field experiences resuming, what safety protocols are other schools implementing? Our district requires updated procedures for all off-site learning...",isPinned:!1,votes:12,replies:8,views:92,lastActivity:"6 hours ago",created:"1 day ago"},{id:10,title:"Welcome New Members!",category:"General Questions",categoryIcon:"\ud83d\udcac",author:"Community Manager",authorRole:"Energy Museum Team",preview:"Welcome to our growing community of energy education professionals! Please introduce yourself and let us know how we can support your work...",isPinned:!0,votes:45,replies:32,views:298,lastActivity:"2 hours ago",created:"1 week ago"}],df=[{value:"all",label:"All Discussions"},{value:"trainings",label:"\ud83c\udf93 Trainings"},{value:"funding",label:"\ud83d\udcb0 Funding/Grants"},{value:"services",label:"\ud83e\udd1d Services/Consultation"},{value:"programs",label:"\ud83d\udcc5 Programs/Events"},{value:"support",label:"\ud83d\udee0\ufe0f Support"},{value:"general",label:"\ud83d\udcac General Questions"}];const ff=function(){const[e,n]=ct(),[r,o]=(0,t.useState)(""),[i,a]=(0,t.useState)(e.get("category")||"all"),[l,s]=(0,t.useState)("recent"),[c,u]=(0,t.useState)(uf),[d,f]=(0,t.useState)(!1),[p,h]=(0,t.useState)(!1),m=mi();(0,t.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,t.useEffect)(()=>{let e=uf;"all"!==i&&(e=e.filter(e=>e.category.toLowerCase().replace("/","").replace(" ","")===i)),r&&(e=e.filter(e=>e.title.toLowerCase().includes(r.toLowerCase())||e.preview.toLowerCase().includes(r.toLowerCase())||e.author.toLowerCase().includes(r.toLowerCase())||e.category.toLowerCase().includes(r.toLowerCase()))),e=[...e].sort((e,t)=>{if(e.isPinned&&!t.isPinned)return-1;if(!e.isPinned&&t.isPinned)return 1;switch(l){case"recent":default:return 0;case"votes":return t.votes-e.votes;case"replies":return t.replies-e.replies}}),u(e)},[r,i,l]);const g=uf.length,b=uf.reduce((e,t)=>e+t.replies,0);return(0,io.jsxs)(zd,{children:[(0,io.jsx)(Ad,{ref:m.ref,children:(0,io.jsxs)("div",{style:{opacity:m.shouldAnimate?1:0,transform:m.shouldAnimate?"translateY(0)":"translateY(30px)",transition:"all 0.8s ease"},children:[(0,io.jsx)(Nd,{children:"Community Forums"}),(0,io.jsx)(Ld,{children:"Connect with educators, share experiences, and get expert support from The Energy Museum community. Your questions and insights help us all grow together."}),(0,io.jsxs)(Fd,{children:[(0,io.jsx)(Md,{}),(0,io.jsx)(Dd,{type:"text",placeholder:"Search topics, categories, or questions...",value:r,onChange:e=>o(e.target.value)})]})]})}),(0,io.jsxs)(rf,{children:[(0,io.jsx)("h2",{style:{color:"#00d4ff",marginBottom:"0.5rem"},children:"Community Stats"}),(0,io.jsx)("p",{style:{color:"#b0b7c3"},children:"Building knowledge together, one conversation at a time"}),(0,io.jsxs)(of,{children:[(0,io.jsxs)(af,{children:[(0,io.jsx)("h3",{children:g}),(0,io.jsx)("p",{children:"Active Topics"})]}),(0,io.jsxs)(af,{children:[(0,io.jsx)("h3",{children:b}),(0,io.jsx)("p",{children:"Community Posts"})]}),(0,io.jsxs)(af,{children:[(0,io.jsx)("h3",{children:"280+"}),(0,io.jsx)("p",{children:"Active Members"})]}),(0,io.jsxs)(af,{children:[(0,io.jsx)("h3",{children:"95%"}),(0,io.jsx)("p",{children:"Questions Answered"})]})]})]}),(0,io.jsxs)(Id,{children:[(0,io.jsxs)($d,{children:[(0,io.jsx)(Hd,{value:i,onChange:e=>{const t=e.target.value;a(t),n("all"===t?{}:{category:t})},children:df.map(e=>(0,io.jsx)("option",{value:e.value,children:e.label},e.value))}),(0,io.jsxs)(Hd,{value:l,onChange:e=>s(e.target.value),children:[(0,io.jsx)("option",{value:"recent",children:"Most Recent"}),(0,io.jsx)("option",{value:"votes",children:"Most Helpful"}),(0,io.jsx)("option",{value:"replies",children:"Most Discussed"})]}),(0,io.jsxs)("div",{style:{color:"#8892a6",fontSize:"0.9rem"},children:[c.length," discussion",1!==c.length?"s":""]})]}),(0,io.jsx)(Ud,{children:(0,io.jsxs)(Bd,{onClick:()=>f(!0),disabled:p,children:[(0,io.jsx)(Po,{}),"Ask a Question"]})})]}),(0,io.jsxs)(Wd,{children:[c.map(e=>(0,io.jsxs)(qd,{onClick:()=>window.location.href=`/forum/topic/${e.id}`,children:[(0,io.jsxs)(Vd,{children:[(0,io.jsxs)(Yd,{children:[e.isPinned&&(0,io.jsxs)(Qd,{children:[(0,io.jsx)(nf,{}),"Pinned"]}),e.title]}),(0,io.jsxs)(Kd,{children:[e.categoryIcon," ",e.category]})]}),(0,io.jsxs)(Gd,{children:[(0,io.jsxs)(Jd,{children:[(0,io.jsx)("strong",{children:e.author}),e.authorRole&&(0,io.jsxs)("span",{style:{color:"#8892a6"},children:["\u2022 ",e.authorRole]})]}),(0,io.jsxs)(Jd,{children:[(0,io.jsx)(To,{}),e.lastActivity]})]}),(0,io.jsx)(Xd,{children:e.preview}),(0,io.jsxs)(Zd,{children:[(0,io.jsxs)(tf,{children:[(0,io.jsx)(Io,{}),e.votes]}),(0,io.jsxs)(ef,{children:[(0,io.jsx)(Ao,{}),e.replies," replies"]}),(0,io.jsxs)(ef,{children:[(0,io.jsx)(Uo,{}),e.views," views"]}),(0,io.jsxs)(ef,{style:{marginLeft:"auto",color:"#8892a6"},children:["Created ",e.created]})]})]},e.id)),0===c.length&&(0,io.jsxs)("div",{style:{textAlign:"center",padding:"3rem 2rem",color:"#8892a6",background:"rgba(255, 255, 255, 0.03)",borderRadius:"12px",border:"1px solid rgba(0, 212, 255, 0.2)"},children:[(0,io.jsx)(Lo,{style:{fontSize:"3rem",marginBottom:"1rem",opacity:.5}}),(0,io.jsx)("h3",{style:{color:"#b0b7c3",marginBottom:"0.5rem"},children:"No discussions found"}),(0,io.jsx)("p",{children:"Try adjusting your search terms or category filter, or start a new discussion!"})]})]}),(0,io.jsxs)(lf,{children:[(0,io.jsxs)(sf,{as:"button",onClick:()=>f(!0),disabled:p,children:[(0,io.jsx)(Po,{}),"Ask a Question"]}),(0,io.jsxs)(cf,{to:"/contact",children:[(0,io.jsx)(Ao,{}),"Direct Support"]})]}),(0,io.jsx)(_d,{isOpen:d,onClose:()=>f(!1),onSubmit:async e=>{h(!0);try{const t=await Nc({title:e.title,content:e.content,category:e.category,author:e.author,authorRole:e.authorRole,email:e.email});if(!t.success)throw new Error(t.message||"Failed to submit question");alert("Question submitted successfully! It will appear after moderation review.")}catch(t){throw console.error("Error submitting question:",t),t}finally{h(!1)}}})]})},pf=no.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  color: #ccd6f6;
`,hf=no.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #8892a6;

  a {
    color: #00d4ff;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #64ffda;
    }
  }
`,mf=no.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
`,gf=no.h1`
  color: #00d4ff;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`,bf=no.div`
  background: linear-gradient(135deg, #64ffda, #00d4ff);
  color: #0a0f1c;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`,yf=no.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 0.9rem;
  color: #8892a6;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`,vf=no.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`,xf=no.div`
  color: #e0e6ed;
  line-height: 1.8;
  font-size: 1.1rem;

  p {
    margin-bottom: 1rem;
  }

  ul, ol {
    margin: 1rem 0;
    padding-left: 2rem;
  }

  blockquote {
    border-left: 4px solid #00d4ff;
    background: rgba(0, 212, 255, 0.05);
    padding: 1rem 1.5rem;
    margin: 1rem 0;
    border-radius: 0 8px 8px 0;
  }
`,wf=no.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 212, 255, 0.1);
`,Sf=no.button`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 8px;
  color: ${e=>e.$active?"#00d4ff":"#8892a6"};
  padding: 0.8rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;

  &:hover {
    border-color: #00d4ff;
    color: #00d4ff;
    background: rgba(0, 212, 255, 0.1);
  }

  ${e=>e.$active&&"\n    background: rgba(0, 212, 255, 0.1);\n    border-color: #00d4ff;\n  "}
`,kf=no.span`
  font-weight: 600;
  margin: 0 1rem;
  color: #00d4ff;
  font-size: 1.1rem;
`,jf=no.div`
  margin-top: 3rem;
`,Ef=no.h2`
  color: #00d4ff;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Cf=no.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(0, 212, 255, 0.3);
  }
`,Tf=no.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`,Pf=no.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,Of=no.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0a0f1c;
  font-weight: 700;
  font-size: 1.1rem;
`,Rf=no.div`
  color: #00d4ff;
  font-weight: 600;
`,_f=no.div`
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
`,zf=no.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,Af=no.button`
  background: transparent;
  border: none;
  color: #8892a6;
  cursor: pointer;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.9rem;

  &:hover {
    color: #00d4ff;
  }
`,Nf=no.div`
  color: #e0e6ed;
  line-height: 1.7;
  margin-bottom: 1rem;
`,Lf=no.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(0, 212, 255, 0.1);
`,Ff=no.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  margin-top: 2rem;
`,Df=no.div`
  margin-bottom: 1.5rem;
`,Mf=no.label`
  display: block;
  color: #00d4ff;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,If=no.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 8px;
  color: #ccd6f6;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00d4ff;
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
  }

  &::placeholder {
    color: #8892a6;
  }
`,$f=no.textarea`
  width: 100%;
  min-height: 120px;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 8px;
  color: #ccd6f6;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00d4ff;
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
  }

  &::placeholder {
    color: #8892a6;
  }
`,Uf=no.button`
  background: linear-gradient(135deg, #00d4ff, #0099cc);
  color: #0a0f1c;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #00a8cc, #007799);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 212, 255, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,Bf={id:1,title:"NGSS Alignment Best Practices",content:"I'm implementing OpenSciEd in my middle school science classes and looking for best practices for ensuring strong NGSS alignment. Our district is particularly focused on the three-dimensional learning aspects.\n\n**Specific areas I'm struggling with:**\n\n1. **Performance Expectations (PEs)** - How do you effectively assess student progress on the PEs without over-testing?\n\n2. **Crosscutting Concepts** - What strategies work best for helping students recognize and apply crosscutting concepts across different units?\n\n3. **Science and Engineering Practices** - How do you balance student autonomy in investigations with ensuring they're meeting the practice standards?\n\nI've been using the Energy and Matter unit as a pilot, and while students are engaged, I want to make sure I'm not missing key alignment opportunities.\n\nAny resources, strategies, or experiences would be greatly appreciated!",author:"Sarah M.",authorRole:"Middle School Teacher",category:"trainings",isPinned:!0,votes:15,replies:8,views:142,createdAt:"2 days ago"},Hf=[{id:1,author:"Dr. Edward Cohen",authorRole:"Energy Museum Team",content:'Great question, Sarah! NGSS alignment is indeed a journey, not a destination. Here are some strategies that have worked well for our partner schools:\n\n**For Performance Expectations:**\n- Use formative assessment strategies that feel natural to the learning process\n- Consider using student self-reflection journals where they track their own progress\n- Try "gallery walks" where students present their understanding in various formats\n\n**For Crosscutting Concepts:**\n- Create concept maps that students build throughout the unit\n- Use consistent vocabulary and reference back to previous units\n- The "Energy and Matter" concept is perfect for making connections across chemistry, physics, and earth science\n\nI\'d be happy to share some specific assessment rubrics we\'ve developed. Would that be helpful?',votes:22,createdAt:"1 day ago",isPinned:!0},{id:2,author:"Mike R.",authorRole:"Science Coordinator",content:'@Sarah M. I\'ve been working with OpenSciEd for 3 years now. One thing that really helped was creating a "practices tracker" - a simple document where students check off which science practices they used in each investigation. It helps them become more metacognitive about their learning process.\n\nFor crosscutting concepts, I use anchor charts that stay up all year and we add to them as we encounter examples in different units.',votes:8,createdAt:"1 day ago"},{id:3,author:"Jennifer L.",authorRole:"8th Grade Teacher",content:'The assessment piece is so challenging! I\'ve found that using exit tickets with specific prompts about the day\'s learning helps me gauge where students are without formal testing. Questions like "What pattern did you notice today?" or "How does today\'s investigation connect to our previous work with energy transfers?"',votes:5,createdAt:"18 hours ago"}];const Wf=function(){const e=Bf.id,[n,r]=(0,t.useState)(()=>{const t=localStorage.getItem(`forum_vote_topic_${e}`);return t?JSON.parse(t):null}),[o,i]=(0,t.useState)(()=>{const t=localStorage.getItem(`forum_votes_replies_${e}`);return t?JSON.parse(t):{}}),[a,l]=(0,t.useState)({name:"",email:"",content:""}),[s,c]=(0,t.useState)(!1),[u,d]=(0,t.useState)(()=>{const t=localStorage.getItem(`forum_flagged_${e}`);return t?JSON.parse(t):{}});(0,t.useEffect)(()=>{window.scrollTo(0,0)},[]);const f=async t=>{const o=n===t?null:t;r(o),o?localStorage.setItem(`forum_vote_topic_${e}`,JSON.stringify(o)):localStorage.removeItem(`forum_vote_topic_${e}`);try{const t=await fetch("https://theenergymuseum.com/api/forum.php/vote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"topic",topicId:e,vote:o})}),n=await t.json();n.success&&console.log("Vote recorded:",n)}catch(i){console.error("Error submitting vote:",i)}},p=async(t,n)=>{const r={...o,[t]:o[t]===n?null:n};i(r),localStorage.setItem(`forum_votes_replies_${e}`,JSON.stringify(r));try{const e=await fetch("https://theenergymuseum.com/api/forum.php/vote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"reply",replyId:t,vote:r[t]})}),n=await e.json();n.success&&console.log("Reply vote recorded:",n)}catch(a){console.error("Error submitting reply vote:",a)}},h=async function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"topic";if(window.confirm(`Are you sure you want to report this ${n} for inappropriate content? This will notify moderators.`)){const n={...u,[t]:!0};d(n),localStorage.setItem(`forum_flagged_${e}`,JSON.stringify(n));try{alert("Content has been reported to moderators. Thank you for helping keep our community safe.")}catch(r){console.error("Error flagging content:",r),alert("Unable to report content at this time. Please try again later.")}}},m=(e,t)=>"up"===t?e+1:"down"===t?e-1:e;return(0,io.jsxs)(pf,{children:[(0,io.jsxs)(hf,{children:[(0,io.jsxs)(it,{to:"/forum",children:[(0,io.jsx)(Co,{style:{marginRight:"0.3rem"}}),"Back to Forums"]}),(0,io.jsx)("span",{children:"/"}),(0,io.jsx)(it,{to:"/forum?category=trainings",children:"Trainings"}),(0,io.jsx)("span",{children:"/"}),(0,io.jsx)("span",{children:Bf.title})]}),(0,io.jsxs)(mf,{children:[(0,io.jsxs)(gf,{children:[Bf.isPinned&&(0,io.jsxs)(bf,{children:[(0,io.jsx)(Fo,{}),"Pinned"]}),Bf.title]}),(0,io.jsxs)(yf,{children:[(0,io.jsxs)(vf,{children:[(0,io.jsx)("strong",{children:Bf.author}),Bf.authorRole&&(0,io.jsxs)("span",{children:["\u2022 ",Bf.authorRole]})]}),(0,io.jsxs)(vf,{children:[(0,io.jsx)(To,{}),Bf.createdAt]}),(0,io.jsxs)(vf,{children:[(0,io.jsx)(Ao,{}),Bf.replies," replies"]}),(0,io.jsxs)(vf,{children:["\ud83d\udc41\ufe0f ",Bf.views," views"]})]}),(0,io.jsx)(xf,{dangerouslySetInnerHTML:{__html:Bf.content.replace(/\n/g,"<br/>")}}),(0,io.jsxs)(wf,{children:[(0,io.jsxs)(Sf,{$active:"up"===n,onClick:()=>f("up"),children:[(0,io.jsx)(Io,{}),"Helpful"]}),(0,io.jsx)(kf,{children:m(Bf.votes,n)}),(0,io.jsx)(Sf,{$active:"down"===n,onClick:()=>f("down"),children:(0,io.jsx)(Mo,{})}),(0,io.jsxs)(Af,{style:{marginLeft:"auto",opacity:u[Bf.id]?.5:1,color:u[Bf.id]?"#ff6b6b":void 0},onClick:()=>h(Bf.id,"topic"),disabled:u[Bf.id],children:[(0,io.jsx)(Oo,{}),u[Bf.id]?"Reported":"Report"]})]})]}),(0,io.jsxs)(jf,{children:[(0,io.jsxs)(Ef,{children:[(0,io.jsx)(Ao,{}),"Replies (",Bf.replies,")"]}),Hf.map(e=>(0,io.jsxs)(Cf,{children:[(0,io.jsxs)(Tf,{children:[(0,io.jsxs)(Pf,{children:[(0,io.jsx)(Of,{children:e.author.charAt(0)}),(0,io.jsxs)("div",{children:[(0,io.jsx)(Rf,{children:e.author}),e.authorRole&&(0,io.jsx)(_f,{children:e.authorRole})]})]}),(0,io.jsxs)(zf,{children:[(0,io.jsx)("span",{style:{color:"#8892a6",fontSize:"0.9rem"},children:e.createdAt}),(0,io.jsx)(Af,{style:{opacity:u[e.id]?.5:1,color:u[e.id]?"#ff6b6b":void 0},onClick:()=>h(e.id,"reply"),disabled:u[e.id],children:(0,io.jsx)(Oo,{})})]})]}),(0,io.jsx)(Nf,{dangerouslySetInnerHTML:{__html:e.content.replace(/\n/g,"<br/>")}}),(0,io.jsxs)(Lf,{children:[(0,io.jsxs)(Sf,{$active:"up"===o[e.id],onClick:()=>p(e.id,"up"),children:[(0,io.jsx)(Io,{}),m(e.votes,o[e.id])]}),(0,io.jsx)(Sf,{$active:"down"===o[e.id],onClick:()=>p(e.id,"down"),children:(0,io.jsx)(Mo,{})}),e.isPinned&&(0,io.jsxs)("div",{style:{marginLeft:"auto",color:"#64ffda",fontSize:"0.9rem"},children:[(0,io.jsx)(Fo,{style:{marginRight:"0.3rem"}}),"Team Response"]})]})]},e.id))]}),(0,io.jsxs)(Ff,{children:[(0,io.jsx)("h3",{style:{color:"#00d4ff",marginBottom:"1.5rem"},children:"Add Your Reply"}),(0,io.jsxs)("form",{onSubmit:async e=>{e.preventDefault(),c(!0),setTimeout(()=>{alert("Reply submitted! It will appear after moderation approval."),l({name:"",email:"",content:""}),c(!1)},1e3)},children:[(0,io.jsxs)(Df,{children:[(0,io.jsx)(Mf,{htmlFor:"name",children:"Name *"}),(0,io.jsx)(If,{id:"name",type:"text",value:a.name,onChange:e=>l(t=>({...t,name:e.target.value})),placeholder:"Your name",required:!0})]}),(0,io.jsxs)(Df,{children:[(0,io.jsx)(Mf,{htmlFor:"email",children:"Email (optional)"}),(0,io.jsx)(If,{id:"email",type:"email",value:a.email,onChange:e=>l(t=>({...t,email:e.target.value})),placeholder:"your.email@example.com"})]}),(0,io.jsxs)(Df,{children:[(0,io.jsx)(Mf,{htmlFor:"content",children:"Your Reply *"}),(0,io.jsx)($f,{id:"content",value:a.content,onChange:e=>l(t=>({...t,content:e.target.value})),placeholder:"Share your thoughts, experiences, or questions...",required:!0})]}),(0,io.jsx)(Uf,{type:"submit",disabled:s,children:s?"Submitting...":"Submit Reply"})]})]})]})},qf=(function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=Zr.apply(void 0,ht([e],n,!1)),i="sc-global-".concat(Mn(JSON.stringify(o))),a=new ro(o,i),l=function(e){var n=Dr(),r=t.useContext(Kr),o=t.useRef(n.styleSheet.allocateGSInstance(i)).current;return n.styleSheet.server&&s(o,e,n.styleSheet,r,n.stylis),t.useLayoutEffect(function(){if(!n.styleSheet.server)return s(o,e,n.styleSheet,r,n.stylis),function(){return a.removeStyles(o,n.styleSheet)}},[o,e,n.styleSheet,r,n.stylis]),null};function s(e,t,n,r,o){if(a.isStatic)a.renderStyles(e,jn,n,o);else{var i=pt(pt({},t),{theme:Tn(t,r,l.defaultProps)});a.renderStyles(e,i,n,o)}}return t.memo(l)})`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #0a0f1c;
    color: #ffffff;
    line-height: 1.6;
  }

  code {
    font-family: 'Fira Code', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #00d4ff;
    margin-bottom: 1rem;
  }

  a {
    color: #00d4ff;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #00a8cc;
  }

  p {
    margin-bottom: 1rem;
    color: #e0e6ed;
  }
`,Vf=no.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #0a0f1c 0%, #1a2332 100%);
`,Yf=no.main`
  flex: 1;
  padding: 0;
`;const Kf=function(){return(0,io.jsxs)(rt,{children:[(0,io.jsx)(qf,{}),(0,io.jsxs)(Vf,{children:[(0,io.jsx)(ho,{}),(0,io.jsx)(Yf,{children:(0,io.jsxs)(Se,{children:[(0,io.jsx)(xe,{path:"/",element:(0,io.jsx)($i,{})}),(0,io.jsx)(xe,{path:"/about",element:(0,io.jsx)(za,{})}),(0,io.jsx)(xe,{path:"/services",element:(0,io.jsx)(cl,{})}),(0,io.jsx)(xe,{path:"/experiences",element:(0,io.jsx)(du,{})}),(0,io.jsx)(xe,{path:"/experiences/:id",element:(0,io.jsx)(Mu,{})}),(0,io.jsx)(xe,{path:"/contact",element:(0,io.jsx)(ld,{})}),(0,io.jsx)(xe,{path:"/donate",element:(0,io.jsx)(pd,{})}),(0,io.jsx)(xe,{path:"/forum",element:(0,io.jsx)(ff,{})}),(0,io.jsx)(xe,{path:"/forum/topic/:topicId",element:(0,io.jsx)(Wf,{})}),(0,io.jsx)(xe,{path:"*",element:(0,io.jsx)($i,{})})]})}),(0,io.jsx)(Xo,{})]})]})},Qf=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then(t=>{let{getCLS:n,getFID:r,getFCP:o,getLCP:i,getTTFB:a}=t;n(e),r(e),o(e),i(e),a(e)})};r.createRoot(document.getElementById("root")).render((0,io.jsx)(t.StrictMode,{children:(0,io.jsx)(Kf,{})})),Qf()})()})();
//# sourceMappingURL=main.df4c8005.js.map