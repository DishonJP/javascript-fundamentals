/**
 * @module(number)nthnumber-user input
 */
exports.powerOf2 = (nthNumber) => {
    try {
        let i = 0;
        if (nthNumber > 0) { //to check user input should be greater than 0
            while (i <= nthNumber) {
                console.log('2 power ' + i + ' is ' + Math.pow(2, i)); //calculating value
                i++;
            }
        } else {
            console.log('value should be greater than 0');
        }
    } catch (error) {
        console.log(error);
    }
}