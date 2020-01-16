exports.singleton = () => {
    class Singleton {
        constructor(name = "") {
            if (Singleton.instance) {
                return Singleton.instance;
            }
            Singleton.instance = this;
            this.name = name;
            return this;
        }
        getName() {
            return this.name;
        }
    }
    let single = new Singleton('Dishon');
    console.log(single.getName());
    let double = new Singleton('Ajith');
    console.log(double.getName());
}