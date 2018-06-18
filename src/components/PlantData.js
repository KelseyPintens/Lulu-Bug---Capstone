import React, { Component } from 'react';
import '../App.css';
import Data from '../api/plants.json';
import { rebase } from '../FirebaseKey';

class PlantData extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          plant: []
        }
  
      }

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

        
        // send to firebase
      sendtoFirebase = (e) => {
        console.log('Gonna Add Plants');
        console.log("e", e.target.id)
        let plantInfo = {
              name: Data.plants[e.target.id].name,
              water: Data.plants[e.target.id].water,
              fertilizer: Data.plants[e.target.id].fertilizer,
              sunlight: Data.plants[e.target.id].sunlight,
              temperature: Data.plants[e.target.id].temperature,
              image: Data.plants[e.target.id].image
        }

        this.setState({
            plant: this.state.plant.concat([plantInfo])
        })

      };



    render() {

        return (

            <div className="plantData">
                {Data.plants.map((x,index) => (
                    <div className="row" key={index}>
                                <img className="plantImageD" src={require(`../images/${x.image}.png`)} alt=""/>
                                <div className="col">
                                    <p>{x.name}</p>
                                    <div className="row">
                                    <img src={require(`../images/luluWater.png`)} alt="" width="10%" height="10%"/>
                                    <p>{x.water}</p>
                                    </div>
                                    <div className="row">
                                    <img src={require(`../images/luluFertilizer.png`)} alt="" width="10%" height="10%"/>
                                    <p>{x.fertilizer}</p>
                                    </div>
                                    {/* <p>{x.fertilizer}</p> */}
                                </div>
                                <div className="col">
                                    <div id={index} onClick={this.sendtoFirebase}>Add Plant</div>
                                    <div className="row">
                                    <img src={require(`../images/luluSunlight.png`)} alt="" width="10%" height="10%"/>
                                    <p>{x.sunlight}</p>
                                    </div>
                                    <div className="row">
                                    <img src={require(`../images/luluTemperature.png`)} alt="" width="10%" height="10%"/>
                                    <p>{x.temperature}</p>
                                    </div>
                                </div>
                            </div>        
                ))}
            </div>
        );
    }
}

export default PlantData;
