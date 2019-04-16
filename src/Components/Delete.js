import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Delete extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Booklist: [],
            id: '',
        };
    }

    //// delete method will go here
    delete() {
        fetch('http://localhost:4000/Show/'+this.props._id).then.props.history.push('/')
    }
    render() {
        return(
            <div>
           <div>
               <h3 class="panel-title">
               {this.render.state.Booklist.Title}</h3>
           </div> 
           <div class="panel-body">
           <dl>
               <dt>Title:</dt>
               <dd>{this.render.state.Booklist.title}</dd>
                </dl>
                <Link to={`/Edit/${this.state._id}`} class='btn btn-success'>Edit</Link>
                <button onClick={this.delete.id} class="btn btn-danger">Delete</button>
                </div>
                </div>
        );
    }
}