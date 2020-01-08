exports.hashingFunction = (data) => {
    class HashTable{
        constructor() {
            this.bucket = new Array(11);
        }
        key(data) {
            return data % 11;
        }
    }
}