import '../pages/index.css';

import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'

const profileInfoPopupElement = document.querySelector('.popup_type_profile'); 
const openProfileInfoPopupButton = document.querySelector('.profile__edit-button');
const nameField = document.getElementById('input-name');
const jobField = document.getElementById('input-job'); 
const addCardPopupElement = document.querySelector('.popup_type_add-card');  
const openAddCardPopupButton = document.querySelector('.profile__add-button');
const imageField = document.getElementById('input-card-name'); 
const linkField = document.getElementById('input-link'); 
const addCardFormElement = document.querySelector('.popup__form_add-card'); 
const elementsList = document.querySelector('.elements__list')
const buttonElement = addCardFormElement.querySelector('.popup__submit-button');

const userInfo = new UserInfo(document.querySelector('.profile__title').textContent, document.querySelector('.profile__subtitle').textContent)

const profileInfoPopup = new PopupWithForm('.popup_type_profile', (evt) => { 
  evt.preventDefault(); 
  userInfo.setUserInfo()
  profileInfoPopup.close(); 
});
const addCardPopup = new PopupWithForm('.popup_type_add-card', (evt) => { 
  evt.preventDefault(); 
  const newCard = new Card(linkField.value, imageField.value, '.card-template', () => { imagePopup.open(linkField.value, imageField.value) })
  const cardElement = newCard.generateCard()
  cardList.addItem(cardElement);
  buttonElement.classList.add('popup__submit-button_no-active'); 
  buttonElement.disabled = "disabled"; 
  addCardPopup.close(); 
});
const imagePopup = new PopupWithImage('.popup_type_open-cards');

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

const cardList = new Section (
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item.link, item.name, '.card-template', () => { imagePopup.open(item.link, item.name) })
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    }
  },
  elementsList
);

cardList.renderItems();

const profileValidator = new FormValidator(validationObject, profileInfoPopupElement.querySelector(validationObject.formSelector))
profileValidator.enableValidation()

const addCardValidator = new FormValidator(validationObject, addCardPopupElement.querySelector(validationObject.formSelector))
addCardValidator.enableValidation()
 
openProfileInfoPopupButton.addEventListener('click', () => {
  const userInfoObject = userInfo.getUserInfo();
  nameField.value = userInfoObject.name;  
  jobField.value = userInfoObject.job;
  profileInfoPopup.open()
});
 
openAddCardPopupButton.addEventListener('click', () => {
  addCardPopup.open(); 
});

profileInfoPopup.setEventListeners();
addCardPopup.setEventListeners();
imagePopup.setEventListeners();
