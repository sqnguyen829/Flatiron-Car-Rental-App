import React from 'react';
import NavBar from '../components/NavBar'
import CurrentUserinfo from '../components/CurrentUserInfo'
import ShowListOfCar from './ShowListOfCars'
import UserOwnedCars from './UserOwnedCars'
import UserRentedCars from './UserRentedCars'
import AddCarForm from '../components/AddCarForm'
import ShowCarDetails from '../components/ShowCarDetails'

export default class AfterLoginContainer extends React.Component {
  redirectToLogin = () => {
    this.props.history.push('/login')
  }
  render(){
    return(
      <div>
        {localStorage.token?
          <div>
            <NavBar/>
            {/* <CurrentUserinfo/>
            <AddCarForm/>

            <ShowListOfCar/>
            <ShowCarDetails/>

            <UserOwnedCars/>
            <ShowCarDetails/>
          
            <UserRentedCars/>
            <ShowCarDetails/> */}
          </div>
          :
          <div>
            <h1>Please Login First.</h1>
            <button onClick={()=>this.redirectToLogin()}>Head to login page.</button>
          </div>
        }
      </div>
    )
  }
}