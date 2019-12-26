const access=require('./array2DBL');
const readline=require('readline-sync');
let row=readline.questionInt('how many rows do you need :');
let column=readline.questionInt('how many column do you need :');
let intialArray=access.initializeArray(row,column);
access.displayArray(intialArray);
