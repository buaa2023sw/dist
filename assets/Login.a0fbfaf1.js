import{u as r}from"./util.06b4a6d2.js";import{d as l,n as o,j as i}from"./index.92fa158c.js";import{s as n}from"./sha256.2abfe948.js";l.get("user")!==void 0&&(window.location.href="/allProject");const c={name:"login",data(){return{userNameOrEmail:"",password:"",noEncrypt:!1}},methods:{valid(){return this.userNameOrEmail!==""&&this.password!==""},async login(){if(!r.trim(this.userNameOrEmail)||!r.trim(this.password)){this.$message({type:"error",message:"\u7528\u6237\u540D\u6216\u90AE\u7BB1\u3001\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"});return}let a=this.noEncrypt?this.password:n.exports.sha256(this.password);console.log(a),i.post("/api/login",{userNameOrEmail:this.userNameOrEmail,password:a}).then(t=>{console.log(t.data),t.data.errcode===1?this.$message({type:"error",message:"\u7528\u6237\u4E0D\u5B58\u5728"}):t.data.errcode===2?this.$message({type:"error",message:"\u5BC6\u7801\u9519\u8BEF\uFF0C\u5982\u679C\u4F60\u662F\u65E9\u4E9B\u65F6\u5019\u6CE8\u518C\u7684\u8D26\u6237\uFF0C\u8BD5\u8BD5\u4E0D\u4EE5\u52A0\u5BC6\u5F62\u5F0F\u4F20\u8F93\u5BC6\u7801"}):t.data.errcode===3?this.$message({type:"error",message:"\u60A8\u7684\u8D26\u6237\u76EE\u524D\u5DF2\u88AB\u7981\u7528"}):(l.set("user",JSON.stringify(t.data.data)),this.$message({type:"success",message:"\u767B\u5F55\u6210\u529F"}),t.data.data.status==="C"?window.location.href="/manager/home":window.location.href="/allProject")}).catch(t=>{console.error(t)})}}};var d=function(){var t=this,s=t._self._c;return s("v-container",{attrs:{fluid:""}},[s("v-row",{staticClass:"blue lighten-5",staticStyle:{"min-height":"calc(100vh - 64px)"},attrs:{align:"center",justify:"center"}},[s("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12",sm:"8",md:"6",lg:"4"}},[s("v-card",{staticClass:"elevation-12",staticStyle:{"max-width":"500px"}},[s("v-card-text",{staticClass:"mt-4 mb-4"},[s("v-form",{on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[s("v-row",[s("v-col",{staticClass:"mb-3",attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"\u7528\u6237\u540D\u6216\u90AE\u7BB1",outlined:"",dense:""},model:{value:t.userNameOrEmail,callback:function(e){t.userNameOrEmail=e},expression:"userNameOrEmail"}})],1),s("v-col",{staticClass:"mb-3",attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"\u5BC6\u7801",outlined:"",dense:"",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),s("v-col",{staticClass:"mb-3",attrs:{cols:"12"}},[s("v-checkbox",{attrs:{label:"\u4E0D\u4EE5\u52A0\u5BC6\u5F62\u5F0F\u4F20\u8F93\u5BC6\u7801\uFF08\u9002\u7528\u4E8E\u4EE5\u524D\u6CE8\u518C\u7684\u5E10\u6237\uFF09","hide-details":""},model:{value:t.noEncrypt,callback:function(e){t.noEncrypt=e},expression:"noEncrypt"}})],1),s("v-col",{staticClass:"mb-3",attrs:{cols:"12"}},[s("v-btn",{staticClass:"white--text",attrs:{color:"blue darken-2",disabled:!t.valid(),block:""},on:{click:t.login}},[t._v("\u767B\u5F55")])],1),s("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[s("span",{staticClass:"caption grey--text text--darken-1"},[t._v("\u6CA1\u6709\u8D26\u53F7\uFF1F")]),s("v-btn",{staticClass:"grey--text text--darken-1",attrs:{color:"transparent",text:""},on:{click:function(e){return t.$router.push("/register")}}},[t._v("\u524D\u5F80\u6CE8\u518C")])],1)],1)],1)],1)],1)],1)],1)],1)},m=[],u=o(c,d,m,!1,null,"993d6d50",null,null);const h=u.exports;export{h as default};
