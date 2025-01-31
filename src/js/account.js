const url = 'https://harry-potter-test-preparation-backend.onrender.com/';
import { changeacc } from './changetorigistrated';
import { logout } from './logout';
const progressBar = document.querySelector('.user_progress-value');
const user_ava = document.querySelector('.user_avatar');
const user_name = document.querySelector('.user_name');
const user_mail = document.querySelector('.user_mail');
const logout_btn = document.querySelector('.logout-btn');
logout_btn.addEventListener('click', () => {
  logout();
});
function account() {
  let accessToken = localStorage.getItem('token');
  console.log(accessToken);
  fetch(`${url}auth/getInfo`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + accessToken,
      'ngrok-skip-browser-warning': '69420',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      progressBar.style.width = `${data.user.progress * 100}%`;
      user_ava.setAttribute('src', data.user.avatar);
      user_name.innerHTML = `${data.user.lastName} ${data.user.firstName}`;
      user_mail.innerHTML = `${data.user.email}`;
    })
    .catch(error => {
      alert('Помилка авторизації');
      console.error('Помилка авторизації:', error);
      localStorage.setItem('account_status', false);
      changeacc();
      window.location.href = 'index.html';
    });
}
window.addEventListener('load', () => {
  account();
  changeacc();
});
