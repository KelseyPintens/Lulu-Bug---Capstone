import React, { Component } from 'react';
import '../App.css';
import { Modal } from 'reactstrap';

class AddObservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal,
        });
      }

      closeModal = () => {
        this.setState({modal: false});
      }


    render(){

    return(

        
                <div className="box col mx-2">
                <div onClick={this.toggle}>Add to Journal</div>

                            <Modal id="observation" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label>
                    How is your {this.props.name} doing?  Record your observations here.
                    <textarea value={this.props.value} onChange={this.props.handleChange} className="observationModal mx-auto"></textarea>
                    </label>
                    <input type="submit" value="Submit" onClick={this.closeModal}/>
                </form>
                </div>
                            </Modal>
                    </div>

    )} 
  }


export default AddObservation;