import{i as B}from"./api.8c74fd8b.js";import{_ as h}from"./Checkbox.099ae515.js";import{e as x,r as l,s as F,z as b,A as e,B as o,x as t,F as r,_ as w,H as y}from"./index.51407d32.js";import{a as k,_ as C}from"./Grid.7bfbd844.js";import{_ as z}from"./Input.24c4dafd.js";import{_ as L}from"./Space.4ed87f99.js";import"./index.80337ce4.js";import"./base.12718b58.js";import"./data.270c8dc4.js";import"./use-merged-state.a0315c03.js";import"./get-slot.5ad428c3.js";import"./next-frame-once.da993024.js";const N={class:"form"},V={class:"form"},j=r(" \u5FD8\u8BB0\u5BC6\u7801 "),D=r(" \u767B\u5F55 "),R=x({__name:"Login",setup(U){const i=l(!1),_=l(""),a=l("");function m(){i.value=!0,B(_.value,a.value)}return(A,n)=>{const p=z,d=h,c=w,s=L,f=y,v=C,g=k;return F(),b(g,{cols:"1 l:5",responsive:"screen"},{default:e(()=>[o(v,{span:"1",offset:"0 l:2"},{default:e(()=>[o(s,{class:"card",justify:"center",vertical:""},{default:e(()=>[o(f,{title:"\u767B\u5F55"},{default:e(()=>[o(s,{vertical:""},{default:e(()=>[t("div",N,[o(p,{value:_.value,"onUpdate:value":n[0]||(n[0]=u=>_.value=u),type:"text",size:"large",placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["value"])]),t("div",null,[o(p,{value:a.value,"onUpdate:value":n[1]||(n[1]=u=>a.value=u),type:"password",size:"large","show-password-on":"mousedown",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",maxlength:8},null,8,["value"])]),t("div",V,[o(s,{justify:"space-between"},{default:e(()=>[o(d,{size:"large",label:"\u8BB0\u4F4F\u5BC6\u7801"}),o(c,{text:""},{default:e(()=>[j]),_:1})]),_:1})]),t("div",null,[o(c,{class:"button-block",type:"primary",loading:i.value,onClick:m},{default:e(()=>[D]),_:1},8,["loading"])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{R as default};