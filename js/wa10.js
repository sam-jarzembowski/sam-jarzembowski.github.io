const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "It was 68 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 140 pounds and is an absolute icon.";

var insertX = ["RuPaul", "Willow Pill", "Ester Flonaze"];
var insertY = ["the runway", "the dressing room", "their favorite national park"];
var insertZ = ["sashayed away", "hosted a round of drag bingo", "whitewater rafted"];

randomize.addEventListener('click', result);

function result() {

    var newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace("Bob", name);
    }

    if (document.getElementById("uk").checked) {
        const weight = `${Math.round((140/14))} stone`;
        const temperature =  `${Math.round((68-32)*(5/9))} centigrade`;

        newStory = newStory.replace("140 pounds", weight);
        newStory = newStory.replace("68 fahrenheit", temperature);

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
