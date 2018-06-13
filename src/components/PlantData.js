import React, { Component } from 'react';
import '../App.css';
import Data from '../api/plants.json';

class PlantData extends Component {
    
    // this.Require;

    render() {



        return (

            <div className="plantData">
                {Data.plants.map(x => {
                    return <div className="row" key={x.name}>
                                <img className="plantImage" src={require(`../images/${x.image}.png`)} alt=""/>
                                <div className="col">
                                    <p>{x.name}</p>
                                    <p>{x.water}</p>
                                    <p>{x.fertilizer}</p>
                                </div>
                                <div className="col">
                                    <div>Add Plant</div>
                                    <p>{x.sunlight}</p>
                                    <p>{x.temperature}</p>
                                </div>
                            </div>        
                })}
            </div>
        );
    }
}

export default PlantData;