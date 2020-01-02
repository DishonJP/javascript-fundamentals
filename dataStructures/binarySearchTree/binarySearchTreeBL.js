const readline = require('readline-sync');
exports.binarySearchTree = (size) => {
    let arr = new Array(size);
    for (let i = 0; i < arr.length; i++) {
        let value = readline.questionInt('Enter the valur for index ' + i + ' : ');
        arr[i] = value;
    }
    class Node {
        constructor(data) {
            this.data = data;
            this.right = null;
            this.left = null;
        }
    }
    class BinarySearchTree {
        constructor() {
            this.head = null;
        }
        add(data) {
            let node = new Node(data);
            if (this.head === null) {
                this.head = node;
                return true;
            } else {
                let current = this.head;
                while (true) {
                    if (current.data > data) {
                        if (current.left !== null) {
                            current = current.left;
                        } else {
                            current.left = node;
                            break;
                        }
                    } else if (current.data < data) {
                        if (current.right !== null) {
                            current = current.right;
                        } else {
                            current.right = node;
                            break;
                        }
                    }
                }
            }
        }
    }
    let bst = new BinarySearchTree();
    let i = 0;
    while (i < arr.length) {
        bst.add(arr[i]);
        i++;
    }
    console.log(bst);

}