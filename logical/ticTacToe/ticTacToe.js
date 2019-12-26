const access=require('./ticTacToeBL');
const readline=require('readline-sync');
let arr=new Array(3);
for (let i = 0; i < arr.length; i++) {
    arr[i]=new Array(3);
}
let choose=readline.question('Player choose any one X or O : ');
access.playingGame(choose,arr);
