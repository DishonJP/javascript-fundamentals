const fs = require('fs-sync');
const readline = require('readline-sync');
exports.commercialDataProcessing = (data) => {
    class StockAccount {
        constructor(data, depositAmount) {
            this.accountName = data;
            this.shares = [];
            this.amount = depositAmount;
        }

        buy(availableShare) {
            availableShare.forEach(e => {
                console.log(e);
            });
            let whichShare = readline.question('Which share do u like to buy : ');
            for (let i = 0; i < availableShare.length; i++) {
                if (availableShare[i] === null) {
                    continue;
                }
                if ((availableShare[i].shareName).toLowerCase() === whichShare.toLowerCase()) {
                    if (availableShare[i].sharePrice <= this.amount) {
                        this.amount -= availableShare[i].sharePrice;
                        this.shares.push(availableShare[i]);
                        availableShare[i] = null;
                        break;
                    } else {
                        console.log('insufficient balance');
                        break;
                    }
                }
            }
            console.log();
        }
        valueOf() {
            console.log(this.amount);
        }
        sell(sellingShareName, sellingAmount) {
            for (let i = 0; i < this.shares.length; i++) {
                if (this.shares[i] === null) {
                    continue;
                }
                if (this.shares[i].shareName.toLowerCase() === sellingShareName.toLowerCase()) {
                    availableShare.push(this.shares[i]);
                    this.amount += sellingAmount;
                    this.shares[i] = '';
                    break;
                } else {
                    console.log('You dont own that share');
                }

            }
        }
        save() {
            let details = `Account name is ${this.accountName} and have balance of ${this.amount}`;
            fs.write('./AccountDetails.txt', details);
        }
        // print() {
        //     console.log(`Account holdername is ${this.accountName}, he got ${this.shares.length} shares and those ${this.shares.length} shares are ${this.shares.shareName} and prices are ${this.shares.shareName} and he got total balance of ${this.amount}`);
        // }
    }
    let depositAmount = readline.questionInt('Enter the amount due you like to deposit to your account : ');
    let stock = new StockAccount(data, depositAmount);
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
    while (true) {
        let a = 0;
        let userRequest = readline.question('due to like to \n1.buy\n2.sell\n3.find value of share\n4.save\n5.print\n6.exit : ');
        switch (userRequest) {
            case 'buy':
                stock.buy(availableShare);
                break;
            case 'sell':
                if (stock.shares.length === 0) {
                    console.log('no shares to sell');
                    break;
                } else {
                    let sellingShareName = readline.question('Enter the share name due u like to sell : ');
                    let sellingAmount = readline.questionInt('Enter the amount due you like to sell : ');
                    stock.sell(sellingShareName, sellingAmount);
                    break;
                }

                case 'value':
                    stock.valueOf();
                    break;
                case 'save':
                    stock.save();
                    break;
                case 'print':
                    console.log(stock);
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
}