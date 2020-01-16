const fs = require('fs-sync');
const readline = require('readline-sync');
/**
 * @module commercialDataProcessing
 */
exports.commercialDataProcessing = () => {
    /**
     * .StockAccount
     */
    class StockAccount {
        /**
         * 
         * @param {string} data 
         * @param {number} depositAmount 
         */
        constructor(data, depositAmount) {
            this.accountName = data;
            this.shares = [];
            this.amount = depositAmount;
        }
        /**
         * 
         * @param {Array} availableShare 
         */
        buy(availableShare) {
            availableShare.forEach(e => { // to display the data prsent in array
                console.log(e);
            });
            let whichShare = readline.question('Which share do u like to buy : ');
            for (let i = 0; i < availableShare.length; i++) {
                if (availableShare[i] === null) { //to avoid null data
                    continue;
                }
                if ((availableShare[i].shareName).toLowerCase() === whichShare.toLowerCase()) { //to find share name
                    if (availableShare[i].sharePrice <= this.amount) { // to check whether the user has sufficient balance
                        this.amount -= availableShare[i].sharePrice; //reducing from current balance
                        this.shares.push(availableShare[i]); //storing the data to user shares
                        availableShare[i] = null; //removing from available share
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
            console.log(this.amount); //to find balance
        }
        /**
         * 
         * @param {String} sellingShareName 
         * @param {number} sellingAmount 
         */
        sell(sellingShareName, sellingAmount) {
            for (let i = 0; i < this.shares.length; i++) {
                if (this.shares[i] === null) { //to avoid null value
                    continue;
                }
                if (this.shares[i].shareName.toLowerCase() === sellingShareName.toLowerCase()) { //to find share
                    availableShare.push(this.shares[i]); //when sold push the share to available share
                    this.amount += sellingAmount; //incrementing sold amount
                    this.shares[i] = '';
                    break;
                } else {
                    console.log('You dont own that share');
                }
            }
        }
        save() {
            let details = `Account name is ${this.accountName} and have balance of ${this.amount}`;
            fs.write('./AccountDetails.txt', details); //saving data into a file
        }
    }
    /**
     * 
     * @param {String} data 
     */
    function operation(data) {
        let depositAmount = readline.questionInt('Enter the amount due you like to deposit to your account : ');
        let stock = new StockAccount(data, depositAmount); //calling constructor
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
            let a = 0; //for breaking purpose
            let userRequest = readline.question('due to like to \n1.buy\n2.sell\n3.find value of share\n4.save\n5.print\n6.exit : ');
            switch (userRequest) {
                case 'buy':
                    stock.buy(availableShare); //calling method to buy
                    break;
                case 'sell':
                    if (stock.shares.length === 0) { //to find user have any shares or not
                        console.log('no shares to sell');
                        break;
                    } else {
                        let sellingShareName = readline.question('Enter the share name due u like to sell : ');
                        let sellingAmount = readline.questionInt('Enter the amount due you like to sell : ');
                        stock.sell(sellingShareName, sellingAmount); //calling sell method to sell 
                        break;
                    }
                    case 'value':
                        stock.valueOf(); //calling method
                        break;
                    case 'save':
                        stock.save(); //calling method
                        break;
                    case 'print':
                        console.log(stock); //calling method
                        break;
                    case 'exit':
                        a++; //for breaking loop
                        break;
                    default:
                        console.log('invalid input');
                        break;
            }
            if (a !== 0) { //to break current loop
                break;
            }
        }
        return stock;
    }
    /**
     * .Node
     */
    class Node {
        /**
         * 
         * @param {String} data 
         */
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }
    /**
     * .LinkedList
     */
    class LinkedList {
        constructor() {
            this.head = null;
            this.size = 0;
        }
        /**
         * 
         * @param {String} data 
         */
        add(data) {
            let node = new Node(data); //calling Node constructor
            if (this.head === null) { //to find head is null
                this.head = node; //pointing head
                this.size++; //for knowing size
                return true;
            }
            let current = this.head; //so that head will no be changed
            while (current.next !== null) { //to iterate empty node
                current = current.next; //iterating from node to another node
            }
            current.next = node; //connecting one node with another node
            this.size++;
            return true;
        }
        /**
         * 
         * @param {number} index 
         * @param {String} data 
         */
        insertAt(index, data) {
            if (index < 0 && index > this.size) { //to check whether user is giving valid index
                return 'index is out of reach';
            }
            let node = new Node(data); //calling constructor
            if (index === 0) {
                node.next = this.head;
                this.head = node;
                this.size++;
                return true;
            } else {
                let current = this.head;
                let prev = null; //to know prev node address
                let dIndex = 0; //help to add in user requested index
                while (dIndex < index) { //to go to user requested index
                    prev = current; //tracking address
                    current = current.next; //tracking address
                    dIndex++;
                }
                prev.next = node; //linking prev node with new node
                node.next = current; //new node next is current node
                this.size++;
                return true;
            }
        }
        /**
         * 
         * @param {String} data 
         */
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
                if (current.data.accountName === data) { // to find data
                    if (prev === null) { //if data is present in head
                        this.head = current.next;
                        this.size--;
                    } else {
                        prev.next = current.next; //dereferring current node
                        this.size--;
                    }
                    return current.data;
                }
                prev = current;
                current = current.next;
            }
            return 'mentioned data is not present in linked list';
        }
        /**
         * 
         * @param {number} index 
         */
        deleteByindex(index) { //same as insert by index
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
        display() { // to display the data in each node
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
    let ll = new LinkedList(); //calling constructor
    while (true) {
        let a = 0;
        let userChoice = readline.question('Do you like to \n1.add \n2.remove \n3.display \n4.exit : ');
        switch (userChoice) {
            case 'add':
                let sName = readline.question('enter stock name : ');
                ll.add(operation(sName)); //calling a method inside that method calling a function
                console.log('added');
                break;
            case 'remove':
                let uName = readline.question('enter stock do you like to remove : ');
                ll.deleteElement(uName); //calling method
                console.log('removed');
                break;
            case 'exit':
                a++; //for breaking purpose
                break;
            case 'display':
                console.log(ll);
                ll.display(); //calling method
                break;
        }
        if (a > 0) {
            break; //breaking current loop
        }
    }
}