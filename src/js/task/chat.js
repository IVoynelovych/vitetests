const url = 'https://harry-potter-test-preparation-backend.onrender.com/';
const messages_list = document.querySelector('.messages-list') 
export function openchat() {
  let accessToken = localStorage.getItem('token');
  
  fetch(`${url}ai-chat/`, {
    method: 'GET',
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
      console.log('Результат:', data);
      data.messages.forEach(messages => {
        const message = document.createElement("li")
        if(messages.role == 'assistant'){
            message.classList.add('chat-answer')            
        }
        else if(messages.role == 'user'){
            message.classList.add('user-messege')
        }
        message.innerHTML = messages.content 
        messages_list.append(message)
      });
    })
    .catch(error => {
      alert('Помилка');
      console.error('Помилка :', error);
    });
}
