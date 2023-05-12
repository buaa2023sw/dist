System.register(["./index-legacy.8e0240c6.js","./echarts-legacy.382b9b73.js"],(function(e,t){"use strict";var r,a,i,o,n,l=document.createElement("style");return l.textContent="",document.head.appendChild(l),{setters:[function(e){r=e.n,a=e.x,i=e.v},function(e){o=e.a,n=e.e}],execute:function(){var t=r({name:"FileView",data:function(){return{tree:[],files:{html:"mdi-language-html5",js:"mdi-nodejs",json:"mdi-code-json",md:"mdi-language-markdown",pdf:"mdi-file-pdf",png:"mdi-file-image",txt:"mdi-file-document-outline",xls:"mdi-file-excel"},items:[{name:"README.md",file:"md"},{name:"src",children:[{name:"file1.txt",file:"txt"}]}]}},inject:{user:{default:null},proj:{default:null},repo:{default:null}}},(function(){var e=this,t=e._self._c;return t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"3"}},[t("div",{staticClass:"blue"},[e._v(" LEFT ")]),t("v-treeview",{attrs:{items:e.items,activatable:"",active:e.tree,"item-key":"name","open-on-click":"",dense:""},on:{"update:active":function(t){e.tree=t}},scopedSlots:e._u([{key:"prepend",fn:function(r){var a=r.item,i=r.open;return[a.file?t("v-icon",[e._v(" "+e._s(e.files[a.file])+" ")]):t("v-icon",[e._v(" "+e._s(i?"mdi-folder-open":"mdi-folder")+" ")])]}}])})],1),t("v-col",{attrs:{cols:"9"}},[t("div",{staticClass:"red"},[e._v(" RIGHT ")]),t("div",[e._v(e._s(e.tree))])])],1)],1)}),[],!1,null,"95465589",null,null).exports;e("default",r({name:"Branch",components:{FileView:t},data:function(){return{projId:this.$route.params.projid,repoId:this.$route.params.repoid,branchName:this.$route.params.branchname,proj:null,repos:null,repo:null,branches:null,commitHistory:null,daily:{col:4,color:"#FFCDD2",title:"过去三十日内的提交",label:[],data:[]},monthly:{col:4,color:"#B2EBF2",title:"过去一年内的提交",label:[],data:[]},yearly:{col:4,color:"#C8E6C9",title:"过去十年内的提交",label:[],data:[]},perUser:[]}},provide:function(){var e=this;return{repo:a((function(){return e.repo})),branchName:a((function(){return e.branchName}))}},created:function(){var e=this;this.proj=this.user.projects.reduce((function(t,r){return r.projectId==e.projId?r:t}),null),null===this.proj&&alert("proj not found"),i.post("/api/develop/getBindRepos",{userId:this.user.id,projectId:this.projId}).then((function(t){0===t.data.errcode?(e.repos=t.data.data.map((function(e,t,r){var a=e.repoRemotePath.split("/");return{id:e.repoId,user:a[0],repo:a[1],intro:e.repoIntroduction}})),e.repo=e.repos.reduce((function(t,r){return r.id==e.repoId?r:t}),null),null===e.repo&&alert("repo not found")):alert("/api/develop/getBindRepos error with not 0 err code ("+t.data.errcode+") "+t.data.message)})).catch((function(e){alert("/api/develop/getBindRepos error"+e)})),i.post("/api/develop/getRepoBranches",{userId:this.user.id,repoId:this.repoId,projectId:this.projId}).then((function(t){0===t.data.errcode?(e.branches=t.data.data.map((function(e,t,r){return e.branchName})),null===e.branches.reduce((function(t,r){return r==e.branchName?r:t}),null)&&alert("branch "+e.branchName+" not found in branches "+e.branches)):alert("/api/develop/getBranches error with not 0 err code ("+t.data.errcode+") "+t.data.message)})).catch((function(e){alert("/api/develop/getBranches error"+e)})),i.post("/api/develop/getCommitHistory",{userId:this.user.id,projectId:this.projId,repoId:this.repoId,branchName:this.branchName}).then((function(t){0===t.data.errcode?(e.commitHistory=t.data.data.map((function(e,t,r){return{id:t,author:e.author,authorEmail:e.authorEmail,commithash:e.commithash,commitMessage:e.commitMessage,commitTime:e.commitTime}})),e.prep_data_in_time_scope(),e.prep_data_in_user_scope(),e.draw_pie_chart()):alert("/api/develop/getCommitHistory error with not 0 err code ("+t.data.errcode+") "+t.data.message)})).catch((function(e){alert("/api/develop/getCommitHistory error"+e)}))},inject:{user:{default:null}},methods:{prep_data_in_time_scope:function(){var e=this.commitHistory[this.commitHistory.length-1],t=new Date(e.commitTime);t.setDate(t.getDate()-1);for(var r={},a=new Date;a>=t;){var i=t.toLocaleDateString();r[i]=0,t.setDate(t.getDate()+1)}this.commitHistory.forEach((function(e,t,a){var i=new Date(e.commitTime).toLocaleDateString();void 0===r[i]?r[i]=1:r[i]+=1})),this.daily.label=Object.keys(r);for(var o=1;o<this.daily.label.length-1;o++)this.daily.label[o]="";this.daily.data=Object.values(r);var n={};for((t=new Date(e.commitTime)).setMonth(t.getMonth()-1);a>=t;){var l=t.getFullYear()+"-"+(t.getMonth()+1);n[l]=0,t.setMonth(t.getMonth()+1)}this.commitHistory.forEach((function(e,t,r){var a=new Date(e.commitTime).getFullYear()+"-"+(new Date(e.commitTime).getMonth()+1);void 0===n[a]?n[a]=1:n[a]+=1})),this.monthly.label=Object.keys(n),this.monthly.data=Object.values(n);var s={};for((t=new Date(e.commitTime)).setFullYear(t.getFullYear()-1);a>=t;){var c=t.getFullYear();s[c]=0,t.setFullYear(t.getFullYear()+1)}this.commitHistory.forEach((function(e,t,r){var a=new Date(e.commitTime).getFullYear();void 0===s[a]?s[a]=1:s[a]+=1})),this.yearly.label=Object.keys(s),this.yearly.data=Object.values(s)},prep_data_in_user_scope:function(){var e={};for(var t in this.commitHistory.forEach((function(t,r,a){void 0===e[t.author]?e[t.author]=1:e[t.author]+=1})),e)this.perUser.push({key:t,value:e[t]});this.perUser.sort((function(e,t){return t.value-e.value}))},draw_pie_chart:function(){console.log("echarts="),console.log(o);var e=n.exports.init(this.$refs.user_specific_pie_chart);window.addEventListener("resize",(function(){e.resize()})),e.setOption({title:{text:"",left:"center"},legend:{orient:"vertical",left:10,data:this.perUser.label},tooltip:{trigger:"item",formatter:function(e){return e.data.key+" : "+e.data.value+"次"}},series:[{name:"提交次数",type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,labelLine:{show:!1},data:this.perUser}]})}}},(function(){var e=this,t=e._self._c;return t("v-container",{attrs:{fluid:""}},[t("h1",[e._v("分支详情 - "+e._s(e.branchName))]),t("v-row",[t("v-col",{staticClass:"px-3",attrs:{cols:"3"}},[t("h2",[e._v("提交记录")]),t("v-list",{staticClass:"overflow-y-auto",attrs:{"max-height":"1200px"}},e._l(e.commitHistory,(function(r){return t("v-list-item",{key:r.id},[t("v-list-item-content",[t("v-list-item-title",[e._v(e._s(r.commitMessage))]),t("v-list-item-subtitle",[e._v(e._s(new Date(r.commitTime).toLocaleString())+" - "+e._s(r.commithash.slice(0,6))+" - "+e._s(r.author))])],1)],1)})),1)],1),t("v-divider",{attrs:{vertical:""}}),t("v-col",{attrs:{cols:"9"}},[t("v-container",{attrs:{fluid:""}},[t("v-row",{attrs:{dense:""}},e._l([e.daily,e.monthly,e.yearly],(function(r,a){return t("v-col",{key:a,attrs:{cols:r.col}},[t("v-card",{staticClass:"text-center align-center",attrs:{color:r.color}},[t("v-sparkline",{attrs:{labels:r.label,value:r.data,"auto-line-width":"",smooth:"",padding:"20","stroke-linecap":"round","show-labels":"","auto-draw":""}}),t("v-card-title",[e._v("从 "+e._s(r.label[0])+" 到 "+e._s(r.label[r.label.length-1])+" 的提交")])],1)],1)})),1),t("br"),t("v-divider"),t("br"),t("v-row",{attrs:{dense:""}},[t("v-col",{attrs:{cols:"12"}},[t("v-card",[t("v-container",{attrs:{fluid:""}},[t("v-row",[t("v-col",{attrs:{cols:"8"}},[t("div",{ref:"user_specific_pie_chart",staticClass:"lime",staticStyle:{height:"20em"}})]),t("v-col",{attrs:{cols:"4"}},[t("v-list",{staticClass:"overflow-y-auto",attrs:{dense:"","max-height":"20em"}},e._l(e.perUser,(function(r){return t("v-list-item",{key:r.key},[t("v-list-item-content",[t("v-list-item-title",[e._v(e._s(r.key))]),t("v-list-item-subtitle",[e._v(e._s(r.value)+" 次提交")])],1)],1)})),1)],1)],1)],1),t("v-card-title",[e._v("用户提交数量")])],1)],1)],1)],1),t("v-container",{attrs:{fluid:""}},[t("v-row",[t("v-col",{attrs:{cols:"12"}},[t("v-card",[t("v-card-title",[e._v("文件列表")]),t("v-card-text",[t("FileView")],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"3a452abf",null,null).exports)}}}));
