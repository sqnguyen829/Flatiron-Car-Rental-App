import React from 'react';
import CarCard from '../components/CarCard'

export default class UserOwnCars extends React.Component {
  render(){
    return(
      <div>
          UserOwnCar
          <CarCard car ={car}/>
      </div>
    )
  }
}