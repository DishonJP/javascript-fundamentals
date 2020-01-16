/**
 * Execution   : default node    cmd>node.commercialDataProcessing.js
 * 
 * purpose     : no make it easy to access the data
 * 
 * @description :Maintain the List of CompanyShares in a Linked List So new CompanyShares can be added or removed easily. Do not use any Collection Library to implement Linked List.
 * @file        :commercialDataProcessing.js
 * @overview    :using Linkedlist to add or remove data
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :16-1-2020
 * */
const access = require('./commercialDataProcessingBL');
const fs = require('fs-sync');
//let data = fs.read('./PersonData.txt')
access.commercialDataProcessing();