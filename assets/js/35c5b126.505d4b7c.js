(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{112:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return O}));var i=n(3),a=n(7),r=(n(0),n(115)),o=n(119);const c="#44853a",l="red",b="#f67400",s="#9842f5",p="#0767ff";var m={id:"test",title:"Test"},d={unversionedId:"interviewer/test",id:"interviewer/test",isDocsHomePage:!1,title:"Test",description:"cpbooster provides the following command for you to easily test your program against",source:"@site/docs/interviewer/test.mdx",slug:"/interviewer/test",permalink:"/otter-guides/docs/interviewer/test",editUrl:"https://github.com/proyecto-nutria/otter-guides/docs/interviewer/test.mdx",version:"current",sidebar:"interviewer",previous:{title:"Clone Contest",permalink:"/otter-guides/docs/interviewer/clone"},next:{title:"Debug",permalink:"/otter-guides/docs/interviewer/debug"}},u=[{value:"Executable File Details",id:"executable-file-details",children:[]},{value:"Test With A Single Test Case",id:"test-with-a-single-test-case",children:[]},{value:"Test Without Recompiling",id:"test-without-recompiling",children:[]},{value:"Supported Veredicts",id:"supported-veredicts",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[{value:"Compilation Error",id:"compilation-error",children:[]},{value:"Runtime Error",id:"runtime-error",children:[]},{value:"Time Limit Exceeded",id:"time-limit-exceeded",children:[]},{value:"Wrong Answer",id:"wrong-answer",children:[]},{value:"Accepted Solution",id:"accepted-solution",children:[]}]}],h={toc:u};function O(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"cpbooster")," provides the following command for you to easily test your program against\n",Object(r.b)("strong",{parentName:"p"},"all")," available test cases."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-txt"},"cpb test <filePath>\n")),Object(r.b)("p",null,"or the alias for ",Object(r.b)("inlineCode",{parentName:"p"},"test")," which is just ",Object(r.b)("inlineCode",{parentName:"p"},"t"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-txt"},"cpb t <filePath>\n")),Object(r.b)("p",null,"This command will ",Object(r.b)("strong",{parentName:"p"},"automatically compile")," your program everytime you run it.\nSee ",Object(r.b)("a",{parentName:"p",href:"#test-without-recompiling"},"Test Without Recompiling")," for details on how to avoid recompiling your program each time."),Object(r.b)("h3",{id:"executable-file-details"},"Executable File Details"),Object(r.b)("p",null,"The executable file will be located in your current directory and its name will\nmatch with the name of the source file except for the extension, which will be ",Object(r.b)("inlineCode",{parentName:"p"},".exe"),".\nFor example, if your source file name is ",Object(r.b)("inlineCode",{parentName:"p"},"ProblemA.cpp")," then the executable file\nname will be ",Object(r.b)("inlineCode",{parentName:"p"},"ProblemA.exe"),".This is because ",Object(r.b)("inlineCode",{parentName:"p"},"cpbooster")," uses filenames to associate\neverything (See ",Object(r.b)("a",{parentName:"p",href:"/docs/interviewer/clone#file-structure"},Object(r.b)("strong",{parentName:"a"},"File Structure"))," for better understanding).\nIf you wish to save the executable file with a different name,\nyou can specify it in your ",Object(r.b)("a",{href:"/docs/interviewer/configuration#languageslangcommand-string",style:{color:"white"}},Object(r.b)("inlineCode",{parentName:"p"},"languages.<lang>.command")),"."),Object(r.b)("h2",{id:"test-with-a-single-test-case"},"Test With A Single Test Case"),Object(r.b)("p",null,"You can specify the test case, using the ",Object(r.b)("inlineCode",{parentName:"p"},"--testId")," flag or its alias ",Object(r.b)("inlineCode",{parentName:"p"},"-t"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-txt"},"cpb t <filePath> -t <number>\n")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"<number>")," should match with the numeric suffix of the corresponding ",Object(r.b)("inlineCode",{parentName:"p"},".in")," and ",Object(r.b)("inlineCode",{parentName:"p"},".ans")," files\nSee ",Object(r.b)("a",{parentName:"p",href:"/docs/interviewer/clone#file-structure"},Object(r.b)("strong",{parentName:"a"},"File Structure"))," for better understanding."))),Object(r.b)("h2",{id:"test-without-recompiling"},"Test Without Recompiling"),Object(r.b)("p",null,"You can tell ",Object(r.b)("inlineCode",{parentName:"p"},"cpbooster")," to run the tests using the last compiled version of your program\nby passing the flag ",Object(r.b)("inlineCode",{parentName:"p"},"--noCompile")," or its alias  ",Object(r.b)("inlineCode",{parentName:"p"},"--nc"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-txt"},"cpb t <filePath> --nc\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"By using this flag, ",Object(r.b)("inlineCode",{parentName:"p"},"cpbooster")," will assume that there is a corresponding executable file\nfor your program. Remember that the name of the executable file must be the same as the\nsource file, except for the extension which must be ",Object(r.b)("inlineCode",{parentName:"p"},".exe"),". Unless you specified otherwise\nin ",Object(r.b)("a",{href:"/docs/interviewer/configuration#languageslangcommand-string",style:{color:"white"}},Object(r.b)("inlineCode",{parentName:"p"},"languages.<lang>.command")),"."))),Object(r.b)("h2",{id:"supported-veredicts"},"Supported Veredicts"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("span",{style:{background:c,color:"white"}},"\xa0",Object(r.b)("b",null,"AC"),"\xa0")," ",Object(r.b)("a",{href:"#accepted-solution"},"(Accepted Solution)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("span",{style:{background:l,color:"white"}},"\xa0",Object(r.b)("b",null,"WA"),"\xa0")," ",Object(r.b)("a",{href:"#wrong-answer"},"(Wrong Answer)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("span",{style:{background:b,color:"white"}},"\xa0",Object(r.b)("b",null,"CE"),"\xa0")," ",Object(r.b)("a",{href:"#compilation-error"},"(Compilation Error)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("span",{style:{background:s,color:"white"}},"\xa0",Object(r.b)("b",null,"TLE"),"\xa0")," ",Object(r.b)("a",{href:"#time-limit-exceeded"},"(Time Limit Exceeded)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("span",{style:{background:p,color:"white"}},"\xa0",Object(r.b)("b",null,"RTE"),"\xa0")," ",Object(r.b)("a",{href:"#runtime-error"},"(Runtime Error)"))),Object(r.b)("h2",{id:"how-does-it-work"},"How does it work?"),Object(r.b)("p",null,"This sections explains How each possible output of the ",Object(r.b)("inlineCode",{parentName:"p"},"test")," command work."),Object(r.b)("h3",{id:"compilation-error"},"Compilation Error"),Object(r.b)("p",null,"If your code needs compilation (",Object(r.b)("inlineCode",{parentName:"p"},"cpp"),", ",Object(r.b)("inlineCode",{parentName:"p"},"java"),", ...), this will be the first thing that ",Object(r.b)("inlineCode",{parentName:"p"},"cpbooster")," will\ntry to do, unless the ",Object(r.b)("inlineCode",{parentName:"p"},"--noCompile")," flag was used."),Object(r.b)("h4",{id:"demo"},"Demo"),Object(r.b)("div",{className:"text--center"},Object(r.b)("img",{alt:"test",src:Object(o.a)("/img/demos/test_ce.gif")})),Object(r.b)("h3",{id:"runtime-error"},"Runtime Error"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"cpbooster")," detects that there was a runtime error if your program exited with a ",Object(r.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Exit_status"},"status code")," different from ",Object(r.b)("strong",{parentName:"p"},"0"),"\nor if there were no corresponding ",Object(r.b)("inlineCode",{parentName:"p"},".in")," and ",Object(r.b)("inlineCode",{parentName:"p"},".ans")," files (See ",Object(r.b)("a",{parentName:"p",href:"/docs/interviewer/clone#file-structure"},"File Structure")," for better understanding)."),Object(r.b)("h4",{id:"demo-1"},"Demo"),Object(r.b)("div",{className:"text--center"},Object(r.b)("img",{alt:"test",src:Object(o.a)("/img/demos/test_rte.gif")})),Object(r.b)("h3",{id:"time-limit-exceeded"},"Time Limit Exceeded"),Object(r.b)("p",null,"To detect that the execution of a certain program has exceeded the time limit, ",Object(r.b)("inlineCode",{parentName:"p"},"cpbooster")," requires to know\nwhich is this time limit beforehand, the default value is ",Object(r.b)("strong",{parentName:"p"},"3000")," milliseconds which equivalent to ",Object(r.b)("strong",{parentName:"p"},"3")," seconds.\nTo use a different value, the string ",Object(r.b)("inlineCode",{parentName:"p"},"time-limit:")," followed by the time limit in numeric format as ",Object(r.b)("strong",{parentName:"p"},"milliseconds"),"\nshould be written somewhere in the source file as a commented line."),Object(r.b)("h4",{id:"examples"},"Examples:"),Object(r.b)("div",{style:{display:"flex",justifyContent:"center"}},Object(r.b)("div",null,Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"C++"),Object(r.b)("th",null,"Python"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-cpp"},"// time-limit: 2000\nint main() {\n int a, b;\n cin >> a >> b;\n cout << a + b << endl;\n}\n"))),Object(r.b)("td",null,Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-py"},"# time-limit: 2000\n\na, b = map(int, input().split())\nprint(a + b)\n")))))))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"This line will be automatically added at the top of your source file with the default value\nwhen running ",Object(r.b)("inlineCode",{parentName:"p"},"cpb clone")," or ",Object(r.b)("inlineCode",{parentName:"p"},"cpb create"),"."))),Object(r.b)("h4",{id:"demo-2"},"Demo"),Object(r.b)("div",{className:"text--center"},Object(r.b)("img",{alt:"test",src:Object(o.a)("/img/demos/test_tle.gif")})),Object(r.b)("h3",{id:"wrong-answer"},"Wrong Answer"),Object(r.b)("p",null,"Each time you run a test, ",Object(r.b)("inlineCode",{parentName:"p"},"cpbooster")," will create one or more ",Object(r.b)("inlineCode",{parentName:"p"},".outX")," files (in the same directory as the\nsource file) which will correspond to your program's output when using the correponding ",Object(r.b)("inlineCode",{parentName:"p"},".inX")," file as\ninput.\nEach ",Object(r.b)("inlineCode",{parentName:"p"},".outX")," file will be compared against the corresponding ",Object(r.b)("inlineCode",{parentName:"p"},".ansX")," file and if\nthere are differences, they will be printed beautifully."),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT CLARIFICATIONS")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("ol",{parentName:"div"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Each ",Object(r.b)("inlineCode",{parentName:"p"},".in"),", ",Object(r.b)("inlineCode",{parentName:"p"},".ans")," and ",Object(r.b)("inlineCode",{parentName:"p"},".out")," file will and must have the same name as the source file associated with them.\nThis is because ",Object(r.b)("inlineCode",{parentName:"p"},"cpbooster")," uses file names to make associations. See ",Object(r.b)("a",{parentName:"p",href:"/docs/interviewer/clone#file-structure"},Object(r.b)("strong",{parentName:"a"},"File Structure")),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"X")," should be an integer number and every ",Object(r.b)("inlineCode",{parentName:"p"},".in"),", ",Object(r.b)("inlineCode",{parentName:"p"},".ans")," and ",Object(r.b)("inlineCode",{parentName:"p"},".out")," file associated with a certain test case,\nmust have the same numeric suffix ",Object(r.b)("inlineCode",{parentName:"p"},"X"),"."))))),Object(r.b)("h4",{id:"demo-3"},"Demo"),Object(r.b)("div",{className:"text--center"},Object(r.b)("img",{alt:"test",src:Object(o.a)("/img/demos/test_wa.gif")})),Object(r.b)("h3",{id:"accepted-solution"},"Accepted Solution"),Object(r.b)("p",null,"If there were no errors or differences between the ",Object(r.b)("inlineCode",{parentName:"p"},".out")," and ",Object(r.b)("inlineCode",{parentName:"p"},".ans")," files, ",Object(r.b)("inlineCode",{parentName:"p"},"cpbooster")," will tell you that you have an\n",Object(r.b)("strong",{parentName:"p"},"Accepted Solution"),"."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"cpbooster")," will also tell you if your solution has extra leading or trailing blank spaces."),Object(r.b)("div",{className:"text--center"},Object(r.b)("img",{alt:"test",src:Object(o.a)("/img/demos/test_ac_2.gif")})))),Object(r.b)("h4",{id:"demo-4"},"Demo"),Object(r.b)("div",{className:"text--center"},Object(r.b)("img",{alt:"test",src:Object(o.a)("/img/demos/test_ac.gif")})))}O.isMDXComponent=!0},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=i,u=p["".concat(o,".").concat(d)]||p[d]||m[d]||r;return n?a.a.createElement(u,c(c({ref:t},b),{},{components:n})):a.a.createElement(u,c({ref:t},b))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var b=2;b<r;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},119:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var i=n(16),a=n(120);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(i.default)();return{withBaseUrl:(n,i)=>function(e,t,n,{forcePrependBaseUrl:i=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(i)return t+n;const o=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+o:o}(t,e,n,i)}}function o(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},120:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}))}}]);