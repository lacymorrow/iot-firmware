(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{9858:function(r,e,n){"use strict";var i=n(5318);e.Z=void 0;var t=i(n(4938)),s=n(5893),a=(0,t.default)((0,s.jsx)("path",{d:"M13 3h-2v10h2V3zm4.83 2.17-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"}),"PowerSettingsNew");e.Z=a},5058:function(r,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n(1765)}])},3448:function(r,e,n){"use strict";var i=n(8100),t=n(1303);e.Z=function(){var r=(0,i.ZP)("/hardware-id",t.Od,{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1}),e=r.data,n=r.error;return{hwid:e,isLoading:!n&&!e,isError:n}}},1765:function(r,e,n){"use strict";n.r(e),n.d(e,{default:function(){return P}});var i=n(4051),t=n.n(i),s=n(5893),a=n(9858),c=n(6886),o=n(3946),d=n(3321),u=n(1664),h=n(9452),f=n(3448),l=n(8100),v=n(1303),x=function(){var r=(0,l.ZP)("/ip-address",v.I_),e=r.data,n=r.error;return{ip:e,isLoading:!n&&!e,isError:n}},p=function(){var r=(0,l.ZP)("/device-power",(function(){return(0,v.dG)("powerStatus")})),e=r.data,n=r.error;return{status:e&&"off"!==e,isLoading:!n&&!e,isError:n}},w=n(3292),Z=n(5125);function j(r,e,n,i,t,s,a){try{var c=r[s](a),o=c.value}catch(d){return void n(d)}c.done?e(o):Promise.resolve(o).then(i,t)}var P=function(){var r=(0,f.Z)().hwid,e=x().ip,n=p().status,i=function(){var r,e=(r=t().mark((function r(){return t().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:(0,v.b)(!n);case 1:case"end":return r.stop()}}),r)})),function(){var e=this,n=arguments;return new Promise((function(i,t){var s=r.apply(e,n);function a(r){j(s,i,t,a,c,"next",r)}function c(r){j(s,i,t,a,c,"throw",r)}a(void 0)}))});return function(){return e.apply(this,arguments)}}();return(0,s.jsxs)(w.Z,{meta:(0,s.jsx)(h.Z,{title:"Dashboard | ".concat(Z.Z.title,": ").concat(Z.Z.tagline),description:Z.Z.description}),children:[(0,s.jsx)("h1",{children:"Dashboard"}),(0,s.jsx)("h3",{children:"Device Name"}),(0,s.jsxs)("h4",{children:["Device ",r]}),e&&(0,s.jsxs)("p",{children:["IP: ",e]}),(0,s.jsxs)(c.ZP,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,s.jsx)(c.ZP,{item:!0,xs:6,children:(0,s.jsx)(o.Z,{color:"primary","aria-label":"Power on/off device",component:"span",onClick:i,children:(0,s.jsx)(a.Z,{})})}),(0,s.jsx)(c.ZP,{item:!0,xs:6,children:(0,s.jsx)(u.default,{href:"/wifi",passHref:!0,children:(0,s.jsx)(d.Z,{sx:{width:"100%"},variant:"contained",children:"WiFi"})})}),(0,s.jsx)(c.ZP,{item:!0,xs:6,children:(0,s.jsx)(u.default,{href:"/settings/about",passHref:!0,children:(0,s.jsx)(d.Z,{sx:{width:"100%"},variant:"outlined",children:"About"})})}),(0,s.jsx)(c.ZP,{item:!0,xs:6,children:(0,s.jsx)(u.default,{href:"/settings/view-qr",passHref:!0,children:(0,s.jsx)(d.Z,{sx:{width:"100%"},variant:"outlined",children:"View QR"})})})]})]})}}},function(r){r.O(0,[118,100,204,827,774,888,179],(function(){return e=5058,r(r.s=e);var e}));var e=r.O();_N_E=e}]);