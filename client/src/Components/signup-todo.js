import React, { Component } from 'react';
import axios from 'axios';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            userName: '',
            password: ''
        }
    }

    onChangeUsername(e){
        this.setState({
            userName: e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(`e: ${this.state.userName}`);
        console.log(`e: ${this.state.password}`);

        const info = {
            userName: this.state.userName,
            password: this.state.password
        }
        
        axios.post('todos/signup', info)
            .then(res =>{
                console.log(res.data);
        });

        this.setState({
            userName: '',
            password: ''
        });

    }

    render() {
        return(
            <div style={{marginTop: 20}}>
                <h3>Sign Up</h3>
                <form onSubmit={this.onSubmit}>
                  <div className='form-group'>
                    <label>Username:</label>
                    <input type='text' className='form-control'
                            value={this.state.userName}
                            onChange={this.onChangeUsername} />
                    </div>

                    <div className='form-group'>
                    <label>Password:</label>
                    <input type='text' className='form-control'
                            value={this.state.password}
                            onChange={this.onChangePassword} />
                    </div>

                    {/* <div className='form-group'>
                    <label>First Name:</label>
                    <input type='text' className='form-control'
                            value={this.state.firstName}
                            onChange={this.onChangeFirstname} />
                    </div>

                    <div className='form-group'>
                    <label>Username:</label>
                    <input type='text' className='form-control'
                            value={this.state.userName}
                            onChange={this.onChangeUsername} />
                    </div> */}
                    <div className='form-group'>
                        <input type='submit' value='signup'  className='btn btn-primary' />
                   </div>
                </form>
            </div>
        )
    }
}