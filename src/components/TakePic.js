import React, { Component } from 'react';
import '../App.css';


class Pic extends Component {

    previewFile = () => {
        var preview = document.querySelector('img');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();
      
        reader.addEventListener("load", function () {
          preview.src = reader.result;
        }, false);
      
        if (file) {
          reader.readAsDataURL(file);
        }
      }

    render() {
        return (
            <div className="col ml-3">
<input type="file" onchange={this.previewFile}/>
<img src="" height="200" alt="Image preview..."/>

            </div>
        );
    }
}

export default Pic;