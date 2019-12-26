let readline=require('readline-sync');
const access=require('./replaceStringBL');
let name=readline.question('Enter your name: ');

console.log(access.replaceString(name));
