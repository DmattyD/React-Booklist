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
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        }, console.log(e.target.name, e.target.value))

    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const data = JSON.stringify(this.state)
        await fetch("http://localhost:4000/Create", {
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
            <h3 class="panel-title">
                ADD BOOK</h3>

            <div class="panel-body">
                <h4><Link to="/" class="btn btn-primary">Book List</Link></h4>
            </div>
            <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label for="title">Title:</label>
                    <input type="text" class="form-control" name="Title" value={this.Title} onChange={this.handleChange} placeholder="Title" />
                    <label for="author">Author:</label>
                    <input type="text" class="form-control" name="Author" value={this.Author} onChange={this.handleChange} placeholder="Author" />
                    <label for="Pages">Pages:</label>
                    <input type="number" class="form-control" name="Pages" value={this.Pages} onChange={this.handleChange} placeholder="Pages" />
                    <label for="Completed">Completed:</label>
                    <input type="text" class="form-control" name="Completed" value={this.Completed} onChange={this.hanldeChange} placeholder="Completed" />
                    <label for="Thoughts">Thoughts:</label>
                    <textArea type="text" class="form-control" name="Thoughts" cols="8" row="3" onChange={this.handleChange} placeholder="Thoughts">{this.Thoughts}</textArea>
                </div>
                <button type="submit" class="btn btn-success">Submit</button>
            </form>
        </div>


    )
}}