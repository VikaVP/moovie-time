(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{205:function(e,t,n){n(206),e.exports=n(207)},270:function(e,t,n){var content=n(271);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(85).default)("9593c05c",content,!0,{sourceMap:!1})},271:function(e,t,n){var r=n(84)((function(i){return i[1]}));r.push([e.i,'/*purgecss start ignore*/\n\n@font-face{\n  font-family:"Montserrat";\n\n  src:url(/fonts/Montserrat/static/Montserrat-Medium.ttf) format("truetype")\n}\n\nbody{\n  font-family:Montserrat\n}\n\n.slick-slide{\n  filter:grayscale(.7) brightness(.5)\n}\n\n.slick-center{\n  filter:unset!important\n}\n\n.slick-dots{\n  display:flex!important;\n  align-items:center;\n  justify-content:center\n}\n\n.slick-dots li button:before{\n  content:""!important\n}\n\n.slick-dots li button{\n  width:12px!important;\n  height:12px!important;\n  background:hsla(0,0%,100%,.5)!important;\n  border-radius:50%!important\n}\n\n.slick-dots li.slick-active button{\n  height:12px!important;\n  width:20px!important;\n  overflow:hidden;\n  background:#e74c3c!important;\n  border:none;\n  border-radius:4px!important\n}\n\n.basis-50{\n  flex-basis:50%\n}\n\n.basis-20{\n  flex-basis:20%\n}\n\n/*purgecss end ignore*/',""]),r.locals={},e.exports=r},272:function(e,t,n){"use strict";n.r(t);var r=n(142),o=n(6),c=(n(48),n(26),n(117),n(49),n(273),n(27),n(37),n(18),n(105),n(183),n(111),n(136),n(143),n(82),n(46)),m=n(30),l=n.n(m);t.default=function(){return new c.a.Store({state:{movies:[],loaded:!0,movie:[],genres:[],discoverMovies:[],review:[],recommendationsMovies:[],popularMovies:[],page:1,urlFilter:null,hideDropdownSearch:!0,search:[]},mutations:{setMovies:function(e,t){e.movies=t},setSearch:function(e,t){e.search=t},setDropdownSearch:function(e,t){e.hideDropdownSearch=t},setPage:function(e,t){e.page=t},setUrlFilter:function(e,t){e.urlFilter=t},setPopularMovies:function(e,t){e.popularMovies=t},setReview:function(e,t){e.review=t},setDiscoverMovies:function(e,t){e.discoverMovies=t},setRecommendationsMovies:function(e,t){e.recommendationsMovies=t},setGenres:function(e,t){e.genres=t},loaded:function(e,t){e.loaded=t},setMovie:function(e,t){e.movie=t}},actions:{nuxtServerInit:function(e,t){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.dispatch("getGenres");case 2:return t.next=4,e.dispatch("getPopularMovies");case 4:return t.next=6,e.dispatch("getDiscoverMovies");case 6:case"end":return t.stop()}}),t)})))()},getPopularMovies:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.commit("loaded",!0),t.next=3,l.a.get("https://api.themoviedb.org/3/movie/popular?api_key=786c05f38c9bbd3778c3aaa58a1015fc&language=en-US&page=1").then((function(t){for(var data=t.data.results,n=e.state.genres,r=data.slice(0,5),o=0;o<r.length;o++)for(var c=!1,i=0;i<n.length&&(Number(n[i].id)===Number(r[o].genre_ids[0])&&(c=!0,r[o].genre=n[i].name),!c);i++);e.commit("setPopularMovies",r),e.commit("loaded",!1)})).catch((function(e){console.log(e)}));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})))()},getDiscoverMovies:function(e,t){return Object(o.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.commit("loaded",!0),r="sort_by=".concat(t||"popularity.desc"),n.next=4,l.a.get("https://api.themoviedb.org/3/discover/movie?api_key=786c05f38c9bbd3778c3aaa58a1015fc&language=en-US&page=1&".concat(r)).then((function(t){for(var n=t.data.page,data=t.data.results,r=e.state.genres,o=0;o<data.length;o++)for(var c=!1,i=0;i<r.length&&(Number(r[i].id)===Number(data[o].genre_ids[0])&&(c=!0,data[o].genre=r[i].name),!c);i++);e.commit("setDiscoverMovies",data),e.commit("setMovies",data),e.commit("setPage",n),e.commit("loaded",!1)})).catch((function(e){console.log(e)}));case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},filterMovies:function(e,t){return Object(o.a)(regeneratorRuntime.mark((function n(){var o,c,m,d,f,v,h,w;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.commit("loaded",!0),o="sort_by=".concat(t.sorter||"popularity.desc"),c="with_genres=",m=e.state.genres,d=e.state.page,!t.filter){n.next=20;break}f=0;case 7:if(!(f<t.filter.length)){n.next=20;break}v=!1,h=0;case 10:if(!(h<m.length)){n.next=17;break}if(m[h].name===t.filter[f]&&(v=!0,c+=m[h].id+","),!v){n.next=14;break}return n.abrupt("break",17);case 14:h++,n.next=10;break;case 17:f++,n.next=7;break;case 20:return w="https://api.themoviedb.org/3/discover/movie?api_key=786c05f38c9bbd3778c3aaa58a1015fc&language=en-US&page=".concat(e.state.page,"&").concat(o,"&").concat(c,"&page=").concat(t.next?d+1:d),e.commit("setUrlFilter",w),n.next=24,l.a.get(w).then((function(n){for(var o=n.data.page,data=n.data.results,c=0;c<data.length;c++)for(var l=!1,i=0;i<m.length&&(Number(m[i].id)===Number(data[c].genre_ids[0])&&(l=!0,data[c].genre=m[i].name),!l);i++);e.commit("setPage",o),e.commit("setMovies",t.next?[].concat(Object(r.a)(e.state.movies),Object(r.a)(data)):data),e.commit("loaded",!1)})).catch((function(e){console.log(e)}));case 24:return n.abrupt("return",n.sent);case 25:case"end":return n.stop()}}),n)})))()},getRecommendationsMovies:function(e,t){return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.commit("loaded",!0),n.next=3,l.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/recommendations?api_key=786c05f38c9bbd3778c3aaa58a1015fc&language=en-US&page=1")).then((function(t){for(var data=t.data.results,n=e.state.genres,r=0;r<data.length;r++)for(var o=!1,i=0;i<n.length&&(Number(n[i].id)===Number(data[r].genre_ids[0])&&(o=!0,data[r].genre=n[i].name),!o);i++);console.log(data,"recom"),e.commit("setRecommendationsMovies",data),e.commit("loaded",!1)})).catch((function(e){console.log(e)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()},getSingleMovie:function(e,t){return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.commit("loaded",!0),n.next=3,l.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=786c05f38c9bbd3778c3aaa58a1015fc&language=en-US&page=1")).then((function(t){var data=t.data,n=data.genres,r="";if(n.length<2)r+=n[0].name;else if(2===n.length)r+="".concat(n[0].name," and ").concat(n[1].name);else for(var i=0;i<n.length;i++)i!==n.length-1?r+="".concat(n[i].name,", "):r+="and ".concat(n[i].name," ");data.genre_name=r,console.log(data,"single"),e.commit("setMovie",data),e.commit("loaded",!1)})).catch((function(e){console.log(e)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()},getReviewMovie:function(e,t){return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.commit("loaded",!0),n.next=3,l.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=786c05f38c9bbd3778c3aaa58a1015fc&language=en-US&page=1")).then((function(t){var data=t.data.results;t.data.results.length>4&&(data=t.data.results.slice(0,4)),console.log(data,"rev"),e.commit("setReview",data),e.commit("loaded",!1)})).catch((function(e){console.log(e)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()},searchMovie:function(e,t){return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.commit("loaded",!0),n.next=3,l.a.get("https://api.themoviedb.org/3/search/movie?api_key=786c05f38c9bbd3778c3aaa58a1015fc&language=en-US&query=".concat(t)).then((function(n){var data=n.data.results;if(data.length>1)for(var i=0;i<data.length;i++){var r=new RegExp(t.split("").join("-?"),"i");data[i].content=data[i].title.replace(r,(function(e){return"<b>"+e+"</b>"}))}e.commit("setSearch",data.slice(0,7)),e.commit("setDropdownSearch",!1),e.commit("loaded",!1)})).catch((function(e){console.log(e)}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))()},getGenres:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=786c05f38c9bbd3778c3aaa58a1015fc&language=en-US&page=1").then((function(t){var data=t.data.genres;e.commit("setGenres",data)})).catch((function(e){console.log(e)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}},getters:{isloaded:function(e){return e.loaded},loadMovies:function(e){return e.movies},popularMovies:function(e){return e.popularMovies},movie:function(e){return e.movie},page:function(e){return e.page},discoverMovies:function(e){return e.discoverMovies},recommendationsMovies:function(e){return e.recommendationsMovies},genres:function(e){return e.genres},review:function(e){return e.review},search:function(e){return e.search},hideDropdownSearch:function(e){return e.hideDropdownSearch}}})}}},[[205,16,2,17]]]);