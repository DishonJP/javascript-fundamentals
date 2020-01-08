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
        get(key) {
            let index = this.key(key);
            if (!this.bucket[index]) return null;
            for (let bucket of this.bucket[index]) {
                if (bucket[0]===key) {
                    return bucket[1];
                }
            }
        }
    }
}