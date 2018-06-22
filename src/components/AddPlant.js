import React, { Component } from 'react';
import '../App.css';
import addPlantIcon from '../images/luluAddPlant.png';
import { Modal } from 'reactstrap';
import PlantData from './PlantData';


class AddPlant extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          search: ''
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal,
        });
      }

      search = (e) => {
        this.setState({
            search: e.target.value
          });
      }


    render() {

        // console.log("PLANT", h)
        return (
            <div className="col-3 addPlant">
            <div onClick={this.toggle}>
                <img src={addPlantIcon} alt="" width="75%"/>
            </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <h4 className="addPlantText mt-5 text-center">Add a plant to your garden! </h4>
                    <input id="search" className="searchPlant" type="text" name="name" placeholder="Search Plants" onKeyUp={this.search}/>
                    <PlantData search={this.state.search} handleChange={this.props.handleChange} className="plantData p-5" user={this.props.user}/>
                </Modal>
            </div>
        );
    }
}

export default AddPlant;