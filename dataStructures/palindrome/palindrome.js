/**
 * Execution   : default node    cmd>node.palindrome.js
 * 
 * purpose     : to find a string is palindrome
 * 
 * 
 * @description :A palindrome is a string that reads the same forward and backward, for example, radar, toot, and madam. We would like to construct an algorithm to input a string of characters and check whether it is a palindrome.
                 I/P -> Take a String as an Input.
 * @file        :palindrome.js
 * @overview    :using queue to perform those operation 
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :31-12-2019
 * */
const readline = require('readline-sync');
const access = require('./palindromeBL');
let data = readline.question('Enter a string to find Palindrome or Not : ');
if (data === '') {
    console.log('Give valid input');
} else {
    access.queue(data);
}