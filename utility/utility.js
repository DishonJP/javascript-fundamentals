exports.harmonicNumber = (nthNo) => {
        try {
            let value = 1;
            for (let index = 2; index <= nthNo; index++) {
                value = value + 1 / index;
            }
            console.log(value);
        } catch (error) {
            console.log(error);

        }

    },
    /*****************************************************************************************************/
    exports.primeFactor = (nthno) => {
        try {
            console.log('Prime Factor of ' + nthno + ' are ');
            for (let index = 2; index <= nthno; index++) {
                let primeno = findPrimeNo(index);
                if (primeno) {
                    //console.log(index);
                    isFactor(index, nthno);
                }
            }

            function findPrimeNo(index) {
                let i = 2;
                while (i <= index / 2) {
                    if (index % i != 0) {
                        i++;
                    } else
                        return false;
                }
                return true;
            }

            function isFactor(index, nthno) {
                let fact = 1;
                while (nthno != 0) {
                    if (nthno % index == 0) {
                        nthno = nthno / index;
                        console.log(index);
                    } else {
                        break;
                    }
                }
            }

        } catch (error) {
            console.log(error);
        }
    },
    /*****************************************************************************************************/
    exports.replaceString = (name) => {
        try {
            let sentence = 'Hello username,How are you';
            let replacedSentence = sentence.replace('username', name);
            return replacedSentence;
        } catch (error) {
            console.log(error);

        }

    },
    /*****************************************************************************************************/
    exports.flipCoin = (noOfTimes) => {
        try {
            let head = 0;
            let tail = 0;
            for (let i = 0; i < noOfTimes; i++) {
                let coin1 = Math.random();
                let coin2 = Math.random();
                if (coin1 > coin2) {
                    head++;
                } else if (coin2 > coin1) {
                    tail++;
                } else {
                    console.log('draw')
                }
            }
            let win = head > tail ? 'Head wins by ' + (head / noOfTimes) * 100 + '%' : tail > head ? 'Tail wins by ' + (tail / noOfTimes) * 100 + '%' : 'Draw';
            return win;
        } catch (error) {
            console.log(error);

        }

    }
/*****************************************************************************************************/

exports.toCheckYear = (year) => {
    try {
        let leapYear;
        if (year.toString().length === 4) {
            leapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0) ? 'Leap year' : 'Not a Leap Year';
        } else {
            return 'Year should be of 4 digit';

        }
        return leapYear;
    } catch (error) {
        console.log(error);
    }
}
/*****************************************************************************************************/

exports.powerOf2 = (nthNumber) => {
    try {
        let i = 0;
        if (nthNumber > 0) {
            while (i <= nthNumber) {
                console.log('2 power ' + i + ' is ' + Math.pow(2, i));
                i++;
            }
        } else {
            console.log('value should be greater than 0');
        }

    } catch (error) {
        console.log(error);
    }
}
/*****************************************************************************************************/

exports.findDistance = (point1, point2) => {
    try {
        let distance = Math.sqrt(Math.pow(point1, point1) + Math.pow(point2, point2));
        return distance;
    } catch (error) {
        console.log(error);

    }
}
/*****************************************************************************************************/


exports.toFindDelta = (a, b, c) => {
    try {
        let delta = (b * b) - (4 * a * c);
        console.log(delta);
        if (isNaN(delta)) {
            return NaN;
        } else {
            return delta;
        }
    } catch (error) {
        console.log(error);

    }

}
exports.toFindRoot1 = (delta, a, b) => {
    try {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        console.log("value of x1", x1);
        if (isNaN(x1)) {
            return NaN;
        } else {
            return x1;
        }
    } catch (error) {
        console.log(error);

    }

}
exports.toFindRoot2 = (delta, a, b) => {
    try {
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        if (isNaN(x2)) {
            return NaN;
        } else {
            return x2;
        }
    } catch (error) {
        console.log(error);

    }

}
exports.toFindEquation = (x1, x2, a, b, c) => {
    try {
        let equation = a * x1 * x2 + b * x1 + c;
        if (isNaN(equation)) {
            return NaN;
        } else {
            return equation;
        }
    } catch (error) {
        console.log(error);

    }
}

