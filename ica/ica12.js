const newBtn = document.querySelector('#js-new-quote'). addEventListener('click', getQuote);
const ansBtn = document.querySelector('#js-tweet'). addEventListener('click', displayAnswer);

let answer = "";

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote() {

    // clear answer
    displayAnswer("");

    // try to run this code first
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusTest);
        }
        const json = await response.json();
        displayQuote(json.question);
        
        answer = json['answer'];
    }

    // runs if an error occurs above
    catch(err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

function displayQuote(question) {
    const questionText = document.querySelector('#js-quote-text');
    questionText.textContent = question;

}

async function displayAnswer(answer) {
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = answer;
}

// run function when page loads
getQuote();