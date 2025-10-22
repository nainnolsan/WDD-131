document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#articles");

  function displayArticles(list) {
    container.innerHTML = "";
    list.forEach((article) => {
      const section = document.createElement("section");
      section.classList.add("book");

      section.innerHTML = `
        <div class="book-info">
          <p class="date">${article.date}</p>
          <p class="age">Ages ${article.ages}</p>
          <p class="genre">${article.genre}</p>
          <p class="rating">${article.stars}</p>
        </div>
        <div class="book-content">
          <h2>${article.title}</h2>
          <img src="${article.imgSrc}" alt="${article.imgAlt}">
          <p>${article.description}</p>
        </div>
      `;

      container.appendChild(section);
    });
  }

  displayArticles(articles);
});