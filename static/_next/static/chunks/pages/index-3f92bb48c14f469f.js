(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(3440)}])},9452:function(e,n,i){"use strict";var t=i(5893),r=i(2962),c=i(9008),o=i(1163),a=i(5125);n.Z=function(e){var n=(0,o.useRouter)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(c.default,{children:[(0,t.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,t.jsx)("link",{rel:"apple-touch-icon",href:"".concat(n.basePath,"/apple-touch-icon.png")},"apple"),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(n.basePath,"/favicon-32x32.png")},"icon32"),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(n.basePath,"/favicon-16x16.png")},"icon16"),(0,t.jsx)("link",{rel:"icon",href:"".concat(n.basePath,"/favicon.ico")},"favicon")]}),(0,t.jsx)(r.PB,{title:e.title,description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:a.Z.locale,site_name:a.Z.site_name}})]})}},3440:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return p}});var t=i(5893),r=i(7294),c=i(1664),o=i(9452),a=i(4051),s=i.n(a),l=i(9707),d=i(2592),u=function(e,n){if("undefined"!==typeof window.pywebview){var i,t,r,c;null===window||void 0===window||null===(i=window.pywebview)||void 0===i||null===(t=i.api)||void 0===t||t.log("PycallSync");var o=window.pywebview.api[e](n);return null===window||void 0===window||null===(r=window.pywebview)||void 0===r||null===(c=r.api)||void 0===c||c.log(null===o||void 0===o?void 0:o.message),o}return!1},f=function(){return u("getHardwareId")};function h(e,n,i,t,r,c,o){try{var a=e[c](o),s=a.value}catch(l){return void i(l)}a.done?n(s):Promise.resolve(s).then(t,r)}var v=function(){var e=(0,r.useState)("none"),n=e[0],i=e[1],c=(0,r.useState)(""),o=c[0],a=c[1],u=(0,r.useRef)(null),v=function(){var e,n=(e=s().mark((function e(){var n,t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,f();case 3:r=e.sent,a("".concat(o,"id").concat(r)),i(r),d.toCanvas(u.current,"sample text",(function(e){e&&console.error(e),console.log("success!")})),null===window||void 0===window||null===(n=window.pywebview)||void 0===n||null===(t=n.api)||void 0===t||t.log("works");case 8:case"end":return e.stop()}}),e)})),function(){var n=this,i=arguments;return new Promise((function(t,r){var c=e.apply(n,i);function o(e){h(c,t,r,o,a,"next",e)}function a(e){h(c,t,r,o,a,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{children:n}),(0,t.jsx)(l.Z,{onClick:v,children:"Reload"}),(0,t.jsx)("p",{children:o}),(0,t.jsx)("canvas",{ref:u})]})},w=i(779),x=i(5125),p=function(){return(0,r.useEffect)((function(){var e,n;null===window||void 0===window||null===(e=window.pywebview)||void 0===e||null===(n=e.api)||void 0===n||n.init()}),[]),(0,t.jsxs)(w.Z,{meta:(0,t.jsx)(o.Z,{title:"About | ".concat(x.Z.title,": ").concat(x.Z.tagline),description:x.Z.description}),children:[(0,t.jsx)(o.Z,{title:"".concat(x.Z.title,": ").concat(x.Z.tagline),description:x.Z.description}),(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("h2",{children:(0,t.jsx)(c.default,{href:"/wifi",children:(0,t.jsx)("a",{children:"WiFi Setup"})})}),(0,t.jsx)(v,{})]})]})}},779:function(e,n,i){"use strict";i.d(n,{Z:function(){return m}});var t=i(5893),r=i(1664),c=i(1163),o=i(3403),a=i(2952),s=i(8062),l=i(8966),d=function(){return(0,t.jsxs)(s.Z,{selectedKeys:[],mode:"horizontal",children:[(0,t.jsx)(s.Z.Item,{icon:(0,t.jsx)(o.Z,{}),children:(0,t.jsx)(r.default,{href:"/",children:(0,t.jsx)("a",{children:"Home"})})},"home"),(0,t.jsxs)(l.Z,{icon:(0,t.jsx)(a.Z,{}),title:"Posts",children:[(0,t.jsx)(s.Z.Item,{children:(0,t.jsx)(r.default,{href:"/posts/all",children:(0,t.jsx)("a",{children:"All"})})},"posts:all"),(0,t.jsx)(s.Z.Item,{children:(0,t.jsx)(r.default,{href:"/post/random",children:(0,t.jsx)("a",{children:"Random"})})},"posts:random")]},"submenu:posts")]})},u=i(2963);function f(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function h(){var e=f([""]);return h=function(){return e},e}function v(){var e=f([""]);return v=function(){return e},e}var w=u.Z.div(h()),x=u.Z.div(v()),p=i(5125),m=function(e){var n=(0,c.useRouter)().pathname;return(0,t.jsxs)(w,{className:"p-2",children:[e.meta,(0,t.jsxs)("div",{className:"max-w-screen-md w-full mx-auto relative",children:[(0,t.jsxs)("div",{children:["/"!==n&&(0,t.jsx)("div",{className:"pb-6",children:(0,t.jsx)("div",{className:"font-extrabold text-6xl text-gray-900",children:(0,t.jsx)(r.default,{href:"/",children:(0,t.jsx)("a",{children:p.Z.title})})})}),(0,t.jsx)("div",{className:"pt-6",children:(0,t.jsx)(d,{})})]}),(0,t.jsx)(x,{className:"py-6",children:e.children})]})]})}},5125:function(e,n){"use strict";var i={totalImages:21,site_name:"iot-firmware",email:"me@lacymorrow.com",title:"SmartCloud",tagline:"Firmware for iot scheduler",description:"Firmware for iot scheduler",locale:"en",errorMessage:"",fakeHardwareid:"xxxxx",MAX_RETRIES:10,RETRY_DELAY:500};i.errorMessage='There was an error, please email <a href="mailto:'.concat(i.email,'">').concat(i.email,"</a>"),n.Z=i}},function(e){e.O(0,[394,707,592,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);