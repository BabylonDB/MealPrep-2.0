var pe=Object.defineProperty;var ge=(t,n,e)=>n in t?pe(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var L=(t,n,e)=>ge(t,typeof n!="symbol"?n+"":n,e);import{o as Lt,t as me}from"./scheduler.5jWEhooB.js";import{w as yt}from"./index.CFOmchLC.js";new URL("sveltekit-internal://");function ye(t,n){return t==="/"||n==="ignore"?t:n==="never"?t.endsWith("/")?t.slice(0,-1):t:n==="always"&&!t.endsWith("/")?t+"/":t}function we(t){return t.split("%25").map(decodeURI).join("%25")}function _e(t){for(const n in t)t[n]=decodeURIComponent(t[n]);return t}function ft({href:t}){return t.split("#")[0]}const ve=["href","pathname","search","toString","toJSON"];function be(t,n,e){const a=new URL(t);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(r,o){if(o==="get"||o==="getAll"||o==="has")return s=>(e(s),r[o](s));n();const i=Reflect.get(r,o);return typeof i=="function"?i.bind(r):i}}),enumerable:!0,configurable:!0});for(const r of ve)Object.defineProperty(a,r,{get(){return n(),t[r]},enumerable:!0,configurable:!0});return a}const Ae="/__data.json",ke=".html__data.json";function Se(t){return t.endsWith(".html")?t.replace(/\.html$/,ke):t.replace(/\/$/,"")+Ae}function Ee(...t){let n=5381;for(const e of t)if(typeof e=="string"){let a=e.length;for(;a;)n=n*33^e.charCodeAt(--a)}else if(ArrayBuffer.isView(e)){const a=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let r=a.length;for(;r;)n=n*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Re(t){const n=atob(t),e=new Uint8Array(n.length);for(let a=0;a<n.length;a++)e[a]=n.charCodeAt(a);return e.buffer}const qt=window.fetch;window.fetch=(t,n)=>((t instanceof Request?t.method:(n==null?void 0:n.method)||"GET")!=="GET"&&q.delete(wt(t)),qt(t,n));const q=new Map;function Ie(t,n){const e=wt(t,n),a=document.querySelector(e);if(a!=null&&a.textContent){let{body:r,...o}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&q.set(e,{body:r,init:o,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=Re(r)),Promise.resolve(new Response(r,o))}return window.fetch(t,n)}function Ue(t,n,e){if(q.size>0){const a=wt(t,e),r=q.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(e==null?void 0:e.cache))return new Response(r.body,r.init);q.delete(a)}}return window.fetch(n,e)}function wt(t,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(n!=null&&n.headers||n!=null&&n.body){const r=[];n.headers&&r.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&r.push(n.body),a+=`[data-hash="${Ee(...r)}"]`}return a}const Te=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Le(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Pe(t).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return n.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return ut(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ut(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=Te.exec(c),[,h,y,u,g]=d;return n.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?f===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return ut(c)}).join("")}).join("")}/?$`),params:n}}function xe(t){return!/^\([^)]+\)$/.test(t)}function Pe(t){return t.slice(1).split("/").filter(xe)}function Ce(t,n,e){const a={},r=t.slice(1),o=r.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let f=r[s-i];if(c.chained&&c.rest&&i&&(f=r.slice(s-i,s+1).filter(d=>d).join("/"),i=0),f===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||e[c.matcher](f)){a[c.name]=f;const d=n[s+1],h=r[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(a).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function ut(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Oe({nodes:t,server_loads:n,dictionary:e,matchers:a}){const r=new Set(n);return Object.entries(e).map(([s,[c,f,d]])=>{const{pattern:h,params:y}=Le(s),u={id:s,exec:g=>{const l=h.exec(g);if(l)return Ce(l,y,a)},errors:[1,...d||[]].map(g=>t[g]),layouts:[0,...f||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[r.has(s),t[s]]}}function Gt(t,n=JSON.parse){try{return n(sessionStorage[t])}catch{}}function xt(t,n,e=JSON.stringify){const a=e(n);try{sessionStorage[t]=a}catch{}}var Vt;const T=((Vt=globalThis.__sveltekit_1pqd4gp)==null?void 0:Vt.base)??"";var Bt;const Ne=((Bt=globalThis.__sveltekit_1pqd4gp)==null?void 0:Bt.assets)??T,$e="1734535871716",Mt="sveltekit:snapshot",Ht="sveltekit:scroll",Kt="sveltekit:states",je="sveltekit:pageurl",D="sveltekit:history",M="sveltekit:navigation",z={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},Y=location.origin;function Wt(t){if(t instanceof URL)return t;let n=document.baseURI;if(!n){const e=document.getElementsByTagName("base");n=e.length?e[0].href:document.URL}return new URL(t,n)}function _t(){return{x:pageXOffset,y:pageYOffset}}function $(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const Pt={...z,"":z.hover};function Yt(t){let n=t.assignedSlot??t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Jt(t,n){for(;t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Yt(t)}}function pt(t,n){let e;try{e=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,r=!e||!!a||rt(e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(e==null?void 0:e.origin)===Y&&t.hasAttribute("download");return{url:e,external:r,target:a,download:o}}function X(t){let n=null,e=null,a=null,r=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)a===null&&(a=$(s,"preload-code")),r===null&&(r=$(s,"preload-data")),n===null&&(n=$(s,"keepfocus")),e===null&&(e=$(s,"noscroll")),o===null&&(o=$(s,"reload")),i===null&&(i=$(s,"replacestate")),s=Yt(s);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Pt[a??"off"],preload_data:Pt[r??"off"],keepfocus:c(n),noscroll:c(e),reload:c(o),replace_state:c(i)}}function Ct(t){const n=yt(t);let e=!0;function a(){e=!0,n.update(i=>i)}function r(i){e=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||e&&c!==s)&&i(s=c)})}return{notify:a,set:r,subscribe:o}}const zt={v:()=>{}};function De(){const{set:t,subscribe:n}=yt(!1);let e;async function a(){clearTimeout(e);try{const r=await fetch(`${Ne}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==$e;return i&&(t(!0),zt.v(),clearTimeout(e)),i}catch{return!1}}return{subscribe:n,check:a}}function rt(t,n){return t.origin!==Y||!t.pathname.startsWith(n)}function Ot(t){const n=Ve(t),e=new ArrayBuffer(n.length),a=new DataView(e);for(let r=0;r<e.byteLength;r++)a.setUint8(r,n.charCodeAt(r));return e}const Fe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Ve(t){t.length%4===0&&(t=t.replace(/==?$/,""));let n="",e=0,a=0;for(let r=0;r<t.length;r++)e<<=6,e|=Fe.indexOf(t[r]),a+=6,a===24&&(n+=String.fromCharCode((e&16711680)>>16),n+=String.fromCharCode((e&65280)>>8),n+=String.fromCharCode(e&255),e=a=0);return a===12?(e>>=4,n+=String.fromCharCode(e)):a===18&&(e>>=2,n+=String.fromCharCode((e&65280)>>8),n+=String.fromCharCode(e&255)),n}const Be=-1,qe=-2,Ge=-3,Me=-4,He=-5,Ke=-6;function We(t,n){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,a=Array(e.length);function r(o,i=!1){if(o===Be)return;if(o===Ge)return NaN;if(o===Me)return 1/0;if(o===He)return-1/0;if(o===Ke)return-0;if(i)throw new Error("Invalid input");if(o in a)return a[o];const s=e[o];if(!s||typeof s!="object")a[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],f=n==null?void 0:n[c];if(f)return a[o]=f(r(s[1]));switch(c){case"Date":a[o]=new Date(s[1]);break;case"Set":const d=new Set;a[o]=d;for(let u=1;u<s.length;u+=1)d.add(r(s[u]));break;case"Map":const h=new Map;a[o]=h;for(let u=1;u<s.length;u+=2)h.set(r(s[u]),r(s[u+1]));break;case"RegExp":a[o]=new RegExp(s[1],s[2]);break;case"Object":a[o]=Object(s[1]);break;case"BigInt":a[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);a[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=r(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],l=Ot(g),p=new u(l);a[o]=p;break}case"ArrayBuffer":{const u=s[1],g=Ot(u);a[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);a[o]=c;for(let f=0;f<s.length;f+=1){const d=s[f];d!==qe&&(c[f]=r(d))}}else{const c={};a[o]=c;for(const f in s){const d=s[f];c[f]=r(d)}}return a[o]}return r(0)}const Xt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Xt];const Ye=new Set([...Xt]);[...Ye];function Je(t){return t.filter(n=>n!=null)}class ot{constructor(n,e){this.status=n,typeof e=="string"?this.body={message:e}:e?this.body=e:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class Zt{constructor(n,e){this.status=n,this.location=e}}class vt extends Error{constructor(n,e,a){super(a),this.status=n,this.text=e}}const ze="x-sveltekit-invalidated",Xe="x-sveltekit-trailing-slash";function Z(t){return t instanceof ot||t instanceof vt?t.status:500}function Ze(t){return t instanceof vt?t.text:"Internal Error"}let b,H,dt;const Qe=Lt.toString().includes("$$")||/function \w+\(\) \{\}/.test(Lt.toString());Qe?(b={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},H={current:null},dt={current:!1}):(b=new class{constructor(){L(this,"data",$state.raw({}));L(this,"form",$state.raw(null));L(this,"error",$state.raw(null));L(this,"params",$state.raw({}));L(this,"route",$state.raw({id:null}));L(this,"state",$state.raw({}));L(this,"status",$state.raw(-1));L(this,"url",$state.raw(new URL("https://example.com")))}},H=new class{constructor(){L(this,"current",$state.raw(null))}},dt=new class{constructor(){L(this,"current",$state.raw(!1))}},zt.v=()=>dt.current=!0);function tn(t){Object.assign(b,t)}const en=new Set(["icon","shortcut icon","apple-touch-icon"]),O=Gt(Ht)??{},K=Gt(Mt)??{},P={url:Ct({}),page:Ct({}),navigating:yt(null),updated:De()};function bt(t){O[t]=_t()}function nn(t,n){let e=t+1;for(;O[e];)delete O[e],e+=1;for(e=n+1;K[e];)delete K[e],e+=1}function V(t){return location.href=t.href,new Promise(()=>{})}async function Qt(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(T||"/");t&&await t.update()}}function Nt(){}let st,gt,Q,x,mt,N;const te=[],tt=[];let I=null;const ee=[],an=[];let j=[],w={branch:[],error:null,url:null},At=!1,et=!1,$t=!0,W=!1,B=!1,ne=!1,kt=!1,St,R,U,nt;const G=new Set;async function vn(t,n,e){var r,o,i,s;document.URL!==location.href&&(location.href=location.href),N=t,await((o=(r=t.hooks).init)==null?void 0:o.call(r)),st=Oe(t),x=document.documentElement,mt=n,gt=t.nodes[0],Q=t.nodes[1],gt(),Q(),R=(i=history.state)==null?void 0:i[D],U=(s=history.state)==null?void 0:s[M],R||(R=U=Date.now(),history.replaceState({...history.state,[D]:R,[M]:U},""));const a=O[R];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),e?await dn(mt,e):fn(location.href,{replaceState:!0}),un()}function rn(){te.length=0,kt=!1}function ae(t){tt.some(n=>n==null?void 0:n.snapshot)&&(K[t]=tt.map(n=>{var e;return(e=n==null?void 0:n.snapshot)==null?void 0:e.capture()}))}function re(t){var n;(n=K[t])==null||n.forEach((e,a)=>{var r,o;(o=(r=tt[a])==null?void 0:r.snapshot)==null||o.restore(e)})}function jt(){bt(R),xt(Ht,O),ae(U),xt(Mt,K)}async function oe(t,n,e,a){return J({type:"goto",url:Wt(t),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:e,nav_token:a,accept:()=>{n.invalidateAll&&(kt=!0)}})}async function on(t){if(t.id!==(I==null?void 0:I.id)){const n={};G.add(n),I={id:t.id,token:n,promise:ie({...t,preload:n}).then(e=>(G.delete(n),e.type==="loaded"&&e.state.error&&(I=null),e))}}return I.promise}async function ht(t){const n=st.find(e=>e.exec(ce(t)));n&&await Promise.all([...n.layouts,n.leaf].map(e=>e==null?void 0:e[1]()))}function se(t,n,e){var o;w=t.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),Object.assign(b,t.props.page),St=new N.root({target:n,props:{...t.props,stores:P,components:tt},hydrate:e,sync:!1}),re(U);const r={from:null,to:{params:w.params,route:{id:((o=w.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};j.forEach(i=>i(r)),et=!0}function at({url:t,params:n,branch:e,status:a,error:r,route:o,form:i}){let s="never";if(T&&(t.pathname===T||t.pathname===T+"/"))s="always";else for(const u of e)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);t.pathname=ye(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:n,branch:e,error:r,route:o},props:{constructors:Je(e).map(u=>u.node.component),page:b}};i!==void 0&&(c.props.form=i);let f={},d=!b,h=0;for(let u=0;u<Math.max(e.length,w.branch.length);u+=1){const g=e[u],l=w.branch[u];(g==null?void 0:g.data)!==(l==null?void 0:l.data)&&(d=!0),g&&(f={...f,...g.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!w.url||t.href!==w.url.href||w.error!==r||i!==void 0&&i!==b.form||d)&&(c.props.page={error:r,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:a,url:new URL(t),form:i??null,data:d?f:b.data}),c}async function Et({loader:t,parent:n,url:e,params:a,route:r,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await t();if((d=f.universal)!=null&&d.load){let u=function(...l){for(const p of l){const{href:A}=new URL(p,e);c.dependencies.add(A)}};const g={route:new Proxy(r,{get:(l,p)=>(s&&(c.route=!0),l[p])}),params:new Proxy(a,{get:(l,p)=>(s&&c.params.add(p),l[p])}),data:(o==null?void 0:o.data)??null,url:be(e,()=>{s&&(c.url=!0)},l=>{s&&c.search_params.add(l)}),async fetch(l,p){let A;l instanceof Request?(A=l.url,p={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:[...l.headers].length?l.headers:void 0,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...p}):A=l;const S=new URL(A,e);return s&&u(S.href),S.origin===e.origin&&(A=S.href.slice(e.origin.length)),et?Ue(A,S.href,p):Ie(A,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(l){s=!1;try{return l()}finally{s=!0}}};i=await f.universal.load.call(null,g)??null}return{node:f,loader:t,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function Dt(t,n,e,a,r,o){if(kt)return!0;if(!r)return!1;if(r.parent&&t||r.route&&n||r.url&&e)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(o[i]!==w.params[i])return!0;for(const i of r.dependencies)if(te.some(s=>s(new URL(i))))return!0;return!1}function Rt(t,n){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?n??null:null}function sn(t,n){if(!t)return new Set(n.searchParams.keys());const e=new Set([...t.searchParams.keys(),...n.searchParams.keys()]);for(const a of e){const r=t.searchParams.getAll(a),o=n.searchParams.getAll(a);r.every(i=>o.includes(i))&&o.every(i=>r.includes(i))&&e.delete(a)}return e}function Ft({error:t,url:n,route:e,params:a}){return{type:"loaded",state:{error:t,url:n,route:e,params:a,branch:[]},props:{page:b,constructors:[]}}}async function ie({id:t,invalidating:n,url:e,params:a,route:r,preload:o}){if((I==null?void 0:I.id)===t)return G.delete(I.token),I.promise;const{errors:i,layouts:s,leaf:c}=r,f=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),f.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=w.url?t!==w.url.pathname+w.url.search:!1,y=w.route?r.id!==w.route.id:!1,u=sn(w.url,e);let g=!1;const l=f.map((m,v)=>{var C;const k=w.branch[v],E=!!(m!=null&&m[0])&&((k==null?void 0:k.loader)!==m[1]||Dt(g,y,h,u,(C=k.server)==null?void 0:C.uses,a));return E&&(g=!0),E});if(l.some(Boolean)){try{d=await ue(e,l)}catch(m){const v=await F(m,{url:e,params:a,route:{id:t}});return G.has(o)?Ft({error:v,url:e,params:a,route:r}):it({status:Z(m),error:v,url:e,route:r})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let A=!1;const S=f.map(async(m,v)=>{var ct;if(!m)return;const k=w.branch[v],E=p==null?void 0:p[v];if((!E||E.type==="skip")&&m[1]===(k==null?void 0:k.loader)&&!Dt(A,y,h,u,(ct=k.universal)==null?void 0:ct.uses,a))return k;if(A=!0,(E==null?void 0:E.type)==="error")throw E;return Et({loader:m[1],url:e,params:a,route:r,parent:async()=>{var Tt;const Ut={};for(let lt=0;lt<v;lt+=1)Object.assign(Ut,(Tt=await S[lt])==null?void 0:Tt.data);return Ut},server_data_node:Rt(E===void 0&&m[0]?{type:"skip"}:E??null,m[0]?k==null?void 0:k.server:void 0)})});for(const m of S)m.catch(()=>{});const _=[];for(let m=0;m<f.length;m+=1)if(f[m])try{_.push(await S[m])}catch(v){if(v instanceof Zt)return{type:"redirect",location:v.location};if(G.has(o))return Ft({error:await F(v,{params:a,url:e,route:{id:r.id}}),url:e,params:a,route:r});let k=Z(v),E;if(p!=null&&p.includes(v))k=v.status??k,E=v.error;else if(v instanceof ot)E=v.body;else{if(await P.updated.check())return await Qt(),await V(e);E=await F(v,{params:a,url:e,route:{id:r.id}})}const C=await cn(m,_,i);return C?at({url:e,params:a,branch:_.slice(0,C.idx).concat(C.node),status:k,error:E,route:r}):await fe(e,{id:r.id},E,k)}else _.push(void 0);return at({url:e,params:a,branch:_,status:200,error:null,route:r,form:n?void 0:null})}async function cn(t,n,e){for(;t--;)if(e[t]){let a=t;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await e[t](),loader:e[t],data:{},server:null,universal:null}}}catch{continue}}}async function it({status:t,error:n,url:e,route:a}){const r={};let o=null;if(N.server_loads[0]===0)try{const f=await ue(e,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(e.origin!==Y||e.pathname!==location.pathname||At)&&await V(e)}const s=await Et({loader:gt,url:e,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:Rt(o)}),c={node:await Q(),loader:Q,universal:null,server:null,data:null};return at({url:e,params:r,branch:[s,c],status:t,error:n,route:null})}function It(t,n){if(!t||rt(t,T))return;let e;try{e=N.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const a=ce(e);for(const r of st){const o=r.exec(a);if(o)return{id:t.pathname+t.search,invalidating:n,route:r,params:_e(o),url:t}}}function ce(t){return we(t.slice(T.length)||"/")}function le({url:t,type:n,intent:e,delta:a}){let r=!1;const o=he(w,e,t,n);a!==void 0&&(o.navigation.delta=a);const i={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return W||ee.forEach(s=>s(i)),r?null:o}async function J({type:t,url:n,popped:e,keepfocus:a,noscroll:r,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:f=Nt,block:d=Nt}){const h=It(n,!1),y=le({url:n,type:t,delta:e==null?void 0:e.delta,intent:h});if(!y){d();return}const u=R,g=U;f(),W=!0,et&&P.navigating.set(H.current=y.navigation),nt=c;let l=h&&await ie(h);if(!l){if(rt(n,T))return await V(n);l=await fe(n,{id:null},await F(new vt(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,nt!==c)return y.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(s>=20)l=await it({status:500,error:await F(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return oe(new URL(l.location,n).href,{},s+1,c),!1;else l.props.page.status>=400&&await P.updated.check()&&(await Qt(),await V(n));if(rn(),bt(u),ae(g),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),i=e?e.state:i,!e){const _=o?0:1,m={[D]:R+=_,[M]:U+=_,[Kt]:i};(o?history.replaceState:history.pushState).call(history,m,"",n),o||nn(R,U)}if(I=null,l.props.page.state=i,et){w=l.state,l.props.page&&(l.props.page.url=n);const _=(await Promise.all(an.map(m=>m(y.navigation)))).filter(m=>typeof m=="function");if(_.length>0){let m=function(){j=j.filter(v=>!_.includes(v))};_.push(m),j.push(..._)}St.$set(l.props),tn(l.props.page),ne=!0}else se(l,mt,!1);const{activeElement:p}=document;await me();const A=e?e.scroll:r?_t():null;if($t){const _=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));A?scrollTo(A.x,A.y):_?_.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==p&&document.activeElement!==document.body;!a&&!S&&hn(),$t=!0,l.props.page&&Object.assign(b,l.props.page),W=!1,t==="popstate"&&re(U),y.fulfil(void 0),j.forEach(_=>_(y.navigation)),P.navigating.set(H.current=null)}async function fe(t,n,e,a){return t.origin===Y&&t.pathname===location.pathname&&!At?await it({status:a,error:e,url:t,route:n}):await V(t)}function ln(){let t;x.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{a(i,2)},20)});function n(o){o.defaultPrevented||a(o.composedPath()[0],1)}x.addEventListener("mousedown",n),x.addEventListener("touchstart",n,{passive:!0});const e=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(ht(i.target.href),e.unobserve(i.target))},{threshold:0});function a(o,i){const s=Jt(o,x);if(!s)return;const{url:c,external:f,download:d}=pt(s,T);if(f||d)return;const h=X(s),y=c&&w.url.pathname+w.url.search===c.pathname+c.search;if(!h.reload&&!y)if(i<=h.preload_data){const u=It(c,!1);u&&on(u)}else i<=h.preload_code&&ht(c.pathname)}function r(){e.disconnect();for(const o of x.querySelectorAll("a")){const{url:i,external:s,download:c}=pt(o,T);if(s||c)continue;const f=X(o);f.reload||(f.preload_code===z.viewport&&e.observe(o),f.preload_code===z.eager&&ht(i.pathname))}}j.push(r),r()}function F(t,n){if(t instanceof ot)return t.body;const e=Z(t),a=Ze(t);return N.hooks.handleError({error:t,event:n,status:e,message:a})??{message:a}}function fn(t,n={}){return t=Wt(t),t.origin!==Y?Promise.reject(new Error("goto: invalid URL")):oe(t,n,0)}function un(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let a=!1;if(jt(),!W){const r=he(w,void 0,null,"leave"),o={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};ee.forEach(i=>i(o))}a?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&jt()}),(n=navigator.connection)!=null&&n.saveData||ln(),x.addEventListener("click",async e=>{if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const a=Jt(e.composedPath()[0],x);if(!a)return;const{url:r,external:o,target:i,download:s}=pt(a,T);if(!r)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=X(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||s)return;const[d,h]=r.href.split("#"),y=d===ft(location);if(o||c.reload&&(!y||!h)){le({url:r,type:"link"})?W=!0:e.preventDefault();return}if(h!==void 0&&y){const[,u]=w.url.href.split("#");if(u===h){if(e.preventDefault(),h===""||h==="top"&&a.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=a.ownerDocument.getElementById(decodeURIComponent(h));g&&(g.scrollIntoView(),g.focus())}return}if(B=!0,bt(R),t(r),!c.replace_state)return;B=!1}e.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),J({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),x.addEventListener("submit",e=>{if(e.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(e.target),r=e.submitter;if(((r==null?void 0:r.formTarget)||a.target)==="_blank"||((r==null?void 0:r.formMethod)||a.method)!=="get")return;const s=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(rt(s,T))return;const c=e.target,f=X(c);if(f.reload)return;e.preventDefault(),e.stopPropagation();const d=new FormData(c),h=r==null?void 0:r.getAttribute("name");h&&d.append(h,(r==null?void 0:r.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),J({type:"form",url:s,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??s.href===location.href})}),addEventListener("popstate",async e=>{var a;if((a=e.state)!=null&&a[D]){const r=e.state[D];if(nt={},r===R)return;const o=O[r],i=e.state[Kt]??{},s=new URL(e.state[je]??location.href),c=e.state[M],f=ft(location)===ft(w.url);if(c===U&&(ne||f)){t(s),O[R]=_t(),o&&scrollTo(o.x,o.y),i!==b.state&&(b.state=i,St.$set({page:b})),R=r;return}const h=r-R;await J({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{R=r,U=c},block:()=>{history.go(-h)},nav_token:nt})}else if(!B){const r=new URL(location.href);t(r)}}),addEventListener("hashchange",()=>{B&&(B=!1,history.replaceState({...history.state,[D]:++R,[M]:U},"",location.href))});for(const e of document.querySelectorAll("link"))en.has(e.rel)&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&P.navigating.set(H.current=null)});function t(e){w.url=b.url=e,P.page.set({data:b.data,error:b.error,form:b.form,params:b.params,route:b.route,state:b.state,status:b.status,url:e}),P.page.notify()}}async function dn(t,{status:n=200,error:e,node_ids:a,params:r,route:o,data:i,form:s}){At=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=It(c,!1)||{});let f,d=!0;try{const h=a.map(async(g,l)=>{const p=i[l];return p!=null&&p.uses&&(p.uses=de(p.uses)),Et({loader:N.nodes[g],url:c,params:r,route:o,parent:async()=>{const A={};for(let S=0;S<l;S+=1)Object.assign(A,(await h[S]).data);return A},server_data_node:Rt(p)})}),y=await Promise.all(h),u=st.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let l=0;l<g.length;l++)g[l]||y.splice(l,0,void 0)}f=at({url:c,params:r,branch:y,status:n,error:e,form:s,route:u??null})}catch(h){if(h instanceof Zt){await V(new URL(h.location,location.href));return}f=await it({status:Z(h),error:await F(h,{url:c,params:r,route:o}),url:c,route:o}),t.textContent="",d=!1}f.props.page&&(f.props.page.state={}),se(f,t,d)}async function ue(t,n){var r;const e=new URL(t);e.pathname=Se(t.pathname),t.pathname.endsWith("/")&&e.searchParams.append(Xe,"1"),e.searchParams.append(ze,n.map(o=>o?"1":"0").join(""));const a=await qt(e.href);if(!a.ok){let o;throw(r=a.headers.get("content-type"))!=null&&r.includes("application/json")?o=await a.json():a.status===404?o="Not Found":a.status===500&&(o="Internal Error"),new ot(a.status,o)}return new Promise(async o=>{var h;const i=new Map,s=a.body.getReader(),c=new TextDecoder;function f(y){return We(y,{...N.decoders,Promise:u=>new Promise((g,l)=>{i.set(u,{fulfil:g,reject:l})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const l=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=de(p.uses),p.data=f(p.data))}),o(l);else if(l.type==="chunk"){const{id:p,data:A,error:S}=l,_=i.get(p);i.delete(p),S?_.reject(f(S)):_.fulfil(f(A))}}}})}function de(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function hn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=document.body,e=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),e!==null?n.setAttribute("tabindex",e):n.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const i=r[o],s=a.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}a.removeAllRanges()}})}}}function he(t,n,e,a){var c,f;let r,o;const i=new Promise((d,h)=>{r=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:e&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:e},willUnload:!n,type:a,complete:i},fulfil:r,reject:o}}export{vn as a,fn as g,P as s};
//# sourceMappingURL=entry.3BDOmKOD.js.map
