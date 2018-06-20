import React, { Component } from 'react';
import '../App.css';
import ReactFileReader from 'react-file-reader';


class Pic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pic: ''
        };
    
      }

    // handleFiles = files => {
    //     this.setState({pic: files});
    //     console.log(files);
    //   }

    previewFile = () => {
        var preview = document.querySelector('img');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();
      
        reader.addEventListener("load", function () {
          preview.src = reader.result;
        }, false);
      
        if (file) {
          reader.readAsDataURL(file);
          console.log("File", file)
        }
      }

    render() {
        return (

//             <div>

//             <ReactFileReader handleFiles={this.handleFiles}>
//   <button className='btn'>Upload</button>

// </ReactFileReader>
//   <img src={this.state.pic} alt="" width="10%" height="10%"/>
// </div>


            <div className="col ml-3">
<input type="file" onchange={this.previewFile}/>
<img src="" height="200" alt="Image preview..."/>

            </div>
        );
    }
}

export default Pic;