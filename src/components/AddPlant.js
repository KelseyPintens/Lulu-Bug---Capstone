import React, { Component } from 'react';
import '../App.css';
import addPlantIcon from '../images/luluAddPlant.png';
import { Modal } from 'reactstrap';
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
          modal: !this.state.modal,
        });
      }


    render() {

        // console.log("PLANT", h)
        return (
            <div className="col-2 addPlant">
            <div onClick={this.toggle}>
                <img src={addPlantIcon} alt="" width="100%"/>
            </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <h4 className="addPlantText mt-5 text-center">Add a plant to your garden! </h4>
                    <input className="searchPlant" type="text" name="name" placeholder="Search Plants"/>
                    <PlantData handleChange={this.props.handleChange} className="plantData p-5" user={this.props.user}/>
                </Modal>
            </div>
        );
    }
}

export default AddPlant;