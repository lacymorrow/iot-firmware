(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[899],{124:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/heating",function(){return a(7613)}])},7738:function(e,t,a){"use strict";a.d(t,{Ol:function(){return i},SZ:function(){return d},Zb:function(){return l},aY:function(){return u},eW:function(){return o},ll:function(){return c}});var r=a(5893),n=a(7294),s=a(7537);let l=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("rounded-xl border bg-card text-card-foreground shadow",a),...n})});l.displayName="Card";let i=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",a),...n})});i.displayName="CardHeader";let c=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("h3",{ref:t,className:(0,s.cn)("font-semibold leading-none tracking-tight",a),...n})});c.displayName="CardTitle";let d=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",a),...n})});d.displayName="CardDescription";let u=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",a),...n})});u.displayName="CardContent";let o=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,r.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",a),...n})});o.displayName="CardFooter"},7613:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return N}});var r=a(5893),n=a(5754),s=a(7738),l=a(1473),i=a(8893);let c=e=>{let t=parseFloat(e.toString());return(t-32)*5/9};var d=a(4297);let u=(0,d.Z)("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]),o=(0,d.Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);var f=a(1664),h=a.n(f),x=a(1163),p=a(7294);let m="trigger";function N(){let[e,t]=(0,p.useState)(70),a=(0,x.useRouter)();(0,p.useEffect)(()=>{(0,l.dG)(m).then(e=>{e&&e>=60&&e<=100&&((0,i.Z)(e),t(e))}).catch(e=>{(0,i.Z)(e)})},[]);let d=async()=>{await (0,l.Ww)(m,0),await (0,l.Ji)(m).then(e=>{(0,i.Z)(e),a.push("/dashboard")}).catch(e=>{(0,i.Z)(e)})},f=async()=>{let t=c(e);await (0,l.Ww)(m,t),await (0,l.FS)({name:m,cron:"* * * * * python /home/pi/Desktop/trigger.py"}).then(e=>{(0,i.Z)(e),a.push("/dashboard")}).catch(e=>{(0,i.Z)(e)})};return(0,r.jsxs)(s.Zb,{className:"flex h-full flex-col justify-between",children:[(0,r.jsxs)(s.Ol,{children:[(0,r.jsx)(s.ll,{children:"Heating"}),(0,r.jsx)(s.SZ,{className:"flex justify-between gap-2",children:"Keep above this temperature"})]}),(0,r.jsxs)(s.aY,{className:"flex justify-around gap-2",children:[(0,r.jsx)(n.z,{variant:"outline",size:"lg",onClick:()=>{e>60&&t(e-1)},children:(0,r.jsx)(u,{})}),(0,r.jsxs)("p",{className:"text-4xl font-bold",children:[e||"--","\xb0F"]}),(0,r.jsx)(n.z,{variant:"outline",size:"lg",onClick:()=>{e<100&&t(e+1)},children:(0,r.jsx)(o,{})})]}),(0,r.jsxs)(s.eW,{className:"flex justify-between gap-2",children:[(0,r.jsx)(h(),{href:"/dashboard",className:(0,n.d)({variant:"secondary"}),children:"Back"}),(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)(n.z,{onClick:d,className:(0,n.d)({variant:"destructive"}),children:"Turn off"}),(0,r.jsx)(n.z,{onClick:f,className:(0,n.d)({variant:"default"}),children:"Turn on"})]})]})]})}}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=124)}),_N_E=e.O()}]);