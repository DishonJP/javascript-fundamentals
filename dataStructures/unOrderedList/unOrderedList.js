/**
 * Execution   : default node    cmd>node.unOrderedList.js
 * 
 * purpose     : add or remove a string
 * 
 * 
 * @description :Read the Text from a file, split it into words and arrange it as Linked List. Take a user input to search a Word in the List. If the Word is not found then add it to the list, and if it found then remove the word from the List. In the end save the list into a file.
 * @file        :unOrderedList.js
 * @overview    :add and remove elements using custom methods 
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :30-12-2019
 * */
const access = require('./unOrderedListBL');
let fs = require('fs');
let content = fs.readFileSync('unOrderedList.txt', 'utf8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        return data;
    }
});
let splitContent = content.split(' ');
access.unOrderedList(splitContent);