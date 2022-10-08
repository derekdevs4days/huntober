/*
The Challenge - Day 1
This week we will be discovering hidden messages by manipulating a given string. Your solutions should account for any non-empty string. On Friday we'll combine our functions to decode a message.

Oh no! How did this happen?! Somehow similar-looking numbers and letters have been confused in our document. Someone may have been messing around writing naughty words on a calculator. We need to get them back to normal.

Below, find the mix-ups that have been made. Note: the confusion happened in both directions and was case-sensitive.

'0' <-> 'O'      '5' <-> 'S'
'1' <-> 'I'      '6' <-> 'G'
'2' <-> 'Z'      '7' <-> 'L'
'3' <-> 'E'      '8' <-> 'B'
'4' <-> 'h'      '9' <-> 'q'
As an example, here is how a string looks before and after the characters are fixed:


"PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." 
"PRO-TIP #498: IT'S NICE TO SAY HELLO."
Please create a function that will fix a given string of this mistake before incalculable damage can be done!

If you want to get a head start on untangling this week's message, check out my Huntober Twitter account where I've shared the full input string already.
*/

//P Given a non empty string
//R a string
//E "PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." => "PRO-TIP #498: IT'S NICE TO SAY HELLO."
//P
//Create object that holds "puzzle key".
// Declare a empty string.
// Iterate through the string.
  // if it is a key => concat value to string variable.
  // if it is a value => concat key to string variable.
  // else concat char to string variable
//return empty string variable.

function decode(string) {
  let final = "";
  const INSTRUTIONS = {
    0: 'O',
    1: 'I',
    2: 'Z',
    3: 'E',
    4: 'h',
    5: 'S',
    6: 'G',
    7: 'L',
    8: 'B',
    9: 'q'
  }

  for (let char of string) {
    let keys = Object.keys(INSTRUTIONS);
    let values = Object.values(INSTRUTIONS);

    if(keys.includes(char)) {
      final += values[keys.indexOf(char)];
    } else if (values.includes(char)) {
      final += keys[values.indexOf(char)];
    } else {
      final += char;
    }
  }
  return final;
}
console.log(decode("PRO-TIP #498: IT'S NICE TO SAY HELLO."))
console.log("PR0-T1P #hqB: 1T'5 N1C3 T0 5AY H3770." )