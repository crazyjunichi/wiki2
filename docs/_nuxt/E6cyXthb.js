import{_}from"./BcMbw4ml.js";import{_ as V}from"./CIOKw6S1.js";import{i as $}from"./Brd0kxXE.js";import{d as h,c as n,o,r as p,a as s,t as d,F as b,i,h as r,k as u,g as C,z as v,C as S,D as k,m as l}from"./Byv7A9KX.js";import{_ as j}from"./iu1VMBm3.js";import{_ as A}from"./C8j1BTXT.js";const E={key:0},R={key:1,class:"bg-current/20 border border-current/50 rounded px-1.5 py-0.5 mx-0.5 text-sm"},w={key:2,class:"bg-current/20 border border-current/50 rounded px-1.5 py-0.5 mx-0.5 text-sm"},T=h({__name:"SmallChip",props:{text:{},withContent:{type:Boolean}},setup(e){return(t,a)=>!t.text&&!t.withContent?(o(),n("span",E)):t.withContent?(o(),n("span",R,[p(t.$slots,"default")])):(o(),n("span",w,[s("span",null,d(t.text??""),1),p(t.$slots,"default")]))}}),x=Object.assign(T,{__name:"SmallChip"});function L(e){switch(e){case 0:return"继续战斗";case 1:return"击败敌人";case 2:return"敌人逃跑";case 3:return"玩家逃跑";case 4:return"Special1";case 5:return"Special2";case 6:return"Special3";case 7:return"Special4";case 8:return"玩家士气低落"}return""}const q={key:0},B={class:"text-xs"},F=h({__name:"PlayerEncounterVariable",props:{obj:{}},setup(e){return(t,a)=>{const c=_,m=V;return o(),n(b,null,[i(c,{obj:t.obj.Stat},null,8,["obj"]),t.obj.AddedValue.InterpolatedAddedValue.Active?(o(),n(b,{key:0},[i(m,{obj:t.obj.AddedValue.InterpolatedAddedValue,joiner:t.$t("时增加")},null,8,["obj","joiner"]),u($)(t.obj.AddedValue.RandomAddedValue)?r("",!0):(o(),n("span",q,[s("span",B,"（随机值："+d(t.obj.AddedValue.RandomAddedValue.x)+" - "+d(t.obj.AddedValue.RandomAddedValue.y)+"）",1)]))],64)):r("",!0)],64)}}}),ie=Object.assign(F,{__name:"PlayerEncounterVariable"});function W(e){switch(e){case 0:return"近身";case 1:return"远距离";case 2:return""}return""}function f(e,t=""){switch(e){case 0:return"";case 1:return t+"脆弱中";case 2:return t+"非脆弱"}return""}function N(e){switch(e){case 0:return"";case 1:return"缠斗中";case 2:return"非缠斗中"}return""}function P(e,t){switch(t){case 0:return e.MeleeSkill;case 1:return e.RangedSkill;case 2:return e.Blood;case 3:return e.Stamina;case 4:return e.Morale;case 5:return e.Value1;case 6:return e.Value2;case 7:return e.Value3;case 8:return e.Value4}}const D={key:0},G={class:"flex"},I={class:"text-durability"},O={key:1},z={key:2},M={key:3},H={key:4},J={class:"text-right text-sm text-current/30"},K=h({__name:"GenericEncounterPlayerAction",props:{action:{},encounter:{}},setup(e){return(t,a)=>{const c=x,m=j,g=A;return o(),n(b,null,[t.action.CannotFailClash?(o(),n("div",D,"必定成功")):r("",!0),s("div",G,[a[0]||(a[0]=s("div",null,"条件：",-1)),s("div",null,[i(c,{text:u(W)(t.action.RequiredDistance)},null,8,["text"]),i(c,{text:u(N)(t.action.RequiredWrestlingState)},null,8,["text"]),i(c,{text:u(f)(t.action.RequiredSelfVulnerableState,"玩家")},null,8,["text"]),i(c,{text:u(f)(t.action.RequiredOpponentVulnerableState,"自身")},null,8,["text"])]),i(m,{obj:t.action.RequiredConditions},null,8,["obj"]),t.action.RequiredEncounterValues.length>0?(o(!0),n(b,{key:0},C(t.action.RequiredEncounterValues,y=>(o(),n("div",null,[s("span",I,d(u(P)(t.encounter,y.Value).Name),1),i(g,{obj:y.ConditionRange},null,8,["obj"])]))),256)):r("",!0)]),t.action.ActionSuccessLog.LogText.Text?(o(),n("div",O," 成功："+d(t.action.ActionSuccessLog.LogText.Text),1)):r("",!0),t.action.ActionFailureLog.LogText.Text&&!t.action.CannotFailClash?(o(),n("div",z," 失败："+d(t.action.ActionFailureLog.LogText.Text),1)):r("",!0),t.action.WrestlingStateChange.WrestlingStateChange>0?(o(),n("div",M,[s("span",null,d(["","[成功时] ","[失败时] ",""][t.action.WrestlingStateChange.ChangeApplies]),1),a[1]||(a[1]=v(" 变为")),i(c,{text:t.action.WrestlingStateChange.WrestlingStateChange==1?"缠斗中":"未缠斗"},null,8,["text"])])):r("",!0),t.action.EncounterResult?(o(),n("div",H,[s("div",J," -> "+d(u(L)(t.action.EncounterResult)),1)])):r("",!0)],64)}}}),ce=Object.assign(K,{__name:"GenericEncounterPlayerAction"});var Q=function(t){var a=t.dt;return`
.p-card {
    background: `.concat(a("card.background"),`;
    color: `).concat(a("card.color"),`;
    box-shadow: `).concat(a("card.shadow"),`;
    border-radius: `).concat(a("card.border.radius"),`;
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: `).concat(a("card.caption.gap"),`;
}

.p-card-body {
    padding: `).concat(a("card.body.padding"),`;
    display: flex;
    flex-direction: column;
    gap: `).concat(a("card.body.gap"),`;
}

.p-card-title {
    font-size: `).concat(a("card.title.font.size"),`;
    font-weight: `).concat(a("card.title.font.weight"),`;
}

.p-card-subtitle {
    color: `).concat(a("card.subtitle.color"),`;
}
`)},U={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},X=S.extend({name:"card",theme:Q,classes:U}),Y={name:"BaseCard",extends:k,style:X,provide:function(){return{$pcCard:this,$parentInstance:this}}},Z={name:"Card",extends:Y,inheritAttrs:!1};function ee(e,t,a,c,m,g){return o(),n("div",l({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(o(),n("div",l({key:0,class:e.cx("header")},e.ptm("header")),[p(e.$slots,"header")],16)):r("",!0),s("div",l({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(o(),n("div",l({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(o(),n("div",l({key:0,class:e.cx("title")},e.ptm("title")),[p(e.$slots,"title")],16)):r("",!0),e.$slots.subtitle?(o(),n("div",l({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[p(e.$slots,"subtitle")],16)):r("",!0)],16)):r("",!0),s("div",l({class:e.cx("content")},e.ptm("content")),[p(e.$slots,"content")],16),e.$slots.footer?(o(),n("div",l({key:1,class:e.cx("footer")},e.ptm("footer")),[p(e.$slots,"footer")],16)):r("",!0)],16)],16)}Z.render=ee;export{ie as _,ce as a,x as b,P as c,W as d,N as e,f,L as g,Z as s};
