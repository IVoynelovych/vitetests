const url = 'https://harry-potter-test-preparation-backend.onrender.com/';
const messages_list = document.querySelector('.messages-list')
export function delete_chat() {
    let accessToken = localStorage.getItem('token');
    fetch(`${url}ai-chat/`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + accessToken,
        'ngrok-skip-browser-warning': '69420',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        localStorage.setItem('isChatExist', false)
        messages_list.innerHTML = ''
      })
      .catch(error => {
        alert('Помилка');
        console.error('Помилка :', error);
      });
  }