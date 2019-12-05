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
    rentingList: [],
    rentedCars:null,
    showCar:null
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
        ownerCars: carsData.filter(car=> car.user_id === localStorage.id)
      })
    })

    fetch(`http://localhost:3000/api/v1/users/${localStorage.id}`,{
      method: "GET",
      headers:{
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(res=> res.json())
    .then(userRentedCars=>{
      this.setState({
        rentedCars: userRentedCars
      })
    })

    fetch(`http://localhost:3000/api/v1/renting_cars`,{
      method: "GET",
      headers:{
        Authorization: `Bearer ${localStorage.token}`
      }
    })
    .then(res=> res.json())
    .then(rentList=>{
      this.setState({
        rentingList: rentList
      })
    })
  }

  updateCar=(car)=>{
    this.setState({
      displayCars:[...this.state.displayCars, car ],
      ownerCars:[...this.state.ownerCars, car]
    })
  }

  handleShowCar= (car) =>{
    this.setState({
      showCar:car
    })
    this.props.history.push(`/flatironrental/cars/${car.id}`)
  }

  handleRentCar = (e) =>{
    e.preventDefault()

    fetch(`http://localhost:3000/api/v1/renting_cars/`,{
      method: 'Post',
      headers:{
        'Accept': 'application/json',
        Authorization: `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "rentingCar":{
          user_id:localStorage.id,
          car_id:this.state.showCar.id,
          start_date:e.target[0].value,
          end_date: e.target[1].value,
          //for now cost is default to 1000
          cost:1000
        }
      })
    })
    .then(res => res.json())
    .then(data=> {
      this.setState({
        rentedCars:[...this.state.rentedCars,data]
      })
    })

    fetch(`http://localhost:3000/api/v1/cars/${this.state.showCar.id}`,{
      method:'PATCH',
      headers:{
        'Accept': 'application/json',
        Authorization: `Bearer ${localStorage.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        availible:false
      })
    })
    this.props.history.push(`/flatironrental/cars/`)
  }

  updateRentalCar = () =>{
    console.log("update rental")
  }

  redirectToLogin = () => {
    this.props.history.push('/login')
  }

  handleRemoveCar = (carinfo) =>{
    let rentingCar = this.state.rentingList.find(rental => rental.id == carinfo.id)
    console.log(this.state.rentingList)
    console.log(rentingCar? rentingCar.id:"cant find id")
    if(rentingCar){
      fetch(`http://localhost:3000/api/v1/renting_cars/${rentingCar.id}`,{
        method:"DELETE",
        headers:{
          Authorization: `Bearer ${localStorage.token}`
        }
      },
        this.setState({
        rentedCars: this.state.rentedCars.filter(car => car.id !== carinfo.id)
        })
      )
    }
  }

  render(){
   
    return(
      <div>
        {localStorage.token?
          <div>
            <NavBar history={this.props.history}/>
            <CurrentUserInfo/>
            {console.log(this.state.rentingList)}
              <div>
                <Switch>
                  <Route exact path="/flatironrental/cars" component={()=><ShowListOfCar cars={this.state.displayCars} handleShowCar={this.handleShowCar}/>}/>
                  <Route  path="/flatironrental/cars/owned" component={()=><UserOwnedCars cars={this.state.ownerCars}/>}/>
                  <Route  path="/flatironrental/cars/rented" component={()=><UserRentedCars cars={this.state.rentedCars} handleRemoveCar={this.handleRemoveCar}/>}/>
                  <Route path= {`/flatironrental/cars/${this.state.showCar? this.state.showCar.id:''}`} component={()=><ShowCarDetails car={this.state.showCar} handleRentCar={this.handleRentCar}/>}/>
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