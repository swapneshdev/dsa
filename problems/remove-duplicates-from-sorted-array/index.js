// let nums = [1,1,2,2,3,4,5,6,7]
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]


function removeDuplicates(nums) {
    let last_shorted_num = nums[0]
    for (let x = 1; x < nums.length; x++) {
        if (last_shorted_num < nums[x]) {
            console.log(`nums[x] is ${nums[x]}`, `and last_shorted_num is ${last_shorted_num}`, `making last_shorted_num < nums[x] ${last_shorted_num < nums[x]}`)
            last_shorted_num = nums[x]
        } else {
            console.log(`nums[x] is ${nums[x]}`, `and last_shorted_num is ${last_shorted_num}`, `making last_shorted_num < nums[x] ${last_shorted_num < nums[x]}`)
            nums.splice(x, 1);
            x--
        }
    }
    return nums.length
};


// function removeDuplicates(nums) {
//     let k = 1;

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] !== nums[k - 1]) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }

//     return k;
// }

removeDuplicates(nums)
console.log(nums)