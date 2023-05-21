System.register(["./index-legacy.3537b309.js","./project_messages.vue_vue_type_style_index_0_scoped_4bf38cfc_lang-legacy.bf004be9.js"],(function(e,s){"use strict";var c,t;return{setters:[function(e){c=e.n,t=e.j},function(){}],execute:function(){e("default",c({inject:{user:{default:null}},data:function(){return{search:"",headers:[{text:"项目名",align:"start",value:"name"},{text:"创建人",value:"leader"},{text:"创建人邮箱",value:"email"},{text:"创建时间",value:"createTime"},{text:"完成进度",value:"progress"},{text:"状态",value:"access"},{text:"",sortable:!1,value:"changeAccess"},{text:"",sortable:!1,value:"projectDetail"}],projectMessages:[],showChangeProjectAccess:!1,changeProjectAccessMessage:"",selectedAccess:"",accessList:[{label:"正常",value:"A"},{label:"禁用",value:"B"}]}},created:function(){this.showProjectMessages()},methods:{showProjectMessages:function(){var e=this;console.log(this.user.id),t.post("/api/management/showAllProjects",{managerId:this.user.id}).then((function(s){console.log(s),1===s.data.errcode?window.alert("您没有权限"):e.projectMessages=s.data.projects})).catch((function(s){console.error(s),e.projectMessages=null}))},openChangeProjectAccessDialog:function(e){console.log(e),this.changeProjectAccessMessage=e,this.selectedAccess=e.access,this.showChangeProjectAccess=!0},closeChangeProjectAccessDialog:function(){this.showChangeProjectAccess=!1},changeAccess:function(){var e=this;console.log(this.selectedAccess);var s=this.changeProjectAccessMessage.projectId,c=this.user.id;t.post("/api/management/changeProjectAccess",{managerId:c,projectId:s,changeToAccess:this.selectedAccess}).then((function(s){if(e.showChangeProjectAccess=!1,console.log(s.data),1===s.data.errcode)e.$message({type:"error",message:"您没有权限"});else if(2===s.data.errcode){var c;c="A"===e.selectedAccess?"正常":"禁用",e.$message({type:"success",message:"项目"+e.changeProjectAccessMessage.name+"的状态已为"+c})}else"A"===e.selectedAccess?e.$message({type:"success",message:"成功将项目"+e.changeProjectAccessMessage.name+"的状态恢复为正常"}):e.$message({type:"success",message:"成功将项目"+e.changeProjectAccessMessage.name+"的状态修改为禁用"}),e.showProjectMessages();e.changeProjectAccessMessage="",e.selectedAccess=""})).catch((function(s){e.showChangeProjectAccess=!1,e.changeProjectAccessMessage="",e.selectedAccess="",console.error(s)}))},gotoProjectDetailPage:function(e){},getColor:function(e){return"A"===e?"green":"B"===e?"red":void 0},transform:function(e){return"A"===e?"正常":"B"===e?"禁用":void 0}}},(function(){var e=this,s=e._self._c;return s("v-container",[s("v-card",[s("v-card-title",[s("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"搜索","single-line":"","hide-details":""},model:{value:e.search,callback:function(s){e.search=s},expression:"search"}})],1),s("v-data-table",{attrs:{headers:e.headers,items:e.projectMessages,search:e.search},scopedSlots:e._u([{key:"item.access",fn:function(c){var t=c.item;return[s("v-chip",{attrs:{color:e.getColor(t.access),dark:""},on:{click:function(s){return e.openChangeProjectAccessDialog(t)}}},[e._v(" "+e._s(e.transform(t.access))+" ")])]}},{key:"item.progress",fn:function(s){var c=s.item;return[e._v(" "+e._s(c.progress)+" % ")]}},{key:"item.projectDetail",fn:function(c){var t=c.item;return[s("v-btn",{staticClass:"ml-1",attrs:{small:"",outlined:""},on:{click:function(s){return e.gotoProjectDetailPage(t)}}},[e._v("项目详细信息")])]}}])})],1),s("v-dialog",{attrs:{width:"300"},model:{value:e.showChangeProjectAccess,callback:function(s){e.showChangeProjectAccess=s},expression:"showChangeProjectAccess"}},[[s("v-container",{staticClass:"pa-0"},[s("v-card",[s("v-card-title",{staticClass:"headline font-weight text-left"},[e._v(" 修改项目状态 ")]),s("v-card-text",[e._v(" 项目名:"+e._s(e.changeProjectAccessMessage.name)+" / 创建人:"+e._s(e.changeProjectAccessMessage.leader))]),s("v-divider"),s("v-card-text",[s("v-radio-group",{model:{value:e.selectedAccess,callback:function(s){e.selectedAccess=s},expression:"selectedAccess"}},e._l(e.accessList,(function(e){return s("v-radio",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"red",text:""},on:{click:e.closeChangeProjectAccessDialog}},[e._v("取消")]),s("v-btn",{attrs:{color:"blue",text:""},on:{click:e.changeAccess}},[e._v("确认修改")])],1)],1)],1)]],2)],1)}),[],!1,null,"4bf38cfc",null,null).exports)}}}));
