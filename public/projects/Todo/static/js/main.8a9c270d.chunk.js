(this.webpackJsonpcompteur2=this.webpackJsonpcompteur2||[]).push([[0],{10:function(e,o,t){},13:function(e,o,t){"use strict";t.r(o);var l=t(1),c=t(4),s=t.n(c),d=(t(9),t(10),t(2)),n=t.n(d),a=t(0);var i=e=>{const o=[];return e.todo.done&&o.push("completed"),e.editId===e.todo.id&&o.push("editing"),Object(a.jsxs)("li",{className:o.join(" "),children:[Object(a.jsxs)("div",{className:"view",children:[Object(a.jsx)("input",{className:"toggle",type:"checkbox",onClick:()=>e.onToggleTodoDone(e.todo.id),checked:e.todo.done,readOnly:!0}),Object(a.jsx)("label",{onDoubleClickCapture:()=>e.onEditId(e.todo.id),children:e.todo.title}),Object(a.jsx)("button",{className:"destroy",onClick:()=>e.onRemoveTodo(e.todo.id)})]}),Object(a.jsx)("input",{className:"edit",defaultValue:e.todo.title,onKeyDown:e.onChangeTodoTitle})]})};var r=e=>{const o=e.todos.filter((o=>"all"===e.display||"active"===e.display&&!1===o.done||"completed"===e.display&&!0===o.done)).map((o=>Object(a.jsx)(i,{display:e.display,editId:e.editId,onEditId:e.onEditId,onToggleTodoDone:e.onToggleTodoDone,onRemoveTodo:e.onRemoveTodo,onChangeTodoTitle:e.onChangeTodoTitle,todo:o},n()())));return Object(a.jsx)("ul",{className:"todo-list",children:o})};var j=e=>{const o=e.todos.length,t=e.todos.reduce(((e,o)=>o.done?e+1:e),0),l=o-t;return Object(a.jsxs)("footer",{className:"footer",children:[Object(a.jsxs)("span",{className:"todo-count",children:[Object(a.jsx)("strong",{children:l})," item",l>1?"s":""," left"]}),Object(a.jsxs)("ul",{className:"filters",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{className:"all"===e.display?"selected":"",href:"#/",onClick:()=>e.onChangeDisplay("all"),children:"All"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#/active",className:"active"===e.display?"selected":"",onClick:()=>e.onChangeDisplay("active"),children:"Active"})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#/completed",className:"completed"===e.display?"selected":"",onClick:()=>e.onChangeDisplay("completed"),children:"Completed"})})]}),Object(a.jsxs)("button",{className:"clear-completed",onClick:e.onClearComplete,children:["Clear completed (",t,")"]})]})};var h=()=>{const[e,o]=Object(l.useState)([]),[t,c]=Object(l.useState)("all"),[s,d]=Object(l.useState)(""),[i,h]=Object(l.useState)(!1);return Object(a.jsxs)("div",{children:[Object(a.jsxs)("section",{className:"todoapp",children:[Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("h1",{children:"todos"}),Object(a.jsx)("input",{className:"new-todo",onKeyDown:t=>{13===t.keyCode&&""!==t.target.value&&(o([{id:n()(),title:t.target.value,done:!1},...e]),t.target.value="")},placeholder:"What needs to be done?",autoFocus:!0})]}),Object(a.jsxs)("section",{className:"main",children:[Object(a.jsx)("input",{id:"toggle-all",className:"toggle-all",type:"checkbox",checked:i,readOnly:!0,onClick:()=>{const o=!i;e.map((e=>(e.done=o,e))),h(o)}}),Object(a.jsx)("label",{htmlFor:"toggle-all",children:"Mark all as complete"}),Object(a.jsx)(r,{todos:e,display:t,editId:s,onToggleTodoDone:t=>{o(e.map((e=>(e.id===t&&(e.done=!e.done),e))))},onRemoveTodo:t=>{o(e.filter((e=>e.id!==t)))},onEditId:d,onChangeTodoTitle:t=>{if(13===t.keyCode&&""!==t.target.value){const l=t.target.value;o(e.map((e=>(e.id===s&&(e.title=l),e)))),d("")}}})]}),Object(a.jsx)(j,{todos:e,display:t,onChangeDisplay:c,onClearComplete:()=>{o(e.filter((e=>!1===e.done)))}})]}),Object(a.jsxs)("footer",{className:"info",children:[Object(a.jsx)("p",{children:"Double-click to edit a todo"}),Object(a.jsxs)("p",{children:["Template by ",Object(a.jsx)("a",{href:"http://sindresorhus.com",children:"Sindre Sorhus"})]}),Object(a.jsxs)("p",{children:["Created by ",Object(a.jsx)("a",{href:"http://todomvc.com",children:"you"})]}),Object(a.jsxs)("p",{children:["Part of ",Object(a.jsx)("a",{href:"http://todomvc.com",children:"TodoMVC"})]})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(a.jsx)(h,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()}))},9:function(e,o,t){}},[[13,1,2]]]);
//# sourceMappingURL=main.8a9c270d.chunk.js.map