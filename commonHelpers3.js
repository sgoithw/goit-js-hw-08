import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{t as c}from"./assets/vendor-a09c4a83.js";const o="feedback-form-state",a=document.querySelector(".feedback-form");localStorage.getItem(o);const s=c(t=>i(t.currentTarget),500);l(a);a.addEventListener("input",s);a.addEventListener("submit",m);function m(t){t.preventDefault(),console.log(Object.fromEntries(new FormData(t.target).entries())),t.target.reset(),localStorage.removeItem(o)}function i(t){if(t instanceof HTMLFormElement){const e=new FormData(t);console.log(12),localStorage.setItem(o,JSON.stringify(Object.fromEntries(e.entries())))}}function l(t){try{const e=localStorage.getItem(o),r=e?JSON.parse(e):null;r&&Object.keys(r).forEach(n=>{t[n]&&(t[n].value=r[n])})}catch(e){console.log(e)}}
//# sourceMappingURL=commonHelpers3.js.map
