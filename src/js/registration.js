const change = document.querySelector('.change-btn');
const title = document.querySelector('.reg-title');
const name_prop = document.querySelector('.name-label');
const submit_form = document.querySelector('.reg-sub');
const change_text = document.querySelector('.change-text');
const change_btn = document.querySelector('.change-btn');
const submit_log = document.querySelector('.reg-sub_log');

let isReg = localStorage.getItem('isReg') === 'true';
export function changeto() {
  isReg = localStorage.getItem('isReg') === 'true';
  if (isReg) {
    title.innerHTML = 'Вхід до акаунту';
    name_prop.classList.add('hidden');
    submit_form.classList.add('hidden');
    submit_log.classList.remove('hidden');
    change_text.innerHTML = 'Ще не маєте акаунту?';
    change_btn.innerHTML = 'Реєстрація';
    isReg = false;
  } else if (!isReg) {
    title.innerHTML = 'Реєстрація';
    name_prop.classList.remove('hidden');
    change_text.innerHTML = 'вже зареєстровані?';
    change_btn.innerHTML = 'Вхід до акаунту';
    isReg = true;
    submit_form.classList.remove('hidden');
    submit_log.classList.add('hidden');
  }
  localStorage.setItem('isReg', isReg);
}

export const root_change = {
  change: document.querySelector('.change-btn'),
  title: document.querySelector('.reg-title'),
  name_prop: document.querySelector('.name-label'),
  change_text: document.querySelector('.change-text'),
  change_btn: document.querySelector('.change-btn'),
  isReg: localStorage.getItem('isReg') === 'true',
  submit_log:document.querySelector('.reg-sub_log'),
};
