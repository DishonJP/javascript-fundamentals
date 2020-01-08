exports.hashingFunction = (data) => {
    class HashTable {
        constructor() {
            this.bucket = new Array(11);
        }
        key(data) {
            return data % 11;
        }
        set(key, value) {
            let index = this.key(key);
            this.bucket[index].push([key, value]);
            return index;
        }
    }
}