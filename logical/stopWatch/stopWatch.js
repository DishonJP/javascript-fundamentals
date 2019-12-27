/**
 * Execution   : default node    cmd>node.stopWatch.js
 * 
 * purpose     : to calculate time between 2 interval
 * 
 * @description :Write a Stopwatch Program for measuring the time that elapses between the start and end clicks
 * @file        :stopWatch.js
 * @overview    :to find time
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :23-12-2019
 * */
const readline = require('readline-sync');
const access = require('./stopWatchBL');
let start = readline.question('enter start to start the stopwatch : ');
if (start === '') {
    console.log('Give valid input');
} else {
    if (start == 'start') {
        console.log('StopWatch Started');
        access.start();
    } else {
        console.log('Wrong Input');
    }

}