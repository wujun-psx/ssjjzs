webpackJsonp([31],{FtTv:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("pjeT"),o=i("KOga"),a={components:{childTitle:i("JHw8").a,list:e.a},data:function(){return{title:"游戏活动",options:[]}},mounted:function(){var t=this;Object(o.a)("GET","zuixinContent").then(function(n){t.options=n.data.data}).catch(function(t){console.log(t)})},methods:{gotoBack:function(){this.$router.go(-1)}}},s={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"activity"},[n("child-title",{attrs:{title:this.title}}),this._v(" "),n("list",{attrs:{option:this.options}})],1)},staticRenderFns:[]};var c=i("VU/8")(a,s,!1,function(t){i("mQjC")},"data-v-3d09667a",null);n.default=c.exports},mQjC:function(t,n){}});
//# sourceMappingURL=31.814282a9576820bb2aff.js.map