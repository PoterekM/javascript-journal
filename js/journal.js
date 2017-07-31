function Entry(paragraph) {
  this.paragraph = paragraph;
}


Entry.prototype.wordCount = function(text) {
  var counter = 0;
  var text = text.split(" ");
  for (var i = 1; i <= text.length; i++) {
    counter += 1;
  }
  return counter;
}

Entry.prototype.vowelCount = function(text) {
  var counter = 0;
  var text = text.toLowerCase();
  var text = text.split("");
  console.log(text);
  for (var i = 0; i <= text.length; i++) {
    if (text[i] === "a" || text[i] === "e" || text[i] === "i" || text[i] === "o" || text[i] === "u") {
      counter += 1;
    }
  }
  return counter;
}


// Entry.prototype.teaser = function(text) {
//   var teaser = [];
//   var text = text.split(".");
//
//   for (var i = 0; 7 <= text.length; i++) {
//     if (i === "." && i <= 7) {
//       teaser.push("text")
//     }
//     }
// }
