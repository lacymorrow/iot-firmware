(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{6886:function(n,r,e){"use strict";e.d(r,{ZP:function(){return y}});var t=e(3366),i=e(7462),o=e(7294),a=e(6010),c=e(5408),s=e(9707),u=e(7192),l=e(7088),p=e(7623);var f=o.createContext(),d=e(3620);function m(n){return(0,d.Z)("MuiGrid",n)}const h=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var g=(0,e(6087).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((n=>`spacing-xs-${n}`)),...["column-reverse","column","row-reverse","row"].map((n=>`direction-xs-${n}`)),...["nowrap","wrap-reverse","wrap"].map((n=>`wrap-xs-${n}`)),...h.map((n=>`grid-xs-${n}`)),...h.map((n=>`grid-sm-${n}`)),...h.map((n=>`grid-md-${n}`)),...h.map((n=>`grid-lg-${n}`)),...h.map((n=>`grid-xl-${n}`))]),v=e(5893);const x=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function w(n){const r=parseFloat(n);return`${r}${String(n).replace(String(r),"")||"px"}`}function b(n,r,e={}){if(!r||!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[e[`spacing-xs-${String(n)}`]||`spacing-xs-${String(n)}`];const{xs:t,sm:i,md:o,lg:a,xl:c}=n;return[Number(t)>0&&(e[`spacing-xs-${String(t)}`]||`spacing-xs-${String(t)}`),Number(i)>0&&(e[`spacing-sm-${String(i)}`]||`spacing-sm-${String(i)}`),Number(o)>0&&(e[`spacing-md-${String(o)}`]||`spacing-md-${String(o)}`),Number(a)>0&&(e[`spacing-lg-${String(a)}`]||`spacing-lg-${String(a)}`),Number(c)>0&&(e[`spacing-xl-${String(c)}`]||`spacing-xl-${String(c)}`)]}const S=(0,l.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(n,r)=>{const{container:e,direction:t,item:i,lg:o,md:a,sm:c,spacing:s,wrap:u,xl:l,xs:p,zeroMinWidth:f}=n.ownerState;return[r.root,e&&r.container,i&&r.item,f&&r.zeroMinWidth,...b(s,e,r),"row"!==t&&r[`direction-xs-${String(t)}`],"wrap"!==u&&r[`wrap-xs-${String(u)}`],!1!==p&&r[`grid-xs-${String(p)}`],!1!==c&&r[`grid-sm-${String(c)}`],!1!==a&&r[`grid-md-${String(a)}`],!1!==o&&r[`grid-lg-${String(o)}`],!1!==l&&r[`grid-xl-${String(l)}`]]}})((({ownerState:n})=>(0,i.Z)({boxSizing:"border-box"},n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},n.item&&{margin:0},n.zeroMinWidth&&{minWidth:0},"wrap"!==n.wrap&&{flexWrap:n.wrap})),(function({theme:n,ownerState:r}){const e=(0,c.P$)({values:r.direction,breakpoints:n.breakpoints.values});return(0,c.k9)({theme:n},e,(n=>{const r={flexDirection:n};return 0===n.indexOf("column")&&(r[`& > .${g.item}`]={maxWidth:"none"}),r}))}),(function({theme:n,ownerState:r}){const{container:e,rowSpacing:t}=r;let i={};if(e&&0!==t){const r=(0,c.P$)({values:t,breakpoints:n.breakpoints.values});i=(0,c.k9)({theme:n},r,(r=>{const e=n.spacing(r);return"0px"!==e?{marginTop:`-${w(e)}`,[`& > .${g.item}`]:{paddingTop:w(e)}}:{}}))}return i}),(function({theme:n,ownerState:r}){const{container:e,columnSpacing:t}=r;let i={};if(e&&0!==t){const r=(0,c.P$)({values:t,breakpoints:n.breakpoints.values});i=(0,c.k9)({theme:n},r,(r=>{const e=n.spacing(r);return"0px"!==e?{width:`calc(100% + ${w(e)})`,marginLeft:`-${w(e)}`,[`& > .${g.item}`]:{paddingLeft:w(e)}}:{}}))}return i}),(function({theme:n,ownerState:r}){let e;return n.breakpoints.keys.reduce(((t,o)=>{let a={};if(r[o]&&(e=r[o]),!e)return t;if(!0===e)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===e)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=(0,c.P$)({values:r.columns,breakpoints:n.breakpoints.values}),u="object"===typeof s?s[o]:s;if(void 0===u||null===u)return t;const l=Math.round(e/u*1e8)/1e6+"%";let p={};if(r.container&&r.item&&0!==r.columnSpacing){const e=n.spacing(r.columnSpacing);if("0px"!==e){const n=`calc(${l} + ${w(e)})`;p={flexBasis:n,maxWidth:n}}}a=(0,i.Z)({flexBasis:l,flexGrow:0,maxWidth:l},p)}return 0===n.breakpoints.values[o]?Object.assign(t,a):t[n.breakpoints.up(o)]=a,t}),{})}));var y=o.forwardRef((function(n,r){const e=(0,p.Z)({props:n,name:"MuiGrid"}),c=(0,s.Z)(e),{className:l,columns:d,columnSpacing:h,component:g="div",container:w=!1,direction:y="row",item:$=!1,lg:Z=!1,md:P=!1,rowSpacing:j,sm:k=!1,spacing:E=0,wrap:N="wrap",xl:W=!1,xs:_=!1,zeroMinWidth:M=!1}=c,I=(0,t.Z)(c,x),z=j||E,O=h||E,R=o.useContext(f),T=d||R||12,C=(0,i.Z)({},c,{columns:T,container:w,direction:y,item:$,lg:Z,md:P,sm:k,rowSpacing:z,columnSpacing:O,wrap:N,xl:W,xs:_,zeroMinWidth:M}),G=(n=>{const{classes:r,container:e,direction:t,item:i,lg:o,md:a,sm:c,spacing:s,wrap:l,xl:p,xs:f,zeroMinWidth:d}=n,h={root:["root",e&&"container",i&&"item",d&&"zeroMinWidth",...b(s,e),"row"!==t&&`direction-xs-${String(t)}`,"wrap"!==l&&`wrap-xs-${String(l)}`,!1!==f&&`grid-xs-${String(f)}`,!1!==c&&`grid-sm-${String(c)}`,!1!==a&&`grid-md-${String(a)}`,!1!==o&&`grid-lg-${String(o)}`,!1!==p&&`grid-xl-${String(p)}`]};return(0,u.Z)(h,m,r)})(C);return A=(0,v.jsx)(S,(0,i.Z)({ownerState:C,className:(0,a.Z)(G.root,l),as:g,ref:r},I)),12!==T?(0,v.jsx)(f.Provider,{value:T,children:A}):A;var A}))},9707:function(n,r,e){"use strict";e.d(r,{Z:function(){return s}});var t=e(7462),i=e(3366),o=e(9766),a=e(8528);const c=["sx"];function s(n){const{sx:r}=n,e=(0,i.Z)(n,c),{systemProps:s,otherProps:u}=(n=>{const r={systemProps:{},otherProps:{}};return Object.keys(n).forEach((e=>{a.Gc[e]?r.systemProps[e]=n[e]:r.otherProps[e]=n[e]})),r})(e);let l;return l=Array.isArray(r)?[s,...r]:"function"===typeof r?(...n)=>{const e=r(...n);return(0,o.P)(e)?(0,t.Z)({},s,e):s}:(0,t.Z)({},s,r),(0,t.Z)({},u,{sx:l})}},5058:function(n,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return e(8520)}])},9452:function(n,r,e){"use strict";var t=e(5893),i=e(2962),o=e(9008),a=e(1163),c=e(5125);r.Z=function(n){var r=(0,a.useRouter)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.default,{children:[(0,t.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,t.jsx)("link",{rel:"apple-touch-icon",href:"".concat(r.basePath,"/apple-touch-icon.png")},"apple"),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(r.basePath,"/favicon-32x32.png")},"icon32"),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(r.basePath,"/favicon-16x16.png")},"icon16"),(0,t.jsx)("link",{rel:"icon",href:"".concat(r.basePath,"/favicon.ico")},"favicon")]}),(0,t.jsx)(i.PB,{title:n.title,description:n.description,canonical:n.canonical,openGraph:{title:n.title,description:n.description,url:n.canonical,locale:c.Z.locale,site_name:c.Z.site_name}})]})}},5542:function(n,r,e){"use strict";e.d(r,{Z:function(){return l}});var t=e(5893),i=e(386);function o(n,r){return r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))}function a(){var n=o([""]);return a=function(){return n},n}function c(){var n=o([""]);return c=function(){return n},n}var s=i.Z.div(a()),u=i.Z.div(c()),l=function(n){return(0,t.jsxs)(s,{className:"h-[320px] w-[480px] border-solid border-2 border-black p-2",children:[n.meta,(0,t.jsx)("div",{className:"w-full relative",children:(0,t.jsx)(u,{children:n.children})})]})}},8851:function(n,r,e){"use strict";e.d(r,{Od:function(){return m},I_:function(){return h},wl:function(){return g},Sj:function(){return v},Cz:function(){return x}});var t=e(4051),i=e.n(t),o=e(5125);var a=function(n,r,e){return new Promise((function(t,i){return n().then(t).catch((function(o){return e>0?(c=r,new Promise((function(n){return setTimeout(n,c)}))).then(a.bind(null,n,r,e-1)).then(t).catch((function(n){var r,e,t="Operation failed";r=n,(null!=(e=Error)&&"undefined"!==typeof Symbol&&e[Symbol.hasInstance]?e[Symbol.hasInstance](r):r instanceof e)&&(t=n.message),i(t)})):i(o);var c}))}))},c=e(2435);function s(n,r,e,t,i,o,a){try{var c=n[o](a),s=c.value}catch(u){return void e(u)}c.done?r(s):Promise.resolve(s).then(t,i)}function u(n){return function(){var r=this,e=arguments;return new Promise((function(t,i){var o=n.apply(r,e);function a(n){s(o,t,i,a,c,"next",n)}function c(n){s(o,t,i,a,c,"throw",n)}a(void 0)}))}}function l(n,r){return null!=r&&"undefined"!==typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](n):n instanceof r}var p=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a(u(i().mark((function e(){var t,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("a"),e.next=4,(0,c.Z)("PyCall ".concat(n));case 4:return console.log("b"),e.next=7,window.pywebview.api[n](r);case 7:return t=e.sent,e.abrupt("return",t);case 11:return e.prev=11,e.t0=e.catch(0),o="PyCall ".concat(n," failed: ").concat(e.t0),l(e.t0,Error)&&(o=e.t0.message),e.next=17,(0,c.Z)(o);case 17:throw new Error(o);case 18:case"end":return e.stop()}}),e,null,[[0,11]])}))),!1===(null===r||void 0===r?void 0:r.retry)?1:o.Z.RETRY_DELAY,o.Z.MAX_RETRIES).then(function(){var n=u(i().mark((function n(r){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=JSON.parse(r),n.next=4,(0,c.Z)("PyCall returned object ".concat(e.message));case 4:return n.abrupt("return",e.message);case 7:return n.prev=7,n.t0=n.catch(0),n.next=11,(0,c.Z)("PyCall returned ".concat(r));case 11:return n.abrupt("return",r);case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}()).catch(function(){var r=u(i().mark((function r(e){var t;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t="PyCall ".concat(n," failed: ").concat(e),l(e,Error)&&(t=e.message),r.next=4,(0,c.Z)(t);case 4:throw new Error(t);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}())};function f(n,r,e,t,i,o,a){try{var c=n[o](a),s=c.value}catch(u){return void e(u)}c.done?r(s):Promise.resolve(s).then(t,i)}function d(n){return function(){var r=this,e=arguments;return new Promise((function(t,i){var o=n.apply(r,e);function a(n){f(o,t,i,a,c,"next",n)}function c(n){f(o,t,i,a,c,"throw",n)}a(void 0)}))}}var m=function(){return p("getHardwareId").catch((function(){return""}))},h=function(){return p("getIpAddress").catch((function(){return""}))},g=function(){var n=d(i().mark((function n(){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p("getWifiInfo").catch((function(){return{ssid:"",quality:0}}));case 2:return r=n.sent,e=Math.round(Number.parseInt(r.quality,10)/70*100),n.abrupt("return",{ssid:r.ssid,quality:e});case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),v=function(){var n=d(i().mark((function n(){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p("getWifiNetworks").catch((function(){return""}));case 2:return r=n.sent,e=r.split("ESSID:").map((function(n){return n.trim().replace(/^"|"$/g,"")})).filter((function(n,r,e){return e.indexOf(n)===r})).filter((function(n){return n})),n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(){var n=d(i().mark((function n(r,e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p("setWifiNetwork",{ssid:r,password:e}).catch((function(){return[]}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}()},2435:function(n,r,e){"use strict";var t=e(4051),i=e.n(t);function o(n,r,e,t,i,o,a){try{var c=n[o](a),s=c.value}catch(u){return void e(u)}c.done?r(s):Promise.resolve(s).then(t,i)}var a=function(){var n,r=(n=i().mark((function n(r){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(r),n.prev=1,n.next=5,null===(e=window.pywebview)||void 0===e||null===(t=e.api)||void 0===t?void 0:t.log(r);case 5:return console.log("Log end"),n.abrupt("return",!0);case 9:return n.prev=9,n.t0=n.catch(1),n.abrupt("return",new Error("Logging Error: ".concat(r)));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})),function(){var r=this,e=arguments;return new Promise((function(t,i){var a=n.apply(r,e);function c(n){o(a,t,i,c,s,"next",n)}function s(n){o(a,t,i,c,s,"throw",n)}c(void 0)}))});return function(n){return r.apply(this,arguments)}}();r.Z=a},8520:function(n,r,e){"use strict";e.r(r);var t=e(4051),i=e.n(t),o=e(5893),a=e(7294),c=e(6886),s=e(3321),u=e(1664),l=e(9452),p=e(5542),f=e(8851),d=e(5125);function m(n,r,e,t,i,o,a){try{var c=n[o](a),s=c.value}catch(u){return void e(u)}c.done?r(s):Promise.resolve(s).then(t,i)}function h(n){return function(){var r=this,e=arguments;return new Promise((function(t,i){var o=n.apply(r,e);function a(n){m(o,t,i,a,c,"next",n)}function c(n){m(o,t,i,a,c,"throw",n)}a(void 0)}))}}r.default=function(){var n=(0,a.useState)(""),r=n[0],e=n[1],t=(0,a.useState)(""),m=t[0],g=t[1];return(0,a.useEffect)((function(){function n(){return(n=h(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,f.Od)();case 2:r=n.sent,g(r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,a.useEffect)((function(){function n(){return(n=h(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,f.I_)();case 2:r=n.sent,e(r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,o.jsxs)(p.Z,{meta:(0,o.jsx)(l.Z,{title:"Dashboard | ".concat(d.Z.title,": ").concat(d.Z.tagline),description:d.Z.description}),children:[(0,o.jsx)("h1",{children:"Dashboard"}),(0,o.jsx)("h3",{children:"Device Name"}),(0,o.jsxs)("h4",{children:["Device ",m]}),r&&(0,o.jsxs)("p",{children:["IP: ",r]}),(0,o.jsx)("button",{children:"Toggle On/Off"}),(0,o.jsxs)(c.ZP,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,o.jsx)(c.ZP,{item:!0,xs:6,children:(0,o.jsx)(u.default,{href:"/wifi",passHref:!0,children:(0,o.jsx)(s.Z,{sx:{width:"100%"},variant:"contained",children:"WiFi"})})}),(0,o.jsx)(c.ZP,{item:!0,xs:6,children:(0,o.jsx)(u.default,{href:"/settings/about",passHref:!0,children:(0,o.jsx)(s.Z,{sx:{width:"100%"},variant:"outlined",children:"About"})})}),(0,o.jsx)(c.ZP,{item:!0,xs:6,children:(0,o.jsx)(u.default,{href:"/settings/view-qr",passHref:!0,children:(0,o.jsx)(s.Z,{sx:{width:"100%"},variant:"outlined",children:"View QR"})})})]})]})}},5125:function(n,r){"use strict";var e={totalImages:5,site_name:"iot-cloud",email:"me@lacymorrow.com",title:"Smartcloud",tagline:"Firmware for iot scheduler",description:"Firmware for iot scheduler",locale:"en",errorMessage:"",MAX_RETRIES:10,RETRY_DELAY:500};e.errorMessage='There was an error, please email <a href="mailto:'.concat(e.email,'">').concat(e.email,"</a>"),r.Z=e}},function(n){n.O(0,[838,774,888,179],(function(){return r=5058,n(n.s=r);var r}));var r=n.O();_N_E=r}]);