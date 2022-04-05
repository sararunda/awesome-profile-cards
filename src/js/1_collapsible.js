'use strict';

const designLegend = document.querySelector('.js-designLegend');
const design = document.querySelector('.js-design');
const designArrow = document.querySelector('.js-designArrow');
const fill = document.querySelector('.js-desplegable');
const form2 = document.querySelector('.js-fieldset');
const arrowUp = document.querySelector('.js-icon-rellena');
const shareLegend = document.querySelector('.js-title_share');
const share = document.querySelector('.js-share');
const shareArrow = document.querySelector('.js-shareArrow');

function hiddeFieldset(event) {
  event.preventDefault();
  if (
    form2.classList.contains('collapsed') &&
    arrowUp.classList.contains('fa-transform')
  ) {
    form2.classList.remove('collapsed');
    arrowUp.classList.remove('fa-transform');
  } else {
    form2.classList.add('collapsed');
    arrowUp.classList.add('fa-transform');
  }
}

designLegend.addEventListener('click', (event) => {
  event.preventDefault();
  design.classList.toggle('collapsed');
  designArrow.classList.toggle('arrowDown');
});

fill.addEventListener('click', hiddeFieldset);

shareLegend.addEventListener('click', (event) => {
  event.preventDefault();
  share.classList.toggle('collapsed');
  shareArrow.classList.toggle('arrowDown');
});
