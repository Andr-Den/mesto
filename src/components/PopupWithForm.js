import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._form = document.querySelector(popupSelector).querySelector('.popup__form')
  }

  _getInputValues() {
    return Array.from(this._form.querySelectorAll('.popup__input'))
  }

  setEventListeners() {
    this._popup.querySelector('.popup__icon').addEventListener('click', this.close.bind(this)); 
    this._popup.addEventListener('click', (event) => { 
      if (event.target.getAttribute("class").includes("popup_opened")) { 
        this.close(); 
      }; 
    });
    this._form.addEventListener('submit', this._formSubmit)
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.classList.remove('popup_opened');
    this._getInputValues().forEach(input => {
      input.value = ''
    });
  }
}
