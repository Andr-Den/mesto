class FormValidator {
  constructor(object, form) {
    this._object = object;
    this._form = form;
    this._inputList = Array.from(this._form.querySelectorAll(this._object.inputSelector));
    this._submitButton = this._form.querySelector(this._object.submitButtonSelector);
  }
  _showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };
  
  _hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
  };
  
  _checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
    } else {
      this._hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
  };
  
  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
    
  _toggleButtonState = (inactiveButtonClass) => {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(inactiveButtonClass);
      this._submitButton.disabled = "disabled";
    } else {
      this._submitButton.classList.remove(inactiveButtonClass);
      this._submitButton.disabled = "";
    }
  }
  _setEventListeners = (formElement, inactiveButtonClass, inputErrorClass, errorClass) => {
    this._toggleButtonState(inactiveButtonClass);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement, inputErrorClass, errorClass)
        this._toggleButtonState(inactiveButtonClass)
      });
    });
  };

  enableValidation = () => {
    this._form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners(
      this._form,
      this._object.inactiveButtonClass,
      this._object.inputErrorClass,
      this._object.errorClass
    );
  };
}

export default FormValidator
