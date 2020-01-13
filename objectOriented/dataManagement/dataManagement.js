/**
 * Execution   : default node    cmd>node.dataManagement.js
 * 
 * purpose     : to find total cost for the inventory
 * 
 * @description :Create a JSON file having Inventory Details for Rice, Pulses and Wheats with properties name, weight, price per kg.
 * @file        :dataManagement.js
 * @overview    :retriving data from json file and finding the amount
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :13-1-2020
 * */
const access = require('./dataManagementBL');
const fs = require('fs');
let data = JSON.parse(fs.readFileSync('./details.json'));
access.dataManagement(data);