System.register(["./user-legacy.ed4f5faf.js","./index-legacy.c93422cc.js"],(function(t,e){"use strict";var n,o,a,i,s,r,l,c=document.createElement("style");return c.textContent=".one[data-v-ef65c2ff]{height:10%;position:relative}.two[data-v-ef65c2ff]{height:10%}.three[data-v-ef65c2ff]{position:absolute;left:5%;right:5%;height:80%}.xiangmu[data-v-ef65c2ff]{position:absolute;left:20%}.divider[data-v-ef65c2ff]{postion:relative;height:30px;width:30px}\n",document.head.appendChild(c),{setters:[function(t){n=t.s,o=t.a,a=t.b,i=t.r,s=t.c,r=t.w},function(t){l=t.n}],execute:function(){t("default",l({created:function(){this.getTaskList(),this.getPersonList()},data:function(){return{personNameList:[],personIdList:[],user:{id:1},selectedProj:{id:1},checkMyFlag:!1,search:"",setupFather:!1,setupSon:!1,setupAlarm:!1,detailFlag:!1,editTask:!1,menu:!1,menu1:!1,menu2:!1,sonContribute:0,myName:"罗本",options:["删除任务","编辑任务","详细信息","完成任务"],picker:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),newFatherForm:{name:""},allPerson:["石子瑄","zhaohuiya","ghy"],newSonForm:{name:"",endTime:"",contribute:"",managerName:"",fatherTaskId:""},newAlarmForm:{taskID:"",date:"",time:""},headers:[{text:"名称",align:"start",sortable:!1,value:"taskName"},{text:"开始时间",value:""},{text:"完成时间",value:"deadline"},{text:"贡献程度",value:"contribute"},{text:"状态",value:"state"},{text:"负责人",value:"managerId"},{text:"",value:"alarm",sortable:!1},{text:"",value:"action",sortable:!1}],tasks:[]}},methods:{getPersonList:function(){var t=this;n({projectId:this.selectedProj.id,userId:this.user.id}).then((function(e){console.log(e.data.data);for(var n=0;n<e.data.data.length;n++)t.personIdList.push(e.data.data[n].peopleId),t.personNameList.push(e.data.data[n].peopleName)}))},getTaskList:function(){var t=this;o({userId:this.user.id,projectId:this.selectedProj.id}).then((function(e){t.tasks=e.data.data,console.log(t.tasks)}))},newFather:function(){this.setupFather=!1,console.log(this.user.id),console.log(this.newFatherForm.name),a({userId:this.user.id,taskName:this.newFatherForm.name,projectId:this.selectedProj.id}).then((function(t){console.log(t)})),this.getTaskList()},deleteTask:function(t){var e=this;this.$confirm("此操作将移除该任务, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.$message({type:"success",message:"删除成功!"}),i({taskId:t.taskId,userId:e.user.id}).then((function(t){console.log(t)})),e.getTaskList()})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))},setupNewSon:function(t){this.setupSon=!0,this.newSonForm.fatherTaskId=t.taskId},newSon:function(){console.log(this.newSonForm.endTime);var t=this.personIdList[this.personNameList.indexOf(this.newSonForm.managerName)];s({userId:this.user.id,deadline:this.newSonForm.endTime,contribute:this.newSonForm.contribute,managerId:t,fatherTaskId:this.newSonForm.fatherTaskId,projectId:this.selectedProj.id,subTaskName:this.newSonForm.name}).then((function(t){console.log(t)})),console.log(this.newSonForm),this.setupSon=!1,this.newSonForm.contribute=0,this.newSonForm.fatherTaskId="",this.newSonForm.endTime="",this.newSonForm.managerName="",this.newSonForm.name=""},handleClose:function(t){this.$confirm("确认关闭？").then((function(){t()})).catch((function(){}))},checkMyTask:function(){var t=this;console.log(this.checkMyFlag),this.checkMyFlag=!0,r({userId:this.user.id,projectId:this.selectedProj.id}).then((function(e){t.tasks=e.data.data}))},checkAllTask:function(){this.getTaskList(),this.checkMyFlag=!1},newAlarm:function(){this.setupAlarm=!1},switchAction:function(t,e,n){"删除任务"==t?this.handleDelete(e,n):"编辑任务"==t?this.editTask=!0:"详细信息"==t?this.detailFlag=!0:"完成任务"==actino&&handleComplete()},handleComplete:function(){},handleDelete:function(t,e){var n=this;this.$confirm("此操作将移除该任务, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){n.$message({type:"success",message:"删除成功!"}),console.log(e),i({taskId:e.taskId,userId:n.user.id}).then((function(t){console.log(t)}))})).catch((function(){n.$message({type:"info",message:"已取消删除"})}))},editSubTask:function(){},transform:function(t){return"A"==t?"已完成":"B"==t?"进行中":"C"==t?"未开始":"D"==t?"不合法":void 0},getName:function(t){return console.log(this.personIdList),console.log(this.personNameList),this.personNameList[this.personIdList.indexOf(t)]}}},(function(){var t=this,e=t._self._c;return e("div",{staticStyle:{width:"100%",height:"100%"}},[t._m(0),e("div",{staticClass:"three"},[e("v-text-field",{staticStyle:{width:"400px"},attrs:{label:"搜索任务"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),e("v-btn",{staticStyle:{position:"absolute",top:"1%",right:"30%",height:"4%",width:"10%"},attrs:{depressed:"",color:"primary"},on:{click:function(e){t.setupDialog=!0}}},[e("v-icon",{attrs:{left:""}},[t._v(" mdi-align-vertical-bottom ")]),t._v(" 图表展示")],1),0==t.checkMyFlag?e("v-btn",{staticStyle:{position:"absolute",top:"1%",right:"17%",height:"4%",width:"10%"},attrs:{depressed:"",color:"primary"},on:{click:t.checkMyTask}},[t._v("查看我的任务")]):e("v-btn",{staticStyle:{position:"absolute",top:"1%",right:"17%",height:"4%",width:"10%"},attrs:{depressed:"",color:"primary"},on:{click:t.checkAllTask}},[t._v("查看全部任务")]),e("v-btn",{staticStyle:{position:"absolute",top:"1%",right:"1%",height:"4%",width:"10%"},attrs:{depressed:"",color:"primary"},on:{click:function(e){t.setupFather=!0}}},[t._v("创建任务")]),e("v-container",{staticClass:"grey lighten-5",staticStyle:{position:"relative"},attrs:{fluid:""}},[e("v-data-iterator",{staticStyle:{width:"100%",position:"absolute"},attrs:{items:t.tasks,"item-key":"taskId","hide-default-footer":"","single-expand":!1},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.items,a=n.isExpanded,i=n.expand;return t._l(o,(function(n){return e("v-row",{key:n.taskId,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[e("v-card",{staticStyle:{width:"100%",position:"relative"}},[e("v-card-title",[e("h4",[t._v(t._s(n.taskName))]),e("v-switch",{staticClass:"pl-4 mt-0",staticStyle:{position:"absolute",right:"1%"},attrs:{"input-value":a(n)},on:{change:function(t){return i(n,t)}}})],1),e("v-divider"),a(n)?e("v-data-table",{staticClass:"elevation-1",attrs:{search:t.search,headers:t.headers,items:n.subTaskList,"items-per-page":5,"item-key":"name"},scopedSlots:t._u([{key:"item.state",fn:function(n){var o=n.item;return[e("div",[t._v(t._s(t.transform(o.state)))])]}},{key:"item.managerId",fn:function(n){var o=n.item;return[e("div",[t._v(t._s(t.getName(o.managerId)))])]}},{key:"item.contribute",fn:function(n){var o=n.item;return[e("div",[t._v(t._s(o.contribute)+"%")])]}},{key:"item.deadline",fn:function(n){var o=n.item;return[e("div",[t._v(t._s(o.deadline.slice(0,10)))])]}},{key:"item.alarm",fn:function(n){return n.item,[e("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){t.setupAlarm=!0}}},[t._v(" mdi-alarm ")])]}},{key:"item.action",fn:function(n){var o=n.item,a=n.index;return[e("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,a=n.attrs;return[e("v-icon",t._g(t._b({staticClass:"mr-2",attrs:{small:""}},"v-icon",a,!1),o),[t._v(" mdi-dots-horizontal ")])]}}],null,!0)},[e("v-list",t._l(t.options,(function(n){return e("v-list-item",{key:n.name},[e("v-btn",{attrs:{text:""},on:{click:function(e){return t.switchAction(n,a,o)}}},[t._v(t._s(n))])],1)})),1)],1)]}},{key:"foot",fn:function(o){return o.item,[e("v-icon",{staticClass:"mr-2",staticStyle:{position:"absolute",left:"1.5%",top:"82%"},attrs:{large:""},on:{click:function(e){return t.setupNewSon(n)}}},[t._v(" mdi-plus-box ")]),e("v-icon",{staticStyle:{position:"absolute",left:"6%",top:"82%"},attrs:{large:""},on:{click:function(e){return t.deleteTask(n)}}},[t._v(" mdi-delete ")])]}}],null,!0)}):t._e()],1),e("div",{staticClass:"divider"})],1)}))}}])})],1)],1),e("el-dialog",{attrs:{title:"创建任务",visible:t.setupFather,width:"50%","before-close":t.handleClose},on:{"update:visible":function(e){t.setupFather=e}}},[e("el-form",{ref:"newFatherForm",attrs:{"label-position":t.left,"label-width":"80px",model:t.newFatherForm}},[e("el-form-item",{attrs:{label:"任务名称"}},[e("el-input",{model:{value:t.newFatherForm.name,callback:function(e){t.$set(t.newFatherForm,"name",e)},expression:"newFatherForm.name"}})],1)],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.setupFather=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.newFather}},[t._v("确 定")])],1)],1),e("el-dialog",{attrs:{title:"创建子任务",visible:t.setupSon,width:"50%","before-close":t.handleClose},on:{"update:visible":function(e){t.setupSon=e}}},[e("el-form",{ref:"newSonForm",attrs:{"label-position":t.left,"label-iwdth":"80px",model:t.newSonForm}},[e("el-form-item",{attrs:{label:"子任务名称"}},[e("el-input",{model:{value:t.newSonForm.name,callback:function(e){t.$set(t.newSonForm,"name",e)},expression:"newSonForm.name"}})],1),e("el-form-item",[e("p1",[t._v("完成时间")]),e("v-menu",{attrs:{"close-on-content-click":!1,"return-value":t.sad,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(e){t.sad=e},"update:return-value":function(e){t.sad=e}},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,a=n.attrs;return[e("v-combobox",t._g(t._b({attrs:{chips:"","small-chips":"",label:"请选择日期","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.newSonForm.endTime,callback:function(e){t.$set(t.newSonForm,"endTime",e)},expression:"newSonForm.endTime"}},"v-combobox",a,!1),o))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[e("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.newSonForm.endTime,callback:function(e){t.$set(t.newSonForm,"endTime",e)},expression:"newSonForm.endTime"}},[e("v-spacer"),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v(" Cancel ")]),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v(" OK ")])],1)],1)],1),e("el-form-item",{attrs:{label:"贡献程度"}},[e("v-slider",{staticStyle:{position:"relative",bottom:"-5px"},attrs:{int:"Im a hint",max:"100",min:"0",step:"1","thumb-label":""},model:{value:t.newSonForm.contribute,callback:function(e){t.$set(t.newSonForm,"contribute",e)},expression:"newSonForm.contribute"}})],1),e("p1",{staticStyle:{top:"5%"}},[t._v("负责人")]),e("v-select",{attrs:{items:t.personNameList},model:{value:t.newSonForm.managerName,callback:function(e){t.$set(t.newSonForm,"managerName",e)},expression:"newSonForm.managerName"}})],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.setupSon=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.newSon}},[t._v("确 定")])],1)],1),e("el-dialog",{attrs:{title:"设置提醒时间",visible:t.setupAlarm,width:"25%","before-close":t.handleClose},on:{"update:visible":function(e){t.setupAlarm=e}}},[e("el-form",{ref:"newFatherForm",staticStyle:{poition:"relative"},attrs:{"label-position":t.left,"label-width":"80px",model:t.newFatherForm}},[e("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,a=n.attrs;return[e("v-combobox",t._g(t._b({staticStyle:{width:"100%"},attrs:{chips:"","small-chips":"",label:"请选择日期","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.newAlarmForm.date,callback:function(e){t.$set(t.newAlarmForm,"date",e)},expression:"newAlarmForm.date"}},"v-combobox",a,!1),o))]}}]),model:{value:t.menu1,callback:function(e){t.menu1=e},expression:"menu1"}},[e("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.newAlarmForm.date,callback:function(e){t.$set(t.newAlarmForm,"date",e)},expression:"newAlarmForm.date"}},[e("v-spacer"),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu1=!1}}},[t._v(" Cancel ")]),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu1=!1}}},[t._v(" OK ")])],1)],1),e("v-menu",{staticStyle:{width:"100%"},attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,a=n.attrs;return[e("v-combobox",t._g(t._b({staticStyle:{width:"100%"},attrs:{chips:"","small-chips":"",label:"请选择时间","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.newAlarmForm.time,callback:function(e){t.$set(t.newAlarmForm,"time",e)},expression:"newAlarmForm.time"}},"v-combobox",a,!1),o))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[e("v-time-picker",{staticClass:"mt-4",attrs:{"allowed-hours":t.allowedHours,"allowed-minutes":t.allowedMinutes,format:"24hr",scrollable:""},model:{value:t.newAlarmForm.time,callback:function(e){t.$set(t.newAlarmForm,"time",e)},expression:"newAlarmForm.time"}},[e("v-spacer"),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu2=!1}}},[t._v(" Cancel ")]),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu2=!1}}},[t._v(" OK ")])],1)],1)],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.setupAlarm=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.newAlarm}},[t._v("确 定")])],1)],1),e("el-dialog",{attrs:{title:"编辑子任务",visible:t.editTask,width:"50%","before-close":t.handleClose},on:{"update:visible":function(e){t.editTask=e}}},[e("el-form",{ref:"newSonForm",attrs:{"label-position":t.left,"label-iwdth":"80px",model:t.newSonForm}},[e("el-form-item",{attrs:{label:"子任务名称"}},[e("el-input",{model:{value:t.newSonForm.name,callback:function(e){t.$set(t.newSonForm,"name",e)},expression:"newSonForm.name"}})],1),e("el-form-item",[e("p1",[t._v("完成时间")]),e("v-menu",{attrs:{"close-on-content-click":!1,"return-value":t.sad,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(e){t.sad=e},"update:return-value":function(e){t.sad=e}},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,a=n.attrs;return[e("v-combobox",t._g(t._b({attrs:{chips:"","small-chips":"",label:"请选择日期","prepend-icon":"mdi-calendar",readonly:""},model:{value:t.newSonForm.endTime,callback:function(e){t.$set(t.newSonForm,"endTime",e)},expression:"newSonForm.endTime"}},"v-combobox",a,!1),o))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[e("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.newSonForm.endTime,callback:function(e){t.$set(t.newSonForm,"endTime",e)},expression:"newSonForm.endTime"}},[e("v-spacer"),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.editSubTask}},[t._v(" 确定 ")])],1)],1)],1),e("el-form-item",{attrs:{label:"贡献程度"}},[e("v-slider",{staticStyle:{position:"relative",bottom:"-5px"},attrs:{int:"Im a hint",max:"100",min:"0",step:"1","thumb-label":""},model:{value:t.newSonForm.contribute,callback:function(e){t.$set(t.newSonForm,"contribute",e)},expression:"newSonForm.contribute"}})],1),e("p1",{staticStyle:{top:"5%"}},[t._v("负责人")]),e("v-select",{attrs:{items:t.personNameList},model:{value:t.newSonForm.managerId,callback:function(e){t.$set(t.newSonForm,"managerId",e)},expression:"newSonForm.managerId"}})],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.editTask=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.newSon}},[t._v("确 定")])],1)],1),e("el-dialog",{attrs:{"no-title":"",visible:t.detailFlag,width:"50%","before-close":t.handleClose},on:{"update:visible":function(e){t.detailFlag=e}}},[e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[e("v-card-text",[e("div",[t._v("Word of the Day")]),e("p",{staticClass:"text-h4 text--primary"},[t._v(" be•nev•o•lent ")]),e("p",[t._v("adjective")]),e("div",{staticClass:"text--primary"},[t._v(" well meaning and kindly."),e("br"),t._v(' "a benevolent smile" ')])]),e("v-card-actions",[e("v-btn",{attrs:{text:"",color:"deep-purple accent-4"}},[t._v(" Learn More ")])],1)],1)],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"one"},[t("h1",{staticStyle:{position:"absolute",left:"5%",top:"10%"}},[this._v("任务列表")])])}],!1,null,"ef65c2ff",null,null).exports)}}}));
