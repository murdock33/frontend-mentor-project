const btnEl = document.querySelector(".btn-share");
const shareEl = document.querySelector("#is-clicked");
const bodyEl = document.querySelector("body");
const pathEl = document.querySelector("path");
const svgEl = document.querySelector(".svg-default");

bodyEl.addEventListener("click", (event) => {
  const targetBtn = [btnEl, svgEl, pathEl];

  if (targetBtn.includes(event.target)) {
    shareEl.classList.toggle("invisible");
  } else {
    shareEl.classList.add("invisible");
  }
});
