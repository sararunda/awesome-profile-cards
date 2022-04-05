'use strict';

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
