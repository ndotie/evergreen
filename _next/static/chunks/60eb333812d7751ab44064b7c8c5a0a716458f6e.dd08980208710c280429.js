(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"3kRa":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI"),r=n.n(a),c="undefined"!==typeof document?a.useLayoutEffect:a.useEffect;function i(e){var t=r.a.useRef(e);return c((function(){t.current=e})),t}},PkHI:function(e,t,n){"use strict";var a=n("wx14"),r=n("rePB"),c=n("Ff2n"),i=n("q1tI"),o=n.n(i),s=n("TSYQ"),u=n.n(s),l=n("17x9"),d=n.n(l),f=n("Zl74"),b=n("3kRa"),p=n("egZc"),j=n("TsTy"),O=n("raqX");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(){},g={_active:"&:active",_after:"&:after",_before:"&:before",_current:'&[aria-current="page"], &[aria-selected="true"]',_disabled:'&[aria-disabled="true"]',_focus:"&:focus",_hover:"&:hover"},m=Object(i.memo)(Object(i.forwardRef)((function(e,t){var n,r=e.appearance,s=void 0===r?"secondary":r,l=e.direction,d=void 0===l?"horizontal":l,h=e.disabled,m=void 0!==h&&h,w=e.is,x=void 0===w?"span":w,k=e.isSelected,I=e.onKeyDown,T=void 0===I?v:I,P=e.onSelect,S=void 0===P?v:P,D=e.height,_=void 0===D?28:D,z=e.className,E=e.tabIndex,R=Object(c.a)(e,["appearance","direction","disabled","is","isSelected","onKeyDown","onSelect","height","className","tabIndex"]),C=Object(f.a)("Tab",{appearance:s,direction:d},g,function(e){return{alignItems:"center",justifyContent:"horizontal"===e?"center":"flex-start",textDecoration:"none",cursor:"pointer",outline:"none",WebkitFontSmoothing:"antialiased",WebkitAppearance:"none",MozAppearance:"none","&::-moz-focus-inner ":{border:0},display:"horizontal"===e?"inline-flex":"flex",width:"horizontal"===e?"auto":"100%"}}(d)),K=C.className,N=Object(c.a)(C,["className"]),q=Object(b.a)(e.onClick),H=Object(i.useCallback)((function(e){Object(j.a)(q.current,e),m||S()}),[m,S]),B=Object(p.a)({disabled:m,onKeyDown:T,tabIndex:E});return m&&(n={"aria-disabled":!0}),n="a"===x?k?y(y({},n),{},{"aria-current":"page"}):{}:y(y({},n),{},{"aria-selected":k,role:"tab"}),o.a.createElement(O.a,Object(a.a)({className:u()(z,K),is:x,size:300,height:_,ref:t,tabIndex:0},N,R,{onClick:H},B,n))})));m.propTypes=y(y({},O.a.propTypes),{},{onSelect:d.a.func,isSelected:d.a.bool,appearance:d.a.string,direction:d.a.oneOf(["horizontal","vertical"]),className:d.a.string}),t.a=m},TsTy:function(e,t,n){"use strict";function a(e){if("function"===typeof e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return e.apply(void 0,n)}}n.d(t,"a",(function(){return a}))},dhfL:function(e,t,n){"use strict";var a=n("nKUr"),r=(n("q1tI"),n("20a2")),c=n("Ar1z"),i=n("fnxK"),o=n("eqHG"),s=n("MfQJ"),u=n("Cino"),l=n("LUmj"),d=n("tH8R"),f=n("PkHI");t.a=function(e){var t=e.description,n=e.githubLink,b=e.tabs,p=e.title,j=Object(r.useRouter)();return Object(a.jsxs)(c.a,{display:"flex",width:"100%",justifyContent:"space-between",flexDirection:"column",alignItems:"flex-start",children:[Object(a.jsxs)(c.a,{display:"flex",width:"100%",justifyContent:"space-between",marginBottom:Object(i.a)(4),children:[Object(a.jsxs)(c.a,{children:[Object(a.jsx)(o.a,{size:900,marginBottom:Object(i.a)(1),children:p}),t&&Object(a.jsx)(s.a,{children:t})]}),Object(a.jsx)(c.a,{children:n&&Object(a.jsx)(u.a,{is:l.a,href:n,appearance:"default",target:"_blank",children:"Open in GitHub"})})]}),b&&Object(a.jsx)(d.a,{width:"100%",borderBottom:"1px solid #efefef",marginBottom:Object(i.a)(2),paddingTop:Object(i.a)(1),children:b.map((function(e,t){var n=e.label,r=e.to;return Object(a.jsx)(f.a,{appearance:"primary",isSelected:j.asPath===r,onSelect:function(){return j.push(r)},children:n},t)}))})]})}},egZc:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("q1tI"),r=n("TsTy"),c=n("3kRa");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,n=void 0!==t&&t,i=e.onKeyDown,o=e.tabIndex,s=void 0===o?0:o,u=Object(c.a)(i),l=Object(a.useCallback)((function(e){Object(r.a)(u.current,e),e.defaultPrevented||n||e.metaKey||e.target===e.currentTarget&&("Enter"!==e.key&&" "!==e.key&&"Spacebar"!==e.key||(e.preventDefault(),e.currentTarget.click()))}),[n]);return{tabIndex:n?-1:s,onKeyDown:l}}},tH8R:function(e,t,n){"use strict";var a=n("wx14"),r=n("q1tI"),c=n.n(r),i=n("I42h"),o=n.n(i),s=Object(r.forwardRef)((function(e,t){return c.a.createElement(o.a,Object(a.a)({role:"tablist"},e,{ref:t}))}));s.propTypes=o.a.propTypes,t.a=s}}]);