/*****************************************************************************************************/
exports.toFindWindChill = (temperature, windSpeed) => {
    try {
        let windChill = 35.74 + (0.6215 * temperature) + ((0.4275 * temperature - 35.75) * Math.pow(windSpeed, 0.16));
        if (isNaN(windChill)) {
            return NaN;
        } else {
            return windChill;
        }
    } catch (error) {
        console.log(error);

    }
}
/*****************************************************************************************************/
exports.initializeArray = (row, column) => {
    const readline = require('readline-sync');
    try {
        let arr = new Array(row);
        for (var i = 0; i < arr.length; i++) {
            arr[i] = new Array(column);
            for (let j = 0; j < column; j++) {
                arr[i][j] = (readline.question('enter the value for index:' + i + ',' + j + ' : '));
            }
        }
        return arr;
    } catch (error) {
        console.log(error);

    }

}
exports.displayArray = (intialArray) => {
    try {
        for (let i = 0; i < intialArray.length; i++) {
            for (let j = 0; j < intialArray.length; j++) {
                {
                    console.log(intialArray[i][j]);
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
}
/*****************************************************************************************************/
const readline = require('readline-sync');
exports.initializeValue = (arr) => {
    try {
        for (let i = 0; i < arr.length; i++) { //to iterate every index of array
            arr[i] = readline.questionInt('enter the value for index ' + i + ' : '); // get value from user for specified index
        }
        return arr; //returing array
    } catch (error) {
        console.log(error);
    }
}
exports.distinctTriples = (arr) => {
    try {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] + arr[i + 1] + arr[i + 2] === 0) { //checking distinct triplets
                console.log(arr[i], arr[i + 1], arr[i + 2], ' are distinct triples');
            }
        }
    } catch (error) {
        console.log(error);

    }
}
/*****************************************************************************************************/
exports.whoWins = (noOfTimes) => {
    try {
        let player1Balance = 10;
        let player2Balance = 10;
        let player1WinCount = 0;
        let player2WinCount = 0;
        for (let i = 0; i < noOfTimes; i++) {
            let whoStart = Math.round(Math.random());
            while (true) {
                if (whoStart === 0) {
                    console.log('player 1 Starts the gramble');
                    let player1 = Math.round(Math.random());
                    if (player1 === 0) {
                        if (player1Balance > 0) {
                            player1Balance--;
                        } else {
                            console.log('player 1 run out of balance, So player 2 wins');
                            player2WinCount++;
                            break;
                        }
                    } else {
                        console.log('player 1 give up, So player 2 wins');
                        player2WinCount++;
                        break;
                    }
                } else {
                    console.log('player 2 Starts the gramble');
                    let player2 = Math.round(Math.random());
                    if (player2 === 0) {
                        if (player2Balance > 0) {
                            player2Balance--;
                        } else {
                            console.log('player 2 run out of balance, So player 1 wins');
                            player1WinCount++;
                            break;
                        }
                    } else {
                        console.log('player 2 give up, So player 1 wins');
                        player1WinCount++;
                        break;
                    }
                }

            }
        }
        if (player1WinCount > player2WinCount) {
            return (player1WinCount / noOfTimes) * 100 + '%';
        } else if (player1WinCount < player2WinCount) {
            return (player2WinCount / noOfTimes) * 100 + '%';
        } else {
            return 'draw';
        }
    } catch (error) {
        console.log(error);
    }
}
/*****************************************************************************************************/
exports.toFindCouponNumber = (couponNumber) => {
    try {
        let arr = new Array(10000000);
        while (true) {
            let randomCouponNumber = Math.round(Math.random() * 1000000);
            arr.push(randomCouponNumber);
            if (couponNumber === randomCouponNumber) {
                break;
            }
        }
        return arr;
    } catch (error) {
        console.log(error);

    }
}
/*****************************************************************************************************/
var startTime, endTime;
exports.start = () => {
    const readline = require('readline-sync');
    startTime = new Date();
    let stop = readline.question('enter stop to stop the stopwatch : ');
    if (stop == 'stop') {
        console.log('StopWatch Stopped');
        end();
    } else {
        console.log('Wrong input');
    }
};

function end() {
    endTime = new Date();
    var milliSecond = endTime - startTime;
    console.log(milliSecond + " in Milliseconds");
    var seconds = milliSecond /= 1000;
    //var seconds = Math.round(milliSecond);
    console.log(seconds + " in Seconds");
}
/*****************************************************************************************************/

exports.playingGame = (choose, arr) => {
    const readline = require('readline-sync');
    try {
        if (choose === 'x') {
            let player = 'X';
            let computer = 'O';
            whoWins(player, computer, arr);

        } else if (choose === 'o') {
            let player = 'O';
            let computer = 'X';
            whoWins(player, computer, arr);
        } else {
            console.log('wrong input');
        }

        function displayBoard(arr) {
            for (let i = 0; i < arr.length; i++) {
                let display = '';
                for (let j = 0; j < arr.length; j++) {
                    if (i === 0) {
                        display = display + (i + j + 1) + ' ';
                    }
                    if (i === 1) {
                        display = display + (i + j + 3) + ' ';
                    }
                    if (i === 2) {
                        display = display + (i + j + 5) + ' ';
                    }
                }
                console.log(display);
            }
        }

        function whoWins(player, computer, arr) {
            while (true) {
                let count = 0;
                while (true) {
                    displayBoard(arr, player);

                    let playerIndex = readline.questionInt('Player,In which index do you like to enter ' + player + ' : ');

                    let a = 0;
                    for (let i = 0; i < arr.length; i++) {
                        for (let j = 0; j < arr.length; j++) {
                            if (((playerIndex === (i + j + 1) && i === 0) || (playerIndex === (i + j + 3) && i === 1) || (playerIndex === (i + j + 5) && i === 2)) && playerIndex > 0 && playerIndex < 10) {
                                if (arr[i][j] === '' || arr[i][j] === undefined || arr[i][j] === null) {
                                    arr[i][j] = player;
                                    a = 1;
                                    count++;
                                } else {
                                    console.log('index is occupied');
                                }

                            }
                        }
                    }
                    if (a === 1) {
                        break;
                    }
                }
                if ((arr[0][0] === player && arr[0][1] === player && arr[0][2] === player) || (arr[1][0] === player && arr[1][1] === player && arr[1][2] === player) || (arr[2][0] === player && arr[2][1] === player && arr[2][2] === player) || (arr[0][0] === player && arr[1][0] === player && arr[2][0] === player) || (arr[0][1] === player && arr[1][1] === player && arr[2][1] === player) || (arr[0][2] === player && arr[1][2] === player && arr[2][2] === player) || (arr[0][0] === player && arr[1][1] === player && arr[2][2] === player) || (arr[0][2] === player && arr[1][1] === player && arr[2][0] === player)) {
                    console.log('Player Wins');
                    displayFinalBoard(arr);
                    break;

                } else if (count == 9) {
                    console.log('draw');
                    break;
                }
                while (true) {
                    let computerIndex = Math.round(Math.random() * (9 - 1) + 1);
                    console.log('Computer turn');
                    let a = 0;
                    for (let i = 0; i < arr.length; i++) {
                        for (let j = 0; j < arr.length; j++) {
                            if (((computerIndex === (i + j + 1) && i === 0) || (computerIndex === (i + j + 3) && i === 1) || (computerIndex === (i + j + 5) && i === 2)) && computerIndex > 0 && computerIndex < 10) {
                                if (arr[i][j] === '' || arr[i][j] === undefined || arr[i][j] === null) {
                                    console.log('Computer entered on index ' + computerIndex);

                                    arr[i][j] = computer;
                                    a = 1;
                                    count++;
                                } else {
                                    console.log('index is occupied');
                                }

                            }

                        }

                    }
                    if (a === 1) {
                        break;
                    }
                }
                if ((arr[0][0] === computer && arr[0][1] === computer && arr[0][2] === computer) || (arr[1][0] === computer && arr[1][1] === computer && arr[1][2] === computer) || (arr[2][0] === computer && arr[2][1] === computer && arr[2][2] === computer) || (arr[0][0] === computer && arr[1][0] === computer && arr[2][0] === computer) || (arr[0][1] === computer && arr[1][1] === computer && arr[2][1] === computer) || (arr[0][2] === computer && arr[1][2] === computer && arr[2][2] === computer) || (arr[0][0] === computer && arr[1][1] === computer && arr[2][2] === computer) || (arr[0][2] === computer && arr[1][1] === computer && arr[2][0] === computer)) {
                    console.log('Computer Wins');
                    displayFinalBoard(arr);
                    break;
                } else if (count == 9) {
                    console.log('draw');
                    break;
                }
            }
        }

        function displayFinalBoard(arr) {
            for (let i = 0; i < arr.length; i++) {
                let display = '';
                for (let j = 0; j < arr.length; j++) {
                    if (arr[i][j] === '' || arr[i][j] === undefined || arr[i][j] === null) {
                        display = display + '   ';
                    } else {
                        display = display + arr[i][j] + '  ';
                    }
                }
                console.log(display);
            }
        }
    } catch (error) {
        console.log(error);
    }

}
/****************************************************************************************************/
exports.toCheckAnagram = (string1, string2) => {
    try {
        string1 = string1.split('');
        string2 = string2.split('');
        if (string1.length === string2.length) {
            let count = 0;
            for (let i = 0; i < string1.length; i++) {
                for (let j = 0; j < string2.length; j++) {
                    if (string1[i] === string2[j]) {
                        string2[j] = undefined;
                        string1[i] = null;
                        count++;
                    }
                }
            }
            if (count === string1.length) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;

        }
    } catch (error) {
        console.log(error);

    }

}
/************************************************************************************* */
const access = require('/home/admin1/Documents/programming/Utility/utility.js');
exports.toFindPrimeNumber = (n) => {
    try {
        let i = 2;
        while (i <= n / 2) {
            if (n % i === 0) {
                return false;
            }
            i++;
        }
        return true;
    } catch (error) {
        console.log(error);

    }
}
exports.toFindPalindrome = (n) => {
    try {
        let holder = n;
        let value = 0;
        while (n !== 0) {
            let i = Math.floor(n % 10);
            n = Math.floor(n / 10);
            value = Math.floor(value * 10 + i);
        }
        if (value === holder) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);

    }
}
exports.toFindAnagram = (n) => {
    try {
        for (let i = 2; i <= 1000; i++) {
            let toFindAnagram = this.toFindPrimeNumber(i);
            if (toFindAnagram) {
                if (i !== n) {
                    let number1 = n.toString();
                    let number2 = i.toString();
                    let anagram = access.toCheckAnagram(number1, number2);
                    if (anagram) {
                        console.log(i + ' and ' + n + ' are anagram');
                    }
                }
            }
        }
    } catch (error) {
        console.log(error);

    }
}
/****************************************************************************************************/
exports.binarySearch = (sortArray, input) => {
    try {
        let front = 0, //to pointing to first index
            end = sortArray.length - 1; //to pointing to last index
        let mid = Math.floor((front + end) / 2); //to pointing to middle index
        console.log(sortArray);
        while (front <= end && sortArray[mid] != input) { //to check the string is present in that specific index
            if (input < sortArray[mid]) { //to check whether the value is present left from mid index
                end = mid - 1;
            } else {
                front = mid + 1;
            }
            mid = Math.floor((front + end) / 2);
        }
        console.log(mid);
        return (sortArray[mid] != input) ? -1 : mid + 1; //to check whether the word is present or not
    } catch (error) {
        console.log(error);

    }

}
/***********************************************************************************/
/**
 * @module(Array)arrNumber - array of number
 */
