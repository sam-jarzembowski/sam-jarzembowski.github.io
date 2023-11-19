const refreshBtn = document.getElementById('#js-refresh');
refreshBtn.addEventListener('click', refresh);
const dogImage = document.getElementById('#js-dog-image');

const img_url = 'https://dog.ceo/api/breeds/image/random';

async function getImage() {
    try {
        const response = await fetch(img_url);
        const json = await response.json();
        let link = json.message;
        dogImage.src = link;
        
    }
    catch(err) {
        console.log(err);
        alert('Failed to retrieve image');
    }

}

const fact_url = '';

async function getFact() {

}

async function refresh() {
    getImage();
}

refresh();