const readline = require('readline-sync');
const access = require('./permutationBL');
let string = readline.question('Enter a string');
if (string === '') {
    console.log('Give valid input');
} else {
    access.toFindPermutation(string);
}