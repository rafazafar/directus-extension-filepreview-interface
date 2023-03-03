import{defineComponent as e,ref as t,inject as i,computed as n,watch as l,openBlock as a,createElementBlock as s,createCommentVNode as r}from"vue";import{useApi as o}from"@directus/extensions-sdk";function d(e,t){return t?function(e,t){const i=new URLSearchParams(e.split("?")[1]||"");for(const[e,n]of Object.entries(t))i.set(e,n);return e.split("?")[0]+"?"+i}(e,{access_token:t}):e}var p=e({props:{value:{type:[String,Object],default:null},fileField:{type:String,default:""},assetsToken:{type:String,default:""},height:{type:String,default:"500px"}},emits:["input"],setup(e,{emit:a}){const s=o(),r=t(null),p=i("values"),c=t(!1),f=n((()=>r.value&&u.value.type?d(("video"===u.value.type?"":window.location.origin)+function(){const e=window.location.pathname.split("/"),t=e.indexOf("admin");return e.slice(0,t).join("/")+"/"}()+`assets/${r.value.id}.${u.value.stuff}`,e.assetsToken):null)),u=n((()=>{let e="",t="";if(!r.value)return{type:e,stuff:t};let i=r.value.filename_download,n=i.length;i.indexOf(".mp4")===n-4&&(e="video"),i.indexOf(".doc")!==n-4&&i.indexOf(".docx")!==n-5||(e="doc"),i.indexOf(".ppt")!==n-4&&i.indexOf(".pptx")!==n-5||(e="ppt"),i.indexOf(".pdf")===n-4&&(e="pdf");let l=i.split(".");return t=l[l.length-1]||"",{type:e,stuff:t}}));return l((()=>p.value),(t=>{t&&async function(){c.value=!0;try{let t=e.fileField&&p.value[e.fileField]?p.value[e.fileField]:"";if(!t)return;const i=await s.get(`/files/${t}`,{params:{fields:["id","title","width","height","filesize","type","filename_download"]}});r.value=i.data.data}catch(e){console.log(e)}finally{c.value=!1}}()}),{immediate:!0}),{file:r,loading:c,previewFileType:u,src:f}}});const c={class:"file-preview"},f=["src"],u=["src"],v=["src","height"];var h=[],m=[];!function(e,t){if(e&&"undefined"!=typeof document){var i,n=!0===t.prepend?"prepend":"append",l=!0===t.singleTag,a="string"==typeof t.container?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(l){var s=h.indexOf(a);-1===s&&(s=h.push(a)-1,m[s]={}),i=m[s]&&m[s][n]?m[s][n]:m[s][n]=r()}else i=r();65279===e.charCodeAt(0)&&(e=e.substring(1)),i.styleSheet?i.styleSheet.cssText+=e:i.appendChild(document.createTextNode(e))}function r(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),t.attributes)for(var i=Object.keys(t.attributes),l=0;l<i.length;l++)e.setAttribute(i[l],t.attributes[i[l]]);var s="prepend"===n?"afterbegin":"beforeend";return a.insertAdjacentElement(s,e),e}}("\n.file-preview video[data-v-64969d30] {\n  display: block;\n  margin: 0 auto;\n  z-index: 1;\n  width: 100%;\n}\n.file-preview iframe[data-v-64969d30] {\n  width: 100%;\n  min-height: 500px;\n}\n",{}),p.render=function(e,t,i,n,l,o){return a(),s("div",c,[["video"].includes(e.previewFileType.type)?(a(),s("video",{key:0,controls:"",src:e.src,alt:"",role:"presentation"},null,8,f)):r("v-if",!0),["doc","ppt"].includes(e.previewFileType.type)?(a(),s("iframe",{key:1,src:`https://view.officeapps.live.com/op/view.aspx?src=${e.src}`,frameborder:"0"},null,8,u)):r("v-if",!0),["pdf"].includes(e.previewFileType.type)?(a(),s("iframe",{key:2,src:e.src,frameborder:"0",height:e.height},null,8,v)):r("v-if",!0)])},p.__scopeId="data-v-64969d30",p.__file="src/interface.vue";var y={id:"file-preview",name:"File Preview",description:"Preview single file for doc, docx, pdf, jpg, png . Uses a static access token to fetch the file.",icon:"text_fields",component:p,types:["string"],group:"presentation",relational:!0,options:()=>[{field:"fileField",name:"File Field",type:"string",meta:{width:"full",interface:"input",options:{placeholder:"Enter the file field name to be displayed"}}},{field:"height",name:"Field Height",type:"string",meta:{width:"full",interface:"input",note:"Optional height in px. Default is 500px",options:{placeholder:"500px"}}},{field:"assetsToken",name:"Static Access Token",type:"string",meta:{note:"Static access token is appended to the assets' URL",width:"full",interface:"input",placeholder:"A static access token with read access to the assets"}}]};export{y as default};
