import '../pages/index.css';

import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithDeleteButton from  '../components/PopupWithDeleteButton.js'
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api.js'

import { validationObject } from '../utils/constants.js'

const profileInfoPopupElement = document.querySelector('.popup_type_profile'); 
const openProfileInfoPopupButton = document.querySelector('.profile__edit-button');
const nameField = document.getElementById('input-name');
const jobField = document.getElementById('input-job'); 
const addCardPopupElement = document.querySelector('.popup_type_add-card');  
const openAddCardPopupButton = document.querySelector('.profile__add-button');
const elementsList = document.querySelector('.elements__list');
const openAvatarPopupButton = document.querySelector('.profile__overlay');
const loadingSubmit = document.getElementById('submit-button');
const loadingCreate = document.getElementById('create-button');
const loadingUpdate = document.getElementById('update-button');

function renderLoading(isLoading) {
  if (isLoading) {
    loadingSubmit.value = 'Сохранение...'
    loadingCreate.value = 'Сохранение...'
    loadingUpdate.value = 'Сохранение...'
  }
  else {
    loadingSubmit.value = 'Сохранить'
    loadingCreate.value = 'Создать'
    loadingUpdate.value = 'Сохранить'
  }
};

export const userInfo = new UserInfo({nameSelector: '.profile__title', jobSelector: '.profile__subtitle', avatarSelector: '.profile__avatar'})

const profileInfoPopup = new PopupWithForm('.popup_type_profile', (values) => {
  renderLoading(true);
  api.editUserInfo(values["input-name"], values["input-job"])
    .then((result) => {
      userInfo.setUserInfo(result.name, result.about, result._id, result.avatar)
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false);
      profileInfoPopup.close();
    });
});

const createCard  = (link, name, likes, id, owner) => {
  const card = new Card(link, name, '.card-template', () => { imagePopup.open(link, name) }, likes, id, owner)
  return card.generateCard();
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-29',
  headers: {
    authorization: 'a9ff0c53-5bfa-4560-ac1a-cab5954bddf5',
    'Content-Type': 'application/json'
  }
}); 
const cardList = new Section (
  {
    items: [],
    renderer: (item) => {
      const cardElement = createCard(item.link, item.name, item.likes, item._id, item.owner)
      cardList.addItemAtEnd(cardElement);
    }
  },
  elementsList
);

api.fetchUserInfo()
  .then((result) => {
    userInfo.setUserInfo(result.name, result.about, result._id, result.avatar)
  })
  .catch((err) => {
    console.log(err);
  });

api.getInitialCards()
  .then((result) => {
    result.forEach((item) => {
      const cardElement = createCard(item.link, item.name, item.likes, item._id, item.owner)
      cardList.addItemAtEnd(cardElement);
    })
  })
  .catch((err) => {
    console.log(err);
  });


const addCardPopup = new PopupWithForm('.popup_type_add-card', (values) => {
  renderLoading(true);
  api.createCard(values.input_card_name, values.input_link)
    .then((item) => {
      const cardElement = createCard(item.link, item.name, item.likes, item._id, item.owner)
      cardList.addItem(cardElement);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false);
      addCardPopup.close(); 
    });
});
const imagePopup = new PopupWithImage('.popup_type_open-cards');

const avatarPopup = new PopupWithForm('.popup_type_update-avatar', (values) => {
  renderLoading(true);
  api.editAvatar(values["input-avatar"])
    .then((result) => {
      userInfo.setUserInfo(result.name, result.about, result._id, result.avatar)
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoading(false);
      avatarPopup.close();
    });
  
});

const avatarPopupElement = document.querySelector('.popup_type_update-avatar'); 
const avatarValidator = new FormValidator(validationObject, avatarPopupElement.querySelector(validationObject.formSelector))
avatarValidator.enableValidation()

export const deleteCardPopup = new PopupWithDeleteButton('.popup_type_confirm', (id) => {
  api.deleteCard(id)
    .then(() => {
      document.getElementById(id).remove()
      deleteCardPopup.close()
    })
    .catch((err) => {
      console.log(err);
    });
})
const deleteCardPopupElement = document.querySelector('.popup_type_confirm'); 
const deleteCardValidator = new FormValidator(validationObject, deleteCardPopupElement.querySelector(validationObject.formSelector))
deleteCardValidator.enableValidation()
deleteCardPopup.setEventListeners()

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

openAvatarPopupButton.addEventListener('click', () => {
  avatarPopup.open(); 
});

profileInfoPopup.setEventListeners();
addCardPopup.setEventListeners();
imagePopup.setEventListeners();
avatarPopup.setEventListeners();