import{s as Ne,n as Ee,r as me,c as ke,o as Oe,d as Le,i as Ue}from"../chunks/scheduler.CJdZjHFg.js";import{S as je,i as Ve,e as c,t as ee,s as A,k as Te,c as u,a as T,b as te,d as f,f as D,l as Q,m as o,g as K,h as t,n as $,o as Z,j as re,r as De,q as Me,u as we,v as ye,w as Se}from"../chunks/index.DIjv740q.js";import{e as pe}from"../chunks/each.D6YF6ztN.js";import{a as ce}from"../chunks/axios.CCb-kr4I.js";import{j as ze}from"../chunks/store.lhyZ239w.js";import{p as He}from"../chunks/stores.CDRPN3O5.js";function Ie(e,n,a){const r=e.slice();return r[26]=n[a],r}function Pe(e,n,a){const r=e.slice();return r[5]=n[a],r}function Re(e){let n,a,r=e[5].name+"",E,i,m,d=(e[5].ingredients?e[5].ingredients.join(", "):"")+"",R,O,M,b=e[5].calories+"",j,I,g,V,Y="Edit",v,k,F="Delete",L,C,w="Add to Meal Plan",J,N,U;function q(){return e[15](e[5])}function G(){return e[16](e[5])}function x(){return e[17](e[5])}return{c(){n=c("tr"),a=c("td"),E=ee(r),i=A(),m=c("td"),R=ee(d),O=A(),M=c("td"),j=ee(b),I=A(),g=c("td"),V=c("button"),V.textContent=Y,v=A(),k=c("button"),k.textContent=F,L=A(),C=c("button"),C.textContent=w,J=A(),this.h()},l(s){n=u(s,"TR",{});var l=T(n);a=u(l,"TD",{});var p=T(a);E=te(p,r),p.forEach(f),i=D(l),m=u(l,"TD",{});var S=T(m);R=te(S,d),S.forEach(f),O=D(l),M=u(l,"TD",{});var _=T(M);j=te(_,b),_.forEach(f),I=D(l),g=u(l,"TD",{});var P=T(g);V=u(P,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(V)!=="svelte-533k1u"&&(V.textContent=Y),v=D(P),k=u(P,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(k)!=="svelte-epn168"&&(k.textContent=F),L=D(P),C=u(P,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(C)!=="svelte-1v48aad"&&(C.textContent=w),P.forEach(f),J=D(l),l.forEach(f),this.h()},h(){o(V,"class","btn btn-secondary btn-sm"),o(k,"class","btn btn-danger btn-sm"),o(C,"class","btn btn-success btn-sm")},m(s,l){K(s,n,l),t(n,a),t(a,E),t(n,i),t(n,m),t(m,R),t(n,O),t(n,M),t(M,j),t(n,I),t(n,g),t(g,V),t(g,v),t(g,k),t(g,L),t(g,C),t(n,J),N||(U=[Z(V,"click",q),Z(k,"click",G),Z(C,"click",x)],N=!0)},p(s,l){e=s,l&1&&r!==(r=e[5].name+"")&&re(E,r),l&1&&d!==(d=(e[5].ingredients?e[5].ingredients.join(", "):"")+"")&&re(R,d),l&1&&b!==(b=e[5].calories+"")&&re(j,b)},d(s){s&&f(n),N=!1,me(U)}}}function Be(e){let n,a,r,E,i,m,d=e[3].name+"",R,O,M,b,j,I,g,V="Select a Meal Plan:",Y,v,k,F="Select Meal Plan",L,C,w,J="Add",N,U,q="Cancel",G,x,s=pe(e[1]),l=[];for(let p=0;p<s.length;p+=1)l[p]=Ae(Ie(e,s,p));return{c(){n=c("div"),a=c("div"),r=c("div"),E=c("div"),i=c("h5"),m=ee('Add "'),R=ee(d),O=ee('" to a Meal Plan'),M=A(),b=c("button"),j=A(),I=c("div"),g=c("label"),g.textContent=V,Y=A(),v=c("select"),k=c("option"),k.textContent=F;for(let p=0;p<l.length;p+=1)l[p].c();L=A(),C=c("div"),w=c("button"),w.textContent=J,N=A(),U=c("button"),U.textContent=q,this.h()},l(p){n=u(p,"DIV",{class:!0,tabindex:!0,style:!0,role:!0});var S=T(n);a=u(S,"DIV",{class:!0,role:!0});var _=T(a);r=u(_,"DIV",{class:!0});var P=T(r);E=u(P,"DIV",{class:!0});var ae=T(E);i=u(ae,"H5",{class:!0});var le=T(i);m=te(le,'Add "'),R=te(le,d),O=te(le,'" to a Meal Plan'),le.forEach(f),M=D(ae),b=u(ae,"BUTTON",{type:!0,class:!0}),T(b).forEach(f),ae.forEach(f),j=D(P),I=u(P,"DIV",{class:!0});var W=T(I);g=u(W,"LABEL",{for:!0,"data-svelte-h":!0}),Q(g)!=="svelte-147w3mm"&&(g.textContent=V),Y=D(W),v=u(W,"SELECT",{id:!0,class:!0});var ne=T(v);k=u(ne,"OPTION",{"data-svelte-h":!0}),Q(k)!=="svelte-jd6hai"&&(k.textContent=F);for(let se=0;se<l.length;se+=1)l[se].l(ne);ne.forEach(f),W.forEach(f),L=D(P),C=u(P,"DIV",{class:!0});var X=T(C);w=u(X,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),Q(w)!=="svelte-1vdzml6"&&(w.textContent=J),N=D(X),U=u(X,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),Q(U)!=="svelte-1papf67"&&(U.textContent=q),X.forEach(f),P.forEach(f),_.forEach(f),S.forEach(f),this.h()},h(){o(i,"class","modal-title"),o(b,"type","button"),o(b,"class","btn-close"),o(E,"class","modal-header"),o(g,"for","mealplan-select"),k.__value="",$(k,k.__value),k.disabled=!0,o(v,"id","mealplan-select"),o(v,"class","form-select"),e[2]===void 0&&Le(()=>e[19].call(v)),o(I,"class","modal-body"),o(w,"type","button"),o(w,"class","btn btn-primary"),o(U,"type","button"),o(U,"class","btn btn-secondary"),o(C,"class","modal-footer"),o(r,"class","modal-content"),o(a,"class","modal-dialog"),o(a,"role","document"),o(n,"class","modal show"),o(n,"tabindex","-1"),we(n,"display","block"),o(n,"role","dialog")},m(p,S){K(p,n,S),t(n,a),t(a,r),t(r,E),t(E,i),t(i,m),t(i,R),t(i,O),t(E,M),t(E,b),t(r,j),t(r,I),t(I,g),t(I,Y),t(I,v),t(v,k);for(let _=0;_<l.length;_+=1)l[_]&&l[_].m(v,null);ye(v,e[2],!0),t(r,L),t(r,C),t(C,w),t(C,N),t(C,U),G||(x=[Z(b,"click",e[18]),Z(v,"change",e[19]),Z(w,"click",e[11]),Z(U,"click",e[20])],G=!0)},p(p,S){if(S&8&&d!==(d=p[3].name+"")&&re(R,d),S&2){s=pe(p[1]);let _;for(_=0;_<s.length;_+=1){const P=Ie(p,s,_);l[_]?l[_].p(P,S):(l[_]=Ae(P),l[_].c(),l[_].m(v,null))}for(;_<l.length;_+=1)l[_].d(1);l.length=s.length}S&6&&ye(v,p[2])},d(p){p&&f(n),Me(l,p),G=!1,me(x)}}}function Ae(e){let n,a=e[26].name+"",r,E;return{c(){n=c("option"),r=ee(a),this.h()},l(i){n=u(i,"OPTION",{});var m=T(n);r=te(m,a),m.forEach(f),this.h()},h(){n.__value=E=e[26].id,$(n,n.__value)},m(i,m){K(i,n,m),t(n,r)},p(i,m){m&2&&a!==(a=i[26].name+"")&&re(r,a),m&2&&E!==(E=i[26].id)&&(n.__value=E,$(n,n.__value))},d(i){i&&f(n)}}}function qe(e){let n,a=e[4]?"Edit Recipe":"Create Recipe",r,E,i,m,d,R,O="Name",M,b,j,I,g,V="Ingredients (comma-separated)",Y,v,k,F,L,C,w="Calories",J,N,U,q,G=e[4]?"Update":"Submit",x,s,l,p="All Recipes",S,_,P,ae='<tr><th scope="col">Name</th> <th scope="col">Ingredients</th> <th scope="col">Calories</th> <th scope="col">Actions</th></tr>',le,W,ne,X,se,ve,ie=pe(e[0]),z=[];for(let h=0;h<ie.length;h+=1)z[h]=Re(Pe(e,ie,h));let H=e[3]&&Be(e);return{c(){n=c("h1"),r=ee(a),E=A(),i=c("form"),m=c("div"),d=c("div"),R=c("label"),R.textContent=O,M=A(),b=c("input"),j=A(),I=c("div"),g=c("label"),g.textContent=V,Y=A(),v=c("input"),k=A(),F=c("div"),L=c("div"),C=c("label"),C.textContent=w,J=A(),N=c("input"),U=A(),q=c("button"),x=ee(G),s=A(),l=c("h1"),l.textContent=p,S=A(),_=c("table"),P=c("thead"),P.innerHTML=ae,le=A(),W=c("tbody");for(let h=0;h<z.length;h+=1)z[h].c();ne=A(),H&&H.c(),X=Te(),this.h()},l(h){n=u(h,"H1",{class:!0});var B=T(n);r=te(B,a),B.forEach(f),E=D(h),i=u(h,"FORM",{class:!0});var y=T(i);m=u(y,"DIV",{class:!0});var oe=T(m);d=u(oe,"DIV",{class:!0});var ue=T(d);R=u(ue,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Q(R)!=="svelte-15kbfjq"&&(R.textContent=O),M=D(ue),b=u(ue,"INPUT",{class:!0,id:!0,type:!0}),ue.forEach(f),j=D(oe),I=u(oe,"DIV",{class:!0});var de=T(I);g=u(de,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Q(g)!=="svelte-1mkxfia"&&(g.textContent=V),Y=D(de),v=u(de,"INPUT",{class:!0,id:!0,type:!0}),de.forEach(f),oe.forEach(f),k=D(y),F=u(y,"DIV",{class:!0});var be=T(F);L=u(be,"DIV",{class:!0});var fe=T(L);C=u(fe,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),Q(C)!=="svelte-1phwgci"&&(C.textContent=w),J=D(fe),N=u(fe,"INPUT",{class:!0,id:!0,type:!0}),fe.forEach(f),be.forEach(f),U=D(y),q=u(y,"BUTTON",{type:!0,class:!0});var ge=T(q);x=te(ge,G),ge.forEach(f),y.forEach(f),s=D(h),l=u(h,"H1",{"data-svelte-h":!0}),Q(l)!=="svelte-9hymne"&&(l.textContent=p),S=D(h),_=u(h,"TABLE",{class:!0});var he=T(_);P=u(he,"THEAD",{"data-svelte-h":!0}),Q(P)!=="svelte-1qn73xh"&&(P.innerHTML=ae),le=D(he),W=u(he,"TBODY",{});var Ce=T(W);for(let _e=0;_e<z.length;_e+=1)z[_e].l(Ce);Ce.forEach(f),he.forEach(f),ne=D(h),H&&H.l(h),X=Te(),this.h()},h(){o(n,"class","mt-3"),o(R,"class","form-label"),o(R,"for","name"),o(b,"class","form-control"),o(b,"id","name"),o(b,"type","text"),o(d,"class","col"),o(g,"class","form-label"),o(g,"for","ingredients"),o(v,"class","form-control"),o(v,"id","ingredients"),o(v,"type","text"),o(I,"class","col"),o(m,"class","row mb-3"),o(C,"class","form-label"),o(C,"for","calories"),o(N,"class","form-control"),o(N,"id","calories"),o(N,"type","number"),o(L,"class","col"),o(F,"class","row mb-3"),o(q,"type","button"),o(q,"class","btn btn-primary"),o(i,"class","mb-5"),o(_,"class","table")},m(h,B){K(h,n,B),t(n,r),K(h,E,B),K(h,i,B),t(i,m),t(m,d),t(d,R),t(d,M),t(d,b),$(b,e[5].name),t(m,j),t(m,I),t(I,g),t(I,Y),t(I,v),$(v,e[5].ingredients),t(i,k),t(i,F),t(F,L),t(L,C),t(L,J),t(L,N),$(N,e[5].calories),t(i,U),t(i,q),t(q,x),K(h,s,B),K(h,l,B),K(h,S,B),K(h,_,B),t(_,P),t(_,le),t(_,W);for(let y=0;y<z.length;y+=1)z[y]&&z[y].m(W,null);K(h,ne,B),H&&H.m(h,B),K(h,X,B),se||(ve=[Z(b,"input",e[12]),Z(v,"input",e[13]),Z(N,"input",e[14]),Z(q,"click",function(){Ue(e[4]?e[9]:e[6])&&(e[4]?e[9]:e[6]).apply(this,arguments)})],se=!0)},p(h,[B]){if(e=h,B&16&&a!==(a=e[4]?"Edit Recipe":"Create Recipe")&&re(r,a),B&32&&b.value!==e[5].name&&$(b,e[5].name),B&32&&v.value!==e[5].ingredients&&$(v,e[5].ingredients),B&32&&De(N.value)!==e[5].calories&&$(N,e[5].calories),B&16&&G!==(G=e[4]?"Update":"Submit")&&re(x,G),B&1409){ie=pe(e[0]);let y;for(y=0;y<ie.length;y+=1){const oe=Pe(e,ie,y);z[y]?z[y].p(oe,B):(z[y]=Re(oe),z[y].c(),z[y].m(W,null))}for(;y<z.length;y+=1)z[y].d(1);z.length=ie.length}e[3]?H?H.p(e,B):(H=Be(e),H.c(),H.m(X.parentNode,X)):H&&(H.d(1),H=null)},i:Ee,o:Ee,d(h){h&&(f(n),f(E),f(i),f(s),f(l),f(S),f(_),f(ne),f(X)),Me(z,h),H&&H.d(h),se=!1,me(ve)}}}function Fe(e,n,a){let r,E;ke(e,ze,s=>a(21,r=s)),ke(e,He,s=>a(22,E=s));const i=`${E.url.origin}/api`;let m=[],d={name:null,ingredients:null,calories:null},R=[],O=null,M=null,b=null;Oe(()=>{j(),I()});function j(){var s={method:"get",url:i+"/recipe",headers:{Authorization:"Bearer "+r}};ce(s).then(function(l){a(0,m=l.data)}).catch(function(l){alert("Could not fetch recipes"),console.log(l)})}function I(){ce.get(`${i}/mealplan`,{headers:{Authorization:"Bearer "+r}}).then(s=>{a(1,R=s.data)}).catch(s=>{console.error("Could not fetch meal plans:",s)})}function g(){const s=d.ingredients?d.ingredients.split(",").map(p=>p.trim()):[],l={name:d.name||"",ingredients:s,calories:parseInt(d.calories,10)||0};ce.post(i+"/recipe",l,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+r}}).then(function(){alert("Recipe created successfully"),a(5,d={name:"",ingredients:"",calories:""}),j()}).catch(function(p){alert("Could not create recipe"),console.error("Error:",p)})}function V(s){ce.delete(`${i}/recipe/${s}`,{headers:{Authorization:"Bearer "+r}}).then(()=>{alert("Recipe deleted successfully"),j()}).catch(l=>{alert("Could not delete recipe"),console.error("Error:",l)})}function Y(s){a(4,b=s.id),a(5,d={name:s.name,ingredients:s.ingredients.join(", "),calories:s.calories})}function v(){const s=d.ingredients?d.ingredients.split(",").map(p=>p.trim()):[],l={name:d.name||"",ingredients:s,calories:parseInt(d.calories,10)||0};ce.put(`${i}/recipe/${b}`,l,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+r}}).then(()=>{alert("Recipe updated successfully"),a(5,d={name:"",ingredients:"",calories:""}),a(4,b=null),j()}).catch(p=>{alert("Could not update recipe"),console.error("Error:",p)})}function k(s){a(3,M=m.find(l=>l.id===s)),a(2,O=null)}function F(){if(!O||!M){alert("Please select a Meal Plan.");return}ce.put(`${i}/mealplan/${O}/recipes`,{recipeId:M.id},{headers:{Authorization:"Bearer "+r}}).then(()=>{alert("Recipe added to Meal Plan successfully."),a(3,M=null),a(2,O=null)}).catch(s=>{console.error("Error assigning recipe to Meal Plan:",s),alert("Could not add the recipe to the Meal Plan.")})}function L(){d.name=this.value,a(5,d)}function C(){d.ingredients=this.value,a(5,d)}function w(){d.calories=De(this.value),a(5,d)}const J=s=>Y(s),N=s=>V(s.id),U=s=>k(s.id),q=()=>a(3,M=null);function G(){O=Se(this),a(2,O),a(1,R)}return[m,R,O,M,b,d,g,V,Y,v,k,F,L,C,w,J,N,U,q,G,()=>a(3,M=null)]}class Xe extends je{constructor(n){super(),Ve(this,n,Fe,qe,Ne,{})}}export{Xe as component};
//# sourceMappingURL=5.DM_dROBp.js.map