exports.toSortString = (arrNumber) => {
    try {

        let value = arrNumber.length;
        while (value > 0) {
            let min = arrNumber[0]; //setting first index value as min
            for (let i = 0; i < arrNumber.length; i++) { //to iterate all the string in the array
                if (arrNumber[i] > arrNumber[i + 1]) { //checking which string is greater
                    min = arrNumber[i + 1];
                    arrNumber[i + 1] = arrNumber[i]; //swapping
                    arrNumber[i] = min; //swapping
                    console.log('swapping ' + arrNumber[i] + ' and ' + arrNumber[i + 1]);
                }
            }
            value--;
        }

        console.log('after bubbleSort ' + arrNumber); //after bubble sort


    } catch (error) {
        console.log(error);

    }
}
/**************************************************************************************/
/**
 * @module(Array)arr - array of strings
 */
exports.toInsertionSort = (arr) => {
    try {
        console.log('before insertion sort ' + arr);
        let value = Math.floor(arr.length / 2); //for looping length by 2 times
        while (value > 0) {
            for (let i = 0; i < arr.length; i++) { //to move from first index to last index
                let min = arr[0]; //tempory min value
                if (arr[i] > arr[i + 1]) { //check string is bigger or smaller
                    min = arr[i + 1];
                    arr[i + 1] = arr[i]; //swapping
                    arr[i] = min; //swapping

                }
            }
            for (let i = arr.length - 1; i >= 0; i--) { //to move from last index to first index
                let min = arr[arr.length - 1];
                if (arr[i] < arr[i - 1]) {
                    min = arr[i - 1];
                    arr[i - 1] = arr[i];
                    arr[i] = min;
                }
            }
            value--;
        }
        console.log('After insertion sort ' + arr);
    } catch (error) {
        console.log(error);

    }

}
/****************************************************************************/
/**
 * @module mergeSort
 * @param {Array} arr - array of numbers
 */
