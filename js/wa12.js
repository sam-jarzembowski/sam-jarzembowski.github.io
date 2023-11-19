const refreshBtn = document.getElementById('#js-refresh');
refreshBtn.addEventListener('click', refresh);
const catImage = document.getElementById('#js-cat-image');
const factText = document.getElementById('#js-fact');

const img_url = 'https://api.thecatapi.com/v1/images/search';

async function getImage() {
    try {
        const response = await fetch(img_url);
        const json = await response.json();
        console.log(json);
        let link = json["url"];
        catImage.src = link;
        
    }
    catch(err) {
        console.log(err);
        alert('Failed to retrieve image');
    }

}

const fact_url = 'https://meowfacts.herokuapp.com/';

async function getFact() {
    try {
        const response = await fetch(fact_url);
        const json = await response.json();
        console.log(json);
        let fact = json["data"];
        factText.textContent = fact;
    }
    catch(err) {
        console.log(err);
        alert('Failed to retrieve fact')
    }
}

async function refresh() {
    getImage();
    getFact();
}

refresh();