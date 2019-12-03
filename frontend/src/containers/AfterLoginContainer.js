import React from 'react';
import NavBar from '../components/NavBar'
import CurrentUserinfo from '../components/CurrentUserInfo'
import ShowListOfCar from './ShowListOfCars'
import UserOwnedCars from './UserOwnedCars'
import UserRentedCars from './UserRentedCars'
import AddCarForm from '../components/AddCarForm'
import ShowCarDetails from '../components/ShowCarDetails'

export default class AfterLoginContainer extends React.Component {
  state =  { cars: [],
             ownerCars: [],
             rentedCars:[],
             user:[steven]} 
    
  componentDidMount() {
  
    fetch("http://localhost:3001/api/v1/cars")
      .then(res => res.json())
      .then(cars => {
        this.setState({
          cars
        },()=> console.log(this.state.cars))
      })
      .then(console.log(this.state.cars))
    }
  
  render(){
   
    return(
      <div>
       
        
          <NavBar/>
          <CurrentUserinfo/>
          <AddCarForm/>

          <ShowListOfCar cars={this.state.cars}/>
          <UserOwnedCars cars = {this.state.ownerCars( car => car.user == user )}/>
          
          
          <UserRentedCars/>
          <ShowCarDetails/>
      </div>
    )
  }
}