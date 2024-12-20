import{s as W,n as w,c as Y,o as G}from"../chunks/scheduler.CJdZjHFg.js";import{S as K,i as Q,e as b,s as M,k as A,c as g,l as j,f as D,m as N,g as k,d as _,t as P,a as T,b as H,h as d,j as L,q as J,o as X}from"../chunks/index.mBUFKwsa.js";import{e as B}from"../chunks/each.D6YF6ztN.js";import{a as q}from"../chunks/axios.CCb-kr4I.js";import{j as Z}from"../chunks/store.Bl-ufj5Y.js";import{p as x}from"../chunks/stores.BjvLRQeR.js";function O(h,t,r){const o=h.slice();return o[11]=t[r],o}function S(h,t,r){const o=h.slice();return o[14]=t[r],o}function $(h){let t,r,o='<tr><th scope="col">Meal Plan Name</th> <th scope="col">Description</th> <th scope="col">Actions</th></tr>',i,u,p=B(h[0]),s=[];for(let l=0;l<p.length;l+=1)s[l]=U(S(h,p,l));return{c(){t=b("table"),r=b("thead"),r.innerHTML=o,i=M(),u=b("tbody");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){t=g(l,"TABLE",{class:!0});var n=T(t);r=g(n,"THEAD",{"data-svelte-h":!0}),j(r)!=="svelte-1in0onf"&&(r.innerHTML=o),i=D(n),u=g(n,"TBODY",{});var e=T(u);for(let a=0;a<s.length;a+=1)s[a].l(e);e.forEach(_),n.forEach(_),this.h()},h(){N(t,"class","table")},m(l,n){k(l,t,n),d(t,r),d(t,i),d(t,u);for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(u,null)},p(l,n){if(n&33){p=B(l[0]);let e;for(e=0;e<p.length;e+=1){const a=S(l,p,e);s[e]?s[e].p(a,n):(s[e]=U(a),s[e].c(),s[e].m(u,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=p.length}},d(l){l&&_(t),J(s,l)}}}function ee(h){let t,r;return{c(){t=b("div"),r=P(h[4]),this.h()},l(o){t=g(o,"DIV",{class:!0});var i=T(t);r=H(i,h[4]),i.forEach(_),this.h()},h(){N(t,"class","alert alert-danger")},m(o,i){k(o,t,i),d(t,r)},p(o,i){i&16&&L(r,o[4])},d(o){o&&_(t)}}}function te(h){let t,r='<span class="visually-hidden">Loading...</span>';return{c(){t=b("div"),t.innerHTML=r,this.h()},l(o){t=g(o,"DIV",{class:!0,role:!0,"data-svelte-h":!0}),j(t)!=="svelte-gq0gie"&&(t.innerHTML=r),this.h()},h(){N(t,"class","spinner-border text-primary"),N(t,"role","status")},m(o,i){k(o,t,i)},p:w,d(o){o&&_(t)}}}function U(h){let t,r,o=h[14].name+"",i,u,p,s=h[14].description+"",l,n,e,a,E="View Recipes",y,f,c;function m(){return h[6](h[14])}return{c(){t=b("tr"),r=b("td"),i=P(o),u=M(),p=b("td"),l=P(s),n=M(),e=b("td"),a=b("button"),a.textContent=E,y=M(),this.h()},l(C){t=g(C,"TR",{});var v=T(t);r=g(v,"TD",{});var R=T(r);i=H(R,o),R.forEach(_),u=D(v),p=g(v,"TD",{});var z=T(p);l=H(z,s),z.forEach(_),n=D(v),e=g(v,"TD",{});var F=T(e);a=g(F,"BUTTON",{class:!0,"data-svelte-h":!0}),j(a)!=="svelte-gbrnyv"&&(a.textContent=E),F.forEach(_),y=D(v),v.forEach(_),this.h()},h(){N(a,"class","btn btn-primary btn-sm")},m(C,v){k(C,t,v),d(t,r),d(r,i),d(t,u),d(t,p),d(p,l),d(t,n),d(t,e),d(e,a),d(t,y),f||(c=X(a,"click",m),f=!0)},p(C,v){h=C,v&1&&o!==(o=h[14].name+"")&&L(i,o),v&1&&s!==(s=h[14].description+"")&&L(l,s)},d(C){C&&_(t),f=!1,c()}}}function V(h){let t,r,o=h[1].name+"",i,u,p,s,l=h[1].description+"",n,e,a;function E(c,m){return c[2].length>0?re:le}let y=E(h),f=y(h);return{c(){t=b("h2"),r=P('Recipes for "'),i=P(o),u=P('"'),p=M(),s=b("p"),n=P(l),e=M(),f.c(),a=A(),this.h()},l(c){t=g(c,"H2",{class:!0});var m=T(t);r=H(m,'Recipes for "'),i=H(m,o),u=H(m,'"'),m.forEach(_),p=D(c),s=g(c,"P",{});var C=T(s);n=H(C,l),C.forEach(_),e=D(c),f.l(c),a=A(),this.h()},h(){N(t,"class","mt-4")},m(c,m){k(c,t,m),d(t,r),d(t,i),d(t,u),k(c,p,m),k(c,s,m),d(s,n),k(c,e,m),f.m(c,m),k(c,a,m)},p(c,m){m&2&&o!==(o=c[1].name+"")&&L(i,o),m&2&&l!==(l=c[1].description+"")&&L(n,l),y===(y=E(c))&&f?f.p(c,m):(f.d(1),f=y(c),f&&(f.c(),f.m(a.parentNode,a)))},d(c){c&&(_(t),_(p),_(s),_(e),_(a)),f.d(c)}}}function le(h){let t,r="No recipes found for this meal plan.";return{c(){t=b("p"),t.textContent=r},l(o){t=g(o,"P",{"data-svelte-h":!0}),j(t)!=="svelte-j16rap"&&(t.textContent=r)},m(o,i){k(o,t,i)},p:w,d(o){o&&_(t)}}}function re(h){let t,r,o='<tr><th scope="col">Recipe Name</th> <th scope="col">Ingredients</th> <th scope="col">Calories</th></tr>',i,u,p=B(h[2]),s=[];for(let l=0;l<p.length;l+=1)s[l]=I(O(h,p,l));return{c(){t=b("table"),r=b("thead"),r.innerHTML=o,i=M(),u=b("tbody");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){t=g(l,"TABLE",{class:!0});var n=T(t);r=g(n,"THEAD",{"data-svelte-h":!0}),j(r)!=="svelte-hgtztm"&&(r.innerHTML=o),i=D(n),u=g(n,"TBODY",{});var e=T(u);for(let a=0;a<s.length;a+=1)s[a].l(e);e.forEach(_),n.forEach(_),this.h()},h(){N(t,"class","table")},m(l,n){k(l,t,n),d(t,r),d(t,i),d(t,u);for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(u,null)},p(l,n){if(n&4){p=B(l[2]);let e;for(e=0;e<p.length;e+=1){const a=O(l,p,e);s[e]?s[e].p(a,n):(s[e]=I(a),s[e].c(),s[e].m(u,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=p.length}},d(l){l&&_(t),J(s,l)}}}function I(h){let t,r,o=h[11].name+"",i,u,p,s=h[11].ingredients.join(", ")+"",l,n,e,a=h[11].calories+"",E,y;return{c(){t=b("tr"),r=b("td"),i=P(o),u=M(),p=b("td"),l=P(s),n=M(),e=b("td"),E=P(a),y=M()},l(f){t=g(f,"TR",{});var c=T(t);r=g(c,"TD",{});var m=T(r);i=H(m,o),m.forEach(_),u=D(c),p=g(c,"TD",{});var C=T(p);l=H(C,s),C.forEach(_),n=D(c),e=g(c,"TD",{});var v=T(e);E=H(v,a),v.forEach(_),y=D(c),c.forEach(_)},m(f,c){k(f,t,c),d(t,r),d(r,i),d(t,u),d(t,p),d(p,l),d(t,n),d(t,e),d(e,E),d(t,y)},p(f,c){c&4&&o!==(o=f[11].name+"")&&L(i,o),c&4&&s!==(s=f[11].ingredients.join(", ")+"")&&L(l,s),c&4&&a!==(a=f[11].calories+"")&&L(E,a)},d(f){f&&_(t)}}}function se(h){let t,r="Meal Plans",o,i,u;function p(e,a){return e[3]?te:e[4]?ee:$}let s=p(h),l=s(h),n=h[1]&&V(h);return{c(){t=b("h1"),t.textContent=r,o=M(),l.c(),i=M(),n&&n.c(),u=A(),this.h()},l(e){t=g(e,"H1",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-lgttdv"&&(t.textContent=r),o=D(e),l.l(e),i=D(e),n&&n.l(e),u=A(),this.h()},h(){N(t,"class","mt-3")},m(e,a){k(e,t,a),k(e,o,a),l.m(e,a),k(e,i,a),n&&n.m(e,a),k(e,u,a)},p(e,[a]){s===(s=p(e))&&l?l.p(e,a):(l.d(1),l=s(e),l&&(l.c(),l.m(i.parentNode,i))),e[1]?n?n.p(e,a):(n=V(e),n.c(),n.m(u.parentNode,u)):n&&(n.d(1),n=null)},i:w,o:w,d(e){e&&(_(t),_(o),_(i),_(u)),l.d(e),n&&n.d(e)}}}function oe(h,t,r){let o,i;Y(h,Z,f=>r(7,o=f)),Y(h,x,f=>r(8,i=f));const u=`${i.url.origin}/api`;let p=[],s=null,l=[],n=!1,e="";console.log("JWT Token:",o),G(()=>{a()});async function a(){r(3,n=!0),r(4,e="");try{const f=await q.get(`${u}/mealplan`,{headers:{Authorization:"Bearer "+o}});r(0,p=f.data)}catch(f){f.response?f.response.status===401?r(4,e="Unauthorized. Please check your login."):f.response.status===403?r(4,e="Forbidden. You do not have access."):r(4,e="Error fetching meal plans: "+f.response.data):r(4,e="Network error or server not reachable."),console.error("Error fetching meal plans:",f)}finally{r(3,n=!1)}}async function E(f){r(3,n=!0),r(4,e=""),r(2,l=[]);try{const c=await q.get(`${u}/mealplan/${f}/recipes`,{headers:{Authorization:"Bearer "+o}});r(2,l=c.data),r(1,s=p.find(m=>m.id===f))}catch(c){c.response?c.response.status===401?r(4,e="Unauthorized. Please check your login."):c.response.status===403?r(4,e="Forbidden. You do not have access."):r(4,e="Error fetching recipes: "+c.response.data):r(4,e="Network error or server not reachable."),console.error("Error fetching recipes for meal plan:",c)}finally{r(3,n=!1)}}return[p,s,l,n,e,E,f=>E(f.id)]}class pe extends K{constructor(t){super(),Q(this,t,oe,se,W,{})}}export{pe as component};
//# sourceMappingURL=4.BBewwslO.js.map
