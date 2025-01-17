import { root_change } from './registration';
import { root_reg } from './login';
import { login } from './login';
import { changeto } from './registration';
import { registration } from './login_registartion';

const { change, title, name_prop, change_text, change_btn, isReg, submit_log } =
  root_change;
const { password_input, surname_input, submit_form, email_input } = root_reg;

submit_log.addEventListener('click', () => login());
submit_form.addEventListener('click', () => registration());
