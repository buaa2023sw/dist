System.register(["./index-legacy.9e75b240.js","./echarts-legacy.4a57c70f.js","./file-system-legacy.ac200818.js"],(function(e,t){"use strict";var o,i,r,a,n,l,s,c,d,u=document.createElement("style");return u.textContent=".CodeMirror{height:calc(100vh - 300px)}.need-mono{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace}\n",document.head.appendChild(u),{setters:[function(e){o=e.n,i=e.e,r=e.t,a=e.l,n=e.o},function(e){l=e.a,s=e.e},function(e){c=e.d,d=e.c}],execute:function(){var t={name:"FileView",data:function(){return{tree:[],files:{html:"mdi-language-html5",js:"mdi-nodejs",json:"mdi-code-json",md:"mdi-language-markdown",pdf:"mdi-file-pdf",png:"mdi-file-image",txt:"mdi-file-document-outline",xls:"mdi-file-excel",vue:"mdi-vuejs"},items:[],cmEditor:null,sheet:!1,fileContent:"选择一个文件以查看其内容\n\n选择文件后，可以点击右上角”代码助手“，使用JiHub进行AI代码诊断、生成单元测试、下载文件",selectedText:"",fileTreeReady:!1,fileContentReady:!1}},inject:{user:{default:null},proj:{default:null},repo:{default:null},branchName:{default:null}},methods:{downloadStrAsFile:c,getFileExt:function(e,t){if(void 0===e.children)e.file="unknown",e.path=t+"/"+e.name,-1!==e.name.indexOf(".")&&(e.file=e.name.split(".").pop());else for(var o=0;o<e.children.length;o++)this.getFileExt(e.children[o],t+"/"+e.name)},file2style:function(){if(0===this.tree.length)return"null";var e=this.tree[0].file;return"html"===e?"htmlmixed":"js"===e||"json"===e?"javascript":"md"===e?"markdown":"vue"===e?"vue":"css"===e?"css":"xml"===e?"xml":"c"===e||"cpp"===e||"h"===e?"clike":"py"===e?"python":"null"},onCursorActivity:function(){this.selectedText=this.cmEditor.getSelection()},diagSelected:function(){this.selectedText.length>4096?this.$message({type:"error",message:"文件太长了，AI会罢工的！"}):this.selectedText.length<=10?this.$message({type:"error",message:"代码这么短，怎么诊断嘛"}):(i.set("diag",this.selectedText),window.open("/user/ai/diagnosis","_blank"))},diagWholeFile:function(){this.fileContent.length>4096?this.$message({type:"error",message:"文件太长了，AI会罢工的！"}):(i.set("diag",this.fileContent),window.open("/user/ai/diagnosis","_blank"))},unitTestSelected:function(){this.selectedText.length>4096?this.$message({type:"error",message:"文件太长了，AI会罢工的！"}):this.selectedText.length<=10?this.$message({type:"error",message:"代码这么短，怎么生成嘛"}):(i.set("diag",this.selectedText),window.open("/user/ai/testdata","_blank"))},unitTestWholeFile:function(){this.fileContent.length>4096?this.$message({type:"error",message:"文件太长了，AI会罢工的！"}):(i.set("diag",this.fileContent),window.open("/user/ai/testdata","_blank"))},getTopicColor:r.getDarkColor,getRadialGradient:r.getRadialGradient,getLinearGradient:r.getLinearGradient},created:function(){var e=this;this.fileTreeReady=!1,a.post("/api/develop/getFileTree",{userId:this.user.id,projectId:this.proj.projectId,repoId:this.$route.params.repoid,branch:this.branchName}).then((function(t){if(0===t.data.errcode){console.log(t.data.data),e.items=t.data.data;for(var o=0;o<e.items.length;o++)e.getFileExt(e.items[o],"")}else alert("/api/develop/getFileTree errcode not 0: "+t.data.message)})).catch((function(e){alert("/api/develop/getFileTree error"+e),console.log(e)})).finally((function(){e.fileTreeReady=!0}))},watch:{tree:function(){var e=this;console.log("selected file change!"),void 0!==this.tree[0].file&&(this.fileContentReady=!1,this.cmEditor.setValue("正在努力拉取文件！\n\n选择文件后，可以点击右上角”代码助手“，使用JiHub进行AI代码诊断、生成单元测试、下载文件"),this.cmEditor.setOption("mode",""),a.post("/api/develop/getContent",{userId:this.user.id,projectId:this.proj.projectId,repoId:this.$route.params.repoid,branch:this.branchName,path:this.tree[0].path}).then((function(t){0===t.data.errcode?(console.log(t.data.data),e.fileContent=t.data.data,e.cmEditor.setValue(e.fileContent),e.cmEditor.setOption("mode",e.file2style())):alert("/api/develop/getFileContent errcode not 0: "+t.data.message)})).catch((function(e){alert("/api/develop/getFileContent error"+e),console.log(e)})).finally((function(){e.fileContentReady=!0})))}},mounted:function(){this.cmEditor=d.exports.fromTextArea(this.$refs.cm1,{theme:"idea",lineNumbers:!0,line:!0,readOnly:!0,lineWrapping:!0}),this.cmEditor.on("cursorActivity",this.onCursorActivity)}},u={name:"Branch",components:{FileView:o(t,(function(){var e=this,t=this,o=t._self._c;return o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"3"}},[o("h2",[t._v("文件树")]),o("v-card",{staticClass:"overflow-y-auto",style:t.getLinearGradient(t.user.topic),attrs:{"min-height":"calc(100vh - 300px)","max-height":"calc(100vh - 300px)"}},[t.fileTreeReady?o("v-treeview",{attrs:{items:t.items,activatable:"",active:t.tree,"item-key":"name","open-on-click":"",dense:"","return-object":""},on:{"update:active":function(e){t.tree=e}},scopedSlots:t._u([{key:"prepend",fn:function(e){var i=e.item,r=e.open;return[i.file?o("v-icon",{attrs:{color:t.getTopicColor(t.user.topic)}},[t._v(" "+t._s(void 0!==t.files[i.file]?t.files[i.file]:"mdi-file-document")+" ")]):o("v-icon",{attrs:{color:t.getTopicColor(t.user.topic)}},[t._v(" "+t._s(r?"mdi-folder-open":"mdi-folder")+" ")])]}}],null,!1,2821907853)}):o("v-skeleton-loader",{staticClass:"mt-2",attrs:{type:"list-item-three-line@5"}})],1)],1),o("v-col",{attrs:{cols:"9"}},[o("h2",[o("v-scroll-y-transition",[o("span",[t._v(" "+t._s(t.fileTreeReady?0===t.tree.length?"请选择一个文件":t.fileContentReady?"":"正在努力拉取文件":"文件树加载中，稍侯...")+" ")])]),o("v-scroll-y-transition",[t.fileContentReady?o("a",{directives:[{name:"ripple",rawName:"v-ripple"}],style:"text-decoration: none; color: "+t.getTopicColor(t.user.topic),attrs:{href:"https://github.com/"+t.repo.user+"/"+t.repo.repo+"/blob/"+t.branchName+"/"+t.tree[0].path,target:"_blank"}},[t._v(" "+t._s(t.fileTreeReady?0===t.tree.length?"请选择一个文件":t.fileContentReady?t.repo.repo+t.tree[0].path:"正在努力拉取文件":"文件树加载中，稍侯...")+" ")]):t._e()]),t.fileContentReady?o("a",{directives:[{name:"ripple",rawName:"v-ripple"}],staticStyle:{float:"right"},style:"color: "+t.getTopicColor(t.user.topic),on:{click:function(e){t.sheet=!t.sheet}}},[t._v("代码助手")]):t._e()],1),o("v-card",{attrs:{"max-height":"calc(100vh - 300px)","min-height":"calc(100vh - 300px)"}},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.fileContent,expression:"fileContent"}],ref:"cm1",staticStyle:{height:"calc(100vh - 300px)",width:"100%"},domProps:{value:t.fileContent},on:{input:function(e){e.target.composing||(t.fileContent=e.target.value)}}})])],1)],1),t.fileContentReady?o("v-bottom-sheet",{attrs:{inset:""},model:{value:t.sheet,callback:function(e){t.sheet=e},expression:"sheet"}},[o("v-card",{staticClass:"text-center"},[o("v-card-title",[t._v("代码助手")]),o("v-card-text",[o("v-container",{attrs:{fluid:""}},[o("v-row",[o("v-spacer"),o("v-col",{attrs:{cols:"12",sm:"12",md:"10",lg:"6",xl:"6"}},[o("v-textarea",{staticClass:"need-mono",attrs:{label:"选中的代码",outlined:"",rows:"20"},model:{value:t.selectedText,callback:function(e){t.selectedText=e},expression:"selectedText"}})],1),o("v-spacer")],1)],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{width:"30rem",outlined:"",color:t.getTopicColor(t.user.topic)},on:{click:t.unitTestSelected}},[o("v-icon",[t._v("mdi-check")]),t._v("让JiHub对选中代码生成单元测试")],1),o("v-btn",{attrs:{width:"30rem",outlined:"",color:t.getTopicColor(t.user.topic)},on:{click:t.unitTestWholeFile}},[o("v-icon",[t._v("mdi-check")]),t._v("让JiHub对整个文件生成单元测试")],1),o("v-spacer")],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{width:"30rem",outlined:"",color:t.getTopicColor(t.user.topic)},on:{click:t.diagSelected}},[o("v-icon",[t._v("mdi-code-braces")]),t._v("让JiHub诊断选中的代码")],1),o("v-btn",{attrs:{width:"30rem",outlined:"",color:t.getTopicColor(t.user.topic)},on:{click:t.diagWholeFile}},[o("v-icon",[t._v("mdi-code-braces")]),t._v("让JiHub诊断整个文件")],1),o("v-spacer")],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{width:"20rem",outlined:"",color:t.getTopicColor(t.user.topic),link:"",href:"https://github.com/"+t.repo.user+"/"+t.repo.repo+"/blob/"+t.branchName+"/"+t.tree[0].path,target:"_blank"}},[o("v-icon",[t._v("mdi-github")]),t._v("在GitHub浏览")],1),o("v-btn",{attrs:{width:"20rem",outlined:"",color:t.getTopicColor(t.user.topic)},on:{click:function(){return t.downloadStrAsFile(t.selectedText,t.user.name+"'s-clip-"+e.tree[0].name)}}},[o("v-icon",[t._v("mdi-download")]),t._v("下载选中代码")],1),o("v-btn",{attrs:{width:"20rem",outlined:"",color:t.getTopicColor(t.user.topic)},on:{click:function(){return t.downloadStrAsFile(t.fileContent,e.tree[0].name)}}},[o("v-icon",[t._v("mdi-download")]),t._v("下载整个文件")],1),o("v-spacer")],1),o("v-row",{staticStyle:{height:"5rem"}})],1)],1):t._e()],1)}),[],!1,null,null,null,null).exports},data:function(){return{tabs:null,projId:this.$route.params.projid,repoId:this.$route.params.repoid,branchName:this.$route.params.branchname,proj:null,repos:null,repo:null,branches:null,commitHistory:null,daily:{col:4,color:"#FFCDD2",title:"过去三十日内的提交",label:[],data:[]},monthly:{col:4,color:"#B2EBF2",title:"过去一年内的提交",label:[],data:[]},yearly:{col:4,color:"#C8E6C9",title:"过去十年内的提交",label:[],data:[]},perUser:[],graphReady:!1}},provide:function(){var e=this;return{repo:n((function(){return e.repo})),branchName:n((function(){return e.branchName}))}},created:function(){var e=this;this.proj=this.user.projects.reduce((function(t,o){return o.projectId==e.projId?o:t}),null),null===this.proj&&alert("proj not found"),a.post("/api/develop/getBindRepos",{userId:this.user.id,projectId:this.projId}).then((function(t){0===t.data.errcode?(e.repos=t.data.data.map((function(e,t,o){var i=e.repoRemotePath.split("/");return{id:e.repoId,user:i[0],repo:i[1],intro:e.repoIntroduction}})),e.repo=e.repos.reduce((function(t,o){return o.id==e.repoId?o:t}),null),null===e.repo&&alert("repo not found")):alert("/api/develop/getBindRepos error with not 0 err code ("+t.data.errcode+") "+t.data.message)})).catch((function(e){alert("/api/develop/getBindRepos error"+e)})),a.post("/api/develop/getRepoBranches",{userId:this.user.id,repoId:this.repoId,projectId:this.projId}).then((function(t){0===t.data.errcode?(e.branches=t.data.data.map((function(e,t,o){return e.branchName})),null===e.branches.reduce((function(t,o){return o==e.branchName?o:t}),null)&&alert("branch "+e.branchName+" not found in branches "+e.branches)):alert("/api/develop/getBranches error with not 0 err code ("+t.data.errcode+") "+t.data.message)})).catch((function(e){alert("/api/develop/getBranches error"+e)})),a.post("/api/develop/getCommitHistory",{userId:this.user.id,projectId:this.projId,repoId:this.repoId,branchName:this.branchName}).then((function(t){0===t.data.errcode?(e.commitHistory=t.data.data.map((function(e,t,o){return{id:t,author:e.author,authorEmail:e.authorEmail,commithash:e.commithash,commitMessage:e.commitMessage,commitTime:e.commitTime}})),e.prep_data_in_time_scope(),e.prep_data_in_user_scope(),e.draw_pie_chart(),e.graphReady=!0):alert("/api/develop/getCommitHistory error with not 0 err code ("+t.data.errcode+") "+t.data.message)})).catch((function(e){alert("/api/develop/getCommitHistory error"+e)}))},inject:{user:{default:null}},methods:{prep_data_in_time_scope:function(){var e=this.commitHistory[this.commitHistory.length-1],t=new Date(e.commitTime);t.setDate(t.getDate()-1);for(var o={},i=new Date;i>=t;){var r=t.toLocaleDateString();o[r]=0,t.setDate(t.getDate()+1)}this.commitHistory.forEach((function(e,t,i){var r=new Date(e.commitTime).toLocaleDateString();void 0===o[r]?o[r]=1:o[r]+=1})),this.daily.label=Object.keys(o);for(var a=1;a<this.daily.label.length-1;a++)this.daily.label[a]="";this.daily.data=Object.values(o);var n={};for((t=new Date(e.commitTime)).setMonth(t.getMonth()-1);i>=t;){var l=t.getFullYear()+"-"+(t.getMonth()+1);n[l]=0,t.setMonth(t.getMonth()+1)}this.commitHistory.forEach((function(e,t,o){var i=new Date(e.commitTime).getFullYear()+"-"+(new Date(e.commitTime).getMonth()+1);void 0===n[i]?n[i]=1:n[i]+=1})),this.monthly.label=Object.keys(n),this.monthly.data=Object.values(n);var s={};for((t=new Date(e.commitTime)).setFullYear(t.getFullYear()-1);i>=t;){var c=t.getFullYear();s[c]=0,t.setFullYear(t.getFullYear()+1)}this.commitHistory.forEach((function(e,t,o){var i=new Date(e.commitTime).getFullYear();void 0===s[i]?s[i]=1:s[i]+=1})),this.yearly.label=Object.keys(s),this.yearly.data=Object.values(s)},prep_data_in_user_scope:function(){var e={};for(var t in this.commitHistory.forEach((function(t,o,i){void 0===e[t.author]?e[t.author]=1:e[t.author]+=1})),e)this.perUser.push({key:t,value:e[t]});this.perUser.sort((function(e,t){return t.value-e.value}))},draw_pie_chart:function(){console.log("echarts="),console.log(l);var e=s.exports.init(this.$refs.user_specific_pie_chart);window.addEventListener("resize",(function(){e.resize()})),e.setOption({title:{text:"",left:"center"},legend:{orient:"vertical",left:10,data:this.perUser.label},tooltip:{trigger:"item",formatter:function(e){return e.data.key+" : "+e.data.value+"次"}},series:[{name:"提交次数",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,labelLine:{show:!1},data:this.perUser}]})},getLinearGradient:r.getLinearGradient,getTopicColor:r.getColor,getDarkColor:r.getDarkColor}};e("default",o(u,(function(){var e=this,t=e._self._c;return t("v-container",[t("h1",{style:"color: "+e.getDarkColor(e.user.topic)},[e._v("分支详情 - "+e._s(e.branchName))]),t("v-row",[t("v-col",{attrs:{cols:"12"}},[t("v-tabs",{attrs:{color:e.getDarkColor(e.user.topic),"slider-color":e.getDarkColor(e.user.topic)},model:{value:e.tabs,callback:function(t){e.tabs=t},expression:"tabs"}},[t("v-tab",[e._v("提交记录&统计")]),t("v-tab",{attrs:{disabled:!e.graphReady}},[e._v("查看仓库文件")])],1)],1)],1),t("v-tabs-items",{model:{value:e.tabs,callback:function(t){e.tabs=t},expression:"tabs"}},[t("v-tab-item",{attrs:{value:0}},[t("v-row",[t("v-col",{staticClass:"px-3",attrs:{cols:"3"}},[t("h2",[e._v("提交记录")]),t("v-list",{staticClass:"overflow-y-auto",attrs:{"max-height":"calc(100vh - 250px)"}},e._l(e.commitHistory,(function(o){return t("v-list-item",{key:o.id},[t("v-list-item-content",[t("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(i){var r=i.on,a=i.attrs;return[t("v-list-item-title",e._g(e._b({},"v-list-item-title",a,!1),r),[e._v(e._s(o.commitMessage))])]}}],null,!0)},[t("span",[e._v(e._s(o.commitMessage))])]),t("v-list-item-subtitle",[e._v(e._s(new Date(o.commitTime).toLocaleString())+" - "+e._s(o.commithash.slice(0,6))+" - "+e._s(o.author))])],1)],1)})),1)],1),t("v-divider",{attrs:{vertical:""}}),t("v-col",{attrs:{cols:"9"}},[t("v-container",{attrs:{fluid:""}},[t("v-row",{attrs:{dense:""}},e._l([e.daily,e.monthly,e.yearly],(function(o,i){return t("v-col",{key:i,attrs:{cols:o.col}},[t("v-card",{staticClass:"text-center align-center",attrs:{color:o.color}},[t("v-sparkline",{attrs:{labels:o.label,value:o.data,"auto-line-width":"",smooth:"",padding:"20","stroke-linecap":"round","show-labels":"","auto-draw":""}}),t("v-card-title",[e._v("从 "+e._s(o.label[0])+" 到 "+e._s(o.label[o.label.length-1])+" 的提交")])],1)],1)})),1),t("br"),t("v-divider"),t("br"),t("v-row",{attrs:{dense:""}},[t("v-col",{attrs:{cols:"12"}},[t("v-card",{style:e.getLinearGradient(e.user.topic)},[t("v-container",{attrs:{fluid:""}},[t("v-row",[t("v-col",{attrs:{cols:"8"}},[t("div",{ref:"user_specific_pie_chart",staticClass:"indigo lighten-4",staticStyle:{height:"20em"}})]),t("v-col",{attrs:{cols:"4"}},[t("v-list",{staticClass:"overflow-y-auto",attrs:{dense:"","max-height":"20em"}},e._l(e.perUser,(function(o){return t("v-list-item",{key:o.key},[t("v-list-item-content",[t("v-list-item-title",[e._v(e._s(o.key))]),t("v-list-item-subtitle",[e._v(e._s(o.value)+" 次提交")])],1)],1)})),1)],1)],1)],1),t("v-card-title",[e._v("用户提交数量")])],1)],1)],1)],1)],1)],1)],1),t("v-tab-item",{attrs:{value:1}},[t("FileView")],1)],1)],1)}),[],!1,null,"2addfc7c",null,null).exports)}}}));
