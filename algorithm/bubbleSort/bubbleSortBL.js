/**
 * @module(Array)arrNumber - array of number
 */
exports.toSortString = (arrNumber) => {
    try {

        let value = arrNumber.length;
        while (value > 0) {
            let min = arrNumber[0]; //setting first index value as min
            for (let i = 0; i < arrNumber.length; i++) { //to iterate all the string in the array
                if (arrNumber[i] > arrNumber[i + 1]) { //checking which string is greater
                    min = arrNumber[i + 1];
                    arrNumber[i + 1] = arrNumber[i]; //swapping
                    arrNumber[i] = min; //swapping
                    console.log('swapping ' + arrNumber[i] + ' and ' + arrNumber[i + 1]);
                }
            }
            value--;
        }

        console.log('after bubbleSort ' + arrNumber); //after bubble sort


    } catch (error) {
        console.log(error);

    }
}