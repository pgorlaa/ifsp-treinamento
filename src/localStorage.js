export const get = (property) => {
    try {
        const serializedState = localStorage.getItem(property);
        if (serializedState === null) {
            return undefined;
        }

        return JSON.parse(serializedState);
    } catch (err) {
        console.log(err);
    }
};

export const setAuthors = (data, callback) => {
    try {
        let authors = get('authors');

        if (!authors) {
            authors = [];
        }

        data.id = authors.length + 1;
        authors.push(data);
        const serializedState = JSON.stringify(authors);

        localStorage.setItem('authors', serializedState);

        if (callback) {
            callback();
        }
    } catch (err) {
        console.log(err);
    }
}

export const setBooks = (data, callback) => {
    try {
        let books = get('books');

        if (!books) {
            books = [];
        }

        data.id = books.length + 1;
        books.push(data);
        const serializedState = JSON.stringify(books);

        localStorage.setItem('books', serializedState);

        if (callback) {
            callback();
        }
    } catch (err) {
        console.log(err);
    }
}