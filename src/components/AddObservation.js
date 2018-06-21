import React, { Component } from 'react';
import '../App.css';
import { Modal } from 'reactstrap';

class AddObservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState({
          modal: !this.state.modal,
        });
      }

      closeModal = () => {
        this.setState({modal: false});
      }


    render(){

    return(

        
                <div>
                <div className="addJournal" onClick={this.toggle}>Add to Journal</div>

                            <Modal id="observation" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                            <div className="plantDetailScroll">

                <form onSubmit={this.props.handleSubmit}>
                    <label className="mt-4">
                    Today's Date:                    </label> <br/>
                    <input value={this.props.valueDate} onChange={this.props.handleChangeDate} className="inputDate" type="text" name="name"/>
                    <div className="how text-center">How are your {this.props.name} doing?</div>
                    <div><label htmlFor="file-upload" className="custom-file-upload text-center">
    <i className="fa fa-cloud-upload center"></i> Add Picture
</label>
<input id="file-upload" type="file" onChange={this.props.onImageChange.bind(this)} />
<br/><img id="target" className="previewPic" width="45%" src={this.props.image} alt=""/>
</div>
                    <label>
                    Did you add water to the {this.props.name} today?
                    <input value={this.props.valueWater} onChange={this.props.handleChangeWater} className="inputVal" type="text" name="name"/>
                    </label>
                    <label> 
                    Did you add fertilize to the {this.props.name} today?
                    <input value={this.props.valueFertilizer} onChange={this.props.handleChangeFertilizer} className="inputVal" type="text" name="name"/>
                    </label>
                    <label>
                    Is the temperature outside today good for {this.props.name}?
                    <input value={this.props.valueTemperature} onChange={this.props.handleChangeTemperature} className="inputVal" type="text" name="name"/>
                    </label>
                    <label>
                    Are the {this.props.name} getting enough sunlight?
                    <input value={this.props.valueSunlight} onChange={this.props.handleChangeSunlight} className="inputVal" type="text" name="name"/>
                    </label>
                    <label>
                    Write more about your {this.props.name} here.
                    <textarea value={this.props.valueObservations} onChange={this.props.handleChangeObservations} className="observationModal"></textarea>
                    </label>
                    <input className="submitStyle" type="submit" value="Submit" onClick={this.closeModal}/>
                </form>
                </div>
                            </Modal>
                    </div>

    )} 
  }


export default AddObservation;