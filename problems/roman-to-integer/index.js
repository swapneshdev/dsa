const input = "MCMXCIV"

function romanToInt(s) {
    const romanValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    const romanArray = s.toUpperCase().split("")
    // console.log(romanArray)
    let count = 0
    romanArray.forEach((element, index) => {
        const nextElement = romanArray[index + 1]
        const curretVal = romanValues[element]
        console.log(nextElement)
        if (!nextElement) {
            count += curretVal
        } else {
            const nextVal = romanValues[nextElement]
            if (curretVal < nextVal) {
                count -= curretVal
            } else {
                count += curretVal

            }

        }

    })
    return count
};



console.log(romanToInt(input), "count +++++")




// function romanToInt(s) {
//     const romanValues = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000
//     };

//     let count = 0;

//     for (let i = 0; i < s.length; i++) {
//         const current = romanValues[s[i]];
//         const next = romanValues[s[i + 1]];

//         if (current < next) {
//             count -= current;
//         } else {
//             count += current;
//         }
//     }

//     return count;
// }