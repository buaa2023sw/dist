import{a as D,e as w}from"./echarts.a3eddce5.js";import{n as v,t as y}from"./index.e8c38c50.js";const x={data(){return{chartData:{workloads:[],expectedDates:[],actualDates:[],dates:[],resWorkloads:[]}}},mounted(){this.drawP(),this.drawB()},inject:{user:{default:null}},methods:{transform(a){if(a==="A")return"\u5DF2\u5B8C\u6210";if(a==="B")return"\u8FDB\u884C\u4E2D";if(a==="C")return"\u672A\u5F00\u59CB";if(a==="D")return"\u4E0D\u5408\u6CD5"},getColor(a){if(a==="A")return"green";if(a==="B")return"orange";if(a==="C")return"blue";if(a==="D")return"red"},drawP(){console.log(D);var a=w.exports.init(this.$refs.chart);window.addEventListener("resize",function(){a.resize()});let r=this.$route.query.projectItem,c=this.$route.query.projectItemStart,m=this.$route.query.projectItemEnd,f=this.$route.query.projectState,l=c.map(o=>new Date(o).valueOf());console.log(l);let h=m.map((o,e)=>new Date(o).valueOf()-l[e]);console.log(h);let n=l[0];for(let o=0;o<l.length;o++)l[o]<n&&(n=l[o]);console.log(n);var p={title:{text:"\u4EFB\u52A1\u8FDB\u5EA6\u663E\u793A\u56FE"},tooltip:{trigger:"axis",formatter:function(o){var e=o[1];let i=f[e.dataIndex],u=l[e.dataIndex],g=l[e.dataIndex]+h[e.dataIndex];var d;return i==="A"?d="\u5DF2\u5B8C\u6210":i==="B"?d="\u8FDB\u884C\u4E2D":i==="C"?d="\u672A\u5F00\u59CB":i==="D"?d="\u5EF6\u671F\u5DF2\u5B8C\u6210":i==="E"&&(d="\u5EF6\u671F\u672A\u5B8C\u6210"),e.name+"<br/>"+e.seriesName+" : "+new Date(u).getFullYear()+"-"+(new Date(u).getMonth()+1)+"-"+new Date(u).getDate()+"-->"+new Date(g).getFullYear()+"-"+(new Date(u).getMonth()+1)+"-"+new Date(g).getDate()+"<br/>\u72B6\u6001\uFF1A"+d}},grid:{left:"3%",right:"4%",bottom:"30%",containLabel:!0},yAxis:{type:"category",splitLine:{show:!1},data:r},xAxis:{type:"value",min:n,axisLabel:{color:"#333",formatter:function(o){let e=new Date(o);return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}}},series:[{name:"Placeholder",type:"bar",stack:"Total",itemStyle:{borderColor:"transparent",color:"transparent"},emphasis:{itemStyle:{borderColor:"transparent",color:"transparent"}},data:l},{name:"\u5468\u671F",type:"bar",stack:"Total",itemStyle:{normal:{color:function(o){let e=f[o.dataIndex];if(e==="A")return"green";if(e==="B")return"orange";if(e==="C")return"blue";if(e==="D")return"red";if(e==="E")return"yellow"}}},data:h}]};a.setOption(p)},drawB(){this.chartData.workloads=this.$route.query.workloads,this.chartData.expectedDates=this.$route.query.expectedDates;for(let t=0;t<this.chartData.workloads.length;t++)this.chartData.workloads[t]=parseInt(this.chartData.workloads[t]);for(let t=0;t<this.$route.query.actualDates.length;t++)this.$route.query.actualDates[t]!=="2050-12-31"&&this.chartData.actualDates.push(this.$route.query.actualDates[t]);let a=0;for(let t=0;t<this.chartData.workloads.length;t++)a+=this.chartData.workloads[t];console.log(a);let r=this.chartData.expectedDates.map(t=>new Date(t).valueOf()),c=[];for(let t=0;t<r.length;t++)c.push(r[t]);r.sort()[0];var m=new Set(r),f=Array.from(m);let l=[],h=a;for(let t=0;t<f.length;t++){for(let s=0;s<c.length;s++)c[s]==f[t]&&(h-=this.chartData.workloads[s]);l.push([f[t],h])}console.log(l);for(let t=0;t<this.chartData.actualDates.length;t++)this.chartData.actualDates[t]==""&&this.chartData.actualDates.splice(t,1);let n=this.chartData.actualDates.map(t=>new Date(t).valueOf()),p=[];for(let t=0;t<n.length;t++)p.push(n[t]);n.sort()[0];var o=new Set(n),e=Array.from(o);let i=[];h=a;for(let t=0;t<e.length;t++){for(let s=0;s<p.length;s++)p[s]==e[t]&&(h-=this.chartData.workloads[s]);i.push([e[t],h])}console.log(i);let u;n.length==0?u=r[0]:u=r[0]<n[0]?r[0]:n[0],u=u-24*60*60*1e3,i.push([u,a]),l.push([u,a]);function g(t,s){return t[0]-s[0]}i.sort(g),l.sort(g),console.log(D);const d=w.exports.init(document.getElementById("burnup-chart"));window.addEventListener("resize",function(){d.resize()}),d.setOption({title:{text:"\u71C3\u5C3D\u56FE"},legend:{data:["\u9884\u671F\u4E2D\u7684\u5269\u4F59\u5DE5\u4F5C\u91CF","\u5B9E\u9645\u7684\u5269\u4F59\u5DE5\u4F5C\u91CF"],y:"bottom",x:"center"},tooltip:{trigger:"axis",formatter:function(t){return t[0].seriesName+":"+t[0].value[1]}},xAxis:{type:"value",min:u,axisLabel:{color:"#333",formatter:function(t){let s=new Date(t);return s.getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate()}}},yAxis:{type:"value"},series:[{name:"\u9884\u671F\u4E2D\u7684\u5269\u4F59\u5DE5\u4F5C\u91CF",type:"line",data:l},{name:"\u5B9E\u9645\u7684\u5269\u4F59\u5DE5\u4F5C\u91CF",type:"line",data:i}]})},back(){this.$router.go(-1)},getTopicColor:y.getColor}};var b=function(){var r=this,c=r._self._c;return c("div",{staticStyle:{position:"relative",width:"100%",height:"100%"}},[c("div",{staticStyle:{position:"absolute",width:"80%",height:"40%",left:"10%",top:"6%"},attrs:{id:"burnup-chart"}},[r._v(" \u71C3\u5C3D\u56FE ")]),c("div",{ref:"chart",staticStyle:{position:"absolute",width:"80%",height:"40%",left:"10%",top:"52%"}},[r._v(" \u8FDB\u5EA6\u663E\u793A\u56FE ")]),c("v-btn",{staticClass:"ma-2",attrs:{color:r.getTopicColor(r.user.topic)},on:{click:r.back}},[c("v-icon",{attrs:{dark:"",left:""}},[r._v(" mdi-arrow-left ")]),r._v(" \u8FD4\u56DE ")],1)],1)},k=[],_=v(x,b,k,!1,null,null,null,null);const j=_.exports;export{j as default};
