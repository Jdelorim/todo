import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { runInThisContext } from 'vm';

// import axios from 'axios';

const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td><Link to={`/edit/${props.todo._id}`}>Edit</Link></td>
        
    </tr>
    
)


export default class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};
    }
    componentDidMount() {
        // axios.get('/todos/')
        //     .then(response => {
        //         if(this.unmounted) return;
        //         this.setState({ todos: response.data });
               
        //     }).catch(err =>{
        //         console.log(err);
        //     });
        fetch('/todos/')
        .then(response => response.json())
        .then(response => {
            console.log(response);
            if(this.unmounted) return;
               this.setState({ todos: response });
        })
        .catch(error => console.error(error))
      
        
    }
    componentDidUpdate() {
        // axios.get('/todos/')
        // .then(response => {
        //     if(this.unmounted) return;
        //     this.setState({ todos: response.data });
           
        // }).catch(err =>{
        //     console.log(err);
        // });
        fetch('/todos/')
        .then(response => response.json())
        .then(response => {
            if(this.unmounted) return;
            this.setState({
                todos: response
            })
        })
        .catch(err=>console.log(`error: ${err}`));

    }
   

    todoList(){
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        });
    }
    componentWillUnmount() {
        this.unmounted = true;
 
     }
    render() {
        return(
            <div>
                <h3>Todos List</h3>
                <table className="table table-stripped" style={{ marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Actions</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}