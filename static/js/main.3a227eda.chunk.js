(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/loading.80efc2a8.gif"},45:function(e,t,a){e.exports=a(81)},50:function(e,t,a){},71:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(23),l=a.n(n),i=a(6),c=a(7),s=a(9),m=a(8),u=a(16),v=a(5),d=(a(50),a(15)),p="none",h="https://image.tmdb.org/t/p/w500",f={"01":"January","02":"Feburary","03":"March","04":"April","05":"May","06":"June","07":"July","08":"Auguest","09":"September",10:"October",11:"November",12:"December"},g={"01":"1st","02":"2nd","03":"3rd","04":"4th","05":"5th","06":"6th","07":"7th","08":"8th","09":"9th",10:"10th",11:"11th",12:"12th",13:"13th",14:"14th",15:"15th",16:"16th",17:"17th",18:"18th",19:"19th",20:"20th",21:"21th",22:"22th",23:"23th",24:"24th",25:"25th",26:"26th",27:"27th",28:"28th",29:"29th",30:"30th",31:"31th"},b={12:{genre:"Adventure",color:"#fff",backgroundColor:"rgb(158, 239, 236)"},28:{genre:"Action",color:"fff",backgroundColor:"rgb(95, 202, 195)"},16:{genre:"Animation",color:"#fff",backgroundColor:"rgb(185, 235, 209)"},35:{genre:"Comedy",color:"#fff",backgroundColor:"rgb(143, 213, 177)"},10402:{genre:"Music",color:"#fff",backgroundColor:"rgb(130, 186, 183)"},10749:{genre:"Romance",color:"#fff",backgroundColor:"rgb(159, 204, 81)"},27:{genre:"Horror",color:"#fff",backgroundColor:"rgb(134, 179, 0)"},53:{genre:"Thriller",color:"#fff",backgroundColor:"rgb(152, 212, 145)"},80:{genre:"Crime",color:"#fff",backgroundColor:"rgb(86, 171, 104)"},18:{genre:"Drama",color:"#fff",backgroundColor:"rgb(218, 195, 216)"},10751:{genre:"Family",color:"#fff",backgroundColor:"rgb(186, 178, 204)"},10770:{genre:"TV Movie",color:"#fff",backgroundColor:"rgb(160, 155, 195)"},14:{genre:"Fantasy",color:"#fff",backgroundColor:"rgb(238, 232, 117)"},878:{genre:"Science Fiction",color:"#fff",backgroundColor:"rgb(249, 213, 91)"},9648:{genre:"Mystery",color:"#fff",backgroundColor:"rgb(246, 188, 66)"},36:{genre:"History",color:"#fff",backgroundColor:"rgb(189, 200, 223)"},99:{genre:"Documentary",color:"#fff",backgroundColor:"rgb(151, 161, 201)"},37:{genre:"Western",color:"#fff",backgroundColor:"rgb(215, 215, 146)"},10752:{genre:"War",color:"#fff",backgroundColor:"rgb(183, 183, 59)"}},k=a(43),E=a.n(k),y=function(){return{type:"add_current_page"}},C=function(e){return function(t){var a="https://api.themoviedb.org/3/discover/movie?api_key=98d76f4e69ff80643c26ba75b21f9352&sort_by=popularity.desc&&include_adult=false&include_video=false&page="+e;E.a.get(a).then((function(a){for(var r=a.data.results,o=0;o<r.length;o++)r[o].isFavorite=!1,r[o].isBlock=!1,r[o].page=e,r[o].index=o;t({type:"load_next_page_from_db",data:r})})).catch((function(e){console.log(e)}))}},N=function(e,t){return{type:"remove_from_favorite",data:{page:e,index:t}}},_=(a(71),a(25)),B=a.n(_),w=a(4),D=a(1),F=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).state={top3MovieList:[],showLoadingBar:!1,index:0},e.componentDidMount=function(){if(0===e.props.movieList.length){e.setState({showLoadingBar:!0});var t=e.props,a=t.loadNextPageFromDB;(0,t.addCurrentPage)(),a(1)}},e.backgroundImageStyle=function(e){return console.log(h+e),{backgroundImage:"url("+h+e+")"}},e.getReleaseDate=function(){var t=e.state,a=t.top3MovieList[t.index].release_date.split("-");return f[a[1]]+" "+g[a[2]]+", "+a[0]},e.getRateStar=function(){for(var t=e.state,a=t.top3MovieList,r=t.index,o=Math.round(a[r].vote_average),n=parseInt(o/2),l=o-n,i=0,c=[];i<n;i++)c.push(D.l);return l>0&&c.push(D.m),c},e.handleArrowLeftClick=function(){var t=e.state.index;t=t-1===-1?2:t-1,e.setState({index:t})},e.handleArrowRightClick=function(){var t=e.state.index;t=t+1===3?0:t+1,e.setState({index:t})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state,t=e.top3MovieList,a=e.index,r=e.showLoadingBar;return o.a.createElement("div",{className:"home-item-wrapper"},o.a.createElement("h1",null,"Top 3 Popular Movies"),o.a.createElement("div",{className:"loading-bar",style:{display:r?"block":"none"}},o.a.createElement("img",{src:B.a,alt:"wrong url"})),o.a.createElement("div",{className:"home-item",style:{display:r?"none":"flex"}},o.a.createElement("div",{className:"icon-home-arrow icon-arrow-left",onClick:this.handleArrowLeftClick},o.a.createElement(w.a,{icon:D.g})),o.a.createElement("div",{className:"icon-home-arrow icon-arrow-right",onClick:this.handleArrowRightClick},o.a.createElement(w.a,{icon:D.h})),o.a.createElement("div",{className:"item-info"},o.a.createElement("div",{className:"item-intro"},o.a.createElement("div",{className:"home-item-title"},o.a.createElement(w.a,{className:"icon-crown",icon:D.i}),o.a.createElement("h2",null,"Rank ",a+1)),o.a.createElement("h3",null,t[a]?t[a].title:""),o.a.createElement("h4",null,o.a.createElement("span",null,"Release Date: "),t[a]?this.getReleaseDate():""),o.a.createElement("h5",null,o.a.createElement("span",null,"Rate: "),"\xa0",t[a]?this.getRateStar().map((function(e,t){return o.a.createElement(w.a,{key:t,className:"icon-star",icon:e})})):""),o.a.createElement("p",null,o.a.createElement("span",null,"Overview: "),t[a]?t[a].overview:"")),o.a.createElement("div",{className:"item-backdrop"},o.a.createElement("img",{src:t[a]?h+t[a].backdrop_path:"",alt:"no poster path"}))),o.a.createElement("div",{className:"item-poster"},o.a.createElement("img",{src:t[a]?h+t[a].poster_path:"",alt:"no poster path"}))))}}]),a}(o.a.Component);F.getDerivedStateFromProps=function(e,t){if(t.top3MovieList.length>0)return null;var a=e.movieList;return a.length>0?{top3MovieList:a[0].slice(0,3),showLoadingBar:!1}:null};var M=Object(d.b)((function(e){return{movieList:e.movieListReducer}}),{loadNextPageFromDB:C,addCurrentPage:y})(F),O=a(17),L=(a(74),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).handleButtonFavoriteClick=function(){var t=e.props,a=t.movieItem,r=t.addToFavorite,o=t.removeFromFavorite;a.isFavorite?o(a.page,a.index):r(a.page,a.index)},e.handleButtonBlockClick=function(){var t=e.props,a=t.movieItem,r=t.addToBlock,o=t.removeMovieItemFromState;r(a.page,a.index),o(a.id)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.movieItem;return o.a.createElement("li",{className:"movie-item"},o.a.createElement("img",{src:h+e.poster_path,alt:"No url for this movie",title:e.title+"("+e.release_date+")"}),o.a.createElement("div",{className:"movie-item-wrapper"},o.a.createElement("h3",null,o.a.createElement(w.a,{className:e.isFavorite?"icon-heart-blue":"icon-heart-grey",icon:D.j}),o.a.createElement("span",null,e.title)),o.a.createElement("h4",null,"Release Date:",o.a.createElement("span",null,e.release_date)),o.a.createElement("h4",null,"Popularity:",o.a.createElement("span",null,Math.round(e.popularity))),o.a.createElement("h4",null,"Average Score:",o.a.createElement("span",null,e.vote_average)),o.a.createElement("h4",null,"Vote Count:",o.a.createElement("span",null,e.vote_count)),o.a.createElement("p",null,e.overview)),o.a.createElement("div",{className:"movie-item-button"},o.a.createElement("button",{onClick:this.handleButtonFavoriteClick},e.isFavorite?"UnFavorite":"Favorite"),o.a.createElement("button",{onClick:this.handleButtonBlockClick},"Block")))}}]),a}(r.Component)),P=(a(75),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).state={totalPage:e.props.movieList.length,currentPageMovieList:[],showLoadingBar:!1,sortType:"Popularity",showSortType:!1},e.componentDidMount=function(){var t=e.props.movieList;if(0===t.length){e.setState({showLoadingBar:!0});var a=e.props,r=a.loadNextPageFromDB,o=a.addCurrentPage;r(1),o()}else{var n=e.props.currentPage;e.setState({currentPageMovieList:t[n-1].filter((function(e){return!e.isBlock}))})}},e.handleButtonNextClick=function(){var t=e.props,a=t.currentPage,r=t.addCurrentPage,o=e.props.movieList.length,n=a+1;if(r(),n<=o){var l=e.props.movieList;e.setState({currentPageMovieList:l[n-1].filter((function(e){return!e.isBlock}))})}else{e.setState({showLoadingBar:!0}),(0,e.props.loadNextPageFromDB)(n)}},e.handleButtonPrevClick=function(){var t=e.props,a=t.currentPage,r=t.deductCurrentPage,o=t.movieList;if(1!==a){r();var n=a-1;e.setState({currentPageMovieList:o[n-1].filter((function(e){return!e.isBlock}))})}},e.handleButtonDescClick=function(){var t=Object(O.a)(e.state.currentPageMovieList),a=e.state.sortType;"Popularity"===a?t.sort(e.sortPopularityDesc):"Release Date"===a?t.sort(e.sortReleaseDateDesc):"Average Score"===a?t.sort(e.sortAverageScoreDesc):"Vote Count"===a&&t.sort(e.sortVoteCountDesc),e.setState({currentPageMovieList:t})},e.handleButtonAscClick=function(){var t=Object(O.a)(e.state.currentPageMovieList),a=e.state.sortType;"Popularity"===a?t.sort(e.sortPopularityAsc):"Release Date"===a?t.sort(e.sortReleaseDateAsc):"Average Score"===a?t.sort(e.sortAverageScoreAsc):"Vote Count"===a&&t.sort(e.sortVoteCountAsc),e.setState({currentPageMovieList:t})},e.sortPopularityAsc=function(e,t){return e.popularity-t.popularity},e.sortPopularityDesc=function(e,t){return t.popularity-e.popularity},e.sortReleaseDateAsc=function(e,t){return Date.parse(e.release_date)-Date.parse(t.release_date)},e.sortReleaseDateDesc=function(e,t){return Date.parse(t.release_date)-Date.parse(e.release_date)},e.sortAverageScoreAsc=function(e,t){return e.vote_average-t.vote_average},e.sortAverageScoreDesc=function(e,t){return t.vote_average-e.vote_average},e.sortVoteCountAsc=function(e,t){return e.vote_count-t.vote_count},e.sortVoteCountDesc=function(e,t){return t.vote_count-e.vote_count},e.removeMovieItemFromState=function(t){e.setState({currentPageMovieList:e.state.currentPageMovieList.filter((function(e){return e.id!==t}))})},e.handleLiClick=function(t){var a=t.target.innerText,r=e.state.showSortType;e.setState({sortType:a,showSortType:!r})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.currentPage,r=t.addToFavorite,n=t.removeFromFavorite,l=t.addToBlock,i=this.state,c=i.currentPageMovieList,s=i.showLoadingBar,m=i.sortType,u=i.showSortType;return o.a.createElement("div",null,o.a.createElement("div",{className:"nav-bar"},o.a.createElement("h1",null,"Popular movies to discover."),o.a.createElement("div",{className:"nav-sort"},o.a.createElement(w.a,{onClick:this.handleButtonDescClick,className:"icon-arrow",icon:D.c}),o.a.createElement("ul",null,o.a.createElement("li",{onClick:this.handleLiClick},m),o.a.createElement("li",{onClick:this.handleLiClick,style:{display:u&&"Popularity"!==m?"block":"none"}},"Popularity"),o.a.createElement("li",{onClick:this.handleLiClick,style:{display:u&&"Release Date"!==m?"block":"none"}},"Release Date"),o.a.createElement("li",{onClick:this.handleLiClick,style:{display:u&&"Average Score"!==m?"block":"none"}},"Average Score"),o.a.createElement("li",{onClick:this.handleLiClick,style:{display:u&&"Vote Count"!==m?"block":"none"}},"Vote Count")),o.a.createElement(w.a,{onClick:this.handleButtonAscClick,className:"icon-arrow",icon:D.f})),o.a.createElement("div",{className:"nav-page",style:{display:u?"none":"flex"}},o.a.createElement(w.a,{onClick:this.handleButtonPrevClick,className:"icon-arrow",icon:D.d}),o.a.createElement("div",{className:"nav-page-title"},"Page ",o.a.createElement("span",null,a),"/500 of 10000 Results"),o.a.createElement(w.a,{onClick:this.handleButtonNextClick,className:"icon-arrow",icon:D.e}))),o.a.createElement("div",{className:"loading-bar",style:{display:s?"block":"none"}},o.a.createElement("img",{src:B.a,alt:"wrong url"})),o.a.createElement("ul",{className:"movie-list",style:{display:s?"none":"flex"}},c&&c.map((function(t){return o.a.createElement(L,{key:t.id,movieItem:t,removeMovieItemFromState:e.removeMovieItemFromState,addToFavorite:r,removeFromFavorite:n,addToBlock:l})}))))}}]),a}(o.a.Component));P.getDerivedStateFromProps=function(e,t){var a=t.totalPage,r=e.movieList.length;return a<r?{currentPage:r,totalPage:r,currentPageMovieList:e.movieList[r-1],showLoadingBar:!1}:null};var j=Object(d.b)((function(e){return{movieList:e.movieListReducer,currentPage:e.currentPageReducer}}),{loadNextPageFromDB:C,addToFavorite:function(e,t){return{type:"add_to_favorite",data:{page:e,index:t}}},removeFromFavorite:N,addToBlock:function(e,t){return{type:"add_to_block",data:{page:e,index:t}}},addCurrentPage:y,deductCurrentPage:function(){return{type:"deduct_current_page"}}})(P),S=a(19),x=(a(76),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).getReleaseDate=function(){var t=e.props.movieItem.release_date.split("-");return f[t[1]]+" "+g[t[2]]+", "+t[0]},e.handleButtonUnFavoriteOrUnBlockClick=function(){var t=e.props,a=t.movieItem;(0,t.removeFromFavoriteOrBlock)(a.page,a.index)},e.handleButtonDetailClick=function(){var t=e.props;(0,t.getMovieItem)(t.movieItem)},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props,t=e.movieItem,a=e.forFavoriteTab;return o.a.createElement("li",{className:"movie-item"},o.a.createElement("div",{className:"simple-movie-item"},o.a.createElement("div",{className:"movie-item-title"},o.a.createElement("h3",null,a?o.a.createElement(w.a,{className:"icon-heart-blue",icon:D.j}):o.a.createElement(w.a,{className:"icon-heart-blue",icon:D.a}),"\xa0 ",t.title),o.a.createElement("h4",null,this.getReleaseDate())),o.a.createElement("img",{src:h+t.poster_path,alt:"no url"}),o.a.createElement("div",{className:"movie-item-button"},o.a.createElement("button",{onClick:this.handleButtonUnFavoriteOrUnBlockClick},a?"UnFavorite":"UnBlock"),o.a.createElement("button",{onClick:this.handleButtonDetailClick},"Detail"))))}}]),a}(o.a.Component)),I=(a(77),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).getReleaseDate=function(){var t=e.props.movieItem.release_date.split("-");return f[t[1]]+" "+g[t[2]]+", "+t[0]},e.getRateStar=function(){for(var t=e.props.movieItem,a=Math.round(t.vote_average),r=parseInt(a/2),o=a-r,n=0,l=[];n<r;n++)l.push(D.l);return o>0&&l.push(D.m),l},e.handleCloseClick=function(){e.props.closeMovieDetail()},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.movieItem;return o.a.createElement("div",{className:"movie-detail-wrapper"},o.a.createElement("div",{className:"icon-close-wrapper",onClick:this.handleCloseClick},o.a.createElement(w.a,{className:"icon-close",icon:D.n})),o.a.createElement("div",{className:"item-info"},o.a.createElement("div",{className:"item-intro"},o.a.createElement("h3",null,e.title),o.a.createElement("ul",{className:"movie-detail-genre"},e.genre_ids?e.genre_ids.map((function(e){return o.a.createElement("li",{key:e,style:{backgroundColor:b[e].backgroundColor}},b[e].genre)})):""),o.a.createElement("h4",null,o.a.createElement("span",null,"Release Date:"),"\xa0",e.release_date?this.getReleaseDate():""),o.a.createElement("h5",null,o.a.createElement("span",null,"Rate:"),"\xa0",e.vote_average?this.getRateStar().map((function(e,t){return o.a.createElement(w.a,{key:t,className:"icon-star",icon:e})})):""),o.a.createElement("p",null,o.a.createElement("span",null,"Overview: "),e.overview)),o.a.createElement("div",{className:"item-backdrop"},e.backdrop_path?o.a.createElement("img",{src:h+e.backdrop_path,alt:"no backdrop path"}):"")),o.a.createElement("div",{className:"item-poster"},e.poster_path?o.a.createElement("img",{src:h+e.poster_path,alt:"no poster path"}):""))}}]),a}(o.a.Component)),A=(a(78),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).state={showMovieDetail:!1,movieItem:{}},e.getMovieItem=function(t){e.setState({showMovieDetail:!0,movieItem:t})},e.closeMovieDetail=function(){e.setState({showMovieDetail:!1})},e}return Object(c.a)(a,[{key:"render",value:function(){var e,t=this,a=this.props,r=a.movieList,n=a.removeFromFavorite,l=[],i=Object(S.a)(r);try{for(i.s();!(e=i.n()).done;){var c,s=e.value,m=Object(S.a)(s);try{for(m.s();!(c=m.n()).done;){var u=c.value;u.isFavorite&&l.push(u)}}catch(f){m.e(f)}finally{m.f()}}}catch(f){i.e(f)}finally{i.f()}var v=this.state,d=v.showMovieDetail,h=v.movieItem;return o.a.createElement("div",{className:"tab-wrapper"},o.a.createElement("h1",null,"Favorite Movie List"),o.a.createElement("div",{style:{display:d?p:"block"},className:"tab-container"},o.a.createElement("h2",{style:{display:0===l.length?"block":p}},"No favorite movie."),o.a.createElement("ul",{className:"movie-list",style:{display:0===l.length?p:"flex"}},l.map((function(e){return o.a.createElement(x,{key:e.id,movieItem:e,forFavoriteTab:!0,removeFromFavoriteOrBlock:n,getMovieItem:t.getMovieItem})})))),o.a.createElement("div",{style:{display:d?"block":p}},o.a.createElement(I,{movieItem:h,closeMovieDetail:this.closeMovieDetail})))}}]),a}(o.a.Component)),R=Object(d.b)((function(e){return{movieList:e.movieListReducer}}),{removeFromFavorite:N})(A),T=(a(79),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).state={showMovieDetail:!1,movieItem:{}},e.getMovieItem=function(t){e.setState({showMovieDetail:!0,movieItem:t})},e.closeMovieDetail=function(){e.setState({showMovieDetail:!1})},e}return Object(c.a)(a,[{key:"render",value:function(){var e,t=this,a=this.props,r=a.movieList,n=a.removeFromBlock,l=[],i=Object(S.a)(r);try{for(i.s();!(e=i.n()).done;){var c,s=e.value,m=Object(S.a)(s);try{for(m.s();!(c=m.n()).done;){var u=c.value;u.isBlock&&l.push(u)}}catch(f){m.e(f)}finally{m.f()}}}catch(f){i.e(f)}finally{i.f()}var v=this.state,d=v.showMovieDetail,h=v.movieItem;return o.a.createElement("div",{className:"tab-wrapper"},o.a.createElement("h1",null,"Block Movie List"),o.a.createElement("div",{style:{display:d?p:"block"},className:"tab-container"},o.a.createElement("h2",{style:{display:0===l.length?"block":p}},"No block movie."),o.a.createElement("ul",{className:"movie-list",style:{display:0===l.length?p:"flex"}},l.map((function(e){return o.a.createElement(x,{key:e.id,movieItem:e,forFavoriteTab:!1,removeFromFavoriteOrBlock:n,getMovieItem:t.getMovieItem})})))),o.a.createElement("div",{style:{display:d?"block":p}},o.a.createElement(I,{movieItem:h,closeMovieDetail:this.closeMovieDetail})))}}]),a}(o.a.Component)),V=Object(d.b)((function(e){return{movieList:e.movieListReducer}}),{removeFromBlock:function(e,t){return{type:"remove_from_block",data:{page:e,index:t}}}})(T),U=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).state={sideBarTranslateX:"-100%"},e.handleIconBarsClick=function(){var t=e.state.sideBarTranslateX;e.setState({sideBarTranslateX:"-100%"===t?"0":"-100%"})},e.handleSideBarClick=function(){e.setState({sideBarTranslateX:"-100%"})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.sideBarTranslateX;return o.a.createElement(u.a,null,o.a.createElement("div",{className:"side-bar-wrapper",style:{transform:"translateX(".concat(e,")")},onClick:this.handleSideBarClick},o.a.createElement("div",{className:"side-bar"},o.a.createElement("div",{className:"side-bar-container"},o.a.createElement(u.b,{to:"/home",className:"side-bar-link"},o.a.createElement(w.a,{className:"icon-link",icon:D.k}),o.a.createElement("span",null,"Home Page")),o.a.createElement(u.b,{to:"/movie",className:"side-bar-link"},o.a.createElement(w.a,{className:"icon-link",icon:D.o}),o.a.createElement("span",null,"Movie Tab")),o.a.createElement(u.b,{to:"/favorite",className:"side-bar-link"},o.a.createElement(w.a,{className:"icon-link",icon:D.j}),o.a.createElement("span",null,"Favorite Tab")),o.a.createElement(u.b,{to:"/block",className:"side-bar-link"},o.a.createElement(w.a,{className:"icon-link",icon:D.a}),o.a.createElement("span",null,"Block Tab"))))),o.a.createElement("div",{className:"top-bar"},o.a.createElement("div",{className:"top-bar-title"},o.a.createElement(w.a,{className:"icon-bars",icon:D.b,onClick:this.handleIconBarsClick}),o.a.createElement("h1",null,"What's Popular")),o.a.createElement("div",{className:"top-bar-right"},o.a.createElement(u.b,{to:"/home",className:"top-bar-link",activeClassName:"active-link"},"Home"),o.a.createElement(u.b,{to:"/movie",className:"top-bar-link",activeClassName:"active-link"},"Movie"),o.a.createElement(u.b,{to:"/favorite",className:"top-bar-link",activeClassName:"active-link"},"Favorite"),o.a.createElement(u.b,{to:"/block",className:"top-bar-link",activeClassName:"active-link"},"Block"))),o.a.createElement("div",{className:"page"},o.a.createElement(v.d,null,o.a.createElement(v.b,{path:"/home",component:M}),o.a.createElement(v.b,{path:"/movie",component:j}),o.a.createElement(v.b,{path:"/favorite",component:R}),o.a.createElement(v.b,{path:"/block",component:V}),o.a.createElement(v.a,{to:"/home"}))))}}]),a}(o.a.Component),X=a(18),J=a(44);var H=Object(X.c)({movieListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"load_next_page_from_db":return[].concat(Object(O.a)(e),[t.data]);case"add_to_favorite":var a=Object(O.a)(e);return a[t.data.page-1][t.data.index].isFavorite=!0,a[t.data.page-1][t.data.index].isBlock=!1,a;case"remove_from_favorite":var r=Object(O.a)(e);return r[t.data.page-1][t.data.index].isFavorite=!1,r;case"add_to_block":var o=Object(O.a)(e);return o[t.data.page-1][t.data.index].isBlock=!0,o[t.data.page-1][t.data.index].isFavorite=!1,o;case"remove_from_block":var n=Object(O.a)(e);return n[t.data.page-1][t.data.index].isBlock=!1,n;default:return e}},currentPageReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add_current_page":return e+1;case"deduct_current_page":return e-1;default:return e}}}),W=Object(X.d)(H,Object(X.a)(J.a));l.a.render(o.a.createElement(d.a,{store:W},o.a.createElement(U,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.3a227eda.chunk.js.map