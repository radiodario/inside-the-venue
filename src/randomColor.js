function getRandomColor() {
    var hsl = Math.random() * 360 | 0;
    return 'hsl('+hsl+',100%,50%)';
}

var requestId = 0;
var running = false;

function render() {
  running = true;
  document.body.style.backgroundColor = getRandomColor();

  requestId = requestAnimationFrame(render);

}



module.exports = {
  start: function start() {
    if (!running) {
      render();
      document.querySelector('#image').classList.add('clicked');
    }
  },
  stop: function stop() {
    cancelAnimationFrame(requestId);
    document.body.style.backgroundColor = 'white';
    document.querySelector('#image').classList.remove('clicked');
    running = false;
  }
};