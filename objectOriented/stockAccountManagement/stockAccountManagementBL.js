const readline = require('readline-sync');
exports.stockAccountManagement = () => {
    class StockAccountManagement {
        constructor(stockName, noOfShare, sharePrice) {
            this.stockName = stockName;
            this.sharePrice = sharePrice;
            this.noOfShare = noOfShare;
            this.totalShare = sharePrice * noOfShare;
        }
    }
    let allStock = [];
    let noOfTimes = readline.questionInt('how many Stock due you like to add : ');
    let i = 0;
    while (i < noOfTimes) {
        let stockName = readline.question('Enter the Stock Name for ' + (i + 1) + ' : ');
        let sharePrice = readline.question('Enter the Share Price for ' + (i + 1) + ' : ');
        let noOfShare = readline.question('Enter the no of Shares for ' + (i + 1) + ' : ');
        if (stockName === '' && sharePrice === '' && noOfShare === '') {
            console.log('give valid input');
        } else {
            let stock = new StockAccountManagement(stockName, parseInt(noOfShare), parseInt(sharePrice));
            allStock.push(stock);
            i++;
        }
    }
    console.log(allStock);
    let j = 0;
    let grandTotal = 0;
    while (j < allStock.length) {
        console.log(allStock[j].totalShare);
        grandTotal += allStock[j].totalShare;
        j++;
    }
    console.log('Grand Total for stock is ' + grandTotal);
}