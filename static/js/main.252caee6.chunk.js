(this.webpackJsonpwhats_app=this.webpackJsonpwhats_app||[]).push([[0],{52:function(e,a,t){e.exports=t(85)},57:function(e,a,t){},58:function(e,a,t){},77:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(11),l=t.n(r),s=(t(57),t(49)),m=t(24),i=(t(58),t(25)),o=t.n(i),u=t(38),h=t(99),d=t(98),E=t(22),p=t.n(E),f=t(44),_=t.n(f),b=t(23),v=t.n(b),g=t(45),N=t.n(g),w=t(39),y=t.n(w).a.create({baseURL:"https://whatsapp-clone1.herokuapp.com"}),j=(t(77),function(e){var a=e.messages,t=Object(n.useState)(""),r=Object(m.a)(t,2),l=r[0],s=r[1],i=function(){var e=Object(u.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,y.post("/messages/new",{message:l,name:"John",timestamp:(new Date).toString(),received:!1});case 3:s("");case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"chat"},c.a.createElement("div",{className:"chat__header"},c.a.createElement(h.a,{src:"https://images.unsplash.com/photo-1601705776515-b55faf59eb09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"}),c.a.createElement("div",{className:"chat__headerInfo"},c.a.createElement("h3",{className:"chat__title"},"Ann"),c.a.createElement("p",{className:"chat__text"}," last seen")),c.a.createElement("div",{className:"chat__headerRight"},c.a.createElement(d.a,null,c.a.createElement(p.a,null)),c.a.createElement(d.a,null,c.a.createElement(_.a,null)),c.a.createElement(d.a,null,c.a.createElement(v.a,null)))),c.a.createElement("div",{className:"chat__body"},a.map((function(e){return c.a.createElement("p",{className:"chat__message ".concat(e.received&&"chat__reciver")},c.a.createElement("span",{className:"chat__name"},e.name),e.message,c.a.createElement("span",{className:"chat__timestamp"},new Date(e.timestamp).toString()))}))),c.a.createElement("div",{className:"chat__footer"},c.a.createElement(N.a,null),c.a.createElement("form",null,c.a.createElement("input",{placeholder:"Type a message",value:l,onChange:function(e){return s(e.target.value)}}),c.a.createElement("button",{onClick:i,type:"submit"},"Send a message"))))}),O=(t(83),t(84),function(){return c.a.createElement("div",{className:"sidebarChat"},c.a.createElement(h.a,null),c.a.createElement("div",{className:"sidebarChat__info"},c.a.createElement("h2",{className:"sidebarChat__title"}," Room name"),c.a.createElement("p",{className:"sidebarChat__text"},"message")))}),x=t(47),k=t.n(x),C=t(46),S=t.n(C),D=function(){return c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",{className:"sidebar__header"},c.a.createElement(h.a,{src:"https://images.unsplash.com/photo-1591374375296-caa5a26743be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"}),c.a.createElement("div",{className:"sidebar__headerRight"},c.a.createElement(d.a,null,c.a.createElement(S.a,null)),c.a.createElement(d.a,null,c.a.createElement(k.a,null)),c.a.createElement(d.a,null,c.a.createElement(v.a,null)))),c.a.createElement("div",{className:"sidebar__search"},c.a.createElement("div",{className:"sidebar__searchContainer"},c.a.createElement(p.a,null),c.a.createElement("input",{placeholder:"Search"}))),c.a.createElement("div",{className:"sidebar__chats"},c.a.createElement(O,null),c.a.createElement(O,null),c.a.createElement(O,null)))},J=t(48),B=t.n(J);var R=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){y.get("/messages/sync").then((function(e){r(e.data)}))}),[]),Object(n.useEffect)((function(){var e=new B.a("f0ca0130827f1f38fd8d",{cluster:"eu"}).subscribe("messages");return e.bind("inserted",(function(e){r([].concat(Object(s.a)(t),[e]))})),function(){e.unbind_all(),e.unsubscribe()}}),[t]),c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app__body"},c.a.createElement(D,null),c.a.createElement(j,{messages:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.252caee6.chunk.js.map