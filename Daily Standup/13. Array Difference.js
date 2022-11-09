/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

Algorithm:
  - declare a variable 'results' and initialize it to []
  - declare a variable 'obj' and initialize it to {}

  - iterate through array b and build out 'obj'

  - iterate through array a
    - if element from array a does not exist in the object push it to 'results'

  - return final
 */

  function arrayDiff(arrA, arrB) {
    let result = [];
    let obj = {};

    for (let el of arrB) {
      obj[el]? null : obj[el] = true;
    }
    
    for (let el of arrA) {
      obj[el]? null : result.push(el)
    }
    return result;
  }
  console.log(arrayDiff([1,2,3], [1,2]))