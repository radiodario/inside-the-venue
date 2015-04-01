var audio_dir = '/audio/'

var audio_files = [
  '/audio/GVL2_InsideTheVenue.mp3',
  '/audio/GVL2_YouKnowWhatToDo.mp3'
];


var soundEngine = require('./soundEngine.js');


var sound = soundEngine();


sound.setup(audio_files);



var pic = document.querySelector('img');

pic.addEventListener('click', function() {
  var idx = (Math.random() * audio_files.length) | 0
  console.log("playing", idx, audio_files[idx]);
  sound.play(audio_files[idx], 0);
});



