(function(e){function t(t){for(var r,o,i=t[0],l=t[1],u=t[2],_=0,p=[];_<i.length;_++)o=i[_],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==s[l]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},s={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/stormworks-career-setter/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),s=n.n(r);s.a},1298:function(e){e.exports=JSON.parse('[{"label":"Classic Career (pre 1.0.0)","value":"classic-career","settings":{"conditions":{"third_person":false,"third_person_vehicle":false,"vehicle_damage":true,"player_damage":true,"npc_damage":true,"sharks":true,"fast_travel":true,"teleport_vehicle":true,"rogue_mode":false,"auto_refuel":true,"megalodon":false,"map_show_players":true,"map_show_vehicles":true,"show_3d_waypoints":true,"show_name_plates":true,"unlock_all_islands":false,"unlock_all_components":false,"infinite_batteries":false,"infinite_money":false,"infinite_fuel":false,"engine_overheating":true,"no_clip":false,"map_teleport":false,"cleanup_vehicle":false,"clear_fow":false,"vehicle_spawning":true,"photo_mode":true,"respawning":true,"despawn_on_leave":true,"settings_menu_lock":true,"settings_menu":true},"currency":{"cash":25000,"research":20}}},{"label":"Career","value":"1.0-career","settings":{"conditions":{"third_person":true,"third_person_vehicle":true,"vehicle_damage":true,"player_damage":true,"npc_damage":false,"sharks":true,"fast_travel":true,"teleport_vehicle":true,"rogue_mode":true,"auto_refuel":true,"megalodon":true,"map_show_players":true,"map_show_vehicles":true,"show_3d_waypoints":true,"show_name_plates":true,"unlock_all_islands":true,"unlock_all_components":true,"infinite_batteries":true,"infinite_money":true,"infinite_fuel":true,"engine_overheating":true,"no_clip":true,"map_teleport":true,"cleanup_vehicle":true,"clear_fow":true,"vehicle_spawning":true,"photo_mode":true,"respawning":true,"despawn_on_leave":true,"settings_menu_lock":true,"settings_menu":false},"currency":{"cash":25000,"research":20}}},{"label":"Rogue","value":"rogue","settings":{"conditions":{"third_person":true,"third_person_vehicle":true,"vehicle_damage":true,"player_damage":true,"npc_damage":false,"sharks":true,"fast_travel":true,"teleport_vehicle":true,"rogue_mode":true,"auto_refuel":true,"megalodon":true,"map_show_players":true,"map_show_vehicles":true,"show_3d_waypoints":true,"show_name_plates":true,"unlock_all_islands":true,"unlock_all_components":true,"infinite_batteries":true,"infinite_money":true,"infinite_fuel":true,"engine_overheating":true,"no_clip":true,"map_teleport":true,"cleanup_vehicle":true,"clear_fow":true,"vehicle_spawning":true,"photo_mode":true,"respawning":true,"despawn_on_leave":true,"settings_menu_lock":true,"settings_menu":false},"currency":{"cash":25000,"research":20}}}]')},2610:function(e,t,n){"use strict";var r=n("e0ef"),s=n.n(r);s.a},"34d4":function(e){e.exports=JSON.parse('{"conditions":{"third_person":true,"third_person_vehicle":true,"vehicle_damage":false,"player_damage":false,"npc_damage":false,"sharks":true,"fast_travel":true,"teleport_vehicle":true,"rogue_mode":false,"auto_refuel":true,"megalodon":false,"map_show_players":true,"map_show_vehicles":true,"show_3d_waypoints":true,"show_name_plates":true,"unlock_all_islands":false,"unlock_all_components":true,"infinite_batteries":false,"infinite_money":true,"infinite_fuel":false,"engine_overheating":true,"no_clip":true,"map_teleport":true,"cleanup_vehicle":false,"clear_fow":true,"vehicle_spawning":true,"photo_mode":true,"respawning":true,"despawn_on_leave":true,"settings_menu_lock":false,"settings_menu":false},"currency":{"cash":25000,"research":20}}')},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Page")],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-layout"},[n("h2",[e._v("Stormworks Settings Lua Generator")]),n("form",[n("vue-select",{staticClass:"selector",attrs:{options:e.presets,reduce:function(e){return e.value},clearable:!1,placeholder:"Presets"},on:{input:e.updateSettingsFromPreset},model:{value:e.selectedPreset,callback:function(t){e.selectedPreset=t},expression:"selectedPreset"}}),n("md-list",{staticClass:"md-layout"},[n("div",{staticClass:"md-layout"},[e._l(e.conditions,(function(t,r,s){return n("md-list-item",{key:""+t+s,staticClass:"md-size-25"},[n("Checkbox",{attrs:{name:r,bool:t},on:{childToParent:e.onChildClick}})],1)})),n("md-list-item",e._l(e.currency,(function(t,r,s){return n("InputField",{key:""+t+s,attrs:{name:r,value:t},on:{childToParent:e.onChildInput}})})),1)],2),n("LuaModal",{attrs:{title:"Generate Lua File",settings:e.conditions,currency:e.currency}})],1)],1)])},i=[],l=(n("4de4"),n("4fad"),n("3835")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("md-checkbox",{staticClass:"md-primary",on:{change:e.sendToParent},model:{value:e.checkboxBool,callback:function(t){e.checkboxBool=t},expression:"checkboxBool"}}),n("span",[e._v(e._s(e.formatName))])],1)},c=[],_=(n("a15b"),n("d81d"),n("fb6a"),n("b0c0"),n("ac1f"),n("1276"),{props:{name:String,bool:Boolean},data:function(){return{checkboxBool:this.bool}},computed:{formatName:function(){return this.name.split("_").map((function(e){return e.slice(0,1).toUpperCase()+e.slice(1)})).join(" ")}},methods:{sendToParent:function(){this.$emit("childToParent",{field:this.name,value:this.checkboxBool})}}}),p=_,d=n("2877"),f=Object(d["a"])(p,u,c,!1,null,"102d2e1c",null),h=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("md-field",[n("label",[e._v(" "+e._s(e.name)+" ")]),n("md-input",{on:{change:e.sendToParent},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}})],1)},v=[],g=(n("a9e3"),{props:{name:String,value:Number},data:function(){return{inputValue:this.value}},methods:{sendToParent:function(){this.$emit("childToParent",{field:this.name,value:this.inputValue})}}}),b=g,y=Object(d["a"])(b,m,v,!1,null,null,null),w=y.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("md-dialog",{attrs:{"md-active":e.showDialog},on:{"update:mdActive":function(t){e.showDialog=t},"update:md-active":function(t){e.showDialog=t}}},[n("md-dialog-title",{staticClass:"md-layout-item"},[e._v("Paste in to Lua Playlist")]),n("md-dialog-content",{staticClass:"lua-text"},[n("LuaText",{attrs:{settings:e.settings,currency:e.currency}})],1),n("md-dialog-actions",[n("md-button",{staticClass:"md-primary",on:{click:e.selectAll}},[e._v("Select all")]),n("md-button",{staticClass:"md-primary",on:{click:function(t){e.showDialog=!1}}},[e._v("Close")])],1)],1),n("md-button",{staticClass:"md-primary md-raised",on:{click:function(t){e.showDialog=!0}}},[e._v(" "+e._s(e.title)+" ")])],1)},k=[],P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v(" function "),n("span",{staticClass:"function"},[e._v("onCreate")]),e._v("()"),n("br"),e._l(e.settings,(function(t,r,s){return n("span",{key:""+t+s},[e._v(" server."),n("span",{staticClass:"function"},[e._v("setGameSetting")]),e._v("("),n("span",{staticClass:"string"},[e._v('"'+e._s(r)+'"')]),e._v(", "),n("span",{staticClass:"bool"},[e._v(" "+e._s(t))]),e._v(") "),n("br")])})),n("br"),n("span",{staticClass:"bool"},[e._v("if")]),e._v(" (is_start) "),n("span",{staticClass:"bool"},[e._v("then")]),e._v(" "),n("br"),e._v(" server."),n("span",{staticClass:"function"},[e._v("setCurrency")]),e._v("("),n("span",{staticClass:"number"},[e._v(e._s(e.currency.cash))]),e._v(", "),n("span",{staticClass:"number"},[e._v(e._s(e.currency.research))]),e._v(")"),n("br"),n("span",{staticClass:"bool"},[e._v("end")]),n("br"),n("span",{staticClass:"bool"},[e._v("end")]),n("br"),n("br")],2)])},x=[],O={props:{settings:Object,currency:Object}},j=O,S=(n("2610"),Object(d["a"])(j,P,x,!1,null,"73b4ed9e",null)),T=S.exports,J={name:"DialogCustom",props:{title:String,settings:Object,currency:Object},data:function(){return{showDialog:!1}},components:{LuaText:T},methods:{selectAll:function(){window.getSelection().selectAllChildren(document.querySelector(".lua-text"))}}},$=J,D=(n("a9ad"),Object(d["a"])($,C,k,!1,null,"b836d29a",null)),L=D.exports,B=n("4a7a"),E=n.n(B),M=n("1298"),A=n("34d4"),F={name:"Page",components:{Checkbox:h,InputField:w,LuaModal:L,"vue-select":E.a},data:function(){return{settingsJson:A,presetsJson:M,selectedPreset:""}},computed:{conditions:function(){return this.settingsJson.conditions},currency:function(){return this.settingsJson.currency},presets:function(){return this.presetsJson}},methods:{onChildClick:function(e){this.updateSettings(e),this.selectedPreset="Custom"},onChildInput:function(e){this.updateCurrency(e),this.selectedPreset="Custom"},updateSettings:function(e){var t=e.field,n=e.value;r["default"].set(this.conditions,t,n)},updateCurrency:function(e){var t=e.field,n=e.value;r["default"].set(this.currency,t,n)},updateSettingsFromPreset:function(){for(var e=this,t=this.presets.filter((function(t){return t.value===e.selectedPreset}))[0].settings,n=0,r=Object.entries(t.conditions);n<r.length;n++){var s=Object(l["a"])(r[n],2),a=s[0],o=s[1];this.updateSettings({field:a,value:o})}for(var i=0,u=Object.entries(t.currency);i<u.length;i++){var c=Object(l["a"])(u[i],2),_=c[0],p=c[1];this.updateCurrency({field:_,value:p})}}}},N=F,V=(n("d7cb"),Object(d["a"])(N,o,i,!1,null,"3690440d",null)),I=V.exports,G={name:"App",components:{Page:I}},q=G,z=(n("034f"),Object(d["a"])(q,s,a,!1,null,null,null)),R=z.exports,U=n("43f9"),H=n.n(U);n("51de"),n("0759"),n("6dfc");r["default"].use(H.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(R)}}).$mount("#app")},"85ec":function(e,t,n){},9893:function(e,t,n){},a9ad:function(e,t,n){"use strict";var r=n("9893"),s=n.n(r);s.a},bfe7:function(e,t,n){},d7cb:function(e,t,n){"use strict";var r=n("bfe7"),s=n.n(r);s.a},e0ef:function(e,t,n){}});
//# sourceMappingURL=app.b22a4a6e.js.map