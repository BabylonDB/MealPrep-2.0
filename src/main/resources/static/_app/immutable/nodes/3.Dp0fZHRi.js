import{s as J,n as B,c as K,o as Q}from"../chunks/scheduler.5jWEhooB.js";import{S as W,i as X,b as v,s as M,e as N,c as k,g as A,h as D,j,a as T,d,t as H,f as E,n as L,k as u,o as P,q as G,m as Z}from"../chunks/index.4BCV0MbB.js";import{e as R}from"../chunks/each.D6YF6ztN.js";import{a as O,j as x}from"../chunks/axios.Ch7KMjJl.js";function S(f,e,s){const r=f.slice();return r[9]=e[s],r}function V(f,e,s){const r=f.slice();return r[12]=e[s],r}function $(f){let e,s,r='<tr><th scope="col">Meal Plan Name</th> <th scope="col">Description</th> <th scope="col">Actions</th></tr>',i,_,h=R(f[0]),n=[];for(let l=0;l<h.length;l+=1)n[l]=F(V(f,h,l));return{c(){e=v("table"),s=v("thead"),s.innerHTML=r,i=M(),_=v("tbody");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=k(l,"TABLE",{class:!0});var o=E(e);s=k(o,"THEAD",{"data-svelte-h":!0}),A(s)!=="svelte-1in0onf"&&(s.innerHTML=r),i=D(o),_=k(o,"TBODY",{});var t=E(_);for(let a=0;a<n.length;a+=1)n[a].l(t);t.forEach(d),o.forEach(d),this.h()},h(){j(e,"class","table")},m(l,o){T(l,e,o),u(e,s),u(e,i),u(e,_);for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(_,null)},p(l,o){if(o&33){h=R(l[0]);let t;for(t=0;t<h.length;t+=1){const a=V(l,h,t);n[t]?n[t].p(a,o):(n[t]=F(a),n[t].c(),n[t].m(_,null))}for(;t<n.length;t+=1)n[t].d(1);n.length=h.length}},d(l){l&&d(e),G(n,l)}}}function ee(f){let e,s;return{c(){e=v("div"),s=H(f[4]),this.h()},l(r){e=k(r,"DIV",{class:!0});var i=E(e);s=L(i,f[4]),i.forEach(d),this.h()},h(){j(e,"class","alert alert-danger")},m(r,i){T(r,e,i),u(e,s)},p(r,i){i&16&&P(s,r[4])},d(r){r&&d(e)}}}function te(f){let e,s='<span class="visually-hidden">Loading...</span>';return{c(){e=v("div"),e.innerHTML=s,this.h()},l(r){e=k(r,"DIV",{class:!0,role:!0,"data-svelte-h":!0}),A(e)!=="svelte-gq0gie"&&(e.innerHTML=s),this.h()},h(){j(e,"class","spinner-border text-primary"),j(e,"role","status")},m(r,i){T(r,e,i)},p:B,d(r){r&&d(e)}}}function F(f){let e,s,r=f[12].name+"",i,_,h,n=f[12].description+"",l,o,t,a,m="View Recipes",g,p,c;function b(){return f[6](f[12])}return{c(){e=v("tr"),s=v("td"),i=H(r),_=M(),h=v("td"),l=H(n),o=M(),t=v("td"),a=v("button"),a.textContent=m,g=M(),this.h()},l(C){e=k(C,"TR",{});var y=E(e);s=k(y,"TD",{});var w=E(s);i=L(w,r),w.forEach(d),_=D(y),h=k(y,"TD",{});var q=E(h);l=L(q,n),q.forEach(d),o=D(y),t=k(y,"TD",{});var z=E(t);a=k(z,"BUTTON",{class:!0,"data-svelte-h":!0}),A(a)!=="svelte-gbrnyv"&&(a.textContent=m),z.forEach(d),g=D(y),y.forEach(d),this.h()},h(){j(a,"class","btn btn-primary btn-sm")},m(C,y){T(C,e,y),u(e,s),u(s,i),u(e,_),u(e,h),u(h,l),u(e,o),u(e,t),u(t,a),u(e,g),p||(c=Z(a,"click",b),p=!0)},p(C,y){f=C,y&1&&r!==(r=f[12].name+"")&&P(i,r),y&1&&n!==(n=f[12].description+"")&&P(l,n)},d(C){C&&d(e),p=!1,c()}}}function I(f){let e,s,r=f[1].name+"",i,_,h,n,l=f[1].description+"",o,t,a;function m(c,b){return c[2].length>0?ne:le}let g=m(f),p=g(f);return{c(){e=v("h2"),s=H('Recipes for "'),i=H(r),_=H('"'),h=M(),n=v("p"),o=H(l),t=M(),p.c(),a=N(),this.h()},l(c){e=k(c,"H2",{class:!0});var b=E(e);s=L(b,'Recipes for "'),i=L(b,r),_=L(b,'"'),b.forEach(d),h=D(c),n=k(c,"P",{});var C=E(n);o=L(C,l),C.forEach(d),t=D(c),p.l(c),a=N(),this.h()},h(){j(e,"class","mt-4")},m(c,b){T(c,e,b),u(e,s),u(e,i),u(e,_),T(c,h,b),T(c,n,b),u(n,o),T(c,t,b),p.m(c,b),T(c,a,b)},p(c,b){b&2&&r!==(r=c[1].name+"")&&P(i,r),b&2&&l!==(l=c[1].description+"")&&P(o,l),g===(g=m(c))&&p?p.p(c,b):(p.d(1),p=g(c),p&&(p.c(),p.m(a.parentNode,a)))},d(c){c&&(d(e),d(h),d(n),d(t),d(a)),p.d(c)}}}function le(f){let e,s="No recipes found for this meal plan.";return{c(){e=v("p"),e.textContent=s},l(r){e=k(r,"P",{"data-svelte-h":!0}),A(e)!=="svelte-j16rap"&&(e.textContent=s)},m(r,i){T(r,e,i)},p:B,d(r){r&&d(e)}}}function ne(f){let e,s,r='<tr><th scope="col">Recipe Name</th> <th scope="col">Ingredients</th> <th scope="col">Calories</th></tr>',i,_,h=R(f[2]),n=[];for(let l=0;l<h.length;l+=1)n[l]=Y(S(f,h,l));return{c(){e=v("table"),s=v("thead"),s.innerHTML=r,i=M(),_=v("tbody");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){e=k(l,"TABLE",{class:!0});var o=E(e);s=k(o,"THEAD",{"data-svelte-h":!0}),A(s)!=="svelte-hgtztm"&&(s.innerHTML=r),i=D(o),_=k(o,"TBODY",{});var t=E(_);for(let a=0;a<n.length;a+=1)n[a].l(t);t.forEach(d),o.forEach(d),this.h()},h(){j(e,"class","table")},m(l,o){T(l,e,o),u(e,s),u(e,i),u(e,_);for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(_,null)},p(l,o){if(o&4){h=R(l[2]);let t;for(t=0;t<h.length;t+=1){const a=S(l,h,t);n[t]?n[t].p(a,o):(n[t]=Y(a),n[t].c(),n[t].m(_,null))}for(;t<n.length;t+=1)n[t].d(1);n.length=h.length}},d(l){l&&d(e),G(n,l)}}}function Y(f){let e,s,r=f[9].name+"",i,_,h,n=f[9].ingredients.join(", ")+"",l,o,t,a=f[9].calories+"",m,g;return{c(){e=v("tr"),s=v("td"),i=H(r),_=M(),h=v("td"),l=H(n),o=M(),t=v("td"),m=H(a),g=M()},l(p){e=k(p,"TR",{});var c=E(e);s=k(c,"TD",{});var b=E(s);i=L(b,r),b.forEach(d),_=D(c),h=k(c,"TD",{});var C=E(h);l=L(C,n),C.forEach(d),o=D(c),t=k(c,"TD",{});var y=E(t);m=L(y,a),y.forEach(d),g=D(c),c.forEach(d)},m(p,c){T(p,e,c),u(e,s),u(s,i),u(e,_),u(e,h),u(h,l),u(e,o),u(e,t),u(t,m),u(e,g)},p(p,c){c&4&&r!==(r=p[9].name+"")&&P(i,r),c&4&&n!==(n=p[9].ingredients.join(", ")+"")&&P(l,n),c&4&&a!==(a=p[9].calories+"")&&P(m,a)},d(p){p&&d(e)}}}function se(f){let e,s="Meal Plans",r,i,_;function h(t,a){return t[3]?te:t[4]?ee:$}let n=h(f),l=n(f),o=f[1]&&I(f);return{c(){e=v("h1"),e.textContent=s,r=M(),l.c(),i=M(),o&&o.c(),_=N(),this.h()},l(t){e=k(t,"H1",{class:!0,"data-svelte-h":!0}),A(e)!=="svelte-lgttdv"&&(e.textContent=s),r=D(t),l.l(t),i=D(t),o&&o.l(t),_=N(),this.h()},h(){j(e,"class","mt-3")},m(t,a){T(t,e,a),T(t,r,a),l.m(t,a),T(t,i,a),o&&o.m(t,a),T(t,_,a)},p(t,[a]){n===(n=h(t))&&l?l.p(t,a):(l.d(1),l=n(t),l&&(l.c(),l.m(i.parentNode,i))),t[1]?o?o.p(t,a):(o=I(t),o.c(),o.m(_.parentNode,_)):o&&(o.d(1),o=null)},i:B,o:B,d(t){t&&(d(e),d(r),d(i),d(_)),l.d(t),o&&o.d(t)}}}const U="http://localhost:8080/api";function re(f,e,s){let r;K(f,x,m=>s(7,r=m));let i=[],_=null,h=[],n=!1,l="";Q(()=>{o()});async function o(){s(3,n=!0),s(4,l="");try{const m=await O.get(`${U}/mealplan`,{headers:{Authorization:"Bearer "+r}});s(0,i=m.data)}catch(m){s(4,l="Could not fetch meal plans. Please try again."),console.error(m)}finally{s(3,n=!1)}}async function t(m){s(3,n=!0),s(4,l=""),s(2,h=[]);try{const g=await O.get(`${U}/mealplan/${m}/recipes`,{headers:{Authorization:"Bearer "+r}});s(2,h=g.data),s(1,_=i.find(p=>p.id===m))}catch(g){s(4,l="Could not fetch recipes for the selected meal plan."),console.error(g)}finally{s(3,n=!1)}}return[i,_,h,n,l,t,m=>t(m.id)]}class fe extends W{constructor(e){super(),X(this,e,re,se,J,{})}}export{fe as component};
//# sourceMappingURL=3.Dp0fZHRi.js.map
