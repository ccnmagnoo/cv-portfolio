(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3509)}])},3509:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var r=t(5893),i=t(9008),l=t(7294),o=t(8332),s=t(7137),a=function(e){l.useContext(o.I);return(0,r.jsx)("div",{className:"card",children:(0,r.jsx)(s.E.div,{className:"canvas",animate:{scale:[1,1.2,1.2,1,1],rotate:[0,0,5,-5,0],borderRadius:["5px","50px","1000px","50px","5px"]},children:e.children})})},c=function(e){var n=l.useContext(o.I);return(0,r.jsx)("div",{className:"lever",onClick:function(){switch(n.appMode){case"dark":return n.changeToLightMode;case"light":return n.changeToDarkMode;default:return}}(),children:e.children})};function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,l=[],o=!0,s=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);o=!0);}catch(a){s=!0,i=a}finally{try{o||null==t.return||t.return()}finally{if(s)throw i}}return l}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return u(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=function(){var e,n,t=l.useContext(o.I),i=d(null===(e=t.basicData)||void 0===e?void 0:e.name,4),s=i[0],u=i[1],h=i[2],f=i[3];return(0,r.jsxs)("section",{className:"bigSwitch",children:[(0,r.jsx)(c,{children:(0,r.jsx)("div",{id:"profile-image",children:"img"})}),(0,r.jsxs)(a,{children:[(0,r.jsxs)("h4",{children:[s," ",u]}),(0,r.jsxs)("h4",{children:[h," ",f]}),(0,r.jsx)("p",{children:null===(n=t.basicData)||void 0===n?void 0:n.profession})]})]})},f=t(2875),v=t(381),x=t.n(v);function m(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function j(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,l=[],o=!0,s=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(l.push(r.value),!n||l.length!==n);o=!0);}catch(a){s=!0,i=a}finally{try{o||null==t.return||t.return()}finally{if(s)throw i}}return l}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return m(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return m(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function(e){e.min;var n=e.max,t=e.value,i=(e.tag,e.logo,e.size,e.update,e.position),l=Math.floor((null!==t&&void 0!==t?t:0)/(null!==n&&void 0!==n?n:1)*100);return(0,r.jsx)("div",{className:"bar ".concat(null!==i&&void 0!==i?i:"left"),style:{width:"".concat(l,"%")}})},g=function(e){return(0,r.jsx)("div",{className:"box",children:e.children})},y=function(e){var n;return(0,r.jsx)("div",{className:"container ".concat(null!==(n=e.position)&&void 0!==n?n:"left"),children:e.children})},b=function(e){var n,t,i=function(e){var n=j(l.useState(e),2),t=n[0];return n[1],function(e){if("Skill"===(null===e||void 0===e?void 0:e.constructor.name)){var n=e;return(0,r.jsxs)("article",{className:"commentDialog",children:[(0,r.jsx)("h6",{children:"last update"}),(0,r.jsx)("p",{children:x()(n.update).startOf("day").fromNow()}),(0,r.jsx)("p",{children:n.comment})]})}}(t)}(e.element);return(0,r.jsx)("li",{className:"meter",children:(0,r.jsxs)(y,{position:e.position,children:[(0,r.jsx)("img",{src:null===(n=e.element)||void 0===n?void 0:n.logo,alt:""})," ",null===(t=e.element)||void 0===t?void 0:t.tech,(0,r.jsx)(g,{children:function(n){switch(null===n||void 0===n?void 0:n.constructor.name){case"Skill":var t=n;return(0,r.jsx)(p,{min:1,max:f.T7.expert,value:null===t||void 0===t?void 0:t.level,tag:null===t||void 0===t?void 0:t.tech,logo:t.logo,update:t.update,position:e.position});case"Interest":var i=n;return(0,r.jsx)(p,{min:1,max:f.Fh.extreme,value:null===i||void 0===i?void 0:i.interest,tag:null===i||void 0===i?void 0:i.tech,logo:i.logo,position:e.position});default:return}}(e.element)}),i]})})},w=function(e){var n;return(0,r.jsxs)("article",{children:[e.children,(0,r.jsx)("ul",{children:null===(n=e.techList)||void 0===n?void 0:n.sort((function(e,n){if("Skill"===e.constructor.name){var t=[e,n],r=t[1];return t[0].level>r.level?-1:1}var i=[e,n],l=i[1];return i[0].interest-l.interest?-1:1})).map((function(n,t){return void 0===e.filter||n.types===e.filter?(0,r.jsx)(b,{element:n,position:e.position},t):void 0}))})]})},N=function(){var e=l.useContext(o.I).skills;return(0,r.jsxs)("section",{className:"leftPanel",children:[(0,r.jsx)(w,{filter:"developer",techList:e,position:"left",children:(0,r.jsx)("h6",{children:"Relative skill set"})}),(0,r.jsx)(w,{filter:"front-end",techList:e,position:"left",children:(0,r.jsx)("h6",{children:"Front-end"})}),(0,r.jsx)(w,{filter:"back-end",techList:e,position:"left",children:(0,r.jsx)("h6",{children:"Back-end"})}),(0,r.jsx)(w,{filter:"data-analytics",techList:e,position:"left",children:(0,r.jsx)("h6",{children:"Data Analytics"})})]})},k=function(){return(0,r.jsx)("div",{children:"basicInfo"})},I=function(e){var n=e.item;return(0,r.jsx)("div",{className:"contact",children:(0,r.jsx)("a",{href:null===n||void 0===n?void 0:n.address,target:"_blank",rel:"noreferrer",children:(0,r.jsx)("div",{className:"ico",style:{backgroundImage:"url(".concat(null===n||void 0===n?void 0:n.icon,"?color=white)")}})})})},C=function(){var e=l.useContext(o.I).contact;return(0,r.jsxs)("article",{className:"contactPanel",children:[(0,r.jsx)(I,{item:null===e||void 0===e?void 0:e.email}),(0,r.jsx)(I,{item:null===e||void 0===e?void 0:e.whatsapp}),(0,r.jsx)(I,{item:null===e||void 0===e?void 0:e.linkedIn})]})};var S=function(){var e=l.useContext(o.I).interest,n=function(e,n){if(e){for(var t=Math.ceil(e.length/(null!==n&&void 0!==n?n:1)),r=[],i=0;i<(null!==n&&void 0!==n?n:1);i++){var l=i*t,o=(i+1)*t<=e.length?(i+1)*t:e.length;r.push(e.slice(l,o))}return r}}(null===e||void 0===e?void 0:e.sort((function(e,n){return e.interest-n.interest>0?-1:1})),3);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("header",{children:(0,r.jsx)("h6",{children:"Current Interest"})}),(0,r.jsx)("article",{className:"interestPanel",children:null===n||void 0===n?void 0:n.map((function(e,n){return(0,r.jsx)(w,{techList:e,position:"right"},n)}))})]})},A=function(){return(0,r.jsxs)("section",{className:"rightPanel",children:[(0,r.jsx)(k,{}),(0,r.jsx)(C,{}),(0,r.jsx)(S,{})]})},_=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Carlos's Profile"}),(0,r.jsx)("meta",{name:"description",content:"portfolio with Carlos Campos profile"}),(0,r.jsx)("link",{rel:"icon",href:"../../profileLogo.svg"})]}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{}),(0,r.jsx)(N,{}),(0,r.jsx)(A,{})]})]})}}},function(e){e.O(0,[885,816,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);