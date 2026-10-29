function plusOne(digits) {
    return String(BigInt(digits.join("")) + 1n).split("").map(Number);
};


// function plusOne(digits) {
//     for (let i = digits.length - 1; i >= 0; i--) {
//         if (digits[i] < 9) {
//             digits[i]++;
//             return digits;
//         }

//         digits[i] = 0;
//     }

//     digits.unshift(1);
//     return digits;
// }

console.log(plusOne([1,2,3]))