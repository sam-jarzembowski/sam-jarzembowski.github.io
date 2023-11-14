const newBtn = document.querySelector('#js-new-quote'). addEventListener('click', getQuote);

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

async function getQuote() {
    console.log('Test');

    // try to run this code first
    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusTest);
        }
        const json = await response.json();
        console.log(json);
    }

    // runs if an error occurs above
    catch(err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}