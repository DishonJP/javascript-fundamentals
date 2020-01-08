/**
 * Execution   : default node    cmd>node.hashingFunction.js
 * 
 * purpose     : to store and fetch the no from file
 * 
 * 
 * @description :Create a Slot of 10 to store Chain of Numbers that belong to each Slot to efficiently search a number from a given set of number.
 * @file        :hashingFunction.js
 * @overview    :using hashmap datastructure in order to complete the task
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :8-1-2020
 * */
const access = require('./hashingFunctionBL');
const fs = require('fs');
let content = fs.readFileSync('numbers.txt', 'utf8');
access.hashingFunction(content.split(','));