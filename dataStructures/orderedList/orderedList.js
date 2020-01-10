/**
 * Execution   : default node    cmd>node.orderedList.js
 * 
 * purpose     : add or remove a user number
 * 
 * 
 * @description :Read .a List of Numbers from a file and arrange it ascending Order in a Linked List. Take user input for a number, if found then pop the number out of the list else insert the number in appropriate position.
 * @file        :orderedList.js
 * @overview    :add and remove elements using custom methods 
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :30-12-2019
 * */
const fs = require('fs');
const access = require('./orderedListBL');
let content = fs.readFileSync('orderedList.txt', 'utf8');
console.log();
access.orderedList(content.split(','));