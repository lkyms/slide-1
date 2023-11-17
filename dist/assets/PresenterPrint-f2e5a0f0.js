import{d as u,u as _,a as d,c as m,b as p,r as h,e as a,f as t,t as o,g as r,F as f,h as g,n as v,i as x,o as n,j as y,k as b,l as N,m as k,_ as w}from"./index-d7a8f7eb.js";import{N as P}from"./NoteDisplay-c15edfed.js";const B={class:"m-4"},C={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},S={class:"text-lg"},T={class:"font-bold flex gap-2"},j={class:"opacity-50"},A=t("div",{class:"flex-auto"},null,-1),D={key:0,class:"border-gray-400/50 mb-8"},F=u({__name:"PresenterPrint",setup(H){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),d({title:`Notes - ${m.title}`});const i=p(()=>h.map(s=>{var l;return(l=s.meta)==null?void 0:l.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,l)=>(n(),a("div",{id:"page-root",style:v(r(x))},[t("div",B,[t("div",C,[t("h1",V,o(r(m).title),1),t("div",L,o(new Date().toLocaleString()),1)]),(n(!0),a(f,null,g(i.value,(e,c)=>(n(),a("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",S,[t("div",T,[t("div",j,o(e==null?void 0:e.no)+"/"+o(r(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),A])]),N(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(n(),a("hr",D)):k("v-if",!0)]))),128))])],4))}}),M=w(F,[["__file","/Users/lwj/密码学/组会汇报/test/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{M as default};
