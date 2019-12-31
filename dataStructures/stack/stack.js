/**
 * Execution   : default node    cmd>node.stack.js
 * 
 * purpose     : to find whether the user input is balanced
 * 
 * 
 * @description :Take an Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used to order the performance of operations. Ensure parentheses must appear in a balanced fashion.
 * @file        :stack.js
 * @overview    :using stack operation like push,pop,isEmpty in order to get the output
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :31-12-2019
 * */
let readline = require('readline-sync');
let access = require('./stackBL');
let expression = readline.question('Enter an Arithmetic Expression');
if (expression==='') {
    console.log('give valid input');
} else {
    access.stack(expression);
}