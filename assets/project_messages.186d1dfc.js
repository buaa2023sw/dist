import{n as o,v as a}from"./index.67177f41.js";/* empty css                                                                         */const l={inject:{user:{default:null}},data(){return{search:"",headers:[{text:"\u9879\u76EE\u540D",align:"start",value:"name"},{text:"\u521B\u5EFA\u4EBA",value:"leader"},{text:"\u521B\u5EFA\u4EBA\u90AE\u7BB1",value:"email"},{text:"\u521B\u5EFA\u65F6\u95F4",value:"createTime"},{text:"\u5B8C\u6210\u8FDB\u5EA6",value:"progress"},{text:"\u72B6\u6001",value:"access"},{text:"",sortable:!1,value:"changeAccess"},{text:"",sortable:!1,value:"projectDetail"}],projectMessages:[{name:"project1",projectId:0,leader:"123",leaderId:1,email:"123@qq.com",createTime:"2023.1.1",progress:80,status:"A",access:"A"},{name:"faskfl",projectId:1,leader:"432gsdf",leaderId:2,email:"gers@qq.com",createTime:"2023.2.1",progress:"60",status:"B",access:"A"},{name:"project3",projectId:2,leader:"435",leaderId:1,email:"53@qq.com",createTime:"2023.3.1",progress:"100",status:"A",access:"A"}],showChangeProjectAccess:!1,changeProjectAccessMessage:"",selectedAccess:"",accessList:[{label:"\u6B63\u5E38",value:"A"},{label:"\u7981\u7528",value:"B"}]}},created(){this.showProjectMessages()},methods:{showProjectMessages(){console.log(this.user.id),a.post("/api/management/showAllProjects",{managerId:this.user.id}).then(t=>{console.log(t),t.data.errcode===1?window.alert("\u60A8\u6CA1\u6709\u6743\u9650"):this.projectMessages=t.data.projects}).catch(t=>{console.error(t),this.projectMessages=null})},openChangeProjectAccessDialog(t){console.log(t),this.changeProjectAccessMessage=t,this.selectedAccess=t.access,this.showChangeProjectAccess=!0},closeChangeProjectAccessDialog(){this.showChangeProjectAccess=!1},changeAccess(){console.log(this.selectedAccess);let t=this.changeProjectAccessMessage.projectId,e=this.user.id;a.post("/api/management/changeProjectAccess",{managerId:e,projectId:t,changeToAccess:this.selectedAccess}).then(s=>{if(this.showChangeProjectAccess=!1,console.log(s.data),s.data.errcode===1)this.$message({type:"error",message:"\u60A8\u6CA1\u6709\u6743\u9650"});else if(s.data.errcode===2){let c;this.selectedAccess==="A"?c="\u6B63\u5E38":c="\u7981\u7528",this.$message({type:"success",message:"\u9879\u76EE"+this.changeProjectAccessMessage.name+"\u7684\u72B6\u6001\u5DF2\u4E3A"+c})}else this.selectedAccess==="A"?this.$message({type:"success",message:"\u6210\u529F\u5C06\u9879\u76EE"+this.changeProjectAccessMessage.name+"\u7684\u72B6\u6001\u6062\u590D\u4E3A\u6B63\u5E38"}):this.$message({type:"success",message:"\u6210\u529F\u5C06\u9879\u76EE"+this.changeProjectAccessMessage.name+"\u7684\u72B6\u6001\u4FEE\u6539\u4E3A\u7981\u7528"}),this.showProjectMessages();this.changeProjectAccessMessage="",this.selectedAccess=""}).catch(s=>{this.showChangeProjectAccess=!1,this.changeProjectAccessMessage="",this.selectedAccess="",console.error(s)})},gotoProjectDetailPage(t){}}};var n=function(){var e=this,s=e._self._c;return s("v-container",[s("v-card",[s("v-card-title",[s("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"\u641C\u7D22","single-line":"","hide-details":""},model:{value:e.search,callback:function(c){e.search=c},expression:"search"}})],1),s("v-data-table",{attrs:{headers:e.headers,items:e.projectMessages,search:e.search},scopedSlots:e._u([{key:"item.access",fn:function({item:c}){return[c.access==="A"?s("v-text",[e._v(" \u6B63\u5E38 ")]):e._e(),c.access==="B"?s("v-text",[e._v(" \u7981\u7528 ")]):e._e()]}},{key:"item.progress",fn:function({item:c}){return[e._v(" "+e._s(c.progress)+" % ")]}},{key:"item.changeAccess",fn:function({item:c}){return[s("v-btn",{staticClass:"ml-1",attrs:{small:"",outlined:""},on:{click:function(r){return e.openChangeProjectAccessDialog(c)}}},[e._v("\u4FEE\u6539\u9879\u76EE\u72B6\u6001")])]}},{key:"item.projectDetail",fn:function({item:c}){return[s("v-btn",{staticClass:"ml-1",attrs:{small:"",outlined:""},on:{click:function(r){return e.gotoProjectDetailPage(c)}}},[e._v("\u9879\u76EE\u8BE6\u7EC6\u4FE1\u606F")])]}}])})],1),s("v-dialog",{attrs:{width:"300"},model:{value:e.showChangeProjectAccess,callback:function(c){e.showChangeProjectAccess=c},expression:"showChangeProjectAccess"}},[[s("v-container",{staticClass:"pa-0"},[s("v-card",[s("v-card-title",{staticClass:"headline font-weight text-left"},[e._v(" \u4FEE\u6539\u9879\u76EE\u72B6\u6001 ")]),s("v-card-text",[e._v(" \u9879\u76EE\u540D:"+e._s(e.changeProjectAccessMessage.name)+" / \u521B\u5EFA\u4EBA:"+e._s(e.changeProjectAccessMessage.leader))]),s("v-divider"),s("v-card-text",[s("v-radio-group",{model:{value:e.selectedAccess,callback:function(c){e.selectedAccess=c},expression:"selectedAccess"}},e._l(e.accessList,function(c){return s("v-radio",{key:c.value,attrs:{label:c.label,value:c.value}})}),1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"red",text:""},on:{click:e.closeChangeProjectAccessDialog}},[e._v("\u53D6\u6D88")]),s("v-btn",{attrs:{color:"blue",text:""},on:{click:e.changeAccess}},[e._v("\u786E\u8BA4\u4FEE\u6539")])],1)],1)],1)]],2)],1)},i=[],h=o(l,n,i,!1,null,"608b8d7b",null,null);const u=h.exports;export{u as default};
