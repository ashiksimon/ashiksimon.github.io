/*! For license information please see component---src-pages-index-js-b8059cde2feb14c48c67.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/lTg":function(e,a,t){e.exports=t.p+"static/rover-eb50b8ae73bdd79d020742969edd6fd8.png"},Bl7J:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),r=t("Wbzz");t("i8i4"),t("oqc9");function i(){document.getElementById("header").classList.remove("active")}var c=function(e){e.siteTitle;return l.a.createElement("header",{id:"header"},l.a.createElement("div",{onClick:i,id:"mobile-menu-close"},l.a.createElement("span",null,"Close")," ",l.a.createElement("i",{className:"fa fa-times","aria-hidden":"true"})),l.a.createElement("ul",{id:"menu",onClick:i,className:"shadow"},l.a.createElement("li",null,l.a.createElement("a",{href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"#experience"},"Experience")),l.a.createElement("li",null,l.a.createElement("a",{href:"#education"},"Education")),l.a.createElement("li",null,l.a.createElement("a",{href:"#projects"},"Projects")),l.a.createElement("li",null,l.a.createElement("a",{href:"#skills"},"Skills")),l.a.createElement("li",null,l.a.createElement("a",{href:"#contact"},"Contact"))))};c.defaultProps={siteTitle:""};var s=c;t("aN63"),t("8ypT"),a.a=function(e){var a,t=e.children,n=Object(r.useStaticQuery)("3649515864");return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{siteTitle:(null===(a=n.site.siteMetadata)||void 0===a?void 0:a.title)||"Title"}),l.a.createElement("div",null,l.a.createElement("main",null,t),l.a.createElement("footer",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-5 copyright"},l.a.createElement("p",null,"Copyright © ",(new Date).getFullYear()," Ashik Simon")),l.a.createElement("div",{className:"col-sm-5 social"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://linkedin.com/in/ashiksimon",target:"_blank"},l.a.createElement("i",{className:"fa fa-linkedin","aria-hidden":"true"}))))))))))}},RXBc:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return J}));var n=t("q1tI"),l=t.n(n),r=t("Bl7J"),i=t("Wbzz"),c=t("vrFN");function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function o(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}var m=t("TSYQ"),d=t.n(m),u=l.a.createContext({});u.Consumer,u.Provider;function v(e,a){var t=Object(n.useContext)(u);return e||t[a]||a}var h=/-(.)/g;var p=function(e){return e[0].toUpperCase()+(a=e,a.replace(h,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function E(e,a){var t=void 0===a?{}:a,n=t.displayName,r=void 0===n?p(e):n,i=t.Component,c=t.defaultProps,m=l.a.forwardRef((function(a,t){var n=a.className,r=a.bsPrefix,c=a.as,m=void 0===c?i||"div":c,u=o(a,["className","bsPrefix","as"]),h=v(r,e);return l.a.createElement(m,s({ref:t,className:d()(n,h)},u))}));return m.defaultProps=c,m.displayName=r,m}var f=function(e){return l.a.forwardRef((function(a,t){return l.a.createElement("div",s({},a,{ref:t,className:d()(a.className,e)}))}))},g=l.a.createContext(null);g.displayName="CardContext";var b=g,N=l.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,r=e.variant,i=e.as,c=void 0===i?"img":i,m=o(e,["bsPrefix","className","variant","as"]),u=v(t,"card-img");return l.a.createElement(c,s({ref:a,className:d()(r?u+"-"+r:u,n)},m))}));N.displayName="CardImg",N.defaultProps={variant:null};var y=N,w=f("h5"),k=f("h6"),T=E("card-body"),x=E("card-title",{Component:w}),P=E("card-subtitle",{Component:k}),C=E("card-link",{Component:"a"}),D=E("card-text",{Component:"p"}),S=E("card-header"),j=E("card-footer"),I=E("card-img-overlay"),A=l.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,i=e.bg,c=e.text,m=e.border,u=e.body,h=e.children,p=e.as,E=void 0===p?"div":p,f=o(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=v(t,"card"),N=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:g+"-header"}}),[g]);return l.a.createElement(b.Provider,{value:N},l.a.createElement(E,s({ref:a},f,{className:d()(r,g,i&&"bg-"+i,c&&"text-"+c,m&&"border-"+m)}),u?l.a.createElement(T,null,h):h))}));A.displayName="Card",A.defaultProps={body:!1},A.Img=y,A.Title=x,A.Subtitle=P,A.Body=T,A.Link=C,A.Text=D,A.Header=S,A.Footer=j,A.ImgOverlay=I;var B=A;var O=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!=typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var t=arguments.length,n=new Array(t),l=0;l<t;l++)n[l]=arguments[l];e.apply(this,n),a.apply(this,n)}}),null)};function M(e){return!e||"#"===e.trim()}var R=l.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"a":t,r=e.disabled,i=e.onKeyDown,c=o(e,["as","disabled","onKeyDown"]),m=function(e){var a=c.href,t=c.onClick;(r||M(a))&&e.preventDefault(),r?e.stopPropagation():t&&t(e)};return M(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),r&&(c.tabIndex=-1,c["aria-disabled"]=!0),l.a.createElement(n,s({ref:a},c,{onClick:m,onKeyDown:O((function(e){" "===e.key&&(e.preventDefault(),m(e))}),i)}))}));R.displayName="SafeAnchor";var q=R,F=l.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.variant,r=e.size,i=e.active,c=e.className,m=e.block,u=e.type,h=e.as,p=o(e,["bsPrefix","variant","size","active","className","block","type","as"]),E=v(t,"btn"),f=d()(c,E,i&&"active",E+"-"+n,m&&E+"-block",r&&E+"-"+r);if(p.href)return l.a.createElement(q,s({},p,{as:h,ref:a,className:d()(f,p.disabled&&"disabled")}));a&&(p.ref=a),u?p.type=u:h||(p.type="button");var g=h||"button";return l.a.createElement(g,s({},p,{className:f}))}));F.displayName="Button",F.defaultProps={variant:"primary",active:!1,disabled:!1};var L=F,z=E("card-deck");function _(){document.getElementById("header").classList.add("active")}var H,Y,G=(H=t("tvlH"),Y={},H.keys().map((function(e,a){Y[e.replace("./","")]=H(e)})),Y);function J(){return l.a.createElement(r.a,null,l.a.createElement(c.a,{title:"Home"}),l.a.createElement("div",{onClick:_,id:"mobile-menu-open",className:"shadow-large"},l.a.createElement("i",{className:"fa fa-bars","aria-hidden":"true"})),l.a.createElement("div",{id:"lead"},l.a.createElement("div",{id:"lead-content"},l.a.createElement("h1",null,"Ashik Simon"),l.a.createElement("h2",null,"Mechanical Engineer"),l.a.createElement("a",{href:"Ashik_Simon_Resume.pdf",className:"btn-rounded-dark",target:"_blank",download:!0},"Download Resume")),l.a.createElement("div",{id:"lead-overlay"})),l.a.createElement("div",{id:"about"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("h2",{className:"heading"},"About Me")),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat. Donec eu vehicula neque. Donec viverra lorem nunc, tempus euismod eros sollicitudin ut. Quisque et tincidunt libero. Donec id pharetra justo. Proin euismod lacinia dolor, eu scelerisque justo tempus pharetra. Vivamus nunc justo, finibus ut nisl sed, euismod rhoncus nulla. Proin sed magna egestas, egestas ante et, congue eros. In consequat, mauris dapibus tincidunt suscipit, ex libero aliquet diam, at maximus risus enim non leo."))))),l.a.createElement("div",{id:"experience",className:"background-alt"},l.a.createElement("h2",{className:"heading"},"Experience"),l.a.createElement("div",{id:"experience-timeline"},l.a.createElement("div",{className:"vtimeline-point"},l.a.createElement("div",{className:"vtimeline-icon"},l.a.createElement("i",{className:"fa fa-map-marker"})),l.a.createElement("div",{className:"vtimeline-block"},l.a.createElement("span",{className:"vtimeline-date"},"October 2019 – Present"),l.a.createElement("div",{"data-date":"October 2019 – Present",className:"vtimeline-content"},l.a.createElement("h3",null,"Design/Build/Fly"),l.a.createElement("h4",null,"Fabrications Engineer"),l.a.createElement("ul",null,l.a.createElement("li",null,"The Design/Build/Fly (DBF) student team designs, fabricates, and demonstrates the flight capabilities of an electric-powered, radio-controlled aircraft that can best meet a given mission objective"),l.a.createElement("li",null,"Construct lightweight RC airplane airframes utilizing various composites and adhesives includingcarbon fiber, kevlar, and fiberglass"),l.a.createElement("li",null,"Prepare control surfaces and mount servos in innovative ways to minimize drag"),l.a.createElement("li",null,"Create positive molds from foam using hot-wire and sanding with a high attention to detail inorder to prevent imperfections in final product"))))),l.a.createElement("div",{className:"vtimeline-point"},l.a.createElement("div",{className:"vtimeline-icon"},l.a.createElement("i",{className:"fa fa-map-marker"})),l.a.createElement("div",{className:"vtimeline-block"},l.a.createElement("span",{className:"vtimeline-date"},"October 2019 – Present"),l.a.createElement("div",{"data-date":"October 2019 – Present",className:"vtimeline-content"},l.a.createElement("h3",null,"Yonder Dynamics"),l.a.createElement("h4",null,"Motions Engineer"),l.a.createElement("ul",null,l.a.createElement("li",null,"Build a functioning mars rover style robot for the University Rover Challenge"),l.a.createElement("li",null,"Responsible for creating a light weight high dexterity robot arm with six degrees of freedom"),l.a.createElement("li",null,"Work with Solidworks modeling/simulation as well as physics risk reduction calculations"),l.a.createElement("li",null,"Developed rotating base out of acetyl that is capable of withstanding high loads while remaining lightweight"),l.a.createElement("li",null,"Designed cost-effective parts that are manufacturable with on campus equipment, primarily 3Dprinting and lasercutting"),l.a.createElement("li",null,"Review technical documentation to look for design improvements"))))),l.a.createElement("div",{className:"vtimeline-point"},l.a.createElement("div",{className:"vtimeline-icon"},l.a.createElement("i",{className:"fa fa-map-marker"})),l.a.createElement("div",{className:"vtimeline-block"},l.a.createElement("span",{className:"vtimeline-date"},"2017 - 2018"),l.a.createElement("div",{"data-date":"2017 - 2018",className:"vtimeline-content"},l.a.createElement("h3",null,"FIRST Robotics"),l.a.createElement("h4",null,"Senior Subsystem Engineer"),l.a.createElement("ul",null,l.a.createElement("li",null,"Team of students and mentors construct a competitive robot within six weeks"),l.a.createElement("li",null,"Oversee the integration of various subsystems by designing and fabricating parts as well asdelegating tasks to newer members"),l.a.createElement("li",null,"Thoroughly researched components to not violate competition rules and regulations"))))),l.a.createElement("div",{className:"vtimeline-point"},l.a.createElement("div",{className:"vtimeline-icon"},l.a.createElement("i",{className:"fa fa-map-marker"})),l.a.createElement("div",{className:"vtimeline-block"},l.a.createElement("span",{className:"vtimeline-date"},"2015 – 2016"),l.a.createElement("div",{"data-date":"2015 – 2016",className:"vtimeline-content"},l.a.createElement("h3",null,"Northrup Grumman Challenge"),l.a.createElement("h4",null,"Engineering Team Member"),l.a.createElement("ul",null,l.a.createElement("li",null,"Team-based competitions that are organized by Northrop Grumman with strict time constraints,budget constraints, and on the spot thinking for troubleshooting"),l.a.createElement("li",null,"Developed a helium airship design the first year by manufacturing a custom aerodynamic balloonand implementing model RC aircraft controls"),l.a.createElement("li",null," ","Designed a hovercraft capable of carrying 15 lbs of payload through an obstacle course"))))))),l.a.createElement("div",{id:"education"},l.a.createElement("h2",{className:"heading"},"Education"),l.a.createElement("div",{className:"education-block"},l.a.createElement("h4",null,"University of California San Diego, La Jolla"),l.a.createElement("span",{className:"education-date"},"September 2018 - Present"),l.a.createElement("h5",null,"B.S. Mechanical Engineering"),l.a.createElement("p",null,l.a.createElement("b",null," Relevant Coursework: "),"Introductory Mathematical Physics, Elements of Materials Science, Engineering Graphics and Design, Business Project Management, Introductory Fluid Mechanics, MATLAB Programming for Engineering Analysis, Dynamics and Vibrations, Heat Transfer, Solid Mechanics I"))),l.a.createElement("div",{id:"projects",className:"background-alt"},l.a.createElement("h2",{className:"heading"},"Projects"),l.a.createElement("div",{className:"container"},l.a.createElement(z,null,l.a.createElement(B,{className:"m-3"},l.a.createElement(B.Img,{className:"img-fluid",variant:"top",src:G["yonder.png"]}),l.a.createElement(B.Body,{className:"p-3"},l.a.createElement(B.Title,null,"Yonder Dynamics Arm"),l.a.createElement(B.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional This is a wider card with supporting text below as a natural lead-in to additional content. Th content. Thdgfgggggggis content is a little bit longer.")),l.a.createElement("div",{className:"m-3"},l.a.createElement(i.Link,{className:"btn project-button mt-2",variant:"outline-primary",to:"/yonder-dynamics-arm"},"View Project"))),l.a.createElement(B,{className:"m-3"},l.a.createElement(B.Img,{className:"img-fluid",variant:"top",src:"https://via.placeholder.com/300"}),l.a.createElement(B.Body,{className:"p-3"},l.a.createElement(B.Title,null,"AIAA Design Build Fly"),l.a.createElement(B.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This card has even longer content than the first to show that equal height action.")),l.a.createElement("div",{className:"m-3"},l.a.createElement("a",{className:"btn project-button mt-2",variant:"outline-primary",href:"https://via.placeholder.com/300"},"View Project"))),l.a.createElement(B,{className:"m-3"},l.a.createElement(B.Img,{className:"img-fluid",variant:"top",src:G["rover.png"]}),l.a.createElement(B.Body,{className:"p-3"},l.a.createElement(B.Title,null,"Covid Rover"),l.a.createElement(B.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.")),l.a.createElement("div",{className:"m-3"},l.a.createElement(L,{className:"project-button mt-2",variant:"outline-primary",href:"https://via.placeholder.com/300"},"View Project")))),l.a.createElement(z,null,l.a.createElement(B,{className:"m-3"},l.a.createElement(B.Img,{className:"img-fluid",variant:"top",src:"https://via.placeholder.com/300"}),l.a.createElement(B.Body,{className:"p-3"},l.a.createElement(B.Title,null,"FIRST Crusader"),l.a.createElement(B.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."))),l.a.createElement(B,{className:"m-3"},l.a.createElement(B.Img,{className:"img-fluid",variant:"top",src:"https://via.placeholder.com/300"}),l.a.createElement(B.Body,{className:"p-3"},l.a.createElement(B.Title,null,"Craftvue"),l.a.createElement(B.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."))),l.a.createElement(B,{className:"m-3"},l.a.createElement(B.Img,{className:"img-fluid",variant:"top",src:"https://via.placeholder.com/300"}),l.a.createElement(B.Body,{className:"p-3"},l.a.createElement(B.Title,null,"Northrop Grumman Airship"),l.a.createElement(B.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.")))))),l.a.createElement("div",{id:"skills"},l.a.createElement("h2",{className:"heading"},"Skills"),l.a.createElement("ul",null,l.a.createElement("li",{className:"vibrate-1"},"Modeling and Analysis "),l.a.createElement("li",{className:"vibrate-1"},"Autodesk Fusion 360 "),l.a.createElement("li",{className:"vibrate-1"},"Autodesk Inventor "),l.a.createElement("li",{className:"vibrate-1"},"Solidworks"),l.a.createElement("li",{className:"vibrate-1"},"MS Office"),l.a.createElement("li",{className:"vibrate-1"}," LaTeX"),l.a.createElement("li",{className:"vibrate-1"}," PhpStorm"),l.a.createElement("li",{className:"vibrate-1"}," Github "),l.a.createElement("li",{className:"vibrate-1"},"Arduino "),l.a.createElement("li",{className:"vibrate-1"},"Java"),l.a.createElement("li",{className:"vibrate-1"},"Php "),l.a.createElement("li",{className:"vibrate-1"},"C++"),l.a.createElement("li",{className:"vibrate-1"},"MatLab"),l.a.createElement("li",{className:"vibrate-1"},"Laravel Framework"),l.a.createElement("li",{className:"vibrate-1"},"Fabrication Prototyping "),l.a.createElement("li",{className:"vibrate-1"},"Woodshop Machinery"),l.a.createElement("li",{className:"vibrate-1"}," CNC"),l.a.createElement("li",{className:"vibrate-1"}," Lasercutter"),l.a.createElement("li",{className:"vibrate-1"}," 3D Printing"),l.a.createElement("li",{className:"vibrate-1"}," Soldering"),l.a.createElement("li",{className:"vibrate-1"}," Web Design"))),l.a.createElement("div",{id:"contact"},l.a.createElement("h2",null,"Get in Touch"),l.a.createElement("div",{id:"contact-form"},l.a.createElement("form",{method:"POST",action:"https://formspree.io/mrgobevp"},l.a.createElement("input",{type:"hidden",name:"_subject",value:"Contact request from personal website"}),l.a.createElement("input",{type:"email",name:"_replyto",placeholder:"Your email",required:!0}),l.a.createElement("textarea",{name:"message",placeholder:"Your message",required:!0}),l.a.createElement("button",{type:"submit"},"Send")))))}console.log(G)},TSYQ:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function l(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var i=l.apply(null,n);i&&e.push(i)}else if("object"===r)for(var c in n)t.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(a,[]))||(e.exports=n)}()},rrI5:function(e,a,t){e.exports=t.p+"static/yonder-9a46f96053f161c5110cc33ad8a11341.png"},tvlH:function(e,a,t){var n={"./rover.png":"/lTg","./yonder.png":"rrI5"};function l(e){var a=r(e);return t(a)}function r(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=r,e.exports=l,l.id="tvlH"}}]);
//# sourceMappingURL=component---src-pages-index-js-b8059cde2feb14c48c67.js.map