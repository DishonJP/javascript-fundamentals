const readline = require('readline-sync');
exports.commercialDataProcessing = (data) => {
    class StockAccount {
        constructor(data) {
            this.accountName = data;
            this.shares = [];
        }
        buy() {
            let availableShare = [{
                shareName: 'RealEstate',
                sharePrice: 2300000
            }, {
                shareName: 'BlackMarket',
                sharePrice: 6300000
            }, {
                shareName: 'casino',
                sharePrice: 9900000
            }];
            availableShare.forEach(e => {
                console.log(e);
            });
            let whichShare = readline.question('Which share do u like to buy : ');
            for (let i = 0; i < availableShare.length; i++) {
                if ((availableShare[i].shareName).toLowerCase() === whichShare.toLowerCase()) {
                    this.shares.push(availableShare[i]);
                    break;
                }
            }
            console.log();

        }
    }
    let stock = new StockAccount(data);
    let userRequest = readline.question('due to like to buy or sell share : ');
    switch (userRequest) {
        case 'buy':
            stock.buy();
            break;

        default:
            break;
    }
    console.log(stock);

}