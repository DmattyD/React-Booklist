import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Create from './Components/Create';
import Edit from './Components/BookEdit';
import Show from './Components/Show';
import Delete from './Components/Delete';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App}/>
            <Route path='/Create' component={Create}/>
            <Route path='/Edit/:id' component={Edit}/>
            <Route path='/delete' component={Delete}/>
            <Route path='/show/' component={Show}/> 
        </div>
    </Router>,    
    document.getElementById('root'));


