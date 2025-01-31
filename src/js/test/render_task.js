const optionsContainer = document.querySelector('.question-elements');
const condition = document.querySelector('.condition');
const test_cont = document.querySelector('.test_cont')
const container = document.querySelector('.all-in-auestion')
import { taskType } from "../task/task_type";
import { changeTask } from "./test_load";
import { renderWithMathJax } from "../task/render";
export function renderTask(data, index) {
    optionsContainer.innerHTML = '';  
    const task = data[index]; 
    localStorage.setItem('taskId', task._id)

    condition.innerHTML = task.condition;   
    const existingPic = container.querySelector('.task-picture');
    if (existingPic) {
        existingPic.remove();
    }
    if (task.captionPicture) {
        const pic = document.createElement('img');
        pic.setAttribute('src', task.captionPicture);
        pic.classList.add('task-picture');
        container.appendChild(pic);
    }

    renderWithMathJax(condition);
    taskType(task);
    const existingNavContainer = test_cont.querySelector('.nav-buttons');
    if (existingNavContainer) {
        test_cont.removeChild(existingNavContainer);
    }
    const navContainer = document.createElement('div');
    navContainer.classList.add('nav-buttons');

    data.forEach((item, i) => {
        const nav_btn = document.createElement('button');
        nav_btn.classList.add('nav-button_test');
        nav_btn.setAttribute('index', i);
        navContainer.appendChild(nav_btn);
        if (i === index) {
            nav_btn.classList.add('active');
        }
        nav_btn.addEventListener('click', () => {
            const allNavButtons = navContainer.querySelectorAll('.nav-button_test');
            allNavButtons.forEach(button => button.classList.remove('active'));
            nav_btn.classList.add('active');
            changeTask(i);
        });
    });

    test_cont.appendChild(navContainer);
}
