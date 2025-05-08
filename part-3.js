function longestPalindrome(s){
    let currString = '';
    const res = []
    if(s.length >= 1000){
        return
    }

    if(s.length > 1){
        
        for(let i = 0; i < s.length; i++){
    
            for (let j = i; j < s.length; j++){
                const currentLetter = s[j]
                currString += currentLetter;
                // console.log(currString);
                
    
                if(currString.split('').reverse().join('') === currString){
                    res.push(currString)
                }
            }
            currString = ''
        }
    
        return res.sort(
            function (a, b) {
                return b.length - a.length;
            }
        )[0];
    } else{
        return s;
    }

    
}
console.log(longestPalindrome("ac"));
