import React, { Component } from 'react';
import '../App.css';
import { Modal } from 'reactstrap';
import { rebase } from '../FirebaseKey';

class PlantModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          value: '', 
          observations: []
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle(e) {
        this.setState({
          modal: !this.state.modal,
        });
      }

      handleChange = (event) => {
        this.setState({value: event.target.value});
      }
    
      handleSubmit = (event) => {
        alert('Your favorite flavor is: ' + this.state.value);
        this.setState({observations: this.state.observations.concat([this.state.value]),
        modal: false, value: ''});
        event.preventDefault(); 
      }


      componentDidMount() {

      this.syncing()


    }  


    syncing = () => {
        this.ref = rebase.syncState(`users/${this.props.user}/plants/${this.props.plantInfo.number}/observation`, {
            context: this,
            state: 'observations',
            asArray: true,
        });
    } 
    
    removePeople = (e) => {
        console.log("remove state", e.target.id)
        var array = [...this.state.observations]; // make a separate copy of the array
        var index = e.target.id;
        array.splice(index, 1);
        console.log("array above", array)
        this.setState({observations: array});
      }

    // updateObservation = () => {
    //     this.setState({
    //         observations: update(this.state.observations, {1: {name: {$set: 'updated field name'}}})
    //       })
    // }


    render(){


        if (this.props.modalProp !== false) {
    return(

        
                <div className="box col mx-2">
                    <div id="example">
                        <img className="plantImage" src={require(`../images/${this.props.plantInfo.image}.png`)} alt=""/>
                        <div className="col">
                            <p>{this.props.plantInfo.name}</p>
                            <p>{this.props.plantInfo.water}</p>
                            <p>{this.props.plantInfo.fertilizer}</p>
                        </div>
                        <div className="col">
                            <p>{this.props.plantInfo.sunlight}</p>
                            <p>{this.props.plantInfo.temperature}</p>
                        </div>
                        <div id={this.props.plantInfo.number} onClick={this.props.removePeople}>delete</div>
                        <div>{this.props.plantInfo.name} Journal</div>
                        <div onClick={this.toggle}>Add to Journal</div>
                        <div>
                        {this.state.observations.map((x,index) => (
                                    
                            <div className="box col-3 mx-2" key={index}>
                                <div>{x}</div>
                                <div id="edit" onClick={this.toggle}>edit</div>
                                <div id={index} onClick={this.removePeople}>delete</div>
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>

                                </Modal>
                            </div>        
                        ))}
                        </div>

                            <Modal id="observation" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    How is your {this.props.plantInfo.name} doing?  Record your observations here.
                    <textarea value={this.state.value} onChange={this.handleChange} className="observationModal mx-auto"></textarea>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                </div>
                            </Modal>
                    </div>

                </div>   
    )} else{
        return (
            <div >

            </div>
        );
    }
  }
}

export default PlantModal;