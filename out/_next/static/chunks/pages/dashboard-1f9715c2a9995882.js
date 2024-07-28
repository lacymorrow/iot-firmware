(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{528:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return r(4020)}])},7738:function(e,s,r){"use strict";r.d(s,{Ol:function(){return i},SZ:function(){return d},Zb:function(){return l},aY:function(){return o},eW:function(){return f},ll:function(){return c}});var t=r(5893),n=r(7294),a=r(7537);let l=n.forwardRef((e,s)=>{let{className:r,...n}=e;return(0,t.jsx)("div",{ref:s,className:(0,a.cn)("rounded-xl border bg-card text-card-foreground shadow",r),...n})});l.displayName="Card";let i=n.forwardRef((e,s)=>{let{className:r,...n}=e;return(0,t.jsx)("div",{ref:s,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",r),...n})});i.displayName="CardHeader";let c=n.forwardRef((e,s)=>{let{className:r,...n}=e;return(0,t.jsx)("h3",{ref:s,className:(0,a.cn)("font-semibold leading-none tracking-tight",r),...n})});c.displayName="CardTitle";let d=n.forwardRef((e,s)=>{let{className:r,...n}=e;return(0,t.jsx)("p",{ref:s,className:(0,a.cn)("text-sm text-muted-foreground",r),...n})});d.displayName="CardDescription";let o=n.forwardRef((e,s)=>{let{className:r,...n}=e;return(0,t.jsx)("div",{ref:s,className:(0,a.cn)("p-6 pt-0",r),...n})});o.displayName="CardContent";let f=n.forwardRef((e,s)=>{let{className:r,...n}=e;return(0,t.jsx)("div",{ref:s,className:(0,a.cn)("flex items-center p-6 pt-0",r),...n})});f.displayName="CardFooter"},4334:function(e,s,r){"use strict";var t=r(9734),n=r(1473);s.Z=e=>{let{data:s,error:r}=(0,t.ZP)("/hardware-id",n.Od,{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1,...e});return{hwid:s,isLoading:!r&&!s,isError:r}}},4020:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return I}});var t=r(5893),n=r(7294),a=r(2182),l=r(5894),i=r(1598),c=r(4724),d=r(3998),o=r(8949),f=r(9858),u=r(5231),x=r(7246),h=r(6309),m=r(3217),j=r(1664),p=r.n(j),v=r(5754),N=r(7738),g=r(2780),w=r(7537);let b=n.forwardRef((e,s)=>{let{className:r,orientation:n="horizontal",decorative:a=!0,...l}=e;return(0,t.jsx)(g.f,{ref:s,decorative:a,orientation:n,className:(0,w.cn)("shrink-0 bg-border","horizontal"===n?"h-[1px] w-full":"h-full w-[1px]",r),...l})});b.displayName=g.f.displayName;var y=r(3904);let Z=n.forwardRef((e,s)=>{let{className:r,...n}=e;return(0,t.jsx)(y.fC,{className:(0,w.cn)("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",r),...n,ref:s,children:(0,t.jsx)(y.bU,{className:(0,w.cn)("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0")})})});Z.displayName=y.fC.displayName;let O=e=>{let s=parseFloat(e.toString());return 9*s/5+32};var k=r(4334),R=r(9734),E=r(1473),_=r(5752),C=e=>{let{data:s,error:r,mutate:t}=(0,R.ZP)("/device-power-status",E.uT,{refreshInterval:_.Z.RETRY_DELAY,refreshWhenHidden:!0,refreshWhenOffline:!0,revalidateIfStale:!0,revalidateOnFocus:!0,revalidateOnReconnect:!0,...e});return{mutate:t,status:"on"===s,isLoading:!r&&void 0===s,isError:r}},S=e=>{let{data:s,error:r}=(0,R.ZP)("/ip-address",E.I_,{refreshInterval:_.Z.NETWORK_TIMEOUT,refreshWhenHidden:!0,refreshWhenOffline:!0,revalidateIfStale:!0,revalidateOnFocus:!0,revalidateOnReconnect:!0,...e});return{ip:s,isLoading:!r&&!s,isError:r}},F=e=>{let{data:s,error:r}=(0,R.ZP)("/temperature-humidity",E.sc,{refreshInterval:_.Z.RETRY_DELAY,refreshWhenHidden:!0,refreshWhenOffline:!0,revalidateIfStale:!0,revalidateOnFocus:!0,revalidateOnReconnect:!0,...e});return{data:s,isLoading:!r&&!s,isError:r}},Y=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.trunc(e*Math.pow(10,s))/Math.pow(10,s)},T=r(2469),I=()=>{let{mutate:e}=(0,R.kY)(),{hwid:s}=(0,k.Z)(),{ip:r}=S(),{status:j,isLoading:g}=C(),{data:y}=F();(0,n.useEffect)(()=>{e(()=>!0)},[e]);let _=async()=>{(0,E.b)(!j)},I=(0,n.useMemo)(()=>(null==y?void 0:y.temperature)?Y(O(y.temperature),2):"---",[null==y?void 0:y.temperature]);return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:" flex h-full flex-col justify-between",children:[(0,t.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,t.jsxs)(N.Ol,{children:[(0,t.jsxs)(N.ll,{children:[(0,t.jsx)(f.Z,{})," Device Power"]}),(0,t.jsx)(N.SZ,{children:"Controlling device power status"})]}),(0,t.jsx)(p(),{href:"/heating",children:(0,t.jsxs)(N.Zb,{children:[(0,t.jsx)(N.Ol,{children:(0,t.jsx)(N.ll,{children:"Heating"})}),(0,t.jsx)(N.aY,{className:"flex items-center justify-center",children:(0,t.jsx)(u.Z,{className:"h-6 w-6"})})]})}),(0,t.jsx)(p(),{href:"/schedule",children:(0,t.jsxs)(N.Zb,{children:[(0,t.jsx)(N.Ol,{children:(0,t.jsx)(N.ll,{children:"Schedule"})}),(0,t.jsx)(N.aY,{className:"flex items-center justify-center",children:(0,t.jsx)(T.Que,{className:"h-6 w-6"})})]})})]}),(0,t.jsxs)("div",{className:"grid grid-cols-3 gap-2",children:[(0,t.jsxs)(N.Zb,{children:[(0,t.jsxs)(N.Ol,{className:"flex flex-row items-center justify-between space-x-2 space-y-0 pb-2",children:[(0,t.jsx)(N.ll,{className:"",children:"Temperature"}),(0,t.jsx)(a.Z,{})]}),(0,t.jsxs)(N.aY,{children:[(0,t.jsxs)("div",{className:"text-2xl font-bold",children:[null==y?void 0:y.temperature," \xb0C"]}),(0,t.jsxs)("p",{className:"text-muted-foreground",children:[I," \xb0F"]})]})]}),(0,t.jsxs)(N.Zb,{onClick:_,className:"cursor-pointer",children:[(0,t.jsxs)(N.Ol,{className:"flex flex-row items-center justify-center space-x-2 space-y-0 pb-2",children:[(0,t.jsx)(N.ll,{className:"text-sm font-bold",children:j?"On":"Off"}),j?(0,t.jsx)(x.Z,{size:12}):(0,t.jsx)(h.Z,{size:12})]}),(0,t.jsx)(N.aY,{className:"flex flex-col items-center justify-center gap-2",children:g?(0,t.jsx)(m.Z,{className:"h-4 w-4 animate-spin"}):(0,t.jsx)(Z,{checked:j})})]}),(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(N.Zb,{children:[(0,t.jsxs)(N.Ol,{className:"flex flex-row items-center justify-between space-x-2 space-y-0 pb-2",children:[(0,t.jsx)(N.ll,{className:"",children:"Humidity"}),(0,t.jsx)(l.Z,{})]}),(0,t.jsx)(N.aY,{children:(0,t.jsxs)("div",{className:"text-2xl font-bold",children:[null==y?void 0:y.humidity,"%"]})})]})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(b,{className:"my-2"}),(0,t.jsxs)("div",{className:"grid grid-cols-3 text-xs",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)(i.Z,{fontSize:"small"}),s||"unknown"]}),(0,t.jsx)(p(),{href:"/settings/view-qr",className:(0,w.cn)((0,v.d)({variant:"ghost"}),"w-full flex justify-center"),children:(0,t.jsx)(c.Z,{fontSize:"large"})}),(0,t.jsx)(p(),{href:"/wifi",className:(0,w.cn)((0,v.d)({variant:"ghost"}),"flex gap-2 items-center justify-end text-xs"),children:r?(0,t.jsxs)(t.Fragment,{children:[r,(0,t.jsx)(d.Z,{fontSize:"small"})]}):(0,t.jsxs)(t.Fragment,{children:["Disconnected",(0,t.jsx)(o.Z,{fontSize:"small"})]})})]})]})]})})}}},function(e){e.O(0,[409,664,169,394,774,888,179],function(){return e(e.s=528)}),_N_E=e.O()}]);