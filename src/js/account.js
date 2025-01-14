const url = 'https://harry-potter-test-preparation-backend.onrender.com/';
import { changeacc } from "./changetorigistrated";
const progressBar = document.querySelector('.user_progress-value');
const user_ava = document.querySelector('.user_avatar');
const user_name = document.querySelector('.user_name');
const user_mail = document.querySelector('.user_mail');
let accessToken = localStorage.getItem('token')
function account() {
  fetch(`${url}auth/getInfo`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + accessToken,
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
        console.log(data.user.email)
      progressBar.style.width = `${data.user.progress}%`;
      user_ava.setAttribute('src', data.user.avatar);
      user_name.innerHTML = `${data.user.lastName} ${data.user.firstName}`;
      user_mail.innerHTML = `${data.user.email}`;
    })
    .catch(error => {
      alert('Помилка');
      console.error('Помилка:', error)
      localStorage.setItem('account_status', false)
      changeacc()
      window.location.href = 'index.html';
    });
}
window.addEventListener('load', () => {
    account();
  });
// export const account_root = {
//     progressBar: document.querySelector('.progress-value'),
// }
