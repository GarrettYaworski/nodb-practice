import React, { Component } from "react";
import axios from 'axios';
import AddCarForm from "./Components/addCarForm/AddCarForm";
import './App.css'
class App extends Component {
  constructor(){
    super();

    this.state = {
      cars: [],
      showAddForm: false,
      carName: '',
    }
  }

  componentDidMount(){
    axios.get('/api/cars')
    .then(({ data }) => this.setState({ cars: data }))
    .catch((err) => console.log(err))
  }

  updateCars = (cars) => {
    this.setState({ cars })
  }

  updateCarNameState = (e) => {
    this.setState({ carName: e.target.value })
  }

  updateCarRequest = (id) => {
    axios.put(`/api/cars/${id}/${this.state.carName}`)
    .then(({ data }) => this.setState({ cars: data }))
    .catch((err) => console.log(err))
  }

  handleDelete = (id) => {
    axios.delete(`/api/cars?deleteId=${id}`)
    .then(({ data }) => this.setState({ cars: data }))
    .catch((err) => console.log(err))
  }

  render(){
    return(
      <div>
        {this.state.cars.map((car) => {
          return (
            <div className="car-container">
              <div className="car">{car.name}</div>
              <div>
                <button onClick={() => this.handleDelete(car.id)}>DELETE ME</button>
              </div>
              <input onChange={this.updateCarNameState}/> 
              <button onClick={() => this.updateCarRequest(car.id)}>change my name!</button>
            </div>
          )
        })}
        {
          this.state.showAddForm ?
          <AddCarForm updateCars={this.updateCars}/> :
          <button onClick={() => this.setState({ showAddForm: true })}>Populate Form</button>
        }
      </div>
    )
  }
}

export default App;