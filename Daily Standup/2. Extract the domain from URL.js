/*
String url. Will it always be a string? Any other data types?

Return a string that is just the domain with out URL components.

Algorithm:
- Replace begining
    - http:// with ''
    - https:// with ''
    - www.with ''
- Split at the '.'
- Return 0 index of the arr.

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet

*/
function domainName(string) {
  string = string.replace('http://', '').replace('https://','').replace('www.','');
  return string.split('.')[0];
}
console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://www.cnet.com"));
