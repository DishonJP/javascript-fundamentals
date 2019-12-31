/**
 * @module stack
 * @param {Array} expression - user data
 */
exports.stack = (expression) => {
    /**
     * Stack.
     */
    class Stack {
        constructor() { //to create instance of object
            this.stack = []; //creating array

        }
        /**
         * @param {any} data - data from the expression
         */
        push(data) {
            this.stack.push(data); //for inserting a data into stack
        }
        /**
         * @param {}
         */
        pop() {
            if (this.stack.length === 0) { //to check whether the stack is empty
                console.log('Stack is empty');
            } else {
                return this.stack.pop(); //removing top data from the stack
            }
        }
        /**
         * @param {}
         */
        peek() {
            return this.stack[this.stack.length - 1]; //to find which data is present at top
        }
        /**
         * @param {}
         */
        isEmpty() {
            return this.stack.length === 0; //to check whether the stack is empty
        }
        /**
         * @param {}
         */
        print() { //for printing purpose
            let string = '';
            let i = 0;
            while (i < this.stack.length) {
                string = string + this.stack[i] + ' ';
                i++;
            }
            console.log(string);
        }
    }
    let stk = new Stack(); //creating object
    let i = 0;
    while (i < expression.length) { //looping each and every data present in file 
        switch (expression[i]) { //these process are done according to my needs
            case '(':
                stk.push(expression[i]); //pushing when '(' appears
                break;
            case ')':
                stk.pop(); //pushing when ')' appears
                break;
            default:
                break;
        }
        i++;
    }
    if (stk.isEmpty()) { //after all the push and pop if the stack is empty means it is balanced else not balanced
        console.log('Balanced');

    } else {
        console.log('Not balanced');
    }
}