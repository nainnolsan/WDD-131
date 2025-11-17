import { recipes } from "./recipes.mjs";

const recipeList = document.querySelector(".recipe-list");
const searchInput = document.querySelector("#search");
const searchBtn = document.querySelector("#search-btn");

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomRecipe(list) {
  return list[random(list.length)];
}

function tagsTemplate(tags) {
  return tags.map(tag => `<span>${tag}</span>`).join("");
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    html += i <= rating ? "⭐" : "☆";
  }
  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `
    <div class="recipe-card">
      <img src="${recipe.image}" alt="${recipe.name}">
      <div class="recipe-info">
        <div class="tags">${tagsTemplate(recipe.tags)}</div>
        <h2>${recipe.name}</h2>
        ${ratingTemplate(recipe.rating)}
        <p class="description">${recipe.description}</p>
      </div>
    </div>
  `;
}

function renderRecipes(list) {
  recipeList.innerHTML = list.map(recipeTemplate).join("");
}

function filterRecipes(query) {
  const q = query.toLowerCase();

  const filtered = recipes.filter(r => {
    const nameMatch = r.name.toLowerCase().includes(q);
    const descMatch = r.description.toLowerCase().includes(q);
    const tagMatch = r.tags.find(t => t.toLowerCase().includes(q));
    return nameMatch || descMatch || tagMatch;
  });

  return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
  e.preventDefault();
  const query = searchInput.value.trim().toLowerCase();
  const results = filterRecipes(query);
  renderRecipes(results);
}

function init() {
  const randomRecipe = getRandomRecipe(recipes);
  renderRecipes([randomRecipe]);
}

searchBtn.addEventListener("click", searchHandler);

init();
