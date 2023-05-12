import{n,v as i,x as o}from"./index.eaf81ea1.js";const c={name:"bindGithubRepo",data(){return{gh_username:"",gh_reponame:"",git_url:"",seperate:!0,bindingInProgress:!1}},inject:{user:{default:null},proj:{default:null},updateBindRepos:{default:null}},methods:{bindSplit(){this.bindingInProgress=!0,i.post("/api/userBindRepo",{userId:this.user.id,projectId:this.proj.id,repoRemotePath:this.gh_username+"/"+this.gh_reponame}).then(r=>{this.bindingInProgress=!1,this.updateBindRepos()}).catch(r=>{alert("\u54E6\u4E0D\uFF0C\u597D\u50CF\u7ED1\u5B9A\u5931\u8D25\u4E86\uFF01"),this.bindingInProgress=!1})},bindWhole(){this.bindingInProgress=!0,i.post("/api/userBindRepo",{userId:this.user.id,projectId:this.proj.id,repoRemotePath:this.git_url.replace(/https:\/\/github.com\//,"")}).then(r=>{this.bindingInProgress=!1,this.updateBindRepos()}).catch(r=>{alert("\u54E6\u4E0D\uFF0C\u597D\u50CF\u7ED1\u5B9A\u5931\u8D25\u4E86\uFF01"),this.bindingInProgress=!1})}},watch:{}};var u=function(){var e=this,t=e._self._c;return e.seperate?t("v-form",[t("v-row",[t("v-col",{attrs:{cols:"5"}},[t("v-text-field",{attrs:{label:"GitHub Username"},model:{value:e.gh_username,callback:function(s){e.gh_username=s},expression:"gh_username"}})],1),t("v-col",{staticClass:"text-center my-3",attrs:{cols:"1"}},[t("v-btn",{attrs:{fab:""},on:{click:function(s){e.seperate=!e.seperate}}},[e._v("/")])],1),t("v-col",{attrs:{cols:"6"}},[t("v-text-field",{attrs:{label:"GitHub Reponame"},model:{value:e.gh_reponame,callback:function(s){e.gh_reponame=s},expression:"gh_reponame"}})],1)],1),t("v-row",[t("v-col",{attrs:{cols:"4"}}),t("v-col",{attrs:{cols:"4"}},[t("v-btn",{attrs:{disabled:e.bindingInProgress||e.gh_reponame===""||e.gh_username===""},on:{click:function(s){return e.bindSplit()}}},[e._v(" \u7ED1\u5B9A "+e._s(e.gh_username===""?"?":e.gh_username)+" / "+e._s(e.gh_reponame===""?"?":e.gh_reponame)+" \u5230\u201C"+e._s(e.proj.name)+"\u201D ")])],1),t("v-col",{attrs:{cols:"4"}})],1)],1):t("v-form",[t("v-row",[t("v-col",{staticClass:"text-center my-3",attrs:{cols:"3"}},[t("v-btn",{attrs:{block:""},on:{click:function(s){e.seperate=!e.seperate}}},[e._v("https://github.com/")])],1),t("v-col",{attrs:{cols:"9"}},[t("v-text-field",{attrs:{label:"github url"},model:{value:e.git_url,callback:function(s){e.git_url=s},expression:"git_url"}})],1)],1),t("v-row",[t("v-col",{attrs:{cols:"4"}}),t("v-col",{attrs:{cols:"4"}},[t("v-btn",{attrs:{disabled:e.bindingInProgress||e.git_url===""||!/[a-zA-Z0-9-_]+\/[a-zA-Z0-9-_]+/.test(e.git_url.replace(/https:\/\/github.com\//,""))},on:{click:function(s){return e.bindWhole()}}},[e._v(" \u7ED1\u5B9A "+e._s(e.git_url===""?"?":e.git_url.replace(/https:\/\/github.com\//,""))+" \u5230\u201C"+e._s(e.proj.name)+"\u201D ")])],1),t("v-col",{attrs:{cols:"4"}})],1)],1)},p=[],_=n(c,u,p,!1,null,null,null,null);const v=_.exports;const h={name:"bindedGithubRepos",inject:{user:{default:null},proj:{default:null},bindRepos:{default:null},bindReposBusy:{default:null},updateBindRepos:{default:()=>{}}},data(){return{}},methods:{unbind(r){i.post("/api/develop/userUnbindRepo",{userId:this.user.id,projectId:this.proj.id,repoId:r.id}).then(e=>{this.updateBindRepos()}).catch(e=>{alert("\u54E6\u4E0D\uFF0C\u597D\u50CF\u89E3\u7ED1\u5931\u8D25\u4E86\uFF01"),this.bindingInProgress=!1})}}};var m=function(){var e=this,t=e._self._c;return t("div",[t("h2",[e._v("\u5DF2\u7ED1\u5B9A\u7684\u4EE3\u7801\u5B58\u50A8\u5E93")]),e.bindReposBusy?t("p",[e._v("\u6B63\u5728\u52A0\u8F7D\u9879\u76EE\u201C"+e._s(e.proj.name)+"\u201D\u5DF2\u7ED1\u5B9A\u7684\u4EE3\u7801\u5B58\u50A8\u5E93\u5217\u8868...")]):t("p",[e._v("\u9879\u76EE\u201C"+e._s(e.proj.name)+"\u201D\u5DF2\u7ED1\u5B9A "+e._s(e.bindRepos.length)+" \u4E2A\u4EE3\u7801\u5B58\u50A8\u5E93\u3002")]),t("v-divider"),t("br"),e.bindReposBusy?t("v-skeleton-loader",{attrs:{type:"list-item, list-item, list-item"}}):e.bindRepos.length>0?t("v-expansion-panels",e._l(e.bindRepos,function(s){return t("v-expansion-panel",{key:s.id},[t("v-expansion-panel-header",[e._v(" "+e._s(s.user)+" / "+e._s(s.repo)+" ")]),t("v-expansion-panel-content",[t("v-divider"),s.intro!==""?t("span",{staticClass:"description"},[e._v(e._s(s.intro))]):t("span",{staticClass:"description"},[e._v("\u5B58\u50A8\u5E93\u7684\u7B80\u4ECB\u7A7A\u7A7A\u5982\u4E5F\u5462")]),t("v-divider"),t("br"),t("v-row",[t("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[t("v-btn",{attrs:{link:"",href:"https://github.com/"+s.user+"/"+s.repo,target:"_blank"}},[e._v("GitHub")])],1),t("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[t("v-btn",{on:{click:function(a){return e.unbind(s)}}},[e._v("Unbind")])],1)],1)],1)],1)}),1):t("v-card",[t("v-card-title",[t("v-icon",[e._v("mdi-github")]),t("span",{staticClass:"headline ml-3"},[e._v("\u8FD8\u6CA1\u6709\u7ED1\u5B9A\u4EE3\u7801\u5B58\u50A8\u5E93")])],1),t("v-divider"),t("v-card-subtitle",[t("span",{staticClass:"subtitle-1 ml-4"},[e._v("\u5514\uFF0C\u5FEB\u53BB\u7ED1\u5B9A\u4E00\u4E2A\u4EE3\u7801\u5B58\u50A8\u5E93\u5F00\u59CB\u8BB0\u5F55\u4F60\u7684\u5DE5\u4F5C\u5427\uFF01")])])],1)],1)},f=[],b=n(h,m,f,!1,null,"ec1125c7",null,null);const g=b.exports;const y={name:"commit_view",methods:{updateCommitHistory(){this.commitHistoryBusy=!0,i.post("/api/develop/getCommitHistory",{userId:this.user.id,projectId:this.proj.id,repoId:this.selectedRepo.id,branchName:this.selectedBranch.name}).then(r=>{if(r.data.errcode===0){let e=new Date,t={};for(let s=0;s<10;s++){let a=e.getMonth()+1+"."+e.getDate();t[a]=0,e.setDate(e.getDate()-1)}this.commitHistory=r.data.data.map((s,a)=>{let l=new Date(s.commitTime),d=l.getMonth()+1+"."+l.getDate();return d in t&&(t[d]+=1),{id:a,committer:s.author,committerEmail:s.authorEmail,hash:s.commithash,message:s.commitMessage,time:s.commitTime}}),this.commitHistoryBusy=!1,this.statsPerDay={label:Object.keys(t).reverse(),value:Object.values(t).reverse()}}else console.log(r),alert("/api/develop/getCommitHistory error with not 0 err code ("+r.data.errcode+") "+r.data.message),this.commitHistoryBusy=!1}).catch(r=>{alert("/api/develop/getBindRepos error"+r),this.commitHistoryBusy=!1})}},data(){return{commitHistoryBusy:!0,commitHistory:[{id:1,committer:"TrickEye",message:"commitMessage, hahaha",hash:"114514",time:"2023/4/2"}],statsPerDay:{}}},watch:{selectedBranch(){this.updateCommitHistory()}},created(){this.updateCommitHistory()},inject:{user:{default:null},proj:{default:null},selectedRepo:{default:null},selectedBranch:{default:null}}};var R=function(){var e=this,t=e._self._c;return t("div",[t("h2",[e._v("\u5206\u652F\u201C"+e._s(e.selectedBranch.name)+"\u201D\u4E0A\u7684\u63D0\u4EA4\u8BB0\u5F55")]),e.commitHistoryBusy?t("p",[e._v("\u6B63\u5728\u4E0E\u670D\u52A1\u5668\u540C\u6B65\u5206\u652F"+e._s(e.selectedBranch.name)+"\u4E0A\u7684\u6700\u65B0\u63D0\u4EA4\u8BB0\u5F55...")]):t("p",[e._v("\u5206\u652F\u201C"+e._s(e.selectedBranch.name)+"\u201D\u4E2D\u6709 "+e._s(e.commitHistory.length)+" \u6761\u63D0\u4EA4\u8BB0\u5F55\u3002\u6700\u65B0\u7684\u63D0\u4EA4\u8BB0\u5F55\uFF1A")]),e.commitHistoryBusy?t("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"table"}}):t("div",[t("v-simple-table",{attrs:{dense:""}},[t("thead",[t("tr",[t("th",{staticClass:"committer"},[e._v("committer")]),t("th",{staticClass:"message"},[e._v("message")]),t("th",{staticClass:"hash"},[e._v("hash")]),t("th",{staticClass:"time"},[e._v("time")])])]),t("tbody",e._l(e.commitHistory.slice(0,5),function(s){return t("tr",{key:s.id},[t("td",[e._v(e._s(s.committer))]),t("td",[e._v(e._s(s.message))]),t("td",[t("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:l}){return[t("span",e._g(e._b({},"span",l,!1),a),[e._v(e._s(s.hash.slice(0,6)))])]}}],null,!0)},[t("span",[e._v(e._s(s.hash))])])],1),t("td",[e._v(e._s(new Date(s.time).toLocaleString()))])])}),0)]),t("br"),t("v-divider"),t("br"),t("span",[e._v("\u8FC7\u53BB10\u5929\u7684\u63D0\u4EA4\u8BB0\u5F55\u6570\u91CF")]),t("v-sparkline",{attrs:{labels:e.statsPerDay.label,value:e.statsPerDay.value,"auto-line-width":"",smooth:"",padding:"20","stroke-linecap":"round","show-labels":"","auto-draw":""}}),t("br"),e._v(" "),t("v-divider"),e._v(" "),t("br"),t("v-row",[t("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[t("v-btn",{attrs:{link:"",href:"https://github.com/"+e.selectedRepo.user+"/"+e.selectedRepo.repo+"/tree/"+e.selectedBranch.name}},[t("v-icon",[e._v("mdi-github")]),e._v("\u5728GitHub\u67E5\u770B")],1)],1),t("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[t("v-btn",{attrs:{link:"",to:"/dev/"+e.proj.id+"/"+e.selectedRepo.id+"/"+e.selectedBranch.name+"/"}},[t("v-icon",[e._v("mdi-send")]),e._v("\u6D4F\u89C8\u8BE6\u60C5")],1)],1)],1)],1)],1)},B=[],I=n(y,R,B,!1,null,"e526027a",null,null);const w=I.exports;const j={name:"branchView",components:{commit_view:w},methods:{updateBranches(){this.branchBusy=!0,i.post("/api/develop/getRepoBranches",{userId:this.user.id,repoId:this.selectedRepo.id,projectId:this.proj.id}).then(r=>{r.data.errcode===0?(this.branches=r.data.data.map((e,t)=>({id:t,name:e.branchName,lastCommit:{sha:e.lastCommit.sha,authorName:e.lastCommit.authorName,authorEmail:e.lastCommit.authorEmail,commitDate:e.lastCommit.commitDate,commitMessage:e.lastCommit.commitMessage}})),this.branchBusy=!1):(console.log(r),alert("/api/develop/getRepoBranches error with not 0 err code ("+r.data.errcode+") "+r.data.message),this.branchBusy=!1)}).catch(r=>{alert("/api/develop/getBindRepos error"+r),this.branchBusy=!1})}},data(){return{selectedBranchIndex:0,branches:[{id:0,name:"master",lastCommit:{}}],branchBusy:!0}},inject:{user:{default:null},proj:{default:null},selectedRepo:{default:null}},provide(){return{selectedBranch:o(()=>this.branches[this.selectedBranchIndex])}},created(){this.updateBranches()}};var x=function(){var e=this,t=e._self._c;return t("div",[t("v-row",[t("v-col",{attrs:{cols:"3"}},[t("h2",[e._v("\u5206\u652F")]),e.branchBusy?t("div",[t("v-card-title",[t("v-progress-circular",{attrs:{indeterminate:""}}),e._v("\u6B63\u5728\u4E0E\u670D\u52A1\u5668\u540C\u6B65\u5206\u652F")],1)],1):e._e(),e.branchBusy?t("v-skeleton-loader",{attrs:{type:"list-item-three-line"}}):t("v-list",{staticClass:"overflow-y-auto"},[t("v-list-item-group",{attrs:{mandatory:""},model:{value:e.selectedBranchIndex,callback:function(s){e.selectedBranchIndex=s},expression:"selectedBranchIndex"}},e._l(e.branches,function(s){return t("v-list-item",{key:s.id},[e._v(" "+e._s(s.name)+" ")])}),1)],1)],1),t("v-divider",{attrs:{vertical:""}}),t("v-col",{attrs:{cols:"9"}},[e.branchBusy?t("v-skeleton-loader",{attrs:{type:"text@3, table"}}):t("commit_view")],1)],1)],1)},k=[],C=n(j,x,k,!1,null,"9e1c7cd1",null,null);const $=C.exports;const P={name:"issue_view",data(){return{issues:[{id:1,issuer:"TrickEye",title:"issue title1",isOpen:!0},{id:2,issuer:"TrickEye",title:"issue title2",isOpen:!1}],filteredIssues:o(()=>this.statusFilter===1?this.issues:this.issues.filter((r,e,t)=>r.isOpen===(this.statusFilter===0))),issuesBusy:!0,statusFilter:0,statuses:["Open","All","Closed"]}},inject:{user:{default:null},proj:{default:null},selectedRepo:{default:null}},methods:{updateIssue(){this.issuesBusy=!0,i.post("/api/develop/getIssueList",{userId:this.user.id,repoId:this.selectedRepo.id,projectId:this.proj.id}).then(r=>{if(r.data.errcode===0){let e=r.data.data.map((t,s,a)=>({id:t.issueId,issuer:t.issuer,title:t.issueTitle,time:t.issueTime,isOpen:t.isOpen,ghLink:t.ghLink}));this.issues=e,this.issuesBusy=!1}else console.log(r),alert("/api/develop/getIssueList error with not 0 err code ("+r.data.errcode+") "+r.data.message),this.issuesBusy=!1}).catch(r=>{alert("/api/develop/getIssueList error"+r),this.issuesBusy=!1})},issueFilter(){return this.issues.filter(r=>!(r.isOpen&&this.statusFilter===2||!r.isOpen&&this.statusFilter===0))}},created(){this.updateIssue()}};var H=function(){var e=this,t=e._self._c;return t("div",[t("h2",[e._v("\u4E8B\u52A1")]),this.issuesBusy?t("v-skeleton-loader",{attrs:{type:"button, table"}}):this.issues.length!==0?t("v-row",[t("v-col",[t("v-btn",{staticStyle:{"margin-left":"10px","margin-right":"20px"},attrs:{rounded:""},on:{click:function(s){e.statusFilter=(e.statusFilter+1)%3,e.filteredIssues=e.issueFilter()}}},[e._v(" "+e._s(e.statuses[e.statusFilter])+" ")])],1)],1):t("v-row",[t("v-col",[t("p",[e._v("\u4F3C\u4E4E\u4E8B\u52A1\u7A7A\u7A7A\u5982\u4E5F\uFF1F\u73B0\u5728\u5C31\u53BBGitHub\u4E0A\u53D1\u4E00\u4E2A\u5427\uFF01")])])],1),t("v-simple-table",{attrs:{dense:""}},[t("tbody",e._l(e.filteredIssues,function(s){return t("tr",{key:s.id},[t("td",[e._v("#"+e._s(s.id)+" ("+e._s(s.isOpen?"\u5F00\u542F":"\u5DF2\u5173\u95ED")+")")]),t("td",[e._v(e._s(s.issuer))]),t("td",[e._v(e._s(s.title))])])}),0)])],1)},F=[],D=n(P,H,F,!1,null,"e8e64d56",null,null);const O=D.exports;const G={name:"pr_view",data(){return{prs:[{id:1,author:"TrickEye",title:"PR title1",date:"20230403",fromBranchId:2,toBranchId:1,isOpen:!0},{id:2,author:"TrickEyeee",title:"PR title2",date:"20230402",fromBranchId:3,toBranchId:1,isOpen:!0}],prsBusy:!0}},methods:{updatePR(){this.prsBusy=!0,i.post("/api/develop/getPrList",{userId:this.user.id,projectId:this.proj.id,repoId:this.selectedRepo.id}).then(r=>{if(r.data.errcode===0){let e=r.data.data.map((t,s,a)=>({id:t.prId,author:t.prIssuer,title:t.prTitle,date:t.prTime,isOpen:t.isOpen,ghLink:t.ghLink,fromBranchName:t.fromBranchName,toBranchName:t.toBranchName}));this.prs=e,this.prsBusy=!1}else console.log("get pr failure with not 0 err code + {"+r.data.errcode+")"+r.data.message),this.prsBusy=!1}).catch(r=>{console.log("get pr failure with err: "+r),this.prsBusy=!1})}},inject:{user:{default:null},proj:{default:null},selectedRepo:{default:null}},created(){this.updatePR()}};var N=function(){var e=this,t=e._self._c;return t("div",[t("h2",[e._v("\u5408\u5E76\u8BF7\u6C42")]),this.prsBusy?t("v-skeleton-loader",{attrs:{type:"button, table"}}):this.prs.length>0?t("v-row",[t("v-col",[t("v-simple-table",{attrs:{dense:""}},[t("tbody",e._l(e.prs,function(s){return t("tr",{key:s.id},[t("td",[e._v("#"+e._s(s.id)+" ("+e._s(s.isOpen?"\u5F00\u542F":"\u5DF2\u5173\u95ED")+")")]),t("td",[e._v(e._s(s.author))]),t("td",[e._v(e._s(s.title))]),t("td",[e._v("\u4ECE\u5206\u652F\u201C"+e._s(s.fromBranchName)+"\u201D\u5408\u5E76\u5230\u201C"+e._s(s.toBranchName)+"\u201D")])])}),0)])],1)],1):t("v-row",[t("v-col",[t("p",[e._v("\u5408\u5E76\u8BF7\u6C42\u4F3C\u4E4E\u7A7A\u7A7A\u5982\u4E5F\uFF1F\u73B0\u5728\u5C31\u53BBGitHub\u4E0A\u53D1\u4E00\u4E2A\u5427\uFF01")])])],1)],1)},T=[],E=n(G,N,T,!1,null,"efb135fa",null,null);const L=E.exports,S={name:"repoView",components:{branchView:$,issue_view:O,pr_view:L},data(){return{selectedRepo:0}},inject:{proj:{default:null},bindRepos:{default:null},bindReposBusy:{default:null}},provide(){return{selectedRepo:o(()=>this.bindRepos[this.selectedRepo])}}};var M=function(){var e=this,t=e._self._c;return t("v-col",{staticClass:"px-1",attrs:{cols:"12"}},[e.bindReposBusy?t("h2",[e._v("\u4EE3\u7801\u5B58\u50A8\u5E93")]):e.bindRepos.length>0?t("h2",[e._v("\u4EE3\u7801\u5B58\u50A8\u5E93 - "+e._s(e.bindRepos[e.selectedRepo].user)+" / "+e._s(e.bindRepos[e.selectedRepo].repo))]):t("h2",[e._v("\u4EE3\u7801\u5B58\u50A8\u5E93")]),e.bindReposBusy?t("v-skeleton-loader",{attrs:{type:"card"}}):e.bindRepos.length>0?t("div",[t("v-tabs",{model:{value:e.selectedRepo,callback:function(s){e.selectedRepo=s},expression:"selectedRepo"}},e._l(e.bindRepos,function(s){return t("v-tab",{key:s.id},[e._v(e._s(s.repo))])}),1),t("v-tabs-items",{model:{value:e.selectedRepo,callback:function(s){e.selectedRepo=s},expression:"selectedRepo"}},e._l(e.bindRepos,function(s){return t("v-tab-item",{key:s.id},[e.bindRepos[e.selectedRepo].intro!==""?t("p",[e._v("\u4EE3\u7801\u5B58\u50A8\u5E93\u4ECB\u7ECD\uFF1A"+e._s(e.bindRepos[e.selectedRepo].intro))]):t("p",[e._v("\u8FD9\u4E2A\u4EE3\u7801\u5B58\u50A8\u5E93\u6CA1\u6709\u4ECB\u7ECD\u54E6")]),t("v-row",[t("v-col",{staticClass:"ma-1"},[t("v-card",{staticClass:"pa-2",attrs:{raised:""}},[t("branchView")],1)],1)],1),t("v-row",[t("v-col",{staticClass:"ma-1"},[t("v-card",{staticClass:"pa-2",attrs:{raised:""}},[t("issue_view")],1)],1)],1),t("v-row",[t("v-col",{staticClass:"ma-1"},[t("v-card",{staticClass:"pa-2",attrs:{raised:""}},[t("pr_view")],1)],1)],1)],1)}),1)],1):t("div",[t("p",[e._v("\u8FD9\u4E2A\u9879\u76EE\u8FD8\u6CA1\u6709\u7ED1\u5B9A\u4EE3\u7801\u5B58\u50A8\u5E93\u54E6")])])],1)},V=[],U=n(S,M,V,!1,null,null,null,null);const z=U.exports;const A={name:"Dev",components:{bindGithubRepo:v,bindedGithubRepos:g,repoView:z},data(){return{bindRepos:[],bindReposBusy:!0}},created(){this.selectedProj!==null&&this.updateBindRepos()},inject:{user:{default:null},selectedProj:{default:null},changeSelectedProj:{default:null}},provide(){return{proj:o(()=>({id:this.selectedProj.projectId,name:this.selectedProj.projectName,intro:this.selectedProj.projectIntro})),bindRepos:o(()=>this.bindRepos),bindReposBusy:o(()=>this.bindReposBusy),updateBindRepos:this.updateBindRepos}},methods:{modifyUser(){alert("not implemented!")},updateBindRepos(){this.bindReposBusy=!0,i.post("/api/develop/getBindRepos",{userId:this.user.id,projectId:this.selectedProj.projectId}).then(r=>{r.data.errcode===0?(this.bindRepos=r.data.data.map((e,t,s)=>{let a=e.repoRemotePath;return a=a.split("/"),{id:e.repoId,user:a[0],repo:a[1],intro:e.repoIntroduction}}),this.bindReposBusy=!1):(this.bindReposBusy=!1,alert("/api/develop/getBindRepos error with not 0 err code ("+r.data.errcode+") "+r.data.message))}).catch(r=>{alert("/api/develop/getBindRepos error"+r),this.bindReposBusy=!1})}}};var W=function(){var e=this,t=e._self._c;return t("v-app",[e.selectedProj!==null?t("v-container",{attrs:{fluid:""}},[t("v-row",[t("h1",[e._v("\u5F00\u53D1 - "+e._s(e.selectedProj))])]),t("v-row",[t("v-col",{attrs:{cols:"6"}},[t("bindedGithubRepos")],1),t("v-divider",{attrs:{vertical:""}}),t("v-col",{attrs:{cols:"6"}},[t("h2",[e._v("\u6216\u8005\u7ED1\u5B9A\u4E00\u4E2A\u65B0\u7684\u4EE3\u7801\u5B58\u50A8\u5E93")]),t("bindGithubRepo")],1)],1),t("v-row",[t("repoView")],1)],1):t("v-container",[t("v-row",[t("h1",[e._v("\u5F00\u53D1")])]),t("v-row",[t("p",[e._v("\u8BF7\u9009\u62E9\u4E00\u4E2A\u9879\u76EE\u4EE5\u7EE7\u7EED")])]),t("v-row",e._l(e.user.projects,function(s){return t("v-col",{key:s.id,attrs:{cols:"4"}},[t("v-card",[t("v-card-title",[e._v(e._s(s.name))]),t("v-card-actions",[t("v-btn",{on:{click:function(a){return e.changeSelectedProj(s)}}},[e._v("\u5F00\u59CB\uFF01")])],1)],1)],1)}),1)],1)],1)},Z=[],q=n(A,W,Z,!1,null,"a497f94f",null,null);const K=q.exports;export{K as default};
