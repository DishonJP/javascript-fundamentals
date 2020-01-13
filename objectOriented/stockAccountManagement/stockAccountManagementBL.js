/**
 * @module stockAccountManagement
 * @param {mixed} data - data from file
 */
exports.stockAccountManagement = (data) => {
    /**
     * .StockAccountManagement
     */
    class StockAccountManagement {
        /**
         * 
         * @param {string} stockName 
         * @param {number} noOfShare 
         * @param {number} sharePrice 
         */
        constructor(stockName, noOfShare, sharePrice) {
            this.stockName = stockName;
            this.sharePrice = sharePrice;
            this.noOfShare = noOfShare;
            this.totalShare = sharePrice * noOfShare;
        }
    }
    let allStock = []; //creating empty array
    let i = 0;
    while (i < data.stocks.length) { //to loop the data present in a file
        let stock = new StockAccountManagement(data.stocks[i].stockName, data.stocks[i].noOfShares, data.stocks[i].stockPrice); //creating new object
        allStock.push(stock); //pushing data into array
        i++;
    }
    console.log(allStock);
    let j = 0;
    let grandTotal = 0; //to find grand total
    while (j < allStock.length) {
        grandTotal += allStock[j].totalShare; //to find grand total
        j++;
    }
    console.log('Grand Total for stock is ' + grandTotal);
}