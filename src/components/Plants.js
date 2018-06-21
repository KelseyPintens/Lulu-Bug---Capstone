import React, { Component } from 'react';
import '../App.css';
import plantLabel from '../images/luluLabel.png';
import { Modal } from 'reactstrap';
import { rebase } from '../FirebaseKey';
import PlantModal from './PlantModal';


class Plant extends Component {
    // constructor(props) {
    //     super(props);
        // this.
        state = {
          modal: false,
          modalState: [],
          plant: [],
          water: 25,
          fertilizer: 400,
          temperature: 75,
          sunlight: 4000
        };


    // sync state
    componentDidMount() {

        this.syncing()
    }  


    syncing = () => {
        console.log("I AM SYNCING")
        this.ref = rebase.syncState(`users/${this.props.user}/plants`, {
            context: this,
            state: 'plant',
            asArray: true,
        });
    }  

    
      toggle = (e) => {
        this.setState({modal: !this.state.modal})
        console.log("object",this.props.plantState[0].name)
        console.log("e", e.currentTarget.id)

        if (e.currentTarget.id !== '') {
            console.log("plant",this.props.plantState[e.currentTarget.id].name)
        let plantInfo = {
        name: this.props.plantState[e.currentTarget.id].name,
        waterlow: this.props.plantState[e.currentTarget.id].waterlow,
        fertilizerlow: this.props.plantState[e.currentTarget.id].fertilizerlow,
        sunlightlow: this.props.plantState[e.currentTarget.id].sunlightlow,
        temperaturelow: this.props.plantState[e.currentTarget.id].temperaturelow,
        waterhigh: this.props.plantState[e.currentTarget.id].waterhigh,
        fertilizerhigh: this.props.plantState[e.currentTarget.id].fertilizerhigh,
        sunlighthigh: this.props.plantState[e.currentTarget.id].sunlighthigh,
        temperaturehigh: this.props.plantState[e.currentTarget.id].temperaturehigh,
        image: this.props.plantState[e.currentTarget.id].image,
        number: e.currentTarget.id }

        this.setState({
            // modalState: this.state.modalState.concat([plantInfo]),
            modalState: plantInfo
        })
    }else{
            this.setState({
                modalState: []
            }, ()=>{
                console.log("here is a state", this.state.plant)
            })
        }
        
      }

      removePeople = (e) => {
        console.log("remove state", e.target.id)
        var array = [...this.state.plant]; // make a separate copy of the array
        var index = e.target.id;
        array.splice(index, 1);
        console.log("array above", array)
        this.setState({plant: array, modal: false});
      }

      
    render() {
        const water = this.state.water;
        const fertilizer = this.state.fertilizer;
        const temperature = this.state.temperature;
        const sunlight = this.state.sunlight;
        return (
            <div className="plantRow">
                {this.props.plantState.map((x,index) => (

                                    
                    <div id={index} onClick={this.toggle}  className="col-3 mx-2" key={index}>
                        <img src={plantLabel} alt="" width="130%"/>
                        <div id="example">
                        <img className="plantImage" src={require(`../images/${x.image}.png`)} alt=""/>
                        <div>
                            <p className="plantName">{x.name}</p>
                        </div>
                        <div className="iconRow">
                            <div className="sizeDiv">
                            {water < x.waterlow ? (<img src={require(`../images/luluWaterLow.png`)} alt="" width="100%"/>) : water > x.waterhigh ? (<img src={require(`../images/luluWaterHigh.png`)} alt="" width="100%"/>) : (<img src={require(`../images/luluWaterIcon.png`)} alt="" width="100%"/>)}
                            </div>
                            <div className="sizeDiv">
                            {fertilizer < x.fertililzerlow ? (<img src={require(`../images/luluFertilizerLow.png`)} alt="" width="100%"/>) : fertilizer > x.fertilizerhigh ? (<img src={require(`../images/luluFertilizerHigh.png`)} alt="" width="100%"/>) : (<img src={require(`../images/luluFertilizerIcon.png`)} alt="" width="100%"/>)}
                            </div>
                            <div className="sizeDiv">
                            {sunlight < x.sunlightlow ? (<img src={require(`../images/luluSunlightLow.png`)} alt="" width="100%"/>) : sunlight > x.sunlighthigh ? (<img src={require(`../images/luluSunlightHigh.png`)} alt="" width="100%"/>) : (<img src={require(`../images/luluSunlightIcon.png`)} alt="" width="100%"/>)}
                            </div>
                            <div className="sizeDiv">
                            {temperature < x.temperaturelow ? (<img src={require(`../images/luluTemperatureLow.png`)} alt="" width="100%"/>) : temperature > x.temperaturehigh ? (<img src={require(`../images/luluTemperatureHigh.png`)} alt="" width="100%"/>) : (<img src={require(`../images/luluTemperatureIcon.png`)} alt="" width="100%"/>)}
                            </div>
                        </div>
                        </div>


                    </div>        
                ))}

                
                     <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>

                    <div className="box col mx-2">
                       <PlantModal user={this.props.user} modalProp={this.state.modal} plantProp={this.state.plant} plantInfo={this.state.modalState} removePeople={this.removePeople}/>

                    </div>        
                    </Modal> 
            </div>
        );
    }
}


export default Plant;