(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(25),n=a.n(c),r=(a(65),a(66),a(67),a(26)),i=a(7),l=a(10),o=a(11),h=a(19),j=a(18),d=a(17),b=a(81),m=a(88),O=a(82),p=a(60),x=a.p+"static/media/site-logo.c4ce73b5.png",u=a.p+"static/media/sa.9a27efbe.pdf",f=a(0),g=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={fullScreen:!0,showOffcanvas:!1},e.handleToggleOffcanvas=e.handleToggleOffcanvas.bind(Object(h.a)(e)),e.handleOffcanvasClose=e.handleOffcanvasClose.bind(Object(h.a)(e)),e}return Object(o.a)(a,[{key:"handleToggleOffcanvas",value:function(){this.setState({fullScreen:!1,showOffcanvas:!0})}},{key:"handleOffcanvasClose",value:function(){this.setState({showOffcanvas:!1})}},{key:"render",value:function(){return Object(f.jsx)("div",{className:"Navi",children:Object(f.jsx)(b.a,{className:"pt-3",children:Object(f.jsxs)(m.a,{expand:"lg",children:[Object(f.jsx)("div",{className:"nav-item",children:Object(f.jsx)(r.b,{exact:!0,to:"/",children:Object(f.jsx)("img",{src:x,alt:"samuel"})})}),Object(f.jsx)(m.a.Toggle,{onClick:this.handleToggleOffcanvas,"aria-controls":"offcanvasNavbar"}),this.state.fullScreen?Object(f.jsxs)(m.a.Collapse,{className:"justify-content-end",children:[Object(f.jsx)("div",{className:"right-nav-item",children:Object(f.jsx)(r.b,{exact:!0,to:"/projects",children:Object(f.jsx)(O.a,{variant:"custom",size:"lg",children:Object(f.jsx)("h3",{children:" projects "})})})}),Object(f.jsx)("div",{className:"right-nav-item",children:Object(f.jsx)(O.a,{href:u,target:"_blank",rel:"noreferrer",variant:"custom",size:"lg",children:Object(f.jsx)("h3",{children:" resume "})})}),Object(f.jsx)("div",{className:"right-nav-item",children:Object(f.jsx)(O.a,{variant:"custom-social",size:"lg",href:"https://github.com/SamuelAdamson",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("h3",{children:" GitHub "})})}),Object(f.jsx)("div",{className:"right-nav-item",children:Object(f.jsx)(O.a,{variant:"custom-social",size:"lg",href:"https://www.linkedin.com/in/samuel-adamson-cs/",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("h3",{children:" LinkedIn "})})})]}):null,Object(f.jsxs)(m.a.Offcanvas,{id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",placement:"end",show:this.state.showOffcanvas,children:[Object(f.jsx)(p.a.Header,{children:Object(f.jsx)(O.a,{className:"btn-close",variant:"none",onClick:this.handleOffcanvasClose})}),Object(f.jsxs)(p.a.Body,{children:[Object(f.jsx)("div",{className:"nav-item-offc",children:Object(f.jsx)(r.b,{exact:!0,to:"/projects",children:Object(f.jsx)(O.a,{variant:"custom-offc",size:"lg",onClick:this.handleOffcanvasClose,children:Object(f.jsx)("h4",{children:" projects "})})})}),Object(f.jsx)("div",{className:"offc-sep"}),Object(f.jsx)("div",{className:"nav-item-offc",children:Object(f.jsx)(O.a,{variant:"custom-offc",href:u,target:"_blank",rel:"noreferrer",size:"lg",onClick:this.handleOffcanvasClose,children:Object(f.jsx)("h4",{children:" resume "})})}),Object(f.jsx)("div",{className:"offc-sep"}),Object(f.jsx)("div",{className:"nav-item-offc",children:Object(f.jsx)(O.a,{variant:"custom-offc",size:"lg",href:"https://github.com/SamuelAdamson",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("h4",{children:" GitHub "})})}),Object(f.jsx)("div",{className:"offc-sep"}),Object(f.jsx)("div",{className:"nav-item-offc",children:Object(f.jsx)(O.a,{variant:"custom-offc",size:"lg",href:"https://www.linkedin.com/in/samuel-adamson-4397051b8/",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("h4",{children:" LinkedIn "})})}),Object(f.jsx)("div",{className:"offc-sep"})]})]})]})})})}}]),a}(s.Component);var A=Object(i.f)((function(e){var t=e.history;return Object(s.useEffect)((function(){var e=t.listen((function(){window.scrollTo({top:0,left:0,behavior:"instant"})}));return function(){e()}}),[]),null})),w=a(83),v=a(84),y=a(87),N=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={splashClass:"SplashScreen",headClass:"splash-head"},e.unmountSplash=e.unmountSplash.bind(Object(h.a)(e)),e}return Object(o.a)(a,[{key:"unmountSplash",value:function(){this.props.unmountMe()}},{key:"componentDidMount",value:function(){var e=this,t=1200;setTimeout((function(){e.setState({headClass:"splash-head active"})}),t),setTimeout((function(){e.setState({headClass:"splash-head active underline"})}),t+=1200),setTimeout((function(){e.setState({headClass:"splash-head active"})}),t+=1200),setTimeout((function(){e.setState({splashClass:"SplashScreen fadeOut"}),setTimeout((function(){e.unmountSplash()}),2e3)}),t+=1500)}},{key:"render",value:function(){return Object(f.jsx)("div",{className:this.state.splashClass,children:Object(f.jsx)("h1",{className:this.state.headClass,children:"samuel"})})}}]),a}(s.Component),k=a(35),I=function(e){var t=e.thresh,a=e.props;window.innerWidth<720&&(t/=2.5);var s=Object(k.a)({threshold:t}),c=s.ref,n=s.inView;return Object(f.jsx)("div",{className:"dyno-wrapper",children:Object(f.jsx)("div",{ref:c,className:n?"Dyno in-view":"Dyno",children:Object(f.jsx)("div",{className:n?"dyno-content show":"dyno-content",children:a})})})},C=function(e){var t=e.thresh,a=e.initProp,s=e.props,c=e.foot;window.innerWidth<720&&(t=.1);var n=Object(k.a)({threshold:t}),r=n.ref,i=n.inView;return Object(f.jsxs)("div",{ref:r,className:"dyno-wrapper",children:[Object(f.jsx)("div",{className:i?"Dyno DynoFull in-view":"Dyno DynoFull",children:Object(f.jsx)("div",{className:"dyno-content-full",children:Object(f.jsx)("div",{className:i?"init-prop show":"init-prop",children:a})})}),Object(f.jsxs)("div",{className:"dyno-content-full-bottom",children:[s.map((function(e,t){return Object(f.jsx)("div",{children:e},t)})),c]})]})},S=a(58),G=a.n(S),R=a(6),E=a(86),T=!1,M=!1,U=!1,B=function(){var e=Object(k.a)({threshold:.8}),t=Object(R.a)(e,2),a=t[0],s=t[1],c=Object(k.a)({threshold:.8}),n=Object(R.a)(c,2),r=n[0],i=n[1],l=Object(k.a)({threshold:.8}),o=Object(R.a)(l,2),h=o[0],j=o[1];return s&&(T=s),i&&(M=i),j&&(U=j),Object(f.jsxs)(b.a,{className:"Footer",children:[Object(f.jsx)(w.a,{className:"foot-show",children:Object(f.jsxs)(E.a,{horizontal:!0,className:"justify-content-center",children:[Object(f.jsx)(E.a.Item,{children:Object(f.jsx)("a",{href:"https://github.com/SamuelAdamson",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("img",{src:"data:image/png;base64,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",height:"48",width:"48",alt:"GitHub"})})}),Object(f.jsx)(E.a.Item,{children:Object(f.jsx)("a",{href:"https://www.linkedin.com/in/samuel-adamson-cs/",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC90lEQVR4nO2bz4tNYRjHb4yUDBEbSjYooyYpmhll/JwrtqQsmJpS2LGyoGyosVSmGRYWphls+AfYUkJWZkYpGwuF/CrK4/t0Rh2nc+/5vtd5z3N+feu7u897v89n5p7zvO+5t9GISER2wjfhN/APKb60hzl4Ah6I9htufBl8zzRqNpqGu+Oaf2EcLEs9lzAEqcZfPqqp8Ge+qupXALesUxhqXAHMWacw1KwCKMOtrlN9b1gnsFYNwDqAtToBoAPTCNwDr4O3wufhdynmykyuAMbgrhaj9HL4cfoR/coFwBN4QcvNRABhFfzRT1Q/cgFwvF3zIQjXfYX1IRcAPSSAYV9hfcgFwBYSwElfYX3IBcAwCeCGr7A+5ALgJbwoofm18Bc/Uf3I9TZ4B17covk18LP0I/pVJ4OQ7h7PSXCO0As34VH4U4q5MlM9ClsHsFYNwOG1utm5S/hnTO0jou5ppOarBMd1R+CN8Mp5b5LgunNNgmcX/yUXAPfJOSDuYriLqAsPULfh1URNlwQ70/d5BzBIAvgNn2XeJ1Kr2/JXeQawmwRw2bX5UP0K+G1eAewh6jbDCzsFML9GP/yrkADSEt5rMo8A9vpuPPT+2/IIYJ9jE/p5PgVfhS8KcReJ1L/OG4D9DuGPwh9i1nggLTZiMWvQj/uyAnCArB2S9hexUXKdkbwBGCLqdKiZScjwDV5CrNVkm8oTgB1kjsSPE16znW0qKwBNou4YmeMMsdYGtqmsABwk6k6QOS4Qa61nm8oTAPY0+VIRARyqOoDK/wcwF8EaAJmjkACYOaDUABJHYSk5AGZ6KzWAxO2wlBxA4oGIlBwAcyZYagDsqTCjQgIYrDoA1ydD7WQG4KEEh5VJ/hxTe5ioO03muEKs1cs25QKglKoBWAewlgKo/A8mqvyTmRkFMGGdwlBjCmDAOoWh+v4ODtPWSQw0GZ6cuiX4OWlVpN9oXRodHxXClHGwLKRfoPi3+QgI/ZrJODwr5bhFag/ai/bUF+33Dzzsa5ur87PMAAAAAElFTkSuQmCC",height:"48",width:"48",alt:"LinkedIn"})})}),Object(f.jsx)(E.a.Item,{children:Object(f.jsx)("a",{href:"https://www.instagram.com/giibb4/?hl=en",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE6klEQVR4nO1bSWsVQRCO5qjGSxTBBRRyCEQhxoPrS1zu6lGJeW5Hl4P6G0T9A5LoVRLEDU+RKIo3UWPigiYGNBCIGgUVIuZgWeX0wPjZ86Zr3qQbk3xQEN5U11f1TU9Pd0+npgZARFvZLrGNsP2g/x9Sw1u2LrYtWG+y8Dq2q0FT9YMetkW24p8FTswn+ikpAs2OO4/oTj7zsxWbRYDLobMIiE4R4G3oLAJiWASYCa+6vJisCZ1BaMwJUGCsn2x9bOfYjrPtZtvFVmJrAWtgWwPWYPErmRi7TczzhuNnUUkXIcBrtjLh7GoaIVyG83W1yVcjwBRFd6XWV+EWIWpNDlO+BZhgK4UqHEHRozLhS4CptOL59ya2MxStJnvZHhsbpmh1Gdso2xewUfAZTrTvNTEldlMKdyvl6Al5BDhuIZcB60GOWHkhXC2WPE5oA2kFkEGnFkj3UpjJlHDuhVxkTHijCaIVoGy5876K/0bRnX+X+G2SbT3kVNYE1Qgg7946IPPV7R+xLTWc89nOJq7dh5xkb8N5LNAI0GcZ8HxhK3CLCMme0ATX77oG1ghwDkjOKNraMM42YGw8w3e5ZcBL9r5TcO2CaxIaAY4BSZeibYw7FD2j9ZaC6tkOGh/EEfBdxvY9cb0Trju/DTQC7AGSXkXbQbbtWHQa2HcH2/NE+69sR9lWUDTpeQLxe6H9HtfENAK0AclTx3bX2Ba4Fp+Iv5DtuiPHU2jb5lqURgAciAYd2kjx81MKXMW2zdjKFB8Z7G448AxCO+d9To0AG4HkVVZSBHeeooI66O/unfRvJxCMop7wIoPrFbTZ6FqURoANQDKU4b/dUshtB55b4gttd2a0GQL/DQ48f6ARoBlIRir43rHceZfiY4gI2BP6KviPgG+zK5FGgLVAMlrBtwN8ywqeGO0Q41AF3/fgu86VRCNAI5CMpfj9InjPk/2Zz8IAxFhiYtswBr6NriQaARqAJG329gH8Vik4ECsg1qcUv3Hwa3Al0AiwGkg+p/j1g1+rggNRglhpH3AnwG+NK8F0CPAM/EoKDoTr3MOLAHkfgZUKDsRyiBX0EahmEHSZNSKwJy2lwIOg5jV4EHwPKHhi7IMYRyr4enkNVjsRuqXgkvn/PIgRfCKknQrvAH+ZCruIIMXjGmJXRhsvU2HtYkgmPzinl54gC54Bi7+84vbTv3dePoO9zODyshjKsxyW9Xzaclg2N+Ll8D9bXgnBbjrweFkOtwGJ64aIdOm/eoILKLrzLsULvGyIVLMlJuv5nYri5ZnP6vZJeNkSK2JTVEZyWdUtsRQti53DVHm0T4OXTdGit8U/UjSODJq/q4GXbfGQH0aygB9G7rk21Aggn5sWA9F9babTgIeQk3wacz5CoxFAYPs4OqmMUSSEG2eoZU0ArQBpn8dDiCCc3j+PC2wHJNaT38dBuJoteZzUBsojQNYRmdMUvSKLPiLTZWIHPyIjkANJrbZEQsAU7+2QVAxRWyYcoY/JnaQAx+SSkEGnTHB6ZJoLrzOcqgHPhiIEiCF3QU5myCxMekbRR2VPmNh3qYo7jihSgP8ScwLQ3D9MzOp/mRnKu66fKbgoAmwJnUVAbIrfqz2hMwmAK8mJhWxA9ofOyCPkmN1CnF2JCN2BE/OBK1Rpl5ovbmbrpGg1NhNekVKD1CI1bcJ6fwPWJ1mhvvYAegAAAABJRU5ErkJggg==",height:"48",width:"48",alt:"Instagram"})})})]})}),Object(f.jsxs)(w.a,{className:"foot-show",children:[Object(f.jsxs)(v.a,{ref:a,children:[Object(f.jsxs)(w.a,{className:s||T?"foot-show-1":null,children:[" ",Object(f.jsx)("h2",{children:" Contact "})," "]}),Object(f.jsx)(w.a,{className:s||T?"foot-show-2":null,children:Object(f.jsx)("a",{href:"mailto:sadamson@uccs.edu",children:Object(f.jsx)("h3",{children:" Email "})})}),Object(f.jsx)(w.a,{className:s||T?"foot-show-3":null,children:Object(f.jsx)("a",{href:"https://www.fiverr.com/giibbi",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("h3",{children:" Fiverr "})})}),Object(f.jsx)(w.a,{className:s||T?"foot-show-4":null,children:Object(f.jsx)("a",{href:"https://SamuelAdamson.github.io/#/projects",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("h3",{children:" Portfolio "})})})]}),Object(f.jsxs)(v.a,{ref:r,children:[Object(f.jsxs)(w.a,{className:i||M?"foot-show-1":null,children:[" ",Object(f.jsx)("h2",{children:" Weightlifting "})," "]}),Object(f.jsx)(w.a,{className:i||M?"foot-show-2":null,children:Object(f.jsx)("a",{href:"https://adamson.issacertifiedtrainer.com",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("h3",{children:" CPT "})})}),Object(f.jsx)(w.a,{className:i||M?"foot-show-3":null,children:Object(f.jsx)("a",{href:"https://www.issaonline.com/",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("h3",{children:" ISSA "})})}),Object(f.jsx)(w.a,{className:i||M?"foot-show-4":null,children:Object(f.jsx)("a",{href:"https://www.youtube.com/watch?v=iik25wqIuFo",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("h3",{children:" Tokyo 2020 "})})})]}),Object(f.jsxs)(v.a,{ref:h,children:[Object(f.jsxs)(w.a,{className:j||U?"foot-show-1":null,children:[" ",Object(f.jsx)("h2",{children:" Stuff I Like "})," "]}),Object(f.jsx)(w.a,{className:j||U?"foot-show-2":null,children:Object(f.jsx)("a",{href:"https://www.netflix.com/title/70205012",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("h3",{children:" Naruto "})})}),Object(f.jsx)(w.a,{className:j||U?"foot-show-3":null,children:Object(f.jsx)("a",{href:"https://www.youtube.com/watch?v=s3zzz2lxLeg",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("h3",{children:" Art "})})}),Object(f.jsx)(w.a,{className:j||U?"foot-show-4":null,children:Object(f.jsx)("a",{href:"https://liftingugly.com/",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("h3",{children:" Lifting Ugly "})})})]})]}),Object(f.jsx)("h4",{children:" Colorado Springs, CO, USA "})]})},D=a.p+"static/media/profile.8acb528b.jpg",K=a.p+"static/media/cu.96e6b558.jpg",P=a.p+"static/media/server.36a7b394.jpg",H=a.p+"static/media/lift.fc7567ca.jpg",W=a.p+"static/media/uccs.587e38ec.png",Y=a.p+"static/media/mh.cf5824cb.png",V=a.p+"static/media/gms.42ba0da8.png",z=a.p+"static/media/synaptix.395f0b0e.png",L=a.p+"static/media/issa.c71b4ea7.png",F=a.p+"static/media/fiverr.c088865d.png",Q=!0,X=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={renderSplash:!0,headerOne:null,headerTwo:null},s.handleSplashUnmount=s.handleSplashUnmount.bind(Object(h.a)(s)),s.handleHeadFadeIn=s.handleHeadFadeIn.bind(Object(h.a)(s)),s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){Q?this.handleHeadFadeIn():this.setState({headerOne:"show",headerTwo:"show"})}},{key:"componentWillUnmount",value:function(){Q=!1}},{key:"handleSplashUnmount",value:function(){this.setState({renderSplash:!1})}},{key:"handleHeadFadeIn",value:function(){var e=this;setTimeout((function(){e.setState({headerOne:"show"})}),5600),setTimeout((function(){e.setState({headerTwo:"show"})}),5800)}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"Home",children:[this.state.renderSplash&&Q?Object(f.jsx)(N,{unmountMe:this.handleSplashUnmount}):null,Object(f.jsx)(b.a,{children:Object(f.jsxs)("div",{className:"home-header",children:[Object(f.jsxs)("h1",{className:this.state.headerOne,children:[" ",Object(f.jsx)("strong",{children:" Samuel Adamson "})," "]}),Object(f.jsx)("h2",{className:this.state.headerTwo,children:" software engineer, computer science student, weightlifter "})]})}),Object(f.jsx)(I,{thresh:.55,props:Object(f.jsxs)(b.a,{children:[Object(f.jsxs)(w.a,{className:"profile-row",children:[Object(f.jsxs)(v.a,{children:[Object(f.jsx)("h2",{children:" Software Engineering "}),Object(f.jsx)("br",{}),Object(f.jsx)("h4",{children:"I have worked in multiple software engineering roles, building software such as dashboard web applications, ETL pipelines, and processor emulators."})]}),Object(f.jsxs)(v.a,{children:[Object(f.jsx)("h2",{children:" Cloud Computing "}),Object(f.jsx)("br",{}),Object(f.jsx)("h4",{children:"I am passionate about Cloud Computing and its applications. As of July 2023 I am a certified HashiCorp Terraform associate."})]}),Object(f.jsxs)(v.a,{children:[Object(f.jsx)("h2",{children:" Web Development "}),Object(f.jsx)("br",{}),Object(f.jsx)("h4",{children:"I am a full stack hobbyist, and you're looking at one of my creations right now."})]})]}),Object(f.jsxs)(w.a,{className:"profile-row",children:[Object(f.jsxs)(v.a,{children:[Object(f.jsx)("h2",{children:" From Rural Roots "}),Object(f.jsx)("br",{}),Object(f.jsx)("h4",{children:"Growing up on the Western Slope of Colorado, I developed a passion for computing. I began writing object oriented code at the age of 14 and two years later I started my first internship as a Junior Game Developer. After high school, I entered the University of Colorado as a computer science major."})]}),Object(f.jsx)(v.a,{children:Object(f.jsx)("img",{src:D,alt:"Samuel",className:"profile-img"})})]})]})}),Object(f.jsx)(G.a,{effect:"fadeOnScroll",duration:1e3,children:Object(f.jsxs)(b.a,{className:"mid-header",children:[Object(f.jsxs)("h1",{children:[" ",Object(f.jsx)("strong",{children:" My perspective "})," "]}),Object(f.jsx)("h2",{children:"everyone lives within their own subjective interpretation - itachi uchiha"})]})}),Object(f.jsx)(C,{thresh:.15,initProp:Object(f.jsxs)(b.a,{className:"lower-content-head",children:[Object(f.jsxs)(w.a,{className:"profile-row lower",children:[Object(f.jsxs)(v.a,{children:[Object(f.jsx)("h1",{children:" Purpose "}),Object(f.jsx)("br",{}),Object(f.jsxs)("h4",{children:["In this modern age of information and technology, computing will continue to play a massive role in shaping our society.",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),"I want to help harness the computational power we have at our disposal to improve lives and push our civilization forward. As I continue to write my story, I do so with this intention in mind."]})]}),Object(f.jsx)(v.a,{sm:3})]}),Object(f.jsx)("br",{}),Object(f.jsxs)(w.a,{className:"profile-row lower",children:[Object(f.jsxs)(v.a,{className:"my-auto",children:[Object(f.jsx)("h2",{children:" Education "}),Object(f.jsx)("br",{}),Object(f.jsx)("h4",{children:"After graduating salutatorian from Grand Junction High School in 2019, I began my undergraduate studies at the University of Colorado. Throughout my academic career, I maintain a 4.0 GPA."})]}),Object(f.jsx)(v.a,{children:Object(f.jsx)("img",{src:K,alt:"Univ of Colorado",className:"profile-img"})})]})]}),props:[Object(f.jsx)(b.a,{children:Object(f.jsxs)(w.a,{className:"profile-row lower",children:[Object(f.jsxs)(v.a,{className:"my-auto",children:[Object(f.jsx)("h2",{children:" Professional Work "}),Object(f.jsx)("br",{}),Object(f.jsx)("h4",{children:"Over the past few years I have worked in multiple industries as both a software engineer intern and data engineer. Some of these organizations include JPMorgan Chase & Co, Carrier Global, and The MITRE Corporation. In my roles I have worked on projects with a focus in full-stack development, cloud computing infrastructure, high performance computing, and 3D data transformations."}),Object(f.jsx)("br",{}),Object(f.jsx)(r.b,{exact:!0,to:"/projects",children:Object(f.jsx)("h4",{className:"lower-button",children:" see my projects "})})]}),Object(f.jsx)(v.a,{children:Object(f.jsx)("img",{src:P,alt:"Work Experience",className:"profile-img"})})]})}),Object(f.jsx)(b.a,{children:Object(f.jsxs)(w.a,{className:"profile-row lower",children:[Object(f.jsxs)(v.a,{className:"my-auto",children:[Object(f.jsx)("h2",{children:" AFK "}),Object(f.jsx)("br",{}),Object(f.jsx)("h4",{children:"When I'm away from the keyboard (AFK), you can find me in the gym. For a year and a half I practiced powerlifting before transitioning to competitive weightlifitng. In the spirit of sharing my passion for lifting, I operate as an ISSA certified personal trainer."})]}),Object(f.jsx)(v.a,{children:Object(f.jsx)("img",{src:H,alt:"AFK",className:"profile-img"})})]})}),Object(f.jsx)(b.a,{children:Object(f.jsxs)(y.a,{flush:!0,children:[Object(f.jsxs)(y.a.Item,{eventKey:"0",children:[Object(f.jsx)(y.a.Header,{children:Object(f.jsx)("h2",{children:" Education "})}),Object(f.jsx)(y.a.Body,{children:Object(f.jsxs)(w.a,{children:[Object(f.jsx)(v.a,{sm:4}),Object(f.jsx)(v.a,{children:Object(f.jsx)("a",{href:"https://www.uccs.edu/",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("img",{src:W,alt:"UCCS",className:"acc-img"})})}),Object(f.jsx)(v.a,{sm:4})]})})]}),Object(f.jsxs)(y.a.Item,{eventKey:"1",children:[Object(f.jsx)(y.a.Header,{children:Object(f.jsx)("h2",{children:" Experience "})}),Object(f.jsx)(y.a.Body,{children:Object(f.jsxs)(w.a,{children:[Object(f.jsx)(v.a,{sm:4}),Object(f.jsx)(v.a,{children:Object(f.jsx)("a",{href:"https://monumenthealth.net/",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("img",{src:Y,alt:"Monument Health",className:"acc-img2"})})}),Object(f.jsx)(v.a,{children:Object(f.jsx)("a",{href:"https://gmsdnd.com/",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("img",{src:V,alt:"Grand Mesa Software",className:"acc-img"})})}),Object(f.jsx)(v.a,{children:Object(f.jsx)("a",{href:"http://synaptixgames.com/",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("img",{src:z,alt:"Synaptix Games",className:"acc-img2"})})}),Object(f.jsx)(v.a,{sm:4})]})})]}),Object(f.jsxs)(y.a.Item,{eventKey:"2",children:[Object(f.jsx)(y.a.Header,{children:Object(f.jsx)("h2",{children:" Freelance "})}),Object(f.jsx)(y.a.Body,{children:Object(f.jsxs)(w.a,{children:[Object(f.jsx)(v.a,{sm:4}),Object(f.jsx)(v.a,{children:Object(f.jsx)("a",{href:"https://adamson.issacertifiedtrainer.com/",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("img",{src:L,alt:"ISSA",className:"acc-img"})})}),Object(f.jsx)(v.a,{children:Object(f.jsx)("a",{href:"https://www.fiverr.com/giibbi",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("img",{src:F,alt:"Fiverr",className:"acc-img"})})}),Object(f.jsx)(v.a,{sm:4})]})})]})]})})],foot:Object(f.jsx)(B,{})})]})}}]),a}(s.Component),J=a(85),Z=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"Proj",children:Object(f.jsxs)(b.a,{children:[Object(f.jsx)(v.a,{sm:1}),Object(f.jsx)(w.a,{className:"profile-row lower",children:Object(f.jsx)(v.a,{children:this.props.children})}),Object(f.jsxs)(w.a,{children:[Object(f.jsx)(v.a,{sm:1}),Object(f.jsx)(v.a,{className:"car",children:Object(f.jsxs)(J.a,{variant:this.props.variant,children:[Object(f.jsx)(J.a.Item,{interval:2e3,children:Object(f.jsx)("img",{src:this.props.image1,alt:"carousel"})}),Object(f.jsx)(J.a.Item,{interval:2e3,children:Object(f.jsx)("img",{src:this.props.image2,alt:"carousel"})}),Object(f.jsx)(J.a.Item,{interval:2e3,children:Object(f.jsx)("img",{src:this.props.image3,alt:"carousel"})})]})}),Object(f.jsx)(v.a,{sm:1})]})]})})}}]),a}(s.Component),q=Z,_=a.p+"static/media/crypto1.09b79bf1.png",$=a.p+"static/media/crypto2.8aa9d8b5.png",ee=a.p+"static/media/crypto3.dbf04a9d.png",te=a.p+"static/media/wa-map1.94be534b.png",ae=a.p+"static/media/wa-map2.17b7a4c8.png",se=a.p+"static/media/wa-map3.7f4dfee0.png",ce=a.p+"static/media/covcrypto1.64aa68ee.png",ne=a.p+"static/media/covcrypto2.2729d9a8.png",re=a.p+"static/media/covcrypto3.069dfb84.png",ie=a.p+"static/media/county1.6f64f7d2.png",le=a.p+"static/media/county2.f0f9a45e.png",oe=a.p+"static/media/county3.051696b5.png",he=!0,je=function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={headerOne:null,headerTwo:null},s.handleHeadFadeIn=s.handleHeadFadeIn.bind(Object(h.a)(s)),s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;he?this.handleHeadFadeIn():setTimeout((function(){e.setState({headerOne:"show",headerTwo:"show"})}),70)}},{key:"componentWillUnmount",value:function(){he=!1}},{key:"handleHeadFadeIn",value:function(){var e=this;setTimeout((function(){e.setState({headerOne:"show"})}),700),setTimeout((function(){e.setState({headerTwo:"show"})}),1100)}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"Projects",children:[Object(f.jsx)(b.a,{children:Object(f.jsxs)("div",{className:"proj-header",children:[Object(f.jsxs)("h1",{className:this.state.headerOne,children:[" ",Object(f.jsx)("strong",{children:" My projects "})," "]}),Object(f.jsx)("h2",{className:this.state.headerTwo,children:"building the future one step at a time"})]})}),Object(f.jsx)(C,{thresh:.15,initProp:Object(f.jsxs)(q,{image1:_,image2:$,image3:ee,variant:null,children:[Object(f.jsx)("h1",{children:" Crypto "}),Object(f.jsx)("br",{}),Object(f.jsx)("h4",{children:"Utilizing the CoinGecko REST API, I created a cryptocurrency sparkline web-application with live updating prices, market caps, and other financial data. In the future I plan to expand this application by adding machine learning based predictive modeling."}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"align-box",children:Object(f.jsx)("a",{href:"https://github.com/SamuelAdamson/crypto-sa",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("h4",{className:"lower-button",children:" repository "})})})]}),props:[Object(f.jsxs)(q,{image1:te,image2:ae,image3:se,variant:"dark",children:[Object(f.jsx)("h1",{children:" Airport Proximity and Climate Mapping "}),Object(f.jsx)("br",{}),Object(f.jsx)("h4",{children:"Utlizing public datasets warehoused in Google Cloud Platform, I created a python project that displays optimal locations in mainland US based on proximity to airports and mild weather. Weather variables considered include average temperature and precipitation."}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"align-box",children:Object(f.jsx)("a",{href:"https://github.com/SamuelAdamson/Weather-AirportProximity-Mapping",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("h4",{className:"lower-button",children:" repository "})})})]}),Object(f.jsxs)(q,{image1:ce,image2:ne,image3:re,variant:"dark",children:[Object(f.jsx)("h1",{children:" COVID-19 Prevalence vs. Cryptocurrency Popularity "}),Object(f.jsx)("br",{}),Object(f.jsx)("h4",{children:"Utilizing various data science tools including Pandas and Google Cloud Bigquery, I conducted some analysis on the relationship between COVID-19 Prevalence and Cryptocurrency popularity. Metrics used in this project include Bitcoin and Ethereum blockchain data as well as COVID-19 case/death count. In this exercise, I utilized Python, R, and SQL."}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"align-box",children:Object(f.jsx)("a",{href:"https://github.com/SamuelAdamson/covid-crypto",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("h4",{className:"lower-button",children:" repository "})})})]}),Object(f.jsxs)(q,{image1:ie,image2:le,image3:oe,variant:"dark",children:[Object(f.jsx)("h1",{children:" County Site Redesign "}),Object(f.jsx)("br",{}),Object(f.jsx)("h4",{children:"Using the ReactJS frontend framework, I created a modernized version of my local County Clerk's Office website. The site is a single page application which optimizes the site's performance. Additionally, the site features updated reactivity and animations that were not present in the original site."}),Object(f.jsx)("br",{}),Object(f.jsx)("div",{className:"align-box",children:Object(f.jsx)("a",{href:"https://github.com/SamuelAdamson/eng325-redesign",target:"_blank",rel:"noreferrer",children:Object(f.jsx)("h4",{className:"lower-button",children:" repository "})})})]})],foot:Object(f.jsx)(B,{})})]})}}]),a}(s.Component);var de=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(r.a,{hashType:"slash",children:[Object(f.jsx)(g,{}),Object(f.jsx)(A,{}),Object(f.jsxs)(i.c,{children:[Object(f.jsx)(i.a,{exact:!0,path:"/",component:X}),Object(f.jsx)(i.a,{exact:!0,path:"/projects",component:je})]})]})})};n.a.render(Object(f.jsx)(de,{}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.996f070c.chunk.js.map