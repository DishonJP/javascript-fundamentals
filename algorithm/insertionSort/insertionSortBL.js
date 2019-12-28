/**
 * @module(Array)arr - array of strings
 */
exports.toInsertionSort = (arr) => {
    try {
        console.log('before insertion sort ' + arr);
        let value = Math.floor(arr.length / 2);//for looping length by 2 times
        while (value > 0) {
            for (let i = 0; i < arr.length; i++) {//to move from first index to last index
                let min = arr[0];//tempory min value
                if (arr[i] > arr[i + 1]) {//check string is bigger or smaller
                    min = arr[i + 1];
                    arr[i + 1] = arr[i];//swapping
                    arr[i] = min;//swapping

                }
            }
            for (let i = arr.length - 1; i >= 0; i--) {//to move from last index to first index
                let min = arr[arr.length - 1];
                if (arr[i] < arr[i - 1]) {
                    min = arr[i - 1];
                    arr[i - 1] = arr[i];
                    arr[i] = min;
                }
            }
            value--;
        }
        console.log('After insertion sort ' + arr);
    } catch (error) {
        console.log(error);

    }

}