System.register(["./index-legacy.5cd0c071.js"],(function(e,t){"use strict";var s,o,r,i,n=document.createElement("style");return n.textContent=".description[data-v-31824df6]{word-break:normal;width:auto;display:block;white-space:pre-wrap;word-wrap:break-word;overflow:hidden;line-height:1.5rem}.need-mono[data-v-e35133a6],.need-mono[data-v-0bed2cfc]{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,Courier,monospace}\n",document.head.appendChild(n),{setters:[function(e){s=e.n,o=e.l,r=e.t,i=e.o}],execute:function(){var t={name:"bindGithubRepo",data:function(){return{gh_username:"",gh_reponame:"",git_url:"",seperate:!0,bindingInProgress:!1}},inject:{user:{default:null},proj:{default:null},updateBindRepos:{default:null}},methods:{bindSplit:function(){var e=this;this.bindingInProgress=!0,o.post("/api/userBindRepo",{userId:this.user.id,projectId:this.proj.id,repoRemotePath:this.gh_username+"/"+this.gh_reponame}).then((function(t){e.bindingInProgress=!1,e.updateBindRepos()})).catch((function(t){alert("哦不，好像绑定失败了！"),e.bindingInProgress=!1}))},bindWhole:function(){var e=this;this.bindingInProgress=!0,o.post("/api/userBindRepo",{userId:this.user.id,projectId:this.proj.id,repoRemotePath:this.git_url.replace(/https:\/\/github.com\//,"")}).then((function(t){e.bindingInProgress=!1,e.updateBindRepos()})).catch((function(t){alert("哦不，好像绑定失败了！"),e.bindingInProgress=!1}))},getTopicColor:r.getColor},watch:{}},n=s(t,(function(){var e=this,t=e._self._c;return e.seperate?t("v-form",[t("v-row",[t("v-col",{attrs:{cols:"5"}},[t("v-text-field",{attrs:{label:"GitHub Username"},model:{value:e.gh_username,callback:function(t){e.gh_username=t},expression:"gh_username"}})],1),t("v-col",{staticClass:"text-center my-3",attrs:{cols:"1"}},[t("v-btn",{attrs:{color:e.getTopicColor(e.user.topic),fab:""},on:{click:function(t){e.seperate=!e.seperate}}},[e._v("/")])],1),t("v-col",{attrs:{cols:"6"}},[t("v-text-field",{attrs:{label:"GitHub Reponame"},model:{value:e.gh_reponame,callback:function(t){e.gh_reponame=t},expression:"gh_reponame"}})],1)],1),t("v-row",[t("v-col",{attrs:{cols:"4"}}),t("v-col",{attrs:{cols:"4"}},[t("v-btn",{attrs:{color:e.getTopicColor(e.user.topic),disabled:e.bindingInProgress||""===e.gh_reponame||""===e.gh_username},on:{click:function(t){return e.bindSplit()}}},[e._v(" 绑定 "+e._s(""===e.gh_username?"?":e.gh_username)+" / "+e._s(""===e.gh_reponame?"?":e.gh_reponame)+" 到“"+e._s(e.proj.name)+"” ")])],1),t("v-col",{attrs:{cols:"4"}})],1)],1):t("v-form",[t("v-row",[t("v-col",{staticClass:"text-center my-3",attrs:{cols:"3"}},[t("v-btn",{attrs:{block:""},on:{click:function(t){e.seperate=!e.seperate}}},[e._v("https://github.com/")])],1),t("v-col",{attrs:{cols:"9"}},[t("v-text-field",{attrs:{label:"github url"},model:{value:e.git_url,callback:function(t){e.git_url=t},expression:"git_url"}})],1)],1),t("v-row",[t("v-col",{attrs:{cols:"4"}}),t("v-col",{attrs:{cols:"4"}},[t("v-btn",{attrs:{disabled:e.bindingInProgress||""===e.git_url||!/[a-zA-Z0-9-_]+\/[a-zA-Z0-9-_]+/.test(e.git_url.replace(/https:\/\/github.com\//,""))},on:{click:function(t){return e.bindWhole()}}},[e._v(" 绑定 "+e._s(""===e.git_url?"?":e.git_url.replace(/https:\/\/github.com\//,""))+" 到“"+e._s(e.proj.name)+"” ")])],1),t("v-col",{attrs:{cols:"4"}})],1)],1)}),[],!1,null,null,null,null).exports,a={name:"bindedGithubRepos",inject:{user:{default:null},proj:{default:null},bindRepos:{default:null},bindReposBusy:{default:null},updateBindRepos:{default:function(){}}},data:function(){return{}},methods:{unbind:function(e){var t=this;o.post("/api/develop/userUnbindRepo",{userId:this.user.id,projectId:this.proj.id,repoId:e.id}).then((function(e){t.updateBindRepos()})).catch((function(e){alert("哦不，好像解绑失败了！"),t.bindingInProgress=!1}))},getTopicColor:r.getColor}},l=s(a,(function(){var e=this,t=e._self._c;return t("div",[t("h2",[e._v("已绑定的代码存储库")]),e.bindReposBusy?t("p",[e._v("正在加载项目“"+e._s(e.proj.name)+"”已绑定的代码存储库列表...")]):t("p",[e._v("项目“"+e._s(e.proj.name)+"”已绑定 "+e._s(e.bindRepos.length)+" 个代码存储库。")]),t("v-divider"),t("br"),e.bindReposBusy?t("v-skeleton-loader",{attrs:{type:"list-item, list-item, list-item"}}):e.bindRepos.length>0?t("v-expansion-panels",e._l(e.bindRepos,(function(s){return t("v-expansion-panel",{key:s.id},[t("v-expansion-panel-header",[e._v(" "+e._s(s.user)+" / "+e._s(s.repo)+" ")]),t("v-expansion-panel-content",[""!==s.intro?t("div",{staticClass:"description"},[e._v(e._s(s.intro))]):t("div",{staticClass:"description"},[e._v("存储库的简介空空如也呢")]),t("br"),t("v-row",[t("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[t("v-btn",{attrs:{color:e.getTopicColor(e.user.topic),link:"",href:"https://github.com/"+s.user+"/"+s.repo,target:"_blank"}},[t("v-icon",[e._v("mdi-github")]),e._v("GitHub")],1)],1),t("v-col",{staticClass:"text-center",attrs:{cols:"6"}},[t("v-btn",{attrs:{color:e.getTopicColor(e.user.topic)},on:{click:function(t){return e.unbind(s)}}},[t("v-icon",[e._v("mdi-link-variant-off")]),e._v("Unbind")],1)],1)],1)],1)],1)})),1):t("v-card",[t("v-card-title",[t("v-icon",[e._v("mdi-github")]),t("span",{staticClass:"headline ml-3"},[e._v("还没有绑定代码存储库")])],1),t("v-divider"),t("v-card-subtitle",[t("span",{staticClass:"subtitle-1 ml-4"},[e._v("唔，快去绑定一个代码存储库开始记录你的工作吧！")])])],1)],1)}),[],!1,null,"31824df6",null,null).exports,c={name:"commit_view",methods:{updateCommitHistory:function(){var e=this;this.commitHistoryBusy=!0,o.post("/api/develop/getCommitHistory",{userId:this.user.id,projectId:this.proj.id,repoId:this.selectedRepo.id,branchName:this.selectedBranch.name}).then((function(t){if(0===t.data.errcode){for(var s=new Date,o={},r=0;r<10;r++){var i=s.getMonth()+1+"."+s.getDate();o[i]=0,s.setDate(s.getDate()-1)}e.commitHistory=t.data.data.map((function(e,t){var s=new Date(e.commitTime),r=s.getMonth()+1+"."+s.getDate();return r in o&&(o[r]+=1),{id:t,committer:e.author,committerEmail:e.authorEmail,hash:e.commithash,message:e.commitMessage,time:e.commitTime}})),e.commitHistoryBusy=!1,e.statsPerDay={label:Object.keys(o).reverse(),value:Object.values(o).reverse()}}else console.log(t),alert("/api/develop/getCommitHistory error with not 0 err code ("+t.data.errcode+") "+t.data.message),e.commitHistoryBusy=!1})).catch((function(t){alert("/api/develop/getBindRepos error"+t),e.commitHistoryBusy=!1}))},getTopicColor:r.getColor,getDarkColor:r.getDarkColor},data:function(){return{commitHistoryBusy:!0,commitHistory:[{}],statsPerDay:{}}},watch:{selectedBranch:function(){this.updateCommitHistory()}},created:function(){this.updateCommitHistory()},inject:{user:{default:null},proj:{default:null},selectedRepo:{default:null},selectedBranch:{default:null}}},d=s(c,(function(){var e=this,t=e._self._c;return t("div",[t("v-card-title",[e._v("分支"),t("span",{staticClass:"need-mono"},[e._v(" “"+e._s(e.selectedBranch.name)+"” ")]),e._v("上的提交记录")]),e.commitHistoryBusy?t("p",[e._v("正在与服务器同步分支"+e._s(e.selectedBranch.name)+"上的最新提交记录...")]):t("p",[e._v("分支"),t("span",{staticClass:"need-mono"},[e._v(" “"+e._s(e.selectedBranch.name)+"” ")]),e._v("中有 "+e._s(e.commitHistory.length)+" 条提交记录。最新的提交记录：")]),e.commitHistoryBusy?t("v-skeleton-loader",{staticClass:"mx-auto",attrs:{type:"table"}}):t("div",[t("v-simple-table",{attrs:{dense:""}},[t("thead",[t("tr",[t("th",{staticClass:"committer"},[e._v("committer")]),t("th",{staticClass:"message"},[e._v("message")]),t("th",{staticClass:"hash"},[e._v("hash")]),t("th",{staticClass:"time"},[e._v("time")])])]),t("tbody",e._l(e.commitHistory.slice(0,5),(function(s){return t("tr",{key:s.id},[t("td",{staticClass:"need-mono"},[e._v(e._s(s.committer))]),t("td",[e._v(e._s(s.message))]),t("td",{staticClass:"need-mono"},[t("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(o){var r=o.on,i=o.attrs;return[t("span",e._g(e._b({},"span",i,!1),r),[e._v(e._s(s.hash.slice(0,6)))])]}}],null,!0)},[t("span",[e._v(e._s(s.hash))])])],1),t("td",[e._v(e._s(new Date(s.time).toLocaleString()))])])})),0)]),t("br"),t("v-divider"),t("br"),t("v-card-title",[e._v("过去10天的提交记录数量")]),t("v-sparkline",{attrs:{labels:e.statsPerDay.label,value:e.statsPerDay.value,color:e.getDarkColor(e.user.topic),"auto-line-width":"",smooth:"",padding:"20","stroke-linecap":"round","show-labels":"","auto-draw":""}}),t("br"),e._v(" "),t("v-divider"),e._v(" "),t("br"),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{width:"10rem",color:e.getTopicColor(e.user.topic),link:"",href:"https://github.com/"+e.selectedRepo.user+"/"+e.selectedRepo.repo+"/tree/"+e.selectedBranch.name,target:"_blank"}},[t("v-icon",[e._v("mdi-github")]),e._v("在GitHub查看")],1),t("v-btn",{attrs:{width:"10rem",color:e.getTopicColor(e.user.topic),link:"",to:"/dev/"+e.proj.id+"/"+e.selectedRepo.id+"/"+e.selectedBranch.name+"/",target:"_blank"}},[t("v-icon",[e._v("mdi-send")]),e._v("浏览详情")],1)],1)],1)],1)}),[],!1,null,"e35133a6",null,null).exports,u=s({name:"branchView",components:{commit_view:d},methods:{updateBranches:function(){var e=this;this.branchBusy=!0,o.post("/api/develop/getRepoBranches",{userId:this.user.id,repoId:this.selectedRepo.id,projectId:this.proj.id}).then((function(t){0===t.data.errcode?(e.branches=t.data.data.map((function(e,t){return{id:t,name:e.branchName,lastCommit:{sha:e.lastCommit.sha,authorName:e.lastCommit.authorName,authorEmail:e.lastCommit.authorEmail,commitDate:e.lastCommit.commitDate,commitMessage:e.lastCommit.commitMessage}}})),e.sortBranches(),e.branchBusy=!1):(console.log(t),alert("/api/develop/getRepoBranches error with not 0 err code ("+t.data.errcode+") "+t.data.message),e.branchBusy=!1)})).catch((function(t){alert("/api/develop/getBindRepos error"+t),e.branchBusy=!1}))},sortBranches:function(){this.branches.sort((function(e,t){return e.lastCommit.commitDate>t.lastCommit.commitDate?-1:1})),console.log(this.branches)}},data:function(){return{selectedBranchIndex:0,branches:[{id:0,name:"master",lastCommit:{}}],branchBusy:!0}},inject:{user:{default:null},proj:{default:null},selectedRepo:{default:null}},provide:function(){var e=this;return{selectedBranch:i((function(){return e.branches[e.selectedBranchIndex]}))}},created:function(){this.updateBranches()}},(function(){var e=this,t=e._self._c;return t("div",[t("v-row",[t("v-col",{attrs:{cols:"3"}},[t("v-card-title",[e._v("分支")]),e.branchBusy?t("div",[t("v-card-title",[t("v-progress-circular",{attrs:{indeterminate:""}}),e._v("正在与服务器同步分支")],1)],1):e._e(),e.branchBusy?t("v-skeleton-loader",{attrs:{type:"list-item-three-line"}}):t("v-list",{staticClass:"overflow-y-auto",attrs:{outlined:"",shaped:""}},[t("v-list-item-group",{attrs:{mandatory:""},model:{value:e.selectedBranchIndex,callback:function(t){e.selectedBranchIndex=t},expression:"selectedBranchIndex"}},e._l(e.branches,(function(s){return t("v-list-item",{key:s.id,attrs:{"two-line":""}},[t("v-list-item-content",[t("v-list-item-title",[t("div",{staticClass:"need-mono",staticStyle:{display:"inline-block"}},[e._v(e._s(s.name))]),t("div",{staticClass:"subtitle-2",staticStyle:{display:"inline-block",float:"right"}},[e._v("更新于"+e._s(new Date(s.lastCommit.commitDate).toLocaleString()))])]),t("v-list-item-subtitle",[e._v(e._s(s.lastCommit.commitMessage))])],1)],1)})),1)],1)],1),t("v-divider",{attrs:{vertical:""}}),t("v-col",{attrs:{cols:"9"}},[e.branchBusy?t("v-skeleton-loader",{attrs:{type:"text@3, table"}}):t("commit_view")],1)],1)],1)}),[],!1,null,"0bed2cfc",null,null).exports,p={name:"issue_view",data:function(){var e=this;return{issues:[{id:1,issuer:"TrickEye",title:"issue title1",isOpen:!0},{id:2,issuer:"TrickEye",title:"issue title2",isOpen:!1}],filteredIssues:i((function(){return 1===e.statusFilter?e.issues:e.issues.filter((function(t,s,o){return t.isOpen===(0===e.statusFilter)}))})),issuesBusy:!0,statusFilter:0,statuses:["Open","All","Closed"]}},inject:{user:{default:null},proj:{default:null},selectedRepo:{default:null}},methods:{updateIssue:function(){var e=this;this.issuesBusy=!0,o.post("/api/develop/getIssueList",{userId:this.user.id,repoId:this.selectedRepo.id,projectId:this.proj.id}).then((function(t){if(0===t.data.errcode){var s=t.data.data.map((function(e,t,s){return{id:e.issueId,issuer:e.issuer,title:e.issueTitle,time:e.issueTime,isOpen:e.isOpen,ghLink:e.ghLink}}));e.issues=s,e.issuesBusy=!1}else console.log(t),alert("/api/develop/getIssueList error with not 0 err code ("+t.data.errcode+") "+t.data.message),e.issuesBusy=!1})).catch((function(t){alert("/api/develop/getIssueList error"+t),e.issuesBusy=!1}))},issueFilter:function(){var e=this;return this.issues.filter((function(t){return!(t.isOpen&&2===e.statusFilter||!t.isOpen&&0===e.statusFilter)}))},getTopicColor:r.getColor},created:function(){this.updateIssue()}},v=s(p,(function(){var e=this,t=e._self._c;return t("div",[this.issuesBusy?t("v-skeleton-loader",{attrs:{type:"button, table"}}):0!==this.issues.length?t("v-row",[t("v-col",[t("v-simple-table",{attrs:{dense:""}},[t("tbody",e._l(e.filteredIssues,(function(s){return t("tr",{key:s.id},[t("td",[e._v("#"+e._s(s.id)+" ("+e._s(s.isOpen?"开启":"已关闭")+")")]),t("td",[e._v(e._s(s.issuer))]),t("td",[e._v(e._s(s.title))])])})),0)])],1)],1):t("v-row",[t("v-col",[t("p",[e._v("似乎事务空空如也？现在就去GitHub上发一个吧！")])])],1),t("v-card-actions",[t("v-btn",{attrs:{color:e.getTopicColor(e.user.topic)},on:{click:function(t){e.statusFilter=(e.statusFilter+1)%3,e.filteredIssues=e.issueFilter()}}},[e._v(" 筛选状态："+e._s(e.statuses[e.statusFilter])+" ")]),t("v-spacer"),t("v-btn",{attrs:{color:e.getTopicColor(e.user.topic),link:"",href:"https://github.com/"+e.selectedRepo.user+"/"+e.selectedRepo.repo+"/issues",target:"_blank"}},[t("v-icon",[e._v("mdi-github")]),e._v("在GitHub浏览 ")],1)],1)],1)}),[],!1,null,"48f1b5b5",null,null).exports,h={name:"pr_view",data:function(){return{prs:[{id:1,author:"TrickEye",title:"PR title1",date:"20230403",fromBranchId:2,toBranchId:1,isOpen:!0},{id:2,author:"TrickEyeee",title:"PR title2",date:"20230402",fromBranchId:3,toBranchId:1,isOpen:!0}],prsBusy:!0}},methods:{updatePR:function(){var e=this;this.prsBusy=!0,o.post("/api/develop/getPrList",{userId:this.user.id,projectId:this.proj.id,repoId:this.selectedRepo.id}).then((function(t){if(0===t.data.errcode){var s=t.data.data.map((function(e,t,s){return{id:e.prId,author:e.prIssuer,title:e.prTitle,date:e.prTime,isOpen:e.isOpen,ghLink:e.ghLink,fromBranchName:e.fromBranchName,toBranchName:e.toBranchName}}));e.prs=s,e.prsBusy=!1}else console.log("get pr failure with not 0 err code + {"+t.data.errcode+")"+t.data.message),e.prsBusy=!1})).catch((function(t){console.log("get pr failure with err: "+t),e.prsBusy=!1}))},getTopicColor:r.getColor},inject:{user:{default:null},proj:{default:null},selectedRepo:{default:null}},created:function(){this.updatePR()}},m={name:"repoView",components:{branchView:u,issue_view:v,pr_view:s(h,(function(){var e=this,t=e._self._c;return t("div",[this.prsBusy?t("v-skeleton-loader",{attrs:{type:"button, table"}}):this.prs.length>0?t("v-row",[t("v-col",[t("v-simple-table",{attrs:{dense:""}},[t("tbody",e._l(e.prs,(function(s){return t("tr",{key:s.id},[t("td",[e._v("#"+e._s(s.id)+" ("+e._s(s.isOpen?"开启":"已关闭")+")")]),t("td",[e._v(e._s(s.author))]),t("td",[e._v(e._s(s.title))]),t("td",[e._v("从分支“"+e._s(s.fromBranchName)+"”合并到“"+e._s(s.toBranchName)+"”")])])})),0)])],1)],1):t("v-row",[t("v-col",[t("p",[e._v("合并请求似乎空空如也？现在就去GitHub上发一个吧！")])])],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:e.getTopicColor(e.user.topic),link:"",href:"https://github.com/"+e.selectedRepo.user+"/"+e.selectedRepo.repo+"/pulls",target:"_blank"}},[t("v-icon",[e._v("mdi-github")]),e._v("在GitHub浏览 ")],1)],1)],1)}),[],!1,null,"41cb0ab3",null,null).exports},data:function(){return{selectedRepo:0}},inject:{user:{default:null},proj:{default:null},bindRepos:{default:null},bindReposBusy:{default:null}},provide:function(){var e=this;return{selectedRepo:i((function(){return e.bindRepos[e.selectedRepo]}))}},methods:{getTopicColor:r.getColor,getDarkColor:r.getDarkColor,getRadialGradient:r.getRadialGradient}},_={name:"Dev",components:{bindGithubRepo:n,bindedGithubRepos:l,repoView:s(m,(function(){var e=this,t=e._self._c;return t("v-col",{staticClass:"px-1",attrs:{cols:"12"}},[e.bindReposBusy?t("h2",[e._v("代码存储库")]):e.bindRepos.length>0?t("h2",[e._v("代码存储库 - "+e._s(e.bindRepos[e.selectedRepo].user)+" / "+e._s(e.bindRepos[e.selectedRepo].repo))]):t("h2",[e._v("代码存储库")]),e.bindReposBusy?t("v-skeleton-loader",{attrs:{type:"card"}}):e.bindRepos.length>0?t("div",[t("v-tabs",{attrs:{color:e.getDarkColor(e.user.topic)},model:{value:e.selectedRepo,callback:function(t){e.selectedRepo=t},expression:"selectedRepo"}},e._l(e.bindRepos,(function(s){return t("v-tab",{key:s.id},[e._v(e._s(s.repo))])})),1),t("v-tabs-items",{model:{value:e.selectedRepo,callback:function(t){e.selectedRepo=t},expression:"selectedRepo"}},e._l(e.bindRepos,(function(s){return t("v-tab-item",{key:s.id},[""!==e.bindRepos[e.selectedRepo].intro?t("p",[e._v("代码存储库介绍："+e._s(e.bindRepos[e.selectedRepo].intro))]):t("p",[e._v("这个代码存储库没有介绍哦")]),t("v-row",[t("v-col",{staticClass:"ma-1"},[t("v-card",{staticClass:"pa-2",style:e.getRadialGradient(e.user.topic),attrs:{raised:""}},[t("branchView")],1)],1)],1),t("v-row",[t("v-col",{staticClass:"ma-auto",attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[t("v-card",{staticClass:"pa-2 overflow-y-auto",style:e.getRadialGradient(e.user.topic),attrs:{height:"200px",raised:""}},[t("v-card-title",[e._v("事务")]),t("v-card-text",[t("issue_view")],1)],1)],1),t("v-col",{staticClass:"ma-auto",attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[t("v-card",{staticClass:"pa-2 overflow-y-auto",style:e.getRadialGradient(e.user.topic),attrs:{height:"200px",raised:""}},[t("v-card-title",[e._v("和并请求")]),t("v-card-text",[t("pr_view")],1)],1)],1)],1)],1)})),1)],1):t("div",[t("p",[e._v("这个项目还没有绑定代码存储库哦")])])],1)}),[],!1,null,null,null,null).exports},data:function(){return{bindRepos:[],bindReposBusy:!0}},created:function(){null!==this.selectedProj&&this.updateBindRepos()},inject:{user:{default:null},selectedProj:{default:null},changeSelectedProj:{default:null}},provide:function(){var e=this;return{proj:i((function(){return{id:e.selectedProj.projectId,name:e.selectedProj.projectName,intro:e.selectedProj.projectIntro}})),bindRepos:i((function(){return e.bindRepos})),bindReposBusy:i((function(){return e.bindReposBusy})),updateBindRepos:this.updateBindRepos}},methods:{modifyUser:function(){alert("not implemented!")},updateBindRepos:function(){var e=this;this.bindReposBusy=!0,o.post("/api/develop/getBindRepos",{userId:this.user.id,projectId:this.selectedProj.projectId}).then((function(t){0===t.data.errcode?(e.bindRepos=t.data.data.map((function(e,t,s){var o=e.repoRemotePath;return o=o.split("/"),{id:e.repoId,user:o[0],repo:o[1],intro:e.repoIntroduction}})),e.bindReposBusy=!1):(e.bindReposBusy=!1,alert("/api/develop/getBindRepos error with not 0 err code ("+t.data.errcode+") "+t.data.message))})).catch((function(t){alert("/api/develop/getBindRepos error"+t),e.bindReposBusy=!1}))},getTopicColor:r.getColor,getRadialGradient:r.getRadialGradient}};e("default",s(_,(function(){var e=this,t=e._self._c;return t("v-app",[null!==e.selectedProj?t("v-container",[t("v-row",[t("h1",[e._v("开发 - "+e._s(e.selectedProj.projectName))])]),t("v-row",[t("v-col",{attrs:{cols:"6"}},[t("bindedGithubRepos")],1),t("v-divider",{attrs:{vertical:""}}),t("v-col",{attrs:{cols:"6"}},[t("h2",[e._v("或者绑定一个新的代码存储库")]),t("bindGithubRepo")],1)],1),t("v-row",[t("repoView")],1)],1):t("v-container",[t("v-row",[t("h1",[e._v("开发")])]),t("v-row",[t("p",[e._v("请选择一个项目以继续")])]),t("v-row",e._l(e.user.projects,(function(s){return t("v-col",{key:s.id,attrs:{cols:"4"}},[t("v-card",[t("v-card-title",[e._v(e._s(s.name))]),t("v-card-actions",[t("v-btn",{attrs:{color:e.getTopicColor(e.user.topic)},on:{click:function(t){return e.changeSelectedProj(s)}}},[e._v("开始！")])],1)],1)],1)})),1)],1)],1)}),[],!1,null,"a4e2dd17",null,null).exports)}}}));
