/**
 * @module(Array)userString - array of strings
 */
exports.toSortString = (userString) => {
    try {
        console.log(userString.length);
        let min = userString[0]; //setting first index value as min
        for (let i = 0; i < userString.length; i++) { //to iterate all the string in the array
            if (userString[i] > userString[i + 1]) { //checking which string is greater
                min = userString[i + 1];
                userString[i + 1] = userString[i]; //swapping
                userString[i] = min; //swapping
                console.log('swapping ' + userString[i] + ' and ' + userString[i + 1]);
                i = 0; //when swapping is success i am checking from start
            }
        }
        console.log('after insertion sort ' + userString); //after insertion sort

    } catch (error) {
        console.log(error);

    }
}