/*
Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.
Notes: There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

Examples
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"\

Algorithm:
  - convert input to lower case
  - create an empty object with keys as vowels and its value is 0;
  - create a string of vowels
  
  - iterate through input
    - if char exist in object... increment
  - iterate through object and return vowels with 0
*/

function absentVowel(x) {
  x = x.toLowerCase();
  const VOWELS = 'aeiou';
  const seen = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  for (let char of x) {
    if (seen.hasOwnProperty(char)) seen[char]++;
  }
  for (let key in seen) {
    if (!seen[key]) return VOWELS.indexOf(key);
  }
}