import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Show extends Component {

    constructor(props) {
        super(props);
        this.
        state = {
        pathname: this.props.location.pathname,
        Booklist: []}
         };
    

componentDidMount = async () => {
    const id = this.state.pathname.slice(6,)
    console.log(id)  
    /// this is the get method
     await fetch(`http://localhost:4000/Show/${id}`)
    .then(result => {
        return result.json();
    })
    .then(response => {
        this.setState({Booklist: response})
    })
    
}

deleteBook = async (e) => {
    const id = this.state.pathname.slice(6)
    console.log(id)
    let data = { id : e }
    data=JSON.stringify(data)
   await fetch(`http://localhost:4000/Show/${id}`,
       {
       method: "DELETE",
       body: data,
     
 
    });this.props.history.push('/')}


render() {
  
    return(
        <div className="container">
                <div className="panel panel-default">
            <div className="panel-heading">
                <h4><Link to="/">Book List</Link></h4>
                <h3>
                {this.state.Booklist.Title}
                </h3>
            </div>
            <div className="panel-body">
            <dl>
                <dt>Title</dt>
                <dd>{this.state.Booklist.Title}</dd>
                <dt>Author</dt>
                <dd>{this.state.Booklist.Author}</dd>
                <dt>Total Pages</dt>
                <dd>{this.state.Booklist.Pages}</dd>
                <dt>Completed</dt>
                <dd>{this.state.Booklist.Completed}</dd>
                <dt>Thoughts</dt>
                <dd>{this.state.Booklist.Thoughts}</dd>
            </dl>
            <Link to={`/Edit/${this.state._id}`} className="btn btn-success">Edit</Link> &nbsp;
            <button value={this.state.pathname.slice(6)} onClick={(e) => this.deleteBook(e.target.value)} className="btn btn-danger">Delete</button></div>
            </div>
        
        
        
        
        </div>



    )
}

};
export default Show;