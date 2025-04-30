// easy 

function fizzBuzz(n){
    const result = []
    for (let currenttNum = 1; currenttNum <= n; currenttNum ++){
        if( currenttNum % 5 === 0 && currenttNum % 3 === 0){
            result.push('FizzBuzz')
        } else if(currenttNum % 5 === 0 ){
            result.push('Buzz')
        } else if(currenttNum % 3 === 0){
            result.push('Fizz')
        } else {
            result.push(currenttNum)
        }
    }

    console.log(result);
    
}
// fizzBuzz(15);
// Output: 1, 2, Fizz, 4, Buzz
//Print numbers from 1 to n. 
// But for multiples of 3, print "Fizz" instead of the number, 
// and for multiples of 5 print "Buzz". 
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function firstUniqueChar(str){
    const obj = {}

    for(let i = 0; i < str.length; i++){
        const currentLetter = str[i]

        if(obj[currentLetter]){
            obj[currentLetter]++;
        } else {
            obj[currentLetter] = 1;
        }
    }

    for (let key in obj){
        if(obj[key] === 1){
            return key
        }
    }

    return [-1]
    
}
console.log(firstUniqueChar("loveleetcode")) // "c"