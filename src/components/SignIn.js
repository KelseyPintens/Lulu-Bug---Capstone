import React, { Component } from 'react';
import { loginWithGoogle, resetPassword } from '../userAuth';
import {googleProvider} from '../FirebaseKey';

function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

class Login extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            loginMessage: null,
        }
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetPassword = this.resetPassword.bind(this);
       
      }

    handleSubmit = (e) => {
        e.preventDefault()
        loginWithGoogle(googleProvider)
        .catch((error) => {
            this.setState(setErrorMsg('Invalid username/password.'))
        })
    }

    resetPassword = () => {
        resetPassword(this.email.value)
        .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
        .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
    }

    
  render () {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <button className="login-button" onClick={this.handleSubmit}>Login With Google</button>
      </div>
    )
  }
}

export default Login;