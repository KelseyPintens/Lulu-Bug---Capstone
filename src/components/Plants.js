import React, { Component } from 'react';
import '../App.css';
import plantLabel from '../images/luluLabel.png';


class Plant extends Component {

    render() {
        return (
            <div className="col-3 mx-2">
                <img src={plantLabel} alt="" width="130%"/>
            </div>
        );
    }
}

export default Plant;