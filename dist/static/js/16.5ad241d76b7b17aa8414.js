webpackJsonp([16],{"5ETf":function(t,e){},c6A9:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("JHw8"),i=a("KOga"),n={components:{childTitle:s.a},data:function(){return{title:"战队详情",team:{},members:[],achievements:[]}},mounted:function(){var t=this;Object(i.a)("GET","saishi/battle_team/"+this.$route.params.id).then(function(e){t.team=e.data.data}).then(function(t){console.log(t)}),Object(i.a)("GET","saishi/members/"+this.$route.params.id).then(function(e){t.members=e.data.data}).then(function(t){console.log(t)}),Object(i.a)("GET","saishi/achievement/"+this.$route.params.id).then(function(e){t.achievements=e.data.data}).then(function(t){console.log(t)})}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"teamDetail"},[a("childTitle",{attrs:{title:t.title}}),t._v(" "),a("div",{staticClass:"team"},[a("div",{staticClass:"img"},[a("img",{attrs:{src:t.team.image,alt:""}})]),t._v(" "),a("div",{staticClass:"text"},[a("h3",[t._v(t._s(t.team.name))]),t._v(" "),a("p",[t._v(t._s(t.team.sentence))])])]),t._v(" "),a("div",{staticClass:"member"},[a("h4",[t._v("战队阵容")]),t._v(" "),a("ul",t._l(t.members,function(e){return a("li",[a("img",{attrs:{src:e.image,alt:""}}),t._v(" "),a("p",[t._v(t._s(e.job))]),t._v(" "),a("span",[t._v("id:"+t._s(e.id))]),t._v(" "),a("i",[t._v(t._s(e.character))])])}))]),t._v(" "),a("div",{staticClass:"achievement"},[a("h4",[t._v("战队成绩")]),t._v(" "),a("ul",t._l(t.achievements,function(e){return a("li",[a("ol",{staticClass:"context"},[a("li",[a("img",{attrs:{src:e.one.image,alt:""}}),t._v(" "),a("p",[t._v(t._s(e.one.name))])]),t._v(" "),a("li",[a("span",[t._v("VS")]),t._v(" "),a("i",{class:e.result?"success":""},[t._v(t._s(e.result?"胜利":"失败"))]),t._v(" "),a("b",[t._v(t._s(e.raceName))])]),t._v(" "),a("li",[a("img",{attrs:{src:e.two.image,alt:""}}),t._v(" "),a("p",[t._v(t._s(e.two.name))])])])])}))])],1)},staticRenderFns:[]};var l=a("VU/8")(n,c,!1,function(t){a("5ETf")},"data-v-75f3a634",null);e.default=l.exports}});
//# sourceMappingURL=16.5ad241d76b7b17aa8414.js.map