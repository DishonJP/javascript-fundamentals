/**
 * Execution   : default node    cmd>node.mergeSort.js
 * 
 * purpose     : to sort the given number
 * 
 * 
 * @description :program to do Merge Sort of list of Strings.
 * @file        :mergeSort.js
 * @overview    :sorting using merge sort algorithm
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :30-12-2019
 * */
const access = require('./mergeSortBL');
let arr = [12, 43, 23, 3, 36, 45, 7, 11, 19];
access.mergeSort(arr);