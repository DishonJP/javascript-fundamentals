/**
 * @module queue
 * @param {String} data - user data
 */
exports.queue = (data) => {
    /**
     * Queue.
     */
    class Queue {
        constructor() {
            this.queue = [];//creating empty array
        }
        enqueue(data) {
            this.queue.push(data);//pusing data into queue
        }
        dequeue() {
            if (this.isEmpty()) {//checking queue is empty or not
                console.log('Queue underflow');

            } else {
                return this.queue.shift();//to delete first element in queue
            }
        }
        isEmpty() {
            if (this.queue.length === 0) {//to check whether queue is empty or not
                return true;
            } else {
                return false;
            }
        }
        front() {
            if (this.isEmpty()) {
                console.log('no data is present in queue');
            } else {
                return this.queue[0];//to find which data is present in front
            }
        }
        printQueue() {//for printing purpose
            let string = '';
            let i = 0;
            while (i < this.queue.length) {
                string = string + this.queue[i] + ' ';
                i++;
            }
            console.log(string);
        }
        length() {
            return this.queue.length;//to find the length of queue
        }
    }
    let que = new Queue();//creating object
    let i = 0;
    if (data.length >= 2) {//checking length of user input
        while (i < data.length) {
            que.enqueue(data[i]);//pushing data into queue
            i++;
        }
        let j = que.length();
        while (j >= 0) {
            if (que.front() === data[j]) {//comparing first index with last index
                que.dequeue();//if true deleting first data
            }
            j--;
        }
        if (que.isEmpty()) {//after this if the queue is empty means its a palindrome else not a palindrome
            console.log('Palindrome');
        } else {
            console.log('Not a Palindrome');
        }
    } else {
        console.log('this string is not valid');
    
    }
}