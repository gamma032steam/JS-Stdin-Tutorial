const readline = require('readline');

var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(query) {
    return new Promise(function(resolve) {
        // The promise is fulfilled when the question is answered
        r1.question(query, function(ans) {resolve(ans);});
    })
}

async function main() {
    count = 0;
    while(true) {
        count += 2;
        console.log(count);
        if (count % 10 == 0) {
            const answer = await ask('Continue? Y or N: ');
                if (answer == 'N') {
                    // We're not reading any more input
                    r1.close();
                    // Stop generating numbers
                    break;
                }
        }
    }
}

main();