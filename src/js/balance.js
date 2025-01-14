export function updateFormHandler() {
    submit_form.removeEventListener('click', login);
    submit_form.removeEventListener('click', registration);
    if (isReg) {
      submit_form.addEventListener('click', () => registration());
    } else {
      submit_form.addEventListener('click', () => login());
    }
  }