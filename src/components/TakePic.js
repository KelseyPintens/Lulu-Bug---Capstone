import React, { Component } from 'react';
import '../App.css';


class Pic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: ''
        };
    
      }

    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({image: e.target.result});
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    

    render() {
        return (

<div><label htmlFor="file-upload" className="custom-file-upload">
    <i className="fa fa-cloud-upload"></i> Add Picture
</label>
<input id="file-upload" type="file" onChange={this.onImageChange.bind(this)} />
<img id="target" src={this.state.image} alt=""/>
</div>
        );
    }
}

export default Pic;