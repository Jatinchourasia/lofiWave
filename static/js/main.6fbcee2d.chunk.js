(this.webpackJsonplofiWave=this.webpackJsonplofiWave||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(12),i=n.n(r),o=n(4),s=n.n(o),u=n(5),l=n(3),d=n(6),p=n(9),b=n(8),j=n(0),h=function(e){var t=e.audioRef,n=e.setSongInfo,c=e.currentSong,r=e.isPlaying,i=e.setIsPlaying,o=e.songs,d=e.setCurrentSong,h=e.setSongs,f=e.songInfo;Object(a.useEffect)((function(){var e=o.map((function(e){return e.id===c.id?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})}));h(e)}),[c]);var g=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},m=function(){var e=Object(u.a)(s.a.mark((function e(n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=o.findIndex((function(e){return e.id===c.id})),"skip-forward"!==n){e.next=4;break}return e.next=4,d(o[(a+1)%o.length]);case 4:if("skip-back"!==n){e.next=12;break}if((a-1)%o.length!==-1){e.next=10;break}return e.next=8,d(o[o.length-1]);case 8:return r&&t.current.play(),e.abrupt("return");case 10:return e.next=12,d(o[(a-1)%o.length]);case 12:r&&t.current.play();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={transform:"translateX(".concat(f.animationPercentage,"%)")};return Object(j.jsxs)("div",{className:"player",children:[Object(j.jsxs)("div",{className:"time-control",children:[Object(j.jsx)("p",{children:g(f.currentTime)}),Object(j.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(c.color[0],",").concat(c.color[1],")")},className:"track",children:[Object(j.jsx)("input",{onChange:function(e){t.current.currentTime=e.target.value,n(Object(l.a)(Object(l.a)({},f),{},{currentTime:e.target.value}))},min:0,max:f.duration||0,value:f.currentTime,type:"range"}),Object(j.jsx)("div",{style:v,className:"animate-track"})]}),Object(j.jsx)("p",{children:f.duration?g(f.duration):"0:00"})]}),Object(j.jsxs)("div",{className:"play-control",children:[Object(j.jsx)(p.a,{onClick:function(){return m("skip-back")},className:"skip-back",size:"2x",icon:b.a}),Object(j.jsx)(p.a,{onClick:function(){r?(t.current.pause(),i(!r)):(t.current.play(),i(!r))},className:"play",size:"2x",icon:r?b.c:b.d}),Object(j.jsx)(p.a,{onClick:function(){return m("skip-forward")},className:"skip-forward",size:"2x",icon:b.b})]})]})},f=function(e){var t=e.currentSong;return Object(j.jsxs)("div",{className:"song-container",children:[Object(j.jsx)("img",{src:t.cover,alt:t.name}),Object(j.jsxs)("h2",{children:[t.name," "]}),Object(j.jsx)("h3",{children:t.artist})]})},g=function(e){var t=e.song,n=e.songs,a=e.setCurrentSong,c=e.audioRef,r=e.isPlaying,i=e.id,o=e.setSongs,d=function(){var e=Object(u.a)(s.a.mark((function e(){var u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(t);case 2:u=n.map((function(e){return e.id===i?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})})),o(u),r&&c.current.play();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{onClick:d,className:"library-song ".concat(t.active?"selected":""),children:[Object(j.jsx)("img",{src:t.cover,alt:t.name}),Object(j.jsxs)("div",{className:"song-description",children:[Object(j.jsxs)("h2",{children:[t.name," "]}),Object(j.jsx)("h3",{children:t.artist})]})]})},m=function(e){var t=e.libraryStatus,n=e.setSongs,a=e.songs,c=e.setCurrentSong,r=e.audioRef,i=e.isPlaying;return Object(j.jsxs)("div",{className:"library ".concat(t?"active-library":""),children:[Object(j.jsx)("h2",{children:"Library"}),Object(j.jsx)("div",{className:"library-songs",children:a.map((function(e){return Object(j.jsx)(g,{songs:a,song:e,setCurrentSong:c,id:e.id,audioRef:r,isPlaying:i,setSongs:n},e.id)}))})]})},v=function(e){var t=e.setLibraryStatus,n=e.libraryStatus;return Object(j.jsxs)("nav",{children:[Object(j.jsx)("h1",{children:"Waves"}),Object(j.jsx)("button",{onClick:function(){return t(!n)},children:"Library"})]})},O=(n(24),n(27));var x=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(O.a)(),active:!1},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(O.a)(),active:!0},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(O.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(O.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(O.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(O.a)(),active:!1},{name:"Cap's Caf\xe9",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10077",color:["#205950","#2ab3bf"],id:Object(O.a)(),active:!1}]},y=function(){var e=Object(a.useState)({currentTime:0,duration:0,animationPercentage:0}),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useRef)(null),i=Object(a.useState)(x()),o=Object(d.a)(i,2),p=o[0],b=o[1],g=Object(a.useState)(p[5]),O=Object(d.a)(g,2),y=O[0],S=O[1],k=Object(a.useState)(!1),C=Object(d.a)(k,2),w=C[0],N=C[1],P=Object(a.useState)(!1),A=Object(d.a)(P,2),I=A[0],M=A[1],T=function(e){var t=e.target.currentTime,a=e.target.duration,r=Math.round(t),i=Math.round(a),o=Math.round(r/i*100);console.log(o),c(Object(l.a)(Object(l.a)({},n),{},{currentTime:t,duration:a,animationPercentage:o}))},R=function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.findIndex((function(e){return e.id===y.id})),e.next=3,S(p[(t+1)%p.length]);case 3:w&&r.current.play();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(v,{libraryStatus:I,setLibraryStatus:M}),Object(j.jsx)(f,{currentSong:y}),Object(j.jsx)(h,{setSongInfo:c,songInfo:n,audioRef:r,setIsPlaying:N,isPlaying:w,currentSong:y,songs:p,setCurrentSong:S,setSongs:b}),Object(j.jsx)(m,{libraryStatus:I,audioRef:r,songInfo:n,songs:p,isPlaying:w,setCurrentSong:S,setSongs:b}),Object(j.jsx)("audio",{onLoadedMetadata:T,onTimeUpdate:T,ref:r,src:y.audio,onEnded:R})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),S()}},[[25,1,2]]]);
//# sourceMappingURL=main.6fbcee2d.chunk.js.map