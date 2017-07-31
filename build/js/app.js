(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
  for (var i = 0; i <= text.length; i++) {
    if (text[i] === "a" || text[i] === "e" || text[i] === "i" || text[i] === "o" || text[i] === "u") {
      counter += 1;
    }
  }
  return counter;
}


Entry.prototype.teaser = function(text) {
  var teaser = [];
  var text = text.split(".");
  var text = text[0];
  var sentence = text.split(" ");

  for (i = 0; 7 >= i; i++) {
    teaser.push(sentence[i]);
  }
  console.log(teaser);
  teaser = teaser.join(" ");
  return teaser;
}

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
