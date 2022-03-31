'use strict';

const previewContainer = document.querySelector('.js-preview-container');
const radioButton1 = document.querySelector('.js-input-1');
const radioButton2 = document.querySelector('.js-input-2');
const radioButton3 = document.querySelector('.js-input-3');

function handleClick1() {
  previewContainer.classList.remove('palette-2');
  previewContainer.classList.remove('palette-3');
  previewContainer.classList.add('palette-1');
}

function handleClick2() {
  previewContainer.classList.remove('palette-1');
  previewContainer.classList.remove('palette-3');
  previewContainer.classList.add('palette-2');
}

function handleClick3() {
  previewContainer.classList.remove('palette-1');
  previewContainer.classList.remove('palette-2');
  previewContainer.classList.add('palette-3');
}

radioButton1.addEventListener('click', handleClick1);
radioButton2.addEventListener('click', handleClick2);
radioButton3.addEventListener('click', handleClick3);
