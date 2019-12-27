/**
 * @module(number)year-user input
 */
exports.toCheckYear = (year) => {
    try {
        let leapYear;
        if (year.toString().length === 4) {//checking length of year
            leapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0) ? 'Leap year' : 'Not a Leap Year';//checking whether it is leap year or not
        } else {
            return 'Year should be of 4 digit';

        }
        return leapYear;
    } catch (error) {
        console.log(error);

    }
}