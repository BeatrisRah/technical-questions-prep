function singleNonDuplicate(nums) { 
    let l = 0;
    let r = nums.length - 1;

    while ( l <= r){
        const m = Math.floor(l + ((r - l) / 2));

        if((nums[m - 1] !== nums[m] || m - 1 < 0) && ( nums[m + 1] !== nums[m] || m + 1 === nums.length) ){
            return nums[m]
        }

        const leftSize = nums[m - 1] === nums[m] ? m - 1 : m;
        if (leftSize % 2 ){
            r = m - 1
        } else {
            l = m + 1
        }
    }
}
// console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));


function tupleSameProduct(nums){
    const product_count = new Map()

    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < i; j++ ){
            const product = nums[i] * nums[j]
            product_count.set(product, (product_count.get(product) ?? 0) + 1 )

        }
    }

    let res = 0;
    for (const [_, count] of product_count){
        res += (count * (count - 1)) / 2
    }

    return res << 3

}
// console.log(tupleSameProduct([1,2,4,5,10]));

function removeOccurrences(s, part){
    let news = ''
    
    for (let i = 0; i < s.length; i++){
        news += s[i]
        const last = news.slice((news.length - part.length), news.length)
        if(last === part){
            
            news = news.slice(0, (news.length - part.length))
        }
    }

    return news;
}
// console.log(removeOccurrences('axxxxyyyyb', 'xy'));

function lengthOfLongestSubstring(s){
    let str = ''
    const lenghsts = [] // Nums

    if(s.length === 0){
        return 0
    }

    for (let i = 0; i < s.length; i++){
        const currChar = s[i]

        if(str.indexOf(currChar) !== -1){
            lenghsts.push(str.length)
            str = str.slice(str.indexOf(currChar) + 1, str.length)
            
        }
        str += currChar
        
    }
    lenghsts.push(str.length)
    
    return Math.max(...lenghsts)
        
    
}

console.log(lengthOfLongestSubstring(" "));

//dvdf
//abcabcbb