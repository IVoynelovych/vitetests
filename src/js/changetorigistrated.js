export function changeacc() {
    const account_btn = document.querySelector('.nav-button');
    const account_status = localStorage.getItem('account_status') === 'true';
  
    if (account_btn) {
      if (account_status) {
        account_btn.innerHTML = 'Акаунт';
        account_btn.setAttribute('href', './account.html');
      } else {
        account_btn.innerHTML = 'Реєстрація/вхід';
        account_btn.setAttribute('href', './registration.html');
      }
    }
  }
