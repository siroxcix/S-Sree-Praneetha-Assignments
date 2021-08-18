var sum = require('./operations/sum')
var subs = require('./operations/difference')
var mult = require('./operations/multiplication')
var div = require('./operations/division')
var moment = require('moment');

var firstOperand = 3;
var secondOperand = 5;

console.log("Today is: " + moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
sum (firstOperand, secondOperand);
mult (firstOperand, secondOperand);