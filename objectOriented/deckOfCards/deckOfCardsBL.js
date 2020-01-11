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
    let arr = [];
    let i = 0;
    while (true) {
        let randomValue = Math.floor(Math.random() * 52);
        let result = checkingDuplicate(randomValue);
        if (result) {
            arr.push(randomValue);
        }
        if (arr.length === 52) {
            break;
        }
    }

    function checkingDuplicate(i) {
        for (let j = 0; j < arr.length; j++) {
            if (i === arr[j]) {
                return false;
            }
        }
        return true;
    }
    let players = [
        [],
        [],
        [],
        []
    ];
    let k = 0;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 9; j++) {
            players[i][j] = deckOfCards[arr[k]];
            k++;
        }
    }

    function display(players) {
        let string = '';
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
    display(players);
}