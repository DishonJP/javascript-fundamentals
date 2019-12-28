/**
 * Execution   : default node    cmd>node.insertionSort.js
 * 
 * purpose     : To sort the strings
 * 
 * 
 * @description :Reads in strings and prints them in sorted order using insertion sort.
 * @file        :insertionSort.js
 * @overview    :sorting using insertion sort
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :27-12-2019
 * */
const access = require('./insertionSortBL');
let arrString = ['dishon', 'is', 'getting', 'bored'];
console.log('Before insertion sort ' + arrString);
access.toSortString(arrString);