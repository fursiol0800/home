var f=Object.defineProperty;var m=(i,r,e)=>r in i?f(i,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[r]=e;var d=(i,r,e)=>(m(i,typeof r!="symbol"?r+"":r,e),e);import{E as b}from"./ExtMessage-a2aff225.js";import{B as y}from"./main-cff0bb00.js";import{renderElement as _}from"./overlay-358edb0d.js";import"./onMessage-fb148085.js";import"./ReaderConfig-79dece3b.js";const w=`
.actions {
  display: inline-flex;
  align-items: center;
  pointer-events: auto;
  height: 32px;
  border-radius: 18px;
  background: #0a0a0a;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  user-select: none;
  position: relative;
}
#close-btn {
  position: absolute;
  left: calc(100% + 8px);
  width: 24px;
  height: 24px;
  color: #777777;
  opacity: 0.75;
  cursor: pointer;
}
button, a {
  appearance: none;
  border: none;
  outline: none;
  background: transparent;
  height: 100%;
  border-radius: 18px;
  padding-left: 20px;
  padding-right: 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-family: Helvetica, sans-serif;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  text-decoration: none;
}
button:hover, a:hover {
  text-decoration: none;
}
a.primary, button.primary {
  background: #B85C38;
  padding: 0 14px;
}
button svg {
  margin-left: -4px;
  width: 20px;
  height: 20px;
}
a svg {
  margin-left: -8px;
  width: 16px;
  height: 16px;
  opacity: 0.9;
}`;class $ extends y{constructor({site:e,rawTitleData:t,userPageData:n,onAddEntry:l}){super("title",t,n,l);d(this,"site");d(this,"_container");d(this,"_renderInterval");this.site=e,this._build()}dispose(){var e,t;this._clearRenderInterval(),(t=(e=this._container)==null?void 0:e.parentElement)==null||t.removeChild(this._container),this._container=void 0}updateUserPageData(e){super.updateUserPageData(e),this._build()}_build(){var e;this.dispose(),(e=this.userPageData)!=null&&e.progressText&&(this._container=_({child:this._buildEntryActions(this.userPageData),clickThrough:!0,style:w,rootStyle:{position:"absolute",bottom:"24px",display:"flex",justifyContent:"center",left:"0",right:"0"}}),this._ensureContainerRendered())}_ensureContainerRendered(){let e=0;this._renderInterval=setInterval(()=>{if(++e===30||!this._container){this._clearRenderInterval();return}this._container.isConnected||(this._clearRenderInterval(),this._build())},100)}_clearRenderInterval(){clearInterval(this._renderInterval),this._renderInterval=void 0}_buildEntryActions(e){var p;const t="https://my.mangapin.com",{entryId:n,progressText:l,continueText:x,continueUrl:a}=e,h=n?`${t}/entry/${n}`:void 0,c=this._buildActions(`
      ${h?`<a
        href="${h}"
        target="blank"
        rel="noreferrer noopener nofollow"
      >
        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M17.825 8.575q-.2 0-.375-.062t-.325-.213L15.7 6.875q-.3-.3-.3-.712t.3-.688q.275-.3.7-.3t.7.275l.725.725l2.825-2.85q.3-.3.7-.3t.725.3q.275.3.275.725t-.275.7l-3.55 3.55q-.15.15-.325.213t-.375.062ZM6.4 20.4q-.5.2-.95-.087T5 19.475V5q0-.825.588-1.413T7 3h7q-.5.75-.75 1.438T13 6q0 1.8 1.137 3.175T17 10.9q.575.075 1 .075t1-.075v8.575q0 .55-.45.838t-.95.087L12 18l-5.6 2.4Z"
          />
        </svg>
        ${l}
      </a>`:`<a href="javascript:void(0)"${a?"":' class="primary"'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
            </svg>
            ${l}
          </a>`}
      ${a?`<a href="${a}" class="primary">${x}</a>`:""}
  `);return c.children[0].addEventListener("click",s=>{var o;s.preventDefault(),(o=this.userPageData)!=null&&o.entryId?this.openEntry():this.addEntry()}),a&&((p=c.children[1])==null||p.addEventListener("click",s=>{var u,g,v;const o=this.site??((u=this.userPageData)==null?void 0:u.newSite);o&&(s.preventDefault(),b.send({event:"main:openUrl",data:{site:o,url:a,entryId:n,chapter:(g=this.userPageData)==null?void 0:g.continueChapter,page:(v=this.userPageData)==null?void 0:v.page,sameTab:!s.ctrlKey&&!s.metaKey}}))})),c}_buildActions(e){var n;const t=document.createElement("div");return t.innerHTML=`${e}<svg id="close-btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
      />
    </svg>`,t.classList.add("actions"),(n=t.lastElementChild)==null||n.addEventListener("click",()=>this.dispose()),t}}export{$ as TitlePageController};
