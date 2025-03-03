import{B as d,c as l,o as c,i as r,j as u,x as o,A as s,C as p,a as h,t as f,D as y,f as v,w as g}from"./CxuzRj8Q.js";var k=function(e){var a=e.dt;return`
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: `.concat(a("tag.primary.background"),`;
    color: `).concat(a("tag.primary.color"),`;
    font-size: `).concat(a("tag.font.size"),`;
    font-weight: `).concat(a("tag.font.weight"),`;
    padding: `).concat(a("tag.padding"),`;
    border-radius: `).concat(a("tag.border.radius"),`;
    gap: `).concat(a("tag.gap"),`;
}

.p-tag-icon {
    font-size: `).concat(a("tag.icon.size"),`;
    width: `).concat(a("tag.icon.size"),`;
    height:`).concat(a("tag.icon.size"),`;
}

.p-tag-rounded {
    border-radius: `).concat(a("tag.rounded.border.radius"),`;
}

.p-tag-success {
    background: `).concat(a("tag.success.background"),`;
    color: `).concat(a("tag.success.color"),`;
}

.p-tag-info {
    background: `).concat(a("tag.info.background"),`;
    color: `).concat(a("tag.info.color"),`;
}

.p-tag-warn {
    background: `).concat(a("tag.warn.background"),`;
    color: `).concat(a("tag.warn.color"),`;
}

.p-tag-danger {
    background: `).concat(a("tag.danger.background"),`;
    color: `).concat(a("tag.danger.color"),`;
}

.p-tag-secondary {
    background: `).concat(a("tag.secondary.background"),`;
    color: `).concat(a("tag.secondary.color"),`;
}

.p-tag-contrast {
    background: `).concat(a("tag.contrast.background"),`;
    color: `).concat(a("tag.contrast.color"),`;
}
`)},V={root:function(e){var a=e.props;return["p-tag p-component",{"p-tag-info":a.severity==="info","p-tag-success":a.severity==="success","p-tag-warn":a.severity==="warn","p-tag-danger":a.severity==="danger","p-tag-secondary":a.severity==="secondary","p-tag-contrast":a.severity==="contrast","p-tag-rounded":a.rounded}]},icon:"p-tag-icon",label:"p-tag-label"},B=d.extend({name:"tag",theme:k,classes:V}),w={name:"BaseTag",extends:y,props:{value:null,severity:null,rounded:Boolean,icon:String},style:B,provide:function(){return{$pcTag:this,$parentInstance:this}}},i={name:"Tag",extends:w,inheritAttrs:!1};function D(n,e,a,t,T,E){return c(),l("span",s({class:n.cx("root")},n.ptmi("root")),[n.$slots.icon?(c(),r(p(n.$slots.icon),s({key:0,class:n.cx("icon")},n.ptm("icon")),null,16,["class"])):n.icon?(c(),l("span",s({key:1,class:[n.cx("icon"),n.icon]},n.ptm("icon")),null,16)):u("",!0),n.value!=null||n.$slots.default?o(n.$slots,"default",{key:2},function(){return[h("span",s({class:n.cx("label")},n.ptm("label")),f(n.value),17)]}):u("",!0)],16)}i.render=D;const $=v({__name:"TagValid",props:{valid:{type:Boolean}},setup(n){return(e,a)=>{const t=i;return e.valid?(c(),r(t,{key:0,icon:"pi pi-check"},{default:g(()=>[o(e.$slots,"default")]),_:3})):(c(),r(t,{key:1,icon:"pi pi-times",severity:"danger"},{default:g(()=>[o(e.$slots,"default")]),_:3}))}}}),I=Object.assign($,{__name:"TagValid"});var S=(n=>(n[n.ClashValue=0]="ClashValue",n[n.Damage=1]="Damage",n[n.ClashInaccuracy=2]="ClashInaccuracy",n[n.ClashStealthBonus=3]="ClashStealthBonus",n[n.Reach=4]="Reach",n[n.ClashIneffectiveRangeMalus=5]="ClashIneffectiveRangeMalus",n[n.ClashVsEscape=6]="ClashVsEscape",n[n.WrestlingClashBonus=7]="WrestlingClashBonus",n[n.WrestlingDamageBonus=8]="WrestlingDamageBonus",n[n.DamageVsEscape=9]="DamageVsEscape",n[n.ClashVsVulnerable=10]="ClashVsVulnerable",n[n.DmgVsVulnerable=11]="DmgVsVulnerable",n))(S||{});function z(n){switch(n){case 0:return"冲突值";case 1:return"伤害";case 2:return"ClashInaccuracy";case 3:return"ClashStealthBonus";case 4:return"Reach";case 5:return"ClashIneffectiveRangeMalus";case 6:return"ClashVsEscape";case 7:return"WrestlingClashBonus";case 8:return"WrestlingDamageBonus";case 9:return"DamageVsEscape";case 10:return"ClashVsVulnerable";case 11:return"DmgVsVulnerable"}return"Unknown"}function R(n){switch(n){case 0:return"首回合";case 1:return"装备在主手";case 2:return"装备在副手";case 3:return"装备于双手";case 4:return"入鞘";case 5:return"在地上";case 6:return"始终可用";case 7:return"不参战";default:return"Unknown"}}export{S as W,I as _,z as a,R as g,i as s};
