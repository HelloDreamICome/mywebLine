(function(t){function e(e){for(var r,s,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function s(t){return i.p+"static/js/"+({about:"about"}[t]||t)+"."+{about:"8c159a56"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var u=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0fcf":function(t,e,n){},"15b6":function(t,e,n){"use strict";var r=n("f604"),a=n.n(r);a.a},"2a29":function(t,e,n){"use strict";var r=n("0fcf"),a=n.n(r);a.a},"38f5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("span",[t._v("--------")]),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view"),n("Message",{attrs:{msg:t.msg,time:2}})],1)},o=[];n("99af"),n("c975"),n("fb6a"),n("a9e3"),n("b680"),n("d3b7"),n("ac1f"),n("25f0"),n("5319");function s(){var t=new Date,e=t.getHours();return e<9?"早上好":e<=11?"上午好":e<=13?"中午好":e<20?"下午好":"晚上好"}function i(){var t=["休息一会儿吧","准备吃什么呢?","要不要打一把LOL","我猜你可能累了","是仙女哒！","么么哒~"],e=Math.floor(Math.random()*t.length);return t[e]}function c(t,e){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"-",a={s:"yyyy".concat(r,"MM").concat(r,"dd HH:mm:ss"),m:"yyyy".concat(r,"MM").concat(r,"dd HH:mm"),h:"yyyy".concat(r,"MM").concat(r,"dd HH"),d:"yyyy".concat(r,"MM").concat(r,"dd"),M:"yyyy".concat(r,"MM"),ymd:"yy".concat(r,"MM").concat(r,"dd"),y:"yyyy",t:"HH:mm:ss",td:"HH:mm"};if(e=e&&a[e]?a[e]:a.m,t){var o;o=isNaN(t)?new Date(t):new Date(Number(t));var s=function(t){return(t<10?"0":"")+t},i=e.replace(/yyyy|yy|MM|dd|HH|mm|ss/g,(function(t){switch(t){case"yyyy":return s(o.getFullYear());case"yy":return s(o.getFullYear().toString().slice(-2));case"MM":return s(o.getMonth()+1);case"mm":return s(o.getMinutes());case"dd":return s(o.getDate());case"HH":return s(o.getHours());case"ss":return s(o.getSeconds())}}));return i}return n="-",n}var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-fade"}},[t.isOpen?n("div",{staticClass:"message"},[t._v(" "+t._s(t.msg)+" ")]):t._e()])},l=[],f={name:"Message",props:{msg:String,time:Number},data:function(){return{isOpen:!1}},mounted:function(){var t=this;setTimeout((function(){t.isOpen=!1}),1e3*this.time)},methods:{},watch:{msg:{handler:function(t){this.isOpen=!0},immediate:!0}}},d=f,m=(n("15b6"),n("2877")),p=Object(m["a"])(d,u,l,!1,null,"0bf631ef",null),v=p.exports,y={name:"App",components:{Message:v},data:function(){return{msg:s()}},created:function(){},methods:{}},h=y,g=(n("5c0b"),Object(m["a"])(h,a,o,!1,null,null,null)),b=g.exports,M=n("8c4f"),_=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"myLogo",draggable:"false",src:n("670e")}}),r("HelloWorld",{attrs:{msg:t.msg}})],1)},w=[],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",{staticClass:"difColor"},[t._v(t._s(t.msg))]),n("div",{staticClass:"timeShow"},[n("div",[t._v("SHOW TIME")]),n("div",[t._v(t._s(t.timeD))]),n("div",{staticClass:"difColor"},[t._v(t._s(t.timeH))])])])},O=[],j={name:"HelloWorld",props:{msg:String},data:function(){return{timeD:"",timeH:""}},created:function(){var t=this;setInterval((function(){t.showTime()}),1e3)},methods:{showTime:function(){var t=new Date;this.timeD=c(t,"d"),this.timeH=c(t,"t")}}},x=j,S=(n("2a29"),Object(m["a"])(x,H,O,!1,null,"626d2429",null)),C=S.exports,E={name:"Home",components:{HelloWorld:C},data:function(){return{msg:i()}}},P=E,T=(n("6300"),Object(m["a"])(P,_,w,!1,null,"626174f9",null)),D=T.exports,k=n("47f7");r["a"].use(k["a"]),r["a"].use(M["a"]);var L=[{path:"/",name:"Home",component:D},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],$=new M["a"]({routes:L});$.beforeEach((function(t,e,n){k["a"].start(),n(),k["a"].done()}));var A=$,N=n("2f62");r["a"].use(N["a"]);var W=new N["a"].Store({state:{},mutations:{},actions:{},modules:{}}),q=n("30f4");n("d6f6"),n("aede"),n("1da6");r["a"].use(q["a"]),r["a"].config.productionTip=!1,new r["a"]({router:A,store:W,render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},6300:function(t,e,n){"use strict";var r=n("38f5"),a=n.n(r);a.a},"670e":function(t,e,n){t.exports=n.p+"static/img/xq.a3bd616e.jpg"},"9c0c":function(t,e,n){},aede:function(t,e,n){},f604:function(t,e,n){}});