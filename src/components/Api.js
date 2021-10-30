class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(this._baseUrl + '/cards', {
      headers: this._headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка загрузки карточек: ${res.status}`);
    });
  }

  fetchUserInfo() {
    return fetch(this._baseUrl + '/users/me', {
      method: 'GET',
      headers: this._headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка загрузки данных: ${res.status}`);
    });
  }

  editUserInfo(name, about) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка отправки данных: ${res.status}`);
    }); 
  }

  editAvatar(avatar) {
    return fetch(this._baseUrl + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка отправки данных: ${res.status}`);
    }); 
  }

  createCard(name, link) {
    return fetch(this._baseUrl + '/cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    }); 
  }

  deleteCard(id) {
    return fetch(this._baseUrl + '/cards/' + id, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    }); 
  }

  likeCard(id) {
    return fetch(this._baseUrl + '/cards/likes/' + id, {
      method: 'PUT',
      headers: this._headers,
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    }); 
  }

  dislikeCard(id) {
    return fetch(this._baseUrl + '/cards/likes/' + id, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    }); 
  }
}

export default Api
