const optionsContainer = document.querySelector('.question-elements');
import { renderWithMathJax } from './render';
import { createMatchTable } from './render.table';
export function taskType(data) {
  optionsContainer.innerHTML = '';
  if (data.type === 'options' && data.options.length > 0){
    localStorage.setItem('type', data.type)
    const savedChoice = localStorage.getItem('selectedOption');
    data.options.forEach(option => {
        const containerOption = document.createElement('label');
        containerOption.classList.add('option_cont');
        const optionElement = document.createElement('button');
        const optionCheck = document.createElement('div');
        optionCheck.classList.add('unchoosed');
        optionElement.classList.add('option-button');
        optionElement.textContent = option.name;
        renderWithMathJax(optionElement)
        if (option.name === savedChoice) {
            optionCheck.classList.add('choosen');
        }

        optionElement.addEventListener('click', () => {
            const previouslyChosen = document.querySelector('.choosen');

            if (previouslyChosen === optionCheck) {
                optionCheck.classList.remove('choosen');
                localStorage.removeItem('selectedOption');
                return;
            }

            if (previouslyChosen) {
                previouslyChosen.classList.remove('choosen');
            }
            optionCheck.classList.add('choosen');
            localStorage.setItem('selectedOption', option.key);
        });

        containerOption.append(optionCheck);
        containerOption.append(optionElement);
        optionsContainer.appendChild(containerOption);
    });
}
  else if (data.type === 'input') {
    const inputcont = document.createElement('div');
    const inputquestion = document.createElement('input');
    const help_text = document.createElement('p');
    localStorage.setItem('type', data.type)
    help_text.innerHTML = `${data.caption}`;
    help_text.classList.add('help-text');
    inputquestion.classList.add('question-input');
    inputquestion.placeholder = '...';
    inputcont.appendChild(help_text);
    inputcont.appendChild(inputquestion);
    optionsContainer.appendChild(inputcont)
  } 
  else if (data.type === 'match') {
    localStorage.setItem('type', data.type);

    const questionslist = document.createElement('ul');
    const answerslist = document.createElement('ul');
    const answers = document.createElement('div');
    const question = document.createElement('div');
    const questiontitle = document.createElement('p');
    const answerstitle = document.createElement('p');

    answerstitle.classList.add('match-title');
    questiontitle.classList.add('match-title');

    answerstitle.innerHTML = data.answersCaption;
    questiontitle.innerHTML = data.questionCaption;

    answerslist.classList.add('answer-list');
    questionslist.classList.add('questions-list');

    let selectedMatches = []; 

    data.answers.forEach(variant => {
        const answerItem = document.createElement('li');
        answerItem.setAttribute('key', variant.key);
        answerItem.innerHTML = variant.answer || variant;
        answerItem.classList.add('match-question-item');
        answerItem.dataset.key = variant.key;

        answerItem.addEventListener('click', () => {
            const selectedQuestion = document.querySelector('.selected-question');
            if (selectedQuestion) {
                const questionKey = selectedQuestion.dataset.key;
                const answerKey = variant.key;
                selectedMatches = selectedMatches.filter(match => match.condition !== questionKey);
                selectedMatches.push({ condition: questionKey, answer: answerKey });
                selectedQuestion.classList.remove('selected-question');
                if (selectedMatches.length === 4) {
                    localStorage.setItem('selectedMatch', JSON.stringify({ answer: selectedMatches }));
                }
            }
        });
        renderWithMathJax(answerItem)
        answerslist.appendChild(answerItem);
    });

    data.conditions.forEach(cond => {
        const questionItem = document.createElement('li');
        questionItem.classList.add('match-question-item');
        questionItem.setAttribute('key', cond.key);
        questionItem.dataset.key = cond.key;
        questionItem.innerHTML = ` ${cond.condition}`;

        questionItem.addEventListener('click', () => {
            document
                .querySelectorAll('.match-question-item')
                .forEach(item => item.classList.remove('selected-question'));

            questionItem.classList.add('selected-question');
        });
        renderWithMathJax(questionItem)
        questionslist.appendChild(questionItem);
    });

    question.appendChild(questiontitle);
    question.appendChild(questionslist);
    answers.appendChild(answerstitle);
    answers.appendChild(answerslist);
    optionsContainer.appendChild(question);
    optionsContainer.appendChild(answers);

    const matchTable = createMatchTable(data);
    optionsContainer.appendChild(matchTable);

    console.log(data);
}


}
