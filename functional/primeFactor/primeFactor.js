/**
 * Execution   : default node    cmd>node.primeFactor.js
 * 
 * purpose     : To find prime factor
 * 
 * 
 * @description :Computes the prime factorization of N using brute force.
 * @file        :primeFactor.js
 * @overview    :user will give an input and must need to find the prime factor of that number
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :20-12-2019
 * */
let readline = require('readline-sync');
let nthno = readline.question('Enter the value to find Prime Factorization');
let util = require('./primeFactorBL');
if (nthno === '') {
    console.log('Give valid input');

} else
    util.primeFactor(nthno);