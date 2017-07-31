var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#paragraph').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry("stuff");
    var result = newEntry.vowelCount(body);
    var result2 = newEntry.wordCount(body);
    var result3 = newEntry.teaser(body);
    $("#display-length").text(result);
    $("#display-vowels").text(result2);
    $("#teaser").text(result3);
  });
});
