const readline=require('readline-sync');
const access=require('./stopWatchBL');
let start=readline.question('enter start to start the stopwatch : ');
if (start=='start') 
{
   console.log('StopWatch Started');
   access.start();
} else {
    console.log('Wrong Input');   
}
