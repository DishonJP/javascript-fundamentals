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
                let previous = null;
                while (current.next !== null) {
                    if (current.data>data) {
                        
                    }
                    current = current.next;
                }
                current.next = node;
            }
        }
    }
    let list = new OrderedList();
    for (let i = 0; i < data.length; i++) {
        list.add(data[i]);
    }
    console.log(list);

}