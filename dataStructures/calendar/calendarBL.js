/**
 * @module calendar
 * @param {number} month - user input
 * @param {number} year -  user input
 */
exports.calendar = (month, year) => {
    /**
     * 
     * @param {number} month 
     * @param {number} year 
     * @param {number} n 
     */
    function day(month, year, n) {
        return new Date(year, month - 1, n).getDay(); //to find day
    }
    /**
     * 
     * @param {number} month 
     * @param {number} year 
     * @param {number} n 
     */
    function date(month, year, n) {
        return new Date(year, month - 1, n).getDate(); //to find date
    }
    let arr = new Array(7);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(7);
    }
    let lastDate = date(month, year, 0); //to find lastdate
    let firstDate = date(month, year, 1); //to find firstdate
    arr[0][1] = 'Mon', arr[0][2] = 'Tue', arr[0][3] = 'Wed', arr[0][4] = 'THU', arr[0][5] = 'Fri', arr[0][6] = 'Sat', arr[0][0] = 'Sun';
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (j === day(month, year, firstDate) && firstDate <= lastDate) { //this condition helps to store in required index
                arr[i][j] = firstDate; //storing data
                firstDate++; //incrementing first date
            } else {
                arr[i][j] = ''; //when my requirement fails
            }
        }
    }
    for (let i = 0; i < arr.length; i++) { //helps to print in organised manner
        let string = '';
        for (let j = 0; j < arr.length; j++) {
            if (i === 0) {
                string = string + arr[i][j] + ' '; //concat string
            } else if (arr[i][j] === '') {
                string = string + '    ';
            } else if (arr[i][j] > 9) {
                string = string + arr[i][j] + '  ';
            } else {
                string = string + arr[i][j] + '   ';
            }
        }
        console.log(string); //finally printing
    }
}