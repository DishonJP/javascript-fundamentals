/**
 * Execution   : default node    cmd>node.array2D.js
 * 
 * purpose     : to store and display any type of value
 * 
 * 
 * @description :A library for reading in 2D arrays of integers, doubles, or booleans from standard input and printing them out to standard output.
 * @file        :array2D.js
 * @overview    :get row and column from user and generate a 2D array and store any type of values
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :23-12-2019
 * */
const access = require('./array2DBL');
const readline = require('readline-sync');
let row = readline.question('how many rows do you need :');
let column = readline.question('how many column do you need :');
if (row === '' && column === '') {

} else {
    let intialArray = access.initializeArray(row, column);
    access.displayArray(intialArray);
}