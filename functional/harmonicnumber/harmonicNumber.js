/**
 * Execution   : default node    cmd>node.harmonnicNumber.js
 * 
 * purpose     : To find nth Harmonic Number
 * 
 * 
 * @description
 * 
 * @file        :harmonicNumber.js
 * @overview    :to generate harmonic number for a given value
 * 
 * */
let access = require('./harmonicNumberBL');
let readline=require('readline-sync');
let nthNo=readline.questionInt('Enter the nth harmonic no');
access.harmonicNumber(nthNo);