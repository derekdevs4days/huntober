/*
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

Problem:
  input: string 
  output: an array sorted alphabetically by the final character in each word.

Examples:

input: 'man i need a taxi up to ubud'
output: ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']

input:'what time are we climbing up the volcano'
output: ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']

Data Structure:
  - transform string input to array and sort.

Algorithm:
  - convert string to array.
  - sort array by last character
      - check last index of each word
  return sorted array
*/

function last(str) {
   return str.split(' ').sort((a,b) => a.slice(-1).localeCompare(b.slice(-1)));
}
console.log(last('man i need a taxi up to ubud'))
