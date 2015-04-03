var io = require('socket.io-client');

var audio_dir = '/audio/'

var audio_files = [
  'audio/GVL2_InsideTheVenue.mp3',
  'audio/GVL2_YouKnowWhatToDo.mp3',
  'audio/airhorn.mp3'
];

var durations = [
  1100,
  1100,
  1500
]

var socket = io('http://airhorn-remote.herokuapp.com');

socket.on('airhorn', function() {
  console.log('you got airhorn!');
  playSound(2);
});


var soundEngine = require('./soundEngine.js');
var randomColor = require('./randomColor.js')


var pic = document.querySelector('#image');
var sound = soundEngine();


function playSound(idx) {
  sound.play(audio_files[idx], 0);
  randomColor.start();
  setTimeout(randomColor.stop, durations[idx]);
}

sound.setup(audio_files);

function setupClick() {
  pic.addEventListener('click', function() {
    var idx = (Math.random() * audio_files.length) | 0
    playSound(idx)
    ga('send', 'event', 'interaction', 'click', audio_files[idx]);
  });

}



var loadId = setInterval(function() {

  if (sound.ready()) {
    clearInterval(loadId);
    pic.classList.remove('loading');
    setupClick()
  }
}, 100);




