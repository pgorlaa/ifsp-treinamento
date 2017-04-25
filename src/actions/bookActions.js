import {setBooks} from '../localStorage'

export const addBook = (book, callback) =>{
    setBooks(book, callback);
}