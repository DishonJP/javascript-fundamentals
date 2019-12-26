const readline=require('readline-sync');
const access=require('./distanceBL')
let point1=readline.questionInt('Enter the value for point 1 : ');
let point2=readline.questionInt('Enter the value for point 2 : ');
console.log(access.findDistance(point1,point2));

