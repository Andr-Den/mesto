import Popup from "./Popup.js";

export default class PopupWithDeleteButton extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._form = this._popup.querySelector('.popup__form')
  }

  open(id) {
    super.open()
    this._id = id
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', () => {this._formSubmit(this._id)})
  }
}