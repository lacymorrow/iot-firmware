(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4789)}])},9452:function(n,e,r){"use strict";var t=r(7320),a=r(2962),c=r(9008),i=r(1163),o=r(5125);e.Z=function(n){var e=(0,i.useRouter)();return(0,t.BX)(t.HY,{children:[(0,t.BX)(c.default,{children:[(0,t.tZ)("meta",{charSet:"UTF-8"},"charset"),(0,t.tZ)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,t.tZ)("link",{rel:"apple-touch-icon",href:"".concat(e.basePath,"/apple-touch-icon.png")},"apple"),(0,t.tZ)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(e.basePath,"/favicon-32x32.png")},"icon32"),(0,t.tZ)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(e.basePath,"/favicon-16x16.png")},"icon16"),(0,t.tZ)("link",{rel:"icon",href:"".concat(e.basePath,"/favicon.ico")},"favicon")]}),(0,t.tZ)(a.PB,{title:n.title,description:n.description,canonical:n.canonical,openGraph:{title:n.title,description:n.description,url:n.canonical,locale:o.Z.locale,site_name:o.Z.site_name}})]})}},5542:function(n,e,r){"use strict";r.d(e,{Z:function(){return d}});var t=r(7320),a=r(1664),c=r(1163),i=r(1884);function o(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function u(){var n=o([""]);return u=function(){return n},n}function s(){var n=o([""]);return s=function(){return n},n}var l=i.Z.div(u()),f=i.Z.div(s()),v=r(5125),d=function(n){var e=(0,c.useRouter)().pathname;return(0,t.BX)(l,{className:"p-2 border-2 border-black",children:[n.meta,(0,t.BX)("div",{className:"max-w-screen-sm w-full mx-auto relative",children:[(0,t.tZ)("div",{children:"/"!==e&&(0,t.tZ)("div",{className:"font-extrabold text-xl text-gray-900",children:(0,t.tZ)(a.default,{href:"/",children:(0,t.tZ)("a",{children:v.Z.title})})})}),(0,t.tZ)(f,{children:n.children})]})]})}},4789:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return j}});var t=r(4051),a=r.n(t),c=r(7320),i=r(6307),o=r(4003),u=r(1664),s=r(9770),l=r(8100),f=r(5125);var v=function(n,e,r){return new Promise((function(t,a){return n().then(t).catch((function(c){return r>0?(i=e,new Promise((function(n){return setTimeout(n,i)}))).then(v.bind(null,n,e,r-1)).then(t).catch((function(n){var e,r,t="Operation failed";e=n,(null!=(r=Error)&&"undefined"!==typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](e):e instanceof r)&&(t=n.message),a(t)})):a(c);var i}))}))};function d(n,e,r,t,a,c,i){try{var o=n[c](i),u=o.value}catch(s){return void r(s)}o.done?e(u):Promise.resolve(u).then(t,a)}var p=function(){var n,e=(n=a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),n.prev=1,n.next=5,null===(r=window.pywebview)||void 0===r||null===(t=r.api)||void 0===t?void 0:t.log(e);case 5:return n.abrupt("return",!0);case 8:return n.prev=8,n.t0=n.catch(1),console.error("Logging error ".concat(n.t0)),n.abrupt("return",!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})),function(){var e=this,r=arguments;return new Promise((function(t,a){var c=n.apply(e,r);function i(n){d(c,t,a,i,o,"next",n)}function o(n){d(c,t,a,i,o,"throw",n)}i(void 0)}))});return function(n){return e.apply(this,arguments)}}(),h=p;function w(n,e,r,t,a,c,i){try{var o=n[c](i),u=o.value}catch(s){return void r(s)}o.done?e(u):Promise.resolve(u).then(t,a)}function m(n){return function(){var e=this,r=arguments;return new Promise((function(t,a){var c=n.apply(e,r);function i(n){w(c,t,a,i,o,"next",n)}function o(n){w(c,t,a,i,o,"throw",n)}i(void 0)}))}}function Z(n,e){return null!=e&&"undefined"!==typeof Symbol&&e[Symbol.hasInstance]?e[Symbol.hasInstance](n):n instanceof e}var x=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v(m(a().mark((function r(){var t,c;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,h("PyCall ".concat(n));case 3:return r.next=5,window.pywebview.api[n](e);case 5:return t=r.sent,r.abrupt("return",t);case 9:throw r.prev=9,r.t0=r.catch(0),c="PyCall ".concat(n," failed: ").concat(r.t0),Z(r.t0,Error)&&(c=r.t0.message),new Error(c);case 14:case"end":return r.stop()}}),r,null,[[0,9]])}))),f.Z.RETRY_DELAY,f.Z.MAX_RETRIES).then(function(){var n=m(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=JSON.parse(e),n.next=4,h("PyCall returned object ".concat(r.message));case 4:return n.abrupt("return",r.message);case 7:return n.prev=7,n.t0=n.catch(0),n.next=11,h("PyCall returned ".concat(e));case 11:return n.abrupt("return",e);case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()).catch(function(){var e=m(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw t="PyCall ".concat(n," failed: ").concat(r),Z(r,Error)&&(t=r.message),new Error(t);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())};function y(n,e,r,t,a,c,i){try{var o=n[c](i),u=o.value}catch(s){return void r(s)}o.done?e(u):Promise.resolve(u).then(t,a)}function b(n){return function(){var e=this,r=arguments;return new Promise((function(t,a){var c=n.apply(e,r);function i(n){y(c,t,a,i,o,"next",n)}function o(n){y(c,t,a,i,o,"throw",n)}i(void 0)}))}}var g=function(){var n=b(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x("getHardwareId").catch((function(){return"XXXXXXX"}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),P=function(){var n=b(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x("getIpAddress").catch((function(){return"XXXXXXX"}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function X(n,e,r,t,a,c,i){try{var o=n[c](i),u=o.value}catch(s){return void r(s)}o.done?e(u):Promise.resolve(u).then(t,a)}var k=function(){var n,e=(0,l.ZP)("/ip-address",(n=a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P();case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(t,a){var c=n.apply(e,r);function i(n){X(c,t,a,i,o,"next",n)}function o(n){X(c,t,a,i,o,"throw",n)}i(void 0)}))})),r=e.data,t=e.error;return(0,c.tZ)("p",{children:t?"Error":r||"loading"})},E=r(9452),_=r(1720),S=r(2592);function R(n,e,r,t,a,c,i){try{var o=n[c](i),u=o.value}catch(s){return void r(s)}o.done?e(u):Promise.resolve(u).then(t,a)}var C=function(n){var e=n.data,r=(0,_.useRef)(null);return(0,_.useEffect)((function(){S.toCanvas(r.current,e,function(){var n,e=(n=a().mark((function n(e){var r,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=4;break}return n.next=4,null===(r=window.pywebview)||void 0===r||null===(t=r.api)||void 0===t?void 0:t.log(e);case 4:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(t,a){var c=n.apply(e,r);function i(n){R(c,t,a,i,o,"next",n)}function o(n){R(c,t,a,i,o,"throw",n)}i(void 0)}))});return function(n){return e.apply(this,arguments)}}())}),[e]),(0,c.tZ)("canvas",{ref:r})};function I(n,e,r,t,a,c,i){try{var o=n[c](i),u=o.value}catch(s){return void r(s)}o.done?e(u):Promise.resolve(u).then(t,a)}var N=function(){var n,e=(0,l.ZP)("/ip-address",(n=a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P();case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(t,a){var c=n.apply(e,r);function i(n){I(c,t,a,i,o,"next",n)}function o(n){I(c,t,a,i,o,"throw",n)}i(void 0)}))})),r=e.data,t=e.error;return{device:{ip:r},isLoading:!t&&!r,isError:t}},T=r(5542);function B(n,e,r,t,a,c,i){try{var o=n[c](i),u=o.value}catch(s){return void r(s)}o.done?e(u):Promise.resolve(u).then(t,a)}function O(n){return function(){var e=this,r=arguments;return new Promise((function(t,a){var c=n.apply(e,r);function i(n){B(c,t,a,i,o,"next",n)}function o(n){B(c,t,a,i,o,"throw",n)}i(void 0)}))}}var j=function(){var n=N().device,e=(0,s.Z)("/hardware-id",O(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g();case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))),r=e.data,t=e.error;return(0,c.BX)(T.Z,{meta:(0,c.tZ)(E.Z,{title:"Smartcloud | ".concat(f.Z.title,": ").concat(f.Z.tagline),description:f.Z.description}),children:[(0,c.tZ)(E.Z,{title:"".concat(f.Z.title,": ").concat(f.Z.tagline),description:f.Z.description}),(0,c.BX)("div",{className:"flex flex-col content-center justify-center text-center",children:[(0,c.tZ)("p",{children:t?"Error":r||"loading"}),(0,c.BX)("p",{children:["device: ",n.ip]}),(0,c.tZ)("button",{onClick:O(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P();case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)}))),children:"Reload"}),(0,c.tZ)(k,{}),(0,c.tZ)(C,{data:r}),(0,c.tZ)(u.default,{href:"/wifi",passHref:!0,children:(0,c.tZ)(o.Z,{endIcon:(0,c.tZ)(i.Z,{}),loading:!r,loadingPosition:"end",variant:"contained",children:"WiFi Setup"})})]})]})}},5125:function(n,e){"use strict";var r={totalImages:5,site_name:"iot-cloud",email:"me@lacymorrow.com",title:"SmartCloud",tagline:"Firmware for iot scheduler",description:"Firmware for iot scheduler",locale:"en",errorMessage:"",MAX_RETRIES:10,RETRY_DELAY:500};r.errorMessage='There was an error, please email <a href="mailto:'.concat(r.email,'">').concat(r.email,"</a>"),e.Z=r}},function(n){n.O(0,[105,150,888,179],(function(){return e=5301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);