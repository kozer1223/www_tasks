function replaceLetters() {
  "use strict";
  var countArea = document.getElementById("replace-area");
  var origStr = countArea.value;

  var newStr = origStr.replace(/[&<>"'\/]/g, function(x){
    switch(x){
      case "&": return "&amp;"; break;
      case "<": return "&lt;"; break;
      case ">": return "&gt;"; break;
      case "\"": return "&quot;"; break;
      case "'": return "&#x27;"; break;
      case "/": return "&#x2F;"; break;
      default: return x;
    };
  });

  countArea.value = newStr;
}

function clearTextArea() {
  "use strict";
  var countArea = document.getElementById("replace-area");
  countArea.value = "";
}

function setUpButtons(replace, clear) {
  "use strict";
  var replaceButton = document.getElementById(replace);
  var clearButton = document.getElementById(clear);
  replaceButton.onclick = replaceLetters;
  clearButton.onclick = clearTextArea;
}

window.onload = function () {
  "use strict";
  setUpButtons("btn-replace", "btn-clear");
}
