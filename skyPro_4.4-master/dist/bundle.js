(()=>{"use strict";function e(){const e=document.querySelectorAll(".buttons");for(const t of e)if(!0===t.checked)switch(window.application.levels=t.value,window.application.levels){case"1":l("body",6);break;case"2":l("body",12);break;case"3":l("body",18)}}function t(){document.querySelector(".app").textContent="",o()}function n(){switch(c(),window.application.levels){case"1":l("body",6);break;case"2":l("body",12);break;case"3":l("body",18)}}function c(){window.application.timers.forEach((e=>{clearInterval(e),window.application.timers=[]}))}function o(){const t=document.querySelector(".app"),n=document.createElement("h1");n.classList.add("title"),n.textContent="Выбери сложность";const c=document.createElement("div");c.classList.add("level__content"),t.appendChild(n),t.appendChild(c),i(t,"Старт",e),window.application.renderBlock("blockChoice",c)}function l(e,t){const o=document.querySelector(e);o.textContent="";const l=document.createElement("div");l.classList.add("util__container");const a=document.createElement("div");a.classList.add("timer__heading");const d=document.createElement("div");d.classList.add("cards__container"),o.appendChild(l),l.appendChild(a),o.appendChild(d),i(l,"Начать заново",n);const r=function(e){let t=[];const n=["6","7","8","9","10","j","q","k","t"],c=["b","c","k","p"];for(let o=0;o<e/2;o++){const e=Math.floor(Math.random()*n.length),o=Math.floor(Math.random()*c.length),l=n[e]+c[o]+".png";t.push(l)}return t}(t),u=[...r,...r];!function(e){let t,n=e.length;for(;0!==n;)t=Math.floor(Math.random()*n),n--,[e[n],e[t]]=[e[t],e[n]]}(u),u.forEach((e=>{const t=document.createElement("div");t.classList.add("cards","flip");const n=document.createElement("div"),c=document.createElement("div");n.classList.add("notflipped"),c.classList.add(e,"flipped"),n.style.backgroundImage="url(./static/Maskgroup.png)",c.style.backgroundImage=`url(./static/img/${e}`,t.append(c,n),d.appendChild(t)})),function(){let e=null,t=null,n=!0;const o=document.querySelectorAll(".cards");o.forEach((l=>{setTimeout((()=>{l.classList.remove("flip"),function(){const e=(new Date).getTime(),t=()=>{const n=(new Date).getTime()-e;document.querySelector(".timer__heading").textContent=(n/1e3).toFixed(2);const c=window.setTimeout(t);window.application.timers.push(c),window.application.result.push(`${(n/1e3).toFixed(2)}`)};t()}(),o.forEach(((l,i)=>l.addEventListener("click",(()=>{var a,d;!0!==n||l.classList.contains("successfully")||(l.classList.add("flip"),null===e?e=i:i!==e&&(t=i,n=!1),null!==e&&null!==t&&e!==t&&((null===(a=o[e].firstElementChild)||void 0===a?void 0:a.className)===(null===(d=o[t].firstElementChild)||void 0===d?void 0:d.className)?setTimeout((()=>{e=null,t=null,n=!0}),500):setTimeout((()=>{o[e].classList.remove("flip"),o[t].classList.remove("flip"),e=null,t=null,n=!0,s("Вы проиграли","url(../static/img/lose.png)"),c()}),500)),Array.from(o).every((e=>e.className.includes("flip")))&&(s("Вы выиграли","url(../static/img/image.png)"),c()))}))))}),1e3)}))}()}function s(e,n){const c=document.querySelector("body"),o=document.createElement("div");o.classList.add("backDiv");const l=document.createElement("div");l.classList.add("app");const s=document.createElement("div");s.classList.add("image__game"),s.style.backgroundImage=n;const a=document.createElement("h1");a.classList.add("title"),a.textContent=e;const d=document.createElement("div");d.classList.add("timer");const r=window.application.result.pop();d.textContent=`${r}`,c.appendChild(o),c.appendChild(l),l.appendChild(s),l.appendChild(a),l.appendChild(d),i(l,"Играть снова",t)}function i(e,t,n){const c=document.createElement("button");c.classList.add("buttonStart"),c.textContent=t,e.appendChild(c),c.addEventListener("click",n)}window.application={blocks:{},screens:{},renderScreen:function(e){this.screens[e]()},renderBlock:function(e,t){this.blocks[e](t)},levels:[],timers:[],result:[]},window.application.blocks.blockChoice=function(e){["1","2","3"].forEach((t=>{const n=document.createElement("input");n.setAttribute("type","radio"),n.setAttribute("value",t),n.setAttribute("id",t),n.setAttribute("name","group-buttons"),n.classList.add("buttons");const c=document.createElement("label");c.setAttribute("for",t),c.classList.add("buttons-label"),c.textContent=t,e.appendChild(n),e.appendChild(c),function(){const e=document.querySelectorAll(".buttons"),t=document.querySelector(".level__content"),n=document.querySelectorAll(".buttons-label");t.addEventListener("click",(c=>{setTimeout((()=>{const e=c.target;c.target!==t&&e.classList.add("background")}),0),n.forEach((e=>{e.classList.remove("background")})),e.forEach((e=>{e.classList.remove("background")}))}))}()}))},window.application.screens.screenChoice=o,window.application.renderScreen("screenChoice")})();