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
        valueOf() {
            let totalValue = 0;
            for (let i = 0; i < this.shares.length; i++) {
                totalValue += this.shares[i].sharePrice;
            }
            console.log(`total share value is ${totalValue}`);
        }
    }
    let stock = new StockAccount(data);
    while (true) {
        let a = 0;
        let userRequest = readline.question('due to like to \n1.buy\n2.sell\n3.find value of share\n4.save\n5.print\n6.exit : ');
        switch (userRequest) {
            case 'buy':
                stock.buy();
                break;
            case 'sell':
                stock.buy();
                break;
            case 'value':
                stock.valueOf();
                break;
            case 'save':
                stock.buy();
                break;
            case 'print':
                stock.buy();
                break;
            case 'exit':
                a++;
                break;
            default:
                console.log('invalid input');
                break;
        }
        if (a !== 0) {
            break;
        }
    }
    console.log(stock);
}