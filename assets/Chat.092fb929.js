import{n as s}from"./index.67177f41.js";const l={name:"Chat",data(){return{selectedRoom:0,messageInput:"",chatRooms:[{id:1,title:"room1",history:[{from:"TrickEye",type:"single",content:"hello world"},{from:"TrickEye",type:"single",content:"hello world again in this window!"}]},{id:2,title:"room2",history:[{from:"TrickEye",type:"single",content:"hello world again!"}]}]}}};var n=function(){var e=this,t=e._self._c;return t("v-container",{attrs:{fluid:""}},[t("h1",[e._v("\u804A\u5929\u5BA4")]),t("v-row",[t("v-col",{attrs:{cols:"4"}},[t("p",[e._v("selected room: "+e._s(e.selectedRoom))]),t("div",{staticClass:"red"},[e._v(" left ")]),t("v-list",[t("v-list-item-group",{model:{value:e.selectedRoom,callback:function(o){e.selectedRoom=o},expression:"selectedRoom"}},e._l(e.chatRooms,function(o){return t("v-list-item",{key:o.id},[t("v-list-item-title",[e._v(e._s(o.title))])],1)}),1)],1)],1),t("v-col",{attrs:{cols:"8"}},[t("div",{staticClass:"blue"},[e._v(" right ")]),t("v-row",[t("v-col",{attrs:{cols:"12"}},[t("v-card",[t("v-card-text",[t("v-list",[t("v-list-item-group",e._l(e.chatRooms[e.selectedRoom].history,function(o){return t("v-list-item",{key:o.id},[t("v-list-item-title",[e._v(e._s(o.from)+" : "+e._s(o.content))])],1)}),1)],1)],1)],1),t("v-text-field",{attrs:{label:"\u53D1\u9001\u6D88\u606F"},model:{value:e.messageInput,callback:function(o){e.messageInput=o},expression:"messageInput"}})],1)],1)],1)],1)],1)},i=[],r=s(l,n,i,!1,null,"a7072eca",null,null);const _=r.exports;export{_ as default};
