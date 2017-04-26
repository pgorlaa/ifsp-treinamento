import React, {Component} from 'react';

import {FormGroup, ControlLabel, FormControl, Button, Row, Col} from 'react-bootstrap';

class BookForm extends Component {

    render() {

        const mappedAuthors = this.props.authors.map(author => {
            return <option value={author.name} key={author.id}>{author.name}</option>
        });

        return (
            <form onSubmit={this.props.onSubmit}>
                <Row>
                    <Col lg={6} md={6}>
                        <FormGroup>
                            <ControlLabel>Nome:</ControlLabel>
                            <FormControl type="text" placeholder="nome do livro" name="name" id="name"
                                         onChange={this.props.onChange} value={this.props.book.name}/>

                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6} md={6}>
                        <FormGroup>
                            <ControlLabel>Autor:</ControlLabel>
                            <FormControl value={this.props.book.author} componentClass="select" placeholder="autor" id="author" name="author"
                                         onChange={this.props.onChange}>
                                <option value="" readOnly="readOnly">Selecione um autor</option>
                                {mappedAuthors}
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6} md={6}>
                        <Button type="submit" className="pull-right btn-primary">Enviar</Button>
                    </Col>
                </Row>
            </form>
        );
    }
}

export default BookForm;