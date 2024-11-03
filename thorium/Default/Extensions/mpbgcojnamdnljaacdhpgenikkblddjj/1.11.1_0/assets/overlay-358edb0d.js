let p,l;function x(e){if(p===e)return;l==null||l(),p=e;const t=document.createElement("div");t.classList.add("dialog"),t.innerHTML=`
    <div class="content">${e}</div>
    <div class="actions"><button type="button">OK</button><div>
  `;const n=c({child:t,rootStyle:{display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(0,0,0,0.7)",width:"100%",height:"100%"},style:`
.dialog {
  font-family: Helvetica, sans-serif;
  font-size: 16px;
  line-height: 22px;
  font-weight: 500;
  width: 268px;
  max-width: 100%;
  padding: 20px;
  border-radius: 16px;
  text-align: left;
  border-radius: 12px;
  background: #1c1917;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  user-select: none;
  pointer-events: auto;
  color: #fff;
}
.dialog .actions {
  padding-top: 20px;
  text-align: right;
}
.dialog button {
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
  color: #E87F56;
  background: transparent;
  appearance: none;
  outline: none;
  border: none;
  padding: 4px 8px;
  margin: 0;
  cursor: pointer;
}
`}),i=()=>{var o;(o=n.parentElement)==null||o.removeChild(n),l=void 0,p=void 0};l=i,t.querySelector("button").addEventListener("click",i),t.addEventListener("click",o=>o.stopPropagation()),n.addEventListener("click",i)}function g(){const e=c({innerHTML:'<div class="loading-indicator"></div>',rootStyle:{display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(0,0,0,0.7)",width:"100%",height:"100%"},style:`
.loading-indicator {
  display: inline-block;
  width: 80px;
  height: 80px;
  position: relative;
}
.loading-indicator::before,
.loading-indicator::after {
  display: block;
  position: absolute;
  opacity: 1;
  border-radius: 40px;
  content: '';
  border: 4px solid #b85c38;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.loading-indicator::after {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}`});return()=>{var t;return(t=e.parentElement)==null?void 0:t.removeChild(e)}}function c({style:e,clickThrough:t,rootStyle:n,child:i,innerHTML:o}){const r=document.createElement("div"),d=r.attachShadow({mode:"closed"});r.style.cssText="position: fixed; top: 0px !important; left: 0px !important; right: 0px !important; bottom: 0px !important; z-index: 99999999999999999; pointer-events: auto !important; opacity: 1 !important; display: block !important; visibility: visible !important; width: unset !important; height: unset !important;",t?(r.style.setProperty("pointer-events","none"),r.style.setProperty("cursor","auto")):r.style.setProperty("pointer-events","auto !important");const s=document.createElement("style");s.innerHTML=e.replaceAll(`
`,""),d.appendChild(s);const a=document.createElement("div");return Object.assign(a.style,{direction:"ltr",...n}),i?a.appendChild(i):o&&(a.innerHTML=o),h(a),d.appendChild(a),document.body.appendChild(r),r}function h(e){e.querySelectorAll("script").forEach(n=>{var i;(i=n.parentElement)==null||i.removeChild(n)})}export{c as renderElement,x as showAlertDialog,g as showLoadingOverlay};
