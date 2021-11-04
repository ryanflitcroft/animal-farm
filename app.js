// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  // A PLAN:
// - 3 image elements, which can be accessed in DOM (getElementById);
// - 3 audio elements, which can be accessed in DOM (getElementById);
// - 1 element to indicate the image/audio event that has been accessed (span);
//   -Images will have .eventListener('click', );
//   -Audio will have .play();
//   -Span.textContent will change based on which img/audio element was clicked;

// ACCESS IMAGE ELEMENTS IN DOM, assign to const
const catImage = document.getElementById('cat-image');
const horseImage = document.getElementById('horse-image');
const dogImage = document.getElementById('dog-image');

// VALIDATE that const assignments exist
// console.log(catImage, horseImage, dogImage);
// --TRUE

// ACCESS AUDIO ELEMENTS IN DOM, assign to const
const catAudio = document.getElementById('cat-audio');
const horseAudio = document.getElementById('horse-audio');
const dogAudio = document.getElementById('dog-audio');

// VALIDATE that const assignments exist
// console.log(catAudio, horseAudio, dogAudio);
// --TRUE

catImage.addEventListener('click', () => {
  catAudio.play();
});

horseImage.addEventListener('click', () => {
  horseAudio.play();
});

dogImage.addEventListener('click', () => {
  dogAudio.play();
})


