(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const t=function(){function t(e,n,r,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._link=e,this._name=n,this._templateClass=r,this._handlePopupClick=o}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateClass).content.querySelector(".card").cloneNode(!0)}},{key:"_handleLikeClick",value:function(e){e.target.classList.toggle("card__like_active")}},{key:"_handleDeleteClick",value:function(e){e.remove()}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this._setEventListeners();var e=this._element.querySelector(".card__image");return e.src=this._link,e.alt=this._name,this._element.querySelector(".card__text").textContent=this._name,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".card__button").addEventListener("click",(function(){e._handleDeleteClick(e._element)})),this._element.querySelector(".card__like").addEventListener("click",this._handleLikeClick),this._element.querySelector(".card__image").addEventListener("click",(function(){e._handlePopupClick()}))}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_showInputError",(function(e,t){var n=o._form.querySelector(".".concat(e.id,"-error"));e.classList.add(o._object.inputErrorClass),n.textContent=t,n.classList.add(o._object.errorClass)})),r(this,"_hideInputError",(function(e){var t=o._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(o._object.inputErrorClass),t.classList.remove(o._object.errorClass),t.textContent=""})),r(this,"_checkInputValidity",(function(e){e.validity.valid?o._hideInputError(e):o._showInputError(e,e.validationMessage)})),r(this,"_hasInvalidInput",(function(){return o._inputList.some((function(e){return!e.validity.valid}))})),r(this,"_toggleButtonState",(function(){o._hasInvalidInput()?(o._submitButton.classList.add(o._object.inactiveButtonClass),o._submitButton.disabled="disabled"):(o._submitButton.classList.remove(o._object.inactiveButtonClass),o._submitButton.disabled="")})),r(this,"_setEventListeners",(function(){o._toggleButtonState(),o._inputList.forEach((function(e){e.addEventListener("input",(function(){o._checkInputValidity(e),o._toggleButtonState()}))}))})),r(this,"enableValidation",(function(){o._form.addEventListener("submit",(function(e){e.preventDefault()})),o._setEventListeners()})),this._object=t,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._object.inputSelector)),this._submitButton=this._form.querySelector(this._object.submitButtonSelector)}var t,o;return t=e,(o=[{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&n(t.prototype,o),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=n}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"addItemAtEnd",value:function(e){this._container.append(e)}},{key:"_clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var e=this;this._clear(),this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&i(t.prototype,n),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popup=document.querySelector(this._popupSelector),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_opened")}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__icon").addEventListener("click",this.close.bind(this)),this._popup.addEventListener("click",(function(t){t.target.getAttribute("class").includes("popup_opened")&&e.close()}))}}])&&c(t.prototype,n),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},f(e,t,n||e)}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function _(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function u(){return l(this,u),i.apply(this,arguments)}return t=u,(n=[{key:"open",value:function(e,t){var n=this._popup.querySelector(".popup__image"),r=this._popup.querySelector(".popup__figcaption");n.src=e,n.alt=t,r.textContent=t,f(y(u.prototype),"open",this).call(this)}}])&&p(t.prototype,n),u}(a);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},b(e,t,n||e)}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function k(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._formSubmit=t,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;b(E(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(){e._formSubmit(e._getInputValues())}))}},{key:"close",value:function(){b(E(u.prototype),"close",this).call(this),this._form.reset()}}])&&v(t.prototype,n),u}(a);function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(t){var n=t.nameSelector,r=t.jobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._jobElement=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,job:this._jobElement.textContent}}},{key:"setUserInfo",value:function(e,t){this._nameElement.textContent=e,this._jobElement.textContent=t}}])&&w(t.prototype,n),e}(),L={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inactiveButtonClass:"popup__submit-button_no-active",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},C=document.querySelector(".popup_type_profile"),O=document.querySelector(".profile__edit-button"),I=document.getElementById("input-name"),q=document.getElementById("input-job"),P=document.querySelector(".popup_type_add-card"),B=document.querySelector(".profile__add-button"),x=document.querySelector(".elements__list"),R=new j({nameSelector:".profile__title",jobSelector:".profile__subtitle"}),T=new S(".popup_type_profile",(function(e){R.setUserInfo(e["input-name"],e["input-job"]),T.close()})),V=function(e,n){return new t(e,n,".card-template",(function(){U.open(e,n)})).generateCard()},D=new u({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=V(e.link,e.name);D.addItemAtEnd(t)}},x),A=new S(".popup_type_add-card",(function(e){var t=V(e.input_link,e.input_card_name);D.addItem(t),A.close()})),U=new h(".popup_type_open-cards");D.renderItems();var M=new o(L,C.querySelector(L.formSelector));M.enableValidation();var z=new o(L,P.querySelector(L.formSelector));z.enableValidation(),O.addEventListener("click",(function(){var e=R.getUserInfo();I.value=e.name,q.value=e.job,M.resetValidation(),T.open()})),B.addEventListener("click",(function(){z.resetValidation(),A.open()})),T.setEventListeners(),A.setEventListeners(),U.setEventListeners()})();