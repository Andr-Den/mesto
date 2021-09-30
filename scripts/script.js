import Card from './card.js'
import { openPopup, closePopup } from './utils.js';

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
 
const imagePopup = document.querySelector('.popup_type_open-cards');
const closeImageButton = document.querySelector('.popup__icon_open-cards'); 
 
const closeProfilePopupClick = document.querySelector('.popup_type_profile'); 
const closeAddCardPopupClick = document.querySelector('.popup_type_add-card'); 
const closeImagePopupClick = document.querySelector('.popup_type_open-cards'); 
 
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
 
function profileFormSubmitHandler (evt) { 
  evt.preventDefault(); 
  const newName = nameField.value; 
  nameComponent.textContent = newName; 
  const newJob = jobField.value; 
  jobComponent.textContent = newJob; 
  closePopup(profileInfoPopup); 
}

initialCards.forEach((item) => {
  const card = new Card(item.link, item.name);
  const cardElement = card.generateCard();

  document.querySelector('.elements__list').append(cardElement);
});

function addCardFormSubmitHandler (evt) { 
  evt.preventDefault(); 
  const card = new Card(linkField.value , imageField.value);
  const cardElement = card.generateCard();
  document.querySelector('.elements__list').prepend(cardElement);
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
 
closeProfilePopupClick.addEventListener('click', (event) => { 
  if (event.target.getAttribute("class") === "popup popup_type_profile popup_opened") { 
    closePopup(profileInfoPopup); 
  }; 
}); 
closeAddCardPopupClick.addEventListener('click', (event) => { 
  if (event.target.getAttribute("class") === "popup popup_type_add-card popup_opened") { 
    closePopup(addCardPopup); 
  }; 
}); 
closeImagePopupClick.addEventListener('click', (event) => { 
  if (event.target.getAttribute("class") === "popup popup_type_open-cards popup_opened") { 
    closePopup(imagePopup); 
  }; 
}); 
