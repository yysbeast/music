(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20477bcf"],{1276:function(t,e,n){"use strict";var r=n("d784"),i=n("44e7"),a=n("825a"),o=n("1d80"),s=n("4840"),c=n("8aa5"),l=n("50c4"),u=n("14c3"),f=n("9263"),d=n("d039"),g=[].push,h=Math.min,v=4294967295,p=!d((function(){return!RegExp(v,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(o(this)),a=void 0===n?v:n>>>0;if(0===a)return[];if(void 0===t)return[r];if(!i(t))return e.call(r,t,a);var s,c,l,u=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,p=new RegExp(t.source,d+"g");while(s=f.call(p,r)){if(c=p.lastIndex,c>h&&(u.push(r.slice(h,s.index)),s.length>1&&s.index<r.length&&g.apply(u,s.slice(1)),l=s[0].length,h=c,u.length>=a))break;p.lastIndex===s.index&&p.lastIndex++}return h===r.length?!l&&p.test("")||u.push(""):u.push(r.slice(h)),u.length>a?u.slice(0,a):u}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var i=o(this),a=void 0==e?void 0:e[t];return void 0!==a?a.call(e,i,n):r.call(String(i),e,n)},function(t,i){var o=n(r,t,this,i,r!==e);if(o.done)return o.value;var f=a(t),d=String(this),g=s(f,RegExp),x=f.unicode,m=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(p?"y":"g"),y=new g(p?f:"^(?:"+f.source+")",m),b=void 0===i?v:i>>>0;if(0===b)return[];if(0===d.length)return null===u(y,d)?[d]:[];var w=0,$=0,S=[];while($<d.length){y.lastIndex=p?$:0;var I,E=u(y,p?d:d.slice($));if(null===E||(I=h(l(y.lastIndex+(p?0:$)),d.length))===w)$=c(d,$,x);else{if(S.push(d.slice(w,$)),S.length===b)return S;for(var k=1;k<=E.length-1;k++)if(S.push(E[k]),S.length===b)return S;$=w=I}}return S.push(d.slice(w)),S}]}),!p)},"139a":function(t,e,n){},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"44e7":function(t,e,n){var r=n("861d"),i=n("c6b6"),a=n("b622"),o=a("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),a=n("7b0b"),o=n("50c4"),s=n("a691"),c=n("1d80"),l=n("8aa5"),u=n("14c3"),f=Math.max,d=Math.min,g=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n){return[function(n,r){var i=c(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i,r):e.call(String(i),n,r)},function(t,a){var c=n(e,t,this,a);if(c.done)return c.value;var g=i(t),h=String(this),v="function"===typeof a;v||(a=String(a));var x=g.global;if(x){var m=g.unicode;g.lastIndex=0}var y=[];while(1){var b=u(g,h);if(null===b)break;if(y.push(b),!x)break;var w=String(b[0]);""===w&&(g.lastIndex=l(h,o(g.lastIndex),m))}for(var $="",S=0,I=0;I<y.length;I++){b=y[I];for(var E=String(b[0]),k=f(d(s(b.index),h.length),0),C=[],N=1;N<b.length;N++)C.push(p(b[N]));var T=b.groups;if(v){var R=[E].concat(C,k,h);void 0!==T&&R.push(T);var A=String(a.apply(void 0,R))}else A=r(E,h,k,C,T,a);k>=S&&($+=h.slice(S,k)+A,S=k+E.length)}return $+h.slice(S)}];function r(t,n,r,i,o,s){var c=r+t.length,l=i.length,u=v;return void 0!==o&&(o=a(o),u=h),e.call(s,u,(function(e,a){var s;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(c);case"<":s=o[a.slice(1,-1)];break;default:var u=+a;if(0===u)return e;if(u>l){var f=g(u/10);return 0===f?e:f<=l?void 0===i[f-1]?a.charAt(1):i[f-1]+a.charAt(1):e}s=i[u-1]}return void 0===s?"":s}))}}))},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),a=function(t){return function(e,n){var a,o,s=String(i(e)),c=r(n),l=s.length;return c<0||c>=l?t?"":void 0:(a=s.charCodeAt(c),a<55296||a>56319||c+1===l||(o=s.charCodeAt(c+1))<56320||o>57343?t?s.charAt(c):a:t?s.slice(c,c+2):o-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},"6fe5":function(t,e,n){var r=n("da84"),i=n("58a8").trim,a=n("5899"),o=r.parseFloat,s=1/o(a+"-0")!==-1/0;t.exports=s?function(t){var e=i(String(t)),n=o(e);return 0===n&&"-"==e.charAt(0)?-0:n}:o},"7c41":function(t,e,n){"use strict";var r=n("139a"),i=n.n(r);i.a},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=RegExp.prototype.exec,a=String.prototype.replace,o=i,s=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=void 0!==/()??/.exec("")[1],l=s||c;l&&(o=function(t){var e,n,o,l,u=this;return c&&(n=new RegExp("^"+u.source+"$(?!\\s)",r.call(u))),s&&(e=u.lastIndex),o=i.call(u,t),s&&o&&(u.lastIndex=u.global?o.index+o[0].length:e),c&&o&&o.length>1&&a.call(o[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)})),o}),t.exports=o},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},acd8:function(t,e,n){var r=n("23e7"),i=n("6fe5");r({global:!0,forced:parseFloat!=i},{parseFloat:i})},d2f4:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"songdetail"}},[n("van-nav-bar",{attrs:{title:t.title,"left-text":"首页","left-arrow":""},on:{"click-left":t.onClickLeft}}),n("div",{staticClass:"wrap"},[n("div",{ref:"ul",staticClass:"ul"},t._l(t.word,(function(e,r){return n("p",{key:r,ref:"p",refInFor:!0,staticClass:"p"},[t._v(t._s(e.words))])})),0)]),n("div",{staticClass:"progressbar",on:{click:t.click}},[n("van-progress",{attrs:{color:"#ee0a24",percentage:t.playtime,"show-pivot":!1}})],1),n("div",{staticClass:"bottom"},[n("i",{staticClass:"iconfont",on:{click:t.before}},[t._v("")]),n("i",{ref:"iconfont",staticClass:"iconfont",on:{click:t.play}},[t._v("")]),n("i",{staticClass:"iconfont",on:{click:t.next}},[t._v("")])])],1)},i=[],a=(n("c975"),n("b0c0"),n("a9e3"),n("acd8"),n("e25e"),n("ac1f"),n("5319"),n("1276"),{name:"songdetail",data:function(){return{word:[],songarr:[],i:"",title:"",playtime:0}},inject:["reload","playaudio"],methods:{getword:function(t){var e=this;this.axios.get("/lyric?id="+t).then((function(t){var n=t.data.lrc.lyric;e.songarr=n.split("\n");for(var r=0;r<e.songarr.length;r++){var i=e.songarr[r];e.songarr[r]=e.createobject(i)}e.word=e.songarr})).catch((function(t){e.$toast.fail("当前没有歌词")}))},createobject:function(t){var e=t.split("]"),n=e[0],r=e[1];n=n.replace("[","");var i=n.split(":"),a=i[0],o=i[1];return n=parseInt(60*a)+parseFloat(o),{time:n,words:r}},getindex:function(){for(var t=this.$store.state.audio.currentTime,e=this.songarr.length-1;e>0;e--){var n=this.songarr[e];if(t>=n.time)return e}return-1},setroll:function(){var t=this.getindex(),e=document.querySelector(".ul"),n=document.querySelector(".active");n&&(n.className=""),-1!==t&&(e.children[t].className="active");var r={ulheight:500,liheight:33},i=r.ulheight/2-r.liheight/2,a=i-t*r.liheight;a>0&&(a=0),e.style.marginTop=a+"px"},click:function(t){var e=document.getElementsByClassName("audio")[0],n=t.clientX;this.playtime=parseInt(n/375*100),e.currentTime=parseInt(this.playtime*this.$store.state.audio.maxTime/100),this.setroll()},play:function(t){var e=this,n=document.getElementsByClassName("audio")[0];if(null!==n)if(n.paused){var r=n.play();r&&r.then((function(){setTimeout((function(){t.target.innerHTML="&#xe68e;",e.$toast.success("开始播放")}),2e3)})).catch((function(t){console.log(t),e.$notify({type:"danger",message:"该资源无法加载,请选择别的歌曲"})}))}else n.pause(),t.target.innerHTML="&#xe612;",this.$toast.fail("暂停播放")},before:function(){var t=this,e=document.getElementsByClassName("audio")[0];e.pause();var n=JSON.parse(sessionStorage.getItem("current")),r=this.$store.state.songid.indexOf(n),i=JSON.parse(sessionStorage.getItem("song"));1==r?r=i.length-1:r-=1;var a=Number(this.$store.state.songid[r]);setTimeout((function(){t.getsongurl(a),t.getdetail(a),t.playaudio(a,i),t.getword(a),t.$store.state.showfooter=!1}),1e3)},next:function(){var t=this,e=document.getElementsByClassName("audio")[0];e.pause();var n=JSON.parse(sessionStorage.getItem("current")),r=this.$store.state.songid.indexOf(n),i=JSON.parse(sessionStorage.getItem("song"));r==i.length-1?r=0:r+=1;var a=Number(this.$store.state.songid[r]);setTimeout((function(){t.getsongurl(a),t.getdetail(a),t.playaudio(a,i),t.getword(a),t.$store.state.showfooter=!1}),1e3)},getsongurl:function(t){var e=this;this.axios.get("/song/url?id="+t).then((function(t){e.$store.state.src=t.data.data[0].url}))},onClickLeft:function(){this.$router.push("/sheet")},getdetail:function(t){var e=this;this.axios.get("/song/detail?ids="+t).then((function(t){e.title=t.data.songs[0].name}))}},mounted:function(){var t=this;this.getword(this.$route.params.id),this.getdetail(this.$route.params.id);var e=document.getElementsByClassName("audio")[0];0==e.paused?this.$refs.iconfont.innerHTML="&#xe68e;":this.$refs.iconfont.innerHTML="&#xe612;";var n=setInterval((function(){t.setroll(),t.playtime=t.$store.state.playtime}),1600);this.$once("hook:beforeDestroy",(function(){clearInterval(n)}))}}),o=a,s=(n("7c41"),n("2877")),c=Object(s["a"])(o,r,i,!1,null,"cc945c08",null);e["default"]=c.exports},d784:function(t,e,n){"use strict";var r=n("9112"),i=n("6eeb"),a=n("d039"),o=n("b622"),s=n("9263"),c=o("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var d=o(t),g=!a((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),h=g&&!a((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[c]=function(){return n}),n[d](""),!e}));if(!g||!h||"replace"===t&&!l||"split"===t&&!u){var v=/./[d],p=n(d,""[t],(function(t,e,n,r,i){return e.exec===s?g&&!i?{done:!0,value:v.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}})),x=p[0],m=p[1];i(String.prototype,t,x),i(RegExp.prototype,d,2==e?function(t,e){return m.call(t,this,e)}:function(t){return m.call(t,this)}),f&&r(RegExp.prototype[d],"sham",!0)}}}}]);
//# sourceMappingURL=chunk-20477bcf.d23965d6.js.map