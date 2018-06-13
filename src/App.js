import React, { Component } from 'react';
import './App.css';
import Device from './components/Device';
import './index.css';
import AddPlant from './components/AddPlant';
import Plant from './components/Plants';
import SignIn from './components/SignIn';



class App extends Component {
  constructor(props) {
    super(props)

    this.state={
      authed: false,
      user: null
    }
  }

  userToApp = (user) => {
    this.setState({
      authed: true,
      userID: user.user.uid,
    });
  }

  render() {
    // this.theData()

    if(this.state.authed) {
      return (
        <div>
        <div className="row">
          <Device/>
          <AddPlant/>
        </div>
        <div className="plantRow mt-4">
          <Plant/>
          <Plant/>
          <Plant/>
          <Plant/>
          <Plant/>
        </div>
        </div>
      )
    }else if(!this.state.authed) {
      return(
        <div>
          <h1>Login</h1>
          <SignIn userToApp={this.userToApp}/>
        </div>
      )
    }
    
  }
}


export default App;
