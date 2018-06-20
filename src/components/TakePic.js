import React, { Component } from 'react';
import '../App.css';
import ReactFileReader from 'react-file-reader';


class Pic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: ''
        };
    
      }

    // handleFiles = files => {
    //     this.setState({pic: files});
    //     console.log(files);
    //   }

    // previewFile = () => {
    //     var preview = document.querySelector('img');
    //     var file    = document.querySelector('input[type=file]').files[0];
    //     var reader  = new FileReader();
      
    //     reader.addEventListener("load", function () {
    //       preview.src = reader.result;
    //     }, false);
      
    //     if (file) {
    //       reader.readAsDataURL(file);
    //       console.log("File", file)
    //     }
    //   }

    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({image: e.target.result});
            };
            reader.readAsDataURL(event.target.files[0]);
        }
        console.log("IMAGE", this.state.image)
    }

    

    render() {
        return (

//             <div>

//             <ReactFileReader handleFiles={this.handleFiles}>
//   <button className='btn'>Upload</button>

// </ReactFileReader>
//   <img src={this.state.pic} alt="" width="10%" height="10%"/>
// </div>
<div>
<input type="file" onChange={this.onImageChange.bind(this)} className="filetype" id="group_image"/>
<img id="target" src={this.state.image}/>
</div>

//             <div className="col ml-3">
// <input type="file" onchange={this.previewFile}/>
// <img src="" height="200" alt="Image preview..."/>

//             </div>
        );
    }
}

export default Pic;