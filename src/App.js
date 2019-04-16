import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {

  constructor(props){
    super(props);
    this.
    state = {
      Booklist: []}
      };
  
     
      componentDidMount() {
        fetch('http://localhost:4000')
        .then(result => {
          return result.json();
        })

          .then(response => {
            this.setState({ Booklist: response}) /// ONLY RESPONSE, not response.data
        })
      }

    //   getBook = async(e) => {
    //     const _id = this.props.match.params.id;
    //     /// this is the get method
    //     await fetch(`http://localhost:4000/Show/${_id}`)
    //     .then(result => {
    //         return result.json();
    //     })
    //     .then(response => {
    //         this.setState({Booklist: response})
    //     })
        
    // }
  render() { 
    console.log(this.state.Booklist)
    return (
    <div className="container">
       <div className="panel panel-default">
           <div className="panel-heading">
             <h3 className="panel-title">
                 BOOK LIST
              </h3>
           </div>
           <div className="panel-body">
           <h4><Link to="/Create">Add Book</Link></h4>
           <table className="table table-stripe">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Pages</th>
                <th>ID</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
            {this.state.Booklist.map((Booklist, index) => 
                 <tr key={index}>
                  <td><Link to={`/Show/${Booklist._id}`} value={Booklist._id} onClick={(e)=>this.getBook(e.target.value)}>{Booklist.Title}</Link></td>
                  <td>{Booklist.Author}</td>
                  <td>{Booklist.Pages}</td>
                  <td>{Booklist._id}</td> 
                  <td>{Booklist.Completed}</td>
                </tr> 
                )}
            </tbody> 
           </table>
           </div>
        </div>
    </div>
  )}}
export default App;
