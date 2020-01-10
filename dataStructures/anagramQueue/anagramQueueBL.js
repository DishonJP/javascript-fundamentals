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
    for (let i = ar.length - 1; i >= 0; i--) {
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