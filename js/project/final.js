let displayed_number = document.getElementById('#js-number');
const displayed_prompt = document.getElementById('#js-question');
let inputted_number = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'];
let order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let temp_num = 0;
var i = 0;

const clearbtn = document.getElementById('#js-clear').addEventListener("click", clearInput);
const submitbtn = document.getElementById('#js-submit').addEventListener("click", submit);

const btn1 = document.getElementById('#js-btn1');
btn1.addEventListener("click", () => addInput(1));
const btn2 = document.getElementById('#js-btn2');
btn2.addEventListener("click", () => addInput(2));
const btn3 = document.getElementById('#js-btn3');
btn3.addEventListener("click", () => addInput(3));
const btn4 = document.getElementById('#js-btn4');
btn4.addEventListener("click", () => addInput(4));
const btn5 = document.getElementById('#js-btn5');
btn5.addEventListener("click", () => addInput(5));
const btn6 = document.getElementById('#js-btn6');
btn6.addEventListener("click", () => addInput(6));
const btn7 = document.getElementById('#js-btn7');
btn7.addEventListener("click", () => addInput(7));
const btn8 = document.getElementById('#js-btn8');
btn8.addEventListener("click", () => addInput(8));
const btn9 = document.getElementById('#js-btn9');
btn9.addEventListener("click", () => addInput(9));
const btn0 = document.getElementById('#js-btn0');
btn0.addEventListener("click", () => addInput(0));

let prompt_array = ['What is the 1st digit of your phone number?', 'What is the 2nd digit of your phone number?', 'What is the 3rd digit of your phone number?', 'What is the 4th digit of your phone number?', 'What is the 5th digit of your phone number?', 'What is the 6th digit of your phone number?', 'What is the 7th digit of your phone number?', 'What is the 8th digit of your phone number?', 'What is the 9th digit of your phone number?', 'What is the 10th digit of your phone number?'];

// function: shuffle the order to ask
// thank you stack overflow for helping me with a shuffle algorithm
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
async function shuffleOrder(order) {
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
async function updateNumber(inputted_number, digit, position) {
    inputted_number[position] = `${digit}`;
}

// function: process a number button press
async function addInput(num) {

    // update and display with inputted number
    updateNumber(inputted_number, num, order[i]);
    displayNumber(inputted_number, displayed_number);

    // display prompt and increment i
    if (i < 9) {
        i++;
        displayPrompt(prompt_array[order[i]]);
    }

    // hide prompt when done
    else {
        displayPrompt("");
    }
}

// function: display current number on screen
async function displayNumber(inputted_number, displayed_number) {
    displayed_number.textContent = (inputted_number[0] + inputted_number[1] + inputted_number[2] + "-" + inputted_number[3] + inputted_number[4] + inputted_number[5] + "-" + inputted_number[6] + inputted_number[7] + inputted_number[8] + inputted_number[9]);
}


// function: display the given prompt
async function displayPrompt(string) {
    displayed_prompt.textContent = string;
}

// function: submit
async function submit() {

    // ensure that full phone number has been entered
    if (i === 9) {

        // alert 
        alert("Thank you! A representative will call you shortly.");

        // clear
        clearInput();
    }

    else {
        alert("Error: Not a valid phone number");
    }
}

// function: clear
async function clearInput() {

    // reset
    i = 0;
    inputted_number = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'];

    // begin prompt sequence
    shuffleOrder(order);
    displayNumber(inputted_number, displayed_number);
    displayPrompt(prompt_array[order[i]]);

}
  

// reset upon start
clearInput();