(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{6886:function(n,t,r){"use strict";r.d(t,{ZP:function(){return b}});var e=r(3366),i=r(7462),s=r(7294),o=r(6010),a=r(5408),c=r(9707),u=r(7192),p=r(7088),d=r(7623);var l=s.createContext(),m=r(3620);function g(n){return(0,m.Z)("MuiGrid",n)}const f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var x=(0,r(6087).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((n=>`spacing-xs-${n}`)),...["column-reverse","column","row-reverse","row"].map((n=>`direction-xs-${n}`)),...["nowrap","wrap-reverse","wrap"].map((n=>`wrap-xs-${n}`)),...f.map((n=>`grid-xs-${n}`)),...f.map((n=>`grid-sm-${n}`)),...f.map((n=>`grid-md-${n}`)),...f.map((n=>`grid-lg-${n}`)),...f.map((n=>`grid-xl-${n}`))]),h=r(5893);const w=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function S(n){const t=parseFloat(n);return`${t}${String(n).replace(String(t),"")||"px"}`}function $(n,t,r={}){if(!t||!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[r[`spacing-xs-${String(n)}`]||`spacing-xs-${String(n)}`];const{xs:e,sm:i,md:s,lg:o,xl:a}=n;return[Number(e)>0&&(r[`spacing-xs-${String(e)}`]||`spacing-xs-${String(e)}`),Number(i)>0&&(r[`spacing-sm-${String(i)}`]||`spacing-sm-${String(i)}`),Number(s)>0&&(r[`spacing-md-${String(s)}`]||`spacing-md-${String(s)}`),Number(o)>0&&(r[`spacing-lg-${String(o)}`]||`spacing-lg-${String(o)}`),Number(a)>0&&(r[`spacing-xl-${String(a)}`]||`spacing-xl-${String(a)}`)]}const v=(0,p.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(n,t)=>{const{container:r,direction:e,item:i,lg:s,md:o,sm:a,spacing:c,wrap:u,xl:p,xs:d,zeroMinWidth:l}=n.ownerState;return[t.root,r&&t.container,i&&t.item,l&&t.zeroMinWidth,...$(c,r,t),"row"!==e&&t[`direction-xs-${String(e)}`],"wrap"!==u&&t[`wrap-xs-${String(u)}`],!1!==d&&t[`grid-xs-${String(d)}`],!1!==a&&t[`grid-sm-${String(a)}`],!1!==o&&t[`grid-md-${String(o)}`],!1!==s&&t[`grid-lg-${String(s)}`],!1!==p&&t[`grid-xl-${String(p)}`]]}})((({ownerState:n})=>(0,i.Z)({boxSizing:"border-box"},n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},n.item&&{margin:0},n.zeroMinWidth&&{minWidth:0},"wrap"!==n.wrap&&{flexWrap:n.wrap})),(function({theme:n,ownerState:t}){const r=(0,a.P$)({values:t.direction,breakpoints:n.breakpoints.values});return(0,a.k9)({theme:n},r,(n=>{const t={flexDirection:n};return 0===n.indexOf("column")&&(t[`& > .${x.item}`]={maxWidth:"none"}),t}))}),(function({theme:n,ownerState:t}){const{container:r,rowSpacing:e}=t;let i={};if(r&&0!==e){const t=(0,a.P$)({values:e,breakpoints:n.breakpoints.values});i=(0,a.k9)({theme:n},t,(t=>{const r=n.spacing(t);return"0px"!==r?{marginTop:`-${S(r)}`,[`& > .${x.item}`]:{paddingTop:S(r)}}:{}}))}return i}),(function({theme:n,ownerState:t}){const{container:r,columnSpacing:e}=t;let i={};if(r&&0!==e){const t=(0,a.P$)({values:e,breakpoints:n.breakpoints.values});i=(0,a.k9)({theme:n},t,(t=>{const r=n.spacing(t);return"0px"!==r?{width:`calc(100% + ${S(r)})`,marginLeft:`-${S(r)}`,[`& > .${x.item}`]:{paddingLeft:S(r)}}:{}}))}return i}),(function({theme:n,ownerState:t}){let r;return n.breakpoints.keys.reduce(((e,s)=>{let o={};if(t[s]&&(r=t[s]),!r)return e;if(!0===r)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const c=(0,a.P$)({values:t.columns,breakpoints:n.breakpoints.values}),u="object"===typeof c?c[s]:c;if(void 0===u||null===u)return e;const p=Math.round(r/u*1e8)/1e6+"%";let d={};if(t.container&&t.item&&0!==t.columnSpacing){const r=n.spacing(t.columnSpacing);if("0px"!==r){const n=`calc(${p} + ${S(r)})`;d={flexBasis:n,maxWidth:n}}}o=(0,i.Z)({flexBasis:p,flexGrow:0,maxWidth:p},d)}return 0===n.breakpoints.values[s]?Object.assign(e,o):e[n.breakpoints.up(s)]=o,e}),{})}));var b=s.forwardRef((function(n,t){const r=(0,d.Z)({props:n,name:"MuiGrid"}),a=(0,c.Z)(r),{className:p,columns:m,columnSpacing:f,component:x="div",container:S=!1,direction:b="row",item:Z=!1,lg:j=!1,md:k=!1,rowSpacing:P,sm:y=!1,spacing:N=0,wrap:W="wrap",xl:M=!1,xs:_=!1,zeroMinWidth:z=!1}=a,E=(0,e.Z)(a,w),G=P||N,O=f||N,C=s.useContext(l),D=m||C||12,T=(0,i.Z)({},a,{columns:D,container:S,direction:b,item:Z,lg:j,md:k,sm:y,rowSpacing:G,columnSpacing:O,wrap:W,xl:M,xs:_,zeroMinWidth:z}),B=(n=>{const{classes:t,container:r,direction:e,item:i,lg:s,md:o,sm:a,spacing:c,wrap:p,xl:d,xs:l,zeroMinWidth:m}=n,f={root:["root",r&&"container",i&&"item",m&&"zeroMinWidth",...$(c,r),"row"!==e&&`direction-xs-${String(e)}`,"wrap"!==p&&`wrap-xs-${String(p)}`,!1!==l&&`grid-xs-${String(l)}`,!1!==a&&`grid-sm-${String(a)}`,!1!==o&&`grid-md-${String(o)}`,!1!==s&&`grid-lg-${String(s)}`,!1!==d&&`grid-xl-${String(d)}`]};return(0,u.Z)(f,g,t)})(T);return R=(0,h.jsx)(v,(0,i.Z)({ownerState:T,className:(0,o.Z)(B.root,p),as:x,ref:t},E)),12!==D?(0,h.jsx)(l.Provider,{value:D,children:R}):R;var R}))},9707:function(n,t,r){"use strict";r.d(t,{Z:function(){return c}});var e=r(7462),i=r(3366),s=r(9766),o=r(8528);const a=["sx"];function c(n){const{sx:t}=n,r=(0,i.Z)(n,a),{systemProps:c,otherProps:u}=(n=>{const t={systemProps:{},otherProps:{}};return Object.keys(n).forEach((r=>{o.Gc[r]?t.systemProps[r]=n[r]:t.otherProps[r]=n[r]})),t})(r);let p;return p=Array.isArray(t)?[c,...t]:"function"===typeof t?(...n)=>{const r=t(...n);return(0,s.P)(r)?(0,e.Z)({},c,r):c}:(0,e.Z)({},c,t),(0,e.Z)({},u,{sx:p})}},5058:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return r(8520)}])},8520:function(n,t,r){"use strict";r.r(t);var e=r(4051),i=r.n(e),s=r(5893),o=r(7294),a=r(6886),c=r(3321),u=r(1664),p=r(9452),d=r(5542),l=r(8851),m=r(5125);function g(n,t,r,e,i,s,o){try{var a=n[s](o),c=a.value}catch(u){return void r(u)}a.done?t(c):Promise.resolve(c).then(e,i)}function f(n){return function(){var t=this,r=arguments;return new Promise((function(e,i){var s=n.apply(t,r);function o(n){g(s,e,i,o,a,"next",n)}function a(n){g(s,e,i,o,a,"throw",n)}o(void 0)}))}}t.default=function(){var n=(0,o.useState)(""),t=n[0],r=n[1],e=(0,o.useState)(""),g=e[0],x=e[1];return(0,o.useEffect)((function(){function n(){return(n=f(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,l.Od)();case 2:t=n.sent,x(t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,o.useEffect)((function(){function n(){return(n=f(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,l.I_)();case 2:t=n.sent,r(t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,s.jsxs)(d.Z,{meta:(0,s.jsx)(p.Z,{title:"Dashboard | ".concat(m.Z.title,": ").concat(m.Z.tagline),description:m.Z.description}),children:[(0,s.jsx)("h1",{children:"Dashboard"}),(0,s.jsx)("h3",{children:"Device Name"}),(0,s.jsxs)("h4",{children:["Device ",g]}),t&&(0,s.jsxs)("p",{children:["IP: ",t]}),(0,s.jsx)("button",{children:"Toggle On/Off"}),(0,s.jsxs)(a.ZP,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,s.jsx)(a.ZP,{item:!0,xs:6,children:(0,s.jsx)(u.default,{href:"/wifi",passHref:!0,children:(0,s.jsx)(c.Z,{sx:{width:"100%"},variant:"contained",children:"WiFi"})})}),(0,s.jsx)(a.ZP,{item:!0,xs:6,children:(0,s.jsx)(u.default,{href:"/settings/about",passHref:!0,children:(0,s.jsx)(c.Z,{sx:{width:"100%"},variant:"outlined",children:"About"})})}),(0,s.jsx)(a.ZP,{item:!0,xs:6,children:(0,s.jsx)(u.default,{href:"/settings/view-qr",passHref:!0,children:(0,s.jsx)(c.Z,{sx:{width:"100%"},variant:"outlined",children:"View QR"})})})]})]})}}},function(n){n.O(0,[838,607,774,888,179],(function(){return t=5058,n(n.s=t);var t}));var t=n.O();_N_E=t}]);