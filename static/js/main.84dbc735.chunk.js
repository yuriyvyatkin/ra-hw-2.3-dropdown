(this["webpackJsonpra-hw-2.3-dropdown"]=this["webpackJsonpra-hw-2.3-dropdown"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(4),r=n.n(i),s=(n(9),n(10),["Profile Information","Change Password","Become PRO","Help","Log Out"]),a=n(2),l=n(0);function d(e){var t=e.item,n=e.handleItemClick,c=e.style;return Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"#0",onClick:n,style:c,children:t})})}function u(e){var t=e.items,n=e.preSelectedOption,o=Object(c.useState)(n),i=Object(a.a)(o,2),r=i[0],s=i[1];return Object(l.jsx)("ul",{"data-id":"dropdown",className:"dropdown",children:t.map((function(e,t){return Object(l.jsx)(d,{item:e,handleItemClick:function(){return s(e)},style:{color:e===r?"#5380f7":""}},"".concat(t).concat(e))}))})}function j(e){var t=e.options,n=e.preSelectedOption,o=Object(c.useState)(""),i=Object(a.a)(o,2),r=i[0],s=i[1];return Object(l.jsxs)("div",{className:"dropdown-wrapper ".concat(r),children:[Object(l.jsxs)("button",{className:"btn",onClick:function(){s((function(e){return"open"===e?"":"open"}))},children:[Object(l.jsx)("span",{children:"Account Settings"}),Object(l.jsx)("i",{className:"material-icons",children:"public"})]}),Object(l.jsx)(u,{items:t,preSelectedOption:n})]})}var p=function(){return Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(j,{options:s,preSelectedOption:"Profile Information"})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),b()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.84dbc735.chunk.js.map