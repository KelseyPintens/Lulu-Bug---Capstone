import React, { Component } from 'react';
import '../App.css';
import { Modal } from 'reactstrap';
import { rebase } from '../FirebaseKey';

class EditObservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          observations: [this.props.x.x.entry],
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
        console.log("this is x", this.props.x)

      }

      closeModal = () => {
        this.setState({modal: false});
      }

      handleChange = (event) => {
        this.setState({observations: event.target.value});
        console.log(event.target.value)
        event.preventDefault();
      }

      handleSubmit = (event) => {
        let observationInfo = {
          entry: this.state.observations,
          image: this.state.image
    }

        this.setState({observationUpdate: observationInfo,
            });
               event.preventDefault(); 
      }

      delete = () => {
        this.setState({observations: ''});
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
                <form onSubmit={this.handleSubmit}>
                    <label>
                    How is your {this.props.name} doing?  Record your observations here.
                    <textarea value={this.state.observations} onChange={this.handleChange} className="observationModal mx-auto"></textarea>
                    </label>
                    <div onClick={this.delete}>Delete</div>
                    <input type="submit" value="Submit" onClick={this.closeModal}/>
                </form>
                </div>
                            </Modal>
                    </div>

    )} 
  }


export default EditObservation;