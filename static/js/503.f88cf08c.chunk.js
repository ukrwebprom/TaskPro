"use strict";(self.webpackChunktaskpro=self.webpackChunktaskpro||[]).push([[503],{8686:function(e,t,a){a.d(t,{Z:function(){return u}});var r="Btn_btn__cDq+h",s="Btn_invertBtn__cMqwS Btn_btn__cDq+h",n="Btn_wrapperIcon__t6DwO",i="Btn_invertIcon__h3YY4 Btn_wrapperIcon__t6DwO",o="Btn_title__xBGYm",c=a(7609),l=a(184),u=function(e){var t=e.type,a=void 0===t?"button":t,u=e.title,m=e.icon,d=void 0===m||m,_=e.invert,h=void 0!==_&&_,p=e.action;return(0,l.jsxs)("button",{type:a,className:h?s:r,onClick:p,children:[d&&(0,l.jsx)("div",{className:h?i:n,children:(0,l.jsx)("svg",{width:"18px",height:"18px",stroke:"currentColor",children:(0,l.jsx)("use",{href:c.Z+"#plus-icon"})})}),(0,l.jsx)("span",{className:o,children:u})]})}},3138:function(e,t,a){a.d(t,{P:function(){return n}});var r=a(2688),s=a(184),n=function(e){var t=e.children;return(0,s.jsx)("div",{className:r.Z.container,children:(0,s.jsx)("div",{className:r.Z.content,children:t})})}},1604:function(e,t,a){a.r(t),a.d(t,{default:function(){return D}});var r=a(3138),s=a(7689),n=a(9439),i=a(2506),o=a(9314),c=a(8686),l=a(7202),u="ErrorTip_tip__wNok-",m="ErrorTip_message__XvNr5",d=a(184),_=function(e){var t=e.e;return(0,d.jsxs)("div",{className:u,children:[(0,d.jsx)(l.Z,{name:"#error"}),(0,d.jsx)("p",{className:m,children:t})]})},h="LoginForm_wrap__SAWwp",p="LoginForm_regtitle__dt-BC",g="LoginForm_regtitleActive__O5ybS",f="LoginForm_label__pAfdy",x="LoginForm_input__iqQPD",v="LoginForm_field__6D429",y="LoginForm_titleFild__--O5+",j="LoginForm_error__XSPda",Z="LoginForm_eyeicon__kkjZX",w=a(2791),b=a(9273),N=a(9434),q=a(8627),R=function(){var e=(0,q.a)().error,t=(0,N.I0)(),a=(0,w.useState)("password"),r=(0,n.Z)(a,2),s=r[0],u=r[1],m=(0,w.useState)("#eye-icon"),R=(0,n.Z)(m,2),L=R[0],T=R[1];return(0,d.jsx)(i.J9,{initialValues:{email:"",password:""},validationSchema:o.yA,onSubmit:function(e,a){t((0,b.x4)({email:e.email,password:e.password})),a.resetForm()},children:function(t){var a=t.isSubmitting,r=t.touched,n=t.errors,o=t.dirty;return(0,d.jsx)("div",{className:h,children:(0,d.jsxs)(i.l0,{children:[(0,d.jsxs)("div",{className:y,children:[(0,d.jsx)("a",{href:"register",className:p,children:"Registration"}),(0,d.jsx)("p",{className:g,children:"Log In"})]}),e&&(0,d.jsx)(_,{e:e}),(0,d.jsxs)("div",{className:v,children:[(0,d.jsxs)("label",{className:f,children:[(0,d.jsx)(i.gN,{className:x,name:"email",placeholder:"Enter your email",type:"email",autoFocus:!0,onBlur:r.title&&n.title}),(0,d.jsx)(i.Bc,{name:"email",component:"div",className:j})]}),(0,d.jsxs)("label",{className:f,children:[(0,d.jsx)(i.gN,{className:x,name:"password",placeholder:"Confirm a password",type:s,onBlur:r.title&&n.title}),(0,d.jsx)(i.Bc,{name:"password",component:"div",className:j}),(0,d.jsx)("button",{type:"button",className:Z,value:s,onClick:function(e){return function(e){var t=e.currentTarget.value;console.log(t),"password"===t?(u("text"),T("#eye-slash-icon")):(u("password"),T("#eye-icon"))}(e)},children:(0,d.jsx)(l.Z,{name:L})})]})]}),(0,d.jsx)(c.Z,{invert:!1,title:"Log In Now",icon:!1,type:"submit",disabled:a||!o})]})})}})},L=a(4165),T=a(5861),I="Registerform_wrap__EFELx",A="Registerform_titleFild__ioAJn",k="Registerform_regtitle__2KOSk",B="Registerform_regtitleActive__vQYtO",S="Registerform_label__0MSKF",z="Registerform_input__ozt8M",F="Registerform_field__3T2hC",C="Registerform_error__AFMaO",W="Registerform_eyeicon__fKI1+",$=a(1243);$.Z.defaults.baseURL="https://taskpro-41yf.onrender.com";var O=function(){var e=(0,T.Z)((0,L.Z)().mark((function e(t){var a;return(0,L.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.Z.post("/user/register",t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=(0,N.I0)(),t=(0,w.useState)("password"),a=(0,n.Z)(t,2),r=a[0],s=a[1],u=(0,w.useState)("#eye-icon"),m=(0,n.Z)(u,2),h=m[0],p=m[1],g=(0,w.useState)(null),f=(0,n.Z)(g,2),x=f[0],v=f[1],y=function(){var t=(0,T.Z)((0,L.Z)().mark((function t(a,r){return(0,L.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O(a);case 3:r.resetForm(),e((0,b.x4)({email:a.email,password:a.password})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),v(t.t0.response.data.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,a){return t.apply(this,arguments)}}();return(0,d.jsx)(i.J9,{initialValues:{name:"",email:"",password:""},validationSchema:o.$P,onSubmit:y,children:function(e){var t=e.isSubmitting,a=e.touched,n=e.errors,o=e.dirty;return(0,d.jsx)("div",{className:I,children:(0,d.jsxs)(i.l0,{children:[(0,d.jsxs)("div",{className:A,children:[(0,d.jsx)("p",{className:B,children:"Registration"}),(0,d.jsx)("a",{href:"log",className:k,children:"Log In"})]}),x&&(0,d.jsx)(_,{e:x}),(0,d.jsxs)("div",{className:F,children:[(0,d.jsxs)("label",{className:S,children:[(0,d.jsx)(i.gN,{className:z,name:"name",placeholder:"Enter your name",autoFocus:!0,onBlur:a.title&&n.title}),(0,d.jsx)(i.Bc,{name:"name",component:"div",className:C})]}),(0,d.jsxs)("label",{className:S,children:[(0,d.jsx)(i.gN,{className:z,name:"email",placeholder:"Enter your email",type:"email",onBlur:a.title&&n.title}),(0,d.jsx)(i.Bc,{name:"email",component:"div",className:C})]}),(0,d.jsxs)("label",{className:S,children:[(0,d.jsx)(i.gN,{className:z,name:"password",placeholder:"Create a password",type:r,onBlur:a.title&&n.title}),(0,d.jsx)("button",{type:"button",className:W,value:r,onClick:function(e){return function(e){"password"===e.currentTarget.value?(s("text"),p("#eye-slash-icon")):(s("password"),p("#eye-icon"))}(e)},children:(0,d.jsx)(l.Z,{name:h})}),(0,d.jsx)(i.Bc,{name:"password",component:"div",className:C})]})]}),(0,d.jsx)(c.Z,{invert:!1,title:"Register Now",icon:!1,type:"submit",disabled:t||!o})]})})}})},D=function(){var e=(0,s.UO)().id;return(0,d.jsx)(w.Suspense,{fallback:(0,d.jsx)("p",{children:"Loading..."}),children:(0,d.jsx)(r.P,{children:function(e){switch(e){case"login":default:return(0,d.jsx)(R,{});case"register":return(0,d.jsx)(P,{})}}(e)})})}},9314:function(e,t,a){a.d(t,{aP:function(){return i},yA:function(){return s},z6:function(){return o},$P:function(){return n}});var r=a(6727),s=r.Ry().shape({email:r.Z_().required("Is Required"),password:r.Z_().required("Is Required")}),n=r.Ry().shape({name:r.Z_().required("Is Required").matches(/^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/? ]*$/,"The name must contain only Latin letters, numbers and symbols").min(2,"The name must contain at least 2 characters").max(32,"The name must contain less than 32 characters"),email:r.Z_().required("Is Required").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,"This must be a valid email"),password:r.Z_().required("Is Required").matches(/^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/,"The password must contain only Latin letters, numbers and symbols").min(8,"Password must contain at least 8 characters").max(64,"Password must contain less than 64 characters")}),i=r.Ry().shape({email:r.Z_().required("Is Required").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,"This must be a valid email"),message:r.Z_().required("Is Required").min(10,"The message must contain at least 10 characters").max(200,"The message must contain less than 200 characters")}),o=r.Ry().shape({title:r.Z_().required("Is Required").min(3,"The title must contain at least 3 characters"),icon:r.Z_().required("Is Required"),background:r.Z_()});a(6279),a(3614),a(9270)},6279:function(e,t,a){a.d(t,{A:function(){return s}});var r=a(6727),s=r.Ry().shape({title:r.Z_().required("Is Required").min(3,"The title must contain at least 3 characters"),description:r.Z_().min(5,"The description must contain at least 5 characters").max(200,"The description must contain less than 200 characters").required("Is Required"),priority:r.Z_().required("Is Required")})},3614:function(e,t,a){a.d(t,{f:function(){return s}});var r=a(6727),s=r.Ry().shape({title:r.Z_().required("Is Required").max(32,"The title must contain less than 32 characters")})},9270:function(e,t,a){a.d(t,{k:function(){return s}});var r=a(6727),s=r.Ry().shape({name:r.Z_().required("Is Required").matches(/^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/? ]*$/,"The name must contain only Latin letters, numbers and symbols").min(2,"The name must contain at least 2 characters").max(32,"The name must contain less than 32 characters"),email:r.Z_().required("Is Required").matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,"This must be a valid email"),password:r.Z_(),userPhoto:r.nK().nullable(!0).test("fileSize","File size too large",(function(e){return!e||e&&e.size<=4096e3})).test("fileType","Invalid file type",(function(e){return!e||e&&["image/jpeg","image/png","image/gif"].includes(e.type)}))})},2688:function(e,t){t.Z={container:"WelcomeLayout_container__KDJpp",content:"WelcomeLayout_content__VuvIh",title:"WelcomeLayout_title__cgXTQ",logowrap:"WelcomeLayout_logowrap__ouqz4",regbtn:"WelcomeLayout_regbtn__OO93W",paragraph:"WelcomeLayout_paragraph__TpzpT",logintext:"WelcomeLayout_logintext__Sno+C",gogglelogin:"WelcomeLayout_gogglelogin__-KTdA",wecomeimage:"WelcomeLayout_wecomeimage__6HtMi"}}}]);
//# sourceMappingURL=503.f88cf08c.chunk.js.map