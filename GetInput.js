const readline = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
});

readline.question('Who are You? \n', nam => {
    console.log('Hey ' +nam);
    readline.close();
})