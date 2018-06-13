import React, { Component } from 'react';
import '../App.css';

class DeviceButton extends Component {

    render() {
        return (
            <div className="col-2">
                <div className="const">
                    <img className="deviceImages" src={this.props.deviceImage} alt="" width="100%"/>
                    <div className="text-block">
                        <p>75%</p>
                    </div>
                </div>
                <div className="text-center mt-2">{this.props.deviceLabel}</div>

            </div>
        );
    }
}

export default DeviceButton;