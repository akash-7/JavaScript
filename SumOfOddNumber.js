function isOdd(n){
    return Boolean(n%2);    
}

function findSum(){
    let sum =0;
    for (var i = 31; i < 60; i++){
        if(isOdd(i)){
            sum += i;
        }
    }
    return sum;
}

console.log(findSum());