webpackJsonp([1],{KgXo:function(e,t,a){"use strict";var n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("span",[t("svg",{staticClass:"icon-audio"},[t("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#icon-audio"}})])])},staticRenderFns:[]};var s=a("F6Qa")({},n,!1,function(e){a("qemU")},"data-v-56f3fa7c",null);t.a=s.exports},"oZq/":function(e,t){},qemU:function(e,t){},yDdK:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("pBo4"),s=a.n(n),o=a("S63O"),i=a("KgXo"),r=a("KOga"),l=(a("PIst"),{components:{swiperSlider:o.a,load:i.a},data:function(){return{option:{baseUrl:"/detail/",slideArr:[]},contents:[],preventRepeatReuqest:!1,haveData:!0,loadFlag:!0}},created:function(){var e=this;Object(r.a)("get","news").then(function(t){e.loadFlag=!1,e.contents=t.data.newsContent,e.option.slideArr=t.data.slide}).catch(function(e){console.log(e)})},methods:{loadMore:function(){var e=this;this.preventRepeatReuqest||(this.preventRepeatReuqest=!0,Object(r.a)("get","zuixinContent").then(function(t){var a;t.data==[]||""==t.data?e.haveData=!1:(e.haveData=!0,(a=e.contents).push.apply(a,s()(t.data)));e.preventRepeatReuqest=!1}).catch(function(t){e.preventRepeatReuqest=!1}))},gotoAddress:function(e,t){this.$router.push(e),this.activeId=t}}}),c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("load",{directives:[{name:"show",rawName:"v-show",value:e.loadFlag,expression:"loadFlag"}]}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.loadFlag,expression:"!loadFlag"}]},[a("swiper-slider",{attrs:{options:e.option}}),e._v(" "),a("ul",{directives:[{name:"load-more",rawName:"v-load-more",value:e.loadMore,expression:"loadMore"}],staticClass:"content"},e._l(e.contents,function(t,n){return a("li",[a("div",{staticClass:"img"},[a("img",{attrs:{src:t.imgUrl,alt:""}})]),e._v(" "),a("div",{staticClass:"info"},[a("a",{on:{click:function(a){e.gotoAddress({path:"/detail/"+t.id})}}},[e._v(e._s(t.title))]),e._v(" "),a("span",[e._v(e._s(t.date))])])])}),0)],1),e._v(" "),a("footer",{directives:[{name:"show",rawName:"v-show",value:e.preventRepeatReuqest,expression:"preventRepeatReuqest"}]},[a("svg",{directives:[{name:"show",rawName:"v-show",value:e.haveData,expression:"haveData"}],staticClass:"icon-audio"},[a("use",{attrs:{"xmlns:xlink":"http://www.w3.org/1999/xlink","xlink:href":"#icon-audio"}})])]),e._v(" "),a("footer",[a("span",{directives:[{name:"show",rawName:"v-show",value:!e.haveData,expression:"!haveData"}]},[e._v("------我是有底线的-------")])])],1)},staticRenderFns:[]};var v=a("F6Qa")(l,c,!1,function(e){a("oZq/")},"data-v-768e28b0",null);t.default=v.exports}});
//# sourceMappingURL=1.a45b1874eab928f463cb.js.map