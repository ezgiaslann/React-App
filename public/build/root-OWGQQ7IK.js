import{a as B}from"/build/_shared/chunk-GQRCYSNN.js";import{a as n,b as o,c as z,d,e as p,f as u,h as x,j as s}from"/build/_shared/chunk-BPBRR6VT.js";import{d as h,g as i}from"/build/_shared/chunk-DLUJ32DX.js";var M=h(i());function e(){let a=new Date().getFullYear();return(0,M.jsxs)("div",{className:"py-4 mt-5 text-sm text-center text-gray-200 bg-gray-800",children:["\xA9 Akak\xE7e ",a]})}function m(a){return B({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z"}}]})(a)}var r=h(i());function l(){return(0,r.jsxs)("nav",{className:"flex items-center justify-between px-8 pt-2",children:[(0,r.jsx)("div",{className:"font-mono text-3xl font-extrabold uppercase",children:(0,r.jsx)(z,{to:"/",children:(0,r.jsx)("img",{className:"w-28",src:"/logo1.svg",alt:"akakce"})})}),(0,r.jsx)("div",{className:"space-x-4",children:[{label:"\xDCr\xFCnler",url:"/products"},{label:"Hakk\u0131nda",url:"/about"}].map((g,f)=>(0,r.jsx)(o,{to:g.url,className:"navlink",children:g.label},f))}),(0,r.jsx)("div",{className:"font-semibold text-gray-600 hover:text-emerald-500",children:(0,r.jsxs)(o,{to:"/checkout",className:"inline-flex items-center space-x-1 transition-colors duration-300",children:[(0,r.jsx)(m,{className:"text-xl"})," ",(0,r.jsx)("span",{children:"0"})]})})]})}var c=h(i());function v({children:a}){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("header",{className:"border-b",children:(0,c.jsx)(l,{})}),(0,c.jsx)("main",{className:"container flex-grow mx-auto",children:a}),(0,c.jsx)(e,{})]})}var H="/build/_assets/app-LFHN4LFS.css";var t=h(i());function A(){return[{rel:"stylesheet",href:H}]}function C(){return{charset:"utf-8",title:"Remix StoreFront",viewport:"width=device-width,initial-scale=1"}}function V(){return(0,t.jsx)(w,{children:(0,t.jsxs)(v,{children:[(0,t.jsx)(n,{}),(0,t.jsx)(s,{}),(0,t.jsx)(u,{}),(0,t.jsx)(x,{})]})})}function w({children:a}){return(0,t.jsxs)("html",{lang:"en",children:[(0,t.jsxs)("head",{children:[(0,t.jsx)(p,{}),(0,t.jsx)(d,{})]}),(0,t.jsx)("body",{children:a})]})}function S({error:a}){return console.log(a),(0,t.jsx)(w,{children:(0,t.jsx)(v,{children:(0,t.jsxs)("div",{className:"text-red-500",children:[(0,t.jsx)("h1",{children:"Error"}),(0,t.jsx)("p",{children:a==null?void 0:a.message})]})})})}export{S as ErrorBoundary,V as default,A as links,C as meta};