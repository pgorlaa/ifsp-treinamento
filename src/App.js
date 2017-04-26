import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router'
import './css/bootstrap.css';
import './css/style.css';

class App extends Component {

    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">IFSP</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <li>
                                <Link to="livros">Livros</Link>
                            </li>
                            <li>
                                <Link to="autor">Autores</Link>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <div className="container children">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;