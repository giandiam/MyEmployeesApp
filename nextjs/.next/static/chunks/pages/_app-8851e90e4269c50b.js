(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9548:function(e,t,r){"use strict";var n=r(2980);Object.defineProperty(t,"__esModule",{value:!0}),t.BroadcastChannel=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"nextauth.message";return{receive:function(t){var r=function(r){var n;if(r.key===e){var o=JSON.parse(null!==(n=r.newValue)&&void 0!==n?n:"{}");"session"===(null===o||void 0===o?void 0:o.event)&&null!==o&&void 0!==o&&o.data&&t(o)}};return window.addEventListener("storage",r),function(){return window.removeEventListener("storage",r)}},post:function(t){"undefined"!==typeof window&&localStorage.setItem(e,JSON.stringify(c(c({},t),{},{timestamp:f()})))}}},t.apiBaseUrl=l,t.fetchData=function(e,t,r){return i.apply(this,arguments)},t.now=f;var o=n(r(224)),a=n(r(1396)),u=n(r(1481));function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(){return(i=(0,u.default)(o.default.mark((function e(t,r,n){var a,u,s,i,f,p,d,v=arguments;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=v.length>3&&void 0!==v[3]?v[3]:{},u=a.ctx,s=a.req,i=void 0===s?null===u||void 0===u?void 0:u.req:s,e.prev=1,f=null!==i&&void 0!==i&&i.headers.cookie?{headers:{cookie:i.headers.cookie}}:{},e.next=5,fetch("".concat(l(r),"/").concat(t),f);case 5:return p=e.sent,e.next=8,p.json();case 8:if(d=e.sent,p.ok){e.next=11;break}throw d;case 11:return e.abrupt("return",Object.keys(d).length>0?d:null);case 14:return e.prev=14,e.t0=e.catch(1),n.error("CLIENT_FETCH_ERROR",c({error:e.t0,path:t},i?{header:i.headers}:{})),e.abrupt("return",null);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}function l(e){return"undefined"===typeof window?"".concat(e.baseUrlServer).concat(e.basePathServer):e.basePath}function f(){return Math.floor(Date.now()/1e3)}},6925:function(e,t,r){"use strict";var n=r(2980);Object.defineProperty(t,"__esModule",{value:!0}),t.UnsupportedStrategy=t.UnknownError=t.OAuthCallbackError=t.MissingSecret=t.MissingAuthorize=t.MissingAdapter=t.MissingAPIRoute=t.AccountNotLinkedError=void 0,t.adapterErrorHandler=function(e,t){if(!e)return;return Object.keys(e).reduce((function(r,n){return r[n]=(0,a.default)(o.default.mark((function r(){var a,u,s,c,i,l=arguments;return o.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(r.prev=0,a=l.length,u=new Array(a),s=0;s<a;s++)u[s]=l[s];return t.debug("adapter_".concat(n),{args:u}),c=e[n],r.next=6,c.apply(void 0,u);case 6:return r.abrupt("return",r.sent);case 9:throw r.prev=9,r.t0=r.catch(0),t.error("adapter_error_".concat(n),r.t0),(i=new v(r.t0)).name="".concat(m(n),"Error"),i;case 15:case"end":return r.stop()}}),r,null,[[0,9]])}))),r}),{})},t.capitalize=m,t.eventsErrorHandler=function(e,t){return Object.keys(e).reduce((function(r,n){return r[n]=(0,a.default)(o.default.mark((function r(){var a,u=arguments;return o.default.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a=e[n],r.next=4,a.apply(void 0,u);case 4:return r.abrupt("return",r.sent);case 7:r.prev=7,r.t0=r.catch(0),t.error("".concat(O(n),"_EVENT_ERROR"),r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])}))),r}),{})},t.upperSnake=O;var o=n(r(224)),a=n(r(1481)),u=n(r(3387)),s=n(r(1396)),c=n(r(203)),i=n(r(4370)),l=n(r(2269)),f=n(r(9365)),p=n(r(2141));function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,p.default)(e);if(t){var o=(0,p.default)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,f.default)(this,r)}}var v=function(e){(0,l.default)(r,e);var t=d(r);function r(e){var n,o;return(0,c.default)(this,r),(o=t.call(this,null!==(n=null===e||void 0===e?void 0:e.message)&&void 0!==n?n:e)).name="UnknownError",o.code=e.code,e instanceof Error&&(o.stack=e.stack),o}return(0,i.default)(r,[{key:"toJSON",value:function(){return{name:this.name,message:this.message,stack:this.stack}}}]),r}((0,n(r(5357)).default)(Error));t.UnknownError=v;var h=function(e){(0,l.default)(r,e);var t=d(r);function r(){var e;(0,c.default)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),(0,s.default)((0,u.default)(e),"name","OAuthCallbackError"),e}return r}(v);t.OAuthCallbackError=h;var y=function(e){(0,l.default)(r,e);var t=d(r);function r(){var e;(0,c.default)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),(0,s.default)((0,u.default)(e),"name","AccountNotLinkedError"),e}return r}(v);t.AccountNotLinkedError=y;var b=function(e){(0,l.default)(r,e);var t=d(r);function r(){var e;(0,c.default)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),(0,s.default)((0,u.default)(e),"name","MissingAPIRouteError"),(0,s.default)((0,u.default)(e),"code","MISSING_NEXTAUTH_API_ROUTE_ERROR"),e}return r}(v);t.MissingAPIRoute=b;var x=function(e){(0,l.default)(r,e);var t=d(r);function r(){var e;(0,c.default)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),(0,s.default)((0,u.default)(e),"name","MissingSecretError"),(0,s.default)((0,u.default)(e),"code","NO_SECRET"),e}return r}(v);t.MissingSecret=x;var g=function(e){(0,l.default)(r,e);var t=d(r);function r(){var e;(0,c.default)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),(0,s.default)((0,u.default)(e),"name","MissingAuthorizeError"),(0,s.default)((0,u.default)(e),"code","CALLBACK_CREDENTIALS_HANDLER_ERROR"),e}return r}(v);t.MissingAuthorize=g;var w=function(e){(0,l.default)(r,e);var t=d(r);function r(){var e;(0,c.default)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),(0,s.default)((0,u.default)(e),"name","MissingAdapterError"),(0,s.default)((0,u.default)(e),"code","EMAIL_REQUIRES_ADAPTER_ERROR"),e}return r}(v);t.MissingAdapter=w;var _=function(e){(0,l.default)(r,e);var t=d(r);function r(){var e;(0,c.default)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),(0,s.default)((0,u.default)(e),"name","UnsupportedStrategyError"),(0,s.default)((0,u.default)(e),"code","CALLBACK_CREDENTIALS_JWT_ERROR"),e}return r}(v);function O(e){return e.replace(/([A-Z])/g,"_$1").toUpperCase()}function m(e){return"".concat(e[0].toUpperCase()).concat(e.slice(1))}t.UnsupportedStrategy=_},9498:function(e,t,r){"use strict";var n=r(2980);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.proxyLogger=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;try{if("undefined"===typeof window)return e;var r={},n=function(e){r[e]=function(r,n){i[e](r,n),"error"===e&&(n=c(n)),n.client=!0;var o="".concat(t,"/_log"),a=new URLSearchParams(s({level:e,code:r},n));return navigator.sendBeacon?navigator.sendBeacon(o,a):fetch(o,{method:"POST",body:a,keepalive:!0})}};for(var o in e)n(o);return r}catch(a){return i}},t.setLogger=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;t||(i.debug=function(){});e.error&&(i.error=e.error);e.warn&&(i.warn=e.warn);e.debug&&(i.debug=e.debug)};var o=n(r(1396)),a=r(6925);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e){if(e instanceof Error&&!(e instanceof a.UnknownError))return{message:e.message,stack:e.stack,name:e.name};var t,r;null!==(r=e)&&void 0!==r&&r.error&&(e.error=c(e.error),e.message=null!==(t=e.message)&&void 0!==t?t:e.error.message);return e}var i={error:function(e,t){t=c(t),console.error("[next-auth][error][".concat(e,"]"),"\nhttps://next-auth.js.org/errors#".concat(e.toLowerCase()),t.message,t)},warn:function(e){console.warn("[next-auth][warn][".concat(e,"]"),"\nhttps://next-auth.js.org/warnings#".concat(e.toLowerCase()))},debug:function(e,t){console.log("[next-auth][debug][".concat(e,"]"),t)}};var l=i;t.default=l},8341:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t;const r=new URL("http://localhost:3000/api/auth");e&&!e.startsWith("http")&&(e=`https://${e}`);const n=new URL(null!==(t=e)&&void 0!==t?t:r),o=("/"===n.pathname?r.pathname:n.pathname).replace(/\/$/,""),a=`${n.origin}${o}`;return{origin:n.origin,host:n.host,path:o,base:a,toString:()=>a}}},4790:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},6987:function(e){e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},3387:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},1481:function(e){function t(e,t,r,n,o,a,u){try{var s=e[a](u),c=s.value}catch(i){return void r(i)}s.done?t(c):Promise.resolve(c).then(n,o)}e.exports=function(e){return function(){var r=this,n=arguments;return new Promise((function(o,a){var u=e.apply(r,n);function s(e){t(u,o,a,s,c,"next",e)}function c(e){t(u,o,a,s,c,"throw",e)}s(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},203:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},463:function(e,t,r){var n=r(4391),o=r(3864);function a(t,r,u){return o()?(e.exports=a=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},4370:function(e){function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},1396:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},2141:function(e){function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},2269:function(e,t,r){var n=r(4391);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},2980:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},1956:function(e){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")},e.exports.__esModule=!0,e.exports.default=e.exports},3864:function(e){e.exports=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},1129:function(e){e.exports=function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,s=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(c){s=!0,o=c}finally{try{u||null==r.return||r.return()}finally{if(s)throw o}}return a}},e.exports.__esModule=!0,e.exports.default=e.exports},1370:function(e){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},9365:function(e,t,r){var n=r(6063).default,o=r(3387);e.exports=function(e,t){if(t&&("object"===n(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4391:function(e){function t(r,n){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r,n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},7516:function(e,t,r){var n=r(6987),o=r(1129),a=r(4692),u=r(1370);e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||u()},e.exports.__esModule=!0,e.exports.default=e.exports},6063:function(e){function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4692:function(e,t,r){var n=r(4790);e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},5357:function(e,t,r){var n=r(2141),o=r(4391),a=r(1956),u=r(463);function s(t){var r="function"===typeof Map?new Map:void 0;return e.exports=s=function(e){if(null===e||!a(e))return e;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof r){if(r.has(e))return r.get(e);r.set(e,t)}function t(){return u(e,arguments,n(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},e.exports.__esModule=!0,e.exports.default=e.exports,s(t)}e.exports=s,e.exports.__esModule=!0,e.exports.default=e.exports},224:function(e,t,r){e.exports=r(5666)},3299:function(e,t,r){"use strict";var n=r(4155),o=r(2980),a=r(6063);Object.defineProperty(t,"__esModule",{value:!0});var u={useSession:!0,getSession:!0,getCsrfToken:!0,getProviders:!0,signIn:!0,signOut:!0,SessionProvider:!0};t.SessionProvider=function(e){var t=e.children,r=e.basePath;r&&(j.basePath=r);var n=void 0!==e.session;j._lastSync=n?(0,x.now)():0;var o=h.useState((function(){return n&&(j._session=e.session),e.session})),a=(0,d.default)(o,2),u=a[0],s=a[1],c=h.useState(!n),i=(0,d.default)(c,2),l=i[0],p=i[1];h.useEffect((function(){j._getSession=(0,v.default)(f.default.mark((function e(){var t,r,n,o=arguments;return f.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=o.length>0&&void 0!==o[0]?o[0]:{},r=t.event,e.prev=1,!(n="storage"===r)&&void 0!==j._session){e.next=10;break}return j._lastSync=(0,x.now)(),e.next=7,R({broadcast:!n});case 7:return j._session=e.sent,s(j._session),e.abrupt("return");case 10:if(r&&null!==j._session&&!((0,x.now)()<j._lastSync)){e.next=12;break}return e.abrupt("return");case 12:return j._lastSync=(0,x.now)(),e.next=15,R();case 15:j._session=e.sent,s(j._session),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),S.error("CLIENT_SESSION_ERROR",e.t0);case 22:return e.prev=22,p(!1),e.finish(22);case 25:case"end":return e.stop()}}),e,null,[[1,19,22,25]])}))),j._getSession()}),[]),h.useEffect((function(){var e=P.receive((function(){return j._getSession({event:"storage"})}));return function(){return e()}}),[]),h.useEffect((function(){var e=function(){"visible"===document.visibilityState&&j._getSession({event:"visibilitychange"})};return document.addEventListener("visibilitychange",e,!1),function(){return document.removeEventListener("visibilitychange",e,!1)}}),[]),h.useEffect((function(){var t=e.refetchInterval;if(t){var r=setInterval((function(){j._session&&j._getSession({event:"poll"})}),1e3*t);return function(){return clearInterval(r)}}}),[e.refetchInterval]);var y=h.useMemo((function(){return{data:u,status:l?"loading":u?"authenticated":"unauthenticated"}}),[u,l]);return(0,g.jsx)(k.Provider,{value:y,children:t})},t.getCsrfToken=A,t.getProviders=L,t.getSession=R,t.signIn=function(e,t,r){return C.apply(this,arguments)},t.signOut=function(e){return N.apply(this,arguments)},t.useSession=function(e){var t=h.useContext(k);0;var r=null!==e&&void 0!==e?e:{},n=r.required,o=r.onUnauthenticated,a=n&&"unauthenticated"===t.status;if(h.useEffect((function(){if(a){var e="/api/auth/signin?".concat(new URLSearchParams({error:"SessionRequired",callbackUrl:window.location.href}));o?o():window.location.href=e}}),[a,o]),a)return{data:t.data,status:"loading"};return t};var s,c,i,l,f=o(r(224)),p=o(r(1396)),d=o(r(7516)),v=o(r(1481)),h=O(r(7294)),y=O(r(9498)),b=o(r(8341)),x=r(9548),g=r(5893),w=r(527);function _(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(_=function(e){return e?r:t})(e)}function O(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var r=_(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var s=o?Object.getOwnPropertyDescriptor(e,u):null;s&&(s.get||s.set)?Object.defineProperty(n,u,s):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,p.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object.keys(w).forEach((function(e){"default"!==e&&"__esModule"!==e&&(Object.prototype.hasOwnProperty.call(u,e)||e in t&&t[e]===w[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return w[e]}}))}));var j={baseUrl:(0,b.default)(null!==(s=n.env.NEXTAUTH_URL)&&void 0!==s?s:n.env.VERCEL_URL).origin,basePath:(0,b.default)(n.env.NEXTAUTH_URL).path,baseUrlServer:(0,b.default)(null!==(c=null!==(i=n.env.NEXTAUTH_URL_INTERNAL)&&void 0!==i?i:n.env.NEXTAUTH_URL)&&void 0!==c?c:n.env.VERCEL_URL).origin,basePathServer:(0,b.default)(null!==(l=n.env.NEXTAUTH_URL_INTERNAL)&&void 0!==l?l:n.env.NEXTAUTH_URL).path,_lastSync:0,_session:void 0,_getSession:function(){}},P=(0,x.BroadcastChannel)(),S=(0,y.proxyLogger)(y.default,j.basePath),k=h.createContext(void 0);function R(e){return M.apply(this,arguments)}function M(){return(M=(0,v.default)(f.default.mark((function e(t){var r,n;return f.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.fetchData)("session",j,S,t);case 2:return n=e.sent,(null===(r=null===t||void 0===t?void 0:t.broadcast)||void 0===r||r)&&P.post({event:"session",data:{trigger:"getSession"}}),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return U.apply(this,arguments)}function U(){return(U=(0,v.default)(f.default.mark((function e(t){var r;return f.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.fetchData)("csrf",j,S,t);case 2:return r=e.sent,e.abrupt("return",null===r||void 0===r?void 0:r.csrfToken);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return T.apply(this,arguments)}function T(){return(T=(0,v.default)(f.default.mark((function e(){return f.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.fetchData)("providers",j,S);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=(0,v.default)(f.default.mark((function e(t,r,n){var o,a,u,s,c,i,l,p,d,v,h,y,b,g,w,_,O;return f.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=(o=null!==r&&void 0!==r?r:{}).callbackUrl,u=void 0===a?window.location.href:a,s=o.redirect,c=void 0===s||s,i=(0,x.apiBaseUrl)(j),e.next=4,L();case 4:if(l=e.sent){e.next=8;break}return window.location.href="".concat(i,"/error"),e.abrupt("return");case 8:if(t&&t in l){e.next=11;break}return window.location.href="".concat(i,"/signin?").concat(new URLSearchParams({callbackUrl:u})),e.abrupt("return");case 11:return p="credentials"===l[t].type,d="email"===l[t].type,v=p||d,h="".concat(i,"/").concat(p?"callback":"signin","/").concat(t),y="".concat(h,"?").concat(new URLSearchParams(n)),e.t0=fetch,e.t1=y,e.t2={"Content-Type":"application/x-www-form-urlencoded"},e.t3=URLSearchParams,e.t4=E,e.t5=E({},r),e.t6={},e.next=25,A();case 25:return e.t7=e.sent,e.t8=u,e.t9={csrfToken:e.t7,callbackUrl:e.t8,json:!0},e.t10=(0,e.t4)(e.t5,e.t6,e.t9),e.t11=new e.t3(e.t10),e.t12={method:"post",headers:e.t2,body:e.t11},e.next=33,(0,e.t0)(e.t1,e.t12);case 33:return b=e.sent,e.next=36,b.json();case 36:if(g=e.sent,!c&&v){e.next=42;break}return _=null!==(w=g.url)&&void 0!==w?w:u,window.location.href=_,_.includes("#")&&window.location.reload(),e.abrupt("return");case 42:if(O=new URL(g.url).searchParams.get("error"),!b.ok){e.next=46;break}return e.next=46,j._getSession({event:"storage"});case 46:return e.abrupt("return",{error:O,status:b.status,ok:b.ok,url:O?null:g.url});case 47:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=(0,v.default)(f.default.mark((function e(t){var r,n,o,a,u,s,c,i,l;return f.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(null!==t&&void 0!==t?t:{}).callbackUrl,o=void 0===n?window.location.href:n,a=(0,x.apiBaseUrl)(j),e.t0={"Content-Type":"application/x-www-form-urlencoded"},e.t1=URLSearchParams,e.next=6,A();case 6:return e.t2=e.sent,e.t3=o,e.t4={csrfToken:e.t2,callbackUrl:e.t3,json:!0},e.t5=new e.t1(e.t4),u={method:"post",headers:e.t0,body:e.t5},e.next=13,fetch("".concat(a,"/signout"),u);case 13:return s=e.sent,e.next=16,s.json();case 16:if(c=e.sent,P.post({event:"session",data:{trigger:"signout"}}),null!==(r=null===t||void 0===t?void 0:t.redirect)&&void 0!==r&&!r){e.next=23;break}return l=null!==(i=c.url)&&void 0!==i?i:o,window.location.href=l,l.includes("#")&&window.location.reload(),e.abrupt("return");case 23:return e.next=25,j._getSession({event:"storage"});case 25:return e.abrupt("return",c);case 26:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},527:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(8510)}])},8510:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(5893),o=r(3299);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function c(e){var t=e.Component,r=e.pageProps.session,a=s(e.pageProps,["session"]);return(0,n.jsx)(o.SessionProvider,{session:r,children:(0,n.jsx)(t,u({},a))})}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var r=e.O();_N_E=r}]);