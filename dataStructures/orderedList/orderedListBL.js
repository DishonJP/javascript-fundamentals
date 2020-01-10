const readline = require('readline-sync');
exports.orderedList = (data) => {
    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }
    class OrderedList {
        constructor() {
            this.head = null;
        }
        add(data) {
            let node = new Node(data);

            if (this.head === null) {
                this.head = node;
            } else {
                let current = this.head;
                while (current.next !== null) {
                    current = current.next;
                }
                current.next = node;
            }
        }
        search(data) {
            let current = this.head;
            while (current.next !== null) {
                if (current.data == data) {
                    return true;
                }
                current = current.next;
            }
            if (current.data == data) {
                return true;
            }
            return false;
        }
        pop(data) {
            if (this.head.data == data) {
                this.head = this.head.next;
            } else {
                let current = this.head;
                let prev = null;
                while (current.data !== data) {
                    prev = current;
                    current = current.next;
                }
                prev.next = current.next;
            }
        }
        display() {
            let arr = [];
            let current = this.head;
            while (current.next !== null) {
                arr.push(parseInt(current.data));
                current = current.next;
            }
            myFunction();
            function myFunction() {
                arr.sort(function (a, b) {
                    return a - b
                });
            }
            console.log(arr);
        }
    }
    let list = new OrderedList();
    data.sort();
    for (let i = 0; i < data.length; i++) {
        list.add(data[i]);
    }
    let userData = readline.questionInt('Enter a number : ');
    let result = list.search(userData);
    if (result) {
        list.pop(userData);
        console.log('removed');
    } else {
        list.add(userData);
        console.log('added');
    }
    list.display();
}