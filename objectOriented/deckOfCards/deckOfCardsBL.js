/**
 * @module deckOfCards
 */
exports.deckOfCards = () => {
    let cards = ['Clubs', 'Diamonds', 'Hearts', 'Spades']; //creating 2d array
    for (let i = 0; i < cards.length; i++) {
        cards[i] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
    }
    let deckOfCards = []; //creating a empty array for later use
    for (let i = 0; i < cards.length; i++) {
        for (let j = 0; j < cards[i].length; j++) {
            if (i === 0) {
                deckOfCards.push('Club ' + cards[i][j]); //pushing the data into newly created array
            }
            if (i === 1) {
                deckOfCards.push('Diamond ' + cards[i][j]);
            }
            if (i === 2) {
                deckOfCards.push('Heart ' + cards[i][j]);
            }
            if (i === 3) {
                deckOfCards.push('Spade ' + cards[i][j]);
            }
        }
    }
    let arr = []; //for storing unique random values
    let i = 0;
    while (true) {
        let randomValue = Math.floor(Math.random() * 52); //to generate random value from 0-51
        let result = checkingDuplicate(randomValue); //calling function
        if (result) {
            arr.push(randomValue); //pushing data into array
        }
        if (arr.length === 52) { //when the length reaches 52 i am breaking the loop
            break;
        }
    }
    /**
     * 
     * @param {number} i 
     */
    function checkingDuplicate(i) {
        for (let j = 0; j < arr.length; j++) {
            if (i === arr[j]) { //to find duplicate values
                return false;
            }
        }
        return true;
    }
    let players = [ //empty 2D array
        [],
        [],
        [],
        []
    ];
    let k = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 9; j++) {
            players[i][j] = deckOfCards[arr[k]]; //getting index from one array and data from another array and pushing it to 2D array
            k++;
        }
    }
    /**
     * 
     * @param {Array} players 
     */
    function display(players) { //helps to display in good way
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 9; j++) {

                if (i === 0) {
                    if (j === 0) {
                        console.log('player ' + (i + 1) + ' cards\n');
                    }
                    console.log(players[i][j]);
                    if (j === 8) {
                        console.log();
                    }
                }
                if (i === 1) {
                    if (j === 0) {
                        console.log('player ' + (i + 1) + ' cards\n');
                    }
                    console.log(players[i][j]);
                    if (j === 8) {
                        console.log();
                    }
                }
                if (i === 2) {
                    if (j === 0) {
                        console.log('player ' + (i + 1) + ' cards\n');
                    }
                    console.log(players[i][j]);
                    if (j === 8) {
                        console.log();
                    }
                }
                if (i === 3) {
                    if (j === 0) {
                        console.log('player ' + (i + 1) + ' cards\n');
                    }
                    console.log(players[i][j]);
                    if (j === 8) {
                        console.log();
                    }
                }
            }
        }
    }
    display(players); // calling function

}