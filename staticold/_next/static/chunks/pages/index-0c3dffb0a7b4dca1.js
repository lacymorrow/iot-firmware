(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2850)}])},9452:function(e,n,t){"use strict";var r=t(5893),i=t(2962),a=t(9008),c=t(1163),o=t(5125);n.Z=function(e){var n=(0,c.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,r.jsx)("link",{rel:"apple-touch-icon",href:"".concat(n.basePath,"/apple-touch-icon.png")},"apple"),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(n.basePath,"/favicon-32x32.png")},"icon32"),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(n.basePath,"/favicon-16x16.png")},"icon16"),(0,r.jsx)("link",{rel:"icon",href:"".concat(n.basePath,"/favicon.ico")},"favicon")]}),(0,r.jsx)(i.PB,{title:e.title,description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:o.Z.locale,site_name:o.Z.site_name}})]})}},2850:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Z}});var r=t(4051),i=t.n(r),a=t(5893),c=t(7294),o=t(1664),s=t(9452),u=t(2592);function l(e,n,t,r,i,a,c){try{var o=e[a](c),s=o.value}catch(u){return void t(u)}o.done?n(s):Promise.resolve(s).then(r,i)}var f=function(e){var n=e.data,t=(0,c.useRef)(null);return(0,c.useEffect)((function(){u.toCanvas(t.current,n,function(){var e,t=(e=i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,window.pywebview.api.log(t);case 3:return e.next=5,window.pywebview.api.log("Created QR: ".concat(n));case 5:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function c(e){l(a,r,i,c,o,"next",e)}function o(e){l(a,r,i,c,o,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}())}),[n]),(0,a.jsx)("canvas",{ref:t})};var d=function(e,n,t){return new Promise((function(r,i){return e().then(r).catch((function(a){return t>0?(c=n,new Promise((function(e){return setTimeout(e,c)}))).then(d.bind(null,e,n,t-1)).then(r).catch((function(e){var n,t,r="Operation failed";n=e,(null!=(t=Error)&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](n):n instanceof t)&&(r=e.message),i(r)})):i(a);var c}))}))};function p(e,n,t,r,i,a,c){try{var o=e[a](c),s=o.value}catch(u){return void t(u)}o.done?n(s):Promise.resolve(s).then(r,i)}function h(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function c(e){p(a,r,i,c,o,"next",e)}function o(e){p(a,r,i,c,o,"throw",e)}c(void 0)}))}}function v(e,n){return null!=n&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](e):e instanceof n}var x=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return d(h(i().mark((function t(){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,window.pywebview.api.log("PyCall ".concat(e));case 3:return t.next=5,window.pywebview.api[e](n);case 5:return r=t.sent,t.abrupt("return",r);case 9:return t.prev=9,t.t0=t.catch(0),a="PyCall ".concat(e," failed"),t.next=14,window.pywebview.api.log(a);case 14:throw v(t.t0,Error)&&(a=t.t0.message),new Error(a);case 16:case"end":return t.stop()}}),t,null,[[0,9]])}))),1e3,5).then(function(){var e=h(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=JSON.parse(n),e.abrupt("return",t.message);case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,window.pywebview.api.log(n);case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(n){return e.apply(this,arguments)}}()).catch(function(){var e=h(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.pywebview.api.log(n);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())};function w(e,n,t,r,i,a,c){try{var o=e[a](c),s=o.value}catch(u){return void t(u)}o.done?n(s):Promise.resolve(s).then(r,i)}var m=function(){var e,n=(e=i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("getHardwareId");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function c(e){w(a,r,i,c,o,"next",e)}function o(e){w(a,r,i,c,o,"throw",e)}c(void 0)}))});return function(){return n.apply(this,arguments)}}(),j=m,y=t(779),b=t(5125);function g(e,n,t,r,i,a,c){try{var o=e[a](c),s=o.value}catch(u){return void t(u)}o.done?n(s):Promise.resolve(s).then(r,i)}var Z=function(){var e=(0,c.useState)(""),n=e[0],t=e[1],r=(0,c.useState)(!1),u=r[0],l=r[1],d=function(){var e,n=(e=i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.next=3,j();case 3:n=e.sent,t(n),l(!1);case 6:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,i){var a=e.apply(n,t);function c(e){g(a,r,i,c,o,"next",e)}function o(e){g(a,r,i,c,o,"throw",e)}c(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,c.useEffect)((function(){d()}),[]),(0,a.jsxs)(y.Z,{meta:(0,a.jsx)(s.Z,{title:"About | ".concat(b.Z.title,": ").concat(b.Z.tagline),description:b.Z.description}),children:[(0,a.jsx)(s.Z,{title:"".concat(b.Z.title,": ").concat(b.Z.tagline),description:b.Z.description}),(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("p",{children:u?"loading...":n||"Error loading"}),(0,a.jsx)(f,{data:n}),(0,a.jsx)("h5",{children:(0,a.jsx)(o.default,{href:"/wifi",children:(0,a.jsx)("a",{children:"WiFi Setup"})})})]})]})}},779:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var r=t(5893),i=t(1664),a=t(1163),c=t(3403),o=t(2952),s=t(8062),u=t(8966),l=function(){return(0,r.jsxs)(s.Z,{selectedKeys:[],mode:"horizontal",children:[(0,r.jsx)(s.Z.Item,{icon:(0,r.jsx)(c.Z,{}),children:(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{children:"Home"})})},"home"),(0,r.jsxs)(u.Z,{icon:(0,r.jsx)(o.Z,{}),title:"Posts",children:[(0,r.jsx)(s.Z.Item,{children:(0,r.jsx)(i.default,{href:"/posts/all",children:(0,r.jsx)("a",{children:"All"})})},"posts:all"),(0,r.jsx)(s.Z.Item,{children:(0,r.jsx)(i.default,{href:"/post/random",children:(0,r.jsx)("a",{children:"Random"})})},"posts:random")]},"submenu:posts")]})},f=t(2963);function d(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function p(){var e=d([""]);return p=function(){return e},e}function h(){var e=d([""]);return h=function(){return e},e}var v=f.Z.div(p()),x=f.Z.div(h()),w=t(5125),m=function(e){var n=(0,a.useRouter)().pathname;return(0,r.jsxs)(v,{className:"p-2",children:[e.meta,(0,r.jsxs)("div",{className:"max-w-screen-md w-full mx-auto relative",children:[(0,r.jsxs)("div",{children:["/"!==n&&(0,r.jsx)("div",{className:"pb-6",children:(0,r.jsx)("div",{className:"font-extrabold text-6xl text-gray-900",children:(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{children:w.Z.title})})})}),(0,r.jsx)("div",{className:"pt-6",children:(0,r.jsx)(l,{})})]}),(0,r.jsx)(x,{className:"py-6",children:e.children})]})]})}},5125:function(e,n){"use strict";var t={totalImages:21,site_name:"iot-firmware",email:"me@lacymorrow.com",title:"SmartCloud",tagline:"Firmware for iot scheduler",description:"Firmware for iot scheduler",locale:"en",errorMessage:"",fakeHardwareid:"xxxxx",MAX_RETRIES:10,RETRY_DELAY:500};t.errorMessage='There was an error, please email <a href="mailto:'.concat(t.email,'">').concat(t.email,"</a>"),n.Z=t}},function(e){e.O(0,[394,592,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);