/**
 * Execution   : default node    cmd>node.replaceString.js
 * 
 * purpose     : replace a string
 * 
 * 
 * @description :replace a given string with user given input
 * @file        :replaceString.js
 * @overview    :to replace current string with user given string
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :20-12-2019
 * */
let readline = require('readline-sync');
const access = require('./replaceStringBL');
let name = readline.question('Enter your name: ');
if (name === '') {
    console.log('Give valid input');
} else {
    let replacedString = access.replaceString(name);
    if (replacedString !== '') {
        console.log(replacedString);
    }
}