import{n as i,q as l}from"./index.75fbe3be.js";const t={inject:{user:{default:null}},data(){return{msg:null,data:'{"managerId": 1}',search:"",headers:[{text:"\u7528\u6237\u540D",align:"start",value:"name"},{text:"\u90AE\u7BB1",value:"email"},{text:"\u767B\u5F55\u65F6\u95F4",value:"loginTime"}],loginMessages:[{name:"Frozen Yogurt",email:"123@qq.com",loginTime:"2023.1.1"},{name:"aaaa",email:"1920@qq.com",loginTime:"2023.1.2"},{name:"hfsak",email:"4239@qq.com",loginTime:"2023.1.3"},{name:"Frozen Yogurt",email:"123@qq.com",loginTime:"2023.1.1"},{name:"Frozen Yogurt",email:"123@qq.com",loginTime:"2023.1.1"}]}},created(){this.showLoginMessages()},methods:{showLoginMessages(){l.post("/api/management/showUsersLogin",{managerId:this.user.id}).then(e=>{console.log(e),e.data.errcode===1?window.alert("\u60A8\u6CA1\u6709\u6743\u9650"):this.loginMessages=e.data.loginMessages}).catch(e=>{console.error(e),this.loginMessages=null})}}};var o=function(){var a=this,s=a._self._c;return s("v-container",[s("v-card",[s("v-card-title",[s("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"\u641C\u7D22","single-line":"","hide-details":""},model:{value:a.search,callback:function(n){a.search=n},expression:"search"}})],1),s("v-data-table",{attrs:{headers:a.headers,items:a.loginMessages,search:a.search}})],1)],1)},r=[],m=i(t,o,r,!1,null,"9c063ad7",null,null);const g=m.exports;export{g as default};
