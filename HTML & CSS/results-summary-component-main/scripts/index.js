fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const sumGroup = document.querySelector(".summary-group");

    data.forEach((item) => {
      const article = document.createElement("article");

      fetch(item.icon)
        .then((response) => response.text())
        .then((svgContent) => {
          article.innerHTML = `
            <div>
              ${svgContent}
              <p class="${item.category.toLowerCase()}">${item.category}</p>
            </div>
            <p class="score">
                ${item.score} <span style="color: gray;"> / 100 </span> 
            </p>
          `;
        });

      article.classList.add(`${item.category}-article`.toLowerCase());
      sumGroup.appendChild(article);
    });
  });
