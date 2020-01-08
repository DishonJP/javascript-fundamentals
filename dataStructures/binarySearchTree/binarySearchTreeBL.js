const readline = require('readline-sync');
/**
 * @module binarySearchTree
 * @param {number} size - for creating array
 */
exports.binarySearchTree = (size) => {
    let arr = new Array(size);
    for (let i = 0; i < arr.length; i++) {//for storing value in index
        let value = readline.questionInt('Enter the valur for index ' + i + ' : ');
        arr[i] = value;
    }
    /**
     * Node.
     */
    class Node {
        constructor(data) {
            this.data = data;//for storing data
            this.right = null;//right tree
            this.left = null;//left tree
        }
    }
    /**
     * BinarySearchTree.
     */
    class BinarySearchTree {
        constructor() {
            this.head = null;//for assigning root node
        }
        /**
         * 
         * @param {Any} data 
         */
        add(data) {
            let count = 0;
            let node = new Node(data);
            if (this.head === null) {
                this.head = node;//if head is null then setting head value
                return true;
            } else {
                let current = this.head;//taking tempory variable so that head value will not be changed
                while (true) {
                    if (current.data > data) {//if data is less than current data it will be sent to left
                        if (current.left !== null) {//we can only store data in empty node so we looping to find empty node
                            current = current.left;
                        } else {
                            current.left = node;//assigning 
                            break;
                        }
                    } else if (current.data < data) {//if data is greater than current data it will be sent to right
                        if (current.right !== null) {
                            current = current.right;
                        } else {
                            current.right = node;//assigning 
                            break;
                        }
                    }
                }
            }
        
        
        
        }
        search(data) {
            if (this.head.data === data) {
                return true;
            } else {
                let current = this.head;

            }

        }
    }
    let bst = new BinarySearchTree();
    let i = 0;
    while (i < arr.length) {
        bst.add(arr[i]);//to add the elements to binary search tree
        i++;
    }
    console.log(bst);
}