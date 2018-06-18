import React, { Component } from 'react';
import '../App.css';
import { rebase } from '../FirebaseKey';
import AddObservation from './AddObservation';
import EditObservation from './EditObservation';

class PlantModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: '', 
          observations: []
        };
    
      }


      handleChange = (event) => {
        this.setState({value: event.target.value});
        console.log(event.target.value)
      }
    
      handleSubmit = (event) => {
        this.setState({observations: this.state.observations.concat([this.state.value]),
     value: ''});
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
                    <div>
                        <img className="plantImage" src={require(`../images/${this.props.plantInfo.image}.png`)} alt=""/>
                        <div className="col">
                            <p>{this.props.plantInfo.name}</p>
                            <div className="row">
                                    <img src={require(`../images/luluWater.png`)} alt="" width="10%" height="10%"/>
                                    <p>{this.props.plantInfo.water}</p>
                            </div>
                            <div className="row">
                                    <img src={require(`../images/luluFertilizer.png`)} alt="" width="10%" height="10%"/>
                                    <p>{this.props.plantInfo.fertilizer}</p>
                            </div>
                        </div>
                        <div className="col">
                        <div className="row">
                                    <img src={require(`../images/luluSunlight.png`)} alt="" width="10%" height="10%"/>
                                    <p>{this.props.plantInfo.sunlight}</p>
                            </div>
                            <div className="row">
                                    <img src={require(`../images/luluTemperature.png`)} alt="" width="10%" height="10%"/>
                                    <p>{this.props.plantInfo.temperature}</p>
                            </div>
                        </div>
                        <div id={this.props.plantInfo.number} onClick={this.props.removePeople}>delete</div>
                        <div>{this.props.plantInfo.name} Journal</div>
                        <AddObservation handleSubmit={this.handleSubmit} name={this.props.plantInfo.name} value={this.state.value} handleChange={this.handleChange}/>
                        <div>
                        {this.state.observations.map((x,index) => (
                                    
                            <div className="box mx-2" key={index}>
                                <div>{x}</div>
                                <EditObservation user={this.props.user} number={this.props.plantInfo.number} index={{index}} x={{x}} handleSubmit={this.handleSubmit} name={this.props.plantInfo.name} value={this.state.value} handleChange={this.handleChange}/>
                                <div id={index} onClick={this.removePeople}>delete</div>
                                {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>

                                </Modal> */}
                            </div>        
                        ))}
                        </div>


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