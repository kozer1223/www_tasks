function increaseFontSize() {
  "use strict";
  var size = parseInt(document.body.style.fontSize) || 16;
  document.body.style.fontSize = Math.min(32, size + 1) + "px";
}

function decreaseFontSize() {
  "use strict";
  var size = parseInt(document.body.style.fontSize) || 16;
  document.body.style.fontSize = Math.max(8, size - 1) + "px";
}

function setUpButtons(increase, decrease) {
  "use strict";
  var increaseButton = document.getElementById(increase);
  var decreaseButton = document.getElementById(decrease);
  increaseButton.onclick = increaseFontSize;
  decreaseButton.onclick = decreaseFontSize;
}

window.onload = function () {
  "use strict";
  setUpButtons("btn-increase", "btn-decrease");
}
