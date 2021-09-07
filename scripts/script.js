const profileInfoPopup = document.querySelector('.popup_type_profile');
const openProfileInfoPopupButton = document.querySelector('.profile__edit-button');
const nameComponent = document.querySelector('.profile__title');
const nameField = document.getElementById('input_name');
const jobComponent = document.querySelector('.profile__subtitle');
const jobField = document.getElementById('input_job');
const closeProfileInfoPopupButton = document.querySelector('.popup__icon_profile');
const profileFormElement = document.querySelector('.popup__form_profile');

const addCardPopup = document.querySelector('.popup_type_add-card'); 
const openAddCardPopupButton = document.querySelector('.profile__add-button');
const closeAddCardPopupButton = document.querySelector('.popup__icon_add-card');
const imageField = document.getElementById('input_card_name');
const linkField = document.getElementById('input_link');
const addCardFormElement = document.querySelector('.popup__form_add-card');
const cardsElement = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template').content;

const imagePopup = document.querySelector('.popup_type_open-cards');
const popupImage = imagePopup.querySelector('.popup__image')
const imageCaption = imagePopup.querySelector('.popup__figcaption');
const closeImageButton = document.querySelector('.popup__icon_open-cards');

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

function openPopup (popup) {
  popup.classList.add('popup_opened');
};

function closePopup (popup) {
  popup.classList.remove('popup_opened');
};

function profileFormSubmitHandler (evt) {
  evt.preventDefault();
  let newName = nameField.value;
  nameComponent.textContent = newName;
  let newJob = jobField.value;
  jobComponent.textContent = newJob;
  closePopup(profileInfoPopup);
}

function handleLikeClick (evt) {
  evt.target.classList.toggle('card__like_active');
}

function handleDeleteClick (evt) {
  evt.target.closest(".card").remove()
}

function addCard (card) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const elementImage = cardElement.querySelector('.card__image');
  elementImage.src = card.link;
  elementImage.alt = card.name;
  cardElement.querySelector('.card__text').textContent = card.name;

  cardElement.querySelector('.card__button').addEventListener('click', handleDeleteClick);

  cardElement.querySelector('.card__like').addEventListener('click', handleLikeClick)

  elementImage.addEventListener('click', () => {
    popupImage.src = card.link;
    popupImage.alt = card.name;
    imageCaption.textContent = card.name;
    openPopup(imagePopup)
  })

  cardsElement.prepend(cardElement);
};

function addCardFormSubmitHandler (evt) {
  evt.preventDefault();
  addCard(
    {
      name: imageField.value,
      link: linkField.value
    }
  )
  imageField.value = "";
  linkField.value = "";
  closePopup(addCardPopup);
}



initialCards.forEach((card) => {
  addCard(card)
})

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
