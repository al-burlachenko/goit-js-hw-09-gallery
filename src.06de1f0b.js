parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/icon-close.svg":[["icon-close.bb7ed7e5.svg","cAq2"],"cAq2"]}],"satZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const p=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}];var o=p;exports.default=o;
},{}],"N48k":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.modalOpen=o,exports.changeLightboxImage=r;var e=require("../index");function t(o){"Escape"!==o.code&&o.target!==o.currentTarget||(e.modalClsBtn.removeEventListener("click",t),e.lightbox.classList.remove("is-open"),e.lightboxOverlay.removeEventListener("click",t),window.removeEventListener("keydown",t),window.removeEventListener("keydown",i),e.lightboxImage.setAttribute("src",""),e.lightboxImage.setAttribute("alt",""))}function o(o){e.modalClsBtn.addEventListener("click",t),e.lightbox.classList.add("is-open"),e.lightboxOverlay.addEventListener("click",t),window.addEventListener("keydown",t),window.addEventListener("keydown",i)}function r(t,o){e.lightboxImage.setAttribute("src",t),e.lightboxImage.setAttribute("alt",o)}function i(t){const o=[],i=e.gallery.querySelectorAll(".gallery__image");[...i].forEach(e=>{o.push(e.dataset.source)});const n=e.lightboxImage.getAttribute("src");let s=o.indexOf(n);"ArrowRight"===t.code&&(s>=i.length-1&&(s=-1),s+=1),"ArrowLeft"===t.code&&(s<=0&&(s=i.length),console.log(s),s-=1),r(i[s].dataset.source,i[s].getAttribute("alt"))}
},{"../index":"Focm"}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.modalClsBtn=exports.lightboxOverlay=exports.lightboxImage=exports.lightbox=exports.gallery=void 0,require("./sass/main.scss");var e=r(require("./js/initialData")),t=require("./js/modalInterface");function r(e){return e&&e.__esModule?e:{default:e}}const o=document.querySelector(".js-gallery");exports.gallery=o;const l=document.querySelector(".js-lightbox");exports.lightbox=l;const a=l.querySelector(".lightbox__image");exports.lightboxImage=a;const n=l.querySelector(".lightbox__overlay");exports.lightboxOverlay=n;const s=l.querySelector('button[data-action="close-lightbox"]');function i(e){return e.map(({preview:e,original:t,description:r})=>`\n    <li class="gallery__item">\n  <a\n    class="gallery__link"\n    href="${t}"\n  >\n    <img\n      class="gallery__image"\n      src='${e}'\n      data-source="${t}"\n      alt='${r}'\n    />\n  </a>\n</li>`).join("")}function c(e){if(e.preventDefault(),e.target===e.currentTarget)return;const r=e.target.dataset.source,o=e.target.getAttribute("alt");(0,t.modalOpen)(e),(0,t.changeLightboxImage)(r,o)}exports.modalClsBtn=s,o.addEventListener("click",c),o.insertAdjacentHTML("beforeend",i(e.default));
},{"./sass/main.scss":"clu1","./js/initialData":"satZ","./js/modalInterface":"N48k"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-09-gallery/src.06de1f0b.js.map