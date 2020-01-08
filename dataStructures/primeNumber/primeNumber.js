/**
 * Execution   : default node    cmd>node.primeNumber.js
 * 
 * purpose     : to find prime number within range
 * 
 * 
 * @description :Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. Store the prime numbers in a 2D Array, the first dimension represents the range 0-100, 100-200, and so on. While the second dimension represents the prime numbers in that range.
 * @file        :primeNumber.js
 * @overview    :create a 2D array and store the prime no 
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :8-1-2020
 * */
const access = require('./primeNumberBL');
let arr = new Array(10);
console.log(arr);
access.toFindPrime(arr);