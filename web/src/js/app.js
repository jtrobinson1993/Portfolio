window.onload = function() {
  //querySelectorAll doesn't really return an array, it returns something 'array-like', this uses some fancy ES6 syntax [... ] to turn it into a real array
  const $ = elem => [...document.querySelectorAll(elem)];

  const $mainMenuIcon = $('#main-header .menu-icon');

  console.log('hello world');

  console.log($mainMenuIcon);
}
