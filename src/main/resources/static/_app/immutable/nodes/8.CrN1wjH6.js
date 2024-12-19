import{s as Se,n as De,r as Re,c as Ye,o as Ge}from"../chunks/scheduler.KmlgN0bi.js";import{S as Je,i as Ke,b as f,s as b,t as oe,e as Ve,c,g as j,h as C,f as g,d as u,n as ie,j as a,a as k,k as n,l as K,m as Q,o as ue,q as Qe}from"../chunks/index.mX1UHVfl.js";import{e as He}from"../chunks/each.D6YF6ztN.js";import{a as ye}from"../chunks/axios.CCb-kr4I.js";import{j as We}from"../chunks/store.DX7lDXQD.js";function Me(l,t,s){const r=l.slice();return r[4]=t[s],r}function ze(l){let t,s;return{c(){t=f("div"),s=oe(l[2]),this.h()},l(r){t=c(r,"DIV",{class:!0});var d=g(t);s=ie(d,l[2]),d.forEach(u),this.h()},h(){a(t,"class","alert alert-danger")},m(r,d){k(r,t,d),n(t,s)},p(r,d){d&4&&ue(s,r[2])},d(r){r&&u(t)}}}function je(l){let t,s="Cancel",r,d;return{c(){t=f("button"),t.textContent=s,this.h()},l(o){t=c(o,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),j(t)!=="svelte-1jw19kd"&&(t.textContent=s),this.h()},h(){a(t,"type","button"),a(t,"class","btn btn-secondary ms-2")},m(o,m){k(o,t,m),r||(d=Q(t,"click",l[8]),r=!0)},p:De,d(o){o&&u(t),r=!1,d()}}}function Oe(l){let t,s='<span class="visually-hidden">Loading...</span>';return{c(){t=f("div"),t.innerHTML=s,this.h()},l(r){t=c(r,"DIV",{class:!0,role:!0,"data-svelte-h":!0}),j(t)!=="svelte-gq0gie"&&(t.innerHTML=s),this.h()},h(){a(t,"class","spinner-border text-primary"),a(t,"role","status")},m(r,d){k(r,t,d)},d(r){r&&u(t)}}}function qe(l){let t,s,r=l[4].name+"",d,o,m,_=l[4].email+"",w,S,O,E=(l[4].preferences||"N/A")+"",q,B,y,V,G="Edit",U,H,z="Delete",h,T,W;function re(){return l[13](l[4])}function M(){return l[14](l[4])}return{c(){t=f("tr"),s=f("td"),d=oe(r),o=b(),m=f("td"),w=oe(_),S=b(),O=f("td"),q=oe(E),B=b(),y=f("td"),V=f("button"),V.textContent=G,U=b(),H=f("button"),H.textContent=z,h=b(),this.h()},l(F){t=c(F,"TR",{});var p=g(t);s=c(p,"TD",{});var R=g(s);d=ie(R,r),R.forEach(u),o=C(p),m=c(p,"TD",{});var ne=g(m);w=ie(ne,_),ne.forEach(u),S=C(p),O=c(p,"TD",{});var x=g(O);q=ie(x,E),x.forEach(u),B=C(p),y=c(p,"TD",{});var N=g(y);V=c(N,"BUTTON",{class:!0,"data-svelte-h":!0}),j(V)!=="svelte-iiwyyv"&&(V.textContent=G),U=C(N),H=c(N,"BUTTON",{class:!0,"data-svelte-h":!0}),j(H)!=="svelte-1irvc8p"&&(H.textContent=z),N.forEach(u),h=C(p),p.forEach(u),this.h()},h(){a(V,"class","btn btn-warning btn-sm"),a(H,"class","btn btn-danger btn-sm ms-2")},m(F,p){k(F,t,p),n(t,s),n(s,d),n(t,o),n(t,m),n(m,w),n(t,S),n(t,O),n(O,q),n(t,B),n(t,y),n(y,V),n(y,U),n(y,H),n(t,h),T||(W=[Q(V,"click",re),Q(H,"click",M)],T=!0)},p(F,p){l=F,p&1&&r!==(r=l[4].name+"")&&ue(d,r),p&1&&_!==(_=l[4].email+"")&&ue(w,_),p&1&&E!==(E=(l[4].preferences||"N/A")+"")&&ue(q,E)},d(F){F&&u(t),T=!1,Re(W)}}}function Fe(l){let t,s="No users available.";return{c(){t=f("p"),t.textContent=s},l(r){t=c(r,"P",{"data-svelte-h":!0}),j(t)!=="svelte-1hgwweq"&&(t.textContent=s)},m(r,d){k(r,t,d)},d(r){r&&u(t)}}}function Xe(l){let t,s="User Management",r,d,o,m,_,w,S="Name",O,E,q,B,y,V="Email",G,U,H,z,h,T,W="Password",re,M,F,p,R,ne="Preferences",x,N,we,J,ae=l[1]?"Update User":"Add User",fe,Ue,ce,de,he,$,X,Le="All Users",pe,Y,ee,ge="<tr><th>Name</th> <th>Email</th> <th>Preferences</th> <th>Actions</th></tr>",Te,te,me,le,Ae,Be,D=l[2]&&ze(l),L=l[1]&&je(l),I=l[3]&&Oe(),se=He(l[0]),A=[];for(let e=0;e<se.length;e+=1)A[e]=qe(Me(l,se,e));let P=l[0].length===0&&!l[3]&&Fe();return{c(){t=f("h1"),t.textContent=s,r=b(),D&&D.c(),d=b(),o=f("form"),m=f("div"),_=f("div"),w=f("label"),w.textContent=S,O=b(),E=f("input"),q=b(),B=f("div"),y=f("label"),y.textContent=V,G=b(),U=f("input"),H=b(),z=f("div"),h=f("div"),T=f("label"),T.textContent=W,re=b(),M=f("input"),F=b(),p=f("div"),R=f("label"),R.textContent=ne,x=b(),N=f("input"),we=b(),J=f("button"),fe=oe(ae),Ue=b(),L&&L.c(),ce=b(),de=f("hr"),he=b(),I&&I.c(),$=b(),X=f("h2"),X.textContent=Le,pe=b(),Y=f("table"),ee=f("thead"),ee.innerHTML=ge,Te=b(),te=f("tbody");for(let e=0;e<A.length;e+=1)A[e].c();me=b(),P&&P.c(),le=Ve(),this.h()},l(e){t=c(e,"H1",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-9mzzxm"&&(t.textContent=s),r=C(e),D&&D.l(e),d=C(e),o=c(e,"FORM",{class:!0});var i=g(o);m=c(i,"DIV",{class:!0});var v=g(m);_=c(v,"DIV",{class:!0});var Z=g(_);w=c(Z,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),j(w)!=="svelte-17mpp60"&&(w.textContent=S),O=C(Z),E=c(Z,"INPUT",{type:!0,id:!0,class:!0,placeholder:!0}),Z.forEach(u),q=C(v),B=c(v,"DIV",{class:!0});var _e=g(B);y=c(_e,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),j(y)!=="svelte-7zanfm"&&(y.textContent=V),G=C(_e),U=c(_e,"INPUT",{type:!0,id:!0,class:!0,placeholder:!0}),_e.forEach(u),v.forEach(u),H=C(i),z=c(i,"DIV",{class:!0});var ve=g(z);h=c(ve,"DIV",{class:!0});var be=g(h);T=c(be,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),j(T)!=="svelte-tyrfrg"&&(T.textContent=W),re=C(be),M=c(be,"INPUT",{type:!0,id:!0,class:!0,placeholder:!0}),be.forEach(u),F=C(ve),p=c(ve,"DIV",{class:!0});var Ce=g(p);R=c(Ce,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),j(R)!=="svelte-1vw6fvm"&&(R.textContent=ne),x=C(Ce),N=c(Ce,"INPUT",{type:!0,id:!0,class:!0,placeholder:!0}),Ce.forEach(u),ve.forEach(u),we=C(i),J=c(i,"BUTTON",{type:!0,class:!0});var Ie=g(J);fe=ie(Ie,ae),Ie.forEach(u),Ue=C(i),L&&L.l(i),i.forEach(u),ce=C(e),de=c(e,"HR",{}),he=C(e),I&&I.l(e),$=C(e),X=c(e,"H2",{"data-svelte-h":!0}),j(X)!=="svelte-uy9p0r"&&(X.textContent=Le),pe=C(e),Y=c(e,"TABLE",{class:!0});var Ee=g(Y);ee=c(Ee,"THEAD",{"data-svelte-h":!0}),j(ee)!=="svelte-1isxlvj"&&(ee.innerHTML=ge),Te=C(Ee),te=c(Ee,"TBODY",{});var Pe=g(te);for(let Ne=0;Ne<A.length;Ne+=1)A[Ne].l(Pe);Pe.forEach(u),Ee.forEach(u),me=C(e),P&&P.l(e),le=Ve(),this.h()},h(){a(t,"class","mt-3"),a(w,"for","name"),a(w,"class","form-label"),a(E,"type","text"),a(E,"id","name"),a(E,"class","form-control"),a(E,"placeholder","Enter user name"),a(_,"class","col"),a(y,"for","email"),a(y,"class","form-label"),a(U,"type","email"),a(U,"id","email"),a(U,"class","form-control"),a(U,"placeholder","Enter user email"),a(B,"class","col"),a(m,"class","row mb-3"),a(T,"for","password"),a(T,"class","form-label"),a(M,"type","password"),a(M,"id","password"),a(M,"class","form-control"),a(M,"placeholder","Enter user password"),a(h,"class","col"),a(R,"for","preferences"),a(R,"class","form-label"),a(N,"type","text"),a(N,"id","preferences"),a(N,"class","form-control"),a(N,"placeholder","e.g., Vegetarian, Fitness"),a(p,"class","col"),a(z,"class","row mb-3"),a(J,"type","button"),a(J,"class","btn btn-primary"),a(o,"class","mb-5"),a(Y,"class","table")},m(e,i){k(e,t,i),k(e,r,i),D&&D.m(e,i),k(e,d,i),k(e,o,i),n(o,m),n(m,_),n(_,w),n(_,O),n(_,E),K(E,l[4].name),n(m,q),n(m,B),n(B,y),n(B,G),n(B,U),K(U,l[4].email),n(o,H),n(o,z),n(z,h),n(h,T),n(h,re),n(h,M),K(M,l[4].password),n(z,F),n(z,p),n(p,R),n(p,x),n(p,N),K(N,l[4].preferences),n(o,we),n(o,J),n(J,fe),n(o,Ue),L&&L.m(o,null),k(e,ce,i),k(e,de,i),k(e,he,i),I&&I.m(e,i),k(e,$,i),k(e,X,i),k(e,pe,i),k(e,Y,i),n(Y,ee),n(Y,Te),n(Y,te);for(let v=0;v<A.length;v+=1)A[v]&&A[v].m(te,null);k(e,me,i),P&&P.m(e,i),k(e,le,i),Ae||(Be=[Q(E,"input",l[9]),Q(U,"input",l[10]),Q(M,"input",l[11]),Q(N,"input",l[12]),Q(J,"click",l[5])],Ae=!0)},p(e,[i]){if(e[2]?D?D.p(e,i):(D=ze(e),D.c(),D.m(d.parentNode,d)):D&&(D.d(1),D=null),i&16&&E.value!==e[4].name&&K(E,e[4].name),i&16&&U.value!==e[4].email&&K(U,e[4].email),i&16&&M.value!==e[4].password&&K(M,e[4].password),i&16&&N.value!==e[4].preferences&&K(N,e[4].preferences),i&2&&ae!==(ae=e[1]?"Update User":"Add User")&&ue(fe,ae),e[1]?L?L.p(e,i):(L=je(e),L.c(),L.m(o,null)):L&&(L.d(1),L=null),e[3]?I||(I=Oe(),I.c(),I.m($.parentNode,$)):I&&(I.d(1),I=null),i&193){se=He(e[0]);let v;for(v=0;v<se.length;v+=1){const Z=Me(e,se,v);A[v]?A[v].p(Z,i):(A[v]=qe(Z),A[v].c(),A[v].m(te,null))}for(;v<A.length;v+=1)A[v].d(1);A.length=se.length}e[0].length===0&&!e[3]?P||(P=Fe(),P.c(),P.m(le.parentNode,le)):P&&(P.d(1),P=null)},i:De,o:De,d(e){e&&(u(t),u(r),u(d),u(o),u(ce),u(de),u(he),u($),u(X),u(pe),u(Y),u(me),u(le)),D&&D.d(e),L&&L.d(),I&&I.d(e),Qe(A,e),P&&P.d(e),Ae=!1,Re(Be)}}}const ke="http://localhost:8080/api/user";function Ze(l,t,s){let r;Ye(l,We,h=>s(15,r=h));let d=[],o={name:"",email:"",password:"",preferences:""},m=null,_="",w=!1;async function S(){s(3,w=!0),s(2,_="");try{const h=await ye.get(ke,{headers:{Authorization:"Bearer "+r}});s(0,d=h.data)}catch(h){s(2,_="Could not fetch users."),console.error("Error fetching users:",h)}finally{s(3,w=!1)}}async function O(){if(!o.name||!o.email){s(2,_="Name and Email are required.");return}try{m?(await ye.put(`${ke}/${m}`,o,{headers:{Authorization:"Bearer "+r}}),alert("User updated successfully.")):(await ye.post(ke,o,{headers:{Authorization:"Bearer "+r}}),alert("User added successfully.")),B(),S()}catch(h){s(2,_="Could not save user."),console.error("Error saving user:",h)}}async function E(h){try{await ye.delete(`${ke}/${h}`,{headers:{Authorization:"Bearer "+r}}),alert("User deleted successfully."),S()}catch(T){s(2,_="Could not delete user."),console.error("Error deleting user:",T)}}function q(h){const T=d.find(W=>W.id===h);T&&(s(4,o={...T}),s(1,m=h))}function B(){s(4,o={name:"",email:"",password:"",preferences:""}),s(1,m=null),s(2,_="")}Ge(()=>{S()});function y(){o.name=this.value,s(4,o)}function V(){o.email=this.value,s(4,o)}function G(){o.password=this.value,s(4,o)}function U(){o.preferences=this.value,s(4,o)}return[d,m,_,w,o,O,E,q,B,y,V,G,U,h=>q(h.id),h=>E(h.id)]}class st extends Je{constructor(t){super(),Ke(this,t,Ze,Xe,Se,{})}}export{st as component};
//# sourceMappingURL=8.CrN1wjH6.js.map