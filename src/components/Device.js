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
            <div className="col ml-3">
                <div className="row mt-5 ml-2">
                    <DeviceButton deviceImage={waterIcon} deviceLabel="Water"/>
                    <DeviceButton deviceImage={fertilizerIcon} deviceLabel="Fertilizer"/>
                </div>
                <div className="row mt-3 ml-2">
                    <DeviceButton deviceImage={temperatureIcon} deviceLabel="Temperature"/>
                    <DeviceButton deviceImage={sunlightIcon} deviceLabel="Sunlight"/>
               </div>

            </div>
        );
    }
}

export default Device;