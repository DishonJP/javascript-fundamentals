
try {
    exports.flipCoin=(noOfTimes)=>{
        let head=0;
        let tail=0;
        for(let i=0;i<noOfTimes;i++)
        {
            let coin1=Math.random();
            let coin2=Math.random();
            if(coin1>coin2)
            {
                head++;
            }
            else if (coin2>coin1) {
                tail++;
            }
            else
            {
                console.log('draw')
            }
        }
        let win=head>tail?'Head wins by '+(head/noOfTimes)*100+'%':tail>head?'Tail wins by '+(tail/noOfTimes)*100+'%':'Draw';
        return win;
    } 
} catch (error) {
    console(error);
}