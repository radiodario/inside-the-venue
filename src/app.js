var audio_dir = '/audio/'

var audio_files = [
  'audio/GVL2_InsideTheVenue.mp3',
  'audio/GVL2_YouKnowWhatToDo.mp3'
];


var soundEngine = require('./soundEngine.js');
var randomColor = require('./randomColor.js')


var pic = document.querySelector('#image');
var sound = soundEngine();




sound.setup(audio_files);

function setupClick() {
  pic.addEventListener('click', function() {
    var idx = (Math.random() * audio_files.length) | 0
    sound.play(audio_files[idx], 0);
    randomColor.start();
    setTimeout(randomColor.stop, 1000);
  });

}



var loadId = setInterval(function() {

  if (sound.ready()) {
    clearInterval(loadId);
    pic.classList.remove('loading');
    setupClick()
  }
}, 100);




