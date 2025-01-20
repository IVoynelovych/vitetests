const url = 'https://harry-potter-test-preparation-backend.onrender.com/';
const message_input = document.querySelector('.user-question')
const messages_list = document.querySelector('.messages-list')
export function send_message() {
    let accessToken = localStorage.getItem('token');
    const body = JSON.stringify({ message: message_input.value});
    fetch(`${url}ai-chat/`, {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + accessToken,
        'ngrok-skip-browser-warning': '69420',
        'Content-Type': 'application/json',
      },
      body
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Результат:', data);
        const message = document.createElement("li")
        message.classList.add('user-messege')
        const answer = document.createElement("li") 
        answer.classList.add('chat-answer')  
        message.innerHTML = message_input.value
        answer.innerHTML = data.content
        messages_list.append(message)
        messages_list.append(answer)
        message_input.value = ''
      })
      .catch(error => {
        alert('Помилка');
        console.error('Помилка :', error);
      });
  }