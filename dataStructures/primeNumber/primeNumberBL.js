/**
 * @module toFindPrime
 * @param {Array} arr - normal array
 */
exports.toFindPrime = (arr) => {
    /**
     * isPrime.
     * @param	{number} index	
     * @return	boolean
     */
    function isPrime(index) { // to find prime no
        let i = 2;
        while (i <= index / 2) {
            if (index % i != 0) {
                i++;
            } else
                return false;
        }
        return true; //when it is prime no it returns true
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(100); //creating 2D array
    }
    let j = 0; //helps to store in specified index
    let k = 0; //helps to store in specified index
    for (let i = 2; i <= 1000; i++) { //to loop till 1000
        if (i % 100 === 0) { //in order to store only 100 range wise prime nos
            k = 0; //to make to start from index 0
            j++; //increment
        }
        let result = isPrime(i);
        if (result) {
            arr[j][k] = i; //storing only prime no
            k++;
        }
    }
    console.log('Prime no');
    console.log(arr);
    let array = new Array(2);
    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(); //creating 2D array
    }
    let ar = [];
    for (let i = 2; i <= 1000; i++) {
        let result = isPrime(i);
        if (result) {
            ar.push(i); //storing only prime no
        }
    }
    for (let i = 0; i < ar.length; i++) {
        let a = 0;
        for (let j = 0; j < ar.length; j++) {
            if (i !== j) {
                let result = toFindAnagram(ar[i].toString(), ar[j].toString()); //calling function and converting number to string
                if (result) {
                    array[0].push(ar[i]); //pushing only anagram values
                    a++; //for print non anagram values
                    break; //to avoid duplicate values
                }
            }
        }
        if (a === 0) {
            array[1].push(ar[i]); //pushing non anagram values
        }
    }
    console.log('Anagram');
    console.log(array);
    /**
     * 
     * @param {String} string1 
     * @param {String} string2 
     */
    function toFindAnagram(string1, string2) {
        try {
            string1 = string1.split(''); //spliting to char
            string2 = string2.split('');
            if (string1.length === string2.length) { //check lenght of both strings
                let count = 0;
                for (let i = 0; i < string1.length; i++) {
                    for (let j = 0; j < string2.length; j++) {
                        if (string1[i] === string2[j]) { //checking char by char
                            string2[j] = undefined; //to avoid dupication
                            string1[i] = null; //to avoid dupication
                            count++; //for finding anagram
                        }
                    }
                }
                if (count === string1.length) {//checking anagram
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;

            }
        } catch (error) {
            console.log(error);
        }
    }
}