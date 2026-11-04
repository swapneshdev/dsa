// function sort(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (nums[j] > nums[j + 1]) {
//                 console.log(nums[j] > nums[j + 1], nums[j])
            
//                 if (nums[j+1] !== undefined) {
//                     [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
//                 }
//             }

//         }
//     }
//     return nums
// }

function sort(nums, fn) {
    const compare = fn ?? ((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (compare(nums[j], nums[j + 1]) > 0) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }

    return nums;
}

// console.log(sort(["a","b","f","apple","b"]))
console.log(sort([1, 2, 3, 4, 5, 6, 76, 8]))