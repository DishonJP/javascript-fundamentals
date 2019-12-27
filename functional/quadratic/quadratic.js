/**
 * Execution   : default node    cmd>node.quadratic.js
 * 
 * purpose     : To find root for given equation
 * 
 * 
 * @description :to find the roots of the equation a*x*x + b*x + c.
 * @file        :quadratic.js
 * @overview    :first finding the value for both x and using those values in equation
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :22-12-2019
 * */
const readline = require('readline-sync');
const access = require('./quadraticBL');
let a, b, c;
console.log('to find quadratic eqn');
a = readline.question('Enter the value for a :');
b = readline.question('Enter the value for b :');
c = readline.question('Enter the value for c :');
if (a === '' && b === '' && c === '') {
    console.log('Give valid input');
} else {
    let delta = access.toFindDelta(a, b, c)
    let x1 = access.toFindRoot1(delta, a, b);
    let x2 = access.toFindRoot2(delta, a, b);
    console.log(access.toFindEquation(x1, x2, a, b, c));
}