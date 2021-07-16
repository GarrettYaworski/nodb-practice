import React from 'react'
import axios from 'axios'

export default class AddCarForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            carname: '',
        }
    }

    handlenameInput = (e) => this.setState({carname: e.target.value})

    submitNewCar = () => {
        const body = { name: this.state.carname };

        axios.post('/api/cars', body)
        .then(res => this.props.updateCars(res.data))
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <input onChange={this.handlenameInput}/>
                <button onClick={this.submitNewCar}>Add Car!</button>
            </div>
        )
    }
    
}