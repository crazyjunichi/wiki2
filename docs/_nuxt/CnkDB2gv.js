import{B as V,aa as O,m as F,c as p,o as f,_ as H,b1 as A,u as E,p as m,aq as U,h as g,j as _,v as T,a,z as W,t as v,b2 as N,g as y,A as L,b3 as I,d as P,ae as M,e as Q,f as Y,y as D,F as C,r as G,b4 as X,k as q,l as J}from"./BoMYDZYO.js";import{s as S}from"./05eR6uRR.js";import{s as K}from"./CQ-C2MYP.js";import{_ as Z}from"./HqISaFGK.js";import{_ as ee}from"./DbUVmnXN.js";import"./EsVAOzXk.js";import"./DwqlywRW.js";var te=function(s){var e=s.dt;return`
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
`)},ae={root:function(s){var e=s.instance,d=s.props;return["p-textarea p-component",{"p-filled":e.$filled,"p-textarea-resizable ":d.autoResize,"p-textarea-sm p-inputfield-sm":d.size==="small","p-textarea-lg p-inputfield-lg":d.size==="large","p-invalid":e.$invalid,"p-variant-filled":e.$variant==="filled","p-textarea-fluid":e.$fluid}]}},ne=V.extend({name:"textarea",theme:te,classes:ae}),oe={name:"BaseTextarea",extends:O,props:{autoResize:Boolean},style:ne,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},B={name:"Textarea",extends:oe,inheritAttrs:!1,observer:null,mounted:function(){var s=this;this.autoResize&&(this.observer=new ResizeObserver(function(){s.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(s){this.autoResize&&this.resize(),this.writeValue(s.target.value,s)}},computed:{attrs:function(){return F(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},se=["value","disabled","aria-invalid"];function re(c,s,e,d,u,h){return f(),p("textarea",F({class:c.cx("root"),value:c.d_value,disabled:c.disabled,"aria-invalid":c.invalid||void 0,onInput:s[0]||(s[0]=function(){return h.onInput&&h.onInput.apply(h,arguments)})},h.attrs),null,16,se)}B.render=re;const ie={class:"p-fluid"},le={class:"p-field flex flex-col"},ce={for:"contact"},de={class:"p-field flex flex-col"},ue={for:"feedback"},pe={key:0,class:"p-error"},fe={key:1,class:"p-error"},he={__name:"FeedbackDialog",setup(c){const s=A(),e=E(),d=m(!1),u=m(""),h=m(""),o=m(!1),r=m(!1),t=m(0),i=m(""),b=U(()=>j(new Date,new Date(i.value))&&t.value>=10),k=()=>{z(),d.value=!0},$=()=>{d.value=!1,u.value="",o.value=!1},w=async()=>{if(o.value=!0,!(!u.value||b.value)){r.value=!0;try{const n=new FormData;if(n.append("_subject","网站反馈"),n.append("feedback",u.value),n.append("contact",h.value),(await fetch("https://formsubmit.co/ajax/crazyjunichi@hotmail.com",{method:"POST",body:n})).ok)s.add({severity:"success",detail:e.t("反馈已提交，感谢您的意见！"),life:3e3}),R();else throw new Error("提交失败")}catch(n){s.add({severity:"success",detail:e.t("提交反馈时出错，请稍后再试"),life:3e3}),console.error("反馈提交错误:",n)}finally{r.value=!1,$()}}},z=()=>{const n=localStorage.getItem("feedbackSubmissions");if(n){const{count:l,date:x}=JSON.parse(n);t.value=l,i.value=x}},R=()=>{const n=new Date,l=i.value?new Date(i.value):null;j(n,l)?t.value++:(t.value=1,i.value=n.toISOString()),localStorage.setItem("feedbackSubmissions",JSON.stringify({count:t.value,date:i.value}))},j=(n,l)=>!n||!l?!1:n.getFullYear()===l.getFullYear()&&n.getMonth()===l.getMonth()&&n.getDate()===l.getDate();return(n,l)=>(f(),p("div",null,[g(_(S),{label:n.$t("提交反馈"),icon:"pi pi-comment",onClick:k},null,8,["label"]),g(_(K),{visible:d.value,"onUpdate:visible":l[2]||(l[2]=x=>d.value=x),header:n.$t("提交反馈"),modal:!0,style:{width:"500px"}},{footer:T(()=>[g(_(S),{label:n.$t("取消"),icon:"pi pi-times",onClick:$,class:"p-button-text"},null,8,["label"]),g(_(S),{label:n.$t("提交"),icon:"pi pi-check",onClick:w,disabled:b.value,loading:r.value},null,8,["label","disabled","loading"])]),default:T(()=>[a("div",ie,[a("div",le,[a("label",ce,v(n.$t("（可选）您的联系方式")),1),W(a("input",{id:"contact","onUpdate:modelValue":l[0]||(l[0]=x=>h.value=x),type:"text",class:"p-inputtext p-component"},null,512),[[N,h.value]])]),a("div",de,[a("label",ue,v(n.$t("您的反馈意见")),1),g(_(B),{id:"feedback",modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=x=>u.value=x),autoResize:!0,rows:"5",required:"",class:L({"p-invalid":o.value&&!u.value})},null,8,["modelValue","class"]),o.value&&!u.value?(f(),p("small",pe,v(n.$t("请填写反馈内容")),1)):y("",!0),b.value?(f(),p("small",fe," 您今天已提交 "+v(t.value)+" 次反馈，每天最多提交10次 ",1)):y("",!0)])])]),_:1},8,["visible","header"])]))}},ve=H(he,[["__scopeId","data-v-1de262f2"]]),me=I("/library_hero_zh.jpg"),ge=I("/library_hero_en.jpg"),be=I("/library_hero_ja.jpg"),xe={class:"relative"},_e={key:0,id:"hero",src:me,class:"relative object-cover masked-image"},ye={key:1,id:"hero",src:ge,class:"relative object-cover masked-image"},ke={key:2,id:"hero",src:be,class:"relative object-cover masked-image"},$e={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4"},we={class:"flex flex-col items-center justify-center gap-4 h-80 border border-current/30 border-dashed rounded-lg shadow-md"},ze={class:"text-red-400/90 text-center whitespace-pre-wrap"},De={class:"font-bold text-3xl text-center text-(--ui-primary)"},Se={key:0,class:"text-center whitespace-pre-wrap"},Ie={key:1,class:"text-center whitespace-pre-wrap"},je={class:"relative col-span-1 md:col-span-1 lg:col-span-3 flex flex-col border border-current/30 border-dashed rounded-lg shadow-md p-4"},Te={class:"grow flex flex-col gap-2"},Ce={class:"flex"},Fe={class:"text-lg font-bold grow"},He={href:"_PageHistory",class:"text-sm underline"},Ae={class:"flex flex-wrap gap-x-2"},Ee={class:"text-right"},Be=P({__name:"index",setup(c){A();const s=X(),e=m([]);M(async()=>{const o=(await Q(async()=>{const{default:t}=await import("./BipZwwcG.js");return{default:t}},[],import.meta.url)).default,r=o.histories.filter(t=>t.createAt>Date.now()-1e3*60*60*24*30).sort((t,i)=>i.createAt-t.createAt)[0].version;r?e.value=o.histories.filter(t=>t.type!="dialog").filter(t=>!t.key.includes("DEBUG")).filter(t=>!t.key.startsWith("NOT_USED")).filter(t=>!t.key.startsWith("HOTFIX_")).filter(t=>!t.key.startsWith("TEST_")).filter(t=>t.version==r).sort((t,i)=>t.type.localeCompare(i.type)):e.value=o.histories.filter(t=>t.createAt>Date.now()-1e3*60*60*24*7).filter(t=>!t.key.includes("DEBUG")).sort((t,i)=>i.createAt-t.createAt).slice(0,20),e.value=e.value.filter(t=>!t.key.startsWith("Test")&&!t.key.startsWith("HOTFIX_"))});function d(){const o=document.getElementById("hero"),r=document.getElementById("scaling-text"),t=o.naturalWidth,i=o.naturalHeight,b=o.clientWidth,k=o.clientHeight,$=b/t,w=k/i,z=Math.max($,w)*1.5;r.style.transform=`scale(${z})`}window.addEventListener("load",d),window.addEventListener("resize",d);const u=E();function h(){q({title:`${u.t(J().$gameName)}`,htmlAttrs:{lang:u.locale.value}})}return h(),Y(u.locale,h),(o,r)=>{const t=ve,i=Z,b=ee;return f(),p(C,null,[a("div",null,[a("div",xe,[o.$i18n.locale=="zh"?(f(),p("img",_e)):y("",!0),o.$i18n.locale=="en"?(f(),p("img",ye)):y("",!0),o.$i18n.locale=="ja"?(f(),p("img",ke)):y("",!0)]),a("div",$e,[a("div",we,[a("div",ze,v(o.$t("知道的越多, 乐趣就越少")),1),a("div",De," ⚠️ "+v(o.$t("持续建设中"))+"…… ",1),o.$i18n.locale=="zh"?(f(),p("div",Se,r[0]||(r[0]=[a("div",null,[D("Wiki反馈：QQ群 "),a("span",{class:"text-sky-300"},"752206926")],-1),a("div",null,[D("游戏交流：QQ群 "),a("span",{class:"text-sky-300"},"788493527")],-1),a("div",null,[D("MOD交流：QQ群 "),a("span",{class:"text-sky-300"},"641891277")],-1)]))):o.$i18n.locale=="en"?(f(),p("div",Ie,r[1]||(r[1]=[a("span",null,"Contact me at ",-1),a("span",{class:"text-sky-300"},"crazyjunichi@hotmail.com",-1)]))):y("",!0),g(t)]),a("div",je,[a("div",Te,[a("div",Ce,[a("div",Fe,v(o.$t("最近新增页面"))+"：",1),a("div",null,[a("a",He,"("+v(o.$t("查看版本变更"))+")",1)])]),g(i),a("div",Ae,[(f(!0),p(C,null,G(_(e),k=>(f(),p("div",null,[g(b,{obj:k},null,8,["obj"])]))),256))])]),a("div",Ee,v(o.$t("当前页面总数"))+" ： "+v(_(s).public.pageCount),1)]),r[2]||(r[2]=a("div",null,null,-1)),r[3]||(r[3]=a("div",null,null,-1))])]),y("",!0)],64)}}}),Pe=H(Be,[["__scopeId","data-v-48b16c01"]]);export{Pe as default};
