const readline = require('readline-sync');
/**
 * @module queue
 * @param {String} status - user input
 */
exports.queue = (status) => {
    /**
     * Queue.
     */
    class Queue {
        constructor() { //to create instance of Object
            this.queue = []; //creating an empty array
        }
        enqueue(data) {
            this.queue.push(data); //to push the data into queue
        }
        dequeue() {
            if (this.isEmpty()) { //to check whether the queue is empty
                console.log('Queue underflow');
            } else {
                return this.queue.shift(); //to delete the data at front
            }
        }
        isEmpty() { //to check whether the queue is empty
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
                return this.queue[0]; //to find the data persent in first index
            }
        }
        printQueue() { //for printing purpose
            let string = '';
            let i = 0;
            while (i < this.queue.length) {
                string = string + this.queue[i] + ' ';
                i++;
            }
            console.log(string);
        }
    }
    let que = new Queue(); //creating object for Queue
    let balance = 0; //for later purpose
    switch (status.toLowerCase()) {
        case 'withdraw':
            let withdrawAmount = readline.questionInt('Please mention the amount to withdraw : ');
            que.enqueue(withdrawAmount); //pushing data into queue
            withdraw(withdrawAmount); //calling function
            break;
        case 'deposit':
            let depositAmount = readline.questionInt('Please mention the amount to deposit : ');
            que.enqueue(depositAmount); //pushing data into queue
            deposit(depositAmount); //calling function
            break;
        default:
            console.log('Give valid input');
            break;
    }
    /**
     * withdraw.
     * @param	mixed	withdrawAmount
     */
    function withdraw(withdrawAmount) {
        if (balance >= withdrawAmount) { //to check withdraw is possible
            balance = balance - withdrawAmount; //reducing balance
            console.log('withdraw Successful, Your current balance is ' + balance);
            userRequest(); //calling function
        } else {
            console.log('you have insufficient balance,Your balance is ' + balance);
            userRequest(); //calling function
        }
    }

    /**
     * deposit.
     * @param	mixed	depositAmount	
     * @return	void
     */
    function deposit(depositAmount) {
        balance = balance + depositAmount; //adding balance
        console.log('deposit successful your current balance is ' + balance);
        userRequest(); //calling function
    }
    /**
     * userRequest.
     * @return	void
     */
    function userRequest() {
        let action = readline.question('Furthur do you like to deposit money or withdraw available balance or cancel your request :');
        switch (action.toLowerCase()) {
            case 'withdraw':
                let withAmount = readline.questionInt('Please mention the amount to withdraw : ');
                withdraw(withAmount); //calling function
                break;
            case 'deposit':
                let depAmount = readline.questionInt('Please mention the amount to deposit : ');
                deposit(depAmount); //calling function
                break;
            case 'cancel':
                que.dequeue(); //ending the process
                break;
            default:
                console.log('invalid input');
                break;
        }


    }
}