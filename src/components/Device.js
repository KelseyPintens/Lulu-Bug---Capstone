import React, { Component } from 'react';
import '../App.css';
import waterIcon from '../images/luluWater.png';
import fertilizerIcon from '../images/luluFertilizer.png';
import temperatureIcon from '../images/luluTemperature.png';
import sunlightIcon from '../images/luluSunlight.png'; 
class Device extends Component {

    render() {
        return (
            <div className="col ml-4 deviceMargin" >
                <div className="const outdoorData">Current Outdoor Data</div>
                <div className="row mt-1 ml-2">
                <div className="col-2">
                <div className="row">
                    <div className="col px-0">
                        <img className="deviceImages" src={waterIcon} alt="" width="100%"/>
                        <p>WATER</p>
                    </div>
                    <div className="col px-0">
                        <h2 className="mb-0">20%</h2>
                    </div>               
                </div>
            </div>
            <div className="col-2">
                <div className="row">
                    <div className="col px-0">
                        <img className="deviceImages" src={fertilizerIcon} alt="" width="100%"/>
                    </div>
                    <div className="col px-0">
                        <h2 className="mb-0">400 mS/cm</h2>
                        <p>FERTILIZER</p>
                    </div>               
                </div>
            </div>
                <div className="row ml-2">

                            <div className="col-2">
                <div className="row">
                    <div className="col px-0">
                        <img className="deviceImages" src={temperatureIcon} alt="" width="100%"/>
                        <p>TEMPERATURE</p>
                    </div>
                    <div className="col px-0">
                        <h2 className="mb-0">75°F</h2>
                    </div>               
                </div>
            </div>
            <div className="col-2">
                <div className="row">
                    <div className="col px-0">
                        <img className="deviceImages" src={sunlightIcon} alt="" width="100%"/>
                    </div>
                    <div className="col px-0">
                        <h2 className="mb-0">4500 lux</h2>
                        <p>SUNLIGHT</p>
                    </div>               
                </div>
            </div>
            </div>
               </div>
            </div>
        );
    }
}

export default Device;