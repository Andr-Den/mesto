let profileInfoPopup = document.querySelector('.popup_type_profile');
let openProfileInfoPopupButton = document.querySelector('.profile__edit-button');

let nameComponent = document.querySelector('.profile__title');
let nameField = document.getElementById('input_name');

let jobComponent = document.querySelector('.profile__subtitle');
let jobField = document.getElementById('input_job');

function openPopup (popup) {
  popup.classList.add('popup_opened');
};

openProfileInfoPopupButton.addEventListener('click', () => {
  nameField.value = nameComponent.textContent; 
  jobField.value = jobComponent.textContent;
  openPopup(profileInfoPopup)
});

let closeProfileInfoPopupButton = document.querySelector('.popup__icon_profile');
function closePopup (popup) {
  popup.classList.remove('popup_opened');
};
closeProfileInfoPopupButton.addEventListener('click', () => {closePopup(profileInfoPopup)});

let profileFormElement = document.querySelector('.popup__form_profile');
function profileFormSubmitHandler (evt) {
  evt.preventDefault();
  let newName = nameField.value;
  nameComponent.textContent = newName;
  let newJob = jobField.value;
  jobComponent.textContent = newJob;
  closePopup(profileInfoPopup);
}
profileFormElement.addEventListener('submit', profileFormSubmitHandler);

let addCardPopup = document.querySelector('.popup_type_add-card'); 
let openAddCardPopupButton = document.querySelector('.profile__add-button');
let closeAddCardPopupButton = document.querySelector('.popup__icon_add-card');
let imageField = document.getElementById('input_card_name');
let linkField = document.getElementById('input_link');

openAddCardPopupButton.addEventListener('click', () => {
  imageField.value = "";
  linkField.value = "";
  openPopup(addCardPopup);
});

closeAddCardPopupButton.addEventListener('click', () => {
  closePopup(addCardPopup);
});

let imagePopup = document.querySelector('.popup_type_open-cards');
let closeImageButton = document.querySelector('.popup__icon_open-cards');

closeImageButton.addEventListener('click', () => {
  closePopup(imagePopup)
})

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

const cardsElement = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template').content;

const addCard = (card, id) => {
  const cardElement = cardTemplate.querySelector('.elements__element').cloneNode(true);
  cardElement.querySelector('.elements__image').src = card.link;
  cardElement.querySelector('.elements__image').alt = card.name;
  cardElement.querySelector('.elements__text').textContent = card.name;
  cardElement.setAttribute("id", `card_${id}`)

  cardsElement.prepend(cardElement);
};

function rerender () {
  const cards = document.querySelectorAll('.elements__element');
  
  for (let i = 0; i < cards.length; i++) {
    cards[i].remove();
  } 
  initialCards.forEach((card, i) => {
    addCard(card, i)
  })
  for (let i = 0; i < initialCards.length; i++) {
    document.getElementById(`card_${i}`).querySelector('.elements__button').addEventListener('click', () => deleteCardHandler(i));
    document.getElementById(`card_${i}`).querySelector('.elements__like').addEventListener('click', function (evt) {
      evt.target.classList.toggle('elements__like_active');
    })
    document.getElementById(`card_${i}`).querySelector('.elements__image').addEventListener('click', () => {
      imagePopup.querySelector('.popup__image').src = initialCards[i].link;
      imagePopup.querySelector('.popup__image').alt = initialCards[i].name;
      imagePopup.querySelector('.popup__figcaption').textContent = initialCards[i].name;
      openPopup(imagePopup)
    })
  }
}
rerender()

let addCardFormElement = document.querySelector('.popup__form_add-card');
function addCardFormSubmitHandler (evt) {
  evt.preventDefault();
  initialCards.push({
    name: imageField.value,
    link: linkField.value
  })
  rerender()
  closePopup(addCardPopup);
}
addCardFormElement.addEventListener('submit', addCardFormSubmitHandler);

let deleteCardButton = document.querySelector('.elements__button');
function deleteCardHandler (id) {
  initialCards.splice(id, 1);
  rerender();
}
