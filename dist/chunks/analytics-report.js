(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[6],{497:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"a",(function(){return p}));var n=r(0),c=r(30),s=r(88),o=r.n(s),a=r(15);const i=o()(a.a),u=e=>{const t=i.getCurrencyConfig(),r=Object(c.applyFilters)("woocommerce_admin_report_currency",t,e);return o()(r)},p=Object(n.createContext)(i)},500:function(e,t,r){"use strict";var n=r(0),c=r(2),s=r(1),o=r.n(s),a=r(21);function i({className:e}){const t=Object(c.__)("There was an error getting your stats. Please try again.","woocommerce-admin"),r=Object(c.__)("Reload","woocommerce-admin");return Object(n.createElement)(a.EmptyContent,{className:e,title:t,actionLabel:r,actionCallback:()=>{window.location.reload()}})}i.propTypes={className:o.a.string},t.a=i},540:function(e,t,r){},597:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(13),s=r(7),o=r(1),a=r.n(o),i=r(3),u=r(12),p=r(11),l=(r(540),r(500)),m=r(497),b=r(117);const d=({params:e,path:t})=>e.report||t.replace(/^\/+/,"");class j extends n.Component{constructor(){super(...arguments),this.state={hasError:!1}}componentDidCatch(e){this.setState({hasError:!0}),console.warn(e)}render(){if(this.state.hasError)return null;const{isError:e}=this.props;if(e)return Object(n.createElement)(l.a,null);const t=d(this.props),r=Object(i.find)(Object(b.a)(),{report:t});if(!r)return null;const c=r.component;return Object(n.createElement)(m.a.Provider,{value:Object(m.b)(Object(u.getQuery)())},Object(n.createElement)(c,this.props))}}j.propTypes={params:a.a.object.isRequired},t.default=Object(c.compose)(Object(s.withSelect)((e,t)=>{const r=Object(u.getQuery)(),{search:n}=r;if(!n)return{};const c=d(t),s=Object(u.getSearchWords)(r),o="categories"===c&&"single_category"===r.filter?"products":c,a=Object(p.searchItemsByString)(e,o,s,{per_page:100}),{isError:i,isRequesting:l,items:m}=a,b=Object.keys(m);return b.length?{isError:i,isRequesting:l,query:{...t.query,[o]:b.join(",")}}:{isError:i,isRequesting:l}}))(j)}}]);