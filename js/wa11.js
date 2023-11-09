const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
var altDict = {
    'pic1.jpg' : "alt text",
    'pic2.jpg' : "alt text",
    'pic3.jpg' : "alt text",
    'pic4.jpg' : "alt text",
    'pic5.jpg' : "alt text",
}

/* Looping through images */
for (imgage of imgArray) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `../img/wa11/${image}`);
    newImage.setAttribute('alt', altDict[image]);
    thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
if (btn.getAttribute('class') === dark ) {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
}

else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
}