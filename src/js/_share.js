'use strict';

const shareLegend = document.querySelector('.js-title_share');
const share = document.querySelector('.js-share');
const shareArrow = document.querySelector('.js-shareArrow');

shareLegend.addEventListener('click', (event) => {
  event.preventDefault();
  share.classList.toggle('collapsed');
  shareArrow.classList.toggle('arrowDown');
});
