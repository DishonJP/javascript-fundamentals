/**
 * Execution   : default node    cmd>node.distance.js
 * 
 * purpose     : to find distance between two points
 * 
 * 
 * @description :to calculate the distance from one point to another point
 * @file        :distance.js
 * @overview    :get input from the user and calculate the distance using the formula.
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :23-12-2019
 * */
const readline = require('readline-sync');
const access = require('./distanceBL')
let pointAt = readline.question('Enter the value for point 1 : ');
let pointTo = readline.question('Enter the value for point 2 : ');
if (pointTo === '' && pointAt === '') {

} else {
    let firstPoint = parseInt(pointAt);
    let secondPoint = parseInt(pointTo);
    console.log(access.findDistance(firstPoint, secondPoint));
}