const readline=require('readline-sync');
const access=require('./quadraticBL');
let a,b,c;
console.log('to find quadratic eqn');
a=readline.questionInt('Enter the value for a :');
b=readline.questionInt('Enter the value for b :');
c=readline.questionInt('Enter the value for c :');
let delta=access.toFindDelta(a,b,c)
let x1=access.toFindRoot1(delta,a,b);
let x2=access.toFindRoot2(delta,a,b);
console.log(access.toFindEquation(x1,x2,a,b,c));
