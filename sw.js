if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,o)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let n={};const d=e=>r(e,t),b={module:{uri:t},exports:n,require:d};i[t]=Promise.all(s.map((e=>b[e]||d(e)))).then((e=>(o(...e),n)))}}define(["./workbox-dbb64b4e"],(function(e){"use strict";importScripts("https://unpkg.com/workbox-sw@7.0.0/build/workbox-sw.js"),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"index.a0b552fd.js",revision:"1fec216138f28f4292693be9427bdbd2"},{url:"index.html",revision:"df82865940860493e8d06220b7dbeb9a"},{url:"index.runtime.e23d7550.js",revision:"2d847155fee77cb69bc6f08f3d6cb93c"},{url:"WebCell-0.f9823b00.png",revision:"fd7ead66e06c8b4dabceb68ba6608d4a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=sw.js.map