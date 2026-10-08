
function isValid(s) {
    if (typeof s !== "string") return false
    const pairs = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    const Keys = Object.keys(pairs)
    const value = Object.values(pairs)

    const arrStack = []

    for (const element of s) {
        if (value.includes(element)) {
            arrStack.push(element)
            // console.log("value is included", element)
        } 
        else {
            console.log(element, Keys.includes(element), "jkuhgiuyg", pairs[element])
            if (arrStack.pop() != pairs[element]) {
                return false
            }
        }
    }
    console.log(arrStack)
    return arrStack.length === 0;
};


const valProp = "()"
console.log(isValid(valProp))