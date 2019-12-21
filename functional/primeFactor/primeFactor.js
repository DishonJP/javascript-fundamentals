/**
 * Execution   : default node    cmd>node.primeFactor.js
 * 
 * purpose     : To find Prime Factorization
 * 
 * 
 * @description
 * 
 * @file        :primeFactor.js
 * @overview    :to generate Prime factor for a given value
 * 
 * */
let readline=require('readline-sync');
let nthno=readline.questionInt('Enter the value to find Prime Factorization');
let util=require('./primeFactorBL');
util.primeFactor(nthno);
