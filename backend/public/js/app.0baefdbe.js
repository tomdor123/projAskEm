(function(t){function e(e){for(var a,s,i=e[0],c=e[1],A=e[2],l=0,f=[];l<i.length;l++)s=i[l],r[s]&&f.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,A||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var A=0;A<i.length;A++)e(i[A]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"11f4":function(t,e,n){},"1f5d":function(t,e,n){},"2b0a":function(t,e,n){},"2bf8":function(t,e,n){},3265:function(t,e,n){"use strict";var a=n("ea24"),r=n.n(a);r.a},"38dc":function(t,e,n){"use strict";var a=n("2bf8"),r=n.n(a);r.a},"3a6e":function(t,e,n){"use strict";var a=n("588c"),r=n.n(a);r.a},4678:function(t,e,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=o(t);return n(e)}function o(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="4678"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("bb71");n("da64");a["a"].use(r["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("app-header"),a("v-content",[a("router-view"),a("img",{staticClass:"chat-icon",attrs:{src:n("7af8")},on:{click:t.toggleChat}}),a("transition",{attrs:{name:"slide-fade"}},[a("support-chat")],1)],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),t._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],A={name:"HelloWorld",props:{msg:String}},u=A,l=(n("ccd1"),n("2877")),f=Object(l["a"])(u,i,c,!1,null,"379548a4",null),d=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[t._v("mistertoy")]),n("span",{staticClass:"font-weight-light"},[t._v(" managing your toys")])]),n("v-spacer")],1)},v=[],y=n("6544"),h=n.n(y),m=n("9910"),g=n("71d9"),b=n("2a7f"),C={},j=Object(l["a"])(C,p,v,!1,null,null,null),k=j.exports;h()(j,{VSpacer:m["a"],VToolbar:g["a"],VToolbarTitle:b["a"]});var _=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isChatOpen?n("section",{staticClass:"support-chat"},[n("header",[n("button",{on:{click:t.toggleChat}},[t._v("X")])]),n("main",[t._v("\n      IM A CHAT\n    ")]),n("footer",[n("form",{on:{submit:function(e){return e.preventDefault(),t.sendMsg(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],attrs:{type:"text"},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}}),t._m(0)])])]):t._e()},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{attrs:{type:"submit"}},[a("img",{staticClass:"send-icon",attrs:{src:n("bd27")}})])}],B={data:function(){return{msg:""}},computed:{isChatOpen:function(){return this.$store.getters.isChatOpen}},methods:{toggleChat:function(){this.$store.commit({type:"toggleChat"})},sendMsg:function(){this.$store.dispatch({type:"sendMsg",msg:this.msg})}}},P=B,D=(n("3265"),Object(l["a"])(P,_,w,!1,null,"3f74647a",null)),x=D.exports,T={name:"App",components:{HelloWorld:d,appHeader:k,supportChat:x},methods:{toggleChat:function(){this.$store.commit({type:"toggleChat"})}}},z=T,E=(n("5c0b"),n("7496")),O=n("549c"),M=Object(l["a"])(z,o,s,!1,null,null,null),Q=M.exports;h()(M,{VApp:E["a"],VContent:O["a"]});var I=n("8c4f"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("HelloWorld")},L=[],H={components:{HelloWorld:d}},V=H,$=Object(l["a"])(V,S,L,!1,null,null,null),F=($.exports,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"toy-app"},[n("router-link",{attrs:{to:"/user/edit"}},[t._v("Edit Profile")]),n("filter-by",{attrs:{toys:t.getToys},on:{"update-filter":t.updateFilter}}),n("router-link",{attrs:{to:"/toy/edit"}},[n("v-btn",{staticClass:"add-btn",attrs:{fab:"",dark:"",color:"indigo"}},[n("v-icon",{attrs:{dark:""}},[t._v("add")])],1)],1),n("router-link",{attrs:{to:"/toy/dashboard"}},[t._v("Dashboard")]),n("toy-list",{attrs:{toys:t.getToys},on:{"remove-toy":t.removeToy}})],1)}),N=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.toys?n("section",{staticClass:"toy-list"},[n("ul",{staticClass:"flex"},t._l(t.toys,function(e){return n("toy-preview",{key:e._id,attrs:{toy:e},on:{"emit-remove":t.emitRemove}})}),1)]):t._e()},K=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"toy-item"},[n("li",[n("div",{staticClass:"preview-container"},[n("div",[n("span",[t._v("Toy Name:")]),t._v("\n        "+t._s(t.toy.name)+"\n      ")]),n("div",[n("span",[t._v("Type:")]),t._v("\n        "+t._s(t.toy.type)+"\n      ")]),n("div",{staticClass:"preview-btns"},[n("router-link",{attrs:{to:"/toy/edit/"+t.toy._id}},[n("v-btn",{staticClass:"edit-btn",attrs:{fab:"",dark:"",large:"",color:"cyan"}},[n("v-icon",{attrs:{dark:""}},[t._v("edit")])],1)],1),n("router-link",{attrs:{to:"/toy/details/"+t.toy._id}},[n("v-btn",{staticClass:"details-btn",attrs:{color:"info"}},[t._v("Details")])],1),n("v-btn",{staticClass:"remove-btn",attrs:{color:"error"},on:{click:t.emitRemove}},[t._v("DELETE")])],1)])])])},U=[],G={props:{toy:{required:!0,type:Object}},computed:{getStockStatus:function(){return this.toy.inStock?"Available":"Unavailable"}},methods:{emitRemove:function(){this.$emit("emit-remove",this.toy._id)}}},X=G,W=(n("e900"),n("8336")),q=n("132d"),Z=Object(l["a"])(X,R,U,!1,null,"bf8c0614",null),Y=Z.exports;h()(Z,{VBtn:W["a"],VIcon:q["a"]});var tt={props:{toys:{required:!0,type:Array}},components:{toyPreview:Y},methods:{emitRemove:function(t){this.$emit("remove-toy",t)}}},et=tt,nt=(n("38dc"),Object(l["a"])(et,J,K,!1,null,"5844ca75",null)),at=nt.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"filter-by"},[n("form",{staticClass:"filter-form",on:{submit:function(e){return e.preventDefault(),t.emitFilter(e)}}},[n("v-flex",{staticClass:"search",attrs:{xs12:"",sm6:"",md3:""}},[n("v-text-field",{attrs:{label:"Search",placeholder:"Enter Toy Name..."},model:{value:t.filterBy.name,callback:function(e){t.$set(t.filterBy,"name",e)},expression:"filterBy.name"}})],1),n("div",{staticClass:"stock-status"},[n("v-switch",{attrs:{label:t.getSwitchLabel},model:{value:t.filterBy.stockStatus,callback:function(e){t.$set(t.filterBy,"stockStatus",e)},expression:"filterBy.stockStatus"}})],1),n("div",{staticClass:"type"},[n("v-flex",{attrs:{xs12:"",sm6:"","d-flex":""}},[n("v-select",{attrs:{items:t.getToyTypes,label:"Toy Type:"},model:{value:t.filterBy.type,callback:function(e){t.$set(t.filterBy,"type",e)},expression:"filterBy.type"}})],1)],1),n("v-btn",{staticClass:"search-btn",attrs:{type:"submit",fab:"",dark:"",small:"",color:"primary"}},[n("v-icon",[t._v("search")])],1)],1)])},ot=[],st={data:function(){return{filterBy:{name:"",stockStatus:"",type:""}}},props:["toys"],methods:{emitFilter:function(){var t=JSON.parse(JSON.stringify(this.filterBy));this.$emit("update-filter",t)}},computed:{getToyTypes:function(){var t=this.toys.map(function(t){return t.type});return t.unshift(""),t},getSwitchLabel:function(){var t="Show";return this.filterBy.stockStatus?t+" In Stock":t+" All"}}},it=st,ct=(n("a16a"),n("0e8f")),At=n("b56d"),ut=n("b73d"),lt=n("2677"),ft=Object(l["a"])(it,rt,ot,!1,null,"49d206ec",null),dt=ft.exports;h()(ft,{VBtn:W["a"],VFlex:ct["a"],VIcon:q["a"],VSelect:At["a"],VSwitch:ut["a"],VTextField:lt["a"]});var pt={created:function(){this.$store.dispatch({type:"loadToys"})},data:function(){return{}},methods:{updateFilter:function(t){this.$store.dispatch({type:"getFilteredToys",filterBy:t})},removeToy:function(t){this.$store.dispatch({type:"removeToy",toyId:t})}},computed:{getToys:function(){return this.$store.getters.toysToShow}},components:{toyList:at,filterBy:dt}},vt=pt,yt=(n("c233"),Object(l["a"])(vt,F,N,!1,null,"58f95eba",null)),ht=yt.exports;h()(yt,{VBtn:W["a"],VIcon:q["a"]});var mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.toy?n("section",{staticClass:"toy-details"},[n("h1",[t._v("Toy Details")]),n("pre",[t._v(t._s(t.toy))]),t._v("\n  Created\n  "),n("span",[t._v(t._s(t._f("duration")(t._f("duration")([t.toy.createdAt,"milliseconds"],"subtract",Date.now()),"humanize",!0)))]),n("router-link",{attrs:{to:"/"}},[t._v("Back")])],1):t._e()},gt=[],bt={data:function(){return{toy:null}},created:function(){var t=this,e=this.$route.params.theToyId;this.$store.dispatch({type:"toyById",toyId:e}).then(function(e){t.toy=e})}},Ct=bt,jt=Object(l["a"])(Ct,mt,gt,!1,null,null,null),kt=jt.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.toyCopy?n("section",{staticClass:"toy-edit"},[n("div",{staticClass:"edit-container"},[n("h1",[t._v(t._s(t.toyCopy._id?"Edit Toy":"Add Toy"))]),n("form",{on:{submit:function(e){return e.preventDefault(),t.saveChanges(e)}}},[t._v("\n      Name:\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.toyCopy.name,expression:"toyCopy.name"}],attrs:{placeholder:"Enter Name...",type:"text"},domProps:{value:t.toyCopy.name},on:{input:function(e){e.target.composing||t.$set(t.toyCopy,"name",e.target.value)}}}),t._v("\n      Enter Price: \n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.toyCopy.price,expression:"toyCopy.price"}],attrs:{type:"number"},domProps:{value:t.toyCopy.price},on:{input:function(e){e.target.composing||t.$set(t.toyCopy,"price",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.toyCopy.type,expression:"toyCopy.type"}],attrs:{placeholder:"Enter Type...",type:"text"},domProps:{value:t.toyCopy.type},on:{input:function(e){e.target.composing||t.$set(t.toyCopy,"type",e.target.value)}}}),t._v("\n      In Stock? \n      Yes:\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.toyCopy.inStock,expression:"toyCopy.inStock"}],attrs:{type:"radio",name:"stock-status"},domProps:{value:!0,checked:t._q(t.toyCopy.inStock,!0)},on:{change:function(e){return t.$set(t.toyCopy,"inStock",!0)}}}),t._v(" \n      No:\n      "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.toyCopy.inStock,expression:"toyCopy.inStock"}],attrs:{type:"radio",name:"stock-status"},domProps:{value:!1,checked:t._q(t.toyCopy.inStock,!1)},on:{change:function(e){return t.$set(t.toyCopy,"inStock",!1)}}}),n("input",{attrs:{type:"file"},on:{change:t.uploadImg}}),n("button",{attrs:{type:"submit"}},[t._v(t._s(t.toyCopy._id?"SAVE":"ADD"))])])]),n("router-link",{attrs:{to:"/"}},[t._v("Back To Toys")])],1):t._e()},wt=[],Bt=(n("8615"),n("ac6a"),n("bc3a")),Pt=n.n(Bt),Dt={query:xt,getById:Mt,update:zt,getToysByFilter:Ot,getPricesPerToy:It,remove:Et,handleUploadImg:Tt};function xt(){return Pt.a.get(Qt()).then(function(t){return t.data})}function Tt(t){console.log(t.target.files[0]);var e=new FormData;e.append("imgUpload",t.target.files[0]),Pt.a.post("http://localhost:3000/upload/cloudinary",e).then(function(t){return t.json()}).then(function(t){return console.log(t.url)})}function zt(t){return t._id?Pt.a.put(Qt(t._id),t).then(function(t){return t.data}):Pt.a.post(Qt(),t).then(function(t){return t.data})}function Et(t){return Pt.a.delete(Qt(t)).then(function(t){return t.data})}function Ot(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Pt.a.get(Qt(),{params:t}).then(function(t){return t.data})}function Mt(t){return Pt.a.get(Qt(t)).then(function(t){return t.data})}function Qt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e="/api/toy";return"".concat(e,"/").concat(t)}function It(){var t={};return xt().then(function(e){return e.forEach(function(e){t[e.type]?(t[e.type].type=e.type,t[e.type].totalPrice+=+e.price,t[e.type].totalLength+=1):t[e.type]={totalPrice:+e.price,totalLength:1}}),t=Object.values(t),t.map(function(t){return{type:t.type,avgPrice:t.totalPrice/t.totalLength}})})}var St,Lt,Ht={data:function(){return{toyCopy:{name:"",price:0,type:"",createdAt:Date.now(),inStock:!0}}},created:function(){var t=this,e=this.$route.params.theToyId;e&&this.$store.dispatch({type:"toyById",toyId:e}).then(function(e){t.toyCopy=JSON.parse(JSON.stringify(e))})},methods:{saveChanges:function(){var t=this;this.toyCopy.price=parseInt(this.toyCopy.price),this.$store.dispatch({type:"updateToy",toy:this.toyCopy}).then(function(){t.$router.push("/")}).catch(function(t){return console.log("had problems reporting to server")})},uploadImg:function(t){Dt.handleUploadImg(t)}}},Vt=Ht,$t=(n("c2a8"),Object(l["a"])(Vt,_t,wt,!1,null,"0d326d43",null)),Ft=$t.exports,Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"edit-user"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.updateUser(e)}}},[n("gender-picker",{model:{value:t.user.gender,callback:function(e){t.$set(t.user,"gender",e)},expression:"user.gender"}}),n("time-picker",{model:{value:t.user.time,callback:function(e){t.$set(t.user,"time",e)},expression:"user.time"}}),t._v("\n        Pick Color:\n        "),n("swatches",{model:{value:t.user.favColor,callback:function(e){t.$set(t.user,"favColor",e)},expression:"user.favColor"}}),n("button",{attrs:{type:"submit"}},[t._v("SAVE")]),n("router-link",{attrs:{to:"/"}},[t._v("BACK")]),t._v("\n        "+t._s(t.user)+"\n    ")],1)])},Jt=[],Kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"gender-picker"},[t._v("\n  Pick Gender:\n  "),n("select",{ref:"gender",domProps:{value:t.value},on:{input:t.updateGender}},[t._v("\n    "+t._s(t.value)+"\n    "),n("option",{attrs:{value:"male"}},[t._v("Male")]),n("option",{attrs:{value:"female"}},[t._v("Female")]),n("option",{attrs:{value:"notSay"}},[t._v("Rather Not Say")])])])},Rt=[],Ut={props:["value"],data:function(){return{userGender:this.value}},methods:{updateGender:function(t){this.userGender=t.target.value,this.$emit("input",this.userGender)}}},Gt=Ut,Xt=Object(l["a"])(Gt,Kt,Rt,!1,null,"4078f23a",null),Wt=Xt.exports,qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"time-picker"},[t._v("\n  Pick Time:\n  "),n("input",{attrs:{type:"time"},domProps:{value:t.value},on:{input:t.updateTime}})])},Zt=[],Yt={props:["value"],data:function(){return{time:this.value}},methods:{updateTime:function(t){this.time=t.target.value,this.$emit("input",this.time)}}},te=Yt,ee=Object(l["a"])(te,qt,Zt,!1,null,"c9fdb544",null),ne=ee.exports,ae=n("468d"),re=n.n(ae),oe={data:function(){return{user:{gender:"",time:"",favColor:""}}},created:function(){},methods:{updateUser:function(){console.log("updating user")}},components:{genderPicker:Wt,timePicker:ne,Swatches:re.a}},se=oe,ie=(n("82aa"),Object(l["a"])(se,Nt,Jt,!1,null,"05c4c318",null)),ce=ie.exports,Ae=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"dashboard-containe"},[n("router-link",{attrs:{to:"/"}},[t._v("BACK")]),t.pricesPerToyChart.label?n("Chart",{staticClass:"chart",attrs:{chartData:t.pricesPerToyChart}}):t._e()],1)},ue=[],le=n("1fca"),fe={props:["chartData"],extends:le["a"],mounted:function(){this.renderChart({labels:this.chartData.labels,datasets:[{label:this.chartData.label,backgroundColor:"#f87979",data:this.chartData.data}]})}},de=fe,pe=Object(l["a"])(de,St,Lt,!1,null,null,null),ve=pe.exports,ye={data:function(){return{pricesPerToyChart:{labels:[],data:[],label:""}}},created:function(){var t=this;Dt.getPricesPerToy().then(function(e){e.forEach(function(e){t.pricesPerToyChart.labels.push(e.type),t.pricesPerToyChart.data.push(e.avgPrice)}),t.pricesPerToyChart.label="Avg Price"})},components:{Chart:ve}},he=ye,me=(n("3a6e"),Object(l["a"])(he,Ae,ue,!1,null,"3a6226ec",null)),ge=me.exports,be=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"login-page"},[n("router-link",{attrs:{to:"/signup"}},[n("v-btn",{attrs:{color:"primary"}},[t._v("Register")])],1),n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[n("v-card",{staticClass:"elevation-12"},[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-toolbar-title",[t._v("Login form")]),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""}},[n("v-btn",{attrs:{slot:"activator",icon:"",large:"",target:"_blank"},slot:"activator"})],1)],1),n("v-card-text",[n("form",{on:{submit:function(e){return e.preventDefault(),t.doLogin(e)}}},[n("v-text-field",{attrs:{autocomplete:"off","prepend-icon":"person",name:"name",label:"Login",type:"text"},model:{value:t.user.nickname,callback:function(e){t.$set(t.user,"nickname",e)},expression:"user.nickname"}}),n("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",id:"password",type:"password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",type:"submit"}},[t._v("Login")])],1)],1)])],1)],1)],1)],1)],1)],1)},Ce=[],je=(n("96cf"),n("3b8d")),ke={login:_e};function _e(t){return we.apply(this,arguments)}function we(){return we=Object(je["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Pt.a.post(Be("/login/"),e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}},t)})),we.apply(this,arguments)}function Be(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e="/api/user";return"".concat(e,"/").concat(t)}var Pe={created:function(){},data:function(){return{user:{nickname:"",password:""}}},methods:{doLogin:function(){var t=Object(je["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ke.login(this.user);case 3:t.sent,this.$router.push("/toy"),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log("got error:",t.t0);case 10:case"end":return t.stop()}},t,this,[[0,7]])}));function e(){return t.apply(this,arguments)}return e}()}},De=Pe,xe=(n("6533"),n("b0af")),Te=n("99d9"),ze=n("a523"),Ee=n("a722"),Oe=n("3a2f"),Me=Object(l["a"])(De,be,Ce,!1,null,"004645f2",null),Qe=Me.exports;h()(Me,{VBtn:W["a"],VCard:xe["a"],VCardActions:Te["a"],VCardText:Te["b"],VContainer:ze["a"],VContent:O["a"],VFlex:ct["a"],VLayout:Ee["a"],VSpacer:m["a"],VTextField:lt["a"],VToolbar:g["a"],VToolbarTitle:b["a"],VTooltip:Oe["a"]}),a["a"].use(I["a"]);var Ie=new I["a"]({routes:[{path:"/",name:"loginPage",component:Qe},{path:"/toy",name:"toyApp",component:ht},{path:"/toy/details/:theToyId",name:"toy-details",component:kt},{path:"/toy/edit/:theToyId?",name:"toy-edit",component:Ft},{path:"/toy/dashboard/",name:"dashboard",component:ge},{path:"/user/edit/:userId?",name:"user-edit",component:ce}]}),Se=n("2f62"),Le=(n("20d6"),{state:{toys:[],isLoading:!1,filterBy:{name:"",stockStatus:"",type:""}},getters:{toysToShow:function(t){return t.toys}},mutations:{setToys:function(t,e){var n=e.toys;t.toys=n},isLoading:function(t,e){var n=e.isLoading;t.isLoading=n},updateFilter:function(t,e){var n=e.filterBy;t.filterBy=n},deleteToy:function(t,e){var n=e.toyId,a=t.toys.findIndex(function(t){return t._id===n});t.toys.splice(a,1)}},actions:{loadToys:function(t){return Dt.query().then(function(e){t.commit({type:"setToys",toys:e.reverse()})})},toyById:function(t,e){var n=e.toyId;return Dt.getById(n)},updateToy:function(t,e){var n=e.toy;return Dt.update(n)},getFilteredToys:function(t,e){var n=e.filterBy;Dt.getToysByFilter(n).then(function(e){return t.commit({type:"setToys",toys:e})})},removeToy:function(t,e){var n=e.toyId;Dt.remove(n).then(function(){return t.commit({type:"deleteToy",toyId:n})})}}});a["a"].use(Se["a"]);var He=new Se["a"].Store({strict:!0,state:{isChatOpen:!1},getters:{isChatOpen:function(t){return t.isChatOpen}},mutations:{toggleChat:function(t){t.isChatOpen=!t.isChatOpen}},actions:{sendMsg:function(){console.log("sending")}},modules:{toyStore:Le}});n("2fac"),n("b7e3");a["a"].config.productionTip=!1,a["a"].use(n("2ead")),new a["a"]({router:Ie,store:He,render:function(t){return t(Q)}}).$mount("#app")},"588c":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var a=n("6879"),r=n.n(a);r.a},6533:function(t,e,n){"use strict";var a=n("1f5d"),r=n.n(a);r.a},6879:function(t,e,n){},"7af8":function(t,e,n){t.exports=n.p+"img/chat-icon.200143ba.png"},"7f25":function(t,e,n){},"82aa":function(t,e,n){"use strict";var a=n("7f25"),r=n.n(a);r.a},"872e":function(t,e,n){},9145:function(t,e,n){},a16a:function(t,e,n){"use strict";var a=n("11f4"),r=n.n(a);r.a},b7e3:function(t,e,n){},bd27:function(t,e){t.exports="data:image/png;base64,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"},c233:function(t,e,n){"use strict";var a=n("2b0a"),r=n.n(a);r.a},c2a8:function(t,e,n){"use strict";var a=n("872e"),r=n.n(a);r.a},ccd1:function(t,e,n){"use strict";var a=n("9145"),r=n.n(a);r.a},e1fe:function(t,e,n){},e900:function(t,e,n){"use strict";var a=n("e1fe"),r=n.n(a);r.a},ea24:function(t,e,n){}});
//# sourceMappingURL=app.0baefdbe.js.map