const ingredientsList = document.getElementById("ingredients");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
ingredients.forEach((ingredient) => {
  const liElement = document.createElement("li");

  liElement.textContent = ingredient;

  liElement.classList.add("item");

  ingredientsList.appendChild(liElement);
});