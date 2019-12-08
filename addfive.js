const readline = require('readline');

var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Give me a number, I\'ll add five! ', function(num) {
    // Tell JS this is a number
    num = parseInt(num);
    console.log(num + 5);
    // Close, or it will keep reading forever
    r1.close();
})