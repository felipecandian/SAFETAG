(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Q3oJ:function(e,t,n){"use strict";var a=n("284h"),r=n("TqRt");t.__esModule=!0,t.Link=void 0;var o=r(n("pVnL")),i=r(n("8OQS")),c=a(n("q1tI")),l=n("sHHN"),d=n("Wbzz"),u=n("evtT");t.Link=function(e){var t=e.language,n=e.to,a=e.onClick,r=(0,i.default)(e,["language","to","onClick"]),s=(0,c.useContext)(l.I18nextContext),b=t||s.language,f=""+function(e){return s.generateDefaultLanguagePage||e!==s.defaultLanguage?"/"+e:""}(b)+n;return c.default.createElement(d.Link,(0,o.default)({},r,{to:f,hrefLang:b,onClick:function(e){t&&localStorage.setItem(u.LANGUAGE_KEY,t),a&&a(e)}}))}},"WlC/":function(e,t,n){e.exports=n("xBAY")},foDo:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return m})),n.d(t,"c",(function(){return p}));var a=n("MUpH"),r=n("vOnD"),o=n("8c3r"),i=n("qSSW"),c=n("q6fE"),l=n("UDb3"),d=n("A8Yw");function u(){var e=Object(a.a)(["\n      grid-column: auto / span 2;\n    "]);return u=function(){return e},e}function s(){var e=Object(a.a)(["\n      grid-column: auto / span 3;\n    "]);return s=function(){return e},e}var b=function(e){var t=e.border;return"base"===t?Object(o.b)("color.base"):"primary"===t?Object(o.b)("color.primary"):"secondary"===t?Object(o.b)("color.secondary"):"white"===t?Object(o.b)("color.surface"):"inherit"},f=r.d.article.withConfig({displayName:"card__Card",componentId:"sc-1neqwum-0"})(["padding:"," ",";display:flex;flex-flow:column;color:",";background:",";position:relative;"," & >:last-child:not(:first-child){padding-top:",";}&:visited{color:",";}a,a:visited{color:",";}h1,h2,h3{margin:0;}",""],Object(c.b)(2),Object(c.b)(1.5),Object(o.b)("color.base"),(function(e){var t=e.variation;return"base"===t?Object(c.a)(.75,Object(o.b)("color.base")):"primary"===t?Object(c.a)(.5,Object(o.b)("color.primary")):"secondary"===t?Object(c.a)(.525,Object(o.b)("color.secondary")):"white"===t?Object(c.a)(Object(o.b)(.5,"color.surface")):"outline"===t?"transparent":"white"}),(function(e){return e.border&&Object(r.c)(["border:2px solid ",";"],b)}),Object(c.b)(2),Object(o.b)("color.base"),Object(o.b)("color.link"),(function(e){return e.withHover&&Object(r.c)(['&:after{position:absolute;content:"";opacity:0;width:100%;height:100%;left:0;top:0;z-index:-1;border:2px solid ',";background:none;transition:all 0.16s cubic-bezier(0.55,0.085,0.68,0.53);}&:hover{&:after{opacity:1;transform:translate(10px,10px);transition-delay:0.08s;}}"],b)}));t.d=f;var g=r.d.div.withConfig({displayName:"card__CardHeader",componentId:"sc-1neqwum-1"})(["display:flex;align-items:flex-start;img{max-height:2rem;margin-right:1rem;}h1{flex:1;}"]),m=Object(r.d)(d.b).withConfig({displayName:"card__CardHeading",componentId:"sc-1neqwum-2"})(["margin-bottom:",";position:relative;letter-spacing:0.5px;"],Object(c.b)()),p=(r.d.div.withConfig({displayName:"card__CardFooter",componentId:"sc-1neqwum-3"})(["margin-top:auto;"]),r.d.ul.withConfig({displayName:"card__CardList",componentId:"sc-1neqwum-4"})(["",";display:grid;grid-template-columns:repeat(6,1fr);grid-gap:",";","{height:100%;}li{grid-column:auto / span 6;"," ","}"],Object(l.c)(),Object(c.b)(2),f,i.a.smallUp(s()),i.a.largeUp(u())))},gfRT:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.Helmet=void 0;var r=a(n("8OQS")),o=a(n("q1tI")),i=n("qhky"),c=n("gjnG");t.Helmet=function(e){var t=e.children,n=(0,r.default)(e,["children"]),a=(0,c.useI18next)(),l=a.languages,d=a.language,u=a.originalPath,s=a.defaultLanguage,b=a.siteUrl,f=void 0===b?"":b,g=function(e){var t=f+(e===s?"":"/"+e)+u;return t.endsWith("/")?t:t+"/"};return o.default.createElement(i.Helmet,n,o.default.createElement("html",{lang:d}),o.default.createElement("link",{rel:"canonical",href:g(d)}),l.map((function(e){return o.default.createElement("link",{rel:"alternate",key:e,href:g(e),hrefLang:e})})),o.default.createElement("link",{rel:"alternate",href:g(s),hrefLang:"x-default"}),t)}},gjnG:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.useI18next=void 0;var r=a(n("pVnL")),o=n("9kay"),i=n("q1tI"),c=n("Wbzz"),l=n("sHHN"),d=n("evtT");t.useI18next=function(e,t){var n=(0,o.useTranslation)(e,t),a=n.i18n,u=n.t,s=n.ready,b=(0,i.useContext)(l.I18nextContext),f=b.routed,g=b.defaultLanguage,m=b.generateDefaultLanguagePage,p=function(e){return m||e!==g?"/"+e:""};return(0,r.default)({},b,{i18n:a,t:u,ready:s,navigate:function(e,t){var n=p(b.language),a=f?""+n+e:""+e;return(0,c.navigate)(a,t)},changeLanguage:function(e,t,n){var a=""+p(e)+(t||function(e){if(!f)return e;var t=e.indexOf("/",1);return e.substring(t)}(window.location.pathname))+window.location.search;return localStorage.setItem(d.LANGUAGE_KEY,e),(0,c.navigate)(a,n)}})}},oRzl:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return u}));var a=n("q1tI"),r=n.n(a),o=n("WlC/"),i=n("8MiI"),c=n("vrFN"),l=n("xtXq"),d=n("A8Yw");t.default=function(){return Object(o.useTranslation)("Site strings",{useSuspense:!1}),r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"Credits and License"}),r.a.createElement(l.a,null,r.a.createElement(l.b,null,r.a.createElement(l.c,null,r.a.createElement(d.b,{size:"jumbo",variation:"primary",withDeco:!0},r.a.createElement(o.Trans,{i18nKey:"credits-title"},"Credits and License"))),r.a.createElement(l.g,{columnLayout:"2:1"},r.a.createElement("article",null,r.a.createElement("p",null,r.a.createElement(o.Trans,{i18nKey:"credits-trademark"},"SAFETAG is a trademark of Internews. Please read the ",r.a.createElement("a",{href:"https://github.com/SAFETAG/SAFETAG/blob/master/LICENSE.md#usage-of-safetag"},"SAFETAG License"),' for detailed information on the usage of "SAFETAG" as a word.')),r.a.createElement("p",null,r.a.createElement(o.Trans,{i18nKey:"credits-license"},"The content of SAFETAG is Licensed as ",r.a.createElement("a",{href:"http://creativecommons.org/licenses/by-sa/3.0/",target:"_blank",rel:"noreferrer"},"Creative Commons Attribution-ShareAlike (CC BY-SA 3.0)"),".  Please refer to ",r.a.createElement("a",{href:"https://github.com/SAFETAG/SAFETAG/graphs/contributors"},"SAFETAG Contributors")," for information on who has contributed content to SAFETAG.")),r.a.createElement("p",null,r.a.createElement(o.Trans,{i18nKey:"credits-other"},"All other content is copyright Internews unless otherwise designated.")))))))};var u="2059891297"},xBAY:function(e,t,n){"use strict";t.__esModule=!0;var a=n("9kay");Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===a[e]||(t[e]=a[e]))}));var r=n("sHHN");Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===r[e]||(t[e]=r[e]))}));var o=n("gjnG");Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||(t[e]=o[e]))}));var i=n("Q3oJ");Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===i[e]||(t[e]=i[e]))}));var c=n("gfRT");Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===c[e]||(t[e]=c[e]))}))},xtXq:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"g",(function(){return h})),n.d(t,"d",(function(){return j})),n.d(t,"e",(function(){return O})),n.d(t,"f",(function(){return y})),n.d(t,"h",(function(){return v})),n.d(t,"b",(function(){return w})),n.d(t,"c",(function(){return _}));var a=n("MUpH"),r=n("q1tI"),o=n.n(r),i=n("vOnD"),c=n("UDb3"),l=n("8c3r"),d=n("q6fE"),u=n("A8Yw"),s=n("6KyZ"),b=n("foDo"),f=n("qSSW");function g(){var e=Object(a.a)(["\n      margin-bottom: 0;\n    "]);return g=function(){return e},e}function m(){var e=Object(a.a)(["\n    grid-template-columns: ",";\n    gap: ",";\n    padding-top: ",";\n  "]);return m=function(){return e},e}var p=i.d.article.withConfig({displayName:"inpage__Inpage",componentId:"sc-1dtk98a-0"})(["display:grid;height:100%;grid-template-rows:auto 1fr;"]),h=Object(i.d)(s.a).withConfig({displayName:"inpage__InpageInnerColumns",componentId:"sc-1dtk98a-1"})(["display:grid;grid-template-columns:1fr;padding-top:",";padding-bottom:",";"," & > section > ","{margin-top:1rem;display:block;}& > *{margin-bottom:2rem;","}"],Object(d.b)(1),Object(d.b)(2),f.a.mediumUp(m(),(function(e){var t=e.columnLayout;return"1:1"===t?"1fr 1fr":"2:1"===t?"2fr 1fr":"3:1"===t?"3fr 1fr":"inherit"}),Object(d.b)(4),Object(d.b)(2)),b.d,f.a.mediumUp(g())),j=i.d.header.withConfig({displayName:"inpage__InpageHeader",componentId:"sc-1dtk98a-2"})([""," padding-bottom:",";"],(function(e){return e.isHidden&&Object(i.c)(["",""],Object(c.e)())}),Object(d.b)(2)),O=Object(i.d)(s.a).withConfig({displayName:"inpage__InpageHeaderInner",componentId:"sc-1dtk98a-3"})(["display:flex;flex-flow:column nowrap;justify-content:space-between;padding:"," ",";"],Object(d.b)(4),Object(d.b)()),y=i.d.div.withConfig({displayName:"inpage__InpageHeadline",componentId:"sc-1dtk98a-4"})(["display:flex;flex-flow:column;min-width:0;> *:first-child{margin-bottom:",";}> *:last-child{margin-bottom:",";}"],Object(d.b)(),Object(d.b)()),v=(i.d.div.withConfig({displayName:"inpage__InpageToolbar",componentId:"sc-1dtk98a-5"})(["display:flex;flex-flow:row nowrap;align-items:center;padding-left:",";margin-left:auto;"],Object(d.b)(2)),i.d.div.withConfig({displayName:"inpage__InpageTitleWrapper",componentId:"sc-1dtk98a-6"})(["display:flex;flex-flow:row nowrap;min-width:0;margin-bottom:",";"],Object(d.b)(1.5)),Object(i.d)((function(e){var t=Object.assign({},e);return o.a.createElement(u.b,t)})).withConfig({displayName:"inpage__InpageTitle",componentId:"sc-1dtk98a-7"})(["margin-bottom:",";line-height:3rem;"],Object(d.b)(.5))),w=(i.d.p.withConfig({displayName:"inpage__InpageTagline",componentId:"sc-1dtk98a-8"})([""," font-size:0.875rem;line-height:1rem;"],Object(u.c)()),i.d.section.withConfig({displayName:"inpage__InpageBody",componentId:"sc-1dtk98a-9"})(["",";& ~ &{padding-top:",";padding-bottom:",";}p > img{display:block;margin:1rem auto;max-width:100%;}"],(function(e){var t=e.variation;return"dark"===t?Object(i.c)(["background-color:",";& *{color:",";border-color:",";&:after{background-color:",";}a{color:",";text-decoration:underline;}}"],Object(l.b)("color.base"),Object(l.b)("color.surface"),Object(l.b)("color.surface"),Object(l.b)("color.surface"),Object(l.b)("color.surface")):"blue"===t?Object(i.c)(["background-color:",";& *{color:",";border-color:",";&:after{background-color:",";}a{color:",";text-decoration:underline;}a:visited{color:",";}}"],Object(l.b)("color.primary"),Object(l.b)("color.surface"),Object(l.b)("color.surface"),Object(l.b)("color.surface"),Object(l.b)("color.surface"),Object(l.b)("color.surface")):Object(i.c)(["background-color:transparent;"])}),Object(d.b)(2),Object(d.b)(2))),_=Object(i.d)(s.a).withConfig({displayName:"inpage__InpageBodyInner",componentId:"sc-1dtk98a-10"})(["padding:"," ",";& ~ &{padding:",";}"],Object(d.b)(2),Object(d.b)(),Object(d.b)())}}]);
//# sourceMappingURL=component---src-pages-credits-js-d439eb19cb6804feb1e7.js.map