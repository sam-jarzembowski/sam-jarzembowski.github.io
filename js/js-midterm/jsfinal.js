const btnA = document.getElementById("#js-btnA").addEventListener('click', addInput("A"));
const btnB = document.getElementById("#js-btnB").addEventListener('click', addInput);
const btnC = document.getElementById("#js-btnC").addEventListener('click', addInput);
const btnD = document.getElementById("#js-btnD").addEventListener('click', addInput);
const btnE = document.getElementById("#js-btnE").addEventListener('click', addInput);
const btnF = document.getElementById("#js-btnF").addEventListener('click', addInput);
const btnG = document.getElementById("#js-btnG").addEventListener('click', addInput);
const btnH = document.getElementById("#js-btnH").addEventListener('click', addInput);
const btnI = document.getElementById("#js-btnI").addEventListener('click', addInput);
const btnJ = document.getElementById("#js-btnJ").addEventListener('click', addInput);

//let clearBtn = document.getElementById("#js-clear").addEventListener('click', clear);

let enteredNumber = document.getElementById("#js-number");
console.log(enteredNumber);

let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let tempNum = 0;

// function: when button is pressed, add corresponding number 
function addInput(pos) {
    //console.log(typeof enteredNumber);
    console.log(typeof document.getElementById(`#js-btn${pos}`).innerText);
    //enteredNumber.textContent = enteredNumber.textContent + document.getElementById(`#js-btn${pos}`).innerText;

    console.log(document.getElementById(`#js-btn${pos}`).innerText);
}

// function: clear and reset 
const clear = () => {

    // clear input
    enteredNumber.textContent = "";

    // reset numbers


    console.log("Clear");
};


/*

// function: shuffle the number order
// thank you stack overflow for helping me with a shuffle algorithm
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function randomizeNumbers() {
    let currentIndex = numArray.length, randomIndex;
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [numArray[currentIndex], numArray[randomIndex]] = [numArray[randomIndex], numArray[currentIndex]];
      }
    
      return numArray;
}

*/