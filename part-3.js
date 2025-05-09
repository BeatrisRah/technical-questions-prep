function longestPalindrome(s){
    let res = ''
    let resLen = 0;

    for (let i = 0; i < s.length; i++){
        let [l, r] = [i , i]

        while(l >= 0 && r < s.length && s[l] === s[r]){
            if (r - l + 1 > resLen){
                res = s.slice(l , r+ 1)
                resLen = r - l + 1;
            }
            l -= 1;
            r += 1;
        }

        l = i;
        r = i+ 1;
        while(l >= 0 && r < s.length && s[l] === s[r]){
            if (r - l + 1 > resLen){
                res = s.slice(l , r+ 1)
                resLen = r - l + 1;
            }
            l -= 1;
            r += 1;
        }
    }

    return res;

    
    
}
// console.log(longestPalindrome("a"));

function reverseInt(x){
    let intStr = x.toString()


    if(intStr[0] === '-'){
        intStr = intStr.slice(1, intStr.length)
        intStr = -Number(intStr.split('').reverse().join(''))
    } else {
        intStr = Number(intStr.split('').reverse().join(''))
    }

    if (intStr > 2147483647  || intStr < -2147483648){
        return 0
    }

    return intStr

}
// console.log(reverseInt(-120));


function convertZigZag(s, numRows){
    if (numRows === 1 || s.length <= numRows) return s;
    let currRow = 0;
    let goingDown = false;
    const res = Array(numRows).fill().map(() => []);

    
    for (let i = 0; i < s.length; i++) {
        res[currRow].push(s[i]);

        if (currRow === 0 || currRow === numRows - 1) {
            goingDown = !goingDown;
        }

        currRow += goingDown ? 1 : -1;
    }

    return res.map(row => row.join('')).join('');
    
}

//PAHNAPLSIIGYIR
//PAHNAPLSIIGYIR
console.log(convertZigZag('PAYPALISHIRING', 3));

