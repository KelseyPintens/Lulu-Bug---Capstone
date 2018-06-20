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
                            <div><label htmlFor="file-upload" className="custom-file-upload">
    <i className="fa fa-cloud-upload"></i> Add Picture
</label>
<input id="file-upload" type="file" onChange={this.props.onImageChange.bind(this)} />
<img id="target" src={this.props.image} alt=""/>
</div>

<div>How is your {this.props.name} doing?  Record your observations here.</div>
                <form onSubmit={this.props.handleSubmit}>
                    <label>
                    Did you water the plant?
                    <textarea value={this.props.valueWater} onChange={this.props.handleChangeWater} className="observationModal mx-auto"></textarea>
                    </label>
                    <label>
                    Did you Fertilize the plant?
                    <textarea value={this.props.valueFertilizer} onChange={this.props.handleChangeFertilizer} className="observationModal mx-auto"></textarea>
                    </label>
                    <input type="submit" value="Submit" onClick={this.closeModal}/>
                </form>
                </div>
                            </Modal>
                    </div>

    )} 
  }


export default AddObservation;