import React, { Component } from 'react';
import '../App.css';
import DeviceButton from './DeviceButton';
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
                    <DeviceButton deviceStats="20%" deviceImage={waterIcon} deviceLabel="Water"/>
                    <DeviceButton deviceStats="300 mS/cm" deviceImage={fertilizerIcon} deviceLabel="Fertilizer"/>
                </div>
                <div className="row mt-3 ml-2">
                    <DeviceButton deviceStats="75°F" deviceImage={temperatureIcon} deviceLabel="Temperature"/>
                    <DeviceButton deviceStats="4000 lux"deviceImage={sunlightIcon} deviceLabel="Sunlight"/>
               </div>
            </div>
        );
    }
}

export default Device;