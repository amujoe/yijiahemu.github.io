(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],u=0,v=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(v.length)v.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,i=1;i<s.length;i++){var c=s[i];0!==r[c]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},r={app:0},n=[];function i(t){return o.p+"static/js/"+({about:"about"}[t]||t)+".js"}function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(t){var e=[],s=r[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=r[t]=[e,a]}));e.push(s[2]=a);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(t);var l=new Error;n=function(e){c.onerror=c.onload=null,clearTimeout(u);var s=r[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",l.name="ChunkLoadError",l.type=a,l.request=n,s[1](l)}r[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:c})}),12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("cd49")},"0a2b":function(t,e,s){},3654:function(t,e,s){"use strict";var a=s("4f44"),r=s.n(a);r.a},"4f44":function(t,e,s){},"5c0b":function(t,e,s){"use strict";var a=s("e332"),r=s.n(a);r.a},cd49:function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],i=(s("5c0b"),s("2877")),o={},c=Object(i["a"])(o,r,n,!1,null,null,null),l=c.exports,u=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page"},[t._m(0),s("el-carousel",{staticClass:"banner"},t._l(t.banner,(function(t){return s("el-carousel-item",{key:t},[s("div",{staticClass:"banner-item",style:{backgroundImage:"url("+t+")"}})])})),1),s("div",{staticClass:"box",attrs:{id:"scorll01"}},[s("div",{staticClass:"box-con"},[s("div",{staticClass:"box-title"},[t._v("公司业务")]),s("div",{staticClass:"project"},[t._l(t.project_list,(function(e,a){return[s("div",{key:a,staticClass:"p-item"},[s("div",{staticClass:"p-pic"},[s("img",{attrs:{src:e.pic,alt:""}})]),s("div",{staticClass:"p-title"},[t._v(t._s(e.title))]),s("div",{staticClass:"p-desc"},[t._v(t._s(e.desc))])])]}))],2)])]),s("div",{staticClass:"box part-bac",attrs:{id:"scorll02"}},[s("div",{staticClass:"box-con"},[s("div",{staticClass:"box-title"},[t._v("合作伙伴")]),s("div",{staticClass:"partner"},[t._l(t.partner_list,(function(t,e){return[s("div",{key:e,staticClass:"pa-item"},[s("img",{attrs:{src:t,alt:""}})])]}))],2)])]),t._m(1),t._m(2),t._m(3)],1)},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top"},[s("div",{staticClass:"name"},[t._v("太原艺佳和木")]),s("div",{staticClass:"nav"},[s("a",{staticClass:"n-item",attrs:{href:"#scorll01"}},[t._v("公司业务")]),s("a",{staticClass:"n-item",attrs:{href:"#scorll02"}},[t._v("合作伙伴")]),s("a",{staticClass:"n-item",attrs:{href:"#scorll03"}},[t._v("关于我们")]),s("a",{staticClass:"n-item",attrs:{href:"#scorll04"}},[t._v("联系我们")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about",attrs:{id:"scorll03"}},[s("div",{staticClass:"a-pic"},[s("img",{attrs:{src:"https://oss1.chedianai.com/images/assets/about-bac.jpg",alt:"艺佳和木"}})]),s("div",{staticClass:"a-con"},[s("div",{staticClass:"a-title"},[t._v("太原市艺佳和木贸易有限公司")]),s("div",{staticClass:"a-desc"},[s("p",{staticClass:"text-primary"},[t._v("公司简介")]),s("span",[t._v("公司拥有广泛的商品信息网络和强有力的执行团队，合作伙伴遍及各行各业")]),s("p",{staticClass:"text-primary"},[t._v("营业范围")]),s("span",[t._v("公司以建建筑材料、矿产品、五金交电、机械产品及设备、轻工产品、农副产品、电子产品及设备、文化体育用品及器材的零售及贸易。主要业务涵括：建材产品销售代理、矿产品销售代理、机电产品进出口销售代理、电子五金。家具家电销售代理等。 \n公司同时致力开拓建材、机械、电子五金等产品的进出口贸易电子商务平台")]),s("p",{staticClass:"text-primary"},[t._v("公司地址")]),s("span",[t._v("太原市小店区坞城路92号（山西大学）令德阁地下一层")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box",attrs:{id:"scorll04"}},[s("div",{staticClass:"contact"},[s("div",{staticClass:"c-txt"},[t._v("嗨, 愉快的合作从第一次沟通开始")]),s("div",{staticClass:"c-ewm"},[s("img",{attrs:{src:"https://oss1.chedianai.com/images/assets/ewm.jpg",alt:""}})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("p",[t._v("Copyright ©2018-2022 太原市艺佳和木贸易有限公司")])])}],h=s("d225"),d=s("b0b4"),f=s("308d"),m=s("6bb5"),g=s("4e2b"),_=s("9ab4"),b=s("60a3"),j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._m(0),s("h3",[t._v("Installed CLI Plugins")]),t._m(1),s("h3",[t._v("Essential Links")]),t._m(2),s("h3",[t._v("Ecosystem")]),t._m(3)])},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),s("br"),t._v("\n    check out the\n    "),s("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[t._v("typescript")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),s("li",[s("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),s("li",[s("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),s("li",[s("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],y=function(t){function e(){return Object(h["a"])(this,e),Object(f["a"])(this,Object(m["a"])(e).apply(this,arguments))}return Object(g["a"])(e,t),e}(b["c"]);Object(_["a"])([Object(b["b"])()],y.prototype,"msg",void 0),y=Object(_["a"])([b["a"]],y);var w=y,k=w,O=(s("fc1f"),Object(i["a"])(k,j,C,!1,null,"14ab7b0e",null)),x=O.exports,S=function(t){function e(){return Object(h["a"])(this,e),Object(f["a"])(this,Object(m["a"])(e).apply(this,arguments))}return Object(g["a"])(e,t),Object(d["a"])(e,[{key:"data",value:function(){return{banner:["https://www.kokuyo-furniture.cn/wp-content/uploads/2018/01/arch.jpg","https://www.kokuyo-furniture.cn/wp-content/uploads/2017/06/Banner_interval-3.jpg"],project_list:[{pic:"https://oss1.chedianai.com/images/assets/Slice01.png",title:"办公用品",desc:"文件档案用品、桌面用品、办公设备、财务用品、耗材等一系列与工作相关的用品"},{pic:"https://oss1.chedianai.com/images/assets/Slice02.png",title:"家居用品",desc:"床上用品、厨卫用具、室内配饰及日常生活需要的商品"},{pic:"https://oss1.chedianai.com/images/assets/Slice04.png",title:"会展布置",desc:"从设计到施工, 从施工到拆台一体式服务"},{pic:"https://oss1.chedianai.com/images/assets/Slice03.png",title:"五金建材",desc:"指金、银、铜、铁、锡五种金属。经人工加工可以制成刀、剑等艺术品或金属器件。现代社会的五金更为广泛，例如五金工具、五金零部件、日用五金"}],partner_list:["https://oss1.chedianai.com/images/assets/logo/Slice01.jpg","https://oss1.chedianai.com/images/assets/logo/Slice02.jpg","https://oss1.chedianai.com/images/assets/logo/Slice03.jpg","https://oss1.chedianai.com/images/assets/logo/Slice04.jpg","https://oss1.chedianai.com/images/assets/logo/Slice05.jpg","https://oss1.chedianai.com/images/assets/logo/Slice06.jpg","https://oss1.chedianai.com/images/assets/logo/Slice07.jpg","https://oss1.chedianai.com/images/assets/logo/Slice08.jpg","https://oss1.chedianai.com/images/assets/logo/Slice09.jpg","https://oss1.chedianai.com/images/assets/logo/Slice10.jpg","https://oss1.chedianai.com/images/assets/logo/Slice11.jpg","https://oss1.chedianai.com/images/assets/logo/Slice12.jpg"]}}}]),e}(b["c"]);S=Object(_["a"])([Object(b["a"])({components:{HelloWorld:x}})],S);var E=S,$=E,P=(s("3654"),Object(i["a"])($,p,v,!1,null,null,null)),T=P.exports;a["default"].use(u["a"]);var L=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:T},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]}),M=s("2f62");a["default"].use(M["a"]);var I=new M["a"].Store({state:{},mutations:{},actions:{}}),F=(s("186a"),s("450d"),s("301f")),J=s.n(F),q=(s("96dc"),s("9cea")),z=s.n(q),A=(s("1951"),s("eedf")),B=s.n(A);a["default"].use(B.a),a["default"].use(z.a),a["default"].use(J.a),a["default"].config.productionTip=!1,new a["default"]({router:L,store:I,render:function(t){return t(l)}}).$mount("#app")},e332:function(t,e,s){},fc1f:function(t,e,s){"use strict";var a=s("0a2b"),r=s.n(a);r.a}});