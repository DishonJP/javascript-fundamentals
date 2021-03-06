/**
 * @module flipCoin
 * @param {number} noOfTimes - user input
 */
exports.flipCoin = (noOfTimes) => {
    try {
        let head = 0; //for validation purpose
        let tail = 0; //for validation purpose
        for (let i = 0; i < noOfTimes; i++) { //to loop user input times
            let coinTic = Math.random(); //to generate random value between 0 to 1
            let coinTac = Math.random();
            if (coinTic > coinTac) { //to check head is greater or tail is greater
                head++;
            } else if (coinTac > coinTic) {
                tail++;
            } else {
                console.log('draw')
            }
        }
        let win = head > tail ? 'Head wins by ' + (head / noOfTimes) * 100 + '%' : tail > head ? 'Tail wins by ' + (tail / noOfTimes) * 100 + '%' : 'Draw'; //Checking who wins and finding percentage
        return win;
    } catch (error) {
        console(error);
    }
}