import React from 'react';
import NavBar from '../components/NavBar'
import CurrentUserinfo from '../components/CurrentUserInfo'
import ShowListOfCar from './ShowListOfCars'
import UserOwnedCars from './UserOwnedCars'
import UserRentedCars from './UserRentedCars'
import AddCarForm from '../components/AddCarForm'
import ShowCarDetails from '../components/ShowCarDetails'

export default class AfterLoginContainer extends React.Component {
  render(){
    return(
      <div>
          AfterLoginContainer
          <NavBar/>
          <CurrentUserinfo/>
          <AddCarForm/>

          <ShowListOfCar/>
          <ShowCarDetails/>

          <UserOwnedCars/>
          <ShowCarDetails/>
          
          <UserRentedCars/>
          <ShowCarDetails/>
      </div>
    )
  }
}