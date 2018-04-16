function setHideAndShow(L) {
  "use strict";
  var LE = [];
  var i;
  for (i=0; i < L.length; i = i+1) {
    LE[i] = document.getElementById(L[i]+"-b");
  }

  function createFunction(id) {
    var x = document.getElementById(id);

    function hs() {
      var j;
      for (j = 0; j < LE.length; j = j+1) {
        if (LE[j] !== x){
          LE[j].style.display = "none";
        }
      }
      x.style.display =  x.style.display === "block"? "none":"block";
    }
    return hs;
  }

  var pref;
  var elem;
  for (i = 0; i < L.length; i = i+1) {
    pref = L[i];
    elem = document.getElementById(pref+"-a");
    elem.addEventListener("click", createFunction(pref+"-b"));
  }
}

function accSetUp(id,className){
  "use strict";
  var x = document.getElementById(id);
  var L = x.getElementsByClassName(className);
  var prefixes = [];
  var i;
  for(i = 0; i < L.length; i = i + 1) {
    prefixes[i] = L[i].getAttribute("prefix");
  }
  setHideAndShow(prefixes);
}

window.onload = function () {
  "use strict";
  accSetUp("ACC-01", "acc-card")
}