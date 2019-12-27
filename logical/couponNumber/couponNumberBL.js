/**
 * @module(couponNumber)//number
 */
exports.toFindCouponNumber = (couponNumber) => {
    try {
        let arr = new Array(10000000); //creating array
        while (true) {
            let randomCouponNumber = Math.round(Math.random() * 1000000); //Generating random numbers
            arr.push(randomCouponNumber); //storing random value into the array
            if (couponNumber === randomCouponNumber) // checking random number and user entered no are equal
            {
                break;
            }
        }
        return arr;
    } catch (error) {
        console.log(error);

    }
}