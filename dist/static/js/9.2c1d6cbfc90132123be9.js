webpackJsonp([9],{"L1/F":function(t,e){},bVO6:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Gu7T"),s=a.n(n),o=a("KOga"),i={components:{childTitle:a("JHw8").a},data:function(){return{title:"附近战友",contents:[]}},mounted:function(){var t=this;Object(o.a)("GET","nearby").then(function(e){t.contents=e.data.data}).catch(function(t){console.log(t)})},methods:{gotoBack:function(){this.$router.go(-1)},loadMore:function(){var t=this;this.preventRepeatReuqest||(this.preventRepeatReuqest=!0,Object(o.a)("GET","nearby").then(function(e){var a;(a=t.contents).push.apply(a,s()(e.data.data)),t.preventRepeatReuqest=!1}).catch(function(e){console.log(e),t.preventRepeatReuqest=!1}),console.log("loadmore"))}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nearby"},[a("child-title",{attrs:{title:t.title}}),t._v(" "),t._m(0),t._v(" "),a("ul",{directives:[{name:"load-more",rawName:"v-load-more",value:t.loadMore,expression:"loadMore"}],staticClass:"content"},t._l(t.contents,function(e,n){return a("li",[a("div",{staticClass:"img"},[a("img",{attrs:{src:e.image,alt:""}})]),t._v(" "),a("div",{staticClass:"info"},[a("h4",[t._v(t._s(e.name))]),t._v(" "),a("span",[t._v(t._s(e.title))])]),t._v(" "),a("a",{class:{active:e.addStatus},attrs:{href:"javascript:void(0);"}},[t._v(t._s(e.addStatus?"已加":"添加"))])])}))],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search"},[e("input",{attrs:{type:"text",placeholder:"搜索好友昵称"}})])}]};var r=a("VU/8")(i,c,!1,function(t){a("L1/F")},"data-v-bf857256",null);e.default=r.exports}});
//# sourceMappingURL=9.2c1d6cbfc90132123be9.js.map