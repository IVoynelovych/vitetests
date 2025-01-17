const url = 'https://harry-potter-test-preparation-backend.onrender.com/';
const test = document.createElement('li');
test.style.cursor = 'pointer';
export function showTaskById(topicId, dropdown, topicname) {
    let accessToken = localStorage.getItem('token');
  
    return fetch(`${url}topic/tasks/${topicId}`, {
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
        dropdown.innerHTML = '';

        data.forEach(task => {
          const listItem = document.createElement('li');
          listItem.textContent = `${task.condition}`;
          listItem.setAttribute('taskId', task._id);
          listItem.classList.add('task_item');
          listItem.style.cursor = 'pointer';
          dropdown.appendChild(listItem);
        });
        const test = document.createElement('li');
        test.textContent = `Тест з теми ${topicname}`;
        test.setAttribute('topicId', topicId);
        test.classList.add('task_item');
        test.classList.add('disablade')
        test.style.cursor = 'pointer';
        test.style.display = 'block';
        dropdown.appendChild(test);

        dropdown.style.display = 'block';
      })
      .catch(error => {
        console.error('Error fetching task details:', error);
        dropdown.style.display = 'none';
      });
}

  
