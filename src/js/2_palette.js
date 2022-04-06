'use strict';



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

/* function handleClicPalette(event){
  console.log("paletas")
  data.palette = event.currentTarget.id;
}

function listenersPalettes(){
//listener de las paletas
const paletteInputs = document.querySelectorAll('.js-option-input');
  for (const item of paletteInputs) {
    item.addEventListener("click", handleClicPalette);
  }
}

listenersPalettes(); */