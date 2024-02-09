"use strict";var qe=Object.create;var T=Object.defineProperty,$e=Object.defineProperties,et=Object.getOwnPropertyDescriptor,tt=Object.getOwnPropertyDescriptors,nt=Object.getOwnPropertyNames,k=Object.getOwnPropertySymbols,it=Object.getPrototypeOf,E=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var ne=(t,e,n)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,p=(t,e)=>{for(var n in e||(e={}))E.call(e,n)&&ne(t,n,e[n]);if(k)for(var n of k(e))ie.call(e,n)&&ne(t,n,e[n]);return t},V=(t,e)=>$e(t,tt(e));var C=(t,e)=>{var n={};for(var i in t)E.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&k)for(var i of k(t))e.indexOf(i)<0&&ie.call(t,i)&&(n[i]=t[i]);return n};var b=(t,e)=>()=>(t&&(e=t(t=0)),e);var le=(t,e)=>{for(var n in e)T(t,n,{get:e[n],enumerable:!0})},ae=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of nt(e))!E.call(t,a)&&a!==n&&T(t,a,{get:()=>e[a],enumerable:!(i=et(e,a))||i.enumerable});return t};var R=(t,e,n)=>(n=t!=null?qe(it(t)):{},ae(e||!t||!t.__esModule?T(n,"default",{value:t,enumerable:!0}):n,t)),lt=t=>ae(T({},"__esModule",{value:!0}),t);var W=(t,e,n)=>new Promise((i,a)=>{var o=d=>{try{u(n.next(d))}catch(s){a(s)}},c=d=>{try{u(n.throw(d))}catch(s){a(s)}},u=d=>d.done?i(d.value):Promise.resolve(d.value).then(o,c);u((n=n.apply(t,e)).next())});var oe,re,at,ot,rt,ct,M,ce=b(()=>{"use strict";oe=R(require("classnames")),re=require("react/jsx-runtime"),at={baseline:"vuiFlexContainer--alignItemsBaseline",center:"vuiFlexContainer--alignItemsCenter",end:"vuiFlexContainer--alignItemsEnd",start:"vuiFlexContainer--alignItemsStart",stretch:"vuiFlexContainer--alignItemsStretch"},ot={column:"vuiFlexContainer--directionColumn",columnReverse:"vuiFlexContainer--directionColumnReverse",row:"vuiFlexContainer--directionRow",rowReverse:"vuiFlexContainer--directionRowReverse"},rt={center:"vuiFlexContainer--justifyContentCenter",end:"vuiFlexContainer--justifyContentEnd",start:"vuiFlexContainer--justifyContentStart",spaceAround:"vuiFlexContainer--justifyContentSpaceAround",spaceBetween:"vuiFlexContainer--justifyContentSpaceBetween",spaceEvenly:"vuiFlexContainer--justifyContentSpaceEvenly"},ct={none:"vuiFlexContainer--spacingNone",xxs:"vuiFlexContainer--spacingXxs",xs:"vuiFlexContainer--spacingXs",s:"vuiFlexContainer--spacingS",m:"vuiFlexContainer--spacingM",l:"vuiFlexContainer--spacingL",xl:"vuiFlexContainer--spacingXl",xxl:"vuiFlexContainer--spacingXxl"},M=s=>{var h=s,{children:t,alignItems:e="stretch",direction:n="row",justifyContent:i="start",spacing:a="m",wrap:o,className:c,fullWidth:u}=h,d=C(h,["children","alignItems","direction","justifyContent","spacing","wrap","className","fullWidth"]);let v=(0,oe.default)(c,"vuiFlexContainer",at[e],ot[n],rt[i],ct[a],{"vuiFlexContainer--wrap":o,"vuiFlexContainer--fullWidth":u});return(0,re.jsx)("div",V(p({className:v},d),{children:t}))}});var se,be,st,f,ue=b(()=>{"use strict";se=R(require("classnames")),be=require("react/jsx-runtime"),st={baseline:"vuiFlexItem--alignItemsBaseline",center:"vuiFlexItem--alignItemsCenter",end:"vuiFlexItem--alignItemsEnd",start:"vuiFlexItem--alignItemsStart",stretch:"vuiFlexItem--alignItemsStretch"},f=d=>{var s=d,{children:t,grow:e,shrink:n,basis:i="auto",alignItems:a="stretch",className:o,truncate:c}=s,u=C(s,["children","grow","shrink","basis","alignItems","className","truncate"]);let h=e===!1,v=n===!1,m=(0,se.default)("vuiFlexItem",`vuiFlexItem--${i}`,st[a],{[`vuiFlexItem--flexGrow${e}`]:typeof e=="number","vuiFlexItem--flexGrowNone":h,[`vuiFlexItem--flexShrink${n}`]:typeof n=="number","vuiFlexItem--flexShrinkNone":v,"vuiFlexItem--truncate":c},o);return(0,be.jsx)("div",V(p({className:m},u),{children:t}))}});var z,de,j,xe=b(()=>{"use strict";z=require("react"),de=require("react-dom"),j=({children:t})=>{let e=(0,z.useRef)(null);return(0,z.useEffect)(()=>(e.current=document.createElement("div"),document.body.appendChild(e.current),()=>{var n,i;(i=(n=e.current)==null?void 0:n.parentNode)==null||i.removeChild(e.current)}),[]),e.current?(0,de.createPortal)(t,e.current):null}});var J,P,ge=b(()=>{"use strict";J=require("react/jsx-runtime"),P=({onClick:t,children:e})=>(0,J.jsxs)("div",{className:"vuiScreenBlock",children:[e,(0,J.jsx)("div",{className:"vuiScreenBlock__mask",onClick:t})]})});var Fe,F,bt,K,Ge=b(()=>{"use strict";Fe=R(require("classnames")),F=require("react/jsx-runtime"),bt={xs:"vuiSpinner--xs",s:"vuiSpinner--s",m:"vuiSpinner--m",l:"vuiSpinner--l",xl:"vuiSpinner--xl",xxl:"vuiSpinner--xxl",xxxl:"vuiSpinner--xxxl"},K=({size:t="m"})=>{let e=(0,Fe.default)("vuiSpinner",bt[t]);return(0,F.jsx)("div",{className:e,children:(0,F.jsxs)("svg",{className:"vuiSpinner__animation",version:"1.0",width:"100px",height:"100px",viewBox:"0 0 128 128",xmlSpace:"preserve",children:[(0,F.jsxs)("g",{children:[(0,F.jsx)("path",{fill:"#d7c3fc",d:"M99.359,10.919a60.763,60.763,0,1,0,0,106.162A63.751,63.751,0,1,1,99.359,10.919Z"}),(0,F.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 64 64",to:"360 64 64",dur:"960ms",repeatCount:"indefinite"})]}),(0,F.jsxs)("g",{children:[(0,F.jsx)("path",{fill:"#ab81fa",d:"M28.641,117.081a60.763,60.763,0,1,0,0-106.162A63.751,63.751,0,1,1,28.641,117.081Z"}),(0,F.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 64 64",to:"360 64 64",dur:"1440ms",repeatCount:"indefinite"})]}),(0,F.jsxs)("g",{children:[(0,F.jsx)("path",{fill:"#7027f6",d:"M117.081,99.313a60.763,60.763,0,1,0-106.162,0A63.751,63.751,0,1,1,117.081,99.313Z"}),(0,F.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 64 64",to:"360 64 64",dur:"2880ms",repeatCount:"indefinite"})]})]})})}});var me=b(()=>{"use strict"});var Ie,pe,_,he=b(()=>{"use strict";Ie=R(require("classnames")),pe=require("react/jsx-runtime"),_=u=>{var d=u,{children:t,className:e,id:n,truncate:i,size:a="s",align:o}=d,c=C(d,["children","className","id","truncate","size","align"]);let s=(0,Ie.default)("vuiText",`vuiText--${a}`,{[`vuiText--${o}`]:o,"vuiText--truncate":i},e);return(0,pe.jsx)("div",V(p({className:s,id:n},c),{children:t}))}});var ut,dt,Ce=b(()=>{"use strict";ut=R(require("classnames")),dt=require("react/jsx-runtime")});var Be=b(()=>{"use strict"});var xt,gt,ve=b(()=>{"use strict";xt=R(require("classnames")),gt=require("react")});var Ze=b(()=>{"use strict";ce();ue();xe();ge();Ge();me();he();Ce();Be();ve()});var Re=b(()=>{"use strict"});var Ue=b(()=>{"use strict";Re()});var q=b(()=>{"use strict";Ze();Ue()});var S,Ft,Ve,Gt,mt,It,Qe,Xe,pt,ht,We=b(()=>{"use strict";S=R(require("react")),Ft="https://api.vectara.io/v1/query",Ve=(t,e,n,i=Ft)=>{let[a,o]=(0,S.useState)(!1),c=S.default.useMemo(()=>{let s=new Headers;return s.append("customer-id",t),s.append("x-api-key",n),s.append("content-type","application/json"),s},[t,n]),u=(0,S.useCallback)(s=>JSON.stringify({query:[{query:s,start:0,numResults:20,corpusKey:[{corpusId:e}]}]}),[e]);return{fetchSearchResults:s=>W(void 0,null,function*(){var G,U;o(!0);let h=u(s),m=yield(yield fetch(i,{headers:c,body:h,method:"POST"})).json();o(!1);let Z=(U=It((G=m.responseSet)==null?void 0:G[0]))!=null?U:[];return ht(Z)}),isLoading:a}},Gt=t=>{let e={};return t.forEach(n=>{e[n.name]=n.value}),e},mt=t=>{let e=Gt(t);return{source:e.source,url:e.url,title:e.title,metadata:e}},It=t=>{if(!t)return;let e=[],{response:n,document:i}=t;return n.forEach(a=>{let{documentIndex:o,text:c}=a,{pre:u,post:d,text:s}=pt(c),h=i[Number(o)],{id:v,metadata:m}=h,{source:Z,url:G,title:U,metadata:L}=mt(m);e.push({id:v,snippet:{pre:u,text:s,post:d},source:Z,url:G,title:U,metadata:L})}),e},Qe="%START_SNIPPET%",Xe="%END_SNIPPET%",pt=t=>{let[e,n]=t.indexOf(Qe)!==-1?t.split(Qe):["",t],[i,a]=n.indexOf(Xe)!==-1?n.split(Xe):[n,""];return{pre:e,post:a,text:i}},ht=t=>{let e={},n=[];return t.forEach(i=>{if(i.url){if(e[i.url])return;e[i.url]=!0}n.push(i)}),n}});var B,Se,Oe=b(()=>{"use strict";B=require("react/jsx-runtime"),Se=({searchResult:t,isSelected:e=!1,opensInNewTab:n=!1})=>{let{title:i,url:a,snippet:{text:o}}=t,c=(0,B.jsxs)(B.Fragment,{children:[i&&(0,B.jsx)("p",{className:"vrsSearchResultTitle",children:i}),(0,B.jsx)("p",{className:"vrsSearchResultSnippet",children:o})]});return a?(0,B.jsx)("a",{"data-testid":"vrsResultLink",className:`vrsSearchResult vrsSearchResult-isLink ${e?"isSelected":""}`,href:a,target:n?"_blank":"_self",children:c}):(0,B.jsx)("div",{"data-testid":"vrsResultWrapper",className:"vrsSearchResult",children:c})}});var O,Ne,Q,Te,fe=b(()=>{"use strict";O=require("react");q();Ne=require("react-focus-on"),Q=require("react/jsx-runtime"),Te=(0,O.forwardRef)(({onClose:t,isOpen:e,children:n},i)=>{let a=(0,O.useRef)(null);(0,O.useEffect)(()=>{var c;e?a.current=document.activeElement:((c=a.current)==null||c.focus(),a.current=null)},[e]);let o=()=>{window.setTimeout(()=>{t()},0)};return(0,Q.jsx)(j,{children:(0,Q.jsx)("div",{className:"vrsStyleWrapper",children:e&&(0,Q.jsx)(P,{children:(0,Q.jsx)(Ne.FocusOn,{onEscapeKey:o,onClickOutside:o,returnFocus:!1,autoFocus:e,children:(0,Q.jsx)("div",{className:"vrsSearchModalContainer",children:(0,Q.jsx)("div",{ref:i,className:"vrsSearchModal",children:n})})})})})})})});var w,Ae,Ye=b(()=>{"use strict";w=require("react"),Ae=(t,e=10)=>{let n=(0,w.useCallback)(()=>`vectara-search:${t}:history`,[t]),i=(0,w.useCallback)(()=>{let o=window.localStorage.getItem(n());return JSON.parse(o!=null?o:"[]")},[n]),a=(0,w.useCallback)(o=>{let c=i(),u=[o,...c].slice(0,e);window.localStorage.setItem(n(),JSON.stringify(u))},[n]);return{getPreviousSearches:i,addPreviousSearch:a}}});var Ct,ye=b(()=>{"use strict";Ct=`.vuiFlexContainer {
  display: flex;
  align-items: stretch;
}

.vuiFlexContainer--fullWidth {
  width: 100%;
}

.vuiFlexContainer--wrap {
  flex-wrap: wrap;
}

.vuiFlexContainer--alignItemsBaseline {
  align-items: baseline;
}

.vuiFlexContainer--alignItemsCenter {
  align-items: center;
}

.vuiFlexContainer--alignItemsEnd {
  align-items: end;
}

.vuiFlexContainer--alignItemsStart {
  align-items: start;
}

.vuiFlexContainer--alignItemsStretch {
  align-items: stretch;
}

.vuiFlexContainer--directionColumn {
  flex-direction: column;
}

.vuiFlexContainer--directionColumnReverse {
  flex-direction: column-reverse;
}

.vuiFlexContainer--directionRow {
  flex-direction: row;
}

.vuiFlexContainer--directionRowReverse {
  flex-direction: row-reverse;
}

.vuiFlexContainer--justifyContentCenter {
  justify-content: center;
}

.vuiFlexContainer--justifyContentEnd {
  justify-content: end;
}

.vuiFlexContainer--justifyContentStart {
  justify-content: start;
}

.vuiFlexContainer--justifyContentSpaceAround {
  justify-content: space-around;
}

.vuiFlexContainer--justifyContentSpaceBetween {
  justify-content: space-between;
}

.vuiFlexContainer--justifyContentSpaceEvenly {
  justify-content: space-evenly;
}

.vuiFlexContainer--spacingNone {
  margin: 0;
}
.vuiFlexContainer--spacingNone > .vuiFlexItem {
  margin: 0;
}

.vuiFlexContainer--spacingXxs {
  margin: -2px;
}
.vuiFlexContainer--spacingXxs > .vuiFlexItem {
  margin: 2px;
}

.vuiFlexContainer--spacingXs {
  margin: -4px;
}
.vuiFlexContainer--spacingXs > .vuiFlexItem {
  margin: 4px;
}

.vuiFlexContainer--spacingS {
  margin: -6px;
}
.vuiFlexContainer--spacingS > .vuiFlexItem {
  margin: 6px;
}

.vuiFlexContainer--spacingM {
  margin: -8px;
}
.vuiFlexContainer--spacingM > .vuiFlexItem {
  margin: 8px;
}

.vuiFlexContainer--spacingL {
  margin: -12px;
}
.vuiFlexContainer--spacingL > .vuiFlexItem {
  margin: 12px;
}

.vuiFlexContainer--spacingXl {
  margin: -16px;
}
.vuiFlexContainer--spacingXl > .vuiFlexItem {
  margin: 16px;
}

.vuiFlexContainer--spacingXxl {
  margin: -20px;
}
.vuiFlexContainer--spacingXxl > .vuiFlexItem {
  margin: 20px;
}

.vuiFlexItem {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.vuiFlexItem--truncate {
  min-width: 40px;
}

.vuiFlexItem--alignItemsBaseline {
  align-items: baseline;
}

.vuiFlexItem--alignItemsCenter {
  align-items: center;
}

.vuiFlexItem--alignItemsEnd {
  align-items: end;
}

.vuiFlexItem--alignItemsStart {
  align-items: start;
}

.vuiFlexItem--alignItemsStretch {
  align-items: stretch;
}

.vuiFlexItem--flexGrow0 {
  flex-grow: 0;
}

.vuiFlexItem--flexGrow1 {
  flex-grow: 1;
}

.vuiFlexItem--flexGrow2 {
  flex-grow: 2;
}

.vuiFlexItem--flexGrow3 {
  flex-grow: 3;
}

.vuiFlexItem--flexGrow4 {
  flex-grow: 4;
}

.vuiFlexItem--flexGrow5 {
  flex-grow: 5;
}

.vuiFlexItem--flexGrow6 {
  flex-grow: 6;
}

.vuiFlexItem--flexGrow7 {
  flex-grow: 7;
}

.vuiFlexItem--flexGrow8 {
  flex-grow: 8;
}

.vuiFlexItem--flexGrow9 {
  flex-grow: 9;
}

.vuiFlexItem--flexGrow10 {
  flex-grow: 10;
}

.vuiFlexItem--flexGrowNone {
  flex-basis: auto;
  flex-grow: 0;
}

.vuiFlexItem--flexShrink0 {
  flex-shrink: 0;
}

.vuiFlexItem--flexShrink1 {
  flex-shrink: 1;
}

.vuiFlexItem--flexShrink2 {
  flex-shrink: 2;
}

.vuiFlexItem--flexShrink3 {
  flex-shrink: 3;
}

.vuiFlexItem--flexShrink4 {
  flex-shrink: 4;
}

.vuiFlexItem--flexShrink5 {
  flex-shrink: 5;
}

.vuiFlexItem--flexShrink6 {
  flex-shrink: 6;
}

.vuiFlexItem--flexShrink7 {
  flex-shrink: 7;
}

.vuiFlexItem--flexShrink8 {
  flex-shrink: 8;
}

.vuiFlexItem--flexShrink9 {
  flex-shrink: 9;
}

.vuiFlexItem--flexShrink10 {
  flex-shrink: 10;
}

.vuiFlexItem--flexShrinkNone {
  flex-basis: auto;
  flex-shrink: 0;
}

.vuiFlexItem--auto {
  flex-basis: auto;
}

.vuiFlexItem--content {
  flex-basis: content;
}

.vuiFlexItem--fill {
  flex-basis: fill;
}

.vuiFlexItem--maxContent {
  flex-basis: max-content;
}

.vuiFlexItem--minContent {
  flex-basis: min-content;
}

.vuiFlexItem--none {
  flex-basis: 0;
}

.vuiScreenBlock {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.vuiScreenBlock__mask {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.vuiSpinner--xs {
  width: 16px;
  height: 16px;
}

.vuiSpinner--s {
  width: 24px;
  height: 24px;
}

.vuiSpinner--m {
  width: 32px;
  height: 32px;
}

.vuiSpinner--l {
  width: 48px;
  height: 48px;
}

.vuiSpinner--xl {
  width: 64px;
  height: 64px;
}

.vuiSpinner--xxl {
  width: 80px;
  height: 80px;
}

.vuiSpinner--xxxl {
  width: 100px;
  height: 100px;
}

.vuiSpinner__animation {
  width: 100%;
  height: 100%;
}

.vuiTitle {
  color: #2c313a;
  margin-bottom: 0;
}

.vuiTitle--xxs {
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  color: #2c313a;
}

.vuiTitle--xs {
  font-size: 14px;
  line-height: 14px;
  font-weight: 600;
  color: #2c313a;
}

.vuiTitle--s {
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  color: #69707d;
}

.vuiTitle--m {
  font-size: 24px;
  line-height: 24px;
  font-weight: 600;
  color: #2c313a;
}

.vuiTitle--l {
  font-size: 30px;
  line-height: 30px;
  font-weight: 400;
  color: #2c313a;
}

.vuiTitle--xl {
  font-size: 40px;
  line-height: 40px;
  font-weight: 400;
  color: #2c313a;
}

.vuiTitle--xxl {
  font-size: 40px;
  line-height: 40px;
  font-weight: 600;
  color: #2c313a;
}

.vuiTitle--left {
  text-align: left;
}

.vuiTitle--center {
  text-align: center;
}

.vuiTitle--right {
  text-align: right;
}

.vuiText {
  overflow-wrap: break-word;
  word-break: break-word;
}
.vuiText ul {
  list-style: disc;
}
.vuiText ol {
  list-style: auto;
}
.vuiText ul,
.vuiText ol {
  margin-left: 16px;
  margin-bottom: 8px;
}
.vuiText ul:last-child,
.vuiText ol:last-child {
  margin-bottom: 0;
}
.vuiText a {
  color: rgb(38, 76, 214);
}

.vuiText--truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.vuiText--truncate * {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vuiText--xs {
  color: #2c313a;
  font-size: 12px;
  line-height: 1.4;
}
.vuiText--xs p {
  font-size: 12px;
  line-height: 1.4;
  margin-bottom: 8px;
}
.vuiText--xs p:last-child {
  margin-bottom: 0;
}

.vuiText--s {
  color: #2c313a;
  font-size: 14px;
  line-height: 1.4;
}
.vuiText--s p {
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 8px;
}
.vuiText--s p:last-child {
  margin-bottom: 0;
}

.vuiText--m {
  color: #2c313a;
  font-size: 16px;
  line-height: 1.4;
}
.vuiText--m p {
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 8px;
}
.vuiText--m p:last-child {
  margin-bottom: 0;
}

.vuiText--l {
  color: #2c313a;
  font-size: 18px;
  line-height: 1.4;
}
.vuiText--l p {
  font-size: 18px;
  line-height: 1.4;
  margin-bottom: 8px;
}
.vuiText--l p:last-child {
  margin-bottom: 0;
}

.vuiText--left {
  text-align: left;
}

.vuiText--center {
  text-align: center;
}

.vuiText--right {
  text-align: right;
}

.vuiTextColor--accent {
  color: #551edf !important;
}

.vuiTextColor--primary {
  color: rgb(38, 76, 214) !important;
}

.vuiTextColor--success {
  color: #04821f !important;
}

.vuiTextColor--warning {
  color: #965a15 !important;
}

.vuiTextColor--danger {
  color: #c41535 !important;
}

.vuiTextColor--subdued {
  color: #69707d !important;
}

.vuiTextColor--neutral {
  color: #2c313a !important;
}

.vrsSearchModalContainer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  animation: modalIn 0.2s cubic-bezier(0, 1, 1, 1);
  pointer-events: none;
}
.vrsSearchModalContainer .vrsSearchModal {
  margin-top: 6vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 720px;
  max-height: 88vh;
  z-index: 12;
  pointer-events: all;
  background-color: #ffffff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 8px;
  overflow: hidden;
}
.vrsSearchModalContainer .vrsSearchModalResults {
  border-top: 1px solid #cbcdde;
  overflow-y: auto;
}

@media only screen and (max-width: 740px) {
  .vrsSearchModalContainer {
    overflow-y: auto;
  }
  .vrsSearchModalContainer .vrsSearchModal {
    margin-top: 0 !important;
    max-width: 100vw !important;
    max-height: none !important;
    border-radius: 0 !important;
    overflow: initial !important;
  }
  .vrsSearchModalContainer .vrsSearchModalResults {
    overflow-y: none !important;
  }
}
/**
 * A one-off reset for the button elements.
 */
button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  color: inherit;
  border-radius: 0;
  font-size: inherit;
}

.vrsStyleWrapper {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

.vrsSearchButton {
  display: flex;
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 0 0 0, rgba(0, 0, 0, 0.16) 0px 1px 4px;
  white-space: nowrap;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  font-weight: 500;
  line-height: 1;
  border: 1px solid #cbcdde;
  color: #2c313a;
  background-color: #ffffff;
  font-size: 16px;
  padding: 8px 1px 8px 12px;
  height: 34px;
  cursor: pointer;
  transition: box-shadow 0.2s, border-color 0.2s;
  overflow: hidden;
}
.vrsSearchButton:hover {
  border-color: rgb(38, 76, 214);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  z-index: 1;
}

.vrsSearchButton__inner {
  flex-grow: 1;
}

.vrsSearchButtonShortcut {
  padding: 8px;
  border-radius: 2px;
  font-size: 14px;
  background-color: rgb(217, 226, 255);
  color: rgb(38, 76, 214);
}

.vrsSearchModalContainer {
  /* HTML5 display-role reset for older browsers */
}
.vrsSearchModalContainer body,
.vrsSearchModalContainer textarea {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}
.vrsSearchModalContainer *,
.vrsSearchModalContainer *:before,
.vrsSearchModalContainer *:after {
  box-sizing: border-box;
}
.vrsSearchModalContainer html,
.vrsSearchModalContainer body,
.vrsSearchModalContainer div,
.vrsSearchModalContainer span,
.vrsSearchModalContainer applet,
.vrsSearchModalContainer object,
.vrsSearchModalContainer iframe,
.vrsSearchModalContainer h1,
.vrsSearchModalContainer h2,
.vrsSearchModalContainer h3,
.vrsSearchModalContainer h4,
.vrsSearchModalContainer h5,
.vrsSearchModalContainer h6,
.vrsSearchModalContainer p,
.vrsSearchModalContainer blockquote,
.vrsSearchModalContainer pre,
.vrsSearchModalContainer a,
.vrsSearchModalContainer abbr,
.vrsSearchModalContainer acronym,
.vrsSearchModalContainer address,
.vrsSearchModalContainer big,
.vrsSearchModalContainer cite,
.vrsSearchModalContainer code,
.vrsSearchModalContainer del,
.vrsSearchModalContainer dfn,
.vrsSearchModalContainer em,
.vrsSearchModalContainer img,
.vrsSearchModalContainer ins,
.vrsSearchModalContainer kbd,
.vrsSearchModalContainer q,
.vrsSearchModalContainer s,
.vrsSearchModalContainer samp,
.vrsSearchModalContainer small,
.vrsSearchModalContainer strike,
.vrsSearchModalContainer strong,
.vrsSearchModalContainer sub,
.vrsSearchModalContainer sup,
.vrsSearchModalContainer tt,
.vrsSearchModalContainer var,
.vrsSearchModalContainer b,
.vrsSearchModalContainer u,
.vrsSearchModalContainer i,
.vrsSearchModalContainer center,
.vrsSearchModalContainer dl,
.vrsSearchModalContainer dt,
.vrsSearchModalContainer dd,
.vrsSearchModalContainer ol,
.vrsSearchModalContainer ul,
.vrsSearchModalContainer li,
.vrsSearchModalContainer fieldset,
.vrsSearchModalContainer form,
.vrsSearchModalContainer label,
.vrsSearchModalContainer legend,
.vrsSearchModalContainer table,
.vrsSearchModalContainer caption,
.vrsSearchModalContainer tbody,
.vrsSearchModalContainer tfoot,
.vrsSearchModalContainer thead,
.vrsSearchModalContainer tr,
.vrsSearchModalContainer th,
.vrsSearchModalContainer td,
.vrsSearchModalContainer article,
.vrsSearchModalContainer aside,
.vrsSearchModalContainer canvas,
.vrsSearchModalContainer details,
.vrsSearchModalContainer embed,
.vrsSearchModalContainer figure,
.vrsSearchModalContainer figcaption,
.vrsSearchModalContainer footer,
.vrsSearchModalContainer header,
.vrsSearchModalContainer hgroup,
.vrsSearchModalContainer menu,
.vrsSearchModalContainer nav,
.vrsSearchModalContainer output,
.vrsSearchModalContainer ruby,
.vrsSearchModalContainer section,
.vrsSearchModalContainer summary,
.vrsSearchModalContainer time,
.vrsSearchModalContainer mark,
.vrsSearchModalContainer audio,
.vrsSearchModalContainer video {
  margin: 0;
  padding: 0;
  border: none;
  vertical-align: baseline;
}
.vrsSearchModalContainer h1,
.vrsSearchModalContainer h2,
.vrsSearchModalContainer h3,
.vrsSearchModalContainer h4,
.vrsSearchModalContainer h5,
.vrsSearchModalContainer h6,
.vrsSearchModalContainer p {
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
}
.vrsSearchModalContainer article,
.vrsSearchModalContainer aside,
.vrsSearchModalContainer details,
.vrsSearchModalContainer figcaption,
.vrsSearchModalContainer figure,
.vrsSearchModalContainer footer,
.vrsSearchModalContainer header,
.vrsSearchModalContainer hgroup,
.vrsSearchModalContainer menu,
.vrsSearchModalContainer nav,
.vrsSearchModalContainer section {
  display: block;
}
.vrsSearchModalContainer a[href],
.vrsSearchModalContainer button,
.vrsSearchModalContainer [role=button] {
  cursor: pointer;
}
.vrsSearchModalContainer button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  color: inherit;
  border-radius: 0;
  font-size: inherit;
}
.vrsSearchModalContainer input {
  margin: 0;
  padding: 0;
}
.vrsSearchModalContainer input:disabled {
  opacity: 1; /* required on iOS */
}
.vrsSearchModalContainer ol,
.vrsSearchModalContainer ul {
  list-style: none;
}
.vrsSearchModalContainer blockquote,
.vrsSearchModalContainer q {
  quotes: none;
}
.vrsSearchModalContainer blockquote:before,
.vrsSearchModalContainer blockquote:after,
.vrsSearchModalContainer q:before,
.vrsSearchModalContainer q:after {
  content: "";
}
.vrsSearchModalContainer table {
  border-collapse: collapse;
  border-spacing: 0;
}
.vrsSearchModalContainer hr {
  margin: 0;
}
.vrsSearchModalContainer fieldset {
  min-inline-size: auto;
}
.vrsSearchModalContainer .vrsSearchForm {
  position: relative;
  display: flex;
  align-items: center;
}
.vrsSearchModalContainer .vrsSearchInput {
  flex-grow: 1;
  padding: 24px;
  background-color: #ffffff;
  border: none;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 0px 0px 0px, rgba(60, 64, 67, 0.15) 0px 0px 0px 0px;
  outline-width: 1px;
  outline-style: solid;
  outline-color: transparent;
  outline-offset: -1px;
  font-size: 18px;
  color: #2c313a;
}
.vrsSearchModalContainer .vrsSubmitButtonWrapper {
  padding-right: 16px;
}
.vrsSearchModalContainer .vrsSubmitButton {
  line-height: 0;
  color: #69707d;
  transition: all 0.2s;
}
.vrsSearchModalContainer .vrsSubmitButton:hover {
  color: rgb(38, 76, 214);
}
.vrsSearchModalContainer .vrsSearchResult {
  background-color: #ffffff;
  display: block;
  padding: 12px 24px 12px 24px;
  text-decoration: none;
  border-bottom: 1px solid #e3e4f3;
}
.vrsSearchModalContainer .vrsSearchResult:hover {
  background-color: #f3f7fb;
}
.vrsSearchModalContainer .vrsSearchResult:last-of-type {
  border-bottom: none;
}
.vrsSearchModalContainer .vrsSearchResult-isLink {
  padding-left: 16px;
  border-left: 12px solid #ffffff;
}
.vrsSearchModalContainer .vrsSearchResult-isLink:hover, .vrsSearchModalContainer .vrsSearchResult-isLink.isSelected {
  border-left: 12px solid rgb(38, 76, 214);
}
.vrsSearchModalContainer .vrsSearchResult-isLink:hover .vrsSearchResultTitle, .vrsSearchModalContainer .vrsSearchResult-isLink.isSelected .vrsSearchResultTitle {
  text-decoration: underline;
}
.vrsSearchModalContainer .vrsSearchResult-isLink .vrsSearchResultTitle {
  color: rgb(38, 76, 214);
}
.vrsSearchModalContainer .vrsSearchResultTitle {
  color: #2c313a;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  margin-bottom: 4px;
}
.vrsSearchModalContainer .vrsSearchResultSnippet {
  color: #2c313a;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 0;
}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiL1VzZXJzL2NqL0RvY3VtZW50cy9HaXQvVmVjdGFyYS9yZWFjdC1zZWFyY2gvc3JjIiwic291cmNlcyI6WyJ2dWkvY29tcG9uZW50cy9mbGV4L19mbGV4Q29udGFpbmVyLnNjc3MiLCJ2dWkvY29tcG9uZW50cy9mbGV4L19mbGV4SXRlbS5zY3NzIiwidnVpL2NvbXBvbmVudHMvc2NyZWVuQmxvY2svX2luZGV4LnNjc3MiLCJ2dWkvc3R5bGVVdGlscy9fZGVwdGguc2NzcyIsInZ1aS9jb21wb25lbnRzL3NwaW5uZXIvX2luZGV4LnNjc3MiLCJ2dWkvY29tcG9uZW50cy90eXBvZ3JhcGh5L190aXRsZS5zY3NzIiwidnVpL3N0eWxlVXRpbHMvX2NvbG9ycy5zY3NzIiwidnVpL2NvbXBvbmVudHMvdHlwb2dyYXBoeS9fdGV4dC5zY3NzIiwidnVpL3N0eWxlVXRpbHMvX3NpemVzLnNjc3MiLCJ2dWkvc3R5bGVVdGlscy9fbWl4aW5zLnNjc3MiLCJ2dWkvY29tcG9uZW50cy90eXBvZ3JhcGh5L190ZXh0Q29sb3Iuc2NzcyIsInNlYXJjaE1vZGFsLnNjc3MiLCJfaW5kZXguc2NzcyIsInZ1aS9zdHlsZVV0aWxzL190eXBvZ3JhcGh5LnNjc3MiLCJ2dWkvX3Jlc2V0LnNjc3MiLCJzZWFyY2hJbnB1dC5zY3NzIiwidnVpL3N0eWxlVXRpbHMvX3NoYWRvd3Muc2NzcyIsInNlYXJjaFJlc3VsdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7RUFDQTs7O0FBR0Y7RUFDRTs7O0FBR0Y7RUFDRTs7O0FBYUE7RUFDRSxhQVZTOzs7QUFTWDtFQUNFLGFBVlM7OztBQVNYO0VBQ0UsYUFWUzs7O0FBU1g7RUFDRSxhQVZTOzs7QUFTWDtFQUNFLGFBVlM7OztBQXVCWDtFQUNFLGdCQVRROzs7QUFRVjtFQUNFLGdCQVRROzs7QUFRVjtFQUNFLGdCQVRROzs7QUFRVjtFQUNFLGdCQVRROzs7QUF3QlY7RUFDRSxpQkFYYTs7O0FBVWY7RUFDRSxpQkFYYTs7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Qkw7O0FBRUE7RUFFRTs7QUFFQTtFQUNFOztBQUlKO0VBQ0UsT1g1Qlc7O0FXZ0NmO0VBQ0UsT1hoQmlCO0VXaUJqQjtFQUNBO0VBQ0E7RUFDQSxlVHBDUTs7QVN1Q1Y7RUFDRSxPWHhCaUI7RVd5QmpCO0VBQ0E7RUFDQSIsInNvdXJjZXNDb250ZW50IjpbIi52dWlGbGV4Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbi52dWlGbGV4Q29udGFpbmVyLS1mdWxsV2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnZ1aUZsZXhDb250YWluZXItLXdyYXAge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi8vIGFsaWduSXRlbXNcbiRhbGlnbkl0ZW1zOiAoXG4gIGFsaWduSXRlbXNCYXNlbGluZTogYmFzZWxpbmUsXG4gIGFsaWduSXRlbXNDZW50ZXI6IGNlbnRlcixcbiAgYWxpZ25JdGVtc0VuZDogZW5kLFxuICBhbGlnbkl0ZW1zU3RhcnQ6IHN0YXJ0LFxuICBhbGlnbkl0ZW1zU3RyZXRjaDogc3RyZXRjaFxuKTtcblxuQGVhY2ggJGFsaWduSXRlbXNOYW1lLCAkYWxpZ25JdGVtc1ZhbHVlIGluICRhbGlnbkl0ZW1zIHtcbiAgLnZ1aUZsZXhDb250YWluZXItLSN7JGFsaWduSXRlbXNOYW1lfSB7XG4gICAgYWxpZ24taXRlbXM6ICRhbGlnbkl0ZW1zVmFsdWU7XG4gIH1cbn1cblxuLy8gZGlyZWN0aW9uXG4kZGlyZWN0aW9uOiAoXG4gIGRpcmVjdGlvbkNvbHVtbjogY29sdW1uLFxuICBkaXJlY3Rpb25Db2x1bW5SZXZlcnNlOiBjb2x1bW4tcmV2ZXJzZSxcbiAgZGlyZWN0aW9uUm93OiByb3csXG4gIGRpcmVjdGlvblJvd1JldmVyc2U6IHJvdy1yZXZlcnNlXG4pO1xuXG5AZWFjaCAkZGlyZWN0aW9uTmFtZSwgJGRpcmVjdGlvblZhbHVlIGluICRkaXJlY3Rpb24ge1xuICAudnVpRmxleENvbnRhaW5lci0tI3skZGlyZWN0aW9uTmFtZX0ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uVmFsdWU7XG4gIH1cbn1cblxuLy8ganVzdGlmeUNvbnRlbnRcbiRqdXN0aWZ5Q29udGVudDogKFxuICBqdXN0aWZ5Q29udGVudENlbnRlcjogY2VudGVyLFxuICBqdXN0aWZ5Q29udGVudEVuZDogZW5kLFxuICBqdXN0aWZ5Q29udGVudFN0YXJ0OiBzdGFydCxcbiAganVzdGlmeUNvbnRlbnRTcGFjZUFyb3VuZDogc3BhY2UtYXJvdW5kLFxuICBqdXN0aWZ5Q29udGVudFNwYWNlQmV0d2Vlbjogc3BhY2UtYmV0d2VlbixcbiAganVzdGlmeUNvbnRlbnRTcGFjZUV2ZW5seTogc3BhY2UtZXZlbmx5XG4pO1xuXG5AZWFjaCAkanVzdGlmeUNvbnRlbnROYW1lLCAkanVzdGlmeUNvbnRlbnRWYWx1ZSBpbiAkanVzdGlmeUNvbnRlbnQge1xuICAudnVpRmxleENvbnRhaW5lci0tI3skanVzdGlmeUNvbnRlbnROYW1lfSB7XG4gICAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeUNvbnRlbnRWYWx1ZTtcbiAgfVxufVxuXG4vLyBzcGFjaW5nXG4kc3BhY2luZzogKFxuICBzcGFjaW5nTm9uZTogMCxcbiAgc3BhY2luZ1h4czogJHNpemVYeHMsXG4gIHNwYWNpbmdYczogJHNpemVYcyxcbiAgc3BhY2luZ1M6ICRzaXplUyxcbiAgc3BhY2luZ006ICRzaXplTSxcbiAgc3BhY2luZ0w6ICRzaXplTCxcbiAgc3BhY2luZ1hsOiAkc2l6ZVhsLFxuICBzcGFjaW5nWHhsOiAkc2l6ZVh4bFxuKTtcblxuQGVhY2ggJHNwYWNpbmdOYW1lLCAkc3BhY2luZ1ZhbHVlIGluICRzcGFjaW5nIHtcbiAgLnZ1aUZsZXhDb250YWluZXItLSN7JHNwYWNpbmdOYW1lfSB7XG4gICAgbWFyZ2luOiAtJHNwYWNpbmdWYWx1ZSAqIDAuNTtcblxuICAgICYgPiAudnVpRmxleEl0ZW0ge1xuICAgICAgbWFyZ2luOiAkc3BhY2luZ1ZhbHVlICogMC41O1xuICAgIH1cbiAgfVxufVxuIiwiLnZ1aUZsZXhJdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi52dWlGbGV4SXRlbS0tdHJ1bmNhdGUge1xuICBtaW4td2lkdGg6IDQwcHg7XG59XG5cbi8vIGFsaWduSXRlbXNcbiRhbGlnbkl0ZW1zOiAoXG4gIGFsaWduSXRlbXNCYXNlbGluZTogYmFzZWxpbmUsXG4gIGFsaWduSXRlbXNDZW50ZXI6IGNlbnRlcixcbiAgYWxpZ25JdGVtc0VuZDogZW5kLFxuICBhbGlnbkl0ZW1zU3RhcnQ6IHN0YXJ0LFxuICBhbGlnbkl0ZW1zU3RyZXRjaDogc3RyZXRjaFxuKTtcblxuQGVhY2ggJGFsaWduSXRlbXNOYW1lLCAkYWxpZ25JdGVtc1ZhbHVlIGluICRhbGlnbkl0ZW1zIHtcbiAgLnZ1aUZsZXhJdGVtLS0jeyRhbGlnbkl0ZW1zTmFtZX0ge1xuICAgIGFsaWduLWl0ZW1zOiAkYWxpZ25JdGVtc1ZhbHVlO1xuICB9XG59XG5cbi8vIEdyb3dcbkBmb3IgJGkgZnJvbSAwIHRocm91Z2ggMTAge1xuICAudnVpRmxleEl0ZW0tLWZsZXhHcm93I3skaX0ge1xuICAgIGZsZXgtZ3JvdzogJGk7XG4gIH1cbn1cblxuLnZ1aUZsZXhJdGVtLS1mbGV4R3Jvd05vbmUge1xuICBmbGV4LWJhc2lzOiBhdXRvO1xuICBmbGV4LWdyb3c6IDA7XG59XG5cbi8vIFNocmlua1xuQGZvciAkaSBmcm9tIDAgdGhyb3VnaCAxMCB7XG4gIC52dWlGbGV4SXRlbS0tZmxleFNocmluayN7JGl9IHtcbiAgICBmbGV4LXNocmluazogJGk7XG4gIH1cbn1cblxuLnZ1aUZsZXhJdGVtLS1mbGV4U2hyaW5rTm9uZSB7XG4gIGZsZXgtYmFzaXM6IGF1dG87XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4vLyBCYXNpc1xuJGJhc2lzOiAoXG4gIGF1dG86IGF1dG8sXG4gIGNvbnRlbnQ6IGNvbnRlbnQsXG4gIGZpbGw6IGZpbGwsXG4gIG1heENvbnRlbnQ6IG1heC1jb250ZW50LFxuICBtaW5Db250ZW50OiBtaW4tY29udGVudCxcbiAgbm9uZTogMFxuKTtcblxuQGVhY2ggJGJhc2lzTmFtZSwgJGJhc2lzVmFsdWUgaW4gJGJhc2lzIHtcbiAgLnZ1aUZsZXhJdGVtLS0jeyRiYXNpc05hbWV9IHtcbiAgICBmbGV4LWJhc2lzOiAkYmFzaXNWYWx1ZTtcbiAgfVxufVxuIiwiLnZ1aVNjcmVlbkJsb2NrIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6ICRzY3JlZW5CbG9ja1pJbmRleDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi52dWlTY3JlZW5CbG9ja19fbWFzayB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50aXplKCRjb2xvckZ1bGxTaGFkZSwgMC40KTtcbn1cbiIsIiRhcHBIZWFkZXJaSW5kZXg6IDg7XG4kY2hhdFpJbmRleDogOTtcbiRzY3JlZW5CbG9ja1pJbmRleDogMTA7XG4kZHJhd2VyWkluZGV4OiAxMTtcbiRtb2RhbFpJbmRleDogMTI7XG4vLyBFbmFibGUgcG9wb3ZlcnMgdG8gYmUgcGxhY2VkIGluc2lkZSBvZiBtb2RhbHMgYW5kIGRyYXdlcnMuXG4kcG9wb3ZlclpJbmRleDogMTM7XG4kbm90aWZpY2F0aW9uc1pJbmRleDogMTAwMDtcbiIsIiRzaXplOiAoXG4gIHhzOiAkc2l6ZVhzICogMixcbiAgczogJHNpemVTICogMixcbiAgbTogJHNpemVNICogMixcbiAgbDogJHNpemVMICogMixcbiAgeGw6ICRzaXplWGwgKiAyLFxuICB4eGw6ICRzaXplWHhsICogMixcbiAgeHh4bDogJHNpemVYeGwgKiAyLjVcbik7XG5cbkBlYWNoICRzaXplTmFtZSwgJHNpemVWYWx1ZSBpbiAkc2l6ZSB7XG4gIC52dWlTcGlubmVyLS0jeyRzaXplTmFtZX0ge1xuICAgIHdpZHRoOiAkc2l6ZVZhbHVlO1xuICAgIGhlaWdodDogJHNpemVWYWx1ZTtcbiAgfVxufVxuXG4udnVpU3Bpbm5lcl9fYW5pbWF0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiIsIkB1c2UgXCJzYXNzOm1hcFwiO1xuXG4udnVpVGl0bGUge1xuICBjb2xvcjogJGNvbG9yVGV4dDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuJHNpemU6IChcbiAgeHhzOiAoXG4gICAgc2l6ZTogJGZvbnRTaXplU21hbGwsXG4gICAgbGluZS1oZWlnaHQ6IDEuNCxcbiAgICB3ZWlnaHQ6ICRmb250V2VpZ2h0Tm9ybWFsLFxuICAgIGNvbG9yOiAkY29sb3JUZXh0XG4gICksXG4gIHhzOiAoXG4gICAgc2l6ZTogJGxhYmVsRm9udFNpemUsXG4gICAgbGluZS1oZWlnaHQ6IDEuNCxcbiAgICB3ZWlnaHQ6ICRsYWJlbEZvbnRXZWlnaHQsXG4gICAgY29sb3I6ICRsYWJlbENvbG9yXG4gICksXG4gIHM6IChcbiAgICBzaXplOiAkZm9udFNpemVMYXJnZSxcbiAgICBsaW5lLWhlaWdodDogMS4zLFxuICAgIHdlaWdodDogJGZvbnRXZWlnaHRCb2xkLFxuICAgIGNvbG9yOiAkY29sb3JTdWJkdWVkXG4gICksXG4gIG06IChcbiAgICBzaXplOiAkZm9udFNpemVYTGFyZ2UsXG4gICAgd2VpZ2h0OiAkZm9udFdlaWdodEJvbGQsXG4gICAgbGluZS1oZWlnaHQ6IDEuMixcbiAgICBjb2xvcjogJGNvbG9yVGV4dFxuICApLFxuICBsOiAoXG4gICAgc2l6ZTogJGZvbnRTaXplWHhMYXJnZSxcbiAgICB3ZWlnaHQ6ICRmb250V2VpZ2h0Tm9ybWFsLFxuICAgIGxpbmUtaGVpZ2h0OiAxLjEsXG4gICAgY29sb3I6ICRjb2xvclRleHRcbiAgKSxcbiAgeGw6IChcbiAgICBzaXplOiAkZm9udFNpemVYeHhMYXJnZSxcbiAgICB3ZWlnaHQ6ICRmb250V2VpZ2h0Tm9ybWFsLFxuICAgIGxpbmUtaGVpZ2h0OiAxLFxuICAgIGNvbG9yOiAkY29sb3JUZXh0XG4gICksXG4gIHh4bDogKFxuICAgIHNpemU6ICRmb250U2l6ZVh4eExhcmdlLFxuICAgIGxpbmUtaGVpZ2h0OiAxLFxuICAgIHdlaWdodDogJGZvbnRXZWlnaHRCb2xkLFxuICAgIGNvbG9yOiAkY29sb3JUZXh0XG4gIClcbik7XG5cbkBlYWNoICRzaXplTmFtZSwgJHNpemVWYWx1ZSBpbiAkc2l6ZSB7XG4gIC52dWlUaXRsZS0tI3skc2l6ZU5hbWV9IHtcbiAgICBmb250LXNpemU6ICN7bWFwLmdldCgkc2l6ZVZhbHVlLCBcInNpemVcIil9O1xuICAgIGxpbmUtaGVpZ2h0OiAje21hcC5nZXQoJHNpemVWYWx1ZSwgXCJzaXplXCIpfTtcbiAgICBmb250LXdlaWdodDogI3ttYXAuZ2V0KCRzaXplVmFsdWUsIFwid2VpZ2h0XCIpfTtcbiAgICBjb2xvcjogI3ttYXAuZ2V0KCRzaXplVmFsdWUsIFwiY29sb3JcIil9O1xuICB9XG59XG5cbiRhbGlnbjogbGVmdCwgY2VudGVyLCByaWdodDtcblxuQGVhY2ggJGFsaWduVmFsdWUgaW4gJGFsaWduIHtcbiAgLnZ1aVRpdGxlLS0jeyRhbGlnblZhbHVlfSB7XG4gICAgdGV4dC1hbGlnbjogI3skYWxpZ25WYWx1ZX07XG4gIH1cbn1cbiIsIi8vIFNlbWFudGljIGNvbG9yc1xuJGNvbG9yQWNjZW50OiAjNTUxZWRmICFkZWZhdWx0O1xuJGNvbG9yUHJpbWFyeTogcmdiKDM4LCA3NiwgMjE0KSAhZGVmYXVsdDtcbiRjb2xvclN1Y2Nlc3M6ICMwNDgyMWYgIWRlZmF1bHQ7XG4kY29sb3JXYXJuaW5nOiAjOTY1YTE1ICFkZWZhdWx0O1xuJGNvbG9yRGFuZ2VyOiAjYzQxNTM1ICFkZWZhdWx0O1xuXG4vLyBTZW1hbnRpYyBzaGFkZXNcbiRjb2xvckFjY2VudExpZ2h0U2hhZGU6ICNlYWRmZmYgIWRlZmF1bHQ7XG4kY29sb3JQcmltYXJ5TGlnaHRTaGFkZTogcmdiKDIxNywgMjI2LCAyNTUpICFkZWZhdWx0O1xuJGNvbG9yU3VjY2Vzc0xpZ2h0U2hhZGU6ICNlOWYyZTkgIWRlZmF1bHQ7XG4kY29sb3JXYXJuaW5nTGlnaHRTaGFkZTogI2Y0ZWVlOCAhZGVmYXVsdDtcbiRjb2xvckRhbmdlckxpZ2h0U2hhZGU6ICNmYWU5ZWIgIWRlZmF1bHQ7XG5cbi8vIE5ldXRyYWwgY29sb3JzXG4kY29sb3JFbXB0eVNoYWRlOiAjZmZmZmZmICFkZWZhdWx0O1xuJGNvbG9yTGlnaHRTaGFkZTogI2YzZjdmYiAhZGVmYXVsdDtcbiRjb2xvck1lZGl1bVNoYWRlOiAjY2JjZGRlICFkZWZhdWx0O1xuJGNvbG9yRGFya1NoYWRlOiAjNjk3MDdkICFkZWZhdWx0O1xuJGNvbG9yRGFya2VyU2hhZGU6ICMyYzMxM2EgIWRlZmF1bHQ7XG4kY29sb3JGdWxsU2hhZGU6ICMwMDAgIWRlZmF1bHQ7XG4iLCIudnVpVGV4dCB7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGU6IGRpc2M7XG4gIH1cblxuICBvbCB7XG4gICAgbGlzdC1zdHlsZTogYXV0bztcbiAgfVxuXG4gIHVsLFxuICBvbCB7XG4gICAgbWFyZ2luLWxlZnQ6ICRzaXplTTtcbiAgICBtYXJnaW4tYm90dG9tOiAkc2l6ZVhzO1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICB9XG5cbiAgYSB7XG4gICAgY29sb3I6ICRjb2xvclByaW1hcnk7XG4gIH1cbn1cblxuLnZ1aVRleHQtLXRydW5jYXRlIHtcbiAgQGluY2x1ZGUgdHJ1bmNhdGVUZXh0O1xufVxuXG5AbWl4aW4gZGVmaW5lVGV4dFN0eWxlcygkZm9udFNpemUpIHtcbiAgY29sb3I6ICRjb2xvclRleHQ7XG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xuICBsaW5lLWhlaWdodDogMS40O1xuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogJGZvbnRTaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgbWFyZ2luLWJvdHRvbTogJHNpemVYcztcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxufVxuXG4kc2l6ZTogKFxuICB4czogJGZvbnRTaXplU21hbGwsXG4gIHM6ICRmb250U2l6ZVN0YW5kYXJkLFxuICBtOiAkZm9udFNpemVNZWRpdW0sXG4gIGw6ICRmb250U2l6ZUxhcmdlXG4pO1xuXG5AZWFjaCAkc2l6ZU5hbWUsICRmb250U2l6ZSBpbiAkc2l6ZSB7XG4gIC52dWlUZXh0LS0jeyRzaXplTmFtZX0ge1xuICAgIEBpbmNsdWRlIGRlZmluZVRleHRTdHlsZXMoJGZvbnRTaXplKTtcbiAgfVxufVxuXG4kYWxpZ246IGxlZnQsIGNlbnRlciwgcmlnaHQ7XG5cbkBlYWNoICRhbGlnblZhbHVlIGluICRhbGlnbiB7XG4gIC52dWlUZXh0LS0jeyRhbGlnblZhbHVlfSB7XG4gICAgdGV4dC1hbGlnbjogI3skYWxpZ25WYWx1ZX07XG4gIH1cbn1cbiIsIiRzaXplOiAxNnB4ICFkZWZhdWx0O1xuXG4kc2l6ZVh4eHM6IDJweCAhZGVmYXVsdDsgLy8gJHNpemUgKiAwLjEyNVxuJHNpemVYeHM6IDRweCAhZGVmYXVsdDsgLy8gJHNpemUgKiAwLjI1XG4kc2l6ZVhzOiA4cHggIWRlZmF1bHQ7IC8vICRzaXplICogMC41XG4kc2l6ZVM6IDEycHggIWRlZmF1bHQ7IC8vICRzaXplICogMC43NVxuJHNpemVNOiAkc2l6ZSAhZGVmYXVsdDsgLy8gJHNpemUgKiAxXG4kc2l6ZUw6IDI0cHggIWRlZmF1bHQ7IC8vICRzaXplICogMS41XG4kc2l6ZVhsOiAzMnB4ICFkZWZhdWx0OyAvLyAkc2l6ZSAqIDJcbiRzaXplWHhsOiA0MHB4ICFkZWZhdWx0OyAvLyAkc2l6ZSAqIDIuNVxuIiwiQG1peGluIHRydW5jYXRlVGV4dCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICYgKiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG59XG4iLCIkY29sb3I6IChcbiAgYWNjZW50OiAkY29sb3JBY2NlbnQsXG4gIHByaW1hcnk6ICRjb2xvclByaW1hcnksXG4gIHN1Y2Nlc3M6ICRjb2xvclN1Y2Nlc3MsXG4gIHdhcm5pbmc6ICRjb2xvcldhcm5pbmcsXG4gIGRhbmdlcjogJGNvbG9yRGFuZ2VyLFxuICBzdWJkdWVkOiAkY29sb3JTdWJkdWVkLFxuICBuZXV0cmFsOiAkY29sb3JUZXh0XG4pO1xuXG5AZWFjaCAkY29sb3JOYW1lLCAkY29sb3JWYWx1ZSBpbiAkY29sb3Ige1xuICAudnVpVGV4dENvbG9yLS0jeyRjb2xvck5hbWV9IHtcbiAgICBjb2xvcjogJGNvbG9yVmFsdWUgIWltcG9ydGFudDtcbiAgfVxufVxuIiwiJG1vZGFsUGFkZGluZzogNnZoO1xuXG4udnJzU2VhcmNoTW9kYWxDb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBhbmltYXRpb246IG1vZGFsSW4gMC4ycyBjdWJpYy1iZXppZXIoMCwgMSwgMSwgMSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gIC52cnNTZWFyY2hNb2RhbCB7XG4gICAgbWFyZ2luLXRvcDogJG1vZGFsUGFkZGluZztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JFbXB0eVNoYWRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDcyMHB4O1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAoJG1vZGFsUGFkZGluZyAqIDIpKTtcbiAgICB6LWluZGV4OiAkbW9kYWxaSW5kZXg7XG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JFbXB0eVNoYWRlO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDZweCAxMnB4IC0ycHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggM3B4IDdweCAtM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6ICRzaXplWHM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC52cnNTZWFyY2hNb2RhbFJlc3VsdHMge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0MHB4KSB7XG4gIC52cnNTZWFyY2hNb2RhbENvbnRhaW5lciB7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgIC52cnNTZWFyY2hNb2RhbCB7XG4gICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICBtYXgtd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgICBtYXgtaGVpZ2h0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICBvdmVyZmxvdzogaW5pdGlhbCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC52cnNTZWFyY2hNb2RhbFJlc3VsdHMge1xuICAgICAgb3ZlcmZsb3cteTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4vdnVpL2NvbXBvbmVudHMvaW5kZXhcIjtcbkBpbXBvcnQgXCIuL3NlYXJjaE1vZGFsXCI7XG5cbi8qKlxuICogQSBvbmUtb2ZmIHJlc2V0IGZvciB0aGUgYnV0dG9uIGVsZW1lbnRzLlxuICovXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuLnZyc1N0eWxlV3JhcHBlciB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgXCJSb2JvdG9cIiwgXCJPeHlnZW5cIiwgXCJVYnVudHVcIiwgXCJDYW50YXJlbGxcIiwgXCJGaXJhIFNhbnNcIixcbiAgICBcIkRyb2lkIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4udnJzU2VhcmNoQnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDAgMCAwLCByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggNHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBib3JkZXItcmFkaXVzOiAkc2l6ZVh4cztcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyQ29sb3I7XG4gIGNvbG9yOiAkY29sb3JUZXh0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JFbXB0eVNoYWRlO1xuICBmb250LXNpemU6ICRmb250U2l6ZU1lZGl1bTtcbiAgcGFkZGluZzogJHNpemVYcyAxcHggJHNpemVYcyAkc2l6ZVM7XG4gIGhlaWdodDogMzRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93ICR0cmFuc2l0aW9uU3BlZWQsIGJvcmRlci1jb2xvciAkdHJhbnNpdGlvblNwZWVkO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yUHJpbWFyeTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCA2cHggMTJweCAtMnB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDNweCA3cHggLTNweDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG59XG5cbi52cnNTZWFyY2hCdXR0b25fX2lubmVyIHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4udnJzU2VhcmNoQnV0dG9uU2hvcnRjdXQge1xuICBwYWRkaW5nOiAkc2l6ZVhzO1xuICBib3JkZXItcmFkaXVzOiAkc2l6ZVh4eHM7XG4gIGZvbnQtc2l6ZTogJGZvbnRTaXplU3RhbmRhcmQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvclByaW1hcnlMaWdodFNoYWRlO1xuICBjb2xvcjogJGNvbG9yUHJpbWFyeTtcbn1cblxuLnZyc1NlYXJjaE1vZGFsQ29udGFpbmVyIHtcbiAgQGltcG9ydCBcIi4vdnVpL19yZXNldFwiO1xuICBAaW1wb3J0IFwiLi9zZWFyY2hJbnB1dFwiO1xuICBAaW1wb3J0IFwiLi9zZWFyY2hSZXN1bHRcIjtcbn1cbiIsIkB1c2UgXCJzYXNzOm1hcFwiO1xuXG4kZm9udFNpemVTbWFsbDogMTJweDtcbiRmb250U2l6ZVN0YW5kYXJkOiAxNHB4O1xuJGZvbnRTaXplTWVkaXVtOiAxNnB4O1xuJGZvbnRTaXplTGFyZ2U6IDE4cHg7XG4kZm9udFNpemVYTGFyZ2U6IDI0cHg7XG4kZm9udFNpemVYeExhcmdlOiAzMHB4O1xuJGZvbnRTaXplWHh4TGFyZ2U6IDQwcHg7XG5cbiRjb2xvclRleHQ6ICRjb2xvckRhcmtlclNoYWRlO1xuJGNvbG9yU3ViZHVlZDogJGNvbG9yRGFya1NoYWRlO1xuXG4kZm9udFdlaWdodE5vcm1hbDogNDAwO1xuJGZvbnRXZWlnaHRCb2xkOiA2MDA7XG5cbiRsYWJlbEZvbnRTaXplOiAkZm9udFNpemVTdGFuZGFyZDtcbiRsYWJlbEZvbnRXZWlnaHQ6ICRmb250V2VpZ2h0Qm9sZDtcbiRsYWJlbENvbG9yOiAkY29sb3JUZXh0O1xuIiwiYm9keSxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBcIlJvYm90b1wiLCBcIk94eWdlblwiLCBcIlVidW50dVwiLCBcIkNhbnRhcmVsbFwiLCBcIkZpcmEgU2Fuc1wiLFxuICAgIFwiRHJvaWQgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBFcmljIE1leWVyJ3MgcmVzZXQgKGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvLCB2Mi4wIHwgMjAxMTAxMjYpLiAqL1xuXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmFbaHJlZl0sXG5idXR0b24sXG5bcm9sZT1cImJ1dHRvblwiXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbmlucHV0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5pbnB1dDpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDE7IC8qIHJlcXVpcmVkIG9uIGlPUyAqL1xufVxuXG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbmhyIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5maWVsZHNldCB7XG4gIG1pbi1pbmxpbmUtc2l6ZTogYXV0bztcbn1cbiIsIi52cnNTZWFyY2hGb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udnJzU2VhcmNoSW5wdXQge1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmc6ICRzaXplTDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yRW1wdHlTaGFkZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAkc2hhZG93U21hbGxTdGFydDtcbiAgb3V0bGluZS13aWR0aDogMXB4O1xuICBvdXRsaW5lLXN0eWxlOiBzb2xpZDtcbiAgb3V0bGluZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xuICBmb250LXNpemU6ICRmb250U2l6ZUxhcmdlO1xuICBjb2xvcjogJGNvbG9yVGV4dDtcbn1cblxuLnZyc1N1Ym1pdEJ1dHRvbldyYXBwZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAkc2l6ZU07XG59XG5cbi52cnNTdWJtaXRCdXR0b24ge1xuICBsaW5lLWhlaWdodDogMDsgLy8gVE9ETzogU2hvdWxkIHRoaXMgYmUgYXBwbGllZCB0byBhbGwgYnV0dG9ucz9cbiAgY29sb3I6ICRjb2xvckRhcmtTaGFkZTtcbiAgdHJhbnNpdGlvbjogYWxsICR0cmFuc2l0aW9uU3BlZWQ7XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICRjb2xvclByaW1hcnk7XG4gIH1cbn1cbiIsIiRzaGFkb3dTbWFsbFN0YXJ0OiByZ2JhKDYwLCA2NCwgNjcsIDAuMykgMHB4IDBweCAwcHggMHB4LCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpIDBweCAwcHggMHB4IDBweDtcbiRzaGFkb3dTbWFsbEVuZDogcmdiYSg2MCwgNjQsIDY3LCAwLjMpIDBweCAxcHggMnB4IDBweCwgcmdiYSg2MCwgNjQsIDY3LCAwLjE1KSAwcHggMnB4IDZweCAycHg7XG4iLCIudnJzU2VhcmNoUmVzdWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yRW1wdHlTaGFkZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6ICRzaXplUyAkc2l6ZUwgJHNpemVTICRzaXplTDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlckNvbG9yTGlnaHQ7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yTGlnaHRTaGFkZTtcbiAgfVxuXG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICB9XG59XG5cbi52cnNTZWFyY2hSZXN1bHQtaXNMaW5rIHtcbiAgcGFkZGluZy1sZWZ0OiAkc2l6ZU07XG4gIGJvcmRlci1sZWZ0OiAkc2l6ZVMgc29saWQgJGNvbG9yRW1wdHlTaGFkZTtcblxuICAmOmhvdmVyLFxuICAmLmlzU2VsZWN0ZWQge1xuICAgIGJvcmRlci1sZWZ0OiAkc2l6ZVMgc29saWQgJGNvbG9yUHJpbWFyeTtcblxuICAgIC52cnNTZWFyY2hSZXN1bHRUaXRsZSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gIH1cblxuICAudnJzU2VhcmNoUmVzdWx0VGl0bGUge1xuICAgIGNvbG9yOiAkY29sb3JQcmltYXJ5O1xuICB9XG59XG5cbi52cnNTZWFyY2hSZXN1bHRUaXRsZSB7XG4gIGNvbG9yOiAkY29sb3JEYXJrZXJTaGFkZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogJHNpemVYeHM7XG59XG5cbi52cnNTZWFyY2hSZXN1bHRTbmlwcGV0IHtcbiAgY29sb3I6ICRjb2xvckRhcmtlclNoYWRlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuIl19 */`;document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ct))});var Me,ke,ze=b(()=>{"use strict";Me=require("react/jsx-runtime"),ke=c=>{var u=c,{value:t,onChange:e,placeholder:n,autoFocus:i,onSubmit:a}=u,o=C(u,["value","onChange","placeholder","autoFocus","onSubmit"]);return(0,Me.jsx)("input",p({className:"vrsSearchInput",type:"text",autoComplete:"off",autoCapitalize:"off",spellCheck:"false",autoFocus:i,placeholder:n,value:t,onChange:e},o))}});var De={};le(De,{ReactSearch:()=>vt});var g,we,l,Bt,vt,Je,Le=b(()=>{"use strict";g=require("react"),we=R(require("uuid-by-string"));q();We();Oe();fe();Ye();ye();ze();l=require("react/jsx-runtime"),Bt=(t,e)=>{let n=t.get(e);if(n)return decodeURIComponent(n)},vt=({customerId:t,apiKey:e,corpusId:n,apiUrl:i,historySize:a=10,placeholder:o="Search",isDeeplinkable:c=!1,openResultsInNewTab:u=!1})=>{let d=(0,g.useMemo)(()=>(0,we.default)(`${t}-${n}-${e}`),[t,n,e]),{addPreviousSearch:s}=Ae(d,a),{fetchSearchResults:h,isLoading:v}=Ve(t,n,e,i),[m,Z]=(0,g.useState)(null),[G,U]=(0,g.useState)([]),[L,A]=(0,g.useState)(!1),[N,H]=(0,g.useState)(""),Ee=(0,g.useRef)(null),X=(0,g.useRef)(null),$=(0,g.useRef)(0);(0,g.useEffect)(()=>{let r=new URLSearchParams(window.location.search),x=Bt(r,"search");x&&(A(!0),H(x),Y(x))},[]);let Y=r=>W(void 0,null,function*(){if(r.length===0)return;if(c){let y=new URLSearchParams(window.location.search);y.set("search",r),history.replaceState(null,"","?"+y.toString())}s(r);let x=++$.current,I=yield h(r);x===$.current&&(U(I),Z(null),X.current=null)});(0,g.useEffect)(()=>{let r=setTimeout(()=>{Y(N)},500);return()=>clearTimeout(r)},[N]);let je=r=>{let x=r.target.value;H(x),x.length===0&&ee()},Pe=(0,g.useCallback)(r=>{let x=r.key;x==="Enter"&&(r.preventDefault(),m!==null?window.open(G[m].url,u?"_blank":"_self"):Y(N)),G.length!==0&&(x==="ArrowDown"&&Z(I=>I===null||I===G.length-1?0:I+1),x==="ArrowUp"&&Z(I=>I===null||I===0?G.length-1:I-1))},[G,m]),ee=()=>{U([]),Z(null),X.current=null},Ke=()=>{if(A(!1),H(""),ee(),c){let r=new URLSearchParams(window.location.search);r.delete("search"),history.replaceState(null,"","?"+r.toString())}},te=G.length===0?null:G.map((r,x)=>{let{snippet:{pre:I,text:y,post:_e}}=r;return(0,l.jsx)("div",{ref:m===x?X:void 0,children:(0,l.jsx)(Se,{searchResult:r,isSelected:m===x,opensInNewTab:u})},`${I}${y}${_e}`)});return(0,g.useEffect)(()=>{X.current&&X.current.scrollIntoView({behavior:"instant",block:"nearest"})},[X.current]),(0,g.useEffect)(()=>{let r=x=>{x.key==="k"&&x.ctrlKey&&A(!0)};return document.addEventListener("keyup",r),()=>{document.removeEventListener("keyup",r)}},[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"vrsStyleWrapper",children:[(0,l.jsx)("div",{ref:Ee,children:(0,l.jsx)("button",{className:"vrsSearchButton",onClick:()=>A(!0),children:(0,l.jsxs)(M,{alignItems:"center",spacing:"none",justifyContent:"spaceBetween",className:"vrsSearchButton__inner",children:[(0,l.jsx)(f,{children:(0,l.jsxs)(M,{alignItems:"center",spacing:"xs",children:[(0,l.jsx)(f,{children:(0,l.jsx)(Je,{})}),(0,l.jsx)(f,{children:(0,l.jsx)(_,{children:(0,l.jsx)("div",{children:"Search"})})})]})}),(0,l.jsx)("div",{className:"vrsSearchButtonShortcut",children:"Ctrl + K"})]})})}),(0,l.jsxs)(Te,{isOpen:L,onClose:Ke,children:[(0,l.jsx)("form",{children:(0,l.jsxs)("div",{className:"vrsSearchForm",children:[(0,l.jsx)(ke,{value:N,onChange:je,onKeyDown:Pe,placeholder:o}),v?(0,l.jsx)("div",{className:"vrsSubmitButtonWrapper",children:(0,l.jsx)(K,{size:"xs"})}):(0,l.jsx)("div",{className:"vrsSubmitButtonWrapper",children:(0,l.jsx)("button",{className:"vrsSubmitButton",onClick:r=>{r.preventDefault(),Y(N)},children:(0,l.jsx)(Je,{})})})]})}),te&&(0,l.jsx)("div",{className:"vrsSearchModalResults",children:te})]})]})})},Je=()=>(0,l.jsx)("div",{children:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"currentColor",height:"17px",width:"17px",version:"1.1",viewBox:"-24.52 -24.52 539.44 539.44",xmlSpace:"preserve",stroke:"currentColor",strokeWidth:"12",children:[(0,l.jsx)("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),(0,l.jsx)("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.jsx)("g",{id:"SVGRepo_iconCarrier",children:(0,l.jsxs)("g",{children:[(0,l.jsx)("path",{d:"M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796 s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z"})," "]})})]})})});var Rt={};le(Rt,{ReactSearchNext:()=>Zt});module.exports=lt(Rt);var D=require("react");var He=require("react/jsx-runtime"),Zt=t=>{let[e,n]=(0,D.useState)(null);return(0,D.useEffect)(()=>{W(void 0,null,function*(){let{ReactSearch:a}=yield Promise.resolve().then(()=>(Le(),De));n((0,He.jsx)(a,p({},t)))})},[]),e};
//# sourceMappingURL=ReactSearchNext.js.map
