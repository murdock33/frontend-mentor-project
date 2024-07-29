# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![](./design/screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- JavaScript

### What I learned

What I learned in this project is how to take data from JSON file and render it to JavaScript using Fetch 

```js
fetch("../data.json")
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
```

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)