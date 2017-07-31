$(document).ready(function() {
  $('#paragraph').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry("stuff");
    var result = newEntry.wordCount(body);
    alert(result);
  });
});
