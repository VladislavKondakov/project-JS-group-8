function t(t,e,n,i){Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=e.parcelRequired7c6;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){i[t]=e},e.parcelRequired7c6=r),r.register("kyEFX",(function(e,n){var i,r;t(e.exports,"register",(function(){return i}),(function(t){return i=t})),t(e.exports,"resolve",(function(){return r}),(function(t){return r=t}));var a={};i=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)a[e[n]]=t[e[n]]},r=function(t){var e=a[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),r("kyEFX").register(JSON.parse('{"5ZPII":"index.5b58fe8b.js","jSvKf":"save.6c01ffdb.png","4TSHR":"hope.bd00413e.png","fUOfh":"united.cc95aceb.png","av20G":"medical.f6b765e9.png","jOeRC":"sans.9ae04422.png","afm35":"razom.89d0c3cb.png","Zg8LA":"hunger.276f70ea.png","27eMA":"vision.e98cd69c.png","bJr8b":"prytula.214a3300.png","5UbS1":"index.26d5d4fb.css"}'));var a;a=new URL(r("kyEFX").resolve("jSvKf"),import.meta.url).toString();const o=new URL(a);var l;l=new URL(r("kyEFX").resolve("4TSHR"),import.meta.url).toString();const u=new URL(l);var s;s=new URL(r("kyEFX").resolve("fUOfh"),import.meta.url).toString();const c=new URL(s);var f;f=new URL(r("kyEFX").resolve("av20G"),import.meta.url).toString();const d=new URL(f);var p;p=new URL(r("kyEFX").resolve("jOeRC"),import.meta.url).toString();const v=new URL(p);var m;m=new URL(r("kyEFX").resolve("afm35"),import.meta.url).toString();const h=new URL(m);var g;g=new URL(r("kyEFX").resolve("Zg8LA"),import.meta.url).toString();const y=new URL(g);var b;b=new URL(r("kyEFX").resolve("27eMA"),import.meta.url).toString();const x=new URL(b);var w;w=new URL(r("kyEFX").resolve("bJr8b"),import.meta.url).toString();const C=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:o},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:u},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:c},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:d},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:v},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:h},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:y},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:x},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:new URL(w)}];var M=window,E=M.requestAnimationFrame||M.webkitRequestAnimationFrame||M.mozRequestAnimationFrame||M.msRequestAnimationFrame||function(t){return setTimeout(t,16)},T=window,S=T.cancelAnimationFrame||T.mozCancelAnimationFrame||function(t){clearTimeout(t)};function L(){for(var t,e,n,i=arguments[0]||{},r=1,a=arguments.length;r<a;r++)if(null!==(t=arguments[r]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function R(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function A(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function H(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var k=document.documentElement;function N(t){var e="";return t.fake&&(e=k.style.overflow,t.style.background="",t.style.overflow=k.style.overflow="hidden",k.appendChild(t)),e}function O(t,e){t.fake&&(t.remove(),k.style.overflow=e,k.offsetHeight)}function B(){var t=document,e=H(),n=N(e),i=t.createElement("div"),r=!1;e.appendChild(i);try{for(var a,o="(10px * 10)",l=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],u=0;u<3;u++)if(a=l[u],i.style.width=a,100===i.offsetWidth){r=a.replace(o,"");break}}catch(t){}return e.fake?O(e,n):i.remove(),r}function D(){var t,e=document,n=H(),i=N(n),r=e.createElement("div"),a=e.createElement("div"),o="";r.className="tns-t-subp2",a.className="tns-t-ct";for(var l=0;l<70;l++)o+="<div></div>";return a.innerHTML=o,r.appendChild(a),n.appendChild(r),t=Math.abs(r.getBoundingClientRect().left-a.children[67].getBoundingClientRect().left)<2,n.fake?O(n,i):r.remove(),t}function I(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=H(),i=N(n),r=e.createElement("div"),a=e.createElement("style"),o="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return a.type="text/css",r.className="tns-mq-test",n.appendChild(a),n.appendChild(r),a.styleSheet?a.styleSheet.cssText=o:a.appendChild(e.createTextNode(o)),t=window.getComputedStyle?window.getComputedStyle(r).position:r.currentStyle.position,n.fake?O(n,i):r.remove(),"absolute"===t}function F(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function P(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}function _(t){return("insertRule"in t?t.cssRules:t.rules).length}function U(t,e,n){for(var i=0,r=t.length;i<r;i++)e.call(n,t[i],i)}var z="classList"in document.createElement("_"),j=z?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},W=z?function(t,e){j(t,e)||t.classList.add(e)}:function(t,e){j(t,e)||(t.className+=" "+e)},q=z?function(t,e){j(t,e)&&t.classList.remove(e)}:function(t,e){j(t,e)&&(t.className=t.className.replace(e,""))};function X(t,e){return t.hasAttribute(e)}function G(t,e){return t.getAttribute(e)}function V(t){return void 0!==t.item}function K(t,e){if(t=V(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function J(t,e){t=V(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var r=n;r--;)t[i].removeAttribute(e[r])}function Q(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function Y(t,e){"none"!==t.style.display&&(t.style.display="none")}function Z(t,e){"none"===t.style.display&&(t.style.display="")}function $(t){return"none"!==window.getComputedStyle(t).display}function tt(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}for(var i=document.createElement("fakeelement"),r=(t.length,0);r<t.length;r++){var a=t[r];if(void 0!==i.style[a])return a}return!1}function et(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=H(),r=N(i),a=n.createElement("p"),o=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(a,null),a.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(a).getPropertyValue(o),i.fake?O(i,r):a.remove(),void 0!==e&&e.length>0&&"none"!==e}function nt(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var it=!1;try{var rt=Object.defineProperty({},"passive",{get:function(){it=!0}});window.addEventListener("test",null,rt)}catch(t){}var at=!!it&&{passive:!0};function ot(t,e,n){for(var i in e){var r=["touchstart","touchmove"].indexOf(i)>=0&&!n&&at;t.addEventListener(i,e[i],r)}}function lt(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&at;t.removeEventListener(n,e[n],i)}}function ut(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var st,ct=function(t){t=L({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var e=document,n=window,i={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},r={},a=t.useLocalStorage;if(a){var o=navigator.userAgent,l=new Date;try{(r=n.localStorage)?(r.setItem(l,l),a=r.getItem(l)==l,r.removeItem(l)):a=!1,a||(r={})}catch(t){a=!1}a&&(r.tnsApp&&r.tnsApp!==o&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){r.removeItem(t)})),localStorage.tnsApp=o)}var u=r.tC?R(r.tC):A(r,"tC",B(),a),s=r.tPL?R(r.tPL):A(r,"tPL",D(),a),c=r.tMQ?R(r.tMQ):A(r,"tMQ",I(),a),f=r.tTf?R(r.tTf):A(r,"tTf",tt("transform"),a),d=r.t3D?R(r.t3D):A(r,"t3D",et(f),a),p=r.tTDu?R(r.tTDu):A(r,"tTDu",tt("transitionDuration"),a),v=r.tTDe?R(r.tTDe):A(r,"tTDe",tt("transitionDelay"),a),m=r.tADu?R(r.tADu):A(r,"tADu",tt("animationDuration"),a),h=r.tADe?R(r.tADe):A(r,"tADe",tt("animationDelay"),a),g=r.tTE?R(r.tTE):A(r,"tTE",nt(p,"Transition"),a),y=r.tAE?R(r.tAE):A(r,"tAE",nt(m,"Animation"),a),b=n.console&&"function"==typeof n.console.warn,x=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],w={};if(x.forEach((function(n){if("string"==typeof t[n]){var i=t[n],r=e.querySelector(i);if(w[n]=i,!r||!r.nodeName)return void(b&&console.warn("Can't find",t[n]));t[n]=r}})),!(t.container.children.length<1)){var C=t.responsive,M=t.nested,T="carousel"===t.mode;if(C){0 in C&&(t=L(t,C[0]),delete C[0]);var H={};for(var k in C){var N=C[k];N="number"==typeof N?{items:N}:N,H[k]=N}C=H,H=null}if(T||function t(e){for(var n in e)T||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!T){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var O=t.animateIn,z=t.animateOut,V=t.animateDelay,it=t.animateNormal}var rt,at,st="horizontal"===t.axis,ft=e.createElement("div"),dt=e.createElement("div"),pt=t.container,vt=pt.parentNode,mt=pt.outerHTML,ht=pt.children,gt=ht.length,yt=Dn(),bt=!1;C&&ni(),T&&(pt.className+=" tns-vpfix");var xt,wt,Ct,Mt,Et,Tt,St,Lt,Rt,At=t.autoWidth,Ht=Un("fixedWidth"),kt=Un("edgePadding"),Nt=Un("gutter"),Ot=Pn(),Bt=Un("center"),Dt=At?1:Math.floor(Un("items")),It=Un("slideBy"),Ft=t.viewportMax||t.fixedWidthViewportWidth,Pt=Un("arrowKeys"),_t=Un("speed"),Ut=t.rewind,zt=!Ut&&t.loop,jt=Un("autoHeight"),Wt=Un("controls"),qt=Un("controlsText"),Xt=Un("nav"),Gt=Un("touch"),Vt=Un("mouseDrag"),Kt=Un("autoplay"),Jt=Un("autoplayTimeout"),Qt=Un("autoplayText"),Yt=Un("autoplayHoverPause"),Zt=Un("autoplayResetOnVisibility"),$t=(St=null,Lt=Un("nonce"),Rt=document.createElement("style"),St&&Rt.setAttribute("media",St),Lt&&Rt.setAttribute("nonce",Lt),document.querySelector("head").appendChild(Rt),Rt.sheet?Rt.sheet:Rt.styleSheet),te=t.lazyload,ee=t.lazyloadSelector,ne=[],ie=zt?(Et=function(){if(At||Ht&&!Ft)return gt-1;var e=Ht?"fixedWidth":"items",n=[];if((Ht||t[e]<gt)&&n.push(t[e]),C)for(var i in C){var r=C[i][e];r&&(Ht||r<gt)&&n.push(r)}return n.length||n.push(0),Math.ceil(Ht?Ft/Math.min.apply(null,n):Math.max.apply(null,n))}(),Tt=T?Math.ceil((5*Et-gt)/2):4*Et-gt,Tt=Math.max(Et,Tt),_n("edgePadding")?Tt+1:Tt):0,re=T?gt+2*ie:gt+ie,ae=!(!Ht&&!At||zt),oe=Ht?Ri():null,le=!T||!zt,ue=st?"left":"top",se="",ce="",fe=Ht?function(){return Bt&&!zt?gt-1:Math.ceil(-oe/(Ht+Nt))}:At?function(){for(var t=0;t<re;t++)if(xt[t]>=-oe)return t}:function(){return Bt&&T&&!zt?gt-1:zt||T?Math.max(0,re-Math.ceil(Dt)):re-1},de=Nn(Un("startIndex")),pe=de,ve=(kn(),0),me=At?null:fe(),he=t.preventActionWhenRunning,ge=t.swipeAngle,ye=!ge||"?",be=!1,xe=t.onInit,we=new ut,Ce=" tns-slider tns-"+t.mode,Me=pt.id||(Mt=window.tnsId,window.tnsId=Mt?Mt+1:1,"tns"+window.tnsId),Ee=Un("disable"),Te=!1,Se=t.freezable,Le=!(!Se||At)&&ei(),Re=!1,Ae={click:Fi,keydown:function(t){t=Xi(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Ye.disabled||Fi(t,-1):Ze.disabled||Fi(t,1))}},He={click:function(t){if(be){if(he)return;Di()}var e=Gi(t=Xi(t));for(;e!==nn&&!X(e,"data-nav");)e=e.parentNode;if(X(e,"data-nav")){var n=ln=Number(G(e,"data-nav")),i=Ht||At?n*gt/an:n*Dt;Ii(Pe?n:Math.min(Math.ceil(i),gt-1),t),un===n&&(vn&&ji(),ln=-1)}},keydown:function(t){t=Xi(t);var n=e.activeElement;if(!X(n,"data-nav"))return;var r=[i.LEFT,i.RIGHT,i.ENTER,i.SPACE].indexOf(t.keyCode),a=Number(G(n,"data-nav"));r>=0&&(0===r?a>0&&qi(en[a-1]):1===r?a<an-1&&qi(en[a+1]):(ln=a,Ii(a,t)))}},ke={mouseover:function(){vn&&(_i(),mn=!0)},mouseout:function(){mn&&(Pi(),mn=!1)}},Ne={visibilitychange:function(){e.hidden?vn&&(_i(),gn=!0):gn&&(Pi(),gn=!1)}},Oe={keydown:function(t){t=Xi(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);e>=0&&Fi(t,0===e?-1:1)}},Be={touchstart:Qi,touchmove:Yi,touchend:$i,touchcancel:$i},De={mousedown:Qi,mousemove:Yi,mouseup:$i,mouseleave:$i},Ie=_n("controls"),Fe=_n("nav"),Pe=!!At||t.navAsThumbnails,_e=_n("autoplay"),Ue=_n("touch"),ze=_n("mouseDrag"),je="tns-slide-active",We="tns-slide-cloned",qe="tns-complete",Xe={load:function(t){fi(Gi(t))},error:function(t){e=Gi(t),W(e,"failed"),di(e);var e}},Ge="force"===t.preventScrollOnTouch;if(Ie)var Ve,Ke,Je=t.controlsContainer,Qe=t.controlsContainer?t.controlsContainer.outerHTML:"",Ye=t.prevButton,Ze=t.nextButton,$e=t.prevButton?t.prevButton.outerHTML:"",tn=t.nextButton?t.nextButton.outerHTML:"";if(Fe)var en,nn=t.navContainer,rn=t.navContainer?t.navContainer.outerHTML:"",an=At?gt:er(),on=0,ln=-1,un=Bn(),sn=un,cn="tns-nav-active",fn="Carousel Page ",dn=" (Current Slide)";if(_e)var pn,vn,mn,hn,gn,yn="forward"===t.autoplayDirection?1:-1,bn=t.autoplayButton,xn=t.autoplayButton?t.autoplayButton.outerHTML:"",wn=["<span class='tns-visually-hidden'>"," animation</span>"];if(Ue||ze)var Cn,Mn,En={},Tn={},Sn=!1,Ln=st?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};At||Hn(Ee||Le),f&&(ue=f,se="translate",d?(se+=st?"3d(":"3d(0px, ",ce=st?", 0px, 0px)":", 0px)"):(se+=st?"X(":"Y(",ce=")")),T&&(pt.className=pt.className.replace("tns-vpfix","")),function(){_n("gutter");ft.className="tns-outer",dt.className="tns-inner",ft.id=Me+"-ow",dt.id=Me+"-iw",""===pt.id&&(pt.id=Me);Ce+=s||At?" tns-subpixel":" tns-no-subpixel",Ce+=u?" tns-calc":" tns-no-calc",At&&(Ce+=" tns-autowidth");Ce+=" tns-"+t.axis,pt.className+=Ce,T?((rt=e.createElement("div")).id=Me+"-mw",rt.className="tns-ovh",ft.appendChild(rt),rt.appendChild(dt)):ft.appendChild(dt);if(jt){(rt||dt).className+=" tns-ah"}if(vt.insertBefore(ft,pt),dt.appendChild(pt),U(ht,(function(t,e){W(t,"tns-item"),t.id||(t.id=Me+"-item"+e),!T&&it&&W(t,it),K(t,{"aria-hidden":"true",tabindex:"-1"})})),ie){for(var n=e.createDocumentFragment(),i=e.createDocumentFragment(),r=ie;r--;){var a=r%gt,o=ht[a].cloneNode(!0);if(W(o,We),J(o,"id"),i.insertBefore(o,i.firstChild),T){var l=ht[gt-1-a].cloneNode(!0);W(l,We),J(l,"id"),n.appendChild(l)}}pt.insertBefore(n,pt.firstChild),pt.appendChild(i),ht=pt.children}}(),function(){if(!T)for(var e=de,i=de+Math.min(gt,Dt);e<i;e++){var r=ht[e];r.style.left=100*(e-de)/Dt+"%",W(r,O),q(r,it)}st&&(s||At?(F($t,"#"+Me+" > .tns-item","font-size:"+n.getComputedStyle(ht[0]).fontSize+";",_($t)),F($t,"#"+Me,"font-size:0;",_($t))):T&&U(ht,(function(t,e){t.style.marginLeft=function(t){return u?u+"("+100*t+"% / "+re+")":100*t/re+"%"}(e)})));if(c){if(p){var a=rt&&t.autoHeight?Gn(t.speed):"";F($t,"#"+Me+"-mw",a,_($t))}a=zn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),F($t,"#"+Me+"-iw",a,_($t)),T&&(a=st&&!At?"width:"+jn(t.fixedWidth,t.gutter,t.items)+";":"",p&&(a+=Gn(_t)),F($t,"#"+Me,a,_($t))),a=st&&!At?Wn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(a+=qn(t.gutter)),T||(p&&(a+=Gn(_t)),m&&(a+=Vn(_t))),a&&F($t,"#"+Me+" > .tns-item",a,_($t))}else{T&&jt&&(rt.style[p]=_t/1e3+"s"),dt.style.cssText=zn(kt,Nt,Ht,jt),T&&st&&!At&&(pt.style.width=jn(Ht,Nt,Dt));a=st&&!At?Wn(Ht,Nt,Dt):"";Nt&&(a+=qn(Nt)),a&&F($t,"#"+Me+" > .tns-item",a,_($t))}if(C&&c)for(var o in C){o=parseInt(o);var l=C[o],f=(a="",""),d="",v="",h="",g=At?null:Un("items",o),y=Un("fixedWidth",o),b=Un("speed",o),x=Un("edgePadding",o),w=Un("autoHeight",o),M=Un("gutter",o);p&&rt&&Un("autoHeight",o)&&"speed"in l&&(f="#"+Me+"-mw{"+Gn(b)+"}"),("edgePadding"in l||"gutter"in l)&&(d="#"+Me+"-iw{"+zn(x,M,y,b,w)+"}"),T&&st&&!At&&("fixedWidth"in l||"items"in l||Ht&&"gutter"in l)&&(v="width:"+jn(y,M,g)+";"),p&&"speed"in l&&(v+=Gn(b)),v&&(v="#"+Me+"{"+v+"}"),("fixedWidth"in l||Ht&&"gutter"in l||!T&&"items"in l)&&(h+=Wn(y,M,g)),"gutter"in l&&(h+=qn(M)),!T&&"speed"in l&&(p&&(h+=Gn(b)),m&&(h+=Vn(b))),h&&(h="#"+Me+" > .tns-item{"+h+"}"),(a=f+d+v+h)&&$t.insertRule("@media (min-width: "+o/16+"em) {"+a+"}",$t.cssRules.length)}}(),Kn();var Rn=zt?T?function(){var t=ve,e=me;t+=It,e-=It,kt?(t+=1,e-=1):Ht&&(Ot+Nt)%(Ht+Nt)&&(e-=1),ie&&(de>e?de-=gt:de<t&&(de+=gt))}:function(){if(de>me)for(;de>=ve+gt;)de-=gt;else if(de<ve)for(;de<=me-gt;)de+=gt}:function(){de=Math.max(ve,Math.min(me,de))},An=T?function(){var t,e,n,i,r,a,o,l,u,s,c;Si(pt,""),p||!_t?(ki(),_t&&$(pt)||Di()):(t=pt,e=ue,n=se,i=ce,r=Ai(),a=_t,o=Di,l=Math.min(a,10),u=r.indexOf("%")>=0?"%":"px",r=r.replace(u,""),s=Number(t.style[e].replace(n,"").replace(i,"").replace(u,"")),c=(r-s)/a*l,setTimeout((function r(){a-=l,s+=c,t.style[e]=n+s+u+i,a>0?setTimeout(r,l):o()}),l)),st||tr()}:function(){ne=[];var t={};t[g]=t[y]=Di,lt(ht[pe],t),ot(ht[de],t),Ni(pe,O,z,!0),Ni(de,it,O),g&&y&&_t&&$(pt)||Di()};return{version:"2.9.4",getInfo:ir,events:we,goTo:Ii,play:function(){Kt&&!vn&&(zi(),hn=!1)},pause:function(){vn&&(ji(),hn=!0)},isOn:bt,updateSliderHeight:yi,refresh:Kn,destroy:function(){if($t.disabled=!0,$t.ownerNode&&$t.ownerNode.remove(),lt(n,{resize:$n}),Pt&&lt(e,Oe),Je&&lt(Je,Ae),nn&&lt(nn,He),lt(pt,ke),lt(pt,Ne),bn&&lt(bn,{click:Wi}),Kt&&clearInterval(pn),T&&g){var i={};i[g]=Di,lt(pt,i)}Gt&&lt(pt,Be),Vt&&lt(pt,De);var r=[mt,Qe,$e,tn,rn,xn];for(var a in x.forEach((function(e,n){var i="container"===e?ft:t[e];if("object"==typeof i&&i){var a=!!i.previousElementSibling&&i.previousElementSibling,o=i.parentNode;i.outerHTML=r[n],t[e]=a?a.nextElementSibling:o.firstElementChild}})),x=O=z=V=it=st=ft=dt=pt=vt=mt=ht=gt=at=yt=At=Ht=kt=Nt=Ot=Dt=It=Ft=Pt=_t=Ut=zt=jt=$t=te=xt=ne=ie=re=ae=oe=le=ue=se=ce=fe=de=pe=ve=me=ge=ye=be=xe=we=Ce=Me=Ee=Te=Se=Le=Re=Ae=He=ke=Ne=Oe=Be=De=Ie=Fe=Pe=_e=Ue=ze=je=qe=Xe=wt=Wt=qt=Je=Qe=Ye=Ze=Ve=Ke=Xt=nn=rn=en=an=on=ln=un=sn=cn=fn=dn=Kt=Jt=yn=Qt=Yt=bn=xn=Zt=wn=pn=vn=mn=hn=gn=En=Tn=Cn=Sn=Mn=Ln=Gt=Vt=null,this)"rebuild"!==a&&(this[a]=null);bt=!1},rebuild:function(){return ct(L(t,w))}}}function Hn(t){t&&(Wt=Xt=Gt=Vt=Pt=Kt=Yt=Zt=!1)}function kn(){for(var t=T?de-ie:de;t<0;)t+=gt;return t%gt+1}function Nn(t){return t=t?Math.max(0,Math.min(zt?gt-1:gt-Dt,t)):0,T?t+ie:t}function On(t){for(null==t&&(t=de),T&&(t-=ie);t<0;)t+=gt;return Math.floor(t%gt)}function Bn(){var t,e=On();return t=Pe?e:Ht||At?Math.ceil((e+1)*an/gt-1):Math.floor(e/Dt),!zt&&T&&de===me&&(t=an-1),t}function Dn(){return n.innerWidth||e.documentElement.clientWidth||e.body.clientWidth}function In(t){return"top"===t?"afterbegin":"beforeend"}function Fn(t){if(null!=t){var n,i,r=e.createElement("div");return t.appendChild(r),i=(n=r.getBoundingClientRect()).right-n.left,r.remove(),i||Fn(t.parentNode)}}function Pn(){var t=kt?2*kt-Nt:0;return Fn(vt)-t}function _n(e){if(t[e])return!0;if(C)for(var n in C)if(C[n][e])return!0;return!1}function Un(e,n){if(null==n&&(n=yt),"items"===e&&Ht)return Math.floor((Ot+Nt)/(Ht+Nt))||1;var i=t[e];if(C)for(var r in C)n>=parseInt(r)&&e in C[r]&&(i=C[r][e]);return"slideBy"===e&&"page"===i&&(i=Un("items")),T||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function zn(t,e,n,i,r){var a="";if(void 0!==t){var o=t;e&&(o-=e),a=st?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var l="-"+e+"px";a="margin: 0 "+(st?l+" 0 0":"0 "+l+" 0")+";"}return!T&&r&&p&&i&&(a+=Gn(i)),a}function jn(t,e,n){return t?(t+e)*re+"px":u?u+"("+100*re+"% / "+n+")":100*re/n+"%"}function Wn(t,e,n){var i;if(t)i=t+e+"px";else{T||(n=Math.floor(n));var r=T?re:n;i=u?u+"(100% / "+r+")":100/r+"%"}return i="width:"+i,"inner"!==M?i+";":i+" !important;"}function qn(t){var e="";!1!==t&&(e=(st?"padding-":"margin-")+(st?"right":"bottom")+": "+t+"px;");return e}function Xn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Gn(t){return Xn(p,18)+"transition-duration:"+t/1e3+"s;"}function Vn(t){return Xn(m,17)+"animation-duration:"+t/1e3+"s;"}function Kn(){if(_n("autoHeight")||At||!st){var t=pt.querySelectorAll("img");U(t,(function(t){var e=t.src;te||(e&&e.indexOf("data:image")<0?(t.src="",ot(t,Xe),W(t,"loading"),t.src=e):fi(t))})),E((function(){mi(Q(t),(function(){wt=!0}))})),_n("autoHeight")&&(t=pi(de,Math.min(de+Dt-1,re-1))),te?Jn():E((function(){mi(Q(t),Jn)}))}else T&&Hi(),Yn(),Zn()}function Jn(){if(At&&gt>1){var t=zt?de:gt-1;!function e(){var n=ht[t].getBoundingClientRect().left,i=ht[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Qn():setTimeout((function(){e()}),16)}()}else Qn()}function Qn(){st&&!At||(bi(),At?(oe=Ri(),Se&&(Le=ei()),me=fe(),Hn(Ee||Le)):tr()),T&&Hi(),Yn(),Zn()}function Yn(){if(xi(),ft.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+ui()+"</span>  of "+gt+"</div>"),Ct=ft.querySelector(".tns-liveregion .current"),_e){var e=Kt?"stop":"start";bn?K(bn,{"data-action":e}):t.autoplayButtonOutput&&(ft.insertAdjacentHTML(In(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+wn[0]+e+wn[1]+Qt[0]+"</button>"),bn=ft.querySelector("[data-action]")),bn&&ot(bn,{click:Wi}),Kt&&(zi(),Yt&&ot(pt,ke),Zt&&ot(pt,Ne))}if(Fe){if(nn)K(nn,{"aria-label":"Carousel Pagination"}),U(en=nn.children,(function(t,e){K(t,{"data-nav":e,tabindex:"-1","aria-label":fn+(e+1),"aria-controls":Me})}));else{for(var n="",i=Pe?"":'style="display:none"',r=0;r<gt;r++)n+='<button type="button" data-nav="'+r+'" tabindex="-1" aria-controls="'+Me+'" '+i+' aria-label="'+fn+(r+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",ft.insertAdjacentHTML(In(t.navPosition),n),nn=ft.querySelector(".tns-nav"),en=nn.children}if(nr(),p){var a=p.substring(0,p.length-18).toLowerCase(),o="transition: all "+_t/1e3+"s";a&&(o="-"+a+"-"+o),F($t,"[aria-controls^="+Me+"-item]",o,_($t))}K(en[un],{"aria-label":fn+(un+1)+dn}),J(en[un],"tabindex"),W(en[un],cn),ot(nn,He)}Ie&&(Je||Ye&&Ze||(ft.insertAdjacentHTML(In(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+Me+'">'+qt[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+Me+'">'+qt[1]+"</button></div>"),Je=ft.querySelector(".tns-controls")),Ye&&Ze||(Ye=Je.children[0],Ze=Je.children[1]),t.controlsContainer&&K(Je,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&K([Ye,Ze],{"aria-controls":Me,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(K(Ye,{"data-controls":"prev"}),K(Ze,{"data-controls":"next"})),Ve=Ci(Ye),Ke=Ci(Ze),Ti(),Je?ot(Je,Ae):(ot(Ye,Ae),ot(Ze,Ae))),ii()}function Zn(){if(T&&g){var i={};i[g]=Di,ot(pt,i)}Gt&&ot(pt,Be,t.preventScrollOnTouch),Vt&&ot(pt,De),Pt&&ot(e,Oe),"inner"===M?we.on("outerResized",(function(){ti(),we.emit("innerLoaded",ir())})):(C||Ht||At||jt||!st)&&ot(n,{resize:$n}),jt&&("outer"===M?we.on("innerLoaded",vi):Ee||vi()),ci(),Ee?oi():Le&&ai(),we.on("indexChanged",hi),"inner"===M&&we.emit("innerLoaded",ir()),"function"==typeof xe&&xe(ir()),bt=!0}function $n(t){E((function(){ti(Xi(t))}))}function ti(n){if(bt){"outer"===M&&we.emit("outerResized",ir(n)),yt=Dn();var i,r=at,a=!1;C&&(ni(),(i=r!==at)&&we.emit("newBreakpointStart",ir(n)));var o,l,u=Dt,s=Ee,f=Le,d=Pt,p=Wt,v=Xt,m=Gt,h=Vt,g=Kt,y=Yt,b=Zt,x=de;if(i){var w=Ht,E=jt,S=qt,L=Bt,R=Qt;if(!c)var A=Nt,H=kt}if(Pt=Un("arrowKeys"),Wt=Un("controls"),Xt=Un("nav"),Gt=Un("touch"),Bt=Un("center"),Vt=Un("mouseDrag"),Kt=Un("autoplay"),Yt=Un("autoplayHoverPause"),Zt=Un("autoplayResetOnVisibility"),i&&(Ee=Un("disable"),Ht=Un("fixedWidth"),_t=Un("speed"),jt=Un("autoHeight"),qt=Un("controlsText"),Qt=Un("autoplayText"),Jt=Un("autoplayTimeout"),c||(kt=Un("edgePadding"),Nt=Un("gutter"))),Hn(Ee),Ot=Pn(),st&&!At||Ee||(bi(),st||(tr(),a=!0)),(Ht||At)&&(oe=Ri(),me=fe()),(i||Ht)&&(Dt=Un("items"),It=Un("slideBy"),(l=Dt!==u)&&(Ht||At||(me=fe()),Rn())),i&&Ee!==s&&(Ee?oi():function(){if(!Te)return;if($t.disabled=!1,pt.className+=Ce,Hi(),zt)for(var t=ie;t--;)T&&Z(ht[t]),Z(ht[re-t-1]);if(!T)for(var e=de,n=de+gt;e<n;e++){var i=ht[e],r=e<de+Dt?O:it;i.style.left=100*(e-de)/Dt+"%",W(i,r)}ri(),Te=!1}()),Se&&(i||Ht||At)&&(Le=ei())!==f&&(Le?(ki(Ai(Nn(0))),ai()):(!function(){if(!Re)return;kt&&c&&(dt.style.margin="");if(ie)for(var t="tns-transparent",e=ie;e--;)T&&q(ht[e],t),q(ht[re-e-1],t);ri(),Re=!1}(),a=!0)),Hn(Ee||Le),Kt||(Yt=Zt=!1),Pt!==d&&(Pt?ot(e,Oe):lt(e,Oe)),Wt!==p&&(Wt?Je?Z(Je):(Ye&&Z(Ye),Ze&&Z(Ze)):Je?Y(Je):(Ye&&Y(Ye),Ze&&Y(Ze))),Xt!==v&&(Xt?(Z(nn),nr()):Y(nn)),Gt!==m&&(Gt?ot(pt,Be,t.preventScrollOnTouch):lt(pt,Be)),Vt!==h&&(Vt?ot(pt,De):lt(pt,De)),Kt!==g&&(Kt?(bn&&Z(bn),vn||hn||zi()):(bn&&Y(bn),vn&&ji())),Yt!==y&&(Yt?ot(pt,ke):lt(pt,ke)),Zt!==b&&(Zt?ot(e,Ne):lt(e,Ne)),i){if(Ht===w&&Bt===L||(a=!0),jt!==E&&(jt||(dt.style.height="")),Wt&&qt!==S&&(Ye.innerHTML=qt[0],Ze.innerHTML=qt[1]),bn&&Qt!==R){var k=Kt?1:0,N=bn.innerHTML,B=N.length-R[k].length;N.substring(B)===R[k]&&(bn.innerHTML=N.substring(0,B)+Qt[k])}}else Bt&&(Ht||At)&&(a=!0);if((l||Ht&&!At)&&(an=er(),nr()),(o=de!==x)?(we.emit("indexChanged",ir()),a=!0):l?o||hi():(Ht||At)&&(ci(),xi(),li()),l&&!T&&function(){for(var t=de+Math.min(gt,Dt),e=re;e--;){var n=ht[e];e>=de&&e<t?(W(n,"tns-moving"),n.style.left=100*(e-de)/Dt+"%",W(n,O),q(n,it)):n.style.left&&(n.style.left="",W(n,it),q(n,O)),q(n,z)}setTimeout((function(){U(ht,(function(t){q(t,"tns-moving")}))}),300)}(),!Ee&&!Le){if(i&&!c&&(kt===H&&Nt===A||(dt.style.cssText=zn(kt,Nt,Ht,_t,jt)),st)){T&&(pt.style.width=jn(Ht,Nt,Dt));var D=Wn(Ht,Nt,Dt)+qn(Nt);P($t,_($t)-1),F($t,"#"+Me+" > .tns-item",D,_($t))}jt&&vi(),a&&(Hi(),pe=de)}i&&we.emit("newBreakpointEnd",ir(n))}}function ei(){if(!Ht&&!At)return gt<=(Bt?Dt-(Dt-1)/2:Dt);var t=Ht?(Ht+Nt)*gt:xt[gt],e=kt?Ot+2*kt:Ot+Nt;return Bt&&(e-=Ht?(Ot-Ht)/2:(Ot-(xt[de+1]-xt[de]-Nt))/2),t<=e}function ni(){for(var t in at=0,C)t=parseInt(t),yt>=t&&(at=t)}function ii(){!Kt&&bn&&Y(bn),!Xt&&nn&&Y(nn),Wt||(Je?Y(Je):(Ye&&Y(Ye),Ze&&Y(Ze)))}function ri(){Kt&&bn&&Z(bn),Xt&&nn&&Z(nn),Wt&&(Je?Z(Je):(Ye&&Z(Ye),Ze&&Z(Ze)))}function ai(){if(!Re){if(kt&&(dt.style.margin="0px"),ie)for(var t="tns-transparent",e=ie;e--;)T&&W(ht[e],t),W(ht[re-e-1],t);ii(),Re=!0}}function oi(){if(!Te){if($t.disabled=!0,pt.className=pt.className.replace(Ce.substring(1),""),J(pt,["style"]),zt)for(var t=ie;t--;)T&&Y(ht[t]),Y(ht[re-t-1]);if(st&&T||J(dt,["style"]),!T)for(var e=de,n=de+gt;e<n;e++){var i=ht[e];J(i,["style"]),q(i,O),q(i,it)}ii(),Te=!0}}function li(){var t=ui();Ct.innerHTML!==t&&(Ct.innerHTML=t)}function ui(){var t=si(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function si(t){null==t&&(t=Ai());var e,n,i,r=de;if(Bt||kt?(At||Ht)&&(n=-(parseFloat(t)+kt),i=n+Ot+2*kt):At&&(n=xt[de],i=n+Ot),At)xt.forEach((function(t,a){a<re&&((Bt||kt)&&t<=n+.5&&(r=a),i-t>=.5&&(e=a))}));else{if(Ht){var a=Ht+Nt;Bt||kt?(r=Math.floor(n/a),e=Math.ceil(i/a-1)):e=r+Math.ceil(Ot/a)-1}else if(Bt||kt){var o=Dt-1;if(Bt?(r-=o/2,e=de+o/2):e=de+o,kt){var l=kt*Dt/Ot;r-=l,e+=l}r=Math.floor(r),e=Math.ceil(e)}else e=r+Dt-1;r=Math.max(r,0),e=Math.min(e,re-1)}return[r,e]}function ci(){if(te&&!Ee){var t=si();t.push(ee),pi.apply(null,t).forEach((function(t){if(!j(t,qe)){var e={};e[g]=function(t){t.stopPropagation()},ot(t,e),ot(t,Xe),t.src=G(t,"data-src");var n=G(t,"data-srcset");n&&(t.srcset=n),W(t,"loading")}}))}}function fi(t){W(t,"loaded"),di(t)}function di(t){W(t,qe),q(t,"loading"),lt(t,Xe)}function pi(t,e,n){var i=[];for(n||(n="img");t<=e;)U(ht[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function vi(){var t=pi.apply(null,si());E((function(){mi(t,yi)}))}function mi(t,e){return wt?e():(t.forEach((function(e,n){!te&&e.complete&&di(e),j(e,qe)&&t.splice(n,1)})),t.length?void E((function(){mi(t,e)})):e())}function hi(){ci(),xi(),li(),Ti(),function(){if(Xt&&(un=ln>=0?ln:Bn(),ln=-1,un!==sn)){var t=en[sn],e=en[un];K(t,{tabindex:"-1","aria-label":fn+(sn+1)}),q(t,cn),K(e,{"aria-label":fn+(un+1)+dn}),J(e,"tabindex"),W(e,cn),sn=un}}()}function gi(t,e){for(var n=[],i=t,r=Math.min(t+e,re);i<r;i++)n.push(ht[i].offsetHeight);return Math.max.apply(null,n)}function yi(){var t=jt?gi(de,Dt):gi(ie,gt),e=rt||dt;e.style.height!==t&&(e.style.height=t+"px")}function bi(){xt=[0];var t=st?"left":"top",e=st?"right":"bottom",n=ht[0].getBoundingClientRect()[t];U(ht,(function(i,r){r&&xt.push(i.getBoundingClientRect()[t]-n),r===re-1&&xt.push(i.getBoundingClientRect()[e]-n)}))}function xi(){var t=si(),e=t[0],n=t[1];U(ht,(function(t,i){i>=e&&i<=n?X(t,"aria-hidden")&&(J(t,["aria-hidden","tabindex"]),W(t,je)):X(t,"aria-hidden")||(K(t,{"aria-hidden":"true",tabindex:"-1"}),q(t,je))}))}function wi(t){return t.nodeName.toLowerCase()}function Ci(t){return"button"===wi(t)}function Mi(t){return"true"===t.getAttribute("aria-disabled")}function Ei(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Ti(){if(Wt&&!Ut&&!zt){var t=Ve?Ye.disabled:Mi(Ye),e=Ke?Ze.disabled:Mi(Ze),n=de<=ve,i=!Ut&&de>=me;n&&!t&&Ei(Ve,Ye,!0),!n&&t&&Ei(Ve,Ye,!1),i&&!e&&Ei(Ke,Ze,!0),!i&&e&&Ei(Ke,Ze,!1)}}function Si(t,e){p&&(t.style[p]=e)}function Li(t){return null==t&&(t=de),At?(Ot-(kt?Nt:0)-(xt[t+1]-xt[t]-Nt))/2:Ht?(Ot-Ht)/2:(Dt-1)/2}function Ri(){var t=Ot+(kt?Nt:0)-(Ht?(Ht+Nt)*re:xt[re]);return Bt&&!zt&&(t=Ht?-(Ht+Nt)*(re-1)-Li():Li(re-1)-xt[re-1]),t>0&&(t=0),t}function Ai(t){var e;if(null==t&&(t=de),st&&!At)if(Ht)e=-(Ht+Nt)*t,Bt&&(e+=Li());else{var n=f?re:Dt;Bt&&(t-=Li()),e=100*-t/n}else e=-xt[t],Bt&&At&&(e+=Li());return ae&&(e=Math.max(e,oe)),e+=!st||At||Ht?"px":"%"}function Hi(t){Si(pt,"0s"),ki(t)}function ki(t){null==t&&(t=Ai()),pt.style[ue]=se+t+ce}function Ni(t,e,n,i){var r=t+Dt;zt||(r=Math.min(r,re));for(var a=t;a<r;a++){var o=ht[a];i||(o.style.left=100*(a-de)/Dt+"%"),V&&v&&(o.style[v]=o.style[h]=V*(a-t)/1e3+"s"),q(o,e),W(o,n),i&&ne.push(o)}}function Oi(t,e){le&&Rn(),(de!==pe||e)&&(we.emit("indexChanged",ir()),we.emit("transitionStart",ir()),jt&&vi(),vn&&t&&["click","keydown"].indexOf(t.type)>=0&&ji(),be=!0,An())}function Bi(t){return t.toLowerCase().replace(/-/g,"")}function Di(t){if(T||be){if(we.emit("transitionEnd",ir(t)),!T&&ne.length>0)for(var e=0;e<ne.length;e++){var n=ne[e];n.style.left="",h&&v&&(n.style[h]="",n.style[v]=""),q(n,z),W(n,it)}if(!t||!T&&t.target.parentNode===pt||t.target===pt&&Bi(t.propertyName)===Bi(ue)){if(!le){var i=de;Rn(),de!==i&&(we.emit("indexChanged",ir()),Hi())}"inner"===M&&we.emit("innerLoaded",ir()),be=!1,pe=de}}}function Ii(t,e){if(!Le)if("prev"===t)Fi(e,-1);else if("next"===t)Fi(e,1);else{if(be){if(he)return;Di()}var n=On(),i=0;if("first"===t?i=-n:"last"===t?i=T?gt-Dt-n:gt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(gt-1,t))),i=t-n)),!T&&i&&Math.abs(i)<Dt){var r=i>0?1:-1;i+=de+i-gt>=ve?gt*r:2*gt*r*-1}de+=i,T&&zt&&(de<ve&&(de+=gt),de>me&&(de-=gt)),On(de)!==On(pe)&&Oi(e)}}function Fi(t,e){if(be){if(he)return;Di()}var n;if(!e){for(var i=Gi(t=Xi(t));i!==Je&&[Ye,Ze].indexOf(i)<0;)i=i.parentNode;var r=[Ye,Ze].indexOf(i);r>=0&&(n=!0,e=0===r?-1:1)}if(Ut){if(de===ve&&-1===e)return void Ii("last",t);if(de===me&&1===e)return void Ii("first",t)}e&&(de+=It*e,At&&(de=Math.floor(de)),Oi(n||t&&"keydown"===t.type?t:null))}function Pi(){pn=setInterval((function(){Fi(null,yn)}),Jt),vn=!0}function _i(){clearInterval(pn),vn=!1}function Ui(t,e){K(bn,{"data-action":t}),bn.innerHTML=wn[0]+t+wn[1]+e}function zi(){Pi(),bn&&Ui("stop",Qt[1])}function ji(){_i(),bn&&Ui("start",Qt[0])}function Wi(){vn?(ji(),hn=!0):(zi(),hn=!1)}function qi(t){t.focus()}function Xi(t){return Vi(t=t||n.event)?t.changedTouches[0]:t}function Gi(t){return t.target||n.event.srcElement}function Vi(t){return t.type.indexOf("touch")>=0}function Ki(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Ji(){return a=Tn.y-En.y,o=Tn.x-En.x,e=Math.atan2(a,o)*(180/Math.PI),n=ge,i=!1,(r=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":r<=n&&(i="vertical"),i===t.axis;var e,n,i,r,a,o}function Qi(t){if(be){if(he)return;Di()}Kt&&vn&&_i(),Sn=!0,Mn&&(S(Mn),Mn=null);var e=Xi(t);we.emit(Vi(t)?"touchStart":"dragStart",ir(t)),!Vi(t)&&["img","a"].indexOf(wi(Gi(t)))>=0&&Ki(t),Tn.x=En.x=e.clientX,Tn.y=En.y=e.clientY,T&&(Cn=parseFloat(pt.style[ue].replace(se,"")),Si(pt,"0s"))}function Yi(t){if(Sn){var e=Xi(t);Tn.x=e.clientX,Tn.y=e.clientY,T?Mn||(Mn=E((function(){Zi(t)}))):("?"===ye&&(ye=Ji()),ye&&(Ge=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&Ge&&t.preventDefault()}}function Zi(t){if(ye){if(S(Mn),Sn&&(Mn=E((function(){Zi(t)}))),"?"===ye&&(ye=Ji()),ye){!Ge&&Vi(t)&&(Ge=!0);try{t.type&&we.emit(Vi(t)?"touchMove":"dragMove",ir(t))}catch(t){}var e=Cn,n=Ln(Tn,En);if(!st||Ht||At)e+=n,e+="px";else e+=f?n*Dt*100/((Ot+Nt)*re):100*n/(Ot+Nt),e+="%";pt.style[ue]=se+e+ce}}else Sn=!1}function $i(e){if(Sn){Mn&&(S(Mn),Mn=null),T&&Si(pt,""),Sn=!1;var n=Xi(e);Tn.x=n.clientX,Tn.y=n.clientY;var i=Ln(Tn,En);if(Math.abs(i)){if(!Vi(e)){var r=Gi(e);ot(r,{click:function t(e){Ki(e),lt(r,{click:t})}})}T?Mn=E((function(){if(st&&!At){var t=-i*Dt/(Ot+Nt);t=i>0?Math.floor(t):Math.ceil(t),de+=t}else{var n=-(Cn+i);if(n<=0)de=ve;else if(n>=xt[re-1])de=me;else for(var r=0;r<re&&n>=xt[r];)de=r,n>xt[r]&&i<0&&(de+=1),r++}Oi(e,i),we.emit(Vi(e)?"touchEnd":"dragEnd",ir(e))})):ye&&Fi(e,i>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(Ge=!1),ge&&(ye="?"),Kt&&!vn&&Pi()}function tr(){(rt||dt).style.height=xt[de+Dt]-xt[de]+"px"}function er(){var t=Ht?(Ht+Nt)*gt/Ot:gt/Dt;return Math.min(Math.ceil(t),gt)}function nr(){if(Xt&&!Pe&&an!==on){var t=on,e=an,n=Z;for(on>an&&(t=an,e=on,n=Y);t<e;)n(en[t]),t++;on=an}}function ir(t){return{container:pt,slideItems:ht,navContainer:nn,navItems:en,controlsContainer:Je,hasControls:Ie,prevButton:Ye,nextButton:Ze,items:Dt,slideBy:It,cloneCount:ie,slideCount:gt,slideCountNew:re,index:de,indexCached:pe,displayIndex:kn(),navCurrentIndex:un,navCurrentIndexCached:sn,pages:an,pagesCached:on,sheet:$t,isOn:bt,event:t||{}}}b&&console.warn("No slides found in",t.container)};console.log(ct),document.querySelector(".support-list").insertAdjacentHTML("beforeend",(st=C,st.map((t=>`<li class="support_item swiper-slide"><a class="support-link" target="_blank" href="${t.url}"><span class="support-number">0${st.indexOf(t)+1}</span>\n    <img class="support-logo" alt="${t.title}" src="${t.img}"></a></li>`))).join(" "));const ft=document.querySelector(".support-button-next"),dt=ct({container:".my-slider",axis:"vertical",controls:!1,nav:!1,items:4,slideBy:2,rewind:!0,gutter:20,edgePadding:5,speed:500,responsive:{768:{items:6,slideBy:1,speed:300}}});ft.addEventListener("click",(()=>{dt.goTo("next");const t=dt.getInfo();2===t.slideBy&&(6===t.displayIndex&&(ft.style.transform="rotate(180deg)"),6!==t.displayIndex&&(ft.style.transform="none")),1===t.slideBy&&(4===t.displayIndex&&(ft.style.transform="rotate(180deg)"),4!==t.displayIndex&&(ft.style.transform="none"))}));
//# sourceMappingURL=index.5b58fe8b.js.map
