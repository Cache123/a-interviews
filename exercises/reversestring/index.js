// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


/* 

Test Case 1: Is this a string?
Test Case 2: What are valid characters?
Test Case 3: Reverse a sentence, reverse the letters within not the words
Test Case 4: How to solve in various ways.

*/

// String solution
function reverse(str) {
    let result = '';   
    
    for (let char of str) {
        result = char + result;
    }

    return result;

}

// Map() Solution
// function reverse(str) {
//     const result = [];

//     str.split('').map(char => result.unshift(char))

//     return result.join('');
// }


// Iterative Solution: Time 0(n) Space 0(1)
// function reverse(str) {
//     const stringArr = str.split('');
//     const midPoint = Math.floor(str.length/2);
//     let temp;

//     for (let i = 0; i < midPoint; i++) {
//         temp = stringArr[i];
//         stringArr[i] = stringArr[stringArr.length - 1 - i];
//         stringArr[stringArr.length - 1 - i] = temp;
//     }

//     return stringArr.join('');
// }

// Iterative Solution: Time 0(n) Space 0(n)
// function reverse(str) {
//     const result = [];

//     str.split('').forEach(letter => result.unshift(letter))

//     return result.join('')
// }

// Fastest
// function reverse(str) {
//     return str.split('').reverse().join('')
// }

module.exports = reverse;
