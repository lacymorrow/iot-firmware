(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[681],{3267:function(n,e,t){"use strict";var r=t(8169),o=t(5893);e.Z=(0,r.Z)((0,o.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore")},6447:function(n,e,t){"use strict";var r=t(3366),o=t(7462),i=t(7294),c=t(5408),s=t(8700),a=t(9707),u=t(9766),f=t(7088),l=t(7623),d=t(5893);const p=["component","direction","spacing","divider","children"];function v(n,e){const t=i.Children.toArray(n).filter(Boolean);return t.reduce(((n,r,o)=>(n.push(r),o<t.length-1&&n.push(i.cloneElement(e,{key:`separator-${o}`})),n)),[])}const h=(0,f.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(n,e)=>[e.root]})((({ownerState:n,theme:e})=>{let t=(0,o.Z)({display:"flex"},(0,c.k9)({theme:e},(0,c.P$)({values:n.direction,breakpoints:e.breakpoints.values}),(n=>({flexDirection:n}))));if(n.spacing){const r=(0,s.hB)(e),o=Object.keys(e.breakpoints.values).reduce(((e,t)=>(null==n.spacing[t]&&null==n.direction[t]||(e[t]=!0),e)),{}),i=(0,c.P$)({values:n.direction,base:o}),a=(0,c.P$)({values:n.spacing,base:o}),f=(e,t)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${o=t?i[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o]}`]:(0,s.NA)(r,e)}};var o};t=(0,u.Z)(t,(0,c.k9)({theme:e},a,f))}return t})),m=i.forwardRef((function(n,e){const t=(0,l.Z)({props:n,name:"MuiStack"}),i=(0,a.Z)(t),{component:c="div",direction:s="column",spacing:u=0,divider:f,children:m}=i,w=(0,r.Z)(i,p),x={direction:s,spacing:u};return(0,d.jsx)(h,(0,o.Z)({as:c,ownerState:x,ref:e},w,{children:f?v(m,f):m}))}));e.Z=m},9707:function(n,e,t){"use strict";t.d(e,{Z:function(){return a}});var r=t(7462),o=t(3366),i=t(9766),c=t(8528);const s=["sx"];function a(n){const{sx:e}=n,t=(0,o.Z)(n,s),{systemProps:a,otherProps:u}=(n=>{const e={systemProps:{},otherProps:{}};return Object.keys(n).forEach((t=>{c.Gc[t]?e.systemProps[t]=n[t]:e.otherProps[t]=n[t]})),e})(t);let f;return f=Array.isArray(e)?[a,...e]:"function"===typeof e?(...n)=>{const t=e(...n);return(0,i.P)(t)?(0,r.Z)({},a,t):a}:(0,r.Z)({},a,e),(0,r.Z)({},u,{sx:f})}},7634:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/view-qr",function(){return t(6734)}])},1906:function(n,e,t){"use strict";var r=t(4051),o=t.n(r),i=t(5893),c=t(7294),s=t(2592),a=t(2435);function u(n,e,t,r,o,i,c){try{var s=n[i](c),a=s.value}catch(u){return void t(u)}s.done?e(a):Promise.resolve(a).then(r,o)}e.Z=function(n){var e=n.data,t=(0,c.useRef)(null);return(0,c.useEffect)((function(){s.toCanvas(t.current,e,function(){var n,t=(n=o().mark((function n(t){var r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=4;break}return n.next=4,null===(r=window.pywebview)||void 0===r||null===(i=r.api)||void 0===i?void 0:i.log(t);case 4:return n.next=6,(0,a.Z)("Created QR: ".concat(e));case 6:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function c(n){u(i,r,o,c,s,"next",n)}function s(n){u(i,r,o,c,s,"throw",n)}c(void 0)}))});return function(n){return t.apply(this,arguments)}}())}),[e]),(0,i.jsx)("canvas",{ref:t})}},6734:function(n,e,t){"use strict";t.r(e);var r=t(4051),o=t.n(r),i=t(5893),c=t(7294),s=t(3267),a=t(6447),u=t(3321),f=t(1664),l=t(9452),d=t(1906),p=t(5542),v=t(8255),h=t(5125);function m(n,e,t,r,o,i,c){try{var s=n[i](c),a=s.value}catch(u){return void t(u)}s.done?e(a):Promise.resolve(a).then(r,o)}e.default=function(){var n=(0,c.useState)(""),e=n[0],t=n[1],r=function(){var n,e=(n=o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,v.Od)();case 2:e=n.sent,t(e);case 4:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function c(n){m(i,r,o,c,s,"next",n)}function s(n){m(i,r,o,c,s,"throw",n)}c(void 0)}))});return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){r()}),[]),(0,i.jsx)(p.Z,{meta:(0,i.jsx)(l.Z,{title:"Pair | ".concat(h.Z.title,": ").concat(h.Z.tagline),description:h.Z.description}),children:(0,i.jsxs)(a.Z,{spacing:2,children:[(0,i.jsx)("h4",{className:"my-0",children:"Control your device"}),(0,i.jsx)("p",{children:"Scan the QR code with your phone or laptop to control your device from anywhere."}),(0,i.jsx)(d.Z,{data:e}),(0,i.jsx)(f.default,{href:"/dashboard",passHref:!0,children:(0,i.jsx)(u.Z,{sx:{width:"100%"},startIcon:(0,i.jsx)(s.Z,{}),variant:"contained",children:"Back"})})]})})}}},function(n){n.O(0,[838,108,27,774,888,179],(function(){return e=7634,n(n.s=e);var e}));var e=n.O();_N_E=e}]);