/**
 * @module linkedList
 */
exports.linkedList = () => {
    /**
     * Node.
     */
    class Node {
        /**
         * 
         * @param {number} data 
         */
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }
    /**
     * LinkedList.
     */
    class LinkedList {
        constructor() {
            this.head = null; //helps to store head value
        }
        /**
         * 
         * @param {number} data 
         */
        enqueue(data) {
            let node = new Node(data); //creating new node 
            if (this.head === null) {
                this.head = node; //setting head
            } else {
                let current = this.head; //storing old head in tempory variable
                this.head = node; //setting new node as current head
                this.head.next = current; //connecting old head with new head
            }
        }
        display() { //for display purpose
            let string = '';
            let current = this.head;
            while (current.next !== null) {
                string = string + current.data + ' ';
                current = current.next;
            }
            console.log(string + current.data);
        }
    }
    let ll = new LinkedList(); //creating object for linked list
    /**
     * 
     * @param {number} index 
     */
    function isPrime(index) { // to find prime no
        let i = 2;
        while (i <= index / 2) {
            if (index % i != 0) {
                i++;
            } else
                return false;
        }
        return true; //when it is prime no it returns true
    }
    /**
     * 
     * @param {String} string1 
     * @param {String} string2 
     */
    function toFindAnagram(string1, string2) {
        try {
            string1 = string1.split(''); //spliting to char
            string2 = string2.split('');
            if (string1.length === string2.length) { //check lenght of both strings
                let count = 0;
                for (let i = 0; i < string1.length; i++) {
                    for (let j = 0; j < string2.length; j++) {
                        if (string1[i] === string2[j]) { //checking char by char
                            string2[j] = undefined; //to avoid dupication
                            string1[i] = null; //to avoid dupication
                            count++; //for finding anagram
                        }
                    }
                }
                if (count === string1.length) { //checking anagram
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;

            }
        } catch (error) {
            console.log(error);
        }
    }
    let ar = [];
    for (let i = 2; i <= 1000; i++) {
        let result = isPrime(i);
        if (result) {
            ar.push(i); //storing only prime no
        }
    }
    for (let i = 0; i < ar.length; i++) {
        let a = 0;
        for (let j = 0; j < ar.length; j++) {
            if (i !== j) {
                let result = toFindAnagram(ar[i].toString(), ar[j].toString()); //calling function and converting number to string
                if (result) {
                    ll.enqueue(ar[i]); //calling method of LinkedList
                    break;
                }
            }
        }
    }
    ll.display(); //calling method of LinkedList
}