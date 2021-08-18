var fs = require('fs');

var textFile = fs.readFileSync('about.text','utf-8');
console.log(textFile);