import React, {Component} from 'react';

import AuthorForm from '../components/author/AuthorForm'
import AuthorList from '../components/author/AuthorList'
import {addAuthor} from '../actions/authorActions'
import {get} from '../localStorage'

class Author extends Component {

    constructor() {
        super();
        this.state = {
            author: {name: ""},
            authors: []
        };

        this.handleAutorChange = this.handleAutorChange.bind(this);
        this.handleAddAuthor = this.handleAddAuthor.bind(this);
        this.callback = this.callback.bind(this);
    }

    componentWillMount() {
        const authors = get('authors');

        if (authors) {
            this.setState({authors: get('authors')})
        }
    }

    callback() {
        this.setState({authors: get('authors')});

        this.setState({author: {name: ""}});
    }

    handleAutorChange(e) {
        let author = this.state.author;

        author[e.target.id] = e.target.value;

        this.setState({author: author});
    }

    handleAddAuthor(e) {
        e.preventDefault();
        addAuthor(this.state.author, this.callback)
    }

    render() {

        return (
            <div>
                <div className="col-lg-12">
                    <h1>Adicionar autor</h1>
                    <AuthorForm onChange={this.handleAutorChange} onSubmit={this.handleAddAuthor}
                                author={this.state.author}/>
                </div>

                <div className="col-lg-12">
                    <h1>Autores</h1>
                    <AuthorList authors={this.state.authors}/>
                </div>
            </div>
        );
    }
}

export default Author;