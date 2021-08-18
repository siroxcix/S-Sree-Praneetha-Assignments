var fs = require('fs');
var fileName = 'newFile'
var wordToFind = 'hey';
wordToFind = wordToFind.toLowerCase();

fs.readFile(fileName, 'utf8', function(err, data) {  
 
    var text = data.toLowerCase().split(' ');
    var aFilteredWords = text.filter(function(word){
        //console.log('word to find: ',wordToFind);
        return word.includes(wordToFind);
    });
    console.log('The word "' + wordToFind + '" appears ' + aFilteredWords.length + " times in the text.");
});