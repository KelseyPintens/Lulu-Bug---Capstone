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
          valueDate: '',
          valueSunlight: '',
          valueTemperature: '',
          valueObservations: '',
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

      handleChangeDate = (event) => {
        this.setState({valueDate: event.target.value});
        console.log(event.target.value);
      }

      handleChangeSunlight = (event) => {
        this.setState({valueSunlight: event.target.value});
        console.log(event.target.value);
      }

      handleChangeTemperature = (event) => {
        this.setState({valueTemperature: event.target.value});
        console.log(event.target.value);
      }

      handleChangeObservations = (event) => {
        this.setState({valueObservations: event.target.value});
        console.log(event.target.value);
      }
    
      handleSubmit = (event) => {
          
        let observationInfo = {
            valueWater: this.state.valueWater,
            valueFertilizer: this.state.valueFertilizer,
            valueDate: this.state.valueDate,
            valueSunlight: this.state.valueSunlight,
            valueTemperature: this.state.valueTemperature,
            valueObservations: this.state.valueObservations,
            image: this.state.image
      }
      console.log("observationInfo", observationInfo)
        this.setState({observations: this.state.observations.concat([observationInfo]),
     image: '', 
     valueWater: '', 
     valueDate: '', 
     valueFertilizer: '', 
     valueTemperature: '',
     valueSunlight: '',
     valueObservations: '' });

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

        

                    <div className="plantDetailScroll">
                    
                        <div className="row">
                        <div className="col-2 px-0">
                            <img className="plantImage2" src={require(`../images/${this.props.plantInfo.image}.png`)} alt=""/>
                            <div className="deletePlant two" id={this.props.plantInfo.number} onClick={this.props.removePeople}>Delete Plant</div>
                        </div>
                        <div className="col">
                        <h4 className="addPlantText2 mt-3">{this.props.plantInfo.name} Need:</h4>
                        <div className="row">
                        <div className="col-2"></div>
                        <div className="col-4">
                            <div className="row">
                                    <img src={require(`../images/luluWaterIcon.png`)} alt="" width="25%" height="25%"/>
                                    <p className="needsLabel">Water</p>
                            </div>
                            <p className="needs">{this.props.plantInfo.waterlow}% to {this.props.plantInfo.waterhigh}%</p>
                            <div className="temp row">
                                    <img src={require(`../images/luluTemperatureIcon.png`)} alt="" width="25%" height="25%"/>
                                    <p className="needsLabel">Temperature</p>
                            </div>
                            <p className="needs">{this.props.plantInfo.temperaturelow}°F to {this.props.plantInfo.temperaturehigh}°F</p>

                        </div>
                        <div className="col-4">
                        <div className="row">
                                    <img src={require(`../images/luluFertilizerIcon.png`)} alt="" width="25%" height="25%"/>
                                    <p className="needsLabel">Fertilizer</p>
                                    
                            </div>
                            <p className="needs">{this.props.plantInfo.fertilizerlow}mS/cm to {this.props.plantInfo.fertilizerhigh}mS/cm</p>
                        <div className="row">
                                    <img src={require(`../images/luluSunlightIcon.png`)} alt="" width="25%" height="25%"/>
                                    <p className="needsLabel">Sunlight</p>
                                    
                            </div>
                            <p className="needs">{this.props.plantInfo.sunlightlow}lux to {this.props.plantInfo.sunlighthigh}lux</p>
                        </div>
                        <div className="col-2"></div>
                        </div>
                        </div>
                        </div>
                        <h5 className="addPlantText3 mt-2 text-center">Does your plant need anything?</h5>
                        <div className="iconRow2">
                        <div className="sizeDiv2">
                        {water < this.props.plantInfo.waterlow ? (<img src={require(`../images/luluWaterLow.png`)} alt="" width="100%" height="100%"/>) : water > this.props.plantInfo.waterhigh ? (<img src={require(`../images/luluWaterHigh.png`)} alt="" width="100%" height="100%"/>) : (<img src={require(`../images/luluWaterIcon.png`)} alt="" width="100%" height="100%"/>)}
                        </div>
                        <div className="sizeDiv2">
                        {fertilizer < this.props.plantInfo.fertililzerlow ? (<img src={require(`../images/luluFertilizerLow.png`)} alt="" width="100%" height="100%"/>) : fertilizer > this.props.plantInfo.fertilizerhigh ? (<img src={require(`../images/luluFertilizerHigh.png`)} alt="" width="100%" height="100%"/>) : (<img src={require(`../images/luluFertilizerIcon.png`)} alt="" width="100%" height="100%"/>)}
                        </div>
                        <div className="sizeDiv2">
                        {sunlight < this.props.plantInfo.sunlightlow ? (<img src={require(`../images/luluSunlightLow.png`)} alt="" width="100%" height="100%"/>) : sunlight > this.props.plantInfo.sunlighthigh ? (<img src={require(`../images/luluSunlightHigh.png`)} alt="" width="100%" height="100%"/>) : (<img src={require(`../images/luluSunlightIcon.png`)} alt="" width="100%" height="100%"/>)}
                        </div>
                        <div className="sizeDiv2">
                        {temperature < this.props.plantInfo.temperaturelow ? (<img src={require(`../images/luluTemperatureLow.png`)} alt="" width="100%" height="100%"/>) : temperature > this.props.plantInfo.temperaturehigh ? (<img src={require(`../images/luluTemperatureHigh.png`)} alt="" width="100%" height="100%"/>) : (<img src={require(`../images/luluTemperatureIcon.png`)} alt="" width="100%" height="100%"/>)}
                        </div>
                        </div>
                        <h4 className="addPlantText3 mt-5 text-center">Your {this.props.plantInfo.name} Journal</h4>
                        <AddObservation image={this.state.image} onImageChange={this.onImageChange} handleSubmit={this.handleSubmit} name={this.props.plantInfo.name} valueWater={this.state.valueWater} valueFertilizer={this.state.valueFertilizer} valueDate={this.state.valueDate} valueTemperature={this.state.valueTemperature} valueSunlight={this.state.valueSunlight} valueObservations={this.state.valueObservations} handleChangeWater={this.handleChangeWater} handleChangeFertilizer={this.handleChangeFertilizer} handleChangeDate={this.handleChangeDate} handleChangeTemperature={this.handleChangeTemperature} handleChangeSunlight={this.handleChangeSunlight} handleChangeObservations={this.handleChangeObservations}/>
                        <div>
                        {this.state.observations.map((x, index) => (
                                    
                            <div key={index}>
                            <div className="row">
                                <div className="col-5">
                                <img className="journalImage" src={x.image} alt="" width="100%"/>
                            </div>
                                <div className="col journalOptions">
                                <p className="dateLabel">Date: {x.valueDate}</p>
                                    <EditObservation user={this.props.user} number={this.props.plantInfo.number} index={{index}} x={{x}} handleSubmit={this.handleSubmit} name={this.props.plantInfo.name} value={this.state.value} handleChange={this.handleChange}/>
                                    <div className="deleteButton" id={index} onClick={this.removePeople}>delete</div>
                                </div>
                            </div>
                            </div>        
                        ))}
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