const readline=require('readline-sync');
exports.playingGame=(choose,arr)=>{
    try {
        if (choose==='x') {
            let player='X';
            let computer='O';
            whoWins(player,computer,arr);
            
        } else if(choose==='o') {
            let player='O';
            let computer='X';
            whoWins(player,computer,arr);
        }
        else{
            console.log('wrong input');    
        }
        function displayBoard(arr) {
            for (let i = 0; i < arr.length; i++) {
                let display='';
                for (let j = 0; j < arr.length; j++) {
                    if (i===0) 
                    {
                        display=display+(i+j+1)+' ';
                    }
                    if (i===1) {
                        display=display+(i+j+3)+' ';    
                    }
                    if (i===2) {
                        display=display+(i+j+5)+' ';
                    }
                }
                console.log(display);  
            }
        }
        function whoWins(player,computer,arr) {
            while (true) {
                let count=0;
                while (true) {
                displayBoard(arr,player);
    
                let playerIndex=readline.questionInt('Player,In which index do you like to enter '+player+' : ');
                
                    let a=0;
                    for (let i = 0; i < arr.length; i++) {
                        for (let j = 0; j < arr.length; j++) {
                            if (((playerIndex===(i+j+1)&& i===0) || (playerIndex===(i+j+3)&&i===1) ||(playerIndex===(i+j+5)&&i===2)) && playerIndex>0 && playerIndex<10)
                            {
                                if (arr[i][j]===''||arr[i][j]===undefined || arr[i][j]===null) {
                                    arr[i][j]=player;
                                    a=1;
                                    count++;
                                } else {
                                    console.log('index is occupied');
                                }
                                   
                            }
                        }    
                    }
                    if (a===1) {
                        break;
                    }
                }
                if ((arr[0][0]===player&&arr[0][1]===player&&arr[0][2]===player)||(arr[1][0]===player&&arr[1][1]===player&&arr[1][2]===player)||(arr[2][0]===player&&arr[2][1]===player&&arr[2][2]===player)||(arr[0][0]===player&&arr[1][0]===player&&arr[2][0]===player)||(arr[0][1]===player&&arr[1][1]===player&&arr[2][1]===player)||(arr[0][2]===player&&arr[1][2]===player&&arr[2][2]===player)||(arr[0][0]===player&&arr[1][1]===player&&arr[2][2]===player)||(arr[0][2]===player&&arr[1][1]===player&&arr[2][0]===player)) {
                    console.log('Player Wins');
                    displayFinalBoard(arr);
                    break;
                    
                }else if (count==9) {
                    console.log('draw');
                    break;
                }
                while (true) {
                let computerIndex=Math.round(Math.random()*(9-1)+1);
                    console.log('Computer turn');
                    let a=0;
                    for (let i = 0; i < arr.length; i++) {
                        for (let j = 0; j < arr.length; j++) {
                            if (((computerIndex===(i+j+1)&& i===0) || (computerIndex===(i+j+3)&&i===1) ||(computerIndex===(i+j+5)&&i===2)) && computerIndex>0 && computerIndex<10) 
                            {
                                if (arr[i][j]===''||arr[i][j]===undefined || arr[i][j]===null) {
                                    console.log('Computer entered on index '+computerIndex);
                                    
                                    arr[i][j]=computer;
                                    a=1;
                                    count++;
                                } else {
                                    console.log('index is occupied');
                                }
                                   
                            }
                            
                        }
                        
                    }
                    if (a===1) {
                        break;
                    }
                }
                if ((arr[0][0]===computer&&arr[0][1]===computer&&arr[0][2]===computer)||(arr[1][0]===computer&&arr[1][1]===computer&&arr[1][2]===computer)||(arr[2][0]===computer&&arr[2][1]===computer&&arr[2][2]===computer)||(arr[0][0]===computer&&arr[1][0]===computer&&arr[2][0]===computer)||(arr[0][1]===computer&&arr[1][1]===computer&&arr[2][1]===computer)||(arr[0][2]===computer&&arr[1][2]===computer&&arr[2][2]===computer)||(arr[0][0]===computer&&arr[1][1]===computer&&arr[2][2]===computer)||(arr[0][2]===computer&&arr[1][1]===computer&&arr[2][0]===computer)) {
                    console.log('Computer Wins');
                    displayFinalBoard(arr);
                    break;    
                }
                else if (count==9) {
                    console.log('draw');
                    break;
                }
            }
        }
        function displayFinalBoard(arr) {
            for (let i = 0; i < arr.length; i++) {
                let display='';
                for (let j = 0; j < arr.length; j++) {
                    if(arr[i][j]===''||arr[i][j]===undefined || arr[i][j]===null)
                    {
                        display=display+'   ';
                    }
                    else{
                    display=display+arr[i][j]+'  ';
                    }
                }
                console.log(display);  
            }
        }
    } catch (error) {
        console.log(error);    
    }
    
}
