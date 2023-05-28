import{n as u,e as d,t as n,l as c,o as m}from"./index.4b211680.js";import{a as v,e as f}from"./echarts.3a4b0d10.js";import{d as g,c as _}from"./file-system.7074f268.js";const y={name:"FileView",data(){return{tree:[],files:{html:"mdi-language-html5",js:"mdi-nodejs",json:"mdi-code-json",md:"mdi-language-markdown",pdf:"mdi-file-pdf",png:"mdi-file-image",txt:"mdi-file-document-outline",xls:"mdi-file-excel",vue:"mdi-vuejs"},items:[],cmEditor:null,sheet:!1,fileContent:`\u9009\u62E9\u4E00\u4E2A\u6587\u4EF6\u4EE5\u67E5\u770B\u5176\u5185\u5BB9

\u9009\u62E9\u6587\u4EF6\u540E\uFF0C\u53EF\u4EE5\u70B9\u51FB\u53F3\u4E0A\u89D2\u201D\u4EE3\u7801\u52A9\u624B\u201C\uFF0C\u4F7F\u7528JiHub\u8FDB\u884CAI\u4EE3\u7801\u8BCA\u65AD\u3001\u751F\u6210\u5355\u5143\u6D4B\u8BD5\u3001\u4E0B\u8F7D\u6587\u4EF6`,selectedText:"",fileTreeReady:!1,fileContentReady:!1}},inject:{user:{default:null},proj:{default:null},repo:{default:null},branchName:{default:null}},methods:{downloadStrAsFile:g,getFileExt(i,e){if(i.children===void 0)i.file="unknown",i.path=e+"/"+i.name,i.name.indexOf(".")!==-1&&(i.file=i.name.split(".").pop());else for(let t=0;t<i.children.length;t++)this.getFileExt(i.children[t],e+"/"+i.name)},file2style(){if(this.tree.length===0)return"null";let i=this.tree[0].file;return i==="html"?"htmlmixed":i==="js"||i==="json"?"javascript":i==="md"?"markdown":i==="vue"?"vue":i==="css"?"css":i==="xml"?"xml":i==="c"||i==="cpp"||i==="h"?"clike":i==="py"?"python":"null"},onCursorActivity(){this.selectedText=this.cmEditor.getSelection()},diagSelected(){if(this.selectedText.length>4096){this.$message({type:"error",message:"\u6587\u4EF6\u592A\u957F\u4E86\uFF0CAI\u4F1A\u7F62\u5DE5\u7684\uFF01"});return}if(this.selectedText.length<=10){this.$message({type:"error",message:"\u4EE3\u7801\u8FD9\u4E48\u77ED\uFF0C\u600E\u4E48\u8BCA\u65AD\u561B"});return}d.set("diag",this.selectedText),window.open("/user/ai/diagnosis","_blank")},diagWholeFile(){if(this.fileContent.length>4096){this.$message({type:"error",message:"\u6587\u4EF6\u592A\u957F\u4E86\uFF0CAI\u4F1A\u7F62\u5DE5\u7684\uFF01"});return}d.set("diag",this.fileContent),window.open("/user/ai/diagnosis","_blank")},unitTestSelected(){if(this.selectedText.length>4096){this.$message({type:"error",message:"\u6587\u4EF6\u592A\u957F\u4E86\uFF0CAI\u4F1A\u7F62\u5DE5\u7684\uFF01"});return}if(this.selectedText.length<=10){this.$message({type:"error",message:"\u4EE3\u7801\u8FD9\u4E48\u77ED\uFF0C\u600E\u4E48\u751F\u6210\u561B"});return}d.set("diag",this.selectedText),window.open("/user/ai/testdata","_blank")},unitTestWholeFile(){if(this.fileContent.length>4096){this.$message({type:"error",message:"\u6587\u4EF6\u592A\u957F\u4E86\uFF0CAI\u4F1A\u7F62\u5DE5\u7684\uFF01"});return}d.set("diag",this.fileContent),window.open("/user/ai/testdata","_blank")},getTopicColor:n.getDarkColor,getRadialGradient:n.getRadialGradient,getLinearGradient:n.getLinearGradient},created(){this.fileTreeReady=!1,c.post("/api/develop/getFileTree",{userId:this.user.id,projectId:this.proj.projectId,repoId:this.$route.params.repoid,branch:this.branchName}).then(i=>{if(i.data.errcode===0){console.log(i.data.data),this.items=i.data.data;for(let e=0;e<this.items.length;e++)this.getFileExt(this.items[e],"")}else alert("/api/develop/getFileTree errcode not 0: "+i.data.message)}).catch(i=>{alert("/api/develop/getFileTree error"+i),console.log(i)}).finally(()=>{this.fileTreeReady=!0})},watch:{tree(){console.log("selected file change!"),this.tree[0].file!==void 0&&(this.fileContentReady=!1,this.cmEditor.setValue(`\u6B63\u5728\u52AA\u529B\u62C9\u53D6\u6587\u4EF6\uFF01

\u9009\u62E9\u6587\u4EF6\u540E\uFF0C\u53EF\u4EE5\u70B9\u51FB\u53F3\u4E0A\u89D2\u201D\u4EE3\u7801\u52A9\u624B\u201C\uFF0C\u4F7F\u7528JiHub\u8FDB\u884CAI\u4EE3\u7801\u8BCA\u65AD\u3001\u751F\u6210\u5355\u5143\u6D4B\u8BD5\u3001\u4E0B\u8F7D\u6587\u4EF6`),this.cmEditor.setOption("mode",""),c.post("/api/develop/getContent",{userId:this.user.id,projectId:this.proj.projectId,repoId:this.$route.params.repoid,branch:this.branchName,path:this.tree[0].path}).then(i=>{i.data.errcode===0?(console.log(i.data.data),this.fileContent=i.data.data,this.cmEditor.setValue(this.fileContent),this.cmEditor.setOption("mode",this.file2style())):alert("/api/develop/getFileContent errcode not 0: "+i.data.message)}).catch(i=>{alert("/api/develop/getFileContent error"+i),console.log(i)}).finally(()=>{this.fileContentReady=!0}))}},mounted(){this.cmEditor=_.exports.fromTextArea(this.$refs.cm1,{theme:"idea",lineNumbers:!0,line:!0,readOnly:!0,lineWrapping:!0}),this.cmEditor.on("cursorActivity",this.onCursorActivity)}};var b=function(){var e=this,t=e._self._c;return t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"3"}},[t("h2",[e._v("\u6587\u4EF6\u6811")]),t("v-card",{staticClass:"overflow-y-auto",style:e.getLinearGradient(e.user.topic),attrs:{"min-height":"calc(100vh - 300px)","max-height":"calc(100vh - 300px)"}},[e.fileTreeReady?t("v-treeview",{attrs:{items:e.items,activatable:"",active:e.tree,"item-key":"name","open-on-click":"",dense:"","return-object":""},on:{"update:active":function(r){e.tree=r}},scopedSlots:e._u([{key:"prepend",fn:function({item:r,open:a}){return[r.file?t("v-icon",{attrs:{color:e.getTopicColor(e.user.topic)}},[e._v(" "+e._s(e.files[r.file]!==void 0?e.files[r.file]:"mdi-file-document")+" ")]):t("v-icon",{attrs:{color:e.getTopicColor(e.user.topic)}},[e._v(" "+e._s(a?"mdi-folder-open":"mdi-folder")+" ")])]}}],null,!1,2821907853)}):t("v-skeleton-loader",{staticClass:"mt-2",attrs:{type:"list-item-three-line@5"}})],1)],1),t("v-col",{attrs:{cols:"9"}},[t("h2",[t("v-scroll-y-transition",[t("span",[e._v(" "+e._s(e.fileTreeReady?e.tree.length===0?"\u8BF7\u9009\u62E9\u4E00\u4E2A\u6587\u4EF6":e.fileContentReady?"":"\u6B63\u5728\u52AA\u529B\u62C9\u53D6\u6587\u4EF6":"\u6587\u4EF6\u6811\u52A0\u8F7D\u4E2D\uFF0C\u7A0D\u4FAF...")+" ")])]),t("v-scroll-y-transition",[e.fileContentReady?t("a",{directives:[{name:"ripple",rawName:"v-ripple"}],style:"text-decoration: none; color: "+e.getTopicColor(e.user.topic),attrs:{href:"https://github.com/"+e.repo.user+"/"+e.repo.repo+"/blob/"+e.branchName+"/"+e.tree[0].path,target:"_blank"}},[e._v(" "+e._s(e.fileTreeReady?e.tree.length===0?"\u8BF7\u9009\u62E9\u4E00\u4E2A\u6587\u4EF6":e.fileContentReady?e.repo.repo+e.tree[0].path:"\u6B63\u5728\u52AA\u529B\u62C9\u53D6\u6587\u4EF6":"\u6587\u4EF6\u6811\u52A0\u8F7D\u4E2D\uFF0C\u7A0D\u4FAF...")+" ")]):e._e()]),e.fileContentReady?t("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticStyle:{float:"right"},style:"color: "+e.getTopicColor(e.user.topic),on:{click:function(r){e.sheet=!e.sheet}}},[e._v("\u4EE3\u7801\u52A9\u624B")]):e._e()],1),t("v-card",{attrs:{"max-height":"calc(100vh - 300px)","min-height":"calc(100vh - 300px)"}},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.fileContent,expression:"fileContent"}],ref:"cm1",staticStyle:{height:"calc(100vh - 300px)",width:"100%"},domProps:{value:e.fileContent},on:{input:function(r){r.target.composing||(e.fileContent=r.target.value)}}})])],1)],1),e.fileContentReady?t("v-bottom-sheet",{attrs:{inset:""},model:{value:e.sheet,callback:function(r){e.sheet=r},expression:"sheet"}},[t("v-card",{staticClass:"text-center"},[t("v-card-title",[e._v("\u4EE3\u7801\u52A9\u624B")]),t("v-card-text",[t("v-container",{attrs:{fluid:""}},[t("v-row",[t("v-spacer"),t("v-col",{attrs:{cols:"12",sm:"12",md:"10",lg:"6",xl:"6"}},[t("v-textarea",{staticClass:"need-mono",attrs:{label:"\u9009\u4E2D\u7684\u4EE3\u7801",outlined:"",rows:"20"},model:{value:e.selectedText,callback:function(r){e.selectedText=r},expression:"selectedText"}})],1),t("v-spacer")],1)],1)],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{width:"30rem",outlined:"",color:e.getTopicColor(e.user.topic)},on:{click:e.unitTestSelected}},[t("v-icon",[e._v("mdi-check")]),e._v("\u8BA9JiHub\u5BF9\u9009\u4E2D\u4EE3\u7801\u751F\u6210\u5355\u5143\u6D4B\u8BD5")],1),t("v-btn",{attrs:{width:"30rem",outlined:"",color:e.getTopicColor(e.user.topic)},on:{click:e.unitTestWholeFile}},[t("v-icon",[e._v("mdi-check")]),e._v("\u8BA9JiHub\u5BF9\u6574\u4E2A\u6587\u4EF6\u751F\u6210\u5355\u5143\u6D4B\u8BD5")],1),t("v-spacer")],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{width:"30rem",outlined:"",color:e.getTopicColor(e.user.topic)},on:{click:e.diagSelected}},[t("v-icon",[e._v("mdi-code-braces")]),e._v("\u8BA9JiHub\u8BCA\u65AD\u9009\u4E2D\u7684\u4EE3\u7801")],1),t("v-btn",{attrs:{width:"30rem",outlined:"",color:e.getTopicColor(e.user.topic)},on:{click:e.diagWholeFile}},[t("v-icon",[e._v("mdi-code-braces")]),e._v("\u8BA9JiHub\u8BCA\u65AD\u6574\u4E2A\u6587\u4EF6")],1),t("v-spacer")],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{width:"20rem",outlined:"",color:e.getTopicColor(e.user.topic),link:"",href:"https://github.com/"+e.repo.user+"/"+e.repo.repo+"/blob/"+e.branchName+"/"+e.tree[0].path,target:"_blank"}},[t("v-icon",[e._v("mdi-github")]),e._v("\u5728GitHub\u6D4F\u89C8")],1),t("v-btn",{attrs:{width:"20rem",outlined:"",color:e.getTopicColor(e.user.topic)},on:{click:()=>e.downloadStrAsFile(e.selectedText,e.user.name+"'s-clip-"+this.tree[0].name)}},[t("v-icon",[e._v("mdi-download")]),e._v("\u4E0B\u8F7D\u9009\u4E2D\u4EE3\u7801")],1),t("v-btn",{attrs:{width:"20rem",outlined:"",color:e.getTopicColor(e.user.topic)},on:{click:()=>e.downloadStrAsFile(e.fileContent,this.tree[0].name)}},[t("v-icon",[e._v("mdi-download")]),e._v("\u4E0B\u8F7D\u6574\u4E2A\u6587\u4EF6")],1),t("v-spacer")],1),t("v-row",{staticStyle:{height:"5rem"}})],1)],1):e._e()],1)},w=[],C=u(y,b,w,!1,null,null,null,null);const x=C.exports;const k={name:"Branch",components:{FileView:x},data(){return{tabs:null,projId:this.$route.params.projid,repoId:this.$route.params.repoid,branchName:this.$route.params.branchname,proj:null,repos:null,repo:null,branches:null,commitHistory:null,daily:{col:4,color:"#FFCDD2",title:"\u8FC7\u53BB\u4E09\u5341\u65E5\u5185\u7684\u63D0\u4EA4",label:[],data:[]},monthly:{col:4,color:"#B2EBF2",title:"\u8FC7\u53BB\u4E00\u5E74\u5185\u7684\u63D0\u4EA4",label:[],data:[]},yearly:{col:4,color:"#C8E6C9",title:"\u8FC7\u53BB\u5341\u5E74\u5185\u7684\u63D0\u4EA4",label:[],data:[]},perUser:[],graphReady:!1}},provide(){return{repo:m(()=>this.repo),branchName:m(()=>this.branchName)}},created(){this.proj=this.user.projects.reduce((i,e)=>e.projectId==this.projId?e:i,null),this.proj===null&&alert("proj not found"),c.post("/api/develop/getBindRepos",{userId:this.user.id,projectId:this.projId}).then(i=>{i.data.errcode===0?(this.repos=i.data.data.map((e,t,r)=>{let a=e.repoRemotePath.split("/");return{id:e.repoId,user:a[0],repo:a[1],intro:e.repoIntroduction}}),this.repo=this.repos.reduce((e,t)=>t.id==this.repoId?t:e,null),this.repo===null&&alert("repo not found")):alert("/api/develop/getBindRepos error with not 0 err code ("+i.data.errcode+") "+i.data.message)}).catch(i=>{alert("/api/develop/getBindRepos error"+i)}),c.post("/api/develop/getRepoBranches",{userId:this.user.id,repoId:this.repoId,projectId:this.projId}).then(i=>{i.data.errcode===0?(this.branches=i.data.data.map((t,r,a)=>t.branchName),this.branches.reduce((t,r)=>r==this.branchName?r:t,null)===null&&alert("branch "+this.branchName+" not found in branches "+this.branches)):alert("/api/develop/getBranches error with not 0 err code ("+i.data.errcode+") "+i.data.message)}).catch(i=>{alert("/api/develop/getBranches error"+i)}),c.post("/api/develop/getCommitHistory",{userId:this.user.id,projectId:this.projId,repoId:this.repoId,branchName:this.branchName}).then(i=>{i.data.errcode===0?(this.commitHistory=i.data.data.map((e,t,r)=>({id:t,author:e.author,authorEmail:e.authorEmail,commithash:e.commithash,commitMessage:e.commitMessage,commitTime:e.commitTime})),this.prep_data_in_time_scope(),this.prep_data_in_user_scope(),this.draw_pie_chart(),this.graphReady=!0):alert("/api/develop/getCommitHistory error with not 0 err code ("+i.data.errcode+") "+i.data.message)}).catch(i=>{alert("/api/develop/getCommitHistory error"+i)})},inject:{user:{default:null}},methods:{prep_data_in_time_scope(){let i=this.commitHistory[this.commitHistory.length-1],e=new Date(i.commitTime);e.setDate(e.getDate()-1);let t={},r=new Date;for(;r>=e;){let o=e.toLocaleDateString();t[o]=0,e.setDate(e.getDate()+1)}this.commitHistory.forEach((o,h,p)=>{let l=new Date(o.commitTime).toLocaleDateString();t[l]===void 0?t[l]=1:t[l]+=1}),this.daily.label=Object.keys(t);for(let o=1;o<this.daily.label.length-1;o++)this.daily.label[o]="";this.daily.data=Object.values(t);let a={};for(e=new Date(i.commitTime),e.setMonth(e.getMonth()-1);r>=e;){let o=e.getFullYear()+"-"+(e.getMonth()+1);a[o]=0,e.setMonth(e.getMonth()+1)}this.commitHistory.forEach((o,h,p)=>{let l=new Date(o.commitTime).getFullYear()+"-"+(new Date(o.commitTime).getMonth()+1);a[l]===void 0?a[l]=1:a[l]+=1}),this.monthly.label=Object.keys(a),this.monthly.data=Object.values(a);let s={};for(e=new Date(i.commitTime),e.setFullYear(e.getFullYear()-1);r>=e;){let o=e.getFullYear();s[o]=0,e.setFullYear(e.getFullYear()+1)}this.commitHistory.forEach((o,h,p)=>{let l=new Date(o.commitTime).getFullYear();s[l]===void 0?s[l]=1:s[l]+=1}),this.yearly.label=Object.keys(s),this.yearly.data=Object.values(s)},prep_data_in_user_scope(){let i={};this.commitHistory.forEach((e,t,r)=>{i[e.author]===void 0?i[e.author]=1:i[e.author]+=1});for(let e in i)this.perUser.push({key:e,value:i[e]});this.perUser.sort((e,t)=>t.value-e.value)},draw_pie_chart(){console.log("echarts="),console.log(v);let i=f.exports.init(this.$refs.user_specific_pie_chart);window.addEventListener("resize",()=>{i.resize()}),i.setOption({title:{text:"",left:"center"},legend:{orient:"vertical",left:10,data:this.perUser.label},tooltip:{trigger:"item",formatter:function(e){return e.data.key+" : "+e.data.value+"\u6B21"}},series:[{name:"\u63D0\u4EA4\u6B21\u6570",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,labelLine:{show:!1},data:this.perUser}]})},getLinearGradient:n.getLinearGradient,getTopicColor:n.getColor,getDarkColor:n.getDarkColor}};var T=function(){var e=this,t=e._self._c;return t("v-container",[t("h1",{style:"color: "+e.getDarkColor(e.user.topic)},[e._v("\u5206\u652F\u8BE6\u60C5 - "+e._s(e.branchName))]),t("v-row",[t("v-col",{attrs:{cols:"12"}},[t("v-tabs",{attrs:{color:e.getDarkColor(e.user.topic),"slider-color":e.getDarkColor(e.user.topic)},model:{value:e.tabs,callback:function(r){e.tabs=r},expression:"tabs"}},[t("v-tab",[e._v("\u63D0\u4EA4\u8BB0\u5F55&\u7EDF\u8BA1")]),t("v-tab",{attrs:{disabled:!e.graphReady}},[e._v("\u67E5\u770B\u4ED3\u5E93\u6587\u4EF6")])],1)],1)],1),t("v-tabs-items",{model:{value:e.tabs,callback:function(r){e.tabs=r},expression:"tabs"}},[t("v-tab-item",{attrs:{value:0}},[t("v-row",[t("v-col",{staticClass:"px-3",attrs:{cols:"3"}},[t("h2",[e._v("\u63D0\u4EA4\u8BB0\u5F55")]),t("v-list",{staticClass:"overflow-y-auto",attrs:{"max-height":"calc(100vh - 250px)"}},e._l(e.commitHistory,function(r){return t("v-list-item",{key:r.id},[t("v-list-item-content",[t("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:s}){return[t("v-list-item-title",e._g(e._b({},"v-list-item-title",s,!1),a),[e._v(e._s(r.commitMessage))])]}}],null,!0)},[t("span",[e._v(e._s(r.commitMessage))])]),t("v-list-item-subtitle",[e._v(e._s(new Date(r.commitTime).toLocaleString())+" - "+e._s(r.commithash.slice(0,6))+" - "+e._s(r.author))])],1)],1)}),1)],1),t("v-divider",{attrs:{vertical:""}}),t("v-col",{attrs:{cols:"9"}},[t("v-container",{attrs:{fluid:""}},[t("v-row",{attrs:{dense:""}},e._l([e.daily,e.monthly,e.yearly],function(r,a){return t("v-col",{key:a,attrs:{cols:r.col}},[t("v-card",{staticClass:"text-center align-center",attrs:{color:r.color}},[t("v-sparkline",{attrs:{labels:r.label,value:r.data,"auto-line-width":"",smooth:"",padding:"20","stroke-linecap":"round","show-labels":"","auto-draw":""}}),t("v-card-title",[e._v("\u4ECE "+e._s(r.label[0])+" \u5230 "+e._s(r.label[r.label.length-1])+" \u7684\u63D0\u4EA4")])],1)],1)}),1),t("br"),t("v-divider"),t("br"),t("v-row",{attrs:{dense:""}},[t("v-col",{attrs:{cols:"12"}},[t("v-card",{style:e.getLinearGradient(e.user.topic)},[t("v-container",{attrs:{fluid:""}},[t("v-row",[t("v-col",{attrs:{cols:"8"}},[t("div",{ref:"user_specific_pie_chart",staticClass:"indigo lighten-4",staticStyle:{height:"20em"}})]),t("v-col",{attrs:{cols:"4"}},[t("v-list",{staticClass:"overflow-y-auto",attrs:{dense:"","max-height":"20em"}},e._l(e.perUser,function(r){return t("v-list-item",{key:r.key},[t("v-list-item-content",[t("v-list-item-title",[e._v(e._s(r.key))]),t("v-list-item-subtitle",[e._v(e._s(r.value)+" \u6B21\u63D0\u4EA4")])],1)],1)}),1)],1)],1)],1),t("v-card-title",[e._v("\u7528\u6237\u63D0\u4EA4\u6570\u91CF")])],1)],1)],1)],1)],1)],1)],1),t("v-tab-item",{attrs:{value:1}},[t("FileView")],1)],1)],1)},I=[],F=u(k,T,I,!1,null,"2addfc7c",null,null);const E=F.exports;export{E as default};
