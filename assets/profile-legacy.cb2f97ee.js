!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(N){u=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),s=new k(n||[]);return a(i,"_invoke",{value:_(t,r,s)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}r.wrap=f;var h={};function v(){}function p(){}function w(){}var m={};u(m,s,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(j([])));y&&y!==n&&o.call(y,s)&&(m=y);var x=w.prototype=v.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function P(e,r){function n(a,i,s,c){var l=d(e[a],e,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==t(f)&&o.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):r.resolve(f).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,c)}))}c(l.arg)}var i;a(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}})}function _(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return I()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=L(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=d(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=d(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function j(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:I}}function I(){return{value:void 0,done:!0}}return p.prototype=w,a(x,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:p,configurable:!0}),p.displayName=u(w,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},r.awrap=function(t){return{__await:t}},b(P.prototype),u(P.prototype,c,(function(){return this})),r.AsyncIterator=P,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new P(f(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(x),u(x,l,"Generator"),u(x,s,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},r}function r(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(l){return void r(l)}s.done?e(c):Promise.resolve(c).then(n,o)}System.register(["./index-legacy.4cee28d4.js"],(function(t,n){"use strict";var o,a=document.createElement("style");return a.textContent=".v-text-field[data-v-1444f3a2]{margin:16px}.v-card-actions[data-v-1444f3a2]{margin-top:8px}.v-card-text[data-v-1444f3a2]{margin-top:24px!important}.input-label[data-v-1444f3a2]{display:flex;align-items:center;justify-content:flex-end;height:48px;font-size:16px}.input-field[data-v-1444f3a2]{display:flex;align-items:center;height:48px}\n",document.head.appendChild(a),{setters:[function(t){o=t.n}],execute:function(){var n={name:"profile",data:function(){return{showedUserName:"aaa",userInfo:{username:"John Doe",email:"johndoe@example.com",avatar:"https://randomuser.me/api/portraits/men/75.jpg"},showChangePassword:!1,oldPassword:"",newPassword:"",confirmNewPassword:""}},created:function(){this.showProfile()},methods:{showProfile:function(){var t=this;this.axios.get("/api/user").then((function(e){t.showedUserName=e.data.userInfo.username,t.userInfo=e.data.userInfo})).catch((function(t){console.log(t)}))},save:function(){var t=this,e=this.userInfo.username,r=this.userInfo.email;this.axios.put("/api/user",{username:e,email:r}).then((function(e){t.$toast.success("保存成功")})).catch((function(e){t.$toast.error("保存失败"),console.log(e)}))},changePassword:function(){var t,n=this;return(t=e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.newPassword!==n.confirmNewPassword&&window.alert("请保证新密码和确认新密码内容一致"),""===n.newPassword&&window.alert("新密码不能为空"),t.next=4,n.axios.get("edit_password/",{params:{old_password:n.oldPassword,new_password:n.newPassword,user_id:n.$store.state.userId}}).catch((function(t){console.log(t),window.alert("请重新确认原密码")})).then((function(t){if(0!==t.data.errcode)return n.res=!1,console.log(t.data.msg),void window.alert("请重新确认原密码");n.showChangePassword=!1,window.alert("密码修改成功")}));case 4:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function s(t){r(i,o,a,s,c,"next",t)}function c(t){r(i,o,a,s,c,"throw",t)}s(void 0)}))})()},openChangePasswordDialog:function(){this.showChangePassword=!0},closeChangePasswordDialog:function(){this.showChangePassword=!1}}};t("default",o(n,(function(){var t=this,e=t._self._c;return e("v-container",{attrs:{fluid:"","fill-height":""}},[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("v-card",{staticClass:"mx-auto",attrs:{width:"800",height:"300",padding:"16"}},[e("v-card-title",{staticClass:"headline font-weight text-left"},[t._v("查看个人信息")]),e("v-divider"),e("v-row",{attrs:{align:"center"}},[e("v-col",{staticClass:"text-center",attrs:{cols:"3"}},[e("v-avatar",{attrs:{size:"100"}},[e("img",{attrs:{src:t.userInfo.avatar,alt:"avatar"}})]),e("div",[t._v(" "+t._s(t.showedUserName)+" ")])],1),e("v-col",{attrs:{cols:"8"}},[e("v-text-field",{attrs:{label:"用户名",outlined:"",dense:""},model:{value:t.userInfo.username,callback:function(e){t.$set(t.userInfo,"username",e)},expression:"userInfo.username"}}),e("v-text-field",{attrs:{label:"邮箱",outlined:"",dense:""},model:{value:t.userInfo.email,callback:function(e){t.$set(t.userInfo,"email",e)},expression:"userInfo.email"}})],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"red",text:""},on:{click:t.openChangePasswordDialog}},[t._v("修改密码")]),e("v-btn",{attrs:{color:"primary",text:""},on:{click:t.save}},[t._v("保存")])],1)],1)],1)],1),e("v-dialog",{attrs:{width:"500"},model:{value:t.showChangePassword,callback:function(e){t.showChangePassword=e},expression:"showChangePassword"}},[[e("v-container",{staticClass:"pa-0"},[e("v-card",[e("v-card-title",{staticClass:"headline font-weight text-left"},[t._v("修改密码")]),e("v-divider"),e("v-card-text",[e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("div",{staticClass:"input-label"},[t._v("原密码：")])]),e("v-col",{attrs:{cols:"8"}},[e("div",{staticClass:"input-field"},[e("v-text-field",{attrs:{outlined:"",dense:""},model:{value:t.oldPassword,callback:function(e){t.oldPassword=e},expression:"oldPassword"}})],1)])],1),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("div",{staticClass:"input-label"},[t._v("新密码：")])]),e("v-col",{attrs:{cols:"8"}},[e("div",{staticClass:"input-field"},[e("v-text-field",{attrs:{outlined:"",dense:""},model:{value:t.newPassword,callback:function(e){t.newPassword=e},expression:"newPassword"}})],1)])],1),e("v-row",[e("v-col",{attrs:{cols:"4"}},[e("div",{staticClass:"input-label"},[t._v("确认新密码：")])]),e("v-col",{attrs:{cols:"8"}},[e("div",{staticClass:"input-field"},[e("v-text-field",{attrs:{outlined:"",dense:""},model:{value:t.confirmNewPassword,callback:function(e){t.confirmNewPassword=e},expression:"confirmNewPassword"}})],1)])],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"red",text:""},on:{click:t.closeChangePasswordDialog}},[t._v("取消")]),e("v-btn",{attrs:{color:"blue",text:""},on:{click:t.changePassword}},[t._v("确认修改")])],1)],1)],1)]],2)],1)}),[],!1,null,"1444f3a2",null,null).exports)}}}))}();
