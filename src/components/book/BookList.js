import React, {Component} from 'react';

import {Table} from 'react-bootstrap';

class AuthorList extends Component {

    render() {
        const mappedBooks = this.props.books.map(book => {
            return <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.name}</td>
                <td>{book.author}</td>
            </tr>
        });

        return (
            <Table striped className={this.props.className}>
                <thead>
                <tr>
                    <th>Coda.</th>
                    <th>Livro</th>
                    <th>Autor</th>
                </tr>
                </thead>
                <tbody>
                {mappedBooks}
                </tbody>
            </Table>
        );
    }
}

export default AuthorList;