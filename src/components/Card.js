class Card {
  constructor(link, name, templateClass, handlePopupClick) {
    this._link = link;
    this._name = name;
    this._templateClass = templateClass;
    this._handlePopupClick = handlePopupClick;
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

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    const cardImage = this._element.querySelector('.card__image')
    cardImage.src = this._link;
    cardImage.alt = this._name;
    this._element.querySelector('.card__text').textContent = this._name;

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.card__button').addEventListener('click', () => {this._handleDeleteClick(this._element)}); 
    this._element.querySelector('.card__like').addEventListener('click', this._handleLikeClick);
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handlePopupClick()
    });
  }
}

export default Card
