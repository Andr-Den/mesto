let popup = document.querySelector('.popup');
let openPopupButton = document.querySelector('.profile__edit-button');

let nameComponent = document.querySelector('.profile__title');
let nameText = nameComponent.textContent;
let nameField = document.getElementById('input_name');

let jobComponent = document.querySelector('.profile__subtitle');
let jobText = jobComponent.textContent;
let jobField = document.getElementById('input_job');

function openPopup () {
  nameField.textContent = nameText; 
  jobField.textContent = jobText;
  popup.classList.add('popup_opened');
};
openPopupButton.addEventListener('click', openPopup);

let closePopupButton = document.querySelector('.popup__icon');
function closePopup () {
  popup.classList.remove('popup_opened');
};
closePopupButton.addEventListener('click', closePopup);

let formElement = document.querySelector('.popup__form');
function formSubmitHandler (evt) {
  evt.preventDefault();
  let newName = nameField.value;
  nameComponent.textContent = newName;
  let newJob = jobField.value;
  jobComponent.textContent = newJob;
  closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);
