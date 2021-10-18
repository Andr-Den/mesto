import '../pages/index.css';

import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'

import { initialCards, validationObject } from '../utils/constants.js'

const profileInfoPopupElement = document.querySelector('.popup_type_profile'); 
const openProfileInfoPopupButton = document.querySelector('.profile__edit-button');
const nameField = document.getElementById('input-name');
const jobField = document.getElementById('input-job'); 
const addCardPopupElement = document.querySelector('.popup_type_add-card');  
const openAddCardPopupButton = document.querySelector('.profile__add-button');
const elementsList = document.querySelector('.elements__list')

const userInfo = new UserInfo({nameSelector: '.profile__title', jobSelector: '.profile__subtitle'})

const profileInfoPopup = new PopupWithForm('.popup_type_profile', (values) => {
  userInfo.setUserInfo(values["input-name"], values["input-job"])
  profileInfoPopup.close();
});

const createCard  = (link, name) => {
  const card = new Card(link, name, '.card-template', () => { imagePopup.open(link, name) })
  return card.generateCard();
}

const cardList = new Section (
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item.link, item.name)
      cardList.addItemAtEnd(cardElement);
    }
  },
  elementsList
);

const addCardPopup = new PopupWithForm('.popup_type_add-card', (values) => {
  const cardElement = createCard(values.input_link, values.input_card_name)
  cardList.addItem(cardElement);
  addCardPopup.close(); 
});
const imagePopup = new PopupWithImage('.popup_type_open-cards');

cardList.renderItems();

const profileValidator = new FormValidator(validationObject, profileInfoPopupElement.querySelector(validationObject.formSelector))
profileValidator.enableValidation()

const addCardValidator = new FormValidator(validationObject, addCardPopupElement.querySelector(validationObject.formSelector))
addCardValidator.enableValidation()
 
openProfileInfoPopupButton.addEventListener('click', () => {
  const userInfoObject = userInfo.getUserInfo();
  nameField.value = userInfoObject.name;  
  jobField.value = userInfoObject.job;
  profileValidator.resetValidation()
  profileInfoPopup.open()
});
 
openAddCardPopupButton.addEventListener('click', () => {
  addCardValidator.resetValidation()
  addCardPopup.open(); 
});

profileInfoPopup.setEventListeners();
addCardPopup.setEventListeners();
imagePopup.setEventListeners();
