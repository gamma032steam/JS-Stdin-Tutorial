const readline = require('readline-sync');

function main() {
    count = 0;
    while(true) {
        count += 2;
        console.log(count);
        // If a multiple of ten
        if (count % 10 == 0) {
            answer = readline.question('Continue? Y or N: ');
            if (answer == 'N') {
                // Stop generating numbers
                break;
            }
        }
    }
}

main();