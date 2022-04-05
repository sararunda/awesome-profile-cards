'use strict';

function changeColorButton(event) {
  btn.classList.add('js-greyButton');
  shareCardSection.classList.remove('js-createHidden');
}

function handlebntCreate(event) {
  event.preventDefault();
  fetch('https://awesome-profile-cards.herokuapp.com/card/', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((cardData) => {
      console.log(cardData);
    });
  changeColorButton();
}

btn.addEventListener('click', handlebntCreate);
