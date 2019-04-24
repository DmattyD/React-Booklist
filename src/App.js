import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Row = ({Title, Author, Pages, Category, Completed}) => (
  <div className="row">
    <div>{Title}</div>
    <div>{Author}</div>
    <div>{Pages}</div>
    <div>{Category}</div>    
    <div>{Completed}</div>    
  </div>
);

class App extends Component {

  constructor(props){
    super(props);
    this.
    state = {
      Booklist: []};
      
    this.compareBy.bind(this);
    this.sortBy.bind(this);}

    compareBy(key) {
      return function (a, b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0
      };
    }
  
    sortBy(key) {
      let arrayCopy = [...this.state.Booklist];
      arrayCopy.sort(this.compareBy(key));
      this.setState({Booklist: arrayCopy})
    }
     
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
             <h3 className="panel-title" style={{textAlign: "center"}}>
                 BOOK LIST
              </h3>
           </div>
           <div className="panel-body">
             <div className>
             <h4 className = "Completed Books">My Book List</h4>
           </div>
           <table className="table table-stripe">
            <thead>
              <tr>
                <th onClick={()=>this.sortBy('Title')}>Title</th>
                <th onClick={()=>this.sortBy('Author')}>Author</th>
                <th onClick={()=>this.sortBy('Pages')}>Pages</th>
                <th onClick={()=>this.sortBy('Category')}>Category</th>
                <th onClick={()=>this.sortBy('Completed')}>Completed</th>
              </tr>
            </thead>
            <tbody>
            {this.state.Booklist.map((Booklist, index) => 
                 <tr key={index}>
                  <td><Link to={`/Show/${Booklist._id}`} value={Booklist._id} onClick={(e)=>this.getBook(e.target.value)}>{Booklist.Title}</Link></td>
                  <td >{Booklist.Author}</td>
                  <td>{Booklist.Pages}</td>
                  <td>{Booklist.Category}</td> 
                  <td>{Booklist.Completed}</td>
                </tr> 
                )}
            </tbody> 
           </table>
           <Link className="btn btn-success" to="/Create">Add Book</Link>
           </div>
        </div>
    </div>
  )}}
export default App;
