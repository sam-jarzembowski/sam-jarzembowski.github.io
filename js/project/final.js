// idea: have it ask for the digits individually in a randomized order
// after submission, say "Thank you! A representative will give you a call shortly"

let displayed_number = document.getElementById("#js-number");
const displayed_prompt = document.getElementById('#js-question');
let inputted_number = [];
let order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let temp_num = 0;

const clearbtn = document.getElementById("#js-clear");
clearbtn.addEventListener('click', clearInput());

const btn1 = document.getElementById("#js-btn1").addEventListener('click', addInput(1));
const btn2 = document.getElementById("#js-btn2").addEventListener('click', addInput(2));
const btn3 = document.getElementById("#js-btn3").addEventListener('click', addInput(3));
const btn4 = document.getElementById("#js-btn4").addEventListener('click', addInput(4));
const btn5 = document.getElementById("#js-btn5").addEventListener('click', addInput(5));
const btn6 = document.getElementById("#js-btn6").addEventListener('click', addInput(6));
const btn7 = document.getElementById("#js-btn7").addEventListener('click', addInput(7));
const btn8 = document.getElementById("#js-btn8").addEventListener('click', addInput(8));
const btn9 = document.getElementById("#js-btn9").addEventListener('click', addInput(9));
const btn0 = document.getElementById("#js-btn0").addEventListener('click', addInput(0));


//
let prompt_array = ['What is the 1st digit of your phone number?', 'What is the 2nd digit of your phone number?', 'What is the 3rd digit of your phone number?', 'What is the 4th digit of your phone number?', 'What is the 5th digit of your phone number?', 'What is the 6th digit of your phone number?', 'What is the 7th digit of your phone number?', 'What is the 8th digit of your phone number?', 'What is the 9th digit of your phone number?', 'What is the 10th digit of your phone number?'];

// function: shuffle the order to ask
// thank you stack overflow for helping me with a shuffle algorithm
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleOrder(order) {
    let currentIndex = order.length,  randomIndex;
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [order[currentIndex], order[randomIndex]] = [order[randomIndex], order[currentIndex]];
      }
    
      return order;
}

// function: update stored digits based on user input
function updateNumber(inputted_number, digit, position) {
    inputted_number[position] = digit;
}

// function: update temp_num to inputted digit
function addInput(num) {
    temp_num = num;
    console.log(temp_num);
}

// function: display current number on screen
function displayNumber(inputted_number, displayed_number) {
    displayed_number.textContent = (inputted_number[0] + inputted_number[1] + inputted_number[2] + "-" + inputted_number[3] + inputted_number[4] + inputted_number[5] + "-" + inputted_number[6] + inputted_number[7] + inputted_number[8] + inputted_number[9]);
}


// function: display the given prompt
function displayPrompt(string) {
    displayed_prompt.textContent = string;
}

// clear function
async function clearInput() {
    console.log("Clear");

}


async function myAsyncFunction() {
    try {
      let result = await myPromise;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  



// shuffle order
shuffleOrder(order);

// iterate through full phone number
for (let i = 0; i < 9; i++) {

    displayPrompt(prompt_array[i]);
    console.log(temp_num);
    updateNumber(inputted_number, temp_num, i);
    displayNumber(inputted_number, displayed_number);

}






/*
// testing
console.log(shuffleOrder(order));
displayPrompt(prompt_array[1]);
console.log(inputted_number);
updateNumber(inputted_number, 2, 0);
console.log(inputted_number);
displayNumber(inputted_number, displayed_number);
*/


