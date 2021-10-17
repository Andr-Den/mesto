import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  open(link, name) {
    const popupImage = this._popup.querySelector('.popup__image') 
    const imageCaption = this._popup.querySelector('.popup__figcaption');
    popupImage.src = link; 
    popupImage.alt = name; 
    imageCaption.textContent = name;
    document.addEventListener('keydown', this._handleEscClose.bind(this));
    this._popup.classList.add('popup_opened');
  }
}
