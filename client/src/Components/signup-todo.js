import React, { Component } from 'react';
import axios from 'axios';

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    onChangeUsername(e){
        this.setState({
            userName: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }
    onChangeConfirmPassword(e){
        this.setState({
            confirmPassword: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(`username: ${this.state.userName}`);
        console.log(`password: ${this.state.password}`);
        console.log(`email ${this.state.email}`)

        const info = {
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }
        if(this.state.confirmPassword !== this.state.password) {
            alert("passwords do not match");
            return;
        }
        
        axios.post('todos/signup', info)
            .then(res =>{
                console.log(res.data);
        });

        this.setState({
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
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
                    <label>Email:</label>
                    <input type='text' className='form-control'
                            value={this.state.email}
                            onChange={this.onChangeEmail} />
                    </div>

                    <div className='form-group'>
                    <label>Password:</label>
                    <input type='text' className='form-control'
                            value={this.state.password}
                            onChange={this.onChangePassword} />
                    </div>

                    <div className='form-group'>
                    <label>Confirm Password:</label>
                    <input type='text' className='form-control'
                            value={this.state.confirmPassword}
                            onChange={this.onChangeConfirmPassword} />
                    </div>

                    <div className='form-group'>
                        <input type='submit' value='Sign Up'  className='btn btn-primary' />
                   </div>
                </form>
            </div>
        )
    }
}