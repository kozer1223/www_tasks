function countLetters() {
  "use strict";
  var countArea = document.getElementById("count-area");
  var length = countArea.textLength;
  countArea.value += length;
}

function clearTextArea() {
  "use strict";
  var countArea = document.getElementById("count-area");
  countArea.value = "";
}

function setUpButtons(count, clear) {
  "use strict";
  var countButton = document.getElementById(count);
  var clearButton = document.getElementById(clear);
  countButton.onclick = countLetters;
  clearButton.onclick = clearTextArea;
}

window.onload = function () {
  "use strict";
  setUpButtons("btn-count", "btn-clear");
}
