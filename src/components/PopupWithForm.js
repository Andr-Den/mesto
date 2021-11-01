import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmit) {
    super(popupSelector);
    this._formSubmit = formSubmit;
    this._form = this._popup.querySelector('.popup__form')
    this._submitButton = this._popup.querySelector('.popup__submit-button')
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList = this._form.querySelectorAll('.popup__input')
    if (this._inputList) {
      this._inputList.forEach(input => this._formValues[input.name] = input.value);

      return this._formValues;
    }
  }

  renderLoading(isLoading, initialText = '') {
    if (isLoading) {
      this._submitButton.value = 'Сохранение...'
    }
    else {
      this._submitButton.value = initialText
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
