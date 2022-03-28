'use strict';

const designLegend = document.querySelector('.js-designLegend');
const design = document.querySelector('.js-design');
const designArrow = document.querySelector('.js-designArrow');

designLegend.addEventListener('click', () => {
   design.classList.toggle('collapsed');
   designArrow.classList.toggle('arrowDown')
});