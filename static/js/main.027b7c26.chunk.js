(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(21),n=a.n(c),r=(a(62),a(63),a(64),a(29)),i=a(6),l=a(15),o=a(16),h=a(22),j=a(20),d=a(19),b=a(79),m=a(85),O=a(80),x=a(57),f=a.p+"static/media/site-logo.c4ce73b5.png",u=a(0),A=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={fullScreen:!0,showOffcanvas:!1},e.handleToggleOffcanvas=e.handleToggleOffcanvas.bind(Object(h.a)(e)),e.handleOffcanvasClose=e.handleOffcanvasClose.bind(Object(h.a)(e)),e}return Object(o.a)(a,[{key:"handleToggleOffcanvas",value:function(){this.setState({fullScreen:!1,showOffcanvas:!0})}},{key:"handleOffcanvasClose",value:function(){this.setState({showOffcanvas:!1})}},{key:"render",value:function(){return Object(u.jsx)("div",{className:"Navi",children:Object(u.jsx)(b.a,{className:"pt-3",children:Object(u.jsxs)(m.a,{expand:"lg",children:[Object(u.jsx)("div",{className:"nav-item",children:Object(u.jsx)(r.b,{exact:!0,to:"/",children:Object(u.jsx)("img",{src:f,alt:"samuel"})})}),Object(u.jsx)(m.a.Toggle,{onClick:this.handleToggleOffcanvas,"aria-controls":"offcanvasNavbar"}),this.state.fullScreen?Object(u.jsxs)(m.a.Collapse,{className:"justify-content-end",children:[Object(u.jsx)("div",{className:"right-nav-item",children:Object(u.jsx)(r.b,{exact:!0,to:"/projects",children:Object(u.jsx)(O.a,{variant:"custom",size:"lg",children:Object(u.jsx)("h3",{children:" projects "})})})}),Object(u.jsx)("div",{className:"right-nav-item",children:Object(u.jsx)(O.a,{variant:"custom-social",size:"lg",href:"https://github.com/SamuelAdamson",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("h3",{children:" GitHub "})})}),Object(u.jsx)("div",{className:"right-nav-item",children:Object(u.jsx)(O.a,{variant:"custom-social",size:"lg",href:"https://www.linkedin.com/in/samuel-adamson-4397051b8/",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("h3",{children:" LinkedIn "})})})]}):null,Object(u.jsxs)(m.a.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",show:this.state.showOffcanvas,children:[Object(u.jsx)(x.a.Header,{children:Object(u.jsx)(O.a,{className:"btn-close",variant:"none",onClick:this.handleOffcanvasClose})}),Object(u.jsxs)(x.a.Body,{children:[Object(u.jsx)("div",{className:"nav-item-offc",children:Object(u.jsx)(r.b,{exact:!0,to:"/projects",children:Object(u.jsx)(O.a,{variant:"custom-offc",size:"lg",onClick:this.handleOffcanvasClose,children:Object(u.jsx)("h4",{children:" projects "})})})}),Object(u.jsx)("div",{className:"offc-sep"}),Object(u.jsx)("div",{className:"nav-item-offc",children:Object(u.jsx)(O.a,{variant:"custom-offc",size:"lg",href:"https://github.com/SamuelAdamson",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("h4",{children:" GitHub "})})}),Object(u.jsx)("div",{className:"offc-sep"}),Object(u.jsx)("div",{className:"nav-item-offc",children:Object(u.jsx)(O.a,{variant:"custom-offc",size:"lg",href:"https://www.linkedin.com/in/samuel-adamson-4397051b8/",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("h4",{children:" LinkedIn "})})}),Object(u.jsx)("div",{className:"offc-sep"})]})]})]})})})}}]),a}(s.Component),g=a(81),p=a(82),w=a(84),v=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={splashClass:"SplashScreen",headClass:"splash-head"},e.unmountSplash=e.unmountSplash.bind(Object(h.a)(e)),e}return Object(o.a)(a,[{key:"unmountSplash",value:function(){this.props.unmountMe()}},{key:"componentDidMount",value:function(){var e=this,t=1200;setTimeout((function(){e.setState({headClass:"splash-head active"})}),t),setTimeout((function(){e.setState({headClass:"splash-head active underline"})}),t+=1200),setTimeout((function(){e.setState({headClass:"splash-head active"})}),t+=1200),setTimeout((function(){e.setState({splashClass:"SplashScreen fadeOut"}),setTimeout((function(){e.unmountSplash()}),2e3)}),t+=1500)}},{key:"render",value:function(){return Object(u.jsx)("div",{className:this.state.splashClass,children:Object(u.jsx)("h1",{className:this.state.headClass,children:"samuel"})})}}]),a}(s.Component),N=a(28),y=function(e){var t=e.thresh,a=e.props;window.innerWidth<720&&(t/=2.5);var s=Object(N.a)({threshold:t}),c=s.ref,n=s.inView;return Object(u.jsx)("div",{className:"dyno-wrapper",children:Object(u.jsx)("div",{ref:c,className:n?"Dyno in-view":"Dyno",children:Object(u.jsx)("div",{className:n?"dyno-content show":"dyno-content",children:a})})})},k=function(e){var t=e.thresh,a=e.initialProp,s=e.props,c=e.foot;window.innerWidth<720&&(t=0);var n=Object(N.a)({threshold:t}),r=n.ref,i=n.inView;return Object(u.jsx)("div",{className:"dyno-wrapper",children:Object(u.jsx)("div",{ref:r,className:i?"Dyno DynoFull in-view":"Dyno DynoFull",children:Object(u.jsxs)("div",{className:i?"dyno-content-full show":"dyno-content-full",children:[a,s.map((function(e,t){return Object(u.jsx)("div",{children:e},t)})),c]})})})},I=a(56),C=a.n(I),S=a(7),G=a(83),E=!1,R=!1,B=!1,M=function(){var e=Object(N.a)({threshold:.8}),t=Object(S.a)(e,2),a=t[0],s=t[1],c=Object(N.a)({threshold:.8}),n=Object(S.a)(c,2),r=n[0],i=n[1],l=Object(N.a)({threshold:.8}),o=Object(S.a)(l,2),h=o[0],j=o[1];return s&&(E=s),i&&(R=i),j&&(B=j),Object(u.jsxs)(b.a,{className:"Footer",children:[Object(u.jsx)(g.a,{className:"foot-show",children:Object(u.jsxs)(G.a,{horizontal:!0,className:"justify-content-center",children:[Object(u.jsx)(G.a.Item,{children:Object(u.jsx)("a",{href:"https://github.com/SamuelAdamson",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("img",{src:"data:image/png;base64,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",height:"48",width:"48",alt:"GitHub"})})}),Object(u.jsx)(G.a.Item,{children:Object(u.jsx)("a",{href:"https://www.linkedin.com/in/samuel-adamson-4397051b8/",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC90lEQVR4nO2bz4tNYRjHb4yUDBEbSjYooyYpmhll/JwrtqQsmJpS2LGyoGyosVSmGRYWphls+AfYUkJWZkYpGwuF/CrK4/t0Rh2nc+/5vtd5z3N+feu7u897v89n5p7zvO+5t9GISER2wjfhN/APKb60hzl4Ah6I9htufBl8zzRqNpqGu+Oaf2EcLEs9lzAEqcZfPqqp8Ge+qupXALesUxhqXAHMWacw1KwCKMOtrlN9b1gnsFYNwDqAtToBoAPTCNwDr4O3wufhdynmykyuAMbgrhaj9HL4cfoR/coFwBN4QcvNRABhFfzRT1Q/cgFwvF3zIQjXfYX1IRcAPSSAYV9hfcgFwBYSwElfYX3IBcAwCeCGr7A+5ALgJbwoofm18Bc/Uf3I9TZ4B17covk18LP0I/pVJ4OQ7h7PSXCO0As34VH4U4q5MlM9ClsHsFYNwOG1utm5S/hnTO0jou5ppOarBMd1R+CN8Mp5b5LgunNNgmcX/yUXAPfJOSDuYriLqAsPULfh1URNlwQ70/d5BzBIAvgNn2XeJ1Kr2/JXeQawmwRw2bX5UP0K+G1eAewh6jbDCzsFML9GP/yrkADSEt5rMo8A9vpuPPT+2/IIYJ9jE/p5PgVfhS8KcReJ1L/OG4D9DuGPwh9i1nggLTZiMWvQj/uyAnCArB2S9hexUXKdkbwBGCLqdKiZScjwDV5CrNVkm8oTgB1kjsSPE16znW0qKwBNou4YmeMMsdYGtqmsABwk6k6QOS4Qa61nm8oTAPY0+VIRARyqOoDK/wcwF8EaAJmjkACYOaDUABJHYSk5AGZ6KzWAxO2wlBxA4oGIlBwAcyZYagDsqTCjQgIYrDoA1ydD7WQG4KEEh5VJ/hxTe5ioO03muEKs1cs25QKglKoBWAewlgKo/A8mqvyTmRkFMGGdwlBjCmDAOoWh+v4ODtPWSQw0GZ6cuiX4OWlVpN9oXRodHxXClHGwLKRfoPi3+QgI/ZrJODwr5bhFag/ai/bUF+33Dzzsa5ur87PMAAAAAElFTkSuQmCC",height:"48",width:"48",alt:"LinkedIn"})})}),Object(u.jsx)(G.a.Item,{children:Object(u.jsx)("a",{href:"https://www.instagram.com/lilgiibb/?hl=en",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE6klEQVR4nO1bSWsVQRCO5qjGSxTBBRRyCEQhxoPrS1zu6lGJeW5Hl4P6G0T9A5LoVRLEDU+RKIo3UWPigiYGNBCIGgUVIuZgWeX0wPjZ86Zr3qQbk3xQEN5U11f1TU9Pd0+npgZARFvZLrGNsP2g/x9Sw1u2LrYtWG+y8Dq2q0FT9YMetkW24p8FTswn+ikpAs2OO4/oTj7zsxWbRYDLobMIiE4R4G3oLAJiWASYCa+6vJisCZ1BaMwJUGCsn2x9bOfYjrPtZtvFVmJrAWtgWwPWYPErmRi7TczzhuNnUUkXIcBrtjLh7GoaIVyG83W1yVcjwBRFd6XWV+EWIWpNDlO+BZhgK4UqHEHRozLhS4CptOL59ya2MxStJnvZHhsbpmh1Gdso2xewUfAZTrTvNTEldlMKdyvl6Al5BDhuIZcB60GOWHkhXC2WPE5oA2kFkEGnFkj3UpjJlHDuhVxkTHijCaIVoGy5876K/0bRnX+X+G2SbT3kVNYE1Qgg7946IPPV7R+xLTWc89nOJq7dh5xkb8N5LNAI0GcZ8HxhK3CLCMme0ATX77oG1ghwDkjOKNraMM42YGw8w3e5ZcBL9r5TcO2CaxIaAY4BSZeibYw7FD2j9ZaC6tkOGh/EEfBdxvY9cb0Trju/DTQC7AGSXkXbQbbtWHQa2HcH2/NE+69sR9lWUDTpeQLxe6H9HtfENAK0AclTx3bX2Ba4Fp+Iv5DtuiPHU2jb5lqURgAciAYd2kjx81MKXMW2zdjKFB8Z7G448AxCO+d9To0AG4HkVVZSBHeeooI66O/unfRvJxCMop7wIoPrFbTZ6FqURoANQDKU4b/dUshtB55b4gttd2a0GQL/DQ48f6ARoBlIRir43rHceZfiY4gI2BP6KviPgG+zK5FGgLVAMlrBtwN8ywqeGO0Q41AF3/fgu86VRCNAI5CMpfj9InjPk/2Zz8IAxFhiYtswBr6NriQaARqAJG329gH8Vik4ECsg1qcUv3Hwa3Al0AiwGkg+p/j1g1+rggNRglhpH3AnwG+NK8F0CPAM/EoKDoTr3MOLAHkfgZUKDsRyiBX0EahmEHSZNSKwJy2lwIOg5jV4EHwPKHhi7IMYRyr4enkNVjsRuqXgkvn/PIgRfCKknQrvAH+ZCruIIMXjGmJXRhsvU2HtYkgmPzinl54gC54Bi7+84vbTv3dePoO9zODyshjKsxyW9Xzaclg2N+Ll8D9bXgnBbjrweFkOtwGJ64aIdOm/eoILKLrzLsULvGyIVLMlJuv5nYri5ZnP6vZJeNkSK2JTVEZyWdUtsRQti53DVHm0T4OXTdGit8U/UjSODJq/q4GXbfGQH0aygB9G7rk21Aggn5sWA9F9babTgIeQk3wacz5CoxFAYPs4OqmMUSSEG2eoZU0ArQBpn8dDiCCc3j+PC2wHJNaT38dBuJoteZzUBsojQNYRmdMUvSKLPiLTZWIHPyIjkANJrbZEQsAU7+2QVAxRWyYcoY/JnaQAx+SSkEGnTHB6ZJoLrzOcqgHPhiIEiCF3QU5myCxMekbRR2VPmNh3qYo7jihSgP8ScwLQ3D9MzOp/mRnKu66fKbgoAmwJnUVAbIrfqz2hMwmAK8mJhWxA9ofOyCPkmN1CnF2JCN2BE/OBK1Rpl5ovbmbrpGg1NhNekVKD1CI1bcJ6fwPWJ1mhvvYAegAAAABJRU5ErkJggg==",height:"48",width:"48",alt:"Instagram"})})})]})}),Object(u.jsxs)(g.a,{className:"foot-show",children:[Object(u.jsxs)(p.a,{ref:a,children:[Object(u.jsxs)(g.a,{className:s||E?"foot-show-1":null,children:[" ",Object(u.jsx)("h2",{children:" Contact "})," "]}),Object(u.jsx)(g.a,{className:s||E?"foot-show-2":null,children:Object(u.jsx)("a",{href:"mailto:sadamson@uccs.edu",children:Object(u.jsx)("h3",{children:" Email "})})}),Object(u.jsx)(g.a,{className:s||E?"foot-show-3":null,children:Object(u.jsx)("a",{href:"https://www.fiverr.com/giibbi",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("h3",{children:" Fiverr "})})}),Object(u.jsx)(g.a,{className:s||E?"foot-show-4":null,children:Object(u.jsx)("a",{href:"https://SamuelAdamson.github.io/#/projects",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("h3",{children:" Portfolio "})})})]}),Object(u.jsxs)(p.a,{ref:r,children:[Object(u.jsxs)(g.a,{className:i||R?"foot-show-1":null,children:[" ",Object(u.jsx)("h2",{children:" Weightlifting "})," "]}),Object(u.jsx)(g.a,{className:i||R?"foot-show-2":null,children:Object(u.jsx)("a",{href:"https://adamson.issacertifiedtrainer.com",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("h3",{children:" CPT "})})}),Object(u.jsx)(g.a,{className:i||R?"foot-show-3":null,children:Object(u.jsx)("a",{href:"https://www.issaonline.com/",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("h3",{children:" ISSA "})})}),Object(u.jsx)(g.a,{className:i||R?"foot-show-4":null,children:Object(u.jsx)("a",{href:"https://www.youtube.com/watch?v=iik25wqIuFo",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("h3",{children:" Tokyo 2020 "})})})]}),Object(u.jsxs)(p.a,{ref:h,children:[Object(u.jsxs)(g.a,{className:j||B?"foot-show-1":null,children:[" ",Object(u.jsx)("h2",{children:" Stuff I Like "})," "]}),Object(u.jsx)(g.a,{className:j||B?"foot-show-2":null,children:Object(u.jsx)("a",{href:"https://www.netflix.com/title/70205012",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("h3",{children:" Naruto "})})}),Object(u.jsx)(g.a,{className:j||B?"foot-show-3":null,children:Object(u.jsx)("a",{href:"https://www.youtube.com/watch?v=s3zzz2lxLeg",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("h3",{children:" Art "})})}),Object(u.jsx)(g.a,{className:j||B?"foot-show-4":null,children:Object(u.jsx)("a",{href:"https://liftingugly.com/",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("h3",{children:" Lifting Ugly "})})})]})]}),Object(u.jsx)("h4",{children:" Colorado Springs, CO, USA "})]})},U=a.p+"static/media/profile.8acb528b.jpg",D=a.p+"static/media/cu.96e6b558.jpg",K=a.p+"static/media/monument.d632ed48.jpg",T=a.p+"static/media/server.36a7b394.jpg",Y=a.p+"static/media/lift.fc7567ca.jpg",H=a.p+"static/media/uccs.587e38ec.png",W=a.p+"static/media/cuboulder.6060c0e3.png",L=a.p+"static/media/cmu.20840f0d.webp",P=a.p+"static/media/mh.cf5824cb.png",V=a.p+"static/media/gms.42ba0da8.png",F=a.p+"static/media/synaptix.395f0b0e.png",z=!0,Q=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={renderSplash:!0,headerOne:null,headerTwo:null},s.handleSplashUnmount=s.handleSplashUnmount.bind(Object(h.a)(s)),s.handleHeadFadeIn=s.handleHeadFadeIn.bind(Object(h.a)(s)),s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){z?this.handleHeadFadeIn():this.setState({headerOne:"show",headerTwo:"show"})}},{key:"componentWillUnmount",value:function(){z=!1}},{key:"handleSplashUnmount",value:function(){this.setState({renderSplash:!1})}},{key:"handleHeadFadeIn",value:function(){var e=this;setTimeout((function(){e.setState({headerOne:"show"})}),5600),setTimeout((function(){e.setState({headerTwo:"show"})}),5800)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"Home",children:[this.state.renderSplash&&z?Object(u.jsx)(v,{unmountMe:this.handleSplashUnmount}):null,Object(u.jsx)(b.a,{children:Object(u.jsxs)("div",{className:"home-header",children:[Object(u.jsxs)("h1",{className:this.state.headerOne,children:[" ",Object(u.jsx)("strong",{children:" Samuel Adamson "})," "]}),Object(u.jsx)("h2",{className:this.state.headerTwo,children:" data engineer, computer science student, weightlifter "})]})}),Object(u.jsx)(y,{thresh:.6,props:Object(u.jsxs)(b.a,{children:[Object(u.jsxs)(g.a,{className:"profile-row",children:[Object(u.jsxs)(p.a,{children:[Object(u.jsx)("h2",{children:" Data Engineering "}),Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:"I build automated systems to manage and analyze large amounts of protected data."})]}),Object(u.jsxs)(p.a,{children:[Object(u.jsx)("h2",{children:" AI "}),Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:"I am majoring in computer science with a focus in artificial intelligence."})]}),Object(u.jsxs)(p.a,{children:[Object(u.jsx)("h2",{children:" Web Development "}),Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:"I am a full stack hobbyist, and you're looking at one of my creations right now."})]})]}),Object(u.jsxs)(g.a,{className:"profile-row",children:[Object(u.jsxs)(p.a,{children:[Object(u.jsx)("h2",{children:" From Rural Roots "}),Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:"Growing up on the Western Slope of Colorado, I developed a passion for computing. I began writing object oriented code at the age of 14 and two years later I started my first internship as a Junior Game Developer. After high school, I entered the University of Colorado as a computer science major. Alongside my studies, I work as a data engineer in the healthcare industry."})]}),Object(u.jsx)(p.a,{children:Object(u.jsx)("img",{src:U,alt:"Samuel",className:"profile-img"})})]})]})}),Object(u.jsx)(C.a,{effect:"fadeOnScroll",duration:1e3,children:Object(u.jsxs)(b.a,{className:"mid-header",children:[Object(u.jsxs)("h1",{children:[" ",Object(u.jsx)("strong",{children:" My perspective "})," "]}),Object(u.jsx)("h2",{children:"everyone lives within their own subjective interpretation - itachi uchiha"})]})}),Object(u.jsx)(k,{thresh:.1,initialProp:Object(u.jsxs)(b.a,{className:"lower-content-head",children:[Object(u.jsxs)(g.a,{className:"profile-row lower",children:[Object(u.jsxs)(p.a,{children:[Object(u.jsx)("h1",{children:" Purpose "}),Object(u.jsx)("br",{}),Object(u.jsxs)("h4",{children:["In this modern age of information and technology, computing will continue to play a massive role in shaping our society.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),"I want to help harness the computational power we have at our disposal to improve lives and push our civilization forward. As I continue to write my story, I do so with this intention in mind."]})]}),Object(u.jsx)(p.a,{sm:3})]}),Object(u.jsx)("br",{})]}),props:[Object(u.jsx)(b.a,{className:"lower-content-body",children:Object(u.jsxs)(g.a,{className:"profile-row lower",children:[Object(u.jsxs)(p.a,{className:"my-auto",children:[Object(u.jsx)("h2",{children:" Education "}),Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:"After graduating salutatorian from Grand Junction High School in 2019, I began my undergraduate studies at the University of Colorado. During my junior year I declared a focus in Artificial Intelligence. Throughout my academic career, I maintain a 4.0 GPA."})]}),Object(u.jsx)(p.a,{children:Object(u.jsx)("img",{src:D,alt:"Univ of Colorado",className:"profile-img"})})]})}),Object(u.jsx)(b.a,{className:"lower-content-body",children:Object(u.jsxs)(g.a,{className:"profile-row lower",children:[Object(u.jsxs)(p.a,{className:"my-auto",children:[Object(u.jsx)("h2",{children:" Professional Work "}),Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:"Currently I work at a clinically integrated healthcare network, Monument Health. As a data engineer, I build Extract Transfer Load Pipelines which automate the flow of data into Cloud Based warehouses. I also contribute to analysis and database infrastructure."}),Object(u.jsx)("br",{}),Object(u.jsx)(r.b,{exact:!0,to:"/projects",children:Object(u.jsx)("h4",{className:"lower-button",children:" see my projects "})})]}),Object(u.jsx)(p.a,{children:Object(u.jsx)("img",{src:K,alt:"Monument Health",className:"profile-img"})})]})}),Object(u.jsx)(b.a,{className:"lower-content-body",children:Object(u.jsxs)(g.a,{className:"profile-row lower",children:[Object(u.jsxs)(p.a,{className:"my-auto",children:[Object(u.jsx)("h2",{children:" Past Experience "}),Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:"Previously I worked as an IT Technician for a network management contractor, Grand Mesa Software, where I developed technical know how and problem solving skills. Following my third year of high school I worked in game development at Synaptix Games."})]}),Object(u.jsx)(p.a,{children:Object(u.jsx)("img",{src:T,alt:"Work Experience",className:"profile-img"})})]})}),Object(u.jsx)(b.a,{className:"lower-content-body",children:Object(u.jsxs)(g.a,{className:"profile-row lower",children:[Object(u.jsxs)(p.a,{className:"my-auto",children:[Object(u.jsx)("h2",{children:" AFK "}),Object(u.jsx)("br",{}),Object(u.jsx)("h4",{children:"When I'm away from the keyboard (AFK), you can find me in the gym. For a year and a half I practiced powerlifting before transitioning to competitive weightlifitng. In the spirit of sharing my passion for lifting, I operate as an ISSA certified personal trainer."})]}),Object(u.jsx)(p.a,{children:Object(u.jsx)("img",{src:Y,alt:"Work Experience",className:"profile-img"})})]})}),Object(u.jsx)(b.a,{children:Object(u.jsxs)(w.a,{flush:!0,children:[Object(u.jsxs)(w.a.Item,{eventKey:"0",children:[Object(u.jsx)(w.a.Header,{children:Object(u.jsx)("h2",{children:" Education "})}),Object(u.jsx)(w.a.Body,{children:Object(u.jsxs)(g.a,{children:[Object(u.jsx)(p.a,{sm:4}),Object(u.jsx)(p.a,{className:"my-auto",children:Object(u.jsx)("a",{href:"https://www.uccs.edu/",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("img",{src:H,alt:"UCCS",className:"acc-img"})})}),Object(u.jsx)(p.a,{className:"my-auto",children:Object(u.jsx)("a",{href:"https://www.colorado.edu/",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("img",{src:W,alt:"CU Boulder",className:"acc-img"})})}),Object(u.jsx)(p.a,{className:"my-auto",children:Object(u.jsx)("a",{href:"https://www.coloradomesa.edu/",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("img",{src:L,alt:"Colorado Mesa",className:"acc-img"})})}),Object(u.jsx)(p.a,{sm:4})]})})]}),Object(u.jsxs)(w.a.Item,{eventKey:"1",children:[Object(u.jsx)(w.a.Header,{children:Object(u.jsx)("h2",{children:" Experience "})}),Object(u.jsx)(w.a.Body,{children:Object(u.jsxs)(g.a,{children:[Object(u.jsx)(p.a,{sm:4}),Object(u.jsx)(p.a,{className:"my-auto",children:Object(u.jsx)("a",{href:"https://monumenthealth.net/",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("img",{src:P,alt:"Monument Health",className:"acc-img2"})})}),Object(u.jsx)(p.a,{className:"my-auto",children:Object(u.jsx)("a",{href:"https://gmsdnd.com/",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("img",{src:V,alt:"Grand Mesa Software",className:"acc-img"})})}),Object(u.jsx)(p.a,{className:"my-auto",children:Object(u.jsx)("a",{href:"http://synaptixgames.com/",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("img",{src:F,alt:"Synaptix Games",className:"acc-img2"})})}),Object(u.jsx)(p.a,{sm:4})]})})]}),Object(u.jsx)(w.a.Item,{eventKey:"2",children:Object(u.jsx)(w.a.Header,{children:Object(u.jsx)("h2",{children:" Lifting "})})}),Object(u.jsx)(w.a.Item,{eventKey:"3",children:Object(u.jsx)(w.a.Header,{children:Object(u.jsx)("h2",{children:" Freelance "})})})]})})],foot:Object(u.jsx)(M,{})})]})}}]),a}(s.Component),X=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"Projects",children:Object(u.jsx)("h1",{children:" coming soon "})})}}]),a}(s.Component),Z=X;var J=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(r.a,{hashType:"slash",children:[Object(u.jsx)(A,{}),Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{exact:!0,path:"/",component:Q}),Object(u.jsx)(i.a,{exact:!0,path:"/projects",component:Z})]})]})})};n.a.render(Object(u.jsx)(J,{}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.027b7c26.chunk.js.map