const readline=require('readline-sync');
const access=require('./anagramBL');
console.log('Program to check anagram');
let string1=readline.question('Enter the first String : ');
let string2=readline.question('Enter the second String : ');
access.toCheckAnagram(string1,string2);