/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.


Problem: 
 - input: array
 - output: number
 - Rules:
  - return the mean of the array rounded down.
  - array will never be empty and wil lonly contain numbers.

Examples:
getAverage([2,2,2,2]),2)
getAverage([1,2,3,4,5,]),3);
getAverage([1,1,1,1,1,1,1,2]),1)

Data Structure:
 - array

Algorithm:
 - iterate through array to find mean
  - find sum. find length. divide. rounmd down
return mean

 */

const getAverage = (arr) => {
  return Math.floor(arr.reduce((acc, cur) => acc + cur, 0) / arr.length);
}
console.log(getAverage([2,2,2,2]) === 2);
console.log(getAverage([1,2,3,4,5,]) === 3);
console.log(getAverage([1,1,1,1,1,1,1,2]) === 1);