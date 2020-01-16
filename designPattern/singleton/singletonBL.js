/**
 * @module singleton
 */
exports.singleton = () => {
    /**
     * .Singleton
     */
    class Singleton {
        /**
         * 
         * @param {String} name 
         */
        constructor(name) {
            if (Singleton.instance) { //to check whether the instance is already created
                return Singleton.instance; //if already created returning the same instance
            }
            Singleton.instance = this; //setting instance
            this.name = name;
            return this; //returning data
        }
        getName() {
            return this.name; //return data
        }
    }
    let single = new Singleton('Dishon'); //creating new instance
    console.log(single.getName()); //calling method
    let double = new Singleton('Ajith'); //creating new instance
    console.log(double.getName()); //calling method
}