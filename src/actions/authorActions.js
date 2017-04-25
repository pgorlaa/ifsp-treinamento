import {setAuthors} from '../localStorage'

export const addAuthor = (author, callback) =>{
    setAuthors(author, callback);
}