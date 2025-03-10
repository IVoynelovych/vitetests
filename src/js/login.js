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
  if(registration_data.password.length<6){
    alert('Пароль має складатись мінімум з 6 символів')
    return
  }
  fetch(`${url}auth/signin`, {
    method: 'POST',
    headers: {
      "ngrok-skip-browser-warning": "69420",
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
      console.log('Результат входу:', data.token);      
      console.log('Результат входу:', data);
      localStorage.setItem('account_status', 'true');   
      changeacc();
      localStorage.setItem('token', data.token);
      window.location.href = 'account.html';
      
    })
    .catch(error =>{ 
        alert('Помилка входу')
        console.error('Помилка входу:', error)});
}

export const root_reg = {
  password_input: document.querySelector('.password'),
  submit_form: document.querySelector('.reg-sub'),
  email_input: document.querySelector('.email'),
  account_btn: document.querySelector('.nav-button'),
};
