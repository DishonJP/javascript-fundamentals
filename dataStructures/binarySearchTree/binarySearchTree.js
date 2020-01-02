const readline = require('readline-sync');
const access = require('./binarySearchTreeBL');
let size = readline.question('Enter the size of array : ');
if (size==='') {
    console.log('Give valid input');
} else {
    access.binarySearchTree(parseInt(size));
}