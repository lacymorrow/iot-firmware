(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1399)}])},9452:function(e,n,t){"use strict";var r=t(7997),i=t(2962),o=t(9008),a=t(1163),c=t(5125);n.Z=function(e){var n=(0,a.useRouter)();return(0,r.BX)(r.HY,{children:[(0,r.BX)(o.default,{children:[(0,r.tZ)("meta",{charSet:"UTF-8"},"charset"),(0,r.tZ)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,r.tZ)("link",{rel:"apple-touch-icon",href:"".concat(n.basePath,"/apple-touch-icon.png")},"apple"),(0,r.tZ)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(n.basePath,"/favicon-32x32.png")},"icon32"),(0,r.tZ)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(n.basePath,"/favicon-16x16.png")},"icon16"),(0,r.tZ)("link",{rel:"icon",href:"".concat(n.basePath,"/favicon.ico")},"favicon")]}),(0,r.tZ)(i.PB,{title:e.title,description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:c.Z.locale,site_name:c.Z.site_name}})]})}},5542:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(7997),i=t(1664),o=t(1163),a=t(6e3);function c(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function u(){var e=c([""]);return u=function(){return e},e}function s(){var e=c([""]);return s=function(){return e},e}var l=a.Z.div(u()),f=a.Z.div(s()),d=t(5125),v=function(e){var n=(0,o.useRouter)().pathname;return(0,r.BX)(l,{className:"p-2 border-2 border-black",children:[e.meta,(0,r.BX)("div",{className:"max-w-screen-sm w-full mx-auto relative",children:[(0,r.tZ)("div",{children:"/"!==n&&(0,r.tZ)("div",{className:"font-extrabold text-xl text-gray-900",children:(0,r.tZ)(i.default,{href:"/",children:(0,r.tZ)("a",{children:d.Z.title})})})}),(0,r.tZ)(f,{children:e.children})]})]})}},1399:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ve}});var r=t(7997),i=t(9452),o=t(1720);function a(e,n,t,r){return new(t||(t=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(n){o(n)}}function c(e){try{u(r.throw(e))}catch(n){o(n)}}function u(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}u((r=r.apply(e,n||[])).next())}))}function c(e,n){var t,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(e,a)}catch(c){o=[6,c],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}var u,s=function(){},l=s(),f=Object,d=function(e){return e===l},v=function(e){return"function"==typeof e},h=function(e,n){return f.assign({},e,n)},p="undefined",m=function(){return typeof window!=p},g=new WeakMap,w=0,b=function(e){var n,t,r=typeof e,i=e&&e.constructor,o=i==Date;if(f(e)!==e||o||i==RegExp)n=o?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(n=g.get(e))return n;if(n=++w+"~",g.set(e,n),i==Array){for(n="@",t=0;t<e.length;t++)n+=b(e[t])+",";g.set(e,n)}if(i==f){n="#";for(var a=f.keys(e).sort();!d(t=a.pop());)d(e[t])||(n+=t+":"+b(e[t])+",");g.set(e,n)}}return n},y=!0,E=m(),x=typeof document!=p,Z=E&&window.addEventListener?window.addEventListener.bind(window):s,R=x?document.addEventListener.bind(document):s,k=E&&window.removeEventListener?window.removeEventListener.bind(window):s,O=x?document.removeEventListener.bind(document):s,P={isOnline:function(){return y},isVisible:function(){var e=x&&document.visibilityState;return d(e)||"hidden"!==e}},S={initFocus:function(e){return R("visibilitychange",e),Z("focus",e),function(){O("visibilitychange",e),k("focus",e)}},initReconnect:function(e){var n=function(){y=!0,e()},t=function(){y=!1};return Z("online",n),Z("offline",t),function(){k("online",n),k("offline",t)}}},T=!m()||"Deno"in window,C=function(e){return m()&&typeof window.requestAnimationFrame!=p?window.requestAnimationFrame(e):setTimeout(e,1)},_=T?o.useEffect:o.useLayoutEffect,X="undefined"!==typeof navigator&&navigator.connection,I=!T&&X&&(["slow-2g","2g"].includes(X.effectiveType)||X.saveData),V=function(e){if(v(e))try{e=e()}catch(t){e=""}var n=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?b(e):"",n,e?"$swr$"+e:""]},L=new WeakMap,D=function(e,n,t,r,i,o,a){void 0===a&&(a=!0);var c=L.get(e),u=c[0],s=c[1],l=c[3],f=u[n],d=s[n];if(a&&d)for(var v=0;v<d.length;++v)d[v](t,r,i);return o&&(delete l[n],f&&f[0])?f[0](2).then((function(){return e.get(n)})):e.get(n)},N=0,A=function(){return++N},F=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return a(void 0,void 0,void 0,(function(){var n,t,r,i,o,a,u,s,f,p,m,g,w,b,y,E,x,Z,R,k;return c(this,(function(c){switch(c.label){case 0:if(n=e[0],t=e[1],r=e[2],i=e[3],a=!!d((o="boolean"===typeof i?{revalidate:i}:i||{}).populateCache)||o.populateCache,u=!1!==o.revalidate,s=!1!==o.rollbackOnError,f=o.optimisticData,p=V(t),m=p[0],g=p[2],!m)return[2];if(w=L.get(n),b=w[2],e.length<3)return[2,D(n,m,n.get(m),l,l,u,!0)];if(y=r,x=A(),b[m]=[x,0],Z=!d(f),R=n.get(m),Z&&(n.set(m,f),D(n,m,f)),v(y))try{y=y(n.get(m))}catch(O){E=O}return y&&v(y.then)?[4,y.catch((function(e){E=e}))]:[3,2];case 1:if(y=c.sent(),x!==b[m][0]){if(E)throw E;return[2,y]}E&&Z&&s&&(a=!0,y=R,n.set(m,R)),c.label=2;case 2:return a&&(E||(v(a)&&(y=a(y,R)),n.set(m,y)),n.set(g,h(n.get(g),{error:E}))),b[m][1]=A(),[4,D(n,m,y,E,l,u,!!a)];case 3:if(k=c.sent(),E)throw E;return[2,a?k:y]}}))}))},M=function(e,n){for(var t in e)e[t][0]&&e[t][0](n)},B=function(e,n){if(!L.has(e)){var t=h(S,n),r={},i=F.bind(l,e),o=s;if(L.set(e,[r,{},{},{},i]),!T){var a=t.initFocus(setTimeout.bind(l,M.bind(l,r,0))),c=t.initReconnect(setTimeout.bind(l,M.bind(l,r,1)));o=function(){a&&a(),c&&c(),L.delete(e)}}return[e,i,o]}return[e,L.get(e)[4]]},j=B(new Map),Y=j[0],z=j[1],W=h({onLoadingSlow:s,onSuccess:s,onError:s,onErrorRetry:function(e,n,t,r,i){var o=t.errorRetryCount,a=i.retryCount,c=~~((Math.random()+.5)*(1<<(a<8?a:8)))*t.errorRetryInterval;!d(o)&&a>o||setTimeout(r,c,i)},onDiscarded:s,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:I?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:I?5e3:3e3,compare:function(e,n){return b(e)==b(n)},isPaused:function(){return!1},cache:Y,mutate:z,fallback:{}},P),J=function(e,n){var t=h(e,n);if(n){var r=e.use,i=e.fallback,o=n.use,a=n.fallback;r&&o&&(t.use=r.concat(o)),i&&a&&(t.fallback=h(i,a))}return t},q=(0,o.createContext)({}),G=function(e){return v(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},H=function(){return h(W,(0,o.useContext)(q))},$=function(e,n,t){var r=n[e]||(n[e]=[]);return r.push(t),function(){var e=r.indexOf(t);e>=0&&(r[e]=r[r.length-1],r.pop())}},U={dedupe:!0},K=(f.defineProperty((function(e){var n=e.value,t=J((0,o.useContext)(q),n),r=n&&n.provider,i=(0,o.useState)((function(){return r?B(r(t.cache||Y),n):l}))[0];return i&&(t.cache=i[0],t.mutate=i[1]),_((function(){return i?i[2]:l}),[]),(0,o.createElement)(q.Provider,h(e,{value:t}))}),"default",{value:W}),u=function(e,n,t){var r=t.cache,i=t.compare,u=t.fallbackData,s=t.suspense,f=t.revalidateOnMount,p=t.refreshInterval,m=t.refreshWhenHidden,g=t.refreshWhenOffline,w=L.get(r),b=w[0],y=w[1],E=w[2],x=w[3],Z=V(e),R=Z[0],k=Z[1],O=Z[2],P=(0,o.useRef)(!1),S=(0,o.useRef)(!1),X=(0,o.useRef)(R),I=(0,o.useRef)(n),N=(0,o.useRef)(t),M=function(){return N.current},B=function(){return M().isVisible()&&M().isOnline()},j=function(e){return r.set(O,h(r.get(O),e))},Y=r.get(R),z=d(u)?t.fallback[R]:u,W=d(Y)?z:Y,J=r.get(O)||{},q=J.error,G=!P.current,H=function(){return G&&!d(f)?f:!M().isPaused()&&(s?!d(W):d(W)||t.revalidateIfStale)},K=!(!R||!n)&&(!!J.isValidating||G&&H()),Q=function(e,n){var t=(0,o.useState)({})[1],r=(0,o.useRef)(e),i=(0,o.useRef)({data:!1,error:!1,isValidating:!1}),a=(0,o.useCallback)((function(e){var o=!1,a=r.current;for(var c in e){var u=c;a[u]!==e[u]&&(a[u]=e[u],i.current[u]&&(o=!0))}o&&!n.current&&t({})}),[]);return _((function(){r.current=e})),[r,i.current,a]}({data:W,error:q,isValidating:K},S),ee=Q[0],ne=Q[1],te=Q[2],re=(0,o.useCallback)((function(e){return a(void 0,void 0,void 0,(function(){var n,o,a,u,s,f,h,p,m,g,w,b,y;return c(this,(function(c){switch(c.label){case 0:if(n=I.current,!R||!n||S.current||M().isPaused())return[2,!1];u=!0,s=e||{},f=!x[R]||!s.dedupe,h=function(){return!S.current&&R===X.current&&P.current},p=function(){var e=x[R];e&&e[1]===a&&delete x[R]},m={isValidating:!1},g=function(){j({isValidating:!1}),h()&&te(m)},j({isValidating:!0}),te({isValidating:!0}),c.label=1;case 1:return c.trys.push([1,3,,4]),f&&(D(r,R,ee.current.data,ee.current.error,!0),t.loadingTimeout&&!r.get(R)&&setTimeout((function(){u&&h()&&M().onLoadingSlow(R,t)}),t.loadingTimeout),x[R]=[n.apply(void 0,k),A()]),y=x[R],o=y[0],a=y[1],[4,o];case 2:return o=c.sent(),f&&setTimeout(p,t.dedupingInterval),x[R]&&x[R][1]===a?(j({error:l}),m.error=l,w=E[R],!d(w)&&(a<=w[0]||a<=w[1]||0===w[1])?(g(),f&&h()&&M().onDiscarded(R),[2,!1]):(i(ee.current.data,o)?m.data=ee.current.data:m.data=o,i(r.get(R),o)||r.set(R,o),f&&h()&&M().onSuccess(o,R,t),[3,4])):(f&&h()&&M().onDiscarded(R),[2,!1]);case 3:return b=c.sent(),p(),M().isPaused()||(j({error:b}),m.error=b,f&&h()&&(M().onError(b,R,t),("boolean"===typeof t.shouldRetryOnError&&t.shouldRetryOnError||v(t.shouldRetryOnError)&&t.shouldRetryOnError(b))&&B()&&M().onErrorRetry(b,R,t,re,{retryCount:(s.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return u=!1,g(),h()&&f&&D(r,R,m.data,m.error,!1),[2,!0]}}))}))}),[R]),ie=(0,o.useCallback)(F.bind(l,r,(function(){return X.current})),[]);if(_((function(){I.current=n,N.current=t})),_((function(){if(R){var e=R!==X.current,n=re.bind(l,U),t=0,r=$(R,y,(function(e,n,t){te(h({error:n,isValidating:t},i(ee.current.data,e)?l:{data:e}))})),o=$(R,b,(function(e){if(0==e){var r=Date.now();M().revalidateOnFocus&&r>t&&B()&&(t=r+M().focusThrottleInterval,n())}else if(1==e)M().revalidateOnReconnect&&B()&&n();else if(2==e)return re()}));return S.current=!1,X.current=R,P.current=!0,e&&te({data:W,error:q,isValidating:K}),H()&&(d(W)||T?n():C(n)),function(){S.current=!0,r(),o()}}}),[R,re]),_((function(){var e;function n(){var n=v(p)?p(W):p;n&&-1!==e&&(e=setTimeout(t,n))}function t(){ee.current.error||!m&&!M().isVisible()||!g&&!M().isOnline()?n():re(U).then(n)}return n(),function(){e&&(clearTimeout(e),e=-1)}}),[p,m,g,re]),(0,o.useDebugValue)(W),s&&d(W)&&R)throw I.current=n,N.current=t,S.current=!1,d(q)?re(U):q;return{mutate:ie,get data(){return ne.data=!0,W},get error(){return ne.error=!0,q},get isValidating(){return ne.isValidating=!0,K}}},function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=H(),r=G(e),i=r[0],o=r[1],a=r[2],c=J(t,a),s=u,l=c.use;if(l)for(var f=l.length;f-- >0;)s=l[f](s);return s(i,o||c.fetcher,c)}),Q=t(4051),ee=t.n(Q),ne=t(5125);var te=function(e,n,t){return new Promise((function(r,i){return e().then(r).catch((function(o){return t>0?(a=n,new Promise((function(e){return setTimeout(e,a)}))).then(te.bind(null,e,n,t-1)).then(r).catch((function(e){var n,t,r="Operation failed";n=e,(null!=(t=Error)&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](n):n instanceof t)&&(r=e.message),i(r)})):i(o);var a}))}))};function re(e,n,t,r,i,o,a){try{var c=e[o](a),u=c.value}catch(s){return void t(s)}c.done?n(u):Promise.resolve(u).then(r,i)}var ie=function(){var e,n=(e=ee().mark((function e(n){var t,r;return ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.prev=1,e.next=5,null===(t=window.pywebview)||void 0===t||null===(r=t.api)||void 0===r?void 0:r.log(n);case 5:return e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(1),console.error("Logging error ".concat(e.t0)),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})),function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){re(o,r,i,a,c,"next",e)}function c(e){re(o,r,i,a,c,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}(),oe=ie;function ae(e,n,t,r,i,o,a){try{var c=e[o](a),u=c.value}catch(s){return void t(s)}c.done?n(u):Promise.resolve(u).then(r,i)}function ce(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var o=e.apply(n,t);function a(e){ae(o,r,i,a,c,"next",e)}function c(e){ae(o,r,i,a,c,"throw",e)}a(void 0)}))}}function ue(e,n){return null!=n&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](e):e instanceof n}var se=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return te(ce(ee().mark((function t(){var r,i;return ee().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,oe("PyCall ".concat(e));case 3:return t.next=5,window.pywebview.api[e](n);case 5:return r=t.sent,t.abrupt("return",r);case 9:throw t.prev=9,t.t0=t.catch(0),i="PyCall ".concat(e," failed: ").concat(t.t0),ue(t.t0,Error)&&(i=t.t0.message),new Error(i);case 14:case"end":return t.stop()}}),t,null,[[0,9]])}))),ne.Z.RETRY_DELAY,ne.Z.MAX_RETRIES).then(function(){var e=ce(ee().mark((function e(n){var t;return ee().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=JSON.parse(n),e.next=4,oe("PyCall returned object ".concat(t.message));case 4:return e.abrupt("return",t.message);case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,oe("PyCall returned ".concat(n));case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()).catch(function(){var n=ce(ee().mark((function n(t){var r;return ee().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:throw r="PyCall ".concat(e," failed: ").concat(t),ue(t,Error)&&(r=t.message),new Error(r);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())},le=function(){return se("getIpAddress").catch((function(){return"XXXXXXX"}))},fe=function(){var e=K("/ip-address",le),n=e.data,t=e.error;return{device:{ip:n},isLoading:!t&&!n,isError:t}},de=t(5542),ve=function(){var e=fe().device;return(0,r.BX)(de.Z,{meta:(0,r.tZ)(i.Z,{title:"Smartcloud | ".concat(ne.Z.title,": ").concat(ne.Z.tagline),description:ne.Z.description}),children:[(0,r.tZ)(i.Z,{title:"".concat(ne.Z.title,": ").concat(ne.Z.tagline),description:ne.Z.description}),(0,r.BX)("div",{className:"flex flex-col content-center justify-center text-center",children:[(0,r.BX)("p",{children:["device: ",e.ip]}),(0,r.tZ)("button",{onClick:le,children:"Reload"})]})]})}},5125:function(e,n){"use strict";var t={totalImages:5,site_name:"iot-cloud",email:"me@lacymorrow.com",title:"SmartCloud",tagline:"Firmware for iot scheduler",description:"Firmware for iot scheduler",locale:"en",errorMessage:"",MAX_RETRIES:10,RETRY_DELAY:500};t.errorMessage='There was an error, please email <a href="mailto:'.concat(t.email,'">').concat(t.email,"</a>"),n.Z=t}},function(e){e.O(0,[370,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);