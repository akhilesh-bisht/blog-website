let displyArticls = document.querySelector(".articals-5");
let innerhtml = "";
Items.forEach((item) => {
  innerhtml += `
<div class="articals">
<img src="${item.Image}" alt="">
<h3>${item.tittle}</h3>
<div class="d-t">${item.date}</div>
</div>`;
});
displyArticls.innerHTML = innerhtml;


let cssDisplyArticls = document.querySelector(".articals-6");
let artical = "";
articals.forEach((articl) => {
  artical += `
<div class="articals">
<img src="${articl.Image}" alt="">
<h3>${articl.tittle}</h3>
<div class="d-t">${articl.date}</div>
</div>`;
});
cssDisplyArticls.innerHTML = artical;
