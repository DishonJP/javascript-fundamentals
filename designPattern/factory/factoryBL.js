exports.factory = (data) => {
    class How {
        display() {
            console.log('How');
            return this;
        }
    }
    class Could {
        display() {
            console.log('Could');
            return this;
        }
    }
    class This {
        display() {
            console.log('This');
            return this;
        }
    }
    class Happen {
        display() {
            console.log('Happen');
            return this;
        }
    }
    class Factory {
        creatingInstance(data) {
            if (data.toLowerCase() === 'how') {
                return new How();
            } else if (data.toLowerCase() === 'could') {
                return new Could();
            } else if (data.toLowerCase() === 'this') {
                return new This();
            } else if (data.toLowerCase() === 'happen') {
                return new Happen();
            } else {
                console.log('No such class is present');
            }
        }
    }
    let factory = new Factory();
    factory.creatingInstance(data).display();
}