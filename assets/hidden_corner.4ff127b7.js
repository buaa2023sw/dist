import{n as s,a as c,l as r}from"./index.8a781918.js";const i={name:"hidden_corner",data(){return{msg:null,url:"/api/management/showUsers",data:'{"managerId": 1}'}},methods:{getIdenticon:c,btnclick(){r.post(this.url,JSON.parse(this.data)).then(n=>{console.log(n),this.msg=n.data}).catch(n=>{console.log(n),this.msg=n})}}};var o=function(){var t=this,e=t._self._c;return e("v-main",[e("img",{attrs:{src:t.getIdenticon("20373866@buaa.edu.cn",80,"user"),width:"80px",height:"80px"}}),e("img",{attrs:{src:t.getIdenticon("20373866@buaa.edu.cn",100,"user"),width:"100px",height:"100px"}}),e("img",{attrs:{src:t.getIdenticon("20373866@buaa.edu.cn",200,"user"),width:"200px",height:"200px"}}),e("v-img",{attrs:{src:t.getIdenticon("20373866@buaa.edu.cn",200,"user"),width:"200px",height:"200px"}}),e("v-img",{attrs:{src:t.getIdenticon("20373866@buaa.edu.cn",200,"proj"),width:"200px",height:"200px"}}),e("v-textarea",{attrs:{label:"URL"},model:{value:t.url,callback:function(a){t.url=a},expression:"url"}}),e("v-textarea",{attrs:{label:"DATA"},model:{value:t.data,callback:function(a){t.data=a},expression:"data"}}),e("v-btn",{on:{click:function(a){return t.btnclick()}}},[t._v("test")]),e("div",[t._v(t._s(t.msg))])],1)},d=[],l=s(i,o,d,!1,null,"bb256cc5",null,null);const _=l.exports;export{_ as default};
