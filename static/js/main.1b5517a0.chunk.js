(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{108:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var r=n(16),i=n(0),a=n.n(i),o=n(12),c=n.n(o),s=(n(108),n(63)),d=n(58),l=n(56),u=n.n(l),h="PREVIEW",p="# Welcome \n\n## This Markdown Previewer is built with [react](https://reactjs.org), [redux](https://redux.js.org) and [marked](https://marked.js.org/).\n\n## Code\nHere is some code, `<div></div>`.\n```\n// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\nif (firstLine == '```' && lastLine == '```') {\nreturn multiLineCode;}}\n```\n## Blockquotes\n> Blockquotes are very handy in email to emulate reply text.> This line is part of the same quote.\n## Lists\n1. First ordered list item\n2. Another item\n\n## Images\n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')\n\n## Bold\nYou can write text in **bold**.";u.a.setOptions({renderer:new u.a.Renderer,breaks:!0});var j={editor:p,preview:u()(p)};var b=Object(d.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return{editor:t.payload,preview:u()(t.payload)};default:return e}})),m=n(80),v=n(81),x=n(100),g=n(97),w=n(155),O=n(96),f=n(52),k=n(30),y=n(151),L=n(154),T=n(153).a.TextArea,C={"text-align":"center"},S=Object(r.jsx)(w.a,{content:"Just paste the markdown code to be converted in html in the right side",trigger:"click",children:Object(r.jsx)(O.a,{shape:"circle",icon:Object(r.jsx)(L.a,{})})}),A=function(e){Object(x.a)(n,e);var t=Object(g.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){var e=this;return Object(r.jsxs)(f.a,{justify:"center",children:[Object(r.jsx)(k.a,{span:12,children:Object(r.jsx)(y.a,{title:"Markdown",bordered:!0,headStyle:C,extra:S,children:Object(r.jsx)(T,{id:"editor",onChange:function(t){return e.props.previwAction(t.target.value)},value:this.props.editor,autoSize:!0})})}),Object(r.jsx)(k.a,{span:12,children:Object(r.jsx)(y.a,{title:"Html",bordered:!0,headStyle:C,children:Object(r.jsx)("div",{id:"preview",dangerouslySetInnerHTML:{__html:this.props.preview}})})})]})}}]),n}(a.a.Component),B={previwAction:function(e){return{type:h,payload:e}}},F=Object(s.b)((function(e){return e}),B)(A);n(148);var I=function(){return Object(r.jsx)(s.a,{store:b,children:Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(F,{})})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,156)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),i(e),a(e),o(e)}))};c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(I,{})}),document.getElementById("root")),E()}},[[149,1,2]]]);
//# sourceMappingURL=main.1b5517a0.chunk.js.map