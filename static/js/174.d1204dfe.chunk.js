"use strict";(self.webpackChunktaskpro=self.webpackChunktaskpro||[]).push([[174],{618:function(e,t,s){s.d(t,{Z:function(){return r}});s(2791);var a=s.p+"static/media/sprite.5e09d3d011111f11b6e8737892495487.svg",i=s(184),r=function(e){var t=e.name,s=(e.color,e.width),r=void 0===s?"18px":s,n=e.height,l=void 0===n?"18px":n;return(0,i.jsx)("svg",{width:r,height:l,stroke:"currentColor",children:(0,i.jsx)("use",{href:a+t})})}},4174:function(e,t,s){s.r(t),s.d(t,{default:function(){return K}});var a=s(9439),i="HomeLayout_outer__mme-w",r="HomeLayout_sidebar__qQxxv",n="HomeLayout_hidden__7IKXv HomeLayout_sidebar__qQxxv",l="HomeLayout_backdrop__w8k3r",c="HomeLayout_mainarea__eBLql",o="HomeLayout_header__aUrZa",d=s(2791);var u=s.p+"static/media/icon.473aa9b9b064ab0a611ea0795a8e12f3.svg";var h=s.p+"static/media/icon-violet.02f83e3f964cce0106ba62ecd0986f5b.svg",m=s(5628),p=s(184),g=function(){var e=(0,m.a)().theme;return(0,p.jsxs)("a",{href:"/",className:"logo",children:[(0,p.jsx)("img",{src:"violet"===e?h:u,alt:"TaskPro logo"}),(0,p.jsx)("span",{children:"Task Pro"})]})},x=s(4165),b=s(5861),f=function(){},j="Sidebar_projectsItem__qJECI",_="Sidebar_projectsActive__lrmvr Sidebar_projectsItem__qJECI",v=function(e){var t=e.boards,s=e.setActive,a=e.activeBoard;return(0,p.jsxs)("ul",{className:"projects",children:[(0,p.jsx)(f,{}),t.map((function(e,t){return(0,p.jsxs)("li",{className:t===a?_:j,children:[(0,p.jsx)("svg",{className:"projects-icon",children:(0,p.jsx)("use",{href:""})}),(0,p.jsx)("button",{onClick:function(){return s(t)},children:e.title})]},e.id)}))]})},k=s(5682),N=s(7689),I=function(){var e=(0,d.useRef)(!1),t=(0,d.useState)([]),s=(0,a.Z)(t,2),i=s[0],r=s[1],n=(0,d.useState)(0),l=(0,a.Z)(n,2),c=l[0],o=l[1],u=(0,N.s0)();(0,d.useEffect)((function(){var t=function(){var t=(0,b.Z)((0,x.Z)().mark((function t(){var s;return(0,x.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.current=!0,t.next=3,(0,k.DC)();case 3:s=t.sent,r(s);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e.current||t()}),[]),(0,d.useEffect)((function(){i.length>0&&u(i[c].title,{replace:!0})}),[c,i,u]);return(0,p.jsxs)("div",{className:"boards",children:[(0,p.jsx)("p",{className:"boards-heading",children:"My boards"}),(0,p.jsxs)("button",{type:"button",className:"create-button button",children:[(0,p.jsx)("span",{className:"create-text",children:"Create a new board"}),(0,p.jsx)("div",{className:"create-icon",children:(0,p.jsx)("svg",{width:"20",height:"20",children:(0,p.jsx)("use",{href:""})})})]}),i.length>0&&(0,p.jsx)(v,{boards:i,setActive:function(e){o(e)},activeBoard:c})]})},w=function(){return(0,p.jsxs)("div",{className:"help",children:[(0,p.jsx)("div",{className:"help-header"}),(0,p.jsxs)("p",{className:"help-text",children:["If you need help with ",(0,p.jsx)("span",{className:"help-text-accent",children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),(0,p.jsxs)("button",{type:"button",className:"help-button button",children:[(0,p.jsx)("svg",{className:"help-icon",children:(0,p.jsx)("use",{href:""})}),(0,p.jsx)("span",{children:"Need help?"})]})]})},C=function(){var e=(0,m.a)().userLogout;return(0,p.jsxs)("div",{className:"sidebar",children:[(0,p.jsxs)("div",{className:"sidebar-top",children:[(0,p.jsx)(g,{}),(0,p.jsx)(I,{})]}),(0,p.jsxs)("div",{className:"sidebar-bottom",children:[(0,p.jsx)(w,{}),(0,p.jsxs)("button",{type:"button",className:"logout-button button",children:[(0,p.jsx)("svg",{className:"logout-icon"}),(0,p.jsx)("span",{onClick:function(){return e()},children:"Log out"})]})]})]})},y={headerTaskPro:"Header_headerTaskPro__MDMv1",headerall:"Header_headerall__YM18G",menuburger:"Header_menuburger__pDV9w",iconburger:"Header_iconburger__8ANtY",burgerstyle:"Header_burgerstyle__B0MI6",outputselector:"Header_outputselector__5dAIg",selectortheme:"Header_selectortheme__dvaWB",styleTheme:"Header_styleTheme__VV3Xf",styleUserInfo:"Header_styleUserInfo__mT6Pq",styleName:"Header_styleName__YEkJg",styleAvatar:"Header_styleAvatar__OPnQE",icontheme:"Header_icontheme__Y2QhU"},A="ThemeSelector_selector__UGq2p",S="ThemeSelector_selectorItem__Parp0",B="ThemeSelector_active__-W41z ThemeSelector_selectorItem__Parp0",E=function(e){var t=e.showThemeSelector,s=(0,m.a)(),a=s.theme,i=s.setUserTheme,r={dark:"dark",light:"light",violet:"violet"};return(0,p.jsx)("ul",{className:A,children:function(){var e=[],s=function(){var s=r[n];e.push((0,p.jsx)("li",{children:(0,p.jsx)("button",{onClick:function(){i(s),t()},className:"".concat(a===s?B:S," noselect"),children:s})},s))};for(var n in r)s();return e}()})},H=s(618),R=function(e){var t=e.toggleSidebar,s=(0,d.useState)(!1),i=(0,a.Z)(s,2),r=i[0],n=i[1],l=(0,d.useState)(!1),c=(0,a.Z)(l,2),o=c[0],u=c[1],h=(0,m.a)(),g=h.name,x=h.avatar,b=function(){n(!r)};return(0,p.jsxs)("div",{className:y.headerall,children:[(0,p.jsx)("div",{className:y.menuburger,children:(0,p.jsx)("button",{className:y.burgerstyle,onClick:function(){return t((function(e){return!e}))},children:(0,p.jsx)(H.Z,{name:"#menu-icon",width:"32px",height:"32px",color:"#ffffff"})})}),(0,p.jsxs)("div",{className:y.headerTaskPro,children:[(0,p.jsxs)("div",{className:y.outputselector,children:[(0,p.jsxs)("button",{className:y.styleTheme,onClick:function(){return b()},children:[(0,p.jsx)("span",{className:y.spantheme,children:"Theme"}),(0,p.jsx)(H.Z,{name:"#chevron-down-icon",width:"16px",height:"16px",color:"#ffffff"})]}),r&&(0,p.jsx)("div",{className:y.selectortheme,children:(0,p.jsx)(E,{showThemeSelector:b})})]}),(0,p.jsxs)("ul",{className:y.styleUserInfo,children:[(0,p.jsx)("li",{className:y.styleName,children:g}),(0,p.jsx)("li",{className:y.styleAvatar,children:(0,p.jsx)("button",{className:y.styleAvatar,onClick:function(){return u(!o)},children:(0,p.jsx)("img",{src:"none"===x?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAACICAYAAAA8uqNSAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZ7SURBVHgB7Z3rWeNGFIZHMhj4RwdxOmArIHTgVJAW0kGgg2wHW8JSQUgFSyqIUkH8i7vxzqf14RHGHsuWNJpz9L3Po4UFzEXz6py5aI4yV5PJZHI6n8+nWZad++MMH/LHqSMamPmjWCwWt3me3/j3r4uimNV5YbbtC7wYk9fX1z+8FFNHIczgZfniZbnyohShr9soCCLGUozfHTGLF+XPpShrI8paQRA1/Av/cj/SCLFP4QPBxbpokq9+wLtxRjkGRxkQ0Parn3gXQRg5Bs+HSPImCPocXo5vjnIMHUjySfokbykGHVJHOYh3YOlCSRlBlqnlX0fIEh9FfkaqKSNI1RhCgDiRLfse/ztC3jNDFEEEmTpCPoJZ82nuQ8m5I2Q95/ly4Y2QD/iuxxlSzMQRsp4JBOEKLdnEae4ICUBBSBAKQoJQEBKEgpAgFIQEoSAkCAUhQSgICUJBSBAKQoJQEBKEgpAgFIQEoSAkCAUhQSgICUJBSBAKQoJQEBKEgpAgFIQEoSAkCAUhQQ7cQFksFm4+n6PMQXng/ziELMvKI8/z8u1oNCrfHxqDEgQCvLy8lEdVhk1fiwPygOfn5zdRDg4OBiPLIATZRYy63weiHB4emhfFvCBoTFz9TcRYB9ITDkQTiILoYhGzgkCIp6enshG7BALiZ4zH4zKqWMNkfIQcDw8PnctR/XmPj49lpLKGOUFEjrZTSh0giDVJTAnSpxyCNUnMCJKCHAIEQd/EAmYESUUOoYuRUx+YECTFxpBRlHbUCyKTVymCUZT2VKNekNRDufZUo1qQlKOHIIuCWlEtiCykpQ4F6QktnUC5rUAjagVZvX8jdbRGEbWCaLsiGUEio+2KpCCR0TZ01JYSBaaYiFCQiGg82RSEBKEgJIjG+1bVCqLxZFMQEoSCRETjHeQUJCLaNixp3WBFQSJBQSIjm6q1oHVTlepOqpaTLpu+NaJaEOyL1YDmLZmqBUGa0XDysblbK+rnQVI/+Yhymnf+qxcEUSTVVAMxNEcPYGImNdX6HBbqhpgQBI1wdHTkUgJRTUsnOoSZtRikmlTCOYRFQRkLmFqsgyB9SwI5jo+PnRXMreb2KYnIYalemckaZdI5jLkv1moxO7NF7NBgmETrum6IDGUtdEjXYboMJhrv5OSk3EODbZpti2K9BCYYRCFdRJK2RIEMMoS1LIYwiFsOq3XZIcu+DStyWKyHuglzEUR2sEnZbSnU39b3rlYxrBb5byJeypgQRCKERIlYI5fVAjYWi/2rFgQy4GpOZSN3tdi/lb6KOkHaenJD11TTkYiiMaqoEUSLGOuoRhVtcybJ/6aaxVhFaqciqmgRJenfsKtnvfSNiII+VOoTbUkKghOHx2tYE2MViYwprEJvIilBpGNnpRB+XeRvTnElOJlutTytYWhyCPj77+/vk3uUSBIRxGpfYx9wHpBicUdaCtGk9wiCzloXK62awcRfKo836U0Qec7bUFPKNlJJub2kmJSeDpUyMhzG275GOdEjCOXYnT6fgxdVEMqxP31JEk0QytGcPiSJIgjlaI/YE4lRBOEwtl1kHScGnQuS0g09loi1VtWpIBDD4vPsU0DmkbqWpDNBrDw3NmXklssu6UwQdkrjgA5rlym8E0G48BaXLgcBrQsi93SQeHR5zlsXBKmFxAeppouhb6uCIBcytfRHF6Oa1gThqKV/unhUfWuCWNiWYIG226EVQbowl+xH223RiiCMHmnRZns0FoTRIz3abJPGgsQst0Dqk4wgHLmkidRMaUojQRg90qaNKNJIEPY90qaNiUsIMnN7whuB0qfhRTyDIIXbA06r66Dh+kyRZ1n2j9sDRg8dNLmQvRu3iCA3bg8oiB4atNUNBPnqduyHcPSiiwZp5jovimLmG/t6l1fFuuWetMM+EcSnly9woxzm5nl+ucuLmV50IdWnd+QK/5SCeFMKb8znuq9kBNHHLhe1l+kznMD71YmyS1djyLunjaRndrioi2pGeRME+cZHkQu3RRLKoZOa7YZMcgEX5APvptqXqeZXF5CE6UUnNdqtbHtJLcKHtRj/+dtQJKEgOtnSNZDIcbv6ibWLdctI8mldx5UpxhbokKKtVyOHsLXO4sTjo8al/ya/4f+4tZ7DXJ2gUO/yiRPob2KC9GqTGELtQpzek1P/Znp3d/eLt+7Mv/+TP04d0QA6nf+Nx+NvXpC/R6PR12pHNMR3SxV4IIzpK2AAAAAASUVORK5CYII=":x,alt:"avatar",width:"32",height:"32"})})})]}),o&&(0,p.jsx)("div",{style:{position:"absolute",top:70,right:12},children:(0,p.jsx)("p",{children:"EditProfileModal"})})]})]})},T={filtersContainer:"Filters_filtersContainer__bGXEj",filtersButton:"Filters_filtersButton__Jm0HN",modalContent:"Filters_modalContent__+suKP",modalTitle:"Filters_modalTitle__mYU-q",bgList:"Filters_bgList__Ax5-y",bgContainer:"Filters_bgContainer__3HxRe",bgTitle:"Filters_bgTitle__Pa0cM",bgItem:"Filters_bgItem__trX4q",bgImg:"Filters_bgImg__tv1-t",labelWrapper:"Filters_labelWrapper__P2Cp7",labelTitle:"Filters_labelTitle__sDlBt",labelText:"Filters_labelText__r6tXx",labelItem:"Filters_labelItem__sdVDa",selectedLabel:"Filters_selectedLabel__wAcf+",withoutPriorityInput:"Filters_withoutPriorityInput__MUT29",lowInput:"Filters_lowInput__LZGKD",mediumInput:"Filters_mediumInput__kWDlZ",highInput:"Filters_highInput__ZHVF7",closeButton:"Filters_closeButton__H4MRz"},Q=function(e){var t=e.onClick;return(0,p.jsx)("button",{className:T.filtersButton,onClick:t,children:"Filters"})},L=function(){var e=(0,d.useState)("Show all"),t=(0,a.Z)(e,2),s=t[0],i=t[1],r=function(e){var t=e.target.value;i(t),"withoutPriority"===t&&i("Show all")},n=function(e){return s===e?T.selectedLabel:T.labelItem};return(0,p.jsxs)("div",{className:T.labelContainer,children:[(0,p.jsxs)("div",{className:T.labelWrapper,children:[(0,p.jsx)("h3",{className:T.labelTitle,children:"Label color"}),(0,p.jsx)("p",{className:T.labelText,children:s})]}),(0,p.jsxs)("ul",{className:T.labelList,children:[(0,p.jsx)("li",{children:(0,p.jsxs)("label",{className:n("Show all"),children:[(0,p.jsx)("input",{className:T.withoutPriorityInput,type:"radio",value:"withoutPriority",checked:"Show all"===s,onChange:r}),"Without priority"]})}),(0,p.jsx)("li",{children:(0,p.jsxs)("label",{className:n("Low"),children:[(0,p.jsx)("input",{className:T.lowInput,type:"radio",value:"Low",checked:"Low"===s,onChange:r}),"Low"]})}),(0,p.jsx)("li",{children:(0,p.jsxs)("label",{className:n("Medium"),children:[(0,p.jsx)("input",{className:T.mediumInput,type:"radio",value:"Medium",checked:"Medium"===s,onChange:r}),"Medium"]})}),(0,p.jsx)("li",{children:(0,p.jsxs)("label",{className:n("High"),children:[(0,p.jsx)("input",{className:T.highInput,type:"radio",value:"High",checked:"High"===s,onChange:r}),"High"]})})]})]})},U=function(e){var t=e.handleBgClick,s=e.selectedBg;return(0,p.jsxs)("div",{className:T.bgContainer,children:[(0,p.jsx)("h3",{className:T.bgTitle,children:"Background"}),(0,p.jsx)("div",{children:(0,p.jsx)("ul",{className:T.bgList,children:["https://upload.wikimedia.org/wikipedia/commons/8/87/Red_sunset.jpg","https://images.pexels.com/photos/1301470/pexels-photo-1301470.jpeg","https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-and-copyspace_74190-8663.jpg?w=1060&t=st=1687450540~exp=1687451140~hmac=4ff65b3a0cce2b6183d8f4bee3336de41c5b68f393528b26df20c8422ad33919","https://img.freepik.com/premium-photo/abstract-water-ocean-waves-texture-background_117652-6.jpg?w=1060","https://upload.wikimedia.org/wikipedia/commons/8/87/Red_sunset.jpg","https://images.pexels.com/photos/1301470/pexels-photo-1301470.jpeg","https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-and-copyspace_74190-8663.jpg?w=1060&t=st=1687450540~exp=1687451140~hmac=4ff65b3a0cce2b6183d8f4bee3336de41c5b68f393528b26df20c8422ad33919","https://img.freepik.com/premium-photo/abstract-water-ocean-waves-texture-background_117652-6.jpg?w=1060","https://upload.wikimedia.org/wikipedia/commons/8/87/Red_sunset.jpg","https://images.pexels.com/photos/1301470/pexels-photo-1301470.jpeg","https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-and-copyspace_74190-8663.jpg?w=1060&t=st=1687450540~exp=1687451140~hmac=4ff65b3a0cce2b6183d8f4bee3336de41c5b68f393528b26df20c8422ad33919","https://img.freepik.com/premium-photo/abstract-water-ocean-waves-texture-background_117652-6.jpg?w=1060","https://upload.wikimedia.org/wikipedia/commons/8/87/Red_sunset.jpg","https://images.pexels.com/photos/1301470/pexels-photo-1301470.jpeg","https://img.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-and-copyspace_74190-8663.jpg?w=1060&t=st=1687450540~exp=1687451140~hmac=4ff65b3a0cce2b6183d8f4bee3336de41c5b68f393528b26df20c8422ad33919","https://img.freepik.com/premium-photo/abstract-water-ocean-waves-texture-background_117652-6.jpg?w=1060"].map((function(e,a){return(0,p.jsx)("li",{className:T.bgItem,children:(0,p.jsx)("img",{className:"".concat(T.bgImg," ").concat(s===e?T.selectedBg:""),src:e,alt:"Background ".concat(a+1),onClick:function(){return t(e,a)}})},a)}))})})]})},F=function(e){var t=e.isOpen,s=e.onClose,a=e.handleBgClick,i=e.selectedBg;return(0,p.jsx)("div",{className:"modal ".concat(t?"open":""),children:(0,p.jsxs)("div",{className:T.modalContent,children:[(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{className:T.modalTitle,children:"Filters"}),(0,p.jsx)("button",{className:T.closeButton,onClick:s,children:"Close"})]}),(0,p.jsxs)("div",{className:"modalBody",children:[(0,p.jsx)(U,{handleBgClick:a,selectedBg:i}),(0,p.jsx)(L,{})]})]})})},Z=function(){var e=(0,d.useState)(null),t=(0,a.Z)(e,2),s=t[0],i=t[1],r=(0,d.useState)(!1),n=(0,a.Z)(r,2),l=n[0],c=n[1],o=function(){c(!1)};return(0,d.useEffect)((function(){var e=function(e){"Escape"===e.key&&o()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]),(0,p.jsxs)("div",{className:T.filtersContainer,style:{backgroundImage:"url(".concat(s,")")},children:[(0,p.jsx)(Q,{onClick:function(){c(!0)}}),l&&(0,p.jsx)(F,{isOpen:l,onClose:o,handleBgClick:function(e,t){i(0===t?null:e)},selectedBg:s})]})},P=function(e){var t=e.children,s=(0,d.useState)(!1),u=(0,a.Z)(s,2),h=u[0],g=u[1],x=(0,m.a)().theme;return(0,p.jsxs)("div",{className:i,"data-theme":x,children:[(0,p.jsx)("div",{className:h?r:n,children:(0,p.jsx)(C,{})}),h&&(0,p.jsx)("div",{className:l,onClick:function(){return g(!1)}}),(0,p.jsxs)("div",{className:c,children:[(0,p.jsx)("div",{className:o,children:(0,p.jsx)(R,{toggleSidebar:g})}),(0,p.jsx)(Z,{}),t]})]})},K=function(){return(0,p.jsx)(d.Suspense,{fallback:(0,p.jsx)("p",{children:"Loading..."}),children:(0,p.jsx)(P,{children:(0,p.jsx)(N.j3,{})})})}}}]);
//# sourceMappingURL=174.d1204dfe.chunk.js.map