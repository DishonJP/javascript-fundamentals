/**
 * @module findDistance
 * @param {number} point1 - user input
 * @param {number} point2 - user input
 */
exports.findDistance = (point1, point2) => {
    try {
        let distance = Math.sqrt(Math.pow(point1, point1) + Math.pow(point2, point2));//to calculate distance
        return distance;//returning value
    } catch (error) {
        console.log(error);

    }
}