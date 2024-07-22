const ratingContainer = document.querySelector(".rating-container");
let previousActiveBtn = null;

document.addEventListener("click", (event) => {
  const target = event.target;
  const isRatingButton = target.closest(".rating-container");

  if (!isRatingButton) {
    if (previousActiveBtn) {
      previousActiveBtn.classList.remove("active-btn");
      previousActiveBtn = null;
    }
    return;
  }

  if (target.nodeName.includes("BUTTON")) {
    if (previousActiveBtn) {
      previousActiveBtn.classList.remove("active-btn");
    }

    target.classList.add("active-btn");
    previousActiveBtn = target;
  }
});

let str = "";
function getRatingValue(value) {
  str = `You selected ${value} out of 5`;
}

function submitBtn() {
  if (!str) return;
  
  document.querySelector(".result").innerHTML = str;
  document.querySelector(".front-face").classList.add("hidden-visibility");
  document.querySelector(".back-face").classList.remove("hidden-visibility");
  str = "";
}
