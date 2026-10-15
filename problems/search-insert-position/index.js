function searchInsert(nums, target) {
    let left = 0
    let right = nums.length

    while (left < right) {
        const middle = Math.floor((left + right)/2)
        // console.log(middle)
        if (target > nums[middle]) {
            left = middle + 1
        }else{
            right = middle
        }
    }
    return left
};

const nums = [1, 3, 5, 6]
const target = 4

console.log(searchInsert(nums, target))