exports.mergeSort = (arr) => {
    /**
     * dividing.
     *
     * @param	mixed	arr	
     * @return	void
     */
    function dividing(arr) {
        if (arr.length < 2) { // checking length of currently passed array is less than 2
            return arr;
        } else {
            let mid = Math.floor(arr.length / 2); //to find middle index of the array
            let leftArray = arr.slice(0, mid); //from middle to left one array
            let rightArray = arr.slice(mid, arr.length); //from middle to write one array
            return conquer(dividing(leftArray), dividing(rightArray)); //using recursion to call the function till the condition fails
        }
    }
    /**
     * conquer.
     *
     * @param	mixed	leftArray 	
     * @param	mixed	rightArray	
     * @return	mixed
     */
    function conquer(leftArray, rightArray) {
        let sortedArray = []; //array for storing data
        while (leftArray.length && rightArray.length) { //looping till letft and right array becomes empty
            if (leftArray[0] < rightArray[0]) { //comparing values
                sortedArray.push(leftArray.shift()); //pushing value into array meanwhile deleting current value from left array

            } else {
                sortedArray.push(rightArray.shift()); //pushing value into array meanwhile deleting current value from right array
            }
        }
        return sortedArray.concat(leftArray.concat(rightArray));//combining left out elements
    }
    console.log(dividing(arr));

}
/****************************************************************************/
/**
 * @module stack
 * @param {Array} expression - user data
 */
