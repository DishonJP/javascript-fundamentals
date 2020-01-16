/**
 * Execution   : default node    cmd>node.singleton.js
 * 
 * purpose     : to create only one instance of a class
 * 
 * 
 * @description :The singleton pattern is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.
 * @file        :singleton.js
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :16-1-2020
 * */
const access = require('./singletonBL');
access.singleton();