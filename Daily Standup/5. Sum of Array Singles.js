/*
You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

repeats([4,5,7,5,4,8]),15)
repeats([9, 10, 19, 13, 19, 13]),19)
repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
repeats([5, 10, 19, 13, 10, 13]),24)

Problem:
 -input: array
 -output: number
 -Rules:
  -return the sum of numbers in array that only occurs once.

Data Structure:
 - use object to count frequency

Algorithm:
 - delcare a variable 'counter' and initialize it to {};
 - declare variable 'sum' and intialize it to 0;
 - iterate through argument
    - if el exist in counter => increment it by 1
    - else => set el as the key in counter to 1 and add to el sum

 - return sum
*/

function repeats(arr) {
  const counter = {};
  let sum = 0;
  for (let num of arr) {
    if (counter[num]) {
      counter[num]++;
      sum -= num
    } else {
      counter[num] = 1;
      sum += num
    }
  }
  return sum;
}

console.log(repeats([4,5,7,5,4,8]) === 15)
console.log(repeats([9, 10, 19, 13, 19, 13]) === 19)
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]) === 12)
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]) === 22)
console.log(repeats([5, 10, 19, 13, 10, 13]) === 24)