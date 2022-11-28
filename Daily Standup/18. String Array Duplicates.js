/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Algorithm:
- create a helper function that removes consecutive duplicates
    - declare empty string (final)
    - iterate through string.
        - if char is same as next charater SKIP
        - append char to final
    - return final;

- iterate through array
    - transform each element with helper function
- return transformed array    
*/

function dup(s) {
  return s.map(el => transformString(el));
}

function transformString(str) {
  let final = '';
  for (let char of str) {
    if (char === final[final.length - 1]) continue;
    final += char;
  }
  return final;
}

console.log(dup(["abracadabra","allottee","assessee"]))