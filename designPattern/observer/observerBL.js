/**
 * @module observer
 */
exports.observer = () => {
    /**
     * .Observer
     */
    class Observer {
        constructor() {
            this.observer = []; //for adding users
        }
        /**
         * 
         * @param {String} data 
         */
        add(data) {
            this.observer.push(data); //adding users
        }
        /**
         * 
         * @param {String} data 
         */
        delete(data) {
            for (let i = 0; i < this.observer.length; i++) {
                if (this.observer[i] === data) {
                    this.observer.splice(i, 1); //removing user
                    break;
                }
            }
        }
        /**
         * 
         * @param {String} data 
         */
        notify(data) {
            this.observer.forEach(el => {
                console.log(`${el},${data}`); //notifing everyone
            });
        }
    }
    let ob = new Observer();
    ob.add('Dishon'); //calling method
    ob.add('Ajith');
    ob.add('Messi');
    ob.add('ronaldo');
    /**
     * .Owner
     */
    class Owner {
        /**
         * 
         * @param {String} data 
         */
        topic(data) {
            return `new video ${data} has uploaded,Dont miss it.`; //retuning string
        }
    }
    let own = new Owner(); //creating object
    ob.notify(own.topic('Washinton')); //updating news
    ob.notify(own.topic('Hello')); //uploading
}