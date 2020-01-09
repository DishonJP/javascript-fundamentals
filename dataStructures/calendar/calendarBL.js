exports.calendar = (month, year) => {
    function day(month, year, n) {
        return new Date(year, month - 1, n).getDay();
    }

    function date(month, year, n) {
        return new Date(year, month - 1, n).getDate();
    }
    let arr = new Array(7);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(7);
    }
    let lastDate = date(month, year, 0);
    let firstDate = date(month, year, 1);
    arr[0][1] = 'Mon', arr[0][2] = 'Tue', arr[0][3] = 'Wed', arr[0][4] = 'THU', arr[0][5] = 'Fri', arr[0][6] = 'Sat', arr[0][0] = 'Sun';
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (j === day(month, year, firstDate) && firstDate <= lastDate) {
                arr[i][j] = firstDate;
                firstDate++;
            } else {
                arr[i][j] = '';
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        let string = '';
        for (let j = 0; j < arr.length; j++) {
            if (i === 0) {
                string = string + arr[i][j] + ' ';
            } else if (arr[i][j] === '') {
                string = string + '    ';
            } else if (arr[i][j] > 9) {
                string = string + arr[i][j] + '  ';
            } else {
                string = string + arr[i][j] + '   ';
            }
        }
        console.log(string);

    }
}