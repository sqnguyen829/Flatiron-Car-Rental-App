import React from 'react';
import CarCard from '../components/CarCard'

export default class ShowListOfCars extends React.Component {
  render(){
    return(
        // <div className="ui four column grid">
    	// 	<div className="row"></div>
      <div>
    
          {this.props.cars.map(car => <CarCard {...car}/>)}


      </div>
    )
  }
}