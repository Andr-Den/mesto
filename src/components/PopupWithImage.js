import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image') 
    this._imageCaption = this._popup.querySelector('.popup__figcaption');
  }
  open(link, name) {
    this._popupImage.src = link; 
    this._popupImage.alt = name; 
    this._imageCaption.textContent = name;
    super.open()
  }
}
