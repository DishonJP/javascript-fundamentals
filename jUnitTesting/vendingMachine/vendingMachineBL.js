/**
 * @module (Array,number)arr,amount - notes are stored in arr,user input
 */
exports.toCalculateNotes = (arr, amount) => {
    try {
        for (let i = 0; i < arr.length; i++) { //to loop through every index
            let count = 0;
            while (amount > arr[i]) { //checking amount is greater than arr elements
                amount = amount - arr[i]; //calculating amount
                count++; //to find how many notes
            }
            arr[i] >= 10 ? console.log(arr[i] + ' rs notes ' + count) : console.log(arr[i] + ' rs change ' + count); //to display notes and changes
        }
    } catch (error) {
        console.log(error);

    }
}