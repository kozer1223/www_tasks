function setUpButtons(replace, copy, textArea) {
  "use strict";
  var replaceButton = document.getElementById(replace);
  var copyButton = document.getElementById(copy);
  var countArea = document.getElementById(textArea);

  replaceButton.onclick = function() {
    "use strict";
    var origStr = countArea.value;
    countArea.value = origStr.replace(/[&<>"'\/]/g, function(x){
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
  }

  copyButton.onclick = function() {
    "use strict";
    countArea.select();
    document.execCommand("Copy");
  }
}

window.onload = function () {
  "use strict";
  setUpButtons("btn-replace", "btn-copy", "replace-area");
}
