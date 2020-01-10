exports.linkedList = () => {
    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }
    class LinkedList {
        constructor() {
            this.head = null;
        }
        enqueue(data) {
            let node = new Node(data);
            if (this.head === null) {
                this.head = node;
            } else {
                let current = this.head;
                this.head = node;
                this.head.next = current;
            }
        }
        display() {
            let string = '';
            let current = this.head;
            while (current.next !== null) {
                string = string + current.data + ' ';
                current = current.next;
            }
            console.log(string + current.data);

        }
    }
    let ll = new LinkedList();
    ll.enqueue('lk');
    ll.enqueue('likr');
    ll.enqueue('poi');
    ll.enqueue('moi');
    ll.enqueue('llpo');
    ll.enqueue('happi');
    console.log(ll);

    ll.display();
}