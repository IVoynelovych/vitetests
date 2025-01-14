import { changeacc } from './changetorigistrated';
const url = 'https://harry-potter-test-preparation-backend.onrender.com/';
const password_input = document.querySelector('.password');
const surname_input = document.querySelector('.surname');
const submit_form = document.querySelector('.reg-sub');

const email_input = document.querySelector('.email');
export function registration() {
  const [user_surname, user_name] = surname_input.value.trim().split(' ');
  const registration_data = {
    email: email_input.value.trim(),
    firstName: user_name,
    lastName: user_surname,
    password: password_input.value.trim(),
  };
  console.log(registration_data);
  fetch(`${url}auth/signup`, {
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
      localStorage.setItem('token', data.token); 
      console.log('Результат реєстрації:', data);
      localStorage.setItem('account_status', 'true');
      changeacc();
      window.location.href = '../account.html';    
    })
    .catch(error =>{ 
      alert('Помилка реєстрації')
      console.error('Помилка реєстрації:', error)});
    
}

export const root_reg = {
  password_input: document.querySelector('.password'),
  surname_input: document.querySelector('.surname'),
  submit_form: document.querySelector('.reg-sub'),
  email_input: document.querySelector('.email'),
};
