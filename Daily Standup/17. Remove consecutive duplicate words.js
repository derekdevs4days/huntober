/*
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"

Algorithm:
- convert string input into array
- declare empty string `result`
- iterate through array
    - if current does not equal next => append current to result with spaces
- return result and remove extra trailing space.
 */
function removeConsecutiveDups(string) {
  string = string.split(' ');
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i + 1]) result += string[i] + " ";
  }
  return result.trimEnd();
}

console.log(removeConsecutiveDups('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))