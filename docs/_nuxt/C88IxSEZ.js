import{B as V,s as j,m as A,c as v,o as x,_ as C,u as T,a as B,r as h,b as E,d as m,e as _,w as I,f as t,g as L,t as d,v as U,h as D,n as N,p as M,i as P,j as O,k as W,l as Y,q as G,F as H,x as q,y as J,z as X,A as K}from"./Cy0nR1I-.js";import{s as z}from"./ZAp_Jh4y.js";import{s as Q}from"./CbgDxc1d.js";import{_ as Z}from"./D6iE2x0o.js";import{_ as ee}from"./BMbrAHlQ.js";import"./B4MKdsR5.js";import"./DAd3r7dj.js";import"./CWMIWO1a.js";import"./wefT2h1I.js";var te=function(s){var e=s.dt;return`
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
`)},ae={root:function(s){var e=s.instance,u=s.props;return["p-textarea p-component",{"p-filled":e.$filled,"p-textarea-resizable ":u.autoResize,"p-textarea-sm p-inputfield-sm":u.size==="small","p-textarea-lg p-inputfield-lg":u.size==="large","p-invalid":e.$invalid,"p-variant-filled":e.$variant==="filled","p-textarea-fluid":e.$fluid}]}},ne=V.extend({name:"textarea",theme:te,classes:ae}),oe={name:"BaseTextarea",extends:j,props:{autoResize:Boolean},style:ne,provide:function(){return{$pcTextarea:this,$parentInstance:this}}},F={name:"Textarea",extends:oe,inheritAttrs:!1,observer:null,mounted:function(){var s=this;this.autoResize&&(this.observer=new ResizeObserver(function(){s.resize()}),this.observer.observe(this.$el))},updated:function(){this.autoResize&&this.resize()},beforeUnmount:function(){this.observer&&this.observer.disconnect()},methods:{resize:function(){this.$el.offsetParent&&(this.$el.style.height="auto",this.$el.style.height=this.$el.scrollHeight+"px",parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden")},onInput:function(s){this.autoResize&&this.resize(),this.writeValue(s.target.value,s)}},computed:{attrs:function(){return A(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)}}},se=["value","disabled","aria-invalid"];function ie(r,s,e,u,p,f){return x(),v("textarea",A({class:r.cx("root"),value:r.d_value,disabled:r.disabled,"aria-invalid":r.invalid||void 0,onInput:s[0]||(s[0]=function(){return f.onInput&&f.onInput.apply(f,arguments)})},f.attrs),null,16,se)}F.render=ie;const re={class:"p-fluid"},le={class:"p-field flex flex-col"},ce={for:"contact"},de={class:"p-field flex flex-col"},ue={for:"feedback"},pe={key:0,class:"p-error"},fe={key:1,class:"p-error"},he={__name:"FeedbackDialog",setup(r){const s=T(),e=B(),u=h(!1),p=h(""),f=h(""),o=h(!1),l=h(!1),a=h(0),c=h(""),g=E(()=>S(new Date,new Date(c.value))&&a.value>=10),y=()=>{k(),u.value=!0},$=()=>{u.value=!1,p.value="",o.value=!1},w=async()=>{if(o.value=!0,!(!p.value||g.value)){l.value=!0;try{const n=new FormData;if(n.append("_subject","网站反馈"),n.append("feedback",p.value),n.append("contact",f.value),(await fetch("https://formsubmit.co/ajax/crazyjunichi@hotmail.com",{method:"POST",body:n})).ok)s.add({severity:"success",detail:e.t("反馈已提交，感谢您的意见！"),life:3e3}),R();else throw new Error("提交失败")}catch(n){s.add({severity:"success",detail:e.t("提交反馈时出错，请稍后再试"),life:3e3}),console.error("反馈提交错误:",n)}finally{l.value=!1,$()}}},k=()=>{const n=localStorage.getItem("feedbackSubmissions");if(n){const{count:i,date:b}=JSON.parse(n);a.value=i,c.value=b}},R=()=>{const n=new Date,i=c.value?new Date(c.value):null;S(n,i)?a.value++:(a.value=1,c.value=n.toISOString()),localStorage.setItem("feedbackSubmissions",JSON.stringify({count:a.value,date:c.value}))},S=(n,i)=>!n||!i?!1:n.getFullYear()===i.getFullYear()&&n.getMonth()===i.getMonth()&&n.getDate()===i.getDate();return(n,i)=>(x(),v("div",null,[m(_(z),{label:n.$t("提交反馈"),icon:"pi pi-comment",onClick:y},null,8,["label"]),m(_(Q),{visible:u.value,"onUpdate:visible":i[2]||(i[2]=b=>u.value=b),header:n.$t("提交反馈"),modal:!0,style:{width:"500px"}},{footer:I(()=>[m(_(z),{label:n.$t("取消"),icon:"pi pi-times",onClick:$,class:"p-button-text"},null,8,["label"]),m(_(z),{label:n.$t("提交"),icon:"pi pi-check",onClick:w,disabled:g.value,loading:l.value},null,8,["label","disabled","loading"])]),default:I(()=>[t("div",re,[t("div",le,[t("label",ce,d(n.$t("（可选）您的联系方式")),1),L(t("input",{id:"contact","onUpdate:modelValue":i[0]||(i[0]=b=>f.value=b),type:"text",class:"p-inputtext p-component"},null,512),[[U,f.value]])]),t("div",de,[t("label",ue,d(n.$t("您的反馈意见")),1),m(_(F),{id:"feedback",modelValue:p.value,"onUpdate:modelValue":i[1]||(i[1]=b=>p.value=b),autoResize:!0,rows:"5",required:"",class:N({"p-invalid":o.value&&!p.value})},null,8,["modelValue","class"]),o.value&&!p.value?(x(),v("small",pe,d(n.$t("请填写反馈内容")),1)):D("",!0),g.value?(x(),v("small",fe," 您今天已提交 "+d(a.value)+" 次反馈，每天最多提交10次 ",1)):D("",!0)])])]),_:1},8,["visible","header"])]))}},me=C(he,[["__scopeId","data-v-1de262f2"]]),ve=M("/library_hero.jpg"),xe={class:"relative"},ge={id:"scaling-text",class:"absolute left-5/20 top-9/20 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4"},be={width:"800"},_e={x:"50%",y:"50%",fill:"red","font-weight":"bold",stroke:"white","stroke-width":"2px","text-anchor":"middle","dominant-baseline":"middle","font-size":"90","font-family":"sans-serif"},ye={class:"flex flex-wrap"},$e={class:"[filter:drop-shadow(-6px_6px_0px_rgba(0,0,0,0.4))] pl-8"},we={class:"text-5xl font-bold text-white"},ke={class:"text-2xl font-bold text-white mb-8 bg-green-700 px-2 py-1 rounded-lg"},ze={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4"},De={class:"flex flex-col items-center justify-center gap-4 h-80 border border-current/30 border-dashed rounded-lg shadow-md"},Se={class:"text-red-400/90 text-center whitespace-pre-wrap"},Ie={class:"font-bold text-3xl text-center text-(--ui-primary)"},He={class:"text-center whitespace-pre-wrap"},Ae=["innerHTML"],Ce={class:"relative col-span-1 md:col-span-1 lg:col-span-3 flex flex-col border border-current/30 border-dashed rounded-lg shadow-md p-4"},Te={class:"grow flex flex-col gap-2"},Be={class:"flex"},Fe={class:"text-lg font-bold grow"},Re={href:"_PageHistory",class:"text-sm underline"},Ve={class:"flex flex-wrap gap-x-2"},je={class:"text-right"},Ee=P({__name:"index",setup(r){T();const s=J(),e=h([]);O(async()=>{const o=(await W(async()=>{const{default:a}=await import("./DtHAd0QG.js");return{default:a}},[],import.meta.url)).default,l=o.histories.filter(a=>a.createAt>Date.now()-1e3*60*60*24*7).sort((a,c)=>c.createAt-a.createAt)[0].version;l?e.value=o.histories.filter(a=>!a.key.includes("DEBUG")).filter(a=>a.version==l):e.value=o.histories.filter(a=>a.createAt>Date.now()-1e3*60*60*24*7).filter(a=>!a.key.includes("DEBUG")).sort((a,c)=>c.createAt-a.createAt).slice(0,20),u()});function u(){const o=document.getElementById("hero"),l=document.getElementById("scaling-text"),a=o.naturalWidth,c=o.naturalHeight,g=o.clientWidth,y=o.clientHeight,$=g/a,w=y/c,k=Math.max($,w)*1.5;l.style.transform=`scale(${k})`}window.addEventListener("load",u),window.addEventListener("resize",u);const p=B();function f(){X({title:`${p.t(K().$gameName)}`,htmlAttrs:{lang:p.locale.value}})}return f(),Y(p.locale,f),(o,l)=>{const a=me,c=Z,g=ee;return x(),v(H,null,[t("div",null,[t("div",xe,[l[0]||(l[0]=t("img",{id:"hero",src:ve,class:"relative object-cover masked-image"},null,-1)),t("div",ge,[(x(),v("svg",be,[t("text",_e,d(o.$t("卡牌生存")),1)])),t("div",ye,[t("div",$e,[t("span",we,d(o.$t("奇幻森林")),1)]),t("span",ke,d(o.$t("百科")),1)])])]),t("div",ze,[t("div",De,[t("div",Se,d(o.$t("知道的越多, 乐趣就越少")),1),t("div",Ie," ⚠️ "+d(o.$t("持续建设中"))+"…… ",1),t("div",He,[G(d(o.$t("反馈入口")),1),t("span",{class:"text-sky-300",innerHTML:o.$t("反馈链接")},null,8,Ae)]),m(a)]),t("div",Ce,[t("div",Te,[t("div",Be,[t("div",Fe,d(o.$t("最近新增页面"))+"：",1),t("div",null,[t("a",Re,"("+d(o.$t("查看版本变更"))+")",1)])]),m(c),t("div",Ve,[(x(!0),v(H,null,q(_(e),y=>(x(),v("div",null,[m(g,{obj:y},null,8,["obj"])]))),256))])]),t("div",je,d(o.$t("当前页面总数"))+" ： "+d(_(s).public.pageCount),1)]),l[1]||(l[1]=t("div",null,null,-1)),l[2]||(l[2]=t("div",null,null,-1))])]),D("",!0)],64)}}}),qe=C(Ee,[["__scopeId","data-v-6cb7c655"]]);export{qe as default};
