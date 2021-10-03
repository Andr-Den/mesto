import { openPopup, imagePopup, popupImage, imageCaption } from './utils.js'

class Card {
  constructor(link, name, templateClass) {
    this._link = link;
    this._name = name;
    this._templateClass = templateClass;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateClass)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }
  _handleLikeClick (evt) { 
    evt.target.classList.toggle('card__like_active'); 
  } 
  
  _handleDeleteClick (element) {
    element.remove()
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
    const CardImage = this._element.querySelector('.card__image')
    CardImage.src = this._link;
    CardImage.alt = this._name;
    this._element.querySelector('.card__text').textContent = this._name;
    this._element.querySelector('.card__button').addEventListener('click', () => {this._handleDeleteClick(this._element)}); 
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
