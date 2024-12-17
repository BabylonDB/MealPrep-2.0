import{s as W,n as G,r as X}from"../chunks/scheduler.Cs0xm5t1.js";import{S as Z,i as tt,e as v,s as E,q as M,c as C,g as I,a as T,h as N,f as r,b as L,d as x,k as h,l as U,m as V,t as B,j as A,n as F,o as et}from"../chunks/index.MDkSkE4J.js";import{e as z,a as Q}from"../chunks/axios.DUp5qkD9.js";function Y(d,n,g){const f=d.slice();return f[6]=n[g],f}function $(d){let n,g="Selected Recipe",f,o,_,y="Name:",c,p=d[1].name+"",a,l,e,u,s="Ingredients:",q,k=(d[1].ingredients?d[1].ingredients.join(", "):"")+"",D,P,R,S,O="Instructions:",j,m=d[1].instructions+"",b;return{c(){n=v("h2"),n.textContent=g,f=E(),o=v("p"),_=v("strong"),_.textContent=y,c=E(),a=B(p),l=E(),e=v("p"),u=v("strong"),u.textContent=s,q=E(),D=B(k),P=E(),R=v("p"),S=v("strong"),S.textContent=O,j=E(),b=B(m)},l(t){n=C(t,"H2",{"data-svelte-h":!0}),I(n)!=="svelte-12gcfx1"&&(n.textContent=g),f=T(t),o=C(t,"P",{});var i=N(o);_=C(i,"STRONG",{"data-svelte-h":!0}),I(_)!=="svelte-obrarj"&&(_.textContent=y),c=T(i),a=A(i,p),i.forEach(r),l=T(t),e=C(t,"P",{});var H=N(e);u=C(H,"STRONG",{"data-svelte-h":!0}),I(u)!=="svelte-1s6pesi"&&(u.textContent=s),q=T(H),D=A(H,k),H.forEach(r),P=T(t),R=C(t,"P",{});var w=N(R);S=C(w,"STRONG",{"data-svelte-h":!0}),I(S)!=="svelte-6ko1v5"&&(S.textContent=O),j=T(w),b=A(w,m),w.forEach(r)},m(t,i){x(t,n,i),x(t,f,i),x(t,o,i),h(o,_),h(o,c),h(o,a),x(t,l,i),x(t,e,i),h(e,u),h(e,q),h(e,D),x(t,P,i),x(t,R,i),h(R,S),h(R,j),h(R,b)},p(t,i){i&2&&p!==(p=t[1].name+"")&&F(a,p),i&2&&k!==(k=(t[1].ingredients?t[1].ingredients.join(", "):"")+"")&&F(D,k),i&2&&m!==(m=t[1].instructions+"")&&F(b,m)},d(t){t&&(r(n),r(f),r(o),r(l),r(e),r(P),r(R))}}}function J(d){let n,g="Shopping List",f,o,_,y='<tr><th scope="col">Item</th> <th scope="col">Quantity</th></tr>',c,p,a=z(d[2]),l=[];for(let e=0;e<a.length;e+=1)l[e]=K(Y(d,a,e));return{c(){n=v("h2"),n.textContent=g,f=E(),o=v("table"),_=v("thead"),_.innerHTML=y,c=E(),p=v("tbody");for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){n=C(e,"H2",{"data-svelte-h":!0}),I(n)!=="svelte-1q4e96i"&&(n.textContent=g),f=T(e),o=C(e,"TABLE",{class:!0});var u=N(o);_=C(u,"THEAD",{"data-svelte-h":!0}),I(_)!=="svelte-kmb5un"&&(_.innerHTML=y),c=T(u),p=C(u,"TBODY",{});var s=N(p);for(let q=0;q<l.length;q+=1)l[q].l(s);s.forEach(r),u.forEach(r),this.h()},h(){L(o,"class","table")},m(e,u){x(e,n,u),x(e,f,u),x(e,o,u),h(o,_),h(o,c),h(o,p);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(p,null)},p(e,u){if(u&4){a=z(e[2]);let s;for(s=0;s<a.length;s+=1){const q=Y(e,a,s);l[s]?l[s].p(q,u):(l[s]=K(q),l[s].c(),l[s].m(p,null))}for(;s<l.length;s+=1)l[s].d(1);l.length=a.length}},d(e){e&&(r(n),r(f),r(o)),et(l,e)}}}function K(d){let n,g,f=d[6].name+"",o,_,y,c=d[6].quantity+"",p,a;return{c(){n=v("tr"),g=v("td"),o=B(f),_=E(),y=v("td"),p=B(c),a=E()},l(l){n=C(l,"TR",{});var e=N(n);g=C(e,"TD",{});var u=N(g);o=A(u,f),u.forEach(r),_=T(e),y=C(e,"TD",{});var s=N(y);p=A(s,c),s.forEach(r),a=T(e),e.forEach(r)},m(l,e){x(l,n,e),h(n,g),h(g,o),h(n,_),h(n,y),h(y,p),h(n,a)},p(l,e){e&4&&f!==(f=l[6].name+"")&&F(o,f),e&4&&c!==(c=l[6].quantity+"")&&F(p,c)},d(l){l&&r(n)}}}function lt(d){let n,g="Recipe Finder",f,o,_="Enter your preferences to find a recipe and generate a shopping list.",y,c,p,a,l,e="Preferences",u,s,q,k,D="Find Recipe",P,R,S,O,j,m=d[1]&&$(d),b=d[2].length>0&&J(d);return{c(){n=v("h1"),n.textContent=g,f=E(),o=v("p"),o.textContent=_,y=E(),c=v("form"),p=v("div"),a=v("div"),l=v("label"),l.textContent=e,u=E(),s=v("input"),q=E(),k=v("button"),k.textContent=D,P=E(),m&&m.c(),R=E(),b&&b.c(),S=M(),this.h()},l(t){n=C(t,"H1",{"data-svelte-h":!0}),I(n)!=="svelte-1kwxml4"&&(n.textContent=g),f=T(t),o=C(t,"P",{"data-svelte-h":!0}),I(o)!=="svelte-1mmzqql"&&(o.textContent=_),y=T(t),c=C(t,"FORM",{class:!0});var i=N(c);p=C(i,"DIV",{class:!0});var H=N(p);a=C(H,"DIV",{class:!0});var w=N(a);l=C(w,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),I(l)!=="svelte-31wqeq"&&(l.textContent=e),u=T(w),s=C(w,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),w.forEach(r),H.forEach(r),q=T(i),k=C(i,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),I(k)!=="svelte-245idl"&&(k.textContent=D),i.forEach(r),P=T(t),m&&m.l(t),R=T(t),b&&b.l(t),S=M(),this.h()},h(){L(l,"class","form-label"),L(l,"for","preferences"),L(s,"class","form-control"),L(s,"id","preferences"),L(s,"type","text"),L(s,"placeholder","e.g., vegan, low carb"),L(a,"class","col"),L(p,"class","row mb-3"),L(k,"type","button"),L(k,"class","btn btn-primary"),L(c,"class","mb-5")},m(t,i){x(t,n,i),x(t,f,i),x(t,o,i),x(t,y,i),x(t,c,i),h(c,p),h(p,a),h(a,l),h(a,u),h(a,s),U(s,d[0]),h(c,q),h(c,k),x(t,P,i),m&&m.m(t,i),x(t,R,i),b&&b.m(t,i),x(t,S,i),O||(j=[V(s,"input",d[4]),V(k,"click",d[3])],O=!0)},p(t,[i]){i&1&&s.value!==t[0]&&U(s,t[0]),t[1]?m?m.p(t,i):(m=$(t),m.c(),m.m(R.parentNode,R)):m&&(m.d(1),m=null),t[2].length>0?b?b.p(t,i):(b=J(t),b.c(),b.m(S.parentNode,S)):b&&(b.d(1),b=null)},i:G,o:G,d(t){t&&(r(n),r(f),r(o),r(y),r(c),r(P),r(R),r(S)),m&&m.d(t),b&&b.d(t),O=!1,X(j)}}}const nt="http://localhost:8080/api/recipes",st="http://localhost:8080/api/shoppinglist";function it(d,n,g){let f="",o=null,_=[];async function y(){try{const a=await Q.get(`${nt}/random`,{params:{preferences:f}});g(1,o=a.data),c()}catch(a){alert("Could not fetch recipe"),console.log(a)}}async function c(){try{const a=await Q.post(st,{recipeId:o.id});g(2,_=a.data),alert("Shopping list successfully created")}catch(a){alert("Could not generate shopping list"),console.log(a)}}function p(){f=this.value,g(0,f)}return[f,o,_,y,p]}class ft extends Z{constructor(n){super(),tt(this,n,it,lt,W,{})}}export{ft as component};
//# sourceMappingURL=6.CktNCN9Y.js.map