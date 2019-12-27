/**
 * @module(Array,number)sortArray,input - sorted array and user input
 * 
 */
exports.binarySearch = (sortArray, input) => {
    try {
        let front = 0, //to pointing to first index
            end = sortArray.length - 1; //to pointing to last index
        let mid = Math.floor((front + end) / 2); //to pointing to middle index
        console.log(sortArray);
        while (front <= end && sortArray[mid] != input) { //to check the string is present in that specific index
            if (input < sortArray[mid]) { //to check whether the value is present left from mid index
                end = mid - 1;
            } else {
                front = mid + 1;
            }
            mid = Math.floor((front + end) / 2);
        }
        console.log(mid);
        return (sortArray[mid] != input) ? -1 : mid + 1; //to check whether the word is present or not
    } catch (error) {
        console.log(error);

    }

}