/**
 * Execution   : default node    cmd>node.harmonicNumber.js
 * 
 * purpose     : To find harmonic number
 * 
 * 
 * @description :Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N
 * @file        :harmonicNumber.js
 * @overview    :find the harmonic number for an given user input
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :20-12-2019
 * */
let access = require('./harmonicNumberBL');
let readline = require('readline-sync');
let nthNo = readline.question('Enter the nth harmonic no');
if (nthNo === '') {
    console.log('enter valid input');

} else {
    access.harmonicNumber(nthNo);
}