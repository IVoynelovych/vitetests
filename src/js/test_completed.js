const url = 'https://harry-potter-test-preparation-backend.onrender.com/';

export function Test_progress(topicId) {
    let accessToken = localStorage.getItem('token');
    return fetch(`${url}progress/test/${topicId}`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + accessToken,
        'ngrok-skip-browser-warning': '69420',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.status === 404) {
          return 0;
        }
  
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
  
        return response.json();
      })
      .then(data => {
        return data.completed;
        
      })
      .catch(error => {
        console.error('Помилка при отриманні прогресу :', error);
        return 0;
      });
  }
  
