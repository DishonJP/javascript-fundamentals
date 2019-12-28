/**
 * Execution   : default node    cmd>node.insertionSort.js
 * 
 * purpose     : To sort the number
 * 
 * 
 * @description :Reads in integers prints them in sorted order using Bubble Sort.
 * @file        :insertionSort.js
 * @overview    :sorting using bubble sort
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :27-12-2019
 * */
const access = require('./bubbleSortBL');
let arrNumber = [10, 12, 3, 56, 34, 2, 24];
console.log('Before bubbleSort ' + arrNumber);
access.toSortString(arrNumber);