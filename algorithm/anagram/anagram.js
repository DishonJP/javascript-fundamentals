/**
 * Execution   : default node    cmd>node.anagram.js
 * 
 * purpose     : To find any two strings are anagram
 * 
 * 
 * @description :One string is an anagram of another if the second is simply a rearrangement of the first. For example, 'heart' and 'earth' are anagrams.
 * @file        :anagram.js
 * @overview    :get two strings as input from user and check whether it is anagram are not
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :23-12-2019
 * */
const readline = require('readline-sync');
const access = require('./anagramBL');
console.log('Program to check anagram');
let string1 = readline.question('Enter the first String : ');
let string2 = readline.question('Enter the second String : ');
if (string1 === '' && string2 === '') {
    console.log('Give proper input');

} else {
    access.toCheckAnagram(string1, string2);
}