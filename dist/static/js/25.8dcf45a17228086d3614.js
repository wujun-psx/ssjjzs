webpackJsonp([25],{"5Zvn":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("KOga"),n={data:function(){return{items:[{date:"05-25",title:"第一节生死狙击大赛",one:{image:"",name:""},two:{image:"",name:""},time:"12:00",race_status:"进行中",score:"2:1"}]}},mounted:function(){var t=this;Object(s.a)("GET","race_progress").then(function(e){t.items=e.data.data}).catch(function(t){console.log(t)})}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"progress"},[a("ul",t._l(t.items,function(e){return a("li",{staticClass:"race"},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(e.date))]),t._v(" "),a("h4",[t._v(t._s(e.title))])]),t._v(" "),a("ol",{staticClass:"context"},[a("li",[a("img",{attrs:{src:e.one.image,alt:""}}),t._v(" "),a("p",[t._v(t._s(e.one.name))])]),t._v(" "),a("li",[a("span",[t._v(t._s(e.time))]),t._v(" "),a("i",[t._v(t._s(e.race_status))]),t._v(" "),a("b",[t._v(t._s(e.score))])]),t._v(" "),a("li",[a("img",{attrs:{src:e.two.image,alt:""}}),t._v(" "),a("p",[t._v(t._s(e.two.name))])])])])}))])},staticRenderFns:[]};var c=a("VU/8")(n,i,!1,function(t){a("WnUQ")},"data-v-4e217617",null);e.default=c.exports},WnUQ:function(t,e){}});
//# sourceMappingURL=25.8dcf45a17228086d3614.js.map