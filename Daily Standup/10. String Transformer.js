function stringTransformer(str) {
  let finalStr = "";
  str = str.split(' ').reverse().join(' ');
  
  for (let word of str) {
    if (word === ' ') {
      final += ' ';
      continue;
    }
    if (word === word.toUpperCase()) final += word.toLowerCase(); 
    if (word === word.toLowerCase()) final += word.toUpperCase();
  }
  return finalStr;
}