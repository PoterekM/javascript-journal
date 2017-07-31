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
