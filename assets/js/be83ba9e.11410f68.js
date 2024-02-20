"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[446],{5680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>c});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,c=d["".concat(l,".").concat(u)]||d[u]||g[u]||i;return n?a.createElement(c,o(o({ref:t},m),{},{components:n})):a.createElement(c,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8009:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(8168),r=(n(6540),n(5680));const i={},o=void 0,s={unversionedId:"backend/dao",id:"backend/dao",isDocsHomePage:!1,title:"dao",description:"AssistantDAO",source:"@site/docs/backend/dao.md",sourceDirName:"backend",slug:"/backend/dao",permalink:"/Appointment-Assistant/docs/backend/dao",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/backend/dao.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"backend_api",permalink:"/Appointment-Assistant/docs/backend/backend_api"},next:{title:"intro to files and functions used in backend.",permalink:"/Appointment-Assistant/docs/backend/intro"}},l=[{value:"AssistantDAO",id:"assistantdao",children:[{value:"AssistantDAO~AssistantDAO",id:"assistantdaoassistantdao",children:[]},{value:"AssistantDAO~InjectDB(conn) \u21d2 <code>Promise.&lt;void&gt;</code>",id:"assistantdaoinjectdbconn--promisevoid",children:[]},{value:"AssistantDAO~newUser(email, name, room_address) \u21d2 <code>Promise.&lt;Object&gt;</code>",id:"assistantdaonewuseremail-name-room_address--promiseobject",children:[]},{value:"AssistantDAO~SetAppointment(appointee, appointer, creation_time, appointment_time, appointment_duration, appointment_purpose, appointment_description) \u21d2 <code>Promise.&lt;Object&gt;</code>",id:"assistantdaosetappointmentappointee-appointer-creation_time-appointment_time-appointment_duration-appointment_purpose-appointment_description--promiseobject",children:[]}]}],p={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("a",{name:"module_AssistantDAO"}),(0,r.yg)("h2",{id:"assistantdao"},"AssistantDAO"),(0,r.yg)("p",null,"This file contains the AssistantDAO class which is responsible for interacting with the database to perform CRUD operations related to users and appointments."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#module_AssistantDAO"},"AssistantDAO"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#module_AssistantDAO..AssistantDAO"},"~AssistantDAO")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#module_AssistantDAO..InjectDB"},"~InjectDB(conn)")," \u21d2 ",(0,r.yg)("code",null,"Promise.","<","void",">")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#module_AssistantDAO..newUser"},"~newUser(email, name, room_address)")," \u21d2 ",(0,r.yg)("code",null,"Promise.","<","Object",">")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#module_AssistantDAO..SetAppointment"},"~SetAppointment(appointee, appointer, creation_time, appointment_time, appointment_duration, appointment_purpose, appointment_description)")," \u21d2 ",(0,r.yg)("code",null,"Promise.","<","Object",">"))))),(0,r.yg)("a",{name:"module_AssistantDAO..AssistantDAO"}),(0,r.yg)("h3",{id:"assistantdaoassistantdao"},"AssistantDAO~AssistantDAO"),(0,r.yg)("p",null,"Represents the AssistantDAO class."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": inner class of ",(0,r.yg)("a",{parentName:"p",href:"#module_AssistantDAO"},(0,r.yg)("code",null,"AssistantDAO")),"  "),(0,r.yg)("a",{name:"module_AssistantDAO..InjectDB"}),(0,r.yg)("h3",{id:"assistantdaoinjectdbconn--promisevoid"},"AssistantDAO~InjectDB(conn) \u21d2 ",(0,r.yg)("code",null,"Promise.","<","void",">")),(0,r.yg)("p",null,"Injects the database connection into the AssistantDAO class."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": inner method of ",(0,r.yg)("a",{parentName:"p",href:"#module_AssistantDAO"},(0,r.yg)("code",null,"AssistantDAO")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"Returns"),": ",(0,r.yg)("code",null,"Promise.","<","void",">")," - - A promise that resolves when the database connection is injected.  "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"conn"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"Object")),(0,r.yg)("td",{parentName:"tr",align:null},"The database connection object.")))),(0,r.yg)("a",{name:"module_AssistantDAO..newUser"}),(0,r.yg)("h3",{id:"assistantdaonewuseremail-name-room_address--promiseobject"},"AssistantDAO~newUser(email, name, room_address) \u21d2 ",(0,r.yg)("code",null,"Promise.","<","Object",">")),(0,r.yg)("p",null,"Creates a new user in the database."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": inner method of ",(0,r.yg)("a",{parentName:"p",href:"#module_AssistantDAO"},(0,r.yg)("code",null,"AssistantDAO")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"Returns"),": ",(0,r.yg)("code",null,"Promise.","<","Object",">")," - - A promise that resolves with the result of the user creation.  "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"email"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The email of the user.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"name"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The name of the user.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"room_address"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The room address of the user.")))),(0,r.yg)("a",{name:"module_AssistantDAO..SetAppointment"}),(0,r.yg)("h3",{id:"assistantdaosetappointmentappointee-appointer-creation_time-appointment_time-appointment_duration-appointment_purpose-appointment_description--promiseobject"},"AssistantDAO~SetAppointment(appointee, appointer, creation_time, appointment_time, appointment_duration, appointment_purpose, appointment_description) \u21d2 ",(0,r.yg)("code",null,"Promise.","<","Object",">")),(0,r.yg)("p",null,"Sets an appointment in the database."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Kind"),": inner method of ",(0,r.yg)("a",{parentName:"p",href:"#module_AssistantDAO"},(0,r.yg)("code",null,"AssistantDAO")),(0,r.yg)("br",{parentName:"p"}),"\n",(0,r.yg)("strong",{parentName:"p"},"Returns"),": ",(0,r.yg)("code",null,"Promise.","<","Object",">")," - - A promise that resolves with the created or updated appointment.  "),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Param"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"appointee"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The email of the appointee.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"appointer"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The email of the appointer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"creation_time"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"Date")),(0,r.yg)("td",{parentName:"tr",align:null},"The creation time of the appointment.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"appointment_time"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"Date")),(0,r.yg)("td",{parentName:"tr",align:null},"The time of the appointment.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"appointment_duration"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"number")),(0,r.yg)("td",{parentName:"tr",align:null},"The duration of the appointment in minutes.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"appointment_purpose"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The purpose of the appointment.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"appointment_description"),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("code",null,"string")),(0,r.yg)("td",{parentName:"tr",align:null},"The description of the appointment.")))))}d.isMDXComponent=!0}}]);