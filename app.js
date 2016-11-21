

function tokenizeText(text) {
  var words = text.toLowerCase().split(" ");
  return words
}

function countUniqueWords(words) {
  var uniqueWords = [];
  for (var i = 0; i < words.length; i++) {
    if (uniqueWords.indexOf(words[i]) === -1) {
      uniqueWords.push(words[i]);
    }
  }
  return uniqueWords.length;
}






function runReport(text) {

  var words = tokenizeText(text);
  var numUniqueWords = countUniqueWords(words);
  var numWords = words.length;



  var textReport = $('.js-text-report');
  textReport.find('.js-word-count').text(numWords);
  textReport.find('.js-unique-word-count').text(numUniqueWords);

  textReport.removeClass('hidden');

}



function watchFormSubmission() {
  $('.js-text-form').submit(function(event) {
    event.preventDefault();
    var userText = $(this).find('#user-text').val();
    runReport(userText);
  });
}


$(document).ready(function() {
  watchFormSubmission();
});