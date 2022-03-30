'use strict';

const designLegend = document.querySelector('.js-designLegend');
const design = document.querySelector('.js-design');
const designArrow = document.querySelector('.js-designArrow');

designLegend.addEventListener('click', (event) => {
  event.preventDefault();
  design.classList.toggle('collapsed');
  designArrow.classList.toggle('arrowDown');
});