import{a as U,c as _,d as me,e as pe,f as fe,g as ve,h as we,i as ye,j as ge,k as K}from"./chunk-ZWHR2BBK.js";import{a as w,b as E}from"./chunk-SIPUJ6ZC.js";import{$ as Ee,A as b,B as j,C as B,D as be,E as z,F as G,H as Q,I as Ce,J as Se,M as Ae,N as Le,O as qe,P as ke,Q as xe,R as Te,S as Re,T as He,U as Me,V as Ie,W as Ne,X as Oe,Y as Pe,Z as Ue,_ as je,a as f,aa as Be,c as X,e as q,f as ze,k as D,l as Xe,m as h,n as k,o as $,q as W,r as Y,s as De,t as x,u as y,v as V,w as T,x as Z,y as d,z as $e}from"./chunk-OXOYMOYW.js";import{c as m}from"./chunk-KXUEO5GP.js";m(),m(),m(),Xe();var R=(e,t)=>{d.hasClass("on")?(d.removeClass("on"),T.removeClass("close"),t?d.style="":w(d,"slideRightOut")):t?d.style="":w(d,"slideRightIn",()=>{d.addClass("on"),T.addClass("close")})},We=()=>{let e=d.querySelector(".inner");d.querySelector(".tab")&&e.removeChild(d.querySelector(".tab"));let t=document.createElement("ul"),s="active";t.className="tab",["contents","related","overview"].forEach(o=>{let n=d.querySelector(".panel."+o);if(n.innerHTML.trim().length<1){o==="contents"&&D(z,"none");return}o==="contents"&&D(z,"");let r=document.createElement("li"),i=document.createElement("span"),a=document.createTextNode(n.getAttribute("data-title"));i.appendChild(a),r.appendChild(i),r.addClass(o+" item"),s?(n.addClass(s),r.addClass(s)):n.removeClass("active"),r.addEventListener("click",l=>{let c=l.currentTarget;c.hasClass("active")||(d.find(".tab .item").forEach(u=>{u.removeClass("active")}),d.find(".panel").forEach(u=>{u.removeClass("active")}),d.querySelector(".panel."+c.className.replace(" item","")).addClass("active"),c.addClass("active"))}),t.appendChild(r),s=""}),t.childNodes.length>1?(e.insertBefore(t,e.childNodes[0]),d.querySelector(".panels").style.paddingTop=""):d.querySelector(".panels").style.paddingTop=".625rem"},Ye=()=>{let e=i=>{let a=t[i];if(!a||a.hasClass("current"))return;f.each(".toc .active",c=>{c&&c.removeClass("active current")}),s.forEach(c=>{c&&c.removeClass("active")}),a.addClass("active current"),s[i]&&s[i].addClass("active");let l=a.parentNode;for(;!l.matches(".contents");){if(l.matches("li")){l.addClass("active");let c=document.querySelector(l.querySelector("a.toc-link").getAttribute("href"));c&&c.addClass("active")}l=l.parentNode}getComputedStyle(d).display!=="none"&&n.hasClass("active")&&E(n,a.offsetTop-n.offsetHeight/4)},t=f.all(".contents li");if(t.length<1)return;let s=[...t],o=null;s=s.map((i,a)=>{let l=i.querySelector("a.toc-link"),c=document.querySelector(decodeURI(l.getAttribute("href")));if(!c)return null;let u=c.querySelector("a.anchor"),L=p=>{p.preventDefault();let P=document.querySelector(decodeURI(p.currentTarget.getAttribute("href")));o=a,E(P,null,()=>{e(a),o=null})};return l.addEventListener("click",L),u&&u.addEventListener("click",p=>{L(p),pe(h.hostname+"/"+LOCAL.path+p.currentTarget.getAttribute("href"))}),c});let n=d.querySelector(".contents.panel"),r=i=>{let a=0,l=i[a];if(l.boundingClientRect.top>0)return a=s.indexOf(l.target),a===0?0:a-1;for(;a<i.length;a++)if(i[a].boundingClientRect.top<=0)l=i[a];else return s.indexOf(l.target);return s.indexOf(l.target)};(()=>{let i=new IntersectionObserver(a=>{let l=r(a)+($<0?1:0);o===null&&e(l)},{rootMargin:"0px 0px -100% 0px",threshold:0});s.forEach(a=>{a&&i.observe(a)})})()},ee=()=>{E(0)},Fe=()=>{E(parseInt(String(q(De))))},Je=()=>{E(document.getElementById("comments"))},_e=()=>{f.each(".menu .item:not(.title)",e=>{let t=e.querySelector("a[href]"),s=e.parentNode.parentNode;if(!t)return;let o=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),n=!h.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname),r=!t.onclick&&t.hostname===location.hostname&&(o||n);e.toggleClass("active",r),e.parentNode.querySelector(".active")&&s.hasClass("dropdown")?s.removeClass("active").addClass("expand"):s.removeClass("expand")})};m();var S={timer:void 0,lock:!1,show(){clearTimeout(this.timer),document.body.removeClass("loaded"),x.setAttribute("style","display:block"),S.lock=!1},hide(e){h.loader.start||(e=-1),this.timer=setTimeout(this.vanish,e||3e3)},vanish(){S.lock||(h.loader.start&&w(x,0),document.body.addClass("loaded"),S.lock=!0)}};function Ke(){f.each(".overview .menu > .item",e=>{y.querySelector(".menu").appendChild(e.cloneNode(!0))}),x.addEventListener("click",S.vanish),T.addEventListener("click",R),document.querySelector(".dimmer").addEventListener("click",R),Z.querySelector(".down").addEventListener("click",Fe),Z.querySelector(".up").addEventListener("click",ee),b||Ee(X(V,"div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})),Oe(b.querySelector(".player")),Pe(b.querySelector(".back-to-top")),Ue(b.querySelector(".chat")),je(b.querySelector(".contents")),B.addEventListener("click",ee),be.addEventListener("click",Je),z.addEventListener("click",R),ve(j),document.querySelector("main").addEventListener("click",()=>{j.player.mini()}),new IntersectionObserver(([e])=>{e.isIntersecting?(document.querySelectorAll(".parallax>use").forEach(t=>{t.classList.remove("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(t=>{t.classList.remove("stop-animation")})):(document.querySelectorAll(".parallax>use").forEach(t=>{t.classList.add("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(t=>{t.classList.add("stop-animation")}))},{root:null,threshold:.2}).observe(document.getElementById("waves")),new IntersectionObserver(([e])=>{e.isIntersecting?document.querySelectorAll(".with-love>i").forEach(t=>{t.classList.remove("stop-animation")}):document.querySelectorAll(".with-love>i").forEach(t=>{t.classList.add("stop-animation")})},{root:null,threshold:.2}).observe(document.querySelector(".with-love"))}m(),m();var Ge=()=>{if(!document.querySelector(".index.wrap"))return;let e=new IntersectionObserver(t=>{t.forEach(s=>{s.target.hasClass("show")?e.unobserve(s.target):(s.isIntersecting||s.intersectionRatio>0)&&(s.target.addClass("show"),e.unobserve(s.target))})},{root:null,threshold:[.3]});f.each(".index.wrap article.item, .index.wrap section.item",t=>{e.observe(t)}),document.querySelector(".index.wrap .item:first-child").addClass("show"),f.each(".cards .item",t=>{["mouseenter","touchstart"].forEach(s=>{t.addEventListener(s,()=>{let o=document.querySelector(".cards .item.active");o&&o.removeClass("active"),t.addClass("active")},{passive:!0})}),["mouseleave"].forEach(s=>{t.addEventListener(s,()=>{t.removeClass("active")},{passive:!0})})})};m(),m();var v=e=>{let t=document.querySelector(".theme .ic");e==="dark"?(Y.setAttribute("data-theme",e),t.removeClass("i-sun"),t.addClass("i-moon")):(Y.removeAttribute("data-theme"),t.removeClass("i-moon"),t.addClass("i-sun"))},Qe=()=>{h.auto_dark.enable&&(new Date().getHours()>=h.auto_dark.start||new Date().getHours()<=h.auto_dark.end?v("dark"):v())},te=e=>{Y.getAttribute("data-theme")==="dark"&&(e="#222"),document.querySelector('meta[name="theme-color"]').setAttribute("content",e)},Ve=()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?v("dark"):v()});let e=U.get("theme");e?v(e):h.darkmode&&v("dark")},Ze=document.getElementById("waves"),se=()=>{Le(q(y)),qe(q(V)),ke(Q+q(Ze)),Se!==window.innerWidth&&R(null,1),xe(window.innerHeight),Te(window.innerWidth)},et=()=>{let e=window.innerHeight,t=document.querySelector("main > .inner").offsetHeight,s=t>e?t-e:document.body.scrollHeight-e,o=window.scrollY>Q,n=window.scrollY>0;te(o?"#FFF":"#222"),y.toggleClass("show",o),b.toggleClass("affix",n),$e.toggleClass("affix",n),d.toggleClass("affix",window.scrollY>Ce&&document.body.offsetWidth>991),typeof k.y>"u"&&(k.y=window.scrollY),Re(k.y-window.scrollY),$<0?(y.removeClass("up"),y.toggleClass("down",o)):$>0&&(y.removeClass("down"),y.toggleClass("up",o)),k.y=window.scrollY;let r=Math.round(Math.min(100*window.scrollY/s,100))+"%";B.querySelector("span").innerText!==r&&(B.querySelector("span").innerText=r),(document.getElementById("sidebar").hasClass("affix")||document.getElementById("sidebar").hasClass("on"))&&ze(document.querySelector(".percent"),r)};m(),m(),m();var tt=32,st="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",oe=typeof window>"u",ot=!oe&&"loading"in HTMLImageElement.prototype,at=!oe&&(!("onscroll"in window)||/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent));function nt(e,t=document){return typeof e=="string"?[...t.querySelectorAll(e)]:e instanceof Element?[e]:[...e]}function rt(e,t){let s;return function(...o){s&&clearTimeout(s),s=setTimeout(()=>{s=void 0,e(...o)},t)}}var it=Math.PI,xt=it*2;function lt(e='img[loading="lazy"]',{hash:t=!0,hashType:s="blurhash",placeholderSize:o=tt,updateSizesOnResize:n=!1,onImageLoad:r}={}){let i=new Set;for(let a of nt(e)){let l=F(a,{updateOnResize:n});if(n&&l&&i.add(l),!a.dataset.src&&!a.dataset.srcset)continue;if(at||!ot){ne(a),I(a),M(a);continue}if(a.src||(a.src=st),a.complete&&a.naturalWidth>0){ae(a,r);continue}let c=()=>ae(a,r);a.addEventListener("load",c,{once:!0}),i.add(()=>a.removeEventListener("load",c))}return()=>{for(let a of i)a();i.clear()}}function ae(e,t){if(e.parentElement?.tagName.toLowerCase()==="picture"){ne(e),I(e),M(e),t?.(e);return}let s=new Image,{srcset:o,src:n,sizes:r}=e.dataset;if(r==="auto"){let i=re(e);i&&(s.sizes=`${i}px`)}else e.sizes&&(s.sizes=e.sizes);o&&(s.srcset=o),n&&(s.src=n),s.addEventListener("load",()=>{I(e),M(e),t?.(e)},{once:!0})}var H=new WeakMap;function F(e,t){if(e.dataset.sizes!=="auto")return;let s=re(e);if(s&&(e.sizes=`${s}px`),e.parentElement?.tagName.toLowerCase()==="picture"&&!t?.skipChildren&&[...e.parentElement.getElementsByTagName("source")].forEach(o=>F(o,{skipChildren:!0})),t?.updateOnResize){if(!H.has(e)){let o=rt(()=>F(e),500),n=new ResizeObserver(o);H.set(e,n),n.observe(e)}return()=>{let o=H.get(e);o&&(o.disconnect(),H.delete(e))}}}function M(e){e.dataset.src&&(e.src=e.dataset.src,e.removeAttribute("data-src"))}function I(e){e.dataset.srcset&&(e.srcset=e.dataset.srcset,e.removeAttribute("data-srcset"))}function ne(e){let t=e.parentElement;t?.tagName.toLowerCase()==="picture"&&([...t.querySelectorAll("source[data-srcset]")].forEach(I),[...t.querySelectorAll("source[data-src]")].forEach(M))}function re(e){return e instanceof HTMLSourceElement?e.parentElement?.getElementsByTagName("img")[0]?.offsetWidth:e.offsetWidth}var ct=()=>{_(),d.hasClass("on")&&w(d,0,()=>{d.removeClass("on"),T.removeClass("close")});let e=document.getElementById("main");e.innerHTML="",e.appendChild(x.lastChild.cloneNode(!0)),E(0)},ie=e=>{He(0),Me(window.location.href),K("katex"),ge("copy_tex"),K("mermaid");let t=new IntersectionObserver(function(o,n){o.forEach(r=>{if(r.isIntersecting){let i=r.target;i.style.backgroundImage=`url("${i.getAttribute("data-background-image")}")`,i.removeAttribute("data-background-image"),n.unobserve(i)}})},{root:null,threshold:.2});document.querySelectorAll("[data-background-image]").forEach(o=>{t.observe(o)}),e!==1&&f.each("script[data-pjax]",ye),Ne(document.title),se(),_e(),We(),Ye(),import("./post-3AJO7KUN.js").then(({postBeauty:o})=>{o()});let s=document.getElementById("copyright");if(s){let o=new IntersectionObserver(n=>{n.forEach(r=>{r.isIntersecting&&(import("./comments-37PWAX5U.js").then(({walinePageview:i,walineComment:a})=>{i(),a()}),o.disconnect())})},{root:null,threshold:.2});o.observe(s)}lt(),import("./comments-37PWAX5U.js").then(async({walinePageview:o,walineRecentComments:n})=>{await n()}),fe(),j.player.load(LOCAL.audio||h.audio||{}),S.hide(500),setTimeout(()=>{me()},500),Ge()};m();function g(e,t,s){return e instanceof HTMLCollection||e instanceof NodeList||e instanceof Array?Array.prototype.forEach.call(e,t,s):t.call(s,e,0,[e])}var le=(e,t)=>{e=typeof e=="string"?e.split(" "):e,e.forEach(t)};function J(e,t,s,o){le(t,n=>{g(e,r=>{r.addEventListener(n,s,o)})})}function C(e,t,s={}){le(t,o=>{let n=new CustomEvent(o,{bubbles:!0,cancelable:!0,...s});g(e,r=>{r.dispatchEvent(n)})})}function ce(e){let t=e.text||e.textContent||e.innerHTML||"",s=e.src||"",o=e.parentNode||document.querySelector("head")||document.documentElement,n=document.createElement("script");return t.match("document.write")?!1:(n.type="text/javascript",n.id=e.id,s!==""&&(n.src=s,n.async=!1),t!==""&&n.appendChild(document.createTextNode(t)),o.appendChild(n),(o instanceof HTMLHeadElement||o instanceof HTMLBodyElement)&&o.contains(n)&&o.removeChild(n),!0)}function dt(e){e.tagName.toLowerCase()==="script"&&ce(e),g(e.querySelectorAll("script"),t=>{let s=t;(!s.type||s.type.toLowerCase()==="text/javascript")&&(s.parentNode&&s.parentNode.removeChild(s),ce(s))})}function ut(e,t,s,o=document){e.forEach(n=>{g(o.querySelectorAll(n),t,s)})}var N=(()=>{let e=0;return()=>`pjax${new Date().getTime()}_${e++}`})();function de(e,t){e.outerHTML=t.outerHTML,this.onSwitch()}function ht(e,t){e.innerHTML=t.innerHTML,t.className===""?e.removeAttribute("class"):e.className=t.className,this.onSwitch()}function ue(e,t){if(e.innerHTML=t.innerHTML,t.hasAttributes()){let s=t.attributes;for(let o=0;o<s.length;o++)e.attributes.setNamedItem(s[o].cloneNode())}this.onSwitch()}function mt({elements:e="a[href]",selectors:t=["title",".js-Pjax"],switches:s={},switchesOptions:o={},history:n=!0,scrollTo:r=0,scrollRestoration:i=!0,cacheBust:a=!0,timeout:l=0,currentUrlFullReload:c=!1}={}){let u={elements:e,selectors:t,switches:s,switchesOptions:o,history:n,scrollTo:r,scrollRestoration:i,cacheBust:a,timeout:l,currentUrlFullReload:c};return u.switches.head||(u.switches.head=ue),u.switches.body||(u.switches.body=ue),u}var O="data-pjax-state";function he(e,t){if(t.defaultPrevented||t.returnValue===!1)return;let s={...this.options},o=pt(e,t);if(o){e.setAttribute(O,o);return}if(t.preventDefault(),this.options.currentUrlFullReload&&e.href===window.location.href.split("#")[0]){e.setAttribute(O,"reload"),this.reload();return}e.setAttribute(O,"load"),s.triggerElement=e,this.loadUrl(e.href,s)}function pt(e,t){return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?"modifier":e.protocol!==window.location.protocol||e.host!==window.location.host?"external":e.hash&&e.href.replace(e.hash,"")===window.location.href.replace(location.hash,"")?"anchor":e.href===window.location.href.split("#")[0]+"#"?"anchor-empty":null}function ft(e){e.setAttribute(O,""),J(e,"click",t=>he.call(this,e,t)),J(e,"keyup",t=>{let s=t;s.keyCode===13&&he.call(this,e,s)})}function vt(e,t,s,o){if(o={...o||this.options},o.request=t,e===!1){C(document,"pjax:complete pjax:error",o);return}let n=window.history.state||{};window.history.replaceState({url:n.url||window.location.href,title:n.title||document.title,uid:n.uid||N(),scrollPos:[document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop]},document.title,window.location.href);let r=s;t.responseURL?s!==t.responseURL&&(s=t.responseURL):t.getResponseHeader("X-PJAX-URL")?s=t.getResponseHeader("X-PJAX-URL"):t.getResponseHeader("X-XHR-Redirected-To")&&(s=t.getResponseHeader("X-XHR-Redirected-To"));let i=document.createElement("a");i.href=r;let a=i.hash;i.href=s,a&&!i.hash&&(i.hash=a,s=i.href),this.state.href=s,this.state.options=o;try{this.loadContent(e,o)}catch(l){return C(document,"pjax:error",o),console.error("Pjax switch fail: ",l),this.latestChance(s)}}function wt(e){switch(e.tagName.toLowerCase()){case"a":e.hasAttribute("data-pjax-state")||this.attachLink(e);break;default:throw new Error("theme-shokax-pjax can only be applied on <a>")}}function yt(e,t,s){let o=new RegExp("([?&])"+t+"=.*?(&|$)","i"),n=e.indexOf("?")!==-1?"&":"?";return e.match(o)?e.replace(o,"$1"+t+"="+s+"$2"):e+n+t+"="+s}function gt(e,t={},s){let o=t.requestOptions||{},n=(o.requestMethod||"GET").toUpperCase(),r=o.requestParams||null,i=null,a=new XMLHttpRequest,l=t.timeout;if(a.onreadystatechange=()=>{a.readyState===4&&(a.status===200?s(a.responseText,a,e,t):a.status!==0&&s(null,a,e,t))},a.onerror=c=>{console.error(c),s(null,a,e,t)},a.ontimeout=()=>{s(null,a,e,t)},r&&r.length){let c=r.map(u=>u.name+"="+u.value).join("&");switch(n){case"GET":e=e.split("?")[0],e+="?"+c;break;case"POST":i=c;break}}return t.cacheBust&&(e=yt(e,"t",Date.now())),a.open(n,e,!0),a.timeout=l,a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.setRequestHeader("X-PJAX","true"),a.setRequestHeader("X-PJAX-Selectors",JSON.stringify(t.selectors)),a.send(i),a}function Et(e,t,s,o,n,r){let i=[];s.forEach(a=>{let l=o.querySelectorAll(a),c=n.querySelectorAll(a);if(l.length!==c.length)throw new Error(`DOM doesn't look the same on new loaded page: '${a}' - new ${l.length}, old ${c.length}`);g(l,(u,L)=>{let p=c[L],P=e[a]?e[a].bind(this,p,u,r,t[a]):de.bind(this,p,u,r);i.push(P)},this)},this),this.state.numPendingSwitches=i.length,i.forEach(a=>{a()})}function bt(e,t,s){for(let o of t){let n=e.querySelectorAll(o);for(let r=0;r<n.length;r++)if(n[r].contains(s))return!0}return!1}var A=class{constructor(e){this.state={numPendingSwitches:0,href:null,options:null},this.options=mt(e),this.options.scrollRestoration&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.maxUid=this.lastUid=N(),this.parseDOM(document),J(window,"popstate",t=>{let s=t;if(s.state){let o={...this.options};o.url=s.state.url,o.title=s.state.title,o.history=!1,o.scrollPos=s.state.scrollPos,s.state.uid<this.lastUid?o.backward=!0:o.forward=!0,this.lastUid=s.state.uid,this.loadUrl(s.state.url,o)}})}getElements(e){return e.querySelectorAll(this.options.elements)}parseDOM(e){g(this.getElements(e),wt,this)}refresh(e){this.parseDOM(e||document)}reload(){window.location.reload()}forEachSelectors(e,t,s){return ut.bind(this)(this.options.selectors,e,t,s)}switchSelectors(e,t,s,o){return Et.bind(this)(this.options.switches,this.options.switchesOptions,e,t,s,o)}latestChance(e){window.location=e}onSwitch(){C(window,"resize scroll"),this.state.numPendingSwitches--,this.state.numPendingSwitches===0&&this.afterAllSwitches()}loadContent(e,t){if(typeof e!="string"){C(document,"pjax:complete pjax:error",t);return}let s=document.implementation.createHTMLDocument("pjax"),o=/<html[^>]+>/gi,n=/\s?[a-z:]+(?:=['"][^'">]+['"])*/gi,r=e.match(o);if(r&&r.length&&(r=r[0].match(n),r.length&&(r.shift(),r.forEach(i=>{let a=i.trim().split("=");a.length===1?s.documentElement.setAttribute(a[0],"true"):s.documentElement.setAttribute(a[0],a[1].slice(1,-1))}))),s.documentElement.innerHTML=e,document.activeElement&&bt(document,this.options.selectors,document.activeElement))try{document.activeElement.blur()}catch{}this.switchSelectors(this.options.selectors,s,document,t)}loadUrl(e,t){t=typeof t=="object"?{...this.options,...t}:{...this.options},this.abortRequest(this.request),C(document,"pjax:send",t),this.request=this.doRequest(e,t,this.handleResponse.bind(this))}afterAllSwitches(){var e,t,s;this.options.selectors.forEach(n=>{g(document.querySelectorAll(n),r=>{dt(r)})});let o=this.state;if(!((e=o.options)===null||e===void 0)&&e.history&&(window.history.state||(this.lastUid=this.maxUid=N(),window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid,scrollPos:[0,0]},document.title)),this.lastUid=this.maxUid=N(),window.history.pushState({url:o.href,title:o.options.title,uid:this.maxUid,scrollPos:[0,0]},o.options.title,o.href)),this.forEachSelectors(n=>{this.parseDOM(n)},this),C(document,"pjax:complete pjax:success",o.options),!((t=o.options)===null||t===void 0)&&t.history){let n=document.createElement("a");if(n.href=this.state.href,n.hash){let r=n.hash.slice(1);r=decodeURIComponent(r);let i=0,a=document.getElementById(r)||document.getElementsByName(r)[0];if(a&&a.offsetParent)do i+=a.offsetTop,a=a.offsetParent;while(a);window.scrollTo(0,i)}else o.options.scrollTo!==!1&&(Array.isArray(o.options.scrollTo)?window.scrollTo(o.options.scrollTo[0],o.options.scrollTo[1]):window.scrollTo(0,o.options.scrollTo))}else!((s=o.options)===null||s===void 0)&&s.scrollRestoration&&o.options.scrollPos&&window.scrollTo(o.options.scrollPos[0],o.options.scrollPos[1]);this.state={numPendingSwitches:0,href:null,options:null}}abortRequest(e){e&&e.readyState<4&&(e.onreadystatechange=()=>{},e.abort())}};A.prototype.attachLink=ft,A.prototype.doRequest=gt,A.prototype.handleResponse=vt,A.switches={innerHTML:ht,outerHTML:de},m();function Ct(){function e(){let t,s=document.querySelector(".theme").querySelector(".ic"),o=X(W,"div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'}),n=()=>{w(o,{delay:2500,opacity:0},()=>{W.removeChild(o)})};s.hasClass("i-sun")?t=()=>{o.addClass("dark"),v("dark"),U.set("theme","dark"),n()}:(o.addClass("dark"),t=()=>{o.removeClass("dark"),v(),U.set("theme","light"),n()}),w(o,1,()=>{setTimeout(t,210)},()=>{D(o,"block")})}document.getElementById("rightNav").querySelector(".theme .ic").addEventListener("click",e)}var St=()=>{Ct(),Ke(),Ie(new A({selectors:["head title",".languages",".twikoo",".pjax",".leancloud-recent-comment","script[data-config]"],cacheBust:!1})),h.quicklink.ignores=LOCAL.ignores,import("./quicklink-ERLYKOUM.js").then(({listen:e})=>{e(h.quicklink)}),Qe(),Ve(),document.querySelector("li.item.search > i").addEventListener("click",()=>{h.search!==null&&(G||Be(X(W,"div",{id:"search",innerHTML:'<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'})),import("./search-XA4RMEVO.js").then(({algoliaSearch:e})=>{e(Ae)}),f.each(".search",e=>{e.addEventListener("click",()=>{document.body.style.overflow="hidden",w(G,"shrinkIn",()=>{document.querySelector(".search-input").focus()})})}))},{once:!0,capture:!0}),window.addEventListener("scroll",et,{passive:!0}),window.addEventListener("resize",se,{passive:!0}),window.addEventListener("pjax:send",ct,{passive:!0}),window.addEventListener("pjax:success",ie,{passive:!0}),window.addEventListener("beforeunload",()=>{_()}),ie(1)};we(),window.addEventListener("DOMContentLoaded",St,{passive:!0}),console.log("%c Theme.ShokaX v"+h.version+" %c https://github.com/theme-shoka-x/hexo-theme-shokaX ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");/*! For license information please see siteInit.js.LEGAL.txt */
