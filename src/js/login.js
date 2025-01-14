import { changeacc } from './changetorigistrated';
const url = 'https://harry-potter-test-preparation-backend.onrender.com/';
const password_input = document.querySelector('.password');
const submit_form = document.querySelector('.reg-sub');
const email_input = document.querySelector('.email');
export function login() {
  const registration_data = {
    email: email_input.value.trim(),
    password: password_input.value.trim(),
  };
  console.log(registration_data);
  fetch(`${url}auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(registration_data),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      localStorage.setItem('account_status', 'true');
      localStorage.setItem('token', data.token);
      console.log('Результат входу:', data);
      changeacc();
      window.location.href = '../account.html';
    })
    .catch(error =>{ 
        alert('Помилка реєстрації')
        console.error('Помилка реєстрації:', error)});
}

export const root_reg = {
  password_input: document.querySelector('.password'),
  submit_form: document.querySelector('.reg-sub'),
  email_input: document.querySelector('.email'),
  account_btn: document.querySelector('.nav-button'),
};
