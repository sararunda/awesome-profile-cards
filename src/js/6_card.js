'use strict';

const btn = document.querySelector('.js_bntCreate');

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
}

btn.addEventListener('click', handlebntCreate);
