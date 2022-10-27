/*
DESCRIPTION:
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.


 */

function duplicateEncode(string) {
  string = string.toLowerCase();
  let cache = {};
  let final = "";

  for (let char of string) {
    cache[char]? cache[char]++ : cache[char] = 1;
  }

  for (let el of string) {
    cache[el] > 1? final += ')' : final += '('
  } 

  return final;
}

console.dir(duplicateEncode("recede"))