(this.webpackJsonplofiWave=this.webpackJsonplofiWave||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var a=c(2),o=c.n(a),i=c(10),n=c.n(i),r=c(3),s=c(6),l=c(7),p=c(5),d=c(1),h=function(e){var t=e.currentSong,c=e.isPlaying,o=e.setIsPlaying,i=Object(a.useRef)(null),n=function(e){var t=e.target.currentTime,c=e.target.duration;m(Object(s.a)(Object(s.a)({},j),{},{currentTime:t,duration:c}))},h=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},u=Object(a.useState)({currentTime:0,duration:0}),b=Object(r.a)(u,2),j=b[0],m=b[1];return Object(d.jsxs)("div",{className:"player",children:[Object(d.jsxs)("div",{className:"time-control",children:[Object(d.jsx)("p",{children:h(j.currentTime)}),Object(d.jsx)("input",{onChange:function(e){i.current.currentTime=e.target.value,m(Object(s.a)(Object(s.a)({},j),{},{currentTime:e.target.value}))},min:0,max:j.duration,value:j.currentTime,type:"range"}),Object(d.jsx)("p",{children:h(j.duration)})]}),Object(d.jsxs)("div",{className:"play-control",children:[Object(d.jsx)(l.a,{className:"skip-back",size:"2x",icon:p.a}),Object(d.jsx)(l.a,{onClick:function(){c?(i.current.pause(),o(!c)):(i.current.play(),o(!c))},className:"play",size:"2x",icon:c?p.c:p.d}),Object(d.jsx)(l.a,{className:"skip-forward",size:"2x",icon:p.b})]}),Object(d.jsx)("audio",{onLoadedMetadata:n,onTimeUpdate:n,ref:i,src:t.audio})]})},u=function(e){var t=e.currentSong;t.cover;return Object(d.jsxs)("div",{className:"song-container",children:[Object(d.jsx)("img",{src:t.cover,alt:t.name}),Object(d.jsxs)("h2",{children:[t.name," "]}),Object(d.jsx)("h3",{children:t.artist})]})},b=(c(21),c(24));var j=function(){return[{name:"Beaver Creek",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(b.a)(),active:!0},{name:"Daylight",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#EF8EA9","#ab417f"],id:Object(b.a)(),active:!0},{name:"Keep Going",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#CD607D","#c94043"],id:Object(b.a)(),active:!1},{name:"Nightfall",cover:"https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#EF8EA9","#ab417f"],id:Object(b.a)(),active:!1},{name:"Reflection",cover:"https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#CD607D","#c94043"],id:Object(b.a)(),active:!1},{name:"Under the City Stars",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(b.a)(),active:!1},{name:"Cap's Caf\xe9",cover:"https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10077",color:["#205950","#2ab3bf"],id:Object(b.a)(),active:!1}]},m=function(){var e=Object(a.useState)(j()),t=Object(r.a)(e,2),c=t[0],o=(t[1],Object(a.useState)(c[5])),i=Object(r.a)(o,2),n=i[0],s=(i[1],Object(a.useState)(!1)),l=Object(r.a)(s,2),p=l[0],b=l[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(u,{currentSong:n}),Object(d.jsx)(h,{setIsPlaying:b,isPlaying:p,currentSong:n})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,25)).then((function(t){var c=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),a(e),o(e),i(e),n(e)}))};n.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),f()}},[[22,1,2]]]);
//# sourceMappingURL=main.261a7829.chunk.js.map