import{B as x,A as k,U as j,c as p,o as r,r as g,m as b,aG as M,F as V,d as T,y as I,M as at,b as D,x as m,C as z,z as J,s as st,a as c,R as Y,aV as K,aW as it,$ as F,a1 as ot,ag as P,a0 as rt,aY as U,L as G,S as lt,ab as N,e as ct,w as ut,D as R,t as v,j as $,h as H,v as dt,I as q,f as bt}from"./DlIlrAki.js";import{s as pt}from"./D3uIvkKI.js";var ft=function(t){var n=t.dt;return`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: `.concat(n("tabs.tablist.background"),`;
    border-style: solid;
    border-color: `).concat(n("tabs.tablist.border.color"),`;
    border-width: `).concat(n("tabs.tablist.border.width"),`;
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    inset-block-start: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: `).concat(n("tabs.nav.button.background"),`;
    color: `).concat(n("tabs.nav.button.color"),`;
    width: `).concat(n("tabs.nav.button.width"),`;
    transition: color `).concat(n("tabs.transition.duration"),", outline-color ").concat(n("tabs.transition.duration"),", box-shadow ").concat(n("tabs.transition.duration"),`;
    box-shadow: `).concat(n("tabs.nav.button.shadow"),`;
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: `).concat(n("tabs.nav.button.focus.ring.shadow"),`;
    outline: `).concat(n("tabs.nav.button.focus.ring.width")," ").concat(n("tabs.nav.button.focus.ring.style")," ").concat(n("tabs.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(n("tabs.nav.button.focus.ring.offset"),`;
}

.p-tablist-nav-button:hover {
    color: `).concat(n("tabs.nav.button.hover.color"),`;
}

.p-tablist-prev-button {
    inset-inline-start: 0;
}

.p-tablist-next-button {
    inset-inline-end: 0;
}

.p-tablist-prev-button:dir(rtl),
.p-tablist-next-button:dir(rtl) {
    transform: rotate(180deg);
}


.p-tab {
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    background: `).concat(n("tabs.tab.background"),`;
    border-width: `).concat(n("tabs.tab.border.width"),`;
    border-color: `).concat(n("tabs.tab.border.color"),`;
    color: `).concat(n("tabs.tab.color"),`;
    padding: `).concat(n("tabs.tab.padding"),`;
    font-weight: `).concat(n("tabs.tab.font.weight"),`;
    transition: background `).concat(n("tabs.transition.duration"),", border-color ").concat(n("tabs.transition.duration"),", color ").concat(n("tabs.transition.duration"),", outline-color ").concat(n("tabs.transition.duration"),", box-shadow ").concat(n("tabs.transition.duration"),`;
    margin: `).concat(n("tabs.tab.margin"),`;
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: `).concat(n("tabs.tab.focus.ring.shadow"),`;
    outline: `).concat(n("tabs.tab.focus.ring.width")," ").concat(n("tabs.tab.focus.ring.style")," ").concat(n("tabs.tab.focus.ring.color"),`;
    outline-offset: `).concat(n("tabs.tab.focus.ring.offset"),`;
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: `).concat(n("tabs.tab.hover.background"),`;
    border-color: `).concat(n("tabs.tab.hover.border.color"),`;
    color: `).concat(n("tabs.tab.hover.color"),`;
}

.p-tab-active {
    background: `).concat(n("tabs.tab.active.background"),`;
    border-color: `).concat(n("tabs.tab.active.border.color"),`;
    color: `).concat(n("tabs.tab.active.color"),`;
}

.p-tabpanels {
    background: `).concat(n("tabs.tabpanel.background"),`;
    color: `).concat(n("tabs.tabpanel.color"),`;
    padding: `).concat(n("tabs.tabpanel.padding"),`;
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: `).concat(n("tabs.tabpanel.focus.ring.shadow"),`;
    outline: `).concat(n("tabs.tabpanel.focus.ring.width")," ").concat(n("tabs.tabpanel.focus.ring.style")," ").concat(n("tabs.tabpanel.focus.ring.color"),`;
    outline-offset: `).concat(n("tabs.tabpanel.focus.ring.offset"),`;
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    inset-block-end: `).concat(n("tabs.active.bar.bottom"),`;
    height: `).concat(n("tabs.active.bar.height"),`;
    background: `).concat(n("tabs.active.bar.background"),`;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`)},ht={root:function(t){var n=t.props;return["p-tabs p-component",{"p-tabs-scrollable":n.scrollable}]}},vt=x.extend({name:"tabs",theme:ft,classes:ht}),mt={name:"BaseTabs",extends:k,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:vt,provide:function(){return{$pcTabs:this,$parentInstance:this}}},Z={name:"Tabs",extends:mt,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(t){this.id=t||j()},value:function(t){this.d_value=t}},mounted:function(){this.id=this.id||j()},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function gt(e,t,n,s,i,a){return r(),p("div",b({class:e.cx("root")},e.ptmi("root")),[g(e.$slots,"default")],16)}Z.render=gt;var $t={root:"p-tabpanels"},yt=x.extend({name:"tabpanels",classes:$t}),Tt={name:"BaseTabPanels",extends:k,props:{},style:yt,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},Q={name:"TabPanels",extends:Tt,inheritAttrs:!1};function wt(e,t,n,s,i,a){return r(),p("div",b({class:e.cx("root"),role:"presentation"},e.ptmi("root")),[g(e.$slots,"default")],16)}Q.render=wt;var xt={root:function(t){var n=t.instance;return["p-tabpanel",{"p-tabpanel-active":n.active}]}},kt=x.extend({name:"tabpanel",classes:xt}),Bt={name:"BaseTabPanel",extends:k,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:kt,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},X={name:"TabPanel",extends:Bt,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var t;return M((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},attrs:function(){return b(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var t;return{id:this.id,tabindex:(t=this.$pcTabs)===null||t===void 0?void 0:t.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function Ct(e,t,n,s,i,a){var l,f;return a.$pcTabs?(r(),p(V,{key:1},[e.asChild?g(e.$slots,"default",{key:1,class:J(e.cx("root")),active:a.active,a11yAttrs:a.a11yAttrs}):(r(),p(V,{key:0},[!((l=a.$pcTabs)!==null&&l!==void 0&&l.lazy)||a.active?I((r(),D(z(e.as),b({key:0,class:e.cx("root")},a.attrs),{default:m(function(){return[g(e.$slots,"default")]}),_:3},16,["class"])),[[at,(f=a.$pcTabs)!==null&&f!==void 0&&f.lazy?!0:a.active]]):T("",!0)],64))],64)):g(e.$slots,"default",{key:0})}X.render=Ct;var tt={name:"ChevronLeftIcon",extends:st};function _t(e,t,n,s,i,a){return r(),p("svg",b({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[c("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1)]),16)}tt.render=_t;var Lt={root:"p-tablist",content:function(t){var n=t.instance;return["p-tablist-content",{"p-tablist-viewport":n.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},St=x.extend({name:"tablist",classes:Lt}),At={name:"BaseTabList",extends:k,props:{},style:St,provide:function(){return{$pcTabList:this,$parentInstance:this}}},et={name:"TabList",extends:At,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var t=this;this.$nextTick(function(){t.updateInkBar()}),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,n=this.getVisibleButtonWidths(),s=K(t)-n,i=Math.abs(t.scrollLeft),a=s*.8,l=i-a,f=Math.max(l,0);t.scrollLeft=U(t)?-1*f:f},onNextButtonClick:function(){var t=this.$refs.content,n=this.getVisibleButtonWidths(),s=K(t)-n,i=Math.abs(t.scrollLeft),a=s*.8,l=i+a,f=t.scrollWidth-s,y=Math.min(l,f);t.scrollLeft=U(t)?-1*y:y},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,n=t.content,s=t.inkbar,i=t.tabs,a=F(n,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(s.style.height=ot(a)+"px",s.style.top=P(a).top-P(i).top+"px"):(s.style.width=rt(a)+"px",s.style.left=P(a).left-P(i).left+"px")},updateButtonState:function(){var t=this.$refs,n=t.list,s=t.content,i=s.scrollTop,a=s.scrollWidth,l=s.scrollHeight,f=s.offsetWidth,y=s.offsetHeight,B=Math.abs(s.scrollLeft),C=[K(s),it(s)],O=C[0],E=C[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=i!==0,this.isNextButtonEnabled=n.offsetHeight>=y&&parseInt(i)!==l-E):(this.isPrevButtonEnabled=B!==0,this.isNextButtonEnabled=n.offsetWidth>=f&&parseInt(B)!==a-O)},getVisibleButtonWidths:function(){var t=this.$refs,n=t.prevButton,s=t.nextButton,i=0;return this.showNavigators&&(i=((n==null?void 0:n.offsetWidth)||0)+((s==null?void 0:s.offsetWidth)||0)),i}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},components:{ChevronLeftIcon:tt,ChevronRightIcon:pt},directives:{ripple:Y}},Pt=["aria-label","tabindex"],Nt=["aria-orientation"],Vt=["aria-label","tabindex"];function It(e,t,n,s,i,a){var l=G("ripple");return r(),p("div",b({ref:"list",class:e.cx("root")},e.ptmi("root")),[a.showNavigators&&i.isPrevButtonEnabled?I((r(),p("button",b({key:0,ref:"prevButton",class:e.cx("prevButton"),"aria-label":a.prevButtonAriaLabel,tabindex:a.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return a.onPrevButtonClick&&a.onPrevButtonClick.apply(a,arguments)})},e.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(r(),D(z(a.templates.previcon||"ChevronLeftIcon"),b({"aria-hidden":"true"},e.ptm("prevIcon")),null,16))],16,Pt)),[[l]]):T("",!0),c("div",b({ref:"content",class:e.cx("content"),onScroll:t[1]||(t[1]=function(){return a.onScroll&&a.onScroll.apply(a,arguments)})},e.ptm("content")),[c("div",b({ref:"tabs",class:e.cx("tabList"),role:"tablist","aria-orientation":a.$pcTabs.orientation||"horizontal"},e.ptm("tabList")),[g(e.$slots,"default"),c("span",b({ref:"inkbar",class:e.cx("activeBar"),role:"presentation","aria-hidden":"true"},e.ptm("activeBar")),null,16)],16,Nt)],16),a.showNavigators&&i.isNextButtonEnabled?I((r(),p("button",b({key:1,ref:"nextButton",class:e.cx("nextButton"),"aria-label":a.nextButtonAriaLabel,tabindex:a.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return a.onNextButtonClick&&a.onNextButtonClick.apply(a,arguments)})},e.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(r(),D(z(a.templates.nexticon||"ChevronRightIcon"),b({"aria-hidden":"true"},e.ptm("nextIcon")),null,16))],16,Vt)),[[l]]):T("",!0)],16)}et.render=It;var Dt={root:function(t){var n=t.instance,s=t.props;return["p-tab",{"p-tab-active":n.active,"p-disabled":s.disabled}]}},zt=x.extend({name:"tab",classes:Dt}),Ot={name:"BaseTab",extends:k,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:zt,provide:function(){return{$pcTab:this,$parentInstance:this}}},nt={name:"Tab",extends:Ot,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var n=this.findNextTab(t.currentTarget);n?this.changeFocusedTab(t,n):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var n=this.findPrevTab(t.currentTarget);n?this.changeFocusedTab(t,n):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var n=this.findFirstTab();this.changeFocusedTab(t,n),t.preventDefault()},onEndKey:function(t){var n=this.findLastTab();this.changeFocusedTab(t,n),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findNextTab:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=n?t:t.nextElementSibling;return s?N(s,"data-p-disabled")||N(s,"data-pc-section")==="inkbar"?this.findNextTab(s):F(s,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=n?t:t.previousElementSibling;return s?N(s,"data-p-disabled")||N(s,"data-pc-section")==="inkbar"?this.findPrevTab(s):F(s,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.content.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.content.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,n){lt(n),this.scrollInView(n)},scrollInView:function(t){var n;t==null||(n=t.scrollIntoView)===null||n===void 0||n.call(t,{block:"nearest"})}},computed:{active:function(){var t;return M((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},attrs:function(){return b(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}}},directives:{ripple:Y}};function Et(e,t,n,s,i,a){var l=G("ripple");return e.asChild?g(e.$slots,"default",{key:1,class:J(e.cx("root")),active:a.active,a11yAttrs:a.a11yAttrs,onClick:a.onClick}):I((r(),D(z(e.as),b({key:0,class:e.cx("root"),onClick:a.onClick},a.attrs),{default:m(function(){return[g(e.$slots,"default")]}),_:3},16,["class","onClick"])),[[l]])}nt.render=Et;const Kt={class:"p-6"},Rt={class:"text-2xl font-bold mb-4"},Ft={class:"mb-6 flex items-center"},Wt={key:0,class:"ml-4 text-green-600"},jt={key:0},Ut={class:"grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"},Ht={class:"flex items-center relative h-6 w-full rounded overflow-hidden"},qt={class:"relative z-10 px-2 w-full flex justify-between items-center"},Mt={class:"text-right"},Gt=ct({__name:"SaveDataEditor",async setup(e){let t,n;const s=([t,n]=ut(()=>bt(()=>import("./V-mekVib.js"),[],import.meta.url)),t=await t,n(),t).default,i=R(null),a=R(null),l=R([]),f=["基本信息","状态","其他"];function y(){var o;(o=i.value)==null||o.click()}function B(o){const d=o.target;if(d.files&&d.files.length>0){const h=d.files[0],_=new FileReader;_.onload=w=>{var L;try{const S=JSON.parse((L=w.target)==null?void 0:L.result);a.value=S,C()}catch{alert("存档文件格式错误")}},_.readAsText(h),d.value=""}}function C(){l.value=[],a.value.AllStats.forEach(o=>{const d=E(o.StatID);d?l.value.push({saveData:o,stat:d}):console.warn(`未找到链接: ${o.StatID}`)})}function O(){if(!a.value)return;const o=new Blob([JSON.stringify(a.value)],{type:"application/json"}),d=URL.createObjectURL(o),h=document.createElement("a");h.href=d,h.download="save_data.json",document.body.appendChild(h),h.click(),document.body.removeChild(h),URL.revokeObjectURL(d)}function E(o){o=o.replace(/\(.*\)$/,"").trim();const d=s.find(h=>h.id===o);return d||null}return(o,d)=>{const h=nt,_=et,w=X,L=Q,S=Z;return r(),p("div",Kt,[c("h1",Rt,v(o.$t("存档修改")),1),c("div",Ft,[c("input",{ref_key:"fileInput",ref:i,type:"file",accept:"application/json",class:"hidden",onChange:B},null,544),c("button",{class:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",onClick:y},v(o.$t("加载存档")),1),a.value?(r(),p("span",Wt,v(o.$t("存档已加载")),1)):T("",!0),a.value?(r(),p("button",{key:1,class:"ml-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",onClick:O},v(o.$t("保存存档")),1)):T("",!0)]),a.value?(r(),p("div",jt,[$(S,{value:"0"},{default:m(()=>[$(_,null,{default:m(()=>[(r(),p(V,null,H(f,(u,A)=>$(h,{value:A.toString(),key:A},{default:m(()=>[dt(v(u),1)]),_:2},1032,["value"])),64))]),_:1}),$(L,null,{default:m(()=>[$(w,{value:"0"},{default:m(()=>[c("div",null,"存档版本："+v(`${a.value.BuildVersion.x}.${a.value.BuildVersion.y}.${a.value.BuildVersion.z}`),1),c("div",null,"游戏时间："+v(`第${a.value.CurrentYear}年 第${a.value.CurrentDay}天 ${a.value.DaytimeToHour} (${a.value.CurrentSeason})`),1)]),_:1}),$(w,{value:"1"},{default:m(()=>[c("div",Ut,[(r(!0),p(V,null,H(l.value.filter(u=>u.saveData.BaseValue!=u.stat.default),(u,A)=>{var W;return r(),p("div",{key:A,class:"border rounded"},[c("div",Ht,[c("div",{class:"absolute left-0 top-0 h-full bg-blue-400/50",style:q({width:(u.stat.max>3?(u.saveData.BaseValue-u.stat.min)/(u.stat.max-u.stat.min)*100:0)+"%"})},null,4),c("div",{class:"absolute top-0 bottom-0 w-0.5 bg-yellow-500",style:q({left:(u.stat.max>3?(u.stat.default-u.stat.min)/(u.stat.max-u.stat.min)*100:0)+"%"})},null,4),c("span",qt,[c("span",null,v((W=u.stat)==null?void 0:W[o.$i18n.locale]),1),c("span",Mt,v(Math.round(u.saveData.BaseValue*100)/100),1)])])])}),128))])]),_:1}),$(w,{value:"2"},{default:m(()=>d[0]||(d[0]=[c("p",{class:"m-0"}," At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. ",-1)])),_:1})]),_:1})]),_:1})])):T("",!0)])}}});export{Gt as default};
