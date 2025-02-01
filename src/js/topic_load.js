import { showTaskById } from './showtasks';
import { Test_progress } from './test_completed';
import { createLoader } from './loader';
import { renderWithMathJax } from './task/render';
const url = 'https://harry-potter-test-preparation-backend.onrender.com/';
const topicList = document.querySelector('.topics_list');


function createDropdown(topicId) {
  const dropdown = document.createElement('ul');
  dropdown.classList.add('dropdown');
  dropdown.style.display = 'none';
  return dropdown;
}

export async function load_topics() {
  let accessToken = localStorage.getItem('token');

  const loader = createLoader();
  topicList.appendChild(loader);

  try {
    const response = await fetch(`${url}topic/`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + accessToken,
        'ngrok-skip-browser-warning': '69420',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    if (!data.result || data.result.length === 0) {
      console.warn("Немає доступних тем.");
      loader.remove();
      return;
    }
    let listItems = [];

    await Promise.all(
      data.result.map(async (topic, i) => {
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
            if (progress == false || progress == undefined) {
              listItem.style.opacity = '0.5';
              listItem.style.pointerEvents = 'none';
            }
          } catch (error) {
            console.error('Помилка отримання прогресу:', error);
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

        listItems.push({ number: topic.number, element: listItem });
      })
    );

    listItems.sort((a, b) => a.number - b.number);

    loader.remove();
    listItems.forEach(item => topicList.appendChild(item.element));

  } catch (error) {
    loader.remove();
    alert('Помилка завантаження');
    console.error('Помилка завантаження:', error);
  }
}

export const root_topic = {
  url: 'https://harry-potter-test-preparation-backend.onrender.com/',
  topicList: document.querySelector('.topics_list'),
};
