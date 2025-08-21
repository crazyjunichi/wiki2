import{B as R,aa as V,m as H,c as h,o as v,_ as C,b1 as F,u as A,p as m,aq as U,h as g,j as _,v as I,a as o,z as L,t as f,b2 as N,g as y,A as O,b3 as S,d as W,ae as M,e as P,f as Y,y as G,F as j,r as X,b4 as q,k as J,l as K}from"./By4EcGbn.js";import{s as D}from"./DjrarwiB.js";import{s as Q}from"./BJGIKS5p.js";import{_ as Z}from"./Q1otjJb-.js";import{_ as ee}from"./_Iuav2eY.js";import"./Y-ploGQX.js";import"./CNgHPnAk.js";var te=function(s){var e=s.dt;return`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: `.concat(e("textarea.color"),`;
    background: `).concat(e("textarea.background"),`;
    padding-block: `).concat(e("textarea.padding.y"),`;
    padding-inline: `).concat(e("textarea.padding.x"),`;
    border: 1px solid `).concat(e("textarea.border.color"),`;
    transition: background `).concat(e("textarea.transition.duration"),", color ").concat(e("textarea.transition.duration"),", border-color ").concat(e("textarea.transition.duration"),", outline-color ").concat(e("textarea.transition.duration"),", box-shadow ").concat(e("textarea.transition.duration"),`;
    appearance: none;
    border-radius: `).concat(e("textarea.border.radius"),`;
    outline-color: transparent;
    box-shadow: `).concat(e("textarea.shadow"),`;
}

.p-textarea:enabled:hover {
    border-color: `).concat(e("textarea.hover.border.color"),`;
}

.p-textarea:enabled:focus {
    border-color: `).concat(e("textarea.focus.border.color"),`;
    box-shadow: `).concat(e("textarea.focus.ring.shadow"),`;
    outline: `).concat(e("textarea.focus.ring.width")," ").concat(e("textarea.focus.ring.style")," ").concat(e("textarea.focus.ring.color"),`;
    outline-offset: `).concat(e("textarea.focus.ring.offset"),`;
}

.p-textarea.p-invalid {
    border-color: `).concat(e("textarea.invalid.border.color"),`;
}

.p-textarea.p-variant-filled {
    background: `).concat(e("textarea.filled.background"),`;
}

.p-textarea.p-variant-filled:enabled:focus {
    background: `).concat(e("textarea.filled.focus.background"),`;
}

.p-textarea:disabled {
    opacity: 1;
    background: `).concat(e("textarea.disabled.background"),`;
    color: `).concat(e("textarea.disabled.color"),`;
}

.p-textarea::placeholder {
    color: `).concat(e("textarea.placeholder.color"),`;
}

.p-textarea.p-invalid::placeholder {
    color: `).concat(e("textarea.invalid.placeholder.color"),`;
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: `).concat(e("textarea.sm.font.size"),`;
    padding-block: `).concat(e("textarea.sm.padding.y"),`;
    padding-inline: `).concat(e("textarea.sm.padding.x"),`;
}

.p-textarea-lg {
    font-size: `).concat(e("textarea.lg.font.size"),`;
    padding-block: `).concat(e("textarea.lg.padding.y"),`;
    padding-inline: `).concat(e("textarea.lg.padding.x"),`;
}
`)},ae={root:function(s){var e=s.instance,d=s.props;return["p-textarea p-component",{"p-filled":e.$filled,"p-textarea-resizable ":d.autoResize,"p-textarea-sm p-inputfield-sm":d.size==="small","p-textarea-lg p-inputfield-lg":d.size==="large","p-invalid":e.$invalid,"p-variant-filled":e.$variant==="filled","p-textarea-fluid":e.$fluid}]}},ne=R.extend({name:"textarea",theme:te,classes:ae}),oe={name:"BaseTextarea",extends:V,props:{autoResize:Boolean},style:ne,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},E={name:"Textarea",extends:oe,inheritAttrs:!1,observer:null,mounted:function(){var s=this;this.autoResize&&(this.observer=new ResizeObserver(function(){s.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(s){this.autoResize&&this.resize(),this.writeValue(s.target.value,s)}},computed:{attrs:function(){return H(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},se=["value","disabled","aria-invalid"];function re(l,s,e,d,u,p){return v(),h("textarea",H({class:l.cx("root"),value:l.d_value,disabled:l.disabled,"aria-invalid":l.invalid||void 0,onInput:s[0]||(s[0]=function(){return p.onInput&&p.onInput.apply(p,arguments)})},p.attrs),null,16,se)}E.render=re;const ie={class:"p-fluid"},le={class:"p-field flex flex-col"},ce={for:"contact"},de={class:"p-field flex flex-col"},ue={for:"feedback"},pe={key:0,class:"p-error"},fe={key:1,class:"p-error"},he={__name:"FeedbackDialog",setup(l){const s=F(),e=A(),d=m(!1),u=m(""),p=m(""),n=m(!1),c=m(!1),t=m(0),r=m(""),b=U(()=>T(new Date,new Date(r.value))&&t.value>=10),$=()=>{z(),d.value=!0},k=()=>{d.value=!1,u.value="",n.value=!1},w=async()=>{if(n.value=!0,!(!u.value||b.value)){c.value=!0;try{const a=new FormData;if(a.append("_subject","网站反馈"),a.append("feedback",u.value),a.append("contact",p.value),(await fetch("https://formsubmit.co/ajax/crazyjunichi@hotmail.com",{method:"POST",body:a})).ok)s.add({severity:"success",detail:e.t("反馈已提交，感谢您的意见！"),life:3e3}),B();else throw new Error("提交失败")}catch(a){s.add({severity:"success",detail:e.t("提交反馈时出错，请稍后再试"),life:3e3}),console.error("反馈提交错误:",a)}finally{c.value=!1,k()}}},z=()=>{const a=localStorage.getItem("feedbackSubmissions");if(a){const{count:i,date:x}=JSON.parse(a);t.value=i,r.value=x}},B=()=>{const a=new Date,i=r.value?new Date(r.value):null;T(a,i)?t.value++:(t.value=1,r.value=a.toISOString()),localStorage.setItem("feedbackSubmissions",JSON.stringify({count:t.value,date:r.value}))},T=(a,i)=>!a||!i?!1:a.getFullYear()===i.getFullYear()&&a.getMonth()===i.getMonth()&&a.getDate()===i.getDate();return(a,i)=>(v(),h("div",null,[g(_(D),{label:a.$t("提交反馈"),icon:"pi pi-comment",onClick:$},null,8,["label"]),g(_(Q),{visible:d.value,"onUpdate:visible":i[2]||(i[2]=x=>d.value=x),header:a.$t("提交反馈"),modal:!0,style:{width:"500px"}},{footer:I(()=>[g(_(D),{label:a.$t("取消"),icon:"pi pi-times",onClick:k,class:"p-button-text"},null,8,["label"]),g(_(D),{label:a.$t("提交"),icon:"pi pi-check",onClick:w,disabled:b.value,loading:c.value},null,8,["label","disabled","loading"])]),default:I(()=>[o("div",ie,[o("div",le,[o("label",ce,f(a.$t("（可选）您的联系方式")),1),L(o("input",{id:"contact","onUpdate:modelValue":i[0]||(i[0]=x=>p.value=x),type:"text",class:"p-inputtext p-component"},null,512),[[N,p.value]])]),o("div",de,[o("label",ue,f(a.$t("您的反馈意见")),1),g(_(E),{id:"feedback",modelValue:u.value,"onUpdate:modelValue":i[1]||(i[1]=x=>u.value=x),autoResize:!0,rows:"5",required:"",class:O({"p-invalid":n.value&&!u.value})},null,8,["modelValue","class"]),n.value&&!u.value?(v(),h("small",pe,f(a.$t("请填写反馈内容")),1)):y("",!0),b.value?(v(),h("small",fe," 您今天已提交 "+f(t.value)+" 次反馈，每天最多提交10次 ",1)):y("",!0)])])]),_:1},8,["visible","header"])]))}},ve=C(he,[["__scopeId","data-v-1de262f2"]]),me=S("/library_hero_zh.jpg"),ge=S("/library_hero_en.jpg"),be=S("/library_hero_ja.jpg"),xe={class:"relative"},_e={key:0,id:"hero",src:me,class:"relative object-cover masked-image"},ye={key:1,id:"hero",src:ge,class:"relative object-cover masked-image"},$e={key:2,id:"hero",src:be,class:"relative object-cover masked-image"},ke={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4"},we={class:"flex flex-col items-center justify-center gap-4 h-80 border border-current/30 border-dashed rounded-lg shadow-md"},ze={class:"text-red-400/90 text-center whitespace-pre-wrap"},De={class:"font-bold text-3xl text-center text-(--ui-primary)"},Se={class:"text-center whitespace-pre-wrap"},Te=["innerHTML"],Ie={class:"relative col-span-1 md:col-span-1 lg:col-span-3 flex flex-col border border-current/30 border-dashed rounded-lg shadow-md p-4"},je={class:"grow flex flex-col gap-2"},He={class:"flex"},Ce={class:"text-lg font-bold grow"},Fe={href:"_PageHistory",class:"text-sm underline"},Ae={class:"flex flex-wrap gap-x-2"},Ee={class:"text-right"},Be=W({__name:"index",setup(l){F();const s=q(),e=m([]);M(async()=>{const n=(await P(async()=>{const{default:t}=await import("./DwE7E_zg.js");return{default:t}},[],import.meta.url)).default,c=n.histories.filter(t=>t.createAt>Date.now()-1e3*60*60*24*30).sort((t,r)=>r.createAt-t.createAt)[0].version;c?e.value=n.histories.filter(t=>t.type!="dialog").filter(t=>!t.key.includes("DEBUG")).filter(t=>!t.key.startsWith("NOT_USED")).filter(t=>!t.key.startsWith("HOTFIX_")).filter(t=>!t.key.startsWith("TEST_")).filter(t=>t.version==c).sort((t,r)=>t.type.localeCompare(r.type)):e.value=n.histories.filter(t=>t.createAt>Date.now()-1e3*60*60*24*7).filter(t=>!t.key.includes("DEBUG")).sort((t,r)=>r.createAt-t.createAt).slice(0,20),e.value=e.value.filter(t=>!t.key.startsWith("Test")&&!t.key.startsWith("HOTFIX_"))});function d(){const n=document.getElementById("hero"),c=document.getElementById("scaling-text"),t=n.naturalWidth,r=n.naturalHeight,b=n.clientWidth,$=n.clientHeight,k=b/t,w=$/r,z=Math.max(k,w)*1.5;c.style.transform=`scale(${z})`}window.addEventListener("load",d),window.addEventListener("resize",d);const u=A();function p(){J({title:`${u.t(K().$gameName)}`,htmlAttrs:{lang:u.locale.value}})}return p(),Y(u.locale,p),(n,c)=>{const t=ve,r=Z,b=ee;return v(),h(j,null,[o("div",null,[o("div",xe,[n.$i18n.locale=="zh"?(v(),h("img",_e)):y("",!0),n.$i18n.locale=="en"?(v(),h("img",ye)):y("",!0),n.$i18n.locale=="ja"?(v(),h("img",$e)):y("",!0)]),o("div",ke,[o("div",we,[o("div",ze,f(n.$t("知道的越多, 乐趣就越少")),1),o("div",De," ⚠️ "+f(n.$t("持续建设中"))+"…… ",1),o("div",Se,[G(f(n.$t("反馈入口")),1),o("span",{class:"text-sky-300",innerHTML:n.$t("反馈链接")},null,8,Te)]),g(t)]),o("div",Ie,[o("div",je,[o("div",He,[o("div",Ce,f(n.$t("最近新增页面"))+"：",1),o("div",null,[o("a",Fe,"("+f(n.$t("查看版本变更"))+")",1)])]),g(r),o("div",Ae,[(v(!0),h(j,null,X(_(e),$=>(v(),h("div",null,[g(b,{obj:$},null,8,["obj"])]))),256))])]),o("div",Ee,f(n.$t("当前页面总数"))+" ： "+f(_(s).public.pageCount),1)]),c[0]||(c[0]=o("div",null,null,-1)),c[1]||(c[1]=o("div",null,null,-1))])]),y("",!0)],64)}}}),Me=C(Be,[["__scopeId","data-v-b8009564"]]);export{Me as default};
