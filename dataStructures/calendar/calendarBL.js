exports.calendar = (month, year) => {
    function date(month, year, n) {
        return new Date(year, month, n).getDate();
    }
    console.log(date);

    let arr = new Array(6);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(7);
    }
    arr[0][1] = 'M', arr[0][2] = 'T', arr[0][3] = 'W', arr[0][4] = 'TH', arr[0][5] = 'F', arr[0][6] = 'S', arr[0][0] = 'S';
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            arr[i][j] = date(month, year, 0);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let string = '';
        for (let j = 0; j < arr.length; j++) {
            string = string + arr[i][j] + '   ';
        }
        console.log(string);

    }
}