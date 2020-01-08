exports.toFindPrime = (arr) => {
    function isPrime(index) {
        let i = 2;
        while (i <= index / 2) {
            if (index % i != 0) {
                i++;
            } else
                return false;
        }
        return true;
    }
    for (let i = 0; i <= 1000; i++) {
        let result = isPrime(i);
        if (result) {
            let j = 0;
            if (i % 100 === 0) {
                j++;
            }
        }
    }
}