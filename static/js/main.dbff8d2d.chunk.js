(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(14),c=n.n(a),i=(n(41),n(42),n(43),n(24)),l=n(5),r=n(55),o=n(56),h=n(57),j=n.p+"static/media/site-logo.d57176c5.png",u=n(1),d=function(){return Object(u.jsx)("div",{className:"Navi",children:Object(u.jsx)(r.a,{className:"pt-3",children:Object(u.jsxs)(o.a,{expand:"lg",children:[Object(u.jsx)("div",{className:"nav-item",children:Object(u.jsx)(i.b,{exact:!0,to:"/",children:Object(u.jsx)("img",{src:j,alt:"samuel"})})}),Object(u.jsxs)(o.a.Collapse,{className:"justify-content-end",children:[Object(u.jsx)("div",{className:"right-nav-item",children:Object(u.jsx)(i.b,{exact:!0,to:"/projects",children:Object(u.jsx)(h.a,{variant:"custom",size:"lg",children:Object(u.jsx)("h3",{children:" projects "})})})}),Object(u.jsx)("div",{className:"right-nav-item",children:Object(u.jsx)(h.a,{variant:"custom-social",size:"lg",href:"https://github.com/SamuelAdamson",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("h3",{children:" GitHub "})})}),Object(u.jsx)("div",{className:"right-nav-item",children:Object(u.jsx)(h.a,{variant:"custom-social",size:"lg",href:"https://www.linkedin.com/in/samuel-adamson-4397051b8/",target:"_blank",rel:"noreferrer",children:Object(u.jsx)("h3",{children:" LinkedIn "})})})]})]})})})},b=n(12),m=n(13),p=n(21),O=n(18),x=n(16),v=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).state={splashClass:"SplashScreen",headClass:"splash-head"},e.unmountSplash=e.unmountSplash.bind(Object(p.a)(e)),e}return Object(m.a)(n,[{key:"unmountSplash",value:function(){this.props.unmountMe()}},{key:"componentDidMount",value:function(){var e=this,t=1200;setTimeout((function(){e.setState({headClass:"splash-head active"})}),t),setTimeout((function(){e.setState({headClass:"splash-head active underline"})}),t+=1200),setTimeout((function(){e.setState({headClass:"splash-head active"})}),t+=1200),setTimeout((function(){e.setState({splashClass:"SplashScreen fadeOut"}),setTimeout((function(){e.unmountSplash()}),2e3)}),t+=1500)}},{key:"render",value:function(){return Object(u.jsx)("div",{className:this.state.splashClass,children:Object(u.jsx)("h1",{className:this.state.headClass,children:"samuel"})})}}]),n}(s.Component),f=!0,S=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(e){var s;return Object(b.a)(this,n),(s=t.call(this,e)).state={renderSplash:!0},s.handleSplashUnmount=s.handleSplashUnmount.bind(Object(p.a)(s)),s}return Object(m.a)(n,[{key:"componentWillUnmount",value:function(){f=!1}},{key:"handleSplashUnmount",value:function(){this.setState({renderSplash:!1})}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"Home",children:[this.state.renderSplash&&f?Object(u.jsx)(v,{unmountMe:this.handleSplashUnmount}):null,Object(u.jsx)(r.a,{})]})}}]),n}(s.Component),g=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"Projects",children:Object(u.jsx)("h1",{children:" coming soon "})})}}]),n}(s.Component),k=g;var N=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(i.a,{hashType:"slash",children:[Object(u.jsx)(d,{}),Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"/",component:S}),Object(u.jsx)(l.a,{exact:!0,path:"/projects",component:k})]})]})})};c.a.render(Object(u.jsx)(N,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.dbff8d2d.chunk.js.map