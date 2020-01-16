exports.factory = (data) => {
    /**
     * .PC
     */
    class PC {
        display() {
            console.log('Personal Computer');
            return this;
        }
    }
    /**
     * .Laptop
     */
    class Laptop {
        display() {
            console.log('Laptop');
            return this;
        }
    }
    /**
     * .ServerComputer
     */
    class ServerComputer {
        display() {
            console.log('Server Computer');
            return this;
        }
    }
    /**
     * .ComputerFactory
     */
    class ComputerFactory {
        /**
         * 
         * @param {string} data 
         */
        creatingInstance(data) {
            if (data.toLowerCase() === 'pc') {
                return new PC(); //creating instance
            } else if (data.toLowerCase() === 'laptop') {
                return new Laptop(); //creating instance
            } else if (data.toLowerCase() === 'server') {
                return new ServerComputer(); //creating instance
            } else {
                console.log('No such class is present');
            }
        }
    }
    let factory = new ComputerFactory(); //creating instance
    factory.creatingInstance(data).display(); //function chaining
}