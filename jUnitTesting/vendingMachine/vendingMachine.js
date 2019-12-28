/**
 * Execution   : default node    cmd>node.vendingMachine.js
 * 
 * purpose     : to find change of an user given amount
 * 
 * 
 * @description :There is 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes which can be returned by Vending Machine. Write a Program to calculate the minimum number of Notes as well as the Notes to be returned by the Vending Machine as a Change.
 * @file        :vendingMachine.js
 * @overview    :using array to store the values and asking user to enter the value and doing some process
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :28-12-2019
 * */
const readline = require('readline-sync');
const access = require('./vendingMachineBL');
let arr = [1000, 500, 100, 50, 10, 5, 2, 1];
let amountInString = readline.question('Enter the amount in vender machine : ');
if (amountInString === '') {
    console.log('Enter valid input ');
} else {
    let amount = parseInt(amountInString);//converting string to number
    access.toCalculateNotes(arr, amount);
}