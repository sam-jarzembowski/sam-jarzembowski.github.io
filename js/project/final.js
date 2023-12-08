// idea: have it ask for the digits individually in a randomized order
// after submission, say "Thank you! A representative will give you a call shortly"

let displayed_number = document.getElementById("#js-number");
const displayed_prompt = document.getElementById('#js-question');
let inputted_number = ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x"];
let order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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
        [order[currentIndex], order[randomIndex]] = [
          order[randomIndex], order[currentIndex]];
      }
    
      return order;
}

// function: grab user input
// thank you tutorial republic (https://www.tutorialrepublic.com/faq/how-to-get-the-value-of-text-input-field-using-javascript.php)
function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("#js-number-input").value;
    return inputVal;
    // Displaying the value
    // alert(inputVal);
}

// function: update stored digits based on user input
function updateNumber(inputted_number, digit, position) {
    inputted_number[position] = digit;
}

// function: display current number on screen
function displayNumber(inputted_number, displayed_number) {
    displayed_number.textContent = (inputted_number[0] + inputted_number[1] + inputted_number[2] + "-" + inputted_number[3] + inputted_number[4] + inputted_number[5] + "-" + inputted_number[6] + inputted_number[7] + inputted_number[8] + inputted_number[9]);
}


// function: display the given prompt
function displayPrompt(string) {
    displayed_prompt.textContent = string;
}




// shuffle order
shuffleOrder(order);

// iterate through full phone number
let i = 0;
while (i <= 9) {

    // ask question
    displayPrompt(prompt_array[order[i]]);

    //
    temp_input = getInputValue();

    //
    updateNumber(inputted_number, temp_input, i);

    // display number
    displayNumber(inputted_number, displayed_number);




    i++;
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


