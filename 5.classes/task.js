class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    fix() {
        this.state = this.state * 1.5;

    }

    set state(newState) {
        if (newState > 100) {
            this._state = 100;
        } else if (newState < 0) {
            this._state = 0;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = "magazine") {
        super(name, releaseDate, pagesCount, state);
        this.type = type;
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "book") {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = type;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "novel") {
        super(author, name, releaseDate, pagesCount, state)
        this.type = type;
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "fantastic") {
        super(author, name, releaseDate, pagesCount, state)
        this.type = type;
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "detective") {
        super(author, name, releaseDate, pagesCount, state)
        this.type = type;
    }
}



class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book)
        }
    }

    findBookBy(type, value) {
        let foundBook = this.books.find((book) => book[type] === value);
        return foundBook !== undefined ? foundBook : null;
    }

    giveBookByName(bookName) {
        let index = this.books.findIndex(book => book.name === bookName);
        if (index !== -1) {
            let book = this.books[index];
            this.books.splice(index, 1);
            return book;
        } else {
            return null
        }
    }
}


class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {};
    }

    addMarks (marks, subject) {
        if (marks > 5 || marks < 2) {
            return
        }
        if (subject in this.marks)
            this.marks.subject.push(...marks)
        
    }
}