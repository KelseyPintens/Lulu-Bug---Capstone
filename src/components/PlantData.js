import React, { Component } from 'react';
import '../App.css';
import Data from '../api/plants.json';
import { rebase } from '../FirebaseKey';

class PlantData extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          plant: [],
          search: '',
          searchState: false
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
              waterlow: Data.plants[e.target.id].waterlow,
              fertilizerlow: Data.plants[e.target.id].fertilizerlow,
              sunlightlow: Data.plants[e.target.id].sunlightlow,
              temperaturelow: Data.plants[e.target.id].temperaturelow,
              waterhigh: Data.plants[e.target.id].waterhigh,
              fertilizerhigh: Data.plants[e.target.id].fertilizerhigh,
              sunlighthigh: Data.plants[e.target.id].sunlighthigh,
              temperaturehigh: Data.plants[e.target.id].temperaturehigh,
              image: Data.plants[e.target.id].image
        }

        this.setState({
            plant: this.state.plant.concat([plantInfo])
        })

      };

      componentWillReceiveProps(){
          if(this.props.searchState !== '') {
              this.setState({
                search: this.props.search,
                searchState: true
              })
          }else{
              this.setState({
                  searchState: false
              })
          }
      }



    render() {

        return (

            <div className="plantData">
                {Data.plants.map((x,index) => {
                    if(this.state.searchState) {
                        var xLower = x.name.toLowerCase();
                        var lowerSearch = this.state.search.toLowerCase();
                        if(xLower.includes(lowerSearch)){
                            return(<div key={index}>                    
                            <div className="addPlantDiv row" key={index}>
                            <div className="col">
                            <p className="addPlantName">{x.name}</p>
                            <img id={index} onClick={this.sendtoFirebase} className="plantImageD" src={require(`../images/${x.image}.png`)} alt=""/>
                            </div>
                            <div className="col">
                                <div className="addPlantButton" id={index} onClick={this.sendtoFirebase}>+ Add Plant</div>
                            </div>
                        </div> </div> )
                        }

                    } else {
                        return(<div key={index}>                    
                            <div className="addPlantDiv row" key={index}>
                            <div className="col">
                            <p className="addPlantName">{x.name}</p>
                            <img id={index} onClick={this.sendtoFirebase} className="plantImageD" src={require(`../images/${x.image}.png`)} alt=""/>
                            </div>
                            <div className="col">
                                <div className="addPlantButton" id={index} onClick={this.sendtoFirebase}>+ Add Plant</div>
                            </div>
                        </div> </div> )
                    }
      
                })}
            </div>
        );
    }
}

export default PlantData;
