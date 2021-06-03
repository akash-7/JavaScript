var numbers = [3,7,11,18,22];
var tSum = 0;
for (var i in numbers){
    tSum += numbers[i];
}

var numLen = numbers.length;
var average = tSum/numLen;
console.log ('Average is : ' +average);