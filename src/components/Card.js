import { api, deleteCardPopup, userInfo } from '../pages/index.js'
class Card {
  constructor(link, name, templateClass, handlePopupClick, likes, id, owner) {
    this._link = link;
    this._name = name;
    this._templateClass = templateClass;
    this._handlePopupClick = handlePopupClick;
    this._likes = likes;
    this._id = id;
    this._owner = owner;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateClass)
      .content
      .querySelector('.card')
      .cloneNode(true);

    return cardElement;
  }

  _handleToggleLikeClick (evt) {
    if (this._likedCard()) {
      this._handleDislikeClick (evt)
    }
    else {
      this._handleLikeClick (evt)
    }
  }

  _likedCard () {
    let likedCard = false;
    for(let i = 0; i < this._likes.length; i++) {
      if (this._likes[i]._id == userInfo._id) {
        likedCard = true;
      }
    }
    return likedCard
  }

  _handleLikeClick (evt) {
    evt.target.classList.add('card__like_active');
    api.likeCard(this._id)
      .then((result) => {
        this._likes = result.likes
        this._element.querySelector('.card__like-amount').textContent = result.likes.length
      })
  }

  _handleDislikeClick (evt) {
    evt.target.classList.remove('card__like_active');
    api.dislikeCard(this._id)
      .then((result) => {
        this._likes = result.likes
        this._element.querySelector('.card__like-amount').textContent = result.likes.length
      })
  }
  
  _handleDeleteClick () {
    deleteCardPopup.open(this._id)
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const cardImage = this._element.querySelector('.card__image')
    cardImage.src = this._link;
    cardImage.alt = this._name;
    this._element.querySelector('.card__text').textContent = this._name;
    this._element.querySelector('.card__like-amount').textContent = this._likes.length;
    this._element.id = this._id
    if (this._likedCard()) {
      this._element.querySelector('.card__like').classList.add('card__like_active')
    }

    if (!this._isMyCard()) {
      this._element.querySelector('.card__button').remove()
    }

    return this._element;
  }

  _isMyCard() {
    return this._owner._id == userInfo._id
  }

  _setEventListeners() {
    this._element.querySelector('.card__button').addEventListener('click', () => {this._handleDeleteClick()}); 
    this._element.querySelector('.card__like').addEventListener('click', this._handleToggleLikeClick.bind(this));
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handlePopupClick()
    });
  }
}

export default Card
