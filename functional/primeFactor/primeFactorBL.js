/**
 * @module(number)nthNO-user input
 */
exports.primeFactor = (nthno) => {
    try {
        console.log('Prime Factor of ' + nthno + ' are ');
        for (let index = 2; index <= nthno; index++) { //for looping till user entered number
            let primeno = findPrimeNo(index); //calling function
            if (primeno) { //to check it is prime number or not
                //console.log(index);
                isFactor(index, nthno); //calling function
            }
        }
        /**
         * 
         * @param {number} index -to check index is prime or not
         */
        function findPrimeNo(index) {
            let i = 2;
            while (i <= index / 2) //looping till index by half
            {
                if (index % i != 0) { //for filtering prime number
                    i++;
                } else
                    return false; //if index mod i zero means its not a prime number
            }
            return true; //means index is prime number
        }
        /**
         * 
         * @param {number} index - value from loop
         * @param {number} nthno -value from user
         */
        function isFactor(index, nthno) {
            while (nthno != 0) //to make loop run till the user input reaches 0
            {
                if (nthno % index == 0) //to check user input mod with any prime number returns 0
                {
                    nthno = nthno / index; //this mathematical calculation helps to find prime factors
                    console.log(index);
                } else {
                    break;
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
}