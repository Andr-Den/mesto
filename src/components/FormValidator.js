class FormValidator {
  constructor(object, form) {
    this._object = object;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._object.inputSelector));
    this._submitButton = this._form.querySelector(this._object.submitButtonSelector);
  }
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._object.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._object.errorClass);
  };
  
  _hideInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._object.inputErrorClass);
    errorElement.classList.remove(this._object.errorClass);
    errorElement.textContent = '';
  };
  
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };
  
  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
    
  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._object.inactiveButtonClass);
      this._submitButton.disabled = "disabled";
    } else {
      this._submitButton.classList.remove(this._object.inactiveButtonClass);
      this._submitButton.disabled = "";
    }
  }
  _setEventListeners = () => {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement)
        this._toggleButtonState()
      });
    });
  };

  enableValidation = () => {
    this._form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  };

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });
  }
}

export default FormValidator
