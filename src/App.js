import React, { Component } from 'react';
import './App.css';
import Device from './components/Device';
import './index.css';
import AddPlant from './components/AddPlant';
import Plant from './components/Plants';
import SignIn from './components/SignIn';
import {rebase} from './FirebaseKey';


class App extends Component {
  constructor(props) {
    super(props)

    this.state={
      authed: false,
      userObj: null,
      plant: []
    }
  }


  componentDidMount(){
    this.authListener = rebase.initializedApp.auth().onAuthStateChanged((user) =>{
      if (user){
        this.setState({
          authed: true,
          userObj: user.uid,

    

        });
        this.syncing()
        console.log("user.userObj", this.state.userObj)
      }else{
        this.setState({
          auhted: false,
          userObj: null,

          
        })
      }
    })


    
  }

  syncing = () => {
    console.log("I AM SYNCING", this.state.userObj)
    this.ref = rebase.syncState(`users/${this.state.userObj}/plants`, {
        context: this,
        state: 'plant',
        asArray: true,
      });
} 

  render() {

    console.log("SENT",this.state.plant)

    if(this.state.authed) {
      return (
        <div>
        <div className="row">
          <Device/>
          <AddPlant user={this.state.userObj}/>
        </div>
        <div className="deviceMargin">
          <Plant plantState={this.state.plant} user={this.state.userObj}/>
        </div>
        </div>
      )
    }else if(!this.state.authed) {
      return(
        <div>
          <h1>Login</h1>
          <SignIn/>
        </div>
      )
    }
    
  }
}


export default App;
