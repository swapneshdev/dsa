const nums = [1,1,2,2,3,4,5,6,7]


function removeDuplicates(nums) {
    const map = new Map()
    nums.forEach(element => {
        map.set(element,element)
    });
    return map.size
    // console.log(map.values())
};

removeDuplicates(nums)