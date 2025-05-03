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
console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));
