(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{198:function(e,t,a){"use strict";a.r(t);var n=a(8),s=a(9),r=a(12),c=a(10),l=a(11),i=a(0),o=a.n(i),h=a(38),u=a.n(h),m=a(16),d=a(14),g=a(72),p=a(3),f=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).renderRedirect=function(){if(a.state.loggedin)return o.a.createElement(d.a,{to:"/"})},a.renderLogout=function(){if(a.state.loggedout)return o.a.createElement(d.a,{to:"/"})},a.LoginAcc=function(e,t){fetch("http://13.237.111.17/login",{method:"POST",body:"email="+e+"&password="+t,headers:{"Content-type":"application/x-www-form-urlencoded"},redirect:"follow"}).then(function(e){if(e.ok)return e.json();throw new Error("Network response was not ok.")}).then(function(e){sessionStorage.setItem("token",e.token)}).then(a.setState({loggedin:!0})).catch(function(e){console.log("There has been a problem with your fetch operation: ",e.message)})},a.state={emailAcc:"",passCode:"",errors:[],loggedin:!1,loggedout:!1},a.changeEmail=a.changeEmail.bind(Object(p.a)(Object(p.a)(a))),a.changePass=a.changePass.bind(Object(p.a)(Object(p.a)(a))),a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"changeEmail",value:function(e){this.setState({emailAcc:e.target.value}),this.clearValidErr("emailAcc")}},{key:"changePass",value:function(e){this.setState({passCode:e.target.value}),this.clearValidErr("passCode")}},{key:"submitLogin",value:function(e){""===this.state.emailAcc&&this.showValidErr("emailAcc","email cannot be empty!"),""===this.state.passCode&&this.showValidErr("passCode","password cannot be empty!"),this.LoginAcc(this.state.emailAcc,this.state.passCode)}},{key:"showValidErr",value:function(e,t){this.setState(function(a){return{errors:[].concat(Object(g.a)(a.errors),[{elem:e,msg:t}])}})}},{key:"clearValidErr",value:function(e){this.setState(function(t){var a=[],n=!0,s=!1,r=void 0;try{for(var c,l=t.errors[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){var i=c.value;e!==i.elem&&a.push(i)}}catch(i){s=!0,r=i}finally{try{n||null==l.return||l.return()}finally{if(s)throw r}}return{errors:a}})}},{key:"render",value:function(){var e=this,t=null,a=null,n=!0,s=!1,r=void 0;try{for(var c,l=this.state.errors[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){var i=c.value;"emailAcc"===i.elem&&(t=i.msg),"passCode"===i.elem&&(a=i.msg)}}catch(i){s=!0,r=i}finally{try{n||null==l.return||l.return()}finally{if(s)throw r}}return null!==sessionStorage.getItem("token")?o.a.createElement("div",{className:"signed-in"},"You are signed in!",o.a.createElement("button",{type:"button",className:"logout-btn",onClick:function(){sessionStorage.removeItem("token"),e.setState({loggedout:!0})}},"Sign Out"),this.renderLogout()):o.a.createElement("div",{className:"inner-container"},o.a.createElement("div",{className:"header"},"SIGN IN NOW"),o.a.createElement("div",{className:"box"},o.a.createElement("div",{className:"input-group"},o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{type:"email",name:"email",id:"email",className:"login-input",placeholder:"Your email address",value:this.state.emailAcc,onChange:this.changeEmail}),o.a.createElement("small",{className:"danger-error"},t||"")),o.a.createElement("div",{className:"input-group"},o.a.createElement("label",{htmlFor:"pwd"},"Password"),o.a.createElement("input",{type:"password",name:"pwd",id:"pwd",className:"login-input",placeholder:"Password",value:this.state.passCode,onChange:this.changePass}),o.a.createElement("small",{className:"danger-error"},a||"")),o.a.createElement("button",{type:"button",className:"login-btn",onClick:this.submitLogin.bind(this)},"Sign in"),this.renderRedirect()))}}]),t}(o.a.Component),v=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).RegAcc=function(e,t){fetch("http://13.237.111.17/register",{method:"POST",body:"email="+e+"&password="+t,headers:{"Content-type":"application/x-www-form-urlencoded"}}).then(function(e){if(e.ok)return e.json();throw new Error("Network response was not ok")}).then(function(e){this.RegAcc.disabled=!0}).catch(function(e){console.log("There has been a problem with your fetch operation: ",e.message)})},a.state={emailAcc:"",passCode:""},a.changeEmail=a.changeEmail.bind(Object(p.a)(Object(p.a)(a))),a.changePass=a.changePass.bind(Object(p.a)(Object(p.a)(a))),a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"changeEmail",value:function(e){this.setState({emailAcc:e.target.value})}},{key:"changePass",value:function(e){this.setState({passCode:e.target.value})}},{key:"submitReg",value:function(e){this.RegAcc(this.state.emailAcc,this.state.passCode)}},{key:"render",value:function(){return o.a.createElement("div",{className:"inner-container"},o.a.createElement("div",{className:"header"},"REGISTER ACCOUNT"),o.a.createElement("div",{className:"box"},o.a.createElement("div",{className:"input-group"},o.a.createElement("label",{htmlFor:"email"},"Email"),o.a.createElement("input",{type:"text",name:"email",className:"reg-input",placeholder:"Your email address",value:this.state.emailAcc,onChange:this.changeEmail})),o.a.createElement("div",{className:"input-group"},o.a.createElement("label",{htmlFor:"pwd"},"Password"),o.a.createElement("input",{type:"password",name:"pwd",className:"reg-input",placeholder:"Password",value:this.state.passCode,onChange:this.changePass})),o.a.createElement("button",{type:"button",className:"reg-btn",onClick:this.submitReg.bind(this)},"Sign up")))}}]),t}(o.a.Component),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={isLoginOpen:!0,isRegisterOpen:!1},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"showReg",value:function(){this.setState({isRegisterOpen:!0,isLoginOpen:!1})}},{key:"showLogin",value:function(){this.setState({isLoginOpen:!0,isRegisterOpen:!1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"root-container"},o.a.createElement("div",{className:"box-controller"},o.a.createElement("div",{className:"controller"+(this.state.isLoginOpen?"-selected":""),onClick:this.showLogin.bind(this)},"Log In"),o.a.createElement("div",{className:"controller"+(this.state.isRegisterOpen?"-selected":""),onClick:this.showReg.bind(this)},"Sign up")),o.a.createElement("div",{className:"box-container"},this.state.isLoginOpen&&o.a.createElement(f,null),this.state.isRegisterOpen&&o.a.createElement(v,null)),o.a.createElement("div",{className:"ocean"},o.a.createElement("div",{className:"wave"}),o.a.createElement("div",{className:"wave"})))}}]),t}(o.a.Component),E=a(200),y=a(27),O=a(20);a(44);function N(){var e=function(){var e=Object(i.useState)(!0),t=Object(y.a)(e,2),a=t[0],n=t[1],s=Object(i.useState)([]),r=Object(y.a)(s,2),c=r[0],l=r[1],o=Object(i.useState)(null),h=Object(y.a)(o,2),u=h[0],m=h[1];return Object(i.useEffect)(function(){fetch("http://13.237.111.17/offences").then(function(e){return e.json()}).then(function(e){return e.offences}).then(function(e){l(e),n(!1)}).catch(function(e){m(e),n(!1)})},[]),{searching:a,offences:c,Serror:u}}(),t=e.searching,a=e.offences,n=e.Serror;if(t)return o.a.createElement("div",{className:"loading"});if(n)return o.a.createElement("p",null,"Something's wrong: ",n.message);var s=[{Header:"Offences List",accessor:"",Cell:function(e){return o.a.createElement("div",{style:{textAlign:"center"}},e.value)}}];return o.a.createElement("div",{className:"offence-table"},o.a.createElement(O.a,{data:a,columns:s,filterable:!0,defaultFilterMethod:function(e,t){return S(e,t)},defaultPageSize:10,pageSizeOptions:[10],className:"-striped"}),o.a.createElement("div",{className:"ocean"},o.a.createElement("div",{className:"wave"}),o.a.createElement("div",{className:"wave"})))}function S(e,t){var a=e.pivotId||e.id;return void 0===t[a]||String(t[a].toLowerCase()).startsWith(e.value.toLowerCase())}var w=a(40),j=a(70),C=a.n(j),k=function(e){var t=e.text;return o.a.createElement("div",null,t)},A=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).fetchdata=function(){var e=sessionStorage.getItem("token"),t={method:"GET"},n={Authorization:"Bearer ".concat(e)};t.headers=n;var s="offence="+a.state.offsearch,r="area="+a.state.areasearch,c="age="+a.state.agesearch,l="gender="+a.state.gendersearch,i="year="+a.state.yearsearch,o="month="+a.state.monthsearch;fetch(encodeURI("http://13.237.111.17/search?"+s+"&"+r+"&"+c+"&"+l+"&"+i+"&"+o),t).then(function(e){return e.json()}).then(function(e){for(var t=e.result.map(function(e){return{LGA:e.LGA,total:e.total}}),n=e.result.map(function(e){return{lat:e.lat,lng:e.lng,weight:e.total}}),s=[],r=0;r<t.length;r++)0!==t[r].total&&s.push(t[r]);var c=[];for(r=0;r<n.length;r++)0!==n[r].weight&&c.push(n[r]);a.setState({results:s}),a.setState({GPS:c})}).then(a.setState({updated:!1})).catch(function(e){console.log("There has been a problem with your fetch operation: ",e.message)})},a.state={offsearch:"",areasearch:"",agesearch:"",gendersearch:"",yearsearch:"",monthsearch:"",results:[],chartData:{},options:{},GPS:[],heatMapdata:{},updated:!1},a.changeOff=a.changeOff.bind(Object(p.a)(Object(p.a)(a))),a.changeArea=a.changeArea.bind(Object(p.a)(Object(p.a)(a))),a.optionAge=a.optionAge.bind(Object(p.a)(Object(p.a)(a))),a.optionGender=a.optionGender.bind(Object(p.a)(Object(p.a)(a))),a.changeYear=a.changeYear.bind(Object(p.a)(Object(p.a)(a))),a.changeMonth=a.changeMonth.bind(Object(p.a)(Object(p.a)(a))),a.Buttons=a.Buttons.bind(Object(p.a)(Object(p.a)(a))),a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"changeOff",value:function(e){this.setState({offsearch:e.target.value})}},{key:"changeArea",value:function(e){this.setState({areasearch:e.target.value})}},{key:"optionAge",value:function(e){this.setState({agesearch:e.target.value})}},{key:"optionGender",value:function(e){this.setState({gendersearch:e.target.value})}},{key:"changeYear",value:function(e){this.setState({yearsearch:e.target.value})}},{key:"changeMonth",value:function(e){this.setState({monthsearch:e.target.value})}},{key:"getChartData",value:function(){var e=this.state.results.map(function(e){return e.LGA}),t=this.state.results.map(function(e){return e.total}),a=[],n=[];for(var s in e){var r=Math.floor(200*Math.random()),c=Math.floor(200*Math.random()),l=Math.floor(200*Math.random()),i="rgb("+r+", "+c+", "+l+")",o="rgb("+(r+20)+", "+(c+20)+", "+(l+20)+")";a[s]=i,n[s]=o}this.setState({chartData:{labels:e,datasets:[{label:"Crime Stats in Pie Chart",data:t,backgroundColor:a,highlight:n}]}})}},{key:"updateHeatmap",value:function(){this.setState({updated:!0,heatMapdata:{positions:this.state.GPS,options:{radius:50,opacity:.8}}})}},{key:"Buttons",value:function(){return o.a.createElement("div",{className:"all-filters"},o.a.createElement("div",{className:"filter-btns"},o.a.createElement("input",{className:"filter-input-offence",name:"offence",id:"offence",type:"offence",placeholder:"Search Offence (Required)",value:this.state.offsearch,onChange:this.changeOff}),o.a.createElement("input",{className:"filter-input",name:"lga",id:"lga",type:"lga",placeholder:"Search Location",value:this.state.areasearch,onChange:this.changeArea}),o.a.createElement("select",{className:"age-option",id:"age",value:this.state.agesearch,onChange:this.optionAge},o.a.createElement("option",{value:""},"Age"),o.a.createElement("option",{value:"Adult"},"Adult"),o.a.createElement("option",{value:"Juvenile"},"Juvenile")),o.a.createElement("select",{className:"sex-option",id:"sex",value:this.state.gendersearch,onChange:this.optionGender},o.a.createElement("option",{value:""},"Gender"),o.a.createElement("option",{value:"Male"},"Male"),o.a.createElement("option",{value:"Female"},"Female"),o.a.createElement("option",{value:"Not Stated"},"Not Stated"))),o.a.createElement("div",{className:"yearmonth-filter"},o.a.createElement("input",{className:"filter-input-yearmonth",name:"year",id:"year",type:"year",placeholder:"2003,2005 (Year: 2001-2019)",value:this.state.yearsearch,onChange:this.changeYear}),o.a.createElement("input",{className:"filter-input-yearmonth",name:"month",id:"month",type:"month",placeholder:"1,3,5,4 (Month: 1-12)",value:this.state.monthsearch,onChange:this.changeMonth})),o.a.createElement("div",{className:"filter-click"},o.a.createElement("button",{className:"search-btn",id:"search-button",type:"button",onClick:this.fetchdata},"Search"),o.a.createElement("button",{className:"search-btn",id:"show-graph",type:"button",onClick:this.getChartData.bind(this)},"Update Graph Result"),o.a.createElement("button",{className:"search-btn",id:"update-map",type:"button",onClick:this.updateHeatmap.bind(this)},"Update Map Result")))}},{key:"render",value:function(){return null!==sessionStorage.getItem("token")?this.state.updated?o.a.createElement("div",{className:"search-page"},this.Buttons(),o.a.createElement("div",{className:"search-table"},o.a.createElement(O.a,{data:this.state.results,columns:[{Header:"LGA",accessor:"LGA",width:300,Cell:function(e){return o.a.createElement("div",{style:{textAlign:"center"}},e.value)}},{Header:"Total Number",accessor:"total",width:150,Cell:function(e){return o.a.createElement("div",{style:{textAlign:"center"}},e.value)}}],filterable:!0,defaultFilterMethod:function(e,t){return S(e,t)},defaultPageSize:10,pageSizeOptions:[5,10,20,40],className:"-short"})),o.a.createElement("div",{className:"clear-float"},o.a.createElement("div",{className:"chart-display"},o.a.createElement(w.a,{data:this.state.chartData,options:{title:{display:!0,text:"Crime Stats In Queensland",fontSize:30},legend:{display:!1}}}))),o.a.createElement("div",{className:"heat-map",style:{height:"50vh",width:"100%"}},o.a.createElement(C.a,{bootstrapURLKeys:{key:"AIzaSyDzZe3mc2opzmbZavOC5j335M216rWgqEY"},center:[-22.9176,146.7028],zoom:5.2,heatmapLibrary:!0,heatmap:this.state.heatMapdata},o.a.createElement(k,{lat:-27.4698,lng:153.0251})))):o.a.createElement("div",{className:"search-page"},this.Buttons(),o.a.createElement("div",{className:"search-table"},o.a.createElement(O.a,{data:this.state.results,columns:[{Header:"LGA",accessor:"LGA",width:300,Cell:function(e){return o.a.createElement("div",{style:{textAlign:"center"}},e.value)}},{Header:"Total Number",accessor:"total",width:150,Cell:function(e){return o.a.createElement("div",{style:{textAlign:"center"}},e.value)}}],filterable:!0,defaultFilterMethod:function(e,t){return S(e,t)},defaultPageSize:10,pageSizeOptions:[10],className:"-short"})),o.a.createElement("div",{className:"clear-float"},o.a.createElement("div",{className:"chart-display"},console.log(this.state.chartData),o.a.createElement(w.a,{data:this.state.chartData,options:{title:{display:!0,text:"Crime Stats In Queensland",fontSize:30},legend:{display:!1}}})))):o.a.createElement("div",{className:"access-denied"},o.a.createElement("h1",null,"YOUR ACCESS TO AUTHORIZED DATA IS DENIED."),o.a.createElement("h1",null,"PLEASE SIGN IN OR CONTACT SYSTEM ADMIN."))}}]),t}(o.a.Component),L=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement("div",{className:"routes"},o.a.createElement(m.b,{to:"/"},o.a.createElement(E.a,{variant:"secondary",className:"links"},"List of Offences")),o.a.createElement(m.b,{to:"/authen"},o.a.createElement(E.a,{variant:"secondary",className:"links"},"Account")),o.a.createElement(m.b,{to:"/newsearch"},o.a.createElement(E.a,{variant:"secondary",className:"links"},"Search"))),o.a.createElement(d.d,null,o.a.createElement(d.b,{path:"/authen",component:b}),o.a.createElement(d.b,{path:"/newsearch",component:A}),o.a.createElement(d.b,{exact:!0,path:"/",component:N})))}}]),t}(o.a.Component),R=document.getElementById("root");u.a.render(o.a.createElement(L,null),R)},73:function(e,t,a){e.exports=a(198)}},[[73,2,1]]]);
//# sourceMappingURL=main.ac2022c9.chunk.js.map