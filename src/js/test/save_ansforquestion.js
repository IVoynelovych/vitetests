export function finishTestTask() {
    console.log(
        localStorage.getItem('taskId'),
        localStorage.getItem('type'),
        localStorage.getItem('selectedOption')
    );

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
            newAnswer = {
                answer: input.value.trim(),
                _id: taskId,
                type: type,
            };
            break;

        case 'match':
            let answers = localStorage.getItem('answers');
            if (!answers) {
                return;
            }
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

    let storedAnswers = localStorage.getItem('userTestAnswers');
    storedAnswers = storedAnswers ? JSON.parse(storedAnswers) : [];
    let existingIndex = storedAnswers.findIndex(answer => answer._id === taskId);
    
    if (existingIndex !== -1) {
        storedAnswers[existingIndex] = newAnswer;
    } else {
        storedAnswers.push(newAnswer);
    }

    localStorage.setItem('userTestAnswers', JSON.stringify(storedAnswers));

    console.log(storedAnswers);
}
