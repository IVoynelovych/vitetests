const url = 'https://harry-potter-test-preparation-backend.onrender.com/';
export function finishTest() {
    const topicId = localStorage.getItem('topic');
    const accessToken = localStorage.getItem('token');
    const storedAnswers = localStorage.getItem('userTestAnswers');
    const answers = JSON.parse(storedAnswers); 
    const requestBody = { userAnswers: answers };
    let body = JSON.stringify(requestBody)
    return fetch(`${url}answers/${topicId}`, {  
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`помилка HTTP: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if(data.score == 0 ){
            alert('Нажаль ви набрали 0 балів повторіть тему і спробуйте ще раз')
            localStorage.setItem('userTestAnswers', JSON.stringify([]));
        }
        else if(data.score == data.possibleScore){
            alert('Вітаємо ви виконали тест ідеально')
            localStorage.setItem('userTestAnswers', JSON.stringify([]));
        }
        else if(data.score < data.possibleScore){
            alert(`Ви пройшли і отримали ${data.score} з ${data.possibleScore}`)
            localStorage.setItem('userTestAnswers', JSON.stringify([]));
        }
        localStorage.setItem('currentTaskIndex', '0')
        window.location.href = '/topics.html'
    })
    .catch(error => {
        console.error("Помилка запиту:", error);
    });
}
