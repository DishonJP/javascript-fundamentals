const readline=require('readline-sync');
const access=require('./leapYearBL');
let year=readline.questionInt('Enter the year to check whether its a leap year or not ');
console.log(access.toCheckYear(year));
