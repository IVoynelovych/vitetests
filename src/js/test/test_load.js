const url = 'https://harry-potter-test-preparation-backend.onrender.com/';
import { renderTask } from "./render_task";
let taskList
const condition = document.querySelector('.condition');
export function loadtest() {
  let accessToken = localStorage.getItem('token');
  let topicId = localStorage.getItem('topic');
  fetch(`${url}topic/test/${topicId}`, {
      method: 'GET',
      headers: {
          Authorization: 'Bearer ' + accessToken,
          'ngrok-skip-browser-warning': '69420',
          'Content-Type': 'application/json',
      },
  })
  .then(response => response.json())
  .then(data => {
      console.log("Отримані дані:", data);

      if (!Array.isArray(data) || data.length === 0) {
          console.warn("Немає доступних завдань.");
          return;
      }
      taskList = data;
      let savedIndex = Number(localStorage.getItem('currentTaskIndex')) || 0;
      savedIndex = Math.max(0, Math.min(savedIndex, taskList.length - 1));

      renderTask(taskList, savedIndex);
  })
  .catch(error => console.error('Помилка завантаження:', error));
}
export function changeTask(newIndex) {
  if (!taskList.length) {
      console.warn("Дані ще не завантажені.");
      return;
  }
  if (newIndex < 0 || newIndex >= taskList.length) {
      console.warn("Вихід за межі завдань.");
      return;
  }
  localStorage.setItem('currentTaskIndex', newIndex);
  renderTask(taskList, newIndex);
}