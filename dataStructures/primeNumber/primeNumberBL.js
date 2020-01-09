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
    console.log(arr[0]);
    let ar = [];
    for (let i = 2; i <= 1000; i++) {
        let result = isPrime(i);
        if (result) {
            ar.push(i); //storing only prime no
        }
    }


    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < ar.length; j++) {
            let result = toFindAnagram(ar[i].toString(), ar[j].toString());
            if (result) {
                console.log(ar[i], ar[j]);
                //console.log(toString(ar[i]));
            }
        }

    }



    function toFindAnagram(string1, string2) {
        try {
            string1 = string1.split('');
            string2 = string2.split('');
            if (string1.length === string2.length) {
                let count = 0;
                for (let i = 0; i < string1.length; i++) {
                    for (let j = 0; j < string2.length; j++) {
                        if (string1[i] === string2[j]) {
                            string2[j] = undefined;
                            string1[i] = null;
                            count++;
                        }
                    }
                }
                if (count === string1.length) {
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