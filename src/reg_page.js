import {registration} from './js/login_registartion';
import {changeto} from './js/registration';
import { changeacc } from './js/changetorigistrated';
import { root_change } from './js/registration';
import { root_reg } from './js/login_registartion';
import {login} from './js/login';
const { change, title, name_prop, change_text, change_btn, isReg, submit_log } =
  root_change;
const { password_input, surname_input, submit_form, email_input } = root_reg;
window.addEventListener('load', () => {
  localStorage.setItem('isReg', !isReg);
  changeto();
});
window.addEventListener('load', () => {
  changeacc();
});
change.addEventListener('click', () => {
  changeto();
});
submit_log.addEventListener("click", ()=>(login()))
submit_form.addEventListener("click", ()=>(registration()))