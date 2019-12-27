/**
 * @module(number,number)temperature,windSpeed - helps to find wind chill
 */
exports.toFindWindChill = (temperature, windSpeed) => {
    try {
        let windChill = 35.74 + (0.6215 * temperature) + ((0.4275 * temperature - 35.75) * Math.pow(windSpeed, 0.16)); //mathematic calculation to find the windchill
        if (isNaN(windChill)) { //to check the out put is not a number
            return NaN;
        } else {
            return windChill;
        }
    } catch (error) {
        console.log(error);

    }
}