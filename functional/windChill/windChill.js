const readline=require('readline-sync');
const access=require('./windChillBL');
let temperature,windSpeed;
temperature=readline.questionInt('Enter temperature in fahrenheit : ');
windSpeed=readline.questionFloat('Enter wind speed in miles per hour : ');
console.log(access.toFindWindChill(temperature,windSpeed));

