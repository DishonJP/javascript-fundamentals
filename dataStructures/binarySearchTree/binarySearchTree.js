/**
 * Execution   : default node    cmd>node.binarySearchTree.js
 * 
 * purpose     : find the number of different binary search trees that can be created using these nodes.
 * 
 * 
 * @description :First line will contain an integer, T, number of test cases. Then T lines follow, where each line represent a test case. Each test case consists a single integer, N, where N is the number of nodes in the binary search tree.
 * @file        :binarySearchTree.js
 * @overview    :add elements using custom methods 
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :30-12-2019
 * */
const readline = require('readline-sync');
const access = require('./binarySearchTreeBL');
let size = readline.question('Enter the size of array : ');
if (size==='') {
    console.log('Give valid input');
} else {
    access.binarySearchTree(parseInt(size));
}