const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.DpV9PowO.js","../chunks/scheduler.5jWEhooB.js","../chunks/index.4BCV0MbB.js","../chunks/store.CNL4ACSx.js","../chunks/index.CFOmchLC.js","../chunks/auth.service.CmE6GI_P.js","../chunks/entry.hhcJX9zq.js","../chunks/axios.CCb-kr4I.js","../assets/0.CU5_Z6Ps.css","../nodes/1.B6Uxh5Rg.js","../nodes/2.7sic2G2m.js","../nodes/3.WSmc7GCN.js","../chunks/each.D6YF6ztN.js","../nodes/4.CP54gFXt.js","../nodes/5.DFMVH_MR.js","../nodes/6.BVEaVOBV.js","../nodes/7.BcyCrvMG.js"])))=>i.map(i=>d[i]);
import{s as B,j as N,o as q,t as U,b as I}from"../chunks/scheduler.5jWEhooB.js";import{S as z,i as F,s as W,e as h,h as G,a as v,x as g,y as O,w,d as b,b as H,c as J,f as K,j as T,z as d,t as Q,n as X,o as Y,A as D,B as P,C as R,D as V,E as L,F as A}from"../chunks/index.4BCV0MbB.js";const Z="modulepreload",M=function(o,e){return new URL(o,e).href},S={},p=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const t=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.allSettled(n.map(c=>{if(c=M(c,r),c in S)return;S[c]=!0;const a=c.endsWith(".css"),u=a?'[rel="stylesheet"]':"";if(!!r)for(let k=t.length-1;k>=0;k--){const y=t[k];if(y.href===c&&(!a||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const m=document.createElement("link");if(m.rel=a?"stylesheet":Z,a||(m.as="script"),m.crossOrigin="",m.href=c,l&&m.setAttribute("nonce",l),document.head.appendChild(m),a)return new Promise((k,y)=>{m.addEventListener("load",k),m.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${c}`)))})}))}function _(t){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=t,window.dispatchEvent(i),!i.defaultPrevented)throw t}return s.then(t=>{for(const i of t||[])i.status==="rejected"&&_(i.reason);return e().catch(_)})},ae={};function $(o){let e,n,r;var s=o[1][0];function _(t,i){return{props:{data:t[3],form:t[2]}}}return s&&(e=P(s,_(o)),o[12](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&V(e.$$.fragment,t),n=h()},m(t,i){e&&L(e,t,i),v(t,n,i),r=!0},p(t,i){if(i&2&&s!==(s=t[1][0])){if(e){D();const l=e;g(l.$$.fragment,1,0,()=>{A(l,1)}),O()}s?(e=P(s,_(t)),t[12](e),R(e.$$.fragment),w(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(s){const l={};i&8&&(l.data=t[3]),i&4&&(l.form=t[2]),e.$set(l)}},i(t){r||(e&&w(e.$$.fragment,t),r=!0)},o(t){e&&g(e.$$.fragment,t),r=!1},d(t){t&&b(n),o[12](null),e&&A(e,t)}}}function x(o){let e,n,r;var s=o[1][0];function _(t,i){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=P(s,_(o)),o[11](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&V(e.$$.fragment,t),n=h()},m(t,i){e&&L(e,t,i),v(t,n,i),r=!0},p(t,i){if(i&2&&s!==(s=t[1][0])){if(e){D();const l=e;g(l.$$.fragment,1,0,()=>{A(l,1)}),O()}s?(e=P(s,_(t)),t[11](e),R(e.$$.fragment),w(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(s){const l={};i&8&&(l.data=t[3]),i&8215&&(l.$$scope={dirty:i,ctx:t}),e.$set(l)}},i(t){r||(e&&w(e.$$.fragment,t),r=!0)},o(t){e&&g(e.$$.fragment,t),r=!1},d(t){t&&b(n),o[11](null),e&&A(e,t)}}}function ee(o){let e,n,r;var s=o[1][1];function _(t,i){return{props:{data:t[4],form:t[2]}}}return s&&(e=P(s,_(o)),o[10](e)),{c(){e&&R(e.$$.fragment),n=h()},l(t){e&&V(e.$$.fragment,t),n=h()},m(t,i){e&&L(e,t,i),v(t,n,i),r=!0},p(t,i){if(i&2&&s!==(s=t[1][1])){if(e){D();const l=e;g(l.$$.fragment,1,0,()=>{A(l,1)}),O()}s?(e=P(s,_(t)),t[10](e),R(e.$$.fragment),w(e.$$.fragment,1),L(e,n.parentNode,n)):e=null}else if(s){const l={};i&16&&(l.data=t[4]),i&4&&(l.form=t[2]),e.$set(l)}},i(t){r||(e&&w(e.$$.fragment,t),r=!0)},o(t){e&&g(e.$$.fragment,t),r=!1},d(t){t&&b(n),o[10](null),e&&A(e,t)}}}function j(o){let e,n=o[6]&&C(o);return{c(){e=H("div"),n&&n.c(),this.h()},l(r){e=J(r,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=K(e);n&&n.l(s),s.forEach(b),this.h()},h(){T(e,"id","svelte-announcer"),T(e,"aria-live","assertive"),T(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(r,s){v(r,e,s),n&&n.m(e,null)},p(r,s){r[6]?n?n.p(r,s):(n=C(r),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(r){r&&b(e),n&&n.d()}}}function C(o){let e;return{c(){e=Q(o[7])},l(n){e=X(n,o[7])},m(n,r){v(n,e,r)},p(n,r){r&128&&Y(e,n[7])},d(n){n&&b(e)}}}function te(o){let e,n,r,s,_;const t=[x,$],i=[];function l(a,u){return a[1][1]?0:1}e=l(o),n=i[e]=t[e](o);let c=o[5]&&j(o);return{c(){n.c(),r=W(),c&&c.c(),s=h()},l(a){n.l(a),r=G(a),c&&c.l(a),s=h()},m(a,u){i[e].m(a,u),v(a,r,u),c&&c.m(a,u),v(a,s,u),_=!0},p(a,[u]){let E=e;e=l(a),e===E?i[e].p(a,u):(D(),g(i[E],1,1,()=>{i[E]=null}),O(),n=i[e],n?n.p(a,u):(n=i[e]=t[e](a),n.c()),w(n,1),n.m(r.parentNode,r)),a[5]?c?c.p(a,u):(c=j(a),c.c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null)},i(a){_||(w(n),_=!0)},o(a){g(n),_=!1},d(a){a&&(b(r),b(s)),i[e].d(a),c&&c.d(a)}}}function ne(o,e,n){let{stores:r}=e,{page:s}=e,{constructors:_}=e,{components:t=[]}=e,{form:i}=e,{data_0:l=null}=e,{data_1:c=null}=e;N(r.page.notify);let a=!1,u=!1,E=null;q(()=>{const f=r.page.subscribe(()=>{a&&(n(6,u=!0),U().then(()=>{n(7,E=document.title||"untitled page")}))});return n(5,a=!0),f});function m(f){I[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function k(f){I[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function y(f){I[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return o.$$set=f=>{"stores"in f&&n(8,r=f.stores),"page"in f&&n(9,s=f.page),"constructors"in f&&n(1,_=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,i=f.form),"data_0"in f&&n(3,l=f.data_0),"data_1"in f&&n(4,c=f.data_1)},o.$$.update=()=>{o.$$.dirty&768&&r.page.set(s)},[t,_,i,l,c,a,u,E,r,s,m,k,y]}class le extends z{constructor(e){super(),F(this,e,ne,te,B,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ce=[()=>p(()=>import("../nodes/0.DpV9PowO.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),()=>p(()=>import("../nodes/1.B6Uxh5Rg.js"),__vite__mapDeps([9,1,2,6,4]),import.meta.url),()=>p(()=>import("../nodes/2.7sic2G2m.js"),__vite__mapDeps([10,1,2,3,4,5,6,7]),import.meta.url),()=>p(()=>import("../nodes/3.WSmc7GCN.js"),__vite__mapDeps([11,1,2,12,7,3,4]),import.meta.url),()=>p(()=>import("../nodes/4.CP54gFXt.js"),__vite__mapDeps([13,1,2,12,7]),import.meta.url),()=>p(()=>import("../nodes/5.DFMVH_MR.js"),__vite__mapDeps([14,1,2,12,7]),import.meta.url),()=>p(()=>import("../nodes/6.BVEaVOBV.js"),__vite__mapDeps([15,1,2,3,4,5,6,7]),import.meta.url),()=>p(()=>import("../nodes/7.BcyCrvMG.js"),__vite__mapDeps([16,1,2,12,7]),import.meta.url)],fe=[],_e={"/":[2],"/mealplan":[3],"/recipe":[4],"/shoppinglist":[5],"/signup":[6],"/user":[7]},ie={handleError:({error:o})=>{console.error(o)},reroute:()=>{},transport:{}},re=Object.fromEntries(Object.entries(ie.transport).map(([o,e])=>[o,e.decode])),ue=(o,e)=>re[o](e);export{ue as decode,re as decoders,_e as dictionary,ie as hooks,ae as matchers,ce as nodes,le as root,fe as server_loads};
//# sourceMappingURL=app.CQFpGbD3.js.map
