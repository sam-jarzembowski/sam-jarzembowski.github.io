const newBtn = document.querySelector('#js-new-quote'). addEventListener('click', getQuote);
const ansBtn = document.querySelector('#js-tweet'). addEventListener('click', displayAnswer);

const questionText = document.querySelector('#js-quote-text');
let answerText = document.querySelector('#js-answer-text');

let answer = "";

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote() {

    // try to run this code first
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusTest);
        }
        const json = await response.json();
        displayQuote(json.question);
        answer = json['answer'];
        answerText.textContent = '';
    }

    // runs if an error occurs above
    catch(err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(question) {
    questionText.textContent = question;

}

async function displayAnswer() {
    answerText.textContent = answer;
}

// run function when page loads
getQuote();