(this["webpackJsonpreact-router-start-point"]=this["webpackJsonpreact-router-start-point"]||[]).push([[0],{174:function(e,t,n){},175:function(e,t,n){},313:function(e,t,n){},314:function(e,t,n){},315:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n(58),i=n.n(c),s=(n(174),n(40)),r=n(11),a=(n(175),n(2)),l=function(e){var t,n,o=e.question,c=e.id,i="slider".concat(c),s="value".concat(c);window.addEventListener("DOMContentLoaded",(function(e){n=o.defaultValue,document.getElementById("".concat(s)).innerHTML=o.defaultValue,r()}));var r=function(){if(null!==(t=document.getElementById("".concat(i)))){var e="255,0,0";n>=25&&n<=50&&(e="215,140,0"),n>=50&&n<=75&&(e="255,165,0"),n>=75&&n<100&&(e="255,215,0"),100===n&&(e="166,214,8");var o="linear-gradient(90deg,rgb(".concat(e,")")+n+"%, rgb(214,214,214)"+n+"%)";t.style.background=o}};return Object(a.jsxs)("div",{id:"question-div",children:[Object(a.jsx)("input",{type:"range",id:i,className:"slider",min:"0",max:"100",defaultValue:o.defaultValue,step:"1",onChange:function(e){n=t.value,console.log(c),r(),document.getElementById("".concat(s)).innerHTML=t.value}}),Object(a.jsxs)("p",{children:["Value: ",Object(a.jsx)("span",{id:s})]}),Object(a.jsx)("p",{children:o.text})]})},d=function(){var e=[{defaultValue:"0",text:"How confident are you with CSS?"},{defaultValue:"50",text:"How confident are you working on release?"},{defaultValue:"80",text:"How confident are you with react router"}].map((function(e,t){return Object(a.jsx)(l,{question:e,id:t},t)}));return Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{children:"Slider Page"}),e]})},j=n(18),u=function(e){var t=Object(o.useState)(0),n=Object(j.a)(t,2),c=n[0],i=n[1];Object(o.useEffect)((function(){i(e.completed)}),[]);var s=e.bgcolor,r={height:"100%",width:"".concat(c,"%"),backgroundColor:s,transition:"width 1s ease-in-out",borderRadius:"inherit",textAlign:"right"};return Object(a.jsx)("div",{style:{height:20,width:"50%",backgroundColor:"#e0e0de",borderRadius:50,margin:50},children:Object(a.jsx)("div",{style:r,children:Object(a.jsx)("span",{style:{padding:5,color:"white",fontWeight:"bold"},children:"".concat(c,"%")})})})},m=function(){return Object(a.jsx)("div",{className:"App",children:[{bgcolor:"#6a1b9a",completed:60},{bgcolor:"#00695c",completed:30},{bgcolor:"#ef6c00",completed:53}].map((function(e,t){return Object(a.jsx)(u,{bgcolor:e.bgcolor,completed:e.completed},t)}))})},b=n(317),p=n(318),h=n(322),f=n(160),x=n(161),O=n(165),g=n(64),v=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:" Capability"}),Object(a.jsx)(b.a,{width:"100%",aspect:"2",children:Object(a.jsxs)(p.a,{cx:"50%",cy:"50%",outerRadius:"80%",data:[{name:"React Router",series1:68,series2:54},{name:"Release",series1:43,series2:23},{name:"useEffect",series1:87,series2:59},{name:"TTD",series1:22,series2:78},{name:"Using sandbox",series1:66,series2:89},{name:"HTML",series1:68,series2:33},{name:"CSS",series1:31,series2:44},{name:"useState",series1:72,series2:82},{name:"API calls",series1:88,series2:60}],children:[Object(a.jsx)(h.a,{}),Object(a.jsx)(f.a,{dataKey:"name"}),Object(a.jsx)(x.a,{angle:0,domain:[0,100]}),Object(a.jsx)(O.a,{name:"Danny",dataKey:"series1",stroke:"Green",fill:"green",fillOpacity:.5}),Object(a.jsx)(O.a,{name:"Mark",dataKey:"series2",stroke:"Blue",fill:"blue",fillOpacity:.5}),Object(a.jsx)(g.a,{})]})})]})},w=function(){return Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(s.b,{to:"/Component_Tests/Slider",children:"Slider"})}),Object(a.jsx)("li",{children:Object(a.jsx)(s.b,{to:"/Component_Tests/Progress",children:"ProgressBar"})}),Object(a.jsx)("li",{children:Object(a.jsx)(s.b,{to:"/Component_Tests/Spider",children:"SpiderChart"})}),Object(a.jsx)("li",{children:Object(a.jsx)(s.b,{to:"/Component_Tests/ScrollList",children:"ScrollList"})})]})},C=(n(313),function(e){var t,n,o=e.topics,c=function(e){t&&(t.className=o[t.value].completed),t=e.target,e.target.className="selected",n=e.target.textContent,console.log(n)},i=o.map((function(e,t){return Object(a.jsxs)("button",{className:e.completed,onClick:c,value:t,children:[e.name," "]},t)}));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{id:"list",children:i}),Object(a.jsx)("button",{id:"select",children:"Select"})]})}),y=(n(314),function(){return Object(a.jsxs)("div",{id:"topicsList",children:[Object(a.jsx)("h2",{children:"Topics"}),Object(a.jsx)(C,{topics:[{name:"CSS",completed:"completed"},{name:"JavaScript",completed:"notCompleted"},{name:"HTML",completed:"notCompleted"},{name:"React",completed:"completed"},{name:"ReactDom",completed:"completed"},{name:"ReactRouter",completed:"completed"},{name:"JQuery",completed:"completed"},{name:"Node",completed:"notCompleted"}]})]})}),S=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(s.a,{children:[Object(a.jsx)(w,{}),Object(a.jsxs)(r.c,{children:[Object(a.jsx)(r.a,{path:"/Component_Tests/*",element:Object(a.jsx)(d,{})}),Object(a.jsx)(r.a,{path:"/Component_Tests/Slider",element:Object(a.jsx)(d,{})}),Object(a.jsx)(r.a,{path:"/Component_Tests/Progress",element:Object(a.jsx)(m,{})}),Object(a.jsx)(r.a,{path:"/Component_Tests/Spider",element:Object(a.jsx)(v,{})}),Object(a.jsx)(r.a,{path:"/Component_Tests/ScrollList",element:Object(a.jsx)(y,{})})]})]})})},T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(a.jsx)(S,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Component_Tests",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Component_Tests","/service-worker.js");T?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):k(e)}))}}()}},[[315,1,2]]]);
//# sourceMappingURL=main.8657ea9d.chunk.js.map