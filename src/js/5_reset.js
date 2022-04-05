'use strict';
const buttonReset= document.querySelector ('.js_buttonReset');
let resetInput=document.querySelectorAll('.js_resetInput');


function handleClickReset(event){
    event.preventDefault();
    resetInput.value= '';
}

buttonReset.addEventListener('click', handleClickReset);