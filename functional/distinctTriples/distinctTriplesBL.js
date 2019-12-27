/**
 * @module(Array)arr - created array using user given size
 */
const readline = require('readline-sync');
exports.initializeValue = (arr) => {
    try {
        for (let i = 0; i < arr.length; i++) { //to iterate every index of array
            arr[i] = readline.questionInt('enter the value for index ' + i + ' : '); // get value from user for specified index
        }
        return arr; //returing array
    } catch (error) {
        console.log(error);
    }
}
/**
 * @module(Array)arr - array with values
 */
exports.distinctTriples = (arr) => {
    try {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] + arr[i + 1] + arr[i + 2] === 0) { //checking distinct triplets
                console.log(arr[i], arr[i + 1], arr[i + 2], ' are distinct triples');
            }
        }
    } catch (error) {
        console.log(error);

    }
}