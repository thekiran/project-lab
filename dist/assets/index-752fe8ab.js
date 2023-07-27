import{g as N,t as A,r as V,j as g}from"./index-4f7196ad.js";var re={exports:{}},se="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ce=se,ue=ce;function ne(){}function oe(){}oe.resetWarningCache=ne;var le=function(){function e(t,o,i,s,a,c){if(c!==ue){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}e.isRequired=e;function r(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:oe,resetWarningCache:ne};return n.PropTypes=n,n};re.exports=le();var fe=re.exports;const f=N(fe);var pe=typeof Element<"u",de=typeof Map=="function",he=typeof Set=="function",me=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function L(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var n,t,o;if(Array.isArray(e)){if(n=e.length,n!=r.length)return!1;for(t=n;t--!==0;)if(!L(e[t],r[t]))return!1;return!0}var i;if(de&&e instanceof Map&&r instanceof Map){if(e.size!==r.size)return!1;for(i=e.entries();!(t=i.next()).done;)if(!r.has(t.value[0]))return!1;for(i=e.entries();!(t=i.next()).done;)if(!L(t.value[1],r.get(t.value[0])))return!1;return!0}if(he&&e instanceof Set&&r instanceof Set){if(e.size!==r.size)return!1;for(i=e.entries();!(t=i.next()).done;)if(!r.has(t.value[0]))return!1;return!0}if(me&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(r)){if(n=e.length,n!=r.length)return!1;for(t=n;t--!==0;)if(e[t]!==r[t])return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof r.valueOf=="function")return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof r.toString=="function")return e.toString()===r.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(r).length)return!1;for(t=n;t--!==0;)if(!Object.prototype.hasOwnProperty.call(r,o[t]))return!1;if(pe&&e instanceof Element)return!1;for(t=n;t--!==0;)if(!((o[t]==="_owner"||o[t]==="__v"||o[t]==="__o")&&e.$$typeof)&&!L(e[o[t]],r[o[t]]))return!1;return!0}return e!==e&&r!==r}var ye=function(r,n){try{return L(r,n)}catch(t){if((t.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw t}};const Te=N(ye);var ge=function(e,r,n,t,o,i,s,a){if(!e){var c;if(r===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,t,o,i,s,a],h=0;c=new Error(r.replace(/%s/g,function(){return l[h++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},ve=ge;const $=N(ve);var be=function(r,n,t,o){var i=t?t.call(o,r,n):void 0;if(i!==void 0)return!!i;if(r===n)return!0;if(typeof r!="object"||!r||typeof n!="object"||!n)return!1;var s=Object.keys(r),a=Object.keys(n);if(s.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(n),l=0;l<s.length;l++){var h=s[l];if(!c(h))return!1;var d=r[h],p=n[h];if(i=t?t.call(o,d,p,h):void 0,i===!1||i===void 0&&d!==p)return!1}return!0};const Oe=N(be);function m(){return m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},m.apply(this,arguments)}function G(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,B(e,r)}function B(e,r){return B=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n},B(e,r)}function J(e,r){if(e==null)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r.indexOf(n=i[t])>=0||(o[n]=e[n]);return o}var u={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},Ae={rel:["amphtml","canonical","alternate"]},Ce={type:["application/ld+json"]},Se={charset:"",name:["robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]},Q=Object.keys(u).map(function(e){return u[e]}),k={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},we=Object.keys(k).reduce(function(e,r){return e[k[r]]=r,e},{}),x=function(e,r){for(var n=e.length-1;n>=0;n-=1){var t=e[n];if(Object.prototype.hasOwnProperty.call(t,r))return t[r]}return null},xe=function(e){var r=x(e,u.TITLE),n=x(e,"titleTemplate");if(Array.isArray(r)&&(r=r.join("")),n&&r)return n.replace(/%s/g,function(){return r});var t=x(e,"defaultTitle");return r||t||void 0},Ee=function(e){return x(e,"onChangeClientState")||function(){}},U=function(e,r){return r.filter(function(n){return n[e]!==void 0}).map(function(n){return n[e]}).reduce(function(n,t){return m({},n,t)},{})},je=function(e,r){return r.filter(function(n){return n[u.BASE]!==void 0}).map(function(n){return n[u.BASE]}).reverse().reduce(function(n,t){if(!n.length)for(var o=Object.keys(t),i=0;i<o.length;i+=1){var s=o[i].toLowerCase();if(e.indexOf(s)!==-1&&t[s])return n.concat(t)}return n},[])},j=function(e,r,n){var t={};return n.filter(function(o){return!!Array.isArray(o[e])||(o[e]!==void 0&&console&&typeof console.warn=="function"&&console.warn("Helmet: "+e+' should be of type "Array". Instead found type "'+typeof o[e]+'"'),!1)}).map(function(o){return o[e]}).reverse().reduce(function(o,i){var s={};i.filter(function(d){for(var p,v=Object.keys(d),T=0;T<v.length;T+=1){var y=v[T],O=y.toLowerCase();r.indexOf(O)===-1||p==="rel"&&d[p].toLowerCase()==="canonical"||O==="rel"&&d[O].toLowerCase()==="stylesheet"||(p=O),r.indexOf(y)===-1||y!=="innerHTML"&&y!=="cssText"&&y!=="itemprop"||(p=y)}if(!p||!d[p])return!1;var C=d[p].toLowerCase();return t[p]||(t[p]={}),s[p]||(s[p]={}),!t[p][C]&&(s[p][C]=!0,!0)}).reverse().forEach(function(d){return o.push(d)});for(var a=Object.keys(s),c=0;c<a.length;c+=1){var l=a[c],h=m({},t[l],s[l]);t[l]=h}return o},[]).reverse()},Pe=function(e,r){if(Array.isArray(e)&&e.length){for(var n=0;n<e.length;n+=1)if(e[n][r])return!0}return!1},ie=function(e){return Array.isArray(e)?e.join(""):e},Y=function(e,r){return Array.isArray(e)?e.reduce(function(n,t){return function(o,i){for(var s=Object.keys(o),a=0;a<s.length;a+=1)if(i[s[a]]&&i[s[a]].includes(o[s[a]]))return!0;return!1}(t,r)?n.priority.push(t):n.default.push(t),n},{priority:[],default:[]}):{default:e}},X=function(e,r){var n;return m({},e,((n={})[r]=void 0,n))},Ie=[u.NOSCRIPT,u.SCRIPT,u.STYLE],F=function(e,r){return r===void 0&&(r=!0),r===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Z=function(e){return Object.keys(e).reduce(function(r,n){var t=e[n]!==void 0?n+'="'+e[n]+'"':""+n;return r?r+" "+t:t},"")},ee=function(e,r){return r===void 0&&(r={}),Object.keys(e).reduce(function(n,t){return n[k[t]||t]=e[t],n},r)},M=function(e,r){return r.map(function(n,t){var o,i=((o={key:t})["data-rh"]=!0,o);return Object.keys(n).forEach(function(s){var a=k[s]||s;a==="innerHTML"||a==="cssText"?i.dangerouslySetInnerHTML={__html:n.innerHTML||n.cssText}:i[a]=n[s]}),A.createElement(e,i)})},b=function(e,r,n){switch(e){case u.TITLE:return{toComponent:function(){return o=r.titleAttributes,(i={key:t=r.title})["data-rh"]=!0,s=ee(o,i),[A.createElement(u.TITLE,s,t)];var t,o,i,s},toString:function(){return function(t,o,i,s){var a=Z(i),c=ie(o);return a?"<"+t+' data-rh="true" '+a+">"+F(c,s)+"</"+t+">":"<"+t+' data-rh="true">'+F(c,s)+"</"+t+">"}(e,r.title,r.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return ee(r)},toString:function(){return Z(r)}};default:return{toComponent:function(){return M(e,r)},toString:function(){return function(t,o,i){return o.reduce(function(s,a){var c=Object.keys(a).filter(function(d){return!(d==="innerHTML"||d==="cssText")}).reduce(function(d,p){var v=a[p]===void 0?p:p+'="'+F(a[p],i)+'"';return d?d+" "+v:v},""),l=a.innerHTML||a.cssText||"",h=Ie.indexOf(t)===-1;return s+"<"+t+' data-rh="true" '+c+(h?"/>":">"+l+"</"+t+">")},"")}(e,r,n)}}}},K=function(e){var r=e.baseTag,n=e.bodyAttributes,t=e.encode,o=e.htmlAttributes,i=e.noscriptTags,s=e.styleTags,a=e.title,c=a===void 0?"":a,l=e.titleAttributes,h=e.linkTags,d=e.metaTags,p=e.scriptTags,v={toComponent:function(){},toString:function(){return""}};if(e.prioritizeSeoTags){var T=function(y){var O=y.linkTags,C=y.scriptTags,E=y.encode,D=Y(y.metaTags,Se),_=Y(O,Ae),q=Y(C,Ce);return{priorityMethods:{toComponent:function(){return[].concat(M(u.META,D.priority),M(u.LINK,_.priority),M(u.SCRIPT,q.priority))},toString:function(){return b(u.META,D.priority,E)+" "+b(u.LINK,_.priority,E)+" "+b(u.SCRIPT,q.priority,E)}},metaTags:D.default,linkTags:_.default,scriptTags:q.default}}(e);v=T.priorityMethods,h=T.linkTags,d=T.metaTags,p=T.scriptTags}return{priority:v,base:b(u.BASE,r,t),bodyAttributes:b("bodyAttributes",n,t),htmlAttributes:b("htmlAttributes",o,t),link:b(u.LINK,h,t),meta:b(u.META,d,t),noscript:b(u.NOSCRIPT,i,t),script:b(u.SCRIPT,p,t),style:b(u.STYLE,s,t),title:b(u.TITLE,{title:c,titleAttributes:l},t)}},I=[],W=function(e,r){var n=this;r===void 0&&(r=typeof document<"u"),this.instances=[],this.value={setHelmet:function(t){n.context.helmet=t},helmetInstances:{get:function(){return n.canUseDOM?I:n.instances},add:function(t){(n.canUseDOM?I:n.instances).push(t)},remove:function(t){var o=(n.canUseDOM?I:n.instances).indexOf(t);(n.canUseDOM?I:n.instances).splice(o,1)}}},this.context=e,this.canUseDOM=r,r||(e.helmet=K({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))},ae=A.createContext({}),Le=f.shape({setHelmet:f.func,helmetInstances:f.shape({get:f.func,add:f.func,remove:f.func})}),Me=typeof document<"u",w=function(e){function r(n){var t;return(t=e.call(this,n)||this).helmetData=new W(t.props.context,r.canUseDOM),t}return G(r,e),r.prototype.render=function(){return A.createElement(ae.Provider,{value:this.helmetData.value},this.props.children)},r}(V.Component);w.canUseDOM=Me,w.propTypes={context:f.shape({helmet:f.shape()}),children:f.node.isRequired},w.defaultProps={context:{}},w.displayName="HelmetProvider";var S=function(e,r){var n,t=document.head||document.querySelector(u.HEAD),o=t.querySelectorAll(e+"[data-rh]"),i=[].slice.call(o),s=[];return r&&r.length&&r.forEach(function(a){var c=document.createElement(e);for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(l==="innerHTML"?c.innerHTML=a.innerHTML:l==="cssText"?c.styleSheet?c.styleSheet.cssText=a.cssText:c.appendChild(document.createTextNode(a.cssText)):c.setAttribute(l,a[l]===void 0?"":a[l]));c.setAttribute("data-rh","true"),i.some(function(h,d){return n=d,c.isEqualNode(h)})?i.splice(n,1):s.push(c)}),i.forEach(function(a){return a.parentNode.removeChild(a)}),s.forEach(function(a){return t.appendChild(a)}),{oldTags:i,newTags:s}},z=function(e,r){var n=document.getElementsByTagName(e)[0];if(n){for(var t=n.getAttribute("data-rh"),o=t?t.split(","):[],i=[].concat(o),s=Object.keys(r),a=0;a<s.length;a+=1){var c=s[a],l=r[c]||"";n.getAttribute(c)!==l&&n.setAttribute(c,l),o.indexOf(c)===-1&&o.push(c);var h=i.indexOf(c);h!==-1&&i.splice(h,1)}for(var d=i.length-1;d>=0;d-=1)n.removeAttribute(i[d]);o.length===i.length?n.removeAttribute("data-rh"):n.getAttribute("data-rh")!==s.join(",")&&n.setAttribute("data-rh",s.join(","))}},te=function(e,r){var n=e.baseTag,t=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,a=e.onChangeClientState,c=e.scriptTags,l=e.styleTags,h=e.title,d=e.titleAttributes;z(u.BODY,e.bodyAttributes),z(u.HTML,t),function(y,O){y!==void 0&&document.title!==y&&(document.title=ie(y)),z(u.TITLE,O)}(h,d);var p={baseTag:S(u.BASE,n),linkTags:S(u.LINK,o),metaTags:S(u.META,i),noscriptTags:S(u.NOSCRIPT,s),scriptTags:S(u.SCRIPT,c),styleTags:S(u.STYLE,l)},v={},T={};Object.keys(p).forEach(function(y){var O=p[y],C=O.newTags,E=O.oldTags;C.length&&(v[y]=C),E.length&&(T[y]=p[y].oldTags)}),r&&r(),a(e,v,T)},P=null,H=function(e){function r(){for(var t,o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))||this).rendered=!1,t}G(r,e);var n=r.prototype;return n.shouldComponentUpdate=function(t){return!Oe(t,this.props)},n.componentDidUpdate=function(){this.emitChange()},n.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},n.emitChange=function(){var t,o,i=this.props.context,s=i.setHelmet,a=null,c=(t=i.helmetInstances.get().map(function(l){var h=m({},l.props);return delete h.context,h}),{baseTag:je(["href"],t),bodyAttributes:U("bodyAttributes",t),defer:x(t,"defer"),encode:x(t,"encodeSpecialCharacters"),htmlAttributes:U("htmlAttributes",t),linkTags:j(u.LINK,["rel","href"],t),metaTags:j(u.META,["name","charset","http-equiv","property","itemprop"],t),noscriptTags:j(u.NOSCRIPT,["innerHTML"],t),onChangeClientState:Ee(t),scriptTags:j(u.SCRIPT,["src","innerHTML"],t),styleTags:j(u.STYLE,["cssText"],t),title:xe(t),titleAttributes:U("titleAttributes",t),prioritizeSeoTags:Pe(t,"prioritizeSeoTags")});w.canUseDOM?(o=c,P&&cancelAnimationFrame(P),o.defer?P=requestAnimationFrame(function(){te(o,function(){P=null})}):(te(o),P=null)):K&&(a=K(c)),s(a)},n.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},n.render=function(){return this.init(),null},r}(V.Component);H.propTypes={context:Le.isRequired},H.displayName="HelmetDispatcher";var Re=["children"],ke=["children"],R=function(e){function r(){return e.apply(this,arguments)||this}G(r,e);var n=r.prototype;return n.shouldComponentUpdate=function(t){return!Te(X(this.props,"helmetData"),X(t,"helmetData"))},n.mapNestedChildrenToProps=function(t,o){if(!o)return null;switch(t.type){case u.SCRIPT:case u.NOSCRIPT:return{innerHTML:o};case u.STYLE:return{cssText:o};default:throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},n.flattenArrayTypeChildren=function(t){var o,i=t.child,s=t.arrayTypeChildren;return m({},s,((o={})[i.type]=[].concat(s[i.type]||[],[m({},t.newChildProps,this.mapNestedChildrenToProps(i,t.nestedChildren))]),o))},n.mapObjectTypeChildren=function(t){var o,i,s=t.child,a=t.newProps,c=t.newChildProps,l=t.nestedChildren;switch(s.type){case u.TITLE:return m({},a,((o={})[s.type]=l,o.titleAttributes=m({},c),o));case u.BODY:return m({},a,{bodyAttributes:m({},c)});case u.HTML:return m({},a,{htmlAttributes:m({},c)});default:return m({},a,((i={})[s.type]=m({},c),i))}},n.mapArrayTypeChildrenToProps=function(t,o){var i=m({},o);return Object.keys(t).forEach(function(s){var a;i=m({},i,((a={})[s]=t[s],a))}),i},n.warnOnInvalidChildren=function(t,o){return $(Q.some(function(i){return t.type===i}),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+Q.join(", ")+" are allowed. Helmet does not support rendering <"+t.type+"> elements. Refer to our API for more information."),$(!o||typeof o=="string"||Array.isArray(o)&&!o.some(function(i){return typeof i!="string"}),"Helmet expects a string as a child of <"+t.type+">. Did you forget to wrap your children in braces? ( <"+t.type+">{``}</"+t.type+"> ) Refer to our API for more information."),!0},n.mapChildrenToProps=function(t,o){var i=this,s={};return A.Children.forEach(t,function(a){if(a&&a.props){var c=a.props,l=c.children,h=J(c,Re),d=Object.keys(h).reduce(function(v,T){return v[we[T]||T]=h[T],v},{}),p=a.type;switch(typeof p=="symbol"?p=p.toString():i.warnOnInvalidChildren(a,l),p){case u.FRAGMENT:o=i.mapChildrenToProps(l,o);break;case u.LINK:case u.META:case u.NOSCRIPT:case u.SCRIPT:case u.STYLE:s=i.flattenArrayTypeChildren({child:a,arrayTypeChildren:s,newChildProps:d,nestedChildren:l});break;default:o=i.mapObjectTypeChildren({child:a,newProps:o,newChildProps:d,nestedChildren:l})}}}),this.mapArrayTypeChildrenToProps(s,o)},n.render=function(){var t=this.props,o=t.children,i=J(t,ke),s=m({},i),a=i.helmetData;return o&&(s=this.mapChildrenToProps(o,s)),!a||a instanceof W||(a=new W(a.context,a.instances)),a?A.createElement(H,m({},s,{context:a.value,helmetData:void 0})):A.createElement(ae.Consumer,null,function(c){return A.createElement(H,m({},s,{context:c}))})},r}(V.Component);R.propTypes={base:f.object,bodyAttributes:f.object,children:f.oneOfType([f.arrayOf(f.node),f.node]),defaultTitle:f.string,defer:f.bool,encodeSpecialCharacters:f.bool,htmlAttributes:f.object,link:f.arrayOf(f.object),meta:f.arrayOf(f.object),noscript:f.arrayOf(f.object),onChangeClientState:f.func,script:f.arrayOf(f.object),style:f.arrayOf(f.object),title:f.string,titleAttributes:f.object,titleTemplate:f.string,prioritizeSeoTags:f.bool,helmetData:f.object},R.defaultProps={defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1},R.displayName="Helmet";const Ne=({pageTitle:e,pageURL:r,pageDesc:n})=>g.jsx(w,{children:g.jsxs(R,{children:[g.jsx("title",{children:e}),g.jsx("link",{rel:"canonical",href:r}),g.jsx("meta",{name:"description",content:n}),g.jsx("meta",{property:"og:title",content:e,tag:!0}),g.jsx("meta",{property:"og:url",content:r}),g.jsx("meta",{property:"og:description",content:n,desc:!0}),g.jsx("meta",{property:"og:type",content:"website"}),g.jsx("meta",{property:"og:image",content:"/assets/images/logo.svg"}),g.jsx("meta",{name:"twitter:card",content:"/assets/images/logo.svg"}),g.jsx("meta",{name:"twitter:image",content:"/assets/images/logo.svg"}),g.jsx("meta",{name:"twitter:site",content:"@"}),g.jsx("meta",{name:"twitter:title",content:e}),g.jsx("meta",{name:"twitter:description",content:n})]})});export{Ne as H};