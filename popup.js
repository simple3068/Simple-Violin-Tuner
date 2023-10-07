var buttons = []
for (var i = 0; i < 4; i++) {
  buttons.push(document.getElementById('tuner-' + (i + 1)));
}

buttons[0].addEventListener("click", function() { buttonClicked(0); })
buttons[1].addEventListener("click", function() { buttonClicked(1); })
buttons[2].addEventListener("click", function() { buttonClicked(2); })
buttons[3].addEventListener("click", function() { buttonClicked(3); })

var tones = [
  new Audio('tones/tone1.mp3'),
  new Audio('tones/tone2.mp3'),
  new Audio('tones/tone3.mp3'),
  new Audio('tones/tone4.mp3')
]
for (var i = 0; i < 4; i++) {
  tones[i].loop = true;
}

function buttonClicked(index) {
  if (isStopped(buttons[index])) {
    for (var i = 0; i < 4; i++) {
      if (i == index) {
        playTone(buttons[i]);
        tones[i].play();
      } else {
        stopTone(buttons[i]);
        tones[i].pause();
        tones[i].load();
      }
    }
  } else {
    for (var i = 0; i < 4; i++) {
      stopTone(buttons[i]);
      tones[i].pause();
      tones[i].load();
    }
  }
}

function isPlaying(button) {
  return button.classList.contains("playing");
}

function isStopped(button) {
  return button.classList.contains("stopped");
}

function playTone(button) {
  if (isStopped(button)) {
    button.innerHTML = "<img src='images/btn-stop.png' alt='■'>";
    button.classList.remove("stopped");
    button.classList.add("playing");
  }
}

function stopTone(button) {
  if (isPlaying(button)) {
    button.innerHTML = "<img src='images/btn-play.png' alt='▶'>";
    button.classList.remove("playing");
    button.classList.add("stopped");
  }
}

function stopAll() {
  console.log("clicked");
}