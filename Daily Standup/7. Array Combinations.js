/*
Your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

solve([[1,2],[4],[5,6]]),4);
solve([[1,2],[4,4],[5,6,6]]),4);
solve([[1,2],[3,4],[5,6]]),8);
solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72);

Problem:
  input: nested array
  output: number
  Rules: 
  - input will contain subarrays with numbers
  - output represents the total number of combination of unique arrays that can be form.
  - duplicates do not count

Data Structure:
  - use map to create Set

Algorithm:
  - iterate through input
    - select each subarray => create SET
  - return the product of all the lengths of array
 */

  function solve(nested) {
    let unique = nested.map(array =>[... new Set(array)].length);
    return unique.reduce((acc,cur) => acc * cur, 1);
  }
  console.log(solve([[1,2],[4,4],[5,6,6]]))