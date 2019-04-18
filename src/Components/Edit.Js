import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Edit extends Component{

    constructor(props) {
        super(props);
        this.
        state = {
        pathname: this.props.location.pathname,
        Booklist: [],
        BooklistOriginal: [],
        };}

        // binding only needed if onChange is not an arrow function
        // this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        // this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        // this.onchangeBookPages = this.onchangeBookPages.bind(this);
        // this.onchangeBookCompleted = this.onchangeBookCompleted.bind(this);
        // this.onchangeBookThoughts = this.onchangeBookThoughts.bind(this);
        // this.onchangeBookCategory = this.onchangeBookCategory.bind(this);}
    
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
            this.setState({BooklistOriginal: response})
        })
        

    }
    handleChange = async (e) => {
       await this.setState({
         Booklist:{   [e.target.name]: e.target.value}
        }, console.log(this.state.Booklist));
       
        const newBook = this.state.Booklist

        const updatedBook = Object.assign(this.state.BooklistOriginal, newBook)
        this.setState({Booklist : updatedBook})
    }
    

    handleSubmit = async (e) => {
        e.preventDefault()
        const id = this.state.pathname.slice(6,)
        const data = JSON.stringify(this.state.Booklist)
        await fetch(`https://booklist-server.herokuapp.com/Edit/${id}`, {
            method: "PUT",
            body: data,
            headers: {
                "Content-Type": "application/json"
            }
            
        });
        this.props.history.push('/')
    }
    render() {
        return (
            <div className="container">
            <div className="panel panel-default">
            <div className="panel-heading">
            <h3 className="panel-title">
            Update Thoughts
            </h3>
            </div>
            <div className="panel-body">
            <h4><Link to='/' className="btn btn-primary">Book List</Link></h4>
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
            <label for="title">Title:</label>
            <input type="text" className="form-control" name="Title" value={this.state.Booklist.Title}  placeholder="Title" disabled/>
            </div>
            <div className="form-group">
            <label for="author">Author:</label>
            <input type="text" className="form-control" name="Author" value={this.state.Booklist.Author} placeholder="Author" disabled />
            </div>
            <div className="form-group">
            <label for="Pages">Pages:</label>
            <input type="number" className="form-control" name="Pages" value={this.state.Booklist.Pages} placeholder="Pages" disabled/>
            </div>
            <div className="form-group">
            <label for="Category">Category:</label>
            <select id="category" className="form-control" name="Category" value={this.state.Booklist.Category} onChange={this.handleChange} placeholder="Category">
                        <option defaultValue="uncategorized">Pick a Category</option>
                        <option value="Sci-fi">Sci-Fi</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Educational">Educational</option>
                        </select>
            </div>
            <div className="form-group">
            <label for="Thoughts">Thoughts</label>
            <textArea type="text" className="form-control" name="Thoughts" value={this.state.Booklist.Thoughts} onChange={this.handleChange} placeholder="Thoughts" cols="8" rows="3">{this.state.Booklist.Thoughts}</textArea>
            </div>
            <div className="form-group">
           <label for="Completed">Completed</label>
           <select id="completed" className="form-control" name="Completed" value={this.Completed} onChange={this.handleChange} placeholder={this.Completed}>
                        
                        <option value="No">No</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        </select>
            <button type ="submit" onClick={this.handleSubmit} className="btn btn-success">Submit</button>
            
            </div>
            
            
            
            </form>
            </div>
            </div>
            </div>
        );
    }
    
    }
    
   