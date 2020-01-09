/**
 * Execution   : default node    cmd>node.calendar.js
 * 
 * purpose     : to print the user required calendar
 * 
 * 
 * @description :Store the Calendar in an 2D Array, the first dimension the week of the month and the second dimension stores the day of the week. Print the result as following.
 * @file        :calendar.js
 * @overview    :using Date class to find the day and date and using some for loop to print in organised manner.
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :9-1-2020
 * */
const readline = require('readline-sync');
const access = require('./calendarBL');
let month = readline.question('Enter the month : ');
let year = readline.question('Enter the year : ');
if (month === '' || year === '' || (parseInt(month) > 12 || parseInt(month) < 1) || year.length !== 4) {
    console.log('Give valid input');
} else {
    access.calendar(parseInt(month), parseInt(year));
}