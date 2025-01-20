
export function createMatchTable(data) {
    const table = document.createElement('table');
    table.classList.add('match-table');
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.appendChild(document.createElement('th')); 
    ['А', 'Б', 'В', 'Г', 'Д'].forEach(letter => {
        const th = document.createElement('th');
        th.textContent = letter;
        headerRow.appendChild(th);
    });
  
    thead.appendChild(headerRow);
    table.appendChild(thead);
  
    const tbody = document.createElement('tbody');
    let selectedMatches = []; 
  
    data.conditions.forEach((condition, rowIndex) => {
        const row = document.createElement('tr');
        const numberCell = document.createElement('td');
        numberCell.textContent = rowIndex + 1;
        numberCell.classList.add('match-number-cell');
        row.appendChild(numberCell);
  
        data.answers.forEach((variant, colIndex) => {
            const cell = document.createElement('td');
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question-${rowIndex}`;
            radio.value = colIndex;
            radio.classList.add('match-radio');
  
            if (variant && variant.answer) {
                radio.setAttribute('data-value', variant.key);
            } else {
                radio.setAttribute('data-value', variant);
            }
  
            radio.setAttribute('data-row', rowIndex);
            radio.setAttribute('data-column', colIndex);
            radio.setAttribute('data-question', condition.key); 
            radio.addEventListener('change', (event) => {
                const selectedRow = event.target.getAttribute('data-row');
                const selectedValue = event.target.getAttribute('data-value');
                const questionText = event.target.getAttribute('data-question');
                const selectedAnswer = {
                    condition: questionText,
                    answer: selectedValue
                };
                const existingAnswerIndex = selectedMatches.findIndex(
                    match => match.condition === questionText
                );
  
                if (existingAnswerIndex > -1) {
                    selectedMatches[existingAnswerIndex].answer = selectedValue;
                } else {
                    selectedMatches.push(selectedAnswer);
                }
                localStorage.setItem('answers', JSON.stringify(selectedMatches));
            });
  
            cell.appendChild(radio);
            row.appendChild(cell);
        });
  
        tbody.appendChild(row);
    });
  
    table.appendChild(tbody);
    return table;
  }
  