const readline = require('readline-sync');
/**
 * @module orderedList
 * @param {number} data
 */
exports.orderedList = (data) => {
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
     * OrderedList.
     */
    class OrderedList {
        constructor() {
            this.head = null;
        }
        /**
         * 
         * @param {number} data 
         */
        add(data) {
            let node = new Node(data);

            if (this.head === null) {
                this.head = node; //adding data to list
            } else {
                let current = this.head;
                while (current.next !== null) { //helps to find the empty node
                    current = current.next;
                }
                current.next = node; //adding data to list
            }
        }
        /**
         * 
         * @param {number} data 
         */
        search(data) {
            let current = this.head;
            while (current.next !== null) {
                if (current.data == data) { //helps to find whether the data is present in the list
                    return true;
                }
                current = current.next;
            }
            if (current.data == data) {
                return true;
            }
            return false;
        }
        /**
         * 
         * @param {number} data 
         */
        pop(data) {
            if (this.head.data == data) {
                this.head = this.head.next;
            } else {
                let current = this.head;
                let prev = null;
                while (current.data !== data) { //finding the location of data
                    prev = current;
                    current = current.next;
                }
                prev.next = current.next; //derefering
            }
        }
        display() {
            let arr = [];
            let current = this.head;
            while (current.next !== null) {
                arr.push(parseInt(current.data)); //converting string to number and pushing to array
                current = current.next;
            }
            myFunction(); //for sorting the data
            function myFunction() {
                arr.sort(function (a, b) {
                    return a - b
                });
            }
            console.log(arr);
        }
    }
    let list = new OrderedList(); //creating object
    for (let i = 0; i < data.length; i++) {
        list.add(data[i]); //adding data to list
    }
    let userData = readline.questionInt('Enter a number : ');
    let result = list.search(userData); //calling custom search method of list
    if (result) { //to check the data is present in the list
        list.pop(userData);
        console.log('removed');
    } else {
        list.add(userData);
        console.log('added');
    }
    list.display(); //calling custom display method
}