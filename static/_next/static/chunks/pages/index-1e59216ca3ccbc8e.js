(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7217)}])},9452:function(n,e,t){"use strict";var r=t(7320),i=t(2962),a=t(9008),c=t(1163),o=t(5125);e.Z=function(n){var e=(0,c.useRouter)();return(0,r.BX)(r.HY,{children:[(0,r.BX)(a.default,{children:[(0,r.tZ)("meta",{charSet:"UTF-8"},"charset"),(0,r.tZ)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,r.tZ)("link",{rel:"apple-touch-icon",href:"".concat(e.basePath,"/apple-touch-icon.png")},"apple"),(0,r.tZ)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(e.basePath,"/favicon-32x32.png")},"icon32"),(0,r.tZ)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(e.basePath,"/favicon-16x16.png")},"icon16"),(0,r.tZ)("link",{rel:"icon",href:"".concat(e.basePath,"/favicon.ico")},"favicon")]}),(0,r.tZ)(i.PB,{title:n.title,description:n.description,canonical:n.canonical,openGraph:{title:n.title,description:n.description,url:n.canonical,locale:o.Z.locale,site_name:o.Z.site_name}})]})}},7217:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return R}});var r=t(4051),i=t.n(r),a=t(7320),c=t(6307),o=t(4003),u=t(1664),s=t(9438),l=t(9452),f=t(1720),v=t(2592);function p(n,e,t,r,i,a,c){try{var o=n[a](c),u=o.value}catch(s){return void t(s)}o.done?e(u):Promise.resolve(u).then(r,i)}var d=function(n){var e=n.data,t=(0,f.useRef)(null);return(0,f.useEffect)((function(){v.toCanvas(t.current,e,function(){var n,t=(n=i().mark((function n(t){var r,a,c,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=4;break}return n.next=4,null===(r=window.pywebview)||void 0===r||null===(a=r.api)||void 0===a?void 0:a.log(t);case 4:return n.next=6,null===(c=window.pywebview)||void 0===c||null===(o=c.api)||void 0===o?void 0:o.log("Created QR: ".concat(e));case 6:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function c(n){p(a,r,i,c,o,"next",n)}function o(n){p(a,r,i,c,o,"throw",n)}c(void 0)}))});return function(n){return t.apply(this,arguments)}}())}),[e]),(0,a.tZ)("canvas",{ref:t})},h=t(5125);var w=function(n,e,t){return new Promise((function(r,i){return n().then(r).catch((function(a){return t>0?(c=e,new Promise((function(n){return setTimeout(n,c)}))).then(w.bind(null,n,e,t-1)).then(r).catch((function(n){var e,t,r="Operation failed";e=n,(null!=(t=Error)&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t)&&(r=n.message),i(r)})):i(a);var c}))}))};function m(n,e,t,r,i,a,c){try{var o=n[a](c),u=o.value}catch(s){return void t(s)}o.done?e(u):Promise.resolve(u).then(r,i)}function Z(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function c(n){m(a,r,i,c,o,"next",n)}function o(n){m(a,r,i,c,o,"throw",n)}c(void 0)}))}}function y(n,e){return null!=e&&"undefined"!==typeof Symbol&&e[Symbol.hasInstance]?e[Symbol.hasInstance](n):n instanceof e}var x=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return w(Z(i().mark((function t(){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,window.pywebview.api.log("PyCall ".concat(n));case 3:return t.next=5,window.pywebview.api[n](e);case 5:return r=t.sent,t.abrupt("return",r);case 9:return t.prev=9,t.t0=t.catch(0),a="PyCall ".concat(n," failed"),t.next=14,window.pywebview.api.log(a);case 14:throw y(t.t0,Error)&&(a=t.t0.message),new Error(a);case 16:case"end":return t.stop()}}),t,null,[[0,9]])}))),h.Z.RETRY_DELAY,h.Z.MAX_RETRIES).then(function(){var n=Z(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=JSON.parse(e),n.abrupt("return",t.message);case 5:return n.prev=5,n.t0=n.catch(0),n.next=9,window.pywebview.api.log(e);case 9:return n.abrupt("return",e);case 10:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(e){return n.apply(this,arguments)}}()).catch(function(){var n=Z(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.pywebview.api.log(e);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())};function b(n,e,t,r,i,a,c){try{var o=n[a](c),u=o.value}catch(s){return void t(s)}o.done?e(u):Promise.resolve(u).then(r,i)}var g=function(){var n,e=(n=i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),n.prev=1,n.next=5,null===(t=window.pywebview)||void 0===t||null===(r=t.api)||void 0===r?void 0:r.log(e);case 5:return n.abrupt("return",!0);case 8:return n.prev=8,n.t0=n.catch(1),console.error("Logging error"),n.abrupt("return",!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})),function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function c(n){b(a,r,i,c,o,"next",n)}function o(n){b(a,r,i,c,o,"throw",n)}c(void 0)}))});return function(n){return e.apply(this,arguments)}}(),P=g;function _(n,e,t,r,i,a,c){try{var o=n[a](c),u=o.value}catch(s){return void t(s)}o.done?e(u):Promise.resolve(u).then(r,i)}var E=function(){var n,e=(n=i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x("getHardwareId").catch((function(n){return P(n),"XXXXXXX"}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function c(n){_(a,r,i,c,o,"next",n)}function o(n){_(a,r,i,c,o,"throw",n)}c(void 0)}))});return function(){return e.apply(this,arguments)}}(),X=E,k=t(9316);function S(n,e,t,r,i,a,c){try{var o=n[a](c),u=o.value}catch(s){return void t(s)}o.done?e(u):Promise.resolve(u).then(r,i)}var N=function(){var n,e=(n=i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,X();case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,i){var a=n.apply(e,t);function c(n){S(a,r,i,c,o,"next",n)}function o(n){S(a,r,i,c,o,"throw",n)}c(void 0)}))});return function(){return e.apply(this,arguments)}}(),R=function(){var n=(0,s.Z)("hardware-id",N),e=n.data,t=n.error;return(0,a.BX)(k.Z,{meta:(0,a.tZ)(l.Z,{title:"Smartcloud | ".concat(h.Z.title,": ").concat(h.Z.tagline),description:h.Z.description}),children:[(0,a.tZ)(l.Z,{title:"".concat(h.Z.title,": ").concat(h.Z.tagline),description:h.Z.description}),(0,a.BX)("div",{className:"flex flex-col content-center justify-center text-center",children:[(0,a.tZ)("p",{children:t?"Error":e||"loading"}),(0,a.tZ)(d,{data:e}),(0,a.tZ)(o.Z,{endIcon:(0,a.tZ)(c.Z,{}),loading:!e,loadingPosition:"end",variant:"contained",children:(0,a.tZ)(u.default,{href:"/wifi",children:(0,a.tZ)("a",{children:"WiFi Setup"})})})]})]})}},9316:function(n,e,t){"use strict";t.d(e,{Z:function(){return p}});var r=t(7320),i=t(1664),a=t(1163),c=t(1884);function o(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function u(){var n=o([""]);return u=function(){return n},n}function s(){var n=o([""]);return s=function(){return n},n}var l=c.Z.div(u()),f=c.Z.div(s()),v=t(5125),p=function(n){var e=(0,a.useRouter)().pathname;return(0,r.BX)(l,{className:"p-2",children:[n.meta,(0,r.BX)("div",{className:"max-w-screen-md w-full mx-auto relative",children:[(0,r.tZ)("div",{children:"/"!==e&&(0,r.tZ)("div",{className:"pb-6",children:(0,r.tZ)("div",{className:"font-extrabold text-6xl text-gray-900",children:(0,r.tZ)(i.default,{href:"/",children:(0,r.tZ)("a",{children:v.Z.title})})})})}),(0,r.tZ)(f,{className:"py-6",children:n.children})]})]})}},5125:function(n,e){"use strict";var t={totalImages:5,site_name:"iot-cloud",email:"me@lacymorrow.com",title:"SmartCloud",tagline:"Firmware for iot scheduler",description:"Firmware for iot scheduler",locale:"en",errorMessage:"",MAX_RETRIES:10,RETRY_DELAY:500};t.errorMessage='There was an error, please email <a href="mailto:'.concat(t.email,'">').concat(t.email,"</a>"),e.Z=t}},function(n){n.O(0,[525,726,888,179],(function(){return e=5301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);