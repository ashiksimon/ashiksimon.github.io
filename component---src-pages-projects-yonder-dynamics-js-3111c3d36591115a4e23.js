/*! For license information please see component---src-pages-projects-yonder-dynamics-js-3111c3d36591115a4e23.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"46rQ":function(e,t,n){e.exports=n.p+"static/yonder-3-f9108b3cd3554d42ae9ac438dc163d7c.jpeg"},"7Nj9":function(e,t,n){e.exports=n.p+"static/yonder-2-69dd07d689033e35c1f1bd6e79be0f46.jpeg"},"7j6X":function(e,t,n){"use strict";var r=n("dZvc");function a(e,t){return function(e){var t=Object(r.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var i=/([A-Z])/g;var o=/^ms-/;function c(e){return function(e){return e.replace(i,"-$1").toLowerCase()}(e).replace(o,"-ms-")}var u=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(c(t))||a(e).getPropertyValue(c(t));Object.keys(t).forEach((function(a){var i=t[a];i||0===i?!function(e){return!(!e||!u.test(e))}(a)?n+=c(a)+": "+i+";":r+=a+"("+i+") ":e.style.removeProperty(c(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}},GEtZ:function(e,t,n){"use strict";var r=n("SJxq"),a=!1,i=!1;try{var o={get passive(){return a=!0},get once(){return i=a=!0}};r.a&&(window.addEventListener("test",o,o),window.removeEventListener("test",o,!0))}catch(s){}var c=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!i){var o=r.once,c=r.capture,u=n;!i&&o&&(u=n.__once||function e(r){this.removeEventListener(t,e,c),n.call(this,r)},n.__once=u),e.addEventListener(t,u,a?r:c)}e.addEventListener(t,n,r)};var u=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};t.a=function(e,t,n,r){return c(e,t,n,r),function(){u(e,t,n,r)}}},I0b4:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("C5Lo"),o=n("vrFN"),c=n("hrkq"),u=n("Unk1"),s=n("wx14"),l=n("zLVn"),d=n("ZCiN");var f=function(e,t){var n=Object(r.useRef)(!0);Object(r.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},p=n("XcHJ"),m=n("i52p"),v=Math.pow(2,31)-1;function b(){var e=Object(p.a)(),t=Object(r.useRef)();return Object(m.a)((function(){return clearTimeout(t.current)})),Object(r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(n(),a<=v?t.current=setTimeout(r,a):function e(t,n,r){var a=r-Date.now();t.current=a<=v?setTimeout(n,a):setTimeout((function(){return e(t,n,r)}),v)}(t,r,Date.now()+a))},clear:n}}),[])}var h=n("TSYQ"),E=n.n(h),x=n("7j6X"),w=n("GEtZ");function y(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),i=Object(w.a)(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),i()}}function g(e,t,n,r){var a,i,o;null==n&&(a=e,i=Object(x.a)(a,"transitionDuration")||"",o=-1===i.indexOf("ms")?1e3:1,n=parseFloat(i)*o||0);var c=y(e,n,r),u=Object(w.a)(e,"transitionend",t);return function(){c(),u()}}var O=n("dI71"),j=n("i8i4"),C=n.n(j),N=!1,S=a.a.createContext(null),k=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,i=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?i?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}Object(O.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[C.a.findDOMNode(this),r],i=a[0],o=a[1],c=this.getTimeouts(),u=r?c.appear:c.enter;!e&&!n||N?this.safeSetState({status:"entered"},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:"entering"},(function(){t.props.onEntering(i,o),t.onTransitionEnd(u,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(i,o)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:C.a.findDOMNode(this);t&&!N?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:C.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=a[0],o=a[1];this.props.addEndListener(i,o)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(l.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.a.createElement(S.Provider,{value:null},"function"==typeof n?n(e,r):a.a.cloneElement(a.a.Children.only(n),r))},t}(a.a.Component);function T(){}k.contextType=S,k.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:T,onEntering:T,onEntered:T,onExit:T,onExiting:T,onExited:T},k.UNMOUNTED="unmounted",k.EXITED="exited",k.ENTERING="entering",k.ENTERED="entered",k.EXITING="exiting";var I=k,L=n("17x9"),D=n.n(L),R=n("JCAc"),P=n("YdCC"),M=Object(P.a)("carousel-caption"),A=Object(P.a)("carousel-item");function V(e,t){var n=0;return a.a.Children.map(e,(function(e){return a.a.isValidElement(e)?t(e,n++):e}))}var F=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};function U(e){return!e||"#"===e.trim()}var X=a.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"a":n,i=e.disabled,o=e.onKeyDown,c=Object(l.a)(e,["as","disabled","onKeyDown"]),u=function(e){var t=c.href,n=c.onClick;(i||U(t))&&e.preventDefault(),i?e.stopPropagation():n&&n(e)};return U(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),i&&(c.tabIndex=-1,c["aria-disabled"]=!0),a.a.createElement(r,Object(s.a)({ref:t},c,{onClick:u,onKeyDown:F((function(e){" "===e.key&&(e.preventDefault(),u(e))}),o)}))}));X.displayName="SafeAnchor";var q=X,Y=n("vUet");var Z={bsPrefix:D.a.string,as:D.a.elementType,slide:D.a.bool,fade:D.a.bool,controls:D.a.bool,indicators:D.a.bool,activeIndex:D.a.number,onSelect:D.a.func,onSlide:D.a.func,onSlid:D.a.func,interval:D.a.number,keyboard:D.a.bool,pause:D.a.oneOf(["hover",!1]),wrap:D.a.bool,touch:D.a.bool,prevIcon:D.a.node,prevLabel:D.a.string,nextIcon:D.a.node,nextLabel:D.a.string},_={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:a.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:a.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var J=a.a.forwardRef((function(e,t){var n=Object(R.a)(e,{activeIndex:"onSelect"}),i=n.as,o=void 0===i?"div":i,c=n.bsPrefix,u=n.slide,p=n.fade,m=n.controls,v=n.indicators,h=n.activeIndex,x=n.onSelect,w=n.onSlide,y=n.onSlid,O=n.interval,j=n.keyboard,C=n.onKeyDown,N=n.pause,S=n.onMouseOver,k=n.onMouseOut,T=n.wrap,L=n.touch,D=n.onTouchStart,P=n.onTouchMove,M=n.onTouchEnd,A=n.prevIcon,F=n.prevLabel,U=n.nextIcon,X=n.nextLabel,Z=n.className,_=n.children,J=Object(l.a)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),K=Object(Y.a)(c,"carousel"),Q=Object(r.useRef)(null),H=Object(r.useState)("next"),z=H[0],G=H[1],B=Object(r.useState)(!1),W=B[0],$=B[1],ee=Object(r.useState)(h||0),te=ee[0],ne=ee[1];W||h===te||(Q.current?(G(Q.current),Q.current=null):G((h||0)>te?"next":"prev"),u&&$(!0),ne(h||0));var re=a.a.Children.toArray(_).filter(a.a.isValidElement).length,ae=Object(r.useCallback)((function(e){if(!W){var t=te-1;if(t<0){if(!T)return;t=re-1}Q.current="prev",x&&x(t,e)}}),[W,te,x,T,re]),ie=Object(d.a)((function(e){if(!W){var t=te+1;if(t>=re){if(!T)return;t=0}Q.current="next",x&&x(t,e)}})),oe=Object(r.useRef)();Object(r.useImperativeHandle)(t,(function(){return{element:oe.current,prev:ae,next:ie}}));var ce=Object(d.a)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(oe.current)&&ie()})),ue="next"===z?"left":"right";f((function(){u||(w&&w(te,ue),y&&y(te,ue))}),[te]);var se=K+"-item-"+z,le=K+"-item-"+ue,de=Object(r.useCallback)((function(e){!function(e){e.offsetHeight}(e),w&&w(te,ue)}),[w,te,ue]),fe=Object(r.useCallback)((function(){$(!1),y&&y(te,ue)}),[y,te,ue]),pe=Object(r.useCallback)((function(e){if(j&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void ae(e);case"ArrowRight":return e.preventDefault(),void ie(e)}C&&C(e)}),[j,C,ae,ie]),me=Object(r.useState)(!1),ve=me[0],be=me[1],he=Object(r.useCallback)((function(e){"hover"===N&&be(!0),S&&S(e)}),[N,S]),Ee=Object(r.useCallback)((function(e){be(!1),k&&k(e)}),[k]),xe=Object(r.useRef)(0),we=Object(r.useRef)(0),ye=Object(r.useState)(!1),ge=ye[0],Oe=ye[1],je=b(),Ce=Object(r.useCallback)((function(e){xe.current=e.touches[0].clientX,we.current=0,L&&Oe(!0),D&&D(e)}),[L,D]),Ne=Object(r.useCallback)((function(e){e.touches&&e.touches.length>1?we.current=0:we.current=e.touches[0].clientX-xe.current,P&&P(e)}),[P]),Se=Object(r.useCallback)((function(e){if(L){var t=we.current;if(Math.abs(t)<=40)return;t>0?ae(e):ie(e)}je.set((function(){Oe(!1)}),O||void 0),M&&M(e)}),[L,ae,ie,je,O,M]),ke=null!=O&&!ve&&!ge&&!W,Te=Object(r.useRef)();Object(r.useEffect)((function(){if(ke)return Te.current=window.setInterval(document.visibilityState?ce:ie,O||void 0),function(){null!==Te.current&&clearInterval(Te.current)}}),[ke,ie,O,ce]);var Ie=Object(r.useMemo)((function(){return v&&Array.from({length:re},(function(e,t){return function(e){x&&x(t,e)}}))}),[v,re,x]);return a.a.createElement(o,Object(s.a)({ref:oe},J,{onKeyDown:pe,onMouseOver:he,onMouseOut:Ee,onTouchStart:Ce,onTouchMove:Ne,onTouchEnd:Se,className:E()(Z,K,u&&"slide",p&&K+"-fade")}),v&&a.a.createElement("ol",{className:K+"-indicators"},V(_,(function(e,t){return a.a.createElement("li",{key:t,className:t===te?"active":void 0,onClick:Ie?Ie[t]:void 0})}))),a.a.createElement("div",{className:K+"-inner"},V(_,(function(e,t){var n=t===te;return u?a.a.createElement(I,{in:n,onEnter:n?de:void 0,onEntered:n?fe:void 0,addEndListener:g},(function(t){return a.a.cloneElement(e,{className:E()(e.props.className,n&&"entered"!==t&&se,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&le)})})):a.a.cloneElement(e,{className:E()(e.props.className,n&&"active")})}))),m&&a.a.createElement(a.a.Fragment,null,(T||0!==h)&&a.a.createElement(q,{className:K+"-control-prev",onClick:ae},A,F&&a.a.createElement("span",{className:"sr-only"},F)),(T||h!==re-1)&&a.a.createElement(q,{className:K+"-control-next",onClick:ie},U,X&&a.a.createElement("span",{className:"sr-only"},X))))}));J.displayName="Carousel",J.propTypes=Z,J.defaultProps=_,J.Caption=M,J.Item=A;var K=J;t.default=function(){return a.a.createElement(i.a,null,a.a.createElement(o.a,{title:"Yonder Dynamics Arm"}),a.a.createElement("div",{className:"project-summary pt-4",id:"page-container"},a.a.createElement("div",{id:"project-content-wrap"},a.a.createElement("div",{className:"container p-5"},a.a.createElement("div",{className:"row justify-content-center pt-5 pb-5"},a.a.createElement("div",{className:"col-md-12 text-center"},a.a.createElement("h1",null,"Yonder Dynamics"))),a.a.createElement(K,{className:"mb-5",style:{marginRight:"5px",marginLeft:"4px"}},a.a.createElement(K.Item,{interval:3e4},a.a.createElement("div",{className:"embed-responsive embed-responsive-4by3"},a.a.createElement("iframe",{scrolling:"no",frameBorder:"0",allowFullScreen:!0,src:"https://www.3dcontentcentral.com/external-site-embed.aspx?format=3D&catalogid=171&modelid=1471532&width=400&height=300&edraw=true",name:"PreviewFrame3D",id:"PreviewFrame3D",width:"400",height:"300"})),a.a.createElement(K.Caption,null,a.a.createElement("p",null,"Robot arm rotating base."))),a.a.createElement(K.Item,{interval:3e4},a.a.createElement("div",{className:"embed-responsive embed-responsive-4by3"},a.a.createElement("iframe",{scrolling:"no",frameBorder:"0",allowFullScreen:!0,src:"https://www.3dcontentcentral.com/external-site-embed.aspx?format=3D&catalogid=171&modelid=1471242&width=400&height=300&edraw=true",name:"PreviewFrame3D",id:"PreviewFrame3D",width:"400",height:"300"})),a.a.createElement(K.Caption,null,a.a.createElement("p",null,"Low pressure balloon wheel hub."))),a.a.createElement(K.Item,{interval:3e4},a.a.createElement("div",{className:"embed-responsive embed-responsive-4by3"},a.a.createElement("iframe",{scrolling:"no",frameBorder:"0",allowFullScreen:!0,src:"https://www.3dcontentcentral.com/external-site-embed.aspx?format=3D&catalogid=171&modelid=1471533&width=400&height=300&edraw=true",name:"PreviewFrame3D",id:"PreviewFrame3D",width:"400",height:"300"})),a.a.createElement(K.Caption,null,a.a.createElement("p",null,"Wrist assembly 3D printed gear modification.")))),a.a.createElement("div",{style:{marginRight:"-5px",marginLeft:"-4px"}},a.a.createElement(c.a,{photos:u.a})),a.a.createElement("div",{className:"embed-responsive embed-responsive-4by3 mt-5"},a.a.createElement("iframe",{className:"embed-responsive-item",width:"400",height:"300",src:"https://www.youtube.com/embed/766YikIs_aA",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),a.a.createElement("div",{className:"embed-responsive embed-responsive-4by3 mt-5"},a.a.createElement("iframe",{className:"embed-responsive-item",width:"400",height:"300",src:"https://www.youtube.com/embed/mREPp86L5vc",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))))))}},JCAc:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("wx14"),a=n("zLVn"),i=n("q1tI");n("QLaP");function o(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function c(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function u(e,t){return Object.keys(t).reduce((function(n,u){var s,l=n,d=l[o(u)],f=l[u],p=Object(a.a)(l,[o(u),u].map(c)),m=t[u],v=function(e,t,n){var r=Object(i.useRef)(void 0!==e),a=Object(i.useState)(t),o=a[0],c=a[1],u=void 0!==e,s=r.current;return r.current=u,!u&&s&&o!==t&&c(t),[u?e:o,Object(i.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),c(e)}),[n])]}(f,d,e[m]),b=v[0],h=v[1];return Object(r.a)({},p,((s={})[u]=b,s[m]=h,s))}),e)}n("dI71"),n("94VI")},SJxq:function(e,t,n){"use strict";t.a=!("undefined"==typeof window||!window.document||!window.document.createElement)},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Unk1:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=[{src:n("bVL/"),width:4.5,height:3},{src:n("7Nj9"),width:3,height:2},{src:n("46rQ"),width:3,height:2},{src:n("VXZ9"),width:3,height:2}]},VXZ9:function(e,t,n){e.exports=n.p+"static/yonder-4-fd74b458c603f5112fe6d6e24ecf88e4.jpeg"},XcHJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");function a(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},YdCC:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("wx14"),a=n("zLVn"),i=n("TSYQ"),o=n.n(i),c=/-(.)/g;var u=n("q1tI"),s=n.n(u),l=n("vUet"),d=function(e){return e[0].toUpperCase()+(t=e,t.replace(c,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function f(e,t){var n=void 0===t?{}:t,i=n.displayName,c=void 0===i?d(e):i,u=n.Component,f=n.defaultProps,p=s.a.forwardRef((function(t,n){var i=t.className,c=t.bsPrefix,d=t.as,f=void 0===d?u||"div":d,p=Object(a.a)(t,["className","bsPrefix","as"]),m=Object(l.a)(c,e);return s.a.createElement(f,Object(r.a)({ref:n,className:o()(i,m)},p))}));return p.defaultProps=f,p.displayName=c,p}},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("q1tI");var a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function i(e){var t=a(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},"bVL/":function(e,t,n){e.exports=n.p+"static/yonder-1-96e608e815f40d066f733f941d5a113f.png"},dZvc:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},i52p:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");function a(e){var t,n,a=(t=e,(n=Object(r.useRef)(t)).current=t,n);Object(r.useEffect)((function(){return function(){return a.current()}}),[])}},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("wx14");var r=n("q1tI"),a=n.n(r),i=a.a.createContext({});i.Consumer,i.Provider;function o(e,t){var n=Object(r.useContext)(i);return e||n[t]||t}},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=component---src-pages-projects-yonder-dynamics-js-3111c3d36591115a4e23.js.map