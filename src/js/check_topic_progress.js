const url = 'https://harry-potter-test-preparation-backend.onrender.com/';
export function Topic_progress(topicId) {
    let accessToken = localStorage.getItem('token');
    return fetch(`${url}progress/topic/${topicId}`, {
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
        localStorage.setItem('completedTasks', data.completedTasks)
        return
        }
      )
      .catch(error => {
        console.error('Помилка при отриманні прогресу :', error);
        return 0;
      });
  }