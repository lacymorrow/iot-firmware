(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[899],{124:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/heating",function(){return r(2060)}])},7738:function(e,t,r){"use strict";r.d(t,{Ol:function(){return a},SZ:function(){return u},Zb:function(){return l},aY:function(){return d},eW:function(){return c},ll:function(){return s}});var n=r(5893),o=r(7294),i=r(7537);let l=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("rounded-xl border bg-card text-card-foreground shadow",r),...o})});l.displayName="Card";let a=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",r),...o})});a.displayName="CardHeader";let s=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("h3",{ref:t,className:(0,i.cn)("font-semibold leading-none tracking-tight",r),...o})});s.displayName="CardTitle";let u=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("p",{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",r),...o})});u.displayName="CardDescription";let d=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("p-6 pt-0",r),...o})});d.displayName="CardContent";let c=o.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsx)("div",{ref:t,className:(0,i.cn)("flex items-center p-6 pt-0",r),...o})});c.displayName="CardFooter"},2060:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ei}});var n=r(5893),o=r(5754),i=r(7738),l=r(7294);function a(e,[t,r]){return Math.min(r,Math.max(t,e))}function s(e,t,{checkForDefaultPrevented:r=!0}={}){return function(n){if(e?.(n),!1===r||!n.defaultPrevented)return t?.(n)}}function u(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function d(...e){return l.useCallback(u(...e),e)}function c(e,t=[]){let r=[],o=()=>{let t=r.map(e=>l.createContext(e));return function(r){let n=r?.[e]||t;return l.useMemo(()=>({[`__scope${e}`]:{...r,[e]:n}}),[r,n])}};return o.scopeName=e,[function(t,o){let i=l.createContext(o),a=r.length;function s(t){let{scope:r,children:o,...s}=t,u=r?.[e][a]||i,d=l.useMemo(()=>s,Object.values(s));return(0,n.jsx)(u.Provider,{value:d,children:o})}return r=[...r,o],s.displayName=t+"Provider",[s,function(r,n){let s=n?.[e][a]||i,u=l.useContext(s);if(u)return u;if(void 0!==o)return o;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e),i=o[`__scope${n}`];return{...t,...i}},{});return l.useMemo(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return r.scopeName=t.scopeName,r}(o,...t)]}function f(e){let t=l.useRef(e);return l.useEffect(()=>{t.current=e}),l.useMemo(()=>(...e)=>t.current?.(...e),[])}var p=l.createContext(void 0),m=globalThis?.document?l.useLayoutEffect:()=>{};r(3935);var h=l.forwardRef((e,t)=>{let{children:r,...o}=e,i=l.Children.toArray(r),a=i.find(g);if(a){let e=a.props.children,r=i.map(t=>t!==a?t:l.Children.count(e)>1?l.Children.only(null):l.isValidElement(e)?e.props.children:null);return(0,n.jsx)(v,{...o,ref:t,children:l.isValidElement(e)?l.cloneElement(e,void 0,r):null})}return(0,n.jsx)(v,{...o,ref:t,children:r})});h.displayName="Slot";var v=l.forwardRef((e,t)=>{let{children:r,...n}=e;if(l.isValidElement(r)){let e,o;let i=(e=Object.getOwnPropertyDescriptor(r.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.ref:(e=Object.getOwnPropertyDescriptor(r,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.props.ref:r.props.ref||r.ref;return l.cloneElement(r,{...function(e,t){let r={...t};for(let n in t){let o=e[n],i=t[n],l=/^on[A-Z]/.test(n);l?o&&i?r[n]=(...e)=>{i(...e),o(...e)}:o&&(r[n]=o):"style"===n?r[n]={...o,...i}:"className"===n&&(r[n]=[o,i].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:t?u(t,i):i})}return l.Children.count(r)>1?l.Children.only(null):null});v.displayName="SlotClone";var w=({children:e})=>(0,n.jsx)(n.Fragment,{children:e});function g(e){return l.isValidElement(e)&&e.type===w}var x=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let Node=l.forwardRef((e,r)=>{let{asChild:o,...i}=e,l=o?h:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,n.jsx)(l,{...i,ref:r})});return Node.displayName=`Primitive.${t}`,{...e,[t]:Node}},{}),y=l.forwardRef((e,t)=>{let{children:r,...o}=e,i=l.Children.toArray(r),a=i.find(R);if(a){let e=a.props.children,r=i.map(t=>t!==a?t:l.Children.count(e)>1?l.Children.only(null):l.isValidElement(e)?e.props.children:null);return(0,n.jsx)(b,{...o,ref:t,children:l.isValidElement(e)?l.cloneElement(e,void 0,r):null})}return(0,n.jsx)(b,{...o,ref:t,children:r})});y.displayName="Slot";var b=l.forwardRef((e,t)=>{let{children:r,...n}=e;if(l.isValidElement(r)){let e,o;let i=(e=Object.getOwnPropertyDescriptor(r.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.ref:(e=Object.getOwnPropertyDescriptor(r,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?r.props.ref:r.props.ref||r.ref;return l.cloneElement(r,{...function(e,t){let r={...t};for(let n in t){let o=e[n],i=t[n],l=/^on[A-Z]/.test(n);l?o&&i?r[n]=(...e)=>{i(...e),o(...e)}:o&&(r[n]=o):"style"===n?r[n]={...o,...i}:"className"===n&&(r[n]=[o,i].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:t?u(t,i):i})}return l.Children.count(r)>1?l.Children.only(null):null});b.displayName="SlotClone";var j=({children:e})=>(0,n.jsx)(n.Fragment,{children:e});function R(e){return l.isValidElement(e)&&e.type===j}var S=["PageUp","PageDown"],N=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],C={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},E="Slider",[P,_,D]=function(e){let t=e+"CollectionProvider",[r,o]=c(t),[i,a]=r(t,{collectionRef:{current:null},itemMap:new Map}),s=e=>{let{scope:t,children:r}=e,o=l.useRef(null),a=l.useRef(new Map).current;return(0,n.jsx)(i,{scope:t,itemMap:a,collectionRef:o,children:r})};s.displayName=t;let u=e+"CollectionSlot",f=l.forwardRef((e,t)=>{let{scope:r,children:o}=e,i=a(u,r),l=d(t,i.collectionRef);return(0,n.jsx)(y,{ref:l,children:o})});f.displayName=u;let p=e+"CollectionItemSlot",m="data-radix-collection-item",h=l.forwardRef((e,t)=>{let{scope:r,children:o,...i}=e,s=l.useRef(null),u=d(t,s),c=a(p,r);return l.useEffect(()=>(c.itemMap.set(s,{ref:s,...i}),()=>void c.itemMap.delete(s))),(0,n.jsx)(y,{[m]:"",ref:u,children:o})});return h.displayName=p,[{Provider:s,Slot:f,ItemSlot:h},function(t){let r=a(e+"CollectionConsumer",t),n=l.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${m}]`)),n=Array.from(r.itemMap.values()),o=n.sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current));return o},[r.collectionRef,r.itemMap]);return n},o]}(E),[M,k]=c(E,[D]),[A,O]=M(E),z=l.forwardRef((e,t)=>{let{name:r,min:o=0,max:i=100,step:u=1,orientation:d="horizontal",disabled:c=!1,minStepsBetweenThumbs:p=0,defaultValue:m=[o],value:h,onValueChange:v=()=>{},onValueCommit:w=()=>{},inverted:g=!1,...x}=e,y=l.useRef(new Set),b=l.useRef(0),j="horizontal"===d,R=j?I:V,[C=[],E]=function({prop:e,defaultProp:t,onChange:r=()=>{}}){let[n,o]=function({defaultProp:e,onChange:t}){let r=l.useState(e),[n]=r,o=l.useRef(n),i=f(t);return l.useEffect(()=>{o.current!==n&&(i(n),o.current=n)},[n,o,i]),r}({defaultProp:t,onChange:r}),i=void 0!==e,a=i?e:n,s=f(r),u=l.useCallback(t=>{if(i){let r="function"==typeof t?t(e):t;r!==e&&s(r)}else o(t)},[i,e,o,s]);return[a,u]}({prop:h,defaultProp:m,onChange:e=>{let t=[...y.current];t[b.current]?.focus(),v(e)}}),_=l.useRef(C);function D(e,t,{commit:r}={commit:!1}){let n=(String(u).split(".")[1]||"").length,l=function(e,t){let r=Math.pow(10,t);return Math.round(e*r)/r}(Math.round((e-o)/u)*u+o,n),s=a(l,[o,i]);E((e=[])=>{let n=function(e=[],t,r){let n=[...e];return n[r]=t,n.sort((e,t)=>e-t)}(e,s,t);if(!function(e,t){if(t>0){let r=e.slice(0,-1).map((t,r)=>e[r+1]-t);return Math.min(...r)>=t}return!0}(n,p*u))return e;{b.current=n.indexOf(s);let t=String(n)!==String(e);return t&&r&&w(n),t?n:e}})}return(0,n.jsx)(A,{scope:e.__scopeSlider,name:r,disabled:c,min:o,max:i,valueIndexToChangeRef:b,thumbs:y.current,values:C,orientation:d,children:(0,n.jsx)(P.Provider,{scope:e.__scopeSlider,children:(0,n.jsx)(P.Slot,{scope:e.__scopeSlider,children:(0,n.jsx)(R,{"aria-disabled":c,"data-disabled":c?"":void 0,...x,ref:t,onPointerDown:s(x.onPointerDown,()=>{c||(_.current=C)}),min:o,max:i,inverted:g,onSlideStart:c?void 0:function(e){let t=function(e,t){if(1===e.length)return 0;let r=e.map(e=>Math.abs(e-t));return r.indexOf(Math.min(...r))}(C,e);D(e,t)},onSlideMove:c?void 0:function(e){D(e,b.current)},onSlideEnd:c?void 0:function(){let e=_.current[b.current],t=C[b.current];t!==e&&w(C)},onHomeKeyDown:()=>!c&&D(o,0,{commit:!0}),onEndKeyDown:()=>!c&&D(i,C.length-1,{commit:!0}),onStepKeyDown:({event:e,direction:t})=>{if(!c){let r=S.includes(e.key),n=r||e.shiftKey&&N.includes(e.key),o=b.current,i=C[o];D(i+u*(n?10:1)*t,o,{commit:!0})}}})})})})});z.displayName=E;var[W,H]=M(E,{startEdge:"left",endEdge:"right",size:"width",direction:1}),I=l.forwardRef((e,t)=>{let{min:r,max:o,dir:i,inverted:a,onSlideStart:s,onSlideMove:u,onSlideEnd:c,onStepKeyDown:f,...m}=e,[h,v]=l.useState(null),w=d(t,e=>v(e)),g=l.useRef(),x=function(e){let t=l.useContext(p);return e||t||"ltr"}(i),y="ltr"===x,b=y&&!a||!y&&a;function j(e){let t=g.current||h.getBoundingClientRect(),n=[0,t.width],i=q(n,b?[r,o]:[o,r]);return g.current=t,i(e-t.left)}return(0,n.jsx)(W,{scope:e.__scopeSlider,startEdge:b?"left":"right",endEdge:b?"right":"left",direction:b?1:-1,size:"width",children:(0,n.jsx)(Z,{dir:x,"data-orientation":"horizontal",...m,ref:w,style:{...m.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:e=>{let t=j(e.clientX);s?.(t)},onSlideMove:e=>{let t=j(e.clientX);u?.(t)},onSlideEnd:()=>{g.current=void 0,c?.()},onStepKeyDown:e=>{let t=C[b?"from-left":"from-right"].includes(e.key);f?.({event:e,direction:t?-1:1})}})})}),V=l.forwardRef((e,t)=>{let{min:r,max:o,inverted:i,onSlideStart:a,onSlideMove:s,onSlideEnd:u,onStepKeyDown:c,...f}=e,p=l.useRef(null),m=d(t,p),h=l.useRef(),v=!i;function w(e){let t=h.current||p.current.getBoundingClientRect(),n=[0,t.height],i=q(n,v?[o,r]:[r,o]);return h.current=t,i(e-t.top)}return(0,n.jsx)(W,{scope:e.__scopeSlider,startEdge:v?"bottom":"top",endEdge:v?"top":"bottom",size:"height",direction:v?1:-1,children:(0,n.jsx)(Z,{"data-orientation":"vertical",...f,ref:m,style:{...f.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:e=>{let t=w(e.clientY);a?.(t)},onSlideMove:e=>{let t=w(e.clientY);s?.(t)},onSlideEnd:()=>{h.current=void 0,u?.()},onStepKeyDown:e=>{let t=C[v?"from-bottom":"from-top"].includes(e.key);c?.({event:e,direction:t?-1:1})}})})}),Z=l.forwardRef((e,t)=>{let{__scopeSlider:r,onSlideStart:o,onSlideMove:i,onSlideEnd:l,onHomeKeyDown:a,onEndKeyDown:u,onStepKeyDown:d,...c}=e,f=O(E,r);return(0,n.jsx)(x.span,{...c,ref:t,onKeyDown:s(e.onKeyDown,e=>{"Home"===e.key?(a(e),e.preventDefault()):"End"===e.key?(u(e),e.preventDefault()):S.concat(N).includes(e.key)&&(d(e),e.preventDefault())}),onPointerDown:s(e.onPointerDown,e=>{let t=e.target;t.setPointerCapture(e.pointerId),e.preventDefault(),f.thumbs.has(t)?t.focus():o(e)}),onPointerMove:s(e.onPointerMove,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&i(e)}),onPointerUp:s(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&(t.releasePointerCapture(e.pointerId),l(e))})})}),$="SliderTrack",T=l.forwardRef((e,t)=>{let{__scopeSlider:r,...o}=e,i=O($,r);return(0,n.jsx)(x.span,{"data-disabled":i.disabled?"":void 0,"data-orientation":i.orientation,...o,ref:t})});T.displayName=$;var K="SliderRange",B=l.forwardRef((e,t)=>{let{__scopeSlider:r,...o}=e,i=O(K,r),a=H(K,r),s=l.useRef(null),u=d(t,s),c=i.values.length,f=i.values.map(e=>Y(e,i.min,i.max));return(0,n.jsx)(x.span,{"data-orientation":i.orientation,"data-disabled":i.disabled?"":void 0,...o,ref:u,style:{...e.style,[a.startEdge]:(c>1?Math.min(...f):0)+"%",[a.endEdge]:100-Math.max(...f)+"%"}})});B.displayName=K;var F="SliderThumb",L=l.forwardRef((e,t)=>{let r=_(e.__scopeSlider),[o,i]=l.useState(null),a=d(t,e=>i(e)),s=l.useMemo(()=>o?r().findIndex(e=>e.ref.current===o):-1,[r,o]);return(0,n.jsx)(U,{...e,ref:a,index:s})}),U=l.forwardRef((e,t)=>{var r;let{__scopeSlider:o,index:i,name:a,...u}=e,c=O(F,o),f=H(F,o),[p,h]=l.useState(null),v=d(t,e=>h(e)),w=!p||!!p.closest("form"),g=function(e){let[t,r]=l.useState(void 0);return m(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let n,o;if(!Array.isArray(t)||!t.length)return;let i=t[0];if("borderBoxSize"in i){let e=i.borderBoxSize,t=Array.isArray(e)?e[0]:e;n=t.inlineSize,o=t.blockSize}else n=e.offsetWidth,o=e.offsetHeight;r({width:n,height:o})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}r(void 0)},[e]),t}(p),y=c.values[i],b=void 0===y?0:Y(y,c.min,c.max),j=(r=c.values.length)>2?`Value ${i+1} of ${r}`:2===r?["Minimum","Maximum"][i]:void 0,R=g?.[f.size],S=R?function(e,t,r){let n=e/2,o=q([0,50],[0,n]);return(n-o(t)*r)*r}(R,b,f.direction):0;return l.useEffect(()=>{if(p)return c.thumbs.add(p),()=>{c.thumbs.delete(p)}},[p,c.thumbs]),(0,n.jsxs)("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[f.startEdge]:`calc(${b}% + ${S}px)`},children:[(0,n.jsx)(P.ItemSlot,{scope:e.__scopeSlider,children:(0,n.jsx)(x.span,{role:"slider","aria-label":e["aria-label"]||j,"aria-valuemin":c.min,"aria-valuenow":y,"aria-valuemax":c.max,"aria-orientation":c.orientation,"data-orientation":c.orientation,"data-disabled":c.disabled?"":void 0,tabIndex:c.disabled?void 0:0,...u,ref:v,style:void 0===y?{display:"none"}:e.style,onFocus:s(e.onFocus,()=>{c.valueIndexToChangeRef.current=i})})}),w&&(0,n.jsx)(X,{name:a??(c.name?c.name+(c.values.length>1?"[]":""):void 0),value:y},i)]})});L.displayName=F;var X=e=>{let{value:t,...r}=e,o=l.useRef(null),i=function(e){let t=l.useRef({value:e,previous:e});return l.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}(t);return l.useEffect(()=>{let e=o.current,r=window.HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(r,"value"),l=n.set;if(i!==t&&l){let r=new Event("input",{bubbles:!0});l.call(e,t),e.dispatchEvent(r)}},[i,t]),(0,n.jsx)("input",{style:{display:"none"},...r,ref:o,defaultValue:t})};function Y(e,t,r){return a(100/(r-t)*(e-t),[0,100])}function q(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}var G=r(7537);let J=l.forwardRef((e,t)=>{let{className:r,...o}=e;return(0,n.jsxs)(z,{ref:t,className:(0,G.cn)("relative flex w-full touch-none select-none items-center",r),...o,children:[(0,n.jsx)(T,{className:"relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",children:(0,n.jsx)(B,{className:"absolute h-full bg-primary"})}),(0,n.jsx)(L,{className:"block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"})]})});J.displayName=z.displayName;var Q=r(1473),ee=r(8893),et=r(1664),er=r.n(et),en=r(1163);let eo="trigger";function ei(){let[e,t]=(0,l.useState)(0),r=(0,en.useRouter)();(0,l.useEffect)(()=>{(0,Q.dG)(eo).then(e=>{e&&((0,ee.Z)(e),t(e))})},[]);let a=async()=>{await (0,Q.Ww)(eo,"0"),await (0,Q.Ji)(eo).then(e=>{(0,ee.Z)(e),r.push("/schedule")}).catch(e=>{(0,ee.Z)(e)})},s=async()=>{await (0,Q.Ww)(eo,e),await (0,Q.FS)({name:eo,cron:"* * * * * python /home/pi/Desktop/heating.py"}).then(e=>{(0,ee.Z)(e),r.push("/schedule")}).catch(e=>{(0,ee.Z)(e)})};return(0,n.jsx)("div",{children:(0,n.jsxs)(i.Zb,{children:[(0,n.jsxs)(i.Ol,{children:[(0,n.jsx)(i.ll,{children:"Heating"}),(0,n.jsxs)(i.SZ,{className:"flex justify-between gap-2",children:["Keep above this temperature",(0,n.jsxs)("span",{className:"text-4xl font-bold",children:[e||"--","\xb0F"]})]})]}),(0,n.jsx)(i.aY,{children:(0,n.jsx)(J,{value:[e],onValueChange:e=>e[0]&&t(e[0]),min:50,max:100,step:1})}),(0,n.jsxs)(i.eW,{className:"flex justify-between gap-2",children:[(0,n.jsx)(er(),{href:"/dashboard",className:(0,o.d)({variant:"secondary"}),children:"Back"}),(0,n.jsxs)("div",{className:"flex gap-2",children:[(0,n.jsx)(o.z,{onClick:a,className:(0,o.d)({variant:"destructive"}),children:"Turn off"}),(0,n.jsx)(o.z,{onClick:s,className:(0,o.d)({variant:"default"}),children:"Turn on"})]})]})]})})}}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=124)}),_N_E=e.O()}]);