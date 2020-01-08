const readline = require('readline-sync');
const access = require('./calendarBL');
let month = readline.question('Enter the month : ');
let year = readline.question('Enter the year : ');
if (month === '' && year === '' && (month <= 12 && month >= 1) && year.length === 4) {
    console.log('Give valid input');
} else {
    access.calendar(parseInt(month), parseInt(year));
}