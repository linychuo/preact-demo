!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/preact-pixel/",t(t.s="pwNi")}({"0c/n":function(e){e.exports={canvas_main:"canvas_main__D1frr"}},JkW7:function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a,u=n("KM04"),p=function(e){function t(){var t=o(this,e.call(this));return t.handleClick=t.handleClick.bind(t),t}return r(t,e),t.prototype.handleClick=function(){this.props.handle(this.props.color)},t.prototype.render=function(e){var t=e.color,n=e.size,o={"background-color":"rgb("+t+")",width:n,height:n,display:"inline-block"};return Object(u.h)("div",{style:o,onClick:this.handleClick})},t}(u.Component),s=n("0c/n"),f=n.n(s),_=function(e){function t(){i(this,t);var n=l(this,e.call(this));return n.onPixelClick=n.onPixelClick.bind(n),n}return c(t,e),t.prototype.getRandomColor=function(){return this.getRandom()+", "+this.getRandom()+", "+this.getRandom()},t.prototype.getRandom=function(){return Math.floor(256*Math.random())},t.prototype.onPixelClick=function(e){var t=this.getRandomColor(),n=this.props.colors;for(var o in n)n[o]===e&&(n[o]=t);this.setState({colors:n})},t.prototype.render=function(e){var t=this,n=e.pixelData,o=e.colors,r=e.pixelSize,i=e._background,l={background:i},c={height:r};return Object(u.h)("div",{style:l,class:f.a.canvas_main},n.map(function(e){return Object(u.h)("div",{style:c},e.map(function(e){return Object(u.h)(p,{color:o[e],size:r,handle:t.onPixelClick})}))}))},t}(u.Component),d="C",h="B",v="S",m="O",b="W",y="_",g=[[y,y,y,y,y,y,y,y,y,y,y,y,y,y],[y,y,y,y,d,d,d,d,d,y,y,y,y,y],[y,y,y,d,d,d,d,d,d,d,d,d,y,y],[y,y,y,h,h,h,v,v,h,v,y,y,y,y],[y,y,h,v,h,v,v,v,h,v,v,v,y,y],[y,y,h,v,h,h,v,v,v,h,v,v,h,y],[y,y,h,h,v,v,v,v,h,h,h,h,y,y],[y,y,y,y,v,v,v,v,v,v,v,y,y,y],[y,y,y,d,d,m,d,d,m,d,y,y,y,y],[y,y,d,d,d,m,d,d,m,d,d,d,y,y],[y,d,d,d,d,m,m,m,m,d,d,d,d,y],[y,b,b,d,m,"Y",m,m,"Y",m,d,b,b,y],[y,b,b,b,m,m,m,m,m,m,b,b,b,y],[y,b,b,m,m,m,m,m,m,m,m,b,b,y],[y,y,y,m,m,m,y,y,m,m,m,y,y,y],[y,y,h,h,h,y,y,y,y,h,h,h,y,y],[y,h,h,h,h,y,y,y,y,h,h,h,h,y]],x=(a={},a[d]="255, 0, 0",a[h]="100, 50, 0",a[v]="255, 200, 150",a[m]="0, 0, 255",a.Y="255, 255, 0",a[b]="255, 255, 255",a[y]="229, 230, 232",a);Object(u.render)(Object(u.h)(_,{pixelData:g,colors:x,pixelSize:"20px",background:"white"}),document.body)},KM04:function(e){!function(){"use strict";function t(e,t){var n,o,r,i,l=U;for(i=arguments.length;i-- >2;)M.push(arguments[i]);for(t&&null!=t.children&&(M.length||M.push(t.children),delete t.children);M.length;)if((o=M.pop())&&void 0!==o.pop)for(i=o.length;i--;)M.push(o[i]);else"boolean"==typeof o&&(o=null),(r="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o+="":"string"!=typeof o&&(r=!1)),r&&n?l[l.length-1]+=o:l===U?l=[o]:l.push(o),n=r;var c=new j;return c.nodeName=e,c.children=l,c.attributes=null==t?void 0:t,c.key=null==t?void 0:t.key,void 0!==P.vnode&&P.vnode(c),c}function n(e,t){for(var n in t)e[n]=t[n];return e}function o(e,o){return t(e.nodeName,n(n({},e.attributes),o),arguments.length>2?[].slice.call(arguments,2):e.children)}function r(e){!e.__d&&(e.__d=!0)&&1==E.push(e)&&(P.debounceRendering||T)(i)}function i(){var e,t=E;for(E=[];e=t.pop();)e.__d&&w(e)}function l(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&c(e,t.nodeName):n||e._componentConstructor===t.nodeName}function c(e,t){return e.__n===t||e.nodeName.toLowerCase()===t.toLowerCase()}function a(e){var t=n({},e.attributes);t.children=e.children;var o=e.nodeName.defaultProps;if(void 0!==o)for(var r in o)void 0===t[r]&&(t[r]=o[r]);return t}function u(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.__n=e,n}function p(e){var t=e.parentNode;t&&t.removeChild(e)}function s(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var i in n)i in o||(e.style[i]="");for(var i in o)e.style[i]="number"==typeof o[i]&&!1===W.test(i)?o[i]+"px":o[i]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var l=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,f,l):e.removeEventListener(t,f,l),(e.__l||(e.__l={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e){try{e[t]=null==o?"":o}catch(e){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var c=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?c?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(c?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function f(e){return this.__l[e.type](P.event&&P.event(e)||e)}function _(){for(var e;e=L.pop();)P.afterMount&&P.afterMount(e),e.componentDidMount&&e.componentDidMount()}function d(e,t,n,o,r,i){R++||(D=null!=r&&void 0!==r.ownerSVGElement,V=null!=e&&!("__preactattr_"in e));var l=h(e,t,n,o,i);return r&&l.parentNode!==r&&r.appendChild(l),--R||(V=!1,i||_()),l}function h(e,t,n,o,r){var i=e,l=D;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),m(e,!0))),i.__preactattr_=!0,i;var a=t.nodeName;if("function"==typeof a)return k(e,t,n,o);if(D="svg"===a||"foreignObject"!==a&&D,a+="",(!e||!c(e,a))&&(i=u(a,D),e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),m(e,!0)}var p=i.firstChild,s=i.__preactattr_,f=t.children;if(null==s){s=i.__preactattr_={};for(var _=i.attributes,d=_.length;d--;)s[_[d].name]=_[d].value}return!V&&f&&1===f.length&&"string"==typeof f[0]&&null!=p&&void 0!==p.splitText&&null==p.nextSibling?p.nodeValue!=f[0]&&(p.nodeValue=f[0]):(f&&f.length||null!=p)&&v(i,f,n,o,V||null!=s.dangerouslySetInnerHTML),y(i,t.attributes,s),D=l,i}function v(e,t,n,o,r){var i,c,a,u,s,f=e.childNodes,_=[],d={},v=0,b=0,y=f.length,g=0,x=t?t.length:0;if(0!==y)for(var C=0;C<y;C++){var w=f[C],k=w.__preactattr_,N=x&&k?w._component?w._component.__k:k.key:null;null!=N?(v++,d[N]=w):(k||(void 0!==w.splitText?!r||w.nodeValue.trim():r))&&(_[g++]=w)}if(0!==x)for(var C=0;C<x;C++){u=t[C],s=null;var N=u.key;if(null!=N)v&&void 0!==d[N]&&(s=d[N],d[N]=void 0,v--);else if(b<g)for(i=b;i<g;i++)if(void 0!==_[i]&&l(c=_[i],u,r)){s=c,_[i]=void 0,i===g-1&&g--,i===b&&b++;break}s=h(s,u,n,o),a=f[C],s&&s!==e&&s!==a&&(null==a?e.appendChild(s):s===a.nextSibling?p(a):e.insertBefore(s,a))}if(v)for(var C in d)void 0!==d[C]&&m(d[C],!1);for(;b<=g;)void 0!==(s=_[g--])&&m(s,!1)}function m(e,t){var n=e._component;n?N(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||p(e),b(e))}function b(e){for(e=e.lastChild;e;){var t=e.previousSibling;m(e,!0),e=t}}function y(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||s(e,o,n[o],n[o]=void 0,D);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||s(e,o,n[o],n[o]=t[o],D)}function g(e,t,n){var o,r=z.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),O.call(o,t,n)):(o=new O(t,n),o.constructor=e,o.render=x);r--;)if(z[r].constructor===e)return o.__b=z[r].__b,z.splice(r,1),o;return o}function x(e,t,n){return this.constructor(e,n)}function C(e,t,n,o,i){e.__x||(e.__x=!0,e.__r=t.ref,e.__k=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o)),o&&o!==e.context&&(e.__c||(e.__c=e.context),e.context=o),e.__p||(e.__p=e.props),e.props=t,e.__x=!1,0!==n&&(1!==n&&!1===P.syncComponentUpdates&&e.base?r(e):w(e,1,i)),e.__r&&e.__r(e))}function w(e,t,o,r){if(!e.__x){var i,l,c,u=e.props,p=e.state,s=e.context,f=e.__p||u,h=e.__s||p,v=e.__c||s,b=e.base,y=e.__b,x=b||y,k=e._component,O=!1,S=v;if(e.constructor.getDerivedStateFromProps&&(p=n(n({},p),e.constructor.getDerivedStateFromProps(u,p)),e.state=p),b&&(e.props=f,e.state=h,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(u,p,s)?O=!0:e.componentWillUpdate&&e.componentWillUpdate(u,p,s),e.props=u,e.state=p,e.context=s),e.__p=e.__s=e.__c=e.__b=null,e.__d=!1,!O){i=e.render(u,p,s),e.getChildContext&&(s=n(n({},s),e.getChildContext())),b&&e.getSnapshotBeforeUpdate&&(S=e.getSnapshotBeforeUpdate(f,h));var j,M,U=i&&i.nodeName;if("function"==typeof U){var T=a(i);l=k,l&&l.constructor===U&&T.key==l.__k?C(l,T,1,s,!1):(j=l,e._component=l=g(U,T,s),l.__b=l.__b||y,l.__u=e,C(l,T,0,s,!1),w(l,1,o,!0)),M=l.base}else c=x,j=k,j&&(c=e._component=null),(x||1===t)&&(c&&(c._component=null),M=d(c,i,s,o||!b,x&&x.parentNode,!0));if(x&&M!==x&&l!==k){var W=x.parentNode;W&&M!==W&&(W.replaceChild(M,x),j||(x._component=null,m(x,!1)))}if(j&&N(j),e.base=M,M&&!r){for(var E=e,D=e;D=D.__u;)(E=D).base=M;M._component=E,M._componentConstructor=E.constructor}}for(!b||o?L.unshift(e):O||(e.componentDidUpdate&&e.componentDidUpdate(f,h,S),P.afterUpdate&&P.afterUpdate(e));e.__h.length;)e.__h.pop().call(e);R||r||_()}}function k(e,t,n,o){for(var r=e&&e._component,i=r,l=e,c=r&&e._componentConstructor===t.nodeName,u=c,p=a(t);r&&!u&&(r=r.__u);)u=r.constructor===t.nodeName;return r&&u&&(!o||r._component)?(C(r,p,3,n,o),e=r.base):(i&&!c&&(N(i),e=l=null),r=g(t.nodeName,p,n),e&&!r.__b&&(r.__b=e,l=null),C(r,p,1,n,o),e=r.base,l&&e!==l&&(l._component=null,m(l,!1))),e}function N(e){P.beforeUnmount&&P.beforeUnmount(e);var t=e.base;e.__x=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?N(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.__b=t,p(t),z.push(e),b(t)),e.__r&&e.__r(null)}function O(e,t){this.__d=!0,this.context=t,this.props=e,this.state=this.state||{},this.__h=[]}function S(e,t,n){return d(n,e,{},!1,t,!1)}var j=function(){},P={},M=[],U=[],T="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,W=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,E=[],L=[],R=0,D=!1,V=!1,z=[];n(O.prototype,{setState:function(e,t){this.__s||(this.__s=this.state),this.state=n(n({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this.__h.push(t),r(this)},forceUpdate:function(e){e&&this.__h.push(e),w(this,2)},render:function(){}});var A={h:t,createElement:t,cloneElement:o,Component:O,render:S,rerender:i,options:P};e.exports=A}()},pwNi:function(e,t,n){"use strict";var o=n("KM04");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register(n.p+"sw.js");var r=function(e){return e&&e.default?e.default:e};if("function"==typeof r(n("JkW7"))){var i=document.body.firstElementChild,l=function(){var e=r(n("JkW7"));i=(0,o.render)((0,o.h)(e),document.body,i)};l()}}});
//# sourceMappingURL=bundle.55e22.js.map