// function longestCommonPrefix(strs) {

//     let refString = strs[0]

//     if (strs.length == 1) {
//         return refString
//     }
    
//     strs.forEach(element => {
//         while (!element.startsWith(refString)) {
//             refString = refString.slice(0, -1);
//         }
//     });

//     return refString
// };



function longestCommonPrefix(strs) {
    const refString = strs[0];

    for (let i = 0; i < refString.length; i++) {
        for (let j = 1; j < strs.length; j++) {

            if (
                i >= strs[j].length ||
                strs[j][i] !== refString[i]
            ) {
                return refString.slice(0, i);
            }

        }
    }

    return refString;
}


const stringProp = ["flower", "flow", "flight"]
console.log(longestCommonPrefix(stringProp))