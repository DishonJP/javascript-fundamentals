/**
 * @module(number,number,number)a,b,c-user input
 */
exports.toFindDelta = (a, b, c) => {
    try {
        let delta = (b * b) - (4 * a * c); //mathematical calculation to find delta
        console.log(delta);

        if (isNaN(delta)) { //checking whether the number is not a number
            return NaN;
        } else {
            return delta; //returning delta value
        }
    } catch (error) {
        console.log(error);

    }

}
/**
 * @module(number,number,number)delta,a,b - is used in equation
 */
exports.toFindRoot1 = (delta, a, b) => {
    try {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a); //to find the root of first x
        console.log("value of x1", x1);
        if (isNaN(x1)) {
            return NaN;
        } else {
            return x1; //returning first root x
        }
    } catch (error) {
        console.log(error);

    }

}
/**
 * @module(number,number,number)delta,a,b - is used in equation
 */
exports.toFindRoot2 = (delta, a, b) => {
    try {
        let x2 = (-b - Math.sqrt(delta)) / (2 * a); //to find the root of second x
        if (isNaN(x2)) {
            return NaN;
        } else {
            return x2; //returning second root x
        }
    } catch (error) {
        console.log(error);

    }
}
/**
 * @module(number,number,number,number)x1,x2,a,b,c - used in equation
 */
exports.toFindEquation = (x1, x2, a, b, c) => {
    try {
        let equation = a * x1 * x2 + b * x1 + c; //just implementing the values
        if (isNaN(equation)) {
            return NaN;
        } else {
            return equation; //returning final value
        }
    } catch (error) {
        console.log(error);

    }

}