'use strict';
const fillForm = document.querySelector('.js-fieldset');
const previewName = document.querySelector('.js-preview-name');
const previewJob = document.querySelector('.js-preview-job');
const previewPhone = document.querySelector('.js-preview-phone');
const previewEmail = document.querySelector('.js-preview-email');
const previewLinkedin = document.querySelector('.js-preview-linkedin');
const previewGithub = document.querySelector('.js-preview-github');
//const  = document.querySelector('.j');



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
  event.preventDefault();
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
  if (data.name === '') {
    previewName.innerHTML = 'Nombre Apellido';
  } else {
    previewName.innerHTML = data.name;
  }
  if (data.job === '') {
    previewJob.innerHTML = 'Front-end developer';
  } else {
    previewJob.innerHTML = data.job;
  }
  previewPhone.href=data.phone;
  previewEmail.href=`mailto:${data.email}`;
  previewLinkedin.href=data.linkedin;
  previewGithub.href=data.github;
}

fillForm.addEventListener('keyup', handleKeyupInputs);
