import{H as c,_ as m,ah as p,o as e,c as n,a as s,U as t,S as l,F as v,a8 as b,O as w}from"./@vue-e2c1ea2d.js";import{_ as y}from"./_plugin-vue_export-helper-c27b6911.js";const h={class:"layout-navbars-breadcrumb-user-news"},g={class:"head-box"},k={class:"head-box-title"},f={class:"content-box"},x={class:"content-box-msg"},C={class:"content-box-time"},L=c({name:"layoutBreadcrumbUserNews"}),B=c({...L,setup(N){const o=m({newsList:[{label:"关于版本发布的通知",value:"devui-dragonfly，基于 vue3 + CompositionAPI + typescript + vite + element plus，正式发布时间：2021年02月28日！",time:"2020-12-08"},{label:"关于学习交流的通知",value:"QQ群号码 665452019，欢迎小伙伴入群学习交流探讨！",time:"2020-12-08"}]}),r=()=>{o.newsList=[]},d=()=>{window.open("https://gitee.com/lyt-top/devui-dragonfly")};return(a,$)=>{const _=p("el-empty");return e(),n("div",h,[s("div",g,[s("div",k,t(a.$t("message.user.newTitle")),1),o.newsList.length>0?(e(),n("div",{key:0,class:"head-box-btn",onClick:r},t(a.$t("message.user.newBtn")),1)):l("",!0)]),s("div",f,[o.newsList.length>0?(e(!0),n(v,{key:0},b(o.newsList,(i,u)=>(e(),n("div",{class:"content-box-item",key:u},[s("div",null,t(i.label),1),s("div",x,t(i.value),1),s("div",C,t(i.time),1)]))),128)):(e(),w(_,{key:1,description:a.$t("message.user.newDesc")},null,8,["description"]))]),o.newsList.length>0?(e(),n("div",{key:0,class:"foot-box",onClick:d},t(a.$t("message.user.newGo")),1)):l("",!0)])}}});const D=y(B,[["__scopeId","data-v-a60bada1"]]);export{D as default};
