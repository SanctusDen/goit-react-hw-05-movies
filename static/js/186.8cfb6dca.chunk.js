"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,r,t){t.r(r);var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(510),i=t(906),o=t(791),f=t(689),p=t(409),v=t(184);r.default=function(){var e=(0,o.useState)(!1),r=(0,a.Z)(e,2),t=r[0],u=r[1],h=(0,o.useState)([]),d=(0,a.Z)(h,2),m=d[0],l=d[1],w=(0,f.UO)().movieId;return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.prev=1,e.next=4,(0,p.Bt)(r);case 4:t=e.sent,n=t.reviews,l(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.message);case 12:return e.prev=12,u(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(r){return e.apply(this,arguments)}}();e()}),[w]),(0,v.jsxs)(i.W2,{children:[t&&(0,v.jsx)(s.a,{}),(0,v.jsx)("h1",{children:"Reviews of the movie!"}),m.map((function(e){var r=e.id,t=e.author,n=e.content;return(0,v.jsxs)("div",{children:[(0,v.jsx)("h2",{children:t}),(0,v.jsx)("p",{children:n})]},r)}))]})}},409:function(e,r,t){t.d(r,{Bt:function(){return p},ED:function(){return o},NA:function(){return i},Wn:function(){return f},_k:function(){return s}});var n=t(861),a=t(757),u=t.n(a),c=t(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e61641c86f787a123ab79c28a2fcf6ec"}}),s=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/day");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.8cfb6dca.chunk.js.map