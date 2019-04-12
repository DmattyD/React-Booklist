import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Create from './Components/Create';
// import Edit from './Components/Edit';
// import Show from './Components/Show';
// import Delete from './Components/Delete';

ReactDOM.render(
    <Router>
        <div>
            <Route path='/' component={App}/>
            {/* <Route path='/create' component={Create}/>
            <Route path='/edit/:id' component={Edit}/>
            <Route path='/delete' component={Delete}/>
            <Route path='/show/:id' component={Show}/> */}
        </div>
    </Router>,    
    document.getElementById('root'));


