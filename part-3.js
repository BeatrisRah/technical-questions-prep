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
// console.log(convertZigZag('PAYPALISHIRING', 3));


function maxArea(height){
    let [l, r] = [0, height.length - 1]
    let res = 0

    while (l < r){
        const area = Math.min(height[l], height[r]) * (r - l);
        res = Math.max(res, area);

        if(height[l] < height[r]){
            l++
        } else{
            r--
        }
    }
    return res
    
}
// console.log(maxArea([1,8,6,2,5,4,8,3,7]));

function intToRoman(num){
    symList = [["I", 1], ["IV", 4], ["V", 5], ["IX", 9], ["X", 10], ["XL", 40], ["L", 50], ["XC", 90], ["C", 100], ["CD", 400],["D", 500],["CM", 900],["M", 1000]]
    let res = ''
    
    for(let [sym, val] of symList.reverse()){
        if ( Math.floor(num / val) > 0){
            
            // console.log(num / val);
            const count = Math.floor(num / val)
            res += sym.repeat(count)
            num -= val * count
            
        }
    }

    console.log(res);
    

}
intToRoman(1994)