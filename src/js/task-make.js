const url = 'https://harry-potter-test-preparation-backend.onrender.com/';
const condition = document.querySelector('.condition');
const conteiner = document.querySelector('.all-in-auestion')
const optionsContainer = document.querySelector('.question-elements');
import { renderWithMathJax } from './task/render';
import { taskType } from './task/task_type';

export function GetTask() {
  let taskId = localStorage.getItem('taskId');
  let accessToken = localStorage.getItem('token');

  return fetch(`${url}topic/task/${taskId}`, {
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
      condition.innerHTML = `${data.condition}`;
      if(data.captionPicture){
        const pic = document.createElement('img')
        pic.setAttribute('src', data.captionPicture)
        pic.classList.add('task-picture')
        conteiner.appendChild(pic)
      }
      localStorage.setItem('condition',data.condition )
      console.log(data)
      taskType(data);
      renderWithMathJax(condition); 
      return data;
    })
    .catch(error => {
      console.error('Error fetching task details:', error);
    });
}
