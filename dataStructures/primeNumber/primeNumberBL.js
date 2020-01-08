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
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(100);
    }
    let j = 0;
    let k = 0;
    for (let i = 2; i <= 1000; i++) {
        if (i % 100 === 0) {
            k = 0;
            j++;
        }
        let result = isPrime(i);
        if (result) {    
            arr[j][k] = i;
            k++;
        }
    }
    console.log(arr);

}