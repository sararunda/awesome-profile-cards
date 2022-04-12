'use strict';

function changeColorButton(event) {
  btn.classList.add('js-greyButton');
  shareCardSection.classList.remove('js-createHidden');
}

function handlebntCreate(event) {
  event.preventDefault();
  if (data.name === '' || data.job === '' || data.email === '' || data.phone === '' || data.linkedin === '' || data.github === '' || data.photo === '') {
    messageCard.innerHTML = 'Debe rellenar todos los campos';
  }
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
      const url = cardData.cardURL;
      generatedUrl.innerHTML = url;
      generatedUrl.href = url;
      shareOnTwitter.href = `https://twitter.com/intent/tweet?text=${url}`;
    });
  changeColorButton();
}

btn.addEventListener('click', handlebntCreate);
