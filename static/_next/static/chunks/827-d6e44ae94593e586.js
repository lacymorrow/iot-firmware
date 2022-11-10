"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[827],{9452:function(n,r,e){var t=e(5893),c=e(2962),a=e(9008),o=e(1163),i=e(5125);r.Z=function(n){var r=(0,o.useRouter)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.default,{children:[(0,t.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,t.jsx)("link",{rel:"apple-touch-icon",href:"".concat(r.basePath,"/apple-touch-icon.png")},"apple"),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(r.basePath,"/favicon-32x32.png")},"icon32"),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(r.basePath,"/favicon-16x16.png")},"icon16"),(0,t.jsx)("link",{rel:"icon",href:"".concat(r.basePath,"/favicon.ico")},"favicon")]}),(0,t.jsx)(c.PB,{title:n.title,description:n.description,canonical:n.canonical,openGraph:{title:n.title,description:n.description,url:n.canonical,locale:i.Z.locale,site_name:i.Z.site_name}})]})}},3292:function(n,r,e){var t=e(5893);r.Z=function(n){return(0,t.jsxs)("div",{className:"h-[320px] w-[480px] border-solid border-2 border-black p-2",children:[n.meta,(0,t.jsx)("div",{className:"w-full relative",children:(0,t.jsx)("div",{children:n.children})})]})}},1303:function(n,r,e){e.d(r,{Od:function(){return m},I_:function(){return y},wl:function(){return b},Sj:function(){return g},dG:function(){return h},b:function(){return k}});var t=e(4051),c=e.n(t),a=e(8100),o=e(5208),i=e(5125),u=e(2435);function s(n,r,e,t,c,a,o){try{var i=n[a](o),u=i.value}catch(s){return void e(s)}i.done?r(u):Promise.resolve(u).then(t,c)}function f(n){return function(){var r=this,e=arguments;return new Promise((function(t,c){var a=n.apply(r,e);function o(n){s(a,t,c,o,i,"next",n)}function i(n){s(a,t,c,o,i,"throw",n)}o(void 0)}))}}function l(n,r){return null!=r&&"undefined"!==typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](n):n instanceof r}var p=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,o.H_)(f(c().mark((function e(){var t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.Z)("PyCall ".concat(n));case 3:return e.next=5,window.pywebview.api[n](r).then(function(){var n=f(c().mark((function n(r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=JSON.parse(r),n.next=4,(0,u.Z)("PyCall returned object ".concat(e.message));case 4:return n.abrupt("return",e.message);case 7:return n.prev=7,n.t0=n.catch(0),n.next=11,(0,u.Z)("PyCall returned ".concat(r));case 11:return n.abrupt("return",r);case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}()).then((function(n){if(null===n||void 0===n?void 0:n.error)throw n.error;return n}));case 5:return t=e.sent,e.abrupt("return",t);case 9:return e.prev=9,e.t0=e.catch(0),a="".concat(n," failed: ").concat(e.t0),l(e.t0,Error)&&(a=e.t0.message),e.next=15,(0,u.Z)("Pycall error (retrying): ".concat(a));case 15:throw new Error(a);case 16:case"end":return e.stop()}}),e,null,[[0,9]])}))),!1===(null===r||void 0===r?void 0:r.retry)?1:i.Z.RETRY_DELAY,i.Z.MAX_RETRIES).catch(function(){var r=f(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t="".concat(n," failed: ").concat(e),l(e,Error)&&(t=e.message),r.next=4,(0,u.Z)("Pycall fatal error: ".concat(t));case 4:throw new Error(t);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}())};function v(n,r,e,t,c,a,o){try{var i=n[a](o),u=i.value}catch(s){return void e(s)}i.done?r(u):Promise.resolve(u).then(t,c)}function d(n){return function(){var r=this,e=arguments;return new Promise((function(t,c){var a=n.apply(r,e);function o(n){v(a,t,c,o,i,"next",n)}function i(n){v(a,t,c,o,i,"throw",n)}o(void 0)}))}}var h=function(n){return p("get",{key:n}).catch((function(){return""}))},w=function(n,r){return p("set",{key:n,data:r}).catch((function(){return""}))},m=function(){return p("getHardwareId").catch((function(){return""}))},x=function(){var n=d(c().mark((function n(){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p("checkWifiConnection");case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),y=function(){return p("getIpAddress").catch((function(){return""}))},b=function(){var n=d(c().mark((function n(){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p("getWifiInfo").catch((function(){return{ssid:"",quality:0}}));case 2:return r=n.sent,e=Math.round(Number.parseInt(r.quality,10)/70*100),n.abrupt("return",{ssid:r.ssid,quality:e});case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),g=function(){var n=d(c().mark((function n(){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p("getWifiNetworks").catch((function(){return""}));case 2:return r=n.sent,e=r.split("ESSID:").map((function(n){return n.trim().replace(/^"|"$/g,"")})).filter((function(n,r,e){return e.indexOf(n)===r})).filter((function(n){return n})),n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),k=function(){var n=d(c().mark((function n(r){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r){n.next=5;break}return n.next=3,w("device_power_status","off");case 3:n.next=7;break;case 5:return n.next=7,w("device_power_status","on");case 7:(0,a.JG)("/device-power");case 8:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}();(function(){var n=d(c().mark((function n(r,e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p("setWifiNetwork",{ssid:r,password:e});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))})(),function(){var n=d(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=o.H_,n.next=3,(0,o.Vs)(x(),1e4);case 3:return n.t1=n.sent,n.abrupt("return",(0,n.t0)(n.t1,3e3,5));case 5:case"end":return n.stop()}}),n)})))}()},2435:function(n,r,e){var t=e(4051),c=e.n(t),a=e(5125),o=e(5208);function i(n,r,e,t,c,a,o){try{var i=n[a](o),u=i.value}catch(s){return void e(s)}i.done?r(u):Promise.resolve(u).then(t,c)}function u(n){return function(){var r=this,e=arguments;return new Promise((function(t,c){var a=n.apply(r,e);function o(n){i(a,t,c,o,u,"next",n)}function u(n){i(a,t,c,o,u,"throw",n)}o(void 0)}))}}var s=function(){var n=u(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(null===(e=window.pywebview)||void 0===e||null===(t=e.api)||void 0===t?void 0:t.log)){n.next=7;break}return console.log("[Pylog] ".concat(r)),n.next=5,(0,o.Vs)(u(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.pywebview.api.log(r);case 2:return n.abrupt("return",!0);case 3:case"end":return n.stop()}}),n)})))(),a.Z.TIMEOUT).catch((function(n){return console.log("[Pylog] ".concat(r," error: ").concat(n))}));case 5:n.next=8;break;case 7:console.log("[Pylog Error] ".concat(r));case 8:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}();r.Z=s},5125:function(n,r){var e={totalImages:5,site_name:"iot-cloud",email:"me@lacymorrow.com",title:"Smartcloud",tagline:"Firmware for iot scheduler",description:"Firmware for iot scheduler",locale:"en",errorMessage:"",MAX_RETRIES:5,RETRY_DELAY:1e3,TIMEOUT:1500};e.errorMessage='There was an error, please email <a href="mailto:'.concat(e.email,'">').concat(e.email,"</a>"),r.Z=e},5208:function(n,r,e){e.d(r,{Vs:function(){return t},H_:function(){return c}});var t=function(n,r){var e;return Promise.race([n,new Promise((function(n,t){return e=setTimeout((function(){return t(new Error("timeout"))}),r)}))]).finally((function(){return clearTimeout(e)}))},c=function(n,r,e){return new Promise((function(t,a){return n().then(t).catch((function(o){return e>0?(i=r,new Promise((function(n){return setTimeout(n,i)}))).then(c.bind(null,n,r,e-1)).then(t).catch((function(n){var r,e,t="Operation failed";r=n,(null!=(e=Error)&&"undefined"!==typeof Symbol&&e[Symbol.hasInstance]?e[Symbol.hasInstance](r):r instanceof e)&&(t=n.message),a(t)})):a(o);var i}))}))}}}]);