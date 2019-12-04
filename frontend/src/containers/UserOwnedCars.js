import React from 'react';
import CarCard from '../components/CarCard'

export default class UserOwnedCars extends React.Component {
  render(){
    return(
      <div className="ui three column grid">
        <div className="row">
          {this.props.cars? this.props.cars.map(car => <CarCard car={car}/>): <h1>You don't own any cars...</h1>}
        </div>
      </div>
    )
  }
}