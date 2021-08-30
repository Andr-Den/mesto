let popupImage = document.querySelector('.popup-image');
let openPopupImageButton = document.querySelector('.profile__add-button');

function openPopupImage () {
    popupImage.classList.add('popup-image_opened');
};
openPopupImageButton.addEventListener('click', openPopupImage);

let closePopupImageButton = document.querySelector('.popup-image__icon');
function closePopupImage () {
    popupImage.classList.remove('popup-image_opened');
};
closePopupImageButton.addEventListener('click', closePopupImage);