exports.stack = (expression) => {
    /**
     * Stack.
     */
    class Stack {
        constructor() { //to create instance of object
            this.stack = []; //creating array

        }
        /**
         * @param {any} data - data from the expression
         */
        push(data) {
            this.stack.push(data); //for inserting a data into stack
        }
        /**
         * @param {}
         */
        pop() {
            if (this.stack.length === 0) { //to check whether the stack is empty
                console.log('Stack is empty');
            } else {
                return this.stack.pop(); //removing top data from the stack
            }
        }
        /**
         * @param {}
         */
        peek() {
            return this.stack[this.stack.length - 1]; //to find which data is present at top
        }
        /**
         * @param {}
         */
        isEmpty() {
            return this.stack.length === 0; //to check whether the stack is empty
        }
        /**
         * @param {}
         */
        print() { //for printing purpose
            let string = '';
            let i = 0;
            while (i < this.stack.length) {
                string = string + this.stack[i] + ' ';
                i++;
            }
            console.log(string);
        }
    }
    let stk = new Stack(); //creating object
    let i = 0;
    while (i < expression.length) { //looping each and every data present in file 
        switch (expression[i]) { //these process are done according to my needs
            case '(':
                stk.push(expression[i]); //pushing when '(' appears
                break;
            case ')':
                stk.pop(); //pushing when ')' appears
                break;
            default:
                break;
        }
        i++;
    }
    if (stk.isEmpty()) { //after all the push and pop if the stack is empty means it is balanced else not balanced
        console.log('Balanced');

    } else {
        console.log('Not balanced');
    }
}
/*********************************************************************************/