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
          valueDate: [this.props.x.x.valueDate],
          valueSunlight: [this.props.x.x.valueSunlight],
          valueTemperature: [this.props.x.x.valueTemperature],
          valueObservations: [this.props.x.x.valueObservations],
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
            valueDate: this.props.x.x.valueDate,
            valueSunlight: this.props.x.x.valueSunlight,
            valueTemperature: this.props.x.x.valueTemperature,
            valueObservations: this.props.x.x.valueObservations,
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
        console.log(event.target.value);
      }
      handleChangeFertilizer = (event) => {
        this.setState({valueFertilizer: event.target.value});
        console.log(event.target.value);
      }

      handleChangeDate = (event) => {
        this.setState({valueDate: event.target.value});
        console.log(event.target.value);
      }

      handleChangeSunlight = (event) => {
        this.setState({valueSunlight: event.target.value});
        console.log(event.target.value);
      }

      handleChangeTemperature = (event) => {
        this.setState({valueTemperature: event.target.value});
        console.log(event.target.value);
      }

      handleChangeObservations = (event) => {
        this.setState({valueObservations: event.target.value});
        console.log(event.target.value);
      }
      handleSubmit = (event) => {
        let observationInfo = {
          valueWater: this.state.valueWater,
          valueFertilizer: this.state.valueFertilizer,
          valueDate: this.state.valueDate,
          valueSunlight: this.state.valueSunlight,
          valueTemperature: this.state.valueTemperature,
          valueObservations: this.state.valueObservations,
          image: this.state.image
    }

        this.setState({observationUpdate: observationInfo,
             image: '', 
     valueWater: '', 
     valueDate: '', 
     valueFertilizer: '', 
     valueTemperature: '',
     valueSunlight: '',
     valueObservations: ''     });
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

        
                <div>
                <div className="editButton" onClick={this.toggle}>View</div>

                            <Modal id="observation" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <div className="plantDetailScroll">

                            
                            
                <form onSubmit={this.handleSubmit}>
                <label className="mt-4">
                    Today's Date:                    </label> <br/>
                    <input value={this.state.valueDate} onChange={this.handleChangeDate} className="inputDate" type="text" name="name"/>
                    <div className="how text-center">How are your {this.props.name} doing?</div>
                    <div><label htmlFor="file-upload" className="custom-file-upload text-center">
    <i className="fa fa-cloud-upload center"></i> Edit Picture
</label>
<input id="file-upload" type="file" onChange={this.onImageChange.bind(this)} />
<br/><img id="target" className="previewPic" width="45%" src={this.state.image} alt=""/>
</div>
<div className="deleteImage" onClick={this.deleteImage}>Delete</div>
                  <label>
                    Did you add water Today the {this.props.name} today?
                    <input value={this.state.valueWater} onChange={this.handleChangeWater} className="inputVal" type="text" name="name"/>
                    </label>
                    <label> 
                    Did you add fertilizer to the {this.props.name} today?
                    <input value={this.state.valueFertilizer} onChange={this.handleChangeFertilizer} className="inputVal" type="text" name="name"/>
                    </label>
                    <label>
                    Is the temperature outside today good for {this.props.name}?
                    <input value={this.state.valueTemperature} onChange={this.handleChangeTemperature} className="inputVal" type="text" name="name"/>
                    </label>
                    <label>
                    Are the {this.props.name} getting enough sunlight?
                    <input value={this.state.valueSunlight} onChange={this.handleChangeSunlight} className="inputVal" type="text" name="name"/>
                    </label>
                    <label>
                    Write more about your {this.props.name} here.
                    <textarea value={this.state.valueObservations} onChange={this.handleChangeObservations} className="observationModal"></textarea>
                    </label>
                    <input className="submitStyle" type="submit" value="Submit" onClick={this.closeModal}/>
                </form>
                </div>
                            </Modal>
                    </div>

    )} 
  }


export default EditObservation;