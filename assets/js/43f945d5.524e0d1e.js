(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{115:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},l=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=u(r),l=n,d=b["".concat(a,".").concat(l)]||b[l]||m[l]||i;return r?o.a.createElement(d,c(c({ref:t},p),{},{components:r})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},83:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),i=(r(0),r(115)),a={id:"about",title:"What is cpbooster?"},c={unversionedId:"interviewee/about",id:"interviewee/about",isDocsHomePage:!1,title:"What is cpbooster?",description:"cpbooster is a cross-platform CLI tool designed to boost competitive programmer's speed during contests by automating various routine tasks",source:"@site/docs/interviewee/about.mdx",slug:"/interviewee/about",permalink:"/otter-guides/docs/interviewee/about",editUrl:"https://github.com/proyecto-nutria/otter-guides/docs/interviewee/about.mdx",version:"current",sidebar:"interviewee",next:{title:"Cheatsheet",permalink:"/otter-guides/docs/interviewee/cheatsheet"}},s=[],p={toc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"cpbooster")," is a cross-platform ",Object(i.b)("strong",{parentName:"p"},"CLI")," tool designed to ",Object(i.b)("strong",{parentName:"p"},"boost")," competitive programmer's speed during contests by automating various routine tasks\nlike compiling and testing, debugging, cloning testcases, loading template, etc. The console command suits any coding environment\n(i.e. ",Object(i.b)("em",{parentName:"p"},Object(i.b)("strong",{parentName:"em"},"VSCode, Jetbrains IDEs, Vim, NeoVim, Emacs, Geany, Sublime Text, ...")),") and it\u2019s very easy to use. ",Object(i.b)("em",{parentName:"p"},"Vim / NeoVim")," users can\ninstall ",Object(i.b)("a",{parentName:"p",href:"https://github.com/searleser97/cpbooster.vim"},"cpbooster.vim plugin")," to ",Object(i.b)("strong",{parentName:"p"},"boost")," their speed even more."))}u.isMDXComponent=!0}}]);