(this.webpackJsonpcitas=this.webpackJsonpcitas||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),i=a(8),n=a.n(i),r=(a(14),a(9)),l=a(3),o=a(5),j=a(7),b=a(0),h=function(e){var t=e.crearCita,s=a(16).v4,i=Object(c.useState)({mascota:"",propietario:"",fecha:"",hora:"",sintomas:""}),n=Object(l.a)(i,2),r=n[0],h=n[1],m=Object(c.useState)(!1),u=Object(l.a)(m,2),d=u[0],O=u[1],p=function(e){console.log(e.target.value),h(Object(j.a)(Object(j.a)({},r),{},Object(o.a)({},e.target.name,e.target.value)))},x=r.mascota,f=r.propietario,g=r.fecha,v=r.hora,N=r.sintomas;return Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)("h2",{children:"Agregar citas"}),d?Object(b.jsx)("p",{className:"alerta-error",children:"Debe completar los campos"}):null,Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==x.trim()&&""!==f.trim()&&""!==g.trim()&&""!==v.trim()&&""!==N.trim()?(O(!1),r.id=s(),t(r),h({mascota:"",propietario:"",fecha:"",hora:"",sintomas:""})):O(!0)},children:[Object(b.jsx)("label",{children:"Nombre mascota"}),Object(b.jsx)("input",{type:"text",name:"mascota",className:"u-full-width",placeholder:"Nombre Mascota",onChange:p,value:x}),Object(b.jsx)("label",{children:"Nombre due\xf1o"}),Object(b.jsx)("input",{type:"text",name:"propietario",className:"u-full-width",placeholder:"Nombre due\xf1o",onChange:p,value:f}),Object(b.jsx)("label",{children:"Fecha"}),Object(b.jsx)("input",{type:"date",name:"fecha",className:"u-full-width",onChange:p,value:g}),Object(b.jsx)("label",{children:"Hora"}),Object(b.jsx)("input",{type:"time",name:"hora",className:"u-full-width",onChange:p,value:v}),Object(b.jsx)("label",{children:"Sintoma"}),Object(b.jsx)("textarea",{className:"u-full-width",name:"sintomas",onChange:p,value:N}),Object(b.jsx)("button",{type:"submit",className:"u-full-width button-primary",children:"Agregar"})]})]})},m=function(e){var t=e.cita,a=e.eliminarCita;return Object(b.jsxs)("div",{className:"cita",children:[Object(b.jsxs)("p",{children:[" Mascota: ",Object(b.jsx)("span",{children:t.mascota})," "]}),Object(b.jsxs)("p",{children:[" Propietario: ",Object(b.jsx)("span",{children:t.propietario})," "]}),Object(b.jsxs)("p",{children:[" Fecha: ",Object(b.jsx)("span",{children:t.fecha})," "]}),Object(b.jsxs)("p",{children:[" Hora: ",Object(b.jsx)("span",{children:t.hora})," "]}),Object(b.jsxs)("p",{children:[" Sintomas: ",Object(b.jsx)("span",{children:t.sintomas})," "]}),Object(b.jsx)("button",{onClick:function(){a(t.id)},className:"button eliminar u-full-width",children:"Eliminar"})]})};var u=function(){var e=JSON.parse(localStorage.getItem("citas"));e||(e=[]);var t=Object(c.useState)(e),a=Object(l.a)(t,2),s=a[0],i=a[1];Object(c.useEffect)((function(){JSON.parse(localStorage.getItem("citas"))?localStorage.setItem("citas",JSON.stringify(s)):localStorage.setItem("citas",JSON.stringify([]))}),[s]);var n=function(e){var t=s.filter((function(t){return t.id!==e}));i(t)},o=0===s.length?"No hay citas":"Administra tus citas";return Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)("h1",{children:"Administrador de pacientes"}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"one-half column",children:Object(b.jsx)(h,{crearCita:function(e){i([].concat(Object(r.a)(s),[e]))}})}),Object(b.jsxs)("div",{className:"one-half column",children:[Object(b.jsx)("h2",{children:o}),s.map((function(e){return Object(b.jsx)(m,{cita:e,eliminarCita:n},e.id)}))]})]})})]})};n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(u,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.58815321.chunk.js.map