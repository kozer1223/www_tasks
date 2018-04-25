function setUpButtons(replace, copy, textArea) {
  "use strict";
  var replaceButton = document.getElementById(replace);
  var copyButton = document.getElementById(copy);
  var countArea = document.getElementById(textArea);

  replaceButton.onclick = function() {
    "use strict";
    var origStr = countArea.value;

    var regex = /(.*)<h2>(.*)<\/h2>[\n\s]*<aside class="lecturer-info">[\n\s]*(.*)[\n\s]*<\/aside>[\n\s]*<div class="row">[\n\s]*<div class="col-3-6">[\n\s]*<section class="content-panel">[\n\s]*<div class="panel-header">[\n\s]*<h3>Czego się dowiedziałem\?<\/h3>[\n\s]*<\/div>[\n\s]*<div class="panel-content">[\n\s]*<ol>[\n\s]*((<li>.*<\/li>[\n\s]*)*)[\n\s]*<\/ol>[\n\s]*<\/div>[\n\s]*<\/section>[\n\s]*<\/div>[\n\s]*<div class="col-3-6">[\n\s]*<aside class="aside-panel">[\n\s]*<div class="panel-header">[\n\s]*<h3>Co mam do zrobienia\?<\/h3>[\n\s]*<\/div>[\n\s]*<div class="panel-content">[\n\s]*<ol>[\n\s]*((<li>.*<\/li>[\n\s]*)*)[\n\s]*<\/ol>[\n\s]*<\/div>[\n\s]*<\/aside>[\n\s]*<\/div>[\n\s]*<\/div>[\n\s]*<!-- row -->[\n\s]*(.*)/i

    var match = regex.exec(origStr);

    var name = match[2];
    var lecturer = match[3];
    var l1 = match[4];
    var l2 = match[6];
    var liRegex = /<li>(.*)<\/li>/gi;
    var list1 = l1.match(liRegex);
    var list2 = l2.match(liRegex);

    var template = "$PAGE->addLectureData(\"{{NAME}}\", \"{{LECTURER}}\", [{{LIST1}}], [{{LIST2}}]);";
    template = template.replace("{{NAME}}", name);
    template = template.replace("{{LECTURER}}", lecturer);

    var list1Str = list1.map(function(x){
      var liRegex = /<li>(.*)<\/li>/gi;
      return '"' + liRegex.exec(x)[1] + '"';
    }).join(", ");
    var list2Str = list2.map(function(x){
      var liRegex = /<li>(.*)<\/li>/gi;
      return '"' + liRegex.exec(x)[1] + '"';
    }).join(", ");

    template = template.replace("{{LIST1}}", list1Str);
    template = template.replace("{{LIST2}}", list2Str);
    
    countArea.value = template;
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
