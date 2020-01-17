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
fs.readFile('./details.json', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        let dat = JSON.parse(data);
        fs.writeFileSync('./updatedDetails.json', access.dataManagement(dat));
    }
});