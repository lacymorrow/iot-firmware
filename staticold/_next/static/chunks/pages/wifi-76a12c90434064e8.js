(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[281],{1295:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wifi",function(){return t(9864)}])},9864:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return _}});var r=t(4051),i=t.n(r),o=t(5893),c=t(7294),a=t(2456),s=t(2186),u=t(5697),l=t(745),f=t(452),d=t(7920),p=t(8987),h=t(6886),x=t(1713),v=t(8340),w=t(3321),j=t(1664),b=t(9452),m=t(8100),Z=t(1303);function y(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var g=function(n){var e=(0,m.ZP)("/wifi-info",Z.wl,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){y(n,e,t[e])}))}return n}({revalidateOnFocus:!1},n)),t=e.data,r=e.error;return{data:t,mutate:e.mutate,isLoading:!r&&!t,isError:r}},O=t(3292),P=t(2435),k=t(5125);function E(n,e,t,r,i,o,c){try{var a=n[o](c),s=a.value}catch(u){return void t(u)}a.done?e(s):Promise.resolve(s).then(r,i)}function S(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var o=n.apply(e,t);function c(n){E(o,r,i,c,a,"next",n)}function a(n){E(o,r,i,c,a,"throw",n)}c(void 0)}))}}function C(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var _=function(){var n=g(),e=n.data,t=n.mutate,r=n.isError,m=(0,c.useRef)(null),y=(0,c.useState)(""),E=y[0],_=y[1],I=(0,c.useState)([]),N=I[0],W=I[1],F=(0,c.useState)(""),T=F[0],D=F[1],z=(0,c.useState)(!0),H=z[0],R=z[1],X=(0,c.useState)(!0),q=X[0],G=X[1],K=(0,c.useState)(!1),L=K[0],M=K[1],U=function(){var n=S(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return G(!0),n.next=3,(0,Z.Sj)();case 3:e=n.sent,W(e),G(!1);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),V=function(){var n=S(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!E){n.next=9;break}return M(!0),n.next=4,(0,P.Z)("WiFi Connect ".concat(E,":").concat(T));case 4:return n.next=6,(0,Z.Cz)(E,T).then((function(n){return(0,P.Z)("Connect WiFi: ".concat(n))})).catch(function(){var n=S(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,P.Z)("WiFi Error: ".concat(e));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 6:setTimeout(S(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,Z.z)().finally((function(){t(),M(!1)}));case 2:case"end":return n.stop()}}),n)}))),k.Z.NETWORK_TIMEOUT),n.next=10;break;case 9:case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,c.useEffect)((function(){U()}),[]),(0,c.useEffect)((function(){console.log("sync",e,N),!E&&(null===e||void 0===e?void 0:e.ssid)?_(e.ssid):!E&&N&&N[0]&&_(N[0])}),[e,N]),(0,o.jsx)(O.Z,{meta:(0,o.jsx)(b.Z,{title:"Wifi | ".concat(k.Z.title,": ").concat(k.Z.tagline),description:k.Z.description}),children:(0,o.jsxs)("div",{className:"block text-center ",children:[(0,o.jsx)("h4",{className:"my-0",onClick:S(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,Z.z)());case 1:case"end":return n.stop()}}),n)}))),children:"Wifi Setup"}),!e&&!r&&(0,o.jsx)("p",{children:"Getting WiFi information..."})||r?(0,o.jsx)("p",{children:"Enter your WiFi name (SSID) and password to connect."}):(0,o.jsxs)("h3",{children:[null===e||void 0===e?void 0:e.ssid," ",null===e||void 0===e?void 0:e.quality," ",(0,o.jsx)(d.Z,{})]}),(0,o.jsxs)(h.ZP,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,o.jsx)(h.ZP,{item:!0,xs:9,children:N&&(0,o.jsx)(x.Z,{autoComplete:!0,autoHighlight:!0,clearOnEscape:!0,freeSolo:!0,openOnFocus:!0,ref:m,disabled:q||L,options:N,sx:{width:"100%"},renderInput:function(n){return(0,o.jsx)(v.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){C(n,e,t[e])}))}return n}({},n,{label:"Network"}))},inputValue:E,onChange:function(n,e){e&&_(e)},onInputChange:function(n,e){_(e)}})}),(0,o.jsx)(h.ZP,{item:!0,xs:3,children:(0,o.jsx)(p.Z,{loading:q,loadingPosition:"start",sx:{width:"100%"},startIcon:(0,o.jsx)(a.Z,{}),onClick:U,variant:"outlined",children:"Refresh"})}),(0,o.jsx)(h.ZP,{item:!0,xs:9,children:(0,o.jsx)(v.Z,{label:"Password",variant:"outlined",value:T,sx:{width:"100%"},type:H?"password":"text",onChange:function(n){var e;D(null===n||void 0===n||null===(e=n.target)||void 0===e?void 0:e.value)}})}),(0,o.jsx)(h.ZP,{item:!0,xs:3,children:(0,o.jsx)(w.Z,{variant:"outlined",sx:{width:"100%"},startIcon:H?(0,o.jsx)(s.Z,{}):(0,o.jsx)(u.Z,{}),onClick:function(){return R(!H)},children:H?"Show":"Hide"})}),(0,o.jsx)(h.ZP,{item:!0,xs:6,children:(0,o.jsx)(p.Z,{loading:q||L,loadingPosition:"end",sx:{width:"100%"},endIcon:(0,o.jsx)(l.Z,{}),variant:"contained",onClick:V,children:"Connect"})}),(0,o.jsx)(h.ZP,{item:!0,xs:6,children:(0,o.jsx)(j.default,{href:"/dashboard",passHref:!0,children:(0,o.jsx)(w.Z,{disabled:!(null===e||void 0===e?void 0:e.ssid),sx:{width:"100%"},endIcon:(0,o.jsx)(f.Z,{}),variant:"contained",children:"Done"})})})]})]})})}}},function(n){n.O(0,[118,100,204,927,827,774,888,179],(function(){return e=1295,n(n.s=e);var e}));var e=n.O();_N_E=e}]);