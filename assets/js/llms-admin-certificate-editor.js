!function(){"use strict";var e={n:function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},d:function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.plugins,r=window.wp.coreData,n=window.wp.data,i=window.wp.blocks,a=window.wp.domReady,o=e.n(a),l=window.wp.editor,s=window.wp.blockEditor;let c=!1;function u(){const{getCurrentPostAttribute:e,getEditedPostAttribute:t,getCurrentPostType:a}=(0,n.select)(l.store),o=t("certificate_background"),u=t("certificate_margins"),d=t("certificate_width"),m=t("certificate_height"),f=t("certificate_unit"),p=t("certificate_orientation"),h=e("content"),g=t("content"),y=document.querySelector(".block-editor-block-list__layout.is-root-container");if(y){const e="portrait"===p?d:m,t="portrait"===p?m:d,i=u.map((e=>`${e}%`)).join(" ");y.style.backgroundImage=`url( '${function(){const e=function(){const{getEditedPostAttribute:e}=(0,n.select)(l.store),{getMedia:t}=(0,n.select)(r.store),i=e("featured_media");return i?t(i):{}}(),{default_image:t}=window.llms.certificates;if(void 0===e)return null;const{source_url:i}=e;return i||t}()}' )`,y.style.backgroundSize=`${e}${f} ${t}${f}`,y.style.backgroundRepeat="no-repeat",y.style.marginLeft="auto",y.style.marginRight="auto",y.style.padding=i,y.style.width=`${e}${f}`,y.style.minHeight=`${t}${f}`,y.style.boxSizing="border-box"}const b=document.querySelector(".editor-styles-wrapper");if(b&&(b.style.backgroundColor=o),"llms_my_certificate"===a()){!function(e,t){const{isSavingPost:r}=(0,n.select)(l.store),a=r();if(a)c=!0;else if(!a&&c){c=!1;const r=/(\{[A-Za-z_].*\})|(\[llms-user .+]|(<!-- wp:block .+? \/-->))/g,a=e.match(r),o=t.match(r);null==o||!o.length||null!=a&&a.length||function(e){const{replaceBlocks:t}=(0,n.dispatch)(s.store),{savePost:r}=(0,n.dispatch)(l.store),{getBlocks:a}=(0,n.select)(s.store);t(a().map((e=>{let{clientId:t}=e;return t})),(0,i.rawHandler)({HTML:e})),r()}(e)}}(h,g);const e=document.querySelector(".edit-post-visual-editor__post-title-wrapper");e&&(e.style.display=function(){const{getInserterItems:e}=(0,n.select)(s.store),{isDisabled:t}=e().find((e=>{let{name:t}=e;return"llms/certificate-title"===t}));return t}()?"none":"initial")}}o()((()=>{!function(){const e=document.createElement("style");e.type="text/css",e.appendChild(document.createTextNode(".editor-styles-wrapper .wp-block { max-width: 100% !important; }")),e.appendChild(document.createTextNode(".editor-styles-wrapper [data-block], .wp-block { margin-top: 0 !important; margin-bottom: 0 !important }")),document.head.appendChild(e)}(),(0,n.subscribe)(u)}));var d=window.wp.hooks,m=window.wp.i18n;const f=(0,n.subscribe)((()=>{const{getCurrentPostType:e}=(0,n.select)(l.store),t=e();var r;null!==t&&(r="llms_my_certificate"===t,f(),r&&(0,d.addFilter)("i18n.gettext_default","llms/certificates",(function(e){return"Move to trash"===e?(0,m.__)("Delete permanently","lifterlms"):e})))}));var p=window.wp.element,h=window.wp.components,g=window.wp.richText,y=window.llms.components,b=window.llms.icons;function v(e){let{closeModal:t,onChange:r,value:n}=e;const{merge_codes:i}=window.llms.certificates;return Object.entries(i).map(((e,i)=>{let[a,o]=e;return(0,p.createElement)("tr",{key:i},(0,p.createElement)("td",{style:{textAlign:"left"}},o),(0,p.createElement)("td",null,(0,p.createElement)(y.CopyButton,{buttonText:a,copyText:a,onCopy:t,isLink:!0})),(0,p.createElement)("td",null,(0,p.createElement)(h.Button,{isSecondary:!0,isSmall:!0,onClick:()=>{t(),r((0,g.insert)(n,a))}},(0,m.__)("Insert","lifterlms"))))}))}(0,g.registerFormatType)("llms/certificate-merge-codes",{title:(0,m.__)("LifterLMS Certificate Merge Codes","lifterlms"),tagName:"span",className:"llms-cert-mc-wrap",edit:function(e){const[t,r]=(0,p.useState)(!1),n=()=>r(!1),{value:i,onChange:a}=e;return(0,p.createElement)(p.Fragment,null,(0,p.createElement)(s.RichTextToolbarButton,{icon:(0,p.createElement)(b.Icon,{icon:b.lifterlms}),title:(0,m.__)("Merge Codes","lifterlms"),onClick:()=>r(!0)}),t&&(0,p.createElement)(h.Modal,{className:"llms-certificate-merge-codes-modal",title:(0,m.__)("LifterLMS Certificate Merge Codes","lifterlms"),onRequestClose:n},(0,p.createElement)("div",{className:"llms-certificate-merge-codes-modal--main"},(0,p.createElement)("table",{className:"llms-table zebra",style:{width:"480px"}},(0,p.createElement)("thead",null,(0,p.createElement)("tr",null,(0,p.createElement)("th",{style:{textAlign:"left"}},(0,m.__)("Name","lifterlms")),(0,p.createElement)("th",null,(0,m.__)("Merge code","lifterlms")),(0,p.createElement)("th",null,(0,m.__)("Insert","lifterlms")))),(0,p.createElement)("tbody",null,(0,p.createElement)(v,{closeModal:n,onChange:a,value:i}))))))}});const w=(0,n.subscribe)((()=>{const e=new URLSearchParams(window.location.search);if(1!==parseInt(e.get("llms-migrate-legacy-certificate")))return _(!1);0!==k().length&&_(!0)}));function _(e){w(),e&&function(){const e=k().filter((e=>{let{name:t}=e;return"core/freeform"===t}));if(0===e.length)return;const{replaceBlocks:t}=(0,n.dispatch)(s.store),{savePost:r}=(0,n.dispatch)(l.store);e.forEach((e=>{t(e.clientId,(0,i.rawHandler)({HTML:(0,i.serialize)(e)}))})),r()}()}function k(){const{getBlocks:e}=(0,n.select)(s.store);return e()}(0,d.addFilter)("blocks.registerBlockType","llms/certificate-editor/columns-block",(function(e,t){return"core/columns"===t&&(e.variations=e.variations.map((e=>{const{attributes:t={}}=e;return e.attributes={...t,isStackedOnMobile:!1},e}))),e}));var C=window.wp.notices,x=window.wp.url;o()((()=>{if("1"!==(0,x.getQueryArg)(window.location.href,"newAwardMsg"))return;const{createSuccessNotice:e}=(0,n.dispatch)(C.store);e((0,m.__)("The certificate award has been created as a draft.","lifterlms"))}));var E=window.wp.compose,S=window.wp.editPost;function P(e,t){const{editPost:r}=(0,n.dispatch)(l.store),i={};i[`certificate_${e}`]=t,r(i)}function T(){let e=(0,s.useSetting)("color.palette");return e.length||(e=window.llms.certificates.colors),e.map((e=>{const{color:t}=e;return{...e,color:t.startsWith("#")?t.toLowerCase():t}}))}function A(e){let{background:t}=e;const[r,n]=(0,p.useState)(t);return(0,p.createElement)(h.BaseControl,{label:(0,m.__)("Background Color","lifterlms"),id:"llms-certificate-control--background-color"},(0,p.createElement)(h.ColorPalette,{colors:T(),onChange:e=>{n(e),P("background",e)},value:r,clearable:!1}))}var $=window.React;function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},I.apply(this,arguments)}var M=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}},z=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,O=M((function(e){return z.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91})),R=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),L=Math.abs,N=String.fromCharCode,B=Object.assign;function q(e){return e.trim()}function U(e,t,r){return e.replace(t,r)}function j(e,t){return e.indexOf(t)}function F(e,t){return 0|e.charCodeAt(t)}function D(e,t,r){return e.slice(t,r)}function H(e){return e.length}function W(e){return e.length}function G(e,t){return t.push(e),e}var V=1,X=1,Q=0,Y=0,Z=0,K="";function J(e,t,r,n,i,a,o){return{value:e,root:t,parent:r,type:n,props:i,children:a,line:V,column:X,length:o,return:""}}function ee(e,t){return B(J("",null,null,"",null,null,0),e,{length:-e.length},t)}function te(){return Z=Y>0?F(K,--Y):0,X--,10===Z&&(X=1,V--),Z}function re(){return Z=Y<Q?F(K,Y++):0,X++,10===Z&&(X=1,V++),Z}function ne(){return F(K,Y)}function ie(){return Y}function ae(e,t){return D(K,e,t)}function oe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function le(e){return V=X=1,Q=H(K=e),Y=0,[]}function se(e){return K="",e}function ce(e){return q(ae(Y-1,me(91===e?e+2:40===e?e+1:e)))}function ue(e){for(;(Z=ne())&&Z<33;)re();return oe(e)>2||oe(Z)>3?"":" "}function de(e,t){for(;--t&&re()&&!(Z<48||Z>102||Z>57&&Z<65||Z>70&&Z<97););return ae(e,ie()+(t<6&&32==ne()&&32==re()))}function me(e){for(;re();)switch(Z){case e:return Y;case 34:case 39:34!==e&&39!==e&&me(Z);break;case 40:41===e&&me(e);break;case 92:re()}return Y}function fe(e,t){for(;re()&&e+Z!==57&&(e+Z!==84||47!==ne()););return"/*"+ae(t,Y-1)+"*"+N(47===e?e:re())}function pe(e){for(;!oe(ne());)re();return ae(e,Y)}var he="-ms-",ge="-moz-",ye="-webkit-",be="comm",ve="rule",we="decl",_e="@keyframes";function ke(e,t){for(var r="",n=W(e),i=0;i<n;i++)r+=t(e[i],i,e,t)||"";return r}function Ce(e,t,r,n){switch(e.type){case"@import":case we:return e.return=e.return||e.value;case be:return"";case _e:return e.return=e.value+"{"+ke(e.children,n)+"}";case ve:e.value=e.props.join(",")}return H(r=ke(e.children,n))?e.return=e.value+"{"+r+"}":""}function xe(e,t){switch(function(e,t){return(((t<<2^F(e,0))<<2^F(e,1))<<2^F(e,2))<<2^F(e,3)}(e,t)){case 5103:return ye+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ye+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+e+ge+e+he+e+e;case 6828:case 4268:return ye+e+he+e+e;case 6165:return ye+e+he+"flex-"+e+e;case 5187:return ye+e+U(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return ye+e+he+"flex-item-"+U(e,/flex-|-self/,"")+e;case 4675:return ye+e+he+"flex-line-pack"+U(e,/align-content|flex-|-self/,"")+e;case 5548:return ye+e+he+U(e,"shrink","negative")+e;case 5292:return ye+e+he+U(e,"basis","preferred-size")+e;case 6060:return ye+"box-"+U(e,"-grow","")+ye+e+he+U(e,"grow","positive")+e;case 4554:return ye+U(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return U(U(U(e,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),e,"")+e;case 5495:case 3959:return U(e,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return U(U(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+ye+e+e;case 4095:case 3583:case 4068:case 2532:return U(e,/(.+)-inline(.+)/,ye+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(H(e)-1-t>6)switch(F(e,t+1)){case 109:if(45!==F(e,t+4))break;case 102:return U(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+ge+(108==F(e,t+3)?"$3":"$2-$3"))+e;case 115:return~j(e,"stretch")?xe(U(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==F(e,t+1))break;case 6444:switch(F(e,H(e)-3-(~j(e,"!important")&&10))){case 107:return U(e,":",":"+ye)+e;case 101:return U(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ye+(45===F(e,14)?"inline-":"")+"box$3$1"+ye+"$2$3$1"+he+"$2box$3")+e}break;case 5936:switch(F(e,t+11)){case 114:return ye+e+he+U(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ye+e+he+U(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ye+e+he+U(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ye+e+he+e+e}return e}function Ee(e){return se(Se("",null,null,null,[""],e=le(e),0,[0],e))}function Se(e,t,r,n,i,a,o,l,s){for(var c=0,u=0,d=o,m=0,f=0,p=0,h=1,g=1,y=1,b=0,v="",w=i,_=a,k=n,C=v;g;)switch(p=b,b=re()){case 40:if(108!=p&&58==C.charCodeAt(d-1)){-1!=j(C+=U(ce(b),"&","&\f"),"&\f")&&(y=-1);break}case 34:case 39:case 91:C+=ce(b);break;case 9:case 10:case 13:case 32:C+=ue(p);break;case 92:C+=de(ie()-1,7);continue;case 47:switch(ne()){case 42:case 47:G(Te(fe(re(),ie()),t,r),s);break;default:C+="/"}break;case 123*h:l[c++]=H(C)*y;case 125*h:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+u:f>0&&H(C)-d&&G(f>32?Ae(C+";",n,r,d-1):Ae(U(C," ","")+";",n,r,d-2),s);break;case 59:C+=";";default:if(G(k=Pe(C,t,r,c,u,i,l,v,w=[],_=[],d),a),123===b)if(0===u)Se(C,t,k,k,w,a,d,l,_);else switch(m){case 100:case 109:case 115:Se(e,k,k,n&&G(Pe(e,k,k,0,0,i,l,v,i,w=[],d),_),i,_,d,l,n?w:_);break;default:Se(C,k,k,k,[""],_,0,l,_)}}c=u=f=0,h=y=1,v=C="",d=o;break;case 58:d=1+H(C),f=p;default:if(h<1)if(123==b)--h;else if(125==b&&0==h++&&125==te())continue;switch(C+=N(b),b*h){case 38:y=u>0?1:(C+="\f",-1);break;case 44:l[c++]=(H(C)-1)*y,y=1;break;case 64:45===ne()&&(C+=ce(re())),m=ne(),u=d=H(v=C+=pe(ie())),b++;break;case 45:45===p&&2==H(C)&&(h=0)}}return a}function Pe(e,t,r,n,i,a,o,l,s,c,u){for(var d=i-1,m=0===i?a:[""],f=W(m),p=0,h=0,g=0;p<n;++p)for(var y=0,b=D(e,d+1,d=L(h=o[p])),v=e;y<f;++y)(v=q(h>0?m[y]+" "+b:U(b,/&\f/g,m[y])))&&(s[g++]=v);return J(e,t,r,0===i?ve:l,s,c,u)}function Te(e,t,r){return J(e,t,r,be,N(Z),D(e,2,-2),0)}function Ae(e,t,r,n){return J(e,t,r,we,D(e,0,n),D(e,n+1,-1),n)}var $e=function(e,t,r){for(var n=0,i=0;n=i,i=ne(),38===n&&12===i&&(t[r]=1),!oe(i);)re();return ae(e,Y)},Ie=new WeakMap,Me=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||Ie.get(r))&&!n){Ie.set(e,!0);for(var i=[],a=function(e,t){return se(function(e,t){var r=-1,n=44;do{switch(oe(n)){case 0:38===n&&12===ne()&&(t[r]=1),e[r]+=$e(Y-1,t,r);break;case 2:e[r]+=ce(n);break;case 4:if(44===n){e[++r]=58===ne()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=N(n)}}while(n=re());return e}(le(e),t))}(t,i),o=r.props,l=0,s=0;l<a.length;l++)for(var c=0;c<o.length;c++,s++)e.props[s]=i[l]?a[l].replace(/&\f/g,o[c]):o[c]+" "+a[l]}}},ze=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},Oe=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case we:e.return=xe(e.value,e.length);break;case _e:return ke([ee(e,{value:U(e.value,"@","@"+ye)})],n);case ve:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(t)){case":read-only":case":read-write":return ke([ee(e,{props:[U(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return ke([ee(e,{props:[U(t,/:(plac\w+)/,":-webkit-input-$1")]}),ee(e,{props:[U(t,/:(plac\w+)/,":-moz-$1")]}),ee(e,{props:[U(t,/:(plac\w+)/,he+"input-$1")]})],n)}return""}))}}],Re=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var n,i,a=e.stylisPlugins||Oe,o={},l=[];n=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)o[t[r]]=!0;l.push(e)}));var s,c,u,d,m=[Ce,(d=function(e){s.insert(e)},function(e){e.root||(e=e.return)&&d(e)})],f=(c=[Me,ze].concat(a,m),u=W(c),function(e,t,r,n){for(var i="",a=0;a<u;a++)i+=c[a](e,t,r,n)||"";return i});i=function(e,t,r,n){s=r,ke(Ee(e?e+"{"+t.styles+"}":t.styles),f),n&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new R({key:t,container:n,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:i};return p.sheet.hydrate(l),p},Le=function(e){for(var t,r=0,n=0,i=e.length;i>=4;++n,i-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(i){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},Ne={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Be=/[A-Z]|^ms/g,qe=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ue=function(e){return 45===e.charCodeAt(1)},je=function(e){return null!=e&&"boolean"!=typeof e},Fe=M((function(e){return Ue(e)?e:e.replace(Be,"-$&").toLowerCase()})),De=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(qe,(function(e,t,r){return We={name:t,styles:r,next:We},t}))}return 1===Ne[e]||Ue(e)||"number"!=typeof t||0===t?t:t+"px"};function He(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return We={name:r.name,styles:r.styles,next:We},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)We={name:n.name,styles:n.styles,next:We},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var i=0;i<r.length;i++)n+=He(e,t,r[i])+";";else for(var a in r){var o=r[a];if("object"!=typeof o)null!=t&&void 0!==t[o]?n+=a+"{"+t[o]+"}":je(o)&&(n+=Fe(a)+":"+De(a,o)+";");else if(!Array.isArray(o)||"string"!=typeof o[0]||null!=t&&void 0!==t[o[0]]){var l=He(e,t,o);switch(a){case"animation":case"animationName":n+=Fe(a)+":"+l+";";break;default:n+=a+"{"+l+"}"}}else for(var s=0;s<o.length;s++)je(o[s])&&(n+=Fe(a)+":"+De(a,o[s])+";")}return n}(e,t,r);case"function":if(void 0!==e){var i=We,a=r(e);return We=i,He(e,t,a)}}if(null==t)return r;var o=t[r];return void 0!==o?o:r}var We,Ge=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Ve=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n=!0,i="";We=void 0;var a=e[0];null==a||void 0===a.raw?(n=!1,i+=He(r,t,a)):i+=a[0];for(var o=1;o<e.length;o++)i+=He(r,t,e[o]),n&&(i+=a[o]);Ge.lastIndex=0;for(var l,s="";null!==(l=Ge.exec(i));)s+="-"+l[1];return{name:Le(i)+s,styles:i,next:We}},Xe=!!$.useInsertionEffect&&$.useInsertionEffect,Qe=Xe||function(e){return e()},Ye=(Xe||$.useLayoutEffect,(0,$.createContext)("undefined"!=typeof HTMLElement?Re({key:"css"}):null));Ye.Provider;var Ze=function(e){return(0,$.forwardRef)((function(t,r){var n=(0,$.useContext)(Ye);return e(t,n,r)}))},Ke=(0,$.createContext)({});function Je(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var et=function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)},tt=O,rt=function(e){return"theme"!==e},nt=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?tt:rt},it=function(e,t,r){var n;if(t){var i=t.shouldForwardProp;n=e.__emotion_forwardProp&&i?function(t){return e.__emotion_forwardProp(t)&&i(t)}:i}return"function"!=typeof n&&r&&(n=e.__emotion_forwardProp),n},at=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return et(t,r,n),Qe((function(){return function(e,t,r){et(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var i=t;do{e.insert(t===i?"."+n:"",i,e.sheet,!0),i=i.next}while(void 0!==i)}}(t,r,n)})),null},ot=function e(t,r){var n,i,a=t.__emotion_real===t,o=a&&t.__emotion_base||t;void 0!==r&&(n=r.label,i=r.target);var l=it(t,r,a),s=l||nt(o),c=!s("as");return function(){var u=arguments,d=a&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==n&&d.push("label:"+n+";"),null==u[0]||void 0===u[0].raw)d.push.apply(d,u);else{d.push(u[0][0]);for(var m=u.length,f=1;f<m;f++)d.push(u[f],u[0][f])}var p=Ze((function(e,t,r){var n=c&&e.as||o,a="",u=[],m=e;if(null==e.theme){for(var f in m={},e)m[f]=e[f];m.theme=(0,$.useContext)(Ke)}"string"==typeof e.className?a=Je(t.registered,u,e.className):null!=e.className&&(a=e.className+" ");var p=Ve(d.concat(u),t.registered,m);a+=t.key+"-"+p.name,void 0!==i&&(a+=" "+i);var h=c&&void 0===l?nt(n):s,g={};for(var y in e)c&&"as"===y||h(y)&&(g[y]=e[y]);return g.className=a,g.ref=r,(0,$.createElement)($.Fragment,null,(0,$.createElement)(at,{cache:t,serialized:p,isStringTag:"string"==typeof n}),(0,$.createElement)(n,g))}));return p.displayName=void 0!==n?n:"Styled("+("string"==typeof o?o:o.displayName||o.name||"Component")+")",p.defaultProps=t.defaultProps,p.__emotion_real=p,p.__emotion_base=o,p.__emotion_styles=d,p.__emotion_forwardProp=l,Object.defineProperty(p,"toString",{value:function(){return"."+i}}),p.withComponent=function(t,n){return e(t,I({},r,n,{shouldForwardProp:it(p,n,!0)})).apply(void 0,d)},p}}.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){ot[e]=ot(e)}));var lt=ot;const st=lt(h.TextControl)`
	& .components-base-control__field {
		position: relative;

		&:hover:after,
		&:focus-within:after {
		    right: 25px;
		}

		&:after {
			content: '%';
			font-size: 85%;
			pointer-events: none;
			position: absolute;
			right: 6px;
			top: 6px;
			transition: right 0.05s ease-in-out;
		}
	}
`;function ct(e){let{margin:t,index:r,editMargins:n}=e;const[i,a]=(0,p.useState)(t),o=["top","right","bottom","left"][r];return(0,p.createElement)("div",{style:{flex:1}},(0,p.createElement)(st,{id:`llms-certificate-control--margin--${o}`,value:i,type:"number",onChange:e=>{n(e,r,a)}}),(0,p.createElement)("em",{style:{display:"block",marginLeft:"4px",marginTop:"-8px"}},function(e){return[(0,m.__)("Top","lifterlms"),(0,m.__)("Right","lifterlms"),(0,m.__)("Bottom","lifterlms"),(0,m.__)("Left","lifterlms")][e]}(r)))}function ut(e){let{margins:t}=e;const r=(e,r,n)=>{const i=[...t];i[r]=e,n(e),P("margins",i)};return(0,p.createElement)(h.BaseControl,{label:(0,m.__)("Inner Margins","lifterlms"),id:"llms-certificate-margins-control"},(0,p.createElement)("div",{style:{display:"flex"}},t.map(((e,t)=>(0,p.createElement)(ct,{key:t,margin:e,index:t,editMargins:r})))))}function dt(e){let{orientation:t}=e;const{orientations:r}=window.llms.certificates,n=Object.entries(r).map((e=>{let[t,r]=e;return{value:t,label:r}}));return(0,p.createElement)(y.ButtonGroupControl,{id:"llms-certificate-orientation-control",label:(0,m.__)("Orientation","lifterlms"),selected:t,options:n,onClick:e=>P("orientation",e)})}function mt(e){let{sequentialId:t}=e;const[r,n]=(0,p.useState)(t);let{minSequentialId:i}=window.llms.certificates;return i||(i=t,window.llms.certificates.minSequentialId=i),(0,p.createElement)(h.TextControl,{id:"llms-certificate-title-control",label:(0,m.__)("Next Sequential ID","lifterlms"),value:r,type:"number",step:"1",min:i,onChange:e=>{n(e),P("sequential_id",e)},help:(0,m.__)("Used for the {sequential_id} merge code when generating a certificate from this template.","lifterlms")})}function ft(e){let{name:t,width:r,height:n,unit:i}=e;const{units:a}=window.llms.certificates,{symbol:o}=a[i]||{};return(0,m.sprintf)("%1$s (%2$s%4$s x %3$s%4$s)",t,r,n,o)}function pt(e){let{width:t,height:r,unit:n}=e;const[i,a]=(0,p.useState)(t),[o,l]=(0,p.useState)(r),[s,c]=(0,p.useState)(n);return(0,p.createElement)("div",{style:{display:"flex"}},(0,p.createElement)("div",{style:{flex:1}},(0,p.createElement)(h.TextControl,{id:"llms-certificate-control--size--custom-width",label:(0,m.__)("Custom Size Width","lifterlms"),placeholder:(0,m.__)("Width","lifterlms"),type:"number",value:i,hideLabelFromVision:!0,onChange:e=>{a(e),P("width",e)}})),(0,p.createElement)("div",{style:{flex:1}},(0,p.createElement)(h.TextControl,{id:"llms-certificate-control--size--custom-height",label:(0,m.__)("Custom Size Height","lifterlms"),placeholder:(0,m.__)("Height","lifterlms"),type:"number",value:o,hideLabelFromVision:!0,onChange:e=>{l(e),P("height",e)}})),(0,p.createElement)("div",{style:{flex:2}},(0,p.createElement)(h.SelectControl,{id:"llms-certificate-control--size--custom-unit",label:(0,m.__)("Custom Size Dimension","lifterlms"),hideLabelFromVision:!0,value:s,onChange:e=>{c(e),P("unit",e)},options:[{value:"in",label:(0,m.__)("in (Inches)","lifterlms")},{value:"mm",label:(0,m.__)("mm (Millimeters)","lifterlms")}]})))}function ht(e){let{size:t,width:r,height:n,unit:i}=e;const{sizes:a}=window.llms.certificates,o=Object.entries(a).map((e=>{let[t,r]=e;return{value:t,label:ft(r)}})),[l,s]=(0,p.useState)(t);return o.push({value:"CUSTOM",label:(0,m._x)("Custom","certificate sizing option","lifterlms")}),(0,p.createElement)(p.Fragment,null,(0,p.createElement)(h.SelectControl,{id:"llms-certificate-control--size",label:(0,m.__)("Size","lifterlms"),value:l,options:o,onChange:e=>{if(s(e),P("size",e),"CUSTOM"!==e){const t=a[e];P("unit",t.unit),P("width",t.width),P("height",t.height)}}}),"CUSTOM"===l&&(0,p.createElement)(pt,{editCertificate:P,width:r,height:n,unit:i}))}function gt(e){let{children:t}=e;const{getCurrentPostType:r}=(0,n.useSelect)(l.store),{getInserterItems:i}=(0,n.useSelect)(s.store);if("llms_certificate"!==r())return null;const{isDisabled:a}=i().find((e=>{let{name:t}=e;return"llms/certificate-title"===t}));return a?null:t}function yt(e){let{title:t}=e;return(0,p.createElement)(h.TextControl,{id:"llms-certificate-title-control",label:(0,m.__)("Title","lifterlms"),value:t,onChange:e=>P("title",e),help:(0,m.__)("Used as the title for certificates generated from this template.","lifterlms")})}const bt=(0,n.withSelect)((e=>{const{getEditedPostAttribute:t}=e(l.store);return{type:t("type"),title:t("certificate_title"),sequentialId:t("certificate_sequential_id"),background:t("certificate_background"),height:t("certificate_height"),margins:t("certificate_margins"),orientation:t("certificate_orientation"),size:t("certificate_size"),unit:t("certificate_unit"),width:t("certificate_width")}}));var vt=(0,E.compose)([bt])((function(e){let{type:t,title:r,sequentialId:n,background:i,height:a,margins:o,orientation:l,size:s,unit:c,width:u}=e;return(0,p.createElement)(S.PluginDocumentSettingPanel,{className:"llms-certificate-doc-settings",name:"llms-certificate-doc-settings",title:(0,m.__)("Settings","lifterlms"),opened:!0},(0,p.createElement)(gt,null,(0,p.createElement)(yt,{title:r}),(0,p.createElement)("br",null)),(0,p.createElement)(ht,{size:s,width:u,height:a,unit:c}),(0,p.createElement)("br",null),(0,p.createElement)(dt,{orientation:l}),(0,p.createElement)("br",null),(0,p.createElement)(ut,{margins:o,unit:c}),(0,p.createElement)("br",null),(0,p.createElement)(A,{background:i}),"llms_certificate"===t&&(0,p.createElement)(p.Fragment,null,(0,p.createElement)("br",null),(0,p.createElement)(mt,{sequentialId:n})))}));function wt(e){let{postType:t,children:r}=e;return t&&"llms_certificate"===t?r:null}var _t=window.llms["components/src/search-control"],kt=window.llms.utils;function Ct(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;const t={post_type:"llms_my_certificate"};return e&&(t.sid=e),(0,x.addQueryArgs)(`${(0,kt.getAdminUrl)()}/post-new.php`,t)}function xt(e){let{modalTitle:t=(0,m.__)("Award a New Certificate","lifterlms"),buttonLabel:i=(0,m.__)("Award","lifterlms"),isDisabled:a=!1,enableScratch:o=!0,selectStudent:l=!0,selectTemplate:s=!0,studentId:c=null,templateId:u=null}=e;const[d,f]=(0,p.useState)(!1),[g,y]=(0,p.useState)(!1),[b,v]=(0,p.useState)(c),[w,_]=(0,p.useState)(u),k=()=>f(!1),C=b&&w;return(0,p.createElement)(p.Fragment,null,d&&(0,p.createElement)(h.Modal,{title:t,style:{maxWidth:"420px"},onRequestClose:k},(0,p.createElement)("p",null,function(e,t){let r="";return e&&t?r=(0,m.__)("Create a new certificate award from the selected template for the selected student.","lifterlms"):e&&!t?r=(0,m.__)("Create a new certificate award from this template for the selected student.","lifterlms"):!e&&t&&(r=(0,m.__)("Create a new certificate award from the selected template for this student.","lifterlms")),r}(l,s)),l&&(0,p.createElement)(_t.UserSearchControl,{isClearable:!0,label:(0,m.__)("Award to","lifterlms"),selectedValue:c?[c]:[],onUpdate:e=>{const t=(null==e?void 0:e.id)||null;v(t)}}),s&&(0,p.createElement)(_t.PostSearchControl,{isClearable:!0,postType:"llms_certificate",label:(0,m.__)("Template","lifterlms"),placeholder:(0,m.__)("Search for a certificate template…","lifterlms"),selectedValue:u?[u]:[],onUpdate:e=>{const t=(null==e?void 0:e.id)||null;_(t)}}),(0,p.createElement)("div",{style:{textAlign:"right",padding:"24px 32px 0",margin:"24px -32px 0",borderTop:"1px solid #ddd"}},(0,p.createElement)(h.Button,{style:{marginRight:"5px"},disabled:!C,isBusy:g,variant:"primary",onClick:()=>{y(!0),function(e,t){const{saveEntityRecord:i}=(0,n.dispatch)(r.store);return i("postType","llms_my_certificate",{author:e,certificate_template:t,status:"draft"})}(b,w).then((e=>{let{id:t}=e;var r;window.location=(r=t,(0,x.addQueryArgs)(`${(0,kt.getAdminUrl)()}/post.php`,{post:r,action:"edit",newAwardMsg:1}))}))}},(0,m.__)("Create Draft")),o&&(0,p.createElement)(h.Button,{style:{marginRight:"5px"},variant:"secondary",href:Ct(b)},(0,m.__)("Start from Scratch","lifterlms")),(0,p.createElement)(h.Button,{variant:"tertiary",onClick:k},(0,m.__)("Cancel","lifterlms")))),(0,p.createElement)(h.Button,{disabled:a,variant:"secondary",onClick:()=>f(!0)},i))}function Et(e){let{postId:t,postType:r,isSaving:n,isPublished:i}=e;return(0,p.createElement)(wt,{postType:r},(0,p.createElement)(xt,{enableScratch:!1,selectTemplate:!1,templateId:t,isDisabled:n||!i}))}function St(e){let{children:t}=e;const{getCurrentPost:r}=(0,n.useSelect)(l.store),i=r(),{type:a,certificate_template:o}=i;return a&&("llms_certificate"===a||"llms_my_certificate"===a&&0===o)?t:null}function Pt(e){let{isSaving:t,isPublished:r}=e;const[a,o]=(0,p.useState)(!1),c=()=>o(!1);let u=(0,m.__)("Are you sure you wish to replace the certificate content with the original default layout? This action cannot be undone!","lifterlms");return r&&(u=(0,m.__)("Are you sure you wish to unpublish the certificate and replace it's content with the original default layout? This action cannot be undone!","lifterlms")),(0,p.createElement)(St,null,a&&(0,p.createElement)(h.Modal,{title:(0,m.__)("Confirm template reset","lifterlms"),style:{maxWidth:"360px"},onRequestClose:c},(0,p.createElement)("p",null,u),(0,p.createElement)("div",{style:{textAlign:"right"}},(0,p.createElement)(h.Button,{variant:"tertiary",onClick:c},(0,m.__)("Cancel","lifterlms"))," ",(0,p.createElement)(h.Button,{variant:"primary",onClick:()=>function(e,t){const{getBlocks:r,getTemplate:a}=(0,n.select)(s.store),{replaceBlocks:o,insertBlocks:c}=(0,n.dispatch)(s.store),{editPost:u,savePost:m}=(0,n.dispatch)(l.store),f=r().map((e=>{let{clientId:t}=e;return t})),p=(0,i.synchronizeBlocksWithTemplate)([],a());!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t){const{getCurrentPostType:e}=(0,n.select)(l.store);t=e()}const{editPost:r}=(0,n.dispatch)(l.store),i={};"llms_certificate"===t?i.certificate_title=e:"llms_my_certificate"===t&&(i.title=e),r(i)}(""),t&&u({status:"draft"}),(0,d.doAction)("llms.resetCertificateTemplate.before",p),f.length?o(f,p):c(p),(0,d.doAction)("llms.resetCertificateTemplate.after",p),m(),e()}(c,r)},(0,m.__)("Reset template","lifterlms")))),(0,p.createElement)(h.Button,{onClick:()=>o(!0),disabled:t,isDestructive:!0},(0,m.__)("Reset template","lifterlms")))}var Tt=(0,E.compose)([(0,n.withSelect)((e=>{const{isSavingPost:t,isCurrentPostPublished:r,getCurrentPostId:n,getCurrentPostType:i}=e(l.store);return{isPublished:r(),isSaving:t(),postId:n(),postType:i()}}))])((function(e){let{isPublished:t,isSaving:r,postId:n,postType:i}=e;return(0,p.createElement)(S.PluginPostStatusInfo,null,(0,p.createElement)("div",null,(0,p.createElement)(Et,{postId:n,postType:i,isPublished:t,isSaving:r})," ",(0,p.createElement)(Pt,{isPublished:t,isSaving:r,postType:i})))}));const At=lt(h.PanelRow)`
	width: 100%;
`;function $t(e){let{userId:t}=e;const i=(0,n.useSelect)((e=>{const{getEntityRecord:n}=e(r.store),i=n("root","user",t);return null==i?void 0:i.name}),[t]);return i?(0,p.createElement)(h.ExternalLink,{href:(0,x.addQueryArgs)("admin.php",{page:"llms-reporting",tab:"students",stab:"certificates",student_id:t})},i):(0,p.createElement)("span",null,(0,m.__)("Loading…","lifterlms"))}const It=(0,n.withSelect)((e=>{const{getEditedPostAttribute:t,isEditedPostNew:r}=e(l.store);return{isNew:r(),type:t("type"),userId:t("author")}}));var Mt=(0,E.compose)([It])((function(e){let{type:t,userId:r,isNew:i}=e;if("llms_my_certificate"!==t)return null;const a=(0,x.getQueryArg)(window.location.href,"sid");return r=a||r,(0,p.createElement)(S.PluginPostStatusInfo,null,(0,p.createElement)(At,null,(0,p.createElement)("span",{style:{display:"block",width:"45%"}},(0,m.__)("Student","lifterlms")),(!i||a)&&(0,p.createElement)($t,{userId:r}),i&&!a&&(0,p.createElement)(y.UserSearchControl,{selectedValue:r,onUpdate:e=>{let{id:t}=e;const{editPost:r}=(0,n.dispatch)(l.store);r({author:t})}})))}));(0,t.registerPlugin)("llms-certificate-doc-settings",{render:vt,icon:""}),(0,t.registerPlugin)("llms-certificate-user",{render:Mt}),(0,t.registerPlugin)("llms-certificate-post-status-info",{render:Tt})}();