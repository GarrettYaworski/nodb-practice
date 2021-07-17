import React, { Component } from "react";
import axios from 'axios';
import AddCarForm from "./Components/addCarForm/AddCarForm";
import CarList from "./Components/CarList/CarList";
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
        <CarList cars={this.state.cars} />
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