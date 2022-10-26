import{_ as M,d as P,u as F,b as R,r as T,e as V,t as k,f as g,c as v,g as U,h as I,i as a,w as n,j as L,E as q,k as B,o as $,l as u,m as w}from"./index.7bd8a01f.js";import{g as W}from"./utils.e17d6760.js";const j=P({name:"App",setup(){const t=F(),{proxy:l}=L();R(()=>{c()});const c=async()=>{const{pageSize:o,pageIndex:s,selectName:r,selectStatus:m,selectType:f,selectDate:e,userInfo:y}=b;let D={pageSize:o||10,pageIndex:s||1,name:r||"",status:m||"",userType:f||"",_adminId:y._id};e&&e.length==2&&(D.beginDate=e[0],D.endDate=e[1]),await l.$api.getUsersList(D).then(z=>{const{list:A,total:E}=z;i.tableData=A,i.totalNum=E})},S=async o=>{if(i.multipleSelection.length==0){q({message:"\u8BF7\u9009\u62E9\u6570\u636E\u540E\u8FDB\u884C\u64CD\u4F5C.",type:"warning"});return}let s=null,r=[],m=[];i.multipleSelection.map(e=>{r.push(e._id),m.push(e.name)});const{userInfo:f}=b;o===1&&(s={ids:r,status:1,_adminId:f._id},await l.$api.blockUsers(s).then(e=>{c()})),o===2&&(s={ids:r,status:2,_adminId:f._id},await l.$api.blockUsers(s).then(e=>{c()})),o===3&&(s={ids:r,_adminId:f._id},B.confirm(`\u786E\u8BA4\u5220\u9664\u7528\u6237 ${JSON.stringify(m)} \u5417`,"\u5220\u9664",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",callback:e=>{e==="confirm"&&l.$api.deleteUsers(s).then(y=>{c()})}}))},N=T(l.$storage.getItem("userInfo")),b=V({pageSize:20,pageIndex:1,selectDateModel:[],selectDate:[],selectName:"",selectType:"0",selectStatus:"0",userInfo:l.$store.state.userInfo||{},selectDateChange:o=>{if(o&&o.length){const[s,r]=o,m=s.getTime(),f=r.getTime();b.selectDate=[m,f]}},currentChange:o=>{b.pageIndex=o,c()}}),h=T(),i=V({multipleSelection:[],tableData:[],totalNum:0,handleSelectionChange:o=>{i.multipleSelection=o},handleView:(o,s)=>{t.push({path:"/users/detail",query:{userId:s._id,page:"view"}})},handleEdit:(o,s)=>{t.push({path:"/users/detail",query:{userId:s._id,page:"edit"}})},handleDelete:(o,s)=>{B.confirm(`\u786E\u8BA4\u5220\u9664\u7528\u6237 (${s.name}) \u5417`,"\u5220\u9664",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",callback:r=>{const m={ids:[s._id],_adminId:b.userInfo._id};r==="confirm"&&l.$api.deleteUsers(m).then(f=>{c()})}})}}),d=V({addUserDialog:!1,addUserName:"",addUserPw:"pw123456",addUserType:"2",openAddUserDialog:()=>{d.addUserDialog=!0},addUserInfoFn:async()=>{const{addUserName:o,addUserPw:s,addUserType:r}=d,m={name:o,password:s,userType:r};await l.$api.register(m).then(f=>{d.addUserDialog=!1,d.addUserType="2",d.addUserName="",d.addUserPw="pw123456",c()})}}),_=k(i),C=k(b),p=k(d);return{..._,...C,...p,multipleTableRef:h,getUsersListFn:c,settineUser:S,userInfo:N,getCurrentDate:W}}}),J={class:"pageBox"},O={class:"pageSelectBox"},G={class:"pageContentBox"},H={key:0,class:"tableSelectBtns"},K={key:1,class:"pagination"},Q={class:"dialog-footer"};function X(t,l,c,S,N,b){const h=g("el-input"),i=g("el-form-item"),d=g("el-option"),_=g("el-select"),C=g("el-date-picker"),p=g("el-button"),o=g("el-form"),s=g("el-table-column"),r=g("el-table"),m=g("el-pagination"),f=g("el-dialog");return $(),v("view",J,[U(" \u9009\u62E9\u6761\u4EF6\u533A\u57DF "),I("div",O,[a(o,{inline:!0},{default:n(()=>[a(i,{label:"\u7528\u6237\u540D"},{default:n(()=>[a(h,{modelValue:t.selectName,"onUpdate:modelValue":l[0]||(l[0]=e=>t.selectName=e),placeholder:"\u7528\u6237\u540D"},null,8,["modelValue"])]),_:1}),a(i,{label:"\u72B6\u6001"},{default:n(()=>[a(_,{modelValue:t.selectStatus,"onUpdate:modelValue":l[1]||(l[1]=e=>t.selectStatus=e),placeholder:"\u72B6\u6001"},{default:n(()=>[a(d,{label:"\u5168\u90E8",value:"0"}),a(d,{label:"\u542F\u7528",value:"1"}),a(d,{label:"\u7981\u7528",value:"2"})]),_:1},8,["modelValue"])]),_:1}),a(i,{label:"\u7C7B\u578B"},{default:n(()=>[a(_,{modelValue:t.selectType,"onUpdate:modelValue":l[2]||(l[2]=e=>t.selectType=e),placeholder:"\u7C7B\u578B"},{default:n(()=>[a(d,{label:"\u5168\u90E8",value:"0"}),a(d,{label:"\u6B63\u5E38\u7528\u6237",value:"1"}),a(d,{label:"\u865A\u62DF\u7528\u6237",value:"2"})]),_:1},8,["modelValue"])]),_:1}),a(i,{label:"\u65E5\u671F"},{default:n(()=>[a(C,{modelValue:t.selectDateModel,"onUpdate:modelValue":l[3]||(l[3]=e=>t.selectDateModel=e),type:"daterange","range-separator":"\u81F3","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4",onChange:t.selectDateChange},null,8,["modelValue","onChange"])]),_:1}),a(i,null,{default:n(()=>[a(p,{type:"primary",onClick:t.getUsersListFn},{default:n(()=>[u("\u67E5 \u8BE2")]),_:1},8,["onClick"])]),_:1})]),_:1})]),U(" \u5185\u5BB9\u533A\u57DF "),I("div",G,[t.tableData&&t.tableData.length>0?($(),v("div",H,[a(p,{type:"primary",onClick:t.openAddUserDialog},{default:n(()=>[u("\u6DFB\u52A0\u7528\u6237")]),_:1},8,["onClick"]),a(p,{type:"success",onClick:l[4]||(l[4]=e=>t.settineUser(1))},{default:n(()=>[u("\u542F\u7528")]),_:1}),a(p,{type:"warning",onClick:l[5]||(l[5]=e=>t.settineUser(2))},{default:n(()=>[u("\u7981\u7528")]),_:1}),a(p,{type:"danger",onClick:l[6]||(l[6]=e=>t.settineUser(3))},{default:n(()=>[u("\u5220\u9664")]),_:1})])):U("v-if",!0),U(" \u8868\u683C\u533A\u57DF "),a(r,{ref:"multipleTableRef",data:t.tableData,style:{width:"100%"},onSelectionChange:t.handleSelectionChange,stripe:""},{default:n(()=>[a(s,{align:"center",type:"selection",width:"55"}),a(s,{align:"center",label:"\u6CE8\u518C\u65F6\u95F4",width:"160"},{default:n(e=>[u(w(t.getCurrentDate(e.row.createdAt)),1)]),_:1}),a(s,{align:"center",property:"_id",label:"\u7528\u6237ID",width:"220"}),a(s,{align:"center",property:"name",label:"\u7528\u6237\u540D",width:"160"}),a(s,{align:"center",label:"\u6027\u522B",width:"80"},{default:n(e=>[u(w(e.row.gender==1?"\u672A\u5B9A\u4E49":e.row.gender==2?"\u7537":"\u5973"),1)]),_:1}),a(s,{align:"center",property:"phone",label:"\u7535\u8BDD",width:"160"}),a(s,{align:"center",label:"\u7C7B\u578B",width:"120"},{default:n(e=>[u(w(e.row.userType==1?"\u6B63\u5E38\u7528\u6237":"\u865A\u62DF\u7528\u6237"),1)]),_:1}),a(s,{align:"center",label:"\u72B6\u6001",width:"120"},{default:n(e=>[u(w(e.row.status==1?"\u542F\u7528":"\u7981\u7528"),1)]),_:1}),a(s,{align:"center",label:"\u64CD\u4F5C"},{default:n(e=>[a(p,{size:"small",onClick:y=>t.handleView(e.$index,e.row)},{default:n(()=>[u("\u67E5\u770B")]),_:2},1032,["onClick"]),a(p,{size:"small",onClick:y=>t.handleEdit(e.$index,e.row)},{default:n(()=>[u("\u7F16\u8F91")]),_:2},1032,["onClick"]),a(p,{size:"small",type:"danger",onClick:y=>t.handleDelete(e.$index,e.row)},{default:n(()=>[u("\u5220\u9664")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data","onSelectionChange"]),U(" \u5206\u9875 "),t.totalNum&&t.totalNum>0?($(),v("div",K,[a(m,{layout:"prev, pager, next","page-size":t.pageSize,total:t.totalNum,onCurrentChange:t.currentChange},null,8,["page-size","total","onCurrentChange"])])):U("v-if",!0)]),U(" \u6DFB\u52A0\u7528\u6237\u5F39\u7A97 "),a(f,{modelValue:t.addUserDialog,"onUpdate:modelValue":l[11]||(l[11]=e=>t.addUserDialog=e),title:"\u6DFB\u52A0\u7528\u6237",width:"30%"},{footer:n(()=>[I("span",Q,[a(p,{onClick:l[10]||(l[10]=e=>t.addUserDialog=!1)},{default:n(()=>[u("\u5173\u95ED")]),_:1}),a(p,{type:"primary",onClick:t.addUserInfoFn},{default:n(()=>[u("\u786E\u5B9A")]),_:1},8,["onClick"])])]),default:n(()=>[a(o,{"label-width":"100px","label-position":"right"},{default:n(()=>[a(i,{label:"\u7528\u6237\u540D"},{default:n(()=>[a(h,{modelValue:t.addUserName,"onUpdate:modelValue":l[7]||(l[7]=e=>t.addUserName=e),placeholder:"\u7528\u6237\u540D"},null,8,["modelValue"])]),_:1}),a(i,{label:"\u7528\u6237\u5BC6\u7801"},{default:n(()=>[a(h,{modelValue:t.addUserPw,"onUpdate:modelValue":l[8]||(l[8]=e=>t.addUserPw=e),class:"inputW300",placeholder:"\u9ED8\u8BA4: pw123456"},null,8,["modelValue"])]),_:1}),a(i,{label:"\u7528\u6237\u7C7B\u578B"},{default:n(()=>[a(_,{modelValue:t.addUserType,"onUpdate:modelValue":l[9]||(l[9]=e=>t.addUserType=e),placeholder:"\u7528\u6237\u7C7B\u578B",class:"inputW300"},{default:n(()=>[a(d,{label:"\u6B63\u5E38",value:"1"}),a(d,{label:"\u865A\u62DF",value:"2"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])])}var x=M(j,[["render",X],["__file","/Users/zhangfuchuan/Documents/byteStory/byteStoryAdmin/src/views/users/index.vue"]]);export{x as default};
