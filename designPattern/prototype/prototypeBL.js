const readline = require('readline-sync');
exports.proto = () => {
    class Book {
        constructor(data) {
            this.data = data;
        }
    }
    class BookShop {
        constructor(name) {
            this.name = name;
            this.add = [];
        }
        addBook() {
            console.log(`ShopName is ${this.name}.`);
            for (let i = 0; i < 10; i++) {
                let data = readline.question('Enter book name : ');
                let book = new Book(data);
                this.add.push(book);
            }
        }
    }
    let bs = new BookShop('Novels');
    let aooi = new BookShop('Comics');
    bs.addBook();
    aooi.add = bs.add;
    console.log(`ShopName is ${bs.name}.`);
    for (let i = 0; i < aooi.add.length; i++) {
        let data = readline.question('Enter book name : ');
        aooi.add[i] = data;
    }
    console.log(aooi);
    console.log(bs);
}