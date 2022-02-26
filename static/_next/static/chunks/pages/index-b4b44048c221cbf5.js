(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8423)}])},9452:function(e,n,t){"use strict";var r=t(7997),a=t(2962),i=t(9008),c=t(1163),o=t(5125);n.Z=function(e){var n=(0,c.useRouter)();return(0,r.BX)(r.HY,{children:[(0,r.BX)(i.default,{children:[(0,r.tZ)("meta",{charSet:"UTF-8"},"charset"),(0,r.tZ)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,r.tZ)("link",{rel:"apple-touch-icon",href:"".concat(n.basePath,"/apple-touch-icon.png")},"apple"),(0,r.tZ)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(n.basePath,"/favicon-32x32.png")},"icon32"),(0,r.tZ)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(n.basePath,"/favicon-16x16.png")},"icon16"),(0,r.tZ)("link",{rel:"icon",href:"".concat(n.basePath,"/favicon.ico")},"favicon")]}),(0,r.tZ)(a.PB,{title:e.title,description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:o.Z.locale,site_name:o.Z.site_name}})]})}},8423:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return P}});var r=t(4051),a=t.n(r),i=t(7997),c=t(1720),o=t(1664),u=t(9452),s=t(2592);function l(e,n,t,r,a,i,c){try{var o=e[i](c),u=o.value}catch(s){return void t(s)}o.done?n(u):Promise.resolve(u).then(r,a)}var f=function(e){var n=e.data,t=(0,c.useRef)(null);return(0,c.useEffect)((function(){s.toCanvas(t.current,n,function(){var e,t=(e=a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,window.pywebview.api.log(t);case 3:return e.next=5,window.pywebview.api.log("Created QR: ".concat(n));case 5:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function c(e){l(i,r,a,c,o,"next",e)}function o(e){l(i,r,a,c,o,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}())}),[n]),(0,i.tZ)("canvas",{ref:t})},p=t(5125);var v=function(e,n,t){return new Promise((function(r,a){return e().then(r).catch((function(i){return t>0?(c=n,new Promise((function(e){return setTimeout(e,c)}))).then(v.bind(null,e,n,t-1)).then(r).catch((function(e){var n,t,r="Operation failed";n=e,(null!=(t=Error)&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](n):n instanceof t)&&(r=e.message),a(r)})):a(i);var c}))}))};function d(e,n,t,r,a,i,c){try{var o=e[i](c),u=o.value}catch(s){return void t(s)}o.done?n(u):Promise.resolve(u).then(r,a)}function h(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function c(e){d(i,r,a,c,o,"next",e)}function o(e){d(i,r,a,c,o,"throw",e)}c(void 0)}))}}function w(e,n){return null!=n&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](e):e instanceof n}var m=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return v(h(a().mark((function t(){var r,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,window.pywebview.api.log("PyCall ".concat(e));case 3:return t.next=5,window.pywebview.api[e](n);case 5:return r=t.sent,t.abrupt("return",r);case 9:return t.prev=9,t.t0=t.catch(0),i="PyCall ".concat(e," failed"),t.next=14,window.pywebview.api.log(i);case 14:throw w(t.t0,Error)&&(i=t.t0.message),new Error(i);case 16:case"end":return t.stop()}}),t,null,[[0,9]])}))),p.Z.RETRY_DELAY,p.Z.MAX_RETRIES).then(function(){var e=h(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=JSON.parse(n),e.abrupt("return",t.message);case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,window.pywebview.api.log(n);case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n){return e.apply(this,arguments)}}()).catch(function(){var e=h(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.pywebview.api.log(n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())};function Z(e,n,t,r,a,i,c){try{var o=e[i](c),u=o.value}catch(s){return void t(s)}o.done?n(u):Promise.resolve(u).then(r,a)}var y=function(){var e,n=(e=a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("getHardwareId");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function c(e){Z(i,r,a,c,o,"next",e)}function o(e){Z(i,r,a,c,o,"throw",e)}c(void 0)}))});return function(){return n.apply(this,arguments)}}(),b=y,x=t(9316);function g(e,n,t,r,a,i,c){try{var o=e[i](c),u=o.value}catch(s){return void t(s)}o.done?n(u):Promise.resolve(u).then(r,a)}var P=function(){var e=(0,c.useState)(""),n=e[0],t=e[1],r=(0,c.useState)(!1),s=r[0],l=r[1],v=function(){var e,n=(e=a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,b();case 3:n=e.sent,t(n),l(!1);case 6:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function c(e){g(i,r,a,c,o,"next",e)}function o(e){g(i,r,a,c,o,"throw",e)}c(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,c.useEffect)((function(){v()}),[]),(0,i.BX)(x.Z,{meta:(0,i.tZ)(u.Z,{title:"About | ".concat(p.Z.title,": ").concat(p.Z.tagline),description:p.Z.description}),children:[(0,i.tZ)(u.Z,{title:"".concat(p.Z.title,": ").concat(p.Z.tagline),description:p.Z.description}),(0,i.BX)("div",{className:"text-center",children:[(0,i.tZ)("p",{children:s?"loading...":n||"Error loading"}),(0,i.tZ)(f,{data:n}),(0,i.tZ)("h5",{children:(0,i.tZ)(o.default,{href:"/wifi",children:(0,i.tZ)("a",{children:"WiFi Setup"})})})]})]})}},9316:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(7997),a=t(1664),i=t(1163),c=t(6e3);function o(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function u(){var e=o([""]);return u=function(){return e},e}function s(){var e=o([""]);return s=function(){return e},e}var l=c.Z.div(u()),f=c.Z.div(s()),p=t(5125),v=function(e){var n=(0,i.useRouter)().pathname;return(0,r.BX)(l,{className:"p-2",children:[e.meta,(0,r.BX)("div",{className:"max-w-screen-md w-full mx-auto relative",children:[(0,r.tZ)("div",{children:"/"!==n&&(0,r.tZ)("div",{className:"pb-6",children:(0,r.tZ)("div",{className:"font-extrabold text-6xl text-gray-900",children:(0,r.tZ)(a.default,{href:"/",children:(0,r.tZ)("a",{children:p.Z.title})})})})}),(0,r.tZ)(f,{className:"py-6",children:e.children})]})]})}},5125:function(e,n){"use strict";var t={totalImages:5,site_name:"iot-cloud",email:"me@lacymorrow.com",title:"SmartCloud",tagline:"Firmware for iot scheduler",description:"Firmware for iot scheduler",locale:"en",errorMessage:"",MAX_RETRIES:10,RETRY_DELAY:500};t.errorMessage='There was an error, please email <a href="mailto:'.concat(t.email,'">').concat(t.email,"</a>"),n.Z=t}},function(e){e.O(0,[370,592,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);