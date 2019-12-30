const readline = require('readline-sync');
exports.unOrderedList = (data) => {
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
            let current;
            if (this.head === null) {
                this.head = node;
            } else {
                current = this.head;
                while (current.next !== null) {
                    current = current.next;
                }
                current.next = node;
            }
            this.size++;
        }
        remove(data) {
            let current = this.head;
            let previous = null;
            while (current !== null) {
                if (current.data.toLowerCase() === data.toLowerCase()) {
                    if (previous === null) {
                        this.head = current.next;
                    } else {
                        previous.next = current.next;
                    }
                    this.size--;
                    return current.data;
                }
                previous = current;
                current = current.next;
            }
            return -1;
        }
        pop() {
            let current = this.head;
            let previous = null;
            if (current === null) {
                return false;
            } else {
                while (current.next !== null) {
                    previous = current;
                    current = current.next;
                }
                current.data = null;
                return true;
            }

        }
        search(data) {
            let current = this.head;
            while (current !== null) {
                if (current.data.toLowerCase() === data.toLowerCase()) {
                    return true;
                }
                current = current.next;
            }
            return false;

        }
        printList() {
            let current = this.head;
            let string = '';
            while (current) {
                string += current.data + ' ';
                current = current.next;
            }
            console.log(string);
        }
    }
    let list = new LinkedList();
    let i = 0;
    while (i < data.length) {
        list.add(data[i]);
        i++;
    }
    list.printList();
    let userData = readline.question('Enter a word : ');
    if (list.search(userData)) {
        list.remove(userData);
    } else {
        list.add(userData);
    }
    if (list.pop()) {
        console.log('done');

    } else {
        console.log('nope');

    }
    list.printList();
}