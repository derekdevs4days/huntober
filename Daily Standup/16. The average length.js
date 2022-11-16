/*
Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3


- find the rounded average length of input 
- use map and repeat to return  correct array

 */

function averageLength(arr) {
  let average = Math.round((arr.reduce((a,c) => a + c.length, 0)) / (arr.length));
  return arr.map(el => el[0].repeat(average));
}
console.log(averageLength(['aa', 'bbb', 'cccc'] ))