const readline = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter Range : ', range => {
    for(let i=1; i<=range; i++){
        const result = i * 4;
        console.log(i +"* 4 = " +result);
    }
    readline.close();
})