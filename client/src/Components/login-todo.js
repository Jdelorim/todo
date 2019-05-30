import React, { Component } from 'react';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            email: '',
            password: ''
        }
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(`email: ${this.state.email}`);
        console.log(`password: ${this.state.password}`);
    }


    render() {
        return(
            <div style={{marginTop: 20}}>
                <h3>Login</h3>
                <form onSubmit={this.onSubmit}>
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
                        <input type='submit' value='Login' className='btn btn-primary' />
                    </div>
                </form>

            </div>
        )
    }
}