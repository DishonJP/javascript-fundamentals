const uniqueRandomArray = require('unique-random-array');
const uniqueRandom = require('unique-random');
const randomInt = require('random-int');
exports.deckOfCards = () => {
    let cards = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
    for (let i = 0; i < cards.length; i++) {
        cards[i] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
    }
    console.log(cards);
    let deckOfCards = [];
    for (let i = 0; i < cards.length; i++) {
        for (let j = 0; j < cards[i].length; j++) {
            if (i === 0) {
                deckOfCards.push('Club ' + cards[i][j]);
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
    console.log(deckOfCards);
    let arr = new Set([]);
    let i = 0;
    while (true) {
        let randomValue = Math.floor(Math.random() * 52 + 1);
        arr.add(1, randomValue);
        i++;
        console.log(arr);
        if (arr.length === 52) {
            break;
        }
    }
    console.log(arr);
}