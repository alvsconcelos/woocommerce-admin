(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[50],{197:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},234:function(e,t,n){"use strict";var r=n(11),o="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,a=n(197),c=n(235),i=n(236),l="function"==typeof Symbol&&Symbol.iterator;function s(e,t){return e&&"object"==typeof e&&null!=e.key?(n=e.key,r={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,(function(e){return r[e]}))):t.toString(36);var n,r}function u(e,t,n,r){var a,i=typeof e;if("undefined"!==i&&"boolean"!==i||(e=null),null===e||"string"===i||"number"===i||"object"===i&&e.$$typeof===o)return n(r,e,""===t?"."+s(e,0):t),1;var f=0,m=""===t?".":t+":";if(Array.isArray(e))for(var p=0;p<e.length;p++)f+=u(a=e[p],m+s(a,p),n,r);else{var d=function(e){var t=e&&(l&&e[l]||e["@@iterator"]);if("function"==typeof t)return t}(e);if(d){0;for(var h,v=d.call(e),b=0;!(h=v.next()).done;)f+=u(a=h.value,m+s(a,b++),n,r)}else if("object"===i){0;var y=""+e;c(!1,"Objects are not valid as a React child (found: %s).%s","[object Object]"===y?"object with keys {"+Object.keys(e).join(", ")+"}":y,"")}}return f}var f=/\/+/g;function m(e){return(""+e).replace(f,"$&/")}var p,d,h=v,v=function(e){if(this.instancePool.length){var t=this.instancePool.pop();return this.call(t,e),t}return new this(e)},b=function(e){c(e instanceof this,"Trying to release an instance into a pool of a different type."),e.destructor(),this.instancePool.length<this.poolSize&&this.instancePool.push(e)};function y(e,t,n,r){this.result=e,this.keyPrefix=t,this.func=n,this.context=r,this.count=0}function g(e,t,n){var o,c,i=e.result,l=e.keyPrefix,s=e.func,u=e.context,f=s.call(u,t,e.count++);Array.isArray(f)?O(f,i,n,a.thatReturnsArgument):null!=f&&(r.isValidElement(f)&&(o=f,c=l+(!f.key||t&&t.key===f.key?"":m(f.key)+"/")+n,f=r.cloneElement(o,{key:c},void 0!==o.props?o.props.children:void 0)),i.push(f))}function O(e,t,n,r,o){var a="";null!=n&&(a=m(n)+"/");var c=y.getPooled(t,a,r,o);!function(e,t,n){null==e||u(e,"",t,n)}(e,g,c),y.release(c)}y.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},p=function(e,t,n,r){if(this.instancePool.length){var o=this.instancePool.pop();return this.call(o,e,t,n,r),o}return new this(e,t,n,r)},(d=y).instancePool=[],d.getPooled=p||h,d.poolSize||(d.poolSize=10),d.release=b;e.exports=function(e){if("object"!=typeof e||!e||Array.isArray(e))return i(!1,"React.addons.createFragment only accepts a single object. Got: %s",e),e;if(r.isValidElement(e))return i(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;c(1!==e.nodeType,"React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");var t=[];for(var n in e)O(e[n],t,n,a.thatReturnsArgument);return t}},235:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o,a,c,i){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,a,c,i],u=0;(l=new Error(t.replace(/%s/g,(function(){return s[u++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},236:function(e,t,n){"use strict";var r=n(197);e.exports=r},237:function(e,t,n){"use strict";function r(e){return e.match(/^\{\{\//)?{type:"componentClose",value:e.replace(/\W/g,"")}:e.match(/\/\}\}$/)?{type:"componentSelfClosing",value:e.replace(/\W/g,"")}:e.match(/^\{\{/)?{type:"componentOpen",value:e.replace(/\W/g,"")}:{type:"string",value:e}}e.exports=function(e){return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(r)}},51:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=i(n(11)),a=i(n(234)),c=i(n(237));function i(e){return e&&e.__esModule?e:{default:e}}var l=void 0;function s(e,t){var n,c,i,u,f,m,p,d,h=[],v={};for(m=0;m<e.length;m++)if("string"!==(f=e[m]).type){if(!t.hasOwnProperty(f.value)||void 0===t[f.value])throw new Error("Invalid interpolation, missing component node: `"+f.value+"`");if("object"!==r(t[f.value]))throw new Error("Invalid interpolation, component node must be a ReactElement or null: `"+f.value+"`","\n> "+l);if("componentClose"===f.type)throw new Error("Missing opening component token: `"+f.value+"`");if("componentOpen"===f.type){n=t[f.value],i=m;break}h.push(t[f.value])}else h.push(f.value);return n&&(u=function(e,t){var n,r,o=t[e],a=0;for(r=e+1;r<t.length;r++)if((n=t[r]).value===o.value){if("componentOpen"===n.type){a++;continue}if("componentClose"===n.type){if(0===a)return r;a--}}throw new Error("Missing closing component token `"+o.value+"`")}(i,e),p=s(e.slice(i+1,u),t),c=o.default.cloneElement(n,{},p),h.push(c),u<e.length-1&&(d=s(e.slice(u+1),t),h=h.concat(d))),1===h.length?h[0]:(h.forEach((function(e,t){e&&(v["interpolation-child-"+t]=e)})),(0,a.default)(v))}t.default=function(e){var t=e.mixedString,n=e.components,o=e.throwErrors;if(l=t,!n)return t;if("object"!==(void 0===n?"undefined":r(n))){if(o)throw new Error("Interpolation Error: unable to process `"+t+"` because components is not an object");return t}var a=(0,c.default)(t);try{return s(a,n)}catch(e){if(o)throw new Error("Interpolation Error: unable to process `"+t+"` because of error `"+e.message+"`");return t}}},606:function(e,t,n){"use strict";var r=n(0),o=n(20),a=Object(r.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(r.createElement)(o.Path,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"}));t.a=a},640:function(e,t,n){"use strict";var r=n(324),o=["a","b","em","i","strong","p","br"],a=["target","href","rel","name","download"];t.a=function(e){return{__html:Object(r.sanitize)(e,{ALLOWED_TAGS:o,ALLOWED_ATTR:a})}}},673:function(e,t,n){},756:function(e,t,n){"use strict";n.r(t),n.d(t,"StoreAlerts",(function(){return D}));n(174);var r=n(13),o=n.n(r),a=n(14),c=n.n(a),i=n(10),l=n.n(i),s=n(16),u=n.n(s),f=n(17),m=n.n(f),p=n(7),d=n.n(p),h=n(0),v=(n(117),n(276),n(115),n(255),n(128),n(322),n(132),n(2)),b=n(5),y=n(9),g=n.n(y),O=n(51),j=n.n(O),E=n(34),w=n(15),_=n(21),A=n.n(_),x=n(417),S=n(460),R=n(606),k=n(42),N=n(33),P=n(44),C=n(58),T=n(640),M=n(1),z=n.n(M);function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var o=d()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m()(this,n)}}var I=function(e){u()(n,e);var t=B(n);function n(){return o()(this,n),t.apply(this,arguments)}return c()(n,[{key:"render",value:function(){var e=this.props.hasMultipleAlerts;return Object(h.createElement)(b.Card,{className:"woocommerce-store-alerts is-loading","aria-hidden":!0,size:null},Object(h.createElement)(b.CardHeader,{isBorderless:!0},Object(h.createElement)("span",{className:"is-placeholder"}),e&&Object(h.createElement)("span",{className:"is-placeholder"})),Object(h.createElement)(b.CardBody,null,Object(h.createElement)("div",{className:"woocommerce-store-alerts__message"},Object(h.createElement)("span",{className:"is-placeholder"}),Object(h.createElement)("span",{className:"is-placeholder"}))),Object(h.createElement)(b.CardFooter,{isBorderless:!0},Object(h.createElement)("span",{className:"is-placeholder"})))}}]),n}(h.Component),L=I;I.propTypes={hasMultipleAlerts:z.a.bool},I.defaultProps={hasMultipleAlerts:!1};n(673);function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d()(e);if(t){var o=d()(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m()(this,n)}}var D=function(e){u()(n,e);var t=F(n);function n(e){var r;return o()(this,n),(r=t.call(this,e)).state={currentIndex:0},r.previousAlert=r.previousAlert.bind(l()(r)),r.nextAlert=r.nextAlert.bind(l()(r)),r}return c()(n,[{key:"previousAlert",value:function(e){e.stopPropagation();var t=this.state.currentIndex;t>0&&this.setState({currentIndex:t-1})}},{key:"nextAlert",value:function(e){e.stopPropagation();var t=this.getAlerts(),n=this.state.currentIndex;n<t.length-1&&this.setState({currentIndex:n+1})}},{key:"renderActions",value:function(e){var t=this.props,n=t.triggerNoteAction,r=t.updateNote,o=e.actions.map((function(t){return Object(h.createElement)(b.Button,{key:t.name,isPrimary:t.primary,isSecondary:!t.primary,href:t.url||void 0,onClick:function(){return n(e.id,t.id)}},t.label)})),a=[{value:A()().add(4,"hours").unix().toString(),label:Object(v.__)("Later Today","woocommerce-admin")},{value:A()().add(1,"day").hour(9).minute(0).second(0).millisecond(0).unix().toString(),label:Object(v.__)("Tomorrow","woocommerce-admin")},{value:A()().add(1,"week").hour(9).minute(0).second(0).millisecond(0).unix().toString(),label:Object(v.__)("Next Week","woocommerce-admin")},{value:A()().add(1,"month").hour(9).minute(0).second(0).millisecond(0).unix().toString(),label:Object(v.__)("Next Month","woocommerce-admin")}],c=e.is_snoozable&&Object(h.createElement)(b.SelectControl,{className:"woocommerce-store-alerts__snooze",options:[{label:Object(v.__)("Remind Me Later","woocommerce-admin"),value:"0"}].concat(a),onChange:function(t){if("0"!==t){var n=a.find((function(e){return e.value===t}));!function(t){r(e.id,{status:"snoozed",date_reminder:t.value});var n={alert_name:e.name,alert_title:e.title,snooze_duration:t.value,snooze_label:t.label};Object(P.recordEvent)("store_alert_snooze",n)}({value:t,label:n&&n.label})}}});if(o||c)return Object(h.createElement)("div",{className:"woocommerce-store-alerts__actions"},o,c)}},{key:"getAlerts",value:function(){return(this.props.alerts||[]).filter((function(e){return"unactioned"===e.status}))}},{key:"render",value:function(){var e=this.getAlerts(),t=Object(k.g)("alertCount",0,(function(e){return parseInt(e,10)}));if(t>0&&this.props.isLoading)return Object(h.createElement)(L,{hasMultipleAlerts:t>1});if(0===e.length)return null;var n=this.state.currentIndex,r=e.length,o=e[n],a=o.type,c=g()("woocommerce-store-alerts",{"is-alert-error":"error"===a,"is-alert-update":"update"===a});return Object(h.createElement)(b.Card,{className:c,size:null},Object(h.createElement)(b.CardHeader,{isBorderless:!0},Object(h.createElement)(C.Text,{variant:"title.medium",as:"h2"},o.icon&&Object(h.createElement)(b.Dashicon,{key:"icon",icon:o.icon}),o.title),r>1&&Object(h.createElement)("div",{className:"woocommerce-store-alerts__pagination"},Object(h.createElement)(b.Button,{onClick:this.previousAlert,disabled:0===n,label:Object(v.__)("Previous Alert","woocommerce-admin")},Object(h.createElement)(x.a,{icon:S.a})),Object(h.createElement)("span",{className:"woocommerce-store-alerts__pagination-label",role:"status","aria-live":"polite"},j()({mixedString:Object(v.__)("{{current /}} of {{total /}}","woocommerce-admin"),components:{current:Object(h.createElement)(h.Fragment,null,n+1),total:Object(h.createElement)(h.Fragment,null,r)}})),Object(h.createElement)(b.Button,{onClick:this.nextAlert,disabled:r-1===n,label:Object(v.__)("Next Alert","woocommerce-admin")},Object(h.createElement)(x.a,{icon:R.a})))),Object(h.createElement)(b.CardBody,null,Object(h.createElement)("div",{className:"woocommerce-store-alerts__message",dangerouslySetInnerHTML:Object(T.a)(o.content)})),Object(h.createElement)(b.CardFooter,{isBorderless:!0},this.renderActions(o)))}}]),n}(h.Component),W={page:1,per_page:N.QUERY_DEFAULTS.pageSize,type:"error,update",status:"unactioned"};t.default=Object(E.compose)(Object(w.withSelect)((function(e){var t=e(N.NOTES_STORE_NAME),n=t.getNotes,r=t.isResolving;return{alerts:n(W),isLoading:r("getNotes",[W])}})),Object(w.withDispatch)((function(e){var t=e(N.NOTES_STORE_NAME);return{triggerNoteAction:t.triggerNoteAction,updateNote:t.updateNote}})))(D)}}]);