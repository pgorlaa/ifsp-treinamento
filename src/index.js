import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './containers/Home';
import Author from './containers/Author';
import Book from './containers/Book';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="autor" component={Author}/>
            <Route path="livros" component={Book}/>
        </Route>
    </Router>,
    document.getElementById('root')
);