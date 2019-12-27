/**
 * Execution   : default node    cmd>node.distinctTriples.js
 * 
 * purpose     : to find distinct triples
 * 
 * 
 * @description :A program with cubic running time. Read in N integers and counts the   number of triples that sum to exactly 0.
 * @file        :distinctTriples.js
 * @overview    :get value from the user and find distinct triples
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :23-12-2019
 * */
const readline = require('readline-sync');
const access = require('./distinctTriplesBL');
let size = readline.question('Enter how many values do u want :');
if (size === '') {
    console.log('Give valid input');
} else {
    let value = parseInt(size);
    let arr = new Array(value);
    access.distinctTriples(access.initializeValue(arr));
}