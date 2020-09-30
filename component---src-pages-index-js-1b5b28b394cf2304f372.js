(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return J}));var n=t("q1tI"),r=t.n(n),l=t("Bl7J"),i=t("vrFN");function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}var o=t("TSYQ"),m=t.n(o),d=r.a.createContext({});d.Consumer,d.Provider;function u(e,a){var t=Object(n.useContext)(d);return e||t[a]||a}var h=/-(.)/g;var v=function(e){return e[0].toUpperCase()+(a=e,a.replace(h,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function p(e,a){var t=void 0===a?{}:a,n=t.displayName,l=void 0===n?v(e):n,i=t.Component,o=t.defaultProps,d=r.a.forwardRef((function(a,t){var n=a.className,l=a.bsPrefix,o=a.as,d=void 0===o?i||"div":o,h=c(a,["className","bsPrefix","as"]),v=u(l,e);return r.a.createElement(d,s({ref:t,className:m()(n,v)},h))}));return d.defaultProps=o,d.displayName=l,d}var E=function(e){return r.a.forwardRef((function(a,t){return r.a.createElement("div",s({},a,{ref:t,className:m()(a.className,e)}))}))},f=r.a.createContext(null);f.displayName="CardContext";var g=f,b=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,l=e.variant,i=e.as,o=void 0===i?"img":i,d=c(e,["bsPrefix","className","variant","as"]),h=u(t,"card-img");return r.a.createElement(o,s({ref:a,className:m()(l?h+"-"+l:h,n)},d))}));b.displayName="CardImg",b.defaultProps={variant:null};var N=b,y=E("h5"),w=E("h6"),x=p("card-body"),T=p("card-title",{Component:y}),k=p("card-subtitle",{Component:w}),P=p("card-link",{Component:"a"}),C=p("card-text",{Component:"p"}),D=p("card-header"),I=p("card-footer"),S=p("card-img-overlay"),j=r.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.bg,o=e.text,d=e.border,h=e.body,v=e.children,p=e.as,E=void 0===p?"div":p,f=c(e,["bsPrefix","className","bg","text","border","body","children","as"]),b=u(t,"card"),N=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:b+"-header"}}),[b]);return r.a.createElement(g.Provider,{value:N},r.a.createElement(E,s({ref:a},f,{className:m()(l,b,i&&"bg-"+i,o&&"text-"+o,d&&"border-"+d)}),h?r.a.createElement(x,null,v):v))}));j.displayName="Card",j.defaultProps={body:!1},j.Img=N,j.Title=T,j.Subtitle=k,j.Body=x,j.Link=P,j.Text=C,j.Header=D,j.Footer=I,j.ImgOverlay=S;var A=j;var B=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!=typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e.apply(this,n),a.apply(this,n)}}),null)};function R(e){return!e||"#"===e.trim()}var M=r.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"a":t,l=e.disabled,i=e.onKeyDown,o=c(e,["as","disabled","onKeyDown"]),m=function(e){var a=o.href,t=o.onClick;(l||R(a))&&e.preventDefault(),l?e.stopPropagation():t&&t(e)};return R(o.href)&&(o.role=o.role||"button",o.href=o.href||"#"),l&&(o.tabIndex=-1,o["aria-disabled"]=!0),r.a.createElement(n,s({ref:a},o,{onClick:m,onKeyDown:B((function(e){" "===e.key&&(e.preventDefault(),m(e))}),i)}))}));M.displayName="SafeAnchor";var q=M,O=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.variant,l=e.size,i=e.active,o=e.className,d=e.block,h=e.type,v=e.as,p=c(e,["bsPrefix","variant","size","active","className","block","type","as"]),E=u(t,"btn"),f=m()(o,E,i&&"active",E+"-"+n,d&&E+"-block",l&&E+"-"+l);if(p.href)return r.a.createElement(q,s({},p,{as:v,ref:a,className:m()(f,p.disabled&&"disabled")}));a&&(p.ref=a),h?p.type=h:v||(p.type="button");var g=v||"button";return r.a.createElement(g,s({},p,{className:f}))}));O.displayName="Button",O.defaultProps={variant:"primary",active:!1,disabled:!1};var F=O,L=p("card-deck"),G=t("rrI5"),Y=t.n(G);function z(){document.getElementById("header").classList.add("active")}function J(){return r.a.createElement(l.a,null,r.a.createElement(i.a,{title:"Home"}),r.a.createElement("div",{onClick:z,id:"mobile-menu-open",className:"shadow-large"},r.a.createElement("i",{className:"fa fa-bars","aria-hidden":"true"})),r.a.createElement("div",{id:"lead"},r.a.createElement("div",{id:"lead-content"},r.a.createElement("h1",null,"Ashik Simon"),r.a.createElement("h2",null,"Mechanical Engineer"),r.a.createElement("a",{href:"Ashik_Simon_Resume.pdf",className:"btn-rounded-dark",target:"_blank",download:!0},"Download Resume")),r.a.createElement("div",{id:"lead-overlay"})),r.a.createElement("div",{id:"about"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("h2",{className:"heading"},"About Me")),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in iaculis ex. Etiam volutpat laoreet urna. Morbi ut tortor nec nulla commodo malesuada sit amet vel lacus. Fusce eget efficitur libero. Morbi dapibus porta quam laoreet placerat. Donec eu vehicula neque. Donec viverra lorem nunc, tempus euismod eros sollicitudin ut. Quisque et tincidunt libero. Donec id pharetra justo. Proin euismod lacinia dolor, eu scelerisque justo tempus pharetra. Vivamus nunc justo, finibus ut nisl sed, euismod rhoncus nulla. Proin sed magna egestas, egestas ante et, congue eros. In consequat, mauris dapibus tincidunt suscipit, ex libero aliquet diam, at maximus risus enim non leo."))))),r.a.createElement("div",{id:"experience",className:"background-alt"},r.a.createElement("h2",{className:"heading"},"Experience"),r.a.createElement("div",{id:"experience-timeline"},r.a.createElement("div",{className:"vtimeline-point"},r.a.createElement("div",{className:"vtimeline-icon"},r.a.createElement("i",{className:"fa fa-map-marker"})),r.a.createElement("div",{className:"vtimeline-block"},r.a.createElement("span",{className:"vtimeline-date"},"October 2019 – Present"),r.a.createElement("div",{"data-date":"October 2019 – Present",className:"vtimeline-content"},r.a.createElement("h3",null,"Design/Build/Fly"),r.a.createElement("h4",null,"Fabrications Engineer"),r.a.createElement("ul",null,r.a.createElement("li",null,"The Design/Build/Fly (DBF) student team designs, fabricates, and demonstrates the flight capabilities of an electric-powered, radio-controlled aircraft that can best meet a given mission objective"),r.a.createElement("li",null,"Construct lightweight RC airplane airframes utilizing various composites and adhesives includingcarbon fiber, kevlar, and fiberglass"),r.a.createElement("li",null,"Prepare control surfaces and mount servos in innovative ways to minimize drag"),r.a.createElement("li",null,"Create positive molds from foam using hot-wire and sanding with a high attention to detail inorder to prevent imperfections in final product"))))),r.a.createElement("div",{className:"vtimeline-point"},r.a.createElement("div",{className:"vtimeline-icon"},r.a.createElement("i",{className:"fa fa-map-marker"})),r.a.createElement("div",{className:"vtimeline-block"},r.a.createElement("span",{className:"vtimeline-date"},"October 2019 – Present"),r.a.createElement("div",{"data-date":"October 2019 – Present",className:"vtimeline-content"},r.a.createElement("h3",null,"Yonder Dynamics"),r.a.createElement("h4",null,"Motions Engineer"),r.a.createElement("ul",null,r.a.createElement("li",null,"Build a functioning mars rover style robot for the University Rover Challenge"),r.a.createElement("li",null,"Responsible for creating a light weight high dexterity robot arm with six degrees of freedom"),r.a.createElement("li",null,"Work with Solidworks modeling/simulation as well as physics risk reduction calculations"),r.a.createElement("li",null,"Developed rotating base out of acetyl that is capable of withstanding high loads while remaining lightweight"),r.a.createElement("li",null,"Designed cost-effective parts that are manufacturable with on campus equipment, primarily 3Dprinting and lasercutting"),r.a.createElement("li",null,"Review technical documentation to look for design improvements"))))),r.a.createElement("div",{className:"vtimeline-point"},r.a.createElement("div",{className:"vtimeline-icon"},r.a.createElement("i",{className:"fa fa-map-marker"})),r.a.createElement("div",{className:"vtimeline-block"},r.a.createElement("span",{className:"vtimeline-date"},"2017 - 2018"),r.a.createElement("div",{"data-date":"2017 - 2018",className:"vtimeline-content"},r.a.createElement("h3",null,"FIRST Robotics"),r.a.createElement("h4",null,"Senior Subsystem Engineer"),r.a.createElement("ul",null,r.a.createElement("li",null,"Team of students and mentors construct a competitive robot within six weeks"),r.a.createElement("li",null,"Oversee the integration of various subsystems by designing and fabricating parts as well asdelegating tasks to newer members"),r.a.createElement("li",null,"Thoroughly researched components to not violate competition rules and regulations"))))),r.a.createElement("div",{className:"vtimeline-point"},r.a.createElement("div",{className:"vtimeline-icon"},r.a.createElement("i",{className:"fa fa-map-marker"})),r.a.createElement("div",{className:"vtimeline-block"},r.a.createElement("span",{className:"vtimeline-date"},"2015 – 2016"),r.a.createElement("div",{"data-date":"2015 – 2016",className:"vtimeline-content"},r.a.createElement("h3",null,"Northrup Grumman Challenge"),r.a.createElement("h4",null,"Engineering Team Member"),r.a.createElement("ul",null,r.a.createElement("li",null,"Team-based competitions that are organized by Northrop Grumman with strict time constraints,budget constraints, and on the spot thinking for troubleshooting"),r.a.createElement("li",null,"Developed a helium airship design the first year by manufacturing a custom aerodynamic balloonand implementing model RC aircraft controls"),r.a.createElement("li",null," ","Designed a hovercraft capable of carrying 15 lbs of payload through an obstacle course"))))))),r.a.createElement("div",{id:"education"},r.a.createElement("h2",{className:"heading"},"Education"),r.a.createElement("div",{className:"education-block"},r.a.createElement("h4",null,"University of California San Diego, La Jolla"),r.a.createElement("span",{className:"education-date"},"September 2018 - Present"),r.a.createElement("h5",null,"B.S. Mechanical Engineering"),r.a.createElement("p",null,r.a.createElement("b",null," Relevant Coursework: "),"Introductory Mathematical Physics, Elements of Materials Science, Engineering Graphics and Design, Business Project Management, Introductory Fluid Mechanics, MATLAB Programming for Engineering Analysis, Dynamics and Vibrations, Heat Transfer, Solid Mechanics I"))),r.a.createElement("div",{id:"projects",className:"background-alt"},r.a.createElement("h2",{className:"heading"},"Projects"),r.a.createElement("div",{className:"container"},r.a.createElement(L,null,r.a.createElement(A,{className:"m-3"},r.a.createElement(A.Img,{className:"img-fluid",variant:"top",src:Y.a}),r.a.createElement(A.Body,{className:"p-3"},r.a.createElement(A.Title,null,"Yonder Dynamics Arm"),r.a.createElement(A.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional This is a wider card with supporting text below as a natural lead-in to additional content. Th content. Thdgfgggggggis content is a little bit longer.")),r.a.createElement("div",{className:"m-3"},r.a.createElement(F,{className:"project-button mt-2",variant:"outline-primary",href:"https://via.placeholder.com/300"},"View Project"))),r.a.createElement(A,{className:"m-3"},r.a.createElement(A.Img,{className:"img-fluid",variant:"top",src:"https://via.placeholder.com/300"}),r.a.createElement(A.Body,{className:"p-3"},r.a.createElement(A.Title,null,"AIAA Design Build Fly"),r.a.createElement(A.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This card has even longer content than the first to show that equal height action.")),r.a.createElement("div",{className:"m-3"},r.a.createElement(F,{className:"project-button mt-2",variant:"outline-primary",href:"https://via.placeholder.com/300"},"View Project"))),r.a.createElement(A,{className:"m-3"},r.a.createElement(A.Img,{className:"img-fluid",variant:"top",src:"https://via.placeholder.com/300"}),r.a.createElement(A.Body,{className:"p-3"},r.a.createElement(A.Title,null,"Covid Rover"),r.a.createElement(A.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.")),r.a.createElement("div",{className:"m-3"},r.a.createElement(F,{className:"project-button mt-2",variant:"outline-primary",href:"https://via.placeholder.com/300"},"View Project")))),r.a.createElement(L,null,r.a.createElement(A,{className:"m-3"},r.a.createElement(A.Img,{className:"img-fluid",variant:"top",src:"https://via.placeholder.com/300"}),r.a.createElement(A.Body,{className:"p-3"},r.a.createElement(A.Title,null,"FIRST Crusader"),r.a.createElement(A.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."))),r.a.createElement(A,{className:"m-3"},r.a.createElement(A.Img,{className:"img-fluid",variant:"top",src:"https://via.placeholder.com/300"}),r.a.createElement(A.Body,{className:"p-3"},r.a.createElement(A.Title,null,"Craftvue"),r.a.createElement(A.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."))),r.a.createElement(A,{className:"m-3"},r.a.createElement(A.Img,{className:"img-fluid",variant:"top",src:"https://via.placeholder.com/300"}),r.a.createElement(A.Body,{className:"p-3"},r.a.createElement(A.Title,null,"Northrop Grumman Airship"),r.a.createElement(A.Text,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.")))))),r.a.createElement("div",{id:"skills"},r.a.createElement("h2",{className:"heading"},"Skills"),r.a.createElement("ul",null,r.a.createElement("li",{className:"vibrate-1"},"Modeling and Analysis "),r.a.createElement("li",{className:"vibrate-1"},"Autodesk Fusion 360 "),r.a.createElement("li",{className:"vibrate-1"},"Autodesk Inventor "),r.a.createElement("li",{className:"vibrate-1"},"Solidworks"),r.a.createElement("li",{className:"vibrate-1"},"MS Office"),r.a.createElement("li",{className:"vibrate-1"}," LaTeX"),r.a.createElement("li",{className:"vibrate-1"}," PhpStorm"),r.a.createElement("li",{className:"vibrate-1"}," Github "),r.a.createElement("li",{className:"vibrate-1"},"Arduino "),r.a.createElement("li",{className:"vibrate-1"},"Java"),r.a.createElement("li",{className:"vibrate-1"},"Php "),r.a.createElement("li",{className:"vibrate-1"},"C++"),r.a.createElement("li",{className:"vibrate-1"},"MatLab"),r.a.createElement("li",{className:"vibrate-1"},"Laravel Framework"),r.a.createElement("li",{className:"vibrate-1"},"Fabrication Prototyping "),r.a.createElement("li",{className:"vibrate-1"},"Woodshop Machinery"),r.a.createElement("li",{className:"vibrate-1"}," CNC"),r.a.createElement("li",{className:"vibrate-1"}," Lasercutter"),r.a.createElement("li",{className:"vibrate-1"}," 3D Printing"),r.a.createElement("li",{className:"vibrate-1"}," Soldering"),r.a.createElement("li",{className:"vibrate-1"}," Web Design"))),r.a.createElement("div",{id:"contact"},r.a.createElement("h2",null,"Get in Touch"),r.a.createElement("div",{id:"contact-form"},r.a.createElement("form",{method:"POST",action:"https://formspree.io/mrgobevp"},r.a.createElement("input",{type:"hidden",name:"_subject",value:"Contact request from personal website"}),r.a.createElement("input",{type:"email",name:"_replyto",placeholder:"Your email",required:!0}),r.a.createElement("textarea",{name:"message",placeholder:"Your message",required:!0}),r.a.createElement("button",{type:"submit"},"Send")))))}},TSYQ:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===l)for(var s in n)t.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},rrI5:function(e,a,t){e.exports=t.p+"static/yonder-9a46f96053f161c5110cc33ad8a11341.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-1b5b28b394cf2304f372.js.map