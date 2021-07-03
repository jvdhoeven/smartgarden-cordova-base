(this["webpackJsonpsmartgarden-assets-new"]=this["webpackJsonpsmartgarden-assets-new"]||[]).push([[0],{35:function(e,t,c){},36:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var a,n=c(1),s=c.n(n),i=c(26),l=c.n(i),r=c(9),o=c(5),u=(c(35),c(12)),d=c(2),j=c(3),b=(c(36),"4fafc201-1fb5-459e-8fcc-c5c9c331914b"),m="beb5483e-36e1-4688-b7f5-ea07361b26a8",h="a10b02a4-3b1c-45b5-a617-5648120f8e4c",O="9a0c0611-a48f-4dbc-bde2-31582e606ee5",f="c3134125-b92d-479f-a437-2de8cea412e7",x="4de76262-8d84-4ba6-bb3a-2f2716a6c28f",k="6bef33fc-dadc-408e-98e9-d6c8cb35e976",g="40a47f70-752b-4598-91ad-748cdbc7958a",p=c(27),v=c.n(p),N=c(16),w=c.n(N),y=c(0);var S=function(e){var t=e.temperature,c=e.temperatureGround,s=e.moisture,i=Object(n.useRef)(null),l=Object(n.useRef)(null),r=Object(n.useState)([]),o=Object(d.a)(r,2),j=o[0],b=o[1],m=Object(n.useState)([]),h=Object(d.a)(m,2),O=h[0],f=h[1],x=Object(n.useState)([]),k=Object(d.a)(x,2),g=k[0],p=k[1];return Object(n.useEffect)((function(){a=new v.a(i.current.getContext("2d"),{type:"line",data:{datasets:[{label:"Temperature 1",yAxisID:"y",backgroundColor:"rgba(255, 0, 0, 0.3)",borderColor:"rgba(255, 0, 0, 0.4)"},{label:"Temperature 2",yAxisID:"y",backgroundColor:"rgba(0, 255, 0, 0.3)",borderColor:"rgba(0, 255, 0, 0.4)"},{label:"Moist",yAxisID:"y1",backgroundColor:"rgba(0, 0, 255, 0.3)",borderColor:"rgba(0, 0, 255, 0.4)",fill:!0}]},options:{animation:!1,scales:{y:{type:"linear",display:!0,position:"left",ticks:{callback:function(e,t,c){return"".concat(e," \xb0C")}}},y1:{type:"linear",display:!0,position:"right",ticks:{callback:function(e,t,c){return"".concat(e," %")}},grid:{drawOnChartArea:!1}}}}}),w.a.modal(l.current).show()}),[]),Object(n.useEffect)((function(){t&&c&&s&&(b([].concat(Object(u.a)(j),[t])),f([].concat(Object(u.a)(O),[c])),p([].concat(Object(u.a)(g),[s])),a.data.labels=j.slice(Math.max(j.length-20,0)).map((function(e,t){return t})),a.data.datasets[0].data=j.slice(Math.max(j.length-20,0)),a.data.datasets[1].data=O.slice(Math.max(O.length-20,0)),a.data.datasets[2].data=g.slice(Math.max(g.length-20,0)),a.update())}),[t]),Object(y.jsx)("div",{className:"uk-section uk-section-small",children:Object(y.jsxs)("div",{className:"uk-container",children:[Object(y.jsx)("h2",{className:"uk-heading-line uk-text-center",children:Object(y.jsx)("span",{children:"Details"})}),Object(y.jsx)("canvas",{style:{height:"80vh"},ref:i})]})})};var C=function(e){var t=e.temperature,c=e.temperatureGround,a=e.moisture,n=e.watering;return Object(y.jsx)("div",{children:Object(y.jsx)(S,{temperature:t,temperatureGround:c,moisture:a,watering:n})})};var E=function(e){var t=e.temperature,c=e.temperatureGround,a=e.moisture,n=e.watering,s=e.setShowDiagram;return Object(y.jsxs)("div",{className:"uk-section uk-section-small",children:[Object(y.jsxs)("div",{className:"uk-container",children:[Object(y.jsx)("h2",{className:"uk-heading-line uk-text-center",children:Object(y.jsx)("span",{children:"Dashboard"})}),Object(y.jsxs)("div",{className:"uk-child-width-1-2 uk-grid-small uk-grid-match uk-text-center","uk-grid":"true",children:[Object(y.jsx)("div",{children:Object(y.jsxs)("div",{className:"uk-card uk-card-default uk-card-body",children:[Object(y.jsx)("span",{className:"uk-display-block uk-text-large",children:Object(y.jsx)("i",{className:"fas fa-temperature-high"})}),Object(y.jsxs)("span",{className:"uk-h4",children:[t," \xb0C"]})]})}),Object(y.jsx)("div",{children:Object(y.jsxs)("div",{className:"uk-card uk-card-default uk-card-body",children:[Object(y.jsx)("span",{className:"uk-display-block uk-text-large",children:Object(y.jsx)("i",{className:"fas fa-temperature-high"})}),Object(y.jsxs)("span",{className:"uk-h4",children:[c," \xb0C"]})]})}),Object(y.jsx)("div",{children:Object(y.jsxs)("div",{className:"uk-card uk-card-default uk-card-body",children:[Object(y.jsx)("span",{className:"uk-display-block uk-text-large",children:Object(y.jsx)("i",{className:"fas fa-water"})}),Object(y.jsxs)("span",{className:"uk-h4",children:[a," %"]})]})}),Object(y.jsx)("div",{children:Object(y.jsxs)("div",{className:"uk-card uk-card-default uk-card-body",children:[Object(y.jsx)("span",{className:"uk-display-block uk-text-large",children:Object(y.jsx)("i",{className:"fas fa-power-off"})}),Object(y.jsx)("span",{className:"uk-h4",children:n})]})})]})]}),Object(y.jsx)("div",{className:"uk-container uk-margin-top",children:Object(y.jsx)("button",{className:"uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom",onClick:function(){s(!0)},"uk-toggle":"true",children:Object(y.jsxs)("span",{children:[Object(y.jsx)("i",{className:"fas fa-chart-area"})," Details"]})})}),Object(y.jsx)("div",{className:"uk-container",children:Object(y.jsxs)(r.b,{className:"uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom",to:"/watering",children:[Object(y.jsx)("i",{className:"fas fa-hand-holding-water"})," Bew\xe4sserung"]})}),Object(y.jsx)("div",{className:"uk-container",children:Object(y.jsxs)(r.b,{className:"uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom",to:"/settings",children:[Object(y.jsx)("i",{className:"fas fa-hand-holding-water"})," Einstellungen"]})})]})};var T=function(){return Object(y.jsx)("div",{className:"uk-section uk-section-small uk-section-muted",children:Object(y.jsxs)("div",{className:"uk-container",children:[Object(y.jsx)("h2",{className:"uk-heading-line uk-text-center",children:Object(y.jsx)("span",{children:"Gartenmonat"})}),Object(y.jsxs)("div",{className:"uk-position-relative uk-visible-toggle uk-dark",tabIndex:"-1","uk-slider":"center: true",children:[Object(y.jsxs)("ul",{className:"uk-slider-items uk-grid",children:[Object(y.jsx)("li",{className:"uk-width-3-4",children:Object(y.jsxs)("div",{className:"uk-card uk-card-default",children:[Object(y.jsx)("div",{className:"uk-card-media-top",children:Object(y.jsx)("img",{src:"images/photo.jpg",alt:""})}),Object(y.jsxs)("div",{className:"uk-card-body",children:[Object(y.jsx)("h3",{className:"uk-card-title",children:"April"}),Object(y.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."})]})]})}),Object(y.jsx)("li",{className:"uk-width-3-4",children:Object(y.jsxs)("div",{className:"uk-card uk-card-default",children:[Object(y.jsx)("div",{className:"uk-card-media-top",children:Object(y.jsx)("img",{src:"images/photo.jpg",alt:""})}),Object(y.jsxs)("div",{className:"uk-card-body",children:[Object(y.jsx)("h3",{className:"uk-card-title",children:"Mai"}),Object(y.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."})]})]})})]}),Object(y.jsx)("button",{className:"uk-position-center-left uk-position-small uk-hidden-hover",href:"#prev","uk-slidenav-previous":"true","uk-slider-item":"previous",children:"\xa0"}),Object(y.jsx)("button",{className:"uk-position-center-right uk-position-small uk-hidden-hover",href:"#next","uk-slidenav-next":"true","uk-slider-item":"next",children:"\xa0"})]})]})})},D=function(e){return String.fromCharCode.apply(null,new Uint8Array(e))};var I=function(e){var t=e.connected,c=e.device,a=Object(n.useState)(!1),s=Object(d.a)(a,2),i=s[0],l=s[1],r=Object(n.useState)(null),o=Object(d.a)(r,2),u=o[0],j=o[1],x=Object(n.useState)(null),k=Object(d.a)(x,2),g=k[0],p=k[1],v=Object(n.useState)(null),N=Object(d.a)(v,2),w=N[0],S=N[1],I=Object(n.useState)(null),G=Object(d.a)(I,2),A=G[0],F=G[1];return Object(n.useEffect)((function(){if(console.log("useEffect home"),t&&null!==c)return window.ble.startNotification(c.id,b,m,(function(e){console.log("setTemperature",D(e)),j(D(e))}),(function(){})),window.ble.startNotification(c.id,b,h,(function(e){console.log("setTemperatureGround",D(e)),p(D(e))}),(function(){})),window.ble.startNotification(c.id,b,O,(function(e){console.log("setMoisture",D(e)),S(D(e))}),(function(){})),window.ble.startNotification(c.id,b,f,(function(e){console.log("setWatering",D(e)),F(D(e))}),(function(){})),function(){console.log("useEffect home goodbye"),window.ble.stopNotification(c.id,b,m,(function(){}),(function(){})),window.ble.stopNotification(c.id,b,h,(function(){}),(function(){})),window.ble.stopNotification(c.id,b,O,(function(){}),(function(){})),window.ble.stopNotification(c.id,b,f,(function(){}),(function(){}))}}),[t,c]),Object(y.jsxs)(y.Fragment,{children:[t&&!i&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(E,{temperature:u,temperatureGround:g,moisture:w,watering:A,setShowDiagram:l}),Object(y.jsx)(T,{})]}),t&&i&&Object(y.jsx)(C,{temperature:u,temperatureGround:g,moisture:w,watering:A})]})},G=c(10),A=c(11),F=c(29),M=function(e){return new TextDecoder("utf-8").decode(e)},P=function(e){return(new TextEncoder).encode(e)};var B=function(e){var t=e.device,c=Object(n.useState)(null),a=Object(d.a)(c,2),s=a[0],i=a[1],l=Object(n.useState)(null),r=Object(d.a)(l,2),o=r[0],u=r[1],j=Object(n.useState)(null),m=Object(d.a)(j,2),h=m[0],O=m[1],f=Object(n.useState)({dateTime:""|s,location:""|o,flowRate:""|h}),p=Object(d.a)(f,2),v=p[0],N=p[1],w=function(e){N((function(t){return Object(A.a)(Object(A.a)({},t),{},Object(G.a)({},e.target.name,e.target.value))}))};return Object(n.useEffect)((function(){t&&(window.ble.read(t.id,b,x,(function(e){i(M(e))})),window.ble.read(t.id,b,k,(function(e){u(M(e))})),window.ble.read(t.id,b,g,(function(e){O(M(e))})))}),[t]),Object(y.jsx)("div",{className:"uk-section uk-section-small",children:Object(y.jsxs)("div",{className:"uk-container",children:[Object(y.jsx)("h2",{className:"uk-heading-line uk-text-center",children:Object(y.jsx)("span",{children:"Einstellungen"})}),Object(y.jsxs)("form",{className:"uk-form-stacked",onSubmit:function(e){e.preventDefault(),console.log(v),console.log(P(v.dateTime)),window.ble.write(t.id,b,x,P(v.dateTime),(function(e){console.log("foo")})),window.ble.write(t.id,b,k,P(v.location),(function(e){console.log("foo")})),window.ble.write(t.id,b,g,P(v.flowRate),(function(e){console.log("foo")}))},children:[Object(y.jsxs)("div",{className:"uk-margin",children:[Object(y.jsx)("label",{className:"uk-form-label",children:"Datum und Uhrzeit"}),Object(y.jsx)("div",{className:"uk-form-controls",children:Object(y.jsx)("input",{className:"uk-input",type:"date-time",name:"dateTime",value:v.dateTime,onChange:w})})]}),Object(y.jsxs)("div",{className:"uk-margin",children:[Object(y.jsx)("label",{className:"uk-form-label",children:"Location"}),Object(y.jsx)("div",{className:"uk-form-controls",children:Object(y.jsxs)("div",{className:"uk-inline uk-width-1-1",children:[Object(y.jsx)("button",{type:"button",className:"uk-form-icon uk-form-icon-flip","uk-icon":"icon: location",onClick:function(){navigator.geolocation.getCurrentPosition((function(e){console.log(e),console.log(Object(F.getSunrise)(e.coords.latitude,e.coords.longitude))}),(function(e){console.log(e)}))}}),Object(y.jsx)("input",{className:"uk-input",type:"text",name:"location",value:v.location,onChange:w})]})})]}),Object(y.jsxs)("div",{className:"uk-margin",children:[Object(y.jsx)("label",{className:"uk-form-label",children:"Flu\xdfrate"}),Object(y.jsx)("div",{className:"uk-form-controls",children:Object(y.jsx)("input",{className:"uk-input",type:"text",name:"flowRate",value:v.flowRate,onChange:w})})]}),Object(y.jsx)("div",{className:"uk-margin",children:Object(y.jsx)("button",{className:"uk-button uk-button-primary",type:"submit",children:"Submit"})})]})]})})};var L=function(e){var t=e.devices,c=e.selectDevice;return Object(y.jsx)("div",{className:"uk-section uk-section-small",children:Object(y.jsxs)("div",{className:"uk-container",children:[Object(y.jsx)("h2",{className:"uk-heading-line uk-text-center",children:Object(y.jsx)("span",{children:"Ger\xe4teauswahl"})}),t.length>0&&Object(y.jsx)("div",{children:t.map((function(e){return Object(y.jsxs)("div",{onClick:function(){c(e)},children:[Object(y.jsx)("h3",{children:e.name}),Object(y.jsxs)("p",{children:[e.id," ",e.rssi]})]},e.name)}))})]})})};var R=function(){var e=Object(n.useState)(0),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)({startTime:"12:00",duration:360,interval:0,smart:!1}),i=Object(d.a)(s,2),l=i[0],r=i[1],o=function(e){r((function(t){return Object(A.a)(Object(A.a)({},t),{},Object(G.a)({},e.target.name,e.target.value))}))};return Object(y.jsxs)(n.Fragment,{children:[Object(y.jsx)("div",{className:"uk-section uk-section-small",children:Object(y.jsxs)("div",{className:"uk-container",children:[Object(y.jsx)("h2",{className:"uk-heading-line uk-text-center",children:Object(y.jsx)("span",{children:"Bew\xe4sserung"})}),Object(y.jsx)("form",{className:"uk-form-stacked",children:Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{className:"uk-form-label",children:"Profile"}),Object(y.jsx)("div",{className:"uk-form-controls",children:Object(y.jsxs)("select",{value:c,onChange:function(e){a(e.target.value)},name:"profile",className:"uk-select",children:[Object(y.jsx)("option",{value:"0",children:"Bitte w\xe4hlen"}),Object(y.jsx)("option",{value:"1",children:"Profil 1"}),Object(y.jsx)("option",{value:"2",children:"Profil 2"}),Object(y.jsx)("option",{value:"3",children:"Profil 3"})]})})]})})]})}),c>0&&Object(y.jsx)("div",{className:"uk-section uk-section-small",children:Object(y.jsxs)("div",{className:"uk-container",children:[Object(y.jsx)("h3",{className:"uk-heading-line uk-text-center",children:Object(y.jsxs)("span",{children:["Profil ",c]})}),Object(y.jsxs)("form",{className:"uk-form-stacked",onSubmit:function(e){e.preventDefault(),console.log(l)},children:[Object(y.jsxs)("div",{className:"uk-margin",children:[Object(y.jsx)("label",{className:"uk-form-label",children:"Startzeit"}),Object(y.jsx)("div",{className:"uk-form-controls",children:Object(y.jsx)("input",{className:"uk-input",type:"time",name:"startTime",value:l.startTime,onChange:o})})]}),Object(y.jsxs)("div",{className:"uk-margin",children:[Object(y.jsx)("label",{className:"uk-form-label",children:"Dauer"}),Object(y.jsx)("div",{className:"uk-form-controls",children:Object(y.jsx)("input",{className:"uk-input",type:"text",name:"duration",value:l.duration,onChange:o})})]}),Object(y.jsxs)("div",{className:"uk-margin",children:[Object(y.jsx)("label",{className:"uk-form-label",children:"Interval"}),Object(y.jsx)("div",{className:"uk-form-controls",children:Object(y.jsxs)("select",{className:"uk-select",name:"interval",value:l.interval,onChange:o,children:[Object(y.jsx)("option",{value:"0",children:"3 mal t\xe4glich"}),Object(y.jsx)("option",{value:"1",children:"2 mal t\xe4glich"}),Object(y.jsx)("option",{value:"2",children:"1 mal t\xe4glich"}),Object(y.jsx)("option",{value:"3",children:"Alle zwei Tage"}),Object(y.jsx)("option",{value:"4",children:"Alle drei Tage"}),Object(y.jsx)("option",{value:"5",children:"Einmal die Woche"})]})})]}),Object(y.jsxs)("div",{className:"uk-margin",children:[Object(y.jsx)("label",{className:"uk-form-label",children:"Smarte Bew\xe4sserung"}),Object(y.jsxs)("div",{className:"uk-form-controls",children:[Object(y.jsx)("input",{className:"uk-checkbox",name:"smart",checked:l.smart,onChange:o,type:"checkbox"})," Sensoren verwenden"]})]}),Object(y.jsx)("div",{className:"uk-margin",children:Object(y.jsx)("button",{className:"uk-button uk-button-primary",type:"submit",children:"Submit"})})]})]})})]})},J=c(30),z=c.n(J);var U=function(){var e=Object(j.f)(),t=Object(j.g)(),c=JSON.parse(sessionStorage.getItem("deviceId")),a=Object(n.useState)(!1),s=Object(d.a)(a,2),i=s[0],l=s[1],r=Object(n.useState)(!1),o=Object(d.a)(r,2),m=o[0],h=o[1],O=Object(n.useState)(null),f=Object(d.a)(O,2),x=f[0],k=f[1],g=Object(n.useState)(c),p=Object(d.a)(g,2),v=p[0],N=p[1],S=Object(n.useState)([]),C=Object(d.a)(S,2),E=C[0],T=C[1];return Object(n.useEffect)((function(){w.a.use(z.a)})),Object(n.useEffect)((function(){m&&(sessionStorage.setItem("deviceId",JSON.stringify(v)),"/"===t.pathname&&e.push("/home"))}),[m,v,e,t]),Object(n.useEffect)((function(){v||"/"===t.pathname||e.push("/")}),[e,v,t]),Object(n.useEffect)((function(){v&&i&&window.ble.stopScan((function(){}),(function(){}))}),[v,i]),Object(n.useEffect)((function(){v&&(l(!1),window.ble.connect(v.id,(function(){h(!0)})))}),[v]),Object(n.useEffect)((function(){v||(l(!0),window.ble.startScan([b],(function(e){k(e)}),(function(){})))}),[v]),Object(n.useEffect)((function(){x&&T((function(e){return[].concat(Object(u.a)(e),[x])}))}),[x]),Object(y.jsxs)(j.c,{children:[Object(y.jsx)(j.a,{exact:!0,path:"/watering",children:Object(y.jsx)(R,{})}),Object(y.jsx)(j.a,{exact:!0,path:"/settings",children:Object(y.jsx)(B,{device:v})}),Object(y.jsx)(j.a,{exact:!0,path:"/home",children:Object(y.jsx)(I,{connected:m,device:v})}),Object(y.jsx)(j.a,{exact:!0,path:"/",children:Object(y.jsx)(L,{devices:E,selectDevice:N})})]})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,63)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))},q=Object(o.a)();document.addEventListener("deviceready",(function(){l.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(r.a,{history:q,children:Object(y.jsx)(U,{})})}),document.getElementById("root"))}),!1),W()}},[[62,1,2]]]);
//# sourceMappingURL=main.8be87c84.chunk.js.map