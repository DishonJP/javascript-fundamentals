var startTime, endTime;
const readline=require('readline-sync');
exports.start=()=> {
    startTime = new Date();
    let stop=readline.question('enter stop to stop the stopwatch : ');
    if (stop=='stop') {
        console.log('StopWatch Stopped');
        end();
    } else {
        console.log('Wrong input');      
    }
  };
  
function end() {
    endTime = new Date();
    var milliSecond = endTime - startTime;
    console.log(milliSecond + " in Milliseconds");
    var seconds=milliSecond /= 1000;
    //var seconds = Math.round(milliSecond);
    console.log(seconds + " in Seconds");
  }