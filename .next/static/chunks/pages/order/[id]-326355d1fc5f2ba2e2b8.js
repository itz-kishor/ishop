_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"/0+H":function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(c.AmpStateContext))};var n,a=(n=r("q1tI"))&&n.__esModule?n:{default:n},c=r("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,a=void 0!==n&&n,c=e.hasQuery,i=void 0!==c&&c;return r||a&&i}},"8Kt/":function(e,t,r){"use strict";r("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var n,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var c=n?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(r,a,c):r[a]=e[a]}r.default=e,t&&t.set(e,r);return r}(r("q1tI")),c=(n=r("Xuae"))&&n.__esModule?n:{default:n},i=r("lwAK"),o=r("FYa8"),s=r("/0+H");function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var r=a.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(l,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(a){var c=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?c=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?c=!1:t.add(a.type);break;case"meta":for(var o=0,s=f.length;o<s;o++){var d=f[o];if(a.props.hasOwnProperty(d))if("charSet"===d)r.has(d)?c=!1:r.add(d);else{var u=a.props[d],l=n[d]||new Set;l.has(u)?c=!1:(l.add(u),n[d]=l)}}}return c}}()).reverse().map((function(e,t){var r=e.key||t;return a.default.cloneElement(e,{key:r})}))}function h(e){var t=e.children,r=(0,a.useContext)(i.AmpStateContext),n=(0,a.useContext)(o.HeadManagerContext);return a.default.createElement(c.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,s.isInAmpMode)(r)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},Ivv9:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order/[id]",function(){return r("u6i0")}])},RIqP:function(e,t,r){var n=r("Ijbi"),a=r("EbDI"),c=r("ZhPi"),i=r("Bnag");e.exports=function(e){return n(e)||a(e)||c(e)||i()}},Xuae:function(e,t,r){"use strict";var n=r("RIqP"),a=r("lwsE"),c=r("W8MJ"),i=(r("PJYZ"),r("7W2i")),o=r("a1gu"),s=r("Nsbk");function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var a=s(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return o(this,r)}}t.__esModule=!0,t.default=void 0;var u=r("q1tI"),l=function(e){i(r,e);var t=d(r);function r(e){var c;return a(this,r),(c=t.call(this,e))._hasHeadManager=void 0,c.emitChange=function(){c._hasHeadManager&&c.props.headManager.updateHead(c.props.reduceComponentsToState(n(c.props.headManager.mountedInstances),c.props))},c._hasHeadManager=c.props.headManager&&c.props.headManager.mountedInstances,c}return c(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(u.Component);t.default=l},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},lwAK:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var a=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=a},u6i0:function(e,t,r){"use strict";r.r(t);var n=r("nKUr"),a=r("8Kt/"),c=r.n(a),i=r("q1tI"),o=r("qG/y"),s=r("nOHt"),d=r("YFqc"),u=r.n(d),l=r("rePB"),f=r("EFaQ"),p=r("WtUO");function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(e){var t=e.orderDetail,r=e.state,a=e.dispatch,c=r.auth,i=r.orders;return c.user?Object(n.jsx)(n.Fragment,{children:t.map((function(e){return Object(n.jsxs)("div",{style:{margin:"20px auto"},className:"row justify-content-around",children:[Object(n.jsxs)("div",{className:"text-uppercase my-3",style:{maxWidth:"600px"},children:[Object(n.jsxs)("h2",{className:"text-break",children:["Order ",e._id]}),Object(n.jsxs)("div",{className:"mt-4 text-secondary",children:[Object(n.jsx)("h3",{children:"Shipping"}),Object(n.jsxs)("p",{children:["Name: ",e.user.name]}),Object(n.jsxs)("p",{children:["Email: ",e.user.email]}),Object(n.jsxs)("p",{children:["Address: ",e.address]}),Object(n.jsxs)("p",{children:["Mobile: ",e.mobile]}),Object(n.jsxs)("div",{className:"alert ".concat(e.delivered?"alert-success":"alert-danger","\n                        d-flex justify-content-between align-items-center"),role:"alert",children:[e.delivered?"Deliverd on ".concat(e.updatedAt):"Not Delivered","admin"===c.user.role&&!e.delivered&&Object(n.jsx)("button",{className:"btn btn-dark text-uppercase",onClick:function(){return function(e){a({type:"NOTIFY",payload:{loading:!0}}),Object(f.c)("order/delivered/".concat(e._id),null,c.token).then((function(t){if(t.err)return a({type:"NOTIFY",payload:{error:t.err}});var r=t.result,n=r.paid,c=r.dateOfPayment,o=r.method,s=r.delivered;return a(Object(p.f)(i,e._id,m(m({},e),{},{paid:n,dateOfPayment:c,method:o,delivered:s}),"ADD_ORDERS")),a({type:"NOTIFY",payload:{success:t.msg}})}))}(e)},children:"Mark as delivered"})]}),Object(n.jsx)("h3",{children:"Payment"}),e.method&&Object(n.jsxs)("h6",{children:["Method: ",Object(n.jsx)("em",{children:e.method})]}),e.paymentId&&Object(n.jsxs)("p",{children:["PaymentId: ",Object(n.jsx)("em",{children:e.paymentId})]}),Object(n.jsx)("div",{className:"alert ".concat(e.paid?"alert-success":"alert-danger","\n                        d-flex justify-content-between align-items-center"),role:"alert",children:e.paid?"Paid on ".concat(e.dateOfPayment):"Not Paid"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Order Items"}),e.cart.map((function(e){return Object(n.jsxs)("div",{className:"row border-bottom mx-0 p-2 justify-content-betwenn\r align-items-center",style:{maxWidth:"550px"},children:[Object(n.jsx)("img",{src:e.images[0].url,alt:e.images[0].url,style:{width:"50px",height:"45px",objectFit:"cover"}}),Object(n.jsx)("h5",{className:"flex-fill text-secondary px-3 m-0",children:Object(n.jsx)(u.a,{href:"/product/".concat(e._id),children:Object(n.jsx)("a",{children:e.title})})}),Object(n.jsxs)("span",{className:"text-info m-0",children:[e.quantity," x \u20b9",e.price," = \u20b9",e.price*e.quantity]})]},e._id)}))]})]})]}),!e.paid&&"admin"!==c.user.role&&Object(n.jsx)("div",{className:"p-4",children:Object(n.jsxs)("h2",{className:"mb-4 text-uppercase",children:["Total: \u20b9",e.total]})})]},e._id)}))}):null};t.default=function(){var e=Object(i.useContext)(o.a),t=e.state,r=e.dispatch,a=t.orders,d=t.auth,u=Object(s.useRouter)(),l=Object(i.useState)([]),f=l[0],p=l[1];return Object(i.useEffect)((function(){var e=a.filter((function(e){return e._id===u.query.id}));p(e)}),[a]),d.user?Object(n.jsxs)("div",{className:"my-3",children:[Object(n.jsx)(c.a,{children:Object(n.jsx)("title",{children:"Detail Orders"})}),Object(n.jsx)("div",{children:Object(n.jsxs)("button",{className:"btn btn-dark",onClick:function(){return u.back()},children:[Object(n.jsx)("i",{className:"fas fa-long-arrow-alt-left","aria-hidden":"true"})," Go Back"]})}),Object(n.jsx)(b,{orderDetail:f,state:t,dispatch:r})]}):null}}},[["Ivv9",0,2,1,3,4]]]);