'use strict';



const fill = document.querySelector('.js-desplegable');
const form2 = document.querySelector('.js-fieldset');
const arrowUp = document.querySelector('.js-icon-rellena') ;


function hiddeFieldset(event) { 
  event.preventDefault();
  if (form2.classList.contains('collapsed') && arrowUp.classList.contains('fa-transform')) {

    form2.classList.remove('collapsed');
    arrowUp.classList.remove('fa-transform');
    
    
  } else {
    form2.classList.add('collapsed');
    arrowUp.classList.add('fa-transform');
    
  }}

  fill.addEventListener('click', hiddeFieldset) ;




/*
function changeArrow() {    
  if (form2.classList.contains('collapsed')) {
    arrowUp.classList.add('collapsed')
}}

fill.addEventListener('click', hiddeFieldset) ;
fill.addEventListener('click', changeArrow) */