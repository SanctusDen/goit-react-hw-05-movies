"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{324:function(t,n,e){e.d(n,{e:function(){return f}});e(791);var r,a=e(689),c=e(87),u=e(184),s=function(t){var n=t.title,e=t.poster_path,r=t.id,s=(0,a.TH)();return(0,u.jsx)("li",{children:(0,u.jsxs)(c.rU,{to:"/movies/".concat(r),state:{from:s},children:[(0,u.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w200/").concat(e),alt:n}),n&&n.substring(0,20)]})},r)},i=e(168),o=e(867).styled.ul(r||(r=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n\n  li {\n    width: 200px;\n    text-align: center;\n    list-style: none;\n  }\n  li > a {\n    color: #fff;\n    &:hover,\n    &:focus,\n    &:active {\n      color: #3fc9ff;\n      transition: all 400ms ease-in-out;\n    }\n  }\n"]))),f=function(t){var n=t.movies;t.id;return(0,u.jsx)(o,{children:n.map((function(t){var n=t.title,e=t.id,r=t.poster_path;return(0,u.jsx)(s,{title:n,poster_path:r,id:e},e)}))})}},415:function(t,n,e){e.r(n);var r=e(861),a=e(439),c=e(757),u=e.n(c),s=e(324),i=e(510),o=e(906),f=e(791),p=e(409),l=e(184);n.default=function(){var t=(0,f.useState)([]),n=(0,a.Z)(t,2),e=n[0],c=n[1],v=(0,f.useState)(!1),h=(0,a.Z)(v,2),d=h[0],m=h[1];return(0,f.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m(!0),t.prev=1,t.next=4,(0,p._k)();case 4:n=t.sent,e=n.results,c(e),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0.message);case 12:return t.prev=12,m(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,l.jsx)(o.$0,{children:(0,l.jsxs)(o.W2,{children:[(0,l.jsx)("h1",{children:"Popular movies of the day!"}),d&&(0,l.jsx)(i.a,{}),(0,l.jsx)(s.e,{movies:e})]})})}},409:function(t,n,e){e.d(n,{Bt:function(){return p},ED:function(){return o},NA:function(){return i},Wn:function(){return f},_k:function(){return s}});var r=e(861),a=e(757),c=e.n(a),u=e(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e61641c86f787a123ab79c28a2fcf6ec"}}),s=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/trending/movie/day");case 2:return n=t.sent,e=n.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/search/movie",{params:{query:n}});case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(n));case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(n,"/credits"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(n,"/reviews"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=415.98e988e5.chunk.js.map