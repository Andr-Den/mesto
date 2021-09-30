class FormValidator {
  constructor(object, form) {
    this._object = object;
    this._form = form;
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
  
  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
    
  _toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.disabled = "disabled";
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.disabled = "";
    }
  }
  _setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement, inputErrorClass, errorClass)
        this._toggleButtonState(inputList, buttonElement, inactiveButtonClass)
      });
    });
  };

  enableValidation = () => {
    this._form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners(
      this._form,
      this._object.inputSelector,
      this._object.submitButtonSelector,
      this._object.inactiveButtonClass,
      this._object.inputErrorClass,
      this._object.errorClass
    );
  };
}

export default FormValidator
