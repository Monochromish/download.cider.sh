(function(){"use strict";var e={9110:function(e,t,n){var r=n(9242),a=n(3396);const i=(0,a._)("a",{href:"https://winstall.app/apps/CiderCollective.Cider"},[(0,a._)("img",{class:"winget",src:"https://custom-icon-badges.herokuapp.com/badge/Get_It_via_Winget_(Nightly)_-100000?style=for-the-badge&logo=winstall"})],-1),l=(0,a._)("br",null,null,-1);function o(e,t,n,r,o,s){const u=(0,a.up)("ms-store-badge"),c=(0,a.up)("buttonRow");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(u,{productid:"9p21xj9d9g66",size:"small"}),(0,a.Wm)(c,{branch:"main","display-name":"Nightly"}),i,(0,a.Wm)(c,{branch:"stable","display-name":"Stable"}),l],64)}n(6699);var s=n(7139),u=n(4870);const c={key:0},p=(0,a.Uk)("Releases"),d={key:1},g=(0,a._)("br",null,null,-1),f=(0,a.Uk)(".dmg"),m=(0,a.Uk)(".pkg"),h={key:2},b=(0,a._)("br",null,null,-1),v={name:"button-row"};var w=Object.assign(v,{props:{branch:String,displayName:String},setup(e){const t=e,{branch:n,displayName:r}=(0,u.BK)(t);let i=(0,u.iH)(null),l=(0,u.iH)(null),o="https://api.github.com/repos/ciderapp/cider-releases/releases?per_page=100";"stable"===n.value&&(o="https://api.github.com/repos/ciderapp/cider-releases/releases/tags/v1.5.0"),fetch(o).then((async e=>{let t=await e.json();"stable"===n.value?i.value=[t]:i.value=t.filter((e=>e.name.includes(n.value))),console.log(n.value,i.value)})).catch((e=>l.value=e));let v=!1;const w=window.location.search,y=new URLSearchParams(w);return y.has("exe")&&(v=!0),(e,t)=>{const o=(0,a.up)("b-button"),w=(0,a.up)("b-button-group"),y=(0,a.up)("b-spinner");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",null,(0,s.zw)((0,u.SU)(r))+" releases",1),(0,u.SU)(l)?((0,a.wg)(),(0,a.iD)("div",c,[(0,a.Wm)(w,{class:"mr-1"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{href:"https://github.com/ciderapp/cider-releases/releases/",style:{margin:"5px"},variant:"light"},{default:(0,a.w5)((()=>[p])),_:1},8,["href"])])),_:1})])):(0,u.SU)(i)?((0,a.wg)(),(0,a.iD)("div",d,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,u.SU)(i)[0].assets,(e=>((0,a.wg)(),(0,a.j4)(w,{class:"mr-1",key:e},{default:(0,a.w5)((()=>[String(e.name).endsWith(".yml")||String(e.name).endsWith(".blockmap")||String(e.name).endsWith(".exe")||(0,u.SU)(v)?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(o,{key:0,href:e.browser_download_url,style:{margin:"5px"},variant:"light"},{default:(0,a.w5)((()=>[(0,a.Uk)("."+(0,s.zw)(String(e.name).split(".")[String(e.name).split(".").length-1]),1)])),_:2},1032,["href"])),String(e.name).endsWith(".yml")||String(e.name).endsWith(".blockmap")||String(e.name).includes("winget")||!(0,u.SU)(v)?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(o,{key:1,href:e.browser_download_url,style:{margin:"5px"},variant:"light"},{default:(0,a.w5)((()=>[(0,a.Uk)("."+(0,s.zw)(String(e.name).split(".")[String(e.name).split(".").length-1]),1)])),_:2},1032,["href"]))])),_:2},1024)))),128)),g,"main"===(0,u.SU)(n)?((0,a.wg)(),(0,a.j4)(w,{key:0,class:"mr-1"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{href:"https://github.com/ciderapp/Cider/releases/download/macos-beta/Cider.dmg",style:{margin:"5px"},variant:"light"},{default:(0,a.w5)((()=>[f])),_:1}),(0,a.Wm)(o,{href:"https://github.com/ciderapp/Cider/releases/download/macos-beta/Cider.pkg",style:{margin:"5px"},variant:"light"},{default:(0,a.w5)((()=>[m])),_:1})])),_:1})):(0,a.kq)("",!0)])):((0,a.wg)(),(0,a.iD)("div",h,[(0,a.Wm)(y,{label:"Spinning"})])),b],64)}}});const y=w;var _=y,S={name:"App",components:{buttonRow:_}},k=n(89);const j=(0,k.Z)(S,[["render",o]]);var O=j,W=n(936);(0,r.ri)(O).use(W.ZP).mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,i){if(!r){var l=1/0;for(c=0;c<e.length;c++){r=e[c][0],a=e[c][1],i=e[c][2];for(var o=!0,s=0;s<r.length;s++)(!1&i||l>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(o=!1,i<l&&(l=i));if(o){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,i,l=r[0],o=r[1],s=r[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(a in o)n.o(o,a)&&(n.m[a]=o[a]);if(s)var c=s(n)}for(t&&t(r);u<l.length;u++)i=l[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self["webpackChunkupdate_cider"]=self["webpackChunkupdate_cider"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9110)}));r=n.O(r)})();
//# sourceMappingURL=app.112612ed.js.map