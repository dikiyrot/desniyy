(this.webpackJsonpdesniy=this.webpackJsonpdesniy||[]).push([[0],{18:function(n,e,t){n.exports={row:"Counter_row__ue1UH",value:"Counter_value__3NcEL",button:"Counter_button__31OGC",textbox:"Counter_textbox__16xi1",asyncButton:"Counter_asyncButton__2TvM5 Counter_button__31OGC"}},51:function(n,e,t){},57:function(n,e,t){},81:function(n,e,t){"use strict";t.r(e);var i=t(2),r=t.n(i),s=t(29),a=t.n(s),c=(t(51),t(46),t(22)),o=t(34),p=t.n(o),d=t(40),l=t(23);function x(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(e){return setTimeout((function(){return e({data:n})}),500)}))}var b=Object(l.b)("counter/fetchCount",function(){var n=Object(d.a)(p.a.mark((function n(e){var t;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,x(e);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),j=Object(l.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(n){n.value+=1},decrement:function(n){n.value-=1},incrementByAmount:function(n,e){n.value+=e.payload}},extraReducers:function(n){n.addCase(b.pending,(function(n){n.status="loading"})).addCase(b.fulfilled,(function(n,e){n.status="idle",n.value+=e.payload}))}}),g=j.actions,h=(g.increment,g.decrement,g.incrementByAmount,j.reducer),m=(t(18),t(3));t(57);var u,O,f,v,w,y,E,C,A,F,k,B,D,_,S,z,R,T,I,L,H,M,W,G,J,P,N,Y,K,X,$=t(6),U=t(30),V=t(7),q=t(27),Q=q.a.initializeApp({apiKey:"AIzaSyDLLFAN3443-Eksy32-YWx0e6ph2BHKha0",authDomain:"desniy-60b42.firebaseapp.com",projectId:"desniy-60b42",storageBucket:"desniy-60b42.appspot.com",messagingSenderId:"540274830206",appId:"1:540274830206:web:1cd5bf1c58c8a99a4da12f"}).firestore(),Z=(q.a.auth(),new q.a.auth.GoogleAuthProvider,q.a.storage(),Q),nn=V.a.nav(u||(u=Object($.a)(["\n   height: 70px;\n   background-color: #090b13;\n   display: flex;\n   align-items: center;\n   padding: 0 36px;\n   overflow-x: hidden;\n"]))),en=V.a.img(O||(O=Object($.a)(["\n   width: 80px;\n"]))),tn=V.a.div(f||(f=Object($.a)(["\n   display: flex;\n   flex: 1 1 auto;\n   margin-left: 25px;\n   align-items: center;\n   a {\n      display: flex;\n      align-items: center;\n      padding: 0 12px;\n      cursor: pointer;\n      img {\n         height: 20px;\n      }\n      span {\n         font-size: 13px;\n         letter-spacing: 1.42px;\n         position: relative;\n\n         &::after {\n            content: '';\n            height: 1px;\n            background-color: #fff;\n            position: absolute;\n            left: 0;\n            right: 0;\n            bottom: -6px;\n            opacity: 0;\n            transition: all 0.25s ease 0s;\n            transform: scaleX(0.5);\n         }\n      }\n      &:hover {\n         span {\n            &::after {\n               opacity: 1;\n               transform: scaleX(1);\n            }\n         }\n      }\n   }\n"]))),rn=V.a.img(v||(v=Object($.a)(["\n   width: 48px;\n   height: 48px;\n   border-radius: 50%;\n   cursor: pointer;\n"]))),sn=function(){return Object(m.jsxs)(nn,{children:[Object(m.jsx)(U.b,{to:"/",children:Object(m.jsx)(en,{src:"/images/logo.svg"})}),Object(m.jsxs)(tn,{children:[Object(m.jsxs)("a",{children:[Object(m.jsx)("img",{src:"/images/home-icon.svg"}),Object(m.jsx)("span",{children:"HOME"})]}),Object(m.jsxs)("a",{children:[Object(m.jsx)("img",{src:"/images/search-icon.svg"}),Object(m.jsx)("span",{children:"SEARCH"})]}),Object(m.jsxs)("a",{children:[Object(m.jsx)("img",{src:"/images/watchlist-icon.svg"}),Object(m.jsx)("span",{children:"WATCHLIST"})]}),Object(m.jsxs)("a",{children:[Object(m.jsx)("img",{src:"/images/watchlist-icon.svg"}),Object(m.jsx)("span",{children:"WATCHLIST"})]}),Object(m.jsxs)("a",{children:[Object(m.jsx)("img",{src:"/images/movie-icon.svg"}),Object(m.jsx)("span",{children:"MOVIE"})]}),Object(m.jsxs)("a",{children:[Object(m.jsx)("img",{src:"/images/series-icon.svg"}),Object(m.jsx)("span",{children:"SERIES"})]})]}),Object(m.jsx)(rn,{src:"https://w7.pngwing.com/pngs/869/276/png-transparent-smiley-emoticon-smiley-miscellaneous-desktop-wallpaper-world-smile-day-thumbnail.png"})]})},an=t(38),cn=t(45),on=t.n(cn),pn=(t(79),t(80),Object(V.a)(on.a)(w||(w=Object($.a)(["\n   margin: 20px 0px 0px 0px;\n\n\tul li button {\n\t\t&:before {\n\t\t\tfont-size: 10px;\n\t\t\tcolor: rgb(150, 158, 171);\n\t\t}\n\t}\n\n\tli.slick-active button::before {\n\t\tcolor: #fff;\n\t} \n\n\t.slick-list {\n\t\toverflow: visible;\n\t}\n\tbutton {\n\t\tz-index: 1;\n\t}\n"])))),dn=V.a.div(y||(y=Object($.a)(["\ncursor: pointer;\n\timg {\n\t\tborder: 4px solid transparent;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tborder-radius: 5px;\n\t\tbox-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n\t\ttransition: all 0.3s ease 0s;\n\n\t\t&:hover{\n\t\t\tborder: 4px solid rgba(249, 249, 249, 0.8);\n\t\t}\n\t}\n"]))),ln=function(){return Object(m.jsxs)(pn,Object(an.a)(Object(an.a)({},{dots:!0,nfinite:!0,speed:500,slidesToShow:1,slidesToScroll:1}),{},{children:[Object(m.jsx)(dn,{children:Object(m.jsx)("img",{src:"/images/slider-badging.jpg",alt:"slider"})}),Object(m.jsx)(dn,{children:Object(m.jsx)("img",{src:"/images/slider-badag.jpg",alt:"slider"})})]}))},xn=V.a.div(E||(E=Object($.a)(["\n   margin: 30px 0px 0px 0px;\n\tpadding: 30px 0px 26px 0px;\n   display: grid;\n\tgrid-gap: 25px;\n   grid-template-columns: repeat(5, minmax(0, 1fr));\n"]))),bn=V.a.div(C||(C=Object($.a)(["\n   border-radius: 10px;\n   border: 3px solid rgba(249, 249, 249, 0.1);\n\tbox-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n\tcursor: pointer;\n\ttransition: all 0.25s ease 0s;\n\n   img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n   }\n\n\t&:hover{\n\t\tbox-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n\t\ttransform: scale(1.05);\n\t\tborder-color: rgba(249, 249, 249, 0.8);\n\t}\n"]))),jn=function(){return Object(m.jsxs)(xn,{children:[Object(m.jsx)(bn,{children:Object(m.jsx)("img",{src:"/images/viewers-disney.png"})}),Object(m.jsx)(bn,{children:Object(m.jsx)("img",{src:"/images/viewers-pixar.png"})}),Object(m.jsx)(bn,{children:Object(m.jsx)("img",{src:"/images/viewers-marvel.png"})}),Object(m.jsx)(bn,{children:Object(m.jsx)("img",{src:"/images/viewers-starwars.png"})}),Object(m.jsx)(bn,{children:Object(m.jsx)("img",{src:"/images/viewers-national.png"})})]})},gn=V.a.div(A||(A=Object($.a)([""]))),hn=V.a.div(F||(F=Object($.a)(["\n   display: grid;\n   grid-gap: 25px;\n   grid-template-columns: repeat(4, minmax(0, 1fr));\n"]))),mn=V.a.div(k||(k=Object($.a)(["\n   border-radius: 10px;\n   border: 3px solid rgba(249, 249, 249, 0.1);\n   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n   cursor: pointer;\n   transition: all 0.25s ease 0s;\n\toverflow: hidden;\n\n   img {\n      height: 100%;\n      width: 100%;\n      object-fit: cover;\n   }\n\n\t&:hover{\n\t\tbox-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n\t\ttransform: scale(1.05);\n\t\tborder-color: rgba(249, 249, 249, 0.8);\n\t}\n"]))),un=function(){return Object(m.jsxs)(gn,{children:[Object(m.jsx)("h4",{children:"Recommended for You"}),Object(m.jsxs)(hn,{children:[Object(m.jsx)(mn,{children:Object(m.jsx)("img",{src:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"})}),Object(m.jsx)(mn,{children:Object(m.jsx)("img",{src:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"})}),Object(m.jsx)(mn,{children:Object(m.jsx)("img",{src:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"})}),Object(m.jsx)(mn,{children:Object(m.jsx)("img",{src:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"})})]})]})},On=V.a.main(B||(B=Object($.a)(["\n   min-height: calc(100vh - 70px);\n\tpadding: 0 calc(3.5vw + 5px);\n\tposition: relative;\n\toverflow-x: hidden;\n\n\t&::before{\n\t\tcontent:'';\n\t\tbackground: url('/images/home-background.png') center center / cover fixed no-repeat;\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tz-index: -1;\n\t}\n"]))),fn=function(n){Object(c.b)();return Object(i.useEffect)((function(){Z.collection("movies").onSnapshot((function(n){console.log(n)}))}),[]),Object(m.jsxs)(On,{children:[Object(m.jsx)(ln,{}),Object(m.jsx)(jn,{}),Object(m.jsx)(un,{})]})},vn=t(12),wn=V.a.div(D||(D=Object($.a)(["\n   min-height: calc(100vh - 70px);\n   padding: 0 calc(3.5vw + 5px);\n   position: relative;\n"]))),yn=V.a.div(_||(_=Object($.a)(["\n   position: fixed;\n   top: 0;\n   left: 0;\n   bottom: 0;\n   right: 0;\n   z-index: -1;\n   opacity: 0.8;\n\n   img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n   }\n"]))),En=V.a.div(S||(S=Object($.a)(["\n   height: 30vh;\n   min-height: 170px;\n   width: 35vw;\n   min-width: 200px;\n\n   img {\n      width: 100%;\n      height: 100%;\n      object-fit: contain;\n   }\n"]))),Cn=V.a.div(z||(z=Object($.a)(["\n   display: flex;\n   align-items: center;\n"]))),An=V.a.button(R||(R=Object($.a)(["\n   padding: 0px 24px;\n   margin: 0px 22px 0px 0px;\n   border: none;\n   border-radius: 4px;\n   font-size: 15px;\n   display: flex;\n   align-items: center;\n   min-height: 56px;\n   background: rgb(249, 249, 249);\n   letter-spacing: 1.8px;\n   cursor: pointer;\n   transition: all 0.3s ease 0s;\n\n   &:hover {\n      background: rgb(198, 198, 198);\n   }\n"]))),Fn=Object(V.a)(An)(T||(T=Object($.a)(["\n   background: rgba(0, 0, 0, 0.3);\n   border: 1px solid rgb(249, 249, 249);\n   color: rgb(249, 249, 249);\n   text-transform: uppercase;\n"]))),kn=V.a.button(I||(I=Object($.a)(["\n   margin: 0px 16px 0px 0px;\n   width: 44px;\n   height: 44px;\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   border-radius: 50%;\n   border: 2px solid white;\n   background-color: rgba(0, 0, 0, 0.6);\n   cursor: pointer;\n   span {\n      font-size: 32px;\n      color: #fff;\n   }\n"]))),Bn=Object(V.a)(kn)(L||(L=Object($.a)(["\n   background: #000;\n"]))),Dn=V.a.div(H||(H=Object($.a)(["\n   margin: 26px 0px 0px 0px;\n   color: rgb(249, 249, 249);\n   font-size: 15px;\n   min-height: 20px;\n"]))),_n=V.a.div(M||(M=Object($.a)(["\n   line-height: 1.4;\n   font-size: 20px;\n   margin: 16px 0px 0px 0px;\n   color: rgb(249, 249, 249);\n\tmax-width: 760px;\n"]))),Sn=function(){return Object(m.jsxs)(wn,{children:[Object(m.jsx)(yn,{children:Object(m.jsx)("img",{src:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg"})}),Object(m.jsx)(En,{children:Object(m.jsx)("img",{src:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5C647DF3FFBFA343CFEA84AC715148F25F9E86F398B408010CC403E7654FB908/scale?width=1440&aspectRatio=1.78"})}),Object(m.jsxs)(Cn,{children:[Object(m.jsxs)(An,{children:[Object(m.jsx)("img",{src:"/images/play-icon-black.png"}),Object(m.jsx)("span",{children:"PLAY"})]}),Object(m.jsxs)(Fn,{children:[Object(m.jsx)("img",{src:"/images/play-icon-white.png"}),Object(m.jsx)("span",{children:"Trailer"})]}),Object(m.jsx)(kn,{children:Object(m.jsx)("span",{children:"+"})}),Object(m.jsx)(Bn,{children:Object(m.jsx)("img",{src:"/images/group-icon.png"})})]}),Object(m.jsx)(Dn,{children:"2015 \u2022 1h 35m \u2022 Coming of Age, Family, Animation"}),Object(m.jsx)(_n,{children:"When 11-year-old Riley moves to a new city, her Emotions team up to help her through the transition. Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and Sadness get lost, they must journey through unfamiliar places to get back home."})]})},zn=V.a.section(W||(W=Object($.a)(["\n   overflow: hidden;\n   display: flex;\n   flex-direction: column;\n   text-align: center;\n   height: calc(100vh - 70px);\n\t/* height: 100vh; */\n"]))),Rn=V.a.div(G||(G=Object($.a)(["\n   margin-bottom: 10vw;\n   width: 100%;\n   position: relative;\n   min-height: 100vh;\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   flex-direction: column;\n   padding: 0px 40px 80px;\n   height: 100%;\n"]))),Tn=V.a.div(J||(J=Object($.a)(["\n   max-width: 650px;\n   width: 100%;\n   display: flex;\n   flex-direction: column;\n"]))),In=V.a.img(P||(P=Object($.a)(["\n   margin-bottom: 12px;\n   max-width: 600px;\n   min-height: 1px;\n   display: block;\n   width: 100%;\n"]))),Ln=V.a.a(N||(N=Object($.a)(["\n   font-weight: bold;\n   color: #f9f9f9;\n   background-color: #0063e5;\n   margin-bottom: 12px;\n   width: 100%;\n   letter-spacing: 1.5px;\n   font-size: 18px;\n   padding: 16.5px 0;\n   border: 1px solid transparent;\n   border-radius: 4px;\n\ttransition: all 0.3s ease 0s;\n   &:hover {\n      background-color: #0483ee;\n   }\n"]))),Hn=V.a.div(Y||(Y=Object($.a)(["\n   color: hsla(0, 0%, 95.3%, 1);\n   font-size: 11px;\n   margin: 0 0 24px;\n   line-height: 1.5;\n   letter-spacing: 1.5px;\n"]))),Mn=V.a.img(K||(K=Object($.a)(["\n   max-width: 600px;\n   margin-bottom: 20px;\n   display: inline-block;\n   vertical-align: bottom;\n   width: 100%;\n"]))),Wn=V.a.div(X||(X=Object($.a)(["\n   height: 100%;\n   position: absolute;\n   top: 0;\n   left: 0;\n   right: 0;\n   background: url('/images/login-background.jpg') top / cover no-repeat;\n   z-index: -1;\n"]))),Gn=function(){return Object(m.jsx)(zn,{children:Object(m.jsxs)(Rn,{children:[Object(m.jsxs)(Tn,{children:[Object(m.jsx)(In,{src:"/images/cta-logo-one.svg",alt:""}),Object(m.jsx)(Ln,{children:"GET ALL THERE"}),Object(m.jsx)(Hn,{children:"Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1."}),Object(m.jsx)(Mn,{src:"/images/cta-logo-two.png",alt:""})]}),Object(m.jsx)(Wn,{})]})})},Jn=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(U.a,{children:[Object(m.jsx)(sn,{}),Object(m.jsxs)(vn.c,{children:[Object(m.jsx)(vn.a,{path:"/login",children:Object(m.jsx)(Gn,{})}),Object(m.jsx)(vn.a,{path:"/detail",children:Object(m.jsx)(Sn,{})}),Object(m.jsx)(vn.a,{path:"/",children:Object(m.jsx)(fn,{})})]})]})})},Pn=Object(l.c)({name:"movie",initialState:{movies:[]},reducers:{setMovies:function(n,e){n.movies=e.payload}}}),Nn=(Pn.actions.setMovies,Pn.reducer),Yn=Object(l.a)({reducer:{counter:h,movie:Nn}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(c.a,{store:Yn,children:Object(m.jsx)(Jn,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[81,1,2]]]);
//# sourceMappingURL=main.021bdcbe.chunk.js.map