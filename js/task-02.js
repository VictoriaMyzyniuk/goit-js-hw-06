const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const addElementsList = ingredients.map(element => {
  const newIngredient = document.createElement('li');
  newIngredient.classList.add('item');
  newIngredient.textContent = element;
  return newIngredient;
});

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...addElementsList);

console.log(addElementsList);
