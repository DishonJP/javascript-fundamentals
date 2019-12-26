const readline=require('readline-sync');
const access=require('./distinctTriplesBL');
let size=readline.questionInt('Enter how many values do u want :');
let arr=new Array(size);
access.distinctTriples(access.initializeValue(arr));

