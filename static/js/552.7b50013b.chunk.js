"use strict";(self.webpackChunktaskpro=self.webpackChunktaskpro||[]).push([[552],{8686:function(e,r,a){a.d(r,{Z:function(){return d}});var t="Btn_btn__cDq+h",n="Btn_invertBtn__cMqwS Btn_btn__cDq+h",s="Btn_wrapperIcon__t6DwO",i="Btn_invertIcon__h3YY4 Btn_wrapperIcon__t6DwO",o="Btn_title__xBGYm",c=a(7609),l=a(184),d=function(e){var r=e.type,a=void 0===r?"button":r,d=e.title,u=e.icon,m=void 0===u||u,p=e.invert,_=void 0!==p&&p,h=e.action;return(0,l.jsxs)("button",{type:a,className:_?n:t,onClick:h,children:[m&&(0,l.jsx)("div",{className:_?i:s,children:(0,l.jsx)("svg",{width:"18px",height:"18px",stroke:"currentColor",children:(0,l.jsx)("use",{href:c.Z+"#plus-icon"})})}),(0,l.jsx)("span",{className:o,children:d})]})}},4233:function(e,r,a){a.d(r,{Z:function(){return t.Z}});var t=a(7202)},5488:function(e,r,a){var t=a(1413),n=a(8642),s=a(7202),i=a(5716),o=a(184);r.Z=function(e){var r=e.children,a=(e.isOpen,e.name),c=e.onClose,l=e.position,d=(0,i.Z)("(max-width: 480px)");return(0,o.jsx)("div",{className:n.Z.backdrop,onClick:c,children:(0,o.jsxs)("div",{className:n.Z.modal_content,style:d?{top:"50%",left:"50%",transform:"translate(-50%, -50%)",padding:24}:(0,t.Z)((0,t.Z)({},l),{},{padding:24}),onClick:function(e){return e.stopPropagation()},children:[(0,o.jsx)("button",{className:n.Z.close_button,onClick:c,children:(0,o.jsx)(s.Z,{name:"#close-icon"})}),(0,o.jsx)("div",{className:n.Z.modal_items,children:(0,o.jsx)("h2",{className:n.Z.modal_title,children:a})}),r]})})}},8909:function(e,r,a){a.d(r,{$:function(){return s}});var t=a(9434),n=a(7146),s=function(){var e=(0,t.v9)(n.E$),r=(0,t.v9)(n.O7),a=(0,t.v9)(n.zh),s=(0,t.v9)(n.AD);return{boards:e,current:r,error:a,currentData:(0,t.v9)(n.gT),filter:s}}},9028:function(e,r,a){a.d(r,{k:function(){return m},d:function(){return u}});var t=a(9439),n=a(2791),s=a(5488),i=a(1413),o=a(8642),c=a(184),l=function(e){var r=e.children,a=e.onClose,t=e.position;return(0,c.jsx)("div",{className:o.Z.backdrop,onClick:a,children:(0,c.jsx)("div",{className:o.Z.popoverContent,style:(0,i.Z)({},t),onClick:function(e){return e.stopPropagation()},children:r})})},d=(0,n.createContext)(),u=function(){return(0,n.useContext)(d)},m=function(e){var r=e.children,a=(0,n.useState)(!1),i=(0,t.Z)(a,2),o=i[0],u=i[1],m=(0,n.useState)(!1),p=(0,t.Z)(m,2),_=p[0],h=p[1],b=(0,n.useState)(null),v=(0,t.Z)(b,2),x=v[0],f=v[1],j=(0,n.useState)(null),g=(0,t.Z)(j,2),N=g[0],y=g[1],k=(0,n.useState)(""),w=(0,t.Z)(k,2),Z=w[0],S=w[1],B=(0,n.useState)({}),F=(0,t.Z)(B,2),T=F[0],M=F[1],C=function(e){var r=e.x,a=e.y;M({x:r,y:a})},I=function(e){var r=T.x,a=void 0===r?0:r,t=T.y,n=void 0===t?0:t,s={},i=window.innerHeight;return a>window.innerWidth/2?s.right=window.innerWidth-a:s.left=a,n>i/2?s.bottom=i-n+Math.min(0,n-e):s.top=n-Math.max(0,e-(i-n)),s},q=function(){f(null),u(!1)},P=function(){y(null),h(!1)};return(0,n.useEffect)((function(){return window.addEventListener("click",C),function(){return window.removeEventListener("click",C)}}),[]),(0,c.jsxs)(d.Provider,{value:{getModal:function(e,r){S(e),f(r),u(!0)},killModal:q,getPopover:function(e){y(e),h(!0)},killPopover:P},children:[o&&(0,c.jsx)(s.Z,{onClose:q,name:Z,position:I(545),children:x}),_&&(0,c.jsx)(l,{onClose:P,position:I(5),children:N}),r]})}},9353:function(e,r,a){a.r(r),a.d(r,{default:function(){return Xe}});var t=a(9439),n="HomeLayout_outer__mme-w",s="HomeLayout_sidebar__qQxxv",i="HomeLayout_hidden__7IKXv HomeLayout_sidebar__qQxxv",o="HomeLayout_backdrop__w8k3r",c="HomeLayout_mainarea__eBLql",l="HomeLayout_header__aUrZa",d=a(2791),u="Logo_container__G4TDH",m="Logo_logo__2NmgL";var p=a.p+"static/media/icon.473aa9b9b064ab0a611ea0795a8e12f3.svg";var _=a.p+"static/media/icon-violet.02f83e3f964cce0106ba62ecd0986f5b.svg",h=a(1087),b=a(8627),v=a(184),x=function(){var e=(0,b.a)().user;return(0,v.jsx)("div",{className:u,children:(0,v.jsxs)(h.rU,{to:"/",className:m,children:[(0,v.jsx)("img",{src:"violet"===e.theme?_:p,alt:"TaskPro logo"}),(0,v.jsx)("span",{children:"Task Pro"})]})})},f=a(7689),j=a(9434),g=a(7014),N=a.n(g),y=a(8909),k=a(600),w=a(2314),Z=a(7202),S="Sidebar_sidebar__zfhso",B="Sidebar_sidebarBottom__QT6w0",F="Sidebar_boards__0QB9o",T="Sidebar_boardsHeading__rbJPr",M="Sidebar_projects__jFnNb",C="Sidebar_boardActive__6uBMV",I="Sidebar_boardLink__D4Tsr",q="Sidebar_board__cQUnv",P="Sidebar_boardInfo__Mhsa2",H="Sidebar_boardTitle__inHAi",A="Sidebar_boardButtons__Jy0dU",E="Sidebar_boardActionButton__oe+70",L="Sidebar_createButton__2+u2v Sidebar_button__Kdb2I",z="Sidebar_createText__ZOou-",R="Sidebar_createIcon__xGoqT",D="Sidebar_logoutButton__hf1X4 Sidebar_button__Kdb2I",O="Sidebar_helpButton__BeZBT Sidebar_button__Kdb2I",$="Sidebar_help__hWNyH",J="Sidebar_helpHeader__vS3c3",U="Sidebar_helpText__1vwtr",K="Sidebar_helpTextAccent__GrJsL",V=function(e){var r=e.index,a=e.board,t=e.setActive,n=e.handleDelete,s=e.handleEdit;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:I,onClick:function(){return t(r)},children:[(0,v.jsxs)("div",{className:P,children:[(0,v.jsx)(Z.Z,{name:"#"+a.icon,width:"18",height:"18"}),(0,v.jsx)("span",{className:H,children:a.title})]}),(0,v.jsxs)("div",{className:A,children:[(0,v.jsx)("button",{type:"button",className:E,onClick:s,children:(0,v.jsx)(Z.Z,{name:"#pencil-icon",tip:"Edit"})}),(0,v.jsx)("button",{type:"button",className:E,onClick:function(){return n(a._id)},children:(0,v.jsx)(Z.Z,{name:"#trash-icon",tip:"Delete"})})]})]})})},W=a(2506),G=a(9314),Q="BoardForm_form__BC30N",Y="BoardForm_input__KKMXf",X="BoardForm_itemtitle__N0MA4",ee="BoardForm_label__71M7X",re="BoardForm_radio__rDNKj",ae="BoardForm_icontainer__yce-v",te="BoardForm_icon__O3Z3T",ne="BoardForm_wrapimage__QHEri",se="BoardForm_background__NSCWd",ie="BoardForm_boardicon__y-lOk",oe="BoardForm_boardbg__lIAsp",ce="BoardForm_error__kHKBB",le=a(8686),de=a(2301),ue=["board1","board2","board3","board4","board5","board6","board7","board8"],me=function(e){var r=e.onSubmitForm,a=e.def,t=e.type,n={title:"",icon:ue[0],background:"0"};return(0,v.jsx)(W.J9,{initialValues:a||n,validationSchema:G.z6,onSubmit:function(e,a){var t=a.setSubmitting,n=a.resetForm;r(e),t(!1),n()},children:function(e){var r=e.isSubmitting,a=e.touched,n=e.errors,s=e.dirty,i=e.values;e.setFieldValue;return(0,v.jsxs)(W.l0,{className:Q,children:[(0,v.jsxs)("label",{className:ee,children:[(0,v.jsx)(W.gN,{className:Y,type:"text",name:"title",placeholder:"Title",autoFocus:!0,onBlur:a.description&&n.description}),(0,v.jsx)(W.Bc,{name:"title",component:"div",className:ce})]}),(0,v.jsxs)("label",{className:ee,children:[(0,v.jsx)("p",{className:X,children:"Icons"}),(0,v.jsx)("div",{className:ae,role:"group",children:ue.map((function(e,r){return(0,v.jsxs)("div",{className:ie,children:[(0,v.jsx)(W.gN,{type:"radio",id:r,name:"icon",value:e,checked:i.icon===e,className:re,onBlur:a.description&&n.description}),(0,v.jsx)("label",{htmlFor:r,className:te,children:(0,v.jsx)(Z.Z,{name:"#".concat(e)})})]},r)}))}),(0,v.jsx)(W.Bc,{name:"icon",component:"div",className:ce})]}),(0,v.jsxs)("label",{className:ee,children:[(0,v.jsx)("p",{className:X,children:"Background"}),(0,v.jsx)("div",{className:ne,children:de.map((function(e,r){return(0,v.jsxs)("div",{className:oe,children:[(0,v.jsx)(W.gN,{type:"radio",id:"back".concat(r),name:"background",value:r,checked:Number(i.background)===r,onBlur:a.description&&n.description}),(0,v.jsx)("label",{htmlFor:"back".concat(r),className:se,style:{backgroundImage:"url(".concat(e,")")}})]},r)}))}),(0,v.jsx)(W.Bc,{name:"background",component:"div",className:ce})]}),(0,v.jsx)(le.Z,{invert:!1,title:t,type:"submit",disabled:r||!s})]})}})},pe=a(9028),_e=function(){var e=(0,pe.d)(),r=e.getModal,a=e.killModal,t=(0,y.$)(),n=t.boards,s=t.current,i=(0,f.UO)().boardName,o=(0,f.s0)(),c=(0,j.I0)(),l=function(e){c((0,k.ZO)(e));var r=N()(n[e].title);o("/home/".concat(r),{replace:!0})},u=function(e){c((0,w.L1)(e))},m=function(e){c((0,w.CJ)(e)),a()},p=(0,d.useCallback)((function(){var e=n.map((function(e){return N()(e.title)})).indexOf(i);if(-1!==e)c((0,k.ZO)(e));else{c((0,k.ZO)(0));var r=N()(n[0].title);o("/home/".concat(r),{replace:!0})}}),[i,n,o,c]);return(0,d.useEffect)((function(){n.length>0?p():o("/home",{replace:!0})}),[n,p,o]),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{className:F,children:n.length>0&&(0,v.jsx)("ul",{className:M,children:n.map((function(e,a){return(0,v.jsx)("li",{className:a===s?C:q,children:(0,v.jsx)(V,{index:a,handleEdit:function(){return r("Edit board",(0,v.jsx)(me,{onSubmitForm:m,def:e,type:"Edit"}))},handleDelete:u,board:e,setActive:l})},e._id)}))})})})},he=a(4233),be=a(5488),ve="HelpForm_form__cvdvM",xe="HelpForm_input__SHE09",fe="HelpForm_label__eS9j+",je="HelpForm_comment__eFJoN",ge="HelpForm_error__kpLqY",Ne=function(e){var r=e.onSubmitForm,a=e.type;return(0,v.jsx)(W.J9,{initialValues:{email:"",message:""},validationSchema:G.aP,onSubmit:function(e,a){var t=a.setSubmitting,n=a.resetForm;r(e),t(!1),n()},children:function(e){var r=e.isSubmitting,t=e.touched,n=e.errors,s=e.dirty;return(0,v.jsxs)(W.l0,{className:ve,children:[(0,v.jsxs)("label",{className:fe,children:[(0,v.jsx)(W.gN,{className:xe,name:"email",placeholder:"Email address",type:"email",autoFocus:!0,onBlur:t.description&&n.description}),(0,v.jsx)(W.Bc,{name:"email",component:"div",className:ge})]}),(0,v.jsxs)("label",{className:fe,children:[(0,v.jsx)(W.gN,{className:je,name:"message",as:"textarea",placeholder:"Message",onBlur:t.description&&n.description}),(0,v.jsx)(W.Bc,{name:"message",component:"div",className:ge})]}),(0,v.jsx)(le.Z,{invert:!1,title:a,icon:!1,type:"submit",disabled:r||!s})]})}})},ye=a(9273),ke=function(){var e=(0,pe.d)(),r=e.getModal,a=e.killModal,n=(0,d.useState)(!1),s=(0,t.Z)(n,2),i=s[0],o=s[1],c=(0,j.I0)(),l=function(e){c((0,ye.CF)(e)),a()};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:$,children:[(0,v.jsx)("div",{className:J}),(0,v.jsxs)("p",{className:U,children:["If you need help with ",(0,v.jsx)("span",{className:K,children:"TaskPro"}),", check out our support resources or reach out to our customer support team."]}),(0,v.jsxs)("button",{type:"button",className:O,onClick:function(){return r("Support",(0,v.jsx)(Ne,{onSubmitForm:l,type:"Send"}))},children:[(0,v.jsx)(he.Z,{name:"#help-circle-icon",sprite:2,width:"20",height:"20"}),(0,v.jsx)("span",{children:"Need help?"})]})]}),i&&(0,v.jsx)(be.Z,{onClose:function(){return o((function(e){return!e}))},name:"Support",children:(0,v.jsx)(Ne,{onSubmitForm:l})})]})},we=a(7847),Ze=function(){var e=(0,pe.d)(),r=e.getModal,a=e.killModal,t=(0,j.I0)(),n=function(e){t((0,w.JU)(e)),a()};return(0,v.jsxs)("div",{className:S,children:[(0,v.jsxs)("div",{children:[(0,v.jsx)(x,{}),(0,v.jsx)("p",{className:T,children:"My boards"}),(0,v.jsxs)("button",{type:"button",className:L,onClick:function(){return r("New board",(0,v.jsx)(me,{onSubmitForm:n,type:"Create"}))},children:[(0,v.jsx)("span",{className:z,children:"Create a new board"}),(0,v.jsx)("div",{className:R,children:(0,v.jsx)(he.Z,{name:"#plus-icon",width:"20",height:"20"})})]})]}),(0,v.jsx)(_e,{}),(0,v.jsxs)("div",{className:B,children:[(0,v.jsx)(ke,{}),(0,v.jsxs)("button",{type:"button",className:D,children:[(0,v.jsx)(he.Z,{name:"#login-icon",sprite:2,width:"32",height:"32"}),(0,v.jsx)("span",{onClick:function(){t((0,ye.kS)()),we.D.purge()},children:"Log out"})]})]})]})},Se={headerTaskPro:"Header_headerTaskPro__MDMv1",headerall:"Header_headerall__YM18G",menuburger:"Header_menuburger__pDV9w",iconburger:"Header_iconburger__8ANtY",styleTheme:"Header_styleTheme__VV3Xf",burgerstyle:"Header_burgerstyle__B0MI6",outputselector:"Header_outputselector__5dAIg",selectortheme:"Header_selectortheme__dvaWB",styleUserInfo:"Header_styleUserInfo__mT6Pq",styleName:"Header_styleName__YEkJg",styleAvatar:"Header_styleAvatar__OPnQE",textuseravatar:"Header_textuseravatar__vvdri",burgerMenu:"Header_burgerMenu__NNFS9"},Be="ThemeSelector_selector__UGq2p",Fe="ThemeSelector_selectorItem__Parp0",Te="ThemeSelector_active__-W41z ThemeSelector_selectorItem__Parp0",Me=function(e){var r=e.onClose,a=(0,j.I0)(),t=(0,b.a)().user,n={dark:"dark",light:"light",violet:"violet"};return(0,v.jsx)("ul",{className:Be,children:function(){var e=[],s=function(){var s=n[i];e.push((0,v.jsx)("li",{children:(0,v.jsx)("button",{onClick:function(){a((0,ye.Be)(s)),r()},className:"".concat(t.theme===s?Te:Fe," noselect"),children:s})},s))};for(var i in n)s();return e}()})};var Ce=a.p+"static/media/user_dark.084bccc071bb8dec64e328e7d81ba057.svg";var Ie=a.p+"static/media/user_light.7744c14c887e56d9dfbd4986541fa655.svg";var qe=a.p+"static/media/user_violet.e425c7a610d0f4e74a5dff581d529894.svg",Pe=a(5343),He=function(e){var r=e.size,a=e.onClick,t=e.isLoading,n=e.preload,s=(0,b.a)().user,i={dark:Ce,light:Ie,violet:qe},o=s.avatar?s.avatar:i[s.theme];n&&(o=n);return(0,v.jsx)(v.Fragment,{children:t?(0,v.jsx)(Pe.iT,{height:80,width:80,color:{dark:"#bedbb0",light:"#bedbb0",violet:"#5255bc"}[s.theme],wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#eee",strokeWidth:2,strokeWidthSecondary:2}):(0,v.jsx)("img",{src:o,alt:s.name,width:r,height:r,onClick:a,style:{borderRadius:"5px",cursor:"pointer"}})})},Ae=a(4165),Ee=a(5861),Le=a(9270),ze="EditProfileForm_s__keZkk",Re="EditProfileForm_form__L87-6",De="EditProfileForm_addfilewrap__CyAxw",Oe="EditProfileForm_inputFile__l-8fj",$e="EditProfileForm_filelabel__kiNtN",Je="EditProfileForm_label__Q3wUb",Ue="EditProfileForm_input__AeDjG",Ke="EditProfileForm_eyeicon__b-ovj",Ve="EditProfileForm_error__NmqGj",We=a(7609),Ge=function(e){var r=e.onSubmitForm,a=(0,j.I0)(),n=(0,b.a)().user,s=n.name,i=n.email,o=(0,d.useState)(null),c=(0,t.Z)(o,2),l=c[0],u=c[1],m=(0,d.useState)("password"),p=(0,t.Z)(m,2),_=p[0],h=p[1],x=(0,d.useState)("#eye-icon"),f=(0,t.Z)(x,2),g=f[0],N=f[1],y=(0,d.useState)(!1),k=(0,t.Z)(y,2),w=k[0],S=k[1],B=function(){var e=(0,Ee.Z)((0,Ae.Z)().mark((function e(r){var a,t;return(0,Ae.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.prev=1,e.next=4,fetch("https://taskpro-41yf.onrender.com/user/upload",{method:"POST",body:r});case 4:return a=e.sent,e.next=7,a.json();case 7:t=e.sent,u(t.url),S(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(r){return e.apply(this,arguments)}}();return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(W.J9,{initialValues:{avatar:"",name:s,email:i,password:""},validationSchema:Le.k,onSubmit:function(e,t){var n=t.setSubmitting,s=t.resetForm,i={name:e.name,email:e.email};l&&(i.avatar=l),""!==e.password&&(i.password=e.password),a((0,ye.ck)(i)),r(),n(!1),s()},children:function(e){var r=e.touched,a=e.errors,t=e.isSubmitting,n=e.dirty;e.setFieldValue;return(0,v.jsxs)(W.l0,{className:Re,children:[(0,v.jsx)("div",{className:ze,children:(0,v.jsxs)("div",{className:De,children:[(0,v.jsx)(He,{size:68,isLoading:w,preload:l}),!w&&(0,v.jsxs)("label",{className:$e,children:[(0,v.jsx)("svg",{width:"18px",height:"18px",stroke:"currentColor",children:(0,v.jsx)("use",{href:We.Z+"#plus-icon"})}),(0,v.jsx)(W.gN,{className:Oe,name:"avatar",type:"file",onChange:function(e){!function(e){var r=new FormData;r.append("avatar",e),B(r)}(e.currentTarget.files[0])},onBlur:r.fieldName&&a.fieldName})]}),(0,v.jsx)(W.Bc,{name:"userPhoto",component:"div",className:Ve})]})}),(0,v.jsxs)("label",{className:Je,children:[(0,v.jsx)(W.gN,{className:Ue,name:"name",placeholder:"Enter your name",onBlur:r.fieldName&&a.fieldName}),(0,v.jsx)(W.Bc,{name:"name",component:"div",className:Ve})]}),(0,v.jsxs)("label",{className:Je,children:[(0,v.jsx)(W.gN,{className:Ue,name:"email",placeholder:"Enter your email",type:"email",onBlur:r.fieldName&&a.fieldName}),(0,v.jsx)(W.Bc,{name:"email",component:"div",className:Ve})]}),(0,v.jsxs)("label",{className:Je,children:[(0,v.jsx)(W.gN,{className:Ue,name:"password",placeholder:"Password",type:_,onBlur:r.fieldName&&a.fieldName}),(0,v.jsx)("button",{type:"button",className:Ke,value:_,onClick:function(e){return function(e){"password"===e.currentTarget.value?(h("text"),N("#eye-slash-icon")):(h("password"),N("#eye-icon"))}(e)},children:(0,v.jsx)(Z.Z,{name:g})}),(0,v.jsx)(W.Bc,{name:"password",component:"div",className:Ve})]}),(0,v.jsx)(le.Z,{invert:!1,title:"Send",icon:!1,type:"submit",disabled:t||!n})]})}})})},Qe=function(e){var r=e.toggleSidebar,a=(0,pe.d)(),t=a.getModal,n=a.killModal,s=(0,b.a)().user,i=(0,pe.d)(),o=i.getPopover,c=i.killPopover,l=function(){n()};return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:Se.headerall,children:[(0,v.jsx)("div",{className:Se.menuburger,children:(0,v.jsx)("button",{className:Se.burgerstyle,onClick:function(){return r((function(e){return!e}))},children:(0,v.jsx)(Z.Z,{className:Se.burgerMenu,name:"#menu-icon",width:"32px",height:"32px"})})}),(0,v.jsxs)("div",{className:Se.headerTaskPro,children:[(0,v.jsx)("div",{className:Se.outputselector,children:(0,v.jsxs)("button",{className:Se.styleTheme,onClick:function(){return o((0,v.jsx)(Me,{onClose:c}))},children:[(0,v.jsx)("span",{className:Se.spantheme,children:"Theme"}),(0,v.jsx)(Z.Z,{name:"#chevron-down-icon",width:"16px",height:"16px",color:"#ffffff"})]})}),(0,v.jsxs)("ul",{className:Se.styleUserInfo,children:[(0,v.jsx)("li",{className:Se.styleName,children:s.name}),(0,v.jsx)("li",{children:(0,v.jsx)(He,{onClick:function(){return t("Edit profile",(0,v.jsx)(Ge,{onSubmitForm:l}))},size:32})})]})]})]})})},Ye=function(e){var r=e.children,a=(0,d.useState)(!1),u=(0,t.Z)(a,2),m=u[0],p=u[1],_=(0,b.a)().user;return(0,v.jsx)("div",{className:n,"data-theme":_.theme,children:(0,v.jsxs)(pe.k,{children:[(0,v.jsx)("div",{className:m?s:i,children:(0,v.jsx)(Ze,{})}),m&&(0,v.jsx)("div",{className:o,onClick:function(){return p(!1)}}),(0,v.jsxs)("div",{className:c,children:[(0,v.jsx)("div",{className:l,children:(0,v.jsx)(Qe,{toggleSidebar:p})}),r]})]})})},Xe=function(){var e=(0,j.I0)();return(0,d.useEffect)((function(){e((0,w.Po)())})),(0,v.jsx)(d.Suspense,{fallback:(0,v.jsx)("p",{children:"Loading..."}),children:(0,v.jsx)(Ye,{children:(0,v.jsx)(f.j3,{})})})}},7146:function(e,r,a){a.d(r,{AD:function(){return o},E$:function(){return t},O7:function(){return s},Tv:function(){return c},gT:function(){return i},zh:function(){return n}});var t=function(e){return e.boards.items},n=function(e){return e.boards.error},s=function(e){return e.boards.currentBoard},i=function(e){return e.boards.items[e.boards.currentBoard]},o=function(e){return e.boards.filter},c=function(e){return e.boards.filter}},9314:function(e,r,a){a.d(r,{aP:function(){return i},yA:function(){return n},z6:function(){return o},$P:function(){return s}});var t=a(6727),n=t.Ry().shape({email:t.Z_().required("Is Required"),password:t.Z_().required("Is Required")}),s=t.Ry().shape({name:t.Z_().required("Is Required").matches(/^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/? ]*$/,"The name must contain only Latin letters, numbers and symbols").min(2,"The name must contain at least 2 characters").max(32,"The name must contain less than 32 characters"),email:t.Z_().required("Is Required").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,"This must be a valid email"),password:t.Z_().required("Is Required").matches(/^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/,"The password must contain only Latin letters, numbers and symbols").min(8,"Password must contain at least 8 characters").max(64,"Password must contain less than 64 characters")}),i=t.Ry().shape({email:t.Z_().required("Is Required").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,"This must be a valid email"),message:t.Z_().required("Is Required").min(10,"The message must contain at least 10 characters").max(200,"The message must contain less than 200 characters")}),o=t.Ry().shape({title:t.Z_().required("Is Required").min(3,"The title must contain at least 3 characters"),icon:t.Z_().required("Is Required"),background:t.Z_()});a(6279),a(3614),a(9270)},6279:function(e,r,a){a.d(r,{A:function(){return n}});var t=a(6727),n=t.Ry().shape({title:t.Z_().required("Is Required").min(3,"The title must contain at least 3 characters"),description:t.Z_().min(5,"The description must contain at least 5 characters").max(200,"The description must contain less than 200 characters").required("Is Required"),priority:t.Z_().required("Is Required")})},3614:function(e,r,a){a.d(r,{f:function(){return n}});var t=a(6727),n=t.Ry().shape({title:t.Z_().required("Is Required").max(32,"The title must contain less than 32 characters")})},9270:function(e,r,a){a.d(r,{k:function(){return n}});var t=a(6727),n=t.Ry().shape({name:t.Z_().required("Is Required").matches(/^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/? ]*$/,"The name must contain only Latin letters, numbers and symbols").min(2,"The name must contain at least 2 characters").max(32,"The name must contain less than 32 characters"),email:t.Z_().required("Is Required").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,"This must be a valid email"),password:t.Z_(),userPhoto:t.nK().nullable(!0).test("fileSize","File size too large",(function(e){return!e||e&&e.size<=4096e3})).test("fileType","Invalid file type",(function(e){return!e||e&&["image/jpeg","image/png","image/gif"].includes(e.type)}))})},8642:function(e,r){r.Z={backdrop:"Modal_backdrop__xTnIT",modal_content:"Modal_modal_content__-WSAd",popoverContent:"Modal_popoverContent__Ip3ff",modal_items:"Modal_modal_items__mpOoe",close_button:"Modal_close_button__4xTF9",modal_title:"Modal_modal_title__q1YD4"}},2301:function(e){e.exports=JSON.parse('["https://res.cloudinary.com/pro-task-cloud/image/upload/v1687808947/preview/bgMin0%403x.jpg.webp","https://res.cloudinary.com/pro-task-cloud/image/upload/v1687808947/preview/bgMin1%403x.jpg.jpg","https://res.cloudinary.com/pro-task-cloud/image/upload/v1687808947/preview/bgMin2%403x.jpg.webp","https://res.cloudinary.com/pro-task-cloud/image/upload/v1687808947/preview/bgMin3%403x.jpg.webp","https://res.cloudinary.com/pro-task-cloud/image/upload/v1687808947/preview/bgMin4%403x.jpg.webp","https://res.cloudinary.com/pro-task-cloud/image/upload/v1687808947/preview/bgMin5%403x.jpg.webp","https://res.cloudinary.com/pro-task-cloud/image/upload/v1687808947/preview/bgMin6%403x.jpg.webp","https://res.cloudinary.com/pro-task-cloud/image/upload/v1687808947/preview/bgMin7%403x.jpg.webp","https://res.cloudinary.com/pro-task-cloud/image/upload/v1687808947/preview/bgMin8%403x.jpg.webp","https://res.cloudinary.com/pro-task-cloud/image/upload/v1687808947/preview/bgMin9%403x.jpg.webp","https://res.cloudinary.com/pro-task-cloud/image/upload/v1687808947/preview/bgMin10%403x.jpg.webp","https://res.cloudinary.com/pro-task-cloud/image/upload/v1687808947/preview/bgMin11%403x.jpg.webp","https://res.cloudinary.com/pro-task-cloud/image/upload/v1687808947/preview/bgMin12%403x.jpg.jpg","https://res.cloudinary.com/pro-task-cloud/image/upload/v1687808947/preview/bgMin13%403x.jpg.webp","https://res.cloudinary.com/pro-task-cloud/image/upload/v1687808947/preview/bgMin14%403x.jpg.webp","https://res.cloudinary.com/pro-task-cloud/image/upload/v1687808947/preview/bgMin15%403x.jpg.webp"]')}}]);
//# sourceMappingURL=552.7b50013b.chunk.js.map