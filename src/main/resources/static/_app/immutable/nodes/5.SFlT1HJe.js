import{s as Z,n as O,o as $,d as ee,r as te}from"../chunks/scheduler.5jWEhooB.js";import{S as le,i as se,b as g,s as N,e as w,c as v,g as q,h as T,a as m,d as _,u as ne,t as V,f as E,n as j,j as P,l as A,k as y,v as G,m as U,q as Y,o as B}from"../chunks/index.4BCV0MbB.js";import{e as D}from"../chunks/each.D6YF6ztN.js";import{a as x}from"../chunks/axios.CCb-kr4I.js";import"../chunks/store.BByvphf_.js";function J(i,e,l){const t=i.slice();return t[9]=e[l],t}function K(i,e,l){const t=i.slice();return t[12]=e[l],t}function oe(i){let e,l,t,o="Select a Meal Plan",c,n,s,f,r,L,M,C,S,u=i[4]&&Q(i),b=D(i[0]),d=[];for(let a=0;a<b.length;a+=1)d[a]=R(K(i,b,a));function F(a,p){return a[2].length>0?ie:re}let H=F(i),k=H(i);return{c(){u&&u.c(),e=N(),l=g("div"),t=g("label"),t.textContent=o,c=N(),n=g("select"),s=g("option"),f=V("Choose a Meal Plan");for(let a=0;a<d.length;a+=1)d[a].c();L=N(),k.c(),M=w(),this.h()},l(a){u&&u.l(a),e=T(a),l=v(a,"DIV",{class:!0});var p=E(l);t=v(p,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),q(t)!=="svelte-1wi81qg"&&(t.textContent=o),c=T(p),n=v(p,"SELECT",{id:!0,class:!0});var h=E(n);s=v(h,"OPTION",{});var I=E(s);f=j(I,"Choose a Meal Plan"),I.forEach(_);for(let z=0;z<d.length;z+=1)d[z].l(h);h.forEach(_),p.forEach(_),L=T(a),k.l(a),M=w(),this.h()},h(){P(t,"for","mealPlanSelector"),P(t,"class","form-label"),s.__value="",A(s,s.__value),s.disabled=!0,s.selected=r=i[1]===null,P(n,"id","mealPlanSelector"),P(n,"class","form-select"),i[1]===void 0&&ee(()=>i[6].call(n)),P(l,"class","mb-4")},m(a,p){u&&u.m(a,p),m(a,e,p),m(a,l,p),y(l,t),y(l,c),y(l,n),y(n,s),y(s,f);for(let h=0;h<d.length;h+=1)d[h]&&d[h].m(n,null);G(n,i[1],!0),m(a,L,p),k.m(a,p),m(a,M,p),C||(S=[U(n,"change",i[6]),U(n,"change",i[7])],C=!0)},p(a,p){if(a[4]?u?u.p(a,p):(u=Q(a),u.c(),u.m(e.parentNode,e)):u&&(u.d(1),u=null),p&3&&r!==(r=a[1]===null)&&(s.selected=r),p&1){b=D(a[0]);let h;for(h=0;h<b.length;h+=1){const I=K(a,b,h);d[h]?d[h].p(I,p):(d[h]=R(I),d[h].c(),d[h].m(n,null))}for(;h<d.length;h+=1)d[h].d(1);d.length=b.length}p&3&&G(n,a[1]),H===(H=F(a))&&k?k.p(a,p):(k.d(1),k=H(a),k&&(k.c(),k.m(M.parentNode,M)))},d(a){a&&(_(e),_(l),_(L),_(M)),u&&u.d(a),Y(d,a),k.d(a),C=!1,te(S)}}}function ae(i){let e,l='<span class="visually-hidden">Loading...</span>';return{c(){e=g("div"),e.innerHTML=l,this.h()},l(t){e=v(t,"DIV",{class:!0,role:!0,"data-svelte-h":!0}),q(e)!=="svelte-37zvkm"&&(e.innerHTML=l),this.h()},h(){P(e,"class","spinner-border text-primary"),P(e,"role","status")},m(t,o){m(t,e,o)},p:O,d(t){t&&_(e)}}}function Q(i){let e,l;return{c(){e=g("div"),l=V(i[4]),this.h()},l(t){e=v(t,"DIV",{class:!0});var o=E(e);l=j(o,i[4]),o.forEach(_),this.h()},h(){P(e,"class","alert alert-danger")},m(t,o){m(t,e,o),y(e,l)},p(t,o){o&16&&B(l,t[4])},d(t){t&&_(e)}}}function R(i){let e,l=i[12].name+"",t,o;return{c(){e=g("option"),t=V(l),this.h()},l(c){e=v(c,"OPTION",{});var n=E(e);t=j(n,l),n.forEach(_),this.h()},h(){e.__value=o=i[12]._id,A(e,e.__value)},m(c,n){m(c,e,n),y(e,t)},p(c,n){n&1&&l!==(l=c[12].name+"")&&B(t,l),n&1&&o!==(o=c[12]._id)&&(e.__value=o,A(e,e.__value))},d(c){c&&_(e)}}}function re(i){let e,l="No ingredients found for the selected Meal Plan.";return{c(){e=g("p"),e.textContent=l},l(t){e=v(t,"P",{"data-svelte-h":!0}),q(e)!=="svelte-h99nsc"&&(e.textContent=l)},m(t,o){m(t,e,o)},p:O,d(t){t&&_(e)}}}function ie(i){let e,l="Shopping List",t,o,c=D(i[2]),n=[];for(let s=0;s<c.length;s+=1)n[s]=W(J(i,c,s));return{c(){e=g("h2"),e.textContent=l,t=N(),o=g("ul");for(let s=0;s<n.length;s+=1)n[s].c();this.h()},l(s){e=v(s,"H2",{"data-svelte-h":!0}),q(e)!=="svelte-1q4e96i"&&(e.textContent=l),t=T(s),o=v(s,"UL",{class:!0});var f=E(o);for(let r=0;r<n.length;r+=1)n[r].l(f);f.forEach(_),this.h()},h(){P(o,"class","list-group")},m(s,f){m(s,e,f),m(s,t,f),m(s,o,f);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(o,null)},p(s,f){if(f&4){c=D(s[2]);let r;for(r=0;r<c.length;r+=1){const L=J(s,c,r);n[r]?n[r].p(L,f):(n[r]=W(L),n[r].c(),n[r].m(o,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=c.length}},d(s){s&&(_(e),_(t),_(o)),Y(n,s)}}}function W(i){let e,l=i[9]+"",t;return{c(){e=g("li"),t=V(l),this.h()},l(o){e=v(o,"LI",{class:!0});var c=E(e);t=j(c,l),c.forEach(_),this.h()},h(){P(e,"class","list-group-item")},m(o,c){m(o,e,c),y(e,t)},p(o,c){c&4&&l!==(l=o[9]+"")&&B(t,l)},d(o){o&&_(e)}}}function ce(i){let e,l="Shopping List Generator",t,o;function c(f,r){return f[3]?ae:oe}let n=c(i),s=n(i);return{c(){e=g("h1"),e.textContent=l,t=N(),s.c(),o=w()},l(f){e=v(f,"H1",{"data-svelte-h":!0}),q(e)!=="svelte-uh4jrx"&&(e.textContent=l),t=T(f),s.l(f),o=w()},m(f,r){m(f,e,r),m(f,t,r),s.m(f,r),m(f,o,r)},p(f,[r]){n===(n=c(f))&&s?s.p(f,r):(s.d(1),s=n(f),s&&(s.c(),s.m(o.parentNode,o)))},i:O,o:O,d(f){f&&(_(e),_(t),_(o)),s.d(f)}}}const X="http://localhost:8080/api";function fe(i,e,l){let t=[],o=null,c=[],n=!1,s="";async function f(){l(3,n=!0),l(4,s="");try{const C=await x.get(`${X}/mealplan`);l(0,t=C.data),console.log("Fetched meal plans:",t)}catch(C){l(4,s="Could not fetch meal plans."),console.error(C)}finally{l(3,n=!1)}}async function r(C){var S,u;if(!C){l(4,s="Please select a valid Meal Plan.");return}l(3,n=!0),l(2,c=[]),l(4,s="");try{const b=await x.get(`${X}/shoppinglist/generate/${C}`);l(2,c=b.data||[])}catch(b){l(4,s=((u=(S=b.response)==null?void 0:S.data)==null?void 0:u.message)||"Could not fetch the shopping list."),console.error(b)}finally{l(3,n=!1)}}$(()=>{f()});function L(){o=ne(this),l(1,o),l(0,t)}return[t,o,c,n,s,r,L,()=>{o&&r(o)}]}class me extends le{constructor(e){super(),se(this,e,fe,ce,Z,{})}}export{me as component};
//# sourceMappingURL=5.SFlT1HJe.js.map
