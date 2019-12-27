/**
 * @module(number,number)row,column - used for creating 2D Array
 */
const readline = require('readline-sync');
exports.initializeArray = (row, column) => {
    try {
        let arr = new Array(row);
        for (let i = 0; i < row; i++) { //creating 2D array
            arr[i] = new Array(column);
        }
        for (let i = 0; i < row; i++) {

            for (let j = 0; j < column; j++) {
                arr[i][j] = (readline.question('enter the value for index:' + i + ',' + j + ' : ')); //storing values in array
            }
        }

        return arr; //returing array
    } catch (error) {
        console.log(error);

    }

}
/**
 * @module(Array)-initialArray - to display the values present in the array
 */
exports.displayArray = (intialArray) => {
    try {
        for (let i = 0; i < intialArray.length; i++) { //helps to display the value from index to index
            for (let j = 0; j < intialArray.length; j++) {
                {
                    console.log(intialArray[i][j]);
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
}