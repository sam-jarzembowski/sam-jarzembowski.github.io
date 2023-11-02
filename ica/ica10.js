const over = document.querySelector("over");
over.addEventListener('mouseover', reveal);

function reveal() {
    alert("Hello!");
}

const button = document.querySelector("button1");
button.addEventListener('click', ask);

function ask() {
    let name = prompt("Enter your name:");
    button.textContent = `Hi, ${name}`;
}