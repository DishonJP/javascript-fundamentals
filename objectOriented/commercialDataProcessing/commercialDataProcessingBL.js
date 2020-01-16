const fs = require('fs-sync');
const readline = require('readline-sync');
exports.commercialDataProcessing = () => {
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
    }

    function operation(data) {
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
        return stock;
    }
    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }
    class LinkedList {
        constructor() {
            this.head = null;
            this.size = 0;
        }
        add(data) {
            let node = new Node(data);
            if (this.head === null) {
                this.head = node;
                this.size++;
                return true;
            }
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
            this.size++;
            return true;
        }
        insertAt(index, data) {
            if (index < 0 && index > this.size) {
                return 'index is out of reach';
            }
            let node = new Node(data);
            if (index === 0) {
                node.next = this.head;
                this.head = node;
                this.size++;
                return true;
            } else {
                let current = this.head;
                let prev = null;
                let dIndex = 0;
                while (dIndex < index) {
                    prev = current;
                    current = current.next;
                    dIndex++;
                }
                prev.next = node;
                node.next = current;
                this.size++;
                return true;
            }

        }
        insertfirst(data) {
            let node = new Node(data);
            let current = this.head;
            this.head = node;
            this.head.next = current;
            this.size++;
            return true;
        }
        deleteFirst() {
            let hed = this.head.next;
            let data = this.head.data;
            this.head = hed;
            this.size--;
            return data;
        }
        deleteLast() {
            let current = this.head;
            let prev = null;
            while (current.next !== null) {
                prev = current;
                current = current.next;
            }
            let data = current.data;
            prev.next = null;
            this.size--;
            return data;
        }
        deleteElement(data) {
            let current = this.head;
            let prev = null;
            while (current !== null) {
                if (current.data.accountName === data) {
                    if (prev === null) {
                        this.head = current.next;
                        this.size--;
                    } else {
                        prev.next = current.next;
                        this.size--;
                    }
                    return current.data;
                }
                prev = current;
                current = current.next;
            }
            return 'mentioned data is not present in linked list';
        }
        deleteByindex(index) {
            if (index < 0 && index > this.size) {
                return 'enter index is not present in the list';
            } else {
                let ind = 0;
                let prev = null;
                let current = this.head;
                while (ind < index) {
                    prev = current;
                    current = current.next;
                    ind++;
                }
                prev.next = current.next;
                return current.data;
            }
        }
        display() {
            let current = this.head;
            let string = '';
            let str = '';
            while (current !== null) {
                let i = 0;
                while (i < current.data.shares.length) {
                    str += current.data.shares[[i]].shareName + ' ' + current.data.shares[[i]].sharePrice + '\n';
                    i++;
                }
                string += 'Account Name : ' + current.data.accountName + '\nShares : ' + str + '\nBalance : ' + current.data.amount;
                current = current.next;
            }
            console.log(string);

        }
    }
    let ll = new LinkedList();
    while (true) {
        let a = 0;
        let userChoice = readline.question('Do you like to \n1.add \n2.remove \n3.display \n4.exit : ');
        switch (userChoice) {
            case 'add':
                let sName = readline.question('enter stock name : ');
                ll.add(operation(sName));
                console.log('added');
                break;
            case 'remove':
                let uName = readline.question('enter stock do you like to remove : ');
                ll.deleteElement(uName);
                console.log('removed');
                break;
            case 'exit':
                a++;
                break;
            case 'display':
                console.log(ll);
                ll.display();
                break;
        }
        if (a > 0) {
            break;
        }
    }
}