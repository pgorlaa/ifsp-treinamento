import React, {Component} from 'react';

import {FormGroup, ControlLabel, FormControl, Button, Row, Col} from 'react-bootstrap';

class AuthorForm extends Component {

    render() {
        return (

        <div>
            <Row>
                <Col lg={6} md={6}>
                    <FormGroup>
                        <ControlLabel>Nome:</ControlLabel>
                        <FormControl type="text" placeholder="nome do autor" name="name" id="name"
                                     onChange={this.props.onChange} value={this.props.author.name}/>
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col lg={6} md={6}>
                    <Button className="pull-right btn-primary" onClick={this.props.onSubmit}>Enviar</Button>
                </Col>
            </Row>
        </div>
        );
    }
}

export default AuthorForm;