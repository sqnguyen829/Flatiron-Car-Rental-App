import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from '../components/NavBar'
import CurrentUserInfo from '../components/CurrentUserInfo'
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
            <NavBar history={this.props.history}/>
            <CurrentUserInfo/>
              <div>
                <Switch>
                  <Route exact path="/flatironrental/cars" component={()=><ShowListOfCar/>}/>
                  <Route  path="/flatironrental/cars/owned" component={()=><UserOwnedCars/>}/>
                  <Route  path="/flatironrental/cars/rented" component={()=><UserRentedCars/>}/>
                  <Route  path="/flatironrental/cars/new" component={(routerProps)=><AddCarForm {...routerProps}/>}/>
                </Switch>
              </div>
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