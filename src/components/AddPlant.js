import React, { Component } from 'react';
import '../App.css';
import addPlantIcon from '../images/luluAddPlant.png';
import { Modal, ModalBody } from 'reactstrap';
import PlantData from './PlantData';



class AddPlant extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }


    render() {
        return (
            <div className="col-2 addPlant" onClick={this.toggle}>
                <img className="deviceImages" src={addPlantIcon} alt="" width="90%"/>
                <h6 className="text-center">Add Plant</h6>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <h4 className="mt-5 text-center">Add Plant</h4>
                    <input className="searchPlant" type="text" name="name" placeholder="Search Plants"/>
                        <PlantData className="plantData p-5"/>
                </Modal>
            </div>
        );
    }
}

export default AddPlant;