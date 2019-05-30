import React, { Component } from 'react';
import axios from 'axios';

const Emailtaken = () => (
    <div className='hidden'>
          <h1>Email Taken!</h1>
      </div>
    )
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            email: '',
            password: '',
            info: [],
            newEmail: [],
            username: [],
            isHidden: true,
            checkme: false
        }
    }

    componentDidMount() {
        // fetch('/login/')
        // .then(response => response.json())
        // // .then(response => {
        // //     console.log(response);
        // //     if(this.unmounted) return;
        // //        this.setState({ info: response });
        // // })
        // .catch(error => console.error(error))
            axios.get('/login/')
            .then(response => {
                
                if(this.unmounted) return;
                this.setState({ info: response.data })

                const getinfo = {
                    email: [],
                    username: []
                };
                for(var i=0;i<this.state.info.length;i++){
                getinfo.email.push(this.state.info[i].email);
                getinfo.username.push(this.state.info[i].userName);
                }
                this.setState({
                     newEmail: getinfo.email,
                     username: getinfo.username
                 });
                
                console.log('emails'+ this.state.newEmail)
               
            }).catch(err =>{
                console.log(err);
            });

    }

    onChangeEmail(e) {
        if(this.state.checkme === true){
            this.toggleHidden();
            this.setState({
                checkme: false
            })
        }
        this.setState({
            email: e.target.value
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    toggleHidden () {
        this.setState({
          isHidden: !this.state.isHidden
        })
      }

    onSubmit(e) {
        e.preventDefault();
        // console.log(`email: ${this.state.email}`);
        // console.log(`password: ${this.state.password}`);
        console.log(`EmailList: ${this.state.newEmail}`);
        console.log(`username: ${this.state.username}`);
        for(var i=0;i<this.state.newEmail.length;i++){
        if(this.state.newEmail[i] === this.state.email){
            console.log('it matches');
            this.toggleHidden();
            this.setState({
                checkme: true
            })
        }
        }

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
                        <input  type='submit' value='Login' className='btn btn-primary' />
                        {!this.state.isHidden && <Emailtaken />}
                    </div>
                </form>

            </div>
        )
    }
}