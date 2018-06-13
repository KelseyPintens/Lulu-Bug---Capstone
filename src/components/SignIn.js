
import React, { Component } from 'react';
import { loginWithGoogle } from '../Authorization';

class SignIn extends Component {

    // Launches authentication via Google
    authenticate(){
        // Login via Google and launch updateIt function in App.js 
        loginWithGoogle(this.props.userToApp)
    }

    render() {
        return(
            <div>
                <button onClick={() => this.authenticate('google')}>Login</button>
            </div>
        )
    }

}

export default SignIn;