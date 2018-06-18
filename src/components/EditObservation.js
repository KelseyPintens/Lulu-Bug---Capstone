import React, { Component } from 'react';
import '../App.css';
import { Modal } from 'reactstrap';
import { rebase } from '../FirebaseKey';

class EditObservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          observations: [this.props.x.x],
          observationUpdate: []
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal,
        });
        console.log("this is x", this.props.x)

      }

      closeModal = () => {
        this.setState({modal: false});
      }

      handleChange = (event) => {
        this.setState({observations: event.target.value});
        console.log(event.target.value)
        event.preventDefault();
      }

      handleSubmit = (event) => {
        this.setState({observationUpdate: this.state.observations,
            value: ''});
               event.preventDefault(); 
      }

            componentDidMount() {

      this.syncing()


    }  


    syncing = () => {
        this.ref = rebase.syncState(`users/${this.props.user}/plants/${this.props.number}/observation/${this.props.index.index}`, {
            context: this,
            state: 'observationUpdate',
            asArray: true,
        });
    } 


    render(){

    return(

        
                <div className="box col mx-2">
                <div onClick={this.toggle}>Edit</div>

                            <Modal id="observation" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    How is your {this.props.name} doing?  Record your observations here.
                    <textarea value={this.state.observations} onChange={this.handleChange} className="observationModal mx-auto"></textarea>
                    </label>
                    <input type="submit" value="Submit" onClick={this.closeModal}/>
                </form>
                </div>
                            </Modal>
                    </div>

    )} 
  }


export default EditObservation;