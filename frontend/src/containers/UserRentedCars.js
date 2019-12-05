import React from 'react';
import CarCard from '../components/CarCard'

export default class UserRentedCars extends React.Component {
  render(){
    console.log("in user rented car")
    console.log(this.props.cars)
    return(
      <div className="ui three column grid">
        <div className="row">
          {this.props.cars? this.props.cars.map(car=><CarCard car={car} handleRemoveCar={this.props.handleRemoveCar}/>) : <h1>You have not rented any cars.</h1>}
        </div>
      </div>
    )
  }
}