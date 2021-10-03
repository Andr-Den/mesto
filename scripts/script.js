import Card from './card.js'
import FormValidator from './formValidator.js'
import { openPopup, closePopup, imagePopup } from './utils.js';

const profileInfoPopup = document.querySelector('.popup_type_profile'); 
const openProfileInfoPopupButton = document.querySelector('.profile__edit-button'); 
const nameComponent = document.querySelector('.profile__title'); 
const nameField = document.getElementById('input-name'); 
const jobComponent = document.querySelector('.profile__subtitle'); 
const jobField = document.getElementById('input-job'); 
const closeProfileInfoPopupButton = document.querySelector('.popup__icon_profile'); 
const profileFormElement = document.querySelector('.popup__form_profile'); 

const addCardPopup = document.querySelector('.popup_type_add-card');  
const openAddCardPopupButton = document.querySelector('.profile__add-button'); 
const closeAddCardPopupButton = document.querySelector('.popup__icon_add-card'); 
const imageField = document.getElementById('input-card-name'); 
const linkField = document.getElementById('input-link'); 
const addCardFormElement = document.querySelector('.popup__form_add-card'); 
const elementsList = document.querySelector('.elements__list')

const closeImageButton = document.querySelector('.popup__icon_open-cards'); 
 
const buttonElement = addCardFormElement.querySelector('.popup__submit-button'); 
 
const initialCards = [ 
  { 
    name: 'Архыз', 
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg' 
  }, 
  { 
    name: 'Челябинская область', 
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg' 
  }, 
  { 
    name: 'Иваново', 
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg' 
  }, 
  { 
    name: 'Камчатка', 
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg' 
  }, 
  { 
    name: 'Холмогорский район', 
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg' 
  }, 
  { 
    name: 'Байкал', 
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg' 
  } 
];

const validationObject = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_no-active',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

function profileFormSubmitHandler (evt) { 
  evt.preventDefault(); 
  const newName = nameField.value; 
  nameComponent.textContent = newName; 
  const newJob = jobField.value; 
  jobComponent.textContent = newJob; 
  closePopup(profileInfoPopup); 
}

function createCard (link, name) {
  const card = new Card(link, name, '.card-template');
  return card.generateCard();
}

initialCards.forEach((item) => {
  const cardElement = createCard(item.link, item.name)
  elementsList.append(cardElement);
});

const profileValidator = new FormValidator(validationObject, profileInfoPopup.querySelector(validationObject.formSelector))
profileValidator.enableValidation()

const addCardValidator = new FormValidator(validationObject, addCardPopup.querySelector(validationObject.formSelector))
addCardValidator.enableValidation()

function addCardFormSubmitHandler (evt) { 
  evt.preventDefault(); 
  const cardElement = createCard(linkField.value, imageField.value);
  elementsList.prepend(cardElement);
  imageField.value = ""; 
  linkField.value = ""; 
  buttonElement.classList.add('popup__submit-button_no-active'); 
  buttonElement.disabled = "disabled"; 
  closePopup(addCardPopup); 
}
 
openProfileInfoPopupButton.addEventListener('click', () => { 
  nameField.value = nameComponent.textContent;  
  jobField.value = jobComponent.textContent;
  openPopup(profileInfoPopup) 
}); 
closeProfileInfoPopupButton.addEventListener('click', () => {closePopup(profileInfoPopup)}); 
profileFormElement.addEventListener('submit', profileFormSubmitHandler); 
 
openAddCardPopupButton.addEventListener('click', () => {
  openPopup(addCardPopup); 
}); 
 
closeAddCardPopupButton.addEventListener('click', () => { 
  closePopup(addCardPopup); 
}); 
 
closeImageButton.addEventListener('click', () => { 
  closePopup(imagePopup) 
}) 
 
addCardFormElement.addEventListener('submit', addCardFormSubmitHandler);  
 
profileInfoPopup.addEventListener('click', (event) => { 
  if (event.target.getAttribute("class") === "popup popup_type_profile popup_opened") { 
    closePopup(profileInfoPopup); 
  }; 
}); 
addCardPopup.addEventListener('click', (event) => { 
  if (event.target.getAttribute("class") === "popup popup_type_add-card popup_opened") { 
    closePopup(addCardPopup); 
  }; 
}); 
imagePopup.addEventListener('click', (event) => { 
  if (event.target.getAttribute("class") === "popup popup_type_open-cards popup_opened") { 
    closePopup(imagePopup); 
  }; 
}); 
