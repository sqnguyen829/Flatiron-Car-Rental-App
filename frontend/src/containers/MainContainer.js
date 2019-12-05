import React from 'react';
import AfterLoginContainer from './AfterLoginContainer'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import StartLogin from '../components/StartLogin'
import  AddCarForm from '../components/AddCarForm'

export default class MainContainer extends React.Component {
  
  render(){
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/flatironrental" component={AfterLoginContainer} history={this.props.history}/>
    {/* <Route  path="/flatironrental/cars/new" component={(routerProps)=><AddCarForm {...routerProps}/> } /> */}

            <Route exact path="/" component={StartLogin} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}