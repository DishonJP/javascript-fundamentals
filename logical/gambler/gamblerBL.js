/**
 * @module(noOfTimes)//number
 */
exports.whoWins = (noOfTimes) => {
    try {
        let player1Balance = 10;
        let player2Balance = 10;
        let player1WinCount = 0;//to find percentage
        let player2WinCount = 0;
        for (let i = 0; i < noOfTimes; i++) {//looping till user value
            let whoStart = Math.round(Math.random());//to find whole number
            while (true) {//to run infinite times
                if (whoStart === 0) {//to find which player will start the game
                    console.log('player 1 Starts the gramble');
                    let player1 = Math.round(Math.random());
                    if (player1 === 0) {//player is betting
                        if (player1Balance > 0) {//checking balance
                            player1Balance--;//reducing balance by 1
                        } else {
                            console.log('player 1 run out of balance, So player 2 wins');
                            player2WinCount++;//counting if player wins
                            break;//breaking infinte loop
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
        if (player1WinCount > player2WinCount) {//to check which player which player has more win count
            return (player1WinCount / noOfTimes) * 100 + '%';//to find percentage
        } else if (player1WinCount < player2WinCount) {
            return (player2WinCount / noOfTimes) * 100 + '%';
        } else {
            return 'draw';
        }
    } catch (error) {
        console.log(error);
    }
}