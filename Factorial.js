const readline = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter Number \n', num1 => {
    if(num1 < 0){
        console.log('Error! Negative Number Doesnt Support');
    }
    else if(num1 === 0) {
        console.log('The Factorial of ' +num1+ ' is 1.');
    }
    else{
        let fact = 1;
        for (i=1; i<=num1;i++){
            fact *= i;
        }
        console.log('The Factorial of ' +num1+ ' is ' +fact);
    }

    readline.close();
})
