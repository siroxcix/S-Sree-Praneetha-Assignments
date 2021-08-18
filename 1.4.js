var fs = require("fs");
var newFile= fs.writeFileSync('newFile','hey ho lets go');
console.log(newFile);
console.log('The text was saved!');
  