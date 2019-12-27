/**
 * Execution   : default node    cmd>node.ticTacToe.js
 * 
 * purpose     : To find who wins Tic-Tac-Toe Game
 * 
 * 
 * @description : Write a Program to play a Cross Game or Tic-Tac-Toe Game. Player 1 is the Computer and the Player 2 is the user. Player 1 take Random Cell that is the Column and Row. 
 * @file        :ticTacToe.js
 * @overview    :play the game till the end and find the winner
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :23-12-2019
 * */
const access = require('./ticTacToeBL');
const readline = require('readline-sync');
let arr = new Array(3);
for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(3);
}
let choose = readline.question('Player choose any one X or O : ');
if (choose === '') {
    console.log('Give valid input');
} else {
    access.playingGame(choose, arr);
}