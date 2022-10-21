/*
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

Problem:
  -input: array and number
  -output array

Rules:
  - RETURN array with length of number containing the last even numbers from array input
  - original array will not be empty
  - will only be given int data types

Examples:
([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

Data Structure: array

Algorithm:
- declare an const 'evens' and initialize it to []
- iterate backwards through input  (stop iteration when evens length === number)
 - check if el is even
  - append to front of evens
- RETURN evens array
 */

function evenNumbers(array, number) {
  const evens = [];
  for (let i = array.length; i >= 0; i--) {
    if (evens.length === number) break;
    if (array[i] % 2 === 0) {
      evens.unshift(array[i]);
    } 
  }
  return evens;
}

//console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8])
//console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26])
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6])