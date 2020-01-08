/**
 * @module hashingFunction
 * @param {number} data - data from file
 */
exports.hashingFunction = (data) => {
    /**
     * HashTable.
     */
    class HashTable {
        constructor() {
            this.buckets = new Array(11);//creating new array
        }
        /**
         * @param {number} data - data from file
         */
        hash(data) {
            return data % 11;//to find index
        }
        /**
         * 
         * @param {number} key 
         * @param {number} value 
         */
        set(key, value) {
            let index = this.hash(key);//calling hash method to find index
            this.buckets[index] = value;//storing value
        }
        /**
         * @param {number} key 
         */
        get(key) {
            const index = this.hash(key);//calling hash method to find index
            return this.buckets[index];//to mfind the value present in user requested index
        }
    }
    let hashTable = new HashTable();//creating instance
    let i = 0;
    while (i < data.length) {//looping the data
        hashTable.set(data[i], data[i]);//pushing data into hash map
        i++;
    }
    console.log(hashTable.get(4));
}