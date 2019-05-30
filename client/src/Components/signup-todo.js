import React, { Component } from 'react';
import axios from 'axios';

// const Emailtaken = () => (
//     <div className='hidden'>
//           <h1>Email Taken!</h1>
//       </div>
//     )
const Usernametaken = () => (
        <div className='hidden'>
              <h1>Username Taken!</h1>
          </div>
        )
export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);
        this.toggleHiddenEmail = this.toggleHiddenEmail.bind(this);
        this.toggleHiddenUser = this.toggleHiddenUser.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            userName: '',
            email: '',
            password: '',
            confirmPassword: '',
            newEmail: [],
            newUsername: [],
            isHiddenEmail: true,
            isHiddenUser: true,
            checkme: false
        }
    }

    componentDidMount(){
        axios.get('/login/').then(res => {
            if(this.unmounted) return;
            this.setState({
                info: res.data
            })
            const getInfo = {
                email: [],
                username: []
            }
            for(let i=0;i<this.state.info.length;i++) {
                getInfo.email.push(this.state.info[i].email);
                getInfo.username.push(this.state.info[i].userName); 
            }
            this.setState({
                newEmail: getInfo.email,
                newUsername: getInfo.username
            })
            console.log('emails'+ this.state.newEmail);
            console.log(`users: ${this.state.newUsername}`);
        }).catch(err=>{
            console.log(err);
        })
    }

    onChangeUsername(e){
        if(this.state.checkme === true){
            this.toggleHiddenUser();
            this.setState({
                checkme: false
            })
        }
        this.setState({
            userName: e.target.value
        });
    }
    onChangeEmail(e) {
        if(this.state.checkme === true){
            this.toggleHiddenEmail();
            this.setState({
                checkme: false
            })
        }
        this.setState({
            email: e.target.value
        });
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
    toggleHiddenEmail () {
        this.setState({
          isHiddenEmail: !this.state.isHiddenEmail
        })
      }

      toggleHiddenUser () {
        this.setState({
          isHiddenUser: !this.state.isHiddenUser
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
        
        for(var i=0;i<this.state.newEmail.length;i++){
            if(this.state.newEmail[i] === this.state.email){
                console.log('it matches');
                this.toggleHiddenEmail();
                this.setState({
                    checkme: true
                });
                return;
            }  
        }

        for(var j=0;j<this.state.newUsername.length;j++){
                if(this.state.userName === this.state.newUsername[i]){
                    console.log('user taken');
                    this.toggleHiddenUser();
                    this.setState({
                        checkme: true
                    });
                    return;
                }
            }
           
        
      
        fetch('todos/signup', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
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
                        
                        {!this.state.isHiddenUser && <Usernametaken />}
                   </div>
                </form>
            </div>
        )
    }
}