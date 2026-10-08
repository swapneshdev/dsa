// function strStr(haystack, needle) {
//     return haystack.indexOf(needle) !== undefined ? haystack.indexOf(needle) : -1
// };

function strStr(haystack, needle) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0;

        while (
            j < needle.length &&
            haystack[i + j] === needle[j]
        ) {
            j++;
        }

        if (j === needle.length) {
            return i;
        }
    }

    return -1;
}

const haystack = "sadbutsad"
const needle = "sad"

console.log(strStr(haystack,needle))