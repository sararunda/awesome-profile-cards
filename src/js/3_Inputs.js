'use strict';
const fillForm = document.querySelector('.js-fieldset');
const previewName = document.querySelector('.js-preview-name');
const previewJob = document.querySelector('.js-preview-job');

const data = {
  palette: 1,
  name: '',
  job: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  photo: '',
};

function handleKeyupInputs(event) {
  const typeElement = event.target;

  if (typeElement.name === 'name') {
    data.name = typeElement.value;
  } else if (typeElement.name === 'job') {
    data.job = typeElement.value;
  } else if (typeElement.name === 'email') {
    data.email = typeElement.value;
  } else if (typeElement.name === 'phone') {
    data.phone = typeElement.value;
  } else if (typeElement.name === 'linkedin') {
    data.linkedin = typeElement.value;
  } else if (typeElement.name === 'github') {
    data.github = typeElement.value;
  } else if (typeElement.name === 'photo') {
    data.photo = typeElement.value;
  }

  renderPreview();
}

function renderPreview() {
  previewName.innerHTML = data.name;
  previewJob.innerHTML = data.job;
}

fillForm.addEventListener('keyup', handleKeyupInputs);
