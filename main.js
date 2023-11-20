(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,'*, *::after, *::before {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n}\n\n#content {\n    width: 70%;\n    height: 100vh;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 80px 1fr 150px;\n    grid-template-areas: \n    "header"\n    "main-content"\n    "footer";\n}\n\n.header {\n    border: 1px solid black;\n    grid-area: header;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.nav-links {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 60px;\n    list-style-type: none;\n    font-size: 1.5rem;\n    border: 1px solid black;\n}\n\n.nav-links li:hover {\n    cursor: pointer;\n    color: gold;\n}\n\n.main-content {\n    grid-area: main-content;\n    border: 1px solid red;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n\n}\n\n.main-content img {\n    width: 40%;\n}\n\n.main-content h1 {\n    margin: 10px 0;\n}\n\n.main-content p {\n    max-width: 55ch;\n    font-size: 1.2rem;\n}\n\n.footer {\n    grid-area: footer;\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px; \n    padding: 15px 0; \n}\n\n.footer .social-links {\n    display: flex;\n    gap: 20px;\n}\n\n.footer p {\n    font-weight: 900;\n    font-size: 1.2rem;\n} \n\nimg {\n    width: 50px;\n}\n\n',""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=r(e,a),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"e719d8b29f452a16302d.png",n=t.p+"e7ef755bdb59ec66b740.png",r=t.p+"d505f787ef545489f325.jpg";var a=t(379),o=t.n(a),i=t(795),c=t.n(i),s=t(569),d=t.n(s),l=t(565),p=t.n(l),u=t(216),m=t.n(u),f=t(589),h=t.n(f),v=t(426),g={};g.styleTagTransform=h(),g.setAttributes=p(),g.insert=d().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=m(),o()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals,function(){const t=document.querySelector("#content"),a=document.createElement("main"),o=document.createElement("h1"),i=document.createElement("p"),c=new Image;o.textContent="The Best Burger in Town!",i.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquam quidem necessitatibus architecto ducimus porro rerum incidunt expedita eius voluptatem maxime nam quasi esse quae, molestias voluptatibus, dolorum, voluptatum velit dignissimos iure! Voluptas, totam consequatur! Quos corporis vitae ipsum temporibus! Iste pariatur fuga optio totam, illum est laudantium incidunt ipsam!",c.src=r,c.alt="Juice Burgers",a.classList.add("main-content"),a.appendChild(o),a.appendChild(c),a.appendChild(i),t.appendChild((()=>{const e=document.createElement("header"),n=document.createElement("nav"),t=document.createElement("ul"),r=document.createElement("li"),a=document.createElement("li"),o=document.createElement("li");return r.textContent="Home",r.classList.add("nav-link"),r.setAttribute("id","home"),a.textContent="Menu",a.classList.add("nav-link"),a.setAttribute("id","home"),o.textContent="Contact",o.classList.add("nav-link"),o.setAttribute("id","home"),t.classList.add("nav-links"),t.appendChild(r),t.appendChild(a),t.appendChild(o),n.classList.add("navbar"),n.appendChild(t),e.classList.add("header"),e.appendChild(n),e})()),t.appendChild(a),t.appendChild((()=>{const t=document.createElement("footer"),r=document.createElement("p"),a=document.createElement("p"),o=document.createElement("div");r.textContent="Join Us!",a.textContent="Copyright © 2023 - Specialized101";const i=new Image;i.src=e,i.alt="Instragram Logo";const c=new Image;return c.src=n,c.alt="Facebook Logo",o.classList.add("social-links"),o.appendChild(c),o.appendChild(i),t.classList.add("footer"),t.appendChild(r),t.appendChild(o),t.appendChild(a),t})())}()})()})();