
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*! peerjs build:0.3.13, development. Copyright(c) 2013 Michelle Bu <michelle@michellebu.com> */

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a) return a(o, !0);
                if (i) return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
})({
    1: [function(require, module, exports) {
        module.exports.RTCSessionDescription = window.RTCSessionDescription ||
            window.mozRTCSessionDescription;
        module.exports.RTCPeerConnection = window.RTCPeerConnection ||
            window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
        module.exports.RTCIceCandidate = window.RTCIceCandidate ||
            window.mozRTCIceCandidate;

    }, {}],
    2: [function(require, module, exports) {
        var util = require('./util');
        var EventEmitter = require('eventemitter3');
        var Negotiator = require('./negotiator');
        var Reliable = require('reliable');

        /**
         * Wraps a DataChannel between two Peers.
         */
        function DataConnection(peer, provider, options) {
            if (!(this instanceof DataConnection)) return new DataConnection(peer, provider, options);
            EventEmitter.call(this);

            this.options = util.extend({
                serialization: 'binary',
                reliable: false
            }, options);

            // Connection is not open yet.
            this.open = false;
            this.type = 'data';
            this.peer = peer;
            this.provider = provider;

            this.id = this.options.connectionId || DataConnection._idPrefix + util.randomToken();

            this.label = this.options.label || this.id;
            this.metadata = this.options.metadata;
            this.serialization = this.options.serialization;
            this.reliable = this.options.reliable;

            // Data channel buffering.
            this._buffer = [];
            this._buffering = false;
            this.bufferSize = 0;

            // For storing large data.
            this._chunkedData = {};

            if (this.options._payload) {
                this._peerBrowser = this.options._payload.browser;
            }

            Negotiator.startConnection(
                this,
                this.options._payload || {
                    originator: true
                }
            );
        }

        util.inherits(DataConnection, EventEmitter);

        DataConnection._idPrefix = 'dc_';

        /** Called by the Negotiator when the DataChannel is ready. */
        DataConnection.prototype.initialize = function(dc) {
            this._dc = this.dataChannel = dc;
            this._configureDataChannel();
        }

        DataConnection.prototype._configureDataChannel = function() {
            var self = this;
            if (util.supports.sctp) {
                this._dc.binaryType = 'arraybuffer';
            }
            this._dc.onopen = function() {
                util.log('Data channel connection success');
                self.open = true;
                self.emit('open');
            }

            // Use the Reliable shim for non Firefox browsers
            if (!util.supports.sctp && this.reliable) {
                this._reliable = new Reliable(this._dc, util.debug);
            }

            if (this._reliable) {
                this._reliable.onmessage = function(msg) {
                    self.emit('data', msg);
                };
            } else {
                this._dc.onmessage = function(e) {
                    self._handleDataMessage(e);
                };
            }
            this._dc.onclose = function(e) {
                util.log('DataChannel closed for:', self.peer);
                self.close();
            };
        }

        // Handles a DataChannel message.
        DataConnection.prototype._handleDataMessage = function(e) {
            var self = this;
            var data = e.data;
            var datatype = data.constructor;
            if (this.serialization === 'binary' || this.serialization === 'binary-utf8') {
                if (datatype === Blob) {
                    // Datatype should never be blob
                    util.blobToArrayBuffer(data, function(ab) {
                        data = util.unpack(ab);
                        self.emit('data', data);
                    });
                    return;
                } else if (datatype === ArrayBuffer) {
                    data = util.unpack(data);
                } else if (datatype === String) {
                    // String fallback for binary data for browsers that don't support binary yet
                    var ab = util.binaryStringToArrayBuffer(data);
                    data = util.unpack(ab);
                }
            } else if (this.serialization === 'json') {
                data = JSON.parse(data);
            }

            // Check if we've chunked--if so, piece things back together.
            // We're guaranteed that this isn't 0.
            if (data.__peerData) {
                var id = data.__peerData;
                var chunkInfo = this._chunkedData[id] || {
                    data: [],
                    count: 0,
                    total: data.total
                };

                chunkInfo.data[data.n] = data.data;
                chunkInfo.count += 1;

                if (chunkInfo.total === chunkInfo.count) {
                    // Clean up before making the recursive call to `_handleDataMessage`.
                    delete this._chunkedData[id];

                    // We've received all the chunks--time to construct the complete data.
                    data = new Blob(chunkInfo.data);
                    this._handleDataMessage({
                        data: data
                    });
                }

                this._chunkedData[id] = chunkInfo;
                return;
            }

            this.emit('data', data);
        }

        /**
         * Exposed functionality for users.
         */

        /** Allows user to close connection. */
        DataConnection.prototype.close = function() {
            if (!this.open) {
                return;
            }
            this.open = false;
            Negotiator.cleanup(this);
            this.emit('close');
        }

        /** Allows user to send data. */
        DataConnection.prototype.send = function(data, chunked) {
            if (!this.open) {
                this.emit('error', new Error('Connection is not open. You should listen for the `open` event before sending messages.'));
                return;
            }
            if (this._reliable) {
                // Note: reliable shim sending will make it so that you cannot customize
                // serialization.
                this._reliable.send(data);
                return;
            }
            var self = this;
            if (this.serialization === 'json') {
                this._bufferedSend(JSON.stringify(data));
            } else if (this.serialization === 'binary' || this.serialization === 'binary-utf8') {
                var blob = util.pack(data);

                // For Chrome-Firefox interoperability, we need to make Firefox "chunk"
                // the data it sends out.
                var needsChunking = util.chunkedBrowsers[this._peerBrowser] || util.chunkedBrowsers[util.browser];
                if (needsChunking && !chunked && blob.size > util.chunkedMTU) {
                    this._sendChunks(blob);
                    return;
                }

                // DataChannel currently only supports strings.
                if (!util.supports.sctp) {
                    util.blobToBinaryString(blob, function(str) {
                        self._bufferedSend(str);
                    });
                } else if (!util.supports.binaryBlob) {
                    // We only do this if we really need to (e.g. blobs are not supported),
                    // because this conversion is costly.
                    util.blobToArrayBuffer(blob, function(ab) {
                        self._bufferedSend(ab);
                    });
                } else {
                    this._bufferedSend(blob);
                }
            } else {
                this._bufferedSend(data);
            }
        }

        DataConnection.prototype._bufferedSend = function(msg) {
            if (this._buffering || !this._trySend(msg)) {
                this._buffer.push(msg);
                this.bufferSize = this._buffer.length;
            }
        }

        // Returns true if the send succeeds.
        DataConnection.prototype._trySend = function(msg) {
            try {
                this._dc.send(msg);
            } catch (e) {
                this._buffering = true;

                var self = this;
                setTimeout(function() {
                    // Try again.
                    self._buffering = false;
                    self._tryBuffer();
                }, 100);
                return false;
            }
            return true;
        }

        // Try to send the first message in the buffer.
        DataConnection.prototype._tryBuffer = function() {
            if (this._buffer.length === 0) {
                return;
            }

            var msg = this._buffer[0];

            if (this._trySend(msg)) {
                this._buffer.shift();
                this.bufferSize = this._buffer.length;
                this._tryBuffer();
            }
        }

        DataConnection.prototype._sendChunks = function(blob) {
            var blobs = util.chunk(blob);
            for (var i = 0, ii = blobs.length; i < ii; i += 1) {
                var blob = blobs[i];
                this.send(blob, true);
            }
        }

        DataConnection.prototype.handleMessage = function(message) {
            var payload = message.payload;

            switch (message.type) {
                case 'ANSWER':
                    this._peerBrowser = payload.browser;

                    // Forward to negotiator
                    Negotiator.handleSDP(message.type, this, payload.sdp);
                    break;
                case 'CANDIDATE':
                    Negotiator.handleCandidate(this, payload.candidate);
                    break;
                default:
                    util.warn('Unrecognized message type:', message.type, 'from peer:', this.peer);
                    break;
            }
        }

        module.exports = DataConnection;

    }, {
        "./negotiator": 5,
        "./util": 8,
        "eventemitter3": 9,
        "reliable": 12
    }],
    3: [function(require, module, exports) {
        window.Socket = require('./socket');
        window.MediaConnection = require('./mediaconnection');
        window.DataConnection = require('./dataconnection');
        window.Peer = require('./peer');
        window.RTCPeerConnection = require('./adapter').RTCPeerConnection;
        window.RTCSessionDescription = require('./adapter').RTCSessionDescription;
        window.RTCIceCandidate = require('./adapter').RTCIceCandidate;
        window.Negotiator = require('./negotiator');
        window.util = require('./util');
        window.BinaryPack = require('js-binarypack');

    }, {
        "./adapter": 1,
        "./dataconnection": 2,
        "./mediaconnection": 4,
        "./negotiator": 5,
        "./peer": 6,
        "./socket": 7,
        "./util": 8,
        "js-binarypack": 10
    }],
    4: [function(require, module, exports) {
        var util = require('./util');
        var EventEmitter = require('eventemitter3');
        var Negotiator = require('./negotiator');

        /**
         * Wraps the streaming interface between two Peers.
         */
        function MediaConnection(peer, provider, options) {
            if (!(this instanceof MediaConnection)) return new MediaConnection(peer, provider, options);
            EventEmitter.call(this);

            this.options = util.extend({}, options);

            this.open = false;
            this.type = 'media';
            this.peer = peer;
            this.provider = provider;
            this.metadata = this.options.metadata;
            this.localStream = this.options._stream;

            this.id = this.options.connectionId || MediaConnection._idPrefix + util.randomToken();
            if (this.localStream) {
                Negotiator.startConnection(
                    this, {
                        _stream: this.localStream,
                        originator: true
                    }
                );
            }
        };

        util.inherits(MediaConnection, EventEmitter);

        MediaConnection._idPrefix = 'mc_';

        MediaConnection.prototype.addStream = function(remoteStream) {
            util.log('Receiving stream', remoteStream);

            this.remoteStream = remoteStream;
            this.emit('stream', remoteStream); // Should we call this `open`?

        };

        MediaConnection.prototype.handleMessage = function(message) {
            var payload = message.payload;

            switch (message.type) {
                case 'ANSWER':
                    // Forward to negotiator
                    Negotiator.handleSDP(message.type, this, payload.sdp);
                    this.open = true;
                    break;
                case 'CANDIDATE':
                    Negotiator.handleCandidate(this, payload.candidate);
                    break;
                default:
                    util.warn('Unrecognized message type:', message.type, 'from peer:', this.peer);
                    break;
            }
        }

        MediaConnection.prototype.answer = function(stream) {
            if (this.localStream) {
                util.warn('Local stream already exists on this MediaConnection. Are you answering a call twice?');
                return;
            }

            this.options._payload._stream = stream;

            this.localStream = stream;
            Negotiator.startConnection(
                    this,
                    this.options._payload
                )
                // Retrieve lost messages stored because PeerConnection not set up.
            var messages = this.provider._getMessages(this.id);
            for (var i = 0, ii = messages.length; i < ii; i += 1) {
                this.handleMessage(messages[i]);
            }
            this.open = true;
        };

        /**
         * Exposed functionality for users.
         */

        /** Allows user to close connection. */
        MediaConnection.prototype.close = function() {
            if (!this.open) {
                return;
            }
            this.open = false;
            Negotiator.cleanup(this);
            this.emit('close')
        };

        module.exports = MediaConnection;

    }, {
        "./negotiator": 5,
        "./util": 8,
        "eventemitter3": 9
    }],
    5: [function(require, module, exports) {
        var util = require('./util');
        var RTCPeerConnection = require('./adapter').RTCPeerConnection;
        var RTCSessionDescription = require('./adapter').RTCSessionDescription;
        var RTCIceCandidate = require('./adapter').RTCIceCandidate;

        /**
         * Manages all negotiations between Peers.
         */
        var Negotiator = {
            pcs: {
                data: {},
                media: {}
            }, // type => {peerId: {pc_id: pc}}.
            //providers: {}, // provider's id => providers (there may be multiple providers/client.
            queue: [] // connections that are delayed due to a PC being in use.
        }

        Negotiator._idPrefix = 'pc_';

        /** Returns a PeerConnection object set up correctly (for data, media). */
        Negotiator.startConnection = function(connection, options) {
            var pc = Negotiator._getPeerConnection(connection, options);

            if (connection.type === 'media' && options._stream) {
                // Add the stream.
                pc.addStream(options._stream);
            }

            // Set the connection's PC.
            connection.pc = connection.peerConnection = pc;
            // What do we need to do now?
            if (options.originator) {
                if (connection.type === 'data') {
                    // Create the datachannel.
                    var config = {};
                    // Dropping reliable:false support, since it seems to be crashing
                    // Chrome.
                    /*if (util.supports.sctp && !options.reliable) {
                      // If we have canonical reliable support...
                      config = {maxRetransmits: 0};
                    }*/
                    // Fallback to ensure older browsers don't crash.
                    if (!util.supports.sctp) {
                        config = {
                            reliable: options.reliable
                        };
                    }
                    var dc = pc.createDataChannel(connection.label, config);
                    connection.initialize(dc);
                }

                if (!util.supports.onnegotiationneeded) {
                    Negotiator._makeOffer(connection);
                }
            } else {
                Negotiator.handleSDP('OFFER', connection, options.sdp);
            }
        }

        Negotiator._getPeerConnection = function(connection, options) {
            if (!Negotiator.pcs[connection.type]) {
                util.error(connection.type + ' is not a valid connection type. Maybe you overrode the `type` property somewhere.');
            }

            if (!Negotiator.pcs[connection.type][connection.peer]) {
                Negotiator.pcs[connection.type][connection.peer] = {};
            }
            var peerConnections = Negotiator.pcs[connection.type][connection.peer];

            var pc;
            // Not multiplexing while FF and Chrome have not-great support for it.
            /*if (options.multiplex) {
              ids = Object.keys(peerConnections);
              for (var i = 0, ii = ids.length; i < ii; i += 1) {
                pc = peerConnections[ids[i]];
                if (pc.signalingState === 'stable') {
                  break; // We can go ahead and use this PC.
                }
              }
            } else */
            if (options.pc) { // Simplest case: PC id already provided for us.
                pc = Negotiator.pcs[connection.type][connection.peer][options.pc];
            }

            if (!pc || pc.signalingState !== 'stable') {
                pc = Negotiator._startPeerConnection(connection);
            }
            return pc;
        }

        /*
        Negotiator._addProvider = function(provider) {
          if ((!provider.id && !provider.disconnected) || !provider.socket.open) {
            // Wait for provider to obtain an ID.
            provider.on('open', function(id) {
              Negotiator._addProvider(provider);
            });
          } else {
            Negotiator.providers[provider.id] = provider;
          }
        }*/


        /** Start a PC. */
        Negotiator._startPeerConnection = function(connection) {
            util.log('Creating RTCPeerConnection.');

            var id = Negotiator._idPrefix + util.randomToken();
            var optional = {};

            if (connection.type === 'data' && !util.supports.sctp) {
                optional = {
                    optional: [{
                        RtpDataChannels: true
                    }]
                };
            } else if (connection.type === 'media') {
                // Interop req for chrome.
                optional = {
                    optional: [{
                        DtlsSrtpKeyAgreement: true
                    }]
                };
            }

            var pc = new RTCPeerConnection(connection.provider.options.config, optional);
            Negotiator.pcs[connection.type][connection.peer][id] = pc;

            Negotiator._setupListeners(connection, pc, id);

            return pc;
        }

        /** Set up various WebRTC listeners. */
        Negotiator._setupListeners = function(connection, pc, pc_id) {
            var peerId = connection.peer;
            var connectionId = connection.id;
            var provider = connection.provider;

            // ICE CANDIDATES.
            util.log('Listening for ICE candidates.');
            pc.onicecandidate = function(evt) {
                if (evt.candidate) {
                    util.log('Received ICE candidates for:', connection.peer);
                    provider.socket.send({
                        type: 'CANDIDATE',
                        payload: {
                            candidate: evt.candidate,
                            type: connection.type,
                            connectionId: connection.id
                        },
                        dst: peerId
                    });
                }
            };

            pc.oniceconnectionstatechange = function() {
                switch (pc.iceConnectionState) {
                    case 'disconnected':
                    case 'failed':
                        util.log('iceConnectionState is disconnected, closing connections to ' + peerId);
                        connection.close();
                        break;
                    case 'completed':
                        pc.onicecandidate = util.noop;
                        break;
                }
            };

            // Fallback for older Chrome impls.
            pc.onicechange = pc.oniceconnectionstatechange;

            // ONNEGOTIATIONNEEDED (Chrome)
            util.log('Listening for `negotiationneeded`');
            pc.onnegotiationneeded = function() {
                util.log('`negotiationneeded` triggered');
                if (pc.signalingState == 'stable') {
                    Negotiator._makeOffer(connection);
                } else {
                    util.log('onnegotiationneeded triggered when not stable. Is another connection being established?');
                }
            };

            // DATACONNECTION.
            util.log('Listening for data channel');
            // Fired between offer and answer, so options should already be saved
            // in the options hash.
            pc.ondatachannel = function(evt) {
                util.log('Received data channel');
                var dc = evt.channel;
                var connection = provider.getConnection(peerId, connectionId);
                connection.initialize(dc);
            };

            // MEDIACONNECTION.
            util.log('Listening for remote stream');
            pc.onaddstream = function(evt) {
                util.log('Received remote stream');
                var stream = evt.stream;
                var connection = provider.getConnection(peerId, connectionId);
                // 10/10/2014: looks like in Chrome 38, onaddstream is triggered after
                // setting the remote description. Our connection object in these cases
                // is actually a DATA connection, so addStream fails.
                // TODO: This is hopefully just a temporary fix. We should try to
                // understand why this is happening.
                if (connection.type === 'media') {
                    connection.addStream(stream);
                }
            };
        }

        Negotiator.cleanup = function(connection) {
            util.log('Cleaning up PeerConnection to ' + connection.peer);

            var pc = connection.pc;

            if (!!pc && (pc.readyState !== 'closed' || pc.signalingState !== 'closed')) {
                pc.close();
                connection.pc = null;
            }
        }

        Negotiator._makeOffer = function(connection) {
            var pc = connection.pc;
            pc.createOffer(function(offer) {
                util.log('Created offer.');

                if (!util.supports.sctp && connection.type === 'data' && connection.reliable) {
                    offer.sdp = Reliable.higherBandwidthSDP(offer.sdp);
                }

                pc.setLocalDescription(offer, function() {
                    util.log('Set localDescription: offer', 'for:', connection.peer);
                    connection.provider.socket.send({
                        type: 'OFFER',
                        payload: {
                            sdp: offer,
                            type: connection.type,
                            label: connection.label,
                            connectionId: connection.id,
                            reliable: connection.reliable,
                            serialization: connection.serialization,
                            metadata: connection.metadata,
                            browser: util.browser
                        },
                        dst: connection.peer
                    });
                }, function(err) {
                    connection.provider.emitError('webrtc', err);
                    util.log('Failed to setLocalDescription, ', err);
                });
            }, function(err) {
                connection.provider.emitError('webrtc', err);
                util.log('Failed to createOffer, ', err);
            }, connection.options.constraints);
        }

        Negotiator._makeAnswer = function(connection) {
            var pc = connection.pc;

            pc.createAnswer(function(answer) {
                util.log('Created answer.');

                if (!util.supports.sctp && connection.type === 'data' && connection.reliable) {
                    answer.sdp = Reliable.higherBandwidthSDP(answer.sdp);
                }

                pc.setLocalDescription(answer, function() {
                    util.log('Set localDescription: answer', 'for:', connection.peer);
                    connection.provider.socket.send({
                        type: 'ANSWER',
                        payload: {
                            sdp: answer,
                            type: connection.type,
                            connectionId: connection.id,
                            browser: util.browser
                        },
                        dst: connection.peer
                    });
                }, function(err) {
                    connection.provider.emitError('webrtc', err);
                    util.log('Failed to setLocalDescription, ', err);
                });
            }, function(err) {
                connection.provider.emitError('webrtc', err);
                util.log('Failed to create answer, ', err);
            });
        }

        /** Handle an SDP. */
        Negotiator.handleSDP = function(type, connection, sdp) {
            sdp = new RTCSessionDescription(sdp);
            var pc = connection.pc;

            util.log('Setting remote description', sdp);
            pc.setRemoteDescription(sdp, function() {
                util.log('Set remoteDescription:', type, 'for:', connection.peer);

                if (type === 'OFFER') {
                    Negotiator._makeAnswer(connection);
                }
            }, function(err) {
                connection.provider.emitError('webrtc', err);
                util.log('Failed to setRemoteDescription, ', err);
            });
        }

        /** Handle a candidate. */
        Negotiator.handleCandidate = function(connection, ice) {
            var candidate = ice.candidate;
            var sdpMLineIndex = ice.sdpMLineIndex;
            connection.pc.addIceCandidate(new RTCIceCandidate({
                sdpMLineIndex: sdpMLineIndex,
                candidate: candidate
            }));
            util.log('Added ICE candidate for:', connection.peer);
        }

        module.exports = Negotiator;

    }, {
        "./adapter": 1,
        "./util": 8
    }],
    6: [function(require, module, exports) {
        var util = require('./util');
        var EventEmitter = require('eventemitter3');
        var Socket = require('./socket');
        var MediaConnection = require('./mediaconnection');
        var DataConnection = require('./dataconnection');

        /**
         * A peer who can initiate connections with other peers.
         */
        function Peer(id, options) {
            if (!(this instanceof Peer)) return new Peer(id, options);
            EventEmitter.call(this);

            // Deal with overloading
            if (id && id.constructor == Object) {
                options = id;
                id = undefined;
            } else if (id) {
                // Ensure id is a string
                id = id.toString();
            }
            //

            // Configurize options
            options = util.extend({
                debug: 0, // 1: Errors, 2: Warnings, 3: All logs
                host: util.CLOUD_HOST,
                port: util.CLOUD_PORT,
                key: 'peerjs',
                path: '/',
                token: util.randomToken(),
                config: util.defaultConfig
            }, options);
            this.options = options;
            // Detect relative URL host.
            if (options.host === '/') {
                options.host = window.location.hostname;
            }
            // Set path correctly.
            if (options.path[0] !== '/') {
                options.path = '/' + options.path;
            }
            if (options.path[options.path.length - 1] !== '/') {
                options.path += '/';
            }

            // Set whether we use SSL to same as current host
            if (options.secure === undefined && options.host !== util.CLOUD_HOST) {
                options.secure = util.isSecure();
            }
            // Set a custom log function if present
            if (options.logFunction) {
                util.setLogFunction(options.logFunction);
            }
            util.setLogLevel(options.debug);
            //

            // Sanity checks
            // Ensure WebRTC supported
            if (!util.supports.audioVideo && !util.supports.data) {
                this._delayedAbort('browser-incompatible', 'The current browser does not support WebRTC');
                return;
            }
            // Ensure alphanumeric id
            if (!util.validateId(id)) {
                this._delayedAbort('invalid-id', 'ID "' + id + '" is invalid');
                return;
            }
            // Ensure valid key
            if (!util.validateKey(options.key)) {
                this._delayedAbort('invalid-key', 'API KEY "' + options.key + '" is invalid');
                return;
            }
            // Ensure not using unsecure cloud server on SSL page
            if (options.secure && options.host === '0.peerjs.com') {
                this._delayedAbort('ssl-unavailable',
                    'The cloud server currently does not support HTTPS. Please run your own PeerServer to use HTTPS.');
                return;
            }
            //

            // States.
            this.destroyed = false; // Connections have been killed
            this.disconnected = false; // Connection to PeerServer killed but P2P connections still active
            this.open = false; // Sockets and such are not yet open.
            //

            // References
            this.connections = {}; // DataConnections for this peer.
            this._lostMessages = {}; // src => [list of messages]
            //

            // Start the server connection
            this._initializeServerConnection();
            if (id) {
                this._initialize(id);
            } else {
                this._retrieveId();
            }
            //
        }

        util.inherits(Peer, EventEmitter);

        // Initialize the 'socket' (which is actually a mix of XHR streaming and
        // websockets.)
        Peer.prototype._initializeServerConnection = function() {
            var self = this;
            //if (this.options.socket) {
            //  this.socket = this.options.socket;
            //} else {
            //  this.socket = new Socket(this.options.secure, this.options.host, this.options.port, this.options.path, this.options.key);
            //}
            //
            this.socket = new Socket(
                this.options.secure, 
                this.options.host, 
                this.options.port, 
                this.options.path, 
                this.options.key, 
                this.options.socket,
                this.options.id);

            this.id = this.options.id;
            console.log("!!!this.socket", this.socket)

            this.socket.on('message', function(data) {
                self._handleMessage(data);
            });
            this.socket.on('error', function(error) {
                self._abort('socket-error', error);
            });
            this.socket.on('disconnected', function() {
                // If we haven't explicitly disconnected, emit error and disconnect.
                if (!self.disconnected) {
                    self.emitError('network', 'Lost connection to server.');
                    self.disconnect();
                }
            });
            this.socket.on('close', function() {
                // If we haven't explicitly disconnected, emit error.
                if (!self.disconnected) {
                    self._abort('socket-closed', 'Underlying socket is already closed.');
                }
            });
        };

        /** Get a unique ID from the server via XHR. */
        Peer.prototype._retrieveId = function(cb) {
            /*
            var self = this;
            var http = new XMLHttpRequest();
            var protocol = this.options.secure ? 'https://' : 'http://';
            var url = protocol + this.options.host + ':' + this.options.port +
                this.options.path + this.options.key + '/id';
            var queryString = '?ts=' + new Date().getTime() + '' + Math.random();
            url += queryString;

            // If there's no ID we need to wait for one before trying to init socket.
            http.open('get', url, true);
            http.onerror = function(e) {
                util.error('Error retrieving ID', e);
                var pathError = '';
                if (self.options.path === '/' && self.options.host !== util.CLOUD_HOST) {
                    pathError = ' If you passed in a `path` to your self-hosted PeerServer, ' +
                        'you\'ll also need to pass in that same path when creating a new ' +
                        'Peer.';
                }
                self._abort('server-error', 'Could not get an ID from the server.' + pathError);
            };
            http.onreadystatechange = function() {
                if (http.readyState !== 4) {
                    return;
                }
                if (http.status !== 200) {
                    http.onerror();
                    return;
                }
                self._initialize(http.responseText);
            };
            http.send(null);
            */
            this._initialize();
        };


        /** Initialize a connection with the server. */


        Peer.prototype._initialize = function(id) {
            //this.id = id;
            this.socket.start(this.id, this.options.token);
        };

        /** Handles messages from the server. */
        Peer.prototype._handleMessage = function(message) {
            var type = message.type;
            var payload = message.payload;
            var peer = message.src;
            var connection;

            switch (type) {
                case 'OPEN': // The connection to the server is open.
                    this.emit('open', this.id);
                    this.open = true;
                    break;
                case 'ERROR': // Server error.
                    this._abort('server-error', payload.msg);
                    break;
                case 'ID-TAKEN': // The selected ID is taken.
                    this._abort('unavailable-id', 'ID `' + this.id + '` is taken');
                    break;
                case 'INVALID-KEY': // The given API key cannot be found.
                    this._abort('invalid-key', 'API KEY "' + this.options.key + '" is invalid');
                    break;

                    //
                case 'LEAVE': // Another peer has closed its connection to this peer.
                    util.log('Received leave message from', peer);
                    this._cleanupPeer(peer);
                    break;

                case 'EXPIRE': // The offer sent to a peer has expired without response.
                    this.emitError('peer-unavailable', 'Could not connect to peer ' + peer);
                    break;
                case 'OFFER': // we should consider switching this to CALL/CONNECT, but this is the least breaking option.
                    var connectionId = payload.connectionId;
                    connection = this.getConnection(peer, connectionId);

                    if (connection) {
                        util.warn('Offer received for existing Connection ID:', connectionId);
                        //connection.handleMessage(message);
                    } else {
                        // Create a new connection.
                        if (payload.type === 'media') {
                            connection = new MediaConnection(peer, this, {
                                connectionId: connectionId,
                                _payload: payload,
                                metadata: payload.metadata
                            });
                            this._addConnection(peer, connection);
                            this.emit('call', connection);
                        } else if (payload.type === 'data') {
                            connection = new DataConnection(peer, this, {
                                connectionId: connectionId,
                                _payload: payload,
                                metadata: payload.metadata,
                                label: payload.label,
                                serialization: payload.serialization,
                                reliable: payload.reliable
                            });
                            this._addConnection(peer, connection);
                            this.emit('connection', connection);
                        } else {
                            util.warn('Received malformed connection type:', payload.type);
                            return;
                        }
                        // Find messages.
                        var messages = this._getMessages(connectionId);
                        for (var i = 0, ii = messages.length; i < ii; i += 1) {
                            connection.handleMessage(messages[i]);
                        }
                    }
                    break;
                default:
                    if (!payload) {
                        util.warn('You received a malformed message from ' + peer + ' of type ' + type);
                        return;
                    }

                    var id = payload.connectionId;
                    connection = this.getConnection(peer, id);

                    if (connection && connection.pc) {
                        // Pass it on.
                        connection.handleMessage(message);
                    } else if (id) {
                        // Store for possible later use
                        this._storeMessage(id, message);
                    } else {
                        util.warn('You received an unrecognized message:', message);
                    }
                    break;
            }
        };

        /** Stores messages without a set up connection, to be claimed later. */
        Peer.prototype._storeMessage = function(connectionId, message) {
            if (!this._lostMessages[connectionId]) {
                this._lostMessages[connectionId] = [];
            }
            this._lostMessages[connectionId].push(message);
        };

        /** Retrieve messages from lost message store */
        Peer.prototype._getMessages = function(connectionId) {
            var messages = this._lostMessages[connectionId];
            if (messages) {
                delete this._lostMessages[connectionId];
                return messages;
            } else {
                return [];
            }
        };

        /**
         * Returns a DataConnection to the specified peer. See documentation for a
         * complete list of options.
         */
        Peer.prototype.connect = function(peer, options) {
            if (this.disconnected) {
                util.warn('You cannot connect to a new Peer because you called ' +
                    '.disconnect() on this Peer and ended your connection with the ' +
                    'server. You can create a new Peer to reconnect, or call reconnect ' +
                    'on this peer if you believe its ID to still be available.');
                this.emitError('disconnected', 'Cannot connect to new Peer after disconnecting from server.');
                return;
            }
            var connection = new DataConnection(peer, this, options);
            this._addConnection(peer, connection);
            return connection;
        };

        /**
         * Returns a MediaConnection to the specified peer. See documentation for a
         * complete list of options.
         */
        Peer.prototype.call = function(peer, stream, options) {
            if (this.disconnected) {
                util.warn('You cannot connect to a new Peer because you called ' +
                    '.disconnect() on this Peer and ended your connection with the ' +
                    'server. You can create a new Peer to reconnect.');
                this.emitError('disconnected', 'Cannot connect to new Peer after disconnecting from server.');
                return;
            }
            if (!stream) {
                util.error('To call a peer, you must provide a stream from your browser\'s `getUserMedia`.');
                return;
            }
            options = options || {};
            options._stream = stream;
            var call = new MediaConnection(peer, this, options);
            this._addConnection(peer, call);
            return call;
        };

        /** Add a data/media connection to this peer. */
        Peer.prototype._addConnection = function(peer, connection) {
            if (!this.connections[peer]) {
                this.connections[peer] = [];
            }
            this.connections[peer].push(connection);
        };

        /** Retrieve a data/media connection for this peer. */
        Peer.prototype.getConnection = function(peer, id) {
            var connections = this.connections[peer];
            if (!connections) {
                return null;
            }
            for (var i = 0, ii = connections.length; i < ii; i++) {
                if (connections[i].id === id) {
                    return connections[i];
                }
            }
            return null;
        };

        Peer.prototype._delayedAbort = function(type, message) {
            var self = this;
            util.setZeroTimeout(function() {
                self._abort(type, message);
            });
        };

        /**
         * Destroys the Peer and emits an error message.
         * The Peer is not destroyed if it's in a disconnected state, in which case
         * it retains its disconnected state and its existing connections.
         */
        Peer.prototype._abort = function(type, message) {
            util.error('Aborting!');
            if (!this._lastServerId) {
                this.destroy();
            } else {
                this.disconnect();
            }
            this.emitError(type, message);
        };

        /** Emits a typed error message. */
        Peer.prototype.emitError = function(type, err) {
            util.error('Error:', err);
            if (typeof err === 'string') {
                err = new Error(err);
            }
            err.type = type;
            this.emit('error', err);
        };

        /**
         * Destroys the Peer: closes all active connections as well as the connection
         *  to the server.
         * Warning: The peer can no longer create or accept connections after being
         *  destroyed.
         */
        Peer.prototype.destroy = function() {
            if (!this.destroyed) {
                this._cleanup();
                this.disconnect();
                this.destroyed = true;
            }
        };


        /** Disconnects every connection on this peer. */
        Peer.prototype._cleanup = function() {
            if (this.connections) {
                var peers = Object.keys(this.connections);
                for (var i = 0, ii = peers.length; i < ii; i++) {
                    this._cleanupPeer(peers[i]);
                }
            }
            this.emit('close');
        };

        /** Closes all connections to this peer. */
        Peer.prototype._cleanupPeer = function(peer) {
            var connections = this.connections[peer];
            for (var j = 0, jj = connections.length; j < jj; j += 1) {
                connections[j].close();
            }
        };

        /**
         * Disconnects the Peer's connection to the PeerServer. Does not close any
         *  active connections.
         * Warning: The peer can no longer create or accept connections after being
         *  disconnected. It also cannot reconnect to the server.
         */
        Peer.prototype.disconnect = function() {
            var self = this;
            util.setZeroTimeout(function() {
                if (!self.disconnected) {
                    self.disconnected = true;
                    self.open = false;
                    if (self.socket) {
                        self.socket.close();
                    }
                    self.emit('disconnected', self.id);
                    self._lastServerId = self.id;
                    self.id = null;
                }
            });
        };

        /** Attempts to reconnect with the same ID. */
        Peer.prototype.reconnect = function() {
            if (this.disconnected && !this.destroyed) {
                util.log('Attempting reconnection to server with ID ' + this._lastServerId);
                this.disconnected = false;
                this._initializeServerConnection();
                this._initialize(this._lastServerId);
            } else if (this.destroyed) {
                throw new Error('This peer cannot reconnect to the server. It has already been destroyed.');
            } else if (!this.disconnected && !this.open) {
                // Do nothing. We're still connecting the first time.
                util.error('In a hurry? We\'re still trying to make the initial connection!');
            } else {
                throw new Error('Peer ' + this.id + ' cannot reconnect because it is not disconnected from the server!');
            }
        };

        /**
         * Get a list of available peer IDs. If you're running your own server, you'll
         * want to set allow_discovery: true in the PeerServer options. If you're using
         * the cloud server, email team@peerjs.com to get the functionality enabled for
         * your key.
         */
        Peer.prototype.listAllPeers = function(cb) {
            cb = cb || function() {};
            var self = this;
            var http = new XMLHttpRequest();
            var protocol = this.options.secure ? 'https://' : 'http://';
            var url = protocol + this.options.host + ':' + this.options.port +
                this.options.path + this.options.key + '/peers';
            var queryString = '?ts=' + new Date().getTime() + '' + Math.random();
            url += queryString;

            // If there's no ID we need to wait for one before trying to init socket.
            http.open('get', url, true);
            http.onerror = function(e) {
                self._abort('server-error', 'Could not get peers from the server.');
                cb([]);
            };
            http.onreadystatechange = function() {
                if (http.readyState !== 4) {
                    return;
                }
                if (http.status === 401) {
                    var helpfulError = '';
                    if (self.options.host !== util.CLOUD_HOST) {
                        helpfulError = 'It looks like you\'re using the cloud server. You can email ' +
                            'team@peerjs.com to enable peer listing for your API key.';
                    } else {
                        helpfulError = 'You need to enable `allow_discovery` on your self-hosted ' +
                            'PeerServer to use this feature.';
                    }
                    cb([]);
                    throw new Error('It doesn\'t look like you have permission to list peers IDs. ' + helpfulError);
                } else if (http.status !== 200) {
                    cb([]);
                } else {
                    cb(JSON.parse(http.responseText));
                }
            };
            http.send(null);
        };

        module.exports = Peer;

    }, {
        "./dataconnection": 2,
        "./mediaconnection": 4,
        "./socket": 7,
        "./util": 8,
        "eventemitter3": 9
    }],
    7: [function(require, module, exports) {
        var util = require('./util');
        var EventEmitter = require('eventemitter3');

        /**
         * An abstraction on top of WebSockets and XHR streaming to provide fastest
         * possible connection for peers.
         */
        function Socket(secure, host, port, path, key, asocket, id) {
            //if (!(this instanceof Socket)) return new Socket(secure, host, port, path, key);

            EventEmitter.call(this);

            // Disconnected manually.
            this.disconnected = false;
            this._queue = [];

            var httpProtocol = secure ? 'https://' : 'http://';
            var wsProtocol = secure ? 'wss://' : 'ws://';
            this._httpUrl = httpProtocol + host + ':' + port + path + key;
            this._wsUrl = wsProtocol + host + ':' + port + path + 'peerjs?key=' + key;

            this.asocket = asocket;
        }

        util.inherits(Socket, EventEmitter);


        /** Check in with ID or get one from server. */
        Socket.prototype.start = function(id, token) {
            this.id = id;

            this._httpUrl += '/' + id + '/' + token;
            this._wsUrl += '&id=' + id + '&token=' + token;

            this._startXhrStream();
            this._startWebSocket();
        };


        /** Start up websocket communications. */

        Socket.prototype._startWebSocket = function(id) {
            var self = this;
            if (this._socket) {
                return;
            }

            this._socket = this.asocket;

            this._socket.onMessage = function(event) {
                try {
                    console.log('onMessage')
                    var data = JSON.parse(event.data);
                } catch (e) {
                    util.log('Invalid server message', event.data);
                    return;
                }
                self.emit('message', data);
            };
            this._socket.onClose = function(event) {
                util.log('Socket closed.');
                self.disconnected = true;
                self.emit('disconnected');
            };
            this._socket.onOpen = function() {
                console.log("!!!!!onOpen")
                if (self._timeout) {
                    clearTimeout(self._timeout);
                    setTimeout(function() {
                        self._http.abort();
                        self._http = null;
                    }, 5000);
                }
                self._sendQueuedMessages();
                util.log('Socket open');
            };


            //this._socket = new WebSocket(this._wsUrl);
            /*
            this._socket.onmessage = function(event) {
              try {
                var data = JSON.parse(event.data);
              } catch(e) {
                util.log('Invalid server message', event.data);
                return;
              }
              self.emit('message', data);
            };

            this._socket.onclose = function(event) {
              util.log('Socket closed.');
              self.disconnected = true;
              self.emit('disconnected');
            };

            // Take care of the queue of connections if necessary and make sure Peer knows
            // socket is open.
            this._socket.onopen = function() {
              if (self._timeout) {
                clearTimeout(self._timeout);
                setTimeout(function(){
                  self._http.abort();
                  self._http = null;
                }, 5000);
              }
              self._sendQueuedMessages();
              util.log('Socket open');
            };
            */
        };


        /** Start XHR streaming. */
        Socket.prototype._startXhrStream = function(n) {
            try {
                var self = this;
                this._http = new XMLHttpRequest();
                this._http._index = 1;
                this._http._streamIndex = n || 0;
                this._http.open('post', this._httpUrl + '/id?i=' + this._http._streamIndex, true);
                this._http.onerror = function() {
                    // If we get an error, likely something went wrong.
                    // Stop streaming.
                    clearTimeout(self._timeout);
                    self.emit('disconnected');
                }
                this._http.onreadystatechange = function() {
                    if (this.readyState == 2 && this.old) {
                        this.old.abort();
                        delete this.old;
                    } else if (this.readyState > 2 && this.status === 200 && this.responseText) {
                        self._handleStream(this);
                    }
                };
                this._http.send(null);
                this._setHTTPTimeout();
            } catch (e) {
                util.log('XMLHttpRequest not available; defaulting to WebSockets');
            }
        }


        /** Handles onreadystatechange response as a stream. */
        Socket.prototype._handleStream = function(http) {
            // 3 and 4 are loading/done state. All others are not relevant.
            var messages = http.responseText.split('\n');

            // Check to see if anything needs to be processed on buffer.
            if (http._buffer) {
                while (http._buffer.length > 0) {
                    var index = http._buffer.shift();
                    var bufferedMessage = messages[index];
                    try {
                        bufferedMessage = JSON.parse(bufferedMessage);
                    } catch (e) {
                        http._buffer.shift(index);
                        break;
                    }
                    this.emit('message', bufferedMessage);
                }
            }

            var message = messages[http._index];
            if (message) {
                http._index += 1;
                // Buffering--this message is incomplete and we'll get to it next time.
                // This checks if the httpResponse ended in a `\n`, in which case the last
                // element of messages should be the empty string.
                if (http._index === messages.length) {
                    if (!http._buffer) {
                        http._buffer = [];
                    }
                    http._buffer.push(http._index - 1);
                } else {
                    try {
                        message = JSON.parse(message);
                    } catch (e) {
                        util.log('Invalid server message', message);
                        return;
                    }
                    this.emit('message', message);
                }
            }
        }

        Socket.prototype._setHTTPTimeout = function() {
            var self = this;
            this._timeout = setTimeout(function() {
                var old = self._http;
                if (!self._wsOpen()) {
                    self._startXhrStream(old._streamIndex + 1);
                    self._http.old = old;
                } else {
                    old.abort();
                }
            }, 25000);
        };

        /** Is the websocket currently open? */
        Socket.prototype._wsOpen = function() {
            //return this._socket && this._socket.readyState == 1;
            return true;
        };

        /** Send queued messages. */
        Socket.prototype._sendQueuedMessages = function() {
            for (var i = 0, ii = this._queue.length; i < ii; i += 1) {
                this.send(this._queue[i]);
            }
        };

        /** Exposed send for DC & Peer. */
        Socket.prototype.send = function(data) {
            if (this.disconnected) {
                return;
            }

            // If we didn't get an ID yet, we can't yet send anything so we should queue
            // up these messages.
            if (!this.id) {
                this._queue.push(data);
                return;
            }

            if (!data.type) {
                this.emit('error', 'Invalid message');
                return;
            }

            var message = JSON.stringify(data);
            if (this._wsOpen()) {
                this._socket.send(message);
            } else {
                var http = new XMLHttpRequest();
                var url = this._httpUrl + '/' + data.type.toLowerCase();
                http.open('post', url, true);
                http.setRequestHeader('Content-Type', 'application/json');
                http.send(message);
            }
        };

        Socket.prototype.close = function() {
            if (!this.disconnected && this._wsOpen()) {
                this._socket.close();
                this.disconnected = true;
            }
        };

        module.exports = Socket;

    }, {
        "./util": 8,
        "eventemitter3": 9
    }],
    8: [function(require, module, exports) {
        var defaultConfig = {
            'iceServers': [{
                'url': 'stun:stun.l.google.com:19302'
            }]
        };
        var dataCount = 1;

        var BinaryPack = require('js-binarypack');
        var RTCPeerConnection = require('./adapter').RTCPeerConnection;

        var util = {
            noop: function() {},

            CLOUD_HOST: '0.peerjs.com',
            CLOUD_PORT: 9000,

            // Browsers that need chunking:
            chunkedBrowsers: {
                'Chrome': 1
            },
            chunkedMTU: 16300, // The original 60000 bytes setting does not work when sending data from Firefox to Chrome, which is "cut off" after 16384 bytes and delivered individually.

            // Logging logic
            logLevel: 0,
            setLogLevel: function(level) {
                var debugLevel = parseInt(level, 10);
                if (!isNaN(parseInt(level, 10))) {
                    util.logLevel = debugLevel;
                } else {
                    // If they are using truthy/falsy values for debug
                    util.logLevel = level ? 3 : 0;
                }
                util.log = util.warn = util.error = util.noop;
                if (util.logLevel > 0) {
                    util.error = util._printWith('ERROR');
                }
                if (util.logLevel > 1) {
                    util.warn = util._printWith('WARNING');
                }
                if (util.logLevel > 2) {
                    util.log = util._print;
                }
            },
            setLogFunction: function(fn) {
                if (fn.constructor !== Function) {
                    util.warn('The log function you passed in is not a function. Defaulting to regular logs.');
                } else {
                    util._print = fn;
                }
            },

            _printWith: function(prefix) {
                return function() {
                    var copy = Array.prototype.slice.call(arguments);
                    copy.unshift(prefix);
                    util._print.apply(util, copy);
                };
            },
            _print: function() {
                var err = false;
                var copy = Array.prototype.slice.call(arguments);
                copy.unshift('PeerJS: ');
                for (var i = 0, l = copy.length; i < l; i++) {
                    if (copy[i] instanceof Error) {
                        copy[i] = '(' + copy[i].name + ') ' + copy[i].message;
                        err = true;
                    }
                }
                err ? console.error.apply(console, copy) : console.log.apply(console, copy);
            },
            //

            // Returns browser-agnostic default config
            defaultConfig: defaultConfig,
            //

            // Returns the current browser.
            browser: (function() {
                if (window.mozRTCPeerConnection) {
                    return 'Firefox';
                } else if (window.webkitRTCPeerConnection) {
                    return 'Chrome';
                } else if (window.RTCPeerConnection) {
                    return 'Supported';
                } else {
                    return 'Unsupported';
                }
            })(),
            //

            // Lists which features are supported
            supports: (function() {
                if (typeof RTCPeerConnection === 'undefined') {
                    return {};
                }

                var data = true;
                var audioVideo = true;

                var binaryBlob = false;
                var sctp = false;
                var onnegotiationneeded = !!window.webkitRTCPeerConnection;

                var pc, dc;
                try {
                    pc = new RTCPeerConnection(defaultConfig, {
                        optional: [{
                            RtpDataChannels: true
                        }]
                    });
                } catch (e) {
                    data = false;
                    audioVideo = false;
                }

                if (data) {
                    try {
                        dc = pc.createDataChannel('_PEERJSTEST');
                    } catch (e) {
                        data = false;
                    }
                }

                if (data) {
                    // Binary test
                    try {
                        dc.binaryType = 'blob';
                        binaryBlob = true;
                    } catch (e) {}

                    // Reliable test.
                    // Unfortunately Chrome is a bit unreliable about whether or not they
                    // support reliable.
                    var reliablePC = new RTCPeerConnection(defaultConfig, {});
                    try {
                        var reliableDC = reliablePC.createDataChannel('_PEERJSRELIABLETEST', {});
                        sctp = reliableDC.reliable;
                    } catch (e) {}
                    reliablePC.close();
                }

                // FIXME: not really the best check...
                if (audioVideo) {
                    audioVideo = !!pc.addStream;
                }

                // FIXME: this is not great because in theory it doesn't work for
                // av-only browsers (?).
                if (!onnegotiationneeded && data) {
                    // sync default check.
                    var negotiationPC = new RTCPeerConnection(defaultConfig, {
                        optional: [{
                            RtpDataChannels: true
                        }]
                    });
                    negotiationPC.onnegotiationneeded = function() {
                        onnegotiationneeded = true;
                        // async check.
                        if (util && util.supports) {
                            util.supports.onnegotiationneeded = true;
                        }
                    };
                    negotiationPC.createDataChannel('_PEERJSNEGOTIATIONTEST');

                    setTimeout(function() {
                        negotiationPC.close();
                    }, 1000);
                }

                if (pc) {
                    pc.close();
                }

                return {
                    audioVideo: audioVideo,
                    data: data,
                    binaryBlob: binaryBlob,
                    binary: sctp, // deprecated; sctp implies binary support.
                    reliable: sctp, // deprecated; sctp implies reliable data.
                    sctp: sctp,
                    onnegotiationneeded: onnegotiationneeded
                };
            }()),
            //

            // Ensure alphanumeric ids
            validateId: function(id) {
                // Allow empty ids
                return !id || /^[A-Za-z0-9_-]+(?:[ _-][A-Za-z0-9]+)*$/.exec(id);
            },

            validateKey: function(key) {
                // Allow empty keys
                return !key || /^[A-Za-z0-9_-]+(?:[ _-][A-Za-z0-9]+)*$/.exec(key);
            },


            debug: false,

            inherits: function(ctor, superCtor) {
                ctor.super_ = superCtor;
                ctor.prototype = Object.create(superCtor.prototype, {
                    constructor: {
                        value: ctor,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
            },
            extend: function(dest, source) {
                for (var key in source) {
                    if (source.hasOwnProperty(key)) {
                        dest[key] = source[key];
                    }
                }
                return dest;
            },
            pack: BinaryPack.pack,
            unpack: BinaryPack.unpack,

            log: function() {
                if (util.debug) {
                    var err = false;
                    var copy = Array.prototype.slice.call(arguments);
                    copy.unshift('PeerJS: ');
                    for (var i = 0, l = copy.length; i < l; i++) {
                        if (copy[i] instanceof Error) {
                            copy[i] = '(' + copy[i].name + ') ' + copy[i].message;
                            err = true;
                        }
                    }
                    err ? console.error.apply(console, copy) : console.log.apply(console, copy);
                }
            },

            setZeroTimeout: (function(global) {
                var timeouts = [];
                var messageName = 'zero-timeout-message';

                // Like setTimeout, but only takes a function argument.  There's
                // no time argument (always zero) and no arguments (you have to
                // use a closure).
                function setZeroTimeoutPostMessage(fn) {
                    timeouts.push(fn);
                    global.postMessage(messageName, '*');
                }

                function handleMessage(event) {
                    if (event.source == global && event.data == messageName) {
                        if (event.stopPropagation) {
                            event.stopPropagation();
                        }
                        if (timeouts.length) {
                            timeouts.shift()();
                        }
                    }
                }
                if (global.addEventListener) {
                    global.addEventListener('message', handleMessage, true);
                } else if (global.attachEvent) {
                    global.attachEvent('onmessage', handleMessage);
                }
                return setZeroTimeoutPostMessage;
            }(window)),

            // Binary stuff

            // chunks a blob.
            chunk: function(bl) {
                var chunks = [];
                var size = bl.size;
                var start = index = 0;
                var total = Math.ceil(size / util.chunkedMTU);
                while (start < size) {
                    var end = Math.min(size, start + util.chunkedMTU);
                    var b = bl.slice(start, end);

                    var chunk = {
                        __peerData: dataCount,
                        n: index,
                        data: b,
                        total: total
                    };

                    chunks.push(chunk);

                    start = end;
                    index += 1;
                }
                dataCount += 1;
                return chunks;
            },

            blobToArrayBuffer: function(blob, cb) {
                var fr = new FileReader();
                fr.onload = function(evt) {
                    cb(evt.target.result);
                };
                fr.readAsArrayBuffer(blob);
            },
            blobToBinaryString: function(blob, cb) {
                var fr = new FileReader();
                fr.onload = function(evt) {
                    cb(evt.target.result);
                };
                fr.readAsBinaryString(blob);
            },
            binaryStringToArrayBuffer: function(binary) {
                var byteArray = new Uint8Array(binary.length);
                for (var i = 0; i < binary.length; i++) {
                    byteArray[i] = binary.charCodeAt(i) & 0xff;
                }
                return byteArray.buffer;
            },
            randomToken: function() {
                return Math.random().toString(36).substr(2);
            },
            //

            isSecure: function() {
                return location.protocol === 'https:';
            }
        };

        module.exports = util;

    }, {
        "./adapter": 1,
        "js-binarypack": 10
    }],
    9: [function(require, module, exports) {
        'use strict';

        /**
         * Representation of a single EventEmitter function.
         *
         * @param {Function} fn Event handler to be called.
         * @param {Mixed} context Context for function execution.
         * @param {Boolean} once Only emit once
         * @api private
         */
        function EE(fn, context, once) {
            this.fn = fn;
            this.context = context;
            this.once = once || false;
        }

        /**
         * Minimal EventEmitter interface that is molded against the Node.js
         * EventEmitter interface.
         *
         * @constructor
         * @api public
         */
        function EventEmitter() { /* Nothing to set */ }

        /**
         * Holds the assigned EventEmitters by name.
         *
         * @type {Object}
         * @private
         */
        EventEmitter.prototype._events = undefined;

        /**
         * Return a list of assigned event listeners.
         *
         * @param {String} event The events that should be listed.
         * @returns {Array}
         * @api public
         */
        EventEmitter.prototype.listeners = function listeners(event) {
            if (!this._events || !this._events[event]) return [];

            for (var i = 0, l = this._events[event].length, ee = []; i < l; i++) {
                ee.push(this._events[event][i].fn);
            }

            return ee;
        };

        /**
         * Emit an event to all registered event listeners.
         *
         * @param {String} event The name of the event.
         * @returns {Boolean} Indication if we've emitted an event.
         * @api public
         */
        EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
            if (!this._events || !this._events[event]) return false;

            var listeners = this._events[event],
                length = listeners.length,
                len = arguments.length,
                ee = listeners[0],
                args, i, j;

            if (1 === length) {
                if (ee.once) this.removeListener(event, ee.fn, true);

                switch (len) {
                    case 1:
                        return ee.fn.call(ee.context), true;
                    case 2:
                        return ee.fn.call(ee.context, a1), true;
                    case 3:
                        return ee.fn.call(ee.context, a1, a2), true;
                    case 4:
                        return ee.fn.call(ee.context, a1, a2, a3), true;
                    case 5:
                        return ee.fn.call(ee.context, a1, a2, a3, a4), true;
                    case 6:
                        return ee.fn.call(ee.context, a1, a2, a3, a4, a5), true;
                }

                for (i = 1, args = new Array(len - 1); i < len; i++) {
                    args[i - 1] = arguments[i];
                }

                ee.fn.apply(ee.context, args);
            } else {
                for (i = 0; i < length; i++) {
                    if (listeners[i].once) this.removeListener(event, listeners[i].fn, true);

                    switch (len) {
                        case 1:
                            listeners[i].fn.call(listeners[i].context);
                            break;
                        case 2:
                            listeners[i].fn.call(listeners[i].context, a1);
                            break;
                        case 3:
                            listeners[i].fn.call(listeners[i].context, a1, a2);
                            break;
                        default:
                            if (!args)
                                for (j = 1, args = new Array(len - 1); j < len; j++) {
                                    args[j - 1] = arguments[j];
                                }

                            listeners[i].fn.apply(listeners[i].context, args);
                    }
                }
            }

            return true;
        };

        /**
         * Register a new EventListener for the given event.
         *
         * @param {String} event Name of the event.
         * @param {Functon} fn Callback function.
         * @param {Mixed} context The context of the function.
         * @api public
         */
        EventEmitter.prototype.on = function on(event, fn, context) {
            if (!this._events) this._events = {};
            if (!this._events[event]) this._events[event] = [];
            this._events[event].push(new EE(fn, context || this));

            return this;
        };

        /**
         * Add an EventListener that's only called once.
         *
         * @param {String} event Name of the event.
         * @param {Function} fn Callback function.
         * @param {Mixed} context The context of the function.
         * @api public
         */
        EventEmitter.prototype.once = function once(event, fn, context) {
            if (!this._events) this._events = {};
            if (!this._events[event]) this._events[event] = [];
            this._events[event].push(new EE(fn, context || this, true));

            return this;
        };

        /**
         * Remove event listeners.
         *
         * @param {String} event The event we want to remove.
         * @param {Function} fn The listener that we need to find.
         * @param {Boolean} once Only remove once listeners.
         * @api public
         */
        EventEmitter.prototype.removeListener = function removeListener(event, fn, once) {
            if (!this._events || !this._events[event]) return this;

            var listeners = this._events[event],
                events = [];

            if (fn)
                for (var i = 0, length = listeners.length; i < length; i++) {
                    if (listeners[i].fn !== fn && listeners[i].once !== once) {
                        events.push(listeners[i]);
                    }
                }

            //
            // Reset the array, or remove it completely if we have no more listeners.
            //
            if (events.length) this._events[event] = events;
            else this._events[event] = null;

            return this;
        };

        /**
         * Remove all listeners or only the listeners for the specified event.
         *
         * @param {String} event The event want to remove all listeners for.
         * @api public
         */
        EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
            if (!this._events) return this;

            if (event) this._events[event] = null;
            else this._events = {};

            return this;
        };

        //
        // Alias methods names because people roll like that.
        //
        EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;

        //
        // This function doesn't apply anymore.
        //
        EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
            return this;
        };

        //
        // Expose the module.
        //
        EventEmitter.EventEmitter = EventEmitter;
        EventEmitter.EventEmitter2 = EventEmitter;
        EventEmitter.EventEmitter3 = EventEmitter;

        if ('object' === typeof module && module.exports) {
            module.exports = EventEmitter;
        }

    }, {}],
    10: [function(require, module, exports) {
        var BufferBuilder = require('./bufferbuilder').BufferBuilder;
        var binaryFeatures = require('./bufferbuilder').binaryFeatures;

        var BinaryPack = {
            unpack: function(data) {
                var unpacker = new Unpacker(data);
                return unpacker.unpack();
            },
            pack: function(data) {
                var packer = new Packer();
                packer.pack(data);
                var buffer = packer.getBuffer();
                return buffer;
            }
        };

        module.exports = BinaryPack;

        function Unpacker(data) {
            // Data is ArrayBuffer
            this.index = 0;
            this.dataBuffer = data;
            this.dataView = new Uint8Array(this.dataBuffer);
            this.length = this.dataBuffer.byteLength;
        }

        Unpacker.prototype.unpack = function() {
            var type = this.unpack_uint8();
            if (type < 0x80) {
                var positive_fixnum = type;
                return positive_fixnum;
            } else if ((type ^ 0xe0) < 0x20) {
                var negative_fixnum = (type ^ 0xe0) - 0x20;
                return negative_fixnum;
            }
            var size;
            if ((size = type ^ 0xa0) <= 0x0f) {
                return this.unpack_raw(size);
            } else if ((size = type ^ 0xb0) <= 0x0f) {
                return this.unpack_string(size);
            } else if ((size = type ^ 0x90) <= 0x0f) {
                return this.unpack_array(size);
            } else if ((size = type ^ 0x80) <= 0x0f) {
                return this.unpack_map(size);
            }
            switch (type) {
                case 0xc0:
                    return null;
                case 0xc1:
                    return undefined;
                case 0xc2:
                    return false;
                case 0xc3:
                    return true;
                case 0xca:
                    return this.unpack_float();
                case 0xcb:
                    return this.unpack_double();
                case 0xcc:
                    return this.unpack_uint8();
                case 0xcd:
                    return this.unpack_uint16();
                case 0xce:
                    return this.unpack_uint32();
                case 0xcf:
                    return this.unpack_uint64();
                case 0xd0:
                    return this.unpack_int8();
                case 0xd1:
                    return this.unpack_int16();
                case 0xd2:
                    return this.unpack_int32();
                case 0xd3:
                    return this.unpack_int64();
                case 0xd4:
                    return undefined;
                case 0xd5:
                    return undefined;
                case 0xd6:
                    return undefined;
                case 0xd7:
                    return undefined;
                case 0xd8:
                    size = this.unpack_uint16();
                    return this.unpack_string(size);
                case 0xd9:
                    size = this.unpack_uint32();
                    return this.unpack_string(size);
                case 0xda:
                    size = this.unpack_uint16();
                    return this.unpack_raw(size);
                case 0xdb:
                    size = this.unpack_uint32();
                    return this.unpack_raw(size);
                case 0xdc:
                    size = this.unpack_uint16();
                    return this.unpack_array(size);
                case 0xdd:
                    size = this.unpack_uint32();
                    return this.unpack_array(size);
                case 0xde:
                    size = this.unpack_uint16();
                    return this.unpack_map(size);
                case 0xdf:
                    size = this.unpack_uint32();
                    return this.unpack_map(size);
            }
        }

        Unpacker.prototype.unpack_uint8 = function() {
            var byte = this.dataView[this.index] & 0xff;
            this.index++;
            return byte;
        };

        Unpacker.prototype.unpack_uint16 = function() {
            var bytes = this.read(2);
            var uint16 =
                ((bytes[0] & 0xff) * 256) + (bytes[1] & 0xff);
            this.index += 2;
            return uint16;
        }

        Unpacker.prototype.unpack_uint32 = function() {
            var bytes = this.read(4);
            var uint32 =
                ((bytes[0] * 256 +
                        bytes[1]) * 256 +
                    bytes[2]) * 256 +
                bytes[3];
            this.index += 4;
            return uint32;
        }

        Unpacker.prototype.unpack_uint64 = function() {
            var bytes = this.read(8);
            var uint64 =
                ((((((bytes[0] * 256 +
                                        bytes[1]) * 256 +
                                    bytes[2]) * 256 +
                                bytes[3]) * 256 +
                            bytes[4]) * 256 +
                        bytes[5]) * 256 +
                    bytes[6]) * 256 +
                bytes[7];
            this.index += 8;
            return uint64;
        }


        Unpacker.prototype.unpack_int8 = function() {
            var uint8 = this.unpack_uint8();
            return (uint8 < 0x80) ? uint8 : uint8 - (1 << 8);
        };

        Unpacker.prototype.unpack_int16 = function() {
            var uint16 = this.unpack_uint16();
            return (uint16 < 0x8000) ? uint16 : uint16 - (1 << 16);
        }

        Unpacker.prototype.unpack_int32 = function() {
            var uint32 = this.unpack_uint32();
            return (uint32 < Math.pow(2, 31)) ? uint32 :
                uint32 - Math.pow(2, 32);
        }

        Unpacker.prototype.unpack_int64 = function() {
            var uint64 = this.unpack_uint64();
            return (uint64 < Math.pow(2, 63)) ? uint64 :
                uint64 - Math.pow(2, 64);
        }

        Unpacker.prototype.unpack_raw = function(size) {
            if (this.length < this.index + size) {
                throw new Error('BinaryPackFailure: index is out of range' +
                    ' ' + this.index + ' ' + size + ' ' + this.length);
            }
            var buf = this.dataBuffer.slice(this.index, this.index + size);
            this.index += size;

            //buf = util.bufferToString(buf);

            return buf;
        }

        Unpacker.prototype.unpack_string = function(size) {
            var bytes = this.read(size);
            var i = 0,
                str = '',
                c, code;
            while (i < size) {
                c = bytes[i];
                if (c < 128) {
                    str += String.fromCharCode(c);
                    i++;
                } else if ((c ^ 0xc0) < 32) {
                    code = ((c ^ 0xc0) << 6) | (bytes[i + 1] & 63);
                    str += String.fromCharCode(code);
                    i += 2;
                } else {
                    code = ((c & 15) << 12) | ((bytes[i + 1] & 63) << 6) |
                        (bytes[i + 2] & 63);
                    str += String.fromCharCode(code);
                    i += 3;
                }
            }
            this.index += size;
            return str;
        }

        Unpacker.prototype.unpack_array = function(size) {
            var objects = new Array(size);
            for (var i = 0; i < size; i++) {
                objects[i] = this.unpack();
            }
            return objects;
        }

        Unpacker.prototype.unpack_map = function(size) {
            var map = {};
            for (var i = 0; i < size; i++) {
                var key = this.unpack();
                var value = this.unpack();
                map[key] = value;
            }
            return map;
        }

        Unpacker.prototype.unpack_float = function() {
            var uint32 = this.unpack_uint32();
            var sign = uint32 >> 31;
            var exp = ((uint32 >> 23) & 0xff) - 127;
            var fraction = (uint32 & 0x7fffff) | 0x800000;
            return (sign == 0 ? 1 : -1) *
                fraction * Math.pow(2, exp - 23);
        }

        Unpacker.prototype.unpack_double = function() {
            var h32 = this.unpack_uint32();
            var l32 = this.unpack_uint32();
            var sign = h32 >> 31;
            var exp = ((h32 >> 20) & 0x7ff) - 1023;
            var hfrac = (h32 & 0xfffff) | 0x100000;
            var frac = hfrac * Math.pow(2, exp - 20) +
                l32 * Math.pow(2, exp - 52);
            return (sign == 0 ? 1 : -1) * frac;
        }

        Unpacker.prototype.read = function(length) {
            var j = this.index;
            if (j + length <= this.length) {
                return this.dataView.subarray(j, j + length);
            } else {
                throw new Error('BinaryPackFailure: read index out of range');
            }
        }

        function Packer() {
            this.bufferBuilder = new BufferBuilder();
        }

        Packer.prototype.getBuffer = function() {
            return this.bufferBuilder.getBuffer();
        }

        Packer.prototype.pack = function(value) {
            var type = typeof(value);
            if (type == 'string') {
                this.pack_string(value);
            } else if (type == 'number') {
                if (Math.floor(value) === value) {
                    this.pack_integer(value);
                } else {
                    this.pack_double(value);
                }
            } else if (type == 'boolean') {
                if (value === true) {
                    this.bufferBuilder.append(0xc3);
                } else if (value === false) {
                    this.bufferBuilder.append(0xc2);
                }
            } else if (type == 'undefined') {
                this.bufferBuilder.append(0xc0);
            } else if (type == 'object') {
                if (value === null) {
                    this.bufferBuilder.append(0xc0);
                } else {
                    var constructor = value.constructor;
                    if (constructor == Array) {
                        this.pack_array(value);
                    } else if (constructor == Blob || constructor == File) {
                        this.pack_bin(value);
                    } else if (constructor == ArrayBuffer) {
                        if (binaryFeatures.useArrayBufferView) {
                            this.pack_bin(new Uint8Array(value));
                        } else {
                            this.pack_bin(value);
                        }
                    } else if ('BYTES_PER_ELEMENT' in value) {
                        if (binaryFeatures.useArrayBufferView) {
                            this.pack_bin(new Uint8Array(value.buffer));
                        } else {
                            this.pack_bin(value.buffer);
                        }
                    } else if (constructor == Object) {
                        this.pack_object(value);
                    } else if (constructor == Date) {
                        this.pack_string(value.toString());
                    } else if (typeof value.toBinaryPack == 'function') {
                        this.bufferBuilder.append(value.toBinaryPack());
                    } else {
                        throw new Error('Type "' + constructor.toString() + '" not yet supported');
                    }
                }
            } else {
                throw new Error('Type "' + type + '" not yet supported');
            }
            this.bufferBuilder.flush();
        }


        Packer.prototype.pack_bin = function(blob) {
            var length = blob.length || blob.byteLength || blob.size;
            if (length <= 0x0f) {
                this.pack_uint8(0xa0 + length);
            } else if (length <= 0xffff) {
                this.bufferBuilder.append(0xda);
                this.pack_uint16(length);
            } else if (length <= 0xffffffff) {
                this.bufferBuilder.append(0xdb);
                this.pack_uint32(length);
            } else {
                throw new Error('Invalid length');
            }
            this.bufferBuilder.append(blob);
        }

        Packer.prototype.pack_string = function(str) {
            var length = utf8Length(str);

            if (length <= 0x0f) {
                this.pack_uint8(0xb0 + length);
            } else if (length <= 0xffff) {
                this.bufferBuilder.append(0xd8);
                this.pack_uint16(length);
            } else if (length <= 0xffffffff) {
                this.bufferBuilder.append(0xd9);
                this.pack_uint32(length);
            } else {
                throw new Error('Invalid length');
            }
            this.bufferBuilder.append(str);
        }

        Packer.prototype.pack_array = function(ary) {
            var length = ary.length;
            if (length <= 0x0f) {
                this.pack_uint8(0x90 + length);
            } else if (length <= 0xffff) {
                this.bufferBuilder.append(0xdc)
                this.pack_uint16(length);
            } else if (length <= 0xffffffff) {
                this.bufferBuilder.append(0xdd);
                this.pack_uint32(length);
            } else {
                throw new Error('Invalid length');
            }
            for (var i = 0; i < length; i++) {
                this.pack(ary[i]);
            }
        }

        Packer.prototype.pack_integer = function(num) {
            if (-0x20 <= num && num <= 0x7f) {
                this.bufferBuilder.append(num & 0xff);
            } else if (0x00 <= num && num <= 0xff) {
                this.bufferBuilder.append(0xcc);
                this.pack_uint8(num);
            } else if (-0x80 <= num && num <= 0x7f) {
                this.bufferBuilder.append(0xd0);
                this.pack_int8(num);
            } else if (0x0000 <= num && num <= 0xffff) {
                this.bufferBuilder.append(0xcd);
                this.pack_uint16(num);
            } else if (-0x8000 <= num && num <= 0x7fff) {
                this.bufferBuilder.append(0xd1);
                this.pack_int16(num);
            } else if (0x00000000 <= num && num <= 0xffffffff) {
                this.bufferBuilder.append(0xce);
                this.pack_uint32(num);
            } else if (-0x80000000 <= num && num <= 0x7fffffff) {
                this.bufferBuilder.append(0xd2);
                this.pack_int32(num);
            } else if (-0x8000000000000000 <= num && num <= 0x7FFFFFFFFFFFFFFF) {
                this.bufferBuilder.append(0xd3);
                this.pack_int64(num);
            } else if (0x0000000000000000 <= num && num <= 0xFFFFFFFFFFFFFFFF) {
                this.bufferBuilder.append(0xcf);
                this.pack_uint64(num);
            } else {
                throw new Error('Invalid integer');
            }
        }

        Packer.prototype.pack_double = function(num) {
            var sign = 0;
            if (num < 0) {
                sign = 1;
                num = -num;
            }
            var exp = Math.floor(Math.log(num) / Math.LN2);
            var frac0 = num / Math.pow(2, exp) - 1;
            var frac1 = Math.floor(frac0 * Math.pow(2, 52));
            var b32 = Math.pow(2, 32);
            var h32 = (sign << 31) | ((exp + 1023) << 20) |
                (frac1 / b32) & 0x0fffff;
            var l32 = frac1 % b32;
            this.bufferBuilder.append(0xcb);
            this.pack_int32(h32);
            this.pack_int32(l32);
        }

        Packer.prototype.pack_object = function(obj) {
            var keys = Object.keys(obj);
            var length = keys.length;
            if (length <= 0x0f) {
                this.pack_uint8(0x80 + length);
            } else if (length <= 0xffff) {
                this.bufferBuilder.append(0xde);
                this.pack_uint16(length);
            } else if (length <= 0xffffffff) {
                this.bufferBuilder.append(0xdf);
                this.pack_uint32(length);
            } else {
                throw new Error('Invalid length');
            }
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    this.pack(prop);
                    this.pack(obj[prop]);
                }
            }
        }

        Packer.prototype.pack_uint8 = function(num) {
            this.bufferBuilder.append(num);
        }

        Packer.prototype.pack_uint16 = function(num) {
            this.bufferBuilder.append(num >> 8);
            this.bufferBuilder.append(num & 0xff);
        }

        Packer.prototype.pack_uint32 = function(num) {
            var n = num & 0xffffffff;
            this.bufferBuilder.append((n & 0xff000000) >>> 24);
            this.bufferBuilder.append((n & 0x00ff0000) >>> 16);
            this.bufferBuilder.append((n & 0x0000ff00) >>> 8);
            this.bufferBuilder.append((n & 0x000000ff));
        }

        Packer.prototype.pack_uint64 = function(num) {
            var high = num / Math.pow(2, 32);
            var low = num % Math.pow(2, 32);
            this.bufferBuilder.append((high & 0xff000000) >>> 24);
            this.bufferBuilder.append((high & 0x00ff0000) >>> 16);
            this.bufferBuilder.append((high & 0x0000ff00) >>> 8);
            this.bufferBuilder.append((high & 0x000000ff));
            this.bufferBuilder.append((low & 0xff000000) >>> 24);
            this.bufferBuilder.append((low & 0x00ff0000) >>> 16);
            this.bufferBuilder.append((low & 0x0000ff00) >>> 8);
            this.bufferBuilder.append((low & 0x000000ff));
        }

        Packer.prototype.pack_int8 = function(num) {
            this.bufferBuilder.append(num & 0xff);
        }

        Packer.prototype.pack_int16 = function(num) {
            this.bufferBuilder.append((num & 0xff00) >> 8);
            this.bufferBuilder.append(num & 0xff);
        }

        Packer.prototype.pack_int32 = function(num) {
            this.bufferBuilder.append((num >>> 24) & 0xff);
            this.bufferBuilder.append((num & 0x00ff0000) >>> 16);
            this.bufferBuilder.append((num & 0x0000ff00) >>> 8);
            this.bufferBuilder.append((num & 0x000000ff));
        }

        Packer.prototype.pack_int64 = function(num) {
            var high = Math.floor(num / Math.pow(2, 32));
            var low = num % Math.pow(2, 32);
            this.bufferBuilder.append((high & 0xff000000) >>> 24);
            this.bufferBuilder.append((high & 0x00ff0000) >>> 16);
            this.bufferBuilder.append((high & 0x0000ff00) >>> 8);
            this.bufferBuilder.append((high & 0x000000ff));
            this.bufferBuilder.append((low & 0xff000000) >>> 24);
            this.bufferBuilder.append((low & 0x00ff0000) >>> 16);
            this.bufferBuilder.append((low & 0x0000ff00) >>> 8);
            this.bufferBuilder.append((low & 0x000000ff));
        }

        function _utf8Replace(m) {
            var code = m.charCodeAt(0);

            if (code <= 0x7ff) return '00';
            if (code <= 0xffff) return '000';
            if (code <= 0x1fffff) return '0000';
            if (code <= 0x3ffffff) return '00000';
            return '000000';
        }

        function utf8Length(str) {
            if (str.length > 600) {
                // Blob method faster for large strings
                return (new Blob([str])).size;
            } else {
                return str.replace(/[^\u0000-\u007F]/g, _utf8Replace).length;
            }
        }

    }, {
        "./bufferbuilder": 11
    }],
    11: [function(require, module, exports) {
        var binaryFeatures = {};
        binaryFeatures.useBlobBuilder = (function() {
            try {
                new Blob([]);
                return false;
            } catch (e) {
                return true;
            }
        })();

        binaryFeatures.useArrayBufferView = !binaryFeatures.useBlobBuilder && (function() {
            try {
                return (new Blob([new Uint8Array([])])).size === 0;
            } catch (e) {
                return true;
            }
        })();

        module.exports.binaryFeatures = binaryFeatures;
        var BlobBuilder = module.exports.BlobBuilder;
        if (typeof window != 'undefined') {
            BlobBuilder = module.exports.BlobBuilder = window.WebKitBlobBuilder ||
                window.MozBlobBuilder || window.MSBlobBuilder || window.BlobBuilder;
        }

        function BufferBuilder() {
            this._pieces = [];
            this._parts = [];
        }

        BufferBuilder.prototype.append = function(data) {
            if (typeof data === 'number') {
                this._pieces.push(data);
            } else {
                this.flush();
                this._parts.push(data);
            }
        };

        BufferBuilder.prototype.flush = function() {
            if (this._pieces.length > 0) {
                var buf = new Uint8Array(this._pieces);
                if (!binaryFeatures.useArrayBufferView) {
                    buf = buf.buffer;
                }
                this._parts.push(buf);
                this._pieces = [];
            }
        };

        BufferBuilder.prototype.getBuffer = function() {
            this.flush();
            if (binaryFeatures.useBlobBuilder) {
                var builder = new BlobBuilder();
                for (var i = 0, ii = this._parts.length; i < ii; i++) {
                    builder.append(this._parts[i]);
                }
                return builder.getBlob();
            } else {
                return new Blob(this._parts);
            }
        };

        module.exports.BufferBuilder = BufferBuilder;

    }, {}],
    12: [function(require, module, exports) {
        var util = require('./util');

        /**
         * Reliable transfer for Chrome Canary DataChannel impl.
         * Author: @michellebu
         */
        function Reliable(dc, debug) {
            if (!(this instanceof Reliable)) return new Reliable(dc);
            this._dc = dc;

            util.debug = debug;

            // Messages sent/received so far.
            // id: { ack: n, chunks: [...] }
            this._outgoing = {};
            // id: { ack: ['ack', id, n], chunks: [...] }
            this._incoming = {};
            this._received = {};

            // Window size.
            this._window = 1000;
            // MTU.
            this._mtu = 500;
            // Interval for setInterval. In ms.
            this._interval = 0;

            // Messages sent.
            this._count = 0;

            // Outgoing message queue.
            this._queue = [];

            this._setupDC();
        };

        // Send a message reliably.
        Reliable.prototype.send = function(msg) {
            // Determine if chunking is necessary.
            var bl = util.pack(msg);
            if (bl.size < this._mtu) {
                this._handleSend(['no', bl]);
                return;
            }

            this._outgoing[this._count] = {
                ack: 0,
                chunks: this._chunk(bl)
            };

            if (util.debug) {
                this._outgoing[this._count].timer = new Date();
            }

            // Send prelim window.
            this._sendWindowedChunks(this._count);
            this._count += 1;
        };

        // Set up interval for processing queue.
        Reliable.prototype._setupInterval = function() {
            // TODO: fail gracefully.

            var self = this;
            this._timeout = setInterval(function() {
                // FIXME: String stuff makes things terribly async.
                var msg = self._queue.shift();
                if (msg._multiple) {
                    for (var i = 0, ii = msg.length; i < ii; i += 1) {
                        self._intervalSend(msg[i]);
                    }
                } else {
                    self._intervalSend(msg);
                }
            }, this._interval);
        };

        Reliable.prototype._intervalSend = function(msg) {
            var self = this;
            msg = util.pack(msg);
            util.blobToBinaryString(msg, function(str) {
                self._dc.send(str);
            });
            if (self._queue.length === 0) {
                clearTimeout(self._timeout);
                self._timeout = null;
                //self._processAcks();
            }
        };

        // Go through ACKs to send missing pieces.
        Reliable.prototype._processAcks = function() {
            for (var id in this._outgoing) {
                if (this._outgoing.hasOwnProperty(id)) {
                    this._sendWindowedChunks(id);
                }
            }
        };

        // Handle sending a message.
        // FIXME: Don't wait for interval time for all messages...
        Reliable.prototype._handleSend = function(msg) {
            var push = true;
            for (var i = 0, ii = this._queue.length; i < ii; i += 1) {
                var item = this._queue[i];
                if (item === msg) {
                    push = false;
                } else if (item._multiple && item.indexOf(msg) !== -1) {
                    push = false;
                }
            }
            if (push) {
                this._queue.push(msg);
                if (!this._timeout) {
                    this._setupInterval();
                }
            }
        };

        // Set up DataChannel handlers.
        Reliable.prototype._setupDC = function() {
            // Handle various message types.
            var self = this;
            this._dc.onmessage = function(e) {
                var msg = e.data;
                var datatype = msg.constructor;
                // FIXME: msg is String until binary is supported.
                // Once that happens, this will have to be smarter.
                if (datatype === String) {
                    var ab = util.binaryStringToArrayBuffer(msg);
                    msg = util.unpack(ab);
                    self._handleMessage(msg);
                }
            };
        };

        // Handles an incoming message.
        Reliable.prototype._handleMessage = function(msg) {
            var id = msg[1];
            var idata = this._incoming[id];
            var odata = this._outgoing[id];
            var data;
            switch (msg[0]) {
                // No chunking was done.
                case 'no':
                    var message = id;
                    if (!!message) {
                        this.onmessage(util.unpack(message));
                    }
                    break;
                    // Reached the end of the message.
                case 'end':
                    data = idata;

                    // In case end comes first.
                    this._received[id] = msg[2];

                    if (!data) {
                        break;
                    }

                    this._ack(id);
                    break;
                case 'ack':
                    data = odata;
                    if (!!data) {
                        var ack = msg[2];
                        // Take the larger ACK, for out of order messages.
                        data.ack = Math.max(ack, data.ack);

                        // Clean up when all chunks are ACKed.
                        if (data.ack >= data.chunks.length) {
                            util.log('Time: ', new Date() - data.timer);
                            delete this._outgoing[id];
                        } else {
                            this._processAcks();
                        }
                    }
                    // If !data, just ignore.
                    break;
                    // Received a chunk of data.
                case 'chunk':
                    // Create a new entry if none exists.
                    data = idata;
                    if (!data) {
                        var end = this._received[id];
                        if (end === true) {
                            break;
                        }
                        data = {
                            ack: ['ack', id, 0],
                            chunks: []
                        };
                        this._incoming[id] = data;
                    }

                    var n = msg[2];
                    var chunk = msg[3];
                    data.chunks[n] = new Uint8Array(chunk);

                    // If we get the chunk we're looking for, ACK for next missing.
                    // Otherwise, ACK the same N again.
                    if (n === data.ack[2]) {
                        this._calculateNextAck(id);
                    }
                    this._ack(id);
                    break;
                default:
                    // Shouldn't happen, but would make sense for message to just go
                    // through as is.
                    this._handleSend(msg);
                    break;
            }
        };

        // Chunks BL into smaller messages.
        Reliable.prototype._chunk = function(bl) {
            var chunks = [];
            var size = bl.size;
            var start = 0;
            while (start < size) {
                var end = Math.min(size, start + this._mtu);
                var b = bl.slice(start, end);
                var chunk = {
                    payload: b
                }
                chunks.push(chunk);
                start = end;
            }
            util.log('Created', chunks.length, 'chunks.');
            return chunks;
        };

        // Sends ACK N, expecting Nth blob chunk for message ID.
        Reliable.prototype._ack = function(id) {
            var ack = this._incoming[id].ack;

            // if ack is the end value, then call _complete.
            if (this._received[id] === ack[2]) {
                this._complete(id);
                this._received[id] = true;
            }

            this._handleSend(ack);
        };

        // Calculates the next ACK number, given chunks.
        Reliable.prototype._calculateNextAck = function(id) {
            var data = this._incoming[id];
            var chunks = data.chunks;
            for (var i = 0, ii = chunks.length; i < ii; i += 1) {
                // This chunk is missing!!! Better ACK for it.
                if (chunks[i] === undefined) {
                    data.ack[2] = i;
                    return;
                }
            }
            data.ack[2] = chunks.length;
        };

        // Sends the next window of chunks.
        Reliable.prototype._sendWindowedChunks = function(id) {
            util.log('sendWindowedChunks for: ', id);
            var data = this._outgoing[id];
            var ch = data.chunks;
            var chunks = [];
            var limit = Math.min(data.ack + this._window, ch.length);
            for (var i = data.ack; i < limit; i += 1) {
                if (!ch[i].sent || i === data.ack) {
                    ch[i].sent = true;
                    chunks.push(['chunk', id, i, ch[i].payload]);
                }
            }
            if (data.ack + this._window >= ch.length) {
                chunks.push(['end', id, ch.length])
            }
            chunks._multiple = true;
            this._handleSend(chunks);
        };

        // Puts together a message from chunks.
        Reliable.prototype._complete = function(id) {
            util.log('Completed called for', id);
            var self = this;
            var chunks = this._incoming[id].chunks;
            var bl = new Blob(chunks);
            util.blobToArrayBuffer(bl, function(ab) {
                self.onmessage(util.unpack(ab));
            });
            delete this._incoming[id];
        };

        // Ups bandwidth limit on SDP. Meant to be called during offer/answer.
        Reliable.higherBandwidthSDP = function(sdp) {
            // AS stands for Application-Specific Maximum.
            // Bandwidth number is in kilobits / sec.
            // See RFC for more info: http://www.ietf.org/rfc/rfc2327.txt

            // Chrome 31+ doesn't want us munging the SDP, so we'll let them have their
            // way.
            var version = navigator.appVersion.match(/Chrome\/(.*?) /);
            if (version) {
                version = parseInt(version[1].split('.').shift());
                if (version < 31) {
                    var parts = sdp.split('b=AS:30');
                    var replace = 'b=AS:102400'; // 100 Mbps
                    if (parts.length > 1) {
                        return parts[0] + replace + parts[1];
                    }
                }
            }

            return sdp;
        };

        // Overwritten, typically.
        Reliable.prototype.onmessage = function(msg) {};

        module.exports.Reliable = Reliable;

    }, {
        "./util": 13
    }],
    13: [function(require, module, exports) {
        var BinaryPack = require('js-binarypack');

        var util = {
            debug: false,

            inherits: function(ctor, superCtor) {
                ctor.super_ = superCtor;
                ctor.prototype = Object.create(superCtor.prototype, {
                    constructor: {
                        value: ctor,
                        enumerable: false,
                        writable: true,
                        configurable: true
                    }
                });
            },
            extend: function(dest, source) {
                for (var key in source) {
                    if (source.hasOwnProperty(key)) {
                        dest[key] = source[key];
                    }
                }
                return dest;
            },
            pack: BinaryPack.pack,
            unpack: BinaryPack.unpack,

            log: function() {
                if (util.debug) {
                    var copy = [];
                    for (var i = 0; i < arguments.length; i++) {
                        copy[i] = arguments[i];
                    }
                    copy.unshift('Reliable: ');
                    console.log.apply(console, copy);
                }
            },

            setZeroTimeout: (function(global) {
                var timeouts = [];
                var messageName = 'zero-timeout-message';

                // Like setTimeout, but only takes a function argument.  There's
                // no time argument (always zero) and no arguments (you have to
                // use a closure).
                function setZeroTimeoutPostMessage(fn) {
                    timeouts.push(fn);
                    global.postMessage(messageName, '*');
                }

                function handleMessage(event) {
                    if (event.source == global && event.data == messageName) {
                        if (event.stopPropagation) {
                            event.stopPropagation();
                        }
                        if (timeouts.length) {
                            timeouts.shift()();
                        }
                    }
                }
                if (global.addEventListener) {
                    global.addEventListener('message', handleMessage, true);
                } else if (global.attachEvent) {
                    global.attachEvent('onmessage', handleMessage);
                }
                return setZeroTimeoutPostMessage;
            }(this)),

            blobToArrayBuffer: function(blob, cb) {
                var fr = new FileReader();
                fr.onload = function(evt) {
                    cb(evt.target.result);
                };
                fr.readAsArrayBuffer(blob);
            },
            blobToBinaryString: function(blob, cb) {
                var fr = new FileReader();
                fr.onload = function(evt) {
                    cb(evt.target.result);
                };
                fr.readAsBinaryString(blob);
            },
            binaryStringToArrayBuffer: function(binary) {
                var byteArray = new Uint8Array(binary.length);
                for (var i = 0; i < binary.length; i++) {
                    byteArray[i] = binary.charCodeAt(i) & 0xff;
                }
                return byteArray.buffer;
            },
            randomToken: function() {
                return Math.random().toString(36).substr(2);
            }
        };

        module.exports = util;

    }, {
        "js-binarypack": 10
    }]
}, {}, [3]);