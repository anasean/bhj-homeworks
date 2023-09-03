
function fetchPollData() {
    return fetch('https://students.netoservices.ru/nestjs-backend/poll')
        .then(response => response.json());
}


function updatePoll(pollData) {
    const pollTitleElement = document.getElementById('poll__title');
    const pollAnswersElement = document.getElementById('poll__answers');

    pollTitleElement.textContent = pollData.data.title;

    pollAnswersElement.innerHTML = ''; // Очистить список ответов

    pollData.data.answers.forEach(answer => {
        const answerButton = document.createElement('button');
        answerButton.className = 'poll__answer';
        answerButton.textContent = answer;
        answerButton.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
        });
        pollAnswersElement.appendChild(answerButton);
    });
}


fetchPollData()
    .then(pollData => {
        updatePoll(pollData);
    })
    .catch(error => {
        console.error('Ошибка', error);
    });
