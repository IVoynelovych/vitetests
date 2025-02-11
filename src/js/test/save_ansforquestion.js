export function finishTestTask() {
    let type = localStorage.getItem('type');
    let taskId = localStorage.getItem('taskId');
    let newAnswer = null;  

    switch (type) {
        case 'options':
            newAnswer = {
                selectedOptionId: localStorage.getItem('selectedOption'),
                _id: taskId,
                type: type,
            };
            break;

        case 'input':
            const input = document.querySelector('.question-input');
            if (!input) return;
            newAnswer = {
                answer: input.value.trim(),
                _id: taskId,
                type: type,
            };
            break;

        case 'match':
            let answers = localStorage.getItem('answers');
            if (!answers) return;
            newAnswer = {
                answer: JSON.parse(answers), 
                _id: taskId,
                type: type,
            };
            break;
        
        default:
            console.error('Unknown task type:', type);
            return;
    }

    let storedAnswers = JSON.parse(localStorage.getItem('userTestAnswers')) || [];
    let existingIndex = storedAnswers.findIndex(answer => answer._id === taskId);
    
    if (existingIndex !== -1) {
        storedAnswers[existingIndex] = newAnswer;
    } else {
        storedAnswers.push(newAnswer);
    }

    localStorage.setItem('userTestAnswers', JSON.stringify(storedAnswers));
    let nav_btn = document.querySelector(`.nav-button_test[index="${storedAnswers.length - 1}"]`);
    if (nav_btn) {
        nav_btn.classList.add('completed');
    }
}
