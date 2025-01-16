import{a as P,c as s}from"/build/_shared/chunk-GDTPOMCR.js";import"/build/_shared/chunk-GQRCYSNN.js";import{c as p,g as c}from"/build/_shared/chunk-BPBRR6VT.js";import{a as u,b as m}from"/build/_shared/chunk-IIPLVG3T.js";import{d as f,f as y,g as d}from"/build/_shared/chunk-DLUJ32DX.js";var O=f(y()),F=f(P());var o=f(d());function x({product:e}){let l=e.price.toLocaleString("tr-TR",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2});return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("section",{className:"overflow-hidden bg-white rounded-xl shadow:md hover:shadow-lg w-96 ",children:(0,o.jsx)(p,{to:`/products/${e.code}`,children:(0,o.jsxs)("div",{className:"my-8 mx-8",children:[(0,o.jsx)("button",{type:"button",className:"relative inline-flex items-center p-3 text-sm font-large text-center text-white rounded-xl ",children:(0,o.jsx)("div",{className:`absolute inline-flex items-center justify-center w-12 h-12 text-m font-bold text-white \r
            bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900`,children:`% ${e.dropRatio}`})}),(0,o.jsx)("img",{className:"rounded mx-auto d-block w-60 my-5",src:e.imageUrl,alt:e.name}),(0,o.jsx)("hr",{}),(0,o.jsxs)("div",{className:"flex flex-col mt-2 p-4",children:[(0,o.jsx)("h3",{className:"text-s font-bold text-gray-500 my-5",children:e.name}),(0,o.jsxs)("p",{className:"font-bold text-gray-700",children:[(0,o.jsx)("span",{className:"text-lg",children:l.split(",")[0]}),(0,o.jsxs)("span",{className:"text-sm",children:[l.split(",")[1]," TL"]}),(0,o.jsxs)("div",{className:"flex items-center",children:[(0,o.jsx)("p",{className:"font-bold text-gray-400",children:`${e.countOfPrices} sat\u0131c\u0131`}),(0,o.jsx)(s,{className:"ml-2"})]})]}),(0,o.jsx)("p",{className:"font-bold text-gray-400 mt-5",children:e.followCount!==void 0?`${e.followCount}+ takip`:""})]})]})})})})}var t=f(d());function i({product:e}){let l=e.price.toLocaleString("tr-TR",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2});return(0,t.jsx)("div",{className:"p-6 flex flex-col items-center justify-center text-center",style:{width:"100%",maxWidth:"400px",margin:"auto"},children:(0,t.jsx)(p,{to:`/products/${e.code}`,children:(0,t.jsxs)("div",{className:"flex flex-col items-center gap-4",children:[(0,t.jsxs)("div",{className:"relative w-60 h-60 flex items-center justify-center",children:[(0,t.jsx)("div",{className:`absolute inline-flex items-center justify-center w-12 h-12 text-m font-bold text-white \r
              bg-red-500 border-2 border-white rounded-full -top-2 -right-2`,children:`% ${e.dropRatio}`}),(0,t.jsx)("img",{className:"rounded object-cover w-full h-full",src:e.imageUrl,alt:e.name})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("h3",{className:"text-lg font-bold text-gray-700",children:e.name}),(0,t.jsxs)("p",{className:"font-bold text-gray-700",children:[(0,t.jsx)("span",{className:"text-2xl",children:l.split(",")[0]}),(0,t.jsxs)("span",{className:"text-lg",children:[",",l.split(",")[1]," TL"]})]}),(0,t.jsxs)("div",{className:"flex items-center justify-center gap-2",children:[(0,t.jsx)("p",{className:"text-gray-500 font-medium",children:`${e.countOfPrices} sat\u0131c\u0131`}),(0,t.jsx)(s,{className:"text-gray-500"})]}),e.followCount!==void 0&&(0,t.jsx)("p",{className:"text-gray-500 font-medium",children:`${e.followCount}+ takip`})]})]})})})}var w=f(d()),T=u((0,w.jsx)("path",{d:"m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7z"}),"East");var R=f(d()),S=u((0,R.jsx)("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");var r=f(d());function g(){let{horizontalProducts:e,products:n}=c(),[l,h]=(0,O.useState)(0),C=()=>{h(a=>a===0?e.length-1:a-1)},A=()=>{h(a=>a===e.length-1?0:a+1)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{style:{position:"relative",width:"100%",maxWidth:"1018px",margin:"auto",overflow:"hidden",backgroundColor:"#f9f9f9",borderRadius:"10px",padding:"20px",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.1)",marginTop:"10px"},children:[(0,r.jsx)("div",{style:{display:"flex",transition:"transform 0.5s ease-in-out",transform:`translateX(-${l*100}%)`,width:`${e.length*25}%`,height:"100%"},children:e.map((a,b)=>(0,r.jsx)("div",{style:{flex:"0 0 100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",height:"100%"},children:(0,r.jsx)(i,{product:a})},a.code))}),(0,r.jsx)(m,{onClick:C,style:{position:"absolute",top:"48%",left:"10px",zIndex:1e3,width:"2rem"},"aria-label":"previous",children:(0,r.jsx)(S,{})}),(0,r.jsx)(m,{onClick:A,style:{position:"absolute",top:"50%",right:"10px",zIndex:1e3,width:"2rem"},"aria-label":"next",children:(0,r.jsx)(T,{})})]}),(0,r.jsx)("div",{className:"grid grid-cols-2 gap-6 px-4 mt-8 md:px-12 lg:px-6 xl:px-4 xl:gap-6 2xl:px-24 2xl:gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-2",children:n.map(a=>(0,r.jsx)(x,{product:a},a.code))})]})}export{g as default};