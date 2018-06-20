import React, { Component } from 'react';
import '../App.css';
import { Modal } from 'reactstrap';
import { rebase } from '../FirebaseKey';

class EditObservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          valueWater: [this.props.x.x.valueWater],
          valueFertilizer: [this.props.x.x.valueFertilizer],
          image: [this.props.x.x.image],
          newimage: '',
          observationUpdate: []
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal,
        });
        if (this.state.modal === false) {
          this.setState({
            valueWater: this.props.x.x.valueWater,
            valueFertilizer: this.props.x.x.valueFertilizer,
            newimage: '',
            image: this.props.x.x.image

          });
        }

      }

      closeModal = () => {
        this.setState({modal: false});
      }

      handleChangeWater = (event) => {
        this.setState({valueWater: event.target.value});
        console.log(event.target.value)
        event.preventDefault();
      }

      handleChangeFertilizer = (event) => {
        this.setState({valueFertilizer: event.target.value});
        console.log(event.target.value)
        event.preventDefault();
      }

      handleSubmit = (event) => {
        let observationInfo = {
          valueWater: this.state.valueWater,
          valueFertilizer: this.state.valueFertilizer,
          image: this.state.image
    }

        this.setState({observationUpdate: observationInfo,
            });
               event.preventDefault(); 
      }

      deleteImage = () => {
        this.setState({image: '', newimage: ''});
      }

            componentDidMount() {

      this.syncing()


    }  

    syncing = () => {
        this.ref = rebase.syncState(`users/${this.props.user}/plants/${this.props.number}/observation/${this.props.index.index}`, {
            context: this,
            state: 'observationUpdate',
            asArray: true,
        });
    } 

    onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
          let reader = new FileReader();
          reader.onload = (e) => {
              this.setState({image: e.target.result,
              newimage: e.target.result});
          };
          reader.readAsDataURL(event.target.files[0]);
      }
  }


    render(){

    return(

        
                <div className="box col mx-2">
                <div onClick={this.toggle}>Edit</div>

                            <Modal id="observation" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <div>
                            <img src={this.state.image} alt="" width="10%" height="10%"/>
                            <div><label htmlFor="file-upload" className="custom-file-upload">
    <i className="fa fa-cloud-upload"></i> Edit
</label>
<input id="file-upload" type="file" onChange={this.onImageChange.bind(this)} />
<img id="target" src={this.state.newimage} alt="" width="10%" height="10%"/>
</div>
                            <div onClick={this.deleteImage}>Delete</div>
                            <div>How is your {this.props.name} doing?  Record your observations here.</div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Did you water the plant?
                    <textarea value={this.state.valueWater} onChange={this.handleChangeWater} className="observationModal mx-auto"></textarea>
                    </label>
                    <label>
                    Did you Fertilize the plant?
                    <textarea value={this.state.valueFertilizer} onChange={this.handleChangeFertilizer} className="observationModal mx-auto"></textarea>
                    </label>
                    <input type="submit" value="Submit" onClick={this.closeModal}/>
                </form>
                </div>
                            </Modal>
                    </div>

    )} 
  }


export default EditObservation;