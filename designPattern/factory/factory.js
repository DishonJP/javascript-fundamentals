/**
 * Execution   : default node    cmd>node.factory.js
 * 
 * purpose     : to create instance of user request
 * 
 * 
 * @description : to create a Computer Factory that can Produce PC, Laptop and Server Class Computers. As Shown in the Figure Below Create an Abstract Computer Class and PC, Laptop and Server inherit from Computer and ComputerFactory is able to create the corresponding Computer Object on request.
 * @file        :factory.js
 * @overview    :to create instance of user request with factory class
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :16-1-2020
 * */
const access = require('./factoryBL');
const readline = require('readline-sync');
let data = readline.question('Enter the class to create instance : ');
access.factory(data);