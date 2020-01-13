/**
 * Execution   : default node    cmd>node.stockAccountManagement.js
 * 
 * purpose     : to find total share of each stock and total price of all the stock
 * 
 * @description :Write a program to read in Stock Names, Number of Share, Share Price. Print a Stock Report with total value of each Stock and the total value of Stock.
 * @file        :stockAccountManagement.js
 * @overview    :using json to retrive data and using several condtion to display the data
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :13-1-2020
 * */
const access = require('./stockAccountManagementBL');
const fs = require('fs');
let pkg = JSON.parse(fs.readFileSync('./stock.json'));
access.stockAccountManagement(pkg);