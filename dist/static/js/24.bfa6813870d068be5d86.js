webpackJsonp([24],{BeW4:function(t,e){},SQI5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("KOga"),a={components:{childTitle:n("JHw8").a},data:function(){return{title:"生死狙击",content:null}},mounted:function(){var t=this;Object(i.a)("GET","novel/"+this.$route.params.id+"/"+this.$route.params.chapterId).then(function(e){t.content=e.data.data}).catch(function(t){console.log(t)})},methods:{gotoBack:function(){this.$router.go(-1)}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"novelDetail"},[e("child-title",{attrs:{title:this.title}}),this._v(" "),e("div",{staticClass:"content"},[this._v("\n\t\t"+this._s(this.content)+"\n\t")])],1)},staticRenderFns:[]};var s=n("VU/8")(a,o,!1,function(t){n("BeW4")},"data-v-4eec9100",null);e.default=s.exports}});
//# sourceMappingURL=24.bfa6813870d068be5d86.js.map