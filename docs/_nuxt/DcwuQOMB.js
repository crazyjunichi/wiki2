import{B as Q,R as re,l as J,aj as le,G as ie,H as ae,as as se,M as ue,K as de,at as Y,au as pe,am as ce,Z as N,L as fe,S as me,T as _e,h as W,o as f,j as L,k as _,W as be,m as K,$ as ve,i as F,c as b,n as Z,d as X,w as G,a0 as O,av as q,b as e,f as p,aw as ye,t as g,a2 as ge,e as y,V,F as I,r as D,_ as r}from"./qKGRx4vw.js";import{_ as he}from"./ChEKB51N.js";import{_ as Ee}from"./BcFlLSIc.js";import{_ as ke}from"./VRDqkwBS.js";import{_ as xe}from"./DH1ZB34o.js";import{F as Le,a as we,b as Te}from"./BT1A0X90.js";import{f as Re,O as z,h as Se}from"./BQqXDWEM.js";import{_ as Pe}from"./BheWnx7M.js";import"./CposOjV9.js";import"./DVopLcVh.js";import"./CmRT4217.js";import"./DzhpYlgc.js";var Ae=function(t){var l=t.dt;return`
.p-popover {
    margin-block-start: `.concat(l("popover.gutter"),`;
    background: `).concat(l("popover.background"),`;
    color: `).concat(l("popover.color"),`;
    border: 1px solid `).concat(l("popover.border.color"),`;
    border-radius: `).concat(l("popover.border.radius"),`;
    box-shadow: `).concat(l("popover.shadow"),`;
}

.p-popover-content {
    padding: `).concat(l("popover.content.padding"),`;
}

.p-popover-flipped {
    margin-block-start: calc(`).concat(l("popover.gutter"),` * -1);
    margin-block-end: `).concat(l("popover.gutter"),`;
}

.p-popover-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-popover-leave-to {
    opacity: 0;
}

.p-popover-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-popover-leave-active {
    transition: opacity 0.1s linear;
}

.p-popover:after,
.p-popover:before {
    bottom: 100%;
    left: calc(`).concat(l("popover.arrow.offset")," + ").concat(l("popover.arrow.left"),`);
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-popover:after {
    border-width: calc(`).concat(l("popover.gutter"),` - 2px);
    margin-left: calc(-1 * (`).concat(l("popover.gutter"),` - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(l("popover.background"),`;
}

.p-popover:before {
    border-width: `).concat(l("popover.gutter"),`;
    margin-left: calc(-1 * `).concat(l("popover.gutter"),`);
    border-style: solid;
    border-color: transparent;
    border-bottom-color: `).concat(l("popover.border.color"),`;
}

.p-popover-flipped:after,
.p-popover-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-popover.p-popover-flipped:after {
    border-bottom-color: transparent;
    border-top-color: `).concat(l("popover.background"),`;
}

.p-popover.p-popover-flipped:before {
    border-bottom-color: transparent;
    border-top-color: `).concat(l("popover.border.color"),`;
}
`)},Oe={root:"p-popover p-component",content:"p-popover-content"},Ie=Q.extend({name:"popover",theme:Ae,classes:Oe}),De={name:"BasePopover",extends:J,props:{dismissable:{type:Boolean,default:!0},appendTo:{type:[String,Object],default:"body"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},breakpoints:{type:Object,default:null},closeOnEscape:{type:Boolean,default:!0}},style:Ie,provide:function(){return{$pcPopover:this,$parentInstance:this}}},ee={name:"Popover",extends:De,inheritAttrs:!1,emits:["show","hide"],data:function(){return{visible:!1}},watch:{dismissable:{immediate:!0,handler:function(t){t?this.bindOutsideClickListener():this.unbindOutsideClickListener()}}},selfClick:!1,target:null,eventTarget:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,styleElement:null,overlayEventListener:null,documentKeydownListener:null,beforeUnmount:function(){this.dismissable&&this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.destroyStyle(),this.unbindResizeListener(),this.target=null,this.container&&this.autoZIndex&&N.clear(this.container),this.overlayEventListener&&(z.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null),this.container=null},mounted:function(){this.breakpoints&&this.createStyle()},methods:{toggle:function(t,l){this.visible?this.hide():this.show(t,l)},show:function(t,l){this.visible=!0,this.eventTarget=t.currentTarget,this.target=l||t.currentTarget},hide:function(){this.visible=!1},onContentClick:function(){this.selfClick=!0},onEnter:function(t){var l=this;fe(t,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.dismissable&&this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.autoZIndex&&N.set("overlay",t,this.baseZIndex+this.$primevue.config.zIndex.overlay),this.overlayEventListener=function(w){l.container.contains(w.target)&&(l.selfClick=!0)},this.focus(),z.on("overlay-click",this.overlayEventListener),this.$emit("show"),this.closeOnEscape&&this.bindDocumentKeyDownListener()},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.unbindDocumentKeyDownListener(),z.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null,this.$emit("hide")},onAfterLeave:function(t){this.autoZIndex&&N.clear(t)},alignOverlay:function(){de(this.container,this.target,!1);var t=Y(this.container),l=Y(this.target),w=0;t.left<l.left&&(w=l.left-t.left),this.container.style.setProperty(pe("popover.arrow.left").name,"".concat(w,"px")),t.top<l.top&&(this.container.setAttribute("data-p-popover-flipped","true"),!this.isUnstyled&&ce(this.container,"p-popover-flipped"))},onContentKeydown:function(t){t.code==="Escape"&&this.closeOnEscape&&(this.hide(),ue(this.target))},onButtonKeydown:function(t){switch(t.code){case"ArrowDown":case"ArrowUp":case"ArrowLeft":case"ArrowRight":t.preventDefault()}},focus:function(){var t=this.container.querySelector("[autofocus]");t&&t.focus()},onKeyDown:function(t){t.code==="Escape"&&this.closeOnEscape&&(this.visible=!1)},bindDocumentKeyDownListener:function(){this.documentKeydownListener||(this.documentKeydownListener=this.onKeyDown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener))},unbindDocumentKeyDownListener:function(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)},bindOutsideClickListener:function(){var t=this;!this.outsideClickListener&&se()&&(this.outsideClickListener=function(l){t.visible&&!t.selfClick&&!t.isTargetClicked(l)&&(t.visible=!1),t.selfClick=!1},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null,this.selfClick=!1)},bindScrollListener:function(){var t=this;this.scrollHandler||(this.scrollHandler=new ae(this.target,function(){t.visible&&(t.visible=!1)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=function(){t.visible&&!ie()&&(t.visible=!1)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked:function(t){return this.eventTarget&&(this.eventTarget===t.target||this.eventTarget.contains(t.target))},containerRef:function(t){this.container=t},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var t;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",le(this.styleElement,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.head.appendChild(this.styleElement);var l="";for(var w in this.breakpoints)l+=`
                        @media screen and (max-width: `.concat(w,`) {
                            .p-popover[`).concat(this.$attrSelector,`] {
                                width: `).concat(this.breakpoints[w],` !important;
                            }
                        }
                    `);this.styleElement.innerHTML=l}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},onOverlayClick:function(t){z.emit("overlay-click",{originalEvent:t,target:this.target})}},directives:{focustrap:Le,ripple:re},components:{Portal:Re}},je=["aria-modal"];function Ce(o,t,l,w,m,c){var E=me("Portal"),S=_e("focustrap");return f(),W(E,{appendTo:o.appendTo},{default:L(function(){return[_(be,K({name:"p-popover",onEnter:c.onEnter,onLeave:c.onLeave,onAfterLeave:c.onAfterLeave},o.ptm("transition")),{default:L(function(){return[m.visible?ve((f(),b("div",K({key:0,ref:c.containerRef,role:"dialog","aria-modal":m.visible,onClick:t[3]||(t[3]=function(){return c.onOverlayClick&&c.onOverlayClick.apply(c,arguments)}),class:o.cx("root")},o.ptmi("root")),[o.$slots.container?Z(o.$slots,"container",{key:0,closeCallback:c.hide,keydownCallback:function(R){return c.onButtonKeydown(R)}}):(f(),b("div",K({key:1,class:o.cx("content"),onClick:t[0]||(t[0]=function(){return c.onContentClick&&c.onContentClick.apply(c,arguments)}),onMousedown:t[1]||(t[1]=function(){return c.onContentClick&&c.onContentClick.apply(c,arguments)}),onKeydown:t[2]||(t[2]=function(){return c.onContentKeydown&&c.onContentKeydown.apply(c,arguments)})},o.ptm("content")),[Z(o.$slots,"default")],16))],16,je)),[[S]]):F("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])}ee.render=Ce;var Ve=function(t){var l=t.dt;return`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: `.concat(l("floatlabel.font.weight"),`;
    inset-inline-start: `).concat(l("floatlabel.position.x"),`;
    color: `).concat(l("floatlabel.color"),`;
    transition-duration: `).concat(l("floatlabel.transition.duration"),`;
}

