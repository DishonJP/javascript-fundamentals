const readline = require('readline-sync');
exports.stockAccountManagement = (data) => {
    class StockAccountManagement {
        constructor(stockName, noOfShare, sharePrice) {
            this.stockName = stockName;
            this.sharePrice = sharePrice;
            this.noOfShare = noOfShare;
            this.totalShare = sharePrice * noOfShare;
        }
    }
    let allStock = [];
    let i = 0;
    while (i < data.stocks.length) {
        let stock = new StockAccountManagement(data.stocks[i].stockName, data.stocks[i].noOfShares, data.stocks[i].stockPrice);
        allStock.push(stock);
        i++;
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