(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[51],{511:function(e,t,o){"use strict";var s=o(0),i=o(2),n=o(13),c=o(7),a=o(18),r=o.n(a),m=o(4),u=o(21),l=o(11),d=o(122);class p extends s.Component{constructor(e){super(e),this.state={isLoadingScripts:!1,isRequestStarted:!1}}async componentDidUpdate(e,t){const{hasErrors:o,isRequesting:s,onClose:n,onContinue:c,createNotice:a}=this.props,{isLoadingScripts:r,isRequestStarted:m}=this.state;if(!m)return;const u=!s&&!r&&(e.isRequesting||t.isLoadingScripts)&&!o,l=!s&&e.isRequesting&&o;u&&(n(),c()),l&&(a("error",Object(i.__)("There was a problem updating your preferences","woocommerce-admin")),n())}updateTracking({allowTracking:e}){const{updateOptions:t}=this.props;e&&"function"==typeof window.wcTracks.enable?(this.setState({isLoadingScripts:!0}),window.wcTracks.enable(()=>{this._isMounted&&(Object(d.initializeExPlat)(),this.setState({isLoadingScripts:!1}))})):e||(window.wcTracks.isEnabled=!1);const o=e?"yes":"no";this.setState({isRequestStarted:!0}),t({woocommerce_allow_tracking:o})}componentDidMount(){this._isMounted=!0}componentWillUnmount(){this._isMounted=!1}render(){if(this.props.allowTracking){const{onClose:e,onContinue:t}=this.props;return e(),t(),null}const{isRequesting:e,title:t=Object(i.__)("Build a better WooCommerce","woocommerce-admin"),message:o=r()({mixedString:Object(i.__)("Get improved features and faster fixes by sharing non-sensitive data via {{link}}usage tracking{{/link}} that shows us how WooCommerce is used. No personal data is tracked or stored.","woocommerce-admin"),components:{link:Object(s.createElement)(u.Link,{href:"https://woocommerce.com/usage-tracking?utm_medium=product",target:"_blank",type:"external"})}}),dismissActionText:n=Object(i.__)("No thanks","woocommerce-admin"),acceptActionText:c=Object(i.__)("Yes, count me in!","woocommerce-admin")}=this.props,{isRequestStarted:a}=this.state,l=a&&e;return Object(s.createElement)(m.Modal,{title:t,isDismissible:this.props.isDismissible,onRequestClose:()=>this.props.onClose(),className:"woocommerce-usage-modal"},Object(s.createElement)("div",{className:"woocommerce-usage-modal__wrapper"},Object(s.createElement)("div",{className:"woocommerce-usage-modal__message"},o),Object(s.createElement)("div",{className:"woocommerce-usage-modal__actions"},Object(s.createElement)(m.Button,{isSecondary:!0,isBusy:l,onClick:()=>this.updateTracking({allowTracking:!1})},n),Object(s.createElement)(m.Button,{isPrimary:!0,isBusy:l,onClick:()=>this.updateTracking({allowTracking:!0})},c))))}}t.a=Object(n.compose)(Object(c.withSelect)(e=>{const{getOption:t,getOptionsUpdatingError:o,isOptionsUpdating:s}=e(l.OPTIONS_STORE_NAME);return{allowTracking:"yes"===t("woocommerce_allow_tracking"),isRequesting:Boolean(s()),hasErrors:Boolean(o())}}),Object(c.withDispatch)(e=>{const{createNotice:t}=e("core/notices"),{updateOptions:o}=e(l.OPTIONS_STORE_NAME);return{createNotice:t,updateOptions:o}}))(p)},516:function(e,t,o){"use strict";o.r(t),o.d(t,"UsageModal",(function(){return u}));var s=o(0),i=o(2),n=o(12),c=o(18),a=o.n(c),r=o(21),m=o(511);const u=()=>{const e="1"===Object(n.getQuery)()["wcpay-connection-success"],[t,o]=Object(s.useState)(e);if(!t)return null;const c=()=>{o(!1),Object(n.updateQueryString)({"wcpay-connection-success":void 0})},u=Object(i.__)("Help us build a better WooCommerce Payments experience","woocommerce-admin"),l=a()({mixedString:Object(i.__)("By agreeing to share non-sensitive {{link}}usage data{{/link}}, you’ll help us improve features and optimize the WooCommerce Payments experience. You can opt out at any time.","woocommerce-admin"),components:{link:Object(s.createElement)(r.Link,{href:"https://woocommerce.com/usage-tracking?utm_medium=product",target:"_blank",type:"external"})}});return Object(s.createElement)(m.a,{isDismissible:!1,title:u,message:l,acceptActionText:Object(i.__)("I agree","woocommerce-admin"),dismissActionText:Object(i.__)("No thanks","woocommerce-admin"),onContinue:c,onClose:c})};t.default=u}}]);