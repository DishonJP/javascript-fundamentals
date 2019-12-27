/**
 * Execution   : default node    cmd>node.leapYear.js
 * 
 * purpose     : To find coupon number
 * 
 * 
 * @description :To find the user enter year is leap year or not.
 * @file        :leapYear.js
 * @overview    :Generate n random numbers and find the user entered number
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :20-12-2019
 * */
const readline = require('readline-sync');
const access = require('./leapYearBL');
let year = readline.question('Enter the year to check whether its a leap year or not ');
if (year === '') {
    console.log('Give valid input');
} else
    console.log(access.toCheckYear(year));