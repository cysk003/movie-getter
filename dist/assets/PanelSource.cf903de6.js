import{S as p}from"./public.9823c9d7.js";import{p as D}from"./path.63f97327.js";import{s as l}from"./data.270c8dc4.js";import{G as s,H as x,C as v,D as F}from"./api.8c74fd8b.js";import{F as B}from"./FlashOutline.16c33c91.js";import{A as k,R as E}from"./RefreshCircleOutline.665137f3.js";import{N as S}from"./Switch.199ef1af.js";import{e as z,r as A,s as N,z as V,A as o,H as O,B as n,C as i,x as c,_ as a,h as r}from"./index.51407d32.js";import{u as b}from"./use-notification.e855f71d.js";import{N as G}from"./Icon.b8d909f1.js";import{_ as d}from"./Space.4ed87f99.js";import{_ as H}from"./Input.24c4dafd.js";import{_ as U}from"./DataTable.c009470e.js";import"./index.80337ce4.js";import"./base.12718b58.js";import"./use-merged-state.a0315c03.js";import"./Tooltip.a0abd3ed.js";import"./next-frame-once.da993024.js";import"./get-slot.5ad428c3.js";import"./Checkbox.099ae515.js";import"./Dropdown.15371dae.js";import"./create.aafe3cda.js";import"./Ellipsis.819401b7.js";import"./Pagination.59dcefb8.js";import"./Tag.c7cdbf46.js";const $={style:{display:"flex","align-items":"center",height:"100%"}},I={style:{display:"flex","align-items":"center",height:"100%"}},pe=z({__name:"PanelSource",setup(R){D.value=[{name:"\u91C7\u96C6\u6E90",params:null,to:""}];const _=A([{title:"ID",key:"id",width:100,align:"center"},{title:"\u8D44\u6E90\u5E93\u540D",key:"name",width:150,align:"center",render(e,t){return r(p,{value:e.name,onUpdateValue(u){l.value[t].name=u}})}},{title:"\u5730\u5740",key:"url",align:"center",render(e,t){return r(p,{value:e.url,onUpdateValue(u){l.value[t].url=u}})}},{title:"\u91C7\u96C6\u8FDB\u5EA6",key:"complete",align:"center",width:100,render(e,t){return r("div",e.complete?"\u5DF2\u5B8C\u6210":"\u672A\u5B8C\u6210")}},{title:"\u91C7\u96C6\u60C5\u51B5",key:"getting",align:"center",width:100,render(e,t){return r(S,{value:e.getting,onUpdateValue:u=>{x(e.id,e.getting).then(()=>{e.getting=!e.getting})}})}},{title:"\u64CD\u4F5C",key:"action",width:"300px",align:"center",render(e,t){return r(d,{justify:"center"},()=>[r(a,{secondary:!0,type:"info",size:"small"},()=>"\u91CD\u65B0\u91C7\u96C6"),[e.create?r(a,{secondary:!0,type:"info",size:"small",onClick:()=>{v(e.name,e.url).then(()=>{s(),m.success({duration:2e3,content:"\u4FDD\u5B58",meta:"\u64CD\u4F5C\u6210\u529F"})})}},()=>"\u4FDD\u5B58"):null,,r(a,{secondary:!0,type:"error",size:"small",onClick:()=>{F(e.id).then(()=>{s(),m.success({duration:2e3,content:"\u5220\u9664",meta:"\u64CD\u4F5C\u6210\u529F"})})}},()=>"\u5220\u9664")]])}}]),m=b();function f(){l.value.push({id:0,name:"\u65B0\u5EFA\u91C7\u96C6\u6E90",url:"\u5F85\u6DFB\u52A0",getting:!1,complete:!1,create:!0})}return(e,t)=>{const u=G,C=H,g=U,y=O;return N(),V(y,{title:"\u91C7\u96C6\u6E90",size:"small"},{"header-extra":o(()=>[n(i(d),null,{default:o(()=>[n(C,{placeholder:"\u641C\u7D22",disabled:!0,round:""},{prefix:o(()=>[n(u,{component:i(B)},null,8,["component"])]),_:1}),c("div",$,[n(i(a),{text:"",type:"primary",style:{"font-size":"24px"},onClick:t[0]||(t[0]=h=>f())},{default:o(()=>[n(u,null,{default:o(()=>[n(i(k))]),_:1})]),_:1})]),c("div",I,[n(i(a),{text:"",type:"info",style:{"font-size":"24px"},onClick:t[1]||(t[1]=h=>i(s)())},{default:o(()=>[n(u,null,{default:o(()=>[n(i(E))]),_:1})]),_:1})])]),_:1})]),default:o(()=>[n(g,{columns:_.value,data:i(l),bordered:!1,"single-line":!1},null,8,["columns","data"])]),_:1})}}});export{pe as default};