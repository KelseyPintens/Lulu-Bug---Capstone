import React, { Component } from 'react';
import '../App.css';
import { rebase } from '../FirebaseKey';
import AddObservation from './AddObservation';
import EditObservation from './EditObservation';

class PlantModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          valueWater: '',
          valueFertilizer: '',
          observations: [],
          water: 25,
          fertilizer: 400,
          temperature: 75,
          sunlight: 4000,
          image: ''
        };
    
      }


      handleChangeWater = (event) => {
        this.setState({valueWater: event.target.value});
        console.log(event.target.value);
      }
      handleChangeFertilizer = (event) => {
        this.setState({valueFertilizer: event.target.value});
        console.log(event.target.value);
      }
    
      handleSubmit = (event) => {
          
        let observationInfo = {
            valueWater: this.state.valueWater,
            valueFertilizer: this.state.valueFertilizer,
            image: this.state.image
      }
      console.log("observationInfo", observationInfo)
        this.setState({observations: this.state.observations.concat([observationInfo]),
     image: '', value: ''});

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

      onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({image: e.target.result});
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
      


    render(){
        const water = this.state.water;
        const fertilizer = this.state.fertilizer;
        const temperature = this.state.temperature;
        const sunlight = this.state.sunlight;
console.log("waterlow",this.props.plantInfo.waterlow)

        if (this.props.modalProp !== false) {
    return(

        
                <div className="box col mx-2">
                    <div>
                        <img className="plantImage" src={require(`../images/${this.props.plantInfo.image}.png`)} alt=""/>
                        <div className="col">
                            <p>{this.props.plantInfo.name}</p>
                            <div className="row">
                                    <img src={require(`../images/luluWater.png`)} alt="" width="10%" height="10%"/>
                                    <p>{this.props.plantInfo.waterlow} - {this.props.plantInfo.waterhigh}</p>
                            </div>
                            <div className="row">
                                    <img src={require(`../images/luluFertilizer.png`)} alt="" width="10%" height="10%"/>
                                    <p>{this.props.plantInfo.fertilizerlow} - {this.props.plantInfo.fertilizerhigh}</p>
                            </div>
                        </div>
                        <div className="col">
                        <div className="row">
                                    <img src={require(`../images/luluSunlight.png`)} alt="" width="10%" height="10%"/>
                                    <p>{this.props.plantInfo.sunlightlow} - {this.props.plantInfo.sunlighthigh}</p>
                            </div>
                            <div className="row">
                                    <img src={require(`../images/luluTemperature.png`)} alt="" width="10%" height="10%"/>
                                    <p>{this.props.plantInfo.temperaturelow} - {this.props.plantInfo.temperaturehigh}</p>
                            </div>
                        </div>
                                                <div>
                        {water < this.props.plantInfo.waterlow ? (<img src={require(`../images/luluWaterLow.png`)} alt="" width="10%" height="10%"/>) : water > this.props.plantInfo.waterhigh ? (<img src={require(`../images/luluWaterHigh.png`)} alt="" width="10%" height="10%"/>) : (<img src={require(`../images/luluWaterIcon.png`)} alt="" width="10%" height="10%"/>)}
                        </div>
                        <div>
                        {fertilizer < this.props.plantInfo.fertililzerlow ? (<img src={require(`../images/luluFertilizerLow.png`)} alt="" width="10%" height="10%"/>) : fertilizer > this.props.plantInfo.fertilizerhigh ? (<img src={require(`../images/luluFertilizerHigh.png`)} alt="" width="10%" height="10%"/>) : (<img src={require(`../images/luluFertilizerIcon.png`)} alt="" width="10%" height="10%"/>)}
                        </div>
                        <div>
                        {sunlight < this.props.plantInfo.sunlightlow ? (<img src={require(`../images/luluSunlightLow.png`)} alt="" width="10%" height="10%"/>) : sunlight > this.props.plantInfo.sunlighthigh ? (<img src={require(`../images/luluSunlightHigh.png`)} alt="" width="10%" height="10%"/>) : (<img src={require(`../images/luluSunlightIcon.png`)} alt="" width="10%" height="10%"/>)}
                        </div>
                        <div>
                        {temperature < this.props.plantInfo.temperaturelow ? (<img src={require(`../images/luluTemperatureLow.png`)} alt="" width="10%" height="10%"/>) : temperature > this.props.plantInfo.temperaturehigh ? (<img src={require(`../images/luluTemperatureHigh.png`)} alt="" width="10%" height="10%"/>) : (<img src={require(`../images/luluTemperatureIcon.png`)} alt="" width="10%" height="10%"/>)}
                        </div>
                        <div id={this.props.plantInfo.number} onClick={this.props.removePeople}>delete</div>
                        <div>{this.props.plantInfo.name} Journal</div>
                        <AddObservation image={this.state.image} onImageChange={this.onImageChange} handleSubmit={this.handleSubmit} name={this.props.plantInfo.name} valueWater={this.state.valueWater} valueFertilizer={this.state.valueFertilizer} handleChangeWater={this.handleChangeWater} handleChangeFertilizer={this.handleChangeFertilizer}/>
                        <div>
                        {this.state.observations.map((x, index) => (
                                    
                            <div className="box mx-2" key={index}>
                            <img src={x.image} alt="" width="10%" height="10%"/>
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