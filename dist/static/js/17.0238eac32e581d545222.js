webpackJsonp([17],{LSAf:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Dd8w"),n=e.n(a),i=e("x6Ga"),r=e("JHw8"),o=e("KOga"),c={components:{childTitle:r.a},data:function(){return{title:"积分商城",items:[]}},computed:n()({},Object(i.c)(["userInfo"])),mounted:function(){var t=this;Object(o.a)("GET","scoreMall").then(function(s){t.items=s.data.data}).then(function(t){console.log(t)})}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"scoreMall"},[e("child-title",{attrs:{title:t.title}}),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"top"},[e("a",{attrs:{href:""}},[t._v("规则")]),t._v(" "),e("div",{staticClass:"img"},[e("img",{attrs:{src:t.userInfo.image,alt:""}})]),t._v(" "),e("a",{attrs:{href:""}},[t._v("签到")])]),t._v(" "),e("h3",[t._v(t._s(t.userInfo.name?t.userInfo.name:"未登录"))]),t._v(" "),t.userInfo.loginStatus?e("ul",[e("li",[t._v("ID："),e("span",[t._v(t._s(t.userInfo.id))])]),t._v(" "),e("li",[t._v("积分："),e("span",[t._v(t._s(t.userInfo.score))])])]):t._e()]),t._v(" "),e("ul",{staticClass:"goodsList"},t._l(t.items,function(s){return e("li",[e("img",{attrs:{src:s.image,alt:""}}),t._v(" "),e("div",{staticClass:"goodsInfo"},[e("h3",[t._v(t._s(s.title))]),t._v(" "),e("p",[t._v(t._s(s.desc))]),t._v(" "),e("span",[e("i",[t._v(t._s(s.score))]),t._v("积分")])]),t._v(" "),e("button",[t._v("兑换")])])}))],1)},staticRenderFns:[]};var _=e("VU/8")(c,l,!1,function(t){e("rrbZ")},"data-v-741c6e42",null);s.default=_.exports},rrbZ:function(t,s){}});
//# sourceMappingURL=17.0238eac32e581d545222.js.map