import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{P as m,_ as a}from"./assets/vendor-a09c4a83.js";const t="videoplayer-current-time",n=document.querySelector("iframe"),o=new m(n),e=localStorage.getItem(t),c=a.throttle(r=>{localStorage.setItem(t,r.seconds)},1e3);e&&o.setCurrentTime(e);o.on("timeupdate",c);
//# sourceMappingURL=commonHelpers2.js.map
