import{d as u,e as n,s,f as r,t as a,o as l,_ as c}from"./index-d7a8f7eb.js";const d=["innerHTML"],m=["textContent"],f=["textContent"],k=u({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(p){const o=p;return(e,t)=>e.noteHtml?(l(),n("div",{key:0,class:s(["prose overflow-auto outline-none",o.class]),onClick:t[0]||(t[0]=i=>e.$emit("click")),innerHTML:e.noteHtml},null,10,d)):e.note?(l(),n("div",{key:1,class:s(["prose overflow-auto outline-none",o.class]),onClick:t[1]||(t[1]=i=>e.$emit("click"))},[r("p",{textContent:a(e.note)},null,8,m)],2)):(l(),n("div",{key:2,class:s(["prose overflow-auto outline-none opacity-50 italic",o.class]),onClick:t[2]||(t[2]=i=>e.$emit("click"))},[r("p",{textContent:a(o.placeholder||"No notes.")},null,8,f)],2))}}),C=c(k,[["__file","/Users/lwj/密码学/组会汇报/test/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{C as N};
