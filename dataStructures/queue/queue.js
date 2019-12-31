/**
 * Execution   : default node    cmd>node.queue.js
 * 
 * purpose     : withdraw or deposit amount
 * 
 * 
 * @description :Create a Program which creates Banking Cash Counter where people come in to deposit Cash and withdraw Cash. Have an input panel to add people to Queue to either deposit or withdraw money and dequeue the people. Maintain the Cash Balance.
 * @file        :queue.js
 * @overview    :using queue to perform those operation 
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :31-12-2019
 * */
const readline = require('readline-sync');
const access = require('./queueBL');
let status = readline.question('Hello sir/mam Do you like to withdraw or deposit :');
if (status === '') {
    console.log('Give valid input');
} else {
    access.queue(status);
}