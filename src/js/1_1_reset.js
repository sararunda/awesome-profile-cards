'use strict';

function resetCard() {
  previewName.innerHTML = 'Nombre Apellido';
  previewJob.innerHTML = 'Front-end developer';
  btn.classList.remove('js-greyButton');
  shareCardSection.classList.add('js-createHidden');
  resetImage.style.backgroundImage = '';
  resetPreviewImg.style.backgroundImage = '';
}

function handleClickReset(event) {
  event.preventDefault();
  for (const item of resetInput) {
    item.value = '';
  }

  resetCard();
}

buttonReset.addEventListener('click', handleClickReset);
