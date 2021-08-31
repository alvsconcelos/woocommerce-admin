(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[7],{476:function(e,t,r){"use strict";r.r(t);var o=r(0),c=r(1),a=r.n(c),s=r(2),n=r(30),i=r(7),m=r(499),l=r(53);const{addCesSurveyForAnalytics:d}=Object(i.dispatch)(l.c),u=Object(n.applyFilters)("woocommerce_admin_categories_report_charts",[{key:"items_sold",label:Object(s.__)("Items sold","woocommerce-admin"),order:"desc",orderby:"items_sold",type:"number"},{key:"net_revenue",label:Object(s.__)("Net sales","woocommerce-admin"),order:"desc",orderby:"net_revenue",type:"currency"},{key:"orders_count",label:Object(s.__)("Orders","woocommerce-admin"),order:"desc",orderby:"orders_count",type:"number"}]),b=Object(n.applyFilters)("woocommerce_admin_category_report_advanced_filters",{filters:{},title:Object(s._x)("Categories match {{select /}} filters","A sentence describing filters for Categories. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ","woocommerce-admin")}),g=[{label:Object(s.__)("All categories","woocommerce-admin"),value:"all"},{label:Object(s.__)("Single category","woocommerce-admin"),value:"select_category",chartMode:"item-comparison",subFilters:[{component:"Search",value:"single_category",chartMode:"item-comparison",path:["select_category"],settings:{type:"categories",param:"categories",getLabels:m.a,labels:{placeholder:Object(s.__)("Type to search for a category","woocommerce-admin"),button:Object(s.__)("Single Category","woocommerce-admin")}}}]},{label:Object(s.__)("Comparison","woocommerce-admin"),value:"compare-categories",chartMode:"item-comparison",settings:{type:"categories",param:"categories",getLabels:m.a,labels:{helpText:Object(s.__)("Check at least two categories below to compare","woocommerce-admin"),placeholder:Object(s.__)("Search for categories to compare","woocommerce-admin"),title:Object(s.__)("Compare Categories","woocommerce-admin"),update:Object(s.__)("Compare","woocommerce-admin")},onClick:d}}];Object.keys(b.filters).length&&g.push({label:Object(s.__)("Advanced filters","woocommerce-admin"),value:"advanced"});const _=Object(n.applyFilters)("woocommerce_admin_categories_report_filters",[{label:Object(s.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:()=>!0,filters:g}]);var p=r(14),y=r(3),O=r(12),j=r(21),h=r(120),f=r(11),w=r(515),v=r(503),C=r(498);class S extends o.Component{constructor(e){super(e),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:Object(s.__)("Category","woocommerce-admin"),key:"category",required:!0,isSortable:!0,isLeftAligned:!0},{label:Object(s.__)("Items sold","woocommerce-admin"),key:"items_sold",required:!0,defaultSort:!0,isSortable:!0,isNumeric:!0},{label:Object(s.__)("Net sales","woocommerce-admin"),key:"net_revenue",isSortable:!0,isNumeric:!0},{label:Object(s.__)("Products","woocommerce-admin"),key:"products_count",isSortable:!0,isNumeric:!0},{label:Object(s.__)("Orders","woocommerce-admin"),key:"orders_count",isSortable:!0,isNumeric:!0}]}getRowsContent(e){const{render:t,formatDecimal:r,getCurrencyConfig:c}=this.context,a=c();return Object(y.map)(e,e=>{const{category_id:c,items_sold:s,net_revenue:n,products_count:i,orders_count:m}=e,{categories:l,query:d}=this.props,u=l.get(c),b=Object(O.getPersistedQuery)(d);return[{display:Object(o.createElement)(w.a,{query:d,category:u,categories:l}),value:u&&u.name},{display:Object(h.formatValue)(a,"number",s),value:s},{display:t(n),value:r(n)},{display:u&&Object(o.createElement)(j.Link,{href:Object(O.getNewPath)(b,"/analytics/categories",{filter:"single_category",categories:u.id}),type:"wc-admin"},Object(h.formatValue)(a,"number",i)),value:i},{display:Object(h.formatValue)(a,"number",m),value:m}]})}getSummary(e,t=0){const{items_sold:r=0,net_revenue:o=0,orders_count:c=0}=e,{formatAmount:a,getCurrencyConfig:n}=this.context,i=n();return[{label:Object(s._n)("Category","Categories",t,"woocommerce-admin"),value:Object(h.formatValue)(i,"number",t)},{label:Object(s._n)("Item sold","Items sold",r,"woocommerce-admin"),value:Object(h.formatValue)(i,"number",r)},{label:Object(s.__)("Net sales","woocommerce-admin"),value:a(o)},{label:Object(s._n)("Order","Orders",c,"woocommerce-admin"),value:Object(h.formatValue)(i,"number",c)}]}render(){const{advancedFilters:e,filters:t,isRequesting:r,query:c}=this.props,a={helpText:Object(s.__)("Check at least two categories below to compare","woocommerce-admin"),placeholder:Object(s.__)("Search by category name","woocommerce-admin")};return Object(o.createElement)(v.a,{compareBy:"categories",endpoint:"categories",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["items_sold","net_revenue","orders_count"],isRequesting:r,itemIdField:"category_id",query:c,searchBy:"categories",labels:a,tableQuery:{orderby:c.orderby||"items_sold",order:c.order||"desc",extended_info:!0},title:Object(s.__)("Categories","woocommerce-admin"),columnPrefsKey:"categories_report_columns",filters:t,advancedFilters:e})}}S.contextType=C.a;var k=Object(p.compose)(Object(i.withSelect)((e,t)=>{const{isRequesting:r,query:o}=t;if(r||o.search&&(!o.categories||!o.categories.length))return{};const{getItems:c,getItemsError:a,isResolving:s}=e(f.ITEMS_STORE_NAME),n={per_page:-1};return{categories:c("categories",n),isError:Boolean(a("categories",n)),isRequesting:s("getItems",["categories",n])}}))(S),E=r(507),q=r(505),A=r(508),N=r(527),R=r(502);class P extends o.Component{getChartMeta(){const{query:e}=this.props,t="compare-categories"===e.filter&&e.categories&&e.categories.split(",").length>1,r="single_category"===e.filter&&!!e.categories,o=t||r?"item-comparison":"time-comparison";return{isSingleCategoryView:r,itemsLabel:r?Object(s.__)("%d products","woocommerce-admin"):Object(s.__)("%d categories","woocommerce-admin"),mode:o}}render(){const{isRequesting:e,query:t,path:r}=this.props,{mode:c,itemsLabel:a,isSingleCategoryView:s}=this.getChartMeta(),n={...t};return"item-comparison"===c&&(n.segmentby=s?"product":"category"),Object(o.createElement)(o.Fragment,null,Object(o.createElement)(R.a,{query:t,path:r,filters:_,advancedFilters:b,report:"categories"}),Object(o.createElement)(A.a,{charts:u,endpoint:"products",isRequesting:e,limitProperties:s?["products","categories"]:["categories"],query:n,selectedChart:Object(E.a)(t.chart,u),filters:_,advancedFilters:b,report:"categories"}),Object(o.createElement)(q.a,{charts:u,filters:_,advancedFilters:b,mode:c,endpoint:"products",limitProperties:s?["products","categories"]:["categories"],path:r,query:n,isRequesting:e,itemsLabel:a,selectedChart:Object(E.a)(t.chart,u)}),s?Object(o.createElement)(N.a,{isRequesting:e,query:n,baseSearchQuery:{filter:"single_category"},hideCompare:s,filters:_,advancedFilters:b}):Object(o.createElement)(k,{isRequesting:e,query:t,filters:_,advancedFilters:b}))}}P.propTypes={query:a.a.object.isRequired,path:a.a.string.isRequired};t.default=P},499:function(e,t,r){"use strict";r.d(t,"e",(function(){return d})),r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return g})),r.d(t,"d",(function(){return _})),r.d(t,"f",(function(){return p})),r.d(t,"h",(function(){return y})),r.d(t,"g",(function(){return O}));var o=r(15),c=r(17),a=r.n(c),s=r(3),n=r(12),i=r(11),m=r(13),l=r(500);function d(e,t=s.identity){return function(r="",c){const s="function"==typeof e?e(c):e,i=Object(n.getIdsFromQuery)(r);if(i.length<1)return Promise.resolve([]);const m={include:i.join(","),per_page:i.length};return a()({path:Object(o.addQueryArgs)(s,m)}).then(e=>e.map(t))}}d(i.NAMESPACE+"/products/attributes",e=>({key:e.id,label:e.name}));const u=d(i.NAMESPACE+"/products/categories",e=>({key:e.id,label:e.name})),b=d(i.NAMESPACE+"/coupons",e=>({key:e.id,label:e.code})),g=d(i.NAMESPACE+"/customers",e=>({key:e.id,label:e.name})),_=d(i.NAMESPACE+"/products",e=>({key:e.id,label:e.name})),p=d(i.NAMESPACE+"/taxes",e=>({key:e.id,label:Object(l.a)(e)}));function y({attributes:e,name:t}){const r=Object(m.f)("variationTitleAttributesSeparator"," - ");if(t.indexOf(r)>-1)return t;const o=e.map(({option:e})=>e).join(", ");return o?t+r+o:t}const O=d(({products:e})=>e?i.NAMESPACE+`/products/${e}/variations`:i.NAMESPACE+"/variations",e=>({key:e.id,label:y(e)}))},500:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var o=r(2);function c(e){return[e.country,e.state,e.name||Object(o.__)("TAX","woocommerce-admin"),e.priority].map(e=>e.toString().toUpperCase().trim()).filter(Boolean).join("-")}},510:function(e,t,r){"use strict";function o(e,t,r){return!!t&&(e&&t<=r==="instock")}r.d(t,"a",(function(){return o}))},515:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var o=r(0),c=r(3),a=r(4),s=r(21),n=r(12);class i extends o.Component{getCategoryAncestorIds(e,t){const r=[];let o=e.parent;for(;o;)r.unshift(o),o=t.get(o).parent;return r}getCategoryAncestors(e,t){const r=this.getCategoryAncestorIds(e,t);if(r.length)return 1===r.length?t.get(Object(c.first)(r)).name+" › ":2===r.length?t.get(Object(c.first)(r)).name+" › "+t.get(Object(c.last)(r)).name+" › ":t.get(Object(c.first)(r)).name+" … "+t.get(Object(c.last)(r)).name+" › "}render(){const{categories:e,category:t,query:r}=this.props,c=Object(n.getPersistedQuery)(r);return t?Object(o.createElement)("div",{className:"woocommerce-table__breadcrumbs"},this.getCategoryAncestors(t,e),Object(o.createElement)(s.Link,{href:Object(n.getNewPath)(c,"/analytics/categories",{filter:"single_category",categories:t.id}),type:"wc-admin"},t.name)):Object(o.createElement)(a.Spinner,null)}}},527:function(e,t,r){"use strict";var o=r(0),c=r(2),a=r(14),s=r(28),n=r(7),i=r(3),m=r(12),l=r(21),d=r(120),u=r(13),b=r(11),g=r(515),_=r(510),p=r(503),y=r(498);r(528);const O=Object(u.f)("manageStock","no"),j=Object(u.f)("stockStatuses",{});class h extends o.Component{constructor(){super(),this.getHeadersContent=this.getHeadersContent.bind(this),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:Object(c.__)("Product title","woocommerce-admin"),key:"product_name",required:!0,isLeftAligned:!0,isSortable:!0},{label:Object(c.__)("SKU","woocommerce-admin"),key:"sku",hiddenByDefault:!0,isSortable:!0},{label:Object(c.__)("Items sold","woocommerce-admin"),key:"items_sold",required:!0,defaultSort:!0,isSortable:!0,isNumeric:!0},{label:Object(c.__)("Net sales","woocommerce-admin"),screenReaderLabel:Object(c.__)("Net sales","woocommerce-admin"),key:"net_revenue",required:!0,isSortable:!0,isNumeric:!0},{label:Object(c.__)("Orders","woocommerce-admin"),key:"orders_count",isSortable:!0,isNumeric:!0},{label:Object(c.__)("Category","woocommerce-admin"),key:"product_cat"},{label:Object(c.__)("Variations","woocommerce-admin"),key:"variations",isSortable:!0},"yes"===O?{label:Object(c.__)("Status","woocommerce-admin"),key:"stock_status"}:null,"yes"===O?{label:Object(c.__)("Stock","woocommerce-admin"),key:"stock",isNumeric:!0}:null].filter(Boolean)}getRowsContent(e=[]){const{query:t}=this.props,r=Object(m.getPersistedQuery)(t),{render:a,formatDecimal:n,getCurrencyConfig:b}=this.context,p=b();return Object(i.map)(e,e=>{const{product_id:i,items_sold:b,net_revenue:y,orders_count:h}=e,f=e.extended_info||{},{category_ids:w,low_stock_amount:v,manage_stock:C,sku:S,stock_status:k,stock_quantity:E,variations:q=[]}=f,A=Object(s.decodeEntities)(f.name),N=Object(m.getNewPath)(r,"/analytics/orders",{filter:"advanced",product_includes:i}),R=Object(m.getNewPath)(r,"/analytics/products",{filter:"single_product",products:i}),{categories:P}=this.props,x=w&&P&&w.map(e=>P.get(e)).filter(Boolean)||[],F=Object(_.a)(k,E,v)?Object(o.createElement)(l.Link,{href:Object(u.e)("post.php?action=edit&post="+i),type:"wp-admin"},Object(c._x)("Low","Indication of a low quantity","woocommerce-admin")):j[k];return[{display:Object(o.createElement)(l.Link,{href:R,type:"wc-admin"},A),value:A},{display:S,value:S},{display:Object(d.formatValue)(p,"number",b),value:b},{display:a(y),value:n(y)},{display:Object(o.createElement)(l.Link,{href:N,type:"wc-admin"},h),value:h},{display:Object(o.createElement)("div",{className:"woocommerce-table__product-categories"},x[0]&&Object(o.createElement)(g.a,{category:x[0],categories:P}),x.length>1&&Object(o.createElement)(l.Tag,{label:Object(c.sprintf)(Object(c._x)("+%d more","categories","woocommerce-admin"),x.length-1),popoverContents:x.map(e=>Object(o.createElement)(g.a,{category:e,categories:P,key:e.id,query:t}))})),value:x.map(e=>e.name).join(", ")},{display:Object(d.formatValue)(p,"number",q.length),value:q.length},"yes"===O?{display:C?F:Object(c.__)("N/A","woocommerce-admin"),value:C?j[k]:null}:null,"yes"===O?{display:C?Object(d.formatValue)(p,"number",E):Object(c.__)("N/A","woocommerce-admin"),value:E}:null].filter(Boolean)})}getSummary(e){const{products_count:t=0,items_sold:r=0,net_revenue:o=0,orders_count:a=0}=e,{formatAmount:s,getCurrencyConfig:n}=this.context,i=n();return[{label:Object(c._n)("Product","Products",t,"woocommerce-admin"),value:Object(d.formatValue)(i,"number",t)},{label:Object(c._n)("Item sold","Items sold",r,"woocommerce-admin"),value:Object(d.formatValue)(i,"number",r)},{label:Object(c.__)("Net sales","woocommerce-admin"),value:s(o)},{label:Object(c._n)("Orders","Orders",a,"woocommerce-admin"),value:Object(d.formatValue)(i,"number",a)}]}render(){const{advancedFilters:e,baseSearchQuery:t,filters:r,hideCompare:a,isRequesting:s,query:n}=this.props,i={helpText:Object(c.__)("Check at least two products below to compare","woocommerce-admin"),placeholder:Object(c.__)("Search by product name or SKU","woocommerce-admin")};return Object(o.createElement)(p.a,{compareBy:a?void 0:"products",endpoint:"products",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["products_count","items_sold","net_revenue","orders_count"],itemIdField:"product_id",isRequesting:s,labels:i,query:n,searchBy:"products",baseSearchQuery:t,tableQuery:{orderby:n.orderby||"items_sold",order:n.order||"desc",extended_info:!0,segmentby:n.segmentby},title:Object(c.__)("Products","woocommerce-admin"),columnPrefsKey:"products_report_columns",filters:r,advancedFilters:e})}}h.contextType=y.a,t.a=Object(a.compose)(Object(n.withSelect)((e,t)=>{const{query:r,isRequesting:o}=t,{getItems:c,getItemsError:a,isResolving:s}=e(b.ITEMS_STORE_NAME);if(o||r.search&&(!r.products||!r.products.length))return{};const n={per_page:-1};return{categories:c("categories",n),isError:Boolean(a("categories",n)),isRequesting:s("getItems",["categories",n])}}))(h)},528:function(e,t,r){}}]);