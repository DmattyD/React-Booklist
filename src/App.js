import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {  return (
    <div class="container">
       <div class="panel panel-default">
           <div class="panel-heading">
             <h3 class="panel-title">
                 BOOK LIST
              </h3>
           </div>
           <div class="panel-body">
           <h4><Link to="/Create">Add Book</Link></h4>
           <table class="table table-stripe">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Pages</th>
                {/* <th>Thoughts</th> */}
                <th>Completed</th>
              </tr>
            </thead>
            {/* <tbody>
                <tr>
                  <td><Link to={`/Show/`}>{Book_Entries.Title}</Link></td>
                  <td>{Book_Entries.Author}</td>
                  <td>{Book_Entries.Pages}</td>
                  <td>{Book_Entries.Thoughts}</td> 
                  <td>{Book_Entries.Completed}</td>
                </tr>
                )}
            </tbody> */}
           </table>
           </div>
        </div>
    </div>
  )}}
export default App;
