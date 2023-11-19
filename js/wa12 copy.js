const newBtn = document.querySelector('#js-refresh'). addEventListener('click', refresh);
const stepText = document.querySelector('#js-step-text');
const wikiImg = document.querySelector('#js-wikihow-img');

const steps_url = 'https://hargrimm-wikihow-v1.p.rapidapi.com/steps?count=3';
const steps_options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6595da37famsh5028c282b1b0afbp1ac3dajsn5cbd40240f6d',
		'X-RapidAPI-Host': 'hargrimm-wikihow-v1.p.rapidapi.com'
	}
};

async function getSteps() {
    try {
        const response1 = await fetch(steps_url, steps_options);
        const steps = await response1.text();
        console.log(steps);
    } 
    catch (error) {
        console.error(error);
    }
}

const img_url = 'https://hargrimm-wikihow-v1.p.rapidapi.com/images?count=1';
const img_options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6595da37famsh5028c282b1b0afbp1ac3dajsn5cbd40240f6d',
		'X-RapidAPI-Host': 'hargrimm-wikihow-v1.p.rapidapi.com'
	}
};

async function getImg() {
    try {
        const response2 = await fetch(img_url, img_options);
        const image = await response2.text();
        console.log(image);
    } 
    catch (error) {
        console.error(error);
    }
}

function displaySteps(return_text) {
    stepText.textContent = return_text;
}

function displayImg(return_image) {
    wikiImg.src = return_image[1];
}
