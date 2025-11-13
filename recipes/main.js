import { recipes } from "./recipes.mjs";

const recipeList = document.querySelector(".recipe-list");

function renderRecipes() {
  recipeList.innerHTML = "";

  recipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">

      <div class="recipe-info">
        <div class="tags">
          ${recipe.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>

        <h2>${recipe.name}</h2>

        <span class="rating">
          ${"⭐".repeat(recipe.rating)}${"☆".repeat(5 - recipe.rating)}
        </span>

        <p class="description">${recipe.description}</p>
      </div>
    `;

    recipeList.appendChild(card);
  });
}

renderRecipes();
