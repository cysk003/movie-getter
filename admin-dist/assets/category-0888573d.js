import{_ as f}from"./generalDataTable-21d528f9.js";import{a as h,_ as x}from"./base-00cd4309.js";import{b as m,a as u,g as d,c as C}from"./index-cb19638e.js";import{b as k,c as w}from"./api-2e55659d.js";import{d as i,r as v,h as s,e as S,f as N,w as K,u as t,o as b,a as M}from"./index-0c211c6c.js";import{_ as p}from"./Button-3a03cb69.js";import{_ as z}from"./generalModal.vue_vue_type_script_setup_true_lang-d65be4a3.js";import"./Checkbox-3f5a4a3f.js";const B=m(),$=u();i(()=>$.categoryModal);const j=(e,o)=>s(z,{justify:"center"},()=>[s(p,{type:"info",strong:!0,size:"small",secondary:!0,onClick:()=>{console.log(e.main),k(e.id,!e.main,()=>{e.main=!e.main})}},{default:()=>e.main?"取消主分类":"设为主分类"}),s(p,{type:"error",strong:!0,size:"small",secondary:!0,onClick:()=>{w(e.id,(c,l)=>{B.deleteCategory(e.id)})}},{default:()=>"删除"})]),A=v([{title:"ID",key:"id",align:"center",width:"100px",ellipsis:!0},{title:"资源库名",key:"name",align:"center",minWidth:"200px",ellipsis:!0,render:(e,o)=>d(e.name)},{title:"采集类数",key:"classNum",align:"center",width:"100px"},{title:"影片数",key:"movieNum",align:"center",width:"100px"},{title:"操作",key:"actions",align:"center",width:"300px",render:(e,o)=>d(j(e))}]),H=S({__name:"category",setup(e){const o=m(),c=u(),l=i(()=>o.categories),a=i(()=>c.categoryModal),n=C(1,0,r=>{n.value.page=r}),_=()=>{let r=h({id:-1,name:"",classNum:0,movieNum:0,main:!0});a.value.data=r,a.value.new=!0,a.value.show=!0};return(r,D)=>{const g=x,y=f;return b(),N(y,{title:"自建分类",columns:t(A),data:t(l),page:t(n).page,pageCount:t(n).pageCount,update:t(n).update,add:_,isAdd:!0,keyword:t(o).categoryKeyword,updateKeyword:t(o).updatecategoryKeyword},{extra:K(()=>[M(g,{title:"分类",data:t(a).data,show:t(a).show,type:t(a).type,onClose:t(a).close,onSave:t(a).save},null,8,["data","show","type","onClose","onSave"])]),_:1},8,["columns","data","page","pageCount","update","keyword","updateKeyword"])}}});export{H as default};
