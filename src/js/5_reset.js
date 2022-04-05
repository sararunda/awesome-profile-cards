'use strict';
const buttonReset= document.querySelector ('.js_buttonReset');
let resetInput=document.querySelectorAll('.js_resetInput');


function resetCard() {
 previewName.innerHTML = 'Nombre Apellido';
 previewJob.innerHTML = 'Front-end developer';
};

function handleClickReset(event){
 event.preventDefault();
 console.log('holii');
 for (const item of resetInput) {
     item.value = '';
 }

resetCard();

};

buttonReset.addEventListener('click', handleClickReset);