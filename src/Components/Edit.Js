import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Edit extends Component{

    constructor(props) {
        super(props);

        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onchangeBookPages = this.onchangeBookPages.bind(this);
        this.onchangeBookCompleted = this.onchangeBookCompleted.bind(this);
        this.onchangeBookThoughts = this.onchangeBookThoughts.bind(this);

        this.state ={
            Title: '',
            Author: '',
            Pages: '',
            Completed: '',
            Thoughts: '',
        }
    }

    componentDidMount() {
        
    }
    render() {
        return (
            <div class="container">
            <div class="panel panel-default">
            <div class="panel-heading">
            <h3 class="panel-title">
            Update Thoughts
            </h3>
            </div>
            <div class="panel-body">
            <h4><Link to='/' class="btn btn-primary">Book List</Link></h4>
            <form onSubmit={this.onSubmit}>
            <div class="form-group">
            <label for="title">Title:</label>
            <input type="text" class="form-control" name="Title" value={this.state.Title}  placeholder="Title" disabled/>
            </div>
            <div class="form-group">
            <label for="author">Author:</label>
            <input type="text" class="form-control" name="Author" value={this.state.Author} placeholder="Author" disabled />
            </div>
            <div class="form-group">
            <label for="Pages">Pages:</label>
            <input type="number" class="form-control" name="Pages" value={this.state.Pages} placeholder="Pages" disabled/>
            </div>
            <div class="form-group">
            <label for="Thoughts">Thoughts</label>
            <textArea type="text" class="form-control" name="Thoughts" value={this.state.Thoughts} onUpdate={this.onUpdate} placeholder="Thoughts" cols="8" rows="3">{this.state.Thoughts}</textArea>
            </div>
            <div class="form-group">
           <label for="Completed">Completed</label>
           <input type="text" class="form-control" name="Completed" value={this.state.Completed} onUpdate={this.onUpdate} placeholder="Completed"/>
            <button type ="submit" class="btn btn-success">Submit</button>
            
            </div>
            
            
            
            </form>
            </div>
            </div>
            </div>
        );
    }
    
    }
    
   