const arr = [1,8, 3, 2, 3, 2, 7, 8]
// @param {number[]} array
const uniquenm = (array) => { // O(n^2)
    for (const element of array) {
        for (let index = 1; index + 1 < array.length; index++) { 
            // O(n)
            // console.log(element, array[index])
            if (array[index] === element) {
                // O(n)
                return array[index]
            }

        }
    }
    return null
}

const optmizeduniquenm = (array) => { // O(n)
    const map = {}
    for (let index = 1; index + 1 < array.length; index++) {
        // O(n)
        // console.log(map[array[index]])
        if (map[array[index]]) {
            return array[index]
            // O(1)
        } else {
            map[array[index]] = true
        }
    }

}

// uniquenm(arr)
// console.log(uniquenm(arr))


// optmizeduniquenm(arr)
console.log(optmizeduniquenm(arr))