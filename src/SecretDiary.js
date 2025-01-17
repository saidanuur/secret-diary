export default class secretDiary {

    // properties
    #typeOfLock;
    #diaryEntries = [];

    constructor(typeOfLock) {
        this.#typeOfLock = typeOfLock;
    };

    isLocked = () => {
        return this.#typeOfLock.isLocked()
    }; 

    getEntries = () => {
        if (this.isLocked() === true) {
            return `Error: Diary is Locked`;
        } else if (this.isLocked() === false) {
            return this.#diaryEntries.length;
        };
    };
    
    addEntry = message => {
        if (this.isLocked() === true) {
            return `Error: Diary is Locked`;
        } else if (this.isLocked() === false) {
            this.message = message;
            this.#diaryEntries.push(this.message);
            return console.log(`${this.message} has been added to diaryEntries`);
        };
    };

    unlock = () => {
        return this.#typeOfLock.unlock();
    }

    lock = () => {
        return this.#typeOfLock.lock();
    }

    // // functions
    // addEntry(str) {
    //     return this.diaryEntries.add(str);
    // }

    // getEntries() {
    //     return this.diaryEntries.allEntries();
    // }

};
