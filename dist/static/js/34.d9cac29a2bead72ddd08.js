webpackJsonp([34],{a9gx:function(t,e){},gri3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("Gu7T"),n=a.n(s),o=a("Dd8w"),r=a.n(o),c=a("KOga"),i=a("x6Ga"),u=this,d={data:function(){return{contents:{strategy0:[],strategy1:[],strategy2:[],strategy3:[]},preventRepeatReuqest:!1}},computed:r()({},Object(i.c)(["strategyStatus"])),mounted:function(){var t=this;console.log(this.$route.params),Object(c.a)("GET","https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/strategy/"+this.strategyStatus).then(function(e){t.contents["strategy"+t.strategyStatus]=e.data.data}).catch(function(t){console.log(t)})},watch:{$route:function(t,e){/strategy/.test(t.path)&&(console.log(t.path),t.params.id&&Object(c.a)("GET","https://www.easy-mock.com/mock/5a68269de91af545282b6be8/example/strategy/"+t.params.id).then(function(t){u.contents["strategy"+u.strategyStatus]=t.data.data}).catch(function(t){console.log(t)}))}},methods:{loadMore:function(){var t=this;this.preventRepeatReuqest||(this.preventRepeatReuqest=!0,Object(c.a)("GET","zuixinContent").then(function(e){var a;(a=t.contents).push.apply(a,n()(e.data.data)),t.preventRepeatReuqest=!1}).catch(function(e){console.log(e),t.preventRepeatReuqest=!1}),console.log("loadmore"))},gotoAddress:function(t,e){this.$router.push(t)}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{directives:[{name:"load-more",rawName:"v-load-more",value:t.loadMore,expression:"loadMore"}],staticClass:"content"},t._l(t.contents["strategy"+t.stra],function(e,s){return a("li",[a("div",{staticClass:"img"},[a("img",{attrs:{src:e.image,alt:""}})]),t._v(" "),a("div",{staticClass:"info"},[a("a",{on:{click:function(a){t.gotoAddress({path:"/detail/"+e.id})}}},[t._v(t._s(e.title))]),t._v(" "),a("span",[t._v(t._s(e.date))])])])})),t._v(" "),a("footer",{directives:[{name:"show",rawName:"v-show",value:t.preventRepeatReuqest,expression:"preventRepeatReuqest"}]},[t._v("\n\t\t正在加载更多内容...\n\t")])])},staticRenderFns:[]};var p=a("VU/8")(d,l,!1,function(t){a("a9gx")},"data-v-251f868d",null);e.default=p.exports}});
//# sourceMappingURL=34.d9cac29a2bead72ddd08.js.map