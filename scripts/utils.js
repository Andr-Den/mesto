export function openPopup (popup) { 
  document.addEventListener('keydown', keyHandler); 
  popup.classList.add('popup_opened'); 
};

export function closePopup (popup) { 
  document.removeEventListener('keydown', keyHandler); 
  popup.classList.remove('popup_opened'); 
};

const keyHandler = (evt) => { 
  if (evt.key === 'Escape'){ 
    const popupToClose = document.querySelector('.popup_opened') 
    closePopup(popupToClose) 
  } 
};
