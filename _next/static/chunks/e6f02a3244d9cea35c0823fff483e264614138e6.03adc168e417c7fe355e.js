(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"+3YS":function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},"+Sw5":function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},"+bRE":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},"/FXl":function(e,t,r){"use strict";r.r(t),r.d(t,"MDXContext",(function(){return s})),r.d(t,"MDXProvider",(function(){return d})),r.d(t,"mdx",(function(){return y})),r.d(t,"useMDXComponents",(function(){return p})),r.d(t,"withMDXComponents",(function(){return l}));var n=r("mXGw"),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){return function(t){var r=p(t.components);return o.a.createElement(e,i({},t,{components:r}))}},p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"===typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},v=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=f(e,["components","mdxType","originalType","parentName"]),s=p(r),l=n,d=s["".concat(i,".").concat(l)]||s[l]||h[l]||a;return r?o.a.createElement(d,c(c({ref:t},u),{},{components:r})):o.a.createElement(d,c({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var a=r.length,i=new Array(a);i[0]=v;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"===typeof e?e:n,i[1]=u;for(var f=2;f<a;f++)i[f]=r[f];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},"2LUv":function(e,t,r){var n=r("m1Oa"),o=r("o/EK"),a=r("ShTl"),i=r("sJOi");e.exports=function(e){return n(e)||o(e)||a(e)||i()}},"5IsQ":function(e,t){var r,n,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"===typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var c,f=[],s=!1,l=-1;function p(){s&&c&&(s=!1,c.length?f=c.concat(f):l=-1,f.length&&d())}function d(){if(!s){var e=u(p);s=!0;for(var t=f.length;t;){for(c=f,f=[];++l<t;)c&&c[l].run();l=-1,t=f.length}c=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];f.push(new h(e,t)),1!==f.length||s||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"5dyF":function(e,t,r){e.exports=r("9CGT")},"8VmE":function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},"9CGT":function(e,t,r){"use strict";var n=r("yXh+"),o=r("HIQq");t.__esModule=!0,t.default=void 0;var a,i=o(r("mXGw")),u=r("a4i1"),c=r("bBV7"),f=new Map,s=window.IntersectionObserver,l={};var p=function(e,t){var r=a||(s?a=new s((function(e){e.forEach((function(e){if(f.has(e.target)){var t=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),f.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return r?(r.observe(e),f.set(e,t),function(){try{r.unobserve(e)}catch(t){console.error(t)}f.delete(e)}):function(){}};function d(e,t,r,n){(0,u.isLocalURL)(t)&&(e.prefetch(t,r,n).catch((function(e){0})),l[t+"%"+r]=!0)}var h=function(e){var t=!1!==e.prefetch,r=i.default.useState(),o=n(r,2),a=o[0],f=o[1],h=(0,c.useRouter)(),v=h&&h.pathname||"/",y=i.default.useMemo((function(){var t=(0,u.resolveHref)(v,e.href,!0),r=n(t,2),o=r[0],a=r[1];return{href:o,as:e.as?(0,u.resolveHref)(v,e.as):a||o}}),[v,e.href,e.as]),m=y.href,b=y.as;i.default.useEffect((function(){if(t&&s&&a&&a.tagName&&(0,u.isLocalURL)(m)&&!l[m+"%"+b])return p(a,(function(){d(h,m,b)}))}),[t,a,m,b,h]);var g=e.children,w=e.replace,O=e.shallow,x=e.scroll;"string"===typeof g&&(g=i.default.createElement("a",null,g));var j=i.Children.only(g),E={ref:function(e){e&&f(e),j&&"object"===typeof j&&j.ref&&("function"===typeof j.ref?j.ref(e):"object"===typeof j.ref&&(j.ref.current=e))},onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(r))&&(e.preventDefault(),null==i&&(i=n.indexOf("#")<0),t[o?"replace":"push"](r,n,{shallow:a}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,m,b,w,O,x)}};return t&&(E.onMouseEnter=function(e){(0,u.isLocalURL)(m)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),d(h,m,b,{priority:!0}))}),(e.passHref||"a"===j.type&&!("href"in j.props))&&(E.href=(0,u.addBasePath)((0,u.addLocale)(b,h&&h.locale,h&&h.defaultLocale))),i.default.cloneElement(j,E)};t.default=h},"9fEB":function(e,t,r){"use strict";r("OQL8");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r("mXGw")),a=(n=r("GlZI"))&&n.__esModule?n:{default:n},i=r("9rrO"),u=r("bxxT"),c=r("vI6Y");function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var r=o.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(l,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=p.length;u<c;u++){var f=p[u];if(o.props.hasOwnProperty(f))if("charSet"===f)r.has(f)?a=!1:r.add(f);else{var s=o.props[f],l=n[f]||new Set;l.has(s)?a=!1:(l.add(s),n[f]=l)}}}return a}}()).reverse().map((function(e,t){var r=e.key||t;return o.default.cloneElement(e,{key:r})}))}function h(e){var t=e.children,r=(0,o.useContext)(i.AmpStateContext),n=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:n,inAmpMode:(0,c.isInAmpMode)(r)},t)}h.rewind=function(){};var v=h;t.default=v},"9rrO":function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r("mXGw"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},Fcif:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},GlZI:function(e,t,r){"use strict";var n=r("2LUv"),o=r("fwM5"),a=r("bkNG"),i=(r("0pOA"),r("5YB7")),u=r("Y8Bl"),c=r("7osH");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return u(this,r)}}t.__esModule=!0,t.default=void 0;var s=r("mXGw"),l=function(e){i(r,e);var t=f(r);function r(e){var a;return o(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(s.Component);t.default=l},"O2/E":function(e,t,r){(function(e){function r(e,t){for(var r=0,n=e.length-1;n>=0;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function n(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}t.resolve=function(){for(var t="",o=!1,a=arguments.length-1;a>=-1&&!o;a--){var i=a>=0?arguments[a]:e.cwd();if("string"!==typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,o="/"===i.charAt(0))}return(o?"/":"")+(t=r(n(t.split("/"),(function(e){return!!e})),!o).join("/"))||"."},t.normalize=function(e){var a=t.isAbsolute(e),i="/"===o(e,-1);return(e=r(n(e.split("/"),(function(e){return!!e})),!a).join("/"))||a||(e="."),e&&i&&(e+="/"),(a?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(n(e,(function(e,t){if("string"!==typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,r){function n(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var o=n(e.split("/")),a=n(r.split("/")),i=Math.min(o.length,a.length),u=i,c=0;c<i;c++)if(o[c]!==a[c]){u=c;break}var f=[];for(c=u;c<o.length;c++)f.push("..");return(f=f.concat(a.slice(u))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!==typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,n=-1,o=!0,a=e.length-1;a>=1;--a)if(47===(t=e.charCodeAt(a))){if(!o){n=a;break}}else o=!1;return-1===n?r?"/":".":r&&1===n?"/":e.slice(0,n)},t.basename=function(e,t){var r=function(e){"string"!==typeof e&&(e+="");var t,r=0,n=-1,o=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!o){r=t+1;break}}else-1===n&&(o=!1,n=t+1);return-1===n?"":e.slice(r,n)}(e);return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},t.extname=function(e){"string"!==typeof e&&(e+="");for(var t=-1,r=0,n=-1,o=!0,a=0,i=e.length-1;i>=0;--i){var u=e.charCodeAt(i);if(47!==u)-1===n&&(o=!1,n=i+1),46===u?-1===t?t=i:1!==a&&(a=1):-1!==t&&(a=-1);else if(!o){r=i+1;break}}return-1===t||-1===n||0===a||1===a&&t===n-1&&t===r+1?"":e.slice(t,n)};var o="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(this,r("5IsQ"))},OQL8:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},PDtE:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"===typeof e||"number"===typeof e)o+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}r.r(t),t.default=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},PE9J:function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}},RiSW:function(e,t,r){var n=r("PE9J");e.exports=function(e,t){if(null==e)return{};var r,o,a=n(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}},S411:function(e,t){e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}}},V5Fo:function(e,t,r){"use strict";r.r(t),r.d(t,"titleCase",(function(){return c}));var n=/\b(?:an?d?|a[st]|because|but|by|en|for|i[fn]|neither|nor|o[fnr]|only|over|per|so|some|tha[tn]|the|to|up|upon|vs?\.?|versus|via|when|with|without|yet)\b/i,o=/[^\s:\u2013\u2014-]+|./g,a=/\s/,i=/.(?=[A-Z]|\..)/,u=/[A-Za-z0-9\u00C0-\u00FF]/;function c(e){for(var t,r="";null!==(t=o.exec(e));){var c=t[0],f=t.index;i.test(c)||n.test(c)&&0!==f&&f+c.length!==e.length||":"===e.charAt(f+c.length)&&!a.test(e.charAt(f+c.length+1))?r+=c:r+=c.replace(u,(function(e){return e.toUpperCase()}))}return r}},YO29:function(e,t,r){"use strict";r.r(t);var n=r("mXGw");const o=n["undefined"!==typeof document&&void 0!==document.createElement?"useLayoutEffect":"useEffect"];t.default=o},Zhxd:function(e,t,r){var n=r("+Sw5");e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},"dV/x":function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,"a",(function(){return n}))},m1Oa:function(e,t,r){var n=r("z3mR");e.exports=function(e){if(Array.isArray(e))return n(e)}},nxTg:function(e,t,r){var n=r("+3YS"),o=r("S411"),a=r("Zhxd"),i=r("+bRE");e.exports=function(e,t){return n(e)||o(e,t)||a(e,t)||i()}},"o/EK":function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},sJOi:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},vI6Y:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r("mXGw"))&&n.__esModule?n:{default:n},a=r("9rrO");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,i=void 0!==a&&a;return r||o&&i}}}]);