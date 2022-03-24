'use strict'

console.log("miiiiiiiiiiii");


const fill = document.querySelector('.js-desplegable');
const form2 = document.querySelector('.js-fieldset');
const arrowUp = document.querySelector('.fa-angle-up') ;
const arrowDown = document.querySelector('.fa-angle-down');

function hiddeFieldset() { 
  if (form2.classList.contains('collapsed')) {
    form2.classList.remove('collapsed')
  } else {
    form2.classList.add('collapsed')
  } }

function changeArrow() {    
  if (form2.classList.contains('collapsed')) {
    arrowUp.classList.add('collapsed')
}}

fill.addEventListener('click', hiddeFieldset) ;
fill.addEventListener('click', changeArrow) 