/**
 * @module(number)nthNo-user input
 */
exports.harmonicNumber = (nthNo) => {
    try {
        let value = 1;
        for (let index = 2; index <= nthNo; index++) { //to loop till user entered number
            value = value + 1 / index; //mathematical calculation to find harmonic number
        }
        console.log(value);
    } catch (error) {
        console.log(error);
    }
}