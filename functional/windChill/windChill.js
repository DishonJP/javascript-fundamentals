/**
 * Execution   : default node    cmd>node.windChill.js
 * 
 * purpose     : To find wind chill
 * 
 * 
 * @description :to find chillness of wind by knowing the temperatue and windSpeed
 * @file        :windChill.js
 * @overview    :user must need to give value for temperature and windspeed by using that we can calculate the wind chill
 * @author      :Dishon <dishonjp11@gmail.com>
 * @version     :1.0
 * @since       :23-12-2019
 * */
const readline = require('readline-sync');
const access = require('./windChillBL');
let temperature, windSpeed;
temperature = readline.question('Enter temperature in fahrenheit : ');
windSpeed = readline.question('Enter wind speed in miles per hour : ');
if (temperature === '' && windSpeed === '') {
    console.log('Give valid input');

} else console.log(access.toFindWindChill(temperature, windSpeed));