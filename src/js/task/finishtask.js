const url = 'https://harry-potter-test-preparation-backend.onrender.com/';
export function finishTask() {
    console.log(
      localStorage.getItem('taskId'),
      localStorage.getItem('type'),
      localStorage.getItem('selectedOption')
    );
    let accessToken = localStorage.getItem('token');
    let type = localStorage.getItem('type');
    let body;
    switch (type) {
      case 'options':
        body = JSON.stringify({
          selectedOptionId: localStorage.getItem('selectedOption'),
          _id: localStorage.getItem('taskId'),
          type: type,
        });
        break;
  
      case 'input':
        const input = document.querySelector('.question-input');
        body = JSON.stringify({
          answer: input.value.trim(),
          _id: localStorage.getItem('taskId'),
          type: type,
        });
        break;
  
      case 'match':
        let answers = localStorage.getItem('answers');
        if (!answers) {
            return;
        }
        
        answers = JSON.parse(answers);
  
        body = JSON.stringify({
          answer: answers, 
          _id: localStorage.getItem('taskId'),
          type: type,
        });
        break;
  
      default:
        console.error('Unknown task type:', type);
        return;
    }
    return fetch(`${url}answers`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + accessToken,
        'ngrok-skip-browser-warning': '69420',
        'Content-Type': 'application/json',
      },
      body,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if(data.score === data.maxScore || data.taskResults.score === data.maxScore){
          alert(`Вітаємо ви вирішили правильно і отримали ${data.maxScore}`)
          localStorage.setItem('selectedOption', '')
          window.location.href = 'topics.html'
        }
        else{
          alert(`Нажаль ви вирішили не вірно, спробуйте ще раз`)
        }
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  }
  