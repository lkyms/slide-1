import{o as i,e as m,f as e,d as T,b,p as $,q as h,s as k,_ as L,v as y,w as D,x as E,c as B,a as I,y as R,z as N,A as U,B as j,C as q,D as O,E as W,G,H as J,I as K,J as Q,K as X,L as Y,M as ee,N as te,g as t,O as se,l as o,t as oe,n as p,i as M,P as V,S as A,m as C,Q as ne,R as H,T as P,U as le,j as ae,V as S,W as ie,X as re,F as ce,Y as ue,Z as de,$ as _e,a0 as me,a1 as ve,a2 as pe,a3 as he}from"./index-d7a8f7eb.js";import{N as fe}from"./NoteDisplay-c15edfed.js";import ge from"./DrawingControls-7747c095.js";const xe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},we=e("path",{fill:"currentColor",d:"M8 12h10v2H8z"},null,-1),ye=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),Ce=[we,ye];function Se(l,r){return i(),m("svg",xe,[...Ce])}const be={name:"carbon-zoom-out",render:Se},$e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ke=e("path",{fill:"currentColor",d:"M18 12h-4V8h-2v4H8v2h4v4h2v-4h4v-2z"},null,-1),ze=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9Z"},null,-1),Be=[ke,ze];function Ne(l,r){return i(),m("svg",$e,[...Be])}const Me={name:"carbon-zoom-in",render:Ne},Ve={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Ae=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),He=[Ae];function Pe(l,r){return i(),m("svg",Ve,[...He])}const Te={name:"carbon-renew",render:Pe},Le={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Fe=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Ze=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),De=[Fe,Ze];function Ee(l,r){return i(),m("svg",Le,[...De])}const Ie={name:"carbon-time",render:Ee},Re="/assets/logo-title-horizontal-96c3c915.png",Ue=T({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(l){const r=l,g=b(()=>{var c,u,n;return(n=(u=(c=$.value)==null?void 0:c.meta)==null?void 0:u.slide)==null?void 0:n.note}),x=b(()=>{var c,u,n;return(n=(u=(c=$.value)==null?void 0:c.meta)==null?void 0:u.slide)==null?void 0:n.noteHTML});return(c,u)=>(i(),h(fe,{class:k(r.class),note:g.value,"note-html":x.value},null,8,["class","note","note-html"]))}}),je=L(Ue,[["__file","/Users/lwj/密码学/组会汇报/test/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=l=>(me("data-v-574fd206"),l=l(),ve(),l),qe={class:"bg-main h-full slidev-presenter"},Oe={class:"grid-section top flex"},We=f(()=>e("img",{src:Re,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"},alt:"Slidev logo"},null,-1)),Ge=f(()=>e("div",{class:"flex-auto"},null,-1)),Je={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},Ke=f(()=>e("div",{class:"context"}," current ",-1)),Qe=f(()=>e("div",{class:"context"}," next ",-1)),Xe={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Ye={class:"border-t border-main py-1 px-2 text-sm"},et={class:"grid-section bottom"},tt={class:"progress-bar"},st=T({__name:"Presenter",setup(l){const r=y();D(),E(r);const g=B.titleTemplate.replace("%s",B.title||"Slidev");I({title:`Presenter - ${g}`}),y(!1);const{timer:x,resetTimer:c}=R(),u=y([]),n=b(()=>N.value<U.value?{route:$.value,clicks:N.value+1}:j.value?{route:q.value,clicks:0}:null);return O(),W(()=>{const z=r.value.querySelector("#slide-content"),s=G(J()),w=K();Q(()=>{if(!w.value||Y.value||!ee.value)return;const d=z.getBoundingClientRect(),_=(s.x-d.left)/d.width*100,v=(s.y-d.top)/d.height*100;if(!(_<0||_>100||v<0||v>100))return{x:_,y:v}},d=>{X.cursor=d})}),(z,s)=>{const w=Ie,d=Te,_=te("HiddenText"),v=Me,F=be;return i(),m(ce,null,[e("div",qe,[e("div",{class:k(["grid-container",`layout${t(se)}`])},[e("div",Oe,[We,Ge,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:s[0]||(s[0]=(...a)=>t(c)&&t(c)(...a))},[o(w,{class:"absolute"}),o(d,{class:"absolute opacity-0"})]),e("div",Je,oe(t(x)),1)]),e("div",{ref_key:"main",ref:r,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:p(t(M))},[o(A,{key:"main",class:"h-full w-full"},{default:V(()=>[o(ue,{"render-context":"presenter"})]),_:1}),Ke],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:p(t(M))},[n.value?(i(),h(A,{key:"next",class:"h-full w-full"},{default:V(()=>{var a;return[o(t(_e),{is:(a=n.value.route)==null?void 0:a.component,"clicks-elements":u.value,"onUpdate:clicksElements":s[1]||(s[1]=Z=>u.value=Z),clicks:n.value.clicks,"clicks-disabled":!1,class:k(t(de)(n.value.route)),route:n.value.route,"render-context":"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):C("v-if",!0),Qe],4),C(" Notes "),(i(),m("div",Xe,[(i(),h(je,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:p({fontSize:`${t(ne)}em`})},null,8,["style"])),e("div",Ye,[e("button",{class:"slidev-icon-btn",onClick:s[2]||(s[2]=(...a)=>t(H)&&t(H)(...a))},[o(_,{text:"Increase font size"}),o(v)]),e("button",{class:"slidev-icon-btn",onClick:s[3]||(s[3]=(...a)=>t(P)&&t(P)(...a))},[o(_,{text:"Decrease font size"}),o(F)]),C("v-if",!0)])])),e("div",et,[o(pe,{persist:!0})]),(i(),h(ge,{key:2}))],2),e("div",tt,[e("div",{class:"progress h-2px bg-primary transition-all",style:p({width:`${(t(le)-1)/(t(ae)-1)*100}%`})},null,4)])]),o(he),o(re,{modelValue:t(S),"onUpdate:modelValue":s[5]||(s[5]=a=>ie(S)?S.value=a:null)},null,8,["modelValue"])],64)}}});const at=L(st,[["__scopeId","data-v-574fd206"],["__file","/Users/lwj/密码学/组会汇报/test/node_modules/@slidev/client/internals/Presenter.vue"]]);export{at as default};