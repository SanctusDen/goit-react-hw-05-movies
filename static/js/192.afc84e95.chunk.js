"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[192],{993:function(n,e,r){r.d(e,{II:function(){return u},KN:function(){return o}});var t,a,c,s=r(168),i=r(867),o=(i.styled.div(t||(t=(0,s.Z)(["\n  display: flex;\n  gap: 24px;\n  font-size: 18px;\n"]))),i.styled.ul(a||(a=(0,s.Z)(["\n  list-style: none;\n  display: flex;\n  gap: 30px;\n  a {\n    text-decoration: line-through;\n    color: #fff;\n    &:hover,\n    &:focus,\n    &:active {\n      color: #3fc9ff;\n      text-decoration: underline;\n      transition: all 400ms ease-in-out;\n    }\n  }\n"])))),u=i.styled.input(c||(c=(0,s.Z)(["\n  box-shadow: 2px 2px 10px 0px #3fc9ff, 2px 2px 10px 0px #3fc9ff;\n  color: #fff;\n  background: inherit;\n  border-radius: 12px;\n  padding-left: 10px;\n  width: 100px;\n"])))},192:function(n,e,r){r.r(e),r.d(e,{default:function(){return b}});var t,a,c=r(861),s=r(439),i=r(757),o=r.n(i),u=r(510),f=r(993),p=r(689),l=r(791),x=r(168),d=r(87),h=r(867),v=(0,h.styled)(d.rU)(t||(t=(0,x.Z)(["\n  width: 90px;\n  display: flex;\n  justify-content: center;\n  height: 10px;\n  padding: 10px 12px;\n  align-items: center;\n  gap: 10px;\n  text-decoration: none;\n\n  background-color: inherit;\n  color: #fff;\n  border-radius: 50px;\n  border: 2px solid #3fc9ff;\n  box-shadow: 2px 2px 10px 0px #3fc9ff, 2px 2px 10px 0px #3fc9ff;\n\n  &:hover,\n  &:focus,\n  &:active {\n    transition: all 400ms ease-in-out;\n    background-color: #3fc9ff;\n    color: #000;\n    border: 2px solid #3fc9ff;\n    box-shadow: 2px 2px 10px 0px #3fc9ff, 2px 2px 10px 0px #3fc9ff;\n  }\n"]))),m=h.styled.div(a||(a=(0,x.Z)(["\n  color: #fff;\n"]))),g=r(409),w=r(184),j=function(n){var e,r,t=n.title,a=n.overview,i=n.genres,f=n.release_date,x=n.vote_average,d=n.poster_path,h=(0,p.TH)(),j=(0,p.UO)().movieId,b=(0,l.useState)(null),k=(0,s.Z)(b,2),y=k[0],Z=k[1],_=(0,l.useState)(!1),U=(0,s.Z)(_,2),S=U[0],E=U[1];(0,l.useEffect)((function(){var n=function(){var n=(0,c.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return E(!0),n.prev=1,n.next=4,(0,g.NA)(j);case 4:e=n.sent,Z({data:e}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0.message);case 11:return n.prev=11,E(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[1,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n(j)}),[j]),console.log(y);var I=(0,l.useRef)(null!==(e=null===(r=h.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/");return(0,w.jsxs)(w.Fragment,{children:[S&&(0,w.jsx)(u.a,{}),(0,w.jsx)(v,{to:I.current,children:"Go back"}),(0,w.jsxs)("div",{children:[(0,w.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w200/").concat(d),alt:t}),x?(0,w.jsx)("span",{rating:x,children:x.toFixed(1)}):""]}),(0,w.jsxs)(m,{children:[(0,w.jsx)("h2",{children:t}),(0,w.jsxs)("p",{children:["Release data: ",f]}),(0,w.jsx)("h3",{children:"Overview"}),(0,w.jsx)("p",{children:a}),(0,w.jsx)("h4",{children:"Genres"}),(0,w.jsx)("ul",{children:i&&i.map((function(n){var e=n.id,r=n.name;return(0,w.jsx)("li",{children:r},e)}))})]})]})},b=function(n){var e=n.title,r=(0,l.useState)(!1),t=(0,s.Z)(r,2),a=t[0],i=t[1],x=(0,l.useState)([]),h=(0,s.Z)(x,2),v=h[0],m=h[1],b=(0,p.UO)().movieId;return(0,l.useEffect)((function(){if(v){var n=function(){var n=(0,c.Z)(o().mark((function n(e){var r,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i(!0),n.prev=1,n.next=4,(0,g.ED)(e);case 4:r=n.sent,t=r.result,m(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0.message);case 12:return n.prev=12,i(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[1,9,12,15]])})));return function(e){return n.apply(this,arguments)}}();n(b)}}),[b,v]),(0,w.jsxs)("div",{children:[(0,w.jsx)("h1",{children:e}),a&&(0,w.jsx)(u.a,{}),(0,w.jsx)(j,{movie:v}),(0,w.jsx)(l.Suspense,{fallback:(0,w.jsx)(u.a,{}),children:(0,w.jsx)(p.j3,{})}),(0,w.jsxs)(f.KN,{children:[(0,w.jsx)("li",{children:(0,w.jsx)(d.rU,{to:"cast",children:"Cast"})}),(0,w.jsx)("li",{children:(0,w.jsx)(d.rU,{to:"reviews",children:"Reviews"})})]})]})}},409:function(n,e,r){r.d(e,{Bt:function(){return p},ED:function(){return u},NA:function(){return o},Wn:function(){return f},_k:function(){return i}});var t=r(861),a=r(757),c=r.n(a),s=r(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e61641c86f787a123ab79c28a2fcf6ec"}}),i=function(){var n=(0,t.Z)(c().mark((function n(){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/trending/movie/day");case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/search/movie",{params:{query:e}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(e));case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(e,"/credits"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(e,"/reviews"));case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=192.afc84e95.chunk.js.map