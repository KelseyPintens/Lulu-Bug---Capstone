import React, { Component } from 'react';
import '../App.css';
import Sunflower from './sunflower.png';
import Rosemary from './rosemary.png';

class Require extends Component {


    render() {
        return (
            <div>
                <img src={Sunflower} alt=""/>
                <img src={Rosemary} alt=""/>
            </div>
        );
    }
}

export default Require;