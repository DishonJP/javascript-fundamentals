/**
 * Execution   : default node    cmd>node.binarySearch.js
 * 
 * purpose     : To find a word from a file
 * 
 * 
 * @description :Read in a list of words from File. Then prompt the user to enter a word to search the list. The program reports if the search word is found in the list.
 * @file        :binarySearch.js
 * @overview    :To find a word given by user from a file
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :26-12-2019
 * */
const readline = require('readline-sync');
const access = require('./binarySearchBL');
let fs = require('fs');
var contents = fs.readFileSync('dishon.txt', 'utf8');
let replacedContents = contents.replace(',', ' ');
let splitString = replacedContents.split(' ');
splitString.sort();
let input = readline.question('Enter a word to search in a file : ')
if (input === '') {
    console.log('Give valid input');

} else {
    let isDataPresent = access.binarySearch(splitString, input);
    if (isDataPresent > -1) {
        console.log('Word is present in a file');
    } else {
        console.log('Word is not present in a file');
    }
}