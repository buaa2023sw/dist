import{n as l,l as a,o as c,p as m,q as i,t as p,u as f}from"./index.67177f41.js";const n="/assets/search.684cf793.png",d={name:"AllProject",created(){this.get_project()},inject:{user:{defualt:null},selectedProj:{defualt:null},updateUserProj:{default:null}},data(){return{labelPosition:"left",headers:[{text:"\u540D\u79F0",align:"start",sortable:!1,value:"projectName"},{text:"\u72B6\u6001",value:"state"},{text:"\u521B\u5EFA\u65F6\u95F4",value:"deadline",sortable:!0},{text:"\u8D1F\u8D23\u4EBA",value:"managerName"},{text:"",value:"actions",sortable:!1},{text:"",value:"data-table-expand"}],projectData:[],search:"",setupDialog:!1,editDialog:!1,form:{name:"",intro:"",id:""},expanded:[]}},methods:{getProj(t){console.log("getProj"),console.log(JSON.stringify(t)),a.set("proj",JSON.stringify(t)),window.location.href="/allTask"},filterOnlyCapsText(t,e,o){console.log(t);var s=o.projectName;return s!=null&&e!=null&&typeof s=="string"&&s.toString().toLocaleUpperCase().indexOf(e.toLocaleUpperCase())!==-1},get_project(){a.remove("proj"),console.log("get_project"),c({userId:this.user.id}).then(t=>{this.projectData=t.data.data,console.log(this.projectData)})},handleEdit(t){this.form.id=t.projectId,this.form.name=t.projectName,this.form.intro=t.projectIntro,this.editDialog=!0},handleClose(t){this.$confirm("\u786E\u8BA4\u5173\u95ED\uFF1F").then(()=>{t()}).catch(()=>{})},handleDelete(t){this.$confirm("\u6B64\u64CD\u4F5C\u5C06\u6C38\u4E45\u5220\u9664\u8BE5\u9879\u76EE, \u662F\u5426\u7EE7\u7EED?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{this.$message({type:"success",message:"\u5220\u9664\u6210\u529F!"}),m({projectId:t.projectId,userId:this.user.id}).then(e=>{this.get_project(),this.updateUserProj()})}).catch(()=>{this.$message({type:"info",message:"\u5DF2\u53D6\u6D88\u5220\u9664"})})},handleState(t){t.state=="B"?this.handleComplete(t):t.state=="A"&&this.handleNotComplete(t)},handleComplete(t){this.$confirm("\u786E\u5B9A\u5DF2\u5B8C\u6210\u9879\u76EE?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{this.$message({type:"success",message:"\u9879\u76EE\u5DF2\u5B8C\u6210!"}),i({projectId:t.projectId,userId:this.user.id,status:"A"}).then(e=>{console.log(e),this.get_project()})}).catch(()=>{this.$message({type:"info",message:"\u5DF2\u53D6\u6D88"})})},handleNotComplete(t){this.$confirm("\u786E\u5B9A\u91CD\u65B0\u8FDB\u884C\u9879\u76EE?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{this.$message({type:"success",message:"\u9879\u76EE\u5DF2\u6062\u590D\u8FDB\u884C!"}),i({projectId:t.projectId,userId:this.user.id,status:"B"}).then(e=>{console.log(e),this.get_project()})}).catch(()=>{this.$message({type:"info",message:"\u5DF2\u53D6\u6D88"})})},cancelSetupProject(){this.setupDialog=!1,this.form={name:"",intro:""}},setupProject(){if(this.form.name.trim()===""){this.$message({type:"error",message:"\u9879\u76EE\u540D\u4E0D\u80FD\u4E3A\u7A7A\uFF01"});return}for(let t=0;t<this.projectData.length;t++)if(this.form.name===this.projectData[t].projectName){this.$message({type:"error",message:"\u5DF2\u5B58\u5728\u540C\u540D\u9879\u76EE"});return}this.setupDialog=!1,p({projectName:this.form.name,projectIntro:this.form.intro,userId:this.user.id}).then(t=>{console.log(this.user.id),console.log(t),this.updateUserProj(),this.get_project()}),this.form={name:"",intro:""}},editProject(){if(this.form.name.trim()===""){this.$message({type:"error",message:"\u9879\u76EE\u540D\u4E0D\u80FD\u4E3A\u7A7A\uFF01"});return}for(let t=0;t<this.projectData.length;t++)if(this.form.name===this.projectData[t].projectName&&this.form.id!=this.projectData[t].projectId){this.$message({type:"error",message:"\u5DF2\u5B58\u5728\u540C\u540D\u9879\u76EE"});return}this.editDialog=!1,f({projectId:this.form.id,projectName:this.form.name,projectIntro:this.form.intro}).then(t=>{this.get_project(),this.updateUserProj()})},transform(t){if(t==="A")return"\u5DF2\u5B8C\u6210";if(t==="B")return"\u8FDB\u884C\u4E2D";if(t==="C")return"\u672A\u5F00\u59CB";if(t==="D")return"\u4E0D\u5408\u6CD5"},getColor(t){if(t==="A")return"blue";if(t==="B")return"green"}}};var u=function(){var e=this,o=e._self._c;return o("div",{staticStyle:{width:"100%",height:"100%"}},[e._m(0),o("div",{staticClass:"three"},[o("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.projectData,"single-expand":!0,"items-per-page":5,"show-expand":"",expanded:e.expanded,"item-key":"projectId",search:e.search,"custom-filter":e.filterOnlyCapsText},on:{"update:expanded":function(s){e.expanded=s}},scopedSlots:e._u([{key:"no-data",fn:function(){return[o("div",{staticStyle:{"text-align":"center"}},[o("img",{attrs:{src:n,height:"150px",width:"150px"}})]),o("div",{staticStyle:{"font-size":"20px","font-weight":"bold"}},[e._v(" \u6CA1\u6709\u627E\u5230\u6570\u636E ")])]},proxy:!0},{key:"no-results",fn:function(){return[o("div",{staticStyle:{"text-align":"center"}},[o("img",{attrs:{src:n,height:"150px",width:"150px"}})]),o("div",{staticStyle:{"font-size":"20px","font-weight":"bold"}},[e._v(" \u6CA1\u6709\u627E\u5230\u6570\u636E ")])]},proxy:!0},{key:"top",fn:function(){return[o("div",{staticStyle:{width:"100%",height:"100%",position:"relative"}},[o("v-text-field",{staticClass:"mx-4",staticStyle:{width:"30%",display:"inline-block"},attrs:{label:"\u8F93\u5165\u540D\u79F0"},model:{value:e.search,callback:function(s){e.search=s},expression:"search"}}),o("v-btn",{staticStyle:{top:"20%",right:"2%",height:"60%",width:"10%",position:"absolute"},attrs:{depressed:"",color:"primary"},on:{click:function(s){e.setupDialog=!0}}},[e._v("\u521B\u5EFA\u9879\u76EE")])],1)]},proxy:!0},{key:"expanded-item",fn:function({headers:s,item:r}){return[o("td",{attrs:{colspan:s.length}},[e._v(" "+e._s(r.projectIntro)+" ")])]}},{key:"item.managerName",fn:function({item:s}){return[o("div",{staticStyle:{position:"relative"}},[o("v-avatar",{attrs:{size:"25",color:"indigo"}},[o("span",{staticClass:"white--text text-h6"},[e._v(e._s(s.managerName[0]))])]),o("div",{staticStyle:{position:"absolute",left:"20%",bottom:"3%"}},[e._v(" "+e._s(s.managerName)+" ")])],1)]}},{key:"item.projectName",fn:function({item:s}){return[o("a",{on:{click:function(r){return e.getProj(s)}}},[e._v(e._s(s.projectName))])]}},{key:"item.actions",fn:function({item:s}){return[o("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(r){return e.handleEdit(s)}}},[e._v(" mdi-pencil ")]),o("v-icon",{attrs:{small:""},on:{click:function(r){return e.handleDelete(s)}}},[e._v(" mdi-delete ")])]}},{key:"item.state",fn:function({item:s}){return[o("v-chip",{attrs:{color:e.getColor(s.state),dark:""},on:{click:function(r){return e.handleState(s)}}},[e._v(" "+e._s(e.transform(s.state))+" ")])]}}],null,!0)})],1),o("el-dialog",{attrs:{title:"\u521B\u5EFA\u9879\u76EE",visible:e.setupDialog,width:"50%","before-close":e.handleClose},on:{"update:visible":function(s){e.setupDialog=s}}},[o("el-form",{ref:"form",attrs:{"label-position":e.labelPosition,"label-width":"80px",model:e.form}},[o("el-form-item",{attrs:{label:"\u9879\u76EE\u540D\u79F0"}},[o("el-input",{model:{value:e.form.name,callback:function(s){e.$set(e.form,"name",s)},expression:"form.name"}})],1),o("el-form-item",{attrs:{label:"\u6D3B\u52A8\u6982\u8FF0"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.form.intro,callback:function(s){e.$set(e.form,"intro",s)},expression:"form.intro"}})],1)],1),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:e.cancelSetupProject}},[e._v("\u53D6 \u6D88")]),o("el-button",{attrs:{type:"primary"},on:{click:e.setupProject}},[e._v("\u786E \u5B9A")])],1)],1),o("el-dialog",{attrs:{title:"\u7F16\u8F91\u9879\u76EE",visible:e.editDialog,width:"50%","before-close":e.handleClose},on:{"update:visible":function(s){e.editDialog=s}}},[o("el-form",{ref:"form",attrs:{"label-position":e.labelPosition,"label-width":"80px",model:e.form}},[o("el-form-item",{attrs:{label:"\u9879\u76EE\u540D\u79F0"}},[o("el-input",{model:{value:e.form.name,callback:function(s){e.$set(e.form,"name",s)},expression:"form.name"}})],1),o("el-form-item",{attrs:{label:"\u6D3B\u52A8\u6982\u8FF0"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.form.intro,callback:function(s){e.$set(e.form,"intro",s)},expression:"form.intro"}})],1)],1),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(s){e.editDialog=!1}}},[e._v("\u53D6 \u6D88")]),o("el-button",{attrs:{type:"primary"},on:{click:e.editProject}},[e._v("\u786E \u5B9A")])],1)],1)],1)},h=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"one"},[e("h1",{staticStyle:{position:"absolute",left:"5%",top:"10%"}},[t._v("\u9879\u76EE")])])}],g=l(d,u,h,!1,null,"b5e17973",null,null);const j=g.exports;export{j as default};
