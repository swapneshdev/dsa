function removeElement(nums, val) {
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] === val) {
            nums.splice(index, 1);
            index --
        }
    }
    console.log(nums)
    return nums.length
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))