(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[281],{503:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wifi",function(){return n(8381)}])},802:function(e,t,n){"use strict";n.d(t,{d:function(){return s},z:function(){return l}});var r=n(5893),o=n(7294),a=n(8426),i=n(2003),c=n(7537);let s=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=o.forwardRef((e,t)=>{let{className:n,variant:o,size:i,asChild:l=!1,...u}=e,d=l?a.g7:"button";return(0,r.jsx)(d,{className:(0,c.cn)(s({variant:o,size:i,className:n})),ref:t,...u})});l.displayName="Button"},1473:function(e,t,n){"use strict";n.d(t,{FS:function(){return E},ld:function(){return Z},uT:function(){return f},Od:function(){return h},I_:function(){return g},GI:function(){return w},M7:function(){return v},sc:function(){return m},wl:function(){return p},Sj:function(){return x},b:function(){return y},Hu:function(){return b},Cz:function(){return j}});var r=n(9734),o=n(5752),a=n(7478),i=n(8893),c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return(0,a.H_)(async()=>{try{var n,r;if(!(null===(r=window.pywebview)||void 0===r?void 0:null===(n=r.api)||void 0===n?void 0:n[e]))throw Error("API endpoint not found");await (0,i.Z)("PyCall ".concat(e),t);let o=await window.pywebview.api[e](t).then(e=>JSON.parse(e)).then(async t=>{if(null==t?void 0:t.error)throw t.error;if(void 0===t.message)throw Error("Response message was empty ".concat(t));return await (0,i.Z)("Pycall ".concat(e," returned: ").concat(t.message),t),t.message});return o}catch(n){let t="".concat(n);throw n instanceof Error&&(t=n.message),await (0,i.Z)("Pycall ".concat(e," (retrying): ").concat(t)),Error(t)}},o.Z.RETRY_DELAY,o.Z.MAX_RETRIES).catch(async t=>{let n="".concat(e," - ").concat(t);throw t instanceof Error&&(n=t.message),await (0,i.Z)("Pycall ".concat(e," - FATAL ERROR: ").concat(n)),Error(n)})};let s=e=>c("get",{key:e}).then(e=>{console.log("Got: ",e);try{return JSON.parse(e)}catch(t){return e}}).catch(e=>(console.log("pyget error: ".concat(e)),"")),l=(e,t)=>(console.log("Setting: ".concat(e,", ").concat(t)),c("set",{key:e,data:t}).catch(e=>(console.log("Pyset error: ",e),""))),u=()=>c("deviceOn").catch(()=>"error"),d=()=>c("deviceOff").catch(()=>"error"),f=()=>c("getDeviceStatus").catch(()=>"error"),h=()=>c("getHardwareId").catch(()=>""),w=async()=>{let e=await (0,a.Vs)(c("checkWifiConnection").catch(()=>!1),o.Z.NETWORK_TIMEOUT);return e},g=()=>c("getIpAddress").catch(()=>""),v=()=>s("network_list"),m=async()=>{let e=await c("getTemperatureHumidity").catch(()=>({temperature:"---",humidity:"---"}));return e},p=async()=>{let e=await c("getWifiInfo").catch(()=>({ssid:"error",quality:0})),t=Math.round(Number.parseInt(e.quality,10)/70*100);return{ssid:e.ssid,quality:t}},x=async()=>{let e=await c("getWifiNetworks").catch(()=>""),t=e.split("ESSID:").map(e=>e.trim().replace(/^"|"$/g,"")).filter((e,t,n)=>n.indexOf(e)===t).filter(e=>e);return t},y=async e=>{console.log("setDevicePower> Setting device power to ".concat(e)),await (0,r.JG)("/device-power",e),e?console.log(await u()):console.log(await d())},j=async(e,t)=>{let n=await c("setWifiNetwork",{ssid:e,password:t});return n},b=async(e,t)=>{let n=await s("network_list"),r="object"==typeof n?await l("network_list",{...n,[e]:t}):await l("network_list",{[e]:t});return r},E=e=>c("add_cron_job",{cron:e}).catch(e=>"createCron error: ".concat(e)),Z=async()=>{let e=await c("get_cron_jobs").catch(e=>"getCrons error: ".concat(e));return e}},8893:function(e,t,n){"use strict";var r=n(5752),o=n(7478);let a=async function(e){for(var t,n,a=arguments.length,i=Array(a>1?a-1:0),c=1;c<a;c++)i[c-1]=arguments[c];(null===(n=window.pywebview)||void 0===n?void 0:null===(t=n.api)||void 0===t?void 0:t.log)?(console.log("[Pylog] ".concat(e),...i),await (0,o.Vs)((async()=>(await window.pywebview.api.log(e),!0))(),r.Z.TIMEOUT).catch(t=>console.log("[Pylog] ".concat(e," error: ").concat(t)))):console.log("[Pylog Error] ".concat(e),...i)};t.Z=a},8381:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(5893),o=n(7294),a=n(4011),i=n(452),c=n(7920),s=n(6886),l=n(1222),u=n(135),d=n(3217),f=n(2888),h=n(4464),w=n(1607),g=n(1664),v=n.n(g),m=n(9734),p=n(802),x=n(7537),y=n(1473),j=n(5752),b=e=>{let{data:t,error:n,mutate:r}=(0,m.ZP)("/wifi-info",y.wl,{refreshInterval:j.Z.NETWORK_TIMEOUT,refreshWhenHidden:!1,refreshWhenOffline:!0,revalidateIfStale:!0,revalidateOnFocus:!0,revalidateOnReconnect:!0,...e});return{data:t,mutate:r,isLoading:!n&&!t,isError:n}},E=n(8893);let Z="w-full h-full flex gap-2";var _=()=>{let{data:e,mutate:t,isError:n}=b(),{data:g}=(0,m.ZP)("/saved-networks",y.M7),_=(0,o.useRef)(null),N=(0,o.useRef)(null),[P,S]=(0,o.useState)(""),[O,T]=(0,o.useState)([]),[C,I]=(0,o.useState)(""),[k,R]=(0,o.useState)(!0),[W,F]=(0,o.useState)(!0),[z,H]=(0,o.useState)(!1),M=async()=>{F(!0);let e=await (0,y.Sj)();console.log(e),T(e),F(!1)},A=()=>{!C&&(null==e?void 0:e.ssid)&&(null==g?void 0:g[e.ssid])&&I(g[e.ssid])},D=async()=>{P&&(H(!0),await (0,E.Z)("WiFi Connect ".concat(P,":").concat(C)),await (0,y.Cz)(P,C).then(e=>(0,E.Z)("Connect WiFi: ".concat(e))).catch(async e=>{await (0,E.Z)("WiFi Error: ".concat(e))}),setTimeout(()=>{(0,y.GI)().then(async()=>{await (0,y.Hu)(P,C),console.log("Connected, saved network".concat(P,":").concat(C))}).finally(()=>{t(),H(!1)})},j.Z.NETWORK_TIMEOUT))};return(0,o.useEffect)(()=>{M()},[]),(0,o.useEffect)(()=>{!P&&(null==e?void 0:e.ssid)?S(e.ssid):!P&&O&&O[0]&&S(O[0])},[e,O]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"block text-center",children:[!e&&!n&&(0,r.jsx)("p",{children:"Getting WiFi information..."})||n?(0,r.jsx)("p",{children:"Enter your WiFi name (SSID) and password to connect."}):(0,r.jsxs)("h3",{children:[null==e?void 0:e.ssid," ",null==e?void 0:e.quality," ",(0,r.jsx)(c.Z,{})]}),(0,r.jsxs)(s.ZP,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,r.jsx)(s.ZP,{item:!0,xs:9,children:O&&(0,r.jsx)(l.Z,{autoComplete:!0,autoHighlight:!0,clearOnEscape:!0,freeSolo:!0,openOnFocus:!0,ref:_,disabled:W||z,options:O,sx:{width:"100%"},renderInput:e=>(0,r.jsx)(u.Z,{...e,label:"Network"}),inputValue:P,onChange:(e,t)=>{t&&(S(t),A())},onBlur:A,onInputChange:(e,t)=>{S(t)}})}),(0,r.jsx)(s.ZP,{item:!0,xs:3,children:(0,r.jsxs)(p.z,{onClick:M,className:"text-md flex h-full w-full gap-2",children:[W?(0,r.jsx)(d.Z,{className:"h-4 w-4 animate-spin"}):(0,r.jsx)(f.Z,{})," ","Refresh"]})}),(0,r.jsx)(s.ZP,{item:!0,xs:9,children:(0,r.jsx)(u.Z,{ref:N,label:"Password",variant:"outlined",value:C,sx:{width:"100%"},type:k?"password":"text",onChange:e=>{var t;I(null==e?void 0:null===(t=e.target)||void 0===t?void 0:t.value)}})}),(0,r.jsx)(s.ZP,{item:!0,xs:3,children:(0,r.jsx)(p.z,{onClick:()=>R(!k),className:"text-md flex h-full w-full gap-2",children:k?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.Z,{})," Show"]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w.Z,{})," Hide"]})})}),(0,r.jsxs)("div",{className:"grid grid-cols-2",children:[(0,r.jsxs)(p.z,{onClick:D,className:(0,x.cn)(Z,"text-xl"),children:[W||z?(0,r.jsx)(d.Z,{className:"h-4 w-4 animate-spin"}):(0,r.jsx)(a.Z,{fontSize:"inherit"}),"Connect"]}),(0,r.jsx)(p.z,{disabled:!(null==e?void 0:e.ssid),className:(0,x.cn)(Z,"text-xl"),children:(null==e?void 0:e.ssid)?(0,r.jsxs)(v(),{href:"/dashboard",children:["Dashboard ",(0,r.jsx)(i.Z,{})]}):(0,r.jsxs)(r.Fragment,{children:["Dashboard ",(0,r.jsx)(i.Z,{})]})})]})]})]})})}},7478:function(e,t,n){"use strict";n.d(t,{H_:function(){return a},Vs:function(){return r}});let r=(e,t)=>{let n;return Promise.race([e,new Promise((e,r)=>n=setTimeout(()=>r(Error("timeout")),t))]).finally(()=>clearTimeout(n))},o=e=>new Promise(t=>setTimeout(t,e)),a=(e,t,n)=>new Promise((r,i)=>e().then(r).catch(c=>n>0?o(t).then(a.bind(null,e,t,n-1)).then(r).catch(e=>{let t="Operation failed";e instanceof Error&&(t=e.message),i(t)}):i(c)))}},function(e){e.O(0,[436,169,664,220,37,774,888,179],function(){return e(e.s=503)}),_N_E=e.O()}]);