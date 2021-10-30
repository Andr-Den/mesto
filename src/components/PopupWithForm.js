import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._form = this._popup.querySelector('.popup__form')
  }

  _getInputValues() {
    this._formValues = {};
    const inputList = this._form.querySelectorAll('.popup__input')
    if (inputList) {
      inputList.forEach(input => this._formValues[input.name] = input.value);

      return this._formValues;
    }
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', () => {this._formSubmit(this._getInputValues())})
  }

  close() {
    super.close()
    this._form.reset()
  }
}
