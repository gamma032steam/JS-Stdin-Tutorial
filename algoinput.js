const readline = require('readline');

var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputNumbers = [];

r1.on('line', function(line) {
    // Put the number in an array
    inputNumbers.push(parseInt(line));
   // Stop when the array is 5 numbers long
   if (inputNumbers.length == 5) {
       r1.close();
   }
});

r1.on('close', function() {
    // Put your algorithm here. You have access to inputNumbers
    // and can be assured all the inputs are in.
    console.log(inputNumbers);
});