System.register(["./echarts-legacy.90c1e974.js","./index-legacy.2dfb00d7.js","./echarts-legacy.2e12b6e6.js"],(function(t,e){"use strict";var a,r,i,n,s=document.createElement("style");return s.textContent=".chart-container[data-v-e93fd9f4]{width:100%;height:500px}\n",document.head.appendChild(s),{setters:[function(t){a=t.e},function(t){r=t.n,i=t.l},function(t){n=t.e}],execute:function(){var e=[{icon:"mdi-account-multiple",color:"blue",title:"用户总数",text:"8（人）"},{icon:"mdi-book-edit-outline",color:"cyan",title:"项目总数",text:"1100（个）"}];t("default",r({inject:{user:{default:null}},components:{},data:function(){return{indicators:e,chartData:[],headers:[{text:"项目规模",value:"name"},{text:"个数",value:"value"}]}},mounted:function(){var t=this;i.post("/api/management/getProjectsScale",{managerId:this.user.id}).then((function(e){if(console.log(e),1===e.data.errcode)window.alert("您没有权限"),t.upPie(null);else{var a=[{value:e.data.tinyNum,name:"微小型（1~3人）"},{value:e.data.smallNum,name:"小型（4~7人）"},{value:e.data.mediumNum,name:"中型（8~15人）"},{value:e.data.bigNum,name:"大型（16~30人）"},{value:e.data.largeNum,name:"巨大型（>30人）"}];t.upPie(a)}})).catch((function(e){console.error(e),t.upPie(null)}))},created:function(){this.getUserNum(),this.getProjectNum()},methods:{getUserNum:function(){var t=this;i.post("/api/management/getUserNum",{managerId:this.user.id}).then((function(e){console.log(e),1===e.data.errcode?(window.alert("您没有权限"),t.indicators[0].text="error"):t.indicators[0].text=e.data.userSum+"（人）"})).catch((function(e){console.error(e),t.indicators[0].text="error"}))},getProjectNum:function(){var t=this;this.indicators[1].text="2（个）",i.post("/api/management/getProjectNum",{managerId:this.user.id}).then((function(e){console.log(e),1===e.data.errcode?(window.alert("您没有权限"),t.indicators[1].text="error"):t.indicators[1].text=e.data.projectSum+"（个）"})).catch((function(e){console.error(e),t.indicators[1].text="error"}))},upPie:function(t){this.chartData=t.map((function(t){return{name:t.name,value:t.value}})),console.log(a);var e=n.exports.init(this.$refs.myChart);window.addEventListener("resize",(function(){e.resize()})),console.log(e),e.setOption({title:{text:"",left:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",left:10,data:["微小型（1~3人）","小型（4~7人）","中型（8~15人）","大型（16~30人）","巨大型（>30人）"]},series:[{name:"项目规模",type:"pie",radius:["50%","70%"],center:["50%","50%"],avoidLabelOverlap:!1,label:{show:!1,position:"center"},labelLine:{show:!1},data:t}]})}}},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"height-100pc mx-2 goods-home"},[e("v-row",{staticClass:"my-3",attrs:{justify:"center"}},[t._l(t.indicators,(function(a,r){return[e("v-col",{key:r,staticClass:"mb-4",attrs:{cols:"12",md:"3"}},[e("v-hover",{scopedSlots:t._u([{key:"default",fn:function(r){var i=r.hover;return[e("v-card",{staticClass:"item-card",class:{"on-hover":i},attrs:{elevation:i?12:2}},[e("v-row",[e("v-col",{staticClass:"align-center",attrs:{md:"6"}},[e("v-icon",{attrs:{color:a.color,size:"100"}},[t._v(t._s(a.icon))])],1),e("v-col",{staticClass:"align-center justify-center flex-column",attrs:{md:"6"}},[e("div",{staticClass:"text-h5 text-center"},[t._v(t._s(a.title))]),e("div",{staticClass:"text-h7 text-center"},[t._v(t._s(a.text))])])],1)],1)]}}],null,!0)})],1)]}))],2),e("v-row",[[e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"6"}},[e("v-card",{staticClass:"fill-height"},[e("v-card-title",{staticClass:"white"},[t._v("不同规模项目个数-饼状图")]),e("v-card-text",{staticClass:"d-flex flex-column",staticStyle:{width:"100%",height:"100%"}},[e("div",{ref:"myChart",staticStyle:{height:"300px"}})])],1)],1),e("v-col",{attrs:{cols:"6"}},[e("v-card",{staticClass:"fill-height"},[e("v-card-title",{staticClass:"white"},[t._v("不同规模项目个数-表格")]),e("v-card-text",[e("v-data-table",{attrs:{headers:t.headers,items:t.chartData,"hide-default-footer":""},scopedSlots:t._u([{key:"item.value",fn:function(e){var a=e.item;return[t._v(" "+t._s(a.value)+" ")]}}])}),0===t.chartData.length?e("div",[t._v("暂无数据")]):t._e()],1)],1)],1)],1)],1)]],2)],1)}),[],!1,null,"e93fd9f4",null,null).exports)}}}));
