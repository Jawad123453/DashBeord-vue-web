import{d as M,r as l,o as r,c as i,b as t,w as s,a as e,e as d,F as m,f,t as n}from"./index-0663df4e.js";const D={class:"dashboerd"},F=e("h3",null,"Dashboerd",-1),L=e("strong",null,"Login Successfully",-1),N={class:"d-flex flex-column changethe text-sm-start text-center"},O=e("small",null,"Last 2 weeks",-1),T=e("div",{class:"d-flex flex-column"},[e("strong",{class:"me-4"},"30 Minuts ago"),e("small",null,"You have a new order pieses check this out")],-1),V=e("div",{class:"d-flex flex-column"},[e("strong",{class:"me-4"},"50 Minuts ago"),e("small",null,"Web App")],-1),A=e("div",{class:"d-flex flex-column"},[e("strong",{class:"me-4"},"80 Minuts ago"),e("small",null,"Mobile App")],-1),B={class:"mt-7"},P=e("strong",{class:"text-center"},"Recent Orders",-1),j=e("thead",null,[e("tr",null,[e("th",{class:"text-left"}," Name "),e("th",{class:"text-left"}," Calories "),e("th",{class:"text-left"}," Fats(g) "),e("th",{class:"text-left"}," Carbs(g) "),e("th",{class:"text-left"}," Protein(g) "),e("th",{class:"text-left"}," Iron(%) ")])],-1),S=M({__name:"Dashboerd",setup(E){const p=[{title:"Total Products",color:"red",amounts:3423},{title:"Total Catigory",color:"purple",amounts:23},{title:"Total Orders",color:"indigo",amounts:423},{title:"Pending Orders",color:"light-blue",amounts:3423}],v=[{name:"Frozen Yogurt",calories:159,fats:159,carbs:159,protein:159,iron:159},{name:"Ice cream sandwich",calories:237,fats:159,carbs:159,protein:159,iron:159},{name:"Eclair",calories:262,fats:159,carbs:159,protein:159,iron:159},{name:"Cupcake",calories:305,fats:159,carbs:159,protein:159,iron:159},{name:"Gingerbread",calories:356,fats:159,carbs:159,protein:159,iron:159},{name:"Jelly bean",calories:375,fats:159,carbs:159,protein:159,iron:159},{name:"Lollipop",calories:392,fats:159,carbs:159,protein:159,iron:159},{name:"Honeycomb",calories:408,fats:159,carbs:159,protein:159,iron:159},{name:"Donut",calories:452,fats:159,carbs:159,protein:159,iron:159},{name:"KitKat",calories:518,fats:159,carbs:159,protein:159,iron:159}];return(G,I)=>{const h=l("v-btn"),b=l("v-subheader"),g=l("v-alert"),x=l("v-avatar"),w=l("v-card-text"),_=l("v-card"),a=l("v-col"),u=l("v-row"),y=l("v-card-title"),c=l("v-timeline-item"),k=l("v-timeline"),C=l("v-table");return r(),i("div",D,[t(b,{class:"d-flex justify-space-between align-center mb-5"},{default:s(()=>[F,t(h,{color:"success","rounded-lg":""},{default:s(()=>[d(" Veiw Orders ")]),_:1})]),_:1}),t(u,null,{default:s(()=>[t(a,{cols:"12",lg:"7"},{default:s(()=>[t(g,{dense:"",type:"success",class:"mb-5"},{default:s(()=>[L,d(" Good Morning ")]),_:1}),t(u,null,{default:s(()=>[(r(),i(m,null,f(p,(o,z)=>t(a,{cols:"6",key:z},{default:s(()=>[t(_,{elevation:"3","rounded-lg":""},{default:s(()=>[t(w,{class:"d-flex justify-space-between align-center flex-column flex-sm-row"},{default:s(()=>[e("div",N,[e("strong",null,n(o.title),1),O]),t(x,{color:o.color,size:"60"},{default:s(()=>[e("span",null,n(o.amounts),1)]),_:2},1032,["color"])]),_:2},1024)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1}),t(a,{cols:"12",lg:"5"},{default:s(()=>[t(_,null,{default:s(()=>[t(y,null,{default:s(()=>[d("Activities")]),_:1}),t(k,{side:"end",align:"start"},{default:s(()=>[t(c,{"dot-color":"pink",size:"small"},{default:s(()=>[T]),_:1}),t(c,{"dot-color":"teal-lighten-3",size:"small"},{default:s(()=>[V]),_:1}),t(c,{"dot-color":"pink",size:"small"},{default:s(()=>[A]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e("div",B,[P,t(C,null,{default:s(()=>[j,e("tbody",null,[(r(),i(m,null,f(v,o=>e("tr",{key:o.name},[e("td",null,n(o.name),1),e("td",null,n(o.calories),1),e("td",null,n(o.fats),1),e("td",null,n(o.carbs),1),e("td",null,n(o.protein),1),e("td",null,n(o.iron),1)])),64))])]),_:1})])])}}});export{S as default};