/*
Given an array/list of integers, find the Nth smallest element in the array.

Notes
Array/list size is at least 3.
Array/list's numbers could be a mixture of positives , negatives and zeros.
Repetition in array/list's numbers could occur, so don't remove duplications.

Problem:
  input: array containing numbers and a number representing a position  Nth.
  output: a number that is the the Nth smallest
  Rules:
    - array list size is at least 3
    - array can contain positive, negative, and 0
    - repetition will occur. Do not remove duplications
Examples:
    nthSmallest([3,1,2], 2),  2);
    nthSmallest([15,20,7,10,4,3], 3),  7);
    nthSmallest([-5,-1,-6,-18], 4), -1);
    nthSmallest([-102,-16,-1,-2,-367,-9], 5), -2);
    nthSmallest([2,169,13,-5,0,-1], 4),  2);
    nthSmallest([2,1,3,3,1,2], 3),  2);

Data Structure:
  sorted array

Algorith:
  return the nth index of arr input sorted
*/

function nthSmallest(arr, n) {
  return arr.sort((a,b) => a - b)[n - 1];
}

console.log(nthSmallest([3,1,2], 2),  2);
console.log(nthSmallest([15,20,7,10,4,3], 3),  7);
console.log(nthSmallest([-5,-1,-6,-18], 4), -1);
console.log(nthSmallest([-102,-16,-1,-2,-367,-9], 5), -2);
console.log(nthSmallest([2,169,13,-5,0,-1], 4),  2);
console.log(nthSmallest([2,1,3,3,1,2], 3),  2);