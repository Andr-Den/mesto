import PopupWithForm from "./PopupWithForm.js";

export default class PopupWithDeleteButton extends PopupWithForm {
  open(id) {
    super.open()
    this._id = id
  }

  setEventListeners() {
    this._popup.querySelector('.popup__icon').addEventListener('click', this.close.bind(this)); 
    this._popup.addEventListener('click', (event) => { 
      if (event.target.getAttribute("class").includes("popup_opened")) { 
        this.close(); 
      }; 
    });
    this._form.addEventListener('submit', () => {this._formSubmit(this._id)})
  }
}