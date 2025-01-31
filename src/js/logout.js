const url = 'https://harry-potter-test-preparation-backend.onrender.com/';
export function logout() {
    let accessToken = localStorage.getItem('token');
    fetch(`${url}auth/logout`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + accessToken,
        "ngrok-skip-browser-warning": "69420",
        'Content-Type': 'application/json',
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        localStorage.setItem('token', ' ')
        localStorage.setItem('account_status', 'false');
        window.location.href = 'index.html';   
      })
      .catch(error =>{ 
          alert('Помилка виходу')
          console.error('Помилка виходу:', error)});
  }