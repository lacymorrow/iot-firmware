"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[436],{3250:function(e,t,n){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(7294),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},l=r.useState,u=r.useEffect,a=r.useLayoutEffect,o=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=l({inst:{value:n,getSnapshot:t}}),i=r[0].inst,c=r[1];return a(function(){i.value=n,i.getSnapshot=t,s(i)&&c({inst:i})},[e,n,t]),u(function(){return s(i)&&c({inst:i}),e(function(){s(i)&&c({inst:i})})},[e]),o(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},1688:function(e,t,n){e.exports=n(3250)},8771:function(e,t,n){n.d(t,{F:function(){return i},e:function(){return l}});var r=n(7294);function i(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function l(...e){return(0,r.useCallback)(i(...e),e)}},8426:function(e,t,n){n.d(t,{g7:function(){return u}});var r=n(7462),i=n(7294),l=n(8771);let u=(0,i.forwardRef)((e,t)=>{let{children:n,...l}=e,u=i.Children.toArray(n),o=u.find(s);if(o){let e=o.props.children,n=u.map(t=>t!==o?t:i.Children.count(e)>1?i.Children.only(null):(0,i.isValidElement)(e)?e.props.children:null);return(0,i.createElement)(a,(0,r.Z)({},l,{ref:t}),(0,i.isValidElement)(e)?(0,i.cloneElement)(e,void 0,n):null)}return(0,i.createElement)(a,(0,r.Z)({},l,{ref:t}),n)});u.displayName="Slot";let a=(0,i.forwardRef)((e,t)=>{let{children:n,...r}=e;return(0,i.isValidElement)(n)?(0,i.cloneElement)(n,{...function(e,t){let n={...t};for(let r in t){let i=e[r],l=t[r],u=/^on[A-Z]/.test(r);u?i&&l?n[r]=(...e)=>{l(...e),i(...e)}:i&&(n[r]=i):"style"===r?n[r]={...i,...l}:"className"===r&&(n[r]=[i,l].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props),ref:t?(0,l.F)(t,n.ref):n.ref}):i.Children.count(n)>1?i.Children.only(null):null});a.displayName="SlotClone";let o=({children:e})=>(0,i.createElement)(i.Fragment,null,e);function s(e){return(0,i.isValidElement)(e)&&e.type===o}},2003:function(e,t,n){n.d(t,{j:function(){return u}});var r=n(512);let i=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,l=r.W,u=(e,t)=>n=>{var r;if((null==t?void 0:t.variants)==null)return l(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:u,defaultVariants:a}=t,o=Object.keys(u).map(e=>{let t=null==n?void 0:n[e],r=null==a?void 0:a[e];if(null===t)return null;let l=i(t)||i(r);return u[e][l]}),s=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{}),c=null==t?void 0:null===(r=t.compoundVariants)||void 0===r?void 0:r.reduce((e,t)=>{let{class:n,className:r,...i}=t;return Object.entries(i).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...a,...s}[t]):({...a,...s})[t]===n})?[...e,n,r]:e},[]);return l(e,o,c,null==n?void 0:n.class,null==n?void 0:n.className)}},9734:function(e,t,n){n.d(t,{ZP:function(){return ee},JG:function(){return Z}});var r,i=n(7294),l=n(1688);let u=()=>{},a=u(),o=Object,s=e=>e===a,c=e=>"function"==typeof e,d=(e,t)=>({...e,...t}),f=e=>c(e.then),E=new WeakMap,g=0,v=e=>{let t,n;let r=typeof e,i=e&&e.constructor,l=i==Date;if(o(e)!==e||l||i==RegExp)t=l?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=E.get(e))return t;if(t=++g+"~",E.set(e,t),i==Array){for(n=0,t="@";n<e.length;n++)t+=v(e[n])+",";E.set(e,t)}if(i==o){t="#";let r=o.keys(e).sort();for(;!s(n=r.pop());)s(e[n])||(t+=n+":"+v(e[n])+",");E.set(e,t)}}return t},p=new WeakMap,h={},y={},m="undefined",w=typeof window!=m,_=typeof document!=m,R=()=>w&&typeof window.requestAnimationFrame!=m,b=(e,t)=>{let n=p.get(e);return[()=>!s(t)&&e.get(t)||h,r=>{if(!s(t)){let i=e.get(t);t in y||(y[t]=i),n[5](t,d(i,r),i||h)}},n[6],()=>!s(t)&&t in y?y[t]:!s(t)&&e.get(t)||h]},T=!0,[S,V]=w&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[u,u],O={initFocus:e=>(_&&document.addEventListener("visibilitychange",e),S("focus",e),()=>{_&&document.removeEventListener("visibilitychange",e),V("focus",e)}),initReconnect:e=>{let t=()=>{T=!0,e()},n=()=>{T=!1};return S("online",t),S("offline",n),()=>{V("online",t),V("offline",n)}}},C=!i.useId,L=!w||"Deno"in window,k=e=>R()?window.requestAnimationFrame(e):setTimeout(e,1),N=L?i.useEffect:i.useLayoutEffect,A="undefined"!=typeof navigator&&navigator.connection,D=!L&&A&&(["slow-2g","2g"].includes(A.effectiveType)||A.saveData),F=e=>{if(c(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?v(e):"",t]},x=0,I=()=>++x;var j={ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function P(...e){let[t,n,r,i]=e,l=d({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{}),u=l.populateCache,o=l.rollbackOnError,E=l.optimisticData,g=!1!==l.revalidate,v=e=>"function"==typeof o?o(e):!1!==o,h=l.throwOnError;if(c(n)){let e=[],r=t.keys();for(let i of r)!/^\$(inf|sub)\$/.test(i)&&n(t.get(i)._k)&&e.push(i);return Promise.all(e.map(y))}return y(n);async function y(n){let i;let[l]=F(n);if(!l)return;let[o,d]=b(t,l),[y,m,w,_]=p.get(t),R=()=>{let e=y[l];return g&&(delete w[l],delete _[l],e&&e[0])?e[0](2).then(()=>o().data):o().data};if(e.length<3)return R();let T=r,S=I();m[l]=[S,0];let V=!s(E),O=o(),C=O.data,L=O._c,k=s(L)?C:L;if(V&&d({data:E=c(E)?E(k,C):E,_c:k}),c(T))try{T=T(k)}catch(e){i=e}if(T&&f(T)){if(T=await T.catch(e=>{i=e}),S!==m[l][0]){if(i)throw i;return T}i&&V&&v(i)&&(u=!0,d({data:k,_c:a}))}if(u&&!i){if(c(u)){let e=u(T,k);d({data:e,error:a,_c:a})}else d({data:T,error:a,_c:a})}if(m[l][1]=I(),Promise.resolve(R()).then(()=>{d({_c:a})}),i){if(h)throw i;return}return T}}let M=(e,t)=>{for(let n in e)e[n][0]&&e[n][0](t)},W=(e,t)=>{if(!p.has(e)){let n=d(O,t),r={},i=P.bind(a,e),l=u,o={},s=(e,t)=>{let n=o[e]||[];return o[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},c=(t,n,r)=>{e.set(t,n);let i=o[t];if(i)for(let e of i)e(n,r)},f=()=>{if(!p.has(e)&&(p.set(e,[r,{},{},{},i,c,s]),!L)){let t=n.initFocus(setTimeout.bind(a,M.bind(a,r,0))),i=n.initReconnect(setTimeout.bind(a,M.bind(a,r,1)));l=()=>{t&&t(),i&&i(),p.delete(e)}}};return f(),[e,i,f,l]}return[e,p.get(e)[4]]},[U,Z]=W(new Map),$=d({onLoadingSlow:u,onSuccess:u,onError:u,onErrorRetry:(e,t,n,r,i)=>{let l=n.errorRetryCount,u=i.retryCount,a=~~((Math.random()+.5)*(1<<(u<8?u:8)))*n.errorRetryInterval;(s(l)||!(u>l))&&setTimeout(r,a,i)},onDiscarded:u,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:D?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:D?5e3:3e3,compare:(e,t)=>v(e)==v(t),isPaused:()=>!1,cache:U,mutate:Z,fallback:{}},{isOnline:()=>T,isVisible:()=>{let e=_&&document.visibilityState;return s(e)||"hidden"!==e}}),q=(e,t)=>{let n=d(e,t);if(t){let{use:r,fallback:i}=e,{use:l,fallback:u}=t;r&&l&&(n.use=r.concat(l)),i&&u&&(n.fallback=d(i,u))}return n},J=(0,i.createContext)({}),B=w&&window.__SWR_DEVTOOLS_USE__,G=B?window.__SWR_DEVTOOLS_USE__:[],z=e=>c(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],H=()=>d($,(0,i.useContext)(J)),K=G.concat(e=>(t,n,r)=>{let i=n&&((...e)=>{let[r]=F(t),[,,,i]=p.get(U);if(r.startsWith("$inf$"))return n(...e);let l=i[r];return s(l)?n(...e):(delete i[r],l)});return e(t,i,r)}),Q=(e,t,n)=>{let r=t[e]||(t[e]=[]);return r.push(n),()=>{let e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}};B&&(window.__SWR_DEVTOOLS_REACT__=i);let X=i.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),Y={dedupe:!0};o.defineProperty(e=>{let{value:t}=e,n=(0,i.useContext)(J),r=c(t),l=(0,i.useMemo)(()=>r?t(n):t,[r,n,t]),u=(0,i.useMemo)(()=>r?l:q(n,l),[r,n,l]),o=l&&l.provider,s=(0,i.useRef)(a);o&&!s.current&&(s.current=W(o(u.cache||U),l));let f=s.current;return f&&(u.cache=f[0],u.mutate=f[1]),N(()=>{if(f)return f[2]&&f[2](),f[3]},[]),(0,i.createElement)(J.Provider,d(e,{value:u}))},"defaultValue",{value:$});let ee=(r=(e,t,n)=>{let{cache:r,compare:u,suspense:o,fallbackData:f,revalidateOnMount:E,revalidateIfStale:g,refreshInterval:v,refreshWhenHidden:h,refreshWhenOffline:y,keepPreviousData:m}=n,[w,_,R,T]=p.get(r),[S,V]=F(e),O=(0,i.useRef)(!1),A=(0,i.useRef)(!1),D=(0,i.useRef)(S),x=(0,i.useRef)(t),M=(0,i.useRef)(n),W=()=>M.current,U=()=>W().isVisible()&&W().isOnline(),[Z,$,q,J]=b(r,S),B=(0,i.useRef)({}).current,G=s(f)?n.fallback[S]:f,z=(e,t)=>{for(let n in B)if("data"===n){if(!u(e[n],t[n])&&(!s(e[n])||!u(eu,t[n])))return!1}else if(t[n]!==e[n])return!1;return!0},H=(0,i.useMemo)(()=>{let e=!!S&&!!t&&(s(E)?!W().isPaused()&&!o&&(!!s(g)||g):E),n=t=>{let n=d(t);return(delete n._k,e)?{isValidating:!0,isLoading:!0,...n}:n},r=Z(),i=J(),l=n(r),u=r===i?l:n(i),a=l;return[()=>{let e=n(Z()),t=z(e,a);return t?(a.data=e.data,a.isLoading=e.isLoading,a.isValidating=e.isValidating,a.error=e.error,a):(a=e,e)},()=>u]},[r,S]),K=(0,l.useSyncExternalStore)((0,i.useCallback)(e=>q(S,(t,n)=>{z(n,t)||e()}),[r,S]),H[0],H[1]),ee=!O.current,et=w[S]&&w[S].length>0,en=K.data,er=s(en)?G:en,ei=K.error,el=(0,i.useRef)(er),eu=m?s(en)?el.current:en:er,ea=(!et||!!s(ei))&&(ee&&!s(E)?E:!W().isPaused()&&(o?!s(er)&&g:s(er)||g)),eo=!!(S&&t&&ee&&ea),es=s(K.isValidating)?eo:K.isValidating,ec=s(K.isLoading)?eo:K.isLoading,ed=(0,i.useCallback)(async e=>{let t,r;let i=x.current;if(!S||!i||A.current||W().isPaused())return!1;let l=!0,o=e||{},d=!R[S]||!o.dedupe,f=()=>C?!A.current&&S===D.current&&O.current:S===D.current,E={isValidating:!1,isLoading:!1},g=()=>{$(E)},v=()=>{let e=R[S];e&&e[1]===r&&delete R[S]},p={isValidating:!0};s(Z().data)&&(p.isLoading=!0);try{if(d&&($(p),n.loadingTimeout&&s(Z().data)&&setTimeout(()=>{l&&f()&&W().onLoadingSlow(S,n)},n.loadingTimeout),R[S]=[i(V),I()]),[t,r]=R[S],t=await t,d&&setTimeout(v,n.dedupingInterval),!R[S]||R[S][1]!==r)return d&&f()&&W().onDiscarded(S),!1;E.error=a;let e=_[S];if(!s(e)&&(r<=e[0]||r<=e[1]||0===e[1]))return g(),d&&f()&&W().onDiscarded(S),!1;let o=Z().data;E.data=u(o,t)?o:t,d&&f()&&W().onSuccess(t,S,n)}catch(n){v();let e=W(),{shouldRetryOnError:t}=e;!e.isPaused()&&(E.error=n,d&&f()&&(e.onError(n,S,e),(!0===t||c(t)&&t(n))&&U()&&e.onErrorRetry(n,S,e,e=>{let t=w[S];t&&t[0]&&t[0](j.ERROR_REVALIDATE_EVENT,e)},{retryCount:(o.retryCount||0)+1,dedupe:!0})))}return l=!1,g(),!0},[S,r]),ef=(0,i.useCallback)((...e)=>P(r,D.current,...e),[]);if(N(()=>{x.current=t,M.current=n,s(en)||(el.current=en)}),N(()=>{if(!S)return;let e=ed.bind(a,Y),t=0,n=Q(S,w,(n,r={})=>{if(n==j.FOCUS_EVENT){let n=Date.now();W().revalidateOnFocus&&n>t&&U()&&(t=n+W().focusThrottleInterval,e())}else if(n==j.RECONNECT_EVENT)W().revalidateOnReconnect&&U()&&e();else if(n==j.MUTATE_EVENT)return ed();else if(n==j.ERROR_REVALIDATE_EVENT)return ed(r)});return A.current=!1,D.current=S,O.current=!0,$({_k:V}),ea&&(s(er)||L?e():k(e)),()=>{A.current=!0,n()}},[S]),N(()=>{let e;function t(){let t=c(v)?v(Z().data):v;t&&-1!==e&&(e=setTimeout(n,t))}function n(){!Z().error&&(h||W().isVisible())&&(y||W().isOnline())?ed(Y).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[v,h,y,S]),(0,i.useDebugValue)(eu),o&&s(er)&&S){if(!C&&L)throw Error("Fallback data is required when using suspense in SSR.");x.current=t,M.current=n,A.current=!1;let e=T[S];if(!s(e)){let t=ef(e);X(t)}if(s(ei)){let e=ed(Y);s(eu)||(e.status="fulfilled",e.value=!0),X(e)}else throw ei}return{mutate:ef,get data(){return B.data=!0,eu},get error(){return B.error=!0,ei},get isValidating(){return B.isValidating=!0,es},get isLoading(){return B.isLoading=!0,ec}}},function(...e){let t=H(),[n,i,l]=z(e),u=q(t,l),a=r,{use:o}=u,s=(o||[]).concat(K);for(let e=s.length;e--;)a=s[e](a);return a(n,i||u.fetcher||null,u)})}}]);