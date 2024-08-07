const btnEl = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");
let str = "";
let value = 0;

btnEl.forEach((el) => {
  el.addEventListener("click", (event) => {
    const prevBtn = document.querySelector(".active-btn");

    if (prevBtn) {
      prevBtn.classList.remove("active-btn");
    }

    value = event.target.textContent;
    event.target.classList.add("active-btn");
  });
});

submitBtn.addEventListener("click", () => {
  if (!value) return;

  str = `You selected ${value} out of 5`;
  document.querySelector(".result").innerHTML = str;
  document.querySelector(".front-face").classList.add("hidden-visibility");
  document.querySelector(".back-face").classList.remove("hidden-visibility");
  str = "";
});
