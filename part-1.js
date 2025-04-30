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
// console.log(firstUniqueChar("loveleetcode")) 
// "c"

function isPalindrome(str){
    const newStr = str.replace(/[^a-zA-Z0-9]/g, '')
    const reverseStr = newStr.split('').reverse().join('')
    
    
    for(let i = 0; i < reverseStr.length; i++){
        const currLetter = reverseStr[i]
        if(currLetter.toLowerCase() !== newStr[i].toLowerCase()){
            return false;
        }
    }

    return true;
    
    
}

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
; // true
// Check if the given string is a palindrome (reads the same backward as forward), 
// ignoring case and non-alphanumeric characters.


function removeDuplicates(arr){
    const res = []

    for (let i = 0; i < arr.length; i++){
        const currElement = arr[i]

        if(!res.includes(currElement)){
            res.push(currElement)
        }
    }

    return res;

}
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
; // [1, 2, 3, 4]

function flattenArray(arr) { 
    const res = []
    const helper = (inputArr) => {
        for (let i = 0; i < inputArr.length; i++){
            
            if(typeof inputArr[i] === 'object'){
                helper(inputArr[i])
            } else{
                res.push(inputArr[i])
            }
        }

        return res;
    }

    return helper(arr);
}

// console.log(flattenArray([1, [2, [3, 4]], 5]));
// Input: [1, [2, [3, 4]], 5]
// Output: [1, 2, 3, 4, 5]
// Constraints:
// Array may be deeply nested.
// No usage of flat(Infinity) allowed.

function debounce(fn, delay) { 
    // Create a debounce utility that delays execution of fn 
    // until after delay milliseconds have passed since the last time it was called.
    let id;
    return function(...args){
        clearTimeout(id)
        id = setTimeout(() => fn(...args), delay)
    }

}

// const log = debounce(console.log, 100);
// log('hello')

function deepClone(obj){

    const clone = (input) => {
        if(input === null || typeof input !== 'object'){
            return input;
        }

        const initalVal = Array.isArray(input) ? [] : {}

        return Object.keys(input).reduce((acc, key) => {
            acc[key] = clone(input[key])
            return acc;
        }, initalVal)
    }

    return clone(obj)
}

console.log(deepClone({ a: 1, b: { c: 2 } }));
