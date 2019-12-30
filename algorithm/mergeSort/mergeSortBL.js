/**
 * @module mergeSort
 * @param {Array} arr - array of numbers
 */
exports.mergeSort = (arr) => {
    /**
     * dividing.
     *
     * @param	mixed	arr	
     * @return	void
     */
    function dividing(arr) {
        if (arr.length < 2) { // checking length of currently passed array is less than 2
            return arr;
        } else {
            let mid = Math.floor(arr.length / 2); //to find middle index of the array
            let leftArray = arr.slice(0, mid); //from middle to left one array
            let rightArray = arr.slice(mid, arr.length); //from middle to write one array
            return conquer(dividing(leftArray), dividing(rightArray)); //using recursion to call the function till the condition fails
        }
    }
    /**
     * conquer.
     *
     * @param	mixed	leftArray 	
     * @param	mixed	rightArray	
     * @return	mixed
     */
    function conquer(leftArray, rightArray) {
        let sortedArray = []; //array for storing data
        while (leftArray.length && rightArray.length) { //looping till letft and right array becomes empty
            if (leftArray[0] < rightArray[0]) { //comparing values
                sortedArray.push(leftArray.shift()); //pushing value into array meanwhile deleting current value from left array

            } else {
                sortedArray.push(rightArray.shift()); //pushing value into array meanwhile deleting current value from right array
            }
        }
        return sortedArray.concat(leftArray.concat(rightArray));//combining left out elements
    }
    console.log(dividing(arr));

}