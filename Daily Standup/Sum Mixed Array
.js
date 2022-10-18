/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

input: an array
output: a number
Rules:
 - array will contain strings and numbers
 - return the sum of arr if all elements are numbers

Examples:
sumMix([9, 3, '7', '3']) 22
sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]) 42
sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']) 41

Data Structure:
- Using array convert all elements into number.

Algorithm:
- declare a variable named numArr and initialize it to the array with all elements converted to numbers
- return the sum of numArr
 */
function sumMix(arr) {
  return arr.reduce((acc, cur) => acc + Number(cur), 0);
}

console.log(sumMix([9, 3, '7', '3']) === 22)
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]) === 42)
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']) === 41)
