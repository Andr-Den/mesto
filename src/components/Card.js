import { api, userInfo } from '../pages/index.js'
class Card {
  constructor(link, name, templateClass, handlePopupClick, likes, id, owner, openDeleteCardPopup, myId, likeCallback, dislikeCallback) {
    this._link = link;
    this._name = name;
    this._templateClass = templateClass;
    this._handlePopupClick = handlePopupClick;
    this._likes = likes;
    this._id = id;
    this._owner = owner;
    this._openDeleteCardPopup = openDeleteCardPopup
    this._myId = myId
    this._likeCallback = likeCallback
    this._dislikeCallback = dislikeCallback
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
      if (this._likes[i]._id == this._myId) {
        likedCard = true;
      }
    }
    return likedCard
  }

  _handleLikeClick (evt) {
    this._likeCallback(this._id)
      .then((result) => {
        evt.target.classList.add('card__like_active');
        this._likes = result.likes
        this._likeAmount.textContent = result.likes.length
      })
      .catch((err) => {
        console.log(err);
      });
  }

  _handleDislikeClick (evt) {
    this._dislikeCallback(this._id)
      .then((result) => {
        evt.target.classList.remove('card__like_active');
        this._likes = result.likes
        this._likeAmount.textContent = result.likes.length
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  _handleDeleteClick () {
    this._openDeleteCardPopup(this._id)
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.card__image')
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector('.card__text').textContent = this._name;
    this._likeAmount = this._element.querySelector('.card__like-amount')
    this._likeAmount.textContent = this._likes.length;
    this._likeButton = this._element.querySelector('.card__like')
    this._deleteButton  = this._element.querySelector('.card__button')
    this._element.id = this._id
    this._setEventListeners();
    if (this._likedCard()) {
      this._likeButton.classList.add('card__like_active')
    }

    if (!this._isMyCard()) {
      this._deleteButton.remove()
    }

    return this._element;
  }

  _isMyCard() {
    return this._owner._id == this._myId
  }

  _setEventListeners() {
    this._deleteButton.addEventListener('click', () => {this._handleDeleteClick()}); 
    this._likeButton.addEventListener('click', this._handleToggleLikeClick.bind(this));
    this._cardImage.addEventListener('click', () => {
      this._handlePopupClick()
    });
  }
}

export default Card
