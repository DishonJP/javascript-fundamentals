/**
 * @module unOrderedList
 * @param {Array} data - list of words
 */
const readline = require('readline-sync');
exports.unOrderedList = (data) => {
    /**
     * Node.
     */
    class Node {
        constructor(data) {//to create instance of an object
            this.data = data;//for storing data
            this.next = null;//for pointing to next node
        }

    }
    /**
     * LinkedList.
     */
    class LinkedList {
        constructor() {//to create instance of an object
            this.head = null;//to find which node is above all
            this.size = 0;//for calculating size of node

        }
        /**
         * @param {any} data - user input
         */
        add(data) {
            let node = new Node(data);//creating instance
            let current;
            if (this.head === null) {//checking head is null means no data in linked list
                this.head = node;//pointing head->node;
            } else {
                current = this.head;//taking temp variable so that head value will not be changed
                while (current.next !== null) {//checking head has next node 
                    current = current.next;//changing current head from next node head
                }
                current.next = node;
            }
            this.size++;
        }
        /**
         * @param {any} data - user input
         */
        remove(data) {
            let current = this.head;
            let previous = null;//to store previous node value
            while (current !== null) {//looping entire list
                if (current.data.toLowerCase() === data.toLowerCase()) {//checking whether data is present in the list or not
                    if (previous === null) {//means only one node is there in the list
                        this.head = current.next;//making head=null
                    } else {
                        previous.next = current.next;//making previous node to next of currently dereffered node
                    }
                    this.size--;
                    return current.data;//retuning data from current head node
                }
                previous = current;
                current = current.next;
            }
            return -1;
        }
        /**
         * @param {any} data - user input
         */
        search(data) {
            let current = this.head;
            while (current !== null) {
                if (current.data.toLowerCase() === data.toLowerCase()) {//to check the data present in the list
                    return true;
                }
                current = current.next;
            }
            return false;

        }
        printList() {//for displaying the data in the list
            let current = this.head;
            let string = '';
            while (current) {
                string += current.data + ' ';
                current = current.next;
            }
            console.log(string);
        }
    
    }
    let list = new LinkedList();//creating object for LinkedList
    let i = 0;
    while (i < data.length) {//add all the data from the file to the linked list
        list.add(data[i]);
        i++;
    }
    list.printList();
    let userData = readline.question('Enter a word : ');
    if (list.search(userData)) {//it returns true / false 
        list.remove(userData);//if true, the data will be removed
    } else {
        list.add(userData);//if false ,the data is added
    }
    list.printList();//just printing

}