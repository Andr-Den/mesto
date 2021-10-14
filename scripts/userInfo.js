export default class UserInfo {
  constructor(name, job) {
    this._name = name
    this._job = job
  }

  getUserInfo() {
    return {
      name: document.querySelector('.profile__title').textContent,
      job: document.querySelector('.profile__subtitle').textContent
    }
  }

  setUserInfo() {
    document.querySelector('.profile__title').textContent = document.getElementById('input-name').value
    document.querySelector('.profile__subtitle').textContent = document.getElementById('input-job').value
  }
}
