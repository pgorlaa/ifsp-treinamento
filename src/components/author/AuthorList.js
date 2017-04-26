import React, {Component} from 'react';

import {Table} from 'react-bootstrap';

class AuthorList extends Component {

    render() {
        const mappedAuthors = this.props.authors.map(author => {
            return <tr key={author.id}>
                <td>{author.id}</td>
                <td>{author.name}</td>
            </tr>
        });

        return (
            <Table striped>
                <thead>
                <tr>
                    <th>Cod.</th>
                    <th>Nome</th>
                </tr>
                </thead>
                <tbody>
                {mappedAuthors}
                </tbody>
            </Table>
        );
    }
}

export default AuthorList;