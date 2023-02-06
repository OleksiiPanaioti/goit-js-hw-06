const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = ingredients.map(ingredient => {
  const listCreate = document.createElement("li");
  listCreate.textContent = ingredient;
  listCreate.classList.add('item');
  return listCreate;
})



const ulId = document.querySelector('#ingredients');
console.log(ulId)

ulId.append(...ingredientsEl);
