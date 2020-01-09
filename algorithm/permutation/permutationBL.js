exports.toFindPermutation = (string) => {
    let fact = toFindFact(string);

    function toFindFact(string) {
        let factNumber = string.length;
        let fact = 1;
        while (factNumber !== 0) {
            fact = fact * factNumber;
            factNumber--;
        }
        return fact;
    }

    function usingRecursion(fact, string) {

    }
    usingIteration(fact, string);

    function usingIteration(fact, string) {
        let k = 0;
        console.log(string[k]);
        let holder;
        for (let i = 0; i < fact; i++) {
            for (let j = 0; j < string.length; j++) {
                let replacedString = string.replace(string[k], string[j]);
                console.log(replacedString);
            }
            if (k === string.length) {
                k = 0;
            } else {
                k++;
            }
        }
    }
}