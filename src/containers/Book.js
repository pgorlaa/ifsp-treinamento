import React, {Component} from 'react';

import BookForm from '../components/book/BookForm'
import BookList from '../components/book/BookList'
import {addBook} from '../actions/bookActions'
import {get} from '../localStorage'

class Book extends Component {

    constructor() {
        super();
        this.state = {
            book: {name: "", author: ""},
            books: [],
            authors: []
        };

        this.handleBookChange = this.handleBookChange.bind(this);
        this.handleAddBook = this.handleAddBook.bind(this);
        this.callback = this.callback.bind(this);
    }

    componentWillMount() {
        const authors = get('authors');

        if (authors) {
            this.setState({authors: get('authors')})
        }

        const books = get('books');

        if (books) {
            this.setState({books: get('books')})
        }
    }

    callback() {
        this.setState({books: get('books')})

        this.setState({book: {name: "", author: ""}});
    }

    handleBookChange(e) {
        let book = this.state.book;

        book[e.target.id] = e.target.value;

        this.setState({book: book});
    }

    handleAddBook(e) {
        e.preventDefault();
        addBook(this.state.book, this.callback)
    }

    render() {

        return (
            <div>
                <div className="col-lg-12">
                    <h1>Adicionar Livros</h1>
                    <BookForm onChange={this.handleBookChange} onSubmit={this.handleAddBook}
                              authors={this.state.authors} book={this.state.book}/>
                </div>

                <div className="col-lg-12">
                    <h1>Acervo</h1>
                    <BookList books={this.state.books}/>
                </div>
            </div>
        );
    }
}

export default Book;