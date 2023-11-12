const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['plane.jpg', 'sky.jpg', 'garden.jpg', '29.jpg', 'playbill.jpg'];

/* Declaring the alternative text for each image file */
var altDict = {
    'plane.jpg' : "Sunset viewed from a plane",
    'sky.jpg' : "Sunset from a balcony",
    'garden.jpg' : "Floral garden in Los Angeles",
    '29.jpg' : "29th Street Mall in Boulder",
    'playbill.jpg' : "Playbill for Come from Away",
}

/* Looping through images */
for (img of imgArray) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `../wa/wa11/${img}`);
    newImage.setAttribute('alt', altDict[img]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    })
    
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {

    if (btn.getAttribute('class') === 'dark' ) {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }

    else {
        btn.setAttribute("class", 'dark');
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});