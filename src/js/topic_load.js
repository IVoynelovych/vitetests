import { showTaskById } from './showtasks';
import { Test_progress } from './test_completed';

const url = 'https://harry-potter-test-preparation-backend.onrender.com/';
const topicList = document.querySelector('.topics_list');

function createDropdown(topicId) {
  const dropdown = document.createElement('ul');
  dropdown.classList.add('dropdown');
  dropdown.style.display = 'none';
  return dropdown;
}

export function load_topics() {
    let accessToken = localStorage.getItem('token');
    fetch(`${url}topic/`, {
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
      .then(async data => {
        if (!data.result || data.result.length === 0) {
          console.warn("Немає доступних тем.");
          return;
        }
  
        for (let i = 0; i < data.result.length; i++) {
          const topic = data.result[i];
          const listItem = document.createElement('li');
          listItem.textContent = `${topic.number}. ${topic.name}`;
          listItem.setAttribute('topicId', topic._id);
          listItem.classList.add('topics_list_item');
          listItem.style.cursor = 'pointer';
  
          const dropdown = createDropdown(topic._id);
          listItem.appendChild(dropdown);
  
          let isDropdownOpen = false;
          let isLoading = false;

          if (i > 0) {
            let prevTopicId = data.result[i - 1]._id;
            try {
              let progress = await Test_progress(prevTopicId);
              if (progress < 90) {
                listItem.style.opacity = '0.5';
                listItem.style.pointerEvents = 'none';
              }
            } catch (error) {
              
            }
          }
  
          listItem.addEventListener('click', event => {
            event.stopPropagation();
            if (isLoading) return;
  
            if (isDropdownOpen) {
              dropdown.style.display = 'none';
              isDropdownOpen = false;
              document.querySelectorAll('.topics_list_item').forEach(item => {
                item.style.display = 'block';
              });
            } else {
              document.querySelectorAll('.topics_list_item').forEach(item => {
                if (item !== listItem) item.style.display = 'none';
              });
  
              isLoading = true;
              showTaskById(topic._id, dropdown, topic.name)
                .then(() => {
                  dropdown.style.display = 'block';
                  isDropdownOpen = true;
                })
                .catch(error => {
                  console.error('Error fetching task details:', error);
                })
                .finally(() => {
                  isLoading = false;
                });
            }
          });
  
          topicList.appendChild(listItem);
        }
      })
      .catch(error => {
        alert('Помилка завантаження');
        console.error('Помилка завантаження:', error);
      });
  }
  
  
export const root_topic = {
    url: 'https://harry-potter-test-preparation-backend.onrender.com/',
    topicList: document.querySelector('.topics_list'),
  }; 