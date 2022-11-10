(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(n,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(4789)}])},9452:function(n,r,e){"use strict";var t=e(7320),a=e(2962),c=e(9008),i=e(1163),o=e(5125);r.Z=function(n){var r=(0,i.useRouter)();return(0,t.BX)(t.HY,{children:[(0,t.BX)(c.default,{children:[(0,t.tZ)("meta",{charSet:"UTF-8"},"charset"),(0,t.tZ)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,t.tZ)("link",{rel:"apple-touch-icon",href:"".concat(r.basePath,"/apple-touch-icon.png")},"apple"),(0,t.tZ)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(r.basePath,"/favicon-32x32.png")},"icon32"),(0,t.tZ)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(r.basePath,"/favicon-16x16.png")},"icon16"),(0,t.tZ)("link",{rel:"icon",href:"".concat(r.basePath,"/favicon.ico")},"favicon")]}),(0,t.tZ)(a.PB,{title:n.title,description:n.description,canonical:n.canonical,openGraph:{title:n.title,description:n.description,url:n.canonical,locale:o.Z.locale,site_name:o.Z.site_name}})]})}},5542:function(n,r,e){"use strict";e.d(r,{Z:function(){return d}});var t=e(7320),a=e(1664),c=e(1163),i=e(1884);function o(n,r){return r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))}function u(){var n=o([""]);return u=function(){return n},n}function s(){var n=o([""]);return s=function(){return n},n}var l=i.Z.div(u()),f=i.Z.div(s()),v=e(5125),d=function(n){var r=(0,c.useRouter)().pathname;return(0,t.BX)(l,{className:"p-2 border-2 border-black",children:[n.meta,(0,t.BX)("div",{className:"max-w-screen-sm w-full mx-auto relative",children:[(0,t.tZ)("div",{children:"/"!==r&&(0,t.tZ)("div",{className:"font-extrabold text-xl text-gray-900",children:(0,t.tZ)(a.default,{href:"/",children:(0,t.tZ)("a",{children:v.Z.title})})})}),(0,t.tZ)(f,{children:n.children})]})]})}},4789:function(n,r,e){"use strict";e.r(r),e.d(r,{default:function(){return j}});var t=e(4051),a=e.n(t),c=e(7320),i=e(6307),o=e(4003),u=e(1664),s=e(8100),l=e(9770),f=e(5125);var v=function(n,r,e){return new Promise((function(t,a){return n().then(t).catch((function(c){return e>0?(i=r,new Promise((function(n){return setTimeout(n,i)}))).then(v.bind(null,n,r,e-1)).then(t).catch((function(n){var r,e,t="Operation failed";r=n,(null!=(e=Error)&&"undefined"!==typeof Symbol&&e[Symbol.hasInstance]?e[Symbol.hasInstance](r):r instanceof e)&&(t=n.message),a(t)})):a(c);var i}))}))};function d(n,r,e,t,a,c,i){try{var o=n[c](i),u=o.value}catch(s){return void e(s)}o.done?r(u):Promise.resolve(u).then(t,a)}var p=function(){var n,r=(n=a().mark((function n(r){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(r),n.prev=1,n.next=5,null===(e=window.pywebview)||void 0===e||null===(t=e.api)||void 0===t?void 0:t.log(r);case 5:return n.abrupt("return",!0);case 8:return n.prev=8,n.t0=n.catch(1),console.error("Logging error ".concat(n.t0)),n.abrupt("return",!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})),function(){var r=this,e=arguments;return new Promise((function(t,a){var c=n.apply(r,e);function i(n){d(c,t,a,i,o,"next",n)}function o(n){d(c,t,a,i,o,"throw",n)}i(void 0)}))});return function(n){return r.apply(this,arguments)}}(),h=p;function w(n,r,e,t,a,c,i){try{var o=n[c](i),u=o.value}catch(s){return void e(s)}o.done?r(u):Promise.resolve(u).then(t,a)}function m(n){return function(){var r=this,e=arguments;return new Promise((function(t,a){var c=n.apply(r,e);function i(n){w(c,t,a,i,o,"next",n)}function o(n){w(c,t,a,i,o,"throw",n)}i(void 0)}))}}function Z(n,r){return null!=r&&"undefined"!==typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](n):n instanceof r}var x=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v(m(a().mark((function e(){var t,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h("PyCall ".concat(n));case 3:return e.next=5,window.pywebview.api[n](r);case 5:return t=e.sent,e.abrupt("return",t);case 9:throw e.prev=9,e.t0=e.catch(0),c="PyCall ".concat(n," failed: ").concat(e.t0),Z(e.t0,Error)&&(c=e.t0.message),new Error(c);case 14:case"end":return e.stop()}}),e,null,[[0,9]])}))),f.Z.RETRY_DELAY,f.Z.MAX_RETRIES).then(function(){var n=m(a().mark((function n(r){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=JSON.parse(r),n.next=4,h("PyCall returned object ".concat(e.message));case 4:return n.abrupt("return",e.message);case 7:return n.prev=7,n.t0=n.catch(0),n.next=11,h("PyCall returned ".concat(r));case 11:return n.abrupt("return",r);case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}()).catch(function(){var r=m(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:throw t="PyCall ".concat(n," failed: ").concat(e),Z(e,Error)&&(t=e.message),new Error(t);case 3:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}())};function y(n,r,e,t,a,c,i){try{var o=n[c](i),u=o.value}catch(s){return void e(s)}o.done?r(u):Promise.resolve(u).then(t,a)}function b(n){return function(){var r=this,e=arguments;return new Promise((function(t,a){var c=n.apply(r,e);function i(n){y(c,t,a,i,o,"next",n)}function o(n){y(c,t,a,i,o,"throw",n)}i(void 0)}))}}var P=function(){var n=b(a().mark((function n(){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x("getHardwareId").catch((function(){return"XXXXXXX"}));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),g=function(){var n=b(a().mark((function n(){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x("getIpAddress").catch((function(){return"XXXXXXX"}));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();function X(n,r,e,t,a,c,i){try{var o=n[c](i),u=o.value}catch(s){return void e(s)}o.done?r(u):Promise.resolve(u).then(t,a)}var k=function(){var n,r=(0,s.ZP)("/ip-address",(n=a().mark((function n(){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g();case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})),function(){var r=this,e=arguments;return new Promise((function(t,a){var c=n.apply(r,e);function i(n){X(c,t,a,i,o,"next",n)}function o(n){X(c,t,a,i,o,"throw",n)}i(void 0)}))})),e=r.data,t=r.error;return(0,c.tZ)("p",{children:t?"Error":e||"loading"})},E=e(9452),_=e(1720),S=e(2592);function R(n,r,e,t,a,c,i){try{var o=n[c](i),u=o.value}catch(s){return void e(s)}o.done?r(u):Promise.resolve(u).then(t,a)}var I=function(n){var r=n.data,e=(0,_.useRef)(null);return(0,_.useEffect)((function(){S.toCanvas(e.current,r,function(){var n,e=(n=a().mark((function n(e){var t,c;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=4;break}return n.next=4,null===(t=window.pywebview)||void 0===t||null===(c=t.api)||void 0===c?void 0:c.log(e);case 4:return n.next=6,h("Created QR: ".concat(r));case 6:case"end":return n.stop()}}),n)})),function(){var r=this,e=arguments;return new Promise((function(t,a){var c=n.apply(r,e);function i(n){R(c,t,a,i,o,"next",n)}function o(n){R(c,t,a,i,o,"throw",n)}i(void 0)}))});return function(n){return e.apply(this,arguments)}}())}),[r]),(0,c.tZ)("canvas",{ref:e})};function C(n,r,e,t,a,c,i){try{var o=n[c](i),u=o.value}catch(s){return void e(s)}o.done?r(u):Promise.resolve(u).then(t,a)}var N=function(){var n,r=(0,s.ZP)("/ip-address",(n=a().mark((function n(){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x("IP IS?");case 2:return n.next=4,g();case 4:return r=n.sent,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})),function(){var r=this,e=arguments;return new Promise((function(t,a){var c=n.apply(r,e);function i(n){C(c,t,a,i,o,"next",n)}function o(n){C(c,t,a,i,o,"throw",n)}i(void 0)}))})),e=r.data,t=r.error;return{device:{ip:e},isLoading:!t&&!e,isError:t}},T=e(5542);function B(n,r,e,t,a,c,i){try{var o=n[c](i),u=o.value}catch(s){return void e(s)}o.done?r(u):Promise.resolve(u).then(t,a)}function O(n){return function(){var r=this,e=arguments;return new Promise((function(t,a){var c=n.apply(r,e);function i(n){B(c,t,a,i,o,"next",n)}function o(n){B(c,t,a,i,o,"throw",n)}i(void 0)}))}}var j=function(){var n=N().device,r=(0,l.Z)("/hardware-id",O(a().mark((function n(){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=P(),n.abrupt("return",r);case 2:case"end":return n.stop()}}),n)})))),e=r.data,t=r.error,v=(0,s.ZP)("/ip-address",O(a().mark((function n(){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=g(),n.abrupt("return",r);case 2:case"end":return n.stop()}}),n)})))).data;return(0,c.BX)(T.Z,{meta:(0,c.tZ)(E.Z,{title:"Smartcloud | ".concat(f.Z.title,": ").concat(f.Z.tagline),description:f.Z.description}),children:[(0,c.tZ)(E.Z,{title:"".concat(f.Z.title,": ").concat(f.Z.tagline),description:f.Z.description}),(0,c.BX)("div",{className:"flex flex-col content-center justify-center text-center",children:[(0,c.tZ)("p",{children:t?"Error":e||"loading"}),(0,c.BX)("p",{children:["device: ",n.ip," data ",v]}),(0,c.tZ)("button",{onClick:O(a().mark((function n(){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g();case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)}))),children:"Reload"}),(0,c.tZ)(k,{}),(0,c.tZ)(I,{data:e}),(0,c.tZ)(u.default,{href:"/wifi",passHref:!0,children:(0,c.tZ)(o.Z,{endIcon:(0,c.tZ)(i.Z,{}),loading:!e,loadingPosition:"end",variant:"contained",children:"WiFi Setup"})})]})]})}},5125:function(n,r){"use strict";var e={totalImages:5,site_name:"iot-cloud",email:"me@lacymorrow.com",title:"SmartCloud",tagline:"Firmware for iot scheduler",description:"Firmware for iot scheduler",locale:"en",errorMessage:"",MAX_RETRIES:10,RETRY_DELAY:500};e.errorMessage='There was an error, please email <a href="mailto:'.concat(e.email,'">').concat(e.email,"</a>"),r.Z=e}},function(n){n.O(0,[105,150,888,179],(function(){return r=5301,n(n.s=r);var r}));var r=n.O();_N_E=r}]);