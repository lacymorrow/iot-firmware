"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[827],{9452:function(n,e,r){var t=r(5893),c=r(2962),a=r(9008),o=r(1163),i=r(5125);e.Z=function(n){var e=(0,o.useRouter)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.default,{children:[(0,t.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,t.jsx)("link",{rel:"apple-touch-icon",href:"".concat(e.basePath,"/apple-touch-icon.png")},"apple"),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(e.basePath,"/favicon-32x32.png")},"icon32"),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(e.basePath,"/favicon-16x16.png")},"icon16"),(0,t.jsx)("link",{rel:"icon",href:"".concat(e.basePath,"/favicon.ico")},"favicon")]}),(0,t.jsx)(c.PB,{title:n.title,description:n.description,canonical:n.canonical,openGraph:{title:n.title,description:n.description,url:n.canonical,locale:i.Z.locale,site_name:i.Z.site_name}})]})}},3292:function(n,e,r){var t=r(5893);e.Z=function(n){return(0,t.jsxs)("div",{className:"h-[320px] w-[480px] border-solid border-2 border-black p-2",children:[n.meta,(0,t.jsx)("div",{className:"w-full relative",children:(0,t.jsx)("div",{children:n.children})})]})}},1303:function(n,e,r){r.d(e,{Od:function(){return m},I_:function(){return y},wl:function(){return b},Sj:function(){return g},dG:function(){return d},b:function(){return k},Cz:function(){return E},z:function(){return _}});var t=r(4051),c=r.n(t),a=r(8100),o=r(5125),i=r(5208),u=r(2435);function s(n,e,r,t,c,a,o){try{var i=n[a](o),u=i.value}catch(s){return void r(s)}i.done?e(u):Promise.resolve(u).then(t,c)}function f(n){return function(){var e=this,r=arguments;return new Promise((function(t,c){var a=n.apply(e,r);function o(n){s(a,t,c,o,i,"next",n)}function i(n){s(a,t,c,o,i,"throw",n)}o(void 0)}))}}function l(n,e){return null!=e&&"undefined"!==typeof Symbol&&e[Symbol.hasInstance]?e[Symbol.hasInstance](n):n instanceof e}var p=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,i.H_)(f(c().mark((function r(){var t,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,u.Z)("PyCall ".concat(n));case 3:return r.next=5,window.pywebview.api[n](e).then((function(n){return JSON.parse(n)})).then(function(){var e=f(c().mark((function e(r){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===r||void 0===r?void 0:r.error)){e.next=2;break}throw r.error;case 2:if(r.message){e.next=4;break}throw new Error("Response message was empty ".concat(r));case 4:return e.next=6,(0,u.Z)("Pycall ".concat(n,": ").concat(r.message),r);case 6:return e.abrupt("return",r.message);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 5:return t=r.sent,r.abrupt("return",t);case 9:return r.prev=9,r.t0=r.catch(0),a="".concat(r.t0),l(r.t0,Error)&&(a=r.t0.message),r.next=15,(0,u.Z)("Pycall ".concat(n," (retrying): ").concat(a));case 15:throw new Error(a);case 16:case"end":return r.stop()}}),r,null,[[0,9]])}))),!1===(null===e||void 0===e?void 0:e.retry)?1:o.Z.RETRY_DELAY,o.Z.MAX_RETRIES).catch(function(){var e=f(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(n," - ").concat(r),l(r,Error)&&(t=r.message),e.next=4,(0,u.Z)("Pycall ".concat(n," - FATAL ERROR: ").concat(t));case 4:throw new Error(t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())};function v(n,e,r,t,c,a,o){try{var i=n[a](o),u=i.value}catch(s){return void r(s)}i.done?e(u):Promise.resolve(u).then(t,c)}function h(n){return function(){var e=this,r=arguments;return new Promise((function(t,c){var a=n.apply(e,r);function o(n){v(a,t,c,o,i,"next",n)}function i(n){v(a,t,c,o,i,"throw",n)}o(void 0)}))}}var d=function(n){return p("get",{key:n}).catch((function(){return""}))},w=function(n,e){return p("set",{key:n,data:e}).catch((function(){return""}))},m=function(){return p("getHardwareId").catch((function(){return""}))},x=function(){var n=h(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p("checkWifiConnection");case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),y=function(){return p("getIpAddress").catch((function(){return""}))},b=function(){var n=h(c().mark((function n(){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p("getWifiInfo").catch((function(){return{ssid:"",quality:0}}));case 2:return e=n.sent,r=Math.round(Number.parseInt(e.quality,10)/70*100),n.abrupt("return",{ssid:e.ssid,quality:r});case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),g=function(){var n=h(c().mark((function n(){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p("getWifiNetworks").catch((function(){return""}));case 2:return e=n.sent,r=e.split("ESSID:").map((function(n){return n.trim().replace(/^"|"$/g,"")})).filter((function(n,e,r){return r.indexOf(n)===e})).filter((function(n){return n})),n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),k=function(){var n=h(c().mark((function n(e){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e){n.next=5;break}return n.next=3,w("device_power_status","on");case 3:n.next=7;break;case 5:return n.next=7,w("device_power_status","off");case 7:(0,a.JG)("/device-power",e);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),E=function(){var n=h(c().mark((function n(e,r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p("setWifiNetwork",{ssid:e,password:r});case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),_=function(){var n=h(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=i.H_,n.next=3,(0,i.Vs)(x(),o.Z.NETWORK_TIMEOUT);case 3:return n.t1=n.sent,n.t2=o.Z.BACKOFF_DELAY,n.t3=o.Z.MAX_RETRIES,n.abrupt("return",(0,n.t0)(n.t1,n.t2,n.t3));case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},2435:function(n,e,r){var t=r(4051),c=r.n(t),a=r(5125),o=r(5208);function i(n,e,r,t,c,a,o){try{var i=n[a](o),u=i.value}catch(s){return void r(s)}i.done?e(u):Promise.resolve(u).then(t,c)}function u(n){return function(){var e=this,r=arguments;return new Promise((function(t,c){var a=n.apply(e,r);function o(n){i(a,t,c,o,u,"next",n)}function u(n){i(a,t,c,o,u,"throw",n)}o(void 0)}))}}var s=function(){var n=u(c().mark((function n(e,r){var t,i;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(null===(t=window.pywebview)||void 0===t||null===(i=t.api)||void 0===i?void 0:i.log)){n.next=7;break}return console.log("[Pylog] ".concat(e),r||null),n.next=5,(0,o.Vs)(u(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.pywebview.api.log(e);case 2:return n.abrupt("return",!0);case 3:case"end":return n.stop()}}),n)})))(),a.Z.TIMEOUT).catch((function(n){return console.log("[Pylog] ".concat(e," error: ").concat(n))}));case 5:n.next=8;break;case 7:console.log("[Pylog Error] ".concat(e),r||null);case 8:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}();e.Z=s},5125:function(n,e){var r={totalImages:5,site_name:"iot-cloud",email:"me@lacymorrow.com",title:"Smartcloud",tagline:"Firmware for iot scheduler",description:"Firmware for iot scheduler",locale:"en",errorMessage:"",MAX_RETRIES:3,RETRY_DELAY:1e3,BACKOFF_DELAY:4e3,TIMEOUT:1500,NETWORK_TIMEOUT:1e4};r.errorMessage='There was an error, please email <a href="mailto:'.concat(r.email,'">').concat(r.email,"</a>"),e.Z=r},5208:function(n,e,r){r.d(e,{Vs:function(){return t},H_:function(){return c}});var t=function(n,e){var r;return Promise.race([n,new Promise((function(n,t){return r=setTimeout((function(){return t(new Error("timeout"))}),e)}))]).finally((function(){return clearTimeout(r)}))},c=function(n,e,r){return new Promise((function(t,a){return n().then(t).catch((function(o){return r>0?(i=e,new Promise((function(n){return setTimeout(n,i)}))).then(c.bind(null,n,e,r-1)).then(t).catch((function(n){var e,r,t="Operation failed";e=n,(null!=(r=Error)&&"undefined"!==typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](e):e instanceof r)&&(t=n.message),a(t)})):a(o);var i}))}))}}}]);