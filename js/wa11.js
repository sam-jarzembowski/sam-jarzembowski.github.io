const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['../img/wa11/pic1.jpg', '../img/wa11/pic2.jpg', '../img/wa11/pic3.jpg', '../img/wa11/pic4.jpg', '../img/wa11/pic5.jpg'];

/* Declaring the alternative text for each image file */
var altDict = {
    '../img/wa11/pic1.jpg' : "alt text",
    '../img/wa11/pic2.jpg' : "alt text",
    '../img/wa11/pic3.jpg' : "alt text",
    '../img/wa11/pic4.jpg' : "alt text",
    '../img/wa11/pic5.jpg' : "alt text",
}

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
