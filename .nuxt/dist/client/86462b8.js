(window.webpackJsonp=window.webpackJsonp||[]).push([[40,16,17,30,35],{507:function(t,e,o){var content=o(521);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("0fd849b2",content,!0,{sourceMap:!1})},508:function(t,e,o){var content=o(526);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("a150788a",content,!0,{sourceMap:!1})},520:function(t,e,o){"use strict";o(507)},521:function(t,e,o){var n=o(21)(!1);n.push([t.i,".v-card__subtitle[data-v-5b210e1c]{font-size:.9em;padding:0 0 0 40px;color:#f0f8ff}",""]),t.exports=n},525:function(t,e,o){"use strict";o(508)},526:function(t,e,o){var n=o(21)(!1);n.push([t.i,'.neon3[data-v-2312691f]{font-size:var(--font-size);position:relative;cursor:pointer;border:.125em solid var(--clr-neon);padding:.25em 1em;border-radius:.25em;text-shadow:0 0 .2em hsla(0,0%,100%,.46667),0 0 .3em var(--clr-neon);box-shadow:inset 0 0 .5em var(--clr-neon),0 0 .5em var(--clr-neon)}.neon3[data-v-2312691f]:before{top:90%;width:100%;height:100%;transform:perspective(1.2em) rotateX(5deg) scaleY(0);filter:blur(.5em);opacity:.6;pointer-events:none}.neon3[data-v-2312691f]:after,.neon3[data-v-2312691f]:before{content:"";position:absolute;left:0;background:var(--clr-neon);transition:opacity .1s linear}.neon3[data-v-2312691f]:after{top:0;right:0;bottom:0;box-shadow:0 0 2em var(--clr-neon);z-index:-1;opacity:0}.neon3[data-v-2312691f]:hover:after{opacity:1}.neon3[data-v-2312691f]:focus,.neon3[data-v-2312691f]:hover{color:#fff}.neon3[data-v-2312691f]:hover:before{opacity:.8}',""]),t.exports=n},527:function(t,e,o){var content=o(582);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("4c33244e",content,!0,{sourceMap:!1})},528:function(t,e,o){var content=o(584);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("40b0db87",content,!0,{sourceMap:!1})},562:function(t,e,o){"use strict";o.r(e);o(37),o(60);var n={data:function(){return{option:{tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{left:80},xAxis:{name:"Year",offset:20,nameLocation:"center",nameTextStyle:{fontSize:12,color:"#fff"},axisLabel:{fontSize:12,verticalAlign:"bottom",textStyle:{color:"#fff"}},type:"category",data:this.time},yAxis:{nameTextStyle:{fontSize:12,color:"#fff"},name:this.yAxis,type:"value",min:0,axisLabel:{fontSize:12,textStyle:{color:"#fff"}}},series:[{name:"Current",data:this.data,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]}}},mounted:function(){var t=this;setTimeout((function(){var e=t.$echarts.init(document.getElementById(t.id));e.setOption(t.option,!0),window.addEventListener("resize",(function(){e.resize()}))}),100)},updated:function(){var t=this,option={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{left:80},xAxis:{name:"Year",offset:20,nameLocation:"center",nameTextStyle:{fontSize:12,color:"#fff"},axisLabel:{fontSize:12,verticalAlign:"bottom",textStyle:{color:"#fff"}},type:"category",data:this.time},yAxis:{nameTextStyle:{fontSize:12,color:"#fff"},name:this.yAxis,type:"value",min:0,axisLabel:{fontSize:12,textStyle:{color:"#fff"}}},series:[{name:"Current",data:this.data,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]};setTimeout((function(){var e=t.$echarts.init(document.getElementById(t.id));e.setOption(option,!0),window.addEventListener("resize",(function(){e.resize()}))}),100)},props:["data","yAxis","max","time","title","id"],methods:{clickedShowDetailModal:function(t){console.log("value")}}},r=(o(520),o(41)),c=o(84),l=o.n(c),d=o(66),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"level"},[o("v-card-subtitle",{staticClass:"sidebar rounded-lg pt-3"},[t._v("\n    "+t._s(t.title.toUpperCase())+"\n  ")]),t._v(" "),o("div",{staticStyle:{width:"100%",height:"33vh"},attrs:{id:t.id,data:t.data}})],1)}),[],!1,null,"5b210e1c",null);e.default=component.exports;l()(component,{VCardSubtitle:d.b})},565:function(t,e,o){"use strict";o.r(e);var n={mounted:function(){},methods:{},props:["detail"]},r=(o(525),o(41)),c=o(84),l=o.n(c),d=o(236),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-btn",{staticClass:"neon3",staticStyle:{width:"9vw",height:"7vh","font-size":"0.8em"}},[t._v(t._s(t.detail))])}),[],!1,null,"2312691f",null);e.default=component.exports;l()(component,{VBtn:d.a})},581:function(t,e,o){"use strict";o(527)},582:function(t,e,o){var n=o(21)(!1);n.push([t.i,'.col[data-v-06c42318]{padding-left:2px;padding-right:2px}.v-card__subtitle[data-v-06c42318]{font-size:.9em;padding:0 0 0 40px;color:#f0f8ff}[data-v-06c42318]::-webkit-scrollbar{width:10px}[data-v-06c42318]::-webkit-scrollbar-track{box-shadow:inset 0 0 10px 10px #fff;border:3px solid transparent}[data-v-06c42318]::-webkit-scrollbar-thumb{box-shadow:inset 0 0 10px 10px #025a73;border:3px solid transparent}.left2[data-v-06c42318]{width:40%;display:flex;flex-direction:column}.right2[data-v-06c42318]{width:100%;overflow-x:hidden}.active[data-v-06c42318]{font-size:var(--font-size);position:relative;cursor:pointer;border:.125em solid red!important;padding:.25em 1em;border-radius:.25em;text-shadow:0 0 .2em hsla(0,0%,100%,.46667),0 0 .3em red;box-shadow:inset 0 0 .5em red,0 0 .5em red}.active[data-v-06c42318]:before{top:90%;width:100%;height:100%;transform:perspective(1.2em) rotateX(5deg) scaleY(0);filter:blur(.5em);opacity:.6;pointer-events:none}.active[data-v-06c42318]:after,.active[data-v-06c42318]:before{content:"";position:absolute;left:0;background:red;transition:opacity .1s linear}.active[data-v-06c42318]:after{top:0;right:0;bottom:0;box-shadow:0 0 2em red;z-index:-1;opacity:0}.active[data-v-06c42318]:hover:after{opacity:1}.active[data-v-06c42318]:focus,.active[data-v-06c42318]:hover{color:#fff}.active[data-v-06c42318]:hover:before{opacity:.8}',""]),t.exports=n},583:function(t,e,o){"use strict";o(528)},584:function(t,e,o){var n=o(21)(!1);n.push([t.i,".v-card__subtitle[data-v-049cab10]{font-size:.9em;padding:0 0 0 40px;color:#f0f8ff}",""]),t.exports=n},606:function(t,e,o){"use strict";o.r(e);o(9),o(13),o(10),o(4),o(19),o(11),o(20);var n=o(3),r=o(565),c=o(85);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{categories:[{category:"",locations:[{name:""}]}],activeCategory:0,activeBuilding:0}},mounted:function(){this.getCategory()},updated:function(){},components:{ClassButton:r.default},methods:d(d({},Object(c.c)({setId:"setId"})),{},{selectCategory:function(i){this.activeCategory=i,this.activeBuilding=0,this.setId(this.categories[this.activeCategory].locations[0].id)},selectBuilding:function(i){this.activeBuilding=i,this.setId(this.categories[this.activeCategory].locations[this.activeBuilding].id)},getCategory:function(){var t=this;this.$axios.$get("http://127.0.0.1:5000/api/data/category",{}).then((function(e){console.log(e),t.categories=e;t.setId(e[0].locations[0].id)})).catch((function(t){console.log(t)}))},getBuildingData:function(t){this.$axios.$get("http://127.0.0.1:5000/api/data/building",{params:{id:t}}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}})},v=(o(581),o(41)),h=o(84),y=o.n(h),m=o(236),x=o(66),S=o(564),w=o(519),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"level"},[o("div",{staticStyle:{display:"flex","max-width":"30vw",height:"30vh"}},[o("div",{staticClass:"right2"},[t.categories?o("div",[o("v-row",{staticStyle:{"justify-content":"space-evenly"}},t._l(t.categories,(function(e,n){return o("v-col",{key:n,staticStyle:{"flex-grow":"0"}},[o("v-btn",{staticClass:"neon3",class:{active:n===t.activeCategory},staticStyle:{width:"9vw",height:"7vh","font-size":"0.8em"},on:{click:function(e){return t.selectCategory(n)}}},[t._v(t._s(e.category))])],1)})),1)],1):t._e()])]),t._v(" "),o("div",{staticStyle:{"border-bottom":"4px dashed white",margin:"1vh 2vw"}}),t._v(" "),o("div",{staticStyle:{display:"flex","max-width":"30vw",height:"40vh"}},[o("div",{staticClass:"right2"},[t.categories?o("div",[o("v-card-title",[t._v("Select building")]),t._v(" "),o("v-row",{staticStyle:{"justify-content":"space-evenly"}},t._l(t.categories[t.activeCategory].locations,(function(e,n){return o("v-col",{key:n,staticStyle:{"flex-grow":"0"}},[o("v-btn",{staticClass:"neon3",class:{active:n===t.activeBuilding},staticStyle:{width:"12vw",height:"7vh","font-size":"0.8em"},on:{click:function(e){return t.selectBuilding(n)}}},[t._v(t._s(e.name))])],1)})),1)],1):t._e()])])])}),[],!1,null,"06c42318",null);e.default=component.exports;y()(component,{VBtn:m.a,VCardTitle:x.d,VCol:S.a,VRow:w.a})},620:function(t,e,o){var content=o(700);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("32804e1a",content,!0,{sourceMap:!1})},637:function(t,e,o){"use strict";o.r(e);o(37),o(60);var n={data:function(){return{option:{tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{left:80},legend:{data:["Min","Max","Avg"],textStyle:{fontSize:12,color:"#fff"}},xAxis:{name:this.xAxis,offset:20,nameLocation:"center",nameTextStyle:{fontSize:12,color:"#fff"},axisLabel:{fontSize:12,verticalAlign:"bottom",textStyle:{color:"#fff"}},type:"category",data:this.time},yAxis:{nameTextStyle:{fontSize:12,color:"#fff"},name:"%",type:"value",min:0,max:this.max2,axisLabel:{formatter:function(t,e){return t/1e3+"k"},fontSize:12,textStyle:{color:"#fff"}}},series:[{name:"Min",data:this.min,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Max",data:this.max,type:"line",fontSize:30,color:"#f52525",areaStyle:{color:"rgba(246, 36, 89, 0.2)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Avg",data:this.avg,type:"line",fontSize:30,color:"#1930fc",areaStyle:{color:"rgba(137, 196, 244, 0.5)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]}}},mounted:function(){var t=this;setTimeout((function(){var e=t.$echarts.init(document.getElementById(t.id));e.setOption(t.option,!0),window.addEventListener("resize",(function(){e.resize()}))}),1)},updated:function(){var option={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},grid:{left:80},legend:{data:["Min","Max","Avg"],textStyle:{fontSize:12,color:"#fff"}},xAxis:{name:this.xAxis,offset:20,nameLocation:"center",nameTextStyle:{fontSize:12,color:"#fff"},axisLabel:{fontSize:12,verticalAlign:"bottom",textStyle:{color:"#fff"}},type:"category",data:this.time},yAxis:{nameTextStyle:{fontSize:12,color:"#fff"},name:"%",type:"value",min:0,max:this.max2,axisLabel:{formatter:function(t,e){return t/1e3+"k"},fontSize:12,textStyle:{color:"#fff"}}},series:[{name:"Min",data:this.min,type:"line",fontSize:30,color:"#36c25b",areaStyle:{color:"rgba(135, 211, 124, 1)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Max",data:this.max,type:"line",fontSize:30,color:"#f52525",areaStyle:{color:"rgba(246, 36, 89, 0.2)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}},{name:"Avg",data:this.avg,type:"line",fontSize:30,color:"#1930fc",areaStyle:{color:"rgba(137, 196, 244, 0.5)"},label:{color:"black",fontSize:15,formatter:function(t){return t.name+t.data}}}]};this.$echarts.init(document.getElementById(this.id)).setOption(option,!0)},props:["data","id","title","xAxis","max2","min","max","avg","time"]},r=(o(583),o(41)),c=o(84),l=o.n(c),d=o(66),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"level"},[o("v-card-subtitle",{staticClass:"sidebar rounded-lg mb-3"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),o("div",{staticStyle:{width:"100%",height:"33vh"},attrs:{id:t.id,data:t.data,xAxis:t.xAxis,min:t.min,max:t.max,avg:t.avg,time:t.time,max2:t.max2}})],1)}),[],!1,null,"049cab10",null);e.default=component.exports;l()(component,{VCardSubtitle:d.b})},699:function(t,e,o){"use strict";o(620)},700:function(t,e,o){var n=o(21)(!1);n.push([t.i,"body,html{margin:0;padding:0;overflow-y:hidden}.border{border:5px solid #000;-o-border-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3Epath{animation:stroke .5s linear}%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23083361'/%3E%3Cstop offset='25%25' stop-color='%23094687'/%3E%3Cstop offset='50%25' stop-color='%231B5DA4'/%3E%3Cstop offset='100%25' stop-color='%230F355D'/%3E%3C/linearGradient%3E%3Cpath d='M0 3V0h3M97 0h3v3M0 97v3h3M97 100h3v-3' stroke='%23eee' stroke-width='3' stroke-dasharray='388'/%3E%3Cpath d='M0 5v90M100 5v90M5 0h90M5 100h90' stroke='%23eee' stroke-dasharray='388'/%3E%3C/svg%3E\") 2;border-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='100' height='100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3Epath{animation:stroke .5s linear}%3C/style%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23083361'/%3E%3Cstop offset='25%25' stop-color='%23094687'/%3E%3Cstop offset='50%25' stop-color='%231B5DA4'/%3E%3Cstop offset='100%25' stop-color='%230F355D'/%3E%3C/linearGradient%3E%3Cpath d='M0 3V0h3M97 0h3v3M0 97v3h3M97 100h3v-3' stroke='%23eee' stroke-width='3' stroke-dasharray='388'/%3E%3Cpath d='M0 5v90M100 5v90M5 0h90M5 100h90' stroke='%23eee' stroke-dasharray='388'/%3E%3C/svg%3E\") 2}.map-con{width:100%}",""]),t.exports=n},732:function(t,e,o){"use strict";o.r(e);o(9),o(13),o(10),o(4),o(19),o(11),o(20);var n=o(3),r=o(606),c=o(562),l=o(637),d=o(85);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var v={layout:"main",components:{ClassList:r.default,SingleLineChart:c.default,MultipleLineChart:l.default},data:function(){return{energy:[],enerySum:[],energyMax:[],energyMin:[],energyAvg:[],energyYear:[],beiSum:[],beiMax:[],beiMin:[],beiAvg:[],beiYear:[],eeiSum:[],eeiMax:[],eeiMin:[],eeiAvg:[],eeiYear:[],ceiSum:[],ceiMax:[],ceiMin:[],ceiAvg:[],ceiYear:[],try4:!1,bei:[],eei:[],cei:[],year:[]}},methods:{getEnergy:function(t){var e=this;this.$axios.$get("http://128.199.174.15:5000/api/data/building/energy",{params:{building_id:t}}).then((function(o){console.log(t),console.log(o),e.energy=[],e.energyMax=[],e.energyMin=[],e.energyAvg=[],e.energyYear=[];for(var i=0;i<o.length;i++)e.energy.push(o[i].totalec),e.energyMax.push(o[i].maxec),e.energyMin.push(o[i].minec),e.energyAvg.push(o[i].avgec),e.energyYear.push(o[i].year)})).catch((function(t){console.log(t)}))},getBei:function(t){var e=this;this.$axios.$get("http://128.199.174.15:5000/api/data/building/bei",{params:{building_id:t}}).then((function(t){console.log(t),e.bei=[],e.eei=[],e.cei=[],e.year=[];for(var i=0;i<t.length;i++)e.bei.push(t[i].totalec/t[i].net_floor_area),e.eei.push(t[i].totalec/t[i].no_of_occupants),e.cei.push(t[i].totalec*t[i].grid_electricity_emission_factor),e.year.push(t[i].year)})).catch((function(t){console.log(t)}))}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.d)({id:function(t){return t.id}})),watch:{id:function(){console.log(this.id),this.getEnergy(this.id),this.getBei(this.id)}},mounted:function(){this.try4=!1}},h=v,y=(o(699),o(41)),m=o(84),x=o.n(m),S=o(236),w=o(211),C=o(66),_=o(564),E=o(519),component=Object(y.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticStyle:{display:"flex"}},[o("div",{staticStyle:{width:"30vw",height:"calc(100vh - 100px) !important",position:"relative"}},[o("div",{staticStyle:{"margin-left":"1vw"}},[o("div",[o("v-card-title",[t._v("Select category")]),t._v(" "),o("ClassList")],1),t._v(" "),o("div",[o("div",{staticStyle:{"border-bottom":"4px dashed white",margin:"2vh 2vw"}}),t._v(" "),o("v-btn",{staticClass:"neon3",staticStyle:{width:"29vw",height:"7vh","font-size":"0.8em"},attrs:{to:"/"}},[t._v("BACK")])],1)])]),t._v(" "),o("div",{staticStyle:{width:"70vw",height:"calc(100vh - 100px) !important",padding:"1vw"}},[o("div",{staticClass:"map-con border"},[o("v-card-title",[t._v("Trends")]),t._v(" "),o("v-row",{staticClass:"data-box",staticStyle:{"padding-bottom":"5px","padding-left":"1vw","padding-right":"1vw"}},[o("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[o("v-card",{staticStyle:{background:"rgba(0, 0, 0, 0.2)"}},[o("SingleLineChart",{attrs:{title:"ENERGY USAGE",data:t.energy,yAxis:"10",max:t.energyMax,min:t.energyMin,avg:t.energyAvg,time:t.energyYear,id:"energy"}})],1)],1),t._v(" "),o("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[o("v-card",{staticStyle:{background:"rgba(0, 0, 0, 0.2)"}},[o("SingleLineChart",{attrs:{title:"BUILDING ENERGY INDEX (BEI)",data:t.bei,yAxis:"10",max:t.energyMax,min:t.energyMin,avg:t.energyAvg,time:t.year,id:"bei"}})],1)],1),t._v(" "),o("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[o("v-card",{staticStyle:{background:"rgba(0, 0, 0, 0.2)"}},[o("SingleLineChart",{attrs:{title:"ENERGY EFFICIENCY INDEX (EEI)",data:t.eei,yAxis:"10",max:t.energyMax,min:t.energyMin,avg:t.energyAvg,time:t.year,id:"eei"}})],1)],1),t._v(" "),o("v-col",{staticClass:"col-sm-6",attrs:{cols:"12"}},[o("v-card",{staticStyle:{background:"rgba(0, 0, 0, 0.2)"}},[o("SingleLineChart",{attrs:{title:"CARBON EMISSION INTENSITY (CEI)",data:t.cei,yAxis:"10",max:t.energyMax,min:t.energyMin,avg:t.energyAvg,time:t.year,id:"cei"}})],1)],1)],1)],1)])])}),[],!1,null,null,null);e.default=component.exports;x()(component,{ClassList:o(606).default,SingleLineChart:o(562).default}),x()(component,{VBtn:S.a,VCard:w.a,VCardTitle:C.d,VCol:_.a,VRow:E.a})}}]);