

function intToRoman(num) {
    const romanValues = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let stringStore = []
    console.log(`num is ${num}`)
    for (const element of romanValues) {
        while (element.value <= num ) {
            console.log(element.value, "reduced from num", `value of num id ${num}` )
            num -= element.value
            stringStore.push(element.symbol)
        }
    }

    return stringStore.join("")
    
};

const num = 3749
const result ="MMMDCCXLIX"

console.log(intToRoman(num) == result)