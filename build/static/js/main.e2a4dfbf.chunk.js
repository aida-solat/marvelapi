(this["webpackJsonpmarvel-api"]=this["webpackJsonpmarvel-api"]||[]).push([[0],{24:function(e,t,c){},44:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(16),i=c.n(a),r=c(7),j=c.n(r),l=c(17),o=c(3),d=(c(24),c.p+"static/media/marvel-logo.58b8e3c4.png"),b=c(0),u=function(){return Object(b.jsx)("header",{className:"center",children:Object(b.jsx)("img",{className:"logo",src:d,alt:""})})},O=function(e){return Object(b.jsx)("nav",{className:"nav",children:Object(b.jsxs)("ul",{className:"nav__menu",children:[Object(b.jsx)("li",{className:"nav__menu-item",children:Object(b.jsx)("p",{children:"Sort By : "})}),Object(b.jsx)("li",{className:"nav__menu-item",children:Object(b.jsx)("button",{type:"button",onClick:e.setFilterD,children:"Date Desc"})}),Object(b.jsx)("li",{className:"nav__menu-item",children:Object(b.jsx)("button",{type:"button",onClick:e.setFilterA,children:"Date Asc"})})]})})},h=function(e){var t=e.item,c="";return c=""!==t.description?t.description:"No Description!",Object(b.jsx)("div",{className:"content",children:Object(b.jsxs)("div",{className:"content-inner",children:[Object(b.jsx)("div",{className:"content-front",children:Object(b.jsx)("img",{src:t.thumbnail.path+"/standard_fantastic.jpg",alt:""})}),Object(b.jsxs)("div",{className:"content-back",children:[Object(b.jsx)("h1",{children:t.name}),Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:"Name:"})," ",t.name]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("strong",{children:"Description:"})," ",c]})]})]})]})})},m=function(e){var t=e.items,c=e.isLoading,n=e.FilterAsc,s=e.FilterDesc;return console.log(t),console.log(n),console.log(s),!0===s?c?Object(b.jsx)("h1",{children:"Loading"}):Object(b.jsx)("section",{className:"contents",children:t.sort((function(e,t){return e.id>t.id?1:-1})).map((function(e,t){return Object(b.jsx)(h,{item:e},t)}))}):!0===n?c?Object(b.jsx)("h1",{children:"Loading"}):Object(b.jsx)("section",{className:"contents",children:t.sort((function(e,t){return e.id>t.id?1:-1})).reverse().map((function(e,t){return Object(b.jsx)(h,{item:e},t)}))}):c?Object(b.jsx)("h1",{children:"Loading"}):Object(b.jsx)("section",{className:"contents",children:t.map((function(e,t){return Object(b.jsx)(h,{item:e},t)}))})},x=function(e){var t=e.search,c=Object(n.useState)(""),s=Object(o.a)(c,2),a=s[0],i=s[1];return Object(b.jsx)("section",{className:"search",children:Object(b.jsx)("input",{type:"text",className:"form-control",placeholder:"Find a character",autoFocus:!0,onChange:function(e){return c=e.target.value,i(c),void t(c);var c},value:a})})},f=c(18),v=c.n(f);var p=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!0),i=Object(o.a)(a,2),r=i[0],d=i[1],h=Object(n.useState)(""),f=Object(o.a)(h,2),p=f[0],g=f[1],N=Object(n.useState)(!1),F=Object(o.a)(N,2),D=F[0],_=F[1],y=Object(n.useState)(!0),S=Object(o.a)(y,2),k=S[0],w=S[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=75f68f03fc85ae774bc4fc166d995134&hash=".concat("c92947db2fd1b46319fb72fd45200acd","&offset=100&limit=30"));case 2:t=e.sent,console.log(t.data.data.results),s(t.data.data.results),d(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[p]),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"head",children:[Object(b.jsx)(u,{}),Object(b.jsx)(x,{search:function(e){return g(e)}})]}),Object(b.jsxs)("div",{className:"main",children:[Object(b.jsx)("div",{className:"sc-hd-line"}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(O,{setFilterD:function(){!0===D&&(_(!1),w(!0)),console.log(D)},setFilterA:function(){!0===k&&(_(!0),w(!1)),console.log(k)}}),Object(b.jsx)(m,{items:c,isLoading:r,FilterAsc:k,FilterDesc:D})]})]})]})};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.e2a4dfbf.chunk.js.map