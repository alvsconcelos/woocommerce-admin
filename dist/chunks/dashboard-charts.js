(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[26],{165:function(e,t,r){"use strict";var o=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.size,r=void 0===t?24:t,a=e.onClick,c=(e.icon,e.className),l=function(e,t){var r={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}(e,["size","onClick","icon","className"]),i=["gridicon","gridicons-line-graph",c,!1,!1,!1].filter(Boolean).join(" ");return n.default.createElement("svg",o({className:i,height:r,width:r,onClick:a},l,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),n.default.createElement("g",null,n.default.createElement("path",{d:"M3 19h18v2H3zm3-3c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3L8.8 10H9c.5 0 1-.2 1.3-.5l2.7 1.4v.1c0 1.1.9 2 2 2s2-.9 2-2c0-.5-.2-.9-.5-1.3L17.8 7h.2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c0 .5.2 1 .5 1.3L15.2 9H15c-.5 0-1 .2-1.3.5L11 8.2V8c0-1.1-.9-2-2-2s-2 .9-2 2c0 .5.2 1 .5 1.3L6.2 12H6c-1.1 0-2 .9-2 2s.9 2 2 2z"})))};var a,c=r(5),n=(a=c)&&a.__esModule?a:{default:a};e.exports=t.default},166:function(e,t,r){"use strict";var o=Object.assign||function(e){for(var t,r=1;r<arguments.length;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,r=e.size,a=void 0===r?24:r,c=e.onClick,l=(e.icon,e.className),i=function(e,t){var r={};for(var o in e)0<=t.indexOf(o)||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}(e,["size","onClick","icon","className"]),s=["gridicon","gridicons-stats-alt",l,!1,!1,(t=a,!(0!=t%18)&&"needs-offset-y")].filter(Boolean).join(" ");return n.default.createElement("svg",o({className:s,height:a,width:a,onClick:c},i,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),n.default.createElement("g",null,n.default.createElement("path",{d:"M21 21H3v-2h18v2zM8 10H4v7h4v-7zm6-7h-4v14h4V3zm6 3h-4v11h4V6z"})))};var a,c=r(5),n=(a=c)&&a.__esModule?a:{default:a};e.exports=t.default},38:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},498:function(e,t,r){"use strict";r.d(t,"e",(function(){return d})),r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return _})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return p})),r.d(t,"f",(function(){return h})),r.d(t,"h",(function(){return O})),r.d(t,"g",(function(){return j}));var o=r(14),a=r(17),c=r.n(a),n=r(3),l=r(12),i=r(11),s=r(15),m=r(499);function d(e,t=n.identity){return function(r="",a){const n="function"==typeof e?e(a):e,i=Object(l.getIdsFromQuery)(r);if(i.length<1)return Promise.resolve([]);const s={include:i.join(","),per_page:i.length};return c()({path:Object(o.addQueryArgs)(n,s)}).then(e=>e.map(t))}}d(i.NAMESPACE+"/products/attributes",e=>({key:e.id,label:e.name}));const u=d(i.NAMESPACE+"/products/categories",e=>({key:e.id,label:e.name})),_=d(i.NAMESPACE+"/coupons",e=>({key:e.id,label:e.code})),b=d(i.NAMESPACE+"/customers",e=>({key:e.id,label:e.name})),p=d(i.NAMESPACE+"/products",e=>({key:e.id,label:e.name})),h=d(i.NAMESPACE+"/taxes",e=>({key:e.id,label:Object(m.a)(e)}));function O({attributes:e,name:t}){const r=Object(s.f)("variationTitleAttributesSeparator"," - ");if(t.indexOf(r)>-1)return t;const o=e.map(({option:e})=>e).join(", ");return o?t+r+o:t}const j=d(({products:e})=>e?i.NAMESPACE+`/products/${e}/variations`:i.NAMESPACE+"/variations",e=>({key:e.id,label:O(e)}))},499:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r(2);function a(e){return[e.country,e.state,e.name||Object(o.__)("TAX","woocommerce-admin"),e.priority].map(e=>e.toString().toUpperCase().trim()).filter(Boolean).join("-")}},500:function(e,t,r){"use strict";var o=r(0),a=r(2),c=r(1),n=r.n(c),l=r(21);function i({className:e}){const t=Object(a.__)("There was an error getting your stats. Please try again.","woocommerce-admin"),r=Object(a.__)("Reload","woocommerce-admin");return Object(o.createElement)(l.EmptyContent,{className:e,title:t,actionLabel:r,actionCallback:()=>{window.location.reload()}})}i.propTypes={className:n.a.string},t.a=i},503:function(e,t,r){"use strict";var o=r(0),a=r(2),c=r(13),n=r(57),l=r(7),i=r(3),s=r(1),m=r.n(s),d=r(21),u=r(11),_=r(19),b=r(497),p=r(500),h=r(12);class O extends o.Component{shouldComponentUpdate(e){return e.isRequesting!==this.props.isRequesting||e.primaryData.isRequesting!==this.props.primaryData.isRequesting||e.secondaryData.isRequesting!==this.props.secondaryData.isRequesting||!Object(i.isEqual)(e.query,this.props.query)}getItemChartData(){const{primaryData:e,selectedChart:t}=this.props;return e.data.intervals.map((function(e){const r={};return e.subtotals.segments.forEach((function(e){if(e.segment_label){const o=r[e.segment_label]?e.segment_label+" (#"+e.segment_id+")":e.segment_label;r[e.segment_id]={label:o,value:e.subtotals[t.key]||0}}})),{date:Object(n.format)("Y-m-d\\TH:i:s",e.date_start),...r}}))}getTimeChartData(){const{query:e,primaryData:t,secondaryData:r,selectedChart:o,defaultDateRange:a}=this.props,c=Object(_.getIntervalForQuery)(e),{primary:l,secondary:i}=Object(_.getCurrentDates)(e,a);return t.data.intervals.map((function(t,a){const s=Object(_.getPreviousDate)(t.date_start,l.after,i.after,e.compare,c),m=r.data.intervals[a];return{date:Object(n.format)("Y-m-d\\TH:i:s",t.date_start),primary:{label:`${l.label} (${l.range})`,labelDate:t.date_start,value:t.subtotals[o.key]||0},secondary:{label:`${i.label} (${i.range})`,labelDate:s.format("YYYY-MM-DD HH:mm:ss"),value:m&&m.subtotals[o.key]||0}}}))}getTimeChartTotals(){const{primaryData:e,secondaryData:t,selectedChart:r}=this.props;return{primary:Object(i.get)(e,["data","totals",r.key],null),secondary:Object(i.get)(t,["data","totals",r.key],null)}}renderChart(e,t,r,c){const{emptySearchResults:n,filterParam:l,interactiveLegend:i,itemsLabel:s,legendPosition:m,path:b,query:p,selectedChart:h,showHeaderControls:O,primaryData:j}=this.props,w=Object(_.getIntervalForQuery)(p),y=Object(_.getAllowedIntervalsForQuery)(p),f=Object(_.getDateFormatsForInterval)(w,j.data.intervals.length),v=n?Object(a.__)("No data for the current search","woocommerce-admin"):Object(a.__)("No data for the selected date range","woocommerce-admin"),{formatAmount:g,getCurrencyConfig:x}=this.context;return Object(o.createElement)(d.Chart,{allowedIntervals:y,data:r,dateParser:"%Y-%m-%dT%H:%M:%S",emptyMessage:v,filterParam:l,interactiveLegend:i,interval:w,isRequesting:t,itemsLabel:s,legendPosition:m,legendTotals:c,mode:e,path:b,query:p,screenReaderFormat:f.screenReaderFormat,showHeaderControls:O,title:h.label,tooltipLabelFormat:f.tooltipLabelFormat,tooltipTitle:"time-comparison"===e&&h.label||null,tooltipValueFormat:Object(u.getTooltipValueFormat)(h.type,g),chartType:Object(_.getChartTypeForQuery)(p),valueType:h.type,xFormat:f.xFormat,x2Format:f.x2Format,currency:x()})}renderItemComparison(){const{isRequesting:e,primaryData:t}=this.props;if(t.isError)return Object(o.createElement)(p.a,null);const r=e||t.isRequesting,a=this.getItemChartData();return this.renderChart("item-comparison",r,a)}renderTimeComparison(){const{isRequesting:e,primaryData:t,secondaryData:r}=this.props;if(!t||t.isError||r.isError)return Object(o.createElement)(p.a,null);const a=e||t.isRequesting||r.isRequesting,c=this.getTimeChartData(),n=this.getTimeChartTotals();return this.renderChart("time-comparison",a,c,n)}render(){const{mode:e}=this.props;return"item-comparison"===e?this.renderItemComparison():this.renderTimeComparison()}}O.contextType=b.a,O.propTypes={filters:m.a.array,isRequesting:m.a.bool,itemsLabel:m.a.string,limitProperties:m.a.array,mode:m.a.string,path:m.a.string.isRequired,primaryData:m.a.object,query:m.a.object.isRequired,secondaryData:m.a.object,selectedChart:m.a.shape({key:m.a.string.isRequired,label:m.a.string.isRequired,order:m.a.oneOf(["asc","desc"]),orderby:m.a.string,type:m.a.oneOf(["average","number","currency"]).isRequired}).isRequired},O.defaultProps={isRequesting:!1,primaryData:{data:{intervals:[]},isError:!1,isRequesting:!1},secondaryData:{data:{intervals:[]},isError:!1,isRequesting:!1}};t.a=Object(c.compose)(Object(l.withSelect)((e,t)=>{const{charts:r,endpoint:o,filters:a,isRequesting:c,limitProperties:n,query:l,advancedFilters:s}=t,m=n||[o],d=function e(t,r,o={}){if(!t||0===t.length)return null;const a=t.slice(0),c=a.pop();if(c.showFilters(r,o)){const e=Object(h.flattenFilters)(c.filters),t=r[c.param]||c.defaultValue||"all";return Object(i.find)(e,{value:t})}return e(a,r,o)}(a,l),_=Object(i.get)(d,["settings","param"]),b=t.mode||function(e,t){if(e&&t){const r=Object(i.get)(e,["settings","param"]);if(!r||Object.keys(t).includes(r))return Object(i.get)(e,["chartMode"])}return null}(d,l)||"time-comparison",{woocommerce_default_date_range:p}=e(u.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings"),O=e(u.REPORTS_STORE_NAME),j={mode:b,filterParam:_,defaultDateRange:p};if(c)return j;const w=m.some(e=>l[e]&&l[e].length);if(l.search&&!w)return{...j,emptySearchResults:!0};const y=r&&r.map(e=>e.key),f=Object(u.getReportChartData)({endpoint:o,dataType:"primary",query:l,selector:O,limitBy:m,filters:a,advancedFilters:s,defaultDateRange:p,fields:y});if("item-comparison"===b)return{...j,primaryData:f};const v=Object(u.getReportChartData)({endpoint:o,dataType:"secondary",query:l,selector:O,limitBy:m,filters:a,advancedFilters:s,defaultDateRange:p,fields:y});return{...j,primaryData:f,secondaryData:v}}))(O)},525:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return i}));var o=r(2),a=r(30);const c=Object(a.applyFilters)("woocommerce_admin_revenue_report_charts",[{key:"gross_sales",label:Object(o.__)("Gross Sales","woocommerce-admin"),order:"desc",orderby:"gross_sales",type:"currency",isReverseTrend:!1},{key:"refunds",label:Object(o.__)("Returns","woocommerce-admin"),order:"desc",orderby:"refunds",type:"currency",isReverseTrend:!0},{key:"coupons",label:Object(o.__)("Coupons","woocommerce-admin"),order:"desc",orderby:"coupons",type:"currency",isReverseTrend:!1},{key:"net_revenue",label:Object(o.__)("Net Sales","woocommerce-admin"),orderby:"net_revenue",type:"currency",isReverseTrend:!1},{key:"taxes",label:Object(o.__)("Taxes","woocommerce-admin"),order:"desc",orderby:"taxes",type:"currency",isReverseTrend:!1},{key:"shipping",label:Object(o.__)("Shipping","woocommerce-admin"),orderby:"shipping",type:"currency",isReverseTrend:!1},{key:"total_sales",label:Object(o.__)("Total Sales","woocommerce-admin"),order:"desc",orderby:"total_sales",type:"currency",isReverseTrend:!1}]),n=Object(a.applyFilters)("woocommerce_admin_revenue_report_advanced_filters",{filters:{},title:Object(o._x)("Revenue Matches {{select /}} Filters","A sentence describing filters for Revenue. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ","woocommerce-admin")}),l=[];Object.keys(n.filters).length&&(l.push({label:Object(o.__)("All Revenue","woocommerce-admin"),value:"all"}),l.push({label:Object(o.__)("Advanced Filters","woocommerce-admin"),value:"advanced"}));const i=Object(a.applyFilters)("woocommerce_admin_revenue_report_filters",[{label:Object(o.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:()=>l.length>0,filters:l}])},526:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return u})),r.d(t,"c",(function(){return _}));var o=r(2),a=r(30),c=r(7),n=r(498),l=r(53);const{addCesSurveyForAnalytics:i}=Object(c.dispatch)(l.c),s=Object(a.applyFilters)("woocommerce_admin_products_report_charts",[{key:"items_sold",label:Object(o.__)("Items Sold","woocommerce-admin"),order:"desc",orderby:"items_sold",type:"number"},{key:"net_revenue",label:Object(o.__)("Net Sales","woocommerce-admin"),order:"desc",orderby:"net_revenue",type:"currency"},{key:"orders_count",label:Object(o.__)("Orders","woocommerce-admin"),order:"desc",orderby:"orders_count",type:"number"}]),m={label:Object(o.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:()=>!0,filters:[{label:Object(o.__)("All Products","woocommerce-admin"),value:"all"},{label:Object(o.__)("Single Product","woocommerce-admin"),value:"select_product",chartMode:"item-comparison",subFilters:[{component:"Search",value:"single_product",chartMode:"item-comparison",path:["select_product"],settings:{type:"products",param:"products",getLabels:n.d,labels:{placeholder:Object(o.__)("Type to search for a product","woocommerce-admin"),button:Object(o.__)("Single Product","woocommerce-admin")}}}]},{label:Object(o.__)("Comparison","woocommerce-admin"),value:"compare-products",chartMode:"item-comparison",settings:{type:"products",param:"products",getLabels:n.d,labels:{helpText:Object(o.__)("Check at least two products below to compare","woocommerce-admin"),placeholder:Object(o.__)("Search for products to compare","woocommerce-admin"),title:Object(o.__)("Compare Products","woocommerce-admin"),update:Object(o.__)("Compare","woocommerce-admin")},onClick:i}}]},d={showFilters:e=>"single_product"===e.filter&&!!e.products&&e["is-variable"],staticParams:["filter","products","chartType","paged","per_page"],param:"filter-variations",filters:[{label:Object(o.__)("All Variations","woocommerce-admin"),chartMode:"item-comparison",value:"all"},{label:Object(o.__)("Single Variation","woocommerce-admin"),value:"select_variation",subFilters:[{component:"Search",value:"single_variation",path:["select_variation"],settings:{type:"variations",param:"variations",getLabels:n.g,labels:{placeholder:Object(o.__)("Type to search for a variation","woocommerce-admin"),button:Object(o.__)("Single Variation","woocommerce-admin")}}}]},{label:Object(o.__)("Comparison","woocommerce-admin"),chartMode:"item-comparison",value:"compare-variations",settings:{type:"variations",param:"variations",getLabels:n.g,labels:{helpText:Object(o.__)("Check at least two variations below to compare","woocommerce-admin"),placeholder:Object(o.__)("Search for variations to compare","woocommerce-admin"),title:Object(o.__)("Compare Variations","woocommerce-admin"),update:Object(o.__)("Compare","woocommerce-admin")}}}]},u=Object(a.applyFilters)("woocommerce_admin_products_report_advanced_filters",{filters:{},title:Object(o._x)("Products Match {{select /}} Filters","A sentence describing filters for Products. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ","woocommerce-admin")});Object.keys(u.filters).length&&(m.filters.push({label:Object(o.__)("Advanced Filters","woocommerce-admin"),value:"advanced"}),d.filters.push({label:Object(o.__)("Advanced Filters","woocommerce-admin"),value:"advanced"}));const _=Object(a.applyFilters)("woocommerce_admin_products_report_filters",[m,d])},530:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return s}));var o=r(2),a=r(30),c=r(15),n=r(498);const l=Object(a.applyFilters)("woocommerce_admin_orders_report_charts",[{key:"orders_count",label:Object(o.__)("Orders","woocommerce-admin"),type:"number"},{key:"net_revenue",label:Object(o.__)("Net Sales","woocommerce-admin"),order:"desc",orderby:"net_total",type:"currency"},{key:"avg_order_value",label:Object(o.__)("Average Order Value","woocommerce-admin"),type:"currency"},{key:"avg_items_per_order",label:Object(o.__)("Average Items Per Order","woocommerce-admin"),order:"desc",orderby:"num_items_sold",type:"average"}]),i=Object(a.applyFilters)("woocommerce_admin_orders_report_filters",[{label:Object(o.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:()=>!0,filters:[{label:Object(o.__)("All Orders","woocommerce-admin"),value:"all"},{label:Object(o.__)("Advanced Filters","woocommerce-admin"),value:"advanced"}]}]),s=Object(a.applyFilters)("woocommerce_admin_orders_report_advanced_filters",{title:Object(o._x)("Orders Match {{select /}} Filters","A sentence describing filters for Orders. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ","woocommerce-admin"),filters:{status:{labels:{add:Object(o.__)("Order Status","woocommerce-admin"),remove:Object(o.__)("Remove order status filter","woocommerce-admin"),rule:Object(o.__)("Select an order status filter match","woocommerce-admin"),title:Object(o.__)("{{title}}Order Status{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(o.__)("Select an order status","woocommerce-admin")},rules:[{value:"is",label:Object(o._x)("Is","order status","woocommerce-admin")},{value:"is_not",label:Object(o._x)("Is Not","order status","woocommerce-admin")}],input:{component:"SelectControl",options:Object.keys(c.c).map(e=>({value:e,label:c.c[e]}))}},product:{labels:{add:Object(o.__)("Products","woocommerce-admin"),placeholder:Object(o.__)("Search products","woocommerce-admin"),remove:Object(o.__)("Remove products filter","woocommerce-admin"),rule:Object(o.__)("Select a product filter match","woocommerce-admin"),title:Object(o.__)("{{title}}Product{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(o.__)("Select products","woocommerce-admin")},rules:[{value:"includes",label:Object(o._x)("Includes","products","woocommerce-admin")},{value:"excludes",label:Object(o._x)("Excludes","products","woocommerce-admin")}],input:{component:"Search",type:"products",getLabels:n.d}},variation:{labels:{add:Object(o.__)("Variations","woocommerce-admin"),placeholder:Object(o.__)("Search variations","woocommerce-admin"),remove:Object(o.__)("Remove variations filter","woocommerce-admin"),rule:Object(o.__)("Select a variation filter match","woocommerce-admin"),title:Object(o.__)("{{title}}Variation{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(o.__)("Select variation","woocommerce-admin")},rules:[{value:"includes",label:Object(o._x)("Includes","variations","woocommerce-admin")},{value:"excludes",label:Object(o._x)("Excludes","variations","woocommerce-admin")}],input:{component:"Search",type:"variations",getLabels:n.g}},coupon:{labels:{add:Object(o.__)("Coupon Codes","woocommerce-admin"),placeholder:Object(o.__)("Search coupons","woocommerce-admin"),remove:Object(o.__)("Remove coupon filter","woocommerce-admin"),rule:Object(o.__)("Select a coupon filter match","woocommerce-admin"),title:Object(o.__)("{{title}}Coupon Code{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(o.__)("Select coupon codes","woocommerce-admin")},rules:[{value:"includes",label:Object(o._x)("Includes","coupon code","woocommerce-admin")},{value:"excludes",label:Object(o._x)("Excludes","coupon code","woocommerce-admin")}],input:{component:"Search",type:"coupons",getLabels:n.b}},customer_type:{labels:{add:Object(o.__)("Customer Type","woocommerce-admin"),remove:Object(o.__)("Remove customer filter","woocommerce-admin"),rule:Object(o.__)("Select a customer filter match","woocommerce-admin"),title:Object(o.__)("{{title}}Customer is{{/title}} {{filter /}}","woocommerce-admin"),filter:Object(o.__)("Select a customer type","woocommerce-admin")},input:{component:"SelectControl",options:[{value:"new",label:Object(o.__)("New","woocommerce-admin")},{value:"returning",label:Object(o.__)("Returning","woocommerce-admin")}],defaultOption:"new"}},refunds:{labels:{add:Object(o.__)("Refunds","woocommerce-admin"),remove:Object(o.__)("Remove refunds filter","woocommerce-admin"),rule:Object(o.__)("Select a refund filter match","woocommerce-admin"),title:Object(o.__)("{{title}}Refunds{{/title}} {{filter /}}","woocommerce-admin"),filter:Object(o.__)("Select a refund type","woocommerce-admin")},input:{component:"SelectControl",options:[{value:"all",label:Object(o.__)("All","woocommerce-admin")},{value:"partial",label:Object(o.__)("Partially refunded","woocommerce-admin")},{value:"full",label:Object(o.__)("Fully refunded","woocommerce-admin")},{value:"none",label:Object(o.__)("None","woocommerce-admin")}],defaultOption:"all"}},tax_rate:{labels:{add:Object(o.__)("Tax Rates","woocommerce-admin"),placeholder:Object(o.__)("Search tax rates","woocommerce-admin"),remove:Object(o.__)("Remove tax rate filter","woocommerce-admin"),rule:Object(o.__)("Select a tax rate filter match","woocommerce-admin"),title:Object(o.__)("{{title}}Tax Rate{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(o.__)("Select tax rates","woocommerce-admin")},rules:[{value:"includes",label:Object(o._x)("Includes","tax rate","woocommerce-admin")},{value:"excludes",label:Object(o._x)("Excludes","tax rate","woocommerce-admin")}],input:{component:"Search",type:"taxes",getLabels:n.f}},attribute:{allowMultiple:!0,labels:{add:Object(o.__)("Attribute","woocommerce-admin"),placeholder:Object(o.__)("Search attributes","woocommerce-admin"),remove:Object(o.__)("Remove attribute filter","woocommerce-admin"),rule:Object(o.__)("Select a product attribute filter match","woocommerce-admin"),title:Object(o.__)("{{title}}Attribute{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(o.__)("Select attributes","woocommerce-admin")},rules:[{value:"is",label:Object(o._x)("Is","product attribute","woocommerce-admin")},{value:"is_not",label:Object(o._x)("Is Not","product attribute","woocommerce-admin")}],input:{component:"ProductAttribute"}}}})},531:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return m})),r.d(t,"c",(function(){return u}));var o=r(2),a=r(30),c=r(7),n=r(498),l=r(53);const{addCesSurveyForAnalytics:i}=Object(c.dispatch)(l.c),s=Object(a.applyFilters)("woocommerce_admin_coupons_report_charts",[{key:"orders_count",label:Object(o.__)("Discounted Orders","woocommerce-admin"),order:"desc",orderby:"orders_count",type:"number"},{key:"amount",label:Object(o.__)("Amount","woocommerce-admin"),order:"desc",orderby:"amount",type:"currency"}]),m=Object(a.applyFilters)("woocommerce_admin_coupon_report_advanced_filters",{filters:{},title:Object(o._x)("Coupons Match {{select /}} Filters","A sentence describing filters for Coupons. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ","woocommerce-admin")}),d=[{label:Object(o.__)("All Coupons","woocommerce-admin"),value:"all"},{label:Object(o.__)("Single Coupon","woocommerce-admin"),value:"select_coupon",chartMode:"item-comparison",subFilters:[{component:"Search",value:"single_coupon",chartMode:"item-comparison",path:["select_coupon"],settings:{type:"coupons",param:"coupons",getLabels:n.b,labels:{placeholder:Object(o.__)("Type to search for a coupon","woocommerce-admin"),button:Object(o.__)("Single Coupon","woocommerce-admin")}}}]},{label:Object(o.__)("Comparison","woocommerce-admin"),value:"compare-coupons",settings:{type:"coupons",param:"coupons",getLabels:n.b,labels:{title:Object(o.__)("Compare Coupon Codes","woocommerce-admin"),update:Object(o.__)("Compare","woocommerce-admin"),helpText:Object(o.__)("Check at least two coupon codes below to compare","woocommerce-admin")},onClick:i}}];Object.keys(m.filters).length&&d.push({label:Object(o.__)("Advanced Filters","woocommerce-admin"),value:"advanced"});const u=Object(a.applyFilters)("woocommerce_admin_coupons_report_filters",[{label:Object(o.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:()=>!0,filters:d}])},532:function(e,t,r){"use strict";r.d(t,"b",(function(){return d})),r.d(t,"a",(function(){return u})),r.d(t,"c",(function(){return b}));var o=r(2),a=r(30),c=r(11),n=r(7),l=r(498),i=r(499),s=r(53);const{addCesSurveyForAnalytics:m}=Object(n.dispatch)(s.c),d=Object(a.applyFilters)("woocommerce_admin_taxes_report_charts",[{key:"total_tax",label:Object(o.__)("Total Tax","woocommerce-admin"),order:"desc",orderby:"total_tax",type:"currency"},{key:"order_tax",label:Object(o.__)("Order Tax","woocommerce-admin"),order:"desc",orderby:"order_tax",type:"currency"},{key:"shipping_tax",label:Object(o.__)("Shipping Tax","woocommerce-admin"),order:"desc",orderby:"shipping_tax",type:"currency"},{key:"orders_count",label:Object(o.__)("Orders","woocommerce-admin"),order:"desc",orderby:"orders_count",type:"number"}]),u=Object(a.applyFilters)("woocommerce_admin_taxes_report_advanced_filters",{filters:{},title:Object(o._x)("Taxes Match {{select /}} Filters","A sentence describing filters for Taxes. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ","woocommerce-admin")}),_=[{label:Object(o.__)("All Taxes","woocommerce-admin"),value:"all"},{label:Object(o.__)("Comparison","woocommerce-admin"),value:"compare-taxes",chartMode:"item-comparison",settings:{type:"taxes",param:"taxes",getLabels:Object(l.e)(c.NAMESPACE+"/taxes",e=>({id:e.id,key:e.id,label:Object(i.a)(e)})),labels:{helpText:Object(o.__)("Check at least two tax codes below to compare","woocommerce-admin"),placeholder:Object(o.__)("Search for tax codes to compare","woocommerce-admin"),title:Object(o.__)("Compare Tax Codes","woocommerce-admin"),update:Object(o.__)("Compare","woocommerce-admin")},onClick:m}}];Object.keys(u.filters).length&&_.push({label:Object(o.__)("Advanced Filters","woocommerce-admin"),value:"advanced"});const b=Object(a.applyFilters)("woocommerce_admin_taxes_report_filters",[{label:Object(o.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:()=>!0,filters:_}])},533:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return l})),r.d(t,"a",(function(){return i}));var o=r(2),a=r(30),c=r(498);const n=Object(a.applyFilters)("woocommerce_admin_downloads_report_charts",[{key:"download_count",label:Object(o.__)("Downloads","woocommerce-admin"),type:"number"}]),l=Object(a.applyFilters)("woocommerce_admin_downloads_report_filters",[{label:Object(o.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:()=>!0,filters:[{label:Object(o.__)("All Downloads","woocommerce-admin"),value:"all"},{label:Object(o.__)("Advanced Filters","woocommerce-admin"),value:"advanced"}]}]),i=Object(a.applyFilters)("woocommerce_admin_downloads_report_advanced_filters",{title:Object(o._x)("Downloads Match {{select /}} Filters","A sentence describing filters for Downloads. See screen shot for context: https://cloudup.com/ccxhyH2mEDg","woocommerce-admin"),filters:{product:{labels:{add:Object(o.__)("Product","woocommerce-admin"),placeholder:Object(o.__)("Search","woocommerce-admin"),remove:Object(o.__)("Remove product filter","woocommerce-admin"),rule:Object(o.__)("Select a product filter match","woocommerce-admin"),title:Object(o.__)("{{title}}Product{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(o.__)("Select product","woocommerce-admin")},rules:[{value:"includes",label:Object(o._x)("Includes","products","woocommerce-admin")},{value:"excludes",label:Object(o._x)("Excludes","products","woocommerce-admin")}],input:{component:"Search",type:"products",getLabels:c.d}},customer:{labels:{add:Object(o.__)("Username","woocommerce-admin"),placeholder:Object(o.__)("Search customer username","woocommerce-admin"),remove:Object(o.__)("Remove customer username filter","woocommerce-admin"),rule:Object(o.__)("Select a customer username filter match","woocommerce-admin"),title:Object(o.__)("{{title}}Username{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(o.__)("Select customer username","woocommerce-admin")},rules:[{value:"includes",label:Object(o._x)("Includes","customer usernames","woocommerce-admin")},{value:"excludes",label:Object(o._x)("Excludes","customer usernames","woocommerce-admin")}],input:{component:"Search",type:"usernames",getLabels:c.c}},order:{labels:{add:Object(o.__)("Order #","woocommerce-admin"),placeholder:Object(o.__)("Search order number","woocommerce-admin"),remove:Object(o.__)("Remove order number filter","woocommerce-admin"),rule:Object(o.__)("Select a order number filter match","woocommerce-admin"),title:Object(o.__)("{{title}}Order #{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(o.__)("Select order number","woocommerce-admin")},rules:[{value:"includes",label:Object(o._x)("Includes","order numbers","woocommerce-admin")},{value:"excludes",label:Object(o._x)("Excludes","order numbers","woocommerce-admin")}],input:{component:"Search",type:"orders",getLabels:async e=>{const t=e.split(",");return await t.map(e=>({id:e,label:"#"+e}))}}},ip_address:{labels:{add:Object(o.__)("IP Address","woocommerce-admin"),placeholder:Object(o.__)("Search IP address","woocommerce-admin"),remove:Object(o.__)("Remove IP address filter","woocommerce-admin"),rule:Object(o.__)("Select an IP address filter match","woocommerce-admin"),title:Object(o.__)("{{title}}IP Address{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(o.__)("Select IP address","woocommerce-admin")},rules:[{value:"includes",label:Object(o._x)("Includes","IP addresses","woocommerce-admin")},{value:"excludes",label:Object(o._x)("Excludes","IP addresses","woocommerce-admin")}],input:{component:"Search",type:"downloadIps",getLabels:async e=>{const t=e.split(",");return await t.map(e=>({id:e,label:e}))}}}}})},591:function(e,t,r){},592:function(e,t,r){},608:function(e,t,r){"use strict";r.r(t);var o=r(0),a=r(2),c=r(6),n=r.n(c),l=r(165),i=r.n(l),s=r(166),m=r.n(s),d=r(1),u=r.n(d),_=r(4),b=r(21),p=r(11),h=r(19),O=r(16),j=r(38),w=r.n(j),y=r(12),f=r(15),v=r(20),g=r(503);r(591);class x extends o.Component{constructor(...e){super(...e),w()(this,"handleChartClick",()=>{const{selectedChart:e}=this.props;Object(y.getHistory)().push(this.getChartPath(e))})}getChartPath(e){return Object(y.getNewPath)({chart:e.key},"/analytics/"+e.endpoint,Object(y.getPersistedQuery)())}render(){const{charts:e,endpoint:t,path:r,query:c,selectedChart:n,filters:l}=this.props;return n?Object(o.createElement)("div",{role:"presentation",className:"woocommerce-dashboard__chart-block-wrapper",onClick:this.handleChartClick},Object(o.createElement)(_.Card,{className:"woocommerce-dashboard__chart-block"},Object(o.createElement)(_.CardHeader,null,Object(o.createElement)(v.Text,{variant:"title.small",as:"h3",size:"20",lineHeight:"28px"},n.label)),Object(o.createElement)(_.CardBody,{size:null},Object(o.createElement)("a",{className:"screen-reader-text",href:Object(f.e)(this.getChartPath(n))},Object(a.sprintf)(Object(a.__)("%s Report","woocommerce-admin"),n.label)),Object(o.createElement)(g.a,{charts:e,endpoint:t,query:c,interactiveLegend:!1,legendPosition:"bottom",path:r,selectedChart:n,showHeaderControls:!1,filters:l})))):null}}x.propTypes={charts:u.a.array,endpoint:u.a.string.isRequired,path:u.a.string.isRequired,query:u.a.object.isRequired,selectedChart:u.a.object.isRequired};var C=x,S=r(30),k=r(530),T=r(526),E=r(525),R=r(531),F=r(532),P=r(533);const A={revenue:E.b,orders:k.b,products:T.b,coupons:R.b,taxes:F.b,downloads:P.b},q=[{label:Object(a.__)("Total Sales","woocommerce-admin"),report:"revenue",key:"total_sales"},{label:Object(a.__)("Net Sales","woocommerce-admin"),report:"revenue",key:"net_revenue"},{label:Object(a.__)("Orders","woocommerce-admin"),report:"orders",key:"orders_count"},{label:Object(a.__)("Average Order Value","woocommerce-admin"),report:"orders",key:"avg_order_value"},{label:Object(a.__)("Items Sold","woocommerce-admin"),report:"products",key:"items_sold"},{label:Object(a.__)("Returns","woocommerce-admin"),report:"revenue",key:"refunds"},{label:Object(a.__)("Discounted Orders","woocommerce-admin"),report:"coupons",key:"orders_count"},{label:Object(a.__)("Gross discounted","woocommerce-admin"),report:"coupons",key:"amount"},{label:Object(a.__)("Total Tax","woocommerce-admin"),report:"taxes",key:"total_tax"},{label:Object(a.__)("Order Tax","woocommerce-admin"),report:"taxes",key:"order_tax"},{label:Object(a.__)("Shipping Tax","woocommerce-admin"),report:"taxes",key:"shipping_tax"},{label:Object(a.__)("Shipping","woocommerce-admin"),report:"revenue",key:"shipping"},{label:Object(a.__)("Downloads","woocommerce-admin"),report:"downloads",key:"download_count"}],I=Object(S.applyFilters)("woocommerce_admin_dashboard_charts_filter",q.map(e=>({...A[e.report].find(t=>t.key===e.key),label:e.label,endpoint:e.report})));r(592);const D=e=>{const{controls:t,hiddenBlocks:r,isFirst:c,isLast:l,onMove:s,onRemove:d,onTitleBlur:u,onTitleChange:j,onToggleHiddenBlock:w,path:y,title:f,titleInput:v,filters:g}=e,{updateUserPreferences:x,...S}=Object(p.useUserPreferences)(),[k,T]=Object(o.useState)(S.dashboard_chart_type||"line"),[E,R]=Object(o.useState)(S.dashboard_chart_interval||"day"),F={...e.query,chartType:k,interval:E},P=e=>()=>{T(e);x({dashboard_chart_type:e}),Object(O.recordEvent)("dash_charts_type_toggle",{chart_type:e})};return Object(o.createElement)("div",{className:"woocommerce-dashboard__dashboard-charts"},Object(o.createElement)(b.SectionHeader,{title:f||Object(a.__)("Charts","woocommerce-admin"),menu:Object(o.createElement)(b.EllipsisMenu,{label:Object(a.__)("Choose which charts to display","woocommerce-admin"),renderContent:({onToggle:e})=>Object(o.createElement)(o.Fragment,null,Object(o.createElement)(b.MenuTitle,null,Object(a.__)("Charts","woocommerce-admin")),(({hiddenBlocks:e,onToggleHiddenBlock:t})=>I.map(r=>{const a=r.endpoint+"_"+r.key,c=!e.includes(a);return Object(o.createElement)(b.MenuItem,{checked:c,isCheckbox:!0,isClickable:!0,key:r.endpoint+"_"+r.key,onInvoke:()=>{t(a)(),Object(O.recordEvent)("dash_charts_chart_toggle",{status:c?"off":"on",key:a})}},r.label)}))({hiddenBlocks:r,onToggleHiddenBlock:w}),Object(o.createElement)(t,{onToggle:e,onMove:s,onRemove:d,isFirst:c,isLast:l,onTitleBlur:u,onTitleChange:j,titleInput:v}))}),className:"has-interval-select"},(({chartInterval:e,setInterval:t,query:r})=>{const c=Object(h.getAllowedIntervalsForQuery)(r);if(!c||c.length<1)return null;const n={hour:Object(a.__)("By hour","woocommerce-admin"),day:Object(a.__)("By day","woocommerce-admin"),week:Object(a.__)("By week","woocommerce-admin"),month:Object(a.__)("By month","woocommerce-admin"),quarter:Object(a.__)("By quarter","woocommerce-admin"),year:Object(a.__)("By year","woocommerce-admin")};return Object(o.createElement)(_.SelectControl,{className:"woocommerce-chart__interval-select",value:e,options:c.map(e=>({value:e,label:n[e]})),"aria-label":"Chart period",onChange:t})})({chartInterval:E,setInterval:e=>{R(e);x({dashboard_chart_interval:e}),Object(O.recordEvent)("dash_charts_interval",{interval:e})},query:F}),Object(o.createElement)(_.NavigableMenu,{className:"woocommerce-chart__types",orientation:"horizontal",role:"menubar"},Object(o.createElement)(_.Button,{className:n()("woocommerce-chart__type-button",{"woocommerce-chart__type-button-selected":!F.chartType||"line"===F.chartType}),title:Object(a.__)("Line chart","woocommerce-admin"),"aria-checked":"line"===F.chartType,role:"menuitemradio",tabIndex:"line"===F.chartType?0:-1,onClick:P("line")},Object(o.createElement)(i.a,null)),Object(o.createElement)(_.Button,{className:n()("woocommerce-chart__type-button",{"woocommerce-chart__type-button-selected":"bar"===F.chartType}),title:Object(a.__)("Bar chart","woocommerce-admin"),"aria-checked":"bar"===F.chartType,role:"menuitemradio",tabIndex:"bar"===F.chartType?0:-1,onClick:P("bar")},Object(o.createElement)(m.a,null)))),(({hiddenBlocks:e,path:t,query:r,filters:a})=>{const c=I.reduce((e,t)=>(void 0===e[t.endpoint]&&(e[t.endpoint]=[]),e[t.endpoint].push(t),e),{});return Object(o.createElement)("div",{className:"woocommerce-dashboard__columns"},I.map(n=>e.includes(n.endpoint+"_"+n.key)?null:Object(o.createElement)(C,{charts:c[n.endpoint],endpoint:n.endpoint,key:n.endpoint+"_"+n.key,path:t,query:r,selectedChart:n,filters:a})))})({hiddenBlocks:r,path:y,query:F,filters:g}))};D.propTypes={path:u.a.string.isRequired,query:u.a.object.isRequired};t.default=D}}]);