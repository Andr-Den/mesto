import { openPopup } from './utils.js'

const imagePopup = document.querySelector('.popup_type_open-cards'); 
const popupImage = imagePopup.querySelector('.popup__image') 
const imageCaption = imagePopup.querySelector('.popup__figcaption');

class Card {
  constructor(link, name) {
    this._link = link;
    this._name = name;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector('.card-template')
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }
  _handleLikeClick (evt) { 
    evt.target.classList.toggle('card__like_active'); 
  } 
  
  _handleDeleteClick (evt) { 
    evt.target.closest(".card").remove() 
  }
  _handleOpenPopup() {
    popupImage.src = this._link; 
    popupImage.alt = this._name; 
    imageCaption.textContent = this._name; 
    openPopup(imagePopup)
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__image').alt = this._name;
    this._element.querySelector('.card__text').textContent = this._name;
    this._element.querySelector('.card__button').addEventListener('click', this._handleDeleteClick); 
    this._element.querySelector('.card__like').addEventListener('click', this._handleLikeClick);

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleOpenPopup()
    });
  }
}

export default Card
