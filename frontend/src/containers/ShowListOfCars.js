import React from 'react';
import CarCard from '../components/CarCard'

export default class ShowListOfCars extends React.Component {
  render(){
    return(
      <div className="ui five column grid">
        <div className="row">
          {this.props.cars.map(car => <CarCard car={car} handleShowCar={this.props.handleShowCar}/>)}
        </div>
      </div>
    )
  }
}