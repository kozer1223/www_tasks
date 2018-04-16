
function arrayMax(array) {
  "use strict";
  return Math.max.apply(null, array);
};

function alignColumns(rowClass, columnClass) {
  "use strict";
  var alignRows = document.getElementsByClassName(rowClass);
  var i,j;
  var alignColumns;
  var columnHeights;
  var maxHeight;
  for(i = 0; i < alignRows.length; i = i + 1) {
    alignColumns = alignRows[i].getElementsByClassName(columnClass);
    columnHeights = [];
    for(j = 0; j < alignColumns.length; j = j + 1) {
      columnHeights[j] = alignColumns[j].offsetHeight;
    }
    maxHeight = arrayMax(columnHeights);
    for(j = 0; j < alignColumns.length; j = j + 1) {
      alignColumns[j].style.height = maxHeight + "px"
    }
  }
}

window.onload = function () {
  "use strict";
  alignColumns("rowalign", "autoalign");
}
