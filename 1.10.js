var fs = require ('fs');
var nameFile = "writeme.txt";
var textToWrite = 'This is the tenth question'

fs.writeFile(nameFile, textToWrite, function(err,data) {
  if (err) throw err;
  console.log('The file was saved!');
});

var read = fs.readFileSync(nameFile) ;
  
  console.log(read);
