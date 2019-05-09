import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import CreateTodo from './Components/create-todo';
import EditTodo from './Components/edit-todo';
import TodosList from './Components/todos-list';

import logo from './images/jdlogo.png';
class App extends Component{


  render(){
    return ( 
      <Router>
        <div className="container">
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <a className='navbar-brand' href='https://www.joshuadelorimier.com' target='blank'>
            <img src={ logo } width='30' height='30' alt='joshua delorimier web developer' />
            </a>
            <Link to='/' className='navbar-brand'>MERN-stack ToDo App</Link>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav mr-auto'>
                <li className='navbar-item'>
                  <Link to="/" className='nav-link'>Todos</Link>
                </li>
                <li>
                  <Link to='/create' className='nav-link'>Create Todo</Link>
                </li>
               </ul>
            </div>
          </nav>
          
          <Route path='/' exact component={ TodosList } />
          <Route path='/edit/:id' component={ EditTodo } />
          <Route path='/create' component= { CreateTodo } />
        </div>
      </Router>
    )
  }
}



export default App;