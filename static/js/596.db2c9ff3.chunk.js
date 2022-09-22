"use strict";(self.webpackChunkkapusta=self.webpackChunkkapusta||[]).push([[596],{48734:function(e,n,a){a.d(n,{y:function(){return M}});var t=a(29439),s=a(72791),r=a(59434),o=a(9085),i=a(24805),l=a(16871),c=a(42295),u={modal:"BalanceModal_modal__C0hkc",part:"BalanceModal_part__Mp8tJ",text:"BalanceModal_text__nR0Ka",secondText:"BalanceModal_secondText__a3wM0"},d=a(80184),m=function(){return(0,d.jsxs)("div",{className:u.modalWindow,children:[(0,d.jsxs)("div",{className:u.modal,children:[(0,d.jsx)("p",{className:u.text,children:"Hello! To get started, enter the current balance of your account!"}),(0,d.jsx)("p",{className:u.secondText,children:"You can't spend money until you have it :)"})]}),(0,d.jsx)("div",{className:u.part})]})},_=a(33168),p=a(4187),x=a(87261),h="Balance_balance__41oSS",b="Balance_label__9QrSJ",v="Balance_title__2Bv5K",f="Balance_titleMobile__OsNQZ",j="Balance_money__1igFa",g="Balance_moneyMobile__ovTL5",N="Balance_info__eIFcS",C="Balance_input__5zeug",T="Balance_inputMobile__fSkb3",y="Balance_button__UsoOP",Z="Balance_labelMobile__f4IoX",D="Balance_buttonActive__g5Mhi Balance_button__UsoOP",S="Balance_buttonNone__2BvoG",F=a(67473),k=a(23937),M=function(){var e=(0,r.v9)(F.s),n=(0,r.v9)(p.iP),a=(0,r.v9)(x.Jz),u=(0,r.v9)(x.yS),M=(0,r.I0)(),B=(0,_.$)().t,L=(0,l.TH)(),w=(0,s.useState)(0),H=(0,t.Z)(w,2),I=H[0],J=H[1],P=(0,i.useMediaQuery)({query:"(max-width: 1280px)"}),q=(0,i.useMediaQuery)({query:"(max-width: 767.9px)"}),O=new Audio(k);return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("form",{className:h,onSubmit:function(e){if(e.preventDefault(),O.play(),""!==I)return M((0,c.o)({newBalance:I}));o.Am.error(B("balance.inputInfo"),{autoClose:2e3,theme:"colored"})},children:[(0,d.jsxs)("h3",{className:q&&"/reports"===L.pathname?f:v,children:[B("balance.balanceTitle"),":"]}),(0,d.jsxs)("div",{className:N,children:[(0,d.jsxs)("label",{className:q&&"/reports"===L.pathname?Z:b,children:[(0,d.jsx)("input",{type:"text",className:q&&"/reports"===L.pathname?T:C,value:0!==e?e.toFixed(2).replace(/(\d)(?=(\d{3})+([^\d]|$))/g,"$1 "):0===a.length&0===u.length?I:0,decimalscale:1,maxLength:9,onChange:function(e){var n=e.target.value;J(n)},disabled:!(0===e&&0===a.length&0===u.length)}),(0,d.jsx)("span",{className:q&&"/reports"===L.pathname?g:j,children:B("balance.currency")}),0===I&&0===e&&n&&0===a.length&0===u.length?(0,d.jsx)(m,{}):!(0,d.jsx)(m,{})]}),(0,d.jsx)("button",{className:P&&"/reports"===L.pathname?S:0===e&&0===a.length&0===u.length?D:y,type:"submit",disabled:!(0===e&&0===a.length&0===u.length),children:B("balance.confirm")})]})]})})}},57758:function(e,n,a){a.d(n,{Z:function(){return F}});var t=a(29439),s=a(1413),r=a(59434),o=a(72791),i=a(16962),l=a(59513),c=a.n(l),u=a(33168),d=(a(68639),"FormTransaction_form__Drpod"),m="FormTransaction_timeDiv__VkmNl",_="FormTransaction_calendarIcon__7sCrv",p="FormTransaction_date__exygo",x="FormTransaction_input__Jbj3O",h="FormTransaction_select__cUCSM",b="FormTransaction_calcInput__cByYk",v="FormTransaction_buttonList__r8Tzc",f="FormTransaction_buttonInput__Fqdxq",j="FormTransaction_buttonClear__hDUfF",g="FormTransaction_label__LxjKS",N=a(9085),C=a(24805),T=a(16871),y=a(53401),Z=a(80184),D={control:function(e){return(0,s.Z)((0,s.Z)({},e),{},{border:" 2px solid var(--border-light)",width:"169px",borderRadius:"0px",color:"#C7CCDC",backgroundColor:"var(--input-bg-color)"})},menuList:function(e){return(0,s.Z)((0,s.Z)({},e),{},{backgroundColor:"var(--input-bg-color)",border:" 2px solid var(--border-light)",borderRadius:"4px"})},placeholder:function(e){return(0,s.Z)((0,s.Z)({},e),{},{color:"#C7CCDC"})},singleValue:function(e){return(0,s.Z)((0,s.Z)({},e),{},{color:"#C7CCDC"})}},S={control:function(e){return(0,s.Z)((0,s.Z)({},e),{},{border:" none",width:"280px",borderRadius:"0px",color:"#C7CCDC",backgroundColor:"transparent"})},menuList:function(e){return(0,s.Z)((0,s.Z)({},e),{},{backgroundColor:"var(--input-bg-color)",border:" 2px solid var(--border-light)",borderRadius:"4px"})},placeholder:function(e){return(0,s.Z)((0,s.Z)({},e),{},{color:"#C7CCDC"})},singleValue:function(e){return(0,s.Z)((0,s.Z)({},e),{},{color:"#C7CCDC"})}},F=function(e){var n=e.operation,a=e.options,s=e.date,l=e.setDate,F=(0,o.useState)(""),k=(0,t.Z)(F,2),M=k[0],B=k[1],L=(0,o.useState)(null),w=(0,t.Z)(L,2),H=w[0],I=w[1],J=(0,o.useState)(""),P=(0,t.Z)(J,2),q=P[0],O=P[1],R=(0,r.I0)(),U=(0,T.s0)(),z=(0,u.$)().t,$=(0,C.useMediaQuery)({query:"(max-width: 767.9px)"});return(0,Z.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),null===H)return N.Am.error(z("transactions.categoryInfo"),{autoClose:2e3,theme:"colored"});var a={description:M,amount:Number(q),date:s.toISOString().slice(0,10),category:H.value};R(n(a)),$&&U("transactions")},className:d,children:[(0,Z.jsxs)("div",{className:m,children:[(0,Z.jsx)("svg",{className:_,width:"90",height:"31",children:(0,Z.jsx)("use",{href:"".concat(y.Z,"#icon-calendar")})}),(0,Z.jsx)(c(),{dateFormat:"dd.MM.yyyy",className:p,selected:s,onChange:function(e){return l(e)}})]}),(0,Z.jsx)("label",{className:g,children:(0,Z.jsx)("input",{className:x,type:"text",name:"description",placeholder:z("transactions.prodDescr"),required:!0,value:M,onChange:function(e){var n=e.target.value;B(n)}})}),(0,Z.jsx)(i.ZP,{className:h,styles:$?S:D,placeholder:z("transactions.prodCateg"),value:H,onChange:I,options:a}),(0,Z.jsx)("label",{children:(0,Z.jsx)("input",{className:b,type:"number",name:"number",min:"0",pattern:"^[1-9]\\d*$",required:!0,placeholder:"0,00",value:q,onChange:function(e){var n=e.target.value;O(n)}})}),(0,Z.jsxs)("div",{className:v,children:[" ",(0,Z.jsx)("button",{type:"submit",className:f,children:z("transactions.input")})," ",(0,Z.jsx)("button",{type:"button",className:j,onClick:function(){l(new Date),B(""),I(null),O("")},children:z("transactions.clear")})]})]})}},78596:function(e,n,a){a.r(n),a.d(n,{default:function(){return R}});var t=a(72791),s=a(16871),r=a(43504),o=a(33168),i=a(48734),l=a(53401),c="DataHeader_container__eDcTH",u="DataHeader_reportsLinkWrapper__JF-W9",d="DataHeader_reports__jQzVY",m="DataHeader_iconReports__62TRM",_=a(80184),p=function(){var e=(0,o.$)().t;return(0,_.jsxs)("div",{className:c,children:[(0,_.jsx)(i.y,{}),(0,_.jsxs)(r.rU,{className:u,to:"/reports",children:[(0,_.jsx)("span",{className:d,children:e("general.reports")}),(0,_.jsx)("svg",{className:m,width:"24",height:"24",children:(0,_.jsx)("use",{href:"".concat(l.Z,"#icon-reports")})})]})]})},x="HomeNavigation_container__caUCV",h="HomeNavigation_link__qGIjl",b="HomeNavigation_activeLink__2oES1",v=a(59434),f=a(87261),j=a(67473);var g=function(){var e=(0,o.$)().t,n=(0,v.v9)(j.s),a=(0,v.v9)(f.Jz),t=(0,v.v9)(f.yS),i=(0,s.TH)();return(0,_.jsxs)("div",{className:x,children:[(0,_.jsx)(r.rU,{to:"expenses",disabled:!(0===n&&0===a.length&0===t.length),className:"/transactions/expenses"===i.pathname?b:h,children:e("nav.expenses")}),(0,_.jsx)(r.rU,{to:"income",disabled:!(0===n&&0===a.length&0===t.length),className:"/transactions/income"===i.pathname?b:h,children:e("nav.income")})]})},N=a(24805),C=a(93433),T=a(1413),y=a(4187),Z=a(19835),D={expensesText:"mobileTransactionList_expensesText__CWicM",listmob:"mobileTransactionList_listmob__rgaMx",incomesText:"mobileTransactionList_incomesText__DRlwd",itemLi:"mobileTransactionList_itemLi__On2Tg",title:"mobileTransactionList_title__iJPok",infoText:"mobileTransactionList_infoText__+8Axm",date:"mobileTransactionList_date__sdG7h",smallinfoText:"mobileTransactionList_smallinfoText__gTcld",buttonDeletemob:"mobileTransactionList_buttonDeletemob__n1e-7"},S=function(){var e=(0,v.v9)(f.Jz),n=(0,v.v9)(f.yS),a=e.map((function(e){return(0,T.Z)((0,T.Z)({},e),{},{amount:Number("-".concat(e.amount))})})),s=[].concat((0,C.Z)(n),(0,C.Z)(a)),r=(0,v.I0)(),o=(0,v.v9)(y.iP);return(0,t.useEffect)((function(){o&&(r((0,Z.FJ)()),r((0,Z.fj)()))}),[s.length,o]),(0,_.jsx)("ul",{className:D.listmob,children:s.map((function(e){return(0,_.jsxs)("li",{className:D.itemLi,children:[(0,_.jsxs)("div",{className:D.infoText,children:[(0,_.jsx)("p",{className:D.title,children:e.description}),(0,_.jsxs)("div",{className:D.smallinfoText,children:[(0,_.jsx)("p",{className:D.date,children:e.date.split("-").reverse().join(".")}),(0,_.jsx)("p",{className:D.category,children:e.category})]})]}),(0,_.jsx)("p",{className:e.amount<0?D.expensesText:D.incomesText,children:e.amount}),(0,_.jsx)("button",{className:D.buttonDeletemob,onClick:function(){return r((0,Z.qL)(e._id))}})]},e._id)}))})},F=a(29439),k=a(59513),M=a.n(k),B="datePickerComp_timeDiv__XSt3C",L="datePickerComp_calendarIcon__9XRF-",w="datePickerComp_date__Tzw+3",H=function(){var e=(0,t.useState)(new Date),n=(0,F.Z)(e,2),a=n[0],s=n[1];return(0,_.jsxs)("div",{className:B,children:[(0,_.jsx)("svg",{className:L,width:"90",height:"31",children:(0,_.jsx)("use",{href:"".concat(l.Z,"#icon-calendar")})}),(0,_.jsx)(M(),{dateFormat:"dd.MM.yyyy",className:w,selected:a,onChange:function(e){return s(e)}})]})},I=a(57758),J=JSON.parse('[{"value":"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442","label":"Transport"},{"value":"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b","label":"Products"},{"value":"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435","label":"Health"},{"value":"\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u044c","label":"Alcohol"},{"value":"\u0420\u0430\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f","label":"Entertainment"},{"value":"\u0412\u0441\u0451 \u0434\u043b\u044f \u0434\u043e\u043c\u0430","label":"Housing"},{"value":"\u0422\u0435\u0445\u043d\u0438\u043a\u0430","label":"Technique"},{"value":"\u041a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0430 \u0438 \u0441\u0432\u044f\u0437\u044c","label":"Communal, communication"},{"value":"\u0421\u043f\u043e\u0440\u0442 \u0438 \u0445\u043e\u0431\u0431\u0438","label":"Sports, hobbies"},{"value":"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435","label":"Education"},{"value":"\u041f\u0440\u043e\u0447\u0435\u0435","label":"Other"}]'),P=JSON.parse('[{"value":"\u0417/\u041f","label":"Salary"},{"value":"\u0414\u043e\u043f. \u0434\u043e\u0445\u043e\u0434","label":"Add. income"}]'),q="MobileFormTransaction_btnPrevPagemob__Z-xXB",O=function(){var e=(0,t.useState)(new Date),n=(0,F.Z)(e,2),a=n[0],r=n[1],o=(0,s.s0)(),i=(0,s.TH)();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("button",{className:q,onClick:function(e){return o("transaction")}}),"/transactions/expenses"===i.pathname&&(0,_.jsx)(I.Z,{operation:Z.mU,options:J,date:a,setDate:r}),"/transactions/income"===i.pathname&&(0,_.jsx)(I.Z,{operation:Z.$K,options:P,date:a,setDate:r})]})},R=function(){var e=(0,s.s0)(),n=(0,N.useMediaQuery)({query:"(max-width: 767.9px)"}),a=(0,s.TH)();return(0,t.useEffect)((function(){n||e("expenses")}),[n]),console.log(a),(0,_.jsx)(_.Fragment,{children:n?"/transactions/expenses"===a.pathname||"/transactions/income"===a.pathname?(0,_.jsx)(O,{}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(p,{}),(0,_.jsx)(g,{}),(0,_.jsx)(H,{}),(0,_.jsx)(S,{})]}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(p,{}),(0,_.jsx)(g,{}),(0,_.jsx)("div",{className:"container_transactions",children:(0,_.jsx)(t.Suspense,{children:(0,_.jsx)(s.j3,{})})})]})})}},67473:function(e,n,a){a.d(n,{s:function(){return t}});var t=function(e){return e.balance.balance}},87261:function(e,n,a){a.d(n,{Jz:function(){return s},hg:function(){return t},yS:function(){return r}});var t=function(e){return e.transactions.loading},s=function(e){return e.transactions.expenses},r=function(e){return e.transactions.incomes}},23937:function(e,n,a){e.exports=a.p+"static/media/coins-drop.e4b7233ee3a35134f15a.mp3"}}]);
//# sourceMappingURL=596.db2c9ff3.chunk.js.map