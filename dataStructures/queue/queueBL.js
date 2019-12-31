const readline = require('readline-sync');
exports.queue = (status) => {
    class Queue {
        constructor() {
            this.queue = [];
        }
        enqueue(data) {
            this.queue.push(data);
        }
        dequeue() {
            if (this.isEmpty()) {
                console.log('Queue underflow');

            } else {
                return this.queue.shift();
            }
        }
        isEmpty() {
            if (this.queue.length === 0) {
                return true;
            } else {
                return false;
            }
        }
        front() {
            if (this.isEmpty()) {
                console.log('no data is present in queue');
            } else {
                return this.queue[0];
            }
        }
        printQueue() {
            let string = '';
            let i = 0;
            while (i < this.queue.length) {
                string = string + this.queue[i] + ' ';
                i++;
            }
            console.log(string);
        }
    }
    let que = new Queue();
    let balance = 0;
    switch (status.toLowerCase()) {
        case 'withdraw':
            let withdrawAmount = readline.questionInt('Please mention the amount to withdraw : ');
            que.enqueue(withdrawAmount);
            withdraw(withdrawAmount);
            break;
        case 'deposit':
            let depositAmount = readline.questionInt('Please mention the amount to deposit : ');
            que.enqueue(depositAmount);
            deposit(depositAmount);
            break;
        default:
            console.log('Give valid input');
            break;
    }
    function withdraw(withdrawAmount) {
        if (balance >= withdrawAmount) {
            balance = balance - withdrawAmount;
            console.log('withdraw Successful, Your current balance is ' + balance);
            userRequest();
        } else {
            console.log('you have insufficient balance,Your balance is ' + balance);
            userRequest();
        }
    }

    function deposit(depositAmount) {
        balance = balance + depositAmount;
        console.log('deposit successful your current balance is ' + balance);
        userRequest();
    }

    function userRequest() {
        let action = readline.question('Furthur do you like to deposit money or withdraw available balance or cancel your request :');
        switch (action.toLowerCase()) {
            case 'withdraw':
                let withAmount = readline.questionInt('Please mention the amount to withdraw : ');
                withdraw(withAmount);
                break;
            case 'deposit':
                let depAmount = readline.questionInt('Please mention the amount to deposit : ');
                deposit(depAmount);
                break;
            case 'cancel':
                que.dequeue();
                break;
            default:
                console.log('invalid input');
                break;
        }
    }
}