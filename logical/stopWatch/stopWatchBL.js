/**
 * @module()
 */
var startTime, endTime;
const readline = require('readline-sync');
exports.start = () => {
  startTime = new Date();//helps to get the current time in millisecond
  let stop = readline.question('enter stop to stop the stopwatch : ');
  if (stop == 'stop') {
    console.log('StopWatch Stopped');
    endTime = new Date();//helps to get the current time in millisecond
    var milliSecond = endTime - startTime;//to find difference
    console.log(milliSecond + " in Milliseconds");
    var seconds = Math.floor(milliSecond /= 1000);
    console.log(seconds + " in Seconds");
  } else {
    console.log('Wrong input');
  }
};