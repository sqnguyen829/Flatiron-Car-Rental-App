import React from 'react';
import CarCard from '../components/CarCard'

export default class ShowListOfCars extends React.Component {
  render(){
    return(
      <div className="ui three column grid">
        <div className="row">
          {this.props.cars.map(car => <CarCard car={car}/>)}
        </div>
      </div>
    )
  }
}