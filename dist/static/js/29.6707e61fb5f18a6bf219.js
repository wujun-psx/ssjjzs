webpackJsonp([29],{mAMW:function(t,e){},xBfF:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("KOga"),r={data:function(){return{items:[{title:"主武器",url:"http://www.baidu.com",imgArr:[{title:"ak-47",image:""}]},{title:"主武器",url:"http://www.baidu.com",imgArr:[{title:"ak-47",image:""}]},{title:"主武器",url:"http://www.baidu.com",imgArr:[{title:"ak-47",image:""}]},{title:"主武器",url:"http://www.baidu.com",imgArr:[{title:"ak-47",image:""}]}]}},mounted:function(){var t=this;Object(a.a)("GET","armoury/all").then(function(e){console.log(e.data.data),t.items=e.data.data}).catch(function(t){console.log(t)})}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("dl",t._l(t.items,function(e){return i("dd",[i("div",[i("h4",[t._v(t._s(e.title))]),t._v(" "),i("a",{attrs:{href:e.url}},[t._v("查看"+t._s(e.title)+"更多武器 >")])]),t._v(" "),i("ul",t._l(e.imgArr,function(e){return i("li",[i("img",{attrs:{src:e.image,alt:""}}),t._v(" "),i("p",[t._v(t._s(e.title))])])}))])}))},staticRenderFns:[]};var n=i("VU/8")(r,l,!1,function(t){i("mAMW")},"data-v-40c94da8",null);e.default=n.exports}});
//# sourceMappingURL=29.6707e61fb5f18a6bf219.js.map