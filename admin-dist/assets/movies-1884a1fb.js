import{_ as x}from"./generalDataTable-21d528f9.js";import{b as f,_ as h}from"./base-00cd4309.js";import{d as l,r as k,h as m,e as S,g as C,i as K,j as b,k as M,f as V,w as W,u as a,o as N,a as R}from"./index-0c211c6c.js";import{a as _,d as g,g as r}from"./index-cb19638e.js";import{e as j}from"./api-2e55659d.js";import{_ as B}from"./Button-3a03cb69.js";import{_ as $}from"./generalModal.vue_vue_type_script_setup_true_lang-d65be4a3.js";import"./Checkbox-3f5a4a3f.js";const z=_(),A=g();l(()=>z.movieModal);const D=(e,t)=>m($,{justify:"center"},()=>[m(B,{type:"error",strong:!0,size:"small",secondary:!0,onClick:()=>{j(e.id,(p,o)=>{A.refresh()})}},{default:()=>"删除"})]),E=k([{title:"ID",key:"id",align:"center",width:"100px",ellipsis:!0},{title:"影片名",key:"name",align:"center",minWidth:"200px",ellipsis:!0,render:(e,t)=>r(e.name)},{title:"导演",key:"director",align:"center",width:"100px",ellipsis:!0,render:(e,t)=>r(e.director)},{title:"主演",key:"actor",align:"center",width:"100px",render:(e,t)=>r(e.actor)},{title:"时长",key:"duration",align:"center",width:"80px",ellipsis:!0,render:(e,t)=>r(e.duration)},{title:"影片描述",key:"description",align:"center",minWidth:"200px",ellipsis:!0,render:(e,t)=>r(e.description)},{title:"封面链接",key:"pic",align:"center",minWidth:"200px",ellipsis:!0,render:(e,t)=>r(e.pic)},{title:"影片直链",key:"url",align:"center",minWidth:"200px",ellipsis:!0,render:(e,t)=>r(e.url)},{title:"操作",key:"actions",align:"center",width:"200px",ellipsis:!0,render:(e,t)=>r(D(e))}]),P=S({__name:"movies",setup(e){const t=C(),p=K(),o=g(),w=_(),v=l(()=>o.val),n=l(()=>w.movieModal),i=l(()=>o.pageRef);i.value.update=s=>{i.value.page=s,p.push({name:t.name,params:{id:t.params.id,page:i.value.page}})},b(()=>{const s=t.name,d=Number(t.params.page),c=Number(t.params.id),u=o.movieKeyword;i.value.page=d,o.bind(s,d,c,u)}),M(()=>o.movieKeyword,(s,d)=>{p.push({name:t.name,params:{id:t.params.id,page:1}})});const y=()=>{let s=f({id:-1,name:"",director:"",actor:"",duration:"",description:"",pic:"",url:""});n.value.data=s,n.value.new=!0,n.value.show=!0};return(s,d)=>{const c=h,u=x;return N(),V(u,{title:"影片管理",columns:a(E),data:a(v),page:a(i).page,pageCount:a(i).pageCount,update:a(i).update,add:y,isAdd:!0,keyword:a(o).movieKeyword,updateKeyword:a(o).updatemovieKeyword},{extra:W(()=>[R(c,{title:"影片",data:a(n).data,show:a(n).show,type:a(n).type,onClose:a(n).close,onSave:a(n).save},null,8,["data","show","type","onClose","onSave"])]),_:1},8,["columns","data","page","pageCount","update","keyword","updateKeyword"])}}});export{P as default};