.p-floatlabel:has(.p-textarea) label {
    top: `).concat(l("floatlabel.position.y"),`;
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((`).concat(l("form.field.padding.x")," * 2) + ").concat(l("icon.size"),`);
}

.p-floatlabel:has(.p-invalid) label {
    color: `).concat(l("floatlabel.invalid.color"),`;
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: `).concat(l("floatlabel.over.active.top"),`;
    transform: translateY(0);
    font-size: `).concat(l("floatlabel.active.font.size"),`;
    font-weight: `).concat(l("floatlabel.label.active.font.weight"),`;
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: `).concat(l("floatlabel.active.color"),`;
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: `).concat(l("floatlabel.focus.color"),`;
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-block-start: `).concat(l("floatlabel.in.input.padding.top"),`;
    padding-block-end: `).concat(l("floatlabel.in.input.padding.bottom"),`;
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: `).concat(l("floatlabel.in.active.top"),`;
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: `).concat(l("floatlabel.on.border.radius"),`;
    background: `).concat(l("floatlabel.on.active.background"),`;
    padding: `).concat(l("floatlabel.on.active.padding"),`;
}
`)},Fe={root:function(t){t.instance;var l=t.props;return["p-floatlabel",{"p-floatlabel-over":l.variant==="over","p-floatlabel-on":l.variant==="on","p-floatlabel-in":l.variant==="in"}]}},Me=Q.extend({name:"floatlabel",theme:Ve,classes:Fe}),Be={name:"BaseFloatLabel",extends:J,props:{variant:{type:String,default:"over"}},style:Me,provide:function(){return{$pcFloatLabel:this,$parentInstance:this}}},te={name:"FloatLabel",extends:Be,inheritAttrs:!1};function $e(o,t,l,w,m,c){return f(),b("span",K({class:o.cx("root")},o.ptmi("root")),[Z(o.$slots,"default")],16)}te.render=$e;const ze={class:"bg-current/10 w-full xl:w-300 p-4 rounded-lg"},Ke={class:"flex gap-4"},We={class:"flex flex-wrap mt-4 gap-x-2"},He={class:"w-[120px] h-[180px] item-center border-2 border-current/20 border-dotted rounded-lg relative bg-gray-600"},Ne={key:0,class:"w-full h-full"},Ze={class:"w-full h-7 px-2 border-1 bg-amber-100/80 text-lg text-black font-extrabold"},Ge={class:"w-full my-2 h-7/11"},Ue={class:"w-full flex font-mono"},Ye={class:"flex flex-wrap grow gap-2 w-100"},qe={class:"w-[120px] h-[180px] item-center border-2 border-current/20 border-dotted rounded-lg relative bg-lime-900"},Qe={class:"w-full h-7 px-2 border-1 bg-amber-100/80 text-lg text-black font-extrabold"},Je={class:"w-full my-2 h-7/11"},Xe={class:"flex justify-between"},et={class:"text-sm text-white grow font-mono"},tt={class:""},nt=["onClick"],ot={class:"grid grid-cols-1 w-full xl:w-100"},rt={class:"text-center mx-4 h-full justify-center flex flex-col"},lt={class:"text-lg font-bold"},it={class:"text-7xl font-extrabold text-center my-4 text-yellow-200"},at={class:"text-sm"},st={class:"h-full max-h-[360px] overflow-auto bg-current/5 p-2 rounded-lg text-sm"},ut={class:"flex"},dt={class:"w-50"},pt={class:"mx-2 font-mono"},ct={class:"flex flex-wrap gap-2"},ft=["onClick"],mt={class:"font-bold text-nowrap truncate"},_t={class:"flex"},bt={class:"text-sm grow text-current/70 font-mono"},vt={class:""},yt=X({__name:"FlavourSimulator",props:{system:{},flavours:{},spices:{}},async setup(o){let t,l;const w=([t,l]=G(()=>r(()=>import("./Delg9QIQ.js"),[],import.meta.url)),t=await t,l(),t).default,m=([t,l]=G(()=>r(()=>import("./C0oetwKK.js"),[],import.meta.url)),t=await t,l(),t).default,c=O(null),E=O(null);O(null),O(null);const S=O([]),M=O(w.cards.map(u=>({name:u.text,value:u})));O(o.flavours.map(u=>({name:u.text,value:u})));const R=O([]),C=O(0),k=O({totalIntensity:0,totalScore:0,feedback:"",scoreItems:[]});q(S,()=>{k.value=n()},{deep:!0}),q(E,()=>{k.value=n()},{deep:!0}),o.flavours.forEach(u=>{u.sourceCards.forEach(a=>{if(!m.cards.find(h=>h.key==a.link.key))return;let s=R.value.find(h=>h.link.key==a.link.key);s?s.flavours.push({key:u.key,name:u.text,intensity:a.intensity}):R.value.push({name:a.link.text,flavours:[{key:u.key,name:u.text,intensity:a.intensity}],link:a.link,weight:a.weight,value:a})})}),o.spices.forEach(u=>{u.sourceCards.forEach(a=>{u.AddedFlavours.forEach(s=>{let h=R.value.find(T=>T.link.key==a.key);h?h.flavours.push({key:s.Flavour.key,name:s.Flavour.text,intensity:s.Intensity}):R.value.push({name:a.text+"(调料)",flavours:[{key:s.Flavour.key,name:s.Flavour.text,intensity:s.Intensity}],link:a,weight:0,value:a})})})});function n(u){var j;let a=S.value.map(i=>i);if(C.value=a.reduce((i,d)=>i+d.weight,0),E.value){let i=R.value.find(d=>d.link.key==E.value.key);i&&a.push(i)}if(u){let i=R.value.find(d=>d.link.key==u);i&&a.push(i)}let s=[],h=0,T=0,v={totalIntensity:h,totalScore:T,feedback:"",scoreItems:[{text:"",score:0}]};if(v.scoreItems=[],a.forEach(i=>{i.flavours.forEach(d=>{let P=[o.system.Rules.MediumFlavourScore,o.system.Rules.StrongFlavourScore,o.system.Rules.SubtleFlavourScore][d.intensity],A=s.find(B=>B.key===d.key);A?A.intensity+=P:s.push({key:d.key,intensity:P}),h+=P})}),h<o.system.Rules.BlandnessThreshold)v.feedback="味道太淡了";else{s.forEach(i=>{let d=o.flavours.find(P=>P.key==i.key).MaxIntensity;i.intensity>d&&(T-=2,v.scoreItems.push({text:`${o.flavours.find(P=>P.key==i.key).text}(${i.intensity})超标`,score:-2}))});for(let i=0;i<s.length;i++)for(let d=i+1;d<s.length;d++){let P=o.system.FlavourMatrix.find(A=>A.A.key==s[i].key&&A.B.key==s[d].key)||o.system.FlavourMatrix.find(A=>A.B.key==s[i].key&&A.A.key==s[d].key);if(P){let A=[o.system.Rules.GoodSynergyScore,o.system.Rules.NeutralSynergyScore,o.system.Rules.BadSynergyScore][P.Synergy],B=Math.min(s[i].intensity,s[d].intensity)/h,$=0;B<o.system.Rules.SubtleProportionThreshold/100?$=o.system.Rules.SubtleProportionScoreMultiplier:B<o.system.Rules.StrongProportionThreshold/100?$=o.system.Rules.MediumProportionScoreMultiplier:$=o.system.Rules.StrongProportionScoreMultiplier;let U=$*A;T+=U;let ne=o.flavours.find(H=>H.key==s[i].key),oe=o.flavours.find(H=>H.key==s[d].key);v.scoreItems.push({text:`${ne.text}(${Math.round(s[i].intensity/h*100)}%) + ${oe.text}(${Math.round(s[d].intensity/h*100)}%)`,score:U})}}v.totalIntensity=h,v.totalScore=T,v.feedback=((j=o.system.Rules.FlavourScoreFeedback.find(i=>i.MaxFlavourValue>T))==null?void 0:j.Feedback.Text)??"未知评价"}return u||R.value.forEach(i=>{let d=n(i.link.key);i.willAddScore=d.totalScore-T}),v}function x(u){return{Bitter:"苦",Buttery:"油",Earthy:"土",Floral:"花",Fruity:"果",Grassy:"草",Herbal:"药",Nutty:"坚",Pungent:"辛",Salty:"腌",Savoury:"咸",Smokey:"熏",Sour:"酸",Spicy:"辣",Sweet:"甜"}[u]}return(u,a)=>{const s=Se,h=te,T=ge,v=ee,j=xe;return f(),b("div",ze,[a[10]||(a[10]=e("div",{class:"h-6"},null,-1)),e("div",Ke,[_(h,{class:"w-35"},{default:L(()=>[_(s,{modelValue:p(E),"onUpdate:modelValue":a[0]||(a[0]=i=>ye(E)?E.value=i:null),inputId:"over_label",options:p(M),"option-label":"name","option-value":"value",class:"w-full"},null,8,["modelValue","options"]),a[2]||(a[2]=e("label",{for:"over_label"},"盘子",-1))]),_:1})]),e("div",We,[e("div",He,[p(E)?(f(),b("div",Ne,[e("div",Ze,g(p(E).text),1),e("div",Ge,[p(E).icon?(f(),W(T,{key:0,class:"w-full h-full object-contain",height:"128px",src:`/Sprite/${p(E).icon}.png`},null,8,["src"])):F("",!0)]),e("div",Ue,[a[3]||(a[3]=y("容量： ")),e("span",{class:V({"text-red-500":p(C)>p(E).MaxWeightCapacity,"text-green-500":p(C)<=p(E).MaxWeightCapacity})},g(p(C)),3),y(" /"+g(p(E).MaxWeightCapacity),1)])])):F("",!0)]),a[8]||(a[8]=e("div",{class:"h-full w-2 border-r"},null,-1)),e("div",Ye,[(f(!0),b(I,null,D(p(S),i=>(f(),b("div",null,[e("div",qe,[e("div",Qe,g(i.link.text),1),e("div",Je,[i.link.icon?(f(),W(T,{key:0,class:"w-full h-full object-contain",height:"128px",src:`/Sprite/${i.link.icon}.png`},null,8,["src"])):F("",!0)]),e("div",Xe,[e("div",et,"⏲️"+g(i.weight),1),(f(!0),b(I,null,D(i.flavours,d=>(f(),b("div",tt,[e("div",{class:V(["border rounded-full text-xs w-5 h-5 text-center flex items-center justify-center text-flavour",{"border-dashed":d.intensity==2,"border-2":d.intensity==1,border:d.intensity==0}])},g(x(d.key)),3)]))),256))]),e("div",{class:"absolute top-0 right-0 p-1 cursor-pointer",onClick:d=>p(S).splice(p(S).indexOf(i),1)},a[4]||(a[4]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4 text-red-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]),8,nt)])]))),256))]),e("div",ot,[e("div",rt,[e("div",lt,[a[6]||(a[6]=y("评分 ")),e("button",{onClick:a[1]||(a[1]=i=>p(c).toggle(i)),class:"text-xs text-current/50"},a[5]||(a[5]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"2",fill:"none"}),e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 16v-4m0-4h.01"})],-1)]))]),e("div",it,g(p(k).totalScore),1),e("div",at,g(p(k).feedback),1)]),_(v,{ref_key:"scoreDetail",ref:c},{default:L(()=>[e("div",st,[e("div",null," 整体强度："+g(p(k).totalIntensity),1),(f(!0),b(I,null,D(p(k).scoreItems,i=>(f(),b("div",ut,[e("span",dt,g(i.text),1),a[7]||(a[7]=y(" = ")),e("span",pt,g(i.score),1)]))),256))])]),_:1},512)])]),e("div",null,[a[9]||(a[9]=e("div",{class:"flex flex-col-2 mt-4"},[e("div",{class:"text-2xl grow font-bold my-2"},"🍽️ 选择食材")],-1)),e("div",ct,[(f(!0),b(I,null,D(p(R),i=>(f(),b("div",{class:V(["bg-current/2 hover:border-current/50 rounded-lg p-1 w-40 relative cursor-pointer border border-current/10",{"bg-green-500/20":i.willAddScore>0,"bg-red-500/10":i.willAddScore<0}]),onClick:d=>p(S).push({link:i.link,weight:i.weight,flavours:i.flavours})},[e("div",mt,g(i.name),1),i.willAddScore?(f(),b("div",{key:0,class:V(["absolute top-0 right-1 flex text-sm",{"text-yellow-600":i.willAddScore>0,"text-red-500":i.willAddScore<0}])},[_(j,{number:i.willAddScore},null,8,["number"])],2)):F("",!0),e("div",_t,[e("div",bt,"⏲️"+g(i.weight),1),(f(!0),b(I,null,D(i.flavours,d=>(f(),b("div",vt,[e("div",{class:V(["border rounded-full text-xs w-5 h-5 text-center flex items-center justify-center text-flavour opacity-70",{"border-dashed":d.intensity==2,"border-2":d.intensity==1,border:d.intensity==0}])},g(x(d.key)),3)]))),256))])],10,ft))),256))])])])}}}),gt=Object.assign(yt,{__name:"FlavourSimulator"}),ht={class:"list-decimal list-inside"},Et={class:"text-hint"},kt={class:"text-hint"},xt={class:"text-hint"},Lt={class:"flex-col md:flex border border-current/10 rounded-lg p-2"},wt={class:"w-20"},Tt={class:"mr-2"},Rt={class:"text-xs align-top text-flavour"},St={class:"list-inside list-decimal"},Pt={class:"p-4"},At={class:"flex gap-2"},Wt=X({__name:"FlavourSystem",props:{id:{}},async setup(o){let t,l;const w=o,{system:m,flavours:c,spices:E}=([t,l]=G(()=>Pe(Object.assign({"../../generated/CardType0.json":()=>r(()=>import("./ChrVB889.js"),[],import.meta.url),"../../generated/CardType1.json":()=>r(()=>import("./xYScU5az.js"),[],import.meta.url),"../../generated/CardType10.json":()=>r(()=>import("./Cj6rSizh.js"),[],import.meta.url),"../../generated/CardType11.json":()=>r(()=>import("./qKlROYkM.js"),[],import.meta.url),"../../generated/CardType12.json":()=>r(()=>import("./BwDrqd8x.js"),[],import.meta.url),"../../generated/CardType13.json":()=>r(()=>import("./D9mFlf5X.js"),[],import.meta.url),"../../generated/CardType2.json":()=>r(()=>import("./BgEyE18l.js"),[],import.meta.url),"../../generated/CardType3.json":()=>r(()=>import("./CkfM5XOZ.js"),[],import.meta.url),"../../generated/CardType4.json":()=>r(()=>import("./S6oXS6vn.js"),[],import.meta.url),"../../generated/CardType5.json":()=>r(()=>import("./CT_xUhG3.js"),[],import.meta.url),"../../generated/CardType6.json":()=>r(()=>import("./pNXiHtQO.js"),[],import.meta.url),"../../generated/CardType7.json":()=>r(()=>import("./BgdeBJ-R.js"),[],import.meta.url),"../../generated/CardType8.json":()=>r(()=>import("./BDluEkbO.js"),[],import.meta.url),"../../generated/CardType9.json":()=>r(()=>import("./CHV0TyzB.js"),[],import.meta.url),"../../generated/EncounterSystem.json":()=>r(()=>import("./D05QOtmy.js"),[],import.meta.url),"../../generated/EnemyList.json":()=>r(()=>import("./CBZJcKGC.js"),[],import.meta.url),"../../generated/EquipmentTag.json":()=>r(()=>import("./BVNDT6fQ.js"),[],import.meta.url),"../../generated/FlavourSystem.json":()=>r(()=>import("./CLXqob45.js"),[],import.meta.url),"../../generated/FlavourTag.json":()=>r(()=>import("./B6ozbEQ2.js"),[],import.meta.url),"../../generated/Map.json":()=>r(()=>import("./DeSWRUj8.js"),[],import.meta.url),"../../generated/Perk.json":()=>r(()=>import("./klQq7lXY.js"),[],import.meta.url),"../../generated/Quest.json":()=>r(()=>import("./D7S_mBJt.js"),[],import.meta.url),"../../generated/SpiceTag.json":()=>r(()=>import("./C01et4OZ.js"),[],import.meta.url),"../../generated/Trigger.json":()=>r(()=>import("./Cq1c41MN.js"),[],import.meta.url),"../../generated/WeaponMove.json":()=>r(()=>import("./Bv0L7eSj.js"),[],import.meta.url),"../../generated/_Ammo.json":()=>r(()=>import("./-p-8FcMW.js"),[],import.meta.url),"../../generated/_Armor.json":()=>r(()=>import("./BWPKRDcs.js"),[],import.meta.url),"../../generated/_BlueprintIndex.json":()=>r(()=>import("./BFl97VCT.js"),[],import.meta.url),"../../generated/_Container.json":()=>r(()=>import("./CjRrgueu.js"),[],import.meta.url),"../../generated/_Food.json":()=>r(()=>import("./C2eA2LV9.js"),[],import.meta.url),"../../generated/_NPCIndex.json":()=>r(()=>import("./DKCf522d.js"),[],import.meta.url),"../../generated/_Seasons.json":()=>r(()=>import("./DvQvFpHe.js"),[],import.meta.url),"../../generated/_StatIndex.json":()=>r(()=>import("./DHsJd4AA.js"),[],import.meta.url),"../../generated/_TradingValue.json":()=>r(()=>import("./KTgdkKwQ.js"),[],import.meta.url),"../../generated/_Weapon.json":()=>r(()=>import("./MWgIGdph.js"),[],import.meta.url),"../../generated/eTag_Backpack.json":()=>r(()=>import("./BcZ4xu7x.js"),[],import.meta.url),"../../generated/eTag_Belt.json":()=>r(()=>import("./mbt4Kg87.js"),[],import.meta.url),"../../generated/eTag_Bracers.json":()=>r(()=>import("./BtsQNPBE.js"),[],import.meta.url),"../../generated/eTag_Hands.json":()=>r(()=>import("./D_kInYzp.js"),[],import.meta.url),"../../generated/eTag_Head.json":()=>r(()=>import("./DDbNOAKE.js"),[],import.meta.url),"../../generated/eTag_Mask.json":()=>r(()=>import("./D4GzKhE3.js"),[],import.meta.url),"../../generated/eTag_Neck.json":()=>r(()=>import("./BROBKCzT.js"),[],import.meta.url),"../../generated/eTag_OuterTorso.json":()=>r(()=>import("./FncZfJVS.js"),[],import.meta.url),"../../generated/eTag_Pants.json":()=>r(()=>import("./Qwg3I74P.js"),[],import.meta.url),"../../generated/eTag_Pouch.json":()=>r(()=>import("./DN9hbTfW.js"),[],import.meta.url),"../../generated/eTag_Shield.json":()=>r(()=>import("./SAf0wSyi.js"),[],import.meta.url),"../../generated/eTag_Shirt.json":()=>r(()=>import("./ByOWzAzp.js"),[],import.meta.url),"../../generated/eTag_Shoes.json":()=>r(()=>import("./COUShugR.js"),[],import.meta.url),"../../generated/eTag_Shoulder.json":()=>r(()=>import("./CVff7RVK.js"),[],import.meta.url),"../../generated/eTag_Spirit.json":()=>r(()=>import("./C88BwzKW.js"),[],import.meta.url),"../../generated/eTag_WAbrasion.json":()=>r(()=>import("./Di4MtVo7.js"),[],import.meta.url),"../../generated/eTag_WArmFractureL.json":()=>r(()=>import("./7_FSN-Et.js"),[],import.meta.url),"../../generated/eTag_WArmFractureR.json":()=>r(()=>import("./DS2l79mv.js"),[],import.meta.url),"../../generated/eTag_WArmLacerationL.json":()=>r(()=>import("./DMcROVKS.js"),[],import.meta.url),"../../generated/eTag_WArmLacerationR.json":()=>r(()=>import("./Ds4pvjEe.js"),[],import.meta.url),"../../generated/eTag_WArmSprainedL.json":()=>r(()=>import("./Bm6zsBGW.js"),[],import.meta.url),"../../generated/eTag_WArmSprainedR.json":()=>r(()=>import("./DemKHFcz.js"),[],import.meta.url),"../../generated/eTag_WBite.json":()=>r(()=>import("./B_3K3tEw.js"),[],import.meta.url),"../../generated/eTag_WLegFractureL.json":()=>r(()=>import("./BIMBreM7.js"),[],import.meta.url),"../../generated/eTag_WLegFractureR.json":()=>r(()=>import("./CKFJWjF7.js"),[],import.meta.url),"../../generated/eTag_WLegLacerationL.json":()=>r(()=>import("./k6rLO0LP.js"),[],import.meta.url),"../../generated/eTag_WLegLacerationR.json":()=>r(()=>import("./SfKDRrU8.js"),[],import.meta.url),"../../generated/eTag_WLegSprainedL.json":()=>r(()=>import("./BkLTifD4.js"),[],import.meta.url),"../../generated/eTag_WLegSprainedR.json":()=>r(()=>import("./zAtKV5jG.js"),[],import.meta.url),"../../generated/eTag_WMinorWound.json":()=>r(()=>import("./DOeje2WI.js"),[],import.meta.url),"../../generated/eTag_WRibFracture.json":()=>r(()=>import("./BCaEXqMI.js"),[],import.meta.url),"../../generated/eTag_WSpiritual.json":()=>r(()=>import("./DIQGNy6m.js"),[],import.meta.url),"../../generated/encounterPopup.json":()=>r(()=>import("./Ckmv3RJb.js"),[],import.meta.url),"../../generated/searchData.json":()=>r(()=>import("./DARCqvbD.js"),[],import.meta.url)}),`../../generated/${w.id}.json`,4)),t=await t,l(),t).default;function S(){let k=[];return c.forEach(n=>{let x={};x.key=n.key,x.name=n.text,c.forEach(u=>{const a=m.FlavourMatrix.find(s=>s.A.key==n.key&&s.B.key==u.key)||m.FlavourMatrix.find(s=>s.B.key==n.key&&s.A.key==u.key);a?x[u.key]=["😍","😑","🤢"][a.Synergy]||"":x[u.key]="-"}),k.push(x)}),k}function M(){return m.Rules.FlavourScoreFeedback.map((k,n,x)=>{var u;return{score:k.MaxFlavourValue,scoreText:`${((u=x[n-1])==null?void 0:u.MaxFlavourValue)??"-∞"} ~ ${k.MaxFlavourValue}`,feedback:k.Feedback.Text}})}function R(){return[{name:`比重 < ${m.Rules.SubtleProportionThreshold}%`,text:m.Rules.SubtleProportionScoreMultiplier},{name:`${m.Rules.SubtleProportionThreshold}% ≤ 比重 < ${m.Rules.StrongProportionThreshold}%`,text:m.Rules.MediumProportionScoreMultiplier},{name:`比重 ≥ ${m.Rules.StrongProportionThreshold}%`,text:m.Rules.StrongProportionScoreMultiplier}]}function C(){return[{name:"😍",text:m.Rules.GoodSynergyScore},{name:"😑",text:m.Rules.NeutralSynergyScore},{name:"🤢",text:m.Rules.BadSynergyScore}]}return(k,n)=>{const x=he,u=we,a=Te,s=Ee,h=ke,T=gt;return f(),b("div",null,[n[31]||(n[31]=e("h1",null,"风味系统",-1)),n[32]||(n[32]=e("div",null,[e("p",null," 风味系统是游戏中一个非常重要的系统，它能赋予食物不同的味道，进而影响食物的评分，从而影响吃下食物的状态加成。 ")],-1)),e("div",null,[n[6]||(n[6]=e("h2",null,"风味的来源",-1)),e("ul",ht,[e("li",null,[n[0]||(n[0]=e("span",null,"食物本身自带的风味",-1)),n[1]||(n[1]=e("p",null," 初始的风味强度换算值",-1)),e("div",null,[e("span",Et," 弱："+g(p(m).Rules.SubtleFlavourScore),1),e("span",kt," 中："+g(p(m).Rules.MediumFlavourScore),1),e("span",xt," 强："+g(p(m).Rules.StrongFlavourScore),1)])]),n[2]||(n[2]=e("li",null,[e("span",null,"使用调味料附加的风味")],-1))]),e("div",null,[(f(!0),b(I,null,D(p(c),v=>(f(),b("div",null,[e("div",Lt,[e("div",wt,[_(x,{obj:v},null,8,["obj"])]),e("div",null,[e("div",null,[n[3]||(n[3]=e("span",{class:"text-title"},"最大强度：",-1)),y(" "+g(v.MaxIntensity),1)]),e("div",null,[n[4]||(n[4]=e("span",{class:"text-title"},"来源：",-1)),e("span",null,[(f(!0),b(I,null,D(v.sourceCards,j=>(f(),b("span",Tt,[_(x,{obj:j.link},null,8,["obj"]),e("span",Rt,g(["中","强","弱"][j.intensity]),1)]))),256))])])])])]))),256)),n[5]||(n[5]=e("br",null,null,-1))]),n[7]||(n[7]=e("br",null,null,-1))]),e("div",null,[n[8]||(n[8]=e("h2",null,"风味的搭配",-1)),n[9]||(n[9]=e("p",null," 风味的搭配是食物评分的重要因素，不同风味之间的搭配会影响食物的评分。 ",-1)),n[10]||(n[10]=e("p",null," 以下是风味之间的搭配关系： ",-1)),e("div",null,[_(a,{value:S(),stripedRows:"",showGridlines:"",selectionMode:"single",size:"small",class:"w-full md:w-180"},{default:L(()=>[_(u,{key:"key",field:"name",title:"-"}),(f(!0),b(I,null,D(p(c),v=>(f(),W(u,{key:v.key,field:v.key,header:v.text,"header-style":"text-align:center",bodyStyle:"text-align:center",style:{width:"20px"}},null,8,["field","header"]))),128))]),_:1},8,["value"])]),n[11]||(n[11]=e("br",null,null,-1))]),e("div",null,[n[27]||(n[27]=e("h2",null,"风味评分",-1)),n[28]||(n[28]=e("p",null," 风味评分影响吃下食物的幸福度变化，你也可以从游戏中弹出的提示来判断得分情况 ",-1)),e("ul",St,[n[25]||(n[25]=e("li",null," 获取卡牌上所有的“风味/强度”列表（此时会加总同样的风味） ",-1)),n[26]||(n[26]=e("li",null,"将强度值累加至总强度",-1)),e("li",null,[n[13]||(n[13]=y("如果某风味的强度值大于其")),_(s,null,{default:L(()=>n[12]||(n[12]=[y("最大强度")])),_:1}),n[14]||(n[14]=y("，则计")),_(s,null,{default:L(()=>[y(g(p(m).Rules.TooStrongPenalty)+"分",1)]),_:1}),n[15]||(n[15]=y("累加至总得分"))]),e("li",null,[n[16]||(n[16]=y("如果总强度")),_(s,null,{default:L(()=>[y("小于"+g(p(m).Rules.BlandnessThreshold),1)]),_:1}),n[17]||(n[17]=y("，则跳过下面的组合得分"))]),e("li",null,[n[22]||(n[22]=y(" 根据所有风味的两两组合，计算组合得分，并累加至总得分 ")),e("div",Pt,[e("div",null,[n[20]||(n[20]=y("组合得分 = ")),_(s,null,{default:L(()=>n[18]||(n[18]=[y("占比较小的比重得分")])),_:1}),n[21]||(n[21]=y(" x ")),_(s,null,{default:L(()=>n[19]||(n[19]=[y("适配度得分")])),_:1})]),e("div",At,[_(a,{value:R(),class:"w-60",size:"small"},{default:L(()=>[_(u,{field:"name",header:"比重"}),_(u,{field:"text",header:"得分"})]),_:1},8,["value"]),_(a,{value:C(),class:"w-60",size:"small"},{default:L(()=>[_(u,{field:"name",header:"适配度"}),_(u,{field:"text",header:"得分"})]),_:1},8,["value"])])])]),e("li",null,[n[24]||(n[24]=y(" 根据总得分，影响状态 ")),e("div",null,[(f(!0),b(I,null,D(p(m).Rules.ScoreToStatModifiers,v=>(f(),b("div",null,[n[23]||(n[23]=y(" 评分为 ")),_(h,{obj:v.Value,joiner:"时"},{default:L(()=>[_(x,{obj:v.OutputStat},null,8,["obj"])]),_:2},1032,["obj"])]))),256))])])])]),e("div",null,[n[29]||(n[29]=y(" 食物评价： ")),_(a,{value:M(),class:"w-full md:w-120",size:"small"},{default:L(()=>[_(u,{field:"scoreText",header:"评分范围"}),_(u,{field:"feedback",header:"评价"})]),_:1},8,["value"])]),e("div",null,[n[30]||(n[30]=e("h2",null,"风味模拟器",-1)),_(T,{system:p(m),flavours:p(c),spices:p(E)},null,8,["system","flavours","spices"])])])}}});export{Wt as default};
