import{r as s,_ as j,j as d}from"./index-4f7196ad.js";import{F as x}from"./list-66886101.js";import{S as F,d as L,L as _,n as h}from"./index-103b99c7.js";import{I}from"./ImageListitem-9158f7c1.js";const A=({toext:m})=>{const{UploadedFiles:a,ConvertedFileData:o,setConvertedFileData:c,zipStatus:u,setZipStatus:f}=s.useContext(x),[g,p]=s.useState(!1);//! else if the conversion fails then update the error to ConvertedFileData state
function w(e){const t=window.Jimp,n=new FileReader;n.readAsDataURL(e.filedata),n.addEventListener("load",async()=>{try{(await t.read(n.result)).quality(100).getBase64(t.MIME_JPEG,(r,l)=>{if(r){console.error(r);return}else{const v={uuid:e.uuid,src:l,name:h(e.filedata.name,m)};c(E=>[...E,v]),console.log("converted "+e.filedata.name+" to "+m)}})}catch(i){const r={uuid:e.uuid,error:!0,name:e.filedata.name};c(l=>[...l,r]),console.log("error converting "+e.filedata.name),console.log(i)}})}//! If the file has already been converted avoid converting the files again (incase of a rerender).
return s.useEffect(()=>{function e(){for(const t of a){const n=i=>i.uuid===t.uuid;o.some(n)?console.log("data exists for"+t.filedata.name):w(t)}}window.Jimp==null?j(()=>import("./jimp-8bd9b012.js"),[]).then(()=>{console.log("jimp loaded"),e()}):(console.log("jimp already  loaded"),e())},[a]),s.useEffect(()=>{F({arg1:a.length,arg2:o.length,setLoading:p})},[a,o]),s.useEffect(()=>{u&&(L(o),setTimeout(()=>{f(!1)},500))},[u]),d.jsx(d.Fragment,{children:g?d.jsx(_,{num:a.length}):o.map(e=>d.jsx(I,{file:e},e.uuid))})};export{A as default};
