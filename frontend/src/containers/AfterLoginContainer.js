import React from 'react';
import {Route, Switch} from 'react-router-dom'
import NavBar from '../components/NavBar'
import CurrentUserInfo from '../components/CurrentUserInfo'
import ShowListOfCar from './ShowListOfCars'
import UserOwnedCars from './UserOwnedCars'
import UserRentedCars from './UserRentedCars'
import AddCarForm from '../components/AddCarForm'
import ShowCarDetails from '../components/ShowCarDetails'

export default class AfterLoginContainer extends React.Component {
  state = { 
    cars: [],
    displayCars:[],
    ownerCars: [],
    rentedCars:[]
  } 

  componentDidMount() {
    this.fetchCars()
  }

  fetchCars = () => {
    fetch("http://localhost:3000/api/v1/cars/", {
      method: "GET",
      headers:{
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(carsData=>{
      this.setState({
        cars:carsData,
        displayCars:carsData,
        ownerCars: carsData.filter(car=> car.user_id == localStorage.id)
      })
    })
  }

  updateCar=(car)=>{
    this.setState({
      displayCars:[...this.state.displayCars, car ],
      ownerCars:[...this.state.ownerCars, car]
    })
  }

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
            {console.log(this.state.displayCars)}
              <div>
                <Switch>
                  <Route exact path="/flatironrental/cars" component={()=><ShowListOfCar cars={this.state.displayCars}/>}/>
                  <Route  path="/flatironrental/cars/owned" component={()=><UserOwnedCars cars={this.state.ownerCars}/>}/>
                  <Route  path="/flatironrental/cars/rented" component={()=><UserRentedCars />}/>
                  <Route  path="/flatironrental/cars/new" component={(routerProps)=><AddCarForm {...routerProps} updateCar={this.updateCar}/>}/>
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