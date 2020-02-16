/*! For license information please see aa942060.42a059c1.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{155:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"default",(function(){return s}));var r=t(1),o=t(9),a=(t(178),t(177)),l={id:"loading-graphql-files",title:"Loading .graphql Files",sidebar_label:"Loading .graphql Files"},c=[],u={id:"loading-graphql-files",title:"Loading .graphql Files",description:"To load `.gql` and `.graphql` files, first install the [`graphql`](https://www.npmjs.com/package/graphql) and [`graphql.macro`](https://www.npmjs.com/package/graphql.macro) packages by running:",source:"@site/../docs/loading-graphql-files.md",permalink:"/docs/loading-graphql-files",editUrl:"https://github.com/facebook/create-react-app/edit/master/docusaurus/website/../docs/loading-graphql-files.md",lastUpdatedBy:"nagman",lastUpdatedAt:1556602004,sidebar_label:"Loading .graphql Files",sidebar:"docs",previous:{title:"Adding Images, Fonts, and Files",permalink:"/docs/adding-images-fonts-and-files"},next:{title:"Using the Public Folder",permalink:"/docs/using-the-public-folder"}},i={rightToc:c,metadata:u},p="wrapper";function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)(p,Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To load ",Object(a.b)("inlineCode",{parentName:"p"},".gql")," and ",Object(a.b)("inlineCode",{parentName:"p"},".graphql")," files, first install the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/graphql"}),Object(a.b)("inlineCode",{parentName:"a"},"graphql"))," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/graphql.macro"}),Object(a.b)("inlineCode",{parentName:"a"},"graphql.macro"))," packages by running:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save graphql graphql.macro\n")),Object(a.b)("p",null,"Alternatively you may use ",Object(a.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"yarn add graphql graphql.macro\n")),Object(a.b)("p",null,"Then, whenever you want to load ",Object(a.b)("inlineCode",{parentName:"p"},".gql")," or ",Object(a.b)("inlineCode",{parentName:"p"},".graphql")," files, import the ",Object(a.b)("inlineCode",{parentName:"p"},"loader")," from the macro package:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { loader } from 'graphql.macro';\n\nconst query = loader('./foo.graphql');\n")),Object(a.b)("p",null,"And your results get automatically inlined! This means that if the file above, ",Object(a.b)("inlineCode",{parentName:"p"},"foo.graphql"),", contains the following:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  hello {\n    world\n  }\n}\n")),Object(a.b)("p",null,"The previous example turns into:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"const query = {\n  'kind': 'Document',\n  'definitions': [{\n    ...\n  }],\n  'loc': {\n    ...\n    'source': {\n      'body': '\\\\\\\\n  query {\\\\\\\\n    hello {\\\\\\\\n      world\\\\\\\\n    }\\\\\\\\n  }\\\\\\\\n',\n      'name': 'GraphQL request',\n      ...\n    }\n  }\n};\n")),Object(a.b)("p",null,"You can also use the ",Object(a.b)("inlineCode",{parentName:"p"},"gql")," template tag the same way you would use the non-macro version from ",Object(a.b)("inlineCode",{parentName:"p"},"graphql-tag")," package with the added benefit of inlined parsing results."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { gql } from 'graphql.macro';\n \nconst query = gql`\n  query User {\n    user(id: 5) {\n      lastName\n      ...UserEntry1\n    }\n  }\n`;\n")))}s.isMDXComponent=!0},177:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return s}));var r=t(0),o=t.n(r),a=o.a.createContext({}),l=function(e){var n=o.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=l(e.components);return o.a.createElement(a.Provider,{value:n},e.children)};var u="mdxType",i={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),p=l(t),s=r,f=p[c+"."+s]||p[s]||i[s]||a;return t?o.a.createElement(f,Object.assign({},{ref:n},u,{components:t})):o.a.createElement(f,Object.assign({},{ref:n},u))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=p;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[u]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=t[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},178:function(e,n,t){"use strict";e.exports=t(179)},179:function(e,n,t){"use strict";var r=t(180),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,l=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,i=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var m=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var y="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function v(e,n,t){this.props=e,this.context=n,this.refs=j,this.updater=t||h}function O(){}function w(e,n,t){this.props=e,this.context=n,this.refs=j,this.updater=t||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,n,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=v.prototype;var q=w.prototype=new O;q.constructor=w,r(q,v.prototype),q.isPureReactComponent=!0;var k={current:null},C={current:null},S=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function _(e,n,t){var r,o={},l=null,c=null;if(null!=n)for(r in void 0!==n.ref&&(c=n.ref),void 0!==n.key&&(l=""+n.key),n)S.call(n,r)&&!N.hasOwnProperty(r)&&(o[r]=n[r]);var u=arguments.length-2;if(1===u)o.children=t;else if(1<u){for(var i=Array(u),p=0;p<u;p++)i[p]=arguments[p+2];o.children=i}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:a,type:e,key:l,ref:c,props:o,_owner:C.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g,P=[];function $(e,n,t,r){if(P.length){var o=P.pop();return o.result=e,o.keyPrefix=n,o.func=t,o.context=r,o.count=0,o}return{result:e,keyPrefix:n,func:t,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function T(e,n,t){return null==e?0:function e(n,t,r,o){var c=typeof n;"undefined"!==c&&"boolean"!==c||(n=null);var u=!1;if(null===n)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(n.$$typeof){case a:case l:u=!0}}if(u)return r(o,n,""===t?"."+A(n,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(n))for(var i=0;i<n.length;i++){var p=t+A(c=n[i],i);u+=e(c,p,r,o)}else if(null===n||"object"!=typeof n?p=null:p="function"==typeof(p=y&&n[y]||n["@@iterator"])?p:null,"function"==typeof p)for(n=p.call(n),i=0;!(c=n.next()).done;)u+=e(c=c.value,p=t+A(c,i++),r,o);else if("object"===c)throw r=""+n,Error(g(31,"[object Object]"===r?"object with keys {"+Object.keys(n).join(", ")+"}":r,""));return u}(e,"",n,t)}function A(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return n[e]}))}(e.key):n.toString(36)}function F(e,n){e.func.call(e.context,n,e.count++)}function U(e,n,t){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,n,e.count++),Array.isArray(e)?L(e,r,t,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,n){return{$$typeof:a,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||n&&n.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+t)),r.push(e))}function L(e,n,t,r,o){var a="";null!=t&&(a=(""+t).replace(E,"$&/")+"/"),T(e,U,n=$(n,a,r,o)),R(n)}function I(){var e=k.current;if(null===e)throw Error(g(321));return e}var M={Children:{map:function(e,n,t){if(null==e)return e;var r=[];return L(e,r,null,n,t),r},forEach:function(e,n,t){if(null==e)return e;T(e,F,n=$(null,null,n,t)),R(n)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var n=[];return L(e,n,null,(function(e){return e})),n},only:function(e){if(!x(e))throw Error(g(143));return e}},createRef:function(){return{current:null}},Component:v,PureComponent:w,createContext:function(e,n){return void 0===n&&(n=null),(e={$$typeof:s,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},memo:function(e,n){return{$$typeof:m,type:e,compare:void 0===n?null:n}},useCallback:function(e,n){return I().useCallback(e,n)},useContext:function(e,n){return I().useContext(e,n)},useEffect:function(e,n){return I().useEffect(e,n)},useImperativeHandle:function(e,n,t){return I().useImperativeHandle(e,n,t)},useDebugValue:function(){},useLayoutEffect:function(e,n){return I().useLayoutEffect(e,n)},useMemo:function(e,n){return I().useMemo(e,n)},useReducer:function(e,n,t){return I().useReducer(e,n,t)},useRef:function(e){return I().useRef(e)},useState:function(e){return I().useState(e)},Fragment:c,Profiler:i,StrictMode:u,Suspense:d,createElement:_,cloneElement:function(e,n,t){if(null==e)throw Error(g(267,e));var o=r({},e.props),l=e.key,c=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,u=C.current),void 0!==n.key&&(l=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(p in n)S.call(n,p)&&!N.hasOwnProperty(p)&&(o[p]=void 0===n[p]&&void 0!==i?i[p]:n[p])}var p=arguments.length-2;if(1===p)o.children=t;else if(1<p){i=Array(p);for(var s=0;s<p;s++)i[s]=arguments[s+2];o.children=i}return{$$typeof:a,type:e.type,key:l,ref:c,props:o,_owner:u}},createFactory:function(e){var n=_.bind(null,e);return n.type=e,n},isValidElement:x,version:"16.11.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:k,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r}},D={default:M},B=D&&M||D;e.exports=B.default||B},180:function(e,n,t){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function l(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,n){for(var t,c,u=l(e),i=1;i<arguments.length;i++){for(var p in t=Object(arguments[i]))o.call(t,p)&&(u[p]=t[p]);if(r){c=r(t);for(var s=0;s<c.length;s++)a.call(t,c[s])&&(u[c[s]]=t[c[s]])}}return u}}}]);