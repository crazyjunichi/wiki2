import{C as H,aa as N,m as C,c as u,o as p,_ as I,b1 as T,u as F,p as m,aq as B,h as b,j as x,v as S,a,z as E,t as v,b2 as P,g as _,A as Q,b3 as w,d as W,ae as L,e as M,f as G,y as k,F as j,r as Y,b4 as q,k as J,l as X}from"./p8SRDG7c.js";import{s as $}from"./Cad5uYpg.js";import{s as K}from"./DnhLkT6-.js";import{_ as Z}from"./BJxdXtN-.js";import{_ as ee}from"./x_TG0KYY.js";import"./8S1fwycM.js";import"./Cirwrr7I.js";var te=function(s){var e=s.dt;return`
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
`)},ae={root:function(s){var e=s.instance,d=s.props;return["p-textarea p-component",{"p-filled":e.$filled,"p-textarea-resizable ":d.autoResize,"p-textarea-sm p-inputfield-sm":d.size==="small","p-textarea-lg p-inputfield-lg":d.size==="large","p-invalid":e.$invalid,"p-variant-filled":e.$variant==="filled","p-textarea-fluid":e.$fluid}]}},ne=H.extend({name:"textarea",theme:te,classes:ae}),oe={name:"BaseTextarea",extends:N,props:{autoResize:Boolean},style:ne,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},A={name:"Textarea",extends:oe,inheritAttrs:!1,observer:null,mounted:function(){var s=this;this.autoResize&&(this.observer=new ResizeObserver(function(){s.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(s){this.autoResize&&this.resize(),this.writeValue(s.target.value,s)}},computed:{attrs:function(){return C(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},se=["value","disabled","aria-invalid"];function re(i,s,e,d,f,o){return p(),u("textarea",C({class:i.cx("root"),value:i.d_value,disabled:i.disabled,"aria-invalid":i.invalid||void 0,onInput:s[0]||(s[0]=function(){return o.onInput&&o.onInput.apply(o,arguments)})},o.attrs),null,16,se)}A.render=re;const ie={class:"p-fluid"},le={class:"p-field flex flex-col"},ce={for:"contact"},de={class:"p-field flex flex-col"},ue={for:"feedback"},pe={key:0,class:"p-error"},fe={key:1,class:"p-error"},ve={__name:"FeedbackDialog",setup(i){const s=T(),e=F(),d=m(!1),f=m(""),o=m(""),l=m(!1),t=m(!1),c=m(0),h=m(""),y=B(()=>D(new Date,new Date(h.value))&&c.value>=10),R=()=>{O(),d.value=!0},z=()=>{d.value=!1,f.value="",l.value=!1},V=async()=>{if(l.value=!0,!(!f.value||y.value)){t.value=!0;try{const n=new FormData;if(n.append("_subject","网站反馈"),n.append("feedback",f.value),n.append("contact",o.value),(await fetch("https://formsubmit.co/ajax/crazyjunichi@hotmail.com",{method:"POST",body:n})).ok)s.add({severity:"success",detail:e.t("反馈已提交，感谢您的意见！"),life:3e3}),U();else throw new Error("提交失败")}catch(n){s.add({severity:"success",detail:e.t("提交反馈时出错，请稍后再试"),life:3e3}),console.error("反馈提交错误:",n)}finally{t.value=!1,z()}}},O=()=>{const n=localStorage.getItem("feedbackSubmissions");if(n){const{count:r,date:g}=JSON.parse(n);c.value=r,h.value=g}},U=()=>{const n=new Date,r=h.value?new Date(h.value):null;D(n,r)?c.value++:(c.value=1,h.value=n.toISOString()),localStorage.setItem("feedbackSubmissions",JSON.stringify({count:c.value,date:h.value}))},D=(n,r)=>!n||!r?!1:n.getFullYear()===r.getFullYear()&&n.getMonth()===r.getMonth()&&n.getDate()===r.getDate();return(n,r)=>(p(),u("div",null,[b(x($),{label:n.$t("提交反馈"),icon:"pi pi-comment",onClick:R},null,8,["label"]),b(x(K),{visible:d.value,"onUpdate:visible":r[2]||(r[2]=g=>d.value=g),header:n.$t("提交反馈"),modal:!0,style:{width:"500px"}},{footer:S(()=>[b(x($),{label:n.$t("取消"),icon:"pi pi-times",onClick:z,class:"p-button-text"},null,8,["label"]),b(x($),{label:n.$t("提交"),icon:"pi pi-check",onClick:V,disabled:y.value,loading:t.value},null,8,["label","disabled","loading"])]),default:S(()=>[a("div",ie,[a("div",le,[a("label",ce,v(n.$t("（可选）您的联系方式")),1),E(a("input",{id:"contact","onUpdate:modelValue":r[0]||(r[0]=g=>o.value=g),type:"text",class:"p-inputtext p-component"},null,512),[[P,o.value]])]),a("div",de,[a("label",ue,v(n.$t("您的反馈意见")),1),b(x(A),{id:"feedback",modelValue:f.value,"onUpdate:modelValue":r[1]||(r[1]=g=>f.value=g),autoResize:!0,rows:"5",required:"",class:Q({"p-invalid":l.value&&!f.value})},null,8,["modelValue","class"]),l.value&&!f.value?(p(),u("small",pe,v(n.$t("请填写反馈内容")),1)):_("",!0),y.value?(p(),u("small",fe," 您今天已提交 "+v(c.value)+" 次反馈，每天最多提交10次 ",1)):_("",!0)])])]),_:1},8,["visible","header"])]))}},he=I(ve,[["__scopeId","data-v-1de262f2"]]),me=w("/library_hero_zh.jpg"),be=w("/library_hero_en.jpg"),ge=w("/library_hero_ja.jpg"),xe={class:"relative"},_e={key:0,id:"hero",src:me,class:"relative object-cover masked-image"},ye={key:1,id:"hero",src:be,class:"relative object-cover masked-image"},ke={key:2,id:"hero",src:ge,class:"relative object-cover masked-image"},$e={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4"},we={class:"flex flex-col items-center justify-center gap-4 h-80 border border-current/30 border-dashed rounded-lg shadow-md"},ze={class:"text-red-400/90 text-center whitespace-pre-wrap"},De={class:"font-bold text-3xl text-center text-(--ui-primary)"},Se={key:0,class:"text-center whitespace-pre-wrap"},je={key:1,class:"text-center whitespace-pre-wrap"},Ce={class:"relative col-span-1 md:col-span-1 lg:col-span-3 flex flex-col border border-current/30 border-dashed rounded-lg shadow-md p-4"},Ie={class:"grow flex flex-col gap-2"},Te={class:"flex"},Fe={class:"text-lg font-bold grow"},Ae={href:"_PageHistory",class:"text-sm underline"},Re={class:"flex flex-wrap gap-x-2"},Ve={class:"text-right"},Oe=W({__name:"index",setup(i){T();const s=q(),e=m([]);L(async()=>{const o=(await M(async()=>{const{default:t}=await import("./BB74rQU3.js");return{default:t}},[],import.meta.url)).default,l=o.histories.filter(t=>t.createAt>Date.now()-1e3*60*60*24*30).sort((t,c)=>c.createAt-t.createAt)[0].version;l?e.value=o.histories.filter(t=>t.type!="dialog").filter(t=>!t.key.includes("DEBUG")).filter(t=>!t.key.startsWith("NOT_USED")).filter(t=>!t.key.startsWith("HOTFIX_")).filter(t=>!t.key.startsWith("TEST_")).filter(t=>t.version==l).sort((t,c)=>t.type.localeCompare(c.type)):e.value=o.histories.filter(t=>t.createAt>Date.now()-1e3*60*60*24*7).filter(t=>!t.key.includes("DEBUG")).sort((t,c)=>c.createAt-t.createAt).slice(0,20),e.value=e.value.filter(t=>!t.key.startsWith("Test")&&!t.key.startsWith("HOTFIX_"))});const d=F();function f(){J({title:`${d.t(X().$gameName)}`,htmlAttrs:{lang:d.locale.value}})}return f(),G(d.locale,f),(o,l)=>{const t=he,c=Z,h=ee;return p(),u(j,null,[a("div",null,[a("div",xe,[o.$i18n.locale=="zh"?(p(),u("img",_e)):_("",!0),o.$i18n.locale=="en"?(p(),u("img",ye)):_("",!0),o.$i18n.locale=="ja"?(p(),u("img",ke)):_("",!0)]),a("div",$e,[a("div",we,[a("div",ze,v(o.$t("知道的越多, 乐趣就越少")),1),a("div",De," ⚠️ "+v(o.$t("持续建设中"))+"…… ",1),o.$i18n.locale=="zh"?(p(),u("div",Se,l[0]||(l[0]=[a("div",null,[k("Wiki反馈：QQ群 "),a("span",{class:"text-sky-300"},"752206926")],-1),a("div",null,[k("游戏交流：QQ群 "),a("span",{class:"text-sky-300"},"788493527")],-1),a("div",null,[k("MOD交流：QQ群 "),a("span",{class:"text-sky-300"},"641891277")],-1)]))):o.$i18n.locale=="en"?(p(),u("div",je,l[1]||(l[1]=[a("span",null,"Contact me at ",-1),a("span",{class:"text-sky-300"},"crazyjunichi@hotmail.com",-1)]))):_("",!0),b(t)]),a("div",Ce,[a("div",Ie,[a("div",Te,[a("div",Fe,v(o.$t("最近新增页面"))+"：",1),a("div",null,[a("a",Ae,"("+v(o.$t("查看版本变更"))+")",1)])]),b(c),a("div",Re,[(p(!0),u(j,null,Y(x(e),y=>(p(),u("div",null,[b(h,{obj:y},null,8,["obj"])]))),256))])]),a("div",Ve,v(o.$t("当前页面总数"))+" ： "+v(x(s).public.pageCount),1)]),l[2]||(l[2]=a("div",null,null,-1))])]),_("",!0)],64)}}}),We=I(Oe,[["__scopeId","data-v-49731c29"]]);export{We as default};
