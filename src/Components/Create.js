import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';


export default class Create extends Component {

    state = {
        Title: '',
        Author: '',
        Pages: 0,
        Thoughts: '',
        Completed: '',
        Category: '',
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        }, console.log(e.target.name, e.target.value))

    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const data = JSON.stringify(this.state)
        await fetch("https://booklist-server.herokuapp.com/Create", {
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/json"
            }
            
        });
        this.props.history.push('/')
    }

    

render()
{
    return (

        <div>
            <h3 className="panel-title">
                ADD BOOK</h3>

            <div className="panel-body">
                <h4><Link to="/" className="btn btn-primary">Book List</Link></h4>
            </div>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="title">Title:</label>
                    <input type="text" className="form-control" name="Title" value={this.Title} onChange={this.handleChange} placeholder="Title" />
                    <label for="author">Author:</label>
                    <input type="text" className="form-control" name="Author" value={this.Author} onChange={this.handleChange} placeholder="Author" />
                    <label for="categotry">Category:</label>
                    <select id="category" className="form-control" name="Category" value={this.Category} onChange={this.handleChange} placeholder="Category">
                        <option defaultValue="uncategorized">Pick a Category</option>
                        <option value="Sci-fi">Sci-Fi</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Educational">Educational</option>
                        <option value="Educational">Romance</option>
                        <option value="Educational">Urban Fantasy</option>
                        <option value="Educational">Self-Help</option>
                        <option value="Educational">Non-Fiction</option>
                        </select>
                    <label for="Pages">Pages:</label>
                    <input type="number" className="form-control" name="Pages" value={this.Pages} onChange={this.handleChange} placeholder="Pages" />
                    <label for="Completed">Completed:</label>
                    <select id="completed" className="form-control" name="Completed" value={this.Completed} onChange={this.handleChange} placeholder="Did you finish the book?">
                        <option defaultValue="No">No</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        </select>
                    <label for="Thoughts">Thoughts:</label>
                    <textArea type="text" className="form-control" name="Thoughts" cols="8" row="3" onChange={this.handleChange} placeholder="Thoughts">{this.Thoughts}</textArea>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>


    )
}}