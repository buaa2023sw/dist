import{n,j as o,d as r}from"./index.39935e6b.js";const c={inject:{user:{default:null}},data(){return{msg:null,search:"",headers:[{text:"\u7528\u6237\u540D",align:"start",value:"name"},{text:"\u90AE\u7BB1",value:"email"},{text:"\u6CE8\u518C\u65F6\u95F4",value:"registerTime"},{text:"\u72B6\u6001",value:"status"},{text:"",sortable:!1,value:"resetPassword"},{text:"",sortable:!1,value:"userProfile"},{text:"",sortable:!1,value:"userProject"}],userMessages:[],showResetPassword:!1,userResetPasswordDialogMessage:"",showChangeUserStatus:!1,userStatusDialogMessage:"",selectedStatus:"",statusList:[{label:"\u6B63\u5E38",value:"A"},{label:"\u7981\u7528",value:"B"}],showUserProfile:!1,userProfileDialogMessage:"",gotoUserProjectPageMessage:""}},created(){this.showUserMessages()},methods:{showUserMessages(){console.log(this.user.id),o.post("/api/management/showUsers",{managerId:this.user.id}).then(t=>{console.log(t),t.data.errcode===1?this.$message({type:"error",message:"\u60A8\u6CA1\u6709\u6743\u9650"}):this.userMessages=t.data.users}).catch(t=>{console.error(t),this.userMessages=null})},openResetPasswordDialog(t){this.userResetPasswordDialogMessage=t,console.log("open reset password dialog"),console.log(this.userResetPasswordDialogMessage),this.showResetPassword=!0},closeResetPasswordDialog(){this.showResetPassword=!1,console.log("close reset password dialog"),this.userResetPasswordDialogMessage=""},resetPassword(){let t=this.userResetPasswordDialogMessage.id;o.post("/api/management/resetUserPassword",{managerId:this.user.id,userId:t}).then(e=>{console.log(e.data),e.data.errcode===1?this.$message({type:"error",message:"\u60A8\u6CA1\u6709\u8BE5\u6743\u9650"}):this.$message({type:"success",message:"\u6210\u529F\u5C06\u7528\u6237"+e.data.name+"\u7684\u5BC6\u7801\u4FEE\u6539\u4E3A"+e.data.resetPassword})}).catch(e=>{console.error(e)}),this.showResetPassword=!1,this.userResetPasswordDialogMessage=""},openChangeUserStatusDialog(t){console.log(t),console.log("open change user status dialog"),this.userStatusDialogMessage=t,this.selectedStatus=t.status,this.showChangeUserStatus=!0},closeChangeUserStatusDialog(){this.showChangeUserStatus=!1,console.log("close change user status dialog"),this.userStatusDialogMessage="",this.selectedStatus=""},changeStatus(){console.log(this.selectedStatus);let t=this.userStatusDialogMessage.id,e=this.user.id;o.post("/api/management/changeUserStatus",{managerId:e,userId:t,changeToStatus:this.selectedStatus}).then(s=>{if(this.showChangeUserStatus=!1,console.log(s.data),s.data.errcode===1)this.$message({type:"error",message:"\u60A8\u6CA1\u6709\u8BE5\u6743\u9650"});else if(s.data.errcode===2){let a;this.selectedStatus==="A"?a="\u6B63\u5E38":a="\u7981\u7528",this.$message({type:"info",message:"\u7528\u6237"+this.userStatusDialogMessage.name+"\u7684\u72B6\u6001\u5DF2\u4E3A"+a})}else this.selectedStatus==="A"?this.$message({type:"success",message:"\u6210\u529F\u5C06\u7528\u6237"+this.userStatusDialogMessage.name+"\u7684\u72B6\u6001\u6062\u590D\u4E3A\u6B63\u5E38"}):this.$message({type:"success",message:"\u6210\u529F\u5C06\u7528\u6237"+this.userStatusDialogMessage.name+"\u7684\u72B6\u6001\u4FEE\u6539\u4E3A\u7981\u7528"});this.userStatusDialogMessage="",this.selectedStatus="",this.showUserMessages()}).catch(s=>{this.showChangeUserStatus=!1,this.userStatusDialogMessage="",this.selectedStatus="",console.error(s)})},openUserProfileDialog(t){console.log(t),this.userProfileDialogMessage=t,this.showUserProfile=!0},closeUserProfileDialog(t){this.showUserProfile=!1,this.userProfileDialogMessage=""},saveProfile(){this.showUserProfile=!1},gotoUserPage(t){console.log("232534"),r.set("manager",r.get("user")),console.log(r.get("manager")),o.post("/api/getUserInfo",{managerId:this.user.id,userId:t.id}).then(e=>{console.log(e.data),e.data.errcode===1?this.$message({type:"error",message:"\u7528\u6237\u4E0D\u5B58\u5728"}):(r.set("user",JSON.stringify(e.data.data)),this.$message({type:"success",message:"\u8DF3\u8F6C\u6210\u529F"}),window.location.href="/allProject")}).catch(e=>{console.error(e)})},getColor(t){if(t==="A")return"green";if(t==="B")return"red"},transform(t){if(t==="A")return"\u6B63\u5E38";if(t==="B")return"\u7981\u7528"}}};var u=function(){var e=this,s=e._self._c;return s("v-container",[s("v-card",[s("v-card-title",[s("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"\u641C\u7D22","single-line":"","hide-details":""},model:{value:e.search,callback:function(a){e.search=a},expression:"search"}})],1),s("v-data-table",{attrs:{headers:e.headers,items:e.userMessages,search:e.search},scopedSlots:e._u([{key:"item.status",fn:function({item:a}){return[s("v-chip",{attrs:{color:e.getColor(a.status),dark:""},on:{click:function(l){return e.openChangeUserStatusDialog(a)}}},[e._v(" "+e._s(e.transform(a.status))+" ")])]}},{key:"item.resetPassword",fn:function({item:a}){return[s("v-btn",{staticClass:"ml-1",attrs:{small:"",outlined:""},on:{click:function(l){return e.openResetPasswordDialog(a)}}},[e._v("\u91CD\u7F6E\u7528\u6237\u5BC6\u7801")])]}},{key:"item.userProject",fn:function({item:a}){return[s("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function({on:l,attrs:i}){return[s("v-btn",e._g(e._b({attrs:{icon:"",color:"blue"},on:{click:function(h){return e.gotoUserPage(a)}}},"v-btn",i,!1),l),[s("v-icon",[e._v("mdi-link-variant")])],1)]}}],null,!0)},[s("span",[e._v("\u7528\u6237\u7AEF")])])]}}])})],1),s("v-dialog",{attrs:{width:"300"},model:{value:e.showResetPassword,callback:function(a){e.showResetPassword=a},expression:"showResetPassword"}},[[s("v-container",{staticClass:"pa-0"},[s("v-card",[s("v-card-title",{staticClass:"headline font-weight text-left"},[e._v(" \u91CD\u7F6E\u7528\u6237"+e._s(e.userResetPasswordDialogMessage.name)+"\u7684\u5BC6\u7801 ")]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"red",text:""},on:{click:e.closeResetPasswordDialog}},[e._v("\u53D6\u6D88")]),s("v-btn",{attrs:{color:"blue",text:""},on:{click:e.resetPassword}},[e._v("\u786E\u8BA4")])],1)],1)],1)]],2),s("v-dialog",{attrs:{width:"300"},model:{value:e.showChangeUserStatus,callback:function(a){e.showChangeUserStatus=a},expression:"showChangeUserStatus"}},[[s("v-container",{staticClass:"pa-0"},[s("v-card",[s("v-card-title",{staticClass:"headline font-weight text-left"},[e._v(" \u4FEE\u6539\u7528\u6237"+e._s(e.userStatusDialogMessage.name)+"\u7684\u72B6\u6001 ")]),s("v-divider"),s("v-card-text",[s("v-radio-group",{model:{value:e.selectedStatus,callback:function(a){e.selectedStatus=a},expression:"selectedStatus"}},e._l(e.statusList,function(a){return s("v-radio",{key:a.value,attrs:{label:a.label,value:a.value}})}),1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"red",text:""},on:{click:e.closeChangeUserStatusDialog}},[e._v("\u53D6\u6D88")]),s("v-btn",{attrs:{color:"blue",text:""},on:{click:e.changeStatus}},[e._v("\u786E\u8BA4\u4FEE\u6539")])],1)],1)],1)]],2),s("v-dialog",{attrs:{width:"500"},model:{value:e.showUserProfile,callback:function(a){e.showUserProfile=a},expression:"showUserProfile"}},[[s("v-container",{staticClass:"pa-0"},[s("v-card",[s("v-card-title",{staticClass:"headline font-weight text-left"},[e._v(" \u7528\u6237"+e._s(e.userProfileDialogMessage.name)+"\u7684\u4E2A\u4EBA\u4FE1\u606F ")]),s("v-divider"),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"red",text:""},on:{click:e.closeUserProfileDialog}},[e._v("\u5173\u95ED")]),s("v-btn",{attrs:{color:"blue",text:""},on:{click:e.saveProfile}},[e._v("\u786E\u8BA4\u4FEE\u6539")])],1)],1)],1)]],2)],1)},g=[],d=n(c,u,g,!1,null,"5e60e833",null,null);const f=d.exports;export{f as default};
