import{n as l,a as r}from"./index.6eb7c32c.js";const i={inject:{user:{default:null}},data(){return{msg:null,search:"",headers:[{text:"\u7528\u6237\u540D",align:"start",value:"name"},{text:"\u90AE\u7BB1",value:"email"},{text:"\u6CE8\u518C\u65F6\u95F4",value:"registerTime"},{text:"\u72B6\u6001",value:"status"},{text:"",sortable:!1,value:"resetPassword"},{text:"",sortable:!1,value:"changeStatus"},{text:"",sortable:!1,value:"userProfile"},{text:"",sortable:!1,value:"userProject"}],userMessages:[{name:"user1",id:"1",email:"123@qq.com",registerTime:"2023.1.1",status:"A"},{name:"faskfl",id:"2",email:"gers@qq.com",registerTime:"2023.2.1",status:"B"},{name:"saga",id:"3",email:"53@qq.com",registerTime:"2023.3.1",status:"A"}],showResetPassword:!1,userResetPasswordDialogMessage:"",showChangeUserStatus:!1,userStatusDialogMessage:"",selectedStatus:"",statusList:[{label:"\u6B63\u5E38",value:"A"},{label:"\u7981\u7528",value:"B"}],showUserProfile:!1,userProfileDialogMessage:""}},created(){this.showUserMessages()},methods:{showUserMessages(){console.log(this.user.id),r.post("/api/management/showUsers",{managerId:this.user.id}).then(a=>{console.log(a),a.data.errcode===1?window.alert("\u60A8\u6CA1\u6709\u6743\u9650"):this.userMessages=a.data.users}).catch(a=>{console.error(a),this.userMessages=null})},openResetPasswordDialog(a){this.userResetPasswordDialogMessage=a,console.log("open reset password dialog"),console.log(this.userResetPasswordDialogMessage),this.showResetPassword=!0},closeResetPasswordDialog(){this.showResetPassword=!1,console.log("close reset password dialog"),this.userResetPasswordDialogMessage=""},resetPassword(){let a=this.userResetPasswordDialogMessage.id;r.post("/api/management/resetUserPassword",{managerId:this.user.id,userId:a}).then(e=>{console.log(e.data),e.data.errcode===1?this.$message({type:"error",message:"\u60A8\u6CA1\u6709\u8BE5\u6743\u9650"}):this.$message({type:"success",message:"\u6210\u529F\u5C06\u7528\u6237"+e.data.name+"\u7684\u5BC6\u7801\u4FEE\u6539\u4E3A"+e.data.resetPassword})}).catch(e=>{console.error(e)}),this.showResetPassword=!1,this.userResetPasswordDialogMessage=""},openChangeUserStatusDialog(a){console.log(a),console.log("open change user status dialog"),this.userStatusDialogMessage=a,this.selectedStatus=a.status,this.showChangeUserStatus=!0},closeChangeUserStatusDialog(){this.showChangeUserStatus=!1,console.log("close change user status dialog"),this.userStatusDialogMessage="",this.selectedStatus=""},changeStatus(){console.log(this.selectedStatus);let a=this.userStatusDialogMessage.id,e=this.user.id;r.post("/api/management/changeUserStatus",{managerId:e,userId:a,changeToStatus:this.selectedStatus}).then(s=>{if(this.showChangeUserStatus=!1,console.log(s.data),s.data.errcode===1)this.$message({type:"error",message:"\u60A8\u6CA1\u6709\u8BE5\u6743\u9650"});else if(s.data.errcode===2){let t;this.selectedStatus==="A"?t="\u6B63\u5E38":t="\u7981\u7528",this.$message({type:"info",message:"\u7528\u6237"+this.userStatusDialogMessage.name+"\u7684\u72B6\u6001\u5DF2\u4E3A"+t})}else this.selectedStatus==="A"?this.$message({type:"success",message:"\u6210\u529F\u5C06\u7528\u6237"+this.userStatusDialogMessage.name+"\u7684\u72B6\u6001\u6062\u590D\u4E3A\u6B63\u5E38"}):this.$message({type:"success",message:"\u6210\u529F\u5C06\u7528\u6237"+this.userStatusDialogMessage.name+"\u7684\u72B6\u6001\u4FEE\u6539\u4E3A\u7981\u7528"});this.userStatusDialogMessage="",this.selectedStatus="",this.showUserMessages()}).catch(s=>{this.showChangeUserStatus=!1,this.userStatusDialogMessage="",this.selectedStatus="",console.error(s)})},openUserProfileDialog(a){console.log(a),this.userProfileDialogMessage=a,this.showUserProfile=!0},closeUserProfileDialog(a){this.showUserProfile=!1,this.userProfileDialogMessage=""},saveProfile(){this.showUserProfile=!1},gotoUserProjectPage(a){}}};var n=function(){var e=this,s=e._self._c;return s("v-container",[s("v-card",[s("v-card-title",[s("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"\u641C\u7D22","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),s("v-data-table",{attrs:{headers:e.headers,items:e.userMessages,search:e.search},scopedSlots:e._u([{key:"item.status",fn:function({item:t}){return[t.status==="A"?s("v-text",[e._v(" \u6B63\u5E38 ")]):e._e(),t.status==="B"?s("v-text",[e._v(" \u7981\u7528 ")]):e._e()]}},{key:"item.resetPassword",fn:function({item:t}){return[s("v-btn",{staticClass:"ml-1",attrs:{small:"",outlined:""},on:{click:function(o){return e.openResetPasswordDialog(t)}}},[e._v("\u91CD\u7F6E\u7528\u6237\u5BC6\u7801")])]}},{key:"item.changeStatus",fn:function({item:t}){return[s("v-btn",{staticClass:"ml-1",attrs:{small:"",outlined:""},on:{click:function(o){return e.openChangeUserStatusDialog(t)}}},[e._v("\u4FEE\u6539\u7528\u6237\u72B6\u6001")])]}},{key:"item.userProfile",fn:function({item:t}){return[s("v-btn",{staticClass:"ml-1",attrs:{small:"",outlined:""},on:{click:function(o){return e.openUserProfileDialog(t)}}},[e._v("\u7528\u6237\u4E2A\u4EBA\u4FE1\u606F")])]}},{key:"item.userProject",fn:function({item:t}){return[s("v-btn",{staticClass:"ml-1",attrs:{small:"",outlined:""},on:{click:function(o){return e.gotoUserProjectPage(t)}}},[e._v("\u7528\u6237\u6240\u5728\u9879\u76EE")])]}}])})],1),s("v-dialog",{attrs:{width:"300"},model:{value:e.showResetPassword,callback:function(t){e.showResetPassword=t},expression:"showResetPassword"}},[[s("v-container",{staticClass:"pa-0"},[s("v-card",[s("v-card-title",{staticClass:"headline font-weight text-left"},[e._v(" \u91CD\u7F6E\u7528\u6237"+e._s(e.userResetPasswordDialogMessage.name)+"\u7684\u5BC6\u7801 ")]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"red",text:""},on:{click:e.closeResetPasswordDialog}},[e._v("\u53D6\u6D88")]),s("v-btn",{attrs:{color:"blue",text:""},on:{click:e.resetPassword}},[e._v("\u786E\u8BA4")])],1)],1)],1)]],2),s("v-dialog",{attrs:{width:"300"},model:{value:e.showChangeUserStatus,callback:function(t){e.showChangeUserStatus=t},expression:"showChangeUserStatus"}},[[s("v-container",{staticClass:"pa-0"},[s("v-card",[s("v-card-title",{staticClass:"headline font-weight text-left"},[e._v(" \u4FEE\u6539\u7528\u6237"+e._s(e.userStatusDialogMessage.name)+"\u7684\u72B6\u6001 ")]),s("v-divider"),s("v-card-text",[s("v-radio-group",{model:{value:e.selectedStatus,callback:function(t){e.selectedStatus=t},expression:"selectedStatus"}},e._l(e.statusList,function(t){return s("v-radio",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"red",text:""},on:{click:e.closeChangeUserStatusDialog}},[e._v("\u53D6\u6D88")]),s("v-btn",{attrs:{color:"blue",text:""},on:{click:e.changeStatus}},[e._v("\u786E\u8BA4\u4FEE\u6539")])],1)],1)],1)]],2),s("v-dialog",{attrs:{width:"500"},model:{value:e.showUserProfile,callback:function(t){e.showUserProfile=t},expression:"showUserProfile"}},[[s("v-container",{staticClass:"pa-0"},[s("v-card",[s("v-card-title",{staticClass:"headline font-weight text-left"},[e._v(" \u7528\u6237"+e._s(e.userProfileDialogMessage.name)+"\u7684\u4E2A\u4EBA\u4FE1\u606F ")]),s("v-divider"),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"red",text:""},on:{click:e.closeUserProfileDialog}},[e._v("\u5173\u95ED")]),s("v-btn",{attrs:{color:"blue",text:""},on:{click:e.saveProfile}},[e._v("\u786E\u8BA4\u4FEE\u6539")])],1)],1)],1)]],2)],1)},c=[],u=l(i,n,c,!1,null,"1b89a7cb",null,null);const d=u.exports;export{d as default};
