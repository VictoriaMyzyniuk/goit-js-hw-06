const numberOfElements = document.querySelectorAll('.item');
console.log('Number of categories: ', numberOfElements.length);

numberOfElements.forEach(element => {
  const headindOfElements = element.querySelector('h2');
  console.log('Category: ', headindOfElements.textContent);

  const findNumberofElements = element.querySelectorAll('ul > li');
  console.log('Elements: ', findNumberofElements.length);
});
