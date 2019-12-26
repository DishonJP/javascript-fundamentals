exports.whoWins=(noOfTimes)=>{
    try {
        let player1Balance=10;
    let player2Balance=10;
    let player1WinCount=0;
    let player2WinCount=0;
    for (let i = 0; i < noOfTimes; i++) {
        let whoStart=Math.round(Math.random());
        while(true)
        {
        if (whoStart===0) {
            console.log('player 1 Starts the gramble');
            let player1=Math.round(Math.random());
            if (player1===0) {
                if (player1Balance>0) {
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
            let player2=Math.round(Math.random());
            if (player2===0) {
                if (player2Balance>0) {
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
    if (player1WinCount>player2WinCount) 
    {
        return (player1WinCount/noOfTimes)*100+'%';
    } else if (player1WinCount<player2WinCount) {
        return (player2WinCount/noOfTimes)*100+'%';
    }else
    {
        return 'draw';
    }
}
     catch (error) {
        console.log(error);
    }
}    