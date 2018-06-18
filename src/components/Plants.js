import React, { Component } from 'react';
import '../App.css';
import plantLabel from '../images/luluLabel.png';
import { Modal } from 'reactstrap';
import { rebase } from '../FirebaseKey';
import PlantModal from './PlantModal';


class Plant extends Component {
    // constructor(props) {
    //     super(props);
        // this.
        state = {
          modal: false,
          modalState: [],
          plant: []
        };


    // sync state
    componentDidMount() {

        this.syncing()
    }  


    syncing = () => {
        console.log("I AM SYNCING")
        this.ref = rebase.syncState(`users/${this.props.user}/plants`, {
            context: this,
            state: 'plant',
            asArray: true,
        });
    }  

    
      toggle = (e) => {
        this.setState({modal: !this.state.modal})
        console.log("object",this.props.plantState[0].name)
        console.log("e", e.currentTarget.id)

        if (e.currentTarget.id !== '') {
            console.log("plant",this.props.plantState[e.currentTarget.id].name)
        let plantInfo = {
        name: this.props.plantState[e.currentTarget.id].name,
        water: this.props.plantState[e.currentTarget.id].water,
        fertilizer: this.props.plantState[e.currentTarget.id].fertilizer,
        sunlight: this.props.plantState[e.currentTarget.id].sunlight,
        temperature: this.props.plantState[e.currentTarget.id].temperature,
        image: this.props.plantState[e.currentTarget.id].image,
        number: e.currentTarget.id }

        this.setState({
            // modalState: this.state.modalState.concat([plantInfo]),
            modalState: plantInfo
        })
    }else{
            this.setState({
                modalState: []
            }, ()=>{
                console.log("here is a state", this.state.plant)
            })
        }
        
      }

      removePeople = (e) => {
        console.log("remove state", e.target.id)
        var array = [...this.state.plant]; // make a separate copy of the array
        var index = e.target.id;
        array.splice(index, 1);
        console.log("array above", array)
        this.setState({plant: array, modal: false});
      }

      
    render() {

        return (
            <div >
                {this.props.plantState.map((x,index) => (

                                    
                    <div id={index} onClick={this.toggle}  className="box col-3 mx-2" key={index}>
                        <img src={plantLabel} alt="" width="130%"/>
                        <div id="example">
                        <img className="plantImage" src={require(`../images/${x.image}.png`)} alt=""/>
                        <div className="col">
                            <p>{x.name}</p>
                        </div>
                        </div>

                    </div>        
                ))}
                     <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>

                    <div className="box col mx-2">
                       <PlantModal user={this.props.user} modalProp={this.state.modal} plantProp={this.state.plant} plantInfo={this.state.modalState} removePeople={this.removePeople}/>

                    </div>        
                    </Modal> 
            </div>
        );
    }
}


export default Plant;