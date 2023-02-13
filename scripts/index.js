"use strict";

document.addEventListener('DOMContentLoaded', () => {

  let profileTitle = document.querySelector('.profile__title');
  let profileSubtitle = document.querySelector('.profile__subtitle');
  let profileEditButton = document.querySelector('.profile__edit-button');
  let popup = document.querySelector('.popup');
  let popupCloseButton = document.querySelector('.popup__close-button');
  let popupSaveButton = document.querySelector('.popup__save-button');
  let popupInputName = document.querySelector('.popup__input-name');
  let popupInputAbout = document.querySelector('.popup__input-about');

  const openForm = function() {
    popup.classList.add('popup_opened');
    popupInputName.value = profileTitle.textContent;
    popupInputAbout.value = profileSubtitle.textContent;
  };

  const closeForm = function() {
    popup.classList.remove('popup_opened');
  };

  const saveForm = function(event) {
    event.preventDefault();
    profileTitle.textContent = popupInputName.value;
    profileSubtitle.textContent = popupInputAbout.value;
    closeForm();
  }

  profileEditButton.addEventListener('click', openForm);

  popupSaveButton.addEventListener('click', saveForm);

  popupCloseButton.addEventListener('click', closeForm